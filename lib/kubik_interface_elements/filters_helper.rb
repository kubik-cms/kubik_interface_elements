# frozen_string_literal: true

module KubikInterfaceElements
  module FiltersHelper
    def kubik_interface_filters_available?
      lookup_context.template_exists?("kubik/interface_elements/filter_text", [], true)
    end

    def render_kubik_filter_text(**options)
      if kubik_interface_filters_available?
        render partial: "kubik/interface_elements/filter_text", locals: options
      else
        kubik_filter_text_fallback(**options.slice(:name, :label, :value))
      end
    end

    def render_kubik_filter_select(**options)
      if kubik_interface_filters_available?
        render partial: "kubik/interface_elements/filter_select", locals: options
      else
        kubik_filter_select_fallback(**options.slice(:name, :label, :options, :selected, :autosubmit))
      end
    end

    def render_kubik_filter_date(**options)
      if kubik_interface_filters_available?
        render partial: "kubik/interface_elements/filter_date", locals: options
      else
        kubik_filter_date_fallback(**options.slice(:name, :label, :value, :autosubmit))
      end
    end

    def render_kubik_filter_checkbox(**options)
      if kubik_interface_filters_available?
        render partial: "kubik/interface_elements/filter_checkbox", locals: options
      else
        kubik_filter_checkbox_fallback(**options.slice(:name, :label, :checked, :autosubmit))
      end
    end

    def render_kubik_filter_toggle_group(**options)
      if kubik_interface_filters_available?
        render partial: "kubik/interface_elements/filter_toggle_group", locals: options
      else
        kubik_filter_toggle_group_fallback(**options)
      end
    end

    def render_kubik_filter_tags(**options)
      if kubik_interface_filters_available?
        render partial: "kubik/interface_elements/filter_tags", locals: options
      else
        kubik_filter_tags_fallback(**options)
      end
    end

    def render_kubik_filter_bar(**options)
      if kubik_interface_filters_available?
        render partial: "kubik/interface_elements/filter_bar", locals: options
      else
        kubik_filter_bar_fallback(**options)
      end
    end

    def render_kubik_tag_list(**options)
      if lookup_context.template_exists?("kubik/interface_elements/tag_list", [], true)
        render partial: "kubik/interface_elements/tag_list", locals: options
      else
        kubik_tag_list_fallback(**options.slice(:tags, :limit, :wrapper_class))
      end
    end

    private

    def kubik_filter_submit_attr(autosubmit)
      autosubmit ? "this.form.requestSubmit()" : nil
    end

    def kubik_filter_text_fallback(name:, label:, value:)
      label_tag(name, label) + text_field_tag(name, value, autocomplete: "off")
    end

    def kubik_filter_select_fallback(name:, label:, options:, selected:, autosubmit: true)
      label_tag(name, label) +
        select_tag(name, options_for_select(options, selected), onchange: kubik_filter_submit_attr(autosubmit))
    end

    def kubik_filter_date_fallback(name:, label:, value:, autosubmit: true)
      label_tag(name, label) +
        date_field_tag(name, value, onchange: kubik_filter_submit_attr(autosubmit))
    end

    def kubik_filter_checkbox_fallback(name:, label:, checked:, autosubmit: true)
      label_tag(name, label) +
        check_box_tag(name, "1", checked, onchange: kubik_filter_submit_attr(autosubmit))
    end

    def kubik_filter_toggle_group_fallback(name:, label:, options:, selected:, autosubmit: true)
      label_tag(name, label) +
        select_tag(name, options_for_select(options, selected), onchange: kubik_filter_submit_attr(autosubmit))
    end

    def kubik_filter_tags_fallback(name:, match_name: nil, label: "Tags", selected_tags: [], match: "or",
                                   suggestions_url: nil, autosubmit: true, autosubmit_debounce_ms: 0,
                                   untagged_name: nil, untagged_checked: false, untagged_label: "Untagged only", **_rest)
      tags = Array(selected_tags).map(&:to_s).map(&:strip).reject(&:blank?)
      tag_value = tags.join(", ")
      field_name = name.to_s
      field_id = field_name.tr("[]", "_").gsub(/__+/, "_")
      match_value = match.to_s.downcase
      match_value = "or" unless %w[or and].include?(match_value)
      submit = kubik_filter_submit_attr(autosubmit)

      html = label_tag(field_id, label) +
        text_field_tag(field_name, tag_value, id: field_id, onchange: submit)

      if match_name.present?
        html << label_tag(match_name, "Tag match") +
          select_tag(
            match_name,
            options_for_select([["Any", "or"], ["All", "and"]], match_value),
            onchange: submit
          )
      end

      if untagged_name.present?
        html << label_tag(untagged_name, untagged_label) +
          check_box_tag(untagged_name, "1", untagged_checked, onchange: submit)
      end

      html
    end

    def kubik_filter_bar_fallback(url:, clear_url:, turbo_frame:, fields_html:, tags_html: nil, modal: false, **_rest)
      form_with url: url, method: :get, html: { data: { turbo: true, turbo_frame: turbo_frame } } do
        safe_join(
          [
            (hidden_field_tag(:modal, "true") if modal),
            link_to("Clear filters", clear_url, data: { turbo: true }),
            fields_html,
            tags_html
          ].compact
        )
      end
    end

    def kubik_tag_list_fallback(tags:, limit: nil, wrapper_class: nil)
      tag_array = Array(tags).compact
      return "".html_safe if tag_array.blank?

      limit = limit.presence
      if limit && tag_array.size > limit
        visible_tags = tag_array.last(limit)
        extra_count = tag_array.size - limit
      else
        visible_tags = tag_array
        extra_count = 0
      end

      content_tag(:div, class: wrapper_class.presence) do
        parts = visible_tags.map { |tag| content_tag(:span, tag) }
        parts << content_tag(:span, "+#{extra_count} more") if extra_count.positive?
        safe_join(parts)
      end
    end
  end
end
