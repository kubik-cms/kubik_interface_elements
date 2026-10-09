# frozen_string_literal: true

module Kubik
  module Media
    class StatusDotComponent < Kubik::ApplicationComponent
      def initialize(upload:)
        @upload = upload
      end

      def status
        progress.status_dot
      end

      def label
        progress.status_dot_label
      end

      private

      def progress
        @progress ||= ProcessingProgressComponent.new(upload: @upload)
      end
    end
  end
end
