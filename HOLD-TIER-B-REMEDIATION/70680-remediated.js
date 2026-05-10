/**
 * Module 70680 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

70680: (exports, module, require) => {
    "use strict";
    require.priceDataSource_d(module, {
      SpreadRatioBase: () => priceDataSource_l,
      spreadRatioDefaults: () => priceDataSource_c,
      spreadRatioFilledAreas: () => priceDataSource_p,
      spreadRatioInputs: () => handler,
      spreadRatioPalettes: () => _,
      spreadRatioPlots: () => priceDataSource_d,
      spreadRatioStyles: () => priceDataSource_u
    });
    var utils = require(58978),
      hasVolume = require(4359),
      name = require(19979),
      config = require(52859);
    const priceDataSource_a = "rgba(0, 0, 0, 0)";
    class priceDataSource_l {
      init(exports, module) {
        exports.new_sym(module(1), name.Std.period(exports)), this._source = module(0), this._scaleFactor1 = 1, this._scaleFactor2 = 1
      }
      main(exports, module) {
        const require = name.Std[this._source](exports),
          utils = exports.new_unlimited_var(exports.symbol.time);
        exports.select_sym(1);
        const hasVolume = exports.new_unlimited_var(exports.symbol.time),
          config = exports.new_unlimited_var(name.Std[this._source](exports));
        exports.select_sym(0);
        const priceDataSource_a = config.adopt(hasVolume, utils, 1),
          priceDataSource_l = this._doCalculation(this._scaleFactor1, require, this._scaleFactor2, priceDataSource_a);
        return isNaN(priceDataSource_l) ? null : [priceDataSource_l, 0, name.Std.ge(priceDataSource_l, 0), name.Std.lt(priceDataSource_l, 0)]
      }
    }
    const priceDataSource_c = {
        styles: {
          plot1: {
            linestyle: 0,
            linewidth: 2,
            plottype: hasVolume.LineStudyPlotStyle.Line,
            trackPrice: !1,
            transparency: 35,
            color: "#800080",
            display: 15
          },
          plotBaseline: {
            linestyle: 0,
            linewidth: 2,
            plottype: hasVolume.LineStudyPlotStyle.Line,
            trackPrice: !1,
            transparency: 0,
            color: priceDataSource_a,
            display: 0
          }
        },
        palettes: {
          negativePalette: {
            colors: [{
              color: (0, config.applyAlpha)((0, utils.getHexColorByName)("color-ripe-red-500"), .5),
              style: 0,
              width: 0
            }, {
              color: priceDataSource_a,
              style: 0,
              width: 0
            }]
          },
          positivePalette: {
            colors: [{
              color: (0, config.applyAlpha)((0, utils.getHexColorByName)("color-minty-green-500"), .5),
              style: 0,
              width: 0
            }, {
              color: priceDataSource_a,
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
      priceDataSource_d = [{
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
      priceDataSource_u = {
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
      priceDataSource_p = [{
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