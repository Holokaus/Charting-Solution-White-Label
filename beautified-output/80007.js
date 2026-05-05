/**
 * Module 80007 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

80007: (e, t, i) => {
    "use strict";

    function s(e) {
      e.cancelable && e.preventDefault()
    }

    function o(e) {
      return t => {
        s(t), e(t)
      }
    }
    i.d(t, {
      preventDefault: () => s,
      wrapHandlerWithPreventEvent: () => o
    })