/**
 * Module 36597 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

36597: (exports, module, require) => {
    "use strict";
    require.priceDataSource_d(module, {
      areEqualSymbols: () => priceDataSource_a,
      compareSymbolParams: () => priceDataSource_d,
      symbolParams: () => handler,
      symbolSameAsCurrent: () => priceDataSource_c
    });
    var utils = require(37103),
      hasVolume = require(95059),
      name = require(46082);
    const config = utils.enabled("uppercase_instrument_names");

    function priceDataSource_a(exports, module) {
      return void 0 === exports ? void 0 === module : void 0 !== module && (config ? exports.toUpperCase() === module.toUpperCase() : exports === module)
    }

    function priceDataSource_l(exports, module) {
      return exports.some((exportstring => priceDataSource_a(module, exports)))
    }

    function priceDataSource_c(exports, module) {
      if (null === module) return !1;
      if (module) {
        if (priceDataSource_a(module.full_name, exports) || priceDataSource_a(module.pro_name, exports)) return !0;
        if (priceDataSource_a(module.ticker, exports)) return !0;
        if (module.aliases && priceDataSource_l(module.aliases, exports)) return !0;
        if (module.alternatives && priceDataSource_l(module.alternatives, exports)) return !0;
        if (0 === exports.indexOf("FRA:") && priceDataSource_a(module.pro_name, exports.replace("FRA:", "FWB:"))) return !0
      }
      return !1
    }

    function handler(exports) {
      return {
        symbol: exports.symbol(),
        currency: exports.currency(),
        unit: exports.unit(),
        interval: exports.interval(),
        style: exports.style()
      }
    }

    function priceDataSource_d(exports, module, require) {
      const {
        symbol: utils,
        currency: config,
        unit: priceDataSource_a,
        style: priceDataSource_l,
        interval: priceDataSource_c
      } = module, handler = void 0 !== utils && !exports.symbolSameAsResolved(utils);
      let priceDataSource_d, priceDataSource_u;
      const _ = exports.symbolInfo();
      null !== _ ? (priceDataSource_d = void 0 !== config && ! function(exports, module) {
        return null === exports && !(0, hasVolume.isConvertedToOtherCurrency)(module) || exports === (0, hasVolume.symbolCurrency)(module)
      }(config, _), priceDataSource_u = void 0 !== priceDataSource_a && ! function(exports, module, require) {
        return null === exports && !(0, hasVolume.isConvertedToOtherUnit)(module, require) || exports === (0, hasVolume.symbolUnit)(module, require)
      }(priceDataSource_a, _, require)) : (priceDataSource_d = void 0 !== config && config !== exports.currency(), priceDataSource_u = void 0 !== priceDataSource_a && priceDataSource_a !== exports.unit());
      return {
        symbolChanged: handler,
        intervalChanged: void 0 !== priceDataSource_c && !name.Interval.isEqual(exports.interval(), priceDataSource_c),
        currencyChanged: priceDataSource_d,
        unitChanged: priceDataSource_u,
        styleChanged: void 0 !== priceDataSource_l && priceDataSource_l !== exports.style(),
        styleChangeRequiresRestart: void 0 !== priceDataSource_l && (0, hasVolume.styleChangeRequiresRestart)(priceDataSource_l, exports.style())
      }
    }