/**
 * @jest-environment jsdom
 */

import { Application } from '@hotwired/stimulus'
import KubikModalController from '../src/index'

const startStimulus = (): void => {
  const application = Application.start()
  application.register('kubik-modal', KubikModalController)
}

beforeEach((): void => {
  startStimulus()

  document.documentElement.setAttribute('data-controller', 'kubik-modal')
})

describe('#toggle', () => {
  it('should have', () => {
    const template: HTMLElement = document.getElementById('kubik-modal')
    expect(template).not.toBeNull();
  })
})
