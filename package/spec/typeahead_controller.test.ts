/**
 * @jest-environment jsdom
 */

import { Application } from '@hotwired/stimulus'
import TypeaheadController from '../src/controllers/typeahead_controller'

const setup = async (): Promise<{ application: Application; input: HTMLInputElement }> => {
  document.body.innerHTML = `
    <div data-controller="kubik-typeahead"
         data-kubik-typeahead-options-value='["alpha","beta","brochure"]'
         data-kubik-typeahead-active-result-class="is-active"
         data-kubik-typeahead-debounce-ms-value="0">
      <input data-kubik-typeahead-target="input"
             id="tags_query"
             data-action="input->kubik-typeahead#onInput keydown->kubik-typeahead#keydown" />
      <ul data-kubik-typeahead-target="resultsList" role="listbox"></ul>
    </div>
  `
  const application = Application.start()
  application.register('kubik-typeahead', TypeaheadController)
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve())
  })
  const input = document.querySelector('input') as HTMLInputElement
  return { application, input }
}

describe('TypeaheadController', () => {
  it('filters static options and selects with keyboard', async () => {
    const { application, input } = await setup()
    const root = document.querySelector('[data-controller="kubik-typeahead"]') as HTMLElement
    const controller = application.getControllerForElementAndIdentifier(root, 'kubik-typeahead') as TypeaheadController
    expect(controller.optionsValue.length).toBe(3)

    input.value = 'br'
    input.dispatchEvent(new Event('input', { bubbles: true }))

    const options = document.querySelectorAll('.kubik-interface-typeahead__option')
    expect(options.length).toBe(1)
    expect(options[0].textContent).toBe('brochure')

    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))

    const selected = document.querySelector('[data-controller="kubik-typeahead"]')
    expect(selected).toBeTruthy()
  })

  it('excludes assigned tag values from static options', async () => {
    document.body.innerHTML = `
      <div data-controller="kubik-typeahead"
           data-kubik-typeahead-options-value='["alpha","beta","brochure"]'
           data-kubik-typeahead-exclude-values-value='["brochure"]'
           data-kubik-typeahead-debounce-ms-value="0">
        <input data-kubik-typeahead-target="input" id="tags_query"
               data-action="input->kubik-typeahead#onInput" />
        <ul data-kubik-typeahead-target="resultsList" role="listbox"></ul>
      </div>
    `
    const application = Application.start()
    application.register('kubik-typeahead', TypeaheadController)
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
    const input = document.querySelector('input') as HTMLInputElement
    input.value = 'b'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    const labels = Array.from(document.querySelectorAll('.kubik-interface-typeahead__option')).map(
      (el) => el.textContent
    )
    expect(labels).toEqual(['beta'])
  })
})
