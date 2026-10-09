# frozen_string_literal: true

module KubikInterfaceElements
  class PanelAuditTableRenderer
    def self.render(view_context, title:, lead: nil, aria_label:, columns:, rows:)
      view_context.render(
        Kubik::Panel::AuditTableComponent.new(
          title: title,
          lead: lead,
          aria_label: aria_label,
          columns: columns,
          rows: rows
        )
      )
    end
  end
end
