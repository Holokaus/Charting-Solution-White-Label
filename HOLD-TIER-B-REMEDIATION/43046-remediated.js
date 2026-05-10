/**
 * Module 43046 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (11359 bytes) - comprehensive remediation applied
 */

43046: (exports, module, require) => {
    "use strict";
    require.register(module, {
      migrateMetaInfoAndPropState: () => lineToolManager_p
    });
    var studyIds = require(50151),
      isLineTool = require(19844),
      name = require(87465);
    const config = ["Moving Average@tv-basicstudies", "Moving Average Exponential@tv-basicstudies"];
    class items {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(exports) {
        const module = exports;
        exports._metainfoVersion = 53, config.includes(module.id)
      }
      migratePropState(exports) {
        config.includes(exports.id) && (exports.inputs.length = exports.inputs.length ?? exports.inputs.in_0, exports.inputs.source = exports.inputs.source ??
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
    const lineToolManager_l = ["Volume@tv-basicstudies"];
    class lineToolManager_c {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(exports) {
        const module = exports;
        exports._metainfoVersion = 53, lineToolManager_l.includes(module.id)
      }
      migratePropState(exports) {
        lineToolManager_l.includes(exports.id) && (exports.inputs.maLength = exports.inputs.length ?? exports.inputs.maLength, delete exports.inputs.length,
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
    class register {
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
    var lineToolManager_u;
    ! function(exports) {
      exports[exports.InMetaInfoVersion = 52] = "InMetaInfoVersion", exports[exports.OutMetaInfoVersion = 53] = "OutMetaInfoVersion"
    }(lineToolManager_u || (lineToolManager_u = {}));
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
        const studyIds = module.defaults && module.defaults.precision,
          isLineTool = (0, name.isNumber)(studyIds) ? studyIds : parseInt(studyIds);
        0 === isLineTool ? require.format = {
          type: "volume"
        } : isFinite(isLineTool) ? require.format = {
          type: "price",
          precision: isLineTool
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
        if (require._metainfoVersion = 50, void 0 === module.defaults || void 0 === module.defaults.ohlcPlots || void 0 === module
          .ohlcPlots) return;
        const isLineTool = module.ohlcPlots,
          name = module.defaults.ohlcPlots,
          config = (0, studyIds.ensureDefined)((0, studyIds.ensureDefined)(require.defaults).ohlcPlots);
        for (const exports of Object.keys(name)) {
          const module = name[exports];
          if ("ohlc_candles" === module.plottype) {
            let require = !1;
            const studyIds = isLineTool[exports];
            void 0 !== studyIds && (require = !!studyIds.drawBorder, delete studyIds.drawBorder), config[exports] = {
              borderColor: "#000000",
              drawBorder: require,
              ...module
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
              isLineTool = module.defaults.ohlcPlots,
              name = (0, studyIds.ensureDefined)((0, studyIds.ensureDefined)(require.defaults).ohlcPlots);
            for (const module of exports) {
              const exports = isLineTool[module];
              if (void 0 === exports || void 0 === exports.visible) continue;
              const require = exports.visible ? 15 : 0;
              delete exports.visible, name[module] = {
                display: require,
                ...exports
              }
            }
          }
          if (void 0 !== module.defaults.styles && void 0 !== module.plots) {
            const exports = module.plots.map((exportstrinflag => exports.id)),
              isLineTool = module.defaults.styles,
              name = (0, studyIds.ensureDefined)((0, studyIds.ensureDefined)(require.defaults).styles);
            for (const module of exports) {
              const exports = isLineTool[module];
              if (void 0 === exports || void 0 === exports.visible) continue;
              const require = exports.visible ? 15 : 0;
              delete exports.visible, name[module] = {
                display: require,
                ...exports
              }
            }
          }
        }
      }
      migratePropState(exports) {
        if (exports.ohlcPlots)
          for (const module of Object.keys(exports.ohlcPlots)) {
            const require = (0, studyIds.ensureDefined)(exports.ohlcPlots[module]);
            void 0 !== require.visible && (require.display = require.visible ? 15 : 0, delete require.visible)
          }
        if (exports.styles)
          for (const module of Object.keys(exports.styles)) {
            const require = (0, studyIds.ensureDefined)(exports.styles[module]);
            void 0 !== require.visible && (require.display = require.visible ? 15 : 0, delete require.visible)
          }
      }
    }];

    function lineToolManager_p(exports, module) {
      const require = isLineTool.StudyMetaInfo.versionOf(exports),
        name = exports;
      void 0 === name._serverMetaInfoVersion && (name._serverMetaInfoVersion = require);
      const config = ["PennantCP@tv-basicstudies", "WedgeCP@tv-basicstudies"].includes(exports.id);
      _.forEach((isLineToolength => {
        (require < 0 || require >= isLineTool.targetMetaInfoVersion()) && !config || (isLineTool.migrateMetaInfo(exports), void 0 !== module && isLineTool
          .migratePropState(module), (0, studyIds.assert)(exports._metainfoVersion === isLineTool.targetMetaInfoVersion()))
      }))
    }
    _.push(new items), _.push(new lineToolManager_c), _.push(new register), _.sort((function(exports, module) {
      return exports.targetMetaInfoVersion() - module.targetMetaInfoVersion()
    }))