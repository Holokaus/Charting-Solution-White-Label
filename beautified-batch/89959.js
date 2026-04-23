/**
 * Module 89959 - Auto-beautified from TradingView webpack bundle
 *
 * @module 89959
 * @date 2026-04-23
 * @size 321 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 41072
 *
 * Exports:
 *   - combineProperty (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  combineProperty: () => o
});
var s = i(41072);

function o(e, ...t) {
  const i = () => e(...t.map((e => e.value()))),
    o = (0, s.createPrimitiveProperty)(i()),
    n = () => o.setValue(i()),
    r = {};
  for (const e of t) e.subscribe(r, n);
  return o.destroy = () => {
    t.forEach((e => e.unsubscribeAll(r))), t.forEach((e => e.release()))
  }, o
