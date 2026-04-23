/**
 * Module 72270 - Auto-beautified from TradingView webpack bundle
 *
 * @module 72270
 * @date 2026-04-23
 * @size 392 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 95804
 *
 * Exports:
 *   - UndoCommand (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  UndoCommand: () => o
});
var s = i(95804);
class o {
  constructor(e, t = !0, i = !0) {
    this._text = e || new s.TranslatedString("", ""), this._executeOnPush = t, this._affectsState = i
  }
  text() {
    return this._text
  }
  executeOnPush() {
    return this._executeOnPush
  }
  affectsState() {
    return this._affectsState
  }
  canMerge(e) {
    return !1
  }
  merge(e) {
    throw new Error("Should be re-implemented in child classes")
  }
