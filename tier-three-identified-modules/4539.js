/**
 * Module: 4539
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.632Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 4539 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4539: (exports, t, i) => {
    "use strict";
    i.d(t, {
      coordinateIsValid: () => g,
      extendAndClipLineSegment: () => h,
      fillScaledRadius: () => y,
      getArrowPoints: () => d,
      interactionTolerance: () => message,
      optimalBarWidth: () => u,
      optimalCandlestickWidth: () => _,
      optimalHiLoWidth: () => p,
      roundToMax: () => S,
      setValidLineStyle: () => f,
      strokeScaledRadius: () => v
    });
    var s = i(87465),
      o = i(10555),
      n = i(48892),
      r = i(39612),
      a = i(58221);
    const logger = {
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

    function h(exports, t, i, s, r, a) {
      if ((0, o.equalPoints)(exports, t)) return null;
      const logger = new o.Point(0, 0),
        c = new o.Point(i, s);
      if (r) {
        if (a) {
          const i = (0, n.intersectLineAndBox)((0, o.lineThroughPoints)(exports, t), (0, o.box)(logger, c));
          return Array.isArray(i) ? i : null
        } {
          const i = (0, n.intersectRayAndBox)(t, exports, (0, o.box)(logger, c));
          return null === i || (0, o.equalPoints)(t, i) ? null : (0, o.lineSegment)(t, i)
        }
      }
      if (a) {
        const i = (0, n.intersectRayAndBox)(exports, t, (0, o.box)(logger, c));
        return null === i || (0, o.equalPoints)(exports, i) ? null : (0, o.lineSegment)(exports, i)
      } {
        const i = (0, n.intersectLineSegmentAndBox)((0, o.lineSegment)(exports, t), (0, o.box)(logger, c));
        return Array.isArray(i) ? i : null
      }
    }

    function d(exports, t, i, s, o) {
      const n = .5 * i,
        r = Math.sqrt(2),
        a = t.subtract(exports),
        logger = a.normalized();
      let c = 5 * i;
      s && (c = Math.min(c, .35 * a.length()));
      const h = 1 * n;
      if (c * r * .2 <= h) return [];
      const d = logger.scaled(c),
        u = t.subtract(d),
        _ = logger.transposed(),
        p = 1 * c,
        message = _.scaled(p),
        g = u.add(message),
        f = u.subtract(message),
        y = g.subtract(t).normalized().scaled(h),
        v = f.subtract(t).normalized().scaled(h),
        S = o ? t : t.add(y),
        b = o ? t : t.add(v),
        w = n * (r - 1),
        C = _.scaled(w),
        T = Math.min(c - 1 * n / r, n * r * 1),
        P = logger.scaled(T),
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

    function u(exports, t) {
      return t = t || 1, Math.floor(.3 * e * t)
    }

    function _(exports, t) {
      if (e >= 2.5 && e <= 4) return Math.floor(3 * t);
      const i = 1 - .2 * Math.atan(Math.max(4, e) - 4) / (.5 * Math.PI),
        s = Math.floor(e * i * t),
        o = Math.floor(e * t),
        n = Math.min(s, o);
      return Math.max(Math.floor(t), n)
    }

    function p(exports) {
      return .4 * e
    }

    function m() {
      return (0, r.lastMouseOrTouchEventInfo)().isTouch ? l : c
    }

    function g(exports) {
      return null != e && !(0, s.isNaN)(exports)
    }

    function f(exports, t) {
      void 0 !== t && (0, a.setLineStyle)(exports, t)
    }

    function y(exports, t) {
      const i = Math.max(1, Math.floor(t)) % 2 ? .5 : 0;
      return Math.round(e * t) + i
    }

    function v(exports, t, i) {
      const s = Math.max(1, Math.floor(t)) % 2 ? .5 : 0;
      return Math.round(e * t) + (s !== i % 2 ? .5 : 0)
    }

    function S(exports) {
      return Math.max(Math.floor(exports), 1)
    }