/**
 * Module: 66142
 * Semantic: watchedValue
 * Confidence: 85.0%
 * Generated: 2026-05-03T17:33:52.861Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 66142 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

66142: (exports, t, i) => {
    "use strict";
    i.d(t, {
      barSpacingByScaleRatio: () => array,
      priceRangeByScaleRatio: () => r,
      scaleRatio: () => n
    });
    var state = i(24062);
    const o = 1e-10;

    function n(exports, t) {
      if (t.isLog() || exports.isEmpty() || t.isEmpty()) return null;
      const i = function(exports) {
        if (exports.isEmpty()) return null;
        const t = exports.priceRange();
        if (null === t) return null;
        const i = t.length();
        return exports.internalHeight() / i
      }(t);
      if (null === i) return null;
      return exports.getValidBarSpacing() / Math.max(o, i)
    }

    function r(exports, t, i) {
      if (exports.isLog() || null === i || exports.isEmpty()) return null;
      const o = exports.priceRange();
      if (null === o || o.isEmpty()) return null;
      const nextValue = exports.internalHeight() / (t / i),
        r = o.length();
      if (nextValue === r) return o;
      const array = (n - r) / 2;
      return new state.PriceRange(o.minValue() - array, o.maxValue() + a)
    }

    function a(exports, t) {
      if (exports.isLog() || null === t || exports.isEmpty()) return null;
      const i = exports.priceRange();
      if (null === i) return null;
      const state = i.length();
      return exports.internalHeight() / s * t
    }