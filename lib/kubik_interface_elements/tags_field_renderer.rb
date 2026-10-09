# frozen_string_literal: true

module KubikInterfaceElements
  class TagsFieldRenderer
    RENDERER_OPTIONS = %i[
      field_name field_id value label hint suggestions_url suggestions multiselect
      value_format allow_create min_length input_html separator query_input_id autosubmit autosubmit_debounce_ms
    ].freeze

    def self.render(view_context, **options)
      new(view_context, **options).render_control
    end

    def self.render_full(view_context, **options)
      new(view_context, **options).render_full
    end

    def initialize(view_context, **options)
      @view = view_context
      @options = normalize_options(options)
    end

    def render_control
      @view.render Kubik::Tags::FieldControlComponent.new(**@options)
    end

    def render_full
      @view.render Kubik::Tags::FieldComponent.new(**@options)
    end

    private

    def normalize_options(options)
      {
        field_name: options[:field_name],
        field_id: options[:field_id],
        value: options[:value],
        label: options.fetch(:label, "Tags"),
        hint: options[:hint],
        suggestions_url: options[:suggestions_url],
        suggestions: options.fetch(:suggestions, []),
        multiselect: options.fetch(:multiselect, true),
        value_format: options.fetch(:value_format, :string),
        allow_create: options.fetch(:allow_create, true),
        min_length: options.fetch(:min_length, 1),
        separator: options.fetch(:separator, ", "),
        input_html: options.fetch(:input_html, {}),
        query_input_id: options[:query_input_id] || options[:field_id],
        autosubmit: options.fetch(:autosubmit, false),
        autosubmit_debounce_ms: options.fetch(:autosubmit_debounce_ms, 0)
      }.compact
    end
  end
end
