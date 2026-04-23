/**
 * Module 8811 - Auto-beautified from TradingView webpack bundle
 *
 * @module 8811
 * @date 2026-04-23
 * @size 246 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22613
 *
 * Exports:
 *   - createWVFromGetterAndSubscription (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  createWVFromGetterAndSubscription: () => o
});
var s = i(22613);

function o(e, t) {
  const i = new s.WatchedValue(e()),
    o = {};
  t.subscribe(o, (() => {
    i.setValue(e(i.value()))
  }));
  return i.readonly().spawn((() => t.unsubscribeAll(o)))
