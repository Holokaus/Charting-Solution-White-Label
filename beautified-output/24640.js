/**
 * Module 24640 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24640: (e, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      detectAutoDirection: () => b,
      forceLTRStr: () => u,
      forceLTRStrSsr: () => _,
      forceRTLStr: () => m,
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
      l = "‬",
      c = new RegExp(n + "|" + r + "|" + a + "|" + l, "g");

    function h(e) {
      return "" !== e && o() && null != e ? e.replace(c, "") : e
    }

    function d(e) {
      return "" !== e && o() && null != e ? n + e : e
    }

    function u(e) {
      return "" !== e && o() && null != e ? r + e + l : e
    }

    function _(e) {
      return r + e + l
    }

    function p(e) {
      return e.startsWith(r) && e.endsWith(l) ? e.slice(1, -1) : e
    }

    function m(e) {
      return "" !== e && o() && null != e ? a + e + l : e
    }

    function g(e) {
      return (0, s.getNormalizedScrollLeft)(e, "rtl")
    }

    function f(e, t) {
      const i = (0, s.detectScrollType)();
      if ("indeterminate" === i) return 0;
      switch (i) {
        case "negative":
          t = e.clientWidth - e.scrollWidth + t;
          break;
        case "reverse":
          t = e.scrollWidth - e.clientWidth - t
      }
      return t
    }
    var y;
    ! function(e) {
      e.LTR = "ltr", e.RTL = "rtl", e.UNKNOWN = ""
    }(y || (y = {}));
    const v =
      /[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/,
      S = /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;

    function b(e) {
      const t = v.exec(e);
      return t ? S.test(t[0]) ? "rtl" : "ltr" : ""
    }