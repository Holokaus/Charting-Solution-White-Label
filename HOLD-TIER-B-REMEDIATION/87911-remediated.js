/**
 * Module 87911 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

87911: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      restoreShowMarketOpenStatusProperty: () => seriesBarFunction_c,
      showMarketOpenStatusProperty: () => seriesBarFunction_l
    });
    var modes = require(41072),
      isValid = require(1765);
    const value = "Chart.ShowMarketOpenStatus",
      seriesBarFunction_r = !0;

    function seriesBarFunction_a() {
      return isValid.getBool(value, seriesBarFunction_r)
    }
    const seriesBarFunction_l = (0, modes.createPrimitiveProperty)(seriesBarFunction_a());

    function seriesBarFunction_c() {
      seriesBarFunction_l.setValue(seriesBarFunction_r), isValid.remove(value)
    }
    isValid.onSync.subscribe(null, (() => seriesBarFunction_l.setValue(seriesBarFunction_a()))), seriesBarFunction_l.subscribe(null, (() => isValid.setValue(value, seriesBarFunction_l.value())))