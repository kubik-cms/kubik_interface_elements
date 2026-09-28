# frozen_string_literal: true

module KubikInterfaceElements
  module TagsFieldHelper
    def kubik_tags_field_available?
      lookup_context.template_exists?("kubik/interface_elements/tags_field", [], true)
    end

    def render_kubik_tags_field(**options)
      if kubik_tags_field_available?
        KubikInterfaceElements::TagsFieldRenderer.render_full(self, **options)
      else
        render_kubik_tags_field_fallback(**options)
      end
    end

    def render_kubik_tags_field_fallback(**options)
      field_name = options[:field_name]
      field_id = options[:field_id] || field_name.to_s.gsub(/[\[\]]/, "_").gsub(/__+/, "_")
      label = options.fetch(:label, "Tags")
      hint = options[:hint]
      value = options[:value]

      label_tag(field_id, label, class: "label") +
        text_field_tag(field_name, value, id: field_id, class: "kubik-interface-tags-field__input") +
        (hint.present? ? content_tag(:p, hint, class: "inline-hints") : "")
    end
  end
end
