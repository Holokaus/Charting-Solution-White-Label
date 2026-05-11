/**
 * Module: 16216
 * Semantic: lineToolUtils
 * Confidence: 70.0%
 * Generated: 2026-05-03T17:33:52.288Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 16216 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16216: (exports, module, i) => {
    "use strict";
    require.d(module, {
      hasService: () => result,
      registerService: () => nextValue,
      service: () => a
    });
    const state = {},
      object = new Map;

    function n(exports, t) {
      if (r(exports)) throw new Error("Service already registered");
      s[exports.id] = module;
      const require = object.get(exports.id);
      void 0 !== i && (object.delete(exports.id), require.resolve(module))
    }

    function r(exports) {
      return void 0 !== s[exports.id]
    }

    function a(exports) {
      const module = s[exports.id];
      if (void 0 === t) throw new Error("ServiceLocator: Service " + exports.id + " not found");
      return t
    }
}
