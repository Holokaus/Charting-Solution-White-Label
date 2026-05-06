/**
 * Module 66142 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

66142: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      barSpacingByScaleRatio: () => seriesBarFunction_a,
      priceRangeByScaleRatio: () => seriesBarFunction_r,
      scaleRatio: () => seriesBarFunction_n
    });
    var seriesBarFunction_s = seriesBarFunction_i(24062);
    const seriesBarFunction_o = 1e-10;

    function seriesBarFunction_n(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_t.isLog() || seriesBarFunction_e.isEmpty() || seriesBarFunction_t.isEmpty()) return null;
      const seriesBarFunction_i = function(seriesBarFunction_e) {
        if (seriesBarFunction_e.isEmpty()) return null;
        const seriesBarFunction_t = seriesBarFunction_e.priceRange();
        if (null === seriesBarFunction_t) return null;
        const seriesBarFunction_i = seriesBarFunction_t.length();
        return seriesBarFunction_e.internalHeight() / seriesBarFunction_i
      }(seriesBarFunction_t);
      if (null === seriesBarFunction_i) return null;
      return seriesBarFunction_e.getValidBarSpacing() / Math.max(seriesBarFunction_o, seriesBarFunction_i)
    }

    function seriesBarFunction_r(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
      if (seriesBarFunction_e.isLog() || null === seriesBarFunction_i || seriesBarFunction_e.isEmpty()) return null;
      const seriesBarFunction_o = seriesBarFunction_e.priceRange();
      if (null === seriesBarFunction_o || seriesBarFunction_o.isEmpty()) return null;
      const seriesBarFunction_n = seriesBarFunction_e.internalHeight() / (seriesBarFunction_t / seriesBarFunction_i),
        seriesBarFunction_r = seriesBarFunction_o.length();
      if (seriesBarFunction_n === seriesBarFunction_r) return seriesBarFunction_o;
      const seriesBarFunction_a = (seriesBarFunction_n - seriesBarFunction_r) / 2;
      return new seriesBarFunction_s.PriceRange(seriesBarFunction_o.minValue() - seriesBarFunction_a, seriesBarFunction_o.maxValue() + seriesBarFunction_a)
    }

    function seriesBarFunction_a(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_e.isLog() || null === seriesBarFunction_t || seriesBarFunction_e.isEmpty()) return null;
      const seriesBarFunction_i = seriesBarFunction_e.priceRange();
      if (null === seriesBarFunction_i) return null;
      const seriesBarFunction_s = seriesBarFunction_i.length();
      return seriesBarFunction_e.internalHeight() / seriesBarFunction_s * seriesBarFunction_t
    }