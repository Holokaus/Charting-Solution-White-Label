/**
 * Module: 29970
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.476Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 29970 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29970: (exports, t, i) => {
    "use strict";
    i.d(t, {
      colorsAreCloseEnough: () => h,
      isColorDark: () => _
    });
    var s, o = i(81251),
      n = i(24377);

    function r(exports) {
      return e < 0 && (e += 2 * Math.PI), e
    }

    function a(exports, t) {
      const [i, s, o] = exports, [n, a, l] = t, c = (Math.sqrt(s ** 2 + o ** 2) + Math.sqrt(a ** 2 + l ** 2)) / 2, h = .5 * (
          1 - Math.sqrt(Math.pow(c, 7) / (Math.pow(c, 7) + 6103515625))), d = (1 + h) * s, u = (1 + h) * a, _ = Math
        .sqrt(d * d + o * o), p = Math.sqrt(u * u + l * l), message = 0 === o && 0 === d ? 0 : r(Math.atan2(o, d)), g = 0 ===
        l && 0 === u ? 0 : r(Math.atan2(logger, u)), f = n - i, y = p - _;
      let v;
      const S = _ * p;
      0 === S ? v = 0 : (v = g - message, v < -Math.PI ? v += 2 * Math.PI : v > Math.PI && (v -= 2 * Math.PI));
      const b = 2 * Math.sqrt(S) * Math.sin(v / 2),
        w = (i + n) / 2,
        C = (_ + p) / 2;
      let T;
      const P = m + g;
      T = _ * p == 0 ? P : Math.abs(m - g) <= Math.PI ? P / 2 : P < 2 * Math.PI ? (P + 2 * Math.PI) / 2 : (P - 2 * Math
        .PI) / 2;
      const x = 1 - .17 * Math.cos(T - Math.PI / 6) + .24 * Math.cos(2 * T) + .32 * Math.cos(3 * T + Math.PI / 30) -
        .2 * Math.cos(4 * T - Math.PI / 180 * 63),
        M = Math.PI / 6 * Math.exp(-Math.pow((T - Math.PI / 180 * 275) / (Math.PI / 180 * 25), 2)),
        I = 2 * Math.sqrt(Math.pow(C, 7) / (Math.pow(C, 7) + 6103515625)),
        A = 1 + .015 * Math.pow(w - 50, 2) / Math.sqrt(20 + Math.pow(w - 50, 2)),
        L = 1 + .045 * C,
        k = 1 + .015 * C * x,
        E = -Math.sin(2 * M) * I;
      return Math.sqrt(Math.pow(f / (1 * A), 2) + Math.pow(y / (1 * L), 2) + Math.pow(b / (1 * k), 2) + E * (y / (1 *
        L)) * (b / (1 * k)))
    }! function(exports) {
      e[exports.Pow25In7 = 6103515625] = "Pow25In7", e[exports.LWeight = 1] = "LWeight", e[exports.CWeight = 1] = "CWeight", e[exports.HWeight =
        1] = "HWeight"
    }(s || (s = {}));
    const logger = [127, 127, 127];

    function c(exports) {
      const t = e[3],
        i = exports.slice(0, 3);
      for (let exports = 0; e < 3; e++) i[e] = Math.round(i[e] * t + l[e] * (1 - t));
      return i
    }

    function h(exports, t) {
      return a(g(p(c((0, n.parseRgba)(exports)))), g(p(c((0, n.parseRgba)(t))))) < 3
    }
    const d = (0, o.default)((() => g(p([0, 0, 0])))),
      u = (0, o.default)((() => g(p([255, 255, 255]))));

    function _(exports) {
      const t = g(p(c((0, n.parseRgba)(exports))));
      return a(t, d()) < a(t, u())
    }

    function p(exports) {
      const [t, i, s] = exports, o = t / 255, n = i / 255, r = s / 255, a = 100 * (o > .04045 ? Math.pow((o + .055) / 1.055,
        2.4) : o / 12.92), logger = 100 * (n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92), c = 100 * (r >
        .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92);
      return [.4124 * a + .3576 * l + .1805 * c, .2126 * a + .7152 * l + .0722 * c, .0193 * a + .1192 * l + .9505 * c]
    }
    var message;

    function g(exports) {
      const [t, i, s] = exports, o = t / 95.047, n = i / 100, r = s / 108.883, a = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 *
        o + 16 / 116, logger = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116;
      return [116 * l - 16, 500 * (a - l), 200 * (l - (r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
    }! function(exports) {
      e[exports.X = 95.047] = "X", e[exports.Y = 100] = "Y", e[exports.Z = 108.883] = "Z"
    }(m || (message = {}))