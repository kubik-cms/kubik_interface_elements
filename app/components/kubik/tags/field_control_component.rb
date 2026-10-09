# frozen_string_literal: true

module Kubik
  module Tags
    class FieldControlComponent < Kubik::ApplicationComponent
      def initialize(field_name:, field_id:, value:, label: "Tags", hint: nil, suggestions_url: nil, suggestions: [],
                     multiselect: true, value_format: :string, allow_create: true, min_length: 1, separator: ", ",
                     input_html: {}, query_input_id: nil, autosubmit: false, autosubmit_debounce_ms: 0)
        @field_name = field_name
        @field_id = field_id
        @value = value
        @label = label
        @hint = hint
        @suggestions_url = suggestions_url
        @suggestions = suggestions
        @multiselect = multiselect
        @value_format = value_format.to_s
        @allow_create = allow_create
        @min_length = min_length
        @separator = separator
        @input_html = input_html || {}
        @query_input_id = query_input_id || field_id
        @autosubmit = autosubmit
        @autosubmit_debounce_ms = autosubmit_debounce_ms
      end

      def suggestions_payload
        @suggestions.to_json
      end

      def input_html_opts
        @input_html.except(:id)
      end

      def query_classes
        input_html_opts[:class].presence
      end
    end
  end
end
