import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    delay: { type: Number, default: 400 }
  }

  declare delayValue: number

  private timer: ReturnType<typeof setTimeout> | null = null

  schedule (): void {
    if (this.timer) clearTimeout(this.timer)
    this.timer = setTimeout(() => this.submit(), this.delayValue)
  }

  disconnect (): void {
    if (this.timer) clearTimeout(this.timer)
  }

  private submit (): void {
    const form = this.element.closest('form')
    if (form && typeof form.requestSubmit === 'function') {
      form.requestSubmit()
    }
  }
}
