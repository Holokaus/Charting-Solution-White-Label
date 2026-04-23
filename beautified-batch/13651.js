/**
 * Module 13651 - Auto-beautified from TradingView webpack bundle
 *
 * @module 13651
 * @date 2026-04-23
 * @size 361 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - StatusView (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  StatusView: () => s
});
class s {
  constructor(e) {
    this._text = "", this._color = "", this._size = "13px", this._bold = !1, this._statusProvider = e
  }
  text() {
    return this._text
  }
  getSplitTitle() {
    return [this._text]
  }
  getInputsTitles() {
    return null
  }
  titleTooltip() {
    return this._statusProvider.titleTooltip()
  }
  bold() {
    return this._bold
  }
  size() {
    return this._size
  }
