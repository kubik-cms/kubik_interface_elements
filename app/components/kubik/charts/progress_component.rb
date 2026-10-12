# frozen_string_literal: true

module Kubik
  module Charts
    class ProgressComponent < Kubik::ApplicationComponent
      def initialize(spent_cents:, cap_cents:, period_label: "monthly", label: nil, show_amounts: false)
        @spent_cents = spent_cents.to_i
        @cap_cents = cap_cents&.to_i
        @period_label = period_label.to_s
        @label = label
        @show_amounts = show_amounts
      end

      def show_amounts?
        @show_amounts
      end

      def percentage
        return 0 if @cap_cents.nil? || @cap_cents <= 0

        [((@spent_cents.to_f / @cap_cents) * 100).round(1), 100.0].min
      end

      def tone
        return "danger" if percentage >= 100
        return "warning" if percentage >= 80

        "ok"
      end

      def caption
        @label.presence || "Token usage this #{period_human}"
      end

      def allowance_label
        @period_label == "daily" ? "daily allowance" : "monthly allowance"
      end

      def amount_text
        return format_amount(@spent_cents) if @cap_cents.nil? || @cap_cents <= 0

        "#{format_amount(@spent_cents)} / #{format_amount(@cap_cents)}"
      end

      def period_human
        @period_label == "daily" ? "day" : "month"
      end

      private

      def format_amount(cents)
        sprintf("$%.2f", cents.to_i / 100.0)
      end
    end
  end
end
