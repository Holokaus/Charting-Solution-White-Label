/**
 * Module 34378 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (10350 bytes) - comprehensive remediation applied
 */

34378: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      anchoredVWAPStudyItem: () => config
    });
    const modes = {
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
        tooltip: "Determines the units used to calculate the distance of the bands. When 'Percentage' is selected, items multiplier of 1 means 1%.",
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
    var isValid = require(50151),
      value = require(19979);
    const config = {
      name: "Anchored VWAP",
      metainfo: modes,
      constructor: class {
        constructor() {
          this._isNewSession = null, this._firstBarTime = 0
        }
        init(exports, module) {
          this._firstBarTime = module(0), this._isNewSession = null
        }
        main(exports, module, require) {
          if (void 0 === require) return [NaN];
          (0, isValid.assert)(exports.symbol.time === require.time);
          const modes = require.time;
          if (modes && modes < this._firstBarTime) return [NaN];
          const config = value.Std.volume(exports),
            items = value.Std[module(8)](exports),
            length = exports.new_unlimited_var(),
            context = exports.new_unlimited_var(),
            handler = exports.new_unlimited_var(),
            seriesBarFunction_d = exports.symbol.time;
          null !== seriesBarFunction_d && (null === this._isNewSession && (this._isNewSession = value.Std.createNewSessionCheck(exports)),
            this._isNewSession && this._isNewSession(seriesBarFunction_d) && (this._resetHist(length), this._resetHist(context), this
              ._resetHist(handler))), length.set(value.Std.nz(length.get()) + items * config), context.set(value.Std.nz(context.get()) + config), handler.set(value.Std.nz(handler
            .get()) + items * items * config);
          const seriesBarFunction_u = length.get() / context.get(),
            _ = handler.get() / context.get() - Math.pow(seriesBarFunction_u, 2),
            seriesBarFunction_p = Math.sqrt(Math.max(0, _)),
            seriesBarFunction_m = "Standard Deviation" === module(1) ? seriesBarFunction_p : .01 * seriesBarFunction_u,
            seriesBarFunction_g = module(2),
            seriesBarFunction_f = module(3),
            seriesBarFunction_y = module(4),
            seriesBarFunction_v = module(5),
            S = module(6),
            seriesBarFunction_b = module(7);
          return [seriesBarFunction_u, seriesBarFunction_g ? seriesBarFunction_u + seriesBarFunction_m * seriesBarFunction_f : NaN, seriesBarFunction_g ? seriesBarFunction_u - seriesBarFunction_m * seriesBarFunction_f : NaN, seriesBarFunction_y ? seriesBarFunction_u + seriesBarFunction_m * seriesBarFunction_v : NaN, seriesBarFunction_y ? seriesBarFunction_u - seriesBarFunction_m * seriesBarFunction_v : NaN, S ? seriesBarFunction_u +
            seriesBarFunction_m * seriesBarFunction_b : NaN, S ? seriesBarFunction_u - seriesBarFunction_m * seriesBarFunction_b : NaN
          ]
        }
        _resetHist(exports) {
          exports.reset_hist()
        }
      }
    }