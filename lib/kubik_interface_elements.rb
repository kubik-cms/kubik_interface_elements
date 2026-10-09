# frozen_string_literal: true

require "view_component"
require_relative "kubik_interface_elements/version"
require_relative "kubik_interface_elements/tag_field_value"
require_relative "kubik_interface_elements/tags_field_renderer"
require_relative "kubik_interface_elements/tags_field_helper"
require_relative "kubik_interface_elements/offcanvas_helper"
require_relative "kubik_interface_elements/panel_audit_table_renderer"
require_relative "kubik_interface_elements/panel_helper"
require_relative "kubik_interface_elements/filters_helper"
require_relative "kubik_interface_elements/social_share_preview_renderer"
require_relative "kubik_interface_elements/social_share_preview_helper"

module KubikInterfaceElements
  module Rails
    class Engine < ::Rails::Engine
      isolate_namespace KubikInterfaceElements

      config.autoload_paths << root.join("app/components")
      config.eager_load_paths << root.join("app/components")

      config.assets.precompile += %w[
        kubik_interface_elements.js
        kubik_interface_elements/interface_elements.es.js
        kubik_interface_elements/components.css
      ]

      initializer :kubik_interface_elements_active_admin do
        ActiveSupport.on_load(:active_admin) do
          ActiveAdmin.application.load_paths += Dir[File.join(__dir__, "arbre")]

          module KubikInterfaceElements::ActiveAdminHeadOverride
            def build_active_admin_head
              within super do
                render "admin/kubik/interface_elements/additional_headers"
              end
            end
          end

          unless ActiveAdmin::Views::Pages::Base < KubikInterfaceElements::ActiveAdminHeadOverride
            ActiveAdmin::Views::Pages::Base.prepend(KubikInterfaceElements::ActiveAdminHeadOverride)
          end
        end
      end

      initializer :kubik_interface_elements_action_view, before: :load_config_initializers do
        ActiveSupport.on_load(:action_view) do
          include KubikInterfaceElements::TagsFieldHelper
          include KubikInterfaceElements::FiltersHelper
          include KubikInterfaceElements::OffcanvasHelper
          include KubikInterfaceElements::PanelHelper
          include KubikInterfaceElements::SocialSharePreviewHelper
        end
      end
    end
  end
end
