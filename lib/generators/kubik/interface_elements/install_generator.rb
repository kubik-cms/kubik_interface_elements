require 'rails/generators/active_record'

module Kubik
  module Generators
    module InterfaceElements
      class InstallGenerator < ActiveRecord::Generators::Base
        source_root File.expand_path("../templates", __FILE__)
        desc "Running Kubik interface elements generators"
        argument :name, type: :string, default: "application"

        def copy_initializers
          copy_file 'config/initializers/interface_elements_head_additions.rb', 'config/initializers/interface_elements_head_additions.rb'
        end
      end
    end
  end
end
