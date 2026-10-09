# frozen_string_literal: true

module Kubik
  module Offcanvas
    class OpenComponent < Kubik::ApplicationComponent
      def initialize(url:, header:, label: nil, position: "end", html_class: nil, pending: false, icon: nil, tone: "grey")
        @url = url
        @header = header.to_s.strip
        stripped_label = label.to_s.strip.presence
        @label = stripped_label || @header
        @position = position
        @html_class = html_class
        @pending = pending
        @icon = icon
        @tone = tone
      end

      def trigger_classes
        [@html_class.presence, ("kubik-offcanvas-open--pending" if @pending)].compact.join(" ")
      end

      def data_attributes
        {
          kubik_offcanvas_header_text: @header,
          kubik_offcanvas_position: @position,
          kubik_offcanvas_tone: @tone,
          kubik_offcanvas_src: @url,
          turbo: false,
          action: "click->kubik-offcanvas#openOffcanvas"
        }
      end

      def trigger_body
        if @pending
          tag.span(class: "kubik-offcanvas-open__badge", aria: { hidden: true })
        elsif @icon.present?
          tag.span(@icon.to_s.strip, class: "material-symbols-outlined material-icon", aria: { hidden: true })
        else
          @label
        end
      end
    end
  end
end
