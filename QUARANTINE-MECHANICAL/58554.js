/**
 * Module 58554 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

58554: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      containsVertLineTimePointIndexes: () => seriesBarFunction_n,
      dematerializeVertLine: () => seriesBarFunction_a,
      isVertLineInBarsRange: () => seriesBarFunction_l,
      materializeVertLine: () => seriesBarFunction_r
    });
    var seriesBarFunction_s = seriesBarFunction_i(82284),
      seriesBarFunction_o = seriesBarFunction_i(33952);
    const seriesBarFunction_n = !0;

    function seriesBarFunction_r(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_e.index >= seriesBarFunction_t.length) return null;
      const seriesBarFunction_i = seriesBarFunction_t[seriesBarFunction_e.index];
      return seriesBarFunction_i === seriesBarFunction_s.INVALID_TIME_POINT_INDEX ? null : {
        startPrice: seriesBarFunction_e.startPrice,
        endPrice: seriesBarFunction_e.endPrice,
        index: seriesBarFunction_i,
        extendTop: seriesBarFunction_e.extendTop,
        extendBottom: seriesBarFunction_e.extendBottom
      }
    }

    function seriesBarFunction_a(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
      const seriesBarFunction_s = (0, seriesBarFunction_o.ensureTimePointIndexIndex)(seriesBarFunction_i.indexOf(seriesBarFunction_e.index));
      return {
        id: seriesBarFunction_t,
        ...seriesBarFunction_e,
        index: seriesBarFunction_s
      }
    }

    function seriesBarFunction_l(seriesBarFunction_e, seriesBarFunction_t) {
      return seriesBarFunction_t.contains(seriesBarFunction_e.index)
    }