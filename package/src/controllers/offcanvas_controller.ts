import { Controller } from '@hotwired/stimulus'

const OFFCANVAS_FRAME_ID = 'kubik_offcanvas_frame'

export default class extends Controller {
  offcanvasTemplateTarget: HTMLElement
  offcanvasHeaderValue: string
  offcanvasSrcValue: string
  offcanvasStatusValue: string
  offcanvasPositionValue: string
  offcanvasToneValue: string
  offcanvasHeaderTarget: HTMLElement
  offcanvasFrameTarget: HTMLElement
  offcanvasContainerTarget: HTMLElement
  offcanvasPanelTarget: HTMLElement
  hasOffcanvasHeaderTarget: Boolean
  hasOffcanvasFrameTarget: Boolean
  hasOffcanvasContainerTarget: Boolean
  hasOffcanvasPanelTarget: Boolean

  static targets = [
    'offcanvasTemplate',
    'offcanvasContainer',
    'offcanvasPanel',
    'offcanvasFrame',
    'offcanvasHeader'
  ]

  static values = {
    offcanvasHeader: { type: String, default: '' },
    offcanvasStatus: { type: String, default: 'closed' },
    offcanvasSrc: { type: String, default: '' },
    offcanvasPosition: { type: String, default: 'end' },
    offcanvasTone: { type: String, default: 'grey' }
  }

  initialize (): void {
    document.head.insertAdjacentHTML(
      'beforeend',
      `<template id='kubik-offcanvas-template' data-kubik-offcanvas-target='offcanvasTemplate'>
        <div id='kubik-offcanvas' class='kubik-offcanvas' data-kubik-offcanvas-target='offcanvasContainer' aria-hidden='true'>
          <div class='kubik-offcanvas-backdrop' data-action='click->kubik-offcanvas#closeOffcanvas'></div>
          <div class='kubik-offcanvas-panel kubik-offcanvas-panel--end' data-kubik-offcanvas-target='offcanvasPanel' role='dialog' aria-modal='true'>
            <div class='kubik-offcanvas-header'>
              <div data-kubik-offcanvas-target='offcanvasHeader' class='kubik-offcanvas-title'></div>
              <button type='button' class='kubik-offcanvas-close' aria-label='Close' data-action='click->kubik-offcanvas#closeOffcanvas'>
                <span class='material-symbols-outlined material-icon'>close</span>
              </button>
            </div>
            <div class='kubik-offcanvas-body'>
              <turbo-frame id='${OFFCANVAS_FRAME_ID}' class='kubik-offcanvas-content' data-kubik-offcanvas-target='offcanvasFrame'></turbo-frame>
            </div>
          </div>
        </div>
      </template>`
    )
  }

  connect (): void {
    this._renderDOMElements()
    document.addEventListener('keydown', this.handleKeydown)
    if (this.hasOffcanvasFrameTarget) {
      this.offcanvasFrameTarget.addEventListener('turbo:frame-load', this.handleFrameLoad)
      this.offcanvasFrameTarget.addEventListener('turbo:frame-missing', this.handleFrameMissing)
    }
  }

  disconnect (): void {
    document.removeEventListener('keydown', this.handleKeydown)
    if (this.hasOffcanvasFrameTarget) {
      this.offcanvasFrameTarget.removeEventListener('turbo:frame-load', this.handleFrameLoad)
      this.offcanvasFrameTarget.removeEventListener('turbo:frame-missing', this.handleFrameMissing)
    }
  }

  handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') this.closeOffcanvas()
  }

  handleFrameLoad = (): void => {
    this.clearLoadingState()
  }

  handleFrameMissing = (): void => {
    this.clearLoadingState()
  }

  get offcanvasTemplate (): string {
    return this.offcanvasTemplateTarget.innerHTML
  }

  offcanvasStatusValueChanged (): void {
    if (!this.hasOffcanvasContainerTarget) return

    const open = this.offcanvasStatusValue === 'opened'
    this.offcanvasContainerTarget.classList.toggle('kubik-offcanvas--open', open)
    this.offcanvasContainerTarget.setAttribute('aria-hidden', open ? 'false' : 'true')
    document.body.classList.toggle('kubik-offcanvas-open', open)

    if (this.hasOffcanvasPanelTarget) {
      this.offcanvasPanelTarget.classList.remove(
        'kubik-offcanvas-panel--start',
        'kubik-offcanvas-panel--end'
      )
      const position =
        this.offcanvasPositionValue === 'start' ? 'start' : 'end'
      this.offcanvasPanelTarget.classList.add(`kubik-offcanvas-panel--${position}`)

      this.offcanvasPanelTarget.classList.remove(
        'kubik-offcanvas-panel--tone-white',
        'kubik-offcanvas-panel--tone-grey'
      )
      const tone =
        this.offcanvasToneValue === 'white' ? 'white' : 'grey'
      this.offcanvasPanelTarget.classList.add(`kubik-offcanvas-panel--tone-${tone}`)
    }

    if (!open) this.clearOffcanvasContent()
  }

  offcanvasSrcValueChanged (): void {
    if (!this.hasOffcanvasFrameTarget) return

    if (this.offcanvasSrcValue === '') {
      this.offcanvasFrameTarget.removeAttribute('src')
      this.offcanvasFrameTarget.innerHTML = ''
      return
    }

    this.showLoadingState()
    this.offcanvasFrameTarget.setAttribute('src', this.offcanvasSrcValue)
  }

  offcanvasHeaderValueChanged (): void {
    if (this.hasOffcanvasHeaderTarget) {
      this.offcanvasHeaderTarget.textContent = this.offcanvasHeaderValue
    }
  }

  openOffcanvas (event: Event): void {
    const target = event.currentTarget as HTMLElement
    const src =
      target.getAttribute('src') ||
      target.getAttribute('href') ||
      target.dataset.kubikOffcanvasSrc ||
      ''

    this.offcanvasPositionValue =
      target.dataset.kubikOffcanvasPosition || this.offcanvasPositionValue
    this.offcanvasHeaderValue =
      target.dataset.kubikOffcanvasHeaderText || ''
    this.offcanvasToneValue =
      target.dataset.kubikOffcanvasTone || 'grey'
    this.offcanvasSrcValue = src
    this.offcanvasStatusValue = 'opened'
  }

  closeOffcanvas (): void {
    this.offcanvasStatusValue = 'closed'
    this.offcanvasSrcValue = ''
    this.offcanvasHeaderValue = ''
    this.offcanvasToneValue = 'grey'
  }

  offcanvasFrameTargetDisconnected (): void {
    if (this.offcanvasStatusValue === 'opened') this.closeOffcanvas()
  }

  showLoadingState (): void {
    if (!this.hasOffcanvasFrameTarget) return

    this.offcanvasFrameTarget.innerHTML = `
      <div class="kubik-offcanvas-loading" aria-live="polite" role="status">
        <span class="material-symbols-outlined material-icon kubik-offcanvas-loading__spinner">progress_activity</span>
        <span class="kubik-offcanvas-loading__text">Loading…</span>
      </div>
    `
  }

  clearLoadingState (): void {
    const loading = this.offcanvasFrameTarget?.querySelector('.kubik-offcanvas-loading')
    if (loading) loading.remove()
  }

  clearOffcanvasContent (): void {
    if (!this.hasOffcanvasFrameTarget) return
    this.offcanvasFrameTarget.removeAttribute('src')
    this.offcanvasFrameTarget.innerHTML = ''
  }

  _renderDOMElements (): void {
    if (!document.getElementById('kubik-offcanvas')) {
      document.body.insertAdjacentHTML('beforeend', this.offcanvasTemplate)
    }
  }
}
