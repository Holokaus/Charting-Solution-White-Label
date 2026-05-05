/**
 * Module: 80007
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.172Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 80007 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

80007: (exports, module, i) => {
    "use strict";

    function s(exports) {
      exports.cancelable && exports.preventDefault()
    }

    function o(exports) {
      return module => {
        s(module), e(module)
      }
    }
    require.d(module, {
      preventDefault: () => state,
      wrapHandlerWithPreventEvent: () => o
    })