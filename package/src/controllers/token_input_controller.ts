import { Controller } from '@hotwired/stimulus'
export default class extends Controller {
  static targets = [
    'fallbackInput',
    'hiddenInput',
    'hiddenArrayContainer',
    'chipList',
    'queryInput'
  ]
  static outlets = ['typeahead']
  static values = {
    multiselect: { type: Boolean, default: true },
    valueFormat: { type: String, default: 'string' },
    separator: { type: String, default: ', ' },
    allowCreate: { type: Boolean, default: true },
    deduplicate: { type: Boolean, default: true },
    autosubmit: { type: Boolean, default: false },
    autosubmitDebounceMs: { type: Number, default: 0 }
  }

  declare readonly hasFallbackInputTarget: boolean
  declare readonly fallbackInputTarget: HTMLInputElement
  declare readonly hasHiddenInputTarget: boolean
  declare readonly hiddenInputTarget: HTMLInputElement
  declare readonly hasHiddenArrayContainerTarget: boolean
  declare readonly hiddenArrayContainerTarget: HTMLElement
  declare readonly chipListTarget: HTMLElement
  declare readonly queryInputTarget: HTMLInputElement
  declare readonly typeaheadOutletElements: HTMLElement[]

  declare multiselectValue: boolean
  declare valueFormatValue: string
  declare separatorValue: string
  declare allowCreateValue: boolean
  declare deduplicateValue: boolean
  declare autosubmitValue: boolean
  declare autosubmitDebounceMsValue: number

  private tokens: string[] = []
  private autosubmitTimer: ReturnType<typeof setTimeout> | null = null
  private enhanced = false
  private readonly onReplaceTags = (event: Event): void => {
    const detail = (event as CustomEvent).detail as { tags?: unknown }
    if (!detail?.tags) return
    this.tokens = this.expandTagList(detail.tags)
    this.renderChips()
    this.syncHiddenFields()
    this.syncTypeaheadExcludeValues()
  }

  private syncTypeaheadExcludeValues (): void {
    if (this.typeaheadOutletElements.length === 0) return
    const payload = JSON.stringify(this.tokens)
    this.typeaheadOutletElements.forEach((element) => {
      element.dataset.kubikTypeaheadExcludeValuesValue = payload
    })
  }

  connect (): void {
    this.enhanced = true
    this.tokens = this.parseInitialValue()
    if (this.hasFallbackInputTarget) {
      this.fallbackInputTarget.classList.add('kubik-interface-token-input__fallback--hidden')
      this.fallbackInputTarget.removeAttribute('name')
    }
    this.renderChips()
    this.syncHiddenFields(false)
    this.syncTypeaheadExcludeValues()
    this.element.addEventListener('kubik-token-input:replace', this.onReplaceTags as EventListener)
  }

  disconnect (): void {
    this.element.removeEventListener('kubik-token-input:replace', this.onReplaceTags as EventListener)
    if (this.autosubmitTimer) clearTimeout(this.autosubmitTimer)
  }

  addFromTypeahead (event: CustomEvent): void {
    const detail = event.detail as { value?: string }
    if (!detail?.value) return
    this.addToken(detail.value)
    this.queryInputTarget.value = ''
    this.queryInputTarget.focus()
  }

  queryKeydown (event: KeyboardEvent): void {
    if (event.key === 'Backspace' && this.queryInputTarget.value === '' && this.tokens.length > 0) {
      this.removeToken(this.tokens.length - 1)
      event.preventDefault()
      return
    }

    if (event.key === 'Enter' && this.allowCreateValue) {
      const value = this.queryInputTarget.value.trim()
      if (value !== '') {
        event.preventDefault()
        event.stopPropagation()
        this.addToken(value)
        this.queryInputTarget.value = ''
      }
    }
  }

  removeChip (event: Event): void {
    const button = event.currentTarget as HTMLElement
    const index = parseInt(button.dataset.index || '-1', 10)
    if (index >= 0) {
      this.removeToken(index)
    }
  }

