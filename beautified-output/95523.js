/**
 * Module 95523 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95523: (e, t, i) => {
    "use strict";
    i.d(t, {
      parseTzOffset: () => o
    });
    var s = i(37236);

    function o(e, t = Date.now()) {
      const i = (0, s.get_timezone)(e).offset_utc(t);
      let o = "";
      const n = i / 1e3 / 60 / 60;
      n % 1 && (o = ":" + Math.round(Math.abs(n % 1 * 60)).toString().padStart(2, "0"));
      let r = "";
      return r = n > 0 ? "+" + (n - n % 1) + o : 0 === n ? "" : String(n - n % 1 + o), {
        offset: i,
        string: "UTC" + r
      }
    }