import ModalController from './controllers/modal_controller'
import OffcanvasController from './controllers/offcanvas_controller'
import TypeaheadController from './controllers/typeahead_controller'
import TokenInputController from './controllers/token_input_controller'
import DebouncedFormSubmitController from './controllers/debounced_form_submit_controller'
import FilterTagsSectionController from './controllers/filter_tags_section_controller'
import {
  KUBIK_INTERFACE_STIMULUS_MANIFEST,
  registerKubikInterfaceStimulusControllers
} from './register_stimulus_controllers'

const registerInterfaceElementControllers = function (): void {
  const existing = document.documentElement.getAttribute('data-controller') || ''
  const controllers = new Set([
    ...existing.split(/\s+/).filter(Boolean),
    'kubik-modal',
    'kubik-offcanvas'
  ])
  document.documentElement.setAttribute('data-controller', [...controllers].join(' '))
}

const modalInit = function (): void {
  document.addEventListener('DOMContentLoaded', registerInterfaceElementControllers)
}

const offcanvasInit = modalInit

export {
  ModalController,
  OffcanvasController,
  modalInit,
  offcanvasInit,
  TypeaheadController,
  TokenInputController,
  DebouncedFormSubmitController,
  FilterTagsSectionController,
  KUBIK_INTERFACE_STIMULUS_MANIFEST,
  registerKubikInterfaceStimulusControllers
}
