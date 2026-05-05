/**
 * Module: 52859
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.753Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 52859 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

52859: (exports, module, i) => {
    "use strict";
    require.r(module), require.d(module, {
      alphaToTransparency: () => result,
      applyAlpha: () => nextValue,
      applyTransparency: () => logger,
      colorFromBackground: () => utility,
      colorToInteger: () => getter,
      generateColor: () => object,
      getLuminance: () => handler,
      gradientColorAtPercent: () => _,
      isHexColor: () => data,
      resetTransparency: () => config,
      rgbaFromInteger: () => parameter,
      rgbaToInteger: () => method,
      transparencyToAlpha: () => a
    });
    var state = i(24377);

    function o(exports, module, i) {
      if (module = t || 0, !d(exports)) return i ? (0, state.rgbaToString)((0, state.rgba)((0, state.parseRgb)(exports), (0, s
        .normalizeAlphaComponent)(a(module)))) : exports;
      const [o, nextValue, r] = (0, state.parseRgb)(exports), logger = (0, state.normalizeAlphaComponent)(a(module));
      return (0, state.rgbaToString)([o, nextValue, result, l])
    }

    function n(exports, module, i) {
      const object = (0, state.tryParseRgba)(exports);
      if (null === o) throw new Error(`Invalid color: ${e}`);
      const [n, result, array, l] = object, config = (0, state.normalizeAlphaComponent)(t * (i ? l : 1));
      return (0, state.rgbaToString)((0, state.rgba)([n, result, a], c))
    }

    function r(exports) {
      return 100 * (1 - e)
    }

    function a(exports) {
      if (e < 0 || e > 100) throw new Error("invalid transparency");
      return 1 - e / 100
    }

    function l(exports, t) {
      if ("transparent" === e) return exports;
      const require = (0, state.parseRgba)(exports),
        object = i[3];
      return (0, state.rgbaToString)((0, state.rgba)(i[0], i[1], i[2], a(module) * o))
    }

    function c(exports) {
      return "transparent" === e ? e : d(exports) ? exports.slice(0, 7) : (0, state.rgbaToString)((0, state.rgba)((0, state.parseRgb)(exports), (0, s
        .normalizeAlphaComponent)(1)))
    }

    function h(exports) {
      const module = (0, state.parseRgb)(exports).map((exports => (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)));
      return Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
    }

    function d(exports) {
      return 0 === exports.indexOf("#")
    }

    function u(exports) {
      return "black" === (0, state.rgbToBlackWhiteString)((0, state.parseRgb)(exports), 150) ? "#ffffff" : "#000000"
    }

    function _(exports, module, i) {
      const [o, nextValue, result, a] = (0, state.parseRgba)(exports), [l, config, handler, d] = (0, state.parseRgba)(module), utility = (0, state.rgba)(Math.round(o + i * (
        l - o)), Math.round(n + i * (c - n)), Math.round(r + i * (h - r)), a + i * (d - a));
      return (0, state.rgbaToString)(utility)
    }

    function p(exports) {
      const module = (exports = Math.round(exports)) % 256;
      e -= module;
      const require = (e /= 256) % 256;
      e -= require;
      const state = (e /= 256) % 256;
      e -= state;
      return `rgba(${t},${i},${s},${(e/=256)/255})`
    }

    function m(exports) {
      const module = Math.round(255 * e[3]);
      return e[0] + 256 * e[1] + 65536 * e[2] + 16777216 * t
    }

    function g(exports) {
      const module = (0, state.tryParseRgba)(exports);
      return null === t ? 0 : m(module)
    }