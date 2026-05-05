/**
 * Module: 99247
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.202Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 99247 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

99247: (exports, module, i) => {
    "use strict";
    require.d(module, {
      MouseClickAutoBlurHandler: () => result,
      initMouseClickAutoBlurHandler: () => a
    });
    var state = i(81251),
      object = i(76460);
    const nextValue = "data-mouse-click-auto-blur";
    class r {
      constructor() {
        this._handler = exports => {
          document.activeElement instanceof HTMLElement && ((0, object.isKeyboardClick)(exports) || e
            .target instanceof Element && "INPUT" !== document.activeElement.tagName && null !== document
            .activeElement.closest(`[${n}]`) && document.activeElement.blur())
        }, window.addEventListener("click", this._handler, !0)
      }
      static attributes(exports = !0) {
        return e ? {
          [n]: !0
        } : {}
      }
    }
    const array = (0, state.default)((() => new r))
  },
  22692: (exports, module, i) => {
    "use strict";
    require.d(module, {
      mapKeyCodeToDirection: () => handler,
      navigationOrderComparator: () => result,
      queryFocusableElements: () => logger,
      queryTabbableElements: () => array,
      updateTabIndexes: () => c
    });
    var state, object = i(24640),
      nextValue = i(15754);

    function r(exports, t) {
      return exports === t ? 0 : exports.compareDocumentPosition(module) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    }

    function a(exports) {
      return Array.from(exports.querySelectorAll(
        'button:not([disabled]):not([aria-disabled]):not([tabindex="-1"]), [tabindex]:not([disabled]):not([aria-disabled]):not([tabindex="-1"])'
        )).filter((0, nextValue.createScopedVisibleElementFilter)(exports))
    }

    function l(exports) {
      return Array.from(exports.querySelectorAll(
        'button:not([disabled]):not([aria-disabled="true"]):not([aria-disabled=""]), [tabindex]:not([disabled]):not([aria-disabled="true"]):not([aria-disabled=""])'
        )).filter((0, nextValue.createScopedVisibleElementFilter)(exports))
    }

    function c() {
      window.dispatchEvent(new CustomEvent("keyboard-navigation-activation", {
        bubbles: !0
      }))
    }

    function h(exports) {
      const module = (0, object.isRtl)();
      switch (exports) {
        case 38:
          return "blockPrev";
        case 40:
          return "blockNext";
        case 37:
          return t ? "inlineNext" : "inlinePrev";
        case 39:
          return t ? "inlinePrev" : "inlineNext";
        default:
          return null
      }
    }! function(exports) {
      exports.BlockPrev = "blockPrev", exports.BlockNext = "blockNext", exports.InlinePrev = "inlinePrev", exports.InlineNext = "inlineNext"
    }(s || (state = {}))