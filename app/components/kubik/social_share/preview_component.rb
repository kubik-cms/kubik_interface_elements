# frozen_string_literal: true

module Kubik
  module SocialShare
    class PreviewComponent < Kubik::ApplicationComponent
      def initialize(meta:, platform: :facebook)
        @meta = meta
        @platform = platform.to_sym
      end

      def domain
        @meta[:og_url].to_s.gsub(%r{\Ahttps?://}, "")
      end

      def card_type
        @meta[:twitter_card_type].to_s.presence || "summary_large_image"
      end

      def x_preview_classes
        [
          "kubik-social-share-preview",
          "kubik-social-share-preview--x",
          "kubik-social-share-preview--#{card_type}",
          (@meta[:twitter_image].present? ? "kubik-social-share-preview--has-image" : nil)
        ].compact.join(" ")
      end
    end
  end
end
