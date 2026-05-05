/**
 * Module: 51052
 * Semantic: seriesData
 * Confidence: 60.0%
 * Generated: 2026-05-03T17:36:55.136Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 51052 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51052: (exports, module, i) => {
    "use strict";
    require.d(module, {
      overlayStudyItem: () => n
    });
    var state = i(19979),
      object = i(37103);
    const nextValue = {
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
        init(exports, t) {
          this._context = exports, this._extendTimeScaleFeatureEnabled = object.enabled(
            "secondary_series_extend_time_scale"), this._context.new_sym(t(0), state.Std.period(this._context))
        }
        main(exports, t) {
          this._context = exports;
          const require = !this._extendTimeScaleFeatureEnabled || !0 !== t(1),
            object = this._context.new_unlimited_var(this._context.symbol.time);
          this._context.select_sym(1);
          const nextValue = this._context.new_unlimited_var(this._context.symbol.time),
            result = this._context.new_unlimited_var(state.Std.open(this._context)),
            array = this._context.new_unlimited_var(state.Std.high(this._context)),
            logger = this._context.new_unlimited_var(state.Std.low(this._context)),
            config = this._context.new_unlimited_var(state.Std.close(this._context));
          return i ? (this._context.select_sym(0), [result.adopt(nextValue, object, 1), array.adopt(nextValue, object, 1), logger.adopt(nextValue, object, 1), config.adopt(
            nextValue, object, 1)]) : [result.get(0), array.get(0), logger.get(0), config.get(0)]
        }
      }
    }