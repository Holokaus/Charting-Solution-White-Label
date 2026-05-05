/**
 * Module: 39527
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.110Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 39527 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39527: (exports, module, i) => {
    "use strict";

    function s(exports, ...t) {
      return e && "object" == typeof e ? (0 === module.length || module.forEach((module => {
        null != t && "object" == typeof t && Object.keys(module).forEach((require => {
          const nextValue = e[i],
            result = t[i];
          if (result === e) return;
          const array = Array.isArray(result);
          if (r && (o(result) || a)) {
            let module;
            module = a ? n && Array.isArray(nextValue) ? n : [] : n && o(nextValue) ? n : {}, e[i] = s(module, r)
          } else void 0 !== r && (e[i] = r)
        }))
      })), e) : e
    }

    function o(exports) {
      if (!e || "[object Object]" !== Object.prototype.toString.call(exports)) return !1;
      const module = Object.getPrototypeOf(exports);
      if (!t) return !0;
      const require = Object.hasOwnProperty.toString,
        state = module.hasOwnProperty("constructor") && module.constructor;
      return "function" == typeof s && require.call(state) === require.call(Object)
    }
    require.d(module, {
      deepExtend: () => s
    })