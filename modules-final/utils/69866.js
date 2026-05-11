/**
 * Module 69866 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

69866: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      containsBackgroundTimePointIndexes: () => seriesBarFunction_r,
      dematerializeBackground: () => seriesBarFunction_l,
      isBackgroundInBarsRange: () => seriesBarFunction_c,
      materializeBackground: () => seriesBarFunction_a
    });
    var assertionUtils = seriesBarFunction_i(50151),
      seriesBarFunction_o = seriesBarFunction_i(82284),
      seriesBarFunction_n = seriesBarFunction_i(33952);
    const seriesBarFunction_r = !0;

    function seriesBarFunction_a(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_e.start >= seriesBarFunction_t.length || seriesBarFunction_e.stop >= seriesBarFunction_t.length) return null;
      const seriesBarFunction_i = seriesBarFunction_t[seriesBarFunction_e.start],
        seriesBarFunction_n = seriesBarFunction_t[seriesBarFunction_e.stop];
      return seriesBarFunction_n === seriesBarFunction_o.INVALID_TIME_POINT_INDEX ? null : ((0, assertionUtils.assert)(seriesBarFunction_i === seriesBarFunction_o.INVALID_TIME_POINT_INDEX ||
        seriesBarFunction_i <= seriesBarFunction_n, "start should not exceed stop"), {
        start: seriesBarFunction_i === seriesBarFunction_o.INVALID_TIME_POINT_INDEX ? null : seriesBarFunction_i,
        stop: seriesBarFunction_n
      })
    }

    function seriesBarFunction_l(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
      return {
        id: seriesBarFunction_t,
        start: (0, seriesBarFunction_n.ensureTimePointIndexIndex)(seriesBarFunction_i.indexOf(null !== seriesBarFunction_e.start ? seriesBarFunction_e.start : seriesBarFunction_o.INVALID_TIME_POINT_INDEX)),
        stop: (0, seriesBarFunction_n.ensureTimePointIndexIndex)(seriesBarFunction_i.indexOf(seriesBarFunction_e.stop))
      }
    }

    function seriesBarFunction_c(seriesBarFunction_e, seriesBarFunction_t) {
      if (null === seriesBarFunction_e.start) return seriesBarFunction_t.firstBar() <= seriesBarFunction_e.stop;
      const seriesBarFunction_i = Math.min(seriesBarFunction_e.start, seriesBarFunction_e.stop),
        assertionUtils = Math.max(seriesBarFunction_e.start, seriesBarFunction_e.stop);
      return seriesBarFunction_t.contains(seriesBarFunction_i) || seriesBarFunction_t.contains(assertionUtils) || seriesBarFunction_i < seriesBarFunction_t.firstBar() && assertionUtils > seriesBarFunction_t.lastBar()
    }
}
