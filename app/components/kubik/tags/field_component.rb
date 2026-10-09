# frozen_string_literal: true

module Kubik
  module Tags
    class FieldComponent < Kubik::ApplicationComponent
      def initialize(**options)
        @options = options
        @field_name = options[:field_name]
        @field_id = options[:field_id]
        @label = options.fetch(:label, "Tags")
        @hint = options[:hint]
      end

      def control_locals
        {
          field_name: @field_name,
          field_id: @field_id,
          value: @options[:value],
          label: @label,
          hint: @hint,
          suggestions_url: @options[:suggestions_url],
          suggestions: @options.fetch(:suggestions, []),
          multiselect: @options.fetch(:multiselect, true),
          value_format: @options.fetch(:value_format, :string),
          allow_create: @options.fetch(:allow_create, true),
          min_length: @options.fetch(:min_length, 1),
          separator: @options.fetch(:separator, ", "),
          input_html: @options.fetch(:input_html, {}),
          query_input_id: @options[:query_input_id] || @field_id,
          autosubmit: @options.fetch(:autosubmit, false),
          autosubmit_debounce_ms: @options.fetch(:autosubmit_debounce_ms, 0)
        }
      end
    end
  end
end
