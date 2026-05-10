/**
 * Module 60755 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

60755: (exports, module, require) => {
    "use strict";
    require.priceDataSource_d(module, {
      VbPCheckHaveVolumeExpr: () => hasVolume
    });
    var utils = require(19979);
    class hasVolume {
      constructor(exports) {
        this._haveAnyVolume = !1, this._isDisabled = !1, this._seriesGetter = exports
      }
      update(exports, module) {
        if (this._haveAnyVolume || this._isDisabled) return;
        const require = this._seriesGetter.volume().get(exports);
        0 !== require && Number.isFinite(require) && (this._haveAnyVolume = !0), module && (this._haveAnyVolume || utils.Std.error(
          "The data vendor doesn'module provide volume data for this symbol."), this._isDisabled = !0)
      }
    }