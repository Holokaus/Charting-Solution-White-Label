/**
 * Module 52859 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

52859: (e, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      alphaToTransparency: () => r,
      applyAlpha: () => n,
      applyTransparency: () => l,
      colorFromBackground: () => u,
      colorToInteger: () => g,
      generateColor: () => o,
      getLuminance: () => h,
      gradientColorAtPercent: () => _,
      isHexColor: () => d,
      resetTransparency: () => c,
      rgbaFromInteger: () => p,
      rgbaToInteger: () => m,
      transparencyToAlpha: () => a
    });
    var s = i(24377);

    function o(e, t, i) {
      if (t = t || 0, !d(e)) return i ? (0, s.rgbaToString)((0, s.rgba)((0, s.parseRgb)(e), (0, s
        .normalizeAlphaComponent)(a(t)))) : e;
      const [o, n, r] = (0, s.parseRgb)(e), l = (0, s.normalizeAlphaComponent)(a(t));
      return (0, s.rgbaToString)([o, n, r, l])
    }

    function n(e, t, i) {
      const o = (0, s.tryParseRgba)(e);
      if (null === o) throw new Error(`Invalid color: ${e}`);
      const [n, r, a, l] = o, c = (0, s.normalizeAlphaComponent)(t * (i ? l : 1));
      return (0, s.rgbaToString)((0, s.rgba)([n, r, a], c))
    }

    function r(e) {
      return 100 * (1 - e)
    }

    function a(e) {
      if (e < 0 || e > 100) throw new Error("invalid transparency");
      return 1 - e / 100
    }

    function l(e, t) {
      if ("transparent" === e) return e;
      const i = (0, s.parseRgba)(e),
        o = i[3];
      return (0, s.rgbaToString)((0, s.rgba)(i[0], i[1], i[2], a(t) * o))
    }

    function c(e) {
      return "transparent" === e ? e : d(e) ? e.slice(0, 7) : (0, s.rgbaToString)((0, s.rgba)((0, s.parseRgb)(e), (0, s
        .normalizeAlphaComponent)(1)))
    }

    function h(e) {
      const t = (0, s.parseRgb)(e).map((e => (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)));
      return Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
    }

    function d(e) {
      return 0 === e.indexOf("#")
    }

    function u(e) {
      return "black" === (0, s.rgbToBlackWhiteString)((0, s.parseRgb)(e), 150) ? "#ffffff" : "#000000"
    }

    function _(e, t, i) {
      const [o, n, r, a] = (0, s.parseRgba)(e), [l, c, h, d] = (0, s.parseRgba)(t), u = (0, s.rgba)(Math.round(o + i * (
        l - o)), Math.round(n + i * (c - n)), Math.round(r + i * (h - r)), a + i * (d - a));
      return (0, s.rgbaToString)(u)
    }

    function p(e) {
      const t = (e = Math.round(e)) % 256;
      e -= t;
      const i = (e /= 256) % 256;
      e -= i;
      const s = (e /= 256) % 256;
      e -= s;
      return `rgba(${t},${i},${s},${(e/=256)/255})`
    }

    function m(e) {
      const t = Math.round(255 * e[3]);
      return e[0] + 256 * e[1] + 65536 * e[2] + 16777216 * t
    }

    function g(e) {
      const t = (0, s.tryParseRgba)(e);
      return null === t ? 0 : m(t)
    }