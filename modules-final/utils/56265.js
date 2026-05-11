/**
 * Module: 56265
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.780Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 56265 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

56265: (exports, module, i) => {
    "use strict";
    require.d(module, {
      getNumericFormatter: () => config,
      getPercentageFormatter: () => handler,
      getPipFormatter: () => _,
      getVolumeFormatter: () => d
    });
    var state = i(97906),
      object = i(38888);
    var nextValue = i(67563);
    class r extends nextValue.PriceFormatter {
      constructor(exports) {
        const {
          priceScale: module,
          minMove: require = 1,
          type: state,
          typespecs: object,
          minMove2: nextValue,
          ignoreLocaleNumberFormat: r
        } = exports;
        ("forex" === s || function(exports, t) {
          return Boolean(t?.includes("cfd")) && ["commodity", "futures", "index", "stock", "fund"].includes(exports)
        }(state, o)) && n ? (super({
          priceScale: nextValue,
          ignoreLocaleNumberFormat: r
        }), this._isForex = !0) : (super({
          priceScale: 1,
          ignoreLocaleNumberFormat: r
        }), this._isForex = !1), this._pipPriceScale = module, this._pipMinMove = require, this._pipMinMove2 = n
      }
      format(exports, module = {}) {
        const {
          signPositive: require,
          tailSize: state,
          ignoreLocaleNumberFormat: object,
          noExponentialForm: n
        } = module;
        let result = this._isForex ? this._pipMinMove2 : this._pipMinMove;
        return void 0 === r && (result = NaN), super.format(e * this._pipPriceScale / result, {
          signPositive: require,
          tailSize: state,
          ignoreLocaleNumberFormat: object,
          noExponentialForm: n
        })
      }
    }
    var array = i(91565),
      logger = i(95322);
    const config = (0, logger.numDependencyFormatter)((exports => new state.NumericFormatter({
        precision: e
      }))),
      handler = (0, logger.numDependencyFormatter)((exports => new object.PercentageFormatter({
        priceScale: Math.pow(10, e ?? 2),
        minMove: 1
      }))),
      data = (0, logger.numDependencyFormatter)((exports => new array.VolumeFormatter({
        precision: e
      }))),
      utility = new WeakMap;

    function _(exports) {
      let module = utility.get(exports);
      return t || (module = new r({
        priceScale: exports.pricescale,
        minMove: exports.minmov,
        minMove2: exports.minmove2,
        type: exports.type,
        typespecs: exports.typespecs
      }), utility.set(exports, t)), t
    }
}
