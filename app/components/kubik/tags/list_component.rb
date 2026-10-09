# frozen_string_literal: true

module Kubik
  module Tags
    class ListComponent < Kubik::ApplicationComponent
      def initialize(tags:, wrapper_class: nil, limit: nil)
        @tags = Array(tags).compact
        @wrapper_class = wrapper_class
        @limit = limit.presence
      end

      def visible_tags
        return @tags unless @limit && @tags.size > @limit

        @tags.last(@limit)
      end

      def extra_count
        return 0 unless @limit && @tags.size > @limit

        @tags.size - @limit
      end

      def render?
        visible_tags.present?
      end

      def list_classes
        ["kubik-interface-tag-list", @wrapper_class].compact.join(" ")
      end
    end
  end
end
