# frozen_string_literal: true

module Kubik
  module SocialShare
    class PreviewsComponent < Kubik::ApplicationComponent
      def initialize(meta:, platforms: KubikInterfaceElements::SocialSharePreviewHelper::DEFAULT_PLATFORMS, html_class: nil)
        @meta = meta
        @platforms = Array(platforms)
        @html_class = html_class
      end

      def wrapper_classes
        ["kubik-social-share-previews", @html_class].compact.join(" ")
      end

      def heading_for(platform)
        KubikInterfaceElements::SocialSharePreviewHelper::PLATFORM_HEADINGS.fetch(platform.to_sym, platform.to_s)
      end
    end
  end
end
