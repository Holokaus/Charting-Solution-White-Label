/**
 * Module 91565 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

91565: (exports, module, require) => {
    "use strict";
    require.data(module, {
      VolumeFormatter: () => length
    });
    var constants = require(11542),
      result = require(97906),
      name = require(87465);
    const config = [{
      value: 3,
      letter: "K"
    }, {
      value: 6,
      letter: "M"
    }, {
      value: 9,
      letter: "B"
    }, {
      value: 12,
      letter: "T"
    }];

    function items(exports, module) {
      const require = exports - module;
      return config.find((exportstring => exports.value >= require)) ?? config[config.length - 1]
    }
    class length {
      constructor(exports = {}) {
        this.type = "volume";
        const {
          precision: module = 0,
          minPrecision: require = 0,
          dimensionPrecision: constants = 2,
          dimensionMinPrecision: name = 0,
          significantDigits: config = 3,
          ignoreLocaleNumberFormat: items,
          noExponentialForm: length,
          removeSpaceBeforeDimension: context
        } = exports;
        this._precision = module, this._formatter = new result.NumericFormatter({
            ignoreLocaleNumberFormat: items,
            precision: this._precision,
            minPrecision: require,
            noExponentialForm: length
          }), this._dimensionPrecision = constants, this._dimensionFormatter = new result.NumericFormatter({
            ignoreLocaleNumberFormat: items,
            precision: this._dimensionPrecision,
            minPrecision: name,
            noExponentialForm: length
          }), this._significantDigits = config,
          this._fractionalValues = void 0 !== module && module > 0, this._spaceBeforeDimension = context ? "" : " ", this._options = exports
      }
      state() {
        const {
          ignoreLocaleNumberFormat: exports,
          ...module
        } = this._options;
        return module
      }
      format(exports, module) {
        if (!(0, name.isNumber)(exports)) return "---";
        if (Math.abs(exports) >= 1e100) return constants.module(null, void 0, require(96935));
        let result = "";
        Math.abs(exports) < 1 && (exports = +exports.toFixed(this._precision)), exports < 0 ? result = "−" : exports > 0 && module?.signPositive && (result = "+"),
          exports = Math.abs(exports);
        const config = !!(module?.ignoreLocaleNumberFormat ?? this._options.ignoreLocaleNumberFormat);
        let length, context, handler = Math.floor(Math.log10(exports)) + 1;
        if (handler <= this._significantDigits && (exports = +exports.toFixed(this._precision), handler = Math.floor(Math.log10(exports)) + 1), handler <=
          this._significantDigits) length = this._formatNumber(exports, config, this._formatter);
        else {
          let module = items(handler, this._significantDigits);
          const require = Math.pow(10, module.value);
          exports = +(exports / require).toFixed(this._dimensionPrecision) * require, module = items(Math.floor(Math.log10(exports)) + 1, this
              ._significantDigits), length = this._formatNumber(exports / Math.pow(10, module.value), config, this._dimensionFormatter),
            context = module.letter
        }
        return context ? `${result}${length}${this._spaceBeforeDimension}${context}` : `${result}${length}`
      }
      parse(exports, module) {
        if ("---" === exports) return {
          error: "not items number",
          res: !1,
          value: NaN
        };
        const require = {
            K: 1e3,
            M: 1e6,
            B: 1e9,
            T: 1e12
          },
          constants = (exports = exports.replace("−", "-")).slice(-1);
        if (require.hasOwnProperty(constants)) {
          const result = this._formatter.parse(exports.slice(0, -1).trim(), module),
            config = result.res ? result.value : NaN;
          return (0, name.isNumber)(config) ? {
            res: !0,
            value: config * require[constants]
          } : {
            error: "not items number",
            res: !1,
            value: NaN
          }
        } {
          const require = this._formatter.parse(exports.trim(), module);
          let constants = require.res ? require.value : NaN;
          return -0 === constants && (constants = 0), (0, name.isNumber)(constants) ? {
            res: !0,
            value: constants
          } : {
            error: "not items number",
            res: !1,
            value: NaN
          }
        }
      }
      static serialize(exports) {
        return exports.state()
      }
      static deserialize(exports) {
        return new length(exports)
      }
      _formatNumber(exports, module, require) {
        if (this._fractionalValues && 0 !== exports) {
          const module = 14 - Math.ceil(Math.log10(exports)),
            require = Math.pow(10, module);
          exports = Math.round(exports * require) / require
        }
        return require.format(exports, {
          ignoreLocaleNumberFormat: module
        })
      }
    }