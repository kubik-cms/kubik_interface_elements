## [Unreleased]

## [0.2.10] - 2026-09-28

### Changed

- Gem version lives in `KubikInterfaceElements::VERSION`.

## [0.2.9] - 2026-09-28

### Added

- Active Admin head prepend (Material Symbols + viewport) via engine initializer.
- Configurable modal Turbo Frame id: `data-kubik-modal-frame-id` on open triggers (default `kubik_modal_frame`).

### Changed

- Modal shell no longer hardcodes `kubik_media_library_modal_frame`; domain gems pass the frame id.

## [0.2.8] - 2026-09-28

### Added

- `filter_toggle_group` partial and `.kubik-interface-toggle-group` styles for segmented filter controls.
- `kubik-filter-tags-section` Stimulus controller to disable tag inputs when "Untagged only" is checked.
- `filter_tags` optional `untagged_name` / `untagged_checked` locals for combined tags row layout.

- Tag field partials (`tags_field`, `tags_field_control`) and filter/tag interface partials moved into the gem.
- `KubikInterfaceElements::TagsFieldRenderer` and `TagsFieldHelper` with plain-text fallback.
- Formtastic `as: :'kubik/tags'` (`Kubik::TagsInput`) and Simple Form `as: :kubik_tags` (`KubikTagsInput`).

## [0.1.4] - 2021-06-04

- Changes to syntax for instantiation methods in model

## [0.1.0] - 2021-06-04

- Initial release
