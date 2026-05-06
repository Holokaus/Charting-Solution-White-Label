/**
 * Module 60755 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60755: (e, t, i) => {
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
        0 !== i && Number.isFinite(i) && (this._haveAnyVolume = !0), t && (this._haveAnyVolume || s.Std.error(
          "The data vendor doesn't provide volume data for this symbol."), this._isDisabled = !0)
      }
    }