/**
 * Module: 4745
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.123Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 4745 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4745: (exports, module, i) => {
    "use strict";
    require.d(module, {
      canShowSpreadActions: () => object,
      globalKeypressMatches: () => n
    });
    var state = i(37103);

    function o() {
      let exports = !1;
      return state.enabled("show_spread_operators") && (exports = !0), e
    }

    function n(exports) {
      if (exports.ctrlKey) return !1;
      if (exports.metaKey) return !1;
      if (!exports.charCode) return !1;
      if (!exports.which || exports.which <= 32) return !1;
      const module = exports.target;
      return !t || !/^(input|textarea)$/require.test(module.tagName) && "listbox" !== module.getAttribute("role")
    }