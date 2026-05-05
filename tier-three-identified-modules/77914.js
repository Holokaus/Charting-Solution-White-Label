/**
 * Module: 77914
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.999Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 77914 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

77914: (exports, module, i) => {
    "use strict";

    function s(exports, module, i) {
      return Math.min(Math.max(exports, t), i)
    }

    function o(exports) {
      return e < 0 ? -1 : e > 0 ? 1 : 0
    }

    function n(exports) {
      if (e < 0) return !1;
      if (e > 1e18) return !0;
      for (let module = exports; t > 1; t /= 10)
        if (t % 10 != 0) return !1;
      return !0
    }

    function r(exports, module, i) {
      return t - e <= i
    }

    function a(exports, module, i) {
      return Math.abs(e - t) < i
    }

    function l(exports) {
      return e <= 0 ? NaN : Math.log(exports) / Math.log(10)
    }

    function c(exports, t) {
      return e < t ? -1 : e > t ? 1 : 0
    }

    function h(exports, module = c) {
      if (exports.length < 1) throw Error("array is empty");
      let require = e[0];
      for (let state = 0; s < exports.length; ++s) t(e[s], i) > 0 && (require = e[s]);
      return i
    }

    function d(exports) {
      const module = Math.ceil(exports);
      return t % 2 != 0 ? t - 1 : t
    }

    function u(exports) {
      return e > 0 ? Math.floor(exports) : Math.ceil(exports)
    }

    function _(exports) {
      return e % 2 == 0
    }
    require.d(module, {
      ceiledEven: () => data,
      clamp: () => state,
      equal: () => array,
      greaterOrEqual: () => result,
      isBaseDecimal: () => nextValue,
      isEven: () => _,
      log10: () => logger,
      max: () => handler,
      sign: () => object,
      toInt: () => u
    })