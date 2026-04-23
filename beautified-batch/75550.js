/**
 * Module 75550 - Auto-beautified from TradingView webpack bundle
 *
 * @module 75550
 * @date 2026-04-23
 * @size 1033 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 43337
 *
 * Exports:
 *   - LineDataSourcePointIndexProperty (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  LineDataSourcePointIndexProperty: () => o
});
var s = i(43337);
class o extends s.Property {
    constructor(e, t) {
      super(), this._waitingPointsetUpdate = !1,
        this._lineSource = e, this._pointIndex = t, this._cachedIndex = this.value()
    }
    value() {
      const e = this._lineSource.points();
      return 0 === e.length ? this._cachedIndex : e[this._pointIndex].index
    }
    setValue(e) {
      this._cachedIndex = e;
      const t = this._lineSource.points(),
        i = e => {
          const t = this._lineSource.points()[this._pointIndex];
          if (t.index === e) return;
          t.index = e, this._lineSource.startChanging(this._pointIndex, t), this._setPointImpl(t), this._lineSource.model().updateSource(this._lineSource), this._listeners.fire(this, "");
          const i = this._lineSource.endChanging(!0, !1);
          this._lineSource.syncMultichartState(i)
        };
      if (0 === t.length) {
        const e = () => {
          i(this._cachedIndex), this._waitingPointsetUpdate = !1
        };
        if (this._waitingPointsetUpdate) return;
        this._lineSource.pointsetUpdated().subscribe(this, e, !0), this._waitingPointsetUpdate = !0
      } else i(e)
    }
    _setPointImpl(e) {
      this._lineSource.setPoint(this._pointIndex, e)
    }
