/**
 * Module 4539 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

4539: (exports, t, i) => {
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
    var modes = i(87465),
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

    function handler(exports, t, i, modes, r, seriesBarFunction_a) {
      if ((0, o.equalPoints)(exports, t)) return null;
      const l = new o.Point(0, 0),
        c = new o.Point(i, modes);
      if (r) {
        if (seriesBarFunction_a) {
          const i = (0, n.intersectLineAndBox)((0, o.lineThroughPoints)(exports, t), (0, o.box)(l, c));
          return Array.isArray(i) ? i : null
        } {
          const i = (0, n.intersectRayAndBox)(t, exports, (0, o.box)(l, c));
          return null === i || (0, o.equalPoints)(t, i) ? null : (0, o.lineSegment)(t, i)
        }
      }
      if (seriesBarFunction_a) {
        const i = (0, n.intersectRayAndBox)(exports, t, (0, o.box)(l, c));
        return null === i || (0, o.equalPoints)(exports, i) ? null : (0, o.lineSegment)(exports, i)
      } {
        const i = (0, n.intersectLineSegmentAndBox)((0, o.lineSegment)(exports, t), (0, o.box)(l, c));
        return Array.isArray(i) ? i : null
      }
    }

    function data(exports, t, i, modes, o) {
      const n = .5 * i,
        r = Math.sqrt(2),
        seriesBarFunction_a = t.subtract(exports),
        l = seriesBarFunction_a.normalized();
      let c = 5 * i;
      modes && (c = Math.min(c, .35 * seriesBarFunction_a.length()));
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

    function utils(exports, t) {
      return t = t || 1, Math.floor(.3 * exports * t)
    }

    function _(exports, t) {
      if (exports >= 2.5 && exports <= 4) return Math.floor(3 * t);
      const i = 1 - .2 * Math.atan(Math.max(4, exports) - 4) / (.5 * Math.PI),
        modes = Math.floor(exports * i * t),
        o = Math.floor(exports * t),
        n = Math.min(modes, o);
      return Math.max(Math.floor(t), n)
    }

    function params(exports) {
      return .4 * exports
    }

    function m() {
      return (0, r.lastMouseOrTouchEventInfo)().isTouch ? l : c
    }

    function g(exports) {
      return null != exports && !(0, modes.isNaN)(exports)
    }

    function func(exports, t) {
      void 0 !== t && (0, seriesBarFunction_a.setLineStyle)(exports, t)
    }

    function y(exports, t) {
      const i = Math.max(1, Math.floor(t)) % 2 ? .5 : 0;
      return Math.round(exports * t) + i
    }

    function v(exports, t, i) {
      const modes = Math.max(1, Math.floor(t)) % 2 ? .5 : 0;
      return Math.round(exports * t) + (modes !== i % 2 ? .5 : 0)
    }

    function S(exports) {
      return Math.max(Math.floor(exports), 1)
    }