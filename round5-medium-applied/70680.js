/**
 * Module 70680 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

70680: (e, t, i) => {
    "use strict";
    i.d(t, {
      SpreadRatioBase: () => l,
      spreadRatioDefaults: () => c,
      spreadRatioFilledAreas: () => priceDataSource_p,
      spreadRatioInputs: () => h,
      spreadRatioPalettes: () => _,
      spreadRatioPlots: () => d,
      spreadRatioStyles: () => priceDataSource_u
    });
    var s = i(58978),
      o = i(4359),
      n = i(19979),
      r = i(52859);
    const a = "rgba(0, 0, 0, 0)";
    class l {
      init(e, t) {
        e.new_sym(t(1), n.Std.period(e)), this._source = t(0), this._scaleFactor1 = 1, this._scaleFactor2 = 1
      }
      main(e, t) {
        const i = n.Std[this._source](e),
          s = e.new_unlimited_var(e.symbol.time);
        e.select_sym(1);
        const o = e.new_unlimited_var(e.symbol.time),
          r = e.new_unlimited_var(n.Std[this._source](e));
        e.select_sym(0);
        const a = r.adopt(o, s, 1),
          l = this._doCalculation(this._scaleFactor1, i, this._scaleFactor2, a);
        return isNaN(l) ? null : [l, 0, n.Std.ge(l, 0), n.Std.lt(l, 0)]
      }
    }
    const c = {
        styles: {
          plot1: {
            linestyle: 0,
            linewidth: 2,
            plottype: o.LineStudyPlotStyle.Line,
            trackPrice: !1,
            transparency: 35,
            color: "#800080",
            display: 15
          },
          plotBaseline: {
            linestyle: 0,
            linewidth: 2,
            plottype: o.LineStudyPlotStyle.Line,
            trackPrice: !1,
            transparency: 0,
            color: a,
            display: 0
          }
        },
        palettes: {
          negativePalette: {
            colors: [{
              color: (0, r.applyAlpha)((0, s.getHexColorByName)("color-ripe-red-500"), .5),
              style: 0,
              width: 0
            }, {
              color: a,
              style: 0,
              width: 0
            }]
          },
          positivePalette: {
            colors: [{
              color: (0, r.applyAlpha)((0, s.getHexColorByName)("color-minty-green-500"), .5),
              style: 0,
              width: 0
            }, {
              color: a,
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
      h = [{
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
      d = [{
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