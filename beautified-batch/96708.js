/**
 * Module 96708 - Auto-beautified from TradingView webpack bundle
 *
 * @module 96708
 * @date 2026-04-23
 * @size 304 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - getPriceAxisNameInfo (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getPriceAxisNameInfo: () => r
});
const s = ["Z", "Y", "X", "W", "V", "U", "T", "S"],
  o = ["A", "B", "C", "D", "E", "F", "G", "H"];
class n {
  constructor(e) {
    this.label = e
  }
  equals(e) {
    return null !== e && this.label === e.label
  }
}

function r(e, t) {
  const i = "left" === e ? s : o,
    r = t < i.length ? i[t] : "";
  return new n(r)
