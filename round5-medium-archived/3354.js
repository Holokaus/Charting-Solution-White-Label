/**
 * Module 3354 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3354: (e, t, i) => {
    "use strict";
    i.d(t, {
      isMultipleLayout: () => r,
      isSupportedLayout: () => a,
      layouts: () => o,
      tryGuessingTheMostSuitableLayout: () => l
    });
    i(26743), i(62548);
    let s;
    s = {};
    const o = {
      ...{
        s: {
          title: "1 chart",
          count: 1,
          layoutType: "s",
          sizer: (e, t) => {
            if (0 !== t) throw new RangeError("invalid index");
            return e
          },
          splitters: () => [],
          resizeApplier: (e, t, i, s, o) => o,
          syncSublayoutsBySplitter: (e, t) => t,
          expression: ["h", 0]
        }
      },
      ...s
    };

    function n(e) {
      return "s" === e
    }

    function r(e) {
      return !n(e)
    }

    function a(e) {
      return n(e) || s.hasOwnProperty(e)
    }

    function l(e) {
      return "s"
    }