/**
 * Module 60755 - Auto-beautified from TradingView webpack bundle
 *
 * @module 60755
 * @date 2026-04-23
 * @size 447 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 19979
 *
 * Exports:
 *   - VbPCheckHaveVolumeExpr (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  VbPCheckHaveVolumeExpr: () => o
});
var s = i(19979);
class o {
  constructor(e) {
    this._haveAnyVolume = !1, this._isDisabled = !1, this._seriesGetter = e
  }
  update(e, t) {
    if (this._haveAnyVolume || this._isDisabled) return;
    const i = this._seriesGetter.volume().get(e);
    0 !== i && Number.isFinite(i) && (this._haveAnyVolume = !0), t && (this._haveAnyVolume || s.Std.error("The data vendor doesn't provide volume data for this symbol."), this._isDisabled = !0)
  }
