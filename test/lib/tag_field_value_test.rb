# frozen_string_literal: true

require "test_helper"

class TagFieldValueTest < ActiveSupport::TestCase
  test "serializes acts-as-taggable tag list as comma-separated string" do
    tag_list = ActsAsTaggableOn::TagList.new(%w[loch ness cruise])
    assert_equal "loch, ness, cruise", KubikInterfaceElements::TagFieldValue.serialize(tag_list)
  end

  test "serializes plain arrays" do
    assert_equal "hero, brochure", KubikInterfaceElements::TagFieldValue.serialize(%w[hero brochure])
  end

  test "passes through strings" do
    assert_equal "hero, brochure", KubikInterfaceElements::TagFieldValue.serialize("hero, brochure")
  end
end
