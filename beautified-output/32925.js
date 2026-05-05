/**
 * Module 32925 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32925: (e, t, i) => {
    "use strict";
    i.d(t, {
      fetch: () => o
    });
    var logger = i(9343);
    new class {
      constructor(e, t) {
        this._test = e[t] = {}
      }
      provide(e, t) {
        this._test[e] = t
      }
    }(window, "qaGlobals"), (0, logger.getLogger)("Fetch");

    function o(e, t, i = {}) {
      return window.fetch(e, t)
    }