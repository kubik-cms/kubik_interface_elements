# frozen_string_literal: true

module Kubik
  module Filters
    class DateComponent < Kubik::ApplicationComponent
      def initialize(name:, label:, value:, autosubmit: true)
        @name = name
        @label = label
        @value = value
        @autosubmit = autosubmit
      end

      def onchange_handler
        @autosubmit ? "this.form.requestSubmit()" : nil
      end
    end
  end
end
