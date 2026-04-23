/**
 * Module 10718 - Auto-beautified from TradingView webpack bundle
 *
 * @module 10718
 * @date 2026-04-23
 * @size 2381 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 429, 2507, 3762, 6816, 11542, 12179, 13132, 13534, 14530, 14568, 26899, 27072, 28865, 32084, 46450, 53786, 62310, 92767, 95322
 *
 * Exports:
 *   - availableDateFormats (internal: v)
 *   - dateFormatFunctions (internal: f)
 *   - defaultDateFormat (internal: S)
 *   - getDateFormatWithWeekday (internal: y)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

10718: (e, t, i) => {
    "use strict";
    i.d(t, {
      availableDateFormats: () => v,
      dateFormatFunctions: () => f,
      defaultDateFormat: () => S,
      getDateFormatWithWeekday: () => y
    });
    var s = i(11542),
      o = i(28865),
      n = i(95322);
    const r = {
        1: () => s.t(null, void 0, i(62310)),
        2: () => s.t(null, void 0, i(2507)),
        3: () => s.t(null, void 0, i(92767)),
        4: () => s.t(null, void 0, i(27072)),
        5: () => s.t(null, {
          context: "short"
        }, i(13132)),
        6: () => s.t(null, void 0, i(429)),
        7: () => s.t(null, void 0, i(53786)),
        8: () => s.t(null, void 0, i(46450)),
        9: () => s.t(null, void 0, i(6816)),
        10: () => s.t(null, void 0, i(12179)),
        11: () => s.t(null, void 0, i(26899)),
        12: () => s.t(null, void 0, i(32084))
      },
      a = {
        1: () => s.t(null, void 0, i(14568)),
        2: () => s.t(null, void 0, i(13534)),
        3: () => s.t(null, void 0, i(14530)),
        4: () => s.t(null, void 0, i(3762))
      },
      l = (e, t) => (t ? e.getMonth() : e.getUTCMonth()) + 1,
      c = (e, t) => t ? e.getFullYear() : e.getUTCFullYear(),
      h = (e, t) => e.toLocaleDateString(window.language ? (0, o.getIsoLanguageCodeFromLanguage)(window.language) : void 0, {
        weekday: "short",
        timeZone: "local" === t ? void 0 : t
      }),
      d = (e, t) => a[((e, t) => Math.floor((l(e, t) - 1) / 3) + 1)(e, t)](),
      u = (e, t) => (0, n.numberToStringWithLeadingZero)(((e, t) => t ? e.getDate() : e.getUTCDate())(e, t), 2),
      _ = (e, t) => r[l(e, t)](),
      p = (e, t) => (0, n.numberToStringWithLeadingZero)(l(e, t), 2),
      m = (e, t) => (0, n.numberToStringWithLeadingZero)(c(e, t) % 100, 2),
      g = (e, t) => (0, n.numberToStringWithLeadingZero)(c(e, t), 4),
      f = {
        "qq 'yy": (e, t) => `${d(e,t)} '${m(e,t)}`,
        "qq yyyy": (e, t) => `${d(e,t)} ${g(e,t)}`,
        "dd MMM 'yy": (e, t) => `${u(e,t)} ${_(e,t)} '${m(e,t)}`,
        "MMM 'yy": (e, t) => `${_(e,t)} '${m(e,t)}`,
        "MMM dd, yyyy": (e, t) => `${_(e,t)} ${u(e,t)}, ${g(e,t)}`,
        "MMM yyyy": (e, t) => `${_(e,t)} ${g(e,t)}`,
        "MMM dd": (e, t) => `${_(e,t)} ${u(e,t)}`,
        "dd MMM": (e, t) => `${u(e,t)} ${_(e,t)}`,
        "yyyy-MM-dd": (e, t) => `${g(e,t)}-${p(e,t)}-${u(e,t)}`,
        "yy-MM-dd": (e, t) => `${m(e,t)}-${p(e,t)}-${u(e,t)}`,
        "yy/MM/dd": (e, t) => `${m(e,t)}/${p(e,t)}/${u(e,t)}`,
        "yyyy/MM/dd": (e, t) => `${g(e,t)}/${p(e,t)}/${u(e,t)}`,
        "dd-MM-yyyy": (e, t) => `${u(e,t)}-${p(e,t)}-${g(e,t)}`,
        "dd-MM-yy": (e, t) => `${u(e,t)}-${p(e,t)}-${m(e,t)}`,
        "dd/MM/yy": (e, t) => `${u(e,t)}/${p(e,t)}/${m(e,t)}`,
        "dd/MM/yyyy": (e, t) => `${u(e,t)}/${p(e,t)}/${g(e,t)}`,
        "MM/dd/yy": (e, t) => `${p(e,t)}/${u(e,t)}/${m(e,t)}`,
        "MM/dd/yyyy": (e, t) => `${p(e,t)}/${u(e,t)}/${g(e,t)}`
      };

    function y(e, t) {
      return "ja" === window.language ? (i, s) => `${f[e](i,s)} (${h(i,t)})` : (i, s) => `${h(i,t)} ${f[e](i,s)}`
    }
    const v = Object.keys(f),
      S = () => -1 !== ["ja", "ko", "zh", "zh_TW"].indexOf(window.language || "") ? "yyyy-MM-dd" : "dd MMM 'yy"
