# frozen_string_literal: true

module Kubik
  module Filters
    class TagsComponent < Kubik::ApplicationComponent
      def initialize(name:, match_name: nil, label: "Tags", selected_tags: [], match: "or",
                     suggestions_url: nil, autosubmit: true, autosubmit_debounce_ms: 0,
                     untagged_name: nil, untagged_checked: false, untagged_label: "Untagged only")
        @name = name
        @match_name = match_name
        @label = label
        @selected_tags = Array(selected_tags).map(&:to_s).map(&:strip).reject(&:blank?)
        @match = match.to_s.downcase
        @match = "or" unless %w[or and].include?(@match)
        @suggestions_url = suggestions_url
        @autosubmit = autosubmit
        @autosubmit_debounce_ms = autosubmit_debounce_ms
        @untagged_name = untagged_name
        @untagged_checked = untagged_checked
        @untagged_label = untagged_label
      end

      def field_name
        @name.to_s
      end

      def field_id
        field_name.tr("[]", "_").gsub(/__+/, "_")
      end

      def tag_value
        @selected_tags.join(", ")
      end

      def with_untagged?
        @untagged_name.present?
      end

      def field_classes
        ["kubik-interface-filters__field", "kubik-interface-filters__field--tags"].join(" ")
      end

      def field_attrs
        with_untagged? ? { data: { controller: "kubik-filter-tags-section" } } : {}
      end

      def untagged_submit
        @autosubmit ? "this.form.requestSubmit()" : nil
      end
    end
  end
end
