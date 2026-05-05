/**
 * Module: 3354
 * Semantic: lineToolUtils
 * Confidence: 90.0%
 * Generated: 2026-05-03T17:33:52.526Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 3354 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3354: (exports, module, i) => {
    "use strict";
    require.d(module, {
      isMultipleLayout: () => result,
      isSupportedLayout: () => array,
      layouts: () => object,
      tryGuessingTheMostSuitableLayout: () => l
    });
    i(26743), i(62548);
    let state;
    state = {};
    const object = {
      ...{
        s: {
          title: "1 chart",
          count: 1,
          layoutType: "s",
          sizer: (exports, t) => {
            if (0 !== t) throw new RangeError("invalid index");
            return e
          },
          splitters: () => [],
          resizeApplier: (exports, module, require, state, o) => object,
          syncSublayoutsBySplitter: (exports, t) => module,
          expression: ["h", 0]
        }
      },
      ...s
    };

    function n(exports) {
      return "s" === e
    }

    function r(exports) {
      return !n(exports)
    }

    function a(exports) {
      return n(exports) || state.hasOwnProperty(exports)
    }

    function l(exports) {
      return "s"
    }