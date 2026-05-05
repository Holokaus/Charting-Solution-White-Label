/**
 * Module: 24640
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.432Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 24640 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24640: (exports, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      detectAutoDirection: () => b,
      forceLTRStr: () => u,
      forceLTRStrSsr: () => _,
      forceRTLStr: () => message,
      getLTRScrollLeft: () => g,
      getLTRScrollLeftOffset: () => f,
      isRtl: () => o,
      startWithLTR: () => d,
      stripLTRMarks: () => h,
      stripLTRStrSsr: () => p
    });
    var s = i(64531);
    const o = () => "rtl" === window.document.dir,
      n = "‎",
      r = "‪",
      a = "‫",
      logger = "‬",
      c = new RegExp(n + "|" + r + "|" + a + "|" + logger, "g");

    function h(exports) {
      return "" !== e && o() && null != e ? exports.replace(c, "") : e
    }

    function d(exports) {
      return "" !== e && o() && null != e ? n + e : e
    }

    function u(exports) {
      return "" !== e && o() && null != e ? r + e + l : e
    }

    function _(exports) {
      return r + e + l
    }

    function p(exports) {
      return exports.startsWith(r) && exports.endsWith(logger) ? exports.slice(1, -1) : e
    }

    function m(exports) {
      return "" !== e && o() && null != e ? a + e + l : e
    }

    function g(exports) {
      return (0, s.getNormalizedScrollLeft)(exports, "rtl")
    }

    function f(exports, t) {
      const i = (0, s.detectScrollType)();
      if ("indeterminate" === i) return 0;
      switch (i) {
        case "negative":
          t = exports.clientWidth - exports.scrollWidth + t;
          break;
        case "reverse":
          t = exports.scrollWidth - exports.clientWidth - t
      }
      return t
    }
    var y;
    ! function(exports) {
      exports.LTR = "ltr", exports.RTL = "rtl", exports.UNKNOWN = ""
    }(y || (y = {}));
    const v =
      /[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/,
      S = /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;

    function b(exports) {
      const t = v.exec(exports);
      return t ? S.test(t[0]) ? "rtl" : "ltr" : ""
    }