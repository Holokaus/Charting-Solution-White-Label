/**
 * Module 4539 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4539: (seriesBarFunction_e, t, i) => {
    "use strict";
    i.d(t, {
      coordinateIsValid: () => g,
      extendAndClipLineSegment: () => h,
      fillScaledRadius: () => y,
      getArrowPoints: () => d,
      interactionTolerance: () => m,
      optimalBarWidth: () => u,
      optimalCandlestickWidth: () => _,
      optimalHiLoWidth: () => p,
      roundToMax: () => S,
      setValidLineStyle: () => f,
      strokeScaledRadius: () => v
    });
    var seriesBarFunction_s = i(87465),
      o = i(10555),
      n = i(48892),
      r = i(39612),
      seriesBarFunction_a = i(58221);
    const l = {
        common: 13,
        line: 13,
        tradingLine: 16,
        minDistanceBetweenPoints: 10,
        series: 14,
        curve: 10,
        anchor: 13,
        esd: 4
      },
      c = {
        common: 3,
        line: 3,
        tradingLine: 3,
        minDistanceBetweenPoints: 5,
        series: 2,
        curve: 3,
        anchor: 2,
        esd: 0
      };

    function h(seriesBarFunction_e, t, i, seriesBarFunction_s, r, seriesBarFunction_a) {
      if ((0, o.equalPoints)(seriesBarFunction_e, t)) return null;
      const l = new o.Point(0, 0),
        c = new o.Point(i, seriesBarFunction_s);
      if (r) {
        if (seriesBarFunction_a) {
          const i = (0, n.intersectLineAndBox)((0, o.lineThroughPoints)(seriesBarFunction_e, t), (0, o.box)(l, c));
          return Array.isArray(i) ? i : null
        } {
          const i = (0, n.intersectRayAndBox)(t, seriesBarFunction_e, (0, o.box)(l, c));
          return null === i || (0, o.equalPoints)(t, i) ? null : (0, o.lineSegment)(t, i)
        }
      }
      if (seriesBarFunction_a) {
        const i = (0, n.intersectRayAndBox)(seriesBarFunction_e, t, (0, o.box)(l, c));
        return null === i || (0, o.equalPoints)(seriesBarFunction_e, i) ? null : (0, o.lineSegment)(seriesBarFunction_e, i)
      } {
        const i = (0, n.intersectLineSegmentAndBox)((0, o.lineSegment)(seriesBarFunction_e, t), (0, o.box)(l, c));
        return Array.isArray(i) ? i : null
      }
    }

    function d(seriesBarFunction_e, t, i, seriesBarFunction_s, o) {
      const n = .5 * i,
        r = Math.sqrt(2),
        seriesBarFunction_a = t.subtract(seriesBarFunction_e),
        l = seriesBarFunction_a.normalized();
      let c = 5 * i;
      seriesBarFunction_s && (c = Math.min(c, .35 * seriesBarFunction_a.length()));
      const h = 1 * n;
      if (c * r * .2 <= h) return [];
      const d = l.scaled(c),
        u = t.subtract(d),
        _ = l.transposed(),
        p = 1 * c,
        m = _.scaled(p),
        g = u.add(m),
        f = u.subtract(m),
        y = g.subtract(t).normalized().scaled(h),
        v = f.subtract(t).normalized().scaled(h),
        S = o ? t : t.add(y),
        b = o ? t : t.add(v),
        w = n * (r - 1),
        C = _.scaled(w),
        T = Math.min(c - 1 * n / r, n * r * 1),
        P = l.scaled(T),
        x = t.subtract(C),
        M = t.add(C),
        I = t.subtract(P);
      return [
        [g, S],
        [b, f],
        [x, I.subtract(C)],
        [M, I.add(C)]
      ]
    }

    function u(seriesBarFunction_e, t) {
      return t = t || 1, Math.floor(.3 * seriesBarFunction_e * t)
    }

    function _(seriesBarFunction_e, t) {
      if (seriesBarFunction_e >= 2.5 && seriesBarFunction_e <= 4) return Math.floor(3 * t);
      const i = 1 - .2 * Math.atan(Math.max(4, seriesBarFunction_e) - 4) / (.5 * Math.PI),
        seriesBarFunction_s = Math.floor(seriesBarFunction_e * i * t),
        o = Math.floor(seriesBarFunction_e * t),
        n = Math.min(seriesBarFunction_s, o);
      return Math.max(Math.floor(t), n)
    }

    function p(seriesBarFunction_e) {
      return .4 * seriesBarFunction_e
    }

    function m() {
      return (0, r.lastMouseOrTouchEventInfo)().isTouch ? l : c
    }

    function g(seriesBarFunction_e) {
      return null != seriesBarFunction_e && !(0, seriesBarFunction_s.isNaN)(seriesBarFunction_e)
    }

    function f(seriesBarFunction_e, t) {
      void 0 !== t && (0, seriesBarFunction_a.setLineStyle)(seriesBarFunction_e, t)
    }

    function y(seriesBarFunction_e, t) {
      const i = Math.max(1, Math.floor(t)) % 2 ? .5 : 0;
      return Math.round(seriesBarFunction_e * t) + i
    }

    function v(seriesBarFunction_e, t, i) {
      const seriesBarFunction_s = Math.max(1, Math.floor(t)) % 2 ? .5 : 0;
      return Math.round(seriesBarFunction_e * t) + (seriesBarFunction_s !== i % 2 ? .5 : 0)
    }

    function S(seriesBarFunction_e) {
      return Math.max(Math.floor(seriesBarFunction_e), 1)
    }