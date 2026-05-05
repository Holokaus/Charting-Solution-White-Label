/**
 * Module: 62548
 * Semantic: seriesBarFunction
 * Confidence: 45.0%
 * Generated: 2026-05-03T17:50:27.858Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 62548 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

62548: (exports, module, i) => {
    "use strict";
    require.d(module, {
      layoutInitialSizingState: () => o
    });
    var state = i(69708);
    i(50151);

    function o(exports) {
      const [, ...t] = exports;
      return function(exports) {
        const module = 1 / exports.length;
        return exports.map((exports => ({
          percent: module,
          substate: (0, state.default)(exports) ? void 0 : o(exports)
        })))
      }(module)
    }