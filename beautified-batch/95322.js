/**
 * Module 95322 - Auto-beautified from TradingView webpack bundle
 *
 * @module 95322
 * @date 2026-04-23
 * @size 466 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 87465
 *
 * Exports:
 *   - numDependencyFormatter (internal: n)
 *   - numberToStringWithLeadingZero (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  numDependencyFormatter: () => n,
  numberToStringWithLeadingZero: () => o
});
var s = i(87465);

function o(e, t) {
  if (!(0, s.isNumber)(e)) return "n/a";
  if (!(0, s.isInteger)(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 24) throw new TypeError("invalid length");
  if (0 === t) return e.toString();
  return ("00000000000000000000" + e.toString()).slice(-t)
}

function n(e) {
  const t = new Map;
  return i => {
    const s = i ?? -1;
    let o = t.get(s);
    return o || (o = e(i), t.set(s, o)), o
  }
