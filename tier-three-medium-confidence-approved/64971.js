/**
 * Module: 64971
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.160Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 64971 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64971: (exports, module, i) => {
    "use strict";
    require.d(module, {
      getImage: () => n
    });
    const state = new Map;

    function o(exports) {
      exports.crossOrigin = "anonymous"
    }

    function n(exports, module, require = o) {
      let nextValue = state.get(exports);
      return void 0 === n && (nextValue = new Promise(((exports, s) => {
        const object = new Image;
        object.onload = () => {
          e(object), object.onload = null, object.onerror = null
        }, object.onerror = () => {
          s(), object.onload = null, object.onerror = null
        }, i(object), object.src = t
      })), state.set(exports, n)), n
    }