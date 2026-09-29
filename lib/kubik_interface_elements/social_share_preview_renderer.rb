# frozen_string_literal: true

module KubikInterfaceElements
  class SocialSharePreviewRenderer
    def self.render(view_context, meta:, platform:)
      new(view_context, meta: meta, platform: platform).render
    end

    def initialize(view_context, meta:, platform:)
      @view = view_context
      @meta = meta
      @platform = platform.to_sym
    end

    def render
      @view.render(
        partial: "kubik/interface_elements/social_share_preview",
        locals: {
          meta: @meta,
          platform: @platform
        }
      )
    end
  end
end
