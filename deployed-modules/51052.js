/**
 * Module 51052 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51052: (priceDataSource_e, priceDataSource_t, priceDataSource_i) => {
    "use strict";
    priceDataSource_i.priceDataSource_d(priceDataSource_t, {
      overlayStudyItem: () => priceDataSource_n
    });
    var priceDataSource_s = priceDataSource_i(19979),
      priceDataSource_o = priceDataSource_i(37103);
    const priceDataSource_n = {
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
        init(priceDataSource_e, priceDataSource_t) {
          this._context = priceDataSource_e, this._extendTimeScaleFeatureEnabled = priceDataSource_o.enabled(
            "secondary_series_extend_time_scale"), this._context.new_sym(priceDataSource_t(0), priceDataSource_s.Std.period(this._context))
        }
        main(priceDataSource_e, priceDataSource_t) {
          this._context = priceDataSource_e;
          const priceDataSource_i = !this._extendTimeScaleFeatureEnabled || !0 !== priceDataSource_t(1),
            priceDataSource_o = this._context.new_unlimited_var(this._context.symbol.time);
          this._context.select_sym(1);
          const priceDataSource_n = this._context.new_unlimited_var(this._context.symbol.time),
            priceDataSource_r = this._context.new_unlimited_var(priceDataSource_s.Std.open(this._context)),
            priceDataSource_a = this._context.new_unlimited_var(priceDataSource_s.Std.high(this._context)),
            priceDataSource_l = this._context.new_unlimited_var(priceDataSource_s.Std.low(this._context)),
            priceDataSource_c = this._context.new_unlimited_var(priceDataSource_s.Std.close(this._context));
          return priceDataSource_i ? (this._context.select_sym(0), [priceDataSource_r.adopt(priceDataSource_n, priceDataSource_o, 1), priceDataSource_a.adopt(priceDataSource_n, priceDataSource_o, 1), priceDataSource_l.adopt(priceDataSource_n, priceDataSource_o, 1), priceDataSource_c.adopt(
            priceDataSource_n, priceDataSource_o, 1)]) : [priceDataSource_r.get(0), priceDataSource_a.get(0), priceDataSource_l.get(0), priceDataSource_c.get(0)]
        }
      }
    }