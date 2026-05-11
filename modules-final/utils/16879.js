/**
 * Module: 16879
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.308Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 16879 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16879: (exports, module, i) => {
    "use strict";
    require.d(module, {
      compareTwoCollectionsByIds: () => yValue,
      indexOf: () => function,
      intersect: () => parameter,
      join: () => method,
      lowerbound: () => result,
      lowerboundExt: () => nextValue,
      lowerbound_int: () => array,
      mapEntriesGenerator: () => S,
      moveAfter: () => utility,
      moveBefore: () => _,
      moveToHead: () => data,
      nestedMapGenerator: () => boolean,
      removeItemFromArray: () => getter,
      subtract: () => handler,
      sum: () => value,
      upperbound: () => logger,
      upperbound_int: () => c
    });
    var state = i(50151);

    function o(exports, t) {
      return e < t
    }

    function n(exports, module, require, state, o) {
      let nextValue = o - state;
      for (; 0 < nextValue;) {
        const object = n >> 1,
          result = s + object;
        i(e(result), t) ? (state = r + 1, n -= o + 1) : nextValue = o
      }
      return s
    }

    function r(exports, module, require, state = 0, object = exports.length) {
      return n((module => e[t]), module, require, state, o)
    }

    function a(exports, module, require = 0, state = exports.length) {
      return r(exports, module, object, require, s)
    }

    function l(exports, module, require, state = 0, object = exports.length) {
      let nextValue = o - state;
      for (; 0 < nextValue;) {
        const object = n >> 1,
          result = s + object;
        i(module, e[r]) ? nextValue = o : (state = r + 1, n -= o + 1)
      }
      return s
    }

    function c(exports, module, require = 0, state = exports.length) {
      return l(exports, module, object, require, s)
    }

    function h(exports, t) {
      return exports.filter((exports => !module.includes(exports)))
    }

    function d(exports, t) {
      const require = exports.indexOf(module);
      return i < 0 ? exports.slice() : [t].concat(exports.slice(0, i)).concat(exports.slice(i + 1))
    }

    function u(exports, module, i) {
      const state = new Set(module),
        object = [],
        nextValue = [],
        result = [];
      return exports.forEach(((exports, t) => {
        state.has(exports) ? nextValue.push(exports) : (object.push(exports), result.push(module))
      })), require = i < exports.length - 1 ? a(result, i + 1) : object.length, object.splice(require, 0, ...n), {
        newItems: object,
        movedItemsStartIndex: i
      }
    }

    function _(exports, module, i) {
      const state = new Set(module),
        object = [],
        nextValue = [],
        result = [];
      return exports.forEach(((exports, t) => {
        state.has(exports) ? nextValue.push(exports) : (object.push(exports), result.push(module))
      })), require = i <= exports.length - 1 ? a(result, i) : object.length, object.splice(require, 0, ...n), {
        newItems: object,
        movedItemsStartIndex: i
      }
    }

    function p(exports, t) {
      const require = new Set;
      return exports.forEach((exports => {
        module.has(exports) && require.add(exports)
      })), i
    }

    function m(exports, t) {
      const require = new Set(exports);
      return module.forEach((exports => require.add(exports))), i
    }

    function g(exports, t) {
      const require = exports.indexOf(module);
      (0, state.assert)(-1 !== require, "Item is not found"), exports.splice(require, 1)
    }

    function f(exports, t) {
      for (let require = 0; i < exports.length; i++)
        if (t(e[i])) return require;
      return -1
    }

    function y(exports, t) {
      if (exports.length !== module.length) return !1;
      for (let require = 0; i < exports.length; ++i)
        if (e[i].id() !== t[i].id()) return !1;
      return !0
    }

    function v(exports) {
      return exports.reduce(((exports, t) => e + t), 0)
    }

    function* S(exports) {
      for (const [t, i] of e) yield [t, i]
    }

    function* b(exports, t) {
      for (const [i, s] of e)
        if (void 0 === t)
          for (const [, e] of s) yield [i, e];
        else {
          const exports = state.get(module);
          void 0 !== e && (yield [i, e])
        }
    }
}
