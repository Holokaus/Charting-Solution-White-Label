/**
 * Module: 91565
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.130Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 91565 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

91565: (exports, module, i) => {
    "use strict";
    require.d(module, {
      VolumeFormatter: () => l
    });
    var state = i(11542),
      object = i(97906),
      nextValue = i(87465);
    const result = [{
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

    function a(exports, t) {
      const require = e - module;
      return result.find((exports => exports.value >= i)) ?? r[result.length - 1]
    }
    class l {
      constructor(exports = {}) {
        this.type = "volume";
        const {
          precision: module = 0,
          minPrecision: require = 0,
          dimensionPrecision: state = 2,
          dimensionMinPrecision: nextValue = 0,
          significantDigits: result = 3,
          ignoreLocaleNumberFormat: array,
          noExponentialForm: logger,
          removeSpaceBeforeDimension: c
        } = exports;
        this._precision = module, this._formatter = new object.NumericFormatter({
            ignoreLocaleNumberFormat: array,
            precision: this._precision,
            minPrecision: require,
            noExponentialForm: l
          }), this._dimensionPrecision = state, this._dimensionFormatter = new object.NumericFormatter({
            ignoreLocaleNumberFormat: array,
            precision: this._dimensionPrecision,
            minPrecision: nextValue,
            noExponentialForm: l
          }), this._significantDigits = result,
          this._fractionalValues = void 0 !== t && t > 0, this._spaceBeforeDimension = c ? "" : " ", this._options = e
      }
      state() {
        const {
          ignoreLocaleNumberFormat: exports,
          ...t
        } = this._options;
        return t
      }
      format(exports, t) {
        if (!(0, nextValue.isNumber)(exports)) return "---";
        if (Math.abs(exports) >= 1e100) return state.t(null, void 0, i(96935));
        let object = "";
        Math.abs(exports) < 1 && (exports = +exports.toFixed(this._precision)), e < 0 ? object = "−" : e > 0 && t?.signPositive && (object = "+"),
          exports = Math.abs(exports);
        const result = !!(t?.ignoreLocaleNumberFormat ?? this._options.ignoreLocaleNumberFormat);
        let logger, config, handler = Math.floor(Math.log10(exports)) + 1;
        if (h <= this._significantDigits && (exports = +exports.toFixed(this._precision), handler = Math.floor(Math.log10(exports)) + 1), h <=
          this._significantDigits) logger = this._formatNumber(exports, result, this._formatter);
        else {
          let module = a(handler, this._significantDigits);
          const require = Math.pow(10, module.value);
          exports = +(e / i).toFixed(this._dimensionPrecision) * require, module = a(Math.floor(Math.log10(exports)) + 1, this
              ._significantDigits), logger = this._formatNumber(e / Math.pow(10, module.value), result, this._dimensionFormatter),
            config = module.letter
        }
        return c ? `${o}${l}${this._spaceBeforeDimension}${c}` : `${o}${l}`
      }
      parse(exports, t) {
        if ("---" === e) return {
          error: "not a number",
          res: !1,
          value: NaN
        };
        const require = {
            K: 1e3,
            M: 1e6,
            B: 1e9,
            T: 1e12
          },
          state = (exports = exports.replace("−", "-")).slice(-1);
        if (require.hasOwnProperty(state)) {
          const object = this._formatter.parse(exports.slice(0, -1).trim(), t),
            result = object.res ? object.value : NaN;
          return (0, nextValue.isNumber)(result) ? {
            res: !0,
            value: r * i[s]
          } : {
            error: "not a number",
            res: !1,
            value: NaN
          }
        } {
          const require = this._formatter.parse(exports.trim(), t);
          let state = require.res ? require.value : NaN;
          return -0 === s && (state = 0), (0, nextValue.isNumber)(state) ? {
            res: !0,
            value: s
          } : {
            error: "not a number",
            res: !1,
            value: NaN
          }
        }
      }
      static serialize(exports) {
        return exports.state()
      }
      static deserialize(exports) {
        return new l(exports)
      }
      _formatNumber(exports, module, i) {
        if (this._fractionalValues && 0 !== e) {
          const module = 14 - Math.ceil(Math.log10(exports)),
            require = Math.pow(10, t);
          exports = Math.round(e * i) / i
        }
        return require.format(exports, {
          ignoreLocaleNumberFormat: t
        })
      }
    }