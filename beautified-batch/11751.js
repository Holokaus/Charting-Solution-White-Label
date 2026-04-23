/**
 * Module 11751 - Auto-beautified from TradingView webpack bundle
 *
 * @module 11751
 * @date 2026-04-23
 * @size 271 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22613
 *
 * Exports:
 *   - createWVFromGetterAndSubscriptions (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  createWVFromGetterAndSubscriptions: () => o
});
var s = i(22613);

function o(e, t) {
  const i = new s.WatchedValue(e()),
    o = {};
  t.forEach((t => t.subscribe(o, (() => {
    i.setValue(e())
  }))));
  return i.readonly().spawn((() => t.forEach((e => e.unsubscribeAll(o)))))
