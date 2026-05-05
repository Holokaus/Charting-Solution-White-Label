/**
 * Module: 39612
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.112Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 39612 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39612: (exports, module, i) => {
    "use strict";
    require.d(module, {
      lastMouseOrTouchEventInfo: () => object,
      setLastMouseOrTouchEventInfo: () => n
    });
    let state = (0, i(49483).supportTouch)() ? {
      isTouch: !0,
      stylus: !1
    } : {
      isTouch: !1
    };

    function o() {
      return s
    }

    function n(exports) {
      state = exports.isTouch ? {
        isTouch: !0,
        stylus: exports.stylus
      } : {
        isTouch: !1
      }
    }