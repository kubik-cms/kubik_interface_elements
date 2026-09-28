# frozen_string_literal: true

module Kubik
  class TagsInput
    include Formtastic::Inputs::Base

    def to_html
      input_wrapping do
        label_html <<
          KubikInterfaceElements::TagsFieldRenderer.render(template, **renderer_options)
      end
    end

    def wrapper_classes
      super
        .gsub("kubik/tags", "string")
        .gsub(/\btags\b/, "string")
        .split
        .push("stringish", "kubik-interface-tags-field")
        .uniq
        .join(" ")
    end

    private

    def renderer_options
      tag_options = options.except(:as, :label, :required, :hint, :input_html)
      {
        field_name: "#{object_name}[#{method}]",
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
      return nil unless object.respond_to?(method)

      KubikInterfaceElements::TagFieldValue.serialize(object.public_send(method))
    end

    def resolve_suggestions_url(value)
      return value.call if value.respond_to?(:call)

      value
    end
  end
end
