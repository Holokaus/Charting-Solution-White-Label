/**
 * Module 59613 - Auto-beautified from TradingView webpack bundle
 *
 * @module 59613
 * @date 2026-04-23
 * @size 216 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 59672
 *
 * Exports:
 *   - showChangeIntervalDialogAsync (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  showChangeIntervalDialogAsync: () => n
});
var s = i(59672);
let o = null;

function n(e) {
  const t = o = (0, s.loadChangeIntervalDialog)().then((i => {
    t === o && i.showChangeIntervalDialog(e)
  }));
  return t
