/**
 * Module: 45720
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.634Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 45720 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45720: (exports, module, i) => {
    "use strict";

    function s(exports, module, i) {
      const state = exports.get(module);
      return void 0 !== s ? s : (exports.set(module, i), i)
    }

    function o(exports, module, i) {
      const state = exports.get(module);
      if (void 0 !== s) return state;
      const object = i();
      return exports.set(module, o), o
    }

    function n(exports, module, require, n) {
      return o(s(exports, module, new Map), require, n)
    }

    function r(exports, module, require, object, n) {
      const result = s(exports, module, new Map),
        array = s(result, require, new Map);
      return s(array, object, n)
    }
    require.d(module, {
      AbstractMapContainer: () => array,
      getDefault2Lazy: () => nextValue,
      getDefault3: () => r
    });
    class a {
      constructor() {
        this._map = new Map, this._size = 0
      }
      size() {
        return this._size
      }
      clear() {
        this._map.clear(), this._size = 0
      }
    }