  private addToken (raw: string): void {
    const parts = raw.split(/[,;]+/).map((part) => part.trim()).filter((part) => part !== '')
    parts.forEach((value) => this.addSingleToken(value))
  }

  private expandTagList (raw: unknown): string[] {
    if (raw == null) return []

    let values: unknown[] = []
    if (Array.isArray(raw)) {
      values = raw
    } else if (typeof raw === 'string') {
      const trimmed = raw.trim()
      if (trimmed.startsWith('[')) {
        try {
          const parsed = JSON.parse(trimmed)
          values = Array.isArray(parsed) ? parsed : [raw]
        } catch {
          values = [raw]
        }
      } else {
        values = [raw]
      }
    } else {
      return []
    }

    return values.reduce<string[]>((acc, entry) => {
      return acc.concat(
        String(entry)
          .split(/[,;]+/)
          .map((part) => part.trim())
          .filter((part) => part !== '')
      )
    }, [])
  }

  private addSingleToken (value: string): void {
    if (value === '') return
    if (this.deduplicateValue && this.tokens.some((token) => token.toLowerCase() === value.toLowerCase())) {
      return
    }
    if (this.multiselectValue) {
      this.tokens.push(value)
    } else {
      this.tokens = [value]
    }
    this.renderChips()
    this.syncHiddenFields()
    this.syncTypeaheadExcludeValues()
  }

  private removeToken (index: number): void {
    this.tokens.splice(index, 1)
    this.renderChips()
    this.syncHiddenFields()
    this.syncTypeaheadExcludeValues()
  }

  private parseInitialValue (): string[] {
    const raw = this.initialRawValue()
    if (raw === '') return []
    return raw.split(',').map((part) => part.trim()).filter((part) => part !== '')
  }

  private initialRawValue (): string {
    if (this.hasHiddenInputTarget && this.hiddenInputTarget.value) {
      return this.hiddenInputTarget.value
    }
    if (this.hasFallbackInputTarget) {
      return this.fallbackInputTarget.value
    }
    return ''
  }

  private renderChips (): void {
    this.chipListTarget.innerHTML = ''
    this.tokens.forEach((token, index) => {
      const chip = document.createElement('span')
      chip.className = 'kubik-interface-token-input__chip'
      chip.textContent = token

      const remove = document.createElement('button')
      remove.type = 'button'
      remove.className = 'kubik-interface-token-input__chip-remove'
      remove.dataset.index = String(index)
      remove.setAttribute('aria-label', `Remove ${token}`)
      remove.setAttribute('data-action', 'click->kubik-token-input#removeChip')
      remove.innerHTML = '<span class="material-symbols-outlined material-icon">close</span>'

      chip.appendChild(remove)
      this.chipListTarget.appendChild(chip)
    })
  }

  private syncHiddenFields (autosubmit = true): void {
    if (this.valueFormatValue === 'array') {
      this.syncArrayHiddenFields()
    } else {
      this.syncStringHiddenField()
    }
    if (autosubmit) {
      this.maybeAutosubmitForm()
    }
  }

  private maybeAutosubmitForm (): void {
    if (!this.autosubmitValue) return
    const delay = this.autosubmitDebounceMsValue
    if (delay > 0) {
      if (this.autosubmitTimer) clearTimeout(this.autosubmitTimer)
      this.autosubmitTimer = setTimeout(() => this.requestFormSubmit(), delay)
      return
    }
    this.requestFormSubmit()
  }

  private requestFormSubmit (): void {
    const form = this.element.closest('form')
    if (form && typeof form.requestSubmit === 'function') {
      form.requestSubmit()
    }
  }

  private syncStringHiddenField (): void {
    const value = this.tokens.join(this.separatorValue)
    if (this.hasHiddenInputTarget) {
      this.hiddenInputTarget.value = value
    }
  }

  private syncArrayHiddenFields (): void {
    if (!this.hasHiddenArrayContainerTarget) return
    const container = this.hiddenArrayContainerTarget
    const baseName = container.dataset.fieldName || ''
    container.innerHTML = ''
    this.tokens.forEach((token) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = baseName
      input.value = token
      container.appendChild(input)
    })
  }

}
