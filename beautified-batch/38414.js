/**
 * Module 38414 - Auto-beautified from TradingView webpack bundle
 *
 * @module 38414
 * @date 2026-04-23
 * @size 300 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22613
 *
 * Exports:
 *   - DialogRenderer (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  DialogRenderer: () => o
});
var s = i(22613);
class o {
  constructor() {
    this._container = document.createElement("div"), this._visibility = new s.WatchedValue(!1), this._rootInstance = null
  }
  visible() {
    return this._visibility.readonly()
  }
  _setVisibility(e) {
    this._visibility.setValue(e)
  }
