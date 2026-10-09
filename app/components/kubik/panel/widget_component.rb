# frozen_string_literal: true

module Kubik
  module Panel
    class WidgetComponent < Kubik::ApplicationComponent
      def initialize(title:, title_modifier: nil, html_class: nil)
        @title = title
        @title_modifier = title_modifier
        @html_class = html_class
      end

      def title_classes
        ["kubik-panel-widget__title", @title_modifier].compact.join(" ")
      end

      def widget_classes
        ["kubik-panel-widget", @html_class].compact.join(" ")
      end
    end
  end
end
