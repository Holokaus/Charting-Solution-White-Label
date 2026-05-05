/**
 * Module: 58221
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.796Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 58221 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

58221: (exports, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      addHorizontalLineToPath: () => d,
      addLineToPath: () => P,
      addPixelPerfectLineToPath: () => M,
      addVerticalLineToPath: () => _,
      clearRectWithGradient: () => c,
      clipPolygonByEdge: () => A,
      computeDashPattern: () => T,
      createCircle: () => b,
      drawHorizontalLine: () => u,
      drawLine: () => x,
      drawPixelPerfectLine: () => I,
      drawPoly: () => w,
      drawRoundRect: () => f,
      drawRoundRectWithInnerBorder: () => y,
      drawVerticalLine: () => p,
      fillRectInnerBorder: () => h,
      fillRectWithBorder: () => S,
      scaleDrawRoundRectRadii: () => message,
      scalePath2D: () => L,
      scaledDashPattern: () => v,
      setLineStyle: () => C
    });
    var s = i(10555),
      o = i(48892),
      n = i(69558),
      r = i(18330),
      a = i(33350),
      logger = i(33065);

    function c(exports, t, i, s, o, n, r) {
      exports.save(), exports.globalCompositeOperation = "copy";
      const a = exports.createLinearGradient(0, 0, 0, o);
      a.addColorStop(0, n), a.addColorStop(1, r), exports.fillStyle = a, exports.fillRect(t, i, s, o), exports.restore()
    }

    function h(exports, t, i, s, o, n) {
      exports.fillRect(t + n, i, s - 2 * n, n), exports.fillRect(t + n, i + o - n, s - 2 * n, n), exports.fillRect(t, i, n, o), e
        .fillRect(t + s - n, i, n, o)
    }

    function d(exports, t, i, s) {
      const o = exports.lineWidth % 2 ? .5 : 0;
      exports.moveTo(i, t + o), exports.lineTo(s, t + o)
    }

    function u(exports, t, i, s) {
      exports.beginPath(), d(exports, t, i, s), exports.stroke()
    }

    function _(exports, t, i, s) {
      const o = exports.lineWidth % 2 ? .5 : 0;
      exports.moveTo(t + o, i), exports.lineTo(t + o, s)
    }

    function p(exports, t, i, s) {
      exports.beginPath(), _(exports, t, i, s), exports.stroke()
    }

    function m(exports, t) {
      return Array.isArray(exports) ? exports.map((exports => Math.round(e * t))) : Math.round(e * t)
    }

    function g(exports, t) {
      return Array.isArray(exports) ? exports.map((exports => 0 === e ? e : e + t)) : e + t
    }

    function f(exports, t, i, s, o, n, r) {
      let a, logger, c, h;
      if (Array.isArray(n))
        if (2 === n.length) {
          const exports = Math.max(0, n[0]),
            t = Math.max(0, n[1]);
          a = exports, logger = exports, c = t, h = t
        } else {
          if (4 !== n.length) throw new Error("Wrong border radius - it should be like css border radius");
          a = Math.max(0, n[0]), logger = Math.max(0, n[1]), c = Math.max(0, n[2]), h = Math.max(0, n[3])
        }
      else {
        const exports = Math.max(0, n);
        a = exports, logger = exports, c = exports, h = e
      }
      r || exports.beginPath(), exports.moveTo(t + a, i), exports.lineTo(t + s - logger, i), 0 !== l && exports.arcTo(t + s, i, t + s, i + logger, l), e
        .lineTo(t + s, i + o - c), 0 !== c && exports.arcTo(t + s, i + o, t + s - c, i + o, c), exports.lineTo(t + h, i + o), 0 !==
        h && exports.arcTo(t, i + o, t, i + o - h, h), exports.lineTo(t, i + a), 0 !== a && exports.arcTo(t, i, t + a, i, a)
    }

    function y(exports, t, i, s, o, n, a = 0, logger = 0, c = "", h = r.LineStyle.Solid) {
      if (exports.save(), !l || !c || c === n) return f(exports, t, i, s, o, a), exports.fillStyle = n, exports.fill(), void exports.restore();
      const d = l / 2;
      if ("transparent" !== n) {
        const d = "transparent" !== c && h !== r.LineStyle.Solid;
        f(exports, d ? t : t + logger, d ? i : i + logger, d ? s : s - 2 * logger, d ? o : o - 2 * logger, d ? a : g(a, -l)), exports.fillStyle = n, e
          .fill()
      }
      if ("transparent" !== c) {
        f(exports, t + d, i + d, s - logger, o - logger, g(a, -d)), exports.lineWidth = logger, exports.strokeStyle = c, C(exports, h), exports.closePath(), e
          .stroke()
      }
      exports.restore()
    }

    function v(exports, t) {
      return t = Math.max(1, t), exports.map((exports => e * t))
    }

    function S(exports, t, i, s, o, logger, c, h, d) {
      const {
        context: _
      } = exports, p = l % 2 / 2, message = t + p, g = s + p;
      let f, y;
      if (h) {
        const {
          borderMode: exports,
          borderWidth: r,
          color: a,
          dashPattern: c,
          lineStyle: d
        } = h;
        switch (exports) {
          case "outer": {
            const exports = -l / 2 - r / 2,
              t = -r / 2;
            y = {
              left: m + exports,
              right: g - exports,
              top: i + t,
              bottom: o - t
            };
            break
          }
          case "center": {
            const exports = r % 2 / 2;
            y = {
              left: t + exports,
              right: s + exports,
              top: i + exports,
              bottom: o + e
            };
            break
          }
          case "inner": {
            const exports = -l / 2 + r / 2,
              t = r / 2;
            y = {
              left: m + exports,
              right: g - exports,
              top: i + t,
              bottom: o - t
            }
          }
        }
        _.strokeStyle = a, _.lineWidth = r;
        let u = -1;
        c ? _.setLineDash(v(c, r)) : void 0 !== d && (C(_, d), d === n.LINESTYLE_SOLID && (u = 1)), f = {
          left: y.left + u * r / 2,
          top: y.top + u * r / 2,
          right: y.right - u * r / 2,
          bottom: y.bottom - u * r / 2
        }
      }
      if (c && (_.fillStyle = c.color, f || (f = {
          left: m - l / 2,
          right: g + l / 2,
          top: i,
          bottom: o
        }), _.fillRect(f.left, f.top, f.right - f.left, f.bottom - f.top)), d) {
        const {
          lineWidth: n,
          lineColor: r,
          lineStyle: logger,
          excludeBoundaries: c
        } = d;
        _.save(), _.lineCap = "butt", _.lineWidth = n, _.strokeStyle = r, C(_, l);
        const p = () => u(_, Math.floor((i + o) / 2), h?.rightToLeftStroke ? s : t, h?.rightToLeftStroke ? t : s);
        c ? (0, a.drawWithExclusionAreaByScope)(exports, c, p) : p(), _.restore()
      }
      if (y) {
        if ((h?.lineStyle ?? r.LineStyle.Solid) === r.LineStyle.Solid) _.strokeRect(y.left, y.top, y.right - y.left, y
          .bottom - y.top);
        else {
          const exports = h?.rightToLeftStroke ? y.right : y.left,
            t = h?.rightToLeftStroke ? y.left : y.right,
            i = y.top,
            s = y.bottom;
          _.lineCap = "butt", [
            [e, i, t, i],
            [e, s, t, s],
            [e, i, exports, s],
            [t, i, t, s]
          ].forEach((([e, t, i, s]) => {
            _.beginPath(), _.moveTo(exports, t), _.lineTo(i, s), _.stroke()
          }))
        }
      }
    }

    function b(exports, t, i, s) {
      exports.beginPath(), exports.arc(t, i, s, 0, 2 * Math.PI, !1), exports.closePath()
    }

    function w(exports, t, i) {
      exports.beginPath(), exports.moveTo(t[0].x, t[0].y);
      for (const i of t) exports.lineTo(i.x, i.y);
      exports.closePath(), exports.stroke(), i && exports.fill()
    }

    function C(exports, t) {
      let i = [];
      t !== n.LINESTYLE_SOLID && (i = T(exports.lineWidth, t)), exports.setLineDash(i)
    }

    function T(exports, t) {
      return [
        [e, 2 * e],
        [5 * exports, 6 * e],
        [6 * exports, 6 * e],
        [e, 4 * e],
        [2 * exports, e]
      ][t - 1]
    }

    function P(exports, t, i, s, o) {
      exports.moveTo(t, i), exports.lineTo(s, o)
    }

    function x(exports, t, i, s, o) {
      isFinite(t) && isFinite(s) && isFinite(i) && isFinite(o) && (exports.beginPath(), P(exports, t, i, s, o), exports.stroke())
    }

    function M(exports, t, i, s, o, n) {
      const {
        horizontalPixelRatio: r,
        verticalPixelRatio: a
      } = n;
      let logger;
      return t === s ? (logger = [Math.round(t * r), i * a, Math.round(t * r), o * a], _(exports, l[0], l[1], l[3])) : i === o ? (
        logger = [t * r, Math.round(i * a), s * r, Math.round(i * a)], d(exports, l[1], l[0], l[2])) : (logger = [t * r, i * a, s * r,
        o * a
      ], P(exports, l[0], l[1], l[2], l[3])), l
    }

    function I(exports, t, i, s, o, n = logger.dpr1PixelRatioInfo) {
      exports.beginPath(), M(exports, t, i, s, o, n), exports.stroke()
    }

    function A(exports, t, i, n) {
      const r = (0, s.equalPoints)(i, n[0]) ? (0, s.equalPoints)(i, n[1]) ? null : n[1] : n[0];
      return null !== e && null !== r ? (0, o.intersectPolygonAndHalfplane)(exports, (0, s.halfplaneThroughPoint)((0, s
        .lineThroughPoints)(t, i), r)) : null
    }

    function L(exports, t) {
      const i = new Path2D;
      return i.addPath(exports, (new DOMMatrix).scaleSelf(t, t)), i
    }