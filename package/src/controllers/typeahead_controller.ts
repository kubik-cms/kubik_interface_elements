import { Controller } from '@hotwired/stimulus'

type TypeaheadOption = { label: string; value: string }

export default class extends Controller {
  static targets = ['input', 'resultsList', 'feedback']
  static classes = ['activeResult', 'open']
  static values = {
    src: { type: String, default: '' },
    options: { type: Array, default: [] },
    minLength: { type: Number, default: 1 },
    debounceMs: { type: Number, default: 200 },
    maxResults: { type: Number, default: 20 },
    paramName: { type: String, default: 'q' },
    excludeValues: { type: Array, default: [] },
    resultActive: { type: Number, default: NaN }
  }

  declare readonly inputTarget: HTMLInputElement
  declare readonly resultsListTarget: HTMLElement
  declare readonly hasFeedbackTarget: boolean
  declare readonly feedbackTarget: HTMLElement
  declare readonly hasActiveResultClass: boolean
  declare readonly activeResultClass: string
  declare readonly hasOpenClass: boolean
  declare readonly openClass: string

  declare srcValue: string
  declare optionsValue: unknown[]
  declare minLengthValue: number
  declare debounceMsValue: number
  declare maxResultsValue: number
  declare paramNameValue: string
  declare excludeValuesValue: string[]
  declare resultActiveValue: number

  private debounceTimer: ReturnType<typeof setTimeout> | null = null
  private fetchAbort: AbortController | null = null
  private filteredOptions: TypeaheadOption[] = []
  private resultElements: HTMLElement[] = []
  private readonly onResultsMouseDownHandler = (event: MouseEvent): void => this.onResultsMouseDown(event)

  connect (): void {
    this.resultsListTarget.addEventListener('mousedown', this.onResultsMouseDownHandler)
    this.inputTarget.setAttribute('role', 'combobox')
    this.inputTarget.setAttribute('aria-autocomplete', 'list')
    this.inputTarget.setAttribute('aria-expanded', 'false')
    this.close()
  }

  disconnect (): void {
    this.resultsListTarget.removeEventListener('mousedown', this.onResultsMouseDownHandler)
    this.clearDebounce()
    this.abortFetch()
  }

  onInput (): void {
    this.clearDebounce()
    if (this.debounceMsValue <= 0) {
      this.refreshResults()
      return
    }
    this.debounceTimer = setTimeout(() => this.refreshResults(), this.debounceMsValue)
  }

  onFocus (): void {
    if (this.queryMeetsMinLength() && this.resultElements.length > 0) {
      this.open()
    }
  }

  excludeValuesValueChanged (): void {
    if (this.queryMeetsMinLength()) {
      this.refreshResults()
    }
  }

  onBlur (): void {
    window.setTimeout(() => {
      if (!this.element.contains(document.activeElement)) {
        this.close()
      }
    }, 150)
  }

