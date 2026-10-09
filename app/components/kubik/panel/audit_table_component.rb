# frozen_string_literal: true

module Kubik
  module Panel
    class AuditTableComponent < Kubik::ApplicationComponent
      def initialize(title:, lead: nil, aria_label:, columns:, rows:)
        @title = title
        @lead = lead
        @aria_label = aria_label
        @columns = columns
        @rows = rows
      end
    end
  end
end
