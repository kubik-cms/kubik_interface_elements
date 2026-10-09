# frozen_string_literal: true

module Kubik
  module Panel
    class ShellComponent < Kubik::ApplicationComponent
      def initialize(html_class: nil, **html)
        @html_class = html_class
        @html = html
      end

      def shell_classes
        ["kubik-panel-shell", @html_class].compact.join(" ")
      end
    end
  end
end
