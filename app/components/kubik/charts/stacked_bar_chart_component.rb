# frozen_string_literal: true

module Kubik
  module Charts
    class StackedBarChartComponent < Kubik::ApplicationComponent
      def initialize(labels:, datasets:, title: nil, html_class: nil, y_axis_mode: nil)
        @labels = labels
        @datasets = datasets
        @title = title
        @html_class = html_class
        @y_axis_mode = y_axis_mode
      end

      def chart_config_json
        {
          labels: @labels,
          yAxisMode: @y_axis_mode,
          datasets: @datasets.map do |dataset|
            {
              label: dataset[:label] || dataset["label"],
              data: dataset[:data] || dataset["data"],
              colorVar: dataset[:color_var] || dataset["colorVar"]
            }
          end
        }.to_json
      end

      def root_classes
        ["kubik-interface-chart", "kubik-interface-chart__stacked-bar", @html_class].compact.join(" ")
      end
    end
  end
end
