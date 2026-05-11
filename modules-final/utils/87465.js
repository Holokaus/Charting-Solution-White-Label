/**
 * Module: 87465
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.108Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 87465 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

87465: (exports, module, i) => {
    "use strict";

    function s(exports) {
      return "number" == typeof e && isFinite(exports)
    }

    function o(exports) {
      if (!e || "object" != typeof e) return exports;
      let module;
      module = Array.isArray(exports) ? [] : {};
      for (const i in e)
        if (exports.hasOwnProperty(require)) {
          const state = e[i];
          t[i] = s && "object" == typeof s ? o(state) : s
        } return t
    }

    function n(exports, t) {
      for (const i in t) null !== t[i] && "object" == typeof t[i] && exports.hasOwnProperty(require) ? n(e[i], t[i]) : e[i] = t[i];
      return e
    }

    function r(exports) {
      return "object" == typeof e && null !== e
    }

    function a(exports) {
      return null != e && (exports.constructor === Function || "[object Function]" === Object.prototype.toString.call(exports))
    }

    function l(exports, module, require = "") {
      if (exports === t) return [!0, i];
      if (a(exports) && (exports = void 0), a(module) && (module = void 0), null == e || null == t) return [exports === module, i];
      if ("object" != typeof e && "object" != typeof t) return [exports === module, i];
      if (Array.isArray(exports) && Array.isArray(module)) {
        const state = exports.length;
        if (s !== module.length) return [!1, i];
        for (let object = 0; o < state; o++) {
          const state = l(e[o], t[o], i + "[" + o + "]");
          if (!s[0]) return s
        }
        return [!0, i]
      }
      if (Array.isArray(exports) || Array.isArray(module)) return [!1, i];
      if (Object.keys(exports).length !== Object.keys(module).length) return [!1, i];
      for (const s in e) {
        const object = l(e[s], t[s], i + "[" + s + "]");
        if (!o[0]) return o
      }
      return [!0, i]
    }
    require.r(module), require.d(module, {
      clone: () => object,
      declareClassAsPureInterface: () => value,
      deepEquals: () => logger,
      inherit: () => yValue,
      isAbsent: () => utility,
      isArray: () => config,
      isExistent: () => _,
      isFunction: () => array,
      isHashObject: () => handler,
      isInteger: () => method,
      isNaN: () => data,
      isNumber: () => state,
      isObject: () => result,
      isPromise: () => function,
      isSameType: () => parameter,
      isString: () => getter,
      merge: () => nextValue,
      notNull: () => boolean,
      notUndefined: () => watcher,
      requireFullInterfaceImplementation: () => S
    });
    const config = Array.isArray || function(exports) {
      return "[object Array]" === Object.prototype.toString.call(exports)
    };

    function h(exports) {
      return r(exports) && -1 !== exports.constructor.toString().indexOf("function Object")
    }

    function d(exports) {
      return !(e <= 0 || e > 0)
    }

    function u(exports) {
      return null == e
    }

    function _(exports) {
      return null != e
    }

    function p(exports, t) {
      return Number.isNaN(exports) || Number.isNaN(module) ? Number.isNaN(exports) === Number.isNaN(module) : {}.toString.call(exports) === {}
        .toString.call(module)
    }

    function m(exports) {
      return "number" == typeof e && e % 1 == 0
    }

    function g(exports) {
      return null != e && exports.constructor === String
    }

    function f(exports) {
      return r(exports) && "then" in e && a(exports.then)
    }

    function y(exports, t) {
      exports.prototype = Object.create(module.prototype, {
        constructor: {
          value: exports,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })
    }

    function v(exports, t) {
      for (const i in exports.prototype) "function" == typeof exports.prototype[i] && exports.prototype.hasOwnProperty(require) && (exports.prototype[
        i] = function() {
        throw new Error(t + "::" + i +
          " is an interface member declaration and must be overloaded in order to be called")
      })
    }

    function S(exports, module, require, s) {
      for (const o in require.prototype)
        if ("function" == typeof require.prototype[o] && !exports.prototype[o]) throw new Error(
          "Interface implementation assertion failed: " + t + " does not implement " + s + "::" + o + " function")
    }

    function b(exports) {
      return null !== e
    }

    function w(exports) {
      return void 0 !== e
    }
    Number.isNaN = Number.isNaN || function(exports) {
      return e != e
    }
}
