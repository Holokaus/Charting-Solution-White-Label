/**
 * Module: 51052
 * Semantic: priceDataSource
 * Confidence: 88.0%
 * Keywords: 2
 * Generated: 2026-05-06T05:26:21.425Z
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

/**
 * Module 51052 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51052: (priceDataSource_e, priceDataSource_t, i) => {
    "use strict";
    i.d(priceDataSource_t, {
      overlayStudyItem: () => n
    });
    var priceDataSource_s = i(19979),
      o = i(37103);
    const n = {
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
          this._context = priceDataSource_e, this._extendTimeScaleFeatureEnabled = o.enabled(
            "secondary_series_extend_time_scale"), this._context.new_sym(priceDataSource_t(0), priceDataSource_s.Std.period(this._context))
        }
        main(priceDataSource_e, priceDataSource_t) {
          this._context = priceDataSource_e;
          const i = !this._extendTimeScaleFeatureEnabled || !0 !== priceDataSource_t(1),
            o = this._context.new_unlimited_var(this._context.symbol.time);
          this._context.select_sym(1);
          const n = this._context.new_unlimited_var(this._context.symbol.time),
            r = this._context.new_unlimited_var(priceDataSource_s.Std.open(this._context)),
            a = this._context.new_unlimited_var(priceDataSource_s.Std.high(this._context)),
            l = this._context.new_unlimited_var(priceDataSource_s.Std.low(this._context)),
            c = this._context.new_unlimited_var(priceDataSource_s.Std.close(this._context));
          return i ? (this._context.select_sym(0), [r.adopt(n, o, 1), a.adopt(n, o, 1), l.adopt(n, o, 1), c.adopt(
            n, o, 1)]) : [r.get(0), a.get(0), l.get(0), c.get(0)]
        }
      }
    }