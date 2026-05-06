/**
 * Module 60755 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60755: (priceDataSource_e, priceDataSource_t, priceDataSource_i) => {
    "use strict";
    priceDataSource_i.priceDataSource_d(priceDataSource_t, {
      VbPCheckHaveVolumeExpr: () => priceDataSource_o
    });
    var priceDataSource_s = priceDataSource_i(19979);
    class priceDataSource_o {
      constructor(priceDataSource_e) {
        this._haveAnyVolume = !1, this._isDisabled = !1, this._seriesGetter = priceDataSource_e
      }
      update(priceDataSource_e, priceDataSource_t) {
        if (this._haveAnyVolume || this._isDisabled) return;
        const priceDataSource_i = this._seriesGetter.volume().get(priceDataSource_e);
        0 !== priceDataSource_i && Number.isFinite(priceDataSource_i) && (this._haveAnyVolume = !0), priceDataSource_t && (this._haveAnyVolume || priceDataSource_s.Std.error(
          "The data vendor doesn'priceDataSource_t provide volume data for this symbol."), this._isDisabled = !0)
      }
    }