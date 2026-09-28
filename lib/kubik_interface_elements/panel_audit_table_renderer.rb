# frozen_string_literal: true

module KubikInterfaceElements
  class PanelAuditTableRenderer
    def self.render(view_context, title:, lead: nil, aria_label:, columns:, rows:)
      new(view_context, title: title, lead: lead, aria_label: aria_label, columns: columns, rows: rows).render
    end

    def initialize(view_context, title:, lead:, aria_label:, columns:, rows:)
      @view = view_context
      @title = title
      @lead = lead
      @aria_label = aria_label
      @columns = columns
      @rows = rows
    end

    def render
      @view.render(
        partial: "kubik/interface_elements/panel_audit_table",
        locals: {
          title: @title,
          lead: @lead,
          aria_label: @aria_label,
          columns: @columns,
          rows: @rows
        }
      )
    end
  end
end
