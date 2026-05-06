/**
 * Module 99247 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

99247: (series_e, series_t, i) => {
    "use strict";
    i.d(series_t, {
      MouseClickAutoBlurHandler: () => r,
      initMouseClickAutoBlurHandler: () => series_a
    });
    var series_s = i(81251),
      o = i(76460);
    const series_n = "data-mouse-click-auto-blur";
    class r {
      constructor() {
        this._handler = series_e => {
          document.activeElement instanceof HTMLElement && ((0, o.isKeyboardClick)(series_e) || series_e
            .target instanceof Element && "INPUT" !== document.activeElement.tagName && null !== document
            .activeElement.closest(`[${series_n}]`) && document.activeElement.blur())
        }, window.addEventListener("click", this._handler, !0)
      }
      static attributes(series_e = !0) {
        return series_e ? {
          [series_n]: !0
        } : {}
      }
    }
    const series_a = (0, series_s.default)((() => new r))
  },
  22692: (series_e, series_t, i) => {
    "use strict";
    i.d(series_t, {
      mapKeyCodeToDirection: () => h,
      navigationOrderComparator: () => r,
      queryFocusableElements: () => l,
      queryTabbableElements: () => series_a,
      updateTabIndexes: () => c
    });
    var series_s, o = i(24640),
      series_n = i(15754);

    function r(series_e, series_t) {
      return series_e === series_t ? 0 : series_e.compareDocumentPosition(series_t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    }

    function series_a(series_e) {
      return Array.from(series_e.querySelectorAll(
        'button:not([disabled]):not([aria-disabled]):not([tabindex="-1"]), [tabindex]:not([disabled]):not([aria-disabled]):not([tabindex="-1"])'
        )).filter((0, series_n.createScopedVisibleElementFilter)(series_e))
    }

    function l(series_e) {
      return Array.from(series_e.querySelectorAll(
        'button:not([disabled]):not([aria-disabled="true"]):not([aria-disabled=""]), [tabindex]:not([disabled]):not([aria-disabled="true"]):not([aria-disabled=""])'
        )).filter((0, series_n.createScopedVisibleElementFilter)(series_e))
    }

    function c() {
      window.dispatchEvent(new CustomEvent("keyboard-navigation-activation", {
        bubbles: !0
      }))
    }

    function h(series_e) {
      const series_t = (0, o.isRtl)();
      switch (series_e) {
        case 38:
          return "blockPrev";
        case 40:
          return "blockNext";
        case 37:
          return series_t ? "inlineNext" : "inlinePrev";
        case 39:
          return series_t ? "inlinePrev" : "inlineNext";
        default:
          return null
      }
    }! function(series_e) {
      series_e.BlockPrev = "blockPrev", series_e.BlockNext = "blockNext", series_e.InlinePrev = "inlinePrev", series_e.InlineNext = "inlineNext"
    }(series_s || (series_s = {}))