  keydown (event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
        if (this.resultElements.length === 0 && this.queryMeetsMinLength()) {
          this.refreshResults()
        }
        if (this.resultElements.length > 0) {
          event.preventDefault()
          this.moveActive(1)
        }
        break
      case 'ArrowUp':
        if (this.resultElements.length > 0) {
          event.preventDefault()
          this.moveActive(-1)
        }
        break
      case 'Enter':
        if (!Number.isNaN(this.resultActiveValue) && this.resultElements[this.resultActiveValue]) {
          event.preventDefault()
          this.selectResult(this.resultElements[this.resultActiveValue])
        }
        break
      case 'Escape':
        event.preventDefault()
        this.close()
        break
      default:
        break
    }
  }

  resultActiveValueChanged (): void {
    this.resultElements.forEach((result) => {
      if (this.hasActiveResultClass) result.classList.remove(this.activeResultClass)
    })
    if (!Number.isNaN(this.resultActiveValue) && this.resultElements[this.resultActiveValue]) {
      if (this.hasActiveResultClass) {
        this.resultElements[this.resultActiveValue].classList.add(this.activeResultClass)
      }
      this.inputTarget.setAttribute('aria-activedescendant', this.resultElements[this.resultActiveValue].id)
    } else {
      this.inputTarget.removeAttribute('aria-activedescendant')
    }
  }

  private onResultsMouseDown (event: MouseEvent): void {
    const target = (event.target as HTMLElement).closest('.kubik-interface-typeahead__option') as HTMLElement | null
    if (!target) return
    event.preventDefault()
    this.selectResult(target)
  }

  private refreshResults (): void {
    if (!this.queryMeetsMinLength()) {
      this.renderResults([])
      return
    }

    const query = this.inputTarget.value.trim()

    if (this.srcValue) {
      this.fetchRemote(query)
    } else {
      this.filteredOptions = this.filterStaticOptions(query)
      this.renderResults(this.filteredOptions)
    }
  }

  private filterStaticOptions (query: string): TypeaheadOption[] {
    const normalized = query.toLowerCase()
    return this.withoutExcluded(
      this.normalizeOptions(this.optionsValue)
        .filter((option) => option.label.toLowerCase().includes(normalized))
    ).slice(0, this.maxResultsValue)
  }

  private normalizeOptions (raw: unknown[]): TypeaheadOption[] {
    return raw.map((entry) => {
      if (typeof entry === 'string') {
        return { label: entry, value: entry }
      }
      if (entry && typeof entry === 'object') {
        const object = entry as Record<string, string>
        const label = object.label || object.name || object.value || ''
        const value = object.value || object.label || object.name || ''
        return { label: String(label), value: String(value) }
      }
      return { label: '', value: '' }
    }).filter((option) => option.label !== '')
  }

  private withoutExcluded (options: TypeaheadOption[]): TypeaheadOption[] {
    if (this.excludeValuesValue.length === 0) return options
    const excluded = new Set(
      this.excludeValuesValue.map((value) => value.toLowerCase().trim()).filter((value) => value !== '')
    )
    return options.filter((option) => {
      const value = option.value.toLowerCase().trim()
      const label = option.label.toLowerCase().trim()
      return !excluded.has(value) && !excluded.has(label)
    })
  }

  private fetchRemote (query: string): void {
    this.abortFetch()
    this.fetchAbort = new AbortController()
    const url = new URL(this.srcValue, window.location.origin)
    url.searchParams.set(this.paramNameValue, query)

    if (this.hasFeedbackTarget) {
      this.feedbackTarget.textContent = 'Loading...'
    }

    fetch(url.toString(), {
      headers: { Accept: 'application/json' },
      signal: this.fetchAbort.signal
    })
      .then((response) => response.json())
      .then((payload) => {
        const list = Array.isArray(payload) ? payload : []
        this.filteredOptions = this.withoutExcluded(this.normalizeOptions(list)).slice(0, this.maxResultsValue)
        this.renderResults(this.filteredOptions)
        if (this.hasFeedbackTarget) {
          this.feedbackTarget.textContent = ''
        }
      })
      .catch(() => {
        if (this.hasFeedbackTarget) {
          this.feedbackTarget.textContent = ''
        }
        this.renderResults([])
      })
  }

  private renderResults (options: TypeaheadOption[]): void {
    this.resultsListTarget.innerHTML = ''
    this.resultElements = []
    this.resultActiveValue = NaN

    options.forEach((option, index) => {
      const item = document.createElement('li')
      item.id = `${this.inputTarget.id || 'typeahead'}_option_${index}`
      item.className = 'kubik-interface-typeahead__option'
      item.dataset.index = String(index)
      item.dataset.value = option.value
      item.dataset.label = option.label
      item.setAttribute('role', 'option')
      item.textContent = option.label
      item.addEventListener('mouseover', () => {
        this.resultActiveValue = index
      })
      item.addEventListener('mouseout', () => {
        this.resultActiveValue = NaN
      })
      this.resultsListTarget.appendChild(item)
      this.resultElements.push(item)
    })

    if (options.length > 0) {
      this.open()
    } else {
      this.close()
    }
  }

  private selectResult (element: HTMLElement): void {
    const value = element.dataset.value || ''
    const label = element.dataset.label || value
    this.inputTarget.value = ''
    this.close()
    this.element.dispatchEvent(new CustomEvent('kubik-typeahead:select', {
      bubbles: true,
      detail: { value, label }
    }))
  }

  private moveActive (direction: number): void {
    if (this.resultElements.length === 0) return
    if (Number.isNaN(this.resultActiveValue)) {
      this.resultActiveValue = direction > 0 ? 0 : this.resultElements.length - 1
      return
    }
    const next = this.resultActiveValue + direction
    if (next < 0) {
      this.resultActiveValue = this.resultElements.length - 1
    } else if (next >= this.resultElements.length) {
      this.resultActiveValue = 0
    } else {
      this.resultActiveValue = next
    }
  }

  private open (): void {
    if (this.hasOpenClass) this.element.classList.add(this.openClass)
    this.element.classList.add('kubik-interface-typeahead--open')
    this.inputTarget.setAttribute('aria-expanded', 'true')
  }

  private close (): void {
    if (this.hasOpenClass) this.element.classList.remove(this.openClass)
    this.element.classList.remove('kubik-interface-typeahead--open')
    this.inputTarget.setAttribute('aria-expanded', 'false')
    this.resultActiveValue = NaN
    this.resultsListTarget.innerHTML = ''
    this.resultElements = []
  }

  private queryMeetsMinLength (): boolean {
    return this.inputTarget.value.trim().length >= this.minLengthValue
  }

  private clearDebounce (): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer)
      this.debounceTimer = null
    }
  }

  private abortFetch (): void {
    if (this.fetchAbort) {
      this.fetchAbort.abort()
      this.fetchAbort = null
    }
  }
}
