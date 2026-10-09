import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['tab', 'pane']

  declare readonly tabTargets: HTMLElement[]
  declare readonly paneTargets: HTMLElement[]

  switchTab(event: Event): void {
    const button = event.currentTarget as HTMLElement
    const panelId = button.dataset.panelId
    if (!panelId) return

    this.tabTargets.forEach((el) => {
      const selected = el.dataset.panelId === panelId
      el.classList.toggle('is-active', selected)
      el.setAttribute('aria-selected', selected ? 'true' : 'false')
    })
    this.paneTargets.forEach((el) => {
      el.classList.toggle('is-active', el.dataset.panelId === panelId)
    })
  }
}
