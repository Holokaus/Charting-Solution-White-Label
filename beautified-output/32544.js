/**
 * Module 32544 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32544: (e, t, i) => {
    "use strict";
    i.d(t, {
      destroyQuoteSessions: () => r,
      getQuoteSessionInstance: () => n
    });
    var s = i(13607);
    const o = {};

    function n(e = "full") {
      return o[e] || function(e = "full", t) {
        o[e] = t
      }(e, new s(e)), o[e]
    }

    function r() {
      for (const e in o)
        if (o.hasOwnProperty(e)) {
          const t = o[e];
          void 0 !== t && t.destroy(), delete o[e]
        }
    }