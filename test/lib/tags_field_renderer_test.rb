# frozen_string_literal: true

require "test_helper"

class TagsFieldRendererTest < ActiveSupport::TestCase
  test "formtastic and simple form adapters render the same control markup" do
    view = ActionController::Base.new.view_context
    options = {
      field_name: "media_upload[media_tag_list]",
      field_id: "media_upload_media_tag_list",
      value: "hero, brochure",
      suggestions_url: "/admin/kubik_media_uploads/tag_suggestions",
      multiselect: true,
      value_format: :string,
      allow_create: true
    }

    control_html = KubikInterfaceElements::TagsFieldRenderer.render(view, **options)

    assert_includes control_html, 'data-controller="kubik-token-input"'
    assert_includes control_html, 'data-controller="kubik-typeahead"'
    assert_includes control_html, 'name="media_upload[media_tag_list]"'
    assert_includes control_html, options[:suggestions_url]
  end
end
