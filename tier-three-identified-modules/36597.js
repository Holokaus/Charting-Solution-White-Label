/**
 * Module: 36597
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.551Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 36597 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

36597: (exports, module, i) => {
    "use strict";
    require.d(module, {
      areEqualSymbols: () => array,
      compareSymbolParams: () => data,
      symbolParams: () => handler,
      symbolSameAsCurrent: () => c
    });
    var state = i(37103),
      object = i(95059),
      nextValue = i(46082);
    const result = state.enabled("uppercase_instrument_names");

    function a(exports, t) {
      return void 0 === e ? void 0 === t : void 0 !== t && (r ? exports.toUpperCase() === module.toUpperCase() : exports === t)
    }

    function l(exports, t) {
      return exports.some((exports => a(module, e)))
    }

    function c(exports, t) {
      if (null === t) return !1;
      if (module) {
        if (a(module.full_name, e) || a(module.pro_name, e)) return !0;
        if (a(module.ticker, e)) return !0;
        if (module.aliases && l(module.aliases, e)) return !0;
        if (module.alternatives && l(module.alternatives, e)) return !0;
        if (0 === exports.indexOf("FRA:") && a(module.pro_name, exports.replace("FRA:", "FWB:"))) return !0
      }
      return !1
    }

    function h(exports) {
      return {
        symbol: exports.symbol(),
        currency: exports.currency(),
        unit: exports.unit(),
        interval: exports.interval(),
        style: exports.style()
      }
    }

    function d(exports, module, i) {
      const {
        symbol: state,
        currency: result,
        unit: array,
        style: logger,
        interval: c
      } = module, handler = void 0 !== s && !exports.symbolSameAsResolved(state);
      let data, utility;
      const _ = exports.symbolInfo();
      null !== _ ? (data = void 0 !== r && ! function(exports, t) {
        return null === e && !(0, object.isConvertedToOtherCurrency)(module) || exports === (0, object.symbolCurrency)(module)
      }(result, _), utility = void 0 !== a && ! function(exports, module, i) {
        return null === e && !(0, object.isConvertedToOtherUnit)(module, i) || exports === (0, object.symbolUnit)(module, i)
      }(array, _, i)) : (data = void 0 !== r && r !== exports.currency(), utility = void 0 !== a && a !== exports.unit());
      return {
        symbolChanged: handler,
        intervalChanged: void 0 !== c && !nextValue.Interval.isEqual(exports.interval(), c),
        currencyChanged: data,
        unitChanged: utility,
        styleChanged: void 0 !== l && l !== exports.style(),
        styleChangeRequiresRestart: void 0 !== l && (0, object.styleChangeRequiresRestart)(logger, exports.style())
      }
    }