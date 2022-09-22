/**
 * @jest-environment jsdom
 */

import { Application } from '@hotwired/stimulus'
import { ModalController, modalInit } from '../src/index'

const startStimulus = (): void => {
  const application = Application.start()
  application.register('kubik-modal', ModalController)
}

beforeEach((): void => {
  startStimulus()
})

describe('#toggle', () => {
  it('should add controller', () => {
    document.addEventListener = jest
    .fn()
    .mockImplementationOnce((event, callback) => {
      callback();
    });
    modalInit()
    expect(document.addEventListener).toBeCalledWith(
      "DOMContentLoaded",
      expect.any(Function)
    );
    document.documentElement.setAttribute('data-controller', 'kubik-modal')
  })
  it('should render template', () => {
    const template: HTMLElement = document.getElementById('kubik-modal')
    expect(template).toBeTruthy()
  })
})
