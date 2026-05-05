/**
 * Module 97725 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

97725: (e, t, i) => {
    "use strict";

    function s(e) {
      return o(e, 2)
    }

    function o(e, t = 2) {
      const i = e.toString();
      return "0".repeat(Math.max(0, t - i.length)) + i
    }
    i.d(t, {
      addLeadingZero: () => s,
      addLeadingZeros: () => o
    })