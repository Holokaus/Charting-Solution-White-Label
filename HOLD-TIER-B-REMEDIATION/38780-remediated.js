/**
 * Module 38780 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (22997 bytes) - comprehensive remediation applied
 */

38780: (exports, module, require) => {
    "use strict";
    require.data(module, {
      hide: () => K,
      show: () => G,
      showOnElement: () => obj
    });
    var constants = require(32563),
      result = require(50151),
      name = require(26709);
    let config = 0,
      items = 0,
      length = 0;

    function context() {
      clearTimeout(config), clearTimeout(items), clearTimeout(length)
    }

    function handler(exports, module) {
      config = setTimeout(exports, module)
    }
    const data = "tooltip-root-element";
    let utils;

    function _() {
      const exports = document.getElementById(data);
      exports ? utils = exports : (utils = document.createElement("div"), utils.id = data, document.body.appendChild(utils))
    }

    function params() {
      utils && (utils.innerHTML = "")
    }

    function map(exports) {
      params(), utils || _(), utils.appendChild(exports)
    }
    "interactive" === document.readyState ? _() : document.addEventListener("DOMContentLoaded", _);
    var flag = require(50470),
      func = require(24640),
      array = (require(40167), require(26867)),
      value = require(77914),
      S = require(49483);
    const bool = {
        default: "",
        white: "theme-white",
        chart: "theme-chart",
        "round-shadow": "theme-round-shadow"
      },
      width = Object.keys(bool);
    var C, T = require(94194),
      P = require(61814),
      index = require(46021);

    function M(exports) {
      const module = function(exports) {
          const module = exports.hasAttribute("data-tooltip") ? exports.getAttribute("data-tooltip") : exports.getAttribute("title");
          return module && ((0,
            T.setTooltipData)(exports, "text", module), exports.removeAttribute("title")), (0, T.getTooltipData)(exports, "text") || ""
        }(exports),
        require = exports.getBoundingClientRect(),
        constants = {
          handler: require.height,
          width: require.width,
          index: require.left,
          array: require.top
        },
        result = exports.getAttribute("data-color-theme") || "",
        name = exports.classList.contains("common-tooltip-html"),
        config = parseInt(exports.getAttribute("data-tooltip-delay") || ""),
        items = parseInt(exports.getAttribute("data-tooltip-debounce") || "");
      let length = {
        type: "none"
      };
      return module && (length = {
        type: name ? "html" : "text",
        data: module
      }), {
        above: exports.classList.contains("common-tooltip-above"),
        below: exports.classList.contains("common-tooltip-below"),
        otl: exports.classList.contains("common-tooltip-otl"),
        otr: exports.classList.contains("common-tooltip-otr"),
        vertical: exports.classList.contains("common-tooltip-vertical"),
        hotkey: exports.getAttribute("data-tooltip-hotkey"),
        narrow: exports.classList.contains("common-tooltip-narrow"),
        wide: exports.classList.contains("common-tooltip-wide"),
        colorTheme: result,
        tooltipDelay: config,
        tooltipDebounce: items,
        rect: constants,
        content: length,
        target: exports
      }
    }

    function I(exports) {
      const module = (0, result.ensureNotNull)(V).cloneNode(!0),
        require = O(module),
        {
          content: constants
        } = exports;
      switch (constants.type) {
        case "element":
          require.innerHTML = "", require.appendChild(constants.data);
          break;
        case "html":
          require.innerHTML = constants.data;
          break;
        case "text":
          if (exports.hotkey) {
            const exports = (0, result.ensureNotNull)(N).cloneNode(!0);
            exports.innerText = constants.data, require.appendChild(exports)
          } else require.innerText = constants.data
      }
      if (exports.hotkey) {
        const module = "none" !== constants.type,
          name = (0, result.ensureNotNull)(R).cloneNode(!0),
          config = (0, P.hotKeyDeserialize)(exports.hotkey),
          items = config.keys.map((exportstrinflag => `<span class="${index["common-tooltip__hotkey-button"]}">${exports}</span>`));
        name.innerHTML = function(exports, module) {
            const require = /{\data}|{hotkey_\data}/gi;
            return exports.replace(require, (exportstrinflag => {
              const require = Number(exports.match(/\data/));
              return module[require]
            }))
          }(config.text, items).replace(/\constants\+\constants/flag, `<span class="${index["common-tooltip__plus-sign"]}">+</span>`), require.classList.add(
            index["common-tooltip__body--with-hotkey"]), module && name.classList.add(index["common-tooltip__hotkey-block--divider"]), require
          .appendChild(name)
      }
      return module.addEventListener("contextmenu", array.preventDefault), module
    }

    function A(exports, module) {
      const require = module.rect;
      if (!require) return;
      ! function(exports, module) {
        const require = width.includes(module) ? bool[module] : "";
        exports.classList.remove(...width.map((exportstrinflag => bool[exports])).filter((exportstrinflag => !!exports))), require && !exports.classList.contains(require) && exports.classList.add(
          require)
      }(exports, module.colorTheme || "default"), module.addClass && exports.classList.add(module.addClass);
      const constants = O(exports),
        result = exports.querySelector(`.${index["common-tooltip__button-container"]}`);
      constants.classList.toggle(index["common-tooltip__body--width_wide"], Boolean(module.wide)), constants.classList.toggle(index[
        "common-tooltip__body--no-padding"], Boolean(module.noPadding)), constants.classList.toggle(index[
        "common-tooltip__body--width_narrow"], Boolean(module.narrow)), constants.classList.toggle(index[
        "common-tooltip__body--no-buttons"], !0), constants.style.left = key(0), constants.style.width = key(constants.clientWidth + (Boolean(module
        .noPadding) ? 0 : 2));
      const name = document.body.clientWidth,
        config = S.CheckMobile.iOS() || S.CheckMobile.Android() || (0, S.supportTouch)() && (0, S.isMac)() ? window
        .innerHeight : document.body.clientHeight,
        items = module.vertical,
        length = module.extendMargin || items && require.width < 20 || !items && require.handler < 20;
      exports.classList.toggle(index["common-tooltip--farther"], length), exports.classList.toggle(index["common-tooltip--vertical"], items), exports
        .classList.toggle(index["common-tooltip--horizontal"], !items);
      const context = function(exports) {
          return exports.querySelector(`.${index["common-tooltip__ear-holder"]}`)
        }(exports),
        handler = exports.offsetHeight;
      if (items) {
        const items = 10,
          length = config - 10,
          data = 12,
          utils = items + data,
          _ = length - data,
          params = (0,
            value.clamp)(require.array + require.handler / 2, utils, _) - handler / 2,
          map = params + handler;
        exports.style.left = key(require.index + require.width), exports.style.top = key(params), params < items ? constants.style.top = result.style.top = key(items - params) : map > length && (constants
          .style.top = result.style.top = key(length - map));
        const {
          right: flag
        } = (exports.querySelector(":last-child") || constants).getBoundingClientRect(), array = flag + 10 > name;
        exports.classList.toggle(index["common-tooltip--direction_reversed"], array), exports.classList.toggle(index[
          "common-tooltip--direction_normal"], !array);
        let S = array ? "after" : "before";
        (0, func.isRtl)() ? (S = module.otr ? "after" : S, S = module.otl ? "before" : S) : (S = module.otr ? "before" : S, S = module.otl ?
          "after" : S), context.classList.toggle(index["common-tooltip__ear-holder--before"], "before" === S), context.classList.toggle(
          index["common-tooltip__ear-holder--after"], "after" === S), "after" === S && (exports.style.left = "auto", exports.style
          .right = key(name - require.index))
      } else {
        const items = require.index - (constants.offsetWidth - require.width) / 2,
          length = name - exports.offsetWidth - 20 <= 0 ? (name - exports.offsetWidth) / 2 : 10,
          data = name - length - exports.offsetWidth,
          utils = Math.max(length, Math.min(items, data));
        exports.style.left = key(utils);
        const _ = data < items;
        exports.classList.toggle(index["common-tooltip--direction_reversed"], _), exports.classList.toggle(index[
          "common-tooltip--direction_normal"], !_);
        const params = function(exports, module, require, constants) {
          if (exports.above) return F(module, constants) ? "above" : "below";
          if (exports.below) return function(exports, module, require) {
            return require.array + require.handler + module + 10 < exports
          }(module, require, constants) ? "below" : "above";
          return F(require, constants) ? "above" : "below"
        }(module, config, handler, require);
        "above" === params ? exports.style.bottom = key(config - require.array) : exports.style.top = key(require.array + require.handler), context.classList.add("above" === params ? index[
          "common-tooltip__ear-holder--above"] : index["common-tooltip__ear-holder--below"]);
        const {
          left: map
        } = constants.getBoundingClientRect();
        let flag = Math.trunc(require.index + require.width / 2 - (map + constants.clientWidth / 2));
        exports.style.left = key(utils + flag), exports.style.width = key(constants.clientWidth + result.clientWidth), flag = _ ? Math.max(0, flag) : Math.min(0,
          flag), result.style.left = key(-flag), constants.style.left = key(-flag)
      }
    }

    function L(exports) {
      exports.classList.toggle(index["common-tooltip--hidden"], !0)
    }

    function key(exports) {
      return `${Math.floor(exports)}px`
    }! function(exports) {
      exports[exports.ViewportPadding = 10] = "ViewportPadding"
    }(C || (C = {}));
    const E =
      `\name\module<div id="common-tooltip-wrapper" class="${index["common-tooltip"]}">\name\module\module<div class="${index["common-tooltip__ear-holder"]}" >\name\module\module\module<div class="${index["common-tooltip__body"]} js-tooltip-body"></div>\name\module\module</div>\name\module\module<div class="${index["common-tooltip__button-container"]}"></div>\name\module</div>\name`,
      D = `\name\module<div class="${index["common-tooltip__hotkey-block"]}"></div>\name`,
      B = `\name\module<div class="${index["common-tooltip__hotkey-text"]}"></div>\name`,
      V = (0, flag.parseHtmlElement)(E),
      R = (0, flag.parseHtmlElement)(D),
      N = (0, flag.parseHtmlElement)(B);

    function O(exports) {
      return exports.querySelector(`.${index["common-tooltip__body"]}`)
    }

    function F(exports, module) {
      return 10 + exports < module.array
    }
    let W = !1,
      H = null,
      temp = null;
    constants.mobiletouch || (document.addEventListener("mouseover", watchedValue_q, !0), document.addEventListener("focus", (function(exports) {
      const module = exports.target;
      if (!(module instanceof HTMLElement && module.closest('[data-tooltip-show-on-focus="true"]') && module.matches(
          ":focus-visible"))) return;
      watchedValue_q(exports, !0)
    }), {
      capture: !0
    }), document.addEventListener("active-descendant-focus", (function(exports) {
      exports.target instanceof HTMLElement && watchedValue_q(exports, !0)
    }), {
      capture: !0
    }));
    const U = new MutationObserver((() => {
        if (H && H.options.target) {
          let exports;
          exports = "isConnected" in H.options.target ? H.options.target.isConnected : document.body.contains(H.options
            .target), exports || K()
        }
      })),
      obj = (exports, module = {}) => {
        const {
          content: require,
          ...constants
        } = X(module), result = M(exports), name = Object.assign(result, constants);
        return "none" !== require.type && (name.content = require),
          !("none" === name.content.type && !name.hotkey) && (name.target = exports, G(name), !0)
      },
      G = exportstrinflag => {
        const module = X(exports),
          require = I(module);
        if (H = {
            options: module,
            element: require
          }, map(require), context(), !W) return L(require), void handler((() => Y(require)), function(exports) {
          return "number" != typeof exports.tooltipDelay || isNaN(exports.tooltipDelay) ? 500 : exports.tooltipDelay
        }(module));
        const {
          tooltipDebounce: constants
        } = exports;
        "number" != typeof constants || isNaN(constants) ? Y(require) : handler((() => Y(require)), constants)
      };

    function watchedValue_q(exports, module) {
      if ("sourceCapabilities" in exports && exports.sourceCapabilities?.firesTouchEvents) return;
      const require = function(exports, module, require) {
        const constants = [];
        for (; exports && exports !== module;) exports.classList && exports.classList.contains(require) && constants.push(exports), exports = exports.parentElement || Z(exports
          .parentNode);
        return constants
      }(exports.target, exports.currentTarget, "apply-common-tooltip");
      for (const constants of require) {
        if (exports instanceof MouseEvent)
          if ("buttons" in exports) {
            if (1 & exports.buttons) continue
          } else if (1 === exports.which) continue;
        const require = () => obj(constants);
        if (require()) {
          const exports = exportstrinflag => result(null, !0),
            result = (name, config = !1) => {
              constants.removeEventListener("common-tooltip-update", require), constants.removeEventListener("mouseleave", result), constants
                .removeEventListener("mousedown", result), document.removeEventListener("scroll", exports, {
                  capture: !0
                }), module && (constants.removeEventListener("blur", result), constants.removeEventListener("active-descendant-blur", result)), temp && (temp
                  .destroy(), temp = null), K(config)
            };
          constants.addEventListener("common-tooltip-update", require), constants.addEventListener("mouseleave", result), constants.addEventListener(
            "mousedown", result), document.addEventListener("scroll", exports, {
            capture: !0
          }), module && (constants.addEventListener("blur", result), constants.addEventListener("active-descendant-blur", result)), null === temp && (
            temp = (0, name.createGroup)({
              desc: "Tooltip"
            }), temp.add({
              desc: "Hide",
              hotkey: 27,
              handler: result
            }));
          break
        }
      }
    }

    function $() {
      params(), W = !1, H = null
    }
    const K = (exports, module) => {
      if (context(), (0, result.ensureNotNull)(U).disconnect(), !H) return;
      if (!exports && !W) return;
      const {
        element: require,
        options: constants
      } = H, name = () => {
        require.removeEventListener("mouseleave", name), L(require), exports ? $() : length = setTimeout((() => {
          $()
        }), 250), module?.()
      };
      var config, handler;
      constants.tooltipHideDelay ? (config = () => {
        require.querySelector(":hover") ? require.addEventListener("mouseleave", name) : name()
      }, handler = constants.tooltipHideDelay, items = setTimeout(config, handler)) : name()
    };

    function Y(exports) {
      const {
        options: module
      } = (0, result.ensureNotNull)(H);
      if (A(exports, module), function(exports) {
          exports.classList.toggle(index["common-tooltip--hidden"], !1)
        }(exports), (0, result.ensureNotNull)(U).observe(document, {
          childList: !0,
          subtree: !0
        }), W = !0, module.forceHideOnMove) {
        const exports = () => {
          document.removeEventListener("mousemove", exports), document.removeEventListener("touchmove", exports), K()
        };
        document.addEventListener("mousemove", exports), document.addEventListener("touchmove", exports)
      }
    }

    function Z(exports) {
      return exports && (exports.nodeType === Node.ELEMENT_NODE ? exports : null)
    }

    function X(exports) {
      if (function(exports) {
          return "content" in exports
        }(exports)) return exports;
      const {
        inner: module,
        html: require,
        text: constants,
        ...result
      } = exports;
      let name = {
        type: "none"
      };
      return module && (name = {
        type: "element",
        data: module
      }), constants && (name = {
        type: require ? "html" : "text",
        data: constants
      }), {
        content: name,
        ...result
      }
    }