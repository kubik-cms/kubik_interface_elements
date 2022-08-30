import { Application } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo"

import KubikModalController from "./controllers/kubik_modal_controller"

window.Stimulus = Application.start()
Stimulus.register("kubik-modal", KubikModalController)
