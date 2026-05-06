/**
 * Module 77914 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

77914: (e, t, i) => {
    "use strict";

    function s(e, t, i) {
      return Math.min(Math.max(e, t), i)
    }

    function o(e) {
      return e < 0 ? -1 : e > 0 ? 1 : 0
    }

    function n(e) {
      if (e < 0) return !1;
      if (e > 1e18) return !0;
      for (let t = e; t > 1; t /= 10)
        if (t % 10 != 0) return !1;
      return !0
    }

    function r(e, t, i) {
      return t - e <= i
    }

    function a(e, t, i) {
      return Math.abs(e - t) < i
    }

    function l(e) {
      return e <= 0 ? NaN : Math.log(e) / Math.log(10)
    }

    function c(e, t) {
      return e < t ? -1 : e > t ? 1 : 0
    }

    function h(e, t = c) {
      if (e.length < 1) throw Error("array is empty");
      let i = e[0];
      for (let s = 0; s < e.length; ++s) t(e[s], i) > 0 && (i = e[s]);
      return i
    }

    function d(e) {
      const t = Math.ceil(e);
      return t % 2 != 0 ? t - 1 : t
    }

    function u(e) {
      return e > 0 ? Math.floor(e) : Math.ceil(e)
    }

    function _(e) {
      return e % 2 == 0
    }
    i.d(t, {
      ceiledEven: () => d,
      clamp: () => s,
      equal: () => a,
      greaterOrEqual: () => r,
      isBaseDecimal: () => n,
      isEven: () => _,
      log10: () => l,
      max: () => h,
      sign: () => o,
      toInt: () => u
    })