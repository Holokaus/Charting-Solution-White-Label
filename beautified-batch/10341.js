/**
 * Module 10341 - Auto-beautified from TradingView webpack bundle
 *
 * @module 10341
 * @date 2026-04-23
 * @size 211 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 3615, 11542, 66719, 86146
 *
 * Exports:
 *   - showTooManyStudiesNotice (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  showTooManyStudiesNotice: () => n
});
var s = i(11542),
  o = i(3615);

function n(e) {
  (0, o.showWarning)({
    title: s.t(null, void 0, i(66719)),
    text: s.t(null, {
      replace: {
        number: `${e}`
      }
    }, i(86146))
  })
