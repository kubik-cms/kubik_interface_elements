# frozen_string_literal: true

module Kubik
  module Filters
    class TextComponent < Kubik::ApplicationComponent
      def initialize(name:, label:, value:, autosubmit: true, debounce_ms: 400)
        @name = name
        @label = label
        @value = value
        @autosubmit = autosubmit
        @debounce_ms = debounce_ms
      end

      def text_data
        return {} unless @autosubmit

        {
          controller: "kubik-debounced-form-submit",
          action: "input->kubik-debounced-form-submit#schedule",
          kubik_debounced_form_submit_delay_value: @debounce_ms
        }
      end
    end
  end
end
