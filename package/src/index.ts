import ModalController from './controllers/modal_controller'

const modalInit = function () {

  document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.setAttribute('data-controller', 'kubik-modal')
  });
}

export { ModalController, modalInit }
