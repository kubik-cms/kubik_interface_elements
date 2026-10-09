# frozen_string_literal: true

module Kubik
  module Filters
    class CheckboxComponent < Kubik::ApplicationComponent
      def initialize(name:, label:, checked:, autosubmit: true)
        @name = name
        @label = label
        @checked = checked
        @autosubmit = autosubmit
      end

      def submit_action
        @autosubmit ? "this.form.requestSubmit()" : nil
      end
    end
  end
end
