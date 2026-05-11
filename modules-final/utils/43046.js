/**
 * Module 43046 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43046: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      migrateMetaInfoAndPropState: () => lineToolManager_p
    });
    var lineToolManager_s = lineToolManager_i(50151),
      lineToolManager_o = lineToolManager_i(19844),
      lineToolManager_n = lineToolManager_i(87465);
    const lineToolManager_r = ["Moving Average@tv-basicstudies", "Moving Average Exponential@tv-basicstudies"];
    class lineToolManager_a {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(lineToolManager_e) {
        const lineToolManager_t = lineToolManager_e;
        lineToolManager_e._metainfoVersion = 53, lineToolManager_r.includes(lineToolManager_t.id)
      }
      migratePropState(lineToolManager_e) {
        lineToolManager_r.includes(lineToolManager_e.id) && (lineToolManager_e.inputs.length = lineToolManager_e.inputs.length ?? lineToolManager_e.inputs.in_0, lineToolManager_e.inputs.source = lineToolManager_e.inputs.source ??
          lineToolManager_e.inputs.in_1, lineToolManager_e.inputs.offset = lineToolManager_e.inputs.offset ?? lineToolManager_e.inputs.in_2, delete lineToolManager_e.inputs.in_0, delete lineToolManager_e.inputs
          .in_1, delete lineToolManager_e.inputs.in_2, lineToolManager_e.plots[1] = {
            id: "smoothedMA",
            type: "line"
          }, lineToolManager_e.styles.smoothedMA = {
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
      migrateMetaInfo(lineToolManager_e) {
        const lineToolManager_t = lineToolManager_e;
        lineToolManager_e._metainfoVersion = 53, lineToolManager_l.includes(lineToolManager_t.id)
      }
      migratePropState(lineToolManager_e) {
        lineToolManager_l.includes(lineToolManager_e.id) && (lineToolManager_e.inputs.maLength = lineToolManager_e.inputs.length ?? lineToolManager_e.inputs.maLength, delete lineToolManager_e.inputs.length,
          delete lineToolManager_e.inputs.offset, delete lineToolManager_e.inputs.source, lineToolManager_e.plots[1] = {
            id: "smoothedMA",
            type: "line"
          }, lineToolManager_e.styles.smoothedMA = {
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
    const lineToolManager_h = ["Relative Strength Index@tv-basicstudies", "Commodity Channel Index@tv-basicstudies",
      "On Balance Volume@tv-basicstudies"
    ];
    class lineToolManager_d {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(lineToolManager_e) {
        const lineToolManager_t = lineToolManager_e,
          lineToolManager_i = lineToolManager_e;
        lineToolManager_i._metainfoVersion = 53, lineToolManager_h.includes(lineToolManager_t.id) && (lineToolManager_i.styles[lineToolManager_t.id] = {
          title: "Smoothed MA",
          histogramBase: 0,
          joinPoints: !1
        })
      }
      migratePropState(lineToolManager_e) {
        lineToolManager_h.includes(lineToolManager_e.id) && (lineToolManager_e.plots[1] = {
          id: "smoothedMA",
          type: "line"
        }, lineToolManager_e.styles.smoothedMA = {
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
    ! function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.InMetaInfoVersion = 52] = "InMetaInfoVersion", lineToolManager_e[lineToolManager_e.OutMetaInfoVersion = 53] = "OutMetaInfoVersion"
    }(lineToolManager_u || (lineToolManager_u = {}));
    const _ = [new class {
      targetMetaInfoVersion() {
        return 47
      }
      migrateMetaInfo(lineToolManager_e) {
        const lineToolManager_t = lineToolManager_e,
          lineToolManager_i = lineToolManager_e;
        if (lineToolManager_i._metainfoVersion = 47, !lineToolManager_t.defaults || void 0 === lineToolManager_t.defaults.precision) return void(lineToolManager_i.format = {
          type: "inherit"
        });
        const lineToolManager_s = lineToolManager_t.defaults && lineToolManager_t.defaults.precision,
          lineToolManager_o = (0, lineToolManager_n.isNumber)(lineToolManager_s) ? lineToolManager_s : parseInt(lineToolManager_s);
        0 === lineToolManager_o ? lineToolManager_i.format = {
          type: "volume"
        } : isFinite(lineToolManager_o) ? lineToolManager_i.format = {
          type: "price",
          precision: lineToolManager_o
        } : lineToolManager_i.format = {
          type: "inherit"
        }, delete lineToolManager_t.defaults.precision
      }
      migratePropState(lineToolManager_e) {}
    }, new class {
      targetMetaInfoVersion() {
        return 50
      }
      migrateMetaInfo(lineToolManager_e) {
        const lineToolManager_t = lineToolManager_e,
          lineToolManager_i = lineToolManager_e;
        if (lineToolManager_i._metainfoVersion = 50, void 0 === lineToolManager_t.defaults || void 0 === lineToolManager_t.defaults.ohlcPlots || void 0 === lineToolManager_t
          .ohlcPlots) return;
        const lineToolManager_o = lineToolManager_t.ohlcPlots,
          lineToolManager_n = lineToolManager_t.defaults.ohlcPlots,
          lineToolManager_r = (0, lineToolManager_s.ensureDefined)((0, lineToolManager_s.ensureDefined)(lineToolManager_i.defaults).ohlcPlots);
        for (const lineToolManager_e of Object.keys(lineToolManager_n)) {
          const lineToolManager_t = lineToolManager_n[lineToolManager_e];
          if ("ohlc_candles" === lineToolManager_t.plottype) {
            let lineToolManager_i = !1;
            const lineToolManager_s = lineToolManager_o[lineToolManager_e];
            void 0 !== lineToolManager_s && (lineToolManager_i = !!lineToolManager_s.drawBorder, delete lineToolManager_s.drawBorder), lineToolManager_r[lineToolManager_e] = {
              borderColor: "#000000",
              drawBorder: lineToolManager_i,
              ...lineToolManager_t
            }
          }
        }
      }
      migratePropState(lineToolManager_e) {}
    }, new class {
      targetMetaInfoVersion() {
        return 53
      }
      migrateMetaInfo(lineToolManager_e) {
        const lineToolManager_t = lineToolManager_e,
          lineToolManager_i = lineToolManager_e;
        if (lineToolManager_i._metainfoVersion = 53, void 0 !== lineToolManager_t.defaults) {
          if (void 0 !== lineToolManager_t.defaults.ohlcPlots && void 0 !== lineToolManager_t.ohlcPlots) {
            const lineToolManager_e = Object.keys(lineToolManager_t.ohlcPlots),
              lineToolManager_o = lineToolManager_t.defaults.ohlcPlots,
              lineToolManager_n = (0, lineToolManager_s.ensureDefined)((0, lineToolManager_s.ensureDefined)(lineToolManager_i.defaults).ohlcPlots);
            for (const lineToolManager_t of lineToolManager_e) {
              const lineToolManager_e = lineToolManager_o[lineToolManager_t];
              if (void 0 === lineToolManager_e || void 0 === lineToolManager_e.visible) continue;
              const lineToolManager_i = lineToolManager_e.visible ? 15 : 0;
              delete lineToolManager_e.visible, lineToolManager_n[lineToolManager_t] = {
                display: lineToolManager_i,
                ...lineToolManager_e
              }
            }
          }
          if (void 0 !== lineToolManager_t.defaults.styles && void 0 !== lineToolManager_t.plots) {
            const lineToolManager_e = lineToolManager_t.plots.map((lineToolManager_e => lineToolManager_e.id)),
              lineToolManager_o = lineToolManager_t.defaults.styles,
              lineToolManager_n = (0, lineToolManager_s.ensureDefined)((0, lineToolManager_s.ensureDefined)(lineToolManager_i.defaults).styles);
            for (const lineToolManager_t of lineToolManager_e) {
              const lineToolManager_e = lineToolManager_o[lineToolManager_t];
              if (void 0 === lineToolManager_e || void 0 === lineToolManager_e.visible) continue;
              const lineToolManager_i = lineToolManager_e.visible ? 15 : 0;
              delete lineToolManager_e.visible, lineToolManager_n[lineToolManager_t] = {
                display: lineToolManager_i,
                ...lineToolManager_e
              }
            }
          }
        }
      }
      migratePropState(lineToolManager_e) {
        if (lineToolManager_e.ohlcPlots)
          for (const lineToolManager_t of Object.keys(lineToolManager_e.ohlcPlots)) {
            const lineToolManager_i = (0, lineToolManager_s.ensureDefined)(lineToolManager_e.ohlcPlots[lineToolManager_t]);
            void 0 !== lineToolManager_i.visible && (lineToolManager_i.display = lineToolManager_i.visible ? 15 : 0, delete lineToolManager_i.visible)
          }
        if (lineToolManager_e.styles)
          for (const lineToolManager_t of Object.keys(lineToolManager_e.styles)) {
            const lineToolManager_i = (0, lineToolManager_s.ensureDefined)(lineToolManager_e.styles[lineToolManager_t]);
            void 0 !== lineToolManager_i.visible && (lineToolManager_i.display = lineToolManager_i.visible ? 15 : 0, delete lineToolManager_i.visible)
          }
      }
    }];

    function lineToolManager_p(lineToolManager_e, lineToolManager_t) {
      const lineToolManager_i = lineToolManager_o.StudyMetaInfo.versionOf(lineToolManager_e),
        lineToolManager_n = lineToolManager_e;
      void 0 === lineToolManager_n._serverMetaInfoVersion && (lineToolManager_n._serverMetaInfoVersion = lineToolManager_i);
      const lineToolManager_r = ["PennantCP@tv-basicstudies", "WedgeCP@tv-basicstudies"].includes(lineToolManager_e.id);
      _.forEach((lineToolManager_o => {
        (lineToolManager_i < 0 || lineToolManager_i >= lineToolManager_o.targetMetaInfoVersion()) && !lineToolManager_r || (lineToolManager_o.migrateMetaInfo(lineToolManager_e), void 0 !== lineToolManager_t && lineToolManager_o
          .migratePropState(lineToolManager_t), (0, lineToolManager_s.assert)(lineToolManager_e._metainfoVersion === lineToolManager_o.targetMetaInfoVersion()))
      }))
    }
    _.push(new lineToolManager_a), _.push(new lineToolManager_c), _.push(new lineToolManager_d), _.sort((function(lineToolManager_e, lineToolManager_t) {
      return lineToolManager_e.targetMetaInfoVersion() - lineToolManager_t.targetMetaInfoVersion()
    }))
}
