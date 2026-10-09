# frozen_string_literal: true

module Kubik
  module Panel
    class CtaComponent < Kubik::ApplicationComponent
      def initialize(lead:, tone: "default", modifier: nil, aria_label: "Panel", status: nil, body: nil)
        @lead = lead
        @tone = tone
        @modifier = modifier
        @aria_label = aria_label
        @status = status
        @body = body
      end

      def cta_classes
        tone_class = @tone == "brand" ? "kubik-panel-cta--brand" : nil
        ["kubik-panel-cta", tone_class, @modifier].compact.join(" ")
      end
    end
  end
end
