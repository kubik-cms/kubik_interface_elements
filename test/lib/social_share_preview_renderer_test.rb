# frozen_string_literal: true

require "test_helper"

class SocialSharePreviewRendererTest < ActiveSupport::TestCase
  include ActionView::Helpers
  include KubikInterfaceElements::SocialSharePreviewHelper

  def setup
    @controller = ActionController::Base.new
    @view = ActionView::Base.new(ActionController::Base.view_paths, {}, @controller)
    @view.extend(KubikInterfaceElements::SocialSharePreviewHelper)
    @meta = {
      og_title: "Example",
      og_description: "Desc",
      og_image: "https://example.com/og.jpg",
      og_url: "https://example.com/page",
      twitter_title: "Example",
      twitter_description: "Desc",
      twitter_image: "https://example.com/tw.jpg",
      twitter_card_type: "summary_large_image"
    }
  end

  test "renders facebook preview markup" do
    html = KubikInterfaceElements::SocialSharePreviewRenderer.render(@view, meta: @meta, platform: :facebook)
    assert_includes html, "kubik-social-share-preview--facebook"
    assert_includes html, "Example"
  end
end
