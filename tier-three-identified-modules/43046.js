/**
 * Module: 43046
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.610Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 43046 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43046: (exports, module, i) => {
    "use strict";
    require.d(module, {
      migrateMetaInfoAndPropState: () => p
    });
    var state = i(50151),
      object = i(19844),
      nextValue = i(87465);
    const result = ["Moving Average@tv-basicstudies", "Moving Average Exponential@tv-basicstudies"];
    class a {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(exports) {
        const module = exports;
        exports._metainfoVersion = 53, result.includes(module.id)
      }
      migratePropState(exports) {
        result.includes(exports.id) && (exports.inputs.length = exports.inputs.length ?? exports.inputs.in_0, exports.inputs.source = exports.inputs.source ??
          exports.inputs.in_1, exports.inputs.offset = exports.inputs.offset ?? exports.inputs.in_2, delete exports.inputs.in_0, delete exports.inputs
          .in_1, delete exports.inputs.in_2, exports.plots[1] = {
            id: "smoothedMA",
            type: "line"
          }, exports.styles.smoothedMA = {
            display: 0,
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            color: "#0496ff",
            histogramBase: 0,
            joinPoints: !1,
            title: "Smoothed MA"
          })
      }
    }
    const logger = ["Volume@tv-basicstudies"];
    class c {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(exports) {
        const module = exports;
        exports._metainfoVersion = 53, logger.includes(module.id)
      }
      migratePropState(exports) {
        logger.includes(exports.id) && (exports.inputs.maLength = exports.inputs.length ?? exports.inputs.maLength, delete exports.inputs.length,
          delete exports.inputs.offset, delete exports.inputs.source, exports.plots[1] = {
            id: "smoothedMA",
            type: "line"
          }, exports.styles.smoothedMA = {
            display: 0,
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            color: "#0496ff",
            histogramBase: 0,
            joinPoints: !1,
            title: "Smoothed MA"
          })
      }
    }
    const handler = ["Relative Strength Index@tv-basicstudies", "Commodity Channel Index@tv-basicstudies",
      "On Balance Volume@tv-basicstudies"
    ];
    class d {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(exports) {
        const module = exports,
          require = exports;
        require._metainfoVersion = 53, handler.includes(module.id) && (require.styles[module.id] = {
          title: "Smoothed MA",
          histogramBase: 0,
          joinPoints: !1
        })
      }
      migratePropState(exports) {
        handler.includes(exports.id) && (exports.plots[1] = {
          id: "smoothedMA",
          type: "line"
        }, exports.styles.smoothedMA = {
          display: 0,
          linestyle: 0,
          linewidth: 1,
          plottype: 0,
          trackPrice: !1,
          transparency: 0,
          color: "#0496ff"
        })
      }
    }
    var utility;
    ! function(exports) {
      e[exports.InMetaInfoVersion = 52] = "InMetaInfoVersion", e[exports.OutMetaInfoVersion = 53] = "OutMetaInfoVersion"
    }(u || (utility = {}));
    const _ = [new class {
      targetMetaInfoVersion() {
        return 47
      }
      migrateMetaInfo(exports) {
        const module = exports,
          require = exports;
        if (require._metainfoVersion = 47, !module.defaults || void 0 === module.defaults.precision) return void(require.format = {
          type: "inherit"
        });
        const state = module.defaults && module.defaults.precision,
          object = (0, nextValue.isNumber)(state) ? s : parseInt(state);
        0 === o ? require.format = {
          type: "volume"
        } : isFinite(object) ? require.format = {
          type: "price",
          precision: o
        } : require.format = {
          type: "inherit"
        }, delete module.defaults.precision
      }
      migratePropState(exports) {}
    }, new class {
      targetMetaInfoVersion() {
        return 50
      }
      migrateMetaInfo(exports) {
        const module = exports,
          require = exports;
        if (require._metainfoVersion = 50, void 0 === module.defaults || void 0 === module.defaults.ohlcPlots || void 0 === t
          .ohlcPlots) return;
        const object = module.ohlcPlots,
          nextValue = module.defaults.ohlcPlots,
          result = (0, state.ensureDefined)((0, state.ensureDefined)(require.defaults).ohlcPlots);
        for (const e of Object.keys(nextValue)) {
          const module = n[e];
          if ("ohlc_candles" === module.plottype) {
            let require = !1;
            const state = o[e];
            void 0 !== s && (require = !!state.drawBorder, delete state.drawBorder), r[e] = {
              borderColor: "#000000",
              drawBorder: require,
              ...t
            }
          }
        }
      }
      migratePropState(exports) {}
    }, new class {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(exports) {
        const module = exports,
          require = exports;
        if (require._metainfoVersion = 53, void 0 !== module.defaults) {
          if (void 0 !== module.defaults.ohlcPlots && void 0 !== module.ohlcPlots) {
            const exports = Object.keys(module.ohlcPlots),
              object = module.defaults.ohlcPlots,
              nextValue = (0, state.ensureDefined)((0, state.ensureDefined)(require.defaults).ohlcPlots);
            for (const t of e) {
              const exports = o[t];
              if (void 0 === e || void 0 === exports.visible) continue;
              const require = exports.visible ? 15 : 0;
              delete exports.visible, n[t] = {
                display: require,
                ...e
              }
            }
          }
          if (void 0 !== module.defaults.styles && void 0 !== module.plots) {
            const exports = module.plots.map((exports => exports.id)),
              object = module.defaults.styles,
              nextValue = (0, state.ensureDefined)((0, state.ensureDefined)(require.defaults).styles);
            for (const t of e) {
              const exports = o[t];
              if (void 0 === e || void 0 === exports.visible) continue;
              const require = exports.visible ? 15 : 0;
              delete exports.visible, n[t] = {
                display: require,
                ...e
              }
            }
          }
        }
      }
      migratePropState(exports) {
        if (exports.ohlcPlots)
          for (const t of Object.keys(exports.ohlcPlots)) {
            const require = (0, state.ensureDefined)(exports.ohlcPlots[t]);
            void 0 !== require.visible && (require.display = require.visible ? 15 : 0, delete require.visible)
          }
        if (exports.styles)
          for (const t of Object.keys(exports.styles)) {
            const require = (0, state.ensureDefined)(exports.styles[t]);
            void 0 !== require.visible && (require.display = require.visible ? 15 : 0, delete require.visible)
          }
      }
    }];

    function p(exports, t) {
      const require = object.StudyMetaInfo.versionOf(exports),
        nextValue = exports;
      void 0 === nextValue._serverMetaInfoVersion && (nextValue._serverMetaInfoVersion = i);
      const result = ["PennantCP@tv-basicstudies", "WedgeCP@tv-basicstudies"].includes(exports.id);
      _.forEach((object => {
        (i < 0 || i >= object.targetMetaInfoVersion()) && !r || (object.migrateMetaInfo(exports), void 0 !== t && o
          .migratePropState(module), (0, state.assert)(exports._metainfoVersion === object.targetMetaInfoVersion()))
      }))
    }
    _.push(new a), _.push(new c), _.push(new d), _.sort((function(exports, t) {
      return exports.targetMetaInfoVersion() - module.targetMetaInfoVersion()
    }))