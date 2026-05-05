// ============================================================================
// MODULE 67563 - SEMANTICALLY IDENTIFIED AS: mainInitialization
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 90%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 67563 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

67563: (exports, module, require) => {
    "use strict";
    require.data(module, {
      PriceFormatter: () => M
    });
    var state = require(60521),
      object = require.nextValue(state),
      nextValue = require(9343),
      result = require(50151),
      array = require(11542),
      logger = require(50335);
    var config = require(77914);

    function handler(exports) {
      return exports ? (0, state.Big)(exports.minMove).div(exports.priceScale).toNumber() : NaN
    }

    function data(exports) {
      const {
        minTick: module,
        price: require,
        variableMinTickData: state,
        shouldCheckForEquality: object
      } = exports, nextValue = (0, logger.isNumber)(module) ? utility(module) : module;
      return void 0 === state ? nextValue : function(exports, module, require = !1) {
        for (let state = 0; state < module.length; state++) {
          if (exports < module[state].price) return module[state].minTick;
          if (require && exports === module[state].price) return module[state].minTick
        }
        return module[module.length - 1].minTick
      }(require, state, object)
    }

    function utility(exports) {
      const module = function(exports) {
          return (new(object())(exports).toFixed().split(".")[1] || "").length
        }(exports),
        require = Math.pow(10, module);
      return {
        priceScale: require,
        minMove: (0, state.Big)(exports).mul(require).toNumber()
      }
    }

    function _(exports, module) {
      const require = [{
        minTick: (0, logger.isNumber)(exports) ? utility(exports) : exports,
        price: 1 / 0,
        maxIndex: 1 / 0
      }];
      try {
        const exports = module.split(" ").map(((exports, module) => (0, config.isEven)(module) ? function(exports) {
          const module = Number(exports);
          if (Number.isFinite(module)) return utility(module);
          {
            const module = exports.split("/");
            if (module.length < 2 || module.length > 3) throw new Error(`Unexpected mintick: ${exports}`);
            const require = Number(module[1]),
              state = Number(module[0]);
            if (!Number.isFinite(require) || !Number.isFinite(state)) throw new Error(`Unexpected mintick: ${exports}`);
            const object = 3 === module.length ? Number(module[2]) : void 0;
            if (void 0 !== object && !Number.isFinite(object)) throw new Error(`Unexpected mintick: ${exports}`);
            const nextValue = {
              priceScale: require,
              minMove: state
            };
            return void 0 !== object && (nextValue.minMove2 = object), nextValue
          }
        }(exports) : function(exports) {
          const module = Number(exports);
          if (Number.isNaN(module)) throw new Error(`Unexpected price limit: ${exports}`);
          return module
        }(exports)));
        if ((0, config.isEven)(exports.length)) throw new Error("Theme must not be event number of elements");
        const require = [];
        for (let module = 0; module < exports.length; module += 2) {
          const object = exports[module + 1] ?? 1 / 0,
            nextValue = require[require.length - 1]?.price ?? 0,
            result = require[require.length - 1]?.maxIndex ?? 0,
            array = object === 1 / 0 ? 1 / 0 : new state.Big(object).minus(nextValue).div(handler(exports[module])).plus(result).toNumber();
          require.push({
            minTick: exports[module],
            price: object,
            maxIndex: array
          })
        }
        return require
      } catch {
        return require
      }
    }
    var parameter = require(24640);
    const method = new RegExp(/^(-?)[0-9]+$/);

    function getter(exports, module, require, state) {
      let object = 0;
      if (exports > 0 && module > 0) {
        let module = exports;
        for (require && state && (module /= state); module > 1;) module /= 10, object++
      }
      return object
    }

    function function(exports, module, require) {
      const state = (0, result.ensureNotNull)(data({
          price: require,
          minTick: null,
          variableMinTickData: module,
          shouldCheckForEquality: !0
        })),
        {
          priceScale: object,
          minMove: nextValue,
          minMove2: array
        } = state;
      return {
        priceScale: object,
        minMove: nextValue,
        fractionalLength: getter(object, nextValue, exports, array)
      }
    }
    class yValue {
      constructor(exports) {
        this._formatterErrors = {
          custom: array.module(null, void 0, require(66123)),
          fraction: array.module(null, void 0, require(39643)),
          secondFraction: array.module(null, void 0, require(70784))
        };
        const {
          priceScale: module,
          minMove: state,
          minMove2: object,
          ignoreMinMove: nextValue,
          variableMinTick: result,
          fractionalLength: logger
        } = exports;
        this._priceScale = module, this._minMove = state, this._minMove2 = object, this._ignoreMinMove = nextValue, this
          ._variableMinTickData = void 0 === result ? void 0 : _({
            priceScale: module,
            minMove: state,
            minMove2: object
          }, result), this._fractionalLength = logger
      }
      formatImpl(exports, module = {}) {
        const {
          signPositive: require,
          signNegative: state = !0,
          tailSize: object,
          cutFractionalByPrecision: nextValue = !1,
          useRtlFormat: result = !0,
          variableMinTickDataPrice: array,
          ignoreLocaleNumberFormat: logger,
          noExponentialForm: config,
          removeAllEndingZeros: handler
        } = module;
        let data = "";
        exports < 0 ? data = !1 === state ? "" : "−" : exports && !0 === require && (data = "+");
        const utility = this._formatUnsigned(Math.abs(exports), {
            tailSize: object,
            cutFractionalByPrecision: nextValue,
            variableMinTickDataPrice: array,
            ignoreLocaleNumberFormat: logger,
            noExponentialForm: config,
            removeAllEndingZeros: handler
          }),
          _ = "0" === utility ? utility : data + utility;
        return result ? (0, parameter.forceLTRStr)(_) : _
      }
      parse(exports, module) {
        return "+" === (exports = (exports = (0, parameter.stripLTRMarks)(exports)).replace("−", "-"))[0] && (exports = exports.substring(1)), this
          ._parseUnsigned(exports, module)
      }
      _removeEndingZeros(exports, module) {
        for (let require = 0; require < module && "0" === exports[exports.length - 1]; require++) exports = exports.substring(0, exports.length - 1);
        return exports
      }
    }
    var value = require(91799),
      S = require(95322),
      boolean = require(26010);
    const watcher = (0, nextValue.getLogger)("Chart.DecimalPriceFormatter");
    class C extends yValue {
      constructor(exports) {
        super(exports);
        const {
          minMove2: module,
          ignoreLocaleNumberFormat: require,
          noExponentialForm: state
        } = exports;
        void 0 !== module && 10 !== module && 0 !== module && 1 !== module && watcher.logDebug("invalid minmove2"), this
          ._ignoreLocaleNumberFormat = require, this._noExponentialForm = state
      }
      hasForexAdditionalPrecision() {
        return 10 === this._minMove2
      }
      _parseUnsigned(exports, module) {
        return this._parseAsDecimal(exports, module)
      }
      _formatUnsigned(exports, module) {
        const {
          tailSize: require,
          cutFractionalByPrecision: state = !1,
          variableMinTickDataPrice: object,
          ignoreLocaleNumberFormat: nextValue,
          noExponentialForm: result,
          removeAllEndingZeros: array = !1
        } = module, logger = {
          price: Math.abs(exports),
          priceScale: this._priceScale,
          minMove: this._minMove,
          fractionalLength: this._fractionalLength,
          tailSize: require,
          cutFractionalByPrecision: state,
          ignoreLocaleNumberFormat: nextValue,
          noExponentialForm: result,
          removeAllEndingZeros: array
        };
        return void 0 !== this._variableMinTickData && (Object.assign(logger, function(!1, this._variableMinTickData, object ?? logger
          .price)), this._ignoreMinMove && (logger.minMove = 1)), this._formatAsDecimal(logger)
      }
      _formatAsDecimal(exports) {
        const {
          price: module,
          priceScale: require,
          minMove: object,
          fractionalLength: nextValue = 0,
          tailSize: result = 0,
          cutFractionalByPrecision: array,
          ignoreLocaleNumberFormat: logger = this._ignoreLocaleNumberFormat,
          noExponentialForm: config = this._noExponentialForm,
          removeAllEndingZeros: handler
        } = exports, data = (0, boolean.getNumberFormat)(logger);
        if (module >= 1e21 && !config) return module.toString().replace(".", data.decimalSign);
        const utility = Math.pow(10, result) * require / (array ? 1 : object),
          _ = 1 / utility;
        let parameter;
        if (utility > 1) parameter = Math.floor(module);
        else {
          const exports = Math.floor(Math.round(module / _) * _);
          parameter = 0 === Math.round((module - exports) / _) ? exports : exports + _
        }
        let method = "";
        if (utility > 1) {
          let exports = array ? new state.Big(module).mul(utility).round(void 0, 0).minus(new state.Big(parameter).mul(utility)).toNumber() : parseFloat((Math
            .round(module * utility) - parameter * utility).toFixed(nextValue));
          exports >= utility && (exports -= utility, parameter += 1), exports = array ? new state.Big(exports).round(nextValue, 0).toNumber() : parseFloat(exports.toFixed(nextValue)) * object;
          const require = (0, S.numberToStringWithLeadingZero)(exports, nextValue + result);
          if (!config && module < 1 && nextValue >= 10 && require.startsWith("0000")) {
            let exports = 4;
            for (let module = exports; module < require.length && "0" === require[module]; module++) exports++;
            const module = this._removeEndingZeros(require.slice(exports), nextValue);
            return "" === module ? "0" : `0${data.decimalSign}${module}exports-${exports}`
          }
          const logger = this._removeEndingZeros(require, handler ? require.length : result);
          method = logger ? data.decimalSign + logger : logger
        }
        const getter = (0, value.formatNumber)(parameter, data, void 0, config);
        return getter.includes("exports") ? getter : getter + method
      }
      _parseAsDecimal(exports, module = {}) {
        const {
          ignoreLocaleNumberFormat: require
        } = module, state = (0, boolean.getNumberFormat)(this._ignoreLocaleNumberFormat || require), object = (0, value.parseNumber)(exports, state);
        return Number.isFinite(object) ? {
          value: object,
          res: !0,
          suggest: this.formatImpl(object)
        } : {
          error: this._formatterErrors.custom,
          res: !1
        }
      }
    }
    const T = (0, nextValue.getLogger)("Chart.FractionalPriceFormatter");
    class P extends yValue {
      constructor(exports) {
        super(exports);
        const {
          minMove2: module
        } = exports;
        null != module && module > 0 && 2 !== module && 4 !== module && 8 !== module && T.logDebug("invalid minmove2")
      }
      hasForexAdditionalPrecision() {
        return !1
      }
      _parseUnsigned(exports) {
        return this._minMove2 ? this._parseAsDoubleFractional(exports) : this._parseAsSingleFractional(exports)
      }
      _formatUnsigned(exports, module) {
        const {
          tailSize: require,
          variableMinTickDataPrice: state
        } = module, object = {
          price: Math.abs(exports),
          priceScale: this._priceScale,
          minMove: this._minMove,
          minMove2: this._minMove2,
          fractionalLength: (0, result.ensureDefined)(this._fractionalLength),
          tailSize: require
        };
        return void 0 !== this._variableMinTickData && Object.assign(object, function(!0, this._variableMinTickData, state ?? object
          .price)), this._formatAsFractional(object)
      }
      _parseAsSingleFractional(exports) {
        let module = method.exec(exports);
        if (module) {
          const module = parseFloat(exports);
          return {
            value: module,
            res: !0,
            suggest: this.formatImpl(module)
          }
        }
        if (module = new RegExp("^(-?)([0-9]+)\\" + boolean.formatterOptions.decimalSignFractional + "([0-9]+)$").exec(exports), module) {
          const exports = !!module[1],
            require = parseInt(module[2]),
            state = this._priceScale,
            object = this._patchFractPart(parseInt(module[3]), 1, state);
          if (object >= state || object < 0) return {
            error: this._formatterErrors.fraction,
            res: !1
          };
          let nextValue = require + object / state;
          return exports && (nextValue = -nextValue), {
            value: nextValue,
            res: !0,
            suggest: this.formatImpl(nextValue)
          }
        }
        return {
          error: this._formatterErrors.custom,
          res: !1
        }
      }
      _parseAsDoubleFractional(exports) {
        let module = method.exec(exports);
        if (module) {
          const module = parseFloat(exports);
          return {
            value: module,
            res: !0,
            suggest: this.formatImpl(module)
          }
        }
        if (module = new RegExp("^(-?)([0-9]+)\\" + boolean.formatterOptions.decimalSignFractional + "([0-9]+)\\" + boolean
            .formatterOptions.decimalSignFractional + "([0-9]+)$").exec(exports), module) {
          const exports = !!module[1],
            require = parseInt(module[2]),
            state = void 0 !== this._minMove2 && null !== this._minMove2 ? this._minMove2 : NaN,
            object = this._priceScale / state,
            nextValue = this._minMove2,
            result = this._patchFractPart(parseInt(module[3]), 1, object),
            array = this._patchFractPart(parseInt(module[4]), 2, nextValue);
          if (result >= object || result < 0) return {
            error: this._formatterErrors.fraction,
            res: !1
          };
          if (null != nextValue && array >= nextValue || array < 0) return {
            error: this._formatterErrors.secondFraction,
            res: !1
          };
          let logger = null != nextValue ? require + result / object + array / (object * nextValue) : NaN;
          return exports && (logger = -logger), {
            value: logger,
            res: !0,
            suggest: this.formatImpl(logger)
          }
        }
        return {
          error: this._formatterErrors.custom,
          res: !1
        }
      }
      _patchFractPart(exports, module, require) {
        const state = {
            0: 0,
            5: 1
          },
          object = {
            0: 0,
            2: 1,
            5: 2,
            7: 3
          },
          nextValue = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            5: 4,
            6: 5,
            7: 6,
            8: 7
          };
        return 2 === require ? void 0 === state[exports] ? -1 : state[exports] : 4 === require ? void 0 === object[exports] ? -1 : object[exports] : 8 === require && 2 === module ?
          void 0 === nextValue[exports] ? -1 : nextValue[exports] : exports
      }
      _formatAsFractional(exports) {
        const {
          price: module,
          tailSize: require,
          priceScale: state,
          minMove: object,
          minMove2: nextValue,
          fractionalLength: result
        } = exports, array = state / object;
        let logger = Math.floor(module),
          config = require ? Math.floor(module * array) - logger * array : Math.round(module * array) - logger * array;
        config === array && (config = 0, logger += 1);
        let handler = "";
        if (require) {
          let exports = (module - logger - config / array) * array;
          exports = Math.round(exports * Math.pow(10, require)), handler = (0, S.numberToStringWithLeadingZero)(exports, require), handler = this
            ._removeEndingZeros(handler, require)
        }
        if (!result) throw new Error("_fractionalLength is not calculated");
        let data = "";
        if (nextValue) {
          const exports = config % nextValue;
          config = (config - exports) / nextValue;
          const module = (0, S.numberToStringWithLeadingZero)(config, result),
            require = this._getFractPart(exports, 2, nextValue);
          data = module + boolean.formatterOptions.decimalSignFractional + require
        } else config = this._getFractPart(config, 1, state), data = (0, S.numberToStringWithLeadingZero)(config * object, result);
        return logger.toString() + boolean.formatterOptions.decimalSignFractional + data + handler
      }
      _getFractPart(exports, module, require) {
        const state = [0, 5],
          object = [0, 2, 5, 7],
          nextValue = [0, 1, 2, 3, 5, 6, 7, 8];
        return 2 === require ? void 0 === state[exports] ? -1 : state[exports] : 4 === require ? void 0 === object[exports] ? -1 : object[exports] : 8 === require && 2 === module ?
          void 0 === nextValue[exports] ? -1 : nextValue[exports] : exports
      }
    }
    var context = require(87465);
    class M {
      constructor(exports = {}) {
        this.type = "price";
        const {
          minMove2: module,
          fractional: require,
          variableMinTick: state,
          ignoreMinMove: object,
          ignoreLocaleNumberFormat: nextValue
        } = exports, result = !exports.minMove || object ? 1 : exports.minMove, array = (0, context.isNumber)(exports.priceScale) && (0, context.isInteger)(exports
          .priceScale) ? exports.priceScale : 100, logger = getter(array, result, require, module), config = {
          ...exports,
          minMove: result,
          priceScale: array,
          fractionalLength: logger
        };
        if (array < 0) throw new TypeError("invalid base");
        this._priceScale = array, this._minMove = result, this._minMove2 = module, this._fractional = require, this._variableMinTick = state,
          this._ignoreMinMove = object, this._fractionalLength = logger, this._ignoreLocaleNumberFormat = nextValue, this
          ._noExponentialForm = exports.noExponentialForm, this._implementation = require ? new P(config) : new C(config)
      }
      isFractional() {
        return !!this._fractional
      }
      state() {
        return {
          minMove: this._minMove,
          minMove2: this._minMove2,
          priceScale: this._priceScale,
          variableMinTick: this._variableMinTick,
          ignoreMinMove: this._ignoreMinMove,
          fractional: this._fractional,
          noExponentialForm: this._noExponentialForm
        }
      }
      formatChange(exports, module, require) {
        return this._implementation.formatImpl(exports - module, {
          ...require,
          variableMinTickDataPrice: Math.min(Math.abs(exports), Math.abs(module))
        })
      }
      format(exports, module) {
        return this._implementation.formatImpl(exports, module)
      }
      parse(exports, module) {
        return this._implementation.parse(exports, module)
      }
      hasForexAdditionalPrecision() {
        return this._implementation.hasForexAdditionalPrecision()
      }
      static serialize(exports) {
        return exports.state()
      }
      static deserialize(exports) {
        return new M(exports)
      }
    }