# frozen_string_literal: true

module KubikInterfaceElements
  module FiltersHelper
    def kubik_interface_filters_available?
      true
    end

    def render_kubik_filter_text(**options)
      if kubik_interface_filters_available?
        render Kubik::Filters::TextComponent.new(**options.slice(:name, :label, :value, :autosubmit, :debounce_ms))
      else
        kubik_filter_text_fallback(**options.slice(:name, :label, :value))
      end
    end

    def render_kubik_filter_select(**options)
      if kubik_interface_filters_available?
        render Kubik::Filters::SelectComponent.new(**options.slice(:name, :label, :options, :selected, :autosubmit))
      else
        kubik_filter_select_fallback(**options.slice(:name, :label, :options, :selected, :autosubmit))
      end
    end

    def render_kubik_filter_date(**options)
      if kubik_interface_filters_available?
        render Kubik::Filters::DateComponent.new(**options.slice(:name, :label, :value, :autosubmit))
      else
        kubik_filter_date_fallback(**options.slice(:name, :label, :value, :autosubmit))
      end
    end

    def render_kubik_filter_checkbox(**options)
      if kubik_interface_filters_available?
        render Kubik::Filters::CheckboxComponent.new(**options.slice(:name, :label, :checked, :autosubmit))
      else
        kubik_filter_checkbox_fallback(**options.slice(:name, :label, :checked, :autosubmit))
      end
    end

    def render_kubik_filter_toggle_group(**options)
      if kubik_interface_filters_available?
        render Kubik::Filters::ToggleGroupComponent.new(**options.slice(:name, :options, :selected, :autosubmit, :aria_label))
      else
        kubik_filter_toggle_group_fallback(**options)
      end
    end

    def render_kubik_filter_tags(**options)
      if kubik_interface_filters_available?
        render Kubik::Filters::TagsComponent.new(**options.slice(
          :name, :match_name, :label, :selected_tags, :match, :suggestions_url,
          :autosubmit, :autosubmit_debounce_ms, :untagged_name, :untagged_checked, :untagged_label
        ))
      else
        kubik_filter_tags_fallback(**options)
      end
    end

    def render_kubik_filter_bar(**options)
      if kubik_interface_filters_available?
        render Kubik::Filters::BarComponent.new(**options.slice(
          :url, :clear_url, :turbo_frame, :clear_turbo_frame, :modal, :compact, :fields_html, :tags_html
        ))
      else
        kubik_filter_bar_fallback(**options)
      end
    end

    def render_kubik_tag_list(**options)
      component = Kubik::Tags::ListComponent.new(**options.slice(:tags, :limit, :wrapper_class))
      return "".html_safe unless component.render?

      render component
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
  end
end
