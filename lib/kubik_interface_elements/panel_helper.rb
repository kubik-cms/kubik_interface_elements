# frozen_string_literal: true

module KubikInterfaceElements
  module PanelHelper
    def kubik_panel_shell(html_class: nil, **html)
      render Kubik::Panel::ShellComponent.new(html_class: html_class, **html) do
        yield
      end
    end

    def kubik_panel_cta(lead:, tone: "default", modifier: nil, aria_label: "Panel", status: nil, &block)
      body = block ? capture(&block) : nil
      render Kubik::Panel::CtaComponent.new(
        lead: lead,
        tone: tone,
        modifier: modifier,
        aria_label: aria_label,
        status: status,
        body: body
      )
    end

    def kubik_panel_widget(title:, title_modifier: nil, html_class: nil)
      render Kubik::Panel::WidgetComponent.new(title: title, title_modifier: title_modifier, html_class: html_class) do
        yield
      end
    end

    def kubik_panel_fieldset
      render Kubik::Panel::FieldsetComponent.new do
        yield
      end
    end

    def kubik_panel_form_html_class(extra = nil)
      ["formtastic", "kubik-panel-form", extra].compact.join(" ")
    end

    def kubik_panel_field_sub_label(text, for_id: nil)
      render Kubik::Panel::FieldSubLabelComponent.new(text: text, for_id: for_id)
    end

    def kubik_panel_audit_table(title:, lead: nil, aria_label: nil, columns:, rows:)
      render Kubik::Panel::AuditTableComponent.new(
        title: title,
        lead: lead,
        aria_label: aria_label || title,
        columns: columns,
        rows: rows
      )
    end
  end
end
