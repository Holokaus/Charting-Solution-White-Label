/**
 * Module 34378 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

34378: (e, t, i) => {
    "use strict";
    i.d(t, {
      anchoredVWAPStudyItem: () => r
    });
    const s = {
      _metainfoVersion: 51,
      description: "Anchored VWAP",
      shortDescription: "Anchored VWAP",
      format: {
        type: "inherit"
      },
      id: "AnchoredVWAP@tv-basicstudies-1",
      is_hidden_study: !0,
      is_price_study: !0,
      defaults: {
        areaBackground: {
          backgroundColor: "#4caf50",
          fillBackground: !0,
          transparency: 95
        },
        filledAreasStyle: {
          Background_1: {
            fillType: void 0,
            color: "#4caf50",
            transparency: 95,
            visible: !0
          }
        },
        inputs: {
          start_time: 0,
          "Bands Calculation Mode": "Standard Deviation",
          bands_multiplier: 1,
          bands_multiplier_2: 2,
          bands_multiplier_3: 3,
          calculate_stDev: !0,
          calculate_stDev_2: !1,
          calculate_stDev_3: !1,
          source: "hlc3"
        },
        styles: {
          VWAP: {
            color: "#1e88e5",
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            display: 15
          },
          LowerBand: {
            display: 15,
            color: "#4caf50",
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0
          },
          LowerBand_2: {
            display: 15,
            color: "#808000",
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0
          },
          LowerBand_3: {
            display: 15,
            color: "#00897b",
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0
          },
          UpperBand: {
            display: 15,
            color: "#4caf50",
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0
          },
          UpperBand_2: {
            display: 15,
            color: "#808000",
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0
          },
          UpperBand_3: {
            display: 15,
            color: "#00897b",
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0
          }
        }
      },
      inputs: [{
        defval: 0,
        id: "start_time",
        isHidden: !0,
        max: Number.MAX_SAFE_INTEGER,
        min: -Number.MAX_SAFE_INTEGER,
        name: "Start time",
        type: "time"
      }, {
        defval: "Standard Deviation",
        group: "Bands Settings",
        id: "Bands Calculation Mode",
        name: "Bands Calculation Mode",
        options: ["Standard Deviation", "Percentage"],
        tooltip: "Determines the units used to calculate the distance of the bands. When 'Percentage' is selected, a multiplier of 1 means 1%.",
        type: "text",
        display: 15
      }, {
        defval: !0,
        group: "Bands Settings",
        id: "calculate_stDev",
        inline: "band_1",
        name: " ",
        type: "bool",
        display: 0
      }, {
        defval: 1,
        group: "Bands Settings",
        id: "bands_multiplier",
        inline: "band_1",
        max: Number.MAX_VALUE,
        min: 0,
        name: "Bands Multiplier #1",
        step: .5,
        type: "float",
        display: 15
      }, {
        defval: !1,
        group: "Bands Settings",
        id: "calculate_stDev_2",
        inline: "band_2",
        name: " ",
        type: "bool",
        display: 0
      }, {
        defval: 2,
        group: "Bands Settings",
        id: "bands_multiplier_2",
        inline: "band_2",
        max: Number.MAX_VALUE,
        min: 0,
        name: "Bands Multiplier #2",
        step: .5,
        type: "float",
        display: 15
      }, {
        defval: !1,
        group: "Bands Settings",
        id: "calculate_stDev_3",
        inline: "band_3",
        name: " ",
        type: "bool",
        display: 0
      }, {
        defval: 3,
        group: "Bands Settings",
        id: "bands_multiplier_3",
        inline: "band_3",
        max: Number.MAX_VALUE,
        min: 0,
        name: "Bands Multiplier #3",
        step: .5,
        type: "float",
        display: 15
      }, {
        defval: "hlc3",
        id: "source",
        name: "Source",
        options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"],
        type: "source"
      }],
      plots: [{
        id: "VWAP",
        type: "line"
      }, {
        id: "UpperBand",
        type: "line"
      }, {
        id: "LowerBand",
        type: "line"
      }, {
        id: "UpperBand_2",
        type: "line"
      }, {
        id: "LowerBand_2",
        type: "line"
      }, {
        id: "UpperBand_3",
        type: "line"
      }, {
        id: "LowerBand_3",
        type: "line"
      }],
      styles: {
        VWAP: {
          histogramBase: 0,
          title: "VWAP"
        },
        LowerBand: {
          histogramBase: 0,
          title: "Lower Band #1"
        },
        LowerBand_2: {
          histogramBase: 0,
          title: "Lower Band #2"
        },
        LowerBand_3: {
          histogramBase: 0,
          title: "Lower Band #3"
        },
        UpperBand: {
          histogramBase: 0,
          title: "Upper Band #1"
        },
        UpperBand_2: {
          histogramBase: 0,
          title: "Upper Band #2"
        },
        UpperBand_3: {
          histogramBase: 0,
          title: "Upper Band #3"
        }
      },
      filledAreas: [{
        title: "Background #1",
        id: "Background_1",
        objAId: "UpperBand",
        objBId: "LowerBand",
        type: "plot_plot"
      }],
      area: [{
        name: "UpperBand",
        visible: !0
      }, {
        name: "LowerBand",
        visible: !0
      }]
    };
    var o = i(50151),
      n = i(19979);
    const r = {
      name: "Anchored VWAP",
      metainfo: s,
      constructor: class {
        constructor() {
          this._isNewSession = null, this._firstBarTime = 0
        }
        init(e, t) {
          this._firstBarTime = t(0), this._isNewSession = null
        }
        main(e, t, i) {
          if (void 0 === i) return [NaN];
          (0, o.assert)(e.symbol.time === i.time);
          const s = i.time;
          if (s && s < this._firstBarTime) return [NaN];
          const r = n.Std.volume(e),
            a = n.Std[t(8)](e),
            l = e.new_unlimited_var(),
            c = e.new_unlimited_var(),
            h = e.new_unlimited_var(),
            d = e.symbol.time;
          null !== d && (null === this._isNewSession && (this._isNewSession = n.Std.createNewSessionCheck(e)),
            this._isNewSession && this._isNewSession(d) && (this._resetHist(l), this._resetHist(c), this
              ._resetHist(h))), l.set(n.Std.nz(l.get()) + a * r), c.set(n.Std.nz(c.get()) + r), h.set(n.Std.nz(h
            .get()) + a * a * r);
          const u = l.get() / c.get(),
            _ = h.get() / c.get() - Math.pow(u, 2),
            p = Math.sqrt(Math.max(0, _)),
            m = "Standard Deviation" === t(1) ? p : .01 * u,
            g = t(2),
            f = t(3),
            seriesBarFunction_y = t(4),
            v = t(5),
            S = t(6),
            b = t(7);
          return [u, g ? u + m * f : NaN, g ? u - m * f : NaN, seriesBarFunction_y ? u + m * v : NaN, seriesBarFunction_y ? u - m * v : NaN, S ? u +
            m * b : NaN, S ? u - m * b : NaN
          ]
        }
        _resetHist(e) {
          e.reset_hist()
        }
      }
    }