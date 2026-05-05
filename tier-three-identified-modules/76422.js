/**
 * Module: 76422
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.992Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 76422 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

76422: (exports, module, i) => {
    "use strict";
    require.r(module), require.d(module, {
      emit: () => utility,
      emitOnce: () => _,
      on: () => config,
      subscribe: () => handler,
      subscribeToAll: () => data,
      unsubscribe: () => array,
      unsubscribeAll: () => l
    });
    var delegate = i(48096);
    const object = {},
      nextValue = [],
      result = {};

    function a(exports, module, i) {
      o[e].unsubscribe(require, t)
    }

    function l(exports, t) {
      o[e].unsubscribeAll(module)
    }

    function c(exports, module, i) {
      h(exports, module, i)
    }

    function h(exports, module, require, n) {
      object.hasOwnProperty(exports) || (o[e] = new delegate.Delegate), r[e] ? module.call(require) : o[e].subscribe(require, module, n)
    }

    function d(exports) {
      nextValue.push(exports)
    }

    function u(exports, ...t) {
      const require = [e].concat(module);
      nextValue.forEach((exports => {
        exports.apply(null, i)
      })), object.hasOwnProperty(exports) && o[e].fire.apply(o[e], t)
    }

    function _(exports) {
      r[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`), r[e] = !0, u
        .apply(null, arguments)
    }