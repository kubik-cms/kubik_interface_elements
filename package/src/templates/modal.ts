export default `
  <template id='kubik-modal-template' data-kubik-modal-target='modalTemplate'>
    <div id='kubik-modal' class='kubik-modal-element' data-kubik-modal-target='modalContainer'>
      <div class='kubik-modal-background' data-action='click->kubik-modal#closeModal'>
      </div>
      <div class='kubik-modal-element-window'>
        <div data-kubik-modal-target='modalHeader' class='h4 kubik-modal-title-bar'></div>
        <turbo-frame id='media_library_frame' class='kubik-modal-element-content' data-kubik-modal-target='modalFrame'>
        </turbo-frame>
      </div>
    </div>
  </template>
`
