# frozen_string_literal: true

module KubikInterfaceElements
  module ChartsHelper
    def render_kubik_chart_progress(spent_cents:, cap_cents:, period_label: "monthly", label: nil, show_amounts: false)
      render Kubik::Charts::ProgressComponent.new(
        spent_cents: spent_cents,
        cap_cents: cap_cents,
        period_label: period_label,
        label: label,
        show_amounts: show_amounts
      )
    end

    def render_kubik_stacked_bar_chart(labels:, datasets:, title: nil, html_class: nil, y_axis_mode: nil)
      render Kubik::Charts::StackedBarChartComponent.new(
        labels: labels,
        datasets: datasets,
        title: title,
        html_class: html_class,
        y_axis_mode: y_axis_mode
      )
    end
  end
end
