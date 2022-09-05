import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  modalTemplateTarget: HTMLElement
  modalActionValue: string
  modalReturnPayloadValue: Object
  modalReturnControllerValue: string
  modalHeaderValue: string
  modalSrcValue: string
  modalStatusValue: string
  modalHeaderTarget: HTMLElement
  modalFrameTarget: HTMLElement
  modalContainerTarget: HTMLElement
  hasModalHeaderTarget: Boolean
  hasModalFrameTarget: Boolean
  hasModalContainerTarget: Boolean

  static targets = [
    'modalTemplate',
    'modalContainer',
    'modalFrame',
    'modalHeader'
  ]

  static values = {
    modalHeader: { type: String, default: '' },
    modalStatus: { type: String, default: 'closed' },
    modalSrc: { type: String, default: '' },
    modalAction: { type: String, default: '' },
    modalReturnPayload: { type: Object, default: {} },
    modalReturnController: { type: String, default: '' }
  }

  initialize (): void {
    this._renderDOMElements()
    document.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        this.closeModal()
      }
    })
  }

  connect (): void {}

  get modalTemplate (): string {
    return this.modalTemplateTarget.innerHTML
  }

  selectModal (e: Event): void {
    const target = e.currentTarget as HTMLElement
    if (this.modalActionValue === 'return') {
      const [
        targetControllerName,
        targetControllerId
      ] = this.modalReturnControllerValue.split('#')

      const targetController = this.application.getControllerForElementAndIdentifier(
        document.getElementById(targetControllerId),
        targetControllerName
      )
      // @ts-ignore
      targetController.receiveModalReturn({
        payload: {
          kubik_media_upload_id: parseInt(
            target.dataset.selectedKubikMediaUploadId
          ),
          thumb: target.dataset.selectedThumb
        },
        return_payload: this.modalReturnPayloadValue
      })
      this.closeModal()
    }
  }

  modalStatusValueChanged (): void {
    if (this.hasModalContainerTarget) {
      if (this.modalStatusValue === 'opened') {
        this.modalContainerTarget.classList.add('kubik-modal-element__open')
      } else {
        this.modalContainerTarget.classList.remove('kubik-modal-element__open')
      }
    }
  }

  modalSrcValueChanged (): void {
    if (this.hasModalFrameTarget) {
      if (this.modalSrcValue === '') {
        this.modalFrameTarget.setAttribute('src', this.modalSrcValue)
        this.modalFrameTarget.innerHTML = ''
      } else {
        this.modalFrameTarget.setAttribute('src', this.modalSrcValue)
      }
    }
  }

  modalHeaderValueChanged (): void {
    if (this.hasModalHeaderTarget) {
      this.modalHeaderTarget.innerText = this.modalHeaderValue
    }
  }

  openModal (e: Event): void {
    const target = e.currentTarget as HTMLElement
    this.modalSrcValue = target.getAttribute('src')
    this.modalHeaderValue = target.dataset.kubikModalHeaderText
    this.modalActionValue = target.dataset.kubikModalAction
    this.modalReturnControllerValue =
      target.dataset.kubikModalReturnController
    if (target.dataset.kubikModalReturnPayload) {
      this.modalReturnPayloadValue = JSON.parse(
        target.dataset.kubikModalReturnPayload
      )
    }
    this.modalStatusValue = 'opened'
  }

  closeModal (): void {
    this.modalStatusValue = 'closed'
    this.modalSrcValue = ''
    this.modalHeaderValue = ''
    this.modalActionValue = ''
    this.modalReturnControllerValue = ''
    this.modalReturnPayloadValue = {}
  }

  _renderDOMElements (): void {
    if (!document.getElementById('kubik-modal')) {
      document.body.insertAdjacentHTML('beforeend', this.modalTemplate)
    }
  }
}
