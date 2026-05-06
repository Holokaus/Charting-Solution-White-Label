/**
 * Module 30798 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

30798: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      containsPolygonTimePointIndexes: () => seriesBarFunction_n,
      dematerializePolygon: () => seriesBarFunction_a,
      isPolygonInBarsRange: () => seriesBarFunction_l,
      materializePolygon: () => seriesBarFunction_r
    });
    var seriesBarFunction_s = seriesBarFunction_i(82284),
      seriesBarFunction_o = seriesBarFunction_i(33952);
    const seriesBarFunction_n = !0;

    function seriesBarFunction_r(seriesBarFunction_e, seriesBarFunction_t) {
      for (const seriesBarFunction_i of seriesBarFunction_e.points) {
        if (seriesBarFunction_i.index >= seriesBarFunction_t.length) return null;
        if (seriesBarFunction_t[seriesBarFunction_i.index] === seriesBarFunction_s.INVALID_TIME_POINT_INDEX) return null
      }
      return {
        points: seriesBarFunction_e.points.map((seriesBarFunction_e => ({
          index: seriesBarFunction_t[seriesBarFunction_e.index],
          offset: seriesBarFunction_e.offset,
          level: seriesBarFunction_e.level
        })))
      }
    }

    function seriesBarFunction_a(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
      return {
        id: seriesBarFunction_t,
        points: seriesBarFunction_e.points.map((seriesBarFunction_e => ({
          ...seriesBarFunction_e,
          index: (0, seriesBarFunction_o.ensureTimePointIndexIndex)(seriesBarFunction_i.indexOf(seriesBarFunction_e.index))
        })))
      }
    }

    function seriesBarFunction_l(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_e.points.some((seriesBarFunction_e => seriesBarFunction_t.contains(seriesBarFunction_e.index + (seriesBarFunction_e.offset ?? 0))))) return !0;
      let seriesBarFunction_i = !1,
        seriesBarFunction_s = !1;
      const seriesBarFunction_o = seriesBarFunction_t.firstBar();
      for (const seriesBarFunction_t of seriesBarFunction_e.points) seriesBarFunction_t.index + (seriesBarFunction_t.offset ?? 0) < seriesBarFunction_o ? seriesBarFunction_i = !0 : seriesBarFunction_s = !0;
      return seriesBarFunction_i && seriesBarFunction_s
    }