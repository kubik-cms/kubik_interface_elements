# frozen_string_literal: true

module Kubik
  module Filters
    class SelectComponent < Kubik::ApplicationComponent
      def initialize(name:, label:, options:, selected:, autosubmit: true)
        @name = name
        @label = label
        @options = options
        @selected = selected
        @autosubmit = autosubmit
      end

      def onchange_handler
        @autosubmit ? "this.form.requestSubmit()" : nil
      end
    end
  end
end
