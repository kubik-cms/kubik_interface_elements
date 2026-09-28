import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['section', 'untagged']

  declare readonly sectionTarget: HTMLElement
  declare readonly untaggedTarget: HTMLInputElement

  connect(): void {
    this.syncDisabled()
  }

  syncDisabled(): void {
    const disabled = this.untaggedTarget.checked
    this.element.classList.toggle('kubik-interface-filters__field--tags-filter-disabled', disabled)
    // Visual-only disable (CSS). Do not set input.disabled — disabled fields are
    // omitted from GET filter submissions and tag selections would be lost when
    // turning off "Untagged only".
  }
}
