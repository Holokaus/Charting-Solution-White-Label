/**
 * Module 80671 - Auto-beautified from TradingView webpack bundle
 *
 * @module 80671
 * @date 2026-04-23
 * @size 377 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 13651
 *
 * Exports:
 *   - StudyStatusView (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  StudyStatusView: () => o
});
var s = i(13651);
class o extends s.StatusView {
    constructor(e) {
      super(e.statusProvider())
    }
    getSplitTitle() {
      return this._statusProvider.getSplitTitle()
    }
    titleTooltip() {
      return this._statusProvider.titleTooltip()
    }
    getInputsTitles() {
      return this._statusProvider.getInputsTitles()
    }
    update(e) {
      this._text = this._statusProvider.text()
    }
