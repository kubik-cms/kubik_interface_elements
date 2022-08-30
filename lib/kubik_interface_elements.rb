# frozen_string_literal: true

module KubikInterfaceElements
  module Rails
    class Engine < ::Rails::Engine
      isolate_namespace KubikInterfaceElements

      config.assets.precompile += %w( kubik_interface_elements.js )
      initializer :kubik_media_library do
        ActiveAdmin.application.load_paths += Dir[File.dirname(__FILE__) + '/arbre']
      end
    end
  end
end
