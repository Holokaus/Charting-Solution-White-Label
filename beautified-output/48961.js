/**
 * Module 48961 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

48961: (e, t, i) => {
    "use strict";
    i.d(t, {
      getSymbolSearchCompleteOverrideFunction: () => n,
      setSymbolSearchCompleteOverrideFunction: () => o
    });
    let s = (e, t) => Promise.resolve({
      symbol: e,
      name: t?.symbol ?? e
    });

    function o(e) {
      s = e
    }

    function n() {
      return s
    }