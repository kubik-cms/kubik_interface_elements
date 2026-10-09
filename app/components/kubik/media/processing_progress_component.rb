# frozen_string_literal: true

module Kubik
  module Media
    class ProcessingProgressComponent < Kubik::ApplicationComponent
      STATUSES = %i[pending processing attention complete].freeze

      def initialize(upload:)
        @upload = upload
      end

      def bars
        [
          { key: :uploaded, complete: uploaded?, active: false },
          { key: :crops, complete: crops_processed?, active: crops_processing? },
          { key: :alt_text, complete: alt_text_present?, active: false }
        ]
      end

      def status_dot
        return :processing if crops_processing?
        return :attention if image_item? && crops_processed? && !alt_text_present?
        return :complete if crops_processed? && (!image_item? || alt_text_present?)

        :pending
      end

      def status_dot_label
        case status_dot
        when :processing then "Image versions are still processing"
        when :attention then "Add alt text for accessibility"
        when :complete then "Ready"
        else "Uploaded"
        end
      end

      private

      def uploaded?
        @upload.gallery_progress_uploaded?
      end

      def crops_processed?
        @upload.gallery_progress_crops_processed?
      end

      def crops_processing?
        @upload.gallery_progress_crops_processing?
      end

      def alt_text_present?
        @upload.gallery_progress_alt_text_present?
      end

      def image_item?
        @upload.image_data.present?
      end
    end
  end
end
