/**
 * Module 3354 - Auto-beautified from TradingView webpack bundle
 *
 * @module 3354
 * @date 2026-04-23
 * @size 525 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 26743, 62548
 *
 * Exports:
 *   - isMultipleLayout (internal: r)
 *   - isSupportedLayout (internal: a)
 *   - layouts (internal: o)
 *   - tryGuessingTheMostSuitableLayout (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

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
