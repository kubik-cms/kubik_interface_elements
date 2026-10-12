# frozen_string_literal: true

require "test_helper"

class KubikChartsProgressComponentTest < ViewComponent::TestCase
  test "renders progress bar with cap" do
    render_inline Kubik::Charts::ProgressComponent.new(
      spent_cents: 342,
      cap_cents: 1000,
      period_label: "monthly"
    )

    assert_selector ".kubik-interface-chart__progress"
    assert_selector ".kubik-interface-chart__progress-fill--ok"
    refute_includes rendered_content, "$"
    assert_includes rendered_content, "34.2%"
    assert_includes rendered_content, "monthly allowance"
  end
end
