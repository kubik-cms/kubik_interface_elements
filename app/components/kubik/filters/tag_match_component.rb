# frozen_string_literal: true

module Kubik
  module Filters
    class TagMatchComponent < Kubik::ApplicationComponent
      def initialize(name:, selected:, autosubmit: true)
        @name = name
        @selected = selected.to_s.downcase
        @selected = "or" unless %w[or and].include?(@selected)
        @autosubmit = autosubmit
      end
    end
  end
end
