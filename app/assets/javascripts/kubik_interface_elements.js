// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5NaXL":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "916932b22e4085ab";
module.bundle.HMR_BUNDLE_ID = "de2489c2021d40cc";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"acSeK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _stimulus = require("@hotwired/stimulus");
var _turbo = require("@hotwired/turbo");
var _kubikModalController = require("./controllers/kubik_modal_controller");
var _kubikModalControllerDefault = parcelHelpers.interopDefault(_kubikModalController);
window.Stimulus = _stimulus.Application.start();
Stimulus.register("kubik-modal", _kubikModalControllerDefault.default);

},{"@hotwired/stimulus":"hVNih","@hotwired/turbo":"lw7OH","./controllers/kubik_modal_controller":"csB3C","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hVNih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Application", function() {
    return Application;
});
parcelHelpers.export(exports, "AttributeObserver", function() {
    return AttributeObserver;
});
parcelHelpers.export(exports, "Context", function() {
    return Context;
});
parcelHelpers.export(exports, "Controller", function() {
    return Controller;
});
parcelHelpers.export(exports, "ElementObserver", function() {
    return ElementObserver;
});
parcelHelpers.export(exports, "IndexedMultimap", function() {
    return IndexedMultimap;
});
parcelHelpers.export(exports, "Multimap", function() {
    return Multimap;
});
parcelHelpers.export(exports, "StringMapObserver", function() {
    return StringMapObserver;
});
parcelHelpers.export(exports, "TokenListObserver", function() {
    return TokenListObserver;
});
parcelHelpers.export(exports, "ValueListObserver", function() {
    return ValueListObserver;
});
parcelHelpers.export(exports, "add", function() {
    return add;
});
parcelHelpers.export(exports, "defaultSchema", function() {
    return defaultSchema;
});
parcelHelpers.export(exports, "del", function() {
    return del;
});
parcelHelpers.export(exports, "fetch", function() {
    return fetch;
});
parcelHelpers.export(exports, "prune", function() {
    return prune;
});
var _helpers = require("@swc/helpers");
var _regeneratorRuntime = require("regenerator-runtime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
/*
Stimulus 3.0.1
Copyright © 2021 Basecamp, LLC
 */ var EventListener = /*#__PURE__*/ function() {
    "use strict";
    function EventListener(eventTarget, eventName, eventOptions) {
        _helpers.classCallCheck(this, EventListener);
        this.eventTarget = eventTarget;
        this.eventName = eventName;
        this.eventOptions = eventOptions;
        this.unorderedBindings = new Set();
    }
    _helpers.createClass(EventListener, [
        {
            key: "connect",
            value: function connect() {
                this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
            }
        },
        {
            key: "bindingConnected",
            value: function bindingConnected(binding) {
                this.unorderedBindings.add(binding);
            }
        },
        {
            key: "bindingDisconnected",
            value: function bindingDisconnected(binding) {
                this.unorderedBindings.delete(binding);
            }
        },
        {
            key: "handleEvent",
            value: function handleEvent(event) {
                var extendedEvent = extendEvent(event);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.bindings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var binding = _step.value;
                        if (extendedEvent.immediatePropagationStopped) break;
                        else binding.handleEvent(extendedEvent);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "bindings",
            get: function get() {
                return Array.from(this.unorderedBindings).sort(function(left, right) {
                    var leftIndex = left.index, rightIndex = right.index;
                    return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
                });
            }
        }
    ]);
    return EventListener;
}();
function extendEvent(event) {
    if ("immediatePropagationStopped" in event) return event;
    else {
        var stopImmediatePropagation = event.stopImmediatePropagation;
        return Object.assign(event, {
            immediatePropagationStopped: false,
            stopImmediatePropagation: function() {
                this.immediatePropagationStopped = true;
                stopImmediatePropagation.call(this);
            }
        });
    }
}
var Dispatcher = /*#__PURE__*/ function() {
    "use strict";
    function Dispatcher(application) {
        _helpers.classCallCheck(this, Dispatcher);
        this.application = application;
        this.eventListenerMaps = new Map;
        this.started = false;
    }
    _helpers.createClass(Dispatcher, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    this.started = true;
                    this.eventListeners.forEach(function(eventListener) {
                        return eventListener.connect();
                    });
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    this.started = false;
                    this.eventListeners.forEach(function(eventListener) {
                        return eventListener.disconnect();
                    });
                }
            }
        },
        {
            key: "eventListeners",
            get: function get() {
                return Array.from(this.eventListenerMaps.values()).reduce(function(listeners, map) {
                    return listeners.concat(Array.from(map.values()));
                }, []);
            }
        },
        {
            key: "bindingConnected",
            value: function bindingConnected(binding) {
                this.fetchEventListenerForBinding(binding).bindingConnected(binding);
            }
        },
        {
            key: "bindingDisconnected",
            value: function bindingDisconnected(binding) {
                this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
            }
        },
        {
            key: "handleError",
            value: function handleError(error1, message) {
                var detail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                this.application.handleError(error1, "Error ".concat(message), detail);
            }
        },
        {
            key: "fetchEventListenerForBinding",
            value: function fetchEventListenerForBinding(binding) {
                var eventTarget = binding.eventTarget, eventName = binding.eventName, eventOptions = binding.eventOptions;
                return this.fetchEventListener(eventTarget, eventName, eventOptions);
            }
        },
        {
            key: "fetchEventListener",
            value: function fetchEventListener(eventTarget, eventName, eventOptions) {
                var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
                var cacheKey = this.cacheKey(eventName, eventOptions);
                var eventListener = eventListenerMap.get(cacheKey);
                if (!eventListener) {
                    eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
                    eventListenerMap.set(cacheKey, eventListener);
                }
                return eventListener;
            }
        },
        {
            key: "createEventListener",
            value: function createEventListener(eventTarget, eventName, eventOptions) {
                var eventListener = new EventListener(eventTarget, eventName, eventOptions);
                if (this.started) eventListener.connect();
                return eventListener;
            }
        },
        {
            key: "fetchEventListenerMapForEventTarget",
            value: function fetchEventListenerMapForEventTarget(eventTarget) {
                var eventListenerMap = this.eventListenerMaps.get(eventTarget);
                if (!eventListenerMap) {
                    eventListenerMap = new Map;
                    this.eventListenerMaps.set(eventTarget, eventListenerMap);
                }
                return eventListenerMap;
            }
        },
        {
            key: "cacheKey",
            value: function cacheKey(eventName, eventOptions) {
                var parts = [
                    eventName
                ];
                Object.keys(eventOptions).sort().forEach(function(key) {
                    parts.push("".concat(eventOptions[key] ? "" : "!").concat(key));
                });
                return parts.join(":");
            }
        }
    ]);
    return Dispatcher;
}();
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;
function parseActionDescriptorString(descriptorString) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern) || [];
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName: matches[2],
        eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
        identifier: matches[5],
        methodName: matches[7]
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") return window;
    else if (eventTargetName == "document") return document;
}
function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce(function(options, token) {
        return Object.assign(options, _helpers.defineProperty({}, token.replace(/^!/, ""), !/^!/.test(token)));
    }, {});
}
function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) return "window";
    else if (eventTarget == document) return "document";
}
function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, function(_, char) {
        return char.toUpperCase();
    });
}
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
    return value.replace(/([A-Z])/g, function(_, char) {
        return "-".concat(char.toLowerCase());
    });
}
function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
}
var Action = /*#__PURE__*/ function() {
    "use strict";
    function Action(element, index, descriptor) {
        _helpers.classCallCheck(this, Action);
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.eventOptions = descriptor.eventOptions || {};
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
    }
    _helpers.createClass(Action, [
        {
            key: "toString",
            value: function toString() {
                var eventNameSuffix = this.eventTargetName ? "@".concat(this.eventTargetName) : "";
                return "".concat(this.eventName).concat(eventNameSuffix, "->").concat(this.identifier, "#").concat(this.methodName);
            }
        },
        {
            key: "params",
            get: function get() {
                if (this.eventTarget instanceof Element) return this.getParamsFromEventTargetAttributes(this.eventTarget);
                else return {};
            }
        },
        {
            key: "getParamsFromEventTargetAttributes",
            value: function getParamsFromEventTargetAttributes(eventTarget) {
                var params = {};
                var pattern = new RegExp("^data-".concat(this.identifier, "-(.+)-param$"));
                var attributes = Array.from(eventTarget.attributes);
                attributes.forEach(function(param) {
                    var name = param.name, value = param.value;
                    var match = name.match(pattern);
                    var key = match && match[1];
                    if (key) Object.assign(params, _helpers.defineProperty({}, camelize(key), typecast(value)));
                });
                return params;
            }
        },
        {
            key: "eventTargetName",
            get: function get() {
                return stringifyEventTarget(this.eventTarget);
            }
        }
    ], [
        {
            key: "forToken",
            value: function forToken(token) {
                return new this(token.element, token.index, parseActionDescriptorString(token.content));
            }
        }
    ]);
    return Action;
}();
var defaultEventNames = {
    "a": function(e) {
        return "click";
    },
    "button": function(e) {
        return "click";
    },
    "form": function(e) {
        return "submit";
    },
    "details": function(e) {
        return "toggle";
    },
    "input": function(e) {
        return e.getAttribute("type") == "submit" ? "click" : "input";
    },
    "select": function(e) {
        return "change";
    },
    "textarea": function(e) {
        return "input";
    }
};
function getDefaultEventNameForElement(element) {
    var tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) return defaultEventNames[tagName](element);
}
function error(message) {
    throw new Error(message);
}
function typecast(value) {
    try {
        return JSON.parse(value);
    } catch (o_O) {
        return value;
    }
}
var Binding = /*#__PURE__*/ function() {
    "use strict";
    function Binding(context, action) {
        _helpers.classCallCheck(this, Binding);
        this.context = context;
        this.action = action;
    }
    _helpers.createClass(Binding, [
        {
            key: "index",
            get: function get() {
                return this.action.index;
            }
        },
        {
            key: "eventTarget",
            get: function get() {
                return this.action.eventTarget;
            }
        },
        {
            key: "eventOptions",
            get: function get() {
                return this.action.eventOptions;
            }
        },
        {
            key: "identifier",
            get: function get() {
                return this.context.identifier;
            }
        },
        {
            key: "handleEvent",
            value: function handleEvent(event) {
                if (this.willBeInvokedByEvent(event)) this.invokeWithEvent(event);
            }
        },
        {
            key: "eventName",
            get: function get() {
                return this.action.eventName;
            }
        },
        {
            key: "method",
            get: function get() {
                var method = this.controller[this.methodName];
                if (typeof method == "function") return method;
                throw new Error('Action "'.concat(this.action, '" references undefined method "').concat(this.methodName, '"'));
            }
        },
        {
            key: "invokeWithEvent",
            value: function invokeWithEvent(event) {
                var target = event.target, currentTarget = event.currentTarget;
                try {
                    var params = this.action.params;
                    var actionEvent = Object.assign(event, {
                        params: params
                    });
                    this.method.call(this.controller, actionEvent);
                    this.context.logDebugActivity(this.methodName, {
                        event: event,
                        target: target,
                        currentTarget: currentTarget,
                        action: this.methodName
                    });
                } catch (error2) {
                    var ref = this, identifier = ref.identifier, controller = ref.controller, element = ref.element, index = ref.index;
                    var detail = {
                        identifier: identifier,
                        controller: controller,
                        element: element,
                        index: index,
                        event: event
                    };
                    this.context.handleError(error2, 'invoking action "'.concat(this.action, '"'), detail);
                }
            }
        },
        {
            key: "willBeInvokedByEvent",
            value: function willBeInvokedByEvent(event) {
                var eventTarget = event.target;
                if (this.element === eventTarget) return true;
                else if (eventTarget instanceof Element && this.element.contains(eventTarget)) return this.scope.containsElement(eventTarget);
                else return this.scope.containsElement(this.action.element);
            }
        },
        {
            key: "controller",
            get: function get() {
                return this.context.controller;
            }
        },
        {
            key: "methodName",
            get: function get() {
                return this.action.methodName;
            }
        },
        {
            key: "element",
            get: function get() {
                return this.scope.element;
            }
        },
        {
            key: "scope",
            get: function get() {
                return this.context.scope;
            }
        }
    ]);
    return Binding;
}();
var ElementObserver = /*#__PURE__*/ function() {
    "use strict";
    function ElementObserver(element, delegate) {
        var _this = this;
        _helpers.classCallCheck(this, ElementObserver);
        this.mutationObserverInit = {
            attributes: true,
            childList: true,
            subtree: true
        };
        this.element = element;
        this.started = false;
        this.delegate = delegate;
        this.elements = new Set;
        this.mutationObserver = new MutationObserver(function(mutations) {
            return _this.processMutations(mutations);
        });
    }
    _helpers.createClass(ElementObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    this.started = true;
                    this.mutationObserver.observe(this.element, this.mutationObserverInit);
                    this.refresh();
                }
            }
        },
        {
            key: "pause",
            value: function pause(callback) {
                if (this.started) {
                    this.mutationObserver.disconnect();
                    this.started = false;
                }
                callback();
                if (!this.started) {
                    this.mutationObserver.observe(this.element, this.mutationObserverInit);
                    this.started = true;
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    this.mutationObserver.takeRecords();
                    this.mutationObserver.disconnect();
                    this.started = false;
                }
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (this.started) {
                    var matches = new Set(this.matchElementsInTree());
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = Array.from(this.elements)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var element = _step.value;
                            if (!matches.has(element)) this.removeElement(element);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = Array.from(matches)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var element1 = _step1.value;
                            this.addElement(element1);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
            }
        },
        {
            key: "processMutations",
            value: function processMutations(mutations) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (this.started) try {
                    for(var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var mutation = _step.value;
                        this.processMutation(mutation);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "processMutation",
            value: function processMutation(mutation) {
                if (mutation.type == "attributes") this.processAttributeChange(mutation.target, mutation.attributeName);
                else if (mutation.type == "childList") {
                    this.processRemovedNodes(mutation.removedNodes);
                    this.processAddedNodes(mutation.addedNodes);
                }
            }
        },
        {
            key: "processAttributeChange",
            value: function processAttributeChange(node, attributeName) {
                var element = node;
                if (this.elements.has(element)) {
                    if (this.delegate.elementAttributeChanged && this.matchElement(element)) this.delegate.elementAttributeChanged(element, attributeName);
                    else this.removeElement(element);
                } else if (this.matchElement(element)) this.addElement(element);
            }
        },
        {
            key: "processRemovedNodes",
            value: function processRemovedNodes(nodes) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Array.from(nodes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var node = _step.value;
                        var element = this.elementFromNode(node);
                        if (element) this.processTree(element, this.removeElement);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "processAddedNodes",
            value: function processAddedNodes(nodes) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Array.from(nodes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var node = _step.value;
                        var element = this.elementFromNode(node);
                        if (element && this.elementIsActive(element)) this.processTree(element, this.addElement);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "matchElement",
            value: function matchElement(element) {
                return this.delegate.matchElement(element);
            }
        },
        {
            key: "matchElementsInTree",
            value: function matchElementsInTree() {
                var tree = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.element;
                return this.delegate.matchElementsInTree(tree);
            }
        },
        {
            key: "processTree",
            value: function processTree(tree, processor) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.matchElementsInTree(tree)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var element = _step.value;
                        processor.call(this, element);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "elementFromNode",
            value: function elementFromNode(node) {
                if (node.nodeType == Node.ELEMENT_NODE) return node;
            }
        },
        {
            key: "elementIsActive",
            value: function elementIsActive(element) {
                if (element.isConnected != this.element.isConnected) return false;
                else return this.element.contains(element);
            }
        },
        {
            key: "addElement",
            value: function addElement(element) {
                if (!this.elements.has(element)) {
                    if (this.elementIsActive(element)) {
                        this.elements.add(element);
                        if (this.delegate.elementMatched) this.delegate.elementMatched(element);
                    }
                }
            }
        },
        {
            key: "removeElement",
            value: function removeElement(element) {
                if (this.elements.has(element)) {
                    this.elements.delete(element);
                    if (this.delegate.elementUnmatched) this.delegate.elementUnmatched(element);
                }
            }
        }
    ]);
    return ElementObserver;
}();
var AttributeObserver = /*#__PURE__*/ function() {
    "use strict";
    function AttributeObserver(element, attributeName, delegate) {
        _helpers.classCallCheck(this, AttributeObserver);
        this.attributeName = attributeName;
        this.delegate = delegate;
        this.elementObserver = new ElementObserver(element, this);
    }
    _helpers.createClass(AttributeObserver, [
        {
            key: "element",
            get: function get() {
                return this.elementObserver.element;
            }
        },
        {
            key: "selector",
            get: function get() {
                return "[".concat(this.attributeName, "]");
            }
        },
        {
            key: "start",
            value: function start() {
                this.elementObserver.start();
            }
        },
        {
            key: "pause",
            value: function pause(callback) {
                this.elementObserver.pause(callback);
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.elementObserver.stop();
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                this.elementObserver.refresh();
            }
        },
        {
            key: "started",
            get: function get() {
                return this.elementObserver.started;
            }
        },
        {
            key: "matchElement",
            value: function matchElement(element) {
                return element.hasAttribute(this.attributeName);
            }
        },
        {
            key: "matchElementsInTree",
            value: function matchElementsInTree(tree) {
                var match = this.matchElement(tree) ? [
                    tree
                ] : [];
                var matches = Array.from(tree.querySelectorAll(this.selector));
                return match.concat(matches);
            }
        },
        {
            key: "elementMatched",
            value: function elementMatched(element) {
                if (this.delegate.elementMatchedAttribute) this.delegate.elementMatchedAttribute(element, this.attributeName);
            }
        },
        {
            key: "elementUnmatched",
            value: function elementUnmatched(element) {
                if (this.delegate.elementUnmatchedAttribute) this.delegate.elementUnmatchedAttribute(element, this.attributeName);
            }
        },
        {
            key: "elementAttributeChanged",
            value: function elementAttributeChanged(element, attributeName) {
                if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) this.delegate.elementAttributeValueChanged(element, attributeName);
            }
        }
    ]);
    return AttributeObserver;
}();
var StringMapObserver = /*#__PURE__*/ function() {
    "use strict";
    function StringMapObserver(element, delegate) {
        var _this = this;
        _helpers.classCallCheck(this, StringMapObserver);
        this.element = element;
        this.delegate = delegate;
        this.started = false;
        this.stringMap = new Map;
        this.mutationObserver = new MutationObserver(function(mutations) {
            return _this.processMutations(mutations);
        });
    }
    _helpers.createClass(StringMapObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    this.started = true;
                    this.mutationObserver.observe(this.element, {
                        attributes: true,
                        attributeOldValue: true
                    });
                    this.refresh();
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    this.mutationObserver.takeRecords();
                    this.mutationObserver.disconnect();
                    this.started = false;
                }
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (this.started) try {
                    for(var _iterator = this.knownAttributeNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var attributeName = _step.value;
                        this.refreshAttribute(attributeName, null);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "processMutations",
            value: function processMutations(mutations) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (this.started) try {
                    for(var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var mutation = _step.value;
                        this.processMutation(mutation);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "processMutation",
            value: function processMutation(mutation) {
                var attributeName = mutation.attributeName;
                if (attributeName) this.refreshAttribute(attributeName, mutation.oldValue);
            }
        },
        {
            key: "refreshAttribute",
            value: function refreshAttribute(attributeName, oldValue) {
                var key = this.delegate.getStringMapKeyForAttribute(attributeName);
                if (key != null) {
                    if (!this.stringMap.has(attributeName)) this.stringMapKeyAdded(key, attributeName);
                    var value = this.element.getAttribute(attributeName);
                    if (this.stringMap.get(attributeName) != value) this.stringMapValueChanged(value, key, oldValue);
                    if (value == null) {
                        var _$oldValue = this.stringMap.get(attributeName);
                        this.stringMap.delete(attributeName);
                        if (_$oldValue) this.stringMapKeyRemoved(key, attributeName, _$oldValue);
                    } else this.stringMap.set(attributeName, value);
                }
            }
        },
        {
            key: "stringMapKeyAdded",
            value: function stringMapKeyAdded(key, attributeName) {
                if (this.delegate.stringMapKeyAdded) this.delegate.stringMapKeyAdded(key, attributeName);
            }
        },
        {
            key: "stringMapValueChanged",
            value: function stringMapValueChanged(value, key, oldValue) {
                if (this.delegate.stringMapValueChanged) this.delegate.stringMapValueChanged(value, key, oldValue);
            }
        },
        {
            key: "stringMapKeyRemoved",
            value: function stringMapKeyRemoved(key, attributeName, oldValue) {
                if (this.delegate.stringMapKeyRemoved) this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
            }
        },
        {
            key: "knownAttributeNames",
            get: function get() {
                return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
            }
        },
        {
            key: "currentAttributeNames",
            get: function get() {
                return Array.from(this.element.attributes).map(function(attribute) {
                    return attribute.name;
                });
            }
        },
        {
            key: "recordedAttributeNames",
            get: function get() {
                return Array.from(this.stringMap.keys());
            }
        }
    ]);
    return StringMapObserver;
}();
function add(map, key, value) {
    fetch(map, key).add(value);
}
function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
}
function fetch(map, key) {
    var values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
function prune(map, key) {
    var values = map.get(key);
    if (values != null && values.size == 0) map.delete(key);
}
var Multimap = /*#__PURE__*/ function() {
    "use strict";
    function Multimap() {
        _helpers.classCallCheck(this, Multimap);
        this.valuesByKey = new Map();
    }
    _helpers.createClass(Multimap, [
        {
            key: "keys",
            get: function get() {
                return Array.from(this.valuesByKey.keys());
            }
        },
        {
            key: "values",
            get: function get() {
                var sets = Array.from(this.valuesByKey.values());
                return sets.reduce(function(values, set) {
                    return values.concat(Array.from(set));
                }, []);
            }
        },
        {
            key: "size",
            get: function get() {
                var sets = Array.from(this.valuesByKey.values());
                return sets.reduce(function(size, set) {
                    return size + set.size;
                }, 0);
            }
        },
        {
            key: "add",
            value: function add1(key, value) {
                add(this.valuesByKey, key, value);
            }
        },
        {
            key: "delete",
            value: function _delete(key, value) {
                del(this.valuesByKey, key, value);
            }
        },
        {
            key: "has",
            value: function has(key, value) {
                var values = this.valuesByKey.get(key);
                return values != null && values.has(value);
            }
        },
        {
            key: "hasKey",
            value: function hasKey(key) {
                return this.valuesByKey.has(key);
            }
        },
        {
            key: "hasValue",
            value: function hasValue(value) {
                var sets = Array.from(this.valuesByKey.values());
                return sets.some(function(set) {
                    return set.has(value);
                });
            }
        },
        {
            key: "getValuesForKey",
            value: function getValuesForKey(key) {
                var values = this.valuesByKey.get(key);
                return values ? Array.from(values) : [];
            }
        },
        {
            key: "getKeysForValue",
            value: function getKeysForValue(value) {
                return Array.from(this.valuesByKey).filter(function(param) {
                    var _param = _helpers.slicedToArray(param, 2), key = _param[0], values = _param[1];
                    return values.has(value);
                }).map(function(param) {
                    var _param = _helpers.slicedToArray(param, 2), key = _param[0], values = _param[1];
                    return key;
                });
            }
        }
    ]);
    return Multimap;
}();
var IndexedMultimap = /*#__PURE__*/ function(Multimap) {
    "use strict";
    _helpers.inherits(IndexedMultimap, Multimap);
    var _super = _helpers.createSuper(IndexedMultimap);
    function IndexedMultimap() {
        _helpers.classCallCheck(this, IndexedMultimap);
        var _this;
        _this = _super.call(this);
        _this.keysByValue = new Map;
        return _this;
    }
    _helpers.createClass(IndexedMultimap, [
        {
            key: "values",
            get: function get() {
                return Array.from(this.keysByValue.keys());
            }
        },
        {
            key: "add",
            value: function add1(key, value) {
                _helpers.get(_helpers.getPrototypeOf(IndexedMultimap.prototype), "add", this).call(this, key, value);
                add(this.keysByValue, value, key);
            }
        },
        {
            key: "delete",
            value: function _delete(key, value) {
                _helpers.get(_helpers.getPrototypeOf(IndexedMultimap.prototype), "delete", this).call(this, key, value);
                del(this.keysByValue, value, key);
            }
        },
        {
            key: "hasValue",
            value: function hasValue(value) {
                return this.keysByValue.has(value);
            }
        },
        {
            key: "getKeysForValue",
            value: function getKeysForValue(value) {
                var set = this.keysByValue.get(value);
                return set ? Array.from(set) : [];
            }
        }
    ]);
    return IndexedMultimap;
}(Multimap);
var TokenListObserver = /*#__PURE__*/ function() {
    "use strict";
    function TokenListObserver(element, attributeName, delegate) {
        _helpers.classCallCheck(this, TokenListObserver);
        this.attributeObserver = new AttributeObserver(element, attributeName, this);
        this.delegate = delegate;
        this.tokensByElement = new Multimap;
    }
    _helpers.createClass(TokenListObserver, [
        {
            key: "started",
            get: function get() {
                return this.attributeObserver.started;
            }
        },
        {
            key: "start",
            value: function start() {
                this.attributeObserver.start();
            }
        },
        {
            key: "pause",
            value: function pause(callback) {
                this.attributeObserver.pause(callback);
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.attributeObserver.stop();
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                this.attributeObserver.refresh();
            }
        },
        {
            key: "element",
            get: function get() {
                return this.attributeObserver.element;
            }
        },
        {
            key: "attributeName",
            get: function get() {
                return this.attributeObserver.attributeName;
            }
        },
        {
            key: "elementMatchedAttribute",
            value: function elementMatchedAttribute(element) {
                this.tokensMatched(this.readTokensForElement(element));
            }
        },
        {
            key: "elementAttributeValueChanged",
            value: function elementAttributeValueChanged(element) {
                var ref = _helpers.slicedToArray(this.refreshTokensForElement(element), 2), unmatchedTokens = ref[0], matchedTokens = ref[1];
                this.tokensUnmatched(unmatchedTokens);
                this.tokensMatched(matchedTokens);
            }
        },
        {
            key: "elementUnmatchedAttribute",
            value: function elementUnmatchedAttribute(element) {
                this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
            }
        },
        {
            key: "tokensMatched",
            value: function tokensMatched(tokens) {
                var _this = this;
                tokens.forEach(function(token) {
                    return _this.tokenMatched(token);
                });
            }
        },
        {
            key: "tokensUnmatched",
            value: function tokensUnmatched(tokens) {
                var _this = this;
                tokens.forEach(function(token) {
                    return _this.tokenUnmatched(token);
                });
            }
        },
        {
            key: "tokenMatched",
            value: function tokenMatched(token) {
                this.delegate.tokenMatched(token);
                this.tokensByElement.add(token.element, token);
            }
        },
        {
            key: "tokenUnmatched",
            value: function tokenUnmatched(token) {
                this.delegate.tokenUnmatched(token);
                this.tokensByElement.delete(token.element, token);
            }
        },
        {
            key: "refreshTokensForElement",
            value: function refreshTokensForElement(element) {
                var previousTokens = this.tokensByElement.getValuesForKey(element);
                var currentTokens = this.readTokensForElement(element);
                var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function(param) {
                    var _param = _helpers.slicedToArray(param, 2), previousToken = _param[0], currentToken = _param[1];
                    return !tokensAreEqual(previousToken, currentToken);
                });
                if (firstDifferingIndex == -1) return [
                    [],
                    []
                ];
                else return [
                    previousTokens.slice(firstDifferingIndex),
                    currentTokens.slice(firstDifferingIndex)
                ];
            }
        },
        {
            key: "readTokensForElement",
            value: function readTokensForElement(element) {
                var attributeName = this.attributeName;
                var tokenString = element.getAttribute(attributeName) || "";
                return parseTokenString(tokenString, element, attributeName);
            }
        }
    ]);
    return TokenListObserver;
}();
function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter(function(content) {
        return content.length;
    }).map(function(content, index) {
        return {
            element: element,
            attributeName: attributeName,
            content: content,
            index: index
        };
    });
}
function zip(left, right) {
    var length = Math.max(left.length, right.length);
    return Array.from({
        length: length
    }, function(_, index) {
        return [
            left[index],
            right[index]
        ];
    });
}
function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
}
var ValueListObserver = /*#__PURE__*/ function() {
    "use strict";
    function ValueListObserver(element, attributeName, delegate) {
        _helpers.classCallCheck(this, ValueListObserver);
        this.tokenListObserver = new TokenListObserver(element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap;
        this.valuesByTokenByElement = new WeakMap;
    }
    _helpers.createClass(ValueListObserver, [
        {
            key: "started",
            get: function get() {
                return this.tokenListObserver.started;
            }
        },
        {
            key: "start",
            value: function start() {
                this.tokenListObserver.start();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.tokenListObserver.stop();
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                this.tokenListObserver.refresh();
            }
        },
        {
            key: "element",
            get: function get() {
                return this.tokenListObserver.element;
            }
        },
        {
            key: "attributeName",
            get: function get() {
                return this.tokenListObserver.attributeName;
            }
        },
        {
            key: "tokenMatched",
            value: function tokenMatched(token) {
                var element = token.element;
                var value = this.fetchParseResultForToken(token).value;
                if (value) {
                    this.fetchValuesByTokenForElement(element).set(token, value);
                    this.delegate.elementMatchedValue(element, value);
                }
            }
        },
        {
            key: "tokenUnmatched",
            value: function tokenUnmatched(token) {
                var element = token.element;
                var value = this.fetchParseResultForToken(token).value;
                if (value) {
                    this.fetchValuesByTokenForElement(element).delete(token);
                    this.delegate.elementUnmatchedValue(element, value);
                }
            }
        },
        {
            key: "fetchParseResultForToken",
            value: function fetchParseResultForToken(token) {
                var parseResult = this.parseResultsByToken.get(token);
                if (!parseResult) {
                    parseResult = this.parseToken(token);
                    this.parseResultsByToken.set(token, parseResult);
                }
                return parseResult;
            }
        },
        {
            key: "fetchValuesByTokenForElement",
            value: function fetchValuesByTokenForElement(element) {
                var valuesByToken = this.valuesByTokenByElement.get(element);
                if (!valuesByToken) {
                    valuesByToken = new Map;
                    this.valuesByTokenByElement.set(element, valuesByToken);
                }
                return valuesByToken;
            }
        },
        {
            key: "parseToken",
            value: function parseToken(token) {
                try {
                    var value = this.delegate.parseValueForToken(token);
                    return {
                        value: value
                    };
                } catch (error3) {
                    return {
                        error: error3
                    };
                }
            }
        }
    ]);
    return ValueListObserver;
}();
var BindingObserver = /*#__PURE__*/ function() {
    "use strict";
    function BindingObserver(context, delegate) {
        _helpers.classCallCheck(this, BindingObserver);
        this.context = context;
        this.delegate = delegate;
        this.bindingsByAction = new Map;
    }
    _helpers.createClass(BindingObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.valueListObserver) {
                    this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
                    this.valueListObserver.start();
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.valueListObserver) {
                    this.valueListObserver.stop();
                    delete this.valueListObserver;
                    this.disconnectAllActions();
                }
            }
        },
        {
            key: "element",
            get: function get() {
                return this.context.element;
            }
        },
        {
            key: "identifier",
            get: function get() {
                return this.context.identifier;
            }
        },
        {
            key: "actionAttribute",
            get: function get() {
                return this.schema.actionAttribute;
            }
        },
        {
            key: "schema",
            get: function get() {
                return this.context.schema;
            }
        },
        {
            key: "bindings",
            get: function get() {
                return Array.from(this.bindingsByAction.values());
            }
        },
        {
            key: "connectAction",
            value: function connectAction(action) {
                var binding = new Binding(this.context, action);
                this.bindingsByAction.set(action, binding);
                this.delegate.bindingConnected(binding);
            }
        },
        {
            key: "disconnectAction",
            value: function disconnectAction(action) {
                var binding = this.bindingsByAction.get(action);
                if (binding) {
                    this.bindingsByAction.delete(action);
                    this.delegate.bindingDisconnected(binding);
                }
            }
        },
        {
            key: "disconnectAllActions",
            value: function disconnectAllActions() {
                var _this = this;
                this.bindings.forEach(function(binding) {
                    return _this.delegate.bindingDisconnected(binding);
                });
                this.bindingsByAction.clear();
            }
        },
        {
            key: "parseValueForToken",
            value: function parseValueForToken(token) {
                var action = Action.forToken(token);
                if (action.identifier == this.identifier) return action;
            }
        },
        {
            key: "elementMatchedValue",
            value: function elementMatchedValue(element, action) {
                this.connectAction(action);
            }
        },
        {
            key: "elementUnmatchedValue",
            value: function elementUnmatchedValue(element, action) {
                this.disconnectAction(action);
            }
        }
    ]);
    return BindingObserver;
}();
var ValueObserver = /*#__PURE__*/ function() {
    "use strict";
    function ValueObserver(context, receiver) {
        _helpers.classCallCheck(this, ValueObserver);
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
        this.valueDescriptorMap = this.controller.valueDescriptorMap;
        this.invokeChangedCallbacksForDefaultValues();
    }
    _helpers.createClass(ValueObserver, [
        {
            key: "start",
            value: function start() {
                this.stringMapObserver.start();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.stringMapObserver.stop();
            }
        },
        {
            key: "element",
            get: function get() {
                return this.context.element;
            }
        },
        {
            key: "controller",
            get: function get() {
                return this.context.controller;
            }
        },
        {
            key: "getStringMapKeyForAttribute",
            value: function getStringMapKeyForAttribute(attributeName) {
                if (attributeName in this.valueDescriptorMap) return this.valueDescriptorMap[attributeName].name;
            }
        },
        {
            key: "stringMapKeyAdded",
            value: function stringMapKeyAdded(key, attributeName) {
                var descriptor = this.valueDescriptorMap[attributeName];
                if (!this.hasValue(key)) this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
            }
        },
        {
            key: "stringMapValueChanged",
            value: function stringMapValueChanged(value, name, oldValue) {
                var descriptor = this.valueDescriptorNameMap[name];
                if (value === null) return;
                if (oldValue === null) oldValue = descriptor.writer(descriptor.defaultValue);
                this.invokeChangedCallback(name, value, oldValue);
            }
        },
        {
            key: "stringMapKeyRemoved",
            value: function stringMapKeyRemoved(key, attributeName, oldValue) {
                var descriptor = this.valueDescriptorNameMap[key];
                if (this.hasValue(key)) this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
                else this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
            }
        },
        {
            key: "invokeChangedCallbacksForDefaultValues",
            value: function invokeChangedCallbacksForDefaultValues() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.valueDescriptors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _value = _step.value, key = _value.key, name = _value.name, defaultValue = _value.defaultValue, writer = _value.writer;
                        if (defaultValue != undefined && !this.controller.data.has(key)) this.invokeChangedCallback(name, writer(defaultValue), undefined);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "invokeChangedCallback",
            value: function invokeChangedCallback(name, rawValue, rawOldValue) {
                var changedMethodName = "".concat(name, "Changed");
                var changedMethod = this.receiver[changedMethodName];
                if (typeof changedMethod == "function") {
                    var descriptor = this.valueDescriptorNameMap[name];
                    var value = descriptor.reader(rawValue);
                    var oldValue = rawOldValue;
                    if (rawOldValue) oldValue = descriptor.reader(rawOldValue);
                    changedMethod.call(this.receiver, value, oldValue);
                }
            }
        },
        {
            key: "valueDescriptors",
            get: function get() {
                var valueDescriptorMap = this.valueDescriptorMap;
                return Object.keys(valueDescriptorMap).map(function(key) {
                    return valueDescriptorMap[key];
                });
            }
        },
        {
            key: "valueDescriptorNameMap",
            get: function get() {
                var _this = this;
                var descriptors = {};
                Object.keys(this.valueDescriptorMap).forEach(function(key) {
                    var descriptor = _this.valueDescriptorMap[key];
                    descriptors[descriptor.name] = descriptor;
                });
                return descriptors;
            }
        },
        {
            key: "hasValue",
            value: function hasValue(attributeName) {
                var descriptor = this.valueDescriptorNameMap[attributeName];
                var hasMethodName = "has".concat(capitalize(descriptor.name));
                return this.receiver[hasMethodName];
            }
        }
    ]);
    return ValueObserver;
}();
var TargetObserver = /*#__PURE__*/ function() {
    "use strict";
    function TargetObserver(context, delegate) {
        _helpers.classCallCheck(this, TargetObserver);
        this.context = context;
        this.delegate = delegate;
        this.targetsByName = new Multimap;
    }
    _helpers.createClass(TargetObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.tokenListObserver) {
                    this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
                    this.tokenListObserver.start();
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.tokenListObserver) {
                    this.disconnectAllTargets();
                    this.tokenListObserver.stop();
                    delete this.tokenListObserver;
                }
            }
        },
        {
            key: "tokenMatched",
            value: function tokenMatched(param) {
                var element = param.element, name = param.content;
                if (this.scope.containsElement(element)) this.connectTarget(element, name);
            }
        },
        {
            key: "tokenUnmatched",
            value: function tokenUnmatched(param) {
                var element = param.element, name = param.content;
                this.disconnectTarget(element, name);
            }
        },
        {
            key: "connectTarget",
            value: function connectTarget(element, name) {
                var _a;
                if (!this.targetsByName.has(name, element)) {
                    var _this = this;
                    this.targetsByName.add(name, element);
                    (_a = this.tokenListObserver) === null || _a === void 0 || _a.pause(function() {
                        return _this.delegate.targetConnected(element, name);
                    });
                }
            }
        },
        {
            key: "disconnectTarget",
            value: function disconnectTarget(element, name) {
                var _a;
                if (this.targetsByName.has(name, element)) {
                    var _this = this;
                    this.targetsByName.delete(name, element);
                    (_a = this.tokenListObserver) === null || _a === void 0 || _a.pause(function() {
                        return _this.delegate.targetDisconnected(element, name);
                    });
                }
            }
        },
        {
            key: "disconnectAllTargets",
            value: function disconnectAllTargets() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator = this.targetsByName.keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion2 = (_step = _iterator.next()).done); _iteratorNormalCompletion2 = true){
                        var name = _step.value;
                        try {
                            for(var _iterator2 = this.targetsByName.getValuesForKey(name)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion = true){
                                var element = _step2.value;
                                this.disconnectTarget(element, name);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator2.return != null) {
                                    _iterator2.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        },
        {
            key: "attributeName",
            get: function get() {
                return "data-".concat(this.context.identifier, "-target");
            }
        },
        {
            key: "element",
            get: function get() {
                return this.context.element;
            }
        },
        {
            key: "scope",
            get: function get() {
                return this.context.scope;
            }
        }
    ]);
    return TargetObserver;
}();
var Context = /*#__PURE__*/ function() {
    "use strict";
    function Context(module, scope) {
        var _this = this;
        _helpers.classCallCheck(this, Context);
        this.logDebugActivity = function(functionName) {
            var detail = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var identifier = _this.identifier, controller = _this.controller, element = _this.element;
            detail = Object.assign({
                identifier: identifier,
                controller: controller,
                element: element
            }, detail);
            _this.application.logDebugActivity(_this.identifier, functionName, detail);
        };
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.bindingObserver = new BindingObserver(this, this.dispatcher);
        this.valueObserver = new ValueObserver(this, this.controller);
        this.targetObserver = new TargetObserver(this, this);
        try {
            this.controller.initialize();
            this.logDebugActivity("initialize");
        } catch (error4) {
            this.handleError(error4, "initializing controller");
        }
    }
    _helpers.createClass(Context, [
        {
            key: "connect",
            value: function connect() {
                this.bindingObserver.start();
                this.valueObserver.start();
                this.targetObserver.start();
                try {
                    this.controller.connect();
                    this.logDebugActivity("connect");
                } catch (error5) {
                    this.handleError(error5, "connecting controller");
                }
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                try {
                    this.controller.disconnect();
                    this.logDebugActivity("disconnect");
                } catch (error6) {
                    this.handleError(error6, "disconnecting controller");
                }
                this.targetObserver.stop();
                this.valueObserver.stop();
                this.bindingObserver.stop();
            }
        },
        {
            key: "application",
            get: function get() {
                return this.module.application;
            }
        },
        {
            key: "identifier",
            get: function get() {
                return this.module.identifier;
            }
        },
        {
            key: "schema",
            get: function get() {
                return this.application.schema;
            }
        },
        {
            key: "dispatcher",
            get: function get() {
                return this.application.dispatcher;
            }
        },
        {
            key: "element",
            get: function get() {
                return this.scope.element;
            }
        },
        {
            key: "parentElement",
            get: function get() {
                return this.element.parentElement;
            }
        },
        {
            key: "handleError",
            value: function handleError(error7, message) {
                var detail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var ref = this, identifier = ref.identifier, controller = ref.controller, element = ref.element;
                detail = Object.assign({
                    identifier: identifier,
                    controller: controller,
                    element: element
                }, detail);
                this.application.handleError(error7, "Error ".concat(message), detail);
            }
        },
        {
            key: "targetConnected",
            value: function targetConnected(element, name) {
                this.invokeControllerMethod("".concat(name, "TargetConnected"), element);
            }
        },
        {
            key: "targetDisconnected",
            value: function targetDisconnected(element, name) {
                this.invokeControllerMethod("".concat(name, "TargetDisconnected"), element);
            }
        },
        {
            key: "invokeControllerMethod",
            value: function invokeControllerMethod(methodName) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _controller;
                var controller = this.controller;
                if (typeof controller[methodName] == "function") (_controller = controller)[methodName].apply(_controller, _helpers.toConsumableArray(args));
            }
        }
    ]);
    return Context;
}();
function readInheritableStaticArrayValues(constructor1, propertyName) {
    var ancestors = getAncestorsForConstructor(constructor1);
    return Array.from(ancestors.reduce(function(values, constructor) {
        getOwnStaticArrayValues(constructor, propertyName).forEach(function(name) {
            return values.add(name);
        });
        return values;
    }, new Set));
}
function readInheritableStaticObjectPairs(constructor2, propertyName) {
    var ancestors = getAncestorsForConstructor(constructor2);
    return ancestors.reduce(function(pairs, constructor) {
        var _pairs;
        (_pairs = pairs).push.apply(_pairs, _helpers.toConsumableArray(getOwnStaticObjectPairs(constructor, propertyName)));
        return pairs;
    }, []);
}
function getAncestorsForConstructor(constructor) {
    var ancestors = [];
    while(constructor){
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
    var definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
    var definition = constructor[propertyName];
    return definition ? Object.keys(definition).map(function(key) {
        return [
            key,
            definition[key]
        ];
    }) : [];
}
function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
    var shadowConstructor = extend(constructor);
    var shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
}
function getBlessedProperties(constructor) {
    var blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce(function(blessedProperties, blessing) {
        var properties = blessing(constructor);
        for(var key in properties){
            var descriptor = blessedProperties[key] || {};
            blessedProperties[key] = Object.assign(descriptor, properties[key]);
        }
        return blessedProperties;
    }, {});
}
function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce(function(shadowProperties, key) {
        var descriptor = getShadowedDescriptor(prototype, properties, key);
        if (descriptor) Object.assign(shadowProperties, _helpers.defineProperty({}, key, descriptor));
        return shadowProperties;
    }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
    var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
        var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
        if (shadowingDescriptor) {
            descriptor.get = shadowingDescriptor.get || descriptor.get;
            descriptor.set = shadowingDescriptor.set || descriptor.set;
        }
        return descriptor;
    }
}
var getOwnKeys = function() {
    if (typeof Object.getOwnPropertySymbols == "function") return function(object) {
        return _helpers.toConsumableArray(Object.getOwnPropertyNames(object)).concat(_helpers.toConsumableArray(Object.getOwnPropertySymbols(object)));
    };
    else return Object.getOwnPropertyNames;
}();
var extend = function _target() {
    function extendWithReflect(constructor) {
        function extended() {
            return Reflect.construct(constructor, arguments, this instanceof extended ? this.constructor : void 0);
        }
        extended.prototype = Object.create(constructor.prototype, {
            constructor: {
                value: extended
            }
        });
        Reflect.setPrototypeOf(extended, constructor);
        return extended;
    }
    function testReflectExtension() {
        var a = function a() {
            this.a.call(this);
        };
        var b = extendWithReflect(a);
        b.prototype.a = function() {};
        return new b;
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    } catch (error) {
        return function(constructor3) {
            return /*#__PURE__*/ function(constructor) {
                "use strict";
                _helpers.inherits(extended, constructor);
                var _super = _helpers.createSuper(extended);
                function extended() {
                    _helpers.classCallCheck(this, extended);
                    return _super.apply(this, arguments);
                }
                return extended;
            }(constructor3);
        };
    }
}();
function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: bless(definition.controllerConstructor)
    };
}
var Module = /*#__PURE__*/ function() {
    "use strict";
    function Module(application, definition) {
        _helpers.classCallCheck(this, Module);
        this.application = application;
        this.definition = blessDefinition(definition);
        this.contextsByScope = new WeakMap;
        this.connectedContexts = new Set;
    }
    _helpers.createClass(Module, [
        {
            key: "identifier",
            get: function get() {
                return this.definition.identifier;
            }
        },
        {
            key: "controllerConstructor",
            get: function get() {
                return this.definition.controllerConstructor;
            }
        },
        {
            key: "contexts",
            get: function get() {
                return Array.from(this.connectedContexts);
            }
        },
        {
            key: "connectContextForScope",
            value: function connectContextForScope(scope) {
                var context = this.fetchContextForScope(scope);
                this.connectedContexts.add(context);
                context.connect();
            }
        },
        {
            key: "disconnectContextForScope",
            value: function disconnectContextForScope(scope) {
                var context = this.contextsByScope.get(scope);
                if (context) {
                    this.connectedContexts.delete(context);
                    context.disconnect();
                }
            }
        },
        {
            key: "fetchContextForScope",
            value: function fetchContextForScope(scope) {
                var context = this.contextsByScope.get(scope);
                if (!context) {
                    context = new Context(this, scope);
                    this.contextsByScope.set(scope, context);
                }
                return context;
            }
        }
    ]);
    return Module;
}();
var ClassMap = /*#__PURE__*/ function() {
    "use strict";
    function ClassMap(scope) {
        _helpers.classCallCheck(this, ClassMap);
        this.scope = scope;
    }
    _helpers.createClass(ClassMap, [
        {
            key: "has",
            value: function has(name) {
                return this.data.has(this.getDataKey(name));
            }
        },
        {
            key: "get",
            value: function get(name) {
                return this.getAll(name)[0];
            }
        },
        {
            key: "getAll",
            value: function getAll(name) {
                var tokenString = this.data.get(this.getDataKey(name)) || "";
                return tokenize(tokenString);
            }
        },
        {
            key: "getAttributeName",
            value: function getAttributeName(name) {
                return this.data.getAttributeNameForKey(this.getDataKey(name));
            }
        },
        {
            key: "getDataKey",
            value: function getDataKey(name) {
                return "".concat(name, "-class");
            }
        },
        {
            key: "data",
            get: function get() {
                return this.scope.data;
            }
        }
    ]);
    return ClassMap;
}();
var DataMap = /*#__PURE__*/ function() {
    "use strict";
    function DataMap(scope) {
        _helpers.classCallCheck(this, DataMap);
        this.scope = scope;
    }
    _helpers.createClass(DataMap, [
        {
            key: "element",
            get: function get() {
                return this.scope.element;
            }
        },
        {
            key: "identifier",
            get: function get() {
                return this.scope.identifier;
            }
        },
        {
            key: "get",
            value: function get(key) {
                var name = this.getAttributeNameForKey(key);
                return this.element.getAttribute(name);
            }
        },
        {
            key: "set",
            value: function set(key, value) {
                var name = this.getAttributeNameForKey(key);
                this.element.setAttribute(name, value);
                return this.get(key);
            }
        },
        {
            key: "has",
            value: function has(key) {
                var name = this.getAttributeNameForKey(key);
                return this.element.hasAttribute(name);
            }
        },
        {
            key: "delete",
            value: function _delete(key) {
                if (this.has(key)) {
                    var name = this.getAttributeNameForKey(key);
                    this.element.removeAttribute(name);
                    return true;
                } else return false;
            }
        },
        {
            key: "getAttributeNameForKey",
            value: function getAttributeNameForKey(key) {
                return "data-".concat(this.identifier, "-").concat(dasherize(key));
            }
        }
    ]);
    return DataMap;
}();
var Guide = /*#__PURE__*/ function() {
    "use strict";
    function Guide(logger) {
        _helpers.classCallCheck(this, Guide);
        this.warnedKeysByObject = new WeakMap;
        this.logger = logger;
    }
    _helpers.createClass(Guide, [
        {
            key: "warn",
            value: function warn(object, key, message) {
                var warnedKeys = this.warnedKeysByObject.get(object);
                if (!warnedKeys) {
                    warnedKeys = new Set;
                    this.warnedKeysByObject.set(object, warnedKeys);
                }
                if (!warnedKeys.has(key)) {
                    warnedKeys.add(key);
                    this.logger.warn(message, object);
                }
            }
        }
    ]);
    return Guide;
}();
function attributeValueContainsToken(attributeName, token) {
    return "[".concat(attributeName, '~="').concat(token, '"]');
}
var TargetSet = /*#__PURE__*/ function() {
    "use strict";
    function TargetSet(scope) {
        _helpers.classCallCheck(this, TargetSet);
        this.scope = scope;
    }
    _helpers.createClass(TargetSet, [
        {
            key: "element",
            get: function get() {
                return this.scope.element;
            }
        },
        {
            key: "identifier",
            get: function get() {
                return this.scope.identifier;
            }
        },
        {
            key: "schema",
            get: function get() {
                return this.scope.schema;
            }
        },
        {
            key: "has",
            value: function has(targetName) {
                return this.find(targetName) != null;
            }
        },
        {
            key: "find",
            value: function find() {
                for(var _len = arguments.length, targetNames = new Array(_len), _key = 0; _key < _len; _key++){
                    targetNames[_key] = arguments[_key];
                }
                var _this = this;
                return targetNames.reduce(function(target, targetName) {
                    return target || _this.findTarget(targetName) || _this.findLegacyTarget(targetName);
                }, undefined);
            }
        },
        {
            key: "findAll",
            value: function findAll() {
                for(var _len = arguments.length, targetNames = new Array(_len), _key = 0; _key < _len; _key++){
                    targetNames[_key] = arguments[_key];
                }
                var _this = this;
                return targetNames.reduce(function(targets, targetName) {
                    return _helpers.toConsumableArray(targets).concat(_helpers.toConsumableArray(_this.findAllTargets(targetName)), _helpers.toConsumableArray(_this.findAllLegacyTargets(targetName)));
                }, []);
            }
        },
        {
            key: "findTarget",
            value: function findTarget(targetName) {
                var selector = this.getSelectorForTargetName(targetName);
                return this.scope.findElement(selector);
            }
        },
        {
            key: "findAllTargets",
            value: function findAllTargets(targetName) {
                var selector = this.getSelectorForTargetName(targetName);
                return this.scope.findAllElements(selector);
            }
        },
        {
            key: "getSelectorForTargetName",
            value: function getSelectorForTargetName(targetName) {
                var attributeName = this.schema.targetAttributeForScope(this.identifier);
                return attributeValueContainsToken(attributeName, targetName);
            }
        },
        {
            key: "findLegacyTarget",
            value: function findLegacyTarget(targetName) {
                var selector = this.getLegacySelectorForTargetName(targetName);
                return this.deprecate(this.scope.findElement(selector), targetName);
            }
        },
        {
            key: "findAllLegacyTargets",
            value: function findAllLegacyTargets(targetName) {
                var _this = this;
                var selector = this.getLegacySelectorForTargetName(targetName);
                return this.scope.findAllElements(selector).map(function(element) {
                    return _this.deprecate(element, targetName);
                });
            }
        },
        {
            key: "getLegacySelectorForTargetName",
            value: function getLegacySelectorForTargetName(targetName) {
                var targetDescriptor = "".concat(this.identifier, ".").concat(targetName);
                return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
            }
        },
        {
            key: "deprecate",
            value: function deprecate(element, targetName) {
                if (element) {
                    var identifier = this.identifier;
                    var attributeName = this.schema.targetAttribute;
                    var revisedAttributeName = this.schema.targetAttributeForScope(identifier);
                    this.guide.warn(element, "target:".concat(targetName), "Please replace ".concat(attributeName, '="').concat(identifier, ".").concat(targetName, '" with ').concat(revisedAttributeName, '="').concat(targetName, '". ') + "The ".concat(attributeName, " attribute is deprecated and will be removed in a future version of Stimulus."));
                }
                return element;
            }
        },
        {
            key: "guide",
            get: function get() {
                return this.scope.guide;
            }
        }
    ]);
    return TargetSet;
}();
var Scope = /*#__PURE__*/ function() {
    "use strict";
    function Scope(schema, element2, identifier, logger) {
        var _this = this;
        _helpers.classCallCheck(this, Scope);
        this.targets = new TargetSet(this);
        this.classes = new ClassMap(this);
        this.data = new DataMap(this);
        this.containsElement = function(element) {
            return element.closest(_this.controllerSelector) === _this.element;
        };
        this.schema = schema;
        this.element = element2;
        this.identifier = identifier;
        this.guide = new Guide(logger);
    }
    _helpers.createClass(Scope, [
        {
            key: "findElement",
            value: function findElement(selector) {
                return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
            }
        },
        {
            key: "findAllElements",
            value: function findAllElements(selector) {
                return _helpers.toConsumableArray(this.element.matches(selector) ? [
                    this.element
                ] : []).concat(_helpers.toConsumableArray(this.queryElements(selector).filter(this.containsElement)));
            }
        },
        {
            key: "queryElements",
            value: function queryElements(selector) {
                return Array.from(this.element.querySelectorAll(selector));
            }
        },
        {
            key: "controllerSelector",
            get: function get() {
                return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
            }
        }
    ]);
    return Scope;
}();
var ScopeObserver = /*#__PURE__*/ function() {
    "use strict";
    function ScopeObserver(element, schema, delegate) {
        _helpers.classCallCheck(this, ScopeObserver);
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap;
        this.scopeReferenceCounts = new WeakMap;
    }
    _helpers.createClass(ScopeObserver, [
        {
            key: "start",
            value: function start() {
                this.valueListObserver.start();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.valueListObserver.stop();
            }
        },
        {
            key: "controllerAttribute",
            get: function get() {
                return this.schema.controllerAttribute;
            }
        },
        {
            key: "parseValueForToken",
            value: function parseValueForToken(token) {
                var element = token.element, identifier = token.content;
                var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
                var scope = scopesByIdentifier.get(identifier);
                if (!scope) {
                    scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
                    scopesByIdentifier.set(identifier, scope);
                }
                return scope;
            }
        },
        {
            key: "elementMatchedValue",
            value: function elementMatchedValue(element, value) {
                var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
                this.scopeReferenceCounts.set(value, referenceCount);
                if (referenceCount == 1) this.delegate.scopeConnected(value);
            }
        },
        {
            key: "elementUnmatchedValue",
            value: function elementUnmatchedValue(element, value) {
                var referenceCount = this.scopeReferenceCounts.get(value);
                if (referenceCount) {
                    this.scopeReferenceCounts.set(value, referenceCount - 1);
                    if (referenceCount == 1) this.delegate.scopeDisconnected(value);
                }
            }
        },
        {
            key: "fetchScopesByIdentifierForElement",
            value: function fetchScopesByIdentifierForElement(element) {
                var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
                if (!scopesByIdentifier) {
                    scopesByIdentifier = new Map;
                    this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
                }
                return scopesByIdentifier;
            }
        }
    ]);
    return ScopeObserver;
}();
var Router = /*#__PURE__*/ function() {
    "use strict";
    function Router(application) {
        _helpers.classCallCheck(this, Router);
        this.application = application;
        this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
        this.scopesByIdentifier = new Multimap;
        this.modulesByIdentifier = new Map;
    }
    _helpers.createClass(Router, [
        {
            key: "element",
            get: function get() {
                return this.application.element;
            }
        },
        {
            key: "schema",
            get: function get() {
                return this.application.schema;
            }
        },
        {
            key: "logger",
            get: function get() {
                return this.application.logger;
            }
        },
        {
            key: "controllerAttribute",
            get: function get() {
                return this.schema.controllerAttribute;
            }
        },
        {
            key: "modules",
            get: function get() {
                return Array.from(this.modulesByIdentifier.values());
            }
        },
        {
            key: "contexts",
            get: function get() {
                return this.modules.reduce(function(contexts, module) {
                    return contexts.concat(module.contexts);
                }, []);
            }
        },
        {
            key: "start",
            value: function start() {
                this.scopeObserver.start();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.scopeObserver.stop();
            }
        },
        {
            key: "loadDefinition",
            value: function loadDefinition(definition) {
                this.unloadIdentifier(definition.identifier);
                var module = new Module(this.application, definition);
                this.connectModule(module);
            }
        },
        {
            key: "unloadIdentifier",
            value: function unloadIdentifier(identifier) {
                var module = this.modulesByIdentifier.get(identifier);
                if (module) this.disconnectModule(module);
            }
        },
        {
            key: "getContextForElementAndIdentifier",
            value: function getContextForElementAndIdentifier(element, identifier) {
                var module = this.modulesByIdentifier.get(identifier);
                if (module) return module.contexts.find(function(context) {
                    return context.element == element;
                });
            }
        },
        {
            key: "handleError",
            value: function handleError(error8, message, detail) {
                this.application.handleError(error8, message, detail);
            }
        },
        {
            key: "createScopeForElementAndIdentifier",
            value: function createScopeForElementAndIdentifier(element, identifier) {
                return new Scope(this.schema, element, identifier, this.logger);
            }
        },
        {
            key: "scopeConnected",
            value: function scopeConnected(scope) {
                this.scopesByIdentifier.add(scope.identifier, scope);
                var module = this.modulesByIdentifier.get(scope.identifier);
                if (module) module.connectContextForScope(scope);
            }
        },
        {
            key: "scopeDisconnected",
            value: function scopeDisconnected(scope) {
                this.scopesByIdentifier.delete(scope.identifier, scope);
                var module = this.modulesByIdentifier.get(scope.identifier);
                if (module) module.disconnectContextForScope(scope);
            }
        },
        {
            key: "connectModule",
            value: function connectModule(module) {
                this.modulesByIdentifier.set(module.identifier, module);
                var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
                scopes.forEach(function(scope) {
                    return module.connectContextForScope(scope);
                });
            }
        },
        {
            key: "disconnectModule",
            value: function disconnectModule(module) {
                this.modulesByIdentifier.delete(module.identifier);
                var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
                scopes.forEach(function(scope) {
                    return module.disconnectContextForScope(scope);
                });
            }
        }
    ]);
    return Router;
}();
var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: function(identifier) {
        return "data-".concat(identifier, "-target");
    }
};
var Application = /*#__PURE__*/ function() {
    "use strict";
    function Application() {
        var element = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.documentElement, schema = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultSchema;
        var _this = this;
        _helpers.classCallCheck(this, Application);
        this.logger = console;
        this.debug = false;
        this.logDebugActivity = function(identifier, functionName) {
            var detail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (_this.debug) _this.logFormattedMessage(identifier, functionName, detail);
        };
        this.element = element;
        this.schema = schema;
        this.dispatcher = new Dispatcher(this);
        this.router = new Router(this);
    }
    _helpers.createClass(Application, [
        {
            key: "start",
            value: function start() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return domReady();
                            case 2:
                                _this.logDebugActivity("application", "starting");
                                _this.dispatcher.start();
                                _this.router.start();
                                _this.logDebugActivity("application", "start");
                            case 6:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.logDebugActivity("application", "stopping");
                this.dispatcher.stop();
                this.router.stop();
                this.logDebugActivity("application", "stop");
            }
        },
        {
            key: "register",
            value: function register(identifier, controllerConstructor) {
                if (controllerConstructor.shouldLoad) this.load({
                    identifier: identifier,
                    controllerConstructor: controllerConstructor
                });
            }
        },
        {
            key: "load",
            value: function load(head) {
                for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    rest[_key - 1] = arguments[_key];
                }
                var _this = this;
                var definitions = Array.isArray(head) ? head : [
                    head
                ].concat(_helpers.toConsumableArray(rest));
                definitions.forEach(function(definition) {
                    return _this.router.loadDefinition(definition);
                });
            }
        },
        {
            key: "unload",
            value: function unload(head) {
                for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    rest[_key - 1] = arguments[_key];
                }
                var _this = this;
                var identifiers = Array.isArray(head) ? head : [
                    head
                ].concat(_helpers.toConsumableArray(rest));
                identifiers.forEach(function(identifier) {
                    return _this.router.unloadIdentifier(identifier);
                });
            }
        },
        {
            key: "controllers",
            get: function get() {
                return this.router.contexts.map(function(context) {
                    return context.controller;
                });
            }
        },
        {
            key: "getControllerForElementAndIdentifier",
            value: function getControllerForElementAndIdentifier(element, identifier) {
                var context = this.router.getContextForElementAndIdentifier(element, identifier);
                return context ? context.controller : null;
            }
        },
        {
            key: "handleError",
            value: function handleError(error9, message, detail) {
                var _a;
                this.logger.error("%s\n\n%o\n\n%o", message, error9, detail);
                (_a = window.onerror) === null || _a === void 0 || _a.call(window, message, "", 0, 0, error9);
            }
        },
        {
            key: "logFormattedMessage",
            value: function logFormattedMessage(identifier, functionName) {
                var detail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                detail = Object.assign({
                    application: this
                }, detail);
                this.logger.groupCollapsed("".concat(identifier, " #").concat(functionName));
                this.logger.log("details:", Object.assign({}, detail));
                this.logger.groupEnd();
            }
        }
    ], [
        {
            key: "start",
            value: function start(element, schema) {
                var application = new Application(element, schema);
                application.start();
                return application;
            }
        }
    ]);
    return Application;
}();
function domReady() {
    return new Promise(function(resolve) {
        if (document.readyState == "loading") document.addEventListener("DOMContentLoaded", function() {
            return resolve();
        });
        else resolve();
    });
}
function ClassPropertiesBlessing(constructor) {
    var classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce(function(properties, classDefinition) {
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    var _obj;
    return _obj = {}, _helpers.defineProperty(_obj, "".concat(key, "Class"), {
        get: function() {
            var classes = this.classes;
            if (classes.has(key)) return classes.get(key);
            else {
                var attribute = classes.getAttributeName(key);
                throw new Error('Missing attribute "'.concat(attribute, '"'));
            }
        }
    }), _helpers.defineProperty(_obj, "".concat(key, "Classes"), {
        get: function() {
            return this.classes.getAll(key);
        }
    }), _helpers.defineProperty(_obj, "has".concat(capitalize(key), "Class"), {
        get: function() {
            return this.classes.has(key);
        }
    }), _obj;
}
function TargetPropertiesBlessing(constructor) {
    var targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce(function(properties, targetDefinition) {
        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
}
function propertiesForTargetDefinition(name) {
    var _obj;
    return _obj = {}, _helpers.defineProperty(_obj, "".concat(name, "Target"), {
        get: function() {
            var target = this.targets.find(name);
            if (target) return target;
            else throw new Error('Missing target element "'.concat(name, '" for "').concat(this.identifier, '" controller'));
        }
    }), _helpers.defineProperty(_obj, "".concat(name, "Targets"), {
        get: function() {
            return this.targets.findAll(name);
        }
    }), _helpers.defineProperty(_obj, "has".concat(capitalize(name), "Target"), {
        get: function() {
            return this.targets.has(name);
        }
    }), _obj;
}
function ValuePropertiesBlessing(constructor) {
    var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    var propertyDescriptorMap = {
        valueDescriptorMap: {
            get: function() {
                var _this = this;
                return valueDefinitionPairs.reduce(function(result, valueDefinitionPair) {
                    var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);
                    var attributeName = _this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, _helpers.defineProperty({}, attributeName, valueDescriptor));
                }, {});
            }
        }
    };
    return valueDefinitionPairs.reduce(function(properties, valueDefinitionPair) {
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
function propertiesForValueDefinitionPair(valueDefinitionPair) {
    var definition = parseValueDefinitionPair(valueDefinitionPair);
    var key = definition.key, name = definition.name, read = definition.reader, write = definition.writer;
    var _obj;
    return _obj = {}, _helpers.defineProperty(_obj, name, {
        get: function() {
            var value = this.data.get(key);
            if (value !== null) return read(value);
            else return definition.defaultValue;
        },
        set: function(value) {
            if (value === undefined) this.data.delete(key);
            else this.data.set(key, write(value));
        }
    }), _helpers.defineProperty(_obj, "has".concat(capitalize(name)), {
        get: function() {
            return this.data.has(key) || definition.hasCustomDefaultValue;
        }
    }), _obj;
}
function parseValueDefinitionPair(param) {
    var _param = _helpers.slicedToArray(param, 2), token = _param[0], typeDefinition = _param[1];
    return valueDescriptorForTokenAndTypeDefinition(token, typeDefinition);
}
function parseValueTypeConstant(constant) {
    switch(constant){
        case Array:
            return "array";
        case Boolean:
            return "boolean";
        case Number:
            return "number";
        case Object:
            return "object";
        case String:
            return "string";
    }
}
function parseValueTypeDefault(defaultValue) {
    switch(typeof defaultValue === "undefined" ? "undefined" : _helpers.typeOf(defaultValue)){
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
    }
    if (Array.isArray(defaultValue)) return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}
function parseValueTypeObject(typeObject) {
    var typeFromObject = parseValueTypeConstant(typeObject.type);
    if (typeFromObject) {
        var defaultValueType = parseValueTypeDefault(typeObject.default);
        if (typeFromObject !== defaultValueType) throw new Error('Type "'.concat(typeFromObject, '" must match the type of the default value. Given default value: "').concat(typeObject.default, '" as "').concat(defaultValueType, '"'));
        return typeFromObject;
    }
}
function parseValueTypeDefinition(typeDefinition) {
    var typeFromObject = parseValueTypeObject(typeDefinition);
    var typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    var typeFromConstant = parseValueTypeConstant(typeDefinition);
    var type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type) return type;
    throw new Error('Unknown value type "'.concat(typeDefinition, '"'));
}
function defaultValueForDefinition(typeDefinition) {
    var constant = parseValueTypeConstant(typeDefinition);
    if (constant) return defaultValuesByType[constant];
    var defaultValue = typeDefinition.default;
    if (defaultValue !== undefined) return defaultValue;
    return typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(token, typeDefinition) {
    var key = "".concat(dasherize(token), "-value");
    var type = parseValueTypeDefinition(typeDefinition);
    return {
        type: type,
        key: key,
        name: camelize(key),
        get defaultValue () {
            return defaultValueForDefinition(typeDefinition);
        },
        get hasCustomDefaultValue () {
            return parseValueTypeDefault(typeDefinition) !== undefined;
        },
        reader: readers[type],
        writer: writers[type] || writers.default
    };
}
var defaultValuesByType = {
    get array () {
        return [];
    },
    boolean: false,
    number: 0,
    get object () {
        return {};
    },
    string: ""
};
var readers = {
    array: function(value) {
        var array = JSON.parse(value);
        if (!Array.isArray(array)) throw new TypeError("Expected array");
        return array;
    },
    boolean: function(value) {
        return !(value == "0" || value == "false");
    },
    number: function(value) {
        return Number(value);
    },
    object: function(value) {
        var object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) throw new TypeError("Expected object");
        return object;
    },
    string: function(value) {
        return value;
    }
};
var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return "".concat(value);
}
var Controller = /*#__PURE__*/ function() {
    "use strict";
    function Controller(context) {
        _helpers.classCallCheck(this, Controller);
        this.context = context;
    }
    _helpers.createClass(Controller, [
        {
            key: "application",
            get: function get() {
                return this.context.application;
            }
        },
        {
            key: "scope",
            get: function get() {
                return this.context.scope;
            }
        },
        {
            key: "element",
            get: function get() {
                return this.scope.element;
            }
        },
        {
            key: "identifier",
            get: function get() {
                return this.scope.identifier;
            }
        },
        {
            key: "targets",
            get: function get() {
                return this.scope.targets;
            }
        },
        {
            key: "classes",
            get: function get() {
                return this.scope.classes;
            }
        },
        {
            key: "data",
            get: function get() {
                return this.scope.data;
            }
        },
        {
            key: "initialize",
            value: function initialize() {}
        },
        {
            key: "connect",
            value: function connect() {}
        },
        {
            key: "disconnect",
            value: function disconnect() {}
        },
        {
            key: "dispatch",
            value: function dispatch(eventName) {
                var ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _target = ref.target, target = _target === void 0 ? this.element : _target, _detail = ref.detail, detail = _detail === void 0 ? {} : _detail, _prefix = ref.prefix, prefix = _prefix === void 0 ? this.identifier : _prefix, _bubbles = ref.bubbles, bubbles = _bubbles === void 0 ? true : _bubbles, _cancelable = ref.cancelable, cancelable = _cancelable === void 0 ? true : _cancelable;
                var type = prefix ? "".concat(prefix, ":").concat(eventName) : eventName;
                var event = new CustomEvent(type, {
                    detail: detail,
                    bubbles: bubbles,
                    cancelable: cancelable
                });
                target.dispatchEvent(event);
                return event;
            }
        }
    ], [
        {
            key: "shouldLoad",
            get: function get() {
                return true;
            }
        }
    ]);
    return Controller;
}();
Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing
];
Controller.targets = [];
Controller.values = {};

},{"@swc/helpers":"erO4s","regenerator-runtime":"12Ae8","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"erO4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayLikeToArray", ()=>_arrayLikeToArrayDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "checkPrivateRedeclaration", ()=>_checkPrivateRedeclarationDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorDestructureSet", ()=>_classApplyDescriptorDestructureDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorGet", ()=>_classApplyDescriptorGetDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorSet", ()=>_classApplyDescriptorSetDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classCheckPrivateStaticFieldDescriptor", ()=>_classCheckPrivateStaticFieldDescriptorDefault.default
);
parcelHelpers.export(exports, "classCheckPrivateStaticAccess", ()=>_classCheckPrivateStaticAccessDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldDestructureSet", ()=>_classPrivateFieldDestructureDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldInit", ()=>_classPrivateFieldInitDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseKey", ()=>_classPrivateFieldLooseKeyDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodInit", ()=>_classPrivateMethodInitDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldDestructureSet", ()=>_classStaticPrivateFieldDestructureDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "createSuper", ()=>_createSuperDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "isNativeReflectConstruct", ()=>_isNativeReflectConstructDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "unsupportedIterableToArray", ()=>_unsupportedIterableToArrayDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
parcelHelpers.export(exports, "__decorate", ()=>_tslib.__decorate
);
parcelHelpers.export(exports, "__metadata", ()=>_tslib.__metadata
);
parcelHelpers.export(exports, "__param", ()=>_tslib.__param
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classCheckPrivateStaticFieldDescriptor = require("./_class_check_private_static_field_descriptor");
var _classCheckPrivateStaticFieldDescriptorDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticFieldDescriptor);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldDestructure = require("./_class_private_field_destructure");
var _classPrivateFieldDestructureDefault = parcelHelpers.interopDefault(_classPrivateFieldDestructure);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldInit = require("./_class_private_field_init");
var _classPrivateFieldInitDefault = parcelHelpers.interopDefault(_classPrivateFieldInit);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldLooseKey = require("./_class_private_field_loose_key");
var _classPrivateFieldLooseKeyDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseKey);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodInit = require("./_class_private_method_init");
var _classPrivateMethodInitDefault = parcelHelpers.interopDefault(_classPrivateMethodInit);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldDestructure = require("./_class_static_private_field_destructure");
var _classStaticPrivateFieldDestructureDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldDestructure);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _createSuper = require("./_create_super");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);
var _tslib = require("tslib");

},{"./_apply_decorated_descriptor":"c9NX1","./_array_like_to_array":"9gDZj","./_array_with_holes":"f2RVY","./_array_without_holes":"9G5hu","./_assert_this_initialized":"hb0Uz","./_async_generator":"3e3Cq","./_async_generator_delegate":"aFowE","./_async_iterator":"kDn5G","./_async_to_generator":"69ywl","./_await_async_generator":"47kVK","./_await_value":"kOPdt","./_check_private_redeclaration":"3VjCv","./_class_apply_descriptor_destructure":"3DAxP","./_class_apply_descriptor_get":"4chdp","./_class_apply_descriptor_set":"PDrmh","./_class_call_check":"5thSN","./_class_check_private_static_field_descriptor":"lcbN3","./_class_check_private_static_access":"8285v","./_class_name_tdz_error":"kLeIP","./_class_private_field_destructure":"czvQw","./_class_private_field_get":"hiZIF","./_class_private_field_init":"dBi4n","./_class_private_field_loose_base":"iIxKI","./_class_private_field_loose_key":"u4WsB","./_class_private_field_set":"3aItm","./_class_private_method_get":"gKMrA","./_class_private_method_init":"dE2Q4","./_class_private_method_set":"jDhxx","./_class_static_private_field_destructure":"5VQU7","./_class_static_private_field_spec_get":"79XlC","./_class_static_private_field_spec_set":"hKsVp","./_construct":"bLTlt","./_create_class":"cMLkg","./_create_super":"inTdM","./_decorate":"5M3uX","./_defaults":"jPoWh","./_define_enumerable_properties":"8xWnI","./_define_property":"c7yiB","./_extends":"by2GU","./_get":"d3ZpD","./_get_prototype_of":"4Z2sn","./_inherits":"hoEyE","./_inherits_loose":"bpWmo","./_initializer_define_property":"5WZDp","./_initializer_warning_helper":"GCE4p","./_instanceof":"j6WhW","./_interop_require_default":"9sQ50","./_interop_require_wildcard":"ejKpM","./_is_native_function":"8d7fi","./_is_native_reflect_construct":"b8vXc","./_iterable_to_array":"lY6Yg","./_iterable_to_array_limit":"61jYg","./_iterable_to_array_limit_loose":"bvfpN","./_jsx":"9hq6e","./_new_arrow_check":"4VyBi","./_non_iterable_rest":"d6ywz","./_non_iterable_spread":"29F6O","./_object_spread":"jaxa1","./_object_without_properties":"eJaOZ","./_object_without_properties_loose":"6eqIr","./_possible_constructor_return":"cWetj","./_read_only_error":"3xmWo","./_set":"kehyh","./_set_prototype_of":"hkEkh","./_skip_first_generator_next":"lqj0R","./_sliced_to_array":"k8UMw","./_sliced_to_array_loose":"7tjhK","./_super_prop_base":"lGKRS","./_tagged_template_literal":"d3FCJ","./_tagged_template_literal_loose":"fbTUf","./_throw":"89Ibv","./_to_array":"lrbT1","./_to_consumable_array":"3TaI4","./_to_primitive":"aO5VI","./_to_property_key":"d5hF2","./_type_of":"hGmQp","./_unsupported_iterable_to_array":"33Ojc","./_wrap_async_generator":"kfhw9","./_wrap_native_super":"2wCpr","tslib":"edJ4f","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"c9NX1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc1 = {};
    Object["keys"](descriptor).forEach(function(key) {
        desc1[key] = descriptor[key];
    });
    desc1.enumerable = !!desc1.enumerable;
    desc1.configurable = !!desc1.configurable;
    if ('value' in desc1 || desc1.initializer) desc1.writable = true;
    desc1 = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc1);
    var hasAccessor = Object.prototype.hasOwnProperty.call(desc1, 'get') || Object.prototype.hasOwnProperty.call(desc1, 'set');
    if (context && desc1.initializer !== void 0 && !hasAccessor) {
        desc1.value = desc1.initializer ? desc1.initializer.call(context) : void 0;
        desc1.initializer = undefined;
    }
    if (hasAccessor) {
        delete desc1.writable;
        delete desc1.initializer;
        delete desc1.value;
    }
    if (desc1.initializer === void 0) {
        Object["defineProperty"](target, property, desc1);
        desc1 = null;
    }
    return desc1;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9gDZj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
