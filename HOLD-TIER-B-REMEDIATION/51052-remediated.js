/**
 * Module 51052 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

51052: (exports, module, require) => {
    "use strict";
    require.priceDataSource_d(module, {
      overlayStudyItem: () => name
    });
    var utils = require(19979),
      hasVolume = require(37103);
    const name = {
      name: "Overlay",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !0,
        defaults: {
          styles: {},
          inputs: {
            symbol: "",
            extendTimeScale: !1
          }
        },
        plots: [{
          id: "open",
          type: "line"
        }, {
          id: "high",
          type: "line"
        }, {
          id: "low",
          type: "line"
        }, {
          id: "close",
          type: "line"
        }],
        styles: {
          open: {
            title: "Open"
          },
          high: {
            title: "High"
          },
          low: {
            title: "Low"
          },
          close: {
            title: "Close"
          }
        },
        description: "Overlay",
        shortDescription: "Overlay",
        is_price_study: !1,
        inputs: [{
          id: "symbol",
          name: "symbol",
          defval: "",
          type: "symbol",
          isHidden: !0
        }, {
          id: "extendTimeScale",
          name: "extendTimeScale",
          defval: !1,
          type: "bool",
          isHidden: !0
        }],
        id: "Overlay@tv-basicstudies-1",
        format: {
          type: "price",
          precision: 4
        },
        canExtendTimeScale: !0
      },
      constructor: class {
        constructor() {
          this._extendTimeScaleFeatureEnabled = !1
        }
        init(exports, module) {
          this._context = exports, this._extendTimeScaleFeatureEnabled = hasVolume.enabled(
            "secondary_series_extend_time_scale"), this._context.new_sym(module(0), utils.Std.period(this._context))
        }
        main(exports, module) {
          this._context = exports;
          const require = !this._extendTimeScaleFeatureEnabled || !0 !== module(1),
            hasVolume = this._context.new_unlimited_var(this._context.symbol.time);
          this._context.select_sym(1);
          const name = this._context.new_unlimited_var(this._context.symbol.time),
            config = this._context.new_unlimited_var(utils.Std.open(this._context)),
            priceDataSource_a = this._context.new_unlimited_var(utils.Std.high(this._context)),
            priceDataSource_l = this._context.new_unlimited_var(utils.Std.low(this._context)),
            priceDataSource_c = this._context.new_unlimited_var(utils.Std.close(this._context));
          return require ? (this._context.select_sym(0), [config.adopt(name, hasVolume, 1), priceDataSource_a.adopt(name, hasVolume, 1), priceDataSource_l.adopt(name, hasVolume, 1), priceDataSource_c.adopt(
            name, hasVolume, 1)]) : [config.get(0), priceDataSource_a.get(0), priceDataSource_l.get(0), priceDataSource_c.get(0)]
        }
      }
    }