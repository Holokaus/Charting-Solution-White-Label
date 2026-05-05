/**
 * Module: 52706
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.141Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 52706 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

52706: (exports, module, i) => {
    "use strict";

    function s(exports) {
      if (void 0 === e) return null;
      const module = exports.match(/(delayed_streaming)_(\d+)/);
      return null === t ? null : {
        mode: t[1],
        interval: parseInt(t[2])
      }
    }

    function o(exports) {
      const module = s(exports.update_mode);
      return null === t || (exports.update_mode = module.mode, exports.update_mode_seconds = module.interval), e
    }
    require.r(module), require.d(module, {
      normalizeUpdateMode: () => object,
      parseUpdateMode: () => s
    })