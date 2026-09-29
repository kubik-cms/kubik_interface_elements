# frozen_string_literal: true

module KubikInterfaceElements
  module SocialSharePreviewHelper
    DEFAULT_PLATFORMS = %i[facebook x linkedin].freeze

    PLATFORM_HEADINGS = {
      facebook: "Link preview (Facebook)",
      x: "Link preview (X)",
      linkedin: "Link preview (LinkedIn)"
    }.freeze

    def kubik_social_share_previews_available?
      lookup_context.template_exists?("kubik/interface_elements/social_share_preview", [], true)
    end

    # meta: resolved OG/Twitter fields (see doc/social_share_preview_elements.md)
    def render_kubik_social_share_previews(meta:, platforms: DEFAULT_PLATFORMS, html_class: nil)
      if kubik_social_share_previews_available?
        render partial: "kubik/interface_elements/social_share_previews",
               locals: { meta: meta, platforms: platforms, html_class: html_class }
      else
        render_kubik_social_share_previews_fallback(meta: meta, platforms: platforms)
      end
    end

    def render_kubik_social_share_preview(meta:, platform: :facebook)
      if kubik_social_share_previews_available?
        KubikInterfaceElements::SocialSharePreviewRenderer.render(self, meta: meta, platform: platform)
      else
        content_tag(:p, [PLATFORM_HEADINGS.fetch(platform.to_sym, platform.to_s), meta[:og_title]].compact.join(": "))
      end
    end

    private

    def render_kubik_social_share_previews_fallback(meta:, platforms:)
      safe_join(
        Array(platforms).map do |platform|
          heading = PLATFORM_HEADINGS.fetch(platform.to_sym, platform.to_s)
          content_tag(:div, class: "kubik-social-share-previews__group") do
            safe_join([
              content_tag(:h4, heading),
              render_kubik_social_share_preview(meta: meta, platform: platform)
            ])
          end
        end
      )
    end
  end
end
