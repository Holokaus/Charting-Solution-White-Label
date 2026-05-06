/**
 * Module 34378 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

34378: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      anchoredVWAPStudyItem: () => seriesBarFunction_r
    });
    const seriesBarFunction_s = {
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
        tooltip: "Determines the units used to calculate the distance of the bands. When 'Percentage' is selected, seriesBarFunction_a multiplier of 1 means 1%.",
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
    var seriesBarFunction_o = seriesBarFunction_i(50151),
      seriesBarFunction_n = seriesBarFunction_i(19979);
    const seriesBarFunction_r = {
      name: "Anchored VWAP",
      metainfo: seriesBarFunction_s,
      constructor: class {
        constructor() {
          this._isNewSession = null, this._firstBarTime = 0
        }
        init(seriesBarFunction_e, seriesBarFunction_t) {
          this._firstBarTime = seriesBarFunction_t(0), this._isNewSession = null
        }
        main(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
          if (void 0 === seriesBarFunction_i) return [NaN];
          (0, seriesBarFunction_o.assert)(seriesBarFunction_e.symbol.time === seriesBarFunction_i.time);
          const seriesBarFunction_s = seriesBarFunction_i.time;
          if (seriesBarFunction_s && seriesBarFunction_s < this._firstBarTime) return [NaN];
          const seriesBarFunction_r = seriesBarFunction_n.Std.volume(seriesBarFunction_e),
            seriesBarFunction_a = seriesBarFunction_n.Std[seriesBarFunction_t(8)](seriesBarFunction_e),
            seriesBarFunction_l = seriesBarFunction_e.new_unlimited_var(),
            seriesBarFunction_c = seriesBarFunction_e.new_unlimited_var(),
            seriesBarFunction_h = seriesBarFunction_e.new_unlimited_var(),
            seriesBarFunction_d = seriesBarFunction_e.symbol.time;
          null !== seriesBarFunction_d && (null === this._isNewSession && (this._isNewSession = seriesBarFunction_n.Std.createNewSessionCheck(seriesBarFunction_e)),
            this._isNewSession && this._isNewSession(seriesBarFunction_d) && (this._resetHist(seriesBarFunction_l), this._resetHist(seriesBarFunction_c), this
              ._resetHist(seriesBarFunction_h))), seriesBarFunction_l.set(seriesBarFunction_n.Std.nz(seriesBarFunction_l.get()) + seriesBarFunction_a * seriesBarFunction_r), seriesBarFunction_c.set(seriesBarFunction_n.Std.nz(seriesBarFunction_c.get()) + seriesBarFunction_r), seriesBarFunction_h.set(seriesBarFunction_n.Std.nz(seriesBarFunction_h
            .get()) + seriesBarFunction_a * seriesBarFunction_a * seriesBarFunction_r);
          const seriesBarFunction_u = seriesBarFunction_l.get() / seriesBarFunction_c.get(),
            _ = seriesBarFunction_h.get() / seriesBarFunction_c.get() - Math.pow(seriesBarFunction_u, 2),
            seriesBarFunction_p = Math.sqrt(Math.max(0, _)),
            seriesBarFunction_m = "Standard Deviation" === seriesBarFunction_t(1) ? seriesBarFunction_p : .01 * seriesBarFunction_u,
            seriesBarFunction_g = seriesBarFunction_t(2),
            seriesBarFunction_f = seriesBarFunction_t(3),
            seriesBarFunction_y = seriesBarFunction_t(4),
            seriesBarFunction_v = seriesBarFunction_t(5),
            S = seriesBarFunction_t(6),
            seriesBarFunction_b = seriesBarFunction_t(7);
          return [seriesBarFunction_u, seriesBarFunction_g ? seriesBarFunction_u + seriesBarFunction_m * seriesBarFunction_f : NaN, seriesBarFunction_g ? seriesBarFunction_u - seriesBarFunction_m * seriesBarFunction_f : NaN, seriesBarFunction_y ? seriesBarFunction_u + seriesBarFunction_m * seriesBarFunction_v : NaN, seriesBarFunction_y ? seriesBarFunction_u - seriesBarFunction_m * seriesBarFunction_v : NaN, S ? seriesBarFunction_u +
            seriesBarFunction_m * seriesBarFunction_b : NaN, S ? seriesBarFunction_u - seriesBarFunction_m * seriesBarFunction_b : NaN
          ]
        }
        _resetHist(seriesBarFunction_e) {
          seriesBarFunction_e.reset_hist()
        }
      }
    }