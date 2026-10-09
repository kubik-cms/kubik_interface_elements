# frozen_string_literal: true

module Kubik
  module Filters
    class BarComponent < Kubik::ApplicationComponent
      def initialize(url:, clear_url:, turbo_frame:, clear_turbo_frame: nil, modal: false, compact: false,
                     fields_html:, tags_html: nil)
        @url = url
        @clear_url = clear_url
        @turbo_frame = turbo_frame
        @clear_turbo_frame = clear_turbo_frame
        @modal = modal
        @compact = compact
        @fields_html = fields_html
        @tags_html = tags_html
      end

      def filter_classes
        classes = ["kubik-interface-filters"]
        classes << "kubik-interface-filters--compact" if @compact
        classes << "kubik-interface-filters--split-tags" if @tags_html.present?
        classes.join(" ")
      end

      def clear_link_data
        data = { turbo: true }
        data[:turbo_frame] = @clear_turbo_frame if @clear_turbo_frame.present?
        data
      end
    end
  end
end
