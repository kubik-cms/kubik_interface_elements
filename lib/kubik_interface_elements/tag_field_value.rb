# frozen_string_literal: true

module KubikInterfaceElements
  module TagFieldValue
    module_function

    # Token input expects comma-separated tags. ActsAsTaggableOn::TagList in HTML
    # helpers becomes space-separated unless converted with #to_s first.
    def serialize(value)
      return nil if value.nil?
      return value if value.is_a?(String)

      if value.is_a?(Array)
        return value.map { |tag| tag.to_s.strip }.reject(&:blank?).join(", ")
      end

      value.to_s
    end
  end
end
