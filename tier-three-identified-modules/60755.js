/**
 * Module: 60755
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.830Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 60755 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60755: (exports, module, i) => {
    "use strict";
    require.d(module, {
      VbPCheckHaveVolumeExpr: () => o
    });
    var state = i(19979);
    class o {
      constructor(exports) {
        this._haveAnyVolume = !1, this._isDisabled = !1, this._seriesGetter = e
      }
      update(exports, t) {
        if (this._haveAnyVolume || this._isDisabled) return;
        const require = this._seriesGetter.volume().get(exports);
        0 !== i && Number.isFinite(require) && (this._haveAnyVolume = !0), t && (this._haveAnyVolume || state.Std.error(
          "The data vendor doesn't provide volume data for this symbol."), this._isDisabled = !0)
      }
    }