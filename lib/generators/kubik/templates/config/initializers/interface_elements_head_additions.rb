# Optional: the gem engine already prepends Active Admin head for Material Symbols.
# Keep this initializer only if you need to disable Turbo Drive on admin pages:
module KubikInterfaceElementsLayoutOverride
  def build(*args)
    set_attribute :'data-turbo', "false"
    super
  end
end

ActiveAdmin::Views::Pages::Base.prepend KubikInterfaceElementsLayoutOverride
