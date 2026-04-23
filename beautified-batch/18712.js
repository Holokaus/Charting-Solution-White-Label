/**
 * Module 18712 - Auto-beautified from TradingView webpack bundle
 *
 * @module 18712
 * @date 2026-04-23
 * @size 337 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22613
 *
 * Exports:
 *   - convertPropertyToWatchedValue (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  convertPropertyToWatchedValue: () => o
});
var s = i(22613);

function o(e) {
  const t = new s.WatchedValue(e.value());
  let i = !1;
  e.subscribe(t, (() => {
    i || (i = !0, t.setValue(e.value()), i = !1)
  }));
  const o = () => {
    i || (i = !0, e.setValue(t.value()), i = !1)
  };
  return t.subscribe(o), t.spawn((() => {
    e.unsubscribeAll(t), t.unsubscribe(o)
  }))
