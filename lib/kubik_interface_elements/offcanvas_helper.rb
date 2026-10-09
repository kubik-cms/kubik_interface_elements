# frozen_string_literal: true

module KubikInterfaceElements
  module OffcanvasHelper
    def kubik_offcanvas_open(url:, header:, label: nil, position: "end", html_class: nil, pending: false, icon: nil, tone: "grey")
      render Kubik::Offcanvas::OpenComponent.new(
        url: url,
        header: header,
        label: label,
        position: position,
        html_class: html_class,
        pending: pending,
        icon: icon,
        tone: tone
      )
    end
  end
end
