/**
 * Module 79740 - Auto-beautified from TradingView webpack bundle
 *
 * @module 79740
 * @date 2026-04-23
 * @size 678 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 23752
 *
 * Exports:
 *   - LineDataSourceTimeAxisView (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  LineDataSourceTimeAxisView: () => o
});
var s = i(23752);
class o extends s.TimeAxisView {
    constructor(e, t) {
      super(e.model()), this._active = !1, this._source = e, this._pointIndex = t, this._properties = e.model().properties().childs().scalesProperties
    }
    setActive(e) {
      this._active = e
    }
    _getBgColor() {
      return this._active ? this._properties.childs().axisLineToolLabelBackgroundColorActive.value() : this._properties.childs().axisLineToolLabelBackgroundColorCommon.value()
    }
    _getIndex() {
      if (!this._model.selection().isSelected(this._source)) return null;
      const e = this._source.timeAxisPoints();
      return e.length <= this._pointIndex ? null : e[this._pointIndex].index
    }
    _isVisible() {
      return !0
    }
