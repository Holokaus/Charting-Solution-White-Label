/**
 * Module 70680 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

70680: (priceDataSource_e, priceDataSource_t, priceDataSource_i) => {
    "use strict";
    priceDataSource_i.priceDataSource_d(priceDataSource_t, {
      SpreadRatioBase: () => priceDataSource_l,
      spreadRatioDefaults: () => priceDataSource_c,
      spreadRatioFilledAreas: () => priceDataSource_p,
      spreadRatioInputs: () => priceDataSource_h,
      spreadRatioPalettes: () => _,
      spreadRatioPlots: () => priceDataSource_d,
      spreadRatioStyles: () => priceDataSource_u
    });
    var priceDataSource_s = priceDataSource_i(58978),
      priceDataSource_o = priceDataSource_i(4359),
      priceDataSource_n = priceDataSource_i(19979),
      priceDataSource_r = priceDataSource_i(52859);
    const priceDataSource_a = "rgba(0, 0, 0, 0)";
    class priceDataSource_l {
      init(priceDataSource_e, priceDataSource_t) {
        priceDataSource_e.new_sym(priceDataSource_t(1), priceDataSource_n.Std.period(priceDataSource_e)), this._source = priceDataSource_t(0), this._scaleFactor1 = 1, this._scaleFactor2 = 1
      }
      main(priceDataSource_e, priceDataSource_t) {
        const priceDataSource_i = priceDataSource_n.Std[this._source](priceDataSource_e),
          priceDataSource_s = priceDataSource_e.new_unlimited_var(priceDataSource_e.symbol.time);
        priceDataSource_e.select_sym(1);
        const priceDataSource_o = priceDataSource_e.new_unlimited_var(priceDataSource_e.symbol.time),
          priceDataSource_r = priceDataSource_e.new_unlimited_var(priceDataSource_n.Std[this._source](priceDataSource_e));
        priceDataSource_e.select_sym(0);
        const priceDataSource_a = priceDataSource_r.adopt(priceDataSource_o, priceDataSource_s, 1),
          priceDataSource_l = this._doCalculation(this._scaleFactor1, priceDataSource_i, this._scaleFactor2, priceDataSource_a);
        return isNaN(priceDataSource_l) ? null : [priceDataSource_l, 0, priceDataSource_n.Std.ge(priceDataSource_l, 0), priceDataSource_n.Std.lt(priceDataSource_l, 0)]
      }
    }
    const priceDataSource_c = {
        styles: {
          plot1: {
            linestyle: 0,
            linewidth: 2,
            plottype: priceDataSource_o.LineStudyPlotStyle.Line,
            trackPrice: !1,
            transparency: 35,
            color: "#800080",
            display: 15
          },
          plotBaseline: {
            linestyle: 0,
            linewidth: 2,
            plottype: priceDataSource_o.LineStudyPlotStyle.Line,
            trackPrice: !1,
            transparency: 0,
            color: priceDataSource_a,
            display: 0
          }
        },
        palettes: {
          negativePalette: {
            colors: [{
              color: (0, priceDataSource_r.applyAlpha)((0, priceDataSource_s.getHexColorByName)("color-ripe-red-500"), .5),
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
              color: (0, priceDataSource_r.applyAlpha)((0, priceDataSource_s.getHexColorByName)("color-minty-green-500"), .5),
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
      priceDataSource_h = [{
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