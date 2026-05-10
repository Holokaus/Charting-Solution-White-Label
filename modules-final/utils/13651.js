/**
 * Module: 13651
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.253Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 13651 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13651: (exports, t, i) => {
    "use strict";
    i.d(t, {
      StatusView: () => s
    });
    class s {
      constructor(exports) {
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
    }