# frozen_string_literal: true

module Kubik
  module Panel
    class FieldSubLabelComponent < Kubik::ApplicationComponent
      def initialize(text:, for_id: nil)
        @text = text
        @for_id = for_id
      end
    end
  end
end
