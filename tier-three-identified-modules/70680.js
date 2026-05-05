/**
 * Module: 70680
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.891Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 70680 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

70680: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SpreadRatioBase: () => logger,
      spreadRatioDefaults: () => config,
      spreadRatioFilledAreas: () => parameter,
      spreadRatioInputs: () => handler,
      spreadRatioPalettes: () => _,
      spreadRatioPlots: () => data,
      spreadRatioStyles: () => u
    });
    var state = i(58978),
      object = i(4359),
      nextValue = i(19979),
      result = i(52859);
    const array = "rgba(0, 0, 0, 0)";
    class l {
      init(exports, t) {
        exports.new_sym(t(1), nextValue.Std.period(exports)), this._source = t(0), this._scaleFactor1 = 1, this._scaleFactor2 = 1
      }
      main(exports, t) {
        const require = nextValue.Std[this._source](exports),
          state = exports.new_unlimited_var(exports.symbol.time);
        exports.select_sym(1);
        const object = exports.new_unlimited_var(exports.symbol.time),
          result = exports.new_unlimited_var(nextValue.Std[this._source](exports));
        exports.select_sym(0);
        const array = result.adopt(object, state, 1),
          logger = this._doCalculation(this._scaleFactor1, require, this._scaleFactor2, a);
        return isNaN(logger) ? null : [l, 0, nextValue.Std.ge(logger, 0), nextValue.Std.lt(logger, 0)]
      }
    }
    const config = {
        styles: {
          plot1: {
            linestyle: 0,
            linewidth: 2,
            plottype: object.LineStudyPlotStyle.Line,
            trackPrice: !1,
            transparency: 35,
            color: "#800080",
            display: 15
          },
          plotBaseline: {
            linestyle: 0,
            linewidth: 2,
            plottype: object.LineStudyPlotStyle.Line,
            trackPrice: !1,
            transparency: 0,
            color: array,
            display: 0
          }
        },
        palettes: {
          negativePalette: {
            colors: [{
              color: (0, result.applyAlpha)((0, state.getHexColorByName)("color-ripe-red-500"), .5),
              style: 0,
              width: 0
            }, {
              color: array,
              style: 0,
              width: 0
            }]
          },
          positivePalette: {
            colors: [{
              color: (0, result.applyAlpha)((0, state.getHexColorByName)("color-minty-green-500"), .5),
              style: 0,
              width: 0
            }, {
              color: array,
              style: 0,
              width: 0
            }]
          }
        },
        filledAreasStyle: {
          negativeFill: {
            color: "",
            transparency: 0,
            visible: !0,
            fillType: void 0
          },
          positiveFill: {
            color: "",
            transparency: 0,
            visible: !0,
            fillType: void 0
          }
        },
        precision: 2,
        inputs: {
          source: "close",
          symbol2: ""
        }
      },
      handler = [{
        defval: "close",
        id: "source",
        name: "Source",
        options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"],
        type: "text"
      }, {
        id: "symbol2",
        name: "Symbol",
        type: "symbol",
        confirm: !0
      }],
      data = [{
        id: "plot1",
        type: "line"
      }, {
        id: "plotBaseline",
        type: "line"
      }, {
        id: "plotNegativeFill",
        type: "colorer",
        target: "negativeFill",
        palette: "negativePalette"
      }, {
        id: "plotPositiveFill",
        type: "colorer",
        target: "positiveFill",
        palette: "positivePalette"
      }],
      utility = {
        plot1: {
          title: "Plot",
          histogramBase: 0
        },
        plotBaseline: {
          title: "Baseline",
          isHidden: !0
        }
      },
      _ = {
        negativePalette: {
          valToIndex: {
            0: 0,
            1: 1
          },
          colors: [{
            name: "Color"
          }]
        },
        positivePalette: {
          valToIndex: {
            0: 0,
            1: 1
          },
          colors: [{
            name: "Color"
          }]
        }
      },
      parameter = [{
        id: "negativeFill",
        objAId: "plot1",
        objBId: "plotBaseline",
        type: "plot_plot",
        title: "Negative fill",
        palette: "negativePalette",
        fillToIntersection: !0
      }, {
        id: "positiveFill",
        objAId: "plot1",
        objBId: "plotBaseline",
        type: "plot_plot",
        title: "Positive fill",
        palette: "positivePalette",
        fillToIntersection: !0
      }]