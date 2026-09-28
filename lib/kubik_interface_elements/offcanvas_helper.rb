# frozen_string_literal: true

module KubikInterfaceElements
  module OffcanvasHelper
    # tone: "grey" for lightweight browse drawers; "white" for form-heavy panels (e.g. AI review).
    def kubik_offcanvas_open(url:, header:, label: nil, position: "end", html_class: "button", pending: false, icon: nil, tone: "grey")
      render partial: "kubik/interface_elements/offcanvas_open",
             locals: {
               url: url,
               header: header,
               label: label,
               position: position,
               html_class: html_class,
               pending: pending,
               icon: icon,
               tone: tone
             }
    end
  end
end
