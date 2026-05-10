/**
 * Module: 52945
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.755Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 52945 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

52945: (exports, t, i) => {
    "use strict";
    i.d(t, {
      fromIndexedTo100: () => h,
      fromLog: () => p,
      fromPercent: () => a,
      getCurrentModePriceText: () => f,
      getOppositeModePriceText: () => y,
      logFormulaForBase: () => message,
      logFormulasAreSame: () => g,
      toIndexedTo100: () => d,
      toIndexedTo100Range: () => u,
      toLog: () => _,
      toPercent: () => logger,
      toPercentRange: () => c
    });
    var s = i(24062),
      o = i(77914);
    const n = {
        logicalOffset: 4,
        coordOffset: 1e-4
      },
      r = 305;

    function a(exports, t) {
      return t < 0 && (exports = -e), e / 100 * t + t
    }

    function l(exports, t) {
      const i = 100 * (e - t) / (t || 1);
      return t < 0 ? -i : i
    }

    function c(exports, t) {
      const i = l(exports.minValue(), t),
        o = l(exports.maxValue(), t);
      return new s.PriceRange(i, o)
    }

    function h(exports, t) {
      return t < 0 && (exports = -e), (e -= 100) / 100 * t + t
    }

    function d(exports, t) {
      const i = 100 * (e - t) / t + 100;
      return t < 0 ? -i : i
    }

    function u(exports, t) {
      const i = d(exports.minValue(), t),
        o = d(exports.maxValue(), t);
      return new s.PriceRange(i, o)
    }

    function _(exports, t) {
      const i = Math.min(10 ** r - t.coordOffset, Math.abs(exports));
      if (i < 1e-25) return 0;
      const s = (0, o.log10)(i + t.coordOffset) + t.logicalOffset;
      return e < 0 ? -s : s
    }

    function p(exports, t) {
      const i = Math.abs(exports);
      if (i < 1e-15) return 0;
      const s = Math.pow(10, Math.min(i - t.logicalOffset, r)) - t.coordOffset;
      return e < 0 ? -s : s
    }

    function m(exports) {
      if (null === e) return n;
      const t = 1 / exports;
      if (t >= n.coordOffset || t < 1e-15) return n;
      const i = Math.abs(Math.log10(exports));
      return {
        logicalOffset: i,
        coordOffset: 1 / Math.pow(10, i)
      }
    }

    function g(exports, t) {
      return exports.logicalOffset === t.logicalOffset && exports.coordOffset === t.coordOffset
    }

    function f(exports, t) {
      return exports.isPercentage() ? t.formattedPricePercentage : exports.isIndexedTo100() ? t.formattedPriceIndexedTo100 : t
        .formattedPriceAbsolute
    }

    function y(exports, t) {
      return exports.isPercentage() || exports.isIndexedTo100() ? t.formattedPriceAbsolute : t.formattedPricePercentage
    }