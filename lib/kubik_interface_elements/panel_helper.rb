# frozen_string_literal: true

module KubikInterfaceElements
  module PanelHelper
    # tone: "brand" | "default"
    # modifier: extra BEM modifier e.g. "kubik-panel-cta--processing"
    def kubik_panel_shell(html_class: nil, **html)
      render layout: "kubik/interface_elements/panel_shell",
             locals: { html_class: html_class, html: html } do
        yield
      end
    end

    def kubik_panel_cta(lead:, tone: "default", modifier: nil, aria_label: "Panel", status: nil, &block)
      body = block ? capture(&block) : nil
      render partial: "kubik/interface_elements/panel_cta",
             locals: {
               lead: lead,
               tone: tone,
               modifier: modifier,
               aria_label: aria_label,
               status: status,
               body: body
             }
    end

    def kubik_panel_widget(title:, title_modifier: nil, html_class: nil)
      render layout: "kubik/interface_elements/panel_widget",
             locals: { title: title, title_modifier: title_modifier, html_class: html_class } do
        yield
      end
    end

    def kubik_panel_fieldset
      render layout: "kubik/interface_elements/panel_fieldset" do
        yield
      end
    end

    def kubik_panel_form_html_class(extra = nil)
      ["formtastic", "kubik-panel-form", extra].compact.join(" ")
    end

    def kubik_panel_field_sub_label(text, for_id: nil)
      render partial: "kubik/interface_elements/panel_field_sub_label",
             locals: { text: text, for_id: for_id }
    end

    def kubik_panel_audit_table(title:, lead: nil, aria_label: nil, columns:, rows:)
      KubikInterfaceElements::PanelAuditTableRenderer.render(
        self,
        title: title,
        lead: lead,
        aria_label: aria_label || title,
        columns: columns,
        rows: rows
      )
    end
  end
end
