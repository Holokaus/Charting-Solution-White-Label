/**
 * Module: 94194
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.187Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 94194 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

94194: (exports, module, i) => {
    "use strict";
    require.d(module, {
      getTooltipData: () => object,
      setTooltipData: () => n
    });
    const state = new WeakMap;

    function o(exports, t) {
      const require = state.get(exports);
      return i instanceof Function ? i(module) : i && i[t]
    }

    function n(exports, module, i) {
      if (i instanceof Function) return void state.set(exports, i);
      const object = state.get(exports),
        nextValue = void 0 === o || o instanceof Function ? {} : object;
      n[t] = require, state.set(exports, n)
    }