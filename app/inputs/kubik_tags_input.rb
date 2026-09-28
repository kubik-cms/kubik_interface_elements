# frozen_string_literal: true

begin
  require "simple_form"
rescue LoadError
  # Simple Form is optional; KubikTagsInput is only used when the gem is present.
end

if defined?(SimpleForm::Inputs::Base)
  class KubikTagsInput < SimpleForm::Inputs::Base
    def input(_wrapper_options = nil)
      KubikInterfaceElements::TagsFieldRenderer.render(@builder.template, **renderer_options)
    end

    private

    def renderer_options
      tag_options = options.except(:as, :label, :required, :hint, :input_html)
      {
        field_name: "#{@builder.object_name}[#{attribute_name}]",
        field_id: input_html_options[:id],
        value: input_value,
        input_html: input_html_options,
        multiselect: tag_options.fetch(:multiselect, true),
        value_format: tag_options.fetch(:value_format, :string),
        allow_create: tag_options.fetch(:allow_create, true),
        min_length: tag_options.fetch(:min_length, 0),
        separator: tag_options.fetch(:separator, ", "),
        suggestions_url: resolve_suggestions_url(tag_options[:suggestions_url]),
        suggestions: tag_options.fetch(:suggestions, []),
        query_input_id: tag_options[:query_input_id]
      }
    end

    def input_value
      return nil unless @builder.object.respond_to?(attribute_name)

      KubikInterfaceElements::TagFieldValue.serialize(@builder.object.public_send(attribute_name))
    end

    def resolve_suggestions_url(value)
      return value.call if value.respond_to?(:call)

      value
    end
  end
end
