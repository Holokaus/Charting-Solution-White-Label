/**
 * Module 99481 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

99481: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      HHistDirection: () => seriesBarFunction_s,
      HHistLocation: () => seriesBarFunction_o,
      HHistVolumeMode: () => seriesBarFunction_n,
      containsHHistTimePointIndexes: () => seriesBarFunction_c,
      dematerializeHHist: () => seriesBarFunction_d,
      isHHistInBarsRange: () => seriesBarFunction_u,
      materializeHHist: () => seriesBarFunction_h
    });
    var seriesBarFunction_s, seriesBarFunction_o, seriesBarFunction_n, seriesBarFunction_r = seriesBarFunction_i(50151),
      seriesBarFunction_a = seriesBarFunction_i(82284),
      seriesBarFunction_l = seriesBarFunction_i(33952);
    ! function(seriesBarFunction_e) {
      seriesBarFunction_e.LeftToRight = "left_to_right", seriesBarFunction_e.RightToLeft = "right_to_left"
    }(seriesBarFunction_s || (seriesBarFunction_s = {})),
    function(seriesBarFunction_e) {
      seriesBarFunction_e.Relative = "relative", seriesBarFunction_e.Absolute = "absolute"
    }(seriesBarFunction_o || (seriesBarFunction_o = {})),
    function(seriesBarFunction_e) {
      seriesBarFunction_e.UpDown = "Up/Down", seriesBarFunction_e.Total = "Total", seriesBarFunction_e.Delta = "Delta"
    }(seriesBarFunction_n || (seriesBarFunction_n = {}));
    const seriesBarFunction_c = !0;

    function seriesBarFunction_h(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_e.lastBarTime >= seriesBarFunction_t.length) return null;
      const seriesBarFunction_i = seriesBarFunction_t[seriesBarFunction_e.firstBarTime],
        seriesBarFunction_s = seriesBarFunction_t[seriesBarFunction_e.lastBarTime];
      return seriesBarFunction_s === seriesBarFunction_a.INVALID_TIME_POINT_INDEX ? null : ((0, seriesBarFunction_r.assert)(seriesBarFunction_i <= seriesBarFunction_s,
        "firstBarTime should not exceed lastBarTime"), (0, seriesBarFunction_r.assert)(seriesBarFunction_e.priceLow <= seriesBarFunction_e.priceHigh,
        "priceLow should not exceed priceHigh"), {
        firstBarTime: seriesBarFunction_i === seriesBarFunction_a.INVALID_TIME_POINT_INDEX ? null : seriesBarFunction_i,
        lastBarTime: seriesBarFunction_s,
        rate: seriesBarFunction_e.rate,
        priceHigh: seriesBarFunction_e.priceHigh,
        priceLow: seriesBarFunction_e.priceLow
      })
    }

    function seriesBarFunction_d(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
      const seriesBarFunction_s = (0, seriesBarFunction_l.ensureTimePointIndexIndex)(seriesBarFunction_i.indexOf(seriesBarFunction_e.firstBarTime ?? seriesBarFunction_a.INVALID_TIME_POINT_INDEX)),
        seriesBarFunction_o = (0, seriesBarFunction_l.ensureTimePointIndexIndex)(seriesBarFunction_i.indexOf(seriesBarFunction_e.lastBarTime));
      return {
        id: seriesBarFunction_t,
        ...seriesBarFunction_e,
        firstBarTime: seriesBarFunction_s,
        lastBarTime: seriesBarFunction_o
      }
    }

    function seriesBarFunction_u(seriesBarFunction_e, seriesBarFunction_t) {
      const seriesBarFunction_i = Math.min(seriesBarFunction_e.firstBarTime ?? seriesBarFunction_a.INVALID_TIME_POINT_INDEX, seriesBarFunction_e.lastBarTime),
        seriesBarFunction_s = Math.max(seriesBarFunction_e.firstBarTime ?? seriesBarFunction_a.INVALID_TIME_POINT_INDEX, seriesBarFunction_e.lastBarTime);
      return seriesBarFunction_t.contains(seriesBarFunction_i) || seriesBarFunction_t.contains(seriesBarFunction_s) || seriesBarFunction_i < seriesBarFunction_t.firstBar() && seriesBarFunction_s > seriesBarFunction_t.lastBar()
    }