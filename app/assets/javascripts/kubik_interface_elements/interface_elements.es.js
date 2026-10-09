import { Controller } from "@hotwired/stimulus";
const DEFAULT_MODAL_FRAME_ID = "kubik_modal_frame";
function modalTemplateHtml(frameId = DEFAULT_MODAL_FRAME_ID) {
  return `
  <template id='kubik-modal-template' data-kubik-modal-target='modalTemplate'>
    <div id='kubik-modal' data-turbo-permanent class='kubik-modal-element' data-kubik-modal-target='modalContainer'>
      <div class='kubik-modal-background' data-action='click->kubik-modal#closeModal'>
      </div>
      <div class='kubik-modal-element-window'>
        <div data-kubik-modal-target='modalHeader' class='h4 kubik-modal-title-bar'></div>
        <turbo-frame id='${frameId}' class='kubik-modal-element-content' data-kubik-modal-target='modalFrame'>
        </turbo-frame>
      </div>
    </div>
  </template>
`;
}
class modal_controller_default extends Controller {
  constructor() {
    super(...arguments);
    this.onTurboLoad = () => {
      this._renderDOMElements();
    };
  }
  initialize() {
    document.head.insertAdjacentHTML("beforeend", modalTemplateHtml(DEFAULT_MODAL_FRAME_ID));
  }
  connect() {
    this._renderDOMElements();
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    });
    document.addEventListener("turbo:load", this.onTurboLoad);
  }
  disconnect() {
    document.removeEventListener("turbo:load", this.onTurboLoad);
  }
  get modalTemplate() {
    return this.modalTemplateTarget.innerHTML;
  }
  selectModal(e) {
    const target = e.currentTarget;
    if (this.modalActionValue === "return") {
      const [
        targetControllerName,
        targetControllerId
      ] = this.modalReturnControllerValue.split("#");
      const targetController = this.application.getControllerForElementAndIdentifier(
        document.getElementById(targetControllerId),
        targetControllerName
      );
      targetController.receiveModalReturn({
        payload: {
          kubik_media_upload_id: parseInt(
            target.dataset.selectedKubikMediaUploadId
          ),
          id: parseInt(
            target.dataset.selectedKubikMediaUploadId
          ),
          thumb: target.dataset.selectedThumb,
          additional_information: target.dataset.selectedAdditionalInfo
        },
        return_payload: this.modalReturnPayloadValue
      });
      this.closeModal();
    }
  }
  modalStatusValueChanged() {
    if (this.hasModalContainerTarget) {
      if (this.modalStatusValue === "opened") {
        this.modalContainerTarget.classList.add("kubik-modal-element__open");
      } else {
        this.modalContainerTarget.classList.remove("kubik-modal-element__open");
      }
    }
  }
  modalSrcValueChanged() {
    if (this.hasModalFrameTarget) {
      if (this.modalSrcValue === "") {
        this.modalFrameTarget.setAttribute("src", this.modalSrcValue);
        this.modalFrameTarget.innerHTML = "";
      } else {
        this.modalFrameTarget.setAttribute("src", this.modalSrcValue);
      }
    }
  }
  modalHeaderValueChanged() {
    if (this.hasModalHeaderTarget) {
      this.modalHeaderTarget.innerText = this.modalHeaderValue;
    }
  }
  openModal(e) {
    this._renderDOMElements();
    const target = e.currentTarget;
    const frameId = target.dataset.kubikModalFrameId || DEFAULT_MODAL_FRAME_ID;
    if (this.hasModalFrameTarget && this.modalFrameTarget.id !== frameId) {
      this.modalFrameTarget.id = frameId;
    }
    this.modalSrcValue = target.getAttribute("src");
    this.modalHeaderValue = target.dataset.kubikModalHeaderText;
    this.modalActionValue = target.dataset.kubikModalAction;
    this.modalReturnControllerValue = target.dataset.kubikModalReturnController;
    if (target.dataset.kubikModalReturnPayload) {
      this.modalReturnPayloadValue = JSON.parse(
        target.dataset.kubikModalReturnPayload
      );
    }
    this.modalStatusValue = "opened";
  }
  closeModal() {
    this.modalStatusValue = "closed";
    this.modalSrcValue = "";
    this.modalHeaderValue = "";
    this.modalActionValue = "";
    this.modalReturnControllerValue = "";
    this.modalReturnPayloadValue = {};
  }
  _renderDOMElements() {
    if (!document.getElementById("kubik-modal")) {
      document.body.insertAdjacentHTML("beforeend", this.modalTemplate);
    }
  }
}
modal_controller_default.targets = [
  "modalTemplate",
  "modalContainer",
  "modalFrame",
  "modalHeader"
];
modal_controller_default.values = {
  modalHeader: { type: String, default: "" },
  modalStatus: { type: String, default: "closed" },
  modalSrc: { type: String, default: "" },
  modalAction: { type: String, default: "" },
  modalReturnPayload: { type: Object, default: {} },
  modalReturnController: { type: String, default: "" }
};
const OFFCANVAS_FRAME_ID = "kubik_offcanvas_frame";
class offcanvas_controller_default extends Controller {
  constructor() {
    super(...arguments);
    this.handleKeydown = (event) => {
      if (event.key === "Escape")
        this.closeOffcanvas();
    };
    this.handleFrameLoad = () => {
      this.clearLoadingState();
      if (!this.hasOffcanvasFrameTarget)
        return;
      const frame = this.offcanvasFrameTarget;
      if (frame.hasAttribute("data-kubik-offcanvas-close") || frame.querySelector("[data-kubik-offcanvas-close]")) {
        this.closeOffcanvas();
      }
    };
    this.handleFrameMissing = () => {
      this.clearLoadingState();
    };
  }
  initialize() {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<template id='kubik-offcanvas-template' data-kubik-offcanvas-target='offcanvasTemplate'>
        <div id='kubik-offcanvas' class='kubik-offcanvas' data-kubik-offcanvas-target='offcanvasContainer' aria-hidden='true'>
          <div class='kubik-offcanvas-backdrop' data-action='click->kubik-offcanvas#closeOffcanvas'></div>
          <div class='kubik-offcanvas-panel kubik-offcanvas-panel--end' data-kubik-offcanvas-target='offcanvasPanel' role='dialog' aria-modal='true'>
            <div class='kubik-offcanvas-header'>
              <div data-kubik-offcanvas-target='offcanvasHeader' class='kubik-offcanvas-title'></div>
              <button type='button' class='kubik-offcanvas-close' aria-label='Close' data-action='click->kubik-offcanvas#closeOffcanvas'>
                <span class='material-symbols-outlined material-icon'>close</span>
              </button>
            </div>
            <div class='kubik-offcanvas-body'>
              <turbo-frame id='${OFFCANVAS_FRAME_ID}' class='kubik-offcanvas-content' data-kubik-offcanvas-target='offcanvasFrame'></turbo-frame>
            </div>
          </div>
        </div>
      </template>`
    );
  }
  connect() {
    this._renderDOMElements();
    document.addEventListener("keydown", this.handleKeydown);
    if (this.hasOffcanvasFrameTarget) {
      this.offcanvasFrameTarget.addEventListener("turbo:frame-load", this.handleFrameLoad);
      this.offcanvasFrameTarget.addEventListener("turbo:frame-missing", this.handleFrameMissing);
    }
  }
  disconnect() {
    document.removeEventListener("keydown", this.handleKeydown);
    if (this.hasOffcanvasFrameTarget) {
      this.offcanvasFrameTarget.removeEventListener("turbo:frame-load", this.handleFrameLoad);
      this.offcanvasFrameTarget.removeEventListener("turbo:frame-missing", this.handleFrameMissing);
    }
  }
  get offcanvasTemplate() {
    return this.offcanvasTemplateTarget.innerHTML;
  }
  offcanvasStatusValueChanged() {
    if (!this.hasOffcanvasContainerTarget)
      return;
    const open = this.offcanvasStatusValue === "opened";
    this.offcanvasContainerTarget.classList.toggle("kubik-offcanvas--open", open);
    this.offcanvasContainerTarget.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("kubik-offcanvas-open", open);
    if (this.hasOffcanvasPanelTarget) {
      this.offcanvasPanelTarget.classList.remove(
        "kubik-offcanvas-panel--start",
        "kubik-offcanvas-panel--end"
      );
      const position = this.offcanvasPositionValue === "start" ? "start" : "end";
      this.offcanvasPanelTarget.classList.add(`kubik-offcanvas-panel--${position}`);
      this.offcanvasPanelTarget.classList.remove(
        "kubik-offcanvas-panel--tone-white",
        "kubik-offcanvas-panel--tone-grey"
      );
      const tone = this.offcanvasToneValue === "white" ? "white" : "grey";
      this.offcanvasPanelTarget.classList.add(`kubik-offcanvas-panel--tone-${tone}`);
    }
    if (!open)
      this.clearOffcanvasContent();
  }
  offcanvasSrcValueChanged() {
    if (!this.hasOffcanvasFrameTarget)
      return;
    if (this.offcanvasSrcValue === "") {
      this.offcanvasFrameTarget.removeAttribute("src");
      this.offcanvasFrameTarget.innerHTML = "";
      return;
    }
    this.showLoadingState();
    this.offcanvasFrameTarget.setAttribute("src", this.offcanvasSrcValue);
  }
  offcanvasHeaderValueChanged() {
    if (this.hasOffcanvasHeaderTarget) {
      this.offcanvasHeaderTarget.textContent = this.offcanvasHeaderValue;
    }
  }
  openOffcanvas(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const href = target.getAttribute("href");
    const src = target.getAttribute("src") || target.dataset.kubikOffcanvasSrc || (href && href !== "#" ? href : "") || "";
    this.offcanvasPositionValue = target.dataset.kubikOffcanvasPosition || this.offcanvasPositionValue;
    this.offcanvasHeaderValue = target.dataset.kubikOffcanvasHeaderText || "";
    this.offcanvasToneValue = target.dataset.kubikOffcanvasTone || "grey";
    this.offcanvasSrcValue = src;
    this.offcanvasStatusValue = "opened";
  }
  closeOffcanvas() {
    this.offcanvasStatusValue = "closed";
    this.offcanvasSrcValue = "";
    this.offcanvasHeaderValue = "";
    this.offcanvasToneValue = "grey";
  }
  offcanvasFrameTargetDisconnected() {
    if (this.offcanvasStatusValue === "opened")
      this.closeOffcanvas();
  }
  showLoadingState() {
    if (!this.hasOffcanvasFrameTarget)
      return;
    this.offcanvasFrameTarget.innerHTML = `
      <div class="kubik-offcanvas-loading" aria-live="polite" role="status">
        <span class="material-symbols-outlined material-icon kubik-offcanvas-loading__spinner">progress_activity</span>
        <span class="kubik-offcanvas-loading__text">Loading\u2026</span>
      </div>
    `;
  }
  clearLoadingState() {
    var _a;
    const loading = (_a = this.offcanvasFrameTarget) == null ? void 0 : _a.querySelector(".kubik-offcanvas-loading");
    if (loading)
      loading.remove();
  }
  clearOffcanvasContent() {
    if (!this.hasOffcanvasFrameTarget)
      return;
    this.offcanvasFrameTarget.removeAttribute("src");
    this.offcanvasFrameTarget.innerHTML = "";
  }
  _renderDOMElements() {
    if (!document.getElementById("kubik-offcanvas")) {
      document.body.insertAdjacentHTML("beforeend", this.offcanvasTemplate);
    }
  }
}
offcanvas_controller_default.targets = [
  "offcanvasTemplate",
  "offcanvasContainer",
  "offcanvasPanel",
  "offcanvasFrame",
  "offcanvasHeader"
];
offcanvas_controller_default.values = {
  offcanvasHeader: { type: String, default: "" },
  offcanvasStatus: { type: String, default: "closed" },
  offcanvasSrc: { type: String, default: "" },
  offcanvasPosition: { type: String, default: "end" },
  offcanvasTone: { type: String, default: "grey" }
};
class typeahead_controller_default extends Controller {
  constructor() {
    super(...arguments);
    this.debounceTimer = null;
    this.fetchAbort = null;
    this.filteredOptions = [];
    this.resultElements = [];
    this.onResultsMouseDownHandler = (event) => this.onResultsMouseDown(event);
  }
  connect() {
    this.resultsListTarget.addEventListener("mousedown", this.onResultsMouseDownHandler);
    this.inputTarget.setAttribute("role", "combobox");
    this.inputTarget.setAttribute("aria-autocomplete", "list");
    this.inputTarget.setAttribute("aria-expanded", "false");
    this.close();
  }
  disconnect() {
    this.resultsListTarget.removeEventListener("mousedown", this.onResultsMouseDownHandler);
    this.clearDebounce();
    this.abortFetch();
  }
  onInput() {
    this.clearDebounce();
    if (this.debounceMsValue <= 0) {
      this.refreshResults();
      return;
    }
    this.debounceTimer = setTimeout(() => this.refreshResults(), this.debounceMsValue);
  }
  onFocus() {
    if (this.queryMeetsMinLength() && this.resultElements.length > 0) {
      this.open();
    }
  }
  excludeValuesValueChanged() {
    if (this.queryMeetsMinLength()) {
      this.refreshResults();
    }
  }
  onBlur() {
    window.setTimeout(() => {
      if (!this.element.contains(document.activeElement)) {
        this.close();
      }
    }, 150);
  }
  keydown(event) {
    switch (event.key) {
      case "ArrowDown":
        if (this.resultElements.length === 0 && this.queryMeetsMinLength()) {
          this.refreshResults();
        }
        if (this.resultElements.length > 0) {
          event.preventDefault();
          this.moveActive(1);
        }
        break;
      case "ArrowUp":
        if (this.resultElements.length > 0) {
          event.preventDefault();
          this.moveActive(-1);
        }
        break;
      case "Enter":
        if (!Number.isNaN(this.resultActiveValue) && this.resultElements[this.resultActiveValue]) {
          event.preventDefault();
          this.selectResult(this.resultElements[this.resultActiveValue]);
        }
        break;
      case "Escape":
        event.preventDefault();
        this.close();
        break;
    }
  }
  resultActiveValueChanged() {
    this.resultElements.forEach((result) => {
      if (this.hasActiveResultClass)
        result.classList.remove(this.activeResultClass);
    });
    if (!Number.isNaN(this.resultActiveValue) && this.resultElements[this.resultActiveValue]) {
      if (this.hasActiveResultClass) {
        this.resultElements[this.resultActiveValue].classList.add(this.activeResultClass);
      }
      this.inputTarget.setAttribute("aria-activedescendant", this.resultElements[this.resultActiveValue].id);
    } else {
      this.inputTarget.removeAttribute("aria-activedescendant");
    }
  }
  onResultsMouseDown(event) {
    const target = event.target.closest(".kubik-interface-typeahead__option");
    if (!target)
      return;
    event.preventDefault();
    this.selectResult(target);
  }
  refreshResults() {
    if (!this.queryMeetsMinLength()) {
      this.renderResults([]);
      return;
    }
    const query = this.inputTarget.value.trim();
    if (this.srcValue) {
      this.fetchRemote(query);
    } else {
      this.filteredOptions = this.filterStaticOptions(query);
      this.renderResults(this.filteredOptions);
    }
  }
  filterStaticOptions(query) {
    const normalized = query.toLowerCase();
    return this.withoutExcluded(
      this.normalizeOptions(this.optionsValue).filter((option) => option.label.toLowerCase().includes(normalized))
    ).slice(0, this.maxResultsValue);
  }
  normalizeOptions(raw) {
    return raw.map((entry) => {
      if (typeof entry === "string") {
        return { label: entry, value: entry };
      }
      if (entry && typeof entry === "object") {
        const object = entry;
        const label = object.label || object.name || object.value || "";
        const value = object.value || object.label || object.name || "";
        return { label: String(label), value: String(value) };
      }
      return { label: "", value: "" };
    }).filter((option) => option.label !== "");
  }
  withoutExcluded(options) {
    if (this.excludeValuesValue.length === 0)
      return options;
    const excluded = new Set(
      this.excludeValuesValue.map((value) => value.toLowerCase().trim()).filter((value) => value !== "")
    );
    return options.filter((option) => {
      const value = option.value.toLowerCase().trim();
      const label = option.label.toLowerCase().trim();
      return !excluded.has(value) && !excluded.has(label);
    });
  }
  fetchRemote(query) {
    this.abortFetch();
    this.fetchAbort = new AbortController();
    const url = new URL(this.srcValue, window.location.origin);
    url.searchParams.set(this.paramNameValue, query);
    if (this.hasFeedbackTarget) {
      this.feedbackTarget.textContent = "Loading...";
    }
    fetch(url.toString(), {
      headers: { Accept: "application/json" },
      signal: this.fetchAbort.signal
    }).then((response) => response.json()).then((payload) => {
      const list = Array.isArray(payload) ? payload : [];
      this.filteredOptions = this.withoutExcluded(this.normalizeOptions(list)).slice(0, this.maxResultsValue);
      this.renderResults(this.filteredOptions);
      if (this.hasFeedbackTarget) {
        this.feedbackTarget.textContent = "";
      }
    }).catch(() => {
      if (this.hasFeedbackTarget) {
        this.feedbackTarget.textContent = "";
      }
      this.renderResults([]);
    });
  }
  renderResults(options) {
    this.resultsListTarget.innerHTML = "";
    this.resultElements = [];
    this.resultActiveValue = NaN;
    options.forEach((option, index) => {
      const item = document.createElement("li");
      item.id = `${this.inputTarget.id || "typeahead"}_option_${index}`;
      item.className = "kubik-interface-typeahead__option";
      item.dataset.index = String(index);
      item.dataset.value = option.value;
      item.dataset.label = option.label;
      item.setAttribute("role", "option");
      item.textContent = option.label;
      item.addEventListener("mouseover", () => {
        this.resultActiveValue = index;
      });
      item.addEventListener("mouseout", () => {
        this.resultActiveValue = NaN;
      });
      this.resultsListTarget.appendChild(item);
      this.resultElements.push(item);
    });
    if (options.length > 0) {
      this.open();
    } else {
      this.close();
    }
  }
  selectResult(element) {
    const value = element.dataset.value || "";
    const label = element.dataset.label || value;
    this.inputTarget.value = "";
    this.close();
    this.element.dispatchEvent(new CustomEvent("kubik-typeahead:select", {
      bubbles: true,
      detail: { value, label }
    }));
  }
  moveActive(direction) {
    if (this.resultElements.length === 0)
      return;
    if (Number.isNaN(this.resultActiveValue)) {
      this.resultActiveValue = direction > 0 ? 0 : this.resultElements.length - 1;
      return;
    }
    const next = this.resultActiveValue + direction;
    if (next < 0) {
      this.resultActiveValue = this.resultElements.length - 1;
    } else if (next >= this.resultElements.length) {
      this.resultActiveValue = 0;
    } else {
      this.resultActiveValue = next;
    }
  }
  open() {
    if (this.hasOpenClass)
      this.element.classList.add(this.openClass);
    this.element.classList.add("kubik-interface-typeahead--open");
    this.inputTarget.setAttribute("aria-expanded", "true");
  }
  close() {
    if (this.hasOpenClass)
      this.element.classList.remove(this.openClass);
    this.element.classList.remove("kubik-interface-typeahead--open");
    this.inputTarget.setAttribute("aria-expanded", "false");
    this.resultActiveValue = NaN;
    this.resultsListTarget.innerHTML = "";
    this.resultElements = [];
  }
  queryMeetsMinLength() {
    return this.inputTarget.value.trim().length >= this.minLengthValue;
  }
  clearDebounce() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
  }
  abortFetch() {
    if (this.fetchAbort) {
      this.fetchAbort.abort();
      this.fetchAbort = null;
    }
  }
}
typeahead_controller_default.targets = ["input", "resultsList", "feedback"];
typeahead_controller_default.classes = ["activeResult", "open"];
typeahead_controller_default.values = {
  src: { type: String, default: "" },
  options: { type: Array, default: [] },
  minLength: { type: Number, default: 1 },
  debounceMs: { type: Number, default: 200 },
  maxResults: { type: Number, default: 20 },
  paramName: { type: String, default: "q" },
  excludeValues: { type: Array, default: [] },
  resultActive: { type: Number, default: NaN }
};
class token_input_controller_default extends Controller {
  constructor() {
    super(...arguments);
    this.tokens = [];
    this.autosubmitTimer = null;
    this.enhanced = false;
    this.onReplaceTags = (event) => {
      const detail = event.detail;
      if (!(detail == null ? void 0 : detail.tags))
        return;
      this.tokens = this.expandTagList(detail.tags);
      this.renderChips();
      this.syncHiddenFields();
      this.syncTypeaheadExcludeValues();
    };
  }
  syncTypeaheadExcludeValues() {
    if (this.typeaheadOutletElements.length === 0)
      return;
    const payload = JSON.stringify(this.tokens);
    this.typeaheadOutletElements.forEach((element) => {
      element.dataset.kubikTypeaheadExcludeValuesValue = payload;
    });
  }
  connect() {
    this.enhanced = true;
    this.tokens = this.parseInitialValue();
    if (this.hasFallbackInputTarget) {
      this.fallbackInputTarget.classList.add("kubik-interface-token-input__fallback--hidden");
      this.fallbackInputTarget.removeAttribute("name");
    }
    this.renderChips();
    this.syncHiddenFields(false);
    this.syncTypeaheadExcludeValues();
    this.element.addEventListener("kubik-token-input:replace", this.onReplaceTags);
  }
  disconnect() {
    this.element.removeEventListener("kubik-token-input:replace", this.onReplaceTags);
    if (this.autosubmitTimer)
      clearTimeout(this.autosubmitTimer);
  }
  addFromTypeahead(event) {
    const detail = event.detail;
    if (!(detail == null ? void 0 : detail.value))
      return;
    this.addToken(detail.value);
    this.queryInputTarget.value = "";
    this.queryInputTarget.focus();
  }
  queryKeydown(event) {
    if (event.key === "Backspace" && this.queryInputTarget.value === "" && this.tokens.length > 0) {
      this.removeToken(this.tokens.length - 1);
      event.preventDefault();
      return;
    }
    if (event.key === "Enter" && this.allowCreateValue) {
      const value = this.queryInputTarget.value.trim();
      if (value !== "") {
        event.preventDefault();
        event.stopPropagation();
        this.addToken(value);
        this.queryInputTarget.value = "";
      }
    }
  }
  removeChip(event) {
    const button = event.currentTarget;
    const index = parseInt(button.dataset.index || "-1", 10);
    if (index >= 0) {
      this.removeToken(index);
    }
  }
  addToken(raw) {
    const parts = raw.split(/[,;]+/).map((part) => part.trim()).filter((part) => part !== "");
    parts.forEach((value) => this.addSingleToken(value));
  }
  expandTagList(raw) {
    if (raw == null)
      return [];
    let values = [];
    if (Array.isArray(raw)) {
      values = raw;
    } else if (typeof raw === "string") {
      const trimmed = raw.trim();
      if (trimmed.startsWith("[")) {
        try {
          const parsed = JSON.parse(trimmed);
          values = Array.isArray(parsed) ? parsed : [raw];
        } catch {
          values = [raw];
        }
      } else {
        values = [raw];
      }
    } else {
      return [];
    }
    return values.reduce((acc, entry) => {
      return acc.concat(
        String(entry).split(/[,;]+/).map((part) => part.trim()).filter((part) => part !== "")
      );
    }, []);
  }
  addSingleToken(value) {
    if (value === "")
      return;
    if (this.deduplicateValue && this.tokens.some((token) => token.toLowerCase() === value.toLowerCase())) {
      return;
    }
    if (this.multiselectValue) {
      this.tokens.push(value);
    } else {
      this.tokens = [value];
    }
    this.renderChips();
    this.syncHiddenFields();
    this.syncTypeaheadExcludeValues();
  }
  removeToken(index) {
    this.tokens.splice(index, 1);
    this.renderChips();
    this.syncHiddenFields();
    this.syncTypeaheadExcludeValues();
  }
  parseInitialValue() {
    const raw = this.initialRawValue();
    if (raw === "")
      return [];
    return raw.split(",").map((part) => part.trim()).filter((part) => part !== "");
  }
  initialRawValue() {
    if (this.hasHiddenInputTarget && this.hiddenInputTarget.value) {
      return this.hiddenInputTarget.value;
    }
    if (this.hasFallbackInputTarget) {
      return this.fallbackInputTarget.value;
    }
    return "";
  }
  renderChips() {
    this.chipListTarget.innerHTML = "";
    this.tokens.forEach((token, index) => {
      const chip = document.createElement("span");
      chip.className = "kubik-interface-token-input__chip";
      chip.textContent = token;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "kubik-interface-token-input__chip-remove";
      remove.dataset.index = String(index);
      remove.setAttribute("aria-label", `Remove ${token}`);
      remove.setAttribute("data-action", "click->kubik-token-input#removeChip");
      remove.innerHTML = '<span class="material-symbols-outlined material-icon">close</span>';
      chip.appendChild(remove);
      this.chipListTarget.appendChild(chip);
    });
  }
  syncHiddenFields(autosubmit = true) {
    if (this.valueFormatValue === "array") {
      this.syncArrayHiddenFields();
    } else {
      this.syncStringHiddenField();
    }
    if (autosubmit) {
      this.maybeAutosubmitForm();
    }
  }
  maybeAutosubmitForm() {
    if (!this.autosubmitValue)
      return;
    const delay = this.autosubmitDebounceMsValue;
    if (delay > 0) {
      if (this.autosubmitTimer)
        clearTimeout(this.autosubmitTimer);
      this.autosubmitTimer = setTimeout(() => this.requestFormSubmit(), delay);
      return;
    }
    this.requestFormSubmit();
  }
  requestFormSubmit() {
    const form = this.element.closest("form");
    if (form && typeof form.requestSubmit === "function") {
      form.requestSubmit();
    }
  }
  syncStringHiddenField() {
    const value = this.tokens.join(this.separatorValue);
    if (this.hasHiddenInputTarget) {
      this.hiddenInputTarget.value = value;
    }
  }
  syncArrayHiddenFields() {
    if (!this.hasHiddenArrayContainerTarget)
      return;
    const container = this.hiddenArrayContainerTarget;
    const baseName = container.dataset.fieldName || "";
    container.innerHTML = "";
    this.tokens.forEach((token) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = baseName;
      input.value = token;
      container.appendChild(input);
    });
  }
}
token_input_controller_default.targets = [
  "fallbackInput",
  "hiddenInput",
  "hiddenArrayContainer",
  "chipList",
  "queryInput"
];
token_input_controller_default.outlets = ["typeahead"];
token_input_controller_default.values = {
  multiselect: { type: Boolean, default: true },
  valueFormat: { type: String, default: "string" },
  separator: { type: String, default: ", " },
  allowCreate: { type: Boolean, default: true },
  deduplicate: { type: Boolean, default: true },
  autosubmit: { type: Boolean, default: false },
  autosubmitDebounceMs: { type: Number, default: 0 }
};
class debounced_form_submit_controller_default extends Controller {
  constructor() {
    super(...arguments);
    this.timer = null;
  }
  schedule() {
    if (this.timer)
      clearTimeout(this.timer);
    this.timer = setTimeout(() => this.submit(), this.delayValue);
  }
  disconnect() {
    if (this.timer)
      clearTimeout(this.timer);
  }
  submit() {
    const form = this.element.closest("form");
    if (form && typeof form.requestSubmit === "function") {
      form.requestSubmit();
    }
  }
}
debounced_form_submit_controller_default.values = {
  delay: { type: Number, default: 400 }
};
class filter_tags_section_controller_default extends Controller {
  connect() {
    this.syncDisabled();
  }
  syncDisabled() {
    const disabled = this.untaggedTarget.checked;
    this.element.classList.toggle("kubik-interface-filters__field--tags-filter-disabled", disabled);
  }
}
filter_tags_section_controller_default.targets = ["section", "untagged"];
class tabbed_panels_controller_default extends Controller {
  switchTab(event) {
    const button = event.currentTarget;
    const panelId = button.dataset.panelId;
    if (!panelId)
      return;
    this.tabTargets.forEach((el) => {
      const selected = el.dataset.panelId === panelId;
      el.classList.toggle("is-active", selected);
      el.setAttribute("aria-selected", selected ? "true" : "false");
    });
    this.paneTargets.forEach((el) => {
      el.classList.toggle("is-active", el.dataset.panelId === panelId);
    });
  }
}
tabbed_panels_controller_default.targets = ["tab", "pane"];
const KUBIK_INTERFACE_STIMULUS_MANIFEST = [
  "kubik-modal",
  "kubik-offcanvas",
  "kubik-typeahead",
  "kubik-token-input",
  "kubik-debounced-form-submit",
  "kubik-filter-tags-section",
  "kubik-interface-tabbed"
];
function registerKubikInterfaceStimulusControllers(application) {
  application.register("kubik-modal", modal_controller_default);
  application.register("kubik-offcanvas", offcanvas_controller_default);
  application.register("kubik-typeahead", typeahead_controller_default);
  application.register("kubik-token-input", token_input_controller_default);
  application.register("kubik-debounced-form-submit", debounced_form_submit_controller_default);
  application.register("kubik-filter-tags-section", filter_tags_section_controller_default);
  application.register("kubik-interface-tabbed", tabbed_panels_controller_default);
}
const registerInterfaceElementControllers = function() {
  const existing = document.documentElement.getAttribute("data-controller") || "";
  const controllers = /* @__PURE__ */ new Set([
    ...existing.split(/\s+/).filter(Boolean),
    "kubik-modal",
    "kubik-offcanvas"
  ]);
  document.documentElement.setAttribute("data-controller", [...controllers].join(" "));
};
const modalInit = function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", registerInterfaceElementControllers);
  } else {
    registerInterfaceElementControllers();
  }
};
const offcanvasInit = modalInit;
export { debounced_form_submit_controller_default as DebouncedFormSubmitController, filter_tags_section_controller_default as FilterTagsSectionController, KUBIK_INTERFACE_STIMULUS_MANIFEST, modal_controller_default as ModalController, offcanvas_controller_default as OffcanvasController, tabbed_panels_controller_default as TabbedPanelsController, token_input_controller_default as TokenInputController, typeahead_controller_default as TypeaheadController, modalInit, offcanvasInit, registerInterfaceElementControllers, registerKubikInterfaceStimulusControllers };
