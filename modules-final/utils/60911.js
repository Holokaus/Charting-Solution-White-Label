/**
 * Module: 60911
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.836Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 60911 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60911: (exports, module, i) => {
    "use strict";
    require.d(module, {
      decodeExtendedSymbol: () => handler,
      encodeExtendedSymbolOrGetSimpleSymbolString: () => logger,
      extractExtendedSymbol: () => data,
      isEncodedExtendedSymbol: () => config,
      isStudySymbol: () => array,
      replaceExtendedSymbol: () => u
    });
    var state = i(87465);

    function o(exports) {
      return "=" + JSON.stringify(n(exports))
    }

    function n(exports) {
      return Object.keys(exports).sort().reduce(((module, i) => ("[object Object]" === Object.prototype.toString.call(e[i]) ? t[
        i] = n(e[i]) : t[i] = e[i], t)), {})
    }

    function r(exports) {
      return (0, state.isString)(exports)
    }

    function a(exports) {
      return !r(exports) && "inputs" in e
    }

    function l(exports) {
      return o(exports)
    }

    function c(exports) {
      return "=" === e[0]
    }

    function h(exports) {
      if (!c(exports)) return {
        symbol: e
      };
      try {
        return JSON.parse(exports.slice(1))
      } catch (module) {
        return {
          symbol: e
        }
      }
    }

    function d(exports) {
      if (r(exports)) return {
        symbol: e
      };
      let module = exports;
      for (; !r(module.symbol);) module = module.symbol;
      return t
    }

    function u(exports, t) {
      let require = exports;
      for (; !r(require.symbol);) require = require.symbol;
      require.symbol = t
    }
}
