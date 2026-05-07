/**
 * Module 4539 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4539: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      coordinateIsValid: () => seriesBarFunction_g,
      extendAndClipLineSegment: () => seriesBarFunction_h,
      fillScaledRadius: () => seriesBarFunction_y,
      getArrowPoints: () => seriesBarFunction_d,
      interactionTolerance: () => seriesBarFunction_m,
      optimalBarWidth: () => seriesBarFunction_u,
      optimalCandlestickWidth: () => _,
      optimalHiLoWidth: () => seriesBarFunction_p,
      roundToMax: () => S,
      setValidLineStyle: () => seriesBarFunction_f,
      strokeScaledRadius: () => seriesBarFunction_v
    });
    var seriesBarFunction_s = seriesBarFunction_i(87465),
      seriesBarFunction_o = seriesBarFunction_i(10555),
      seriesBarFunction_n = seriesBarFunction_i(48892),
      seriesBarFunction_r = seriesBarFunction_i(39612),
      seriesBarFunction_a = seriesBarFunction_i(58221);
    const seriesBarFunction_l = {
        common: 13,
        line: 13,
        tradingLine: 16,
        minDistanceBetweenPoints: 10,
        series: 14,
        curve: 10,
        anchor: 13,
        esd: 4
      },
      seriesBarFunction_c = {
        common: 3,
        line: 3,
        tradingLine: 3,
        minDistanceBetweenPoints: 5,
        series: 2,
        curve: 3,
        anchor: 2,
        esd: 0
      };

    function seriesBarFunction_h(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s, seriesBarFunction_r, seriesBarFunction_a) {
      if ((0, seriesBarFunction_o.equalPoints)(seriesBarFunction_e, seriesBarFunction_t)) return null;
      const seriesBarFunction_l = new seriesBarFunction_o.Point(0, 0),
        seriesBarFunction_c = new seriesBarFunction_o.Point(seriesBarFunction_i, seriesBarFunction_s);
      if (seriesBarFunction_r) {
        if (seriesBarFunction_a) {
          const seriesBarFunction_i = (0, seriesBarFunction_n.intersectLineAndBox)((0, seriesBarFunction_o.lineThroughPoints)(seriesBarFunction_e, seriesBarFunction_t), (0, seriesBarFunction_o.box)(seriesBarFunction_l, seriesBarFunction_c));
          return Array.isArray(seriesBarFunction_i) ? seriesBarFunction_i : null
        } {
          const seriesBarFunction_i = (0, seriesBarFunction_n.intersectRayAndBox)(seriesBarFunction_t, seriesBarFunction_e, (0, seriesBarFunction_o.box)(seriesBarFunction_l, seriesBarFunction_c));
          return null === seriesBarFunction_i || (0, seriesBarFunction_o.equalPoints)(seriesBarFunction_t, seriesBarFunction_i) ? null : (0, seriesBarFunction_o.lineSegment)(seriesBarFunction_t, seriesBarFunction_i)
        }
      }
      if (seriesBarFunction_a) {
        const seriesBarFunction_i = (0, seriesBarFunction_n.intersectRayAndBox)(seriesBarFunction_e, seriesBarFunction_t, (0, seriesBarFunction_o.box)(seriesBarFunction_l, seriesBarFunction_c));
        return null === seriesBarFunction_i || (0, seriesBarFunction_o.equalPoints)(seriesBarFunction_e, seriesBarFunction_i) ? null : (0, seriesBarFunction_o.lineSegment)(seriesBarFunction_e, seriesBarFunction_i)
      } {
        const seriesBarFunction_i = (0, seriesBarFunction_n.intersectLineSegmentAndBox)((0, seriesBarFunction_o.lineSegment)(seriesBarFunction_e, seriesBarFunction_t), (0, seriesBarFunction_o.box)(seriesBarFunction_l, seriesBarFunction_c));
        return Array.isArray(seriesBarFunction_i) ? seriesBarFunction_i : null
      }
    }

    function seriesBarFunction_d(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s, seriesBarFunction_o) {
      const seriesBarFunction_n = .5 * seriesBarFunction_i,
        seriesBarFunction_r = Math.sqrt(2),
        seriesBarFunction_a = seriesBarFunction_t.subtract(seriesBarFunction_e),
        seriesBarFunction_l = seriesBarFunction_a.normalized();
      let seriesBarFunction_c = 5 * seriesBarFunction_i;
      seriesBarFunction_s && (seriesBarFunction_c = Math.min(seriesBarFunction_c, .35 * seriesBarFunction_a.length()));
      const seriesBarFunction_h = 1 * seriesBarFunction_n;
      if (seriesBarFunction_c * seriesBarFunction_r * .2 <= seriesBarFunction_h) return [];
      const seriesBarFunction_d = seriesBarFunction_l.scaled(seriesBarFunction_c),
        seriesBarFunction_u = seriesBarFunction_t.subtract(seriesBarFunction_d),
        _ = seriesBarFunction_l.transposed(),
        seriesBarFunction_p = 1 * seriesBarFunction_c,
        seriesBarFunction_m = _.scaled(seriesBarFunction_p),
        seriesBarFunction_g = seriesBarFunction_u.add(seriesBarFunction_m),
        seriesBarFunction_f = seriesBarFunction_u.subtract(seriesBarFunction_m),
        seriesBarFunction_y = seriesBarFunction_g.subtract(seriesBarFunction_t).normalized().scaled(seriesBarFunction_h),
        seriesBarFunction_v = seriesBarFunction_f.subtract(seriesBarFunction_t).normalized().scaled(seriesBarFunction_h),
        S = seriesBarFunction_o ? seriesBarFunction_t : seriesBarFunction_t.add(seriesBarFunction_y),
        seriesBarFunction_b = seriesBarFunction_o ? seriesBarFunction_t : seriesBarFunction_t.add(seriesBarFunction_v),
        seriesBarFunction_w = seriesBarFunction_n * (seriesBarFunction_r - 1),
        C = _.scaled(seriesBarFunction_w),
        T = Math.min(seriesBarFunction_c - 1 * seriesBarFunction_n / seriesBarFunction_r, seriesBarFunction_n * seriesBarFunction_r * 1),
        P = seriesBarFunction_l.scaled(T),
        seriesBarFunction_x = seriesBarFunction_t.subtract(C),
        M = seriesBarFunction_t.add(C),
        I = seriesBarFunction_t.subtract(P);
      return [
        [seriesBarFunction_g, S],
        [seriesBarFunction_b, seriesBarFunction_f],
        [seriesBarFunction_x, I.subtract(C)],
        [M, I.add(C)]
      ]
    }

    function seriesBarFunction_u(seriesBarFunction_e, seriesBarFunction_t) {
      return seriesBarFunction_t = seriesBarFunction_t || 1, Math.floor(.3 * seriesBarFunction_e * seriesBarFunction_t)
    }

    function _(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_e >= 2.5 && seriesBarFunction_e <= 4) return Math.floor(3 * seriesBarFunction_t);
      const seriesBarFunction_i = 1 - .2 * Math.atan(Math.max(4, seriesBarFunction_e) - 4) / (.5 * Math.PI),
        seriesBarFunction_s = Math.floor(seriesBarFunction_e * seriesBarFunction_i * seriesBarFunction_t),
        seriesBarFunction_o = Math.floor(seriesBarFunction_e * seriesBarFunction_t),
        seriesBarFunction_n = Math.min(seriesBarFunction_s, seriesBarFunction_o);
      return Math.max(Math.floor(seriesBarFunction_t), seriesBarFunction_n)
    }

    function seriesBarFunction_p(seriesBarFunction_e) {
      return .4 * seriesBarFunction_e
    }

    function seriesBarFunction_m() {
      return (0, seriesBarFunction_r.lastMouseOrTouchEventInfo)().isTouch ? seriesBarFunction_l : seriesBarFunction_c
    }

    function seriesBarFunction_g(seriesBarFunction_e) {
      return null != seriesBarFunction_e && !(0, seriesBarFunction_s.isNaN)(seriesBarFunction_e)
    }

    function seriesBarFunction_f(seriesBarFunction_e, seriesBarFunction_t) {
      void 0 !== seriesBarFunction_t && (0, seriesBarFunction_a.setLineStyle)(seriesBarFunction_e, seriesBarFunction_t)
    }

    function seriesBarFunction_y(seriesBarFunction_e, seriesBarFunction_t) {
      const seriesBarFunction_i = Math.max(1, Math.floor(seriesBarFunction_t)) % 2 ? .5 : 0;
      return Math.round(seriesBarFunction_e * seriesBarFunction_t) + seriesBarFunction_i
    }

    function seriesBarFunction_v(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
      const seriesBarFunction_s = Math.max(1, Math.floor(seriesBarFunction_t)) % 2 ? .5 : 0;
      return Math.round(seriesBarFunction_e * seriesBarFunction_t) + (seriesBarFunction_s !== seriesBarFunction_i % 2 ? .5 : 0)
    }

    function S(seriesBarFunction_e) {
      return Math.max(Math.floor(seriesBarFunction_e), 1)
    }