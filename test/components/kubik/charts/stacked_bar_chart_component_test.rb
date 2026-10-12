# frozen_string_literal: true

require "test_helper"

class KubikChartsStackedBarChartComponentTest < ViewComponent::TestCase
  test "renders chart canvas and stimulus controller" do
    render_inline Kubik::Charts::StackedBarChartComponent.new(
      labels: %w[2026-10-11 2026-10-12],
      datasets: [
        { label: "gpt-4o", data: [1.0, 2.0], color_var: "--kubik-chart-series-1" }
      ],
      title: "Usage"
    )

    assert_selector "[data-controller='kubik-chart']"
    assert_selector "canvas.kubik-interface-chart__canvas"
    assert_includes rendered_content, "Usage"
  end
end
