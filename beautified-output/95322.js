/**
 * Module 95322 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95322: (e, t, i) => {
    "use strict";
    i.d(t, {
      numDependencyFormatter: () => n,
      numberToStringWithLeadingZero: () => o
    });
    var s = i(87465);

    function o(e, t) {
      if (!(0, s.isNumber)(e)) return "n/a";
      if (!(0, s.isInteger)(t)) throw new TypeError("invalid length");
      if (t < 0 || t > 24) throw new TypeError("invalid length");
      if (0 === t) return e.toString();
      return ("00000000000000000000" + e.toString()).slice(-t)
    }

    function n(e) {
      const t = new Map;
      return i => {
        const s = i ?? -1;
        let o = t.get(s);
        return o || (o = e(i), t.set(s, o)), o
      }
    }