exports.default = _arrayLikeToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"f2RVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9G5hu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArrayDefault.default(arr);
}
exports.default = _arrayWithoutHoles;

},{"./_array_like_to_array":"9gDZj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hb0Uz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3e3Cq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg1) {
        try {
            var result = gen[key](arg1);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"kOPdt","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kOPdt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aFowE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kDn5G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"69ywl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"47kVK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"kOPdt","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3VjCv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
exports.default = _checkPrivateRedeclaration;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3DAxP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
        if (!("__destrObj" in descriptor)) descriptor.__destrObj = {
            set value (v){
                descriptor.set.call(receiver, v);
            }
        };
        return descriptor.__destrObj;
    } else {
        if (!descriptor.writable) // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        return descriptor;
    }
}
exports.default = _classApplyDescriptorDestructureSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4chdp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
exports.default = _classApplyDescriptorGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"PDrmh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
exports.default = _classApplyDescriptorSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5thSN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lcbN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) throw new TypeError("attempted to " + action + " private static field before its declaration");
}
exports.default = _classCheckPrivateStaticFieldDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8285v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
}
exports.default = _classCheckPrivateStaticAccess;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kLeIP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"czvQw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "set");
    return _classApplyDescriptorDestructureDefault.default(receiver, descriptor);
}
exports.default = _classPrivateFieldDestructureSet;

},{"./_class_extract_field_descriptor":"8qVNy","./_class_apply_descriptor_destructure":"3DAxP","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8qVNy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
exports.default = _classExtractFieldDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hiZIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "get");
    return _classApplyDescriptorGetDefault.default(receiver, descriptor);
}
exports.default = _classPrivateFieldGet;

},{"./_class_extract_field_descriptor":"8qVNy","./_class_apply_descriptor_get":"4chdp","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dBi4n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
function _classPrivateFieldInit(obj, privateMap, value) {
    _checkPrivateRedeclarationDefault.default(obj, privateMap);
    privateMap.set(obj, value);
}
exports.default = _classPrivateFieldInit;

},{"./_check_private_redeclaration":"3VjCv","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iIxKI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"u4WsB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
exports.default = _classPrivateFieldLooseKey;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3aItm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "set");
    _classApplyDescriptorSetDefault.default(receiver, descriptor, value);
    return value;
}
exports.default = _classPrivateFieldSet;

},{"./_class_extract_field_descriptor":"8qVNy","./_class_apply_descriptor_set":"PDrmh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gKMrA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dE2Q4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
function _classPrivateMethodInit(obj, privateSet) {
    _checkPrivateRedeclarationDefault.default(obj, privateSet);
    privateSet.add(obj);
}
exports.default = _classPrivateMethodInit;

},{"./_check_private_redeclaration":"3VjCv","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jDhxx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5VQU7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "set");
    return _classApplyDescriptorDestructureDefault.default(receiver, descriptor);
}
exports.default = _classStaticPrivateFieldDestructureSet;

},{"./_class_check_private_static_access":"8285v","./_class_apply_descriptor_destructure":"3DAxP","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"79XlC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "get");
    return _classApplyDescriptorGetDefault.default(receiver, descriptor);
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"./_class_check_private_static_access":"8285v","./_class_apply_descriptor_get":"4chdp","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hKsVp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "set");
    _classApplyDescriptorSetDefault.default(receiver, descriptor, value);
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"./_class_check_private_static_access":"8285v","./_class_apply_descriptor_set":"PDrmh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bLTlt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent1, args1, Class1) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOfDefault.default(instance, Class.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"./_set_prototype_of":"hkEkh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hkEkh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o1, p1) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return setPrototypeOf(o1, p1);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cMLkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"inTdM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstructDefault.default();
    return function _createSuperInternal() {
        var Super = _getPrototypeOfDefault.default(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOfDefault.default(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturnDefault.default(this, result);
    };
}
exports.default = _createSuper;

},{"./_is_native_reflect_construct":"b8vXc","./_get_prototype_of":"4Z2sn","./_possible_constructor_return":"cWetj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"b8vXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
exports.default = _isNativeReflectConstruct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4Z2sn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o1) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o1);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cWetj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"hb0Uz","./_type_of":"hGmQp","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hGmQp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5M3uX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other1;
        if (element.kind === "method" && (other1 = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other1.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other1)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other1.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other1)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other1.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other1);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({}, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"lrbT1","./_to_property_key":"d5hF2","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lrbT1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"f2RVY","./_iterable_to_array":"lY6Yg","./_non_iterable_rest":"d6ywz","./_unsupported_iterable_to_array":"33Ojc","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lY6Yg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d6ywz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"33Ojc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArrayDefault.default(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArrayDefault.default(o, minLen);
}
exports.default = _unsupportedIterableToArray;

},{"./_array_like_to_array":"9gDZj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d5hF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"hGmQp","./_to_primitive":"aO5VI","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aO5VI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"hGmQp","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jPoWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8xWnI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"c7yiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"by2GU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d3ZpD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get(target, property, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return get(target1, property1, receiver1);
}
function _get(target, property, receiver) {
    return get(target, property, receiver);
}
exports.default = _get;

},{"./_super_prop_base":"lGKRS","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lGKRS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"4Z2sn","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hoEyE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"hkEkh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bpWmo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5WZDp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"GCE4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"j6WhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return !!right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9sQ50":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ejKpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8d7fi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"61jYg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bvfpN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    for(_i = _i.call(arr); !(_step = _i.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9hq6e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {};
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4VyBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"29F6O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jaxa1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"c7yiB","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eJaOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"6eqIr","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6eqIr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3xmWo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kehyh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _definePropertyDefault.default(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"c7yiB","./_super_prop_base":"lGKRS","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lqj0R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"k8UMw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"f2RVY","./_iterable_to_array":"lY6Yg","./_non_iterable_rest":"d6ywz","./_unsupported_iterable_to_array":"33Ojc","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7tjhK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"f2RVY","./_iterable_to_array_limit_loose":"bvfpN","./_non_iterable_rest":"d6ywz","./_unsupported_iterable_to_array":"33Ojc","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d3FCJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fbTUf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"89Ibv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3TaI4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _unsupportedIterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"9G5hu","./_iterable_to_array":"lY6Yg","./_non_iterable_spread":"29F6O","./_unsupported_iterable_to_array":"33Ojc","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kfhw9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"3e3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2wCpr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunctionDefault.default(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class);
    };
    return wrapNativeSuper(Class1);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"bLTlt","./_is_native_function":"8d7fi","./_get_prototype_of":"4Z2sn","./_set_prototype_of":"hkEkh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"edJ4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", function() {
    return __extends;
});
parcelHelpers.export(exports, "__assign", function() {
    return __assign;
});
parcelHelpers.export(exports, "__rest", function() {
    return __rest;
});
parcelHelpers.export(exports, "__decorate", function() {
    return __decorate;
});
parcelHelpers.export(exports, "__param", function() {
    return __param;
});
parcelHelpers.export(exports, "__metadata", function() {
    return __metadata;
});
parcelHelpers.export(exports, "__awaiter", function() {
    return __awaiter;
});
parcelHelpers.export(exports, "__generator", function() {
    return __generator;
});
parcelHelpers.export(exports, "__createBinding", function() {
    return __createBinding;
});
parcelHelpers.export(exports, "__exportStar", function() {
    return __exportStar;
});
parcelHelpers.export(exports, "__values", function() {
    return __values;
});
parcelHelpers.export(exports, "__read", function() {
    return __read;
});
/** @deprecated */ parcelHelpers.export(exports, "__spread", function() {
    return __spread;
});
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", function() {
    return __spreadArrays;
});
parcelHelpers.export(exports, "__spreadArray", function() {
    return __spreadArray;
});
parcelHelpers.export(exports, "__await", function() {
    return __await;
});
parcelHelpers.export(exports, "__asyncGenerator", function() {
    return __asyncGenerator;
});
parcelHelpers.export(exports, "__asyncDelegator", function() {
    return __asyncDelegator;
});
parcelHelpers.export(exports, "__asyncValues", function() {
    return __asyncValues;
});
parcelHelpers.export(exports, "__makeTemplateObject", function() {
    return __makeTemplateObject;
});
parcelHelpers.export(exports, "__importStar", function() {
    return __importStar;
});
parcelHelpers.export(exports, "__importDefault", function() {
    return __importDefault;
});
parcelHelpers.export(exports, "__classPrivateFieldGet", function() {
    return __classPrivateFieldGet;
});
parcelHelpers.export(exports, "__classPrivateFieldSet", function() {
    return __classPrivateFieldSet;
});
parcelHelpers.export(exports, "__classPrivateFieldIn", function() {
    return __classPrivateFieldIn;
});
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function get() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function __setModuleDefault(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"12Ae8":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err1) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(module.exports);
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"lw7OH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PageRenderer", function() {
    return PageRenderer;
});
parcelHelpers.export(exports, "PageSnapshot", function() {
    return PageSnapshot;
});
parcelHelpers.export(exports, "clearCache", function() {
    return clearCache;
});
parcelHelpers.export(exports, "connectStreamSource", function() {
    return connectStreamSource;
});
parcelHelpers.export(exports, "disconnectStreamSource", function() {
    return disconnectStreamSource;
});
parcelHelpers.export(exports, "navigator", function() {
    return navigator$1;
});
parcelHelpers.export(exports, "registerAdapter", function() {
    return registerAdapter;
});
parcelHelpers.export(exports, "renderStreamMessage", function() {
    return renderStreamMessage;
});
parcelHelpers.export(exports, "session", function() {
    return session;
});
parcelHelpers.export(exports, "setConfirmMethod", function() {
    return setConfirmMethod;
});
parcelHelpers.export(exports, "setProgressBarDelay", function() {
    return setProgressBarDelay;
});
parcelHelpers.export(exports, "start", function() {
    return start;
});
parcelHelpers.export(exports, "visit", function() {
    return visit;
});
var _helpers = require("@swc/helpers");
var _regeneratorRuntime = require("regenerator-runtime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
function _templateObject() {
    var data = _helpers.taggedTemplateLiteral([
        "\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 9999;\n        transition:\n          width ",
        "ms ease-out,\n          opacity ",
        "ms ",
        "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _helpers.taggedTemplateLiteral([
        '\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements\n\n        \u2014\u2014\n        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s\n      '
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
/*
Turbo 7.1.0
Copyright © 2021 Basecamp, LLC
 */ (function() {
    if (window.Reflect === undefined || window.customElements === undefined || window.customElements.polyfillWrapFlushCallback) return;
    var BuiltInHTMLElement = HTMLElement;
    var wrapperForTheName = {
        'HTMLElement': function HTMLElement() {
            return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
        }
    };
    window.HTMLElement = wrapperForTheName['HTMLElement'];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2019 Javan Makhmali
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ (function(prototype) {
    if (typeof prototype.requestSubmit == "function") return;
    prototype.requestSubmit = function(submitter) {
        if (submitter) {
            validateSubmitter(submitter, this);
            submitter.click();
        } else {
            submitter = document.createElement("input");
            submitter.type = "submit";
            submitter.hidden = true;
            this.appendChild(submitter);
            submitter.click();
            this.removeChild(submitter);
        }
    };
    function validateSubmitter(submitter, form) {
        submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
        submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
        submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
    }
    function raise(errorConstructor, message, name) {
        throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name);
    }
})(HTMLFormElement.prototype);
var submittersByForm = new WeakMap;
function findSubmitterFromClickTarget(target) {
    var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
    var candidate = element ? element.closest("input, button") : null;
    return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
}
function clickCaptured(event) {
    var submitter = findSubmitterFromClickTarget(event.target);
    if (submitter && submitter.form) submittersByForm.set(submitter.form, submitter);
}
(function() {
    if ("submitter" in Event.prototype) return;
    var prototype;
    if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor)) prototype = window.SubmitEvent.prototype;
    else if ("SubmitEvent" in window) return;
    else prototype = window.Event.prototype;
    addEventListener("click", clickCaptured, true);
    Object.defineProperty(prototype, "submitter", {
        get: function() {
            if (this.type == "submit" && this.target instanceof HTMLFormElement) return submittersByForm.get(this.target);
        }
    });
})();
var FrameLoadingStyle;
(function(FrameLoadingStyle1) {
    FrameLoadingStyle1["eager"] = "eager";
    FrameLoadingStyle1["lazy"] = "lazy";
})(FrameLoadingStyle || (FrameLoadingStyle = {}));
var FrameElement = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    _helpers.inherits(FrameElement, HTMLElement);
    var _super = _helpers.createSuper(FrameElement);
    function FrameElement() {
        _helpers.classCallCheck(this, FrameElement);
        var _this;
        _this = _super.call(this);
        _this.loaded = Promise.resolve();
        _this.delegate = new FrameElement.delegateConstructor(_helpers.assertThisInitialized(_this));
        return _this;
    }
    _helpers.createClass(FrameElement, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.delegate.connect();
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                this.delegate.disconnect();
            }
        },
        {
            key: "reload",
            value: function reload() {
                var src = this.src;
                this.src = null;
                this.src = src;
            }
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name) {
                if (name == "loading") this.delegate.loadingStyleChanged();
                else if (name == "src") this.delegate.sourceURLChanged();
                else this.delegate.disabledChanged();
            }
        },
        {
            key: "src",
            get: function get() {
                return this.getAttribute("src");
            },
            set: function set(value) {
                if (value) this.setAttribute("src", value);
                else this.removeAttribute("src");
            }
        },
        {
            key: "loading",
            get: function get() {
                return frameLoadingStyleFromString(this.getAttribute("loading") || "");
            },
            set: function set(value) {
                if (value) this.setAttribute("loading", value);
                else this.removeAttribute("loading");
            }
        },
        {
            key: "disabled",
            get: function get() {
                return this.hasAttribute("disabled");
            },
            set: function set(value) {
                if (value) this.setAttribute("disabled", "");
                else this.removeAttribute("disabled");
            }
        },
        {
            key: "autoscroll",
            get: function get() {
                return this.hasAttribute("autoscroll");
            },
            set: function set(value) {
                if (value) this.setAttribute("autoscroll", "");
                else this.removeAttribute("autoscroll");
            }
        },
        {
            key: "complete",
            get: function get() {
                return !this.delegate.isLoading;
            }
        },
        {
            key: "isActive",
            get: function get() {
                return this.ownerDocument === document && !this.isPreview;
            }
        },
        {
            key: "isPreview",
            get: function get() {
                var _a, _b;
                return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
            }
        }
    ], [
        {
            key: "observedAttributes",
            get: function get() {
                return [
                    "disabled",
                    "loading",
                    "src"
                ];
            }
        }
    ]);
    return FrameElement;
}(_helpers.wrapNativeSuper(HTMLElement));
function frameLoadingStyleFromString(style) {
    switch(style.toLowerCase()){
        case "lazy":
            return FrameLoadingStyle.lazy;
        default:
            return FrameLoadingStyle.eager;
    }
}
function expandURL(locatable) {
    return new URL(locatable.toString(), document.baseURI);
}
function getAnchor(url) {
    var anchorMatch;
    if (url.hash) return url.hash.slice(1);
    else if (anchorMatch = url.href.match(/#(.*)$/)) return anchorMatch[1];
}
function getAction(form, submitter) {
    var action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) || form.getAttribute("action") || form.action;
    return expandURL(action);
}
function getExtension(url) {
    return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
}
function isHTML(url) {
    return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml))$/);
}
function isPrefixedBy(baseURL, url) {
    var prefix = getPrefix(url);
    return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
}
function locationIsVisitable(location, rootLocation) {
    return isPrefixedBy(location, rootLocation) && isHTML(location);
}
function getRequestURL(url) {
    var anchor = getAnchor(url);
    return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
}
function toCacheKey(url) {
    return getRequestURL(url);
}
function urlsAreEqual(left, right) {
    return expandURL(left).href == expandURL(right).href;
}
function getPathComponents(url) {
    return url.pathname.split("/").slice(1);
}
function getLastPathComponent(url) {
    return getPathComponents(url).slice(-1)[0];
}
function getPrefix(url) {
    return addTrailingSlash(url.origin + url.pathname);
}
function addTrailingSlash(value) {
    return value.endsWith("/") ? value : value + "/";
}
var FetchResponse = /*#__PURE__*/ function() {
    "use strict";
    function FetchResponse(response) {
        _helpers.classCallCheck(this, FetchResponse);
        this.response = response;
    }
    _helpers.createClass(FetchResponse, [
        {
            key: "succeeded",
            get: function get() {
                return this.response.ok;
            }
        },
        {
            key: "failed",
            get: function get() {
                return !this.succeeded;
            }
        },
        {
            key: "clientError",
            get: function get() {
                return this.statusCode >= 400 && this.statusCode <= 499;
            }
        },
        {
            key: "serverError",
            get: function get() {
                return this.statusCode >= 500 && this.statusCode <= 599;
            }
        },
        {
            key: "redirected",
            get: function get() {
                return this.response.redirected;
            }
        },
        {
            key: "location",
            get: function get() {
                return expandURL(this.response.url);
            }
        },
        {
            key: "isHTML",
            get: function get() {
                return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
            }
        },
        {
            key: "statusCode",
            get: function get() {
                return this.response.status;
            }
        },
        {
            key: "contentType",
            get: function get() {
                return this.header("Content-Type");
            }
        },
        {
            key: "responseText",
            get: function get() {
                return this.response.clone().text();
            }
        },
        {
            key: "responseHTML",
            get: function get() {
                if (this.isHTML) return this.response.clone().text();
                else return Promise.resolve(undefined);
            }
        },
        {
            key: "header",
            value: function header(name) {
                return this.response.headers.get(name);
            }
        }
    ]);
    return FetchResponse;
}();
function dispatch(eventName) {
    var ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, target = ref.target, cancelable = ref.cancelable, detail = ref.detail;
    var event = new CustomEvent(eventName, {
        cancelable: cancelable,
        bubbles: true,
        detail: detail
    });
    if (target && target.isConnected) target.dispatchEvent(event);
    else document.documentElement.dispatchEvent(event);
    return event;
}
function nextAnimationFrame() {
    return new Promise(function(resolve) {
        return requestAnimationFrame(function() {
            return resolve();
        });
    });
}
function nextEventLoopTick() {
    return new Promise(function(resolve) {
        return setTimeout(function() {
            return resolve();
        }, 0);
    });
}
function nextMicrotask() {
    return Promise.resolve();
}
function parseHTMLDocument() {
    var html = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return new DOMParser().parseFromString(html, "text/html");
}
function unindent(strings) {
    for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        values[_key - 1] = arguments[_key];
    }
    var lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
    var match = lines[0].match(/^\s+/);
    var indent = match ? match[0].length : 0;
    return lines.map(function(line) {
        return line.slice(indent);
    }).join("\n");
}
function interpolate(strings, values) {
    return strings.reduce(function(result, string, i) {
        var value = values[i] == undefined ? "" : values[i];
        return result + string + value;
    }, "");
}
function uuid() {
    return Array.apply(null, {
        length: 36
    }).map(function(_, i) {
        if (i == 8 || i == 13 || i == 18 || i == 23) return "-";
        else if (i == 14) return "4";
        else if (i == 19) return (Math.floor(Math.random() * 4) + 8).toString(16);
        else return Math.floor(Math.random() * 15).toString(16);
    }).join("");
}
function getAttribute(attributeName) {
    for(var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        elements[_key - 1] = arguments[_key];
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = elements.map(function(element) {
            return element === null || element === void 0 ? void 0 : element.getAttribute(attributeName);
        })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            if (typeof value == "string") return value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return null;
}
function markAsBusy() {
    for(var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++){
        elements[_key] = arguments[_key];
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var element = _step.value;
            if (element.localName == "turbo-frame") element.setAttribute("busy", "");
            element.setAttribute("aria-busy", "true");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function clearBusyState() {
    for(var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++){
        elements[_key] = arguments[_key];
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var element = _step.value;
            if (element.localName == "turbo-frame") element.removeAttribute("busy");
            element.removeAttribute("aria-busy");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
var FetchMethod;
(function(FetchMethod1) {
    FetchMethod1[FetchMethod1["get"] = 0] = "get";
    FetchMethod1[FetchMethod1["post"] = 1] = "post";
    FetchMethod1[FetchMethod1["put"] = 2] = "put";
    FetchMethod1[FetchMethod1["patch"] = 3] = "patch";
    FetchMethod1[FetchMethod1["delete"] = 4] = "delete";
})(FetchMethod || (FetchMethod = {}));
function fetchMethodFromString(method) {
    switch(method.toLowerCase()){
        case "get":
            return FetchMethod.get;
        case "post":
            return FetchMethod.post;
        case "put":
            return FetchMethod.put;
        case "patch":
            return FetchMethod.patch;
        case "delete":
            return FetchMethod.delete;
    }
}
var FetchRequest = /*#__PURE__*/ function() {
    "use strict";
    function FetchRequest(delegate, method, location) {
        var body = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : new URLSearchParams, target = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
        _helpers.classCallCheck(this, FetchRequest);
        this.abortController = new AbortController;
        this.resolveRequestPromise = function(value) {};
        this.delegate = delegate;
        this.method = method;
        this.headers = this.defaultHeaders;
        this.body = body;
        this.url = location;
        this.target = target;
    }
    _helpers.createClass(FetchRequest, [
        {
            key: "location",
            get: function get() {
                return this.url;
            }
        },
        {
            key: "params",
            get: function get() {
                return this.url.searchParams;
            }
        },
        {
            key: "entries",
            get: function get() {
                return this.body ? Array.from(this.body.entries()) : [];
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                this.abortController.abort();
            }
        },
        {
            key: "perform",
            value: function perform() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var _a, _b, fetchOptions, response;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ;
                                fetchOptions = _this.fetchOptions;
                                (_b = (_a = _this.delegate).prepareHeadersForRequest) === null || _b === void 0 || _b.call(_a, _this.headers, _this);
                                _ctx.next = 5;
                                return _this.allowRequestToBeIntercepted(fetchOptions);
                            case 5:
                                _ctx.prev = 5;
                                _this.delegate.requestStarted(_this);
                                _ctx.next = 9;
                                return fetch(_this.url.href, fetchOptions);
                            case 9:
                                response = _ctx.sent;
                                _ctx.next = 12;
                                return _this.receive(response);
                            case 12:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 15:
                                _ctx.prev = 15;
                                _ctx.t0 = _ctx["catch"](5);
                                if (!(_ctx.t0.name !== 'AbortError')) {
                                    _ctx.next = 20;
                                    break;
                                }
                                _this.delegate.requestErrored(_this, _ctx.t0);
                                throw _ctx.t0;
                            case 20:
                                _ctx.prev = 20;
                                _this.delegate.requestFinished(_this);
                                return _ctx.finish(20);
                            case 23:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            5,
                            15,
                            20,
                            23
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "receive",
            value: function receive(response) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var fetchResponse, event;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                fetchResponse = new FetchResponse(response);
                                event = dispatch("turbo:before-fetch-response", {
                                    cancelable: true,
                                    detail: {
                                        fetchResponse: fetchResponse
                                    },
                                    target: _this.target
                                });
                                if (event.defaultPrevented) _this.delegate.requestPreventedHandlingResponse(_this, fetchResponse);
                                else if (fetchResponse.succeeded) _this.delegate.requestSucceededWithResponse(_this, fetchResponse);
                                else _this.delegate.requestFailedWithResponse(_this, fetchResponse);
                                return _ctx.abrupt("return", fetchResponse);
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "fetchOptions",
            get: function get() {
                var _a;
                return {
                    method: FetchMethod[this.method].toUpperCase(),
                    credentials: "same-origin",
                    headers: this.headers,
                    redirect: "follow",
                    body: this.isIdempotent ? null : this.body,
                    signal: this.abortSignal,
                    referrer: (_a = this.delegate.referrer) === null || _a === void 0 ? void 0 : _a.href
                };
            }
        },
        {
            key: "defaultHeaders",
            get: function get() {
                return {
                    "Accept": "text/html, application/xhtml+xml"
                };
            }
        },
        {
            key: "isIdempotent",
            get: function get() {
                return this.method == FetchMethod.get;
            }
        },
        {
            key: "abortSignal",
            get: function get() {
                return this.abortController.signal;
            }
        },
        {
            key: "allowRequestToBeIntercepted",
            value: function allowRequestToBeIntercepted(fetchOptions) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var requestInterception, event;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                requestInterception = new Promise(function(resolve) {
                                    return _this.resolveRequestPromise = resolve;
                                });
                                event = dispatch("turbo:before-fetch-request", {
                                    cancelable: true,
                                    detail: {
                                        fetchOptions: fetchOptions,
                                        url: _this.url,
                                        resume: _this.resolveRequestPromise
                                    },
                                    target: _this.target
                                });
                                if (!event.defaultPrevented) {
                                    _ctx.next = 5;
                                    break;
                                }
                                _ctx.next = 5;
                                return requestInterception;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return FetchRequest;
}();
var AppearanceObserver = /*#__PURE__*/ function() {
    "use strict";
    function AppearanceObserver(delegate, element) {
        var _this = this;
        _helpers.classCallCheck(this, AppearanceObserver);
        this.started = false;
        this.intersect = function(entries) {
            var lastEntry = entries.slice(-1)[0];
            if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) _this.delegate.elementAppearedInViewport(_this.element);
        };
        this.delegate = delegate;
        this.element = element;
        this.intersectionObserver = new IntersectionObserver(this.intersect);
    }
    _helpers.createClass(AppearanceObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    this.started = true;
                    this.intersectionObserver.observe(this.element);
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    this.started = false;
                    this.intersectionObserver.unobserve(this.element);
                }
            }
        }
    ]);
    return AppearanceObserver;
}();
var StreamMessage = /*#__PURE__*/ function() {
    "use strict";
    function StreamMessage(html) {
        _helpers.classCallCheck(this, StreamMessage);
        this.templateElement = document.createElement("template");
        this.templateElement.innerHTML = html;
    }
    _helpers.createClass(StreamMessage, [
        {
            key: "fragment",
            get: function get() {
                var fragment = document.createDocumentFragment();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.foreignElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var element = _step.value;
                        fragment.appendChild(document.importNode(element, true));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return fragment;
            }
        },
        {
            key: "foreignElements",
            get: function get() {
                return this.templateChildren.reduce(function(streamElements, child) {
                    if (child.tagName.toLowerCase() == "turbo-stream") return _helpers.toConsumableArray(streamElements).concat([
                        child
                    ]);
                    else return streamElements;
                }, []);
            }
        },
        {
            key: "templateChildren",
            get: function get() {
                return Array.from(this.templateElement.content.children);
            }
        }
    ], [
        {
            key: "wrap",
            value: function wrap(message) {
                if (typeof message == "string") return new this(message);
                else return message;
            }
        }
    ]);
    return StreamMessage;
}();
StreamMessage.contentType = "text/vnd.turbo-stream.html";
var FormSubmissionState;
(function(FormSubmissionState1) {
    FormSubmissionState1[FormSubmissionState1["initialized"] = 0] = "initialized";
    FormSubmissionState1[FormSubmissionState1["requesting"] = 1] = "requesting";
    FormSubmissionState1[FormSubmissionState1["waiting"] = 2] = "waiting";
    FormSubmissionState1[FormSubmissionState1["receiving"] = 3] = "receiving";
    FormSubmissionState1[FormSubmissionState1["stopping"] = 4] = "stopping";
    FormSubmissionState1[FormSubmissionState1["stopped"] = 5] = "stopped";
})(FormSubmissionState || (FormSubmissionState = {}));
var FormEnctype;
(function(FormEnctype1) {
    FormEnctype1["urlEncoded"] = "application/x-www-form-urlencoded";
    FormEnctype1["multipart"] = "multipart/form-data";
    FormEnctype1["plain"] = "text/plain";
})(FormEnctype || (FormEnctype = {}));
function formEnctypeFromString(encoding) {
    switch(encoding.toLowerCase()){
        case FormEnctype.multipart:
            return FormEnctype.multipart;
        case FormEnctype.plain:
            return FormEnctype.plain;
        default:
            return FormEnctype.urlEncoded;
    }
}
var FormSubmission = /*#__PURE__*/ function() {
    "use strict";
    function FormSubmission(delegate, formElement, submitter) {
        var mustRedirect = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        _helpers.classCallCheck(this, FormSubmission);
        this.state = FormSubmissionState.initialized;
        this.delegate = delegate;
        this.formElement = formElement;
        this.submitter = submitter;
        this.formData = buildFormData(formElement, submitter);
        this.location = expandURL(this.action);
        if (this.method == FetchMethod.get) mergeFormDataEntries(this.location, _helpers.toConsumableArray(this.body.entries()));
        this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body, this.formElement);
        this.mustRedirect = mustRedirect;
    }
    _helpers.createClass(FormSubmission, [
        {
            key: "method",
            get: function get() {
                var _a;
                var method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
                return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
            }
        },
        {
            key: "action",
            get: function get() {
                var _a;
                var formElementAction = typeof this.formElement.action === 'string' ? this.formElement.action : null;
                return ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formaction")) || this.formElement.getAttribute("action") || formElementAction || "";
            }
        },
        {
            key: "body",
            get: function get() {
                if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) return new URLSearchParams(this.stringFormData);
                else return this.formData;
            }
        },
        {
            key: "enctype",
            get: function get() {
                var _a;
                return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
            }
        },
        {
            key: "isIdempotent",
            get: function get() {
                return this.fetchRequest.isIdempotent;
            }
        },
        {
            key: "stringFormData",
            get: function get() {
                return _helpers.toConsumableArray(this.formData).reduce(function(entries, param) {
                    var _param = _helpers.slicedToArray(param, 2), name = _param[0], value = _param[1];
                    return entries.concat(typeof value == "string" ? [
                        [
                            name,
                            value
                        ]
                    ] : []);
                }, []);
            }
        },
        {
            key: "confirmationMessage",
            get: function get() {
                return this.formElement.getAttribute("data-turbo-confirm");
            }
        },
        {
            key: "needsConfirmation",
            get: function get() {
                return this.confirmationMessage !== null;
            }
        },
        {
            key: "start",
            value: function start() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var initialized, requesting, answer;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                initialized = FormSubmissionState.initialized, requesting = FormSubmissionState.requesting;
                                if (!_this.needsConfirmation) {
                                    _ctx.next = 5;
                                    break;
                                }
                                answer = FormSubmission.confirmMethod(_this.confirmationMessage, _this.formElement);
                                if (answer) {
                                    _ctx.next = 5;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 5:
                                if (!(_this.state == initialized)) {
                                    _ctx.next = 8;
                                    break;
                                }
                                _this.state = requesting;
                                return _ctx.abrupt("return", _this.fetchRequest.perform());
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var stopping = FormSubmissionState.stopping, stopped = FormSubmissionState.stopped;
                if (this.state != stopping && this.state != stopped) {
                    this.state = stopping;
                    this.fetchRequest.cancel();
                    return true;
                }
            }
        },
        {
            key: "prepareHeadersForRequest",
            value: function prepareHeadersForRequest(headers, request) {
                if (!request.isIdempotent) {
                    var token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");
                    if (token) headers["X-CSRF-Token"] = token;
                    headers["Accept"] = [
                        StreamMessage.contentType,
                        headers["Accept"]
                    ].join(", ");
                }
            }
        },
        {
            key: "requestStarted",
            value: function requestStarted(request) {
                var _a;
                this.state = FormSubmissionState.waiting;
                (_a = this.submitter) === null || _a === void 0 || _a.setAttribute("disabled", "");
                dispatch("turbo:submit-start", {
                    target: this.formElement,
                    detail: {
                        formSubmission: this
                    }
                });
                this.delegate.formSubmissionStarted(this);
            }
        },
        {
            key: "requestPreventedHandlingResponse",
            value: function requestPreventedHandlingResponse(request, response) {
                this.result = {
                    success: response.succeeded,
                    fetchResponse: response
                };
            }
        },
        {
            key: "requestSucceededWithResponse",
            value: function requestSucceededWithResponse(request, response) {
                if (response.clientError || response.serverError) this.delegate.formSubmissionFailedWithResponse(this, response);
                else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
                    var error = new Error("Form responses must redirect to another location");
                    this.delegate.formSubmissionErrored(this, error);
                } else {
                    this.state = FormSubmissionState.receiving;
                    this.result = {
                        success: true,
                        fetchResponse: response
                    };
                    this.delegate.formSubmissionSucceededWithResponse(this, response);
                }
            }
        },
        {
            key: "requestFailedWithResponse",
            value: function requestFailedWithResponse(request, response) {
                this.result = {
                    success: false,
                    fetchResponse: response
                };
                this.delegate.formSubmissionFailedWithResponse(this, response);
            }
        },
        {
            key: "requestErrored",
            value: function requestErrored(request, error) {
                this.result = {
                    success: false,
                    error: error
                };
                this.delegate.formSubmissionErrored(this, error);
            }
        },
        {
            key: "requestFinished",
            value: function requestFinished(request) {
                var _a;
                this.state = FormSubmissionState.stopped;
                (_a = this.submitter) === null || _a === void 0 || _a.removeAttribute("disabled");
                dispatch("turbo:submit-end", {
                    target: this.formElement,
                    detail: Object.assign({
                        formSubmission: this
                    }, this.result)
                });
                this.delegate.formSubmissionFinished(this);
            }
        },
        {
            key: "requestMustRedirect",
            value: function requestMustRedirect(request) {
                return !request.isIdempotent && this.mustRedirect;
            }
        }
    ], [
        {
            key: "confirmMethod",
            value: function confirmMethod(message, element) {
                return confirm(message);
            }
        }
    ]);
    return FormSubmission;
}();
function buildFormData(formElement, submitter) {
    var formData = new FormData(formElement);
    var name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
    var value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");
    if (name && value != null && formData.get(name) != value) formData.append(name, value);
    return formData;
}
function getCookieValue(cookieName) {
    if (cookieName != null) {
        var cookies = document.cookie ? document.cookie.split("; ") : [];
        var cookie1 = cookies.find(function(cookie) {
            return cookie.startsWith(cookieName);
        });
        if (cookie1) {
            var value = cookie1.split("=").slice(1).join("=");
            return value ? decodeURIComponent(value) : undefined;
        }
    }
}
function getMetaContent(name) {
    var element = document.querySelector('meta[name="'.concat(name, '"]'));
    return element && element.content;
}
function responseSucceededWithoutRedirect(response) {
    return response.statusCode == 200 && !response.redirected;
}
function mergeFormDataEntries(url, entries) {
    var searchParams = new URLSearchParams;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _value = _helpers.slicedToArray(_step.value, 2), name = _value[0], value = _value[1];
            if (value instanceof File) continue;
            searchParams.append(name, value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    url.search = searchParams.toString();
    return url;
}
var Snapshot = /*#__PURE__*/ function() {
    "use strict";
    function Snapshot(element) {
        _helpers.classCallCheck(this, Snapshot);
        this.element = element;
    }
    _helpers.createClass(Snapshot, [
        {
            key: "children",
            get: function get() {
                return _helpers.toConsumableArray(this.element.children);
            }
        },
        {
            key: "hasAnchor",
            value: function hasAnchor(anchor) {
                return this.getElementForAnchor(anchor) != null;
            }
        },
        {
            key: "getElementForAnchor",
            value: function getElementForAnchor(anchor) {
                return anchor ? this.element.querySelector("[id='".concat(anchor, "'], a[name='").concat(anchor, "']")) : null;
            }
        },
        {
            key: "isConnected",
            get: function get() {
                return this.element.isConnected;
            }
        },
        {
            key: "firstAutofocusableElement",
            get: function get() {
                return this.element.querySelector("[autofocus]");
            }
        },
        {
            key: "permanentElements",
            get: function get() {
                return _helpers.toConsumableArray(this.element.querySelectorAll("[id][data-turbo-permanent]"));
            }
        },
        {
            key: "getPermanentElementById",
            value: function getPermanentElementById(id) {
                return this.element.querySelector("#".concat(id, "[data-turbo-permanent]"));
            }
        },
        {
            key: "getPermanentElementMapForSnapshot",
            value: function getPermanentElementMapForSnapshot(snapshot) {
                var permanentElementMap = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.permanentElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var currentPermanentElement = _step.value;
                        var id = currentPermanentElement.id;
                        var newPermanentElement = snapshot.getPermanentElementById(id);
                        if (newPermanentElement) permanentElementMap[id] = [
                            currentPermanentElement,
                            newPermanentElement
                        ];
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return permanentElementMap;
            }
        }
    ]);
    return Snapshot;
}();
var FormInterceptor = /*#__PURE__*/ function() {
    "use strict";
    function FormInterceptor(delegate, element) {
        var _this = this;
        _helpers.classCallCheck(this, FormInterceptor);
        this.submitBubbled = function(event) {
            var form = event.target;
            if (!event.defaultPrevented && form instanceof HTMLFormElement && form.closest("turbo-frame, html") == _this.element) {
                var submitter = event.submitter || undefined;
                var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.method;
                if (method != "dialog" && _this.delegate.shouldInterceptFormSubmission(form, submitter)) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    _this.delegate.formSubmissionIntercepted(form, submitter);
                }
            }
        };
        this.delegate = delegate;
        this.element = element;
    }
    _helpers.createClass(FormInterceptor, [
        {
            key: "start",
            value: function start() {
                this.element.addEventListener("submit", this.submitBubbled);
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.element.removeEventListener("submit", this.submitBubbled);
            }
        }
    ]);
    return FormInterceptor;
}();
var View = /*#__PURE__*/ function() {
    "use strict";
    function View(delegate, element) {
        _helpers.classCallCheck(this, View);
        this.resolveRenderPromise = function(value) {};
        this.resolveInterceptionPromise = function(value) {};
        this.delegate = delegate;
        this.element = element;
    }
    _helpers.createClass(View, [
        {
            key: "scrollToAnchor",
            value: function scrollToAnchor(anchor) {
                var element = this.snapshot.getElementForAnchor(anchor);
                if (element) {
                    this.scrollToElement(element);
                    this.focusElement(element);
                } else this.scrollToPosition({
                    x: 0,
                    y: 0
                });
            }
        },
        {
            key: "scrollToAnchorFromLocation",
            value: function scrollToAnchorFromLocation(location) {
                this.scrollToAnchor(getAnchor(location));
            }
        },
        {
            key: "scrollToElement",
            value: function scrollToElement(element) {
                element.scrollIntoView();
            }
        },
        {
            key: "focusElement",
            value: function focusElement(element) {
                if (element instanceof HTMLElement) {
                    if (element.hasAttribute("tabindex")) element.focus();
                    else {
                        element.setAttribute("tabindex", "-1");
                        element.focus();
                        element.removeAttribute("tabindex");
                    }
                }
            }
        },
        {
            key: "scrollToPosition",
            value: function scrollToPosition(param) {
                var x = param.x, y = param.y;
                this.scrollRoot.scrollTo(x, y);
            }
        },
        {
            key: "scrollToTop",
            value: function scrollToTop() {
                this.scrollToPosition({
                    x: 0,
                    y: 0
                });
            }
        },
        {
            key: "scrollRoot",
            get: function get() {
                return window;
            }
        },
        {
            key: "render",
            value: function render(renderer) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var isPreview, shouldRender, snapshot, renderInterception, immediateRender;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                isPreview = renderer.isPreview, shouldRender = renderer.shouldRender, snapshot = renderer.newSnapshot;
                                if (!shouldRender) {
                                    _ctx.next = 22;
                                    break;
                                }
                                _ctx.prev = 2;
                                _this.renderPromise = new Promise(function(resolve) {
                                    return _this.resolveRenderPromise = resolve;
                                });
                                _this.renderer = renderer;
                                _this.prepareToRenderSnapshot(renderer);
                                renderInterception = new Promise(function(resolve) {
                                    return _this.resolveInterceptionPromise = resolve;
                                });
                                immediateRender = _this.delegate.allowsImmediateRender(snapshot, _this.resolveInterceptionPromise);
                                if (immediateRender) {
                                    _ctx.next = 11;
                                    break;
                                }
                                _ctx.next = 11;
                                return renderInterception;
                            case 11:
                                _ctx.next = 13;
                                return _this.renderSnapshot(renderer);
                            case 13:
                                _this.delegate.viewRenderedSnapshot(snapshot, isPreview);
                                _this.finishRenderingSnapshot(renderer);
                            case 15:
                                _ctx.prev = 15;
                                delete _this.renderer;
                                _this.resolveRenderPromise(undefined);
                                delete _this.renderPromise;
                                return _ctx.finish(15);
                            case 20:
                                _ctx.next = 23;
                                break;
                            case 22:
                                _this.invalidate();
                            case 23:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            2,
                            ,
                            15,
                            20
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "invalidate",
            value: function invalidate() {
                this.delegate.viewInvalidated();
            }
        },
        {
            key: "prepareToRenderSnapshot",
            value: function prepareToRenderSnapshot(renderer) {
                this.markAsPreview(renderer.isPreview);
                renderer.prepareToRender();
            }
        },
        {
            key: "markAsPreview",
            value: function markAsPreview(isPreview) {
                if (isPreview) this.element.setAttribute("data-turbo-preview", "");
                else this.element.removeAttribute("data-turbo-preview");
            }
        },
        {
            key: "renderSnapshot",
            value: function renderSnapshot(renderer) {
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return renderer.render();
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "finishRenderingSnapshot",
            value: function finishRenderingSnapshot(renderer) {
                renderer.finishRendering();
            }
        }
    ]);
    return View;
}();
var FrameView = /*#__PURE__*/ function(View) {
    "use strict";
    _helpers.inherits(FrameView, View);
    var _super = _helpers.createSuper(FrameView);
    function FrameView() {
        _helpers.classCallCheck(this, FrameView);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(FrameView, [
        {
            key: "invalidate",
            value: function invalidate() {
                this.element.innerHTML = "";
            }
        },
        {
            key: "snapshot",
            get: function get() {
                return new Snapshot(this.element);
            }
        }
    ]);
    return FrameView;
}(View);
var LinkInterceptor = /*#__PURE__*/ function() {
    "use strict";
    function LinkInterceptor(delegate, element) {
        var _this = this;
        _helpers.classCallCheck(this, LinkInterceptor);
        this.clickBubbled = function(event) {
            if (_this.respondsToEventTarget(event.target)) _this.clickEvent = event;
            else delete _this.clickEvent;
        };
        this.linkClicked = function(event) {
            if (_this.clickEvent && _this.respondsToEventTarget(event.target) && event.target instanceof Element) {
                if (_this.delegate.shouldInterceptLinkClick(event.target, event.detail.url)) {
                    _this.clickEvent.preventDefault();
                    event.preventDefault();
                    _this.delegate.linkClickIntercepted(event.target, event.detail.url);
                }
            }
            delete _this.clickEvent;
        };
        this.willVisit = function() {
            delete _this.clickEvent;
        };
        this.delegate = delegate;
        this.element = element;
    }
    _helpers.createClass(LinkInterceptor, [
        {
            key: "start",
            value: function start() {
                this.element.addEventListener("click", this.clickBubbled);
                document.addEventListener("turbo:click", this.linkClicked);
                document.addEventListener("turbo:before-visit", this.willVisit);
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.element.removeEventListener("click", this.clickBubbled);
                document.removeEventListener("turbo:click", this.linkClicked);
                document.removeEventListener("turbo:before-visit", this.willVisit);
            }
        },
        {
            key: "respondsToEventTarget",
            value: function respondsToEventTarget(target) {
                var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
                return element && element.closest("turbo-frame, html") == this.element;
            }
        }
    ]);
    return LinkInterceptor;
}();
var Bardo = /*#__PURE__*/ function() {
    "use strict";
    function Bardo(permanentElementMap) {
        _helpers.classCallCheck(this, Bardo);
        this.permanentElementMap = permanentElementMap;
    }
    _helpers.createClass(Bardo, [
        {
            key: "enter",
            value: function enter() {
                for(var id in this.permanentElementMap){
                    var _id = _helpers.slicedToArray(this.permanentElementMap[id], 2), newPermanentElement = _id[1];
                    this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
                }
            }
        },
        {
            key: "leave",
            value: function leave() {
                for(var id in this.permanentElementMap){
                    var _id = _helpers.slicedToArray(this.permanentElementMap[id], 1), currentPermanentElement = _id[0];
                    this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
                    this.replacePlaceholderWithPermanentElement(currentPermanentElement);
                }
            }
        },
        {
            key: "replaceNewPermanentElementWithPlaceholder",
            value: function replaceNewPermanentElementWithPlaceholder(permanentElement) {
                var placeholder = createPlaceholderForPermanentElement(permanentElement);
                permanentElement.replaceWith(placeholder);
            }
        },
        {
            key: "replaceCurrentPermanentElementWithClone",
            value: function replaceCurrentPermanentElementWithClone(permanentElement) {
                var clone = permanentElement.cloneNode(true);
                permanentElement.replaceWith(clone);
            }
        },
        {
            key: "replacePlaceholderWithPermanentElement",
            value: function replacePlaceholderWithPermanentElement(permanentElement) {
                var placeholder = this.getPlaceholderById(permanentElement.id);
                placeholder === null || placeholder === void 0 || placeholder.replaceWith(permanentElement);
            }
        },
        {
            key: "getPlaceholderById",
            value: function getPlaceholderById(id) {
                return this.placeholders.find(function(element) {
                    return element.content == id;
                });
            }
        },
        {
            key: "placeholders",
            get: function get() {
                return _helpers.toConsumableArray(document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]"));
            }
        }
    ], [
        {
            key: "preservingPermanentElements",
            value: function preservingPermanentElements(permanentElementMap, callback) {
                var bardo = new this(permanentElementMap);
                bardo.enter();
                callback();
                bardo.leave();
            }
        }
    ]);
    return Bardo;
}();
function createPlaceholderForPermanentElement(permanentElement) {
    var element = document.createElement("meta");
    element.setAttribute("name", "turbo-permanent-placeholder");
    element.setAttribute("content", permanentElement.id);
    return element;
}
var Renderer = /*#__PURE__*/ function() {
    "use strict";
    function Renderer(currentSnapshot, newSnapshot, isPreview) {
        var willRender = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
        var _this = this;
        _helpers.classCallCheck(this, Renderer);
        this.currentSnapshot = currentSnapshot;
        this.newSnapshot = newSnapshot;
        this.isPreview = isPreview;
        this.willRender = willRender;
        this.promise = new Promise(function(resolve, reject) {
            return _this.resolvingFunctions = {
                resolve: resolve,
                reject: reject
            };
        });
    }
    _helpers.createClass(Renderer, [
        {
            key: "shouldRender",
            get: function get() {
                return true;
            }
        },
        {
            key: "prepareToRender",
            value: function prepareToRender() {
                return;
            }
        },
        {
            key: "finishRendering",
            value: function finishRendering() {
                if (this.resolvingFunctions) {
                    this.resolvingFunctions.resolve();
                    delete this.resolvingFunctions;
                }
            }
        },
        {
            key: "createScriptElement",
            value: function createScriptElement(element) {
                if (element.getAttribute("data-turbo-eval") == "false") return element;
                else {
                    var createdScriptElement = document.createElement("script");
                    if (this.cspNonce) createdScriptElement.nonce = this.cspNonce;
                    createdScriptElement.textContent = element.textContent;
                    createdScriptElement.async = false;
                    copyElementAttributes(createdScriptElement, element);
                    return createdScriptElement;
                }
            }
        },
        {
            key: "preservingPermanentElements",
            value: function preservingPermanentElements(callback) {
                Bardo.preservingPermanentElements(this.permanentElementMap, callback);
            }
        },
        {
            key: "focusFirstAutofocusableElement",
            value: function focusFirstAutofocusableElement() {
                var element = this.connectedSnapshot.firstAutofocusableElement;
                if (elementIsFocusable(element)) element.focus();
            }
        },
        {
            key: "connectedSnapshot",
            get: function get() {
                return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
            }
        },
        {
            key: "currentElement",
            get: function get() {
                return this.currentSnapshot.element;
            }
        },
        {
            key: "newElement",
            get: function get() {
                return this.newSnapshot.element;
            }
        },
        {
            key: "permanentElementMap",
            get: function get() {
                return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
            }
        },
        {
            key: "cspNonce",
            get: function get() {
                var _a;
                return (_a = document.head.querySelector('meta[name="csp-nonce"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
            }
        }
    ]);
    return Renderer;
}();
function copyElementAttributes(destinationElement, sourceElement) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _helpers.toConsumableArray(sourceElement.attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _value = _step.value, name = _value.name, value = _value.value;
            destinationElement.setAttribute(name, value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function elementIsFocusable(element) {
    return element && typeof element.focus == "function";
}
var FrameRenderer = /*#__PURE__*/ function(Renderer) {
    "use strict";
    _helpers.inherits(FrameRenderer, Renderer);
    var _super = _helpers.createSuper(FrameRenderer);
    function FrameRenderer() {
        _helpers.classCallCheck(this, FrameRenderer);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(FrameRenderer, [
        {
            key: "shouldRender",
            get: function get() {
                return true;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return nextAnimationFrame();
                            case 2:
                                _this.preservingPermanentElements(function() {
                                    _this.loadFrameElement();
                                });
                                _this.scrollFrameIntoView();
                                _ctx.next = 6;
                                return nextAnimationFrame();
                            case 6:
                                _this.focusFirstAutofocusableElement();
                                _ctx.next = 9;
                                return nextAnimationFrame();
                            case 9:
                                _this.activateScriptElements();
                            case 10:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "loadFrameElement",
            value: function loadFrameElement() {
                var _a;
                var destinationRange = document.createRange();
                destinationRange.selectNodeContents(this.currentElement);
                destinationRange.deleteContents();
                var frameElement = this.newElement;
                var sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();
                if (sourceRange) {
                    sourceRange.selectNodeContents(frameElement);
                    this.currentElement.appendChild(sourceRange.extractContents());
                }
            }
        },
        {
            key: "scrollFrameIntoView",
            value: function scrollFrameIntoView() {
                if (this.currentElement.autoscroll || this.newElement.autoscroll) {
                    var element = this.currentElement.firstElementChild;
                    var block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");
                    if (element) {
                        element.scrollIntoView({
                            block: block
                        });
                        return true;
                    }
                }
                return false;
            }
        },
        {
            key: "activateScriptElements",
            value: function activateScriptElements() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.newScriptElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var inertScriptElement = _step.value;
                        var activatedScriptElement = this.createScriptElement(inertScriptElement);
                        inertScriptElement.replaceWith(activatedScriptElement);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "newScriptElements",
            get: function get() {
                return this.currentElement.querySelectorAll("script");
            }
        }
    ]);
    return FrameRenderer;
}(Renderer);
function readScrollLogicalPosition(value, defaultValue) {
    if (value == "end" || value == "start" || value == "center" || value == "nearest") return value;
    else return defaultValue;
}
var ProgressBar = /*#__PURE__*/ function() {
    "use strict";
    function ProgressBar() {
        var _this = this;
        _helpers.classCallCheck(this, ProgressBar);
        this.hiding = false;
        this.value = 0;
        this.visible = false;
        this.trickle = function() {
            _this.setValue(_this.value + Math.random() / 100);
        };
        this.stylesheetElement = this.createStylesheetElement();
        this.progressElement = this.createProgressElement();
        this.installStylesheetElement();
        this.setValue(0);
    }
    _helpers.createClass(ProgressBar, [
        {
            key: "show",
            value: function show() {
                if (!this.visible) {
                    this.visible = true;
                    this.installProgressElement();
                    this.startTrickling();
                }
            }
        },
        {
            key: "hide",
            value: function hide() {
                if (this.visible && !this.hiding) {
                    var _this = this;
                    this.hiding = true;
                    this.fadeProgressElement(function() {
                        _this.uninstallProgressElement();
                        _this.stopTrickling();
                        _this.visible = false;
                        _this.hiding = false;
                    });
                }
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.value = value;
                this.refresh();
            }
        },
        {
            key: "installStylesheetElement",
            value: function installStylesheetElement() {
                document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
            }
        },
        {
            key: "installProgressElement",
            value: function installProgressElement() {
                this.progressElement.style.width = "0";
                this.progressElement.style.opacity = "1";
                document.documentElement.insertBefore(this.progressElement, document.body);
                this.refresh();
            }
        },
        {
            key: "fadeProgressElement",
            value: function fadeProgressElement(callback) {
                this.progressElement.style.opacity = "0";
                setTimeout(callback, ProgressBar.animationDuration * 1.5);
            }
        },
        {
            key: "uninstallProgressElement",
            value: function uninstallProgressElement() {
                if (this.progressElement.parentNode) document.documentElement.removeChild(this.progressElement);
            }
        },
        {
            key: "startTrickling",
            value: function startTrickling() {
                if (!this.trickleInterval) this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
            }
        },
        {
            key: "stopTrickling",
            value: function stopTrickling() {
                window.clearInterval(this.trickleInterval);
                delete this.trickleInterval;
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var _this = this;
                requestAnimationFrame(function() {
                    _this.progressElement.style.width = "".concat(10 + _this.value * 90, "%");
                });
            }
        },
        {
            key: "createStylesheetElement",
            value: function createStylesheetElement() {
                var element = document.createElement("style");
                element.type = "text/css";
                element.textContent = ProgressBar.defaultCSS;
                return element;
            }
        },
        {
            key: "createProgressElement",
            value: function createProgressElement() {
                var element = document.createElement("div");
                element.className = "turbo-progress-bar";
                return element;
            }
        }
    ], [
        {
            key: "defaultCSS",
            get: function get() {
                return unindent(_templateObject(), ProgressBar.animationDuration, ProgressBar.animationDuration / 2, ProgressBar.animationDuration / 2);
            }
        }
    ]);
    return ProgressBar;
}();
ProgressBar.animationDuration = 300;
var HeadSnapshot = /*#__PURE__*/ function(Snapshot) {
    "use strict";
    _helpers.inherits(HeadSnapshot, Snapshot);
    var _super = _helpers.createSuper(HeadSnapshot);
    function HeadSnapshot() {
        _helpers.classCallCheck(this, HeadSnapshot);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.detailsByOuterHTML = _this.children.filter(function(element) {
            return !elementIsNoscript(element);
        }).map(function(element) {
            return elementWithoutNonce(element);
        }).reduce(function(result, element) {
            var outerHTML = element.outerHTML;
            var details = outerHTML in result ? result[outerHTML] : {
                type: elementType(element),
                tracked: elementIsTracked(element),
                elements: []
            };
            return Object.assign(Object.assign({}, result), _helpers.defineProperty({}, outerHTML, Object.assign(Object.assign({}, details), {
                elements: _helpers.toConsumableArray(details.elements).concat([
                    element
                ])
            })));
        }, {});
        return _this;
    }
    _helpers.createClass(HeadSnapshot, [
        {
            key: "trackedElementSignature",
            get: function get() {
                var _this = this;
                return Object.keys(this.detailsByOuterHTML).filter(function(outerHTML) {
                    return _this.detailsByOuterHTML[outerHTML].tracked;
                }).join("");
            }
        },
        {
            key: "getScriptElementsNotInSnapshot",
            value: function getScriptElementsNotInSnapshot(snapshot) {
                return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
            }
        },
        {
            key: "getStylesheetElementsNotInSnapshot",
            value: function getStylesheetElementsNotInSnapshot(snapshot) {
                return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
            }
        },
        {
            key: "getElementsMatchingTypeNotInSnapshot",
            value: function getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
                var _this = this;
                return Object.keys(this.detailsByOuterHTML).filter(function(outerHTML) {
                    return !(outerHTML in snapshot.detailsByOuterHTML);
                }).map(function(outerHTML) {
                    return _this.detailsByOuterHTML[outerHTML];
                }).filter(function(param) {
                    var type = param.type;
                    return type == matchedType;
                }).map(function(param) {
                    var _elements = _helpers.slicedToArray(param.elements, 1), element = _elements[0];
                    return element;
                });
            }
        },
        {
            key: "provisionalElements",
            get: function get() {
                var _this = this;
                return Object.keys(this.detailsByOuterHTML).reduce(function(result, outerHTML) {
                    var _outerHTML = _this.detailsByOuterHTML[outerHTML], type = _outerHTML.type, tracked = _outerHTML.tracked, elements = _outerHTML.elements;
                    if (type == null && !tracked) return _helpers.toConsumableArray(result).concat(_helpers.toConsumableArray(elements));
                    else if (elements.length > 1) return _helpers.toConsumableArray(result).concat(_helpers.toConsumableArray(elements.slice(1)));
                    else return result;
                }, []);
            }
        },
        {
            key: "getMetaValue",
            value: function getMetaValue(name) {
                var element = this.findMetaElementByName(name);
                return element ? element.getAttribute("content") : null;
            }
        },
        {
            key: "findMetaElementByName",
            value: function findMetaElementByName(name) {
                var _this = this;
                return Object.keys(this.detailsByOuterHTML).reduce(function(result, outerHTML) {
                    var _outerHTML = _this.detailsByOuterHTML[outerHTML], _elements = _helpers.slicedToArray(_outerHTML.elements, 1), element = _elements[0];
                    return elementIsMetaElementWithName(element, name) ? element : result;
                }, undefined);
            }
        }
    ]);
    return HeadSnapshot;
}(Snapshot);
function elementType(element) {
    if (elementIsScript(element)) return "script";
    else if (elementIsStylesheet(element)) return "stylesheet";
}
function elementIsTracked(element) {
    return element.getAttribute("data-turbo-track") == "reload";
}
function elementIsScript(element) {
    var tagName = element.tagName.toLowerCase();
    return tagName == "script";
}
function elementIsNoscript(element) {
    var tagName = element.tagName.toLowerCase();
    return tagName == "noscript";
}
function elementIsStylesheet(element) {
    var tagName = element.tagName.toLowerCase();
    return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
}
function elementIsMetaElementWithName(element, name) {
    var tagName = element.tagName.toLowerCase();
    return tagName == "meta" && element.getAttribute("name") == name;
}
function elementWithoutNonce(element) {
    if (element.hasAttribute("nonce")) element.setAttribute("nonce", "");
    return element;
}
var PageSnapshot = /*#__PURE__*/ function(Snapshot) {
    "use strict";
    _helpers.inherits(PageSnapshot, Snapshot);
    var _super = _helpers.createSuper(PageSnapshot);
    function PageSnapshot(element, headSnapshot) {
        _helpers.classCallCheck(this, PageSnapshot);
        var _this;
        _this = _super.call(this, element);
        _this.headSnapshot = headSnapshot;
        return _this;
    }
    _helpers.createClass(PageSnapshot, [
        {
            key: "clone",
            value: function clone() {
                return new PageSnapshot(this.element.cloneNode(true), this.headSnapshot);
            }
        },
        {
            key: "headElement",
            get: function get() {
                return this.headSnapshot.element;
            }
        },
        {
            key: "rootLocation",
            get: function get() {
                var _a;
                var root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
                return expandURL(root);
            }
        },
        {
            key: "cacheControlValue",
            get: function get() {
                return this.getSetting("cache-control");
            }
        },
        {
            key: "isPreviewable",
            get: function get() {
                return this.cacheControlValue != "no-preview";
            }
        },
        {
            key: "isCacheable",
            get: function get() {
                return this.cacheControlValue != "no-cache";
            }
        },
        {
            key: "isVisitable",
            get: function get() {
                return this.getSetting("visit-control") != "reload";
            }
        },
        {
            key: "getSetting",
            value: function getSetting(name) {
                return this.headSnapshot.getMetaValue("turbo-".concat(name));
            }
        }
    ], [
        {
            key: "fromHTMLString",
            value: function fromHTMLString() {
                var html = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                return this.fromDocument(parseHTMLDocument(html));
            }
        },
        {
            key: "fromElement",
            value: function fromElement(element) {
                return this.fromDocument(element.ownerDocument);
            }
        },
        {
            key: "fromDocument",
            value: function fromDocument(param) {
                var head = param.head, body = param.body;
                return new this(body, new HeadSnapshot(head));
            }
        }
    ]);
    return PageSnapshot;
}(Snapshot);
var TimingMetric;
(function(TimingMetric1) {
    TimingMetric1["visitStart"] = "visitStart";
    TimingMetric1["requestStart"] = "requestStart";
    TimingMetric1["requestEnd"] = "requestEnd";
    TimingMetric1["visitEnd"] = "visitEnd";
})(TimingMetric || (TimingMetric = {}));
var VisitState;
(function(VisitState1) {
    VisitState1["initialized"] = "initialized";
    VisitState1["started"] = "started";
    VisitState1["canceled"] = "canceled";
    VisitState1["failed"] = "failed";
    VisitState1["completed"] = "completed";
})(VisitState || (VisitState = {}));
var defaultOptions = {
    action: "advance",
    historyChanged: false,
    visitCachedSnapshot: function() {},
    willRender: true
};
var SystemStatusCode;
(function(SystemStatusCode1) {
    SystemStatusCode1[SystemStatusCode1["networkFailure"] = 0] = "networkFailure";
    SystemStatusCode1[SystemStatusCode1["timeoutFailure"] = -1] = "timeoutFailure";
    SystemStatusCode1[SystemStatusCode1["contentTypeMismatch"] = -2] = "contentTypeMismatch";
})(SystemStatusCode || (SystemStatusCode = {}));
var Visit = /*#__PURE__*/ function() {
    "use strict";
    function Visit(delegate, location, restorationIdentifier) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        _helpers.classCallCheck(this, Visit);
        this.identifier = uuid();
        this.timingMetrics = {};
        this.followedRedirect = false;
        this.historyChanged = false;
        this.scrolled = false;
        this.snapshotCached = false;
        this.state = VisitState.initialized;
        this.delegate = delegate;
        this.location = location;
        this.restorationIdentifier = restorationIdentifier || uuid();
        var ref = Object.assign(Object.assign({}, defaultOptions), options), action = ref.action, historyChanged = ref.historyChanged, referrer = ref.referrer, snapshotHTML = ref.snapshotHTML, response = ref.response, visitCachedSnapshot = ref.visitCachedSnapshot, willRender = ref.willRender;
        this.action = action;
        this.historyChanged = historyChanged;
        this.referrer = referrer;
        this.snapshotHTML = snapshotHTML;
        this.response = response;
        this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
        this.visitCachedSnapshot = visitCachedSnapshot;
        this.willRender = willRender;
        this.scrolled = !willRender;
    }
    _helpers.createClass(Visit, [
        {
            key: "adapter",
            get: function get() {
                return this.delegate.adapter;
            }
        },
        {
            key: "view",
            get: function get() {
                return this.delegate.view;
            }
        },
        {
            key: "history",
            get: function get() {
                return this.delegate.history;
            }
        },
        {
            key: "restorationData",
            get: function get() {
                return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
            }
        },
        {
            key: "silent",
            get: function get() {
                return this.isSamePage;
            }
        },
        {
            key: "start",
            value: function start() {
                if (this.state == VisitState.initialized) {
                    this.recordTimingMetric(TimingMetric.visitStart);
                    this.state = VisitState.started;
                    this.adapter.visitStarted(this);
                    this.delegate.visitStarted(this);
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (this.state == VisitState.started) {
                    if (this.request) this.request.cancel();
                    this.cancelRender();
                    this.state = VisitState.canceled;
                }
            }
        },
        {
            key: "complete",
            value: function complete() {
                if (this.state == VisitState.started) {
                    this.recordTimingMetric(TimingMetric.visitEnd);
                    this.state = VisitState.completed;
                    this.adapter.visitCompleted(this);
                    this.delegate.visitCompleted(this);
                    this.followRedirect();
                }
            }
        },
        {
            key: "fail",
            value: function fail() {
                if (this.state == VisitState.started) {
                    this.state = VisitState.failed;
                    this.adapter.visitFailed(this);
                }
            }
        },
        {
            key: "changeHistory",
            value: function changeHistory() {
                var _a;
                if (!this.historyChanged) {
                    var actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
                    var method = this.getHistoryMethodForAction(actionForHistory);
                    this.history.update(method, this.location, this.restorationIdentifier);
                    this.historyChanged = true;
                }
            }
        },
        {
            key: "issueRequest",
            value: function issueRequest() {
                if (this.hasPreloadedResponse()) this.simulateRequest();
                else if (this.shouldIssueRequest() && !this.request) {
                    this.request = new FetchRequest(this, FetchMethod.get, this.location);
                    this.request.perform();
                }
            }
        },
        {
            key: "simulateRequest",
            value: function simulateRequest() {
                if (this.response) {
                    this.startRequest();
                    this.recordResponse();
                    this.finishRequest();
                }
            }
        },
        {
            key: "startRequest",
            value: function startRequest() {
                this.recordTimingMetric(TimingMetric.requestStart);
                this.adapter.visitRequestStarted(this);
            }
        },
        {
            key: "recordResponse",
            value: function recordResponse() {
                var response = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.response;
                this.response = response;
                if (response) {
                    var statusCode = response.statusCode;
                    if (isSuccessful(statusCode)) this.adapter.visitRequestCompleted(this);
                    else this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
                }
            }
        },
        {
            key: "finishRequest",
            value: function finishRequest() {
                this.recordTimingMetric(TimingMetric.requestEnd);
                this.adapter.visitRequestFinished(this);
            }
        },
        {
            key: "loadResponse",
            value: function loadResponse() {
                if (this.response) {
                    var _response = this.response, statusCode = _response.statusCode, responseHTML = _response.responseHTML;
                    var _this = this;
                    this.render(_helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                        return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _this.cacheSnapshot();
                                    if (!_this.view.renderPromise) {
                                        _ctx.next = 4;
                                        break;
                                    }
                                    _ctx.next = 4;
                                    return _this.view.renderPromise;
                                case 4:
                                    if (!(isSuccessful(statusCode) && responseHTML != null)) {
                                        _ctx.next = 11;
                                        break;
                                    }
                                    _ctx.next = 7;
                                    return _this.view.renderPage(PageSnapshot.fromHTMLString(responseHTML), false, _this.willRender);
                                case 7:
                                    _this.adapter.visitRendered(_this);
                                    _this.complete();
                                    _ctx.next = 15;
                                    break;
                                case 11:
                                    _ctx.next = 13;
                                    return _this.view.renderError(PageSnapshot.fromHTMLString(responseHTML));
                                case 13:
                                    _this.adapter.visitRendered(_this);
                                    _this.fail();
                                case 15:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    })));
                }
            }
        },
        {
            key: "getCachedSnapshot",
            value: function getCachedSnapshot() {
                var snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
                if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
                    if (this.action == "restore" || snapshot.isPreviewable) return snapshot;
                }
            }
        },
        {
            key: "getPreloadedSnapshot",
            value: function getPreloadedSnapshot() {
                if (this.snapshotHTML) return PageSnapshot.fromHTMLString(this.snapshotHTML);
            }
        },
        {
            key: "hasCachedSnapshot",
            value: function hasCachedSnapshot() {
                return this.getCachedSnapshot() != null;
            }
        },
        {
            key: "loadCachedSnapshot",
            value: function loadCachedSnapshot() {
                var snapshot = this.getCachedSnapshot();
                if (snapshot) {
                    var isPreview = this.shouldIssueRequest();
                    var _this = this;
                    this.render(_helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                        return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _this.cacheSnapshot();
                                    if (!_this.isSamePage) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    _this.adapter.visitRendered(_this);
                                    _ctx.next = 12;
                                    break;
                                case 5:
                                    if (!_this.view.renderPromise) {
                                        _ctx.next = 8;
                                        break;
                                    }
                                    _ctx.next = 8;
                                    return _this.view.renderPromise;
                                case 8:
                                    _ctx.next = 10;
                                    return _this.view.renderPage(snapshot, isPreview, _this.willRender);
                                case 10:
                                    _this.adapter.visitRendered(_this);
                                    if (!isPreview) _this.complete();
                                case 12:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    })));
                }
            }
        },
        {
            key: "followRedirect",
            value: function followRedirect() {
                var _a;
                if (this.redirectedToLocation && !this.followedRedirect && ((_a = this.response) === null || _a === void 0 ? void 0 : _a.redirected)) {
                    this.adapter.visitProposedToLocation(this.redirectedToLocation, {
                        action: 'replace',
                        response: this.response
                    });
                    this.followedRedirect = true;
                }
            }
        },
        {
            key: "goToSamePageAnchor",
            value: function goToSamePageAnchor() {
                var _this = this;
                if (this.isSamePage) this.render(_helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.cacheSnapshot();
                                _this.adapter.visitRendered(_this);
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                })));
            }
        },
        {
            key: "requestStarted",
            value: function requestStarted() {
                this.startRequest();
            }
        },
        {
            key: "requestPreventedHandlingResponse",
            value: function requestPreventedHandlingResponse(request, response) {}
        },
        {
            key: "requestSucceededWithResponse",
            value: function requestSucceededWithResponse(request, response) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var responseHTML, redirected, statusCode;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return response.responseHTML;
                            case 2:
                                responseHTML = _ctx.sent;
                                redirected = response.redirected, statusCode = response.statusCode;
                                if (responseHTML == undefined) _this.recordResponse({
                                    statusCode: SystemStatusCode.contentTypeMismatch,
                                    redirected: redirected
                                });
                                else {
                                    _this.redirectedToLocation = response.redirected ? response.location : undefined;
                                    _this.recordResponse({
                                        statusCode: statusCode,
                                        responseHTML: responseHTML,
                                        redirected: redirected
                                    });
                                }
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "requestFailedWithResponse",
            value: function requestFailedWithResponse(request, response) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var responseHTML, redirected, statusCode;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return response.responseHTML;
                            case 2:
                                responseHTML = _ctx.sent;
                                redirected = response.redirected, statusCode = response.statusCode;
                                if (responseHTML == undefined) _this.recordResponse({
                                    statusCode: SystemStatusCode.contentTypeMismatch,
                                    redirected: redirected
                                });
                                else _this.recordResponse({
                                    statusCode: statusCode,
                                    responseHTML: responseHTML,
                                    redirected: redirected
                                });
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "requestErrored",
            value: function requestErrored(request, error) {
                this.recordResponse({
                    statusCode: SystemStatusCode.networkFailure,
                    redirected: false
                });
            }
        },
        {
            key: "requestFinished",
            value: function requestFinished() {
                this.finishRequest();
            }
        },
        {
            key: "performScroll",
            value: function performScroll() {
                if (!this.scrolled) {
                    if (this.action == "restore") this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
                    else this.scrollToAnchor() || this.view.scrollToTop();
                    if (this.isSamePage) this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
                    this.scrolled = true;
                }
            }
        },
        {
            key: "scrollToRestoredPosition",
            value: function scrollToRestoredPosition() {
                var scrollPosition = this.restorationData.scrollPosition;
                if (scrollPosition) {
                    this.view.scrollToPosition(scrollPosition);
                    return true;
                }
            }
        },
        {
            key: "scrollToAnchor",
            value: function scrollToAnchor() {
                var anchor = getAnchor(this.location);
                if (anchor != null) {
                    this.view.scrollToAnchor(anchor);
                    return true;
                }
            }
        },
        {
            key: "recordTimingMetric",
            value: function recordTimingMetric(metric) {
                this.timingMetrics[metric] = new Date().getTime();
            }
        },
        {
            key: "getTimingMetrics",
            value: function getTimingMetrics() {
                return Object.assign({}, this.timingMetrics);
            }
        },
        {
            key: "getHistoryMethodForAction",
            value: function getHistoryMethodForAction(action) {
                switch(action){
                    case "replace":
                        return history.replaceState;
                    case "advance":
                    case "restore":
                        return history.pushState;
                }
            }
        },
        {
            key: "hasPreloadedResponse",
            value: function hasPreloadedResponse() {
                return typeof this.response == "object";
            }
        },
        {
            key: "shouldIssueRequest",
            value: function shouldIssueRequest() {
                if (this.isSamePage) return false;
                else if (this.action == "restore") return !this.hasCachedSnapshot();
                else return this.willRender;
            }
        },
        {
            key: "cacheSnapshot",
            value: function cacheSnapshot() {
                if (!this.snapshotCached) {
                    var _this = this;
                    this.view.cacheSnapshot().then(function(snapshot) {
                        return snapshot && _this.visitCachedSnapshot(snapshot);
                    });
                    this.snapshotCached = true;
                }
            }
        },
        {
            key: "render",
            value: function render(callback) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.cancelRender();
                                _ctx.next = 3;
                                return new Promise(function(resolve) {
                                    _this.frame = requestAnimationFrame(function() {
                                        return resolve();
                                    });
                                });
                            case 3:
                                _ctx.next = 5;
                                return callback();
                            case 5:
                                delete _this.frame;
                                _this.performScroll();
                            case 7:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "cancelRender",
            value: function cancelRender() {
                if (this.frame) {
                    cancelAnimationFrame(this.frame);
                    delete this.frame;
                }
            }
        }
    ]);
    return Visit;
}();
function isSuccessful(statusCode) {
    return statusCode >= 200 && statusCode < 300;
}
var BrowserAdapter = /*#__PURE__*/ function() {
    "use strict";
    function BrowserAdapter(session1) {
        var _this = this;
        _helpers.classCallCheck(this, BrowserAdapter);
        this.progressBar = new ProgressBar;
        this.showProgressBar = function() {
            _this.progressBar.show();
        };
        this.session = session1;
    }
    _helpers.createClass(BrowserAdapter, [
        {
            key: "visitProposedToLocation",
            value: function visitProposedToLocation(location, options) {
                this.navigator.startVisit(location, uuid(), options);
            }
        },
        {
            key: "visitStarted",
            value: function visitStarted(visit1) {
                visit1.loadCachedSnapshot();
                visit1.issueRequest();
                visit1.changeHistory();
                visit1.goToSamePageAnchor();
            }
        },
        {
            key: "visitRequestStarted",
            value: function visitRequestStarted(visit2) {
                this.progressBar.setValue(0);
                if (visit2.hasCachedSnapshot() || visit2.action != "restore") this.showVisitProgressBarAfterDelay();
                else this.showProgressBar();
            }
        },
        {
            key: "visitRequestCompleted",
            value: function visitRequestCompleted(visit3) {
                visit3.loadResponse();
            }
        },
        {
            key: "visitRequestFailedWithStatusCode",
            value: function visitRequestFailedWithStatusCode(visit4, statusCode) {
                switch(statusCode){
                    case SystemStatusCode.networkFailure:
                    case SystemStatusCode.timeoutFailure:
                    case SystemStatusCode.contentTypeMismatch:
                        return this.reload();
                    default:
                        return visit4.loadResponse();
                }
            }
        },
        {
            key: "visitRequestFinished",
            value: function visitRequestFinished(visit) {
                this.progressBar.setValue(1);
                this.hideVisitProgressBar();
            }
        },
        {
            key: "visitCompleted",
            value: function visitCompleted(visit) {}
        },
        {
            key: "pageInvalidated",
            value: function pageInvalidated() {
                this.reload();
            }
        },
        {
            key: "visitFailed",
            value: function visitFailed(visit) {}
        },
        {
            key: "visitRendered",
            value: function visitRendered(visit) {}
        },
        {
            key: "formSubmissionStarted",
            value: function formSubmissionStarted(formSubmission) {
                this.progressBar.setValue(0);
                this.showFormProgressBarAfterDelay();
            }
        },
        {
            key: "formSubmissionFinished",
            value: function formSubmissionFinished(formSubmission) {
                this.progressBar.setValue(1);
                this.hideFormProgressBar();
            }
        },
        {
            key: "showVisitProgressBarAfterDelay",
            value: function showVisitProgressBarAfterDelay() {
                this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
            }
        },
        {
            key: "hideVisitProgressBar",
            value: function hideVisitProgressBar() {
                this.progressBar.hide();
                if (this.visitProgressBarTimeout != null) {
                    window.clearTimeout(this.visitProgressBarTimeout);
                    delete this.visitProgressBarTimeout;
                }
            }
        },
        {
            key: "showFormProgressBarAfterDelay",
            value: function showFormProgressBarAfterDelay() {
                if (this.formProgressBarTimeout == null) this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
            }
        },
        {
            key: "hideFormProgressBar",
            value: function hideFormProgressBar() {
                this.progressBar.hide();
                if (this.formProgressBarTimeout != null) {
                    window.clearTimeout(this.formProgressBarTimeout);
                    delete this.formProgressBarTimeout;
                }
            }
        },
        {
            key: "reload",
            value: function reload() {
                window.location.reload();
            }
        },
        {
            key: "navigator",
            get: function get() {
                return this.session.navigator;
            }
        }
    ]);
    return BrowserAdapter;
}();
var CacheObserver = /*#__PURE__*/ function() {
    "use strict";
    function CacheObserver() {
        _helpers.classCallCheck(this, CacheObserver);
        this.started = false;
    }
    _helpers.createClass(CacheObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    this.started = true;
                    addEventListener("turbo:before-cache", this.removeStaleElements, false);
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    this.started = false;
                    removeEventListener("turbo:before-cache", this.removeStaleElements, false);
                }
            }
        },
        {
            key: "removeStaleElements",
            value: function removeStaleElements() {
                var staleElements = _helpers.toConsumableArray(document.querySelectorAll('[data-turbo-cache="false"]'));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = staleElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var element = _step.value;
                        element.remove();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    ]);
    return CacheObserver;
}();
var FormSubmitObserver = /*#__PURE__*/ function() {
    "use strict";
    function FormSubmitObserver(delegate) {
        var _this = this;
        _helpers.classCallCheck(this, FormSubmitObserver);
        this.started = false;
        this.submitCaptured = function() {
            removeEventListener("submit", _this.submitBubbled, false);
            addEventListener("submit", _this.submitBubbled, false);
        };
        this.submitBubbled = function(event) {
            if (!event.defaultPrevented) {
                var form = event.target instanceof HTMLFormElement ? event.target : undefined;
                var submitter = event.submitter || undefined;
                if (form) {
                    var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.getAttribute("method");
                    if (method != "dialog" && _this.delegate.willSubmitForm(form, submitter)) {
                        event.preventDefault();
                        _this.delegate.formSubmitted(form, submitter);
                    }
                }
            }
        };
        this.delegate = delegate;
    }
    _helpers.createClass(FormSubmitObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    addEventListener("submit", this.submitCaptured, true);
                    this.started = true;
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    removeEventListener("submit", this.submitCaptured, true);
                    this.started = false;
                }
            }
        }
    ]);
    return FormSubmitObserver;
}();
var FrameRedirector = /*#__PURE__*/ function() {
    "use strict";
    function FrameRedirector(element) {
        _helpers.classCallCheck(this, FrameRedirector);
        this.element = element;
        this.linkInterceptor = new LinkInterceptor(this, element);
        this.formInterceptor = new FormInterceptor(this, element);
    }
    _helpers.createClass(FrameRedirector, [
        {
            key: "start",
            value: function start() {
                this.linkInterceptor.start();
                this.formInterceptor.start();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.linkInterceptor.stop();
                this.formInterceptor.stop();
            }
        },
        {
            key: "shouldInterceptLinkClick",
            value: function shouldInterceptLinkClick(element, url) {
                return this.shouldRedirect(element);
            }
        },
        {
            key: "linkClickIntercepted",
            value: function linkClickIntercepted(element, url) {
                var frame = this.findFrameElement(element);
                if (frame) frame.delegate.linkClickIntercepted(element, url);
            }
        },
        {
            key: "shouldInterceptFormSubmission",
            value: function shouldInterceptFormSubmission(element, submitter) {
                return this.shouldSubmit(element, submitter);
            }
        },
        {
            key: "formSubmissionIntercepted",
            value: function formSubmissionIntercepted(element, submitter) {
                var frame = this.findFrameElement(element, submitter);
                if (frame) {
                    frame.removeAttribute("reloadable");
                    frame.delegate.formSubmissionIntercepted(element, submitter);
                }
            }
        },
        {
            key: "shouldSubmit",
            value: function shouldSubmit(form, submitter) {
                var _a;
                var action = getAction(form, submitter);
                var meta = this.element.ownerDocument.querySelector('meta[name="turbo-root"]');
                var rootLocation = expandURL((_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/");
                return this.shouldRedirect(form, submitter) && locationIsVisitable(action, rootLocation);
            }
        },
        {
            key: "shouldRedirect",
            value: function shouldRedirect(element, submitter) {
                var frame = this.findFrameElement(element, submitter);
                return frame ? frame != element.closest("turbo-frame") : false;
            }
        },
        {
            key: "findFrameElement",
            value: function findFrameElement(element, submitter) {
                var id = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-frame")) || element.getAttribute("data-turbo-frame");
                if (id && id != "_top") {
                    var frame = this.element.querySelector("#".concat(id, ":not([disabled])"));
                    if (frame instanceof FrameElement) return frame;
                }
            }
        }
    ]);
    return FrameRedirector;
}();
var History = /*#__PURE__*/ function() {
    "use strict";
    function History(delegate) {
        var _this = this;
        _helpers.classCallCheck(this, History);
        this.restorationIdentifier = uuid();
        this.restorationData = {};
        this.started = false;
        this.pageLoaded = false;
        this.onPopState = function(event) {
            if (_this.shouldHandlePopState()) {
                var turbo = (event.state || {}).turbo;
                if (turbo) {
                    _this.location = new URL(window.location.href);
                    var restorationIdentifier = turbo.restorationIdentifier;
                    _this.restorationIdentifier = restorationIdentifier;
                    _this.delegate.historyPoppedToLocationWithRestorationIdentifier(_this.location, restorationIdentifier);
                }
            }
        };
        var _this1 = this;
        this.onPageLoad = function() {
            var _ref = _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee(event) {
                return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _ctx.next = 2;
                            return nextMicrotask();
                        case 2:
                            _this1.pageLoaded = true;
                        case 3:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
            return function(event) {
                return _ref.apply(this, arguments);
            };
        }();
        this.delegate = delegate;
    }
    _helpers.createClass(History, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    addEventListener("popstate", this.onPopState, false);
                    addEventListener("load", this.onPageLoad, false);
                    this.started = true;
                    this.replace(new URL(window.location.href));
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    removeEventListener("popstate", this.onPopState, false);
                    removeEventListener("load", this.onPageLoad, false);
                    this.started = false;
                }
            }
        },
        {
            key: "push",
            value: function push(location, restorationIdentifier) {
                this.update(history.pushState, location, restorationIdentifier);
            }
        },
        {
            key: "replace",
            value: function replace(location, restorationIdentifier) {
                this.update(history.replaceState, location, restorationIdentifier);
            }
        },
        {
            key: "update",
            value: function update(method, location) {
                var restorationIdentifier = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : uuid();
                var state = {
                    turbo: {
                        restorationIdentifier: restorationIdentifier
                    }
                };
                method.call(history, state, "", location.href);
                this.location = location;
                this.restorationIdentifier = restorationIdentifier;
            }
        },
        {
            key: "getRestorationDataForIdentifier",
            value: function getRestorationDataForIdentifier(restorationIdentifier) {
                return this.restorationData[restorationIdentifier] || {};
            }
        },
        {
            key: "updateRestorationData",
            value: function updateRestorationData(additionalData) {
                var restorationIdentifier = this.restorationIdentifier;
                var restorationData = this.restorationData[restorationIdentifier];
                this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
            }
        },
        {
            key: "assumeControlOfScrollRestoration",
            value: function assumeControlOfScrollRestoration() {
                var _a;
                if (!this.previousScrollRestoration) {
                    this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
                    history.scrollRestoration = "manual";
                }
            }
        },
        {
            key: "relinquishControlOfScrollRestoration",
            value: function relinquishControlOfScrollRestoration() {
                if (this.previousScrollRestoration) {
                    history.scrollRestoration = this.previousScrollRestoration;
                    delete this.previousScrollRestoration;
                }
            }
        },
        {
            key: "shouldHandlePopState",
            value: function shouldHandlePopState() {
                return this.pageIsLoaded();
            }
        },
        {
            key: "pageIsLoaded",
            value: function pageIsLoaded() {
                return this.pageLoaded || document.readyState == "complete";
            }
        }
    ]);
    return History;
}();
var LinkClickObserver = /*#__PURE__*/ function() {
    "use strict";
    function LinkClickObserver(delegate) {
        var _this = this;
        _helpers.classCallCheck(this, LinkClickObserver);
        this.started = false;
        this.clickCaptured = function() {
            removeEventListener("click", _this.clickBubbled, false);
            addEventListener("click", _this.clickBubbled, false);
        };
        this.clickBubbled = function(event) {
            if (_this.clickEventIsSignificant(event)) {
                var target = event.composedPath && event.composedPath()[0] || event.target;
                var link = _this.findLinkFromClickTarget(target);
                if (link) {
                    var location = _this.getLocationForLink(link);
                    if (_this.delegate.willFollowLinkToLocation(link, location)) {
                        event.preventDefault();
                        _this.delegate.followedLinkToLocation(link, location);
                    }
                }
            }
        };
        this.delegate = delegate;
    }
    _helpers.createClass(LinkClickObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    addEventListener("click", this.clickCaptured, true);
                    this.started = true;
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    removeEventListener("click", this.clickCaptured, true);
                    this.started = false;
                }
            }
        },
        {
            key: "clickEventIsSignificant",
            value: function clickEventIsSignificant(event) {
                return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
            }
        },
        {
            key: "findLinkFromClickTarget",
            value: function findLinkFromClickTarget(target) {
                if (target instanceof Element) return target.closest("a[href]:not([target^=_]):not([download])");
            }
        },
        {
            key: "getLocationForLink",
            value: function getLocationForLink(link) {
                return expandURL(link.getAttribute("href") || "");
            }
        }
    ]);
    return LinkClickObserver;
}();
function isAction(action) {
    return action == "advance" || action == "replace" || action == "restore";
}
var Navigator = /*#__PURE__*/ function() {
    "use strict";
    function Navigator(delegate) {
        _helpers.classCallCheck(this, Navigator);
        this.delegate = delegate;
    }
    _helpers.createClass(Navigator, [
        {
            key: "proposeVisit",
            value: function proposeVisit(location) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (this.delegate.allowsVisitingLocationWithAction(location, options.action)) {
                    if (locationIsVisitable(location, this.view.snapshot.rootLocation)) this.delegate.visitProposedToLocation(location, options);
                    else window.location.href = location.toString();
                }
            }
        },
        {
            key: "startVisit",
            value: function startVisit(locatable, restorationIdentifier) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                this.stop();
                this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({
                    referrer: this.location
                }, options));
                this.currentVisit.start();
            }
        },
        {
            key: "submitForm",
            value: function submitForm(form, submitter) {
                this.stop();
                this.formSubmission = new FormSubmission(this, form, submitter, true);
                this.formSubmission.start();
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.formSubmission) {
                    this.formSubmission.stop();
                    delete this.formSubmission;
                }
                if (this.currentVisit) {
                    this.currentVisit.cancel();
                    delete this.currentVisit;
                }
            }
        },
        {
            key: "adapter",
            get: function get() {
                return this.delegate.adapter;
            }
        },
        {
            key: "view",
            get: function get() {
                return this.delegate.view;
            }
        },
        {
            key: "history",
            get: function get() {
                return this.delegate.history;
            }
        },
        {
            key: "formSubmissionStarted",
            value: function formSubmissionStarted(formSubmission) {
                if (typeof this.adapter.formSubmissionStarted === 'function') this.adapter.formSubmissionStarted(formSubmission);
            }
        },
        {
            key: "formSubmissionSucceededWithResponse",
            value: function formSubmissionSucceededWithResponse(formSubmission, fetchResponse) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var responseHTML, statusCode, redirected, action, visitOptions;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(formSubmission == _this.formSubmission)) {
                                    _ctx.next = 5;
                                    break;
                                }
                                _ctx.next = 3;
                                return fetchResponse.responseHTML;
                            case 3:
                                responseHTML = _ctx.sent;
                                if (responseHTML) {
                                    if (formSubmission.method != FetchMethod.get) _this.view.clearSnapshotCache();
                                    statusCode = fetchResponse.statusCode, redirected = fetchResponse.redirected;
                                    action = _this.getActionForFormSubmission(formSubmission);
                                    visitOptions = {
                                        action: action,
                                        response: {
                                            statusCode: statusCode,
                                            responseHTML: responseHTML,
                                            redirected: redirected
                                        }
                                    };
                                    _this.proposeVisit(fetchResponse.location, visitOptions);
                                }
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "formSubmissionFailedWithResponse",
            value: function formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var responseHTML, snapshot;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return fetchResponse.responseHTML;
                            case 2:
                                responseHTML = _ctx.sent;
                                if (!responseHTML) {
                                    _ctx.next = 14;
                                    break;
                                }
                                snapshot = PageSnapshot.fromHTMLString(responseHTML);
                                if (!fetchResponse.serverError) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _ctx.next = 8;
                                return _this.view.renderError(snapshot);
                            case 8:
                                _ctx.next = 12;
                                break;
                            case 10:
                                _ctx.next = 12;
                                return _this.view.renderPage(snapshot);
                            case 12:
                                _this.view.scrollToTop();
                                _this.view.clearSnapshotCache();
                            case 14:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "formSubmissionErrored",
            value: function formSubmissionErrored(formSubmission, error) {
                console.error(error);
            }
        },
        {
            key: "formSubmissionFinished",
            value: function formSubmissionFinished(formSubmission) {
                if (typeof this.adapter.formSubmissionFinished === 'function') this.adapter.formSubmissionFinished(formSubmission);
            }
        },
        {
            key: "visitStarted",
            value: function visitStarted(visit5) {
                this.delegate.visitStarted(visit5);
            }
        },
        {
            key: "visitCompleted",
            value: function visitCompleted(visit6) {
                this.delegate.visitCompleted(visit6);
            }
        },
        {
            key: "locationWithActionIsSamePage",
            value: function locationWithActionIsSamePage(location, action) {
                var anchor = getAnchor(location);
                var currentAnchor = getAnchor(this.view.lastRenderedLocation);
                var isRestorationToTop = action === 'restore' && typeof anchor === 'undefined';
                return action !== "replace" && getRequestURL(location) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
            }
        },
        {
            key: "visitScrolledToSamePageLocation",
            value: function visitScrolledToSamePageLocation(oldURL, newURL) {
                this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
            }
        },
        {
            key: "location",
            get: function get() {
                return this.history.location;
            }
        },
        {
            key: "restorationIdentifier",
            get: function get() {
                return this.history.restorationIdentifier;
            }
        },
        {
            key: "getActionForFormSubmission",
            value: function getActionForFormSubmission(formSubmission) {
                var formElement = formSubmission.formElement, submitter = formSubmission.submitter;
                var action = getAttribute("data-turbo-action", submitter, formElement);
                return isAction(action) ? action : "advance";
            }
        }
    ]);
    return Navigator;
}();
var PageStage;
(function(PageStage1) {
    PageStage1[PageStage1["initial"] = 0] = "initial";
    PageStage1[PageStage1["loading"] = 1] = "loading";
    PageStage1[PageStage1["interactive"] = 2] = "interactive";
    PageStage1[PageStage1["complete"] = 3] = "complete";
})(PageStage || (PageStage = {}));
var PageObserver = /*#__PURE__*/ function() {
    "use strict";
    function PageObserver(delegate) {
        var _this = this;
        _helpers.classCallCheck(this, PageObserver);
        this.stage = PageStage.initial;
        this.started = false;
        this.interpretReadyState = function() {
            var readyState = _this.readyState;
            if (readyState == "interactive") _this.pageIsInteractive();
            else if (readyState == "complete") _this.pageIsComplete();
        };
        this.pageWillUnload = function() {
            _this.delegate.pageWillUnload();
        };
        this.delegate = delegate;
    }
    _helpers.createClass(PageObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    if (this.stage == PageStage.initial) this.stage = PageStage.loading;
                    document.addEventListener("readystatechange", this.interpretReadyState, false);
                    addEventListener("pagehide", this.pageWillUnload, false);
                    this.started = true;
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    document.removeEventListener("readystatechange", this.interpretReadyState, false);
                    removeEventListener("pagehide", this.pageWillUnload, false);
                    this.started = false;
                }
            }
        },
        {
            key: "pageIsInteractive",
            value: function pageIsInteractive() {
                if (this.stage == PageStage.loading) {
                    this.stage = PageStage.interactive;
                    this.delegate.pageBecameInteractive();
                }
            }
        },
        {
            key: "pageIsComplete",
            value: function pageIsComplete() {
                this.pageIsInteractive();
                if (this.stage == PageStage.interactive) {
                    this.stage = PageStage.complete;
                    this.delegate.pageLoaded();
                }
            }
        },
        {
            key: "readyState",
            get: function get() {
                return document.readyState;
            }
        }
    ]);
    return PageObserver;
}();
var ScrollObserver = /*#__PURE__*/ function() {
    "use strict";
    function ScrollObserver(delegate) {
        var _this = this;
        _helpers.classCallCheck(this, ScrollObserver);
        this.started = false;
        this.onScroll = function() {
            _this.updatePosition({
                x: window.pageXOffset,
                y: window.pageYOffset
            });
        };
        this.delegate = delegate;
    }
    _helpers.createClass(ScrollObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    addEventListener("scroll", this.onScroll, false);
                    this.onScroll();
                    this.started = true;
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    removeEventListener("scroll", this.onScroll, false);
                    this.started = false;
                }
            }
        },
        {
            key: "updatePosition",
            value: function updatePosition(position) {
                this.delegate.scrollPositionChanged(position);
            }
        }
    ]);
    return ScrollObserver;
}();
var StreamObserver = /*#__PURE__*/ function() {
    "use strict";
    function StreamObserver(delegate) {
        var _this = this;
        _helpers.classCallCheck(this, StreamObserver);
        this.sources = new Set;
        this.started = false;
        this.inspectFetchResponse = function(event) {
            var response = fetchResponseFromEvent(event);
            if (response && fetchResponseIsStream(response)) {
                event.preventDefault();
                _this.receiveMessageResponse(response);
            }
        };
        this.receiveMessageEvent = function(event) {
            if (_this.started && typeof event.data == "string") _this.receiveMessageHTML(event.data);
        };
        this.delegate = delegate;
    }
    _helpers.createClass(StreamObserver, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    this.started = true;
                    addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    this.started = false;
                    removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
                }
            }
        },
        {
            key: "connectStreamSource",
            value: function connectStreamSource(source) {
                if (!this.streamSourceIsConnected(source)) {
                    this.sources.add(source);
                    source.addEventListener("message", this.receiveMessageEvent, false);
                }
            }
        },
        {
            key: "disconnectStreamSource",
            value: function disconnectStreamSource(source) {
                if (this.streamSourceIsConnected(source)) {
                    this.sources.delete(source);
                    source.removeEventListener("message", this.receiveMessageEvent, false);
                }
            }
        },
        {
            key: "streamSourceIsConnected",
            value: function streamSourceIsConnected(source) {
                return this.sources.has(source);
            }
        },
        {
            key: "receiveMessageResponse",
            value: function receiveMessageResponse(response) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var html;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return response.responseHTML;
                            case 2:
                                html = _ctx.sent;
                                if (html) _this.receiveMessageHTML(html);
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "receiveMessageHTML",
            value: function receiveMessageHTML(html) {
                this.delegate.receivedMessageFromStream(new StreamMessage(html));
            }
        }
    ]);
    return StreamObserver;
}();
function fetchResponseFromEvent(event) {
    var _a;
    var fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;
    if (fetchResponse instanceof FetchResponse) return fetchResponse;
}
function fetchResponseIsStream(response) {
    var _a;
    var contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
    return contentType.startsWith(StreamMessage.contentType);
}
var ErrorRenderer = /*#__PURE__*/ function(Renderer) {
    "use strict";
    _helpers.inherits(ErrorRenderer, Renderer);
    var _super = _helpers.createSuper(ErrorRenderer);
    function ErrorRenderer() {
        _helpers.classCallCheck(this, ErrorRenderer);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(ErrorRenderer, [
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.replaceHeadAndBody();
                                _this.activateScriptElements();
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "replaceHeadAndBody",
            value: function replaceHeadAndBody() {
                var documentElement = document.documentElement, head = document.head, body = document.body;
                documentElement.replaceChild(this.newHead, head);
                documentElement.replaceChild(this.newElement, body);
            }
        },
        {
            key: "activateScriptElements",
            value: function activateScriptElements() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.scriptElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var replaceableElement = _step.value;
                        var parentNode = replaceableElement.parentNode;
                        if (parentNode) {
                            var element = this.createScriptElement(replaceableElement);
                            parentNode.replaceChild(element, replaceableElement);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "newHead",
            get: function get() {
                return this.newSnapshot.headSnapshot.element;
            }
        },
        {
            key: "scriptElements",
            get: function get() {
                return _helpers.toConsumableArray(document.documentElement.querySelectorAll("script"));
            }
        }
    ]);
    return ErrorRenderer;
}(Renderer);
var PageRenderer = /*#__PURE__*/ function(Renderer) {
    "use strict";
    _helpers.inherits(PageRenderer, Renderer);
    var _super = _helpers.createSuper(PageRenderer);
    function PageRenderer() {
        _helpers.classCallCheck(this, PageRenderer);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(PageRenderer, [
        {
            key: "shouldRender",
            get: function get() {
                return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
            }
        },
        {
            key: "prepareToRender",
            value: function prepareToRender() {
                this.mergeHead();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (_this.willRender) _this.replaceBody();
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "finishRendering",
            value: function finishRendering() {
                _helpers.get(_helpers.getPrototypeOf(PageRenderer.prototype), "finishRendering", this).call(this);
                if (!this.isPreview) this.focusFirstAutofocusableElement();
            }
        },
        {
            key: "currentHeadSnapshot",
            get: function get() {
                return this.currentSnapshot.headSnapshot;
            }
        },
        {
            key: "newHeadSnapshot",
            get: function get() {
                return this.newSnapshot.headSnapshot;
            }
        },
        {
            key: "newElement",
            get: function get() {
                return this.newSnapshot.element;
            }
        },
        {
            key: "mergeHead",
            value: function mergeHead() {
                this.copyNewHeadStylesheetElements();
                this.copyNewHeadScriptElements();
                this.removeCurrentHeadProvisionalElements();
                this.copyNewHeadProvisionalElements();
            }
        },
        {
            key: "replaceBody",
            value: function replaceBody() {
                var _this = this;
                this.preservingPermanentElements(function() {
                    _this.activateNewBody();
                    _this.assignNewBody();
                });
            }
        },
        {
            key: "trackedElementsAreIdentical",
            get: function get() {
                return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
            }
        },
        {
            key: "copyNewHeadStylesheetElements",
            value: function copyNewHeadStylesheetElements() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.newHeadStylesheetElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var element = _step.value;
                        document.head.appendChild(element);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "copyNewHeadScriptElements",
            value: function copyNewHeadScriptElements() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.newHeadScriptElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var element = _step.value;
                        document.head.appendChild(this.createScriptElement(element));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "removeCurrentHeadProvisionalElements",
            value: function removeCurrentHeadProvisionalElements() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.currentHeadProvisionalElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var element = _step.value;
                        document.head.removeChild(element);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "copyNewHeadProvisionalElements",
            value: function copyNewHeadProvisionalElements() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.newHeadProvisionalElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var element = _step.value;
                        document.head.appendChild(element);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "activateNewBody",
            value: function activateNewBody() {
                document.adoptNode(this.newElement);
                this.activateNewBodyScriptElements();
            }
        },
        {
            key: "activateNewBodyScriptElements",
            value: function activateNewBodyScriptElements() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.newBodyScriptElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var inertScriptElement = _step.value;
                        var activatedScriptElement = this.createScriptElement(inertScriptElement);
                        inertScriptElement.replaceWith(activatedScriptElement);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "assignNewBody",
            value: function assignNewBody() {
                if (document.body && this.newElement instanceof HTMLBodyElement) document.body.replaceWith(this.newElement);
                else document.documentElement.appendChild(this.newElement);
            }
        },
        {
            key: "newHeadStylesheetElements",
            get: function get() {
                return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
            }
        },
        {
            key: "newHeadScriptElements",
            get: function get() {
                return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
            }
        },
        {
            key: "currentHeadProvisionalElements",
            get: function get() {
                return this.currentHeadSnapshot.provisionalElements;
            }
        },
        {
            key: "newHeadProvisionalElements",
            get: function get() {
                return this.newHeadSnapshot.provisionalElements;
            }
        },
        {
            key: "newBodyScriptElements",
            get: function get() {
                return this.newElement.querySelectorAll("script");
            }
        }
    ]);
    return PageRenderer;
}(Renderer);
var SnapshotCache = /*#__PURE__*/ function() {
    "use strict";
    function SnapshotCache(size) {
        _helpers.classCallCheck(this, SnapshotCache);
        this.keys = [];
        this.snapshots = {};
        this.size = size;
    }
    _helpers.createClass(SnapshotCache, [
        {
            key: "has",
            value: function has(location) {
                return toCacheKey(location) in this.snapshots;
            }
        },
        {
            key: "get",
            value: function get(location) {
                if (this.has(location)) {
                    var snapshot = this.read(location);
                    this.touch(location);
                    return snapshot;
                }
            }
        },
        {
            key: "put",
            value: function put(location, snapshot) {
                this.write(location, snapshot);
                this.touch(location);
                return snapshot;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.snapshots = {};
            }
        },
        {
            key: "read",
            value: function read(location) {
                return this.snapshots[toCacheKey(location)];
            }
        },
        {
            key: "write",
            value: function write(location, snapshot) {
                this.snapshots[toCacheKey(location)] = snapshot;
            }
        },
        {
            key: "touch",
            value: function touch(location) {
                var key = toCacheKey(location);
                var index = this.keys.indexOf(key);
                if (index > -1) this.keys.splice(index, 1);
                this.keys.unshift(key);
                this.trim();
            }
        },
        {
            key: "trim",
            value: function trim() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.keys.splice(this.size)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var key = _step.value;
                        delete this.snapshots[key];
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    ]);
    return SnapshotCache;
}();
var PageView = /*#__PURE__*/ function(View) {
    "use strict";
    _helpers.inherits(PageView, View);
    var _super = _helpers.createSuper(PageView);
    function PageView() {
        _helpers.classCallCheck(this, PageView);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.snapshotCache = new SnapshotCache(10);
        _this.lastRenderedLocation = new URL(location.href);
        return _this;
    }
    _helpers.createClass(PageView, [
        {
            key: "renderPage",
            value: function renderPage(snapshot) {
                var isPreview = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, willRender = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var renderer = new PageRenderer(this.snapshot, snapshot, isPreview, willRender);
                return this.render(renderer);
            }
        },
        {
            key: "renderError",
            value: function renderError(snapshot) {
                var renderer = new ErrorRenderer(this.snapshot, snapshot, false);
                return this.render(renderer);
            }
        },
        {
            key: "clearSnapshotCache",
            value: function clearSnapshotCache() {
                this.snapshotCache.clear();
            }
        },
        {
            key: "cacheSnapshot",
            value: function cacheSnapshot() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var snapshot, location, cachedSnapshot;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!_this.shouldCacheSnapshot) {
                                    _ctx.next = 8;
                                    break;
                                }
                                _this.delegate.viewWillCacheSnapshot();
                                snapshot = _this.snapshot, location = _this.lastRenderedLocation;
                                _ctx.next = 5;
                                return nextEventLoopTick();
                            case 5:
                                cachedSnapshot = snapshot.clone();
                                _this.snapshotCache.put(location, cachedSnapshot);
                                return _ctx.abrupt("return", cachedSnapshot);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getCachedSnapshotForLocation",
            value: function getCachedSnapshotForLocation(location) {
                return this.snapshotCache.get(location);
            }
        },
        {
            key: "snapshot",
            get: function get() {
                return PageSnapshot.fromElement(this.element);
            }
        },
        {
            key: "shouldCacheSnapshot",
            get: function get() {
                return this.snapshot.isCacheable;
            }
        }
    ]);
    return PageView;
}(View);
var Session = /*#__PURE__*/ function() {
    "use strict";
    function Session() {
        _helpers.classCallCheck(this, Session);
        this.navigator = new Navigator(this);
        this.history = new History(this);
        this.view = new PageView(this, document.documentElement);
        this.adapter = new BrowserAdapter(this);
        this.pageObserver = new PageObserver(this);
        this.cacheObserver = new CacheObserver();
        this.linkClickObserver = new LinkClickObserver(this);
        this.formSubmitObserver = new FormSubmitObserver(this);
        this.scrollObserver = new ScrollObserver(this);
        this.streamObserver = new StreamObserver(this);
        this.frameRedirector = new FrameRedirector(document.documentElement);
        this.drive = true;
        this.enabled = true;
        this.progressBarDelay = 500;
        this.started = false;
    }
    _helpers.createClass(Session, [
        {
            key: "start",
            value: function start() {
                if (!this.started) {
                    this.pageObserver.start();
                    this.cacheObserver.start();
                    this.linkClickObserver.start();
                    this.formSubmitObserver.start();
                    this.scrollObserver.start();
                    this.streamObserver.start();
                    this.frameRedirector.start();
                    this.history.start();
                    this.started = true;
                    this.enabled = true;
                }
            }
        },
        {
            key: "disable",
            value: function disable() {
                this.enabled = false;
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.started) {
                    this.pageObserver.stop();
                    this.cacheObserver.stop();
                    this.linkClickObserver.stop();
                    this.formSubmitObserver.stop();
                    this.scrollObserver.stop();
                    this.streamObserver.stop();
                    this.frameRedirector.stop();
                    this.history.stop();
                    this.started = false;
                }
            }
        },
        {
            key: "registerAdapter",
            value: function registerAdapter(adapter) {
                this.adapter = adapter;
            }
        },
        {
            key: "visit",
            value: function visit(location) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.navigator.proposeVisit(expandURL(location), options);
            }
        },
        {
            key: "connectStreamSource",
            value: function connectStreamSource(source) {
                this.streamObserver.connectStreamSource(source);
            }
        },
        {
            key: "disconnectStreamSource",
            value: function disconnectStreamSource(source) {
                this.streamObserver.disconnectStreamSource(source);
            }
        },
        {
            key: "renderStreamMessage",
            value: function renderStreamMessage(message) {
                document.documentElement.appendChild(StreamMessage.wrap(message).fragment);
            }
        },
        {
            key: "clearCache",
            value: function clearCache() {
                this.view.clearSnapshotCache();
            }
        },
        {
            key: "setProgressBarDelay",
            value: function setProgressBarDelay(delay) {
                this.progressBarDelay = delay;
            }
        },
        {
            key: "location",
            get: function get() {
                return this.history.location;
            }
        },
        {
            key: "restorationIdentifier",
            get: function get() {
                return this.history.restorationIdentifier;
            }
        },
        {
            key: "historyPoppedToLocationWithRestorationIdentifier",
            value: function historyPoppedToLocationWithRestorationIdentifier(location, restorationIdentifier) {
                if (this.enabled) this.navigator.startVisit(location, restorationIdentifier, {
                    action: "restore",
                    historyChanged: true
                });
                else this.adapter.pageInvalidated();
            }
        },
        {
            key: "scrollPositionChanged",
            value: function scrollPositionChanged(position) {
                this.history.updateRestorationData({
                    scrollPosition: position
                });
            }
        },
        {
            key: "willFollowLinkToLocation",
            value: function willFollowLinkToLocation(link, location) {
                return this.elementDriveEnabled(link) && locationIsVisitable(location, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(link, location);
            }
        },
        {
            key: "followedLinkToLocation",
            value: function followedLinkToLocation(link, location) {
                var action = this.getActionForLink(link);
                this.convertLinkWithMethodClickToFormSubmission(link) || this.visit(location.href, {
                    action: action
                });
            }
        },
        {
            key: "convertLinkWithMethodClickToFormSubmission",
            value: function convertLinkWithMethodClickToFormSubmission(link) {
                var linkMethod = link.getAttribute("data-turbo-method");
                if (linkMethod) {
                    var form = document.createElement("form");
                    form.method = linkMethod;
                    form.action = link.getAttribute("href") || "undefined";
                    form.hidden = true;
                    if (link.hasAttribute("data-turbo-confirm")) form.setAttribute("data-turbo-confirm", link.getAttribute("data-turbo-confirm"));
                    var frame = this.getTargetFrameForLink(link);
                    if (frame) {
                        form.setAttribute("data-turbo-frame", frame);
                        form.addEventListener("turbo:submit-start", function() {
                            return form.remove();
                        });
                    } else form.addEventListener("submit", function() {
                        return form.remove();
                    });
                    document.body.appendChild(form);
                    return dispatch("submit", {
                        cancelable: true,
                        target: form
                    });
                } else return false;
            }
        },
        {
            key: "allowsVisitingLocationWithAction",
            value: function allowsVisitingLocationWithAction(location, action) {
                return this.locationWithActionIsSamePage(location, action) || this.applicationAllowsVisitingLocation(location);
            }
        },
        {
            key: "visitProposedToLocation",
            value: function visitProposedToLocation(location, options) {
                extendURLWithDeprecatedProperties(location);
                this.adapter.visitProposedToLocation(location, options);
            }
        },
        {
            key: "visitStarted",
            value: function visitStarted(visit7) {
                extendURLWithDeprecatedProperties(visit7.location);
                if (!visit7.silent) this.notifyApplicationAfterVisitingLocation(visit7.location, visit7.action);
            }
        },
        {
            key: "visitCompleted",
            value: function visitCompleted(visit8) {
                this.notifyApplicationAfterPageLoad(visit8.getTimingMetrics());
            }
        },
        {
            key: "locationWithActionIsSamePage",
            value: function locationWithActionIsSamePage(location, action) {
                return this.navigator.locationWithActionIsSamePage(location, action);
            }
        },
        {
            key: "visitScrolledToSamePageLocation",
            value: function visitScrolledToSamePageLocation(oldURL, newURL) {
                this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
            }
        },
        {
            key: "willSubmitForm",
            value: function willSubmitForm(form, submitter) {
                var action = getAction(form, submitter);
                return this.elementDriveEnabled(form) && (!submitter || this.elementDriveEnabled(submitter)) && locationIsVisitable(expandURL(action), this.snapshot.rootLocation);
            }
        },
        {
            key: "formSubmitted",
            value: function formSubmitted(form, submitter) {
                this.navigator.submitForm(form, submitter);
            }
        },
        {
            key: "pageBecameInteractive",
            value: function pageBecameInteractive() {
                this.view.lastRenderedLocation = this.location;
                this.notifyApplicationAfterPageLoad();
            }
        },
        {
            key: "pageLoaded",
            value: function pageLoaded() {
                this.history.assumeControlOfScrollRestoration();
            }
        },
        {
            key: "pageWillUnload",
            value: function pageWillUnload() {
                this.history.relinquishControlOfScrollRestoration();
            }
        },
        {
            key: "receivedMessageFromStream",
            value: function receivedMessageFromStream(message) {
                this.renderStreamMessage(message);
            }
        },
        {
            key: "viewWillCacheSnapshot",
            value: function viewWillCacheSnapshot() {
                var _a;
                if (!((_a = this.navigator.currentVisit) === null || _a === void 0 ? void 0 : _a.silent)) this.notifyApplicationBeforeCachingSnapshot();
            }
        },
        {
            key: "allowsImmediateRender",
            value: function allowsImmediateRender(param, resume) {
                var element = param.element;
                var event = this.notifyApplicationBeforeRender(element, resume);
                return !event.defaultPrevented;
            }
        },
        {
            key: "viewRenderedSnapshot",
            value: function viewRenderedSnapshot(snapshot, isPreview) {
                this.view.lastRenderedLocation = this.history.location;
                this.notifyApplicationAfterRender();
            }
        },
        {
            key: "viewInvalidated",
            value: function viewInvalidated() {
                this.adapter.pageInvalidated();
            }
        },
        {
            key: "frameLoaded",
            value: function frameLoaded(frame) {
                this.notifyApplicationAfterFrameLoad(frame);
            }
        },
        {
            key: "frameRendered",
            value: function frameRendered(fetchResponse, frame) {
                this.notifyApplicationAfterFrameRender(fetchResponse, frame);
            }
        },
        {
            key: "applicationAllowsFollowingLinkToLocation",
            value: function applicationAllowsFollowingLinkToLocation(link, location) {
                var event = this.notifyApplicationAfterClickingLinkToLocation(link, location);
                return !event.defaultPrevented;
            }
        },
        {
            key: "applicationAllowsVisitingLocation",
            value: function applicationAllowsVisitingLocation(location) {
                var event = this.notifyApplicationBeforeVisitingLocation(location);
                return !event.defaultPrevented;
            }
        },
        {
            key: "notifyApplicationAfterClickingLinkToLocation",
            value: function notifyApplicationAfterClickingLinkToLocation(link, location) {
                return dispatch("turbo:click", {
                    target: link,
                    detail: {
                        url: location.href
                    },
                    cancelable: true
                });
            }
        },
        {
            key: "notifyApplicationBeforeVisitingLocation",
            value: function notifyApplicationBeforeVisitingLocation(location) {
                return dispatch("turbo:before-visit", {
                    detail: {
                        url: location.href
                    },
                    cancelable: true
                });
            }
        },
        {
            key: "notifyApplicationAfterVisitingLocation",
            value: function notifyApplicationAfterVisitingLocation(location, action) {
                markAsBusy(document.documentElement);
                return dispatch("turbo:visit", {
                    detail: {
                        url: location.href,
                        action: action
                    }
                });
            }
        },
        {
            key: "notifyApplicationBeforeCachingSnapshot",
            value: function notifyApplicationBeforeCachingSnapshot() {
                return dispatch("turbo:before-cache");
            }
        },
        {
            key: "notifyApplicationBeforeRender",
            value: function notifyApplicationBeforeRender(newBody, resume) {
                return dispatch("turbo:before-render", {
                    detail: {
                        newBody: newBody,
                        resume: resume
                    },
                    cancelable: true
                });
            }
        },
        {
            key: "notifyApplicationAfterRender",
            value: function notifyApplicationAfterRender() {
                return dispatch("turbo:render");
            }
        },
        {
            key: "notifyApplicationAfterPageLoad",
            value: function notifyApplicationAfterPageLoad() {
                var timing = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                clearBusyState(document.documentElement);
                return dispatch("turbo:load", {
                    detail: {
                        url: this.location.href,
                        timing: timing
                    }
                });
            }
        },
        {
            key: "notifyApplicationAfterVisitingSamePageLocation",
            value: function notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
                dispatchEvent(new HashChangeEvent("hashchange", {
                    oldURL: oldURL.toString(),
                    newURL: newURL.toString()
                }));
            }
        },
        {
            key: "notifyApplicationAfterFrameLoad",
            value: function notifyApplicationAfterFrameLoad(frame) {
                return dispatch("turbo:frame-load", {
                    target: frame
                });
            }
        },
        {
            key: "notifyApplicationAfterFrameRender",
            value: function notifyApplicationAfterFrameRender(fetchResponse, frame) {
                return dispatch("turbo:frame-render", {
                    detail: {
                        fetchResponse: fetchResponse
                    },
                    target: frame,
                    cancelable: true
                });
            }
        },
        {
            key: "elementDriveEnabled",
            value: function elementDriveEnabled(element) {
                var container = element === null || element === void 0 ? void 0 : element.closest("[data-turbo]");
                if (this.drive) {
                    if (container) return container.getAttribute("data-turbo") != "false";
                    else return true;
                } else {
                    if (container) return container.getAttribute("data-turbo") == "true";
                    else return false;
                }
            }
        },
        {
            key: "getActionForLink",
            value: function getActionForLink(link) {
                var action = link.getAttribute("data-turbo-action");
                return isAction(action) ? action : "advance";
            }
        },
        {
            key: "getTargetFrameForLink",
            value: function getTargetFrameForLink(link) {
                var frame = link.getAttribute("data-turbo-frame");
                if (frame) return frame;
                else {
                    var container = link.closest("turbo-frame");
                    if (container) return container.id;
                }
            }
        },
        {
            key: "snapshot",
            get: function get() {
                return this.view.snapshot;
            }
        }
    ]);
    return Session;
}();
function extendURLWithDeprecatedProperties(url) {
    Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
}
var deprecatedLocationPropertyDescriptors = {
    absoluteURL: {
        get: function() {
            return this.toString();
        }
    }
};
var session = new Session;
var navigator$1 = session.navigator;
function start() {
    session.start();
}
function registerAdapter(adapter) {
    session.registerAdapter(adapter);
}
function visit(location, options) {
    session.visit(location, options);
}
function connectStreamSource(source) {
    session.connectStreamSource(source);
}
function disconnectStreamSource(source) {
    session.disconnectStreamSource(source);
}
function renderStreamMessage(message) {
    session.renderStreamMessage(message);
}
function clearCache() {
    session.clearCache();
}
function setProgressBarDelay(delay) {
    session.setProgressBarDelay(delay);
}
function setConfirmMethod(confirmMethod) {
    FormSubmission.confirmMethod = confirmMethod;
}
var Turbo = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    navigator: navigator$1,
    session: session,
    PageRenderer: PageRenderer,
    PageSnapshot: PageSnapshot,
    start: start,
    registerAdapter: registerAdapter,
    visit: visit,
    connectStreamSource: connectStreamSource,
    disconnectStreamSource: disconnectStreamSource,
    renderStreamMessage: renderStreamMessage,
    clearCache: clearCache,
    setProgressBarDelay: setProgressBarDelay,
    setConfirmMethod: setConfirmMethod
});
var FrameController = /*#__PURE__*/ function() {
    "use strict";
    function FrameController(element) {
        _helpers.classCallCheck(this, FrameController);
        this.fetchResponseLoaded = function(fetchResponse) {};
        this.currentFetchRequest = null;
        this.resolveVisitPromise = function() {};
        this.connected = false;
        this.hasBeenLoaded = false;
        this.settingSourceURL = false;
        this.element = element;
        this.view = new FrameView(this, this.element);
        this.appearanceObserver = new AppearanceObserver(this, this.element);
        this.linkInterceptor = new LinkInterceptor(this, this.element);
        this.formInterceptor = new FormInterceptor(this, this.element);
    }
    _helpers.createClass(FrameController, [
        {
            key: "connect",
            value: function connect() {
                if (!this.connected) {
                    this.connected = true;
                    this.reloadable = false;
                    if (this.loadingStyle == FrameLoadingStyle.lazy) this.appearanceObserver.start();
                    this.linkInterceptor.start();
                    this.formInterceptor.start();
                    this.sourceURLChanged();
                }
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                if (this.connected) {
                    this.connected = false;
                    this.appearanceObserver.stop();
                    this.linkInterceptor.stop();
                    this.formInterceptor.stop();
                }
            }
        },
        {
            key: "disabledChanged",
            value: function disabledChanged() {
                if (this.loadingStyle == FrameLoadingStyle.eager) this.loadSourceURL();
            }
        },
        {
            key: "sourceURLChanged",
            value: function sourceURLChanged() {
                if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) this.loadSourceURL();
            }
        },
        {
            key: "loadingStyleChanged",
            value: function loadingStyleChanged() {
                if (this.loadingStyle == FrameLoadingStyle.lazy) this.appearanceObserver.start();
                else {
                    this.appearanceObserver.stop();
                    this.loadSourceURL();
                }
            }
        },
        {
            key: "loadSourceURL",
            value: function loadSourceURL() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var previousURL;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(!_this.settingSourceURL && _this.enabled && _this.isActive && (_this.reloadable || _this.sourceURL != _this.currentURL))) {
                                    _ctx.next = 16;
                                    break;
                                }
                                previousURL = _this.currentURL;
                                _this.currentURL = _this.sourceURL;
                                if (!_this.sourceURL) {
                                    _ctx.next = 16;
                                    break;
                                }
                                _ctx.prev = 4;
                                _this.element.loaded = _this.visit(expandURL(_this.sourceURL));
                                _this.appearanceObserver.stop();
                                _ctx.next = 9;
                                return _this.element.loaded;
                            case 9:
                                _this.hasBeenLoaded = true;
                                _ctx.next = 16;
                                break;
                            case 12:
                                _ctx.prev = 12;
                                _ctx.t0 = _ctx["catch"](4);
                                _this.currentURL = previousURL;
                                throw _ctx.t0;
                            case 16:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            4,
                            12
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "loadResponse",
            value: function loadResponse(fetchResponse) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var html, body, snapshot, renderer;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (fetchResponse.redirected || fetchResponse.succeeded && fetchResponse.isHTML) _this.sourceURL = fetchResponse.response.url;
                                _ctx.prev = 1;
                                _ctx.next = 4;
                                return fetchResponse.responseHTML;
                            case 4:
                                html = _ctx.sent;
                                if (!html) {
                                    _ctx.next = 21;
                                    break;
                                }
                                body = parseHTMLDocument(html).body;
                                _ctx.t0 = Snapshot;
                                _ctx.next = 10;
                                return _this.extractForeignFrameElement(body);
                            case 10:
                                _ctx.t1 = _ctx.sent;
                                snapshot = new _ctx.t0(_ctx.t1);
                                renderer = new FrameRenderer(_this.view.snapshot, snapshot, false, false);
                                if (!_this.view.renderPromise) {
                                    _ctx.next = 16;
                                    break;
                                }
                                _ctx.next = 16;
                                return _this.view.renderPromise;
                            case 16:
                                _ctx.next = 18;
                                return _this.view.render(renderer);
                            case 18:
                                session.frameRendered(fetchResponse, _this.element);
                                session.frameLoaded(_this.element);
                                _this.fetchResponseLoaded(fetchResponse);
                            case 21:
                                _ctx.next = 27;
                                break;
                            case 23:
                                _ctx.prev = 23;
                                _ctx.t2 = _ctx["catch"](1);
                                console.error(_ctx.t2);
                                _this.view.invalidate();
                            case 27:
                                _ctx.prev = 27;
                                _this.fetchResponseLoaded = function() {};
                                return _ctx.finish(27);
                            case 30:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            1,
                            23,
                            27,
                            30
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "elementAppearedInViewport",
            value: function elementAppearedInViewport(element) {
                this.loadSourceURL();
            }
        },
        {
            key: "shouldInterceptLinkClick",
            value: function shouldInterceptLinkClick(element, url) {
                if (element.hasAttribute("data-turbo-method")) return false;
                else return this.shouldInterceptNavigation(element);
            }
        },
        {
            key: "linkClickIntercepted",
            value: function linkClickIntercepted(element, url) {
                this.reloadable = true;
                this.navigateFrame(element, url);
            }
        },
        {
            key: "shouldInterceptFormSubmission",
            value: function shouldInterceptFormSubmission(element, submitter) {
                return this.shouldInterceptNavigation(element, submitter);
            }
        },
        {
            key: "formSubmissionIntercepted",
            value: function formSubmissionIntercepted(element, submitter) {
                if (this.formSubmission) this.formSubmission.stop();
                this.reloadable = false;
                this.formSubmission = new FormSubmission(this, element, submitter);
                var fetchRequest = this.formSubmission.fetchRequest;
                this.prepareHeadersForRequest(fetchRequest.headers, fetchRequest);
                this.formSubmission.start();
            }
        },
        {
            key: "prepareHeadersForRequest",
            value: function prepareHeadersForRequest(headers, request) {
                headers["Turbo-Frame"] = this.id;
            }
        },
        {
            key: "requestStarted",
            value: function requestStarted(request) {
                markAsBusy(this.element);
            }
        },
        {
            key: "requestPreventedHandlingResponse",
            value: function requestPreventedHandlingResponse(request, response) {
                this.resolveVisitPromise();
            }
        },
        {
            key: "requestSucceededWithResponse",
            value: function requestSucceededWithResponse(request, response) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return _this.loadResponse(response);
                            case 2:
                                _this.resolveVisitPromise();
                            case 3:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "requestFailedWithResponse",
            value: function requestFailedWithResponse(request, response) {
                console.error(response);
                this.resolveVisitPromise();
            }
        },
        {
            key: "requestErrored",
            value: function requestErrored(request, error) {
                console.error(error);
                this.resolveVisitPromise();
            }
        },
        {
            key: "requestFinished",
            value: function requestFinished(request) {
                clearBusyState(this.element);
            }
        },
        {
            key: "formSubmissionStarted",
            value: function formSubmissionStarted(param) {
                var formElement = param.formElement;
                markAsBusy(formElement, this.findFrameElement(formElement));
            }
        },
        {
            key: "formSubmissionSucceededWithResponse",
            value: function formSubmissionSucceededWithResponse(formSubmission, response) {
                var frame = this.findFrameElement(formSubmission.formElement, formSubmission.submitter);
                this.proposeVisitIfNavigatedWithAction(frame, formSubmission.formElement, formSubmission.submitter);
                frame.delegate.loadResponse(response);
            }
        },
        {
            key: "formSubmissionFailedWithResponse",
            value: function formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
                this.element.delegate.loadResponse(fetchResponse);
            }
        },
        {
            key: "formSubmissionErrored",
            value: function formSubmissionErrored(formSubmission, error) {
                console.error(error);
            }
        },
        {
            key: "formSubmissionFinished",
            value: function formSubmissionFinished(param) {
                var formElement = param.formElement;
                clearBusyState(formElement, this.findFrameElement(formElement));
            }
        },
        {
            key: "allowsImmediateRender",
            value: function allowsImmediateRender(snapshot, resume) {
                return true;
            }
        },
        {
            key: "viewRenderedSnapshot",
            value: function viewRenderedSnapshot(snapshot, isPreview) {}
        },
        {
            key: "viewInvalidated",
            value: function viewInvalidated() {}
        },
        {
            key: "visit",
            value: function visit(url) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var _a, request;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ;
                                request = new FetchRequest(_this, FetchMethod.get, url, new URLSearchParams, _this.element);
                                (_a = _this.currentFetchRequest) === null || _a === void 0 || _a.cancel();
                                _this.currentFetchRequest = request;
                                return _ctx.abrupt("return", new Promise(function(resolve) {
                                    _this.resolveVisitPromise = function() {
                                        _this.resolveVisitPromise = function() {};
                                        _this.currentFetchRequest = null;
                                        resolve();
                                    };
                                    request.perform();
                                }));
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "navigateFrame",
            value: function navigateFrame(element, url, submitter) {
                var frame = this.findFrameElement(element, submitter);
                this.proposeVisitIfNavigatedWithAction(frame, element, submitter);
                frame.setAttribute("reloadable", "");
                frame.src = url;
            }
        },
        {
            key: "proposeVisitIfNavigatedWithAction",
            value: function proposeVisitIfNavigatedWithAction(frame, element, submitter) {
                var action = getAttribute("data-turbo-action", submitter, element, frame);
                if (isAction(action)) {
                    var visitCachedSnapshot = new SnapshotSubstitution(frame).visitCachedSnapshot;
                    frame.delegate.fetchResponseLoaded = function(fetchResponse) {
                        if (frame.src) {
                            var statusCode = fetchResponse.statusCode, redirected = fetchResponse.redirected;
                            var responseHTML = frame.ownerDocument.documentElement.outerHTML;
                            var response = {
                                statusCode: statusCode,
                                redirected: redirected,
                                responseHTML: responseHTML
                            };
                            session.visit(frame.src, {
                                action: action,
                                response: response,
                                visitCachedSnapshot: visitCachedSnapshot,
                                willRender: false
                            });
                        }
                    };
                }
            }
        },
        {
            key: "findFrameElement",
            value: function findFrameElement(element, submitter) {
                var _a;
                var id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
                return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
            }
        },
        {
            key: "extractForeignFrameElement",
            value: function extractForeignFrameElement(container) {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    var element, id;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ;
                                id = CSS.escape(_this.id);
                                _ctx.prev = 2;
                                if (!(element = activateElement(container.querySelector("turbo-frame#".concat(id)), _this.currentURL))) {
                                    _ctx.next = 5;
                                    break;
                                }
                                return _ctx.abrupt("return", element);
                            case 5:
                                if (!(element = activateElement(container.querySelector("turbo-frame[src][recurse~=".concat(id, "]")), _this.currentURL))) {
                                    _ctx.next = 11;
                                    break;
                                }
                                _ctx.next = 8;
                                return element.loaded;
                            case 8:
                                _ctx.next = 10;
                                return _this.extractForeignFrameElement(element);
                            case 10:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 11:
                                console.error('Response has no matching <turbo-frame id="'.concat(id, '"> element'));
                                _ctx.next = 17;
                                break;
                            case 14:
                                _ctx.prev = 14;
                                _ctx.t0 = _ctx["catch"](2);
                                console.error(_ctx.t0);
                            case 17:
                                return _ctx.abrupt("return", new FrameElement());
                            case 18:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            2,
                            14
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "formActionIsVisitable",
            value: function formActionIsVisitable(form, submitter) {
                var action = getAction(form, submitter);
                return locationIsVisitable(expandURL(action), this.rootLocation);
            }
        },
        {
            key: "shouldInterceptNavigation",
            value: function shouldInterceptNavigation(element, submitter) {
                var id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
                if (element instanceof HTMLFormElement && !this.formActionIsVisitable(element, submitter)) return false;
                if (!this.enabled || id == "_top") return false;
                if (id) {
                    var frameElement = getFrameElementById(id);
                    if (frameElement) return !frameElement.disabled;
                }
                if (!session.elementDriveEnabled(element)) return false;
                if (submitter && !session.elementDriveEnabled(submitter)) return false;
                return true;
            }
        },
        {
            key: "id",
            get: function get() {
                return this.element.id;
            }
        },
        {
            key: "enabled",
            get: function get() {
                return !this.element.disabled;
            }
        },
        {
            key: "sourceURL",
            get: function get() {
                if (this.element.src) return this.element.src;
            },
            set: function set(sourceURL) {
                this.settingSourceURL = true;
                this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
                this.currentURL = this.element.src;
                this.settingSourceURL = false;
            }
        },
        {
            key: "reloadable",
            get: function get() {
                var frame = this.findFrameElement(this.element);
                return frame.hasAttribute("reloadable");
            },
            set: function set(value) {
                var frame = this.findFrameElement(this.element);
                if (value) frame.setAttribute("reloadable", "");
                else frame.removeAttribute("reloadable");
            }
        },
        {
            key: "loadingStyle",
            get: function get() {
                return this.element.loading;
            }
        },
        {
            key: "isLoading",
            get: function get() {
                return this.formSubmission !== undefined || this.resolveVisitPromise() !== undefined;
            }
        },
        {
            key: "isActive",
            get: function get() {
                return this.element.isActive && this.connected;
            }
        },
        {
            key: "rootLocation",
            get: function get() {
                var _a;
                var meta = this.element.ownerDocument.querySelector('meta[name="turbo-root"]');
                var root = (_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/";
                return expandURL(root);
            }
        }
    ]);
    return FrameController;
}();
var SnapshotSubstitution = function SnapshotSubstitution(element) {
    "use strict";
    var _this = this;
    _helpers.classCallCheck(this, SnapshotSubstitution);
    this.visitCachedSnapshot = function(param) {
        var _$element = param.element;
        var _a;
        var id = _this.id, clone = _this.clone;
        (_a = _$element.querySelector("#" + id)) === null || _a === void 0 || _a.replaceWith(clone);
    };
    this.clone = element.cloneNode(true);
    this.id = element.id;
};
function getFrameElementById(id) {
    if (id != null) {
        var element = document.getElementById(id);
        if (element instanceof FrameElement) return element;
    }
}
function activateElement(element, currentURL) {
    if (element) {
        var src = element.getAttribute("src");
        if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) throw new Error('Matching <turbo-frame id="'.concat(element.id, '"> element has a source URL which references itself'));
        if (element.ownerDocument !== document) element = document.importNode(element, true);
        if (element instanceof FrameElement) {
            element.connectedCallback();
            element.disconnectedCallback();
            return element;
        }
    }
}
var StreamActions = {
    after: function() {
        var _this = this;
        this.targetElements.forEach(function(e) {
            var _a;
            return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(_this.templateContent, e.nextSibling);
        });
    },
    append: function() {
        var _this = this;
        this.removeDuplicateTargetChildren();
        this.targetElements.forEach(function(e) {
            return e.append(_this.templateContent);
        });
    },
    before: function() {
        var _this = this;
        this.targetElements.forEach(function(e) {
            var _a;
            return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(_this.templateContent, e);
        });
    },
    prepend: function() {
        var _this = this;
        this.removeDuplicateTargetChildren();
        this.targetElements.forEach(function(e) {
            return e.prepend(_this.templateContent);
        });
    },
    remove: function() {
        this.targetElements.forEach(function(e) {
            return e.remove();
        });
    },
    replace: function() {
        var _this = this;
        this.targetElements.forEach(function(e) {
            return e.replaceWith(_this.templateContent);
        });
    },
    update: function() {
        var _this = this;
        this.targetElements.forEach(function(e) {
            e.innerHTML = "";
            e.append(_this.templateContent);
        });
    }
};
var StreamElement = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    _helpers.inherits(StreamElement, HTMLElement);
    var _super = _helpers.createSuper(StreamElement);
    function StreamElement() {
        _helpers.classCallCheck(this, StreamElement);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(StreamElement, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                _ctx.next = 3;
                                return _this.render();
                            case 3:
                                _ctx.next = 8;
                                break;
                            case 5:
                                _ctx.prev = 5;
                                _ctx.t0 = _ctx["catch"](0);
                                console.error(_ctx.t0);
                            case 8:
                                _ctx.prev = 8;
                                _this.disconnect();
                                return _ctx.finish(8);
                            case 11:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            0,
                            5,
                            8,
                            11
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee1() {
                    var _a;
                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx1) {
                        while(1)switch(_ctx1.prev = _ctx1.next){
                            case 0:
                                ;
                                return _ctx1.abrupt("return", (_a = _this.renderPromise) !== null && _a !== void 0 ? _a : _this.renderPromise = _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee() {
                                    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
                                        while(1)switch(_ctx.prev = _ctx.next){
                                            case 0:
                                                if (!_this.dispatchEvent(_this.beforeRenderEvent)) {
                                                    _ctx.next = 4;
                                                    break;
                                                }
                                                _ctx.next = 3;
                                                return nextAnimationFrame();
                                            case 3:
                                                _this.performAction();
                                            case 4:
                                            case "end":
                                                return _ctx.stop();
                                        }
                                    }, _callee);
                                }))());
                            case 2:
                            case "end":
                                return _ctx1.stop();
                        }
                    }, _callee1);
                }))();
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                try {
                    this.remove();
                } catch (_a) {}
            }
        },
        {
            key: "removeDuplicateTargetChildren",
            value: function removeDuplicateTargetChildren() {
                this.duplicateChildren.forEach(function(c) {
                    return c.remove();
                });
            }
        },
        {
            key: "duplicateChildren",
            get: function get() {
                var _a;
                var existingChildren = this.targetElements.flatMap(function(e) {
                    return _helpers.toConsumableArray(e.children);
                }).filter(function(c) {
                    return !!c.id;
                });
                var newChildrenIds = _helpers.toConsumableArray((_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children).filter(function(c) {
                    return !!c.id;
                }).map(function(c) {
                    return c.id;
                });
                return existingChildren.filter(function(c) {
                    return newChildrenIds.includes(c.id);
                });
            }
        },
        {
            key: "performAction",
            get: function get() {
                if (this.action) {
                    var actionFunction = StreamActions[this.action];
                    if (actionFunction) return actionFunction;
                    this.raise("unknown action");
                }
                this.raise("action attribute is missing");
            }
        },
        {
            key: "targetElements",
            get: function get() {
                if (this.target) return this.targetElementsById;
                else if (this.targets) return this.targetElementsByQuery;
                else this.raise("target or targets attribute is missing");
            }
        },
        {
            key: "templateContent",
            get: function get() {
                return this.templateElement.content.cloneNode(true);
            }
        },
        {
            key: "templateElement",
            get: function get() {
                if (this.firstElementChild instanceof HTMLTemplateElement) return this.firstElementChild;
                this.raise("first child element must be a <template> element");
            }
        },
        {
            key: "action",
            get: function get() {
                return this.getAttribute("action");
            }
        },
        {
            key: "target",
            get: function get() {
                return this.getAttribute("target");
            }
        },
        {
            key: "targets",
            get: function get() {
                return this.getAttribute("targets");
            }
        },
        {
            key: "raise",
            value: function raise(message) {
                throw new Error("".concat(this.description, ": ").concat(message));
            }
        },
        {
            key: "description",
            get: function get() {
                var _a, _b;
                return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
            }
        },
        {
            key: "beforeRenderEvent",
            get: function get() {
                return new CustomEvent("turbo:before-stream-render", {
                    bubbles: true,
                    cancelable: true
                });
            }
        },
        {
            key: "targetElementsById",
            get: function get() {
                var _a;
                var element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);
                if (element !== null) return [
                    element
                ];
                else return [];
            }
        },
        {
            key: "targetElementsByQuery",
            get: function get() {
                var _a;
                var elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);
                if (elements.length !== 0) return Array.prototype.slice.call(elements);
                else return [];
            }
        }
    ]);
    return StreamElement;
}(_helpers.wrapNativeSuper(HTMLElement));
FrameElement.delegateConstructor = FrameController;
customElements.define("turbo-frame", FrameElement);
customElements.define("turbo-stream", StreamElement);
(function() {
    var element = document.currentScript;
    if (!element) return;
    if (element.hasAttribute("data-turbo-suppress-warning")) return;
    while(element = element.parentElement){
        if (element == document.body) return console.warn(unindent(_templateObject1()), element.outerHTML);
    }
})();
window.Turbo = Turbo;
start();

},{"@swc/helpers":"erO4s","regenerator-runtime":"12Ae8","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"csB3C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", function() {
    return _class;
});
var _helpers = require("@swc/helpers");
var _stimulus = require("@hotwired/stimulus");
var _class = /*#__PURE__*/ function(Controller) {
    "use strict";
    _helpers.inherits(_class, Controller);
    var _super = _helpers.createSuper(_class);
    function _class() {
        _helpers.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(_class, [
        {
            key: "initialize",
            value: function initialize() {
                var _this = this;
                this._renderDOMElements();
                document.addEventListener("keydown", function(event) {
                    if (event.keyCode === 27) _this.closeModal();
                });
            }
        },
        {
            key: "connect",
            value: function connect() {}
        },
        {
            key: "modalTemplate",
            get: function get() {
                return this.modalTemplateTarget.innerHTML;
            }
        },
        {
            key: "selectModal",
            value: function selectModal(e) {
                if (this.modalActionValue == 'return') {
                    var ref = _helpers.slicedToArray(this.modalReturnControllerValue.split('#'), 2), targetControllerName = ref[0], targetControllerId = ref[1];
                    var targetController = this.application.getControllerForElementAndIdentifier(document.getElementById(targetControllerId), targetControllerName);
                    targetController.receiveModalReturn({
                        payload: {
                            kubik_media_upload_id: parseInt(e.currentTarget.dataset.selectedKubikMediaUploadId),
                            thumb: e.currentTarget.dataset.selectedThumb
                        },
                        return_payload: this.modalReturnPayloadValue
                    });
                    this.closeModal();
                }
            }
        },
        {
            key: "modalStatusValueChanged",
            value: function modalStatusValueChanged() {
                if (this.hasModalContainerTarget) {
                    if (this.modalStatusValue == 'opened') this.modalContainerTarget.classList.add('kubik-modal-element__open');
                    else this.modalContainerTarget.classList.remove('kubik-modal-element__open');
                }
            }
        },
        {
            key: "modalSrcValueChanged",
            value: function modalSrcValueChanged() {
                if (this.hasModalFrameTarget) {
                    if (this.modalSrcValue == '') {
                        this.modalFrameTarget.src = this.modalSrcValue;
                        this.modalFrameTarget.innerHTML = '';
                    } else this.modalFrameTarget.src = this.modalSrcValue;
                }
            }
        },
        {
            key: "modalHeaderValueChanged",
            value: function modalHeaderValueChanged() {
                if (this.hasModalHeaderTarget) this.modalHeaderTarget.innerText = this.modalHeaderValue;
            }
        },
        {
            key: "openModal",
            value: function openModal(e) {
                this.modalSrcValue = e.currentTarget.attributes.src.value;
                this.modalHeaderValue = e.currentTarget.dataset.kubikModalHeaderText;
                this.modalActionValue = e.currentTarget.dataset.kubikModalAction;
                this.modalReturnControllerValue = e.currentTarget.dataset.kubikModalReturnController;
                if (e.currentTarget.dataset.kubikModalReturnPayload) this.modalReturnPayloadValue = JSON.parse(e.currentTarget.dataset.kubikModalReturnPayload);
                this.modalStatusValue = 'opened';
            }
        },
        {
            key: "modalReturnPayloadValueChanged",
            value: function modalReturnPayloadValueChanged() {}
        },
        {
            key: "closeModal",
            value: function closeModal() {
                this.modalStatusValue = 'closed';
                this.modalSrcValue = '';
                this.modalHeaderValue = '';
                this.modalActionValue = '';
                this.modalReturnControllerValue = '';
                this.modalReturnPayloadValue = {};
            }
        },
        {
            key: "_renderDOMElements",
            value: function _renderDOMElements() {
                if (!document.getElementById('kubik-modal')) document.body.insertAdjacentHTML('beforeend', this.modalTemplate);
            }
        }
    ]);
    return _class;
}(_stimulus.Controller);
_helpers.defineProperty(_class, "targets", [
    'modalTemplate',
    'modalContainer',
    'modalFrame',
    'modalHeader'
]);
_helpers.defineProperty(_class, "values", {
    modalHeader: {
        type: String,
        default: ''
    },
    modalStatus: {
        type: String,
        default: 'closed'
    },
    modalSrc: {
        type: String,
        default: ''
    },
    modalAction: {
        type: String,
        default: ''
    },
    modalReturnPayload: {
        type: Object,
        default: {}
    },
    modalReturnController: {
        type: String,
        default: ''
    }
});

},{"@swc/helpers":"erO4s","@hotwired/stimulus":"hVNih","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},["5NaXL","acSeK"], "acSeK", "parcelRequired5d3")

//# sourceMappingURL=kubik_interface_elements.js.map
