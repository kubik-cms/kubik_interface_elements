import type { Application } from '@hotwired/stimulus'

import ModalController from './controllers/modal_controller'
import OffcanvasController from './controllers/offcanvas_controller'
import TypeaheadController from './controllers/typeahead_controller'
import TokenInputController from './controllers/token_input_controller'
import DebouncedFormSubmitController from './controllers/debounced_form_submit_controller'
import FilterTagsSectionController from './controllers/filter_tags_section_controller'

/** Stimulus identifiers registered by registerKubikInterfaceStimulusControllers */
export const KUBIK_INTERFACE_STIMULUS_MANIFEST = [
  'kubik-modal',
  'kubik-offcanvas',
  'kubik-typeahead',
  'kubik-token-input',
  'kubik-debounced-form-submit',
  'kubik-filter-tags-section'
] as const

export function registerKubikInterfaceStimulusControllers(application: Application): void {
  application.register('kubik-modal', ModalController)
  application.register('kubik-offcanvas', OffcanvasController)
  application.register('kubik-typeahead', TypeaheadController)
  application.register('kubik-token-input', TokenInputController)
  application.register('kubik-debounced-form-submit', DebouncedFormSubmitController)
  application.register('kubik-filter-tags-section', FilterTagsSectionController)
}
