# frozen_string_literal: true

module KubikInterfaceElements
  class SocialSharePreviewRenderer
    def self.render(view_context, meta:, platform:)
      view_context.render(Kubik::SocialShare::PreviewComponent.new(meta: meta, platform: platform))
    end
  end
end
