# frozen_string_literal: true

module Kubik
  module Filters
    class ToggleGroupComponent < Kubik::ApplicationComponent
      def initialize(name:, options:, selected:, autosubmit: true, aria_label: nil)
        @name = name
        @options = options
        @selected = selected.to_s
        @autosubmit = autosubmit
        @aria_label = aria_label || name.to_s.humanize
      end

      def submit_action
        @autosubmit ? "this.form.requestSubmit()" : nil
      end
    end
  end
end
