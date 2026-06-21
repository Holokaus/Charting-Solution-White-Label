/**
 * Module 87911 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

87911: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      restoreShowMarketOpenStatusProperty: () => seriesBarFunction_c,
      showMarketOpenStatusProperty: () => seriesBarFunction_l
    });
    var seriesBarFunction_s = seriesBarFunction_i(41072),
      seriesBarFunction_o = seriesBarFunction_i(1765);
    const seriesBarFunction_n = "Chart.ShowMarketOpenStatus",
      seriesBarFunction_r = !0;

    function seriesBarFunction_a() {
      return seriesBarFunction_o.getBool(seriesBarFunction_n, seriesBarFunction_r)
    }
    const seriesBarFunction_l = (0, seriesBarFunction_s.createPrimitiveProperty)(seriesBarFunction_a());

    function seriesBarFunction_c() {
      seriesBarFunction_l.setValue(seriesBarFunction_r), seriesBarFunction_o.remove(seriesBarFunction_n)
    }
    seriesBarFunction_o.onSync.subscribe(null, (() => seriesBarFunction_l.setValue(seriesBarFunction_a()))), seriesBarFunction_l.subscribe(null, (() => seriesBarFunction_o.setValue(seriesBarFunction_n, seriesBarFunction_l.value())))