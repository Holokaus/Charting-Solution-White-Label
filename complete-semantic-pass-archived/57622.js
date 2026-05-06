/**
 * Module 57622 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57622: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      regressionTrendStudyItem: () => seriesBarFunction_n
    });
    var seriesBarFunction_s = seriesBarFunction_i(19979);

    function seriesBarFunction_o(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
      const seriesBarFunction_o = {
        slope: NaN,
        average: NaN,
        intercept: NaN,
        stdDev: NaN,
        upDev: NaN,
        downDev: NaN,
        pearsons: NaN
      };
      return 0 === seriesBarFunction_e.length || (function(seriesBarFunction_e, seriesBarFunction_t) {
        let seriesBarFunction_i = 0,
          seriesBarFunction_s = 0,
          seriesBarFunction_o = 0,
          seriesBarFunction_n = 0;
        for (let seriesBarFunction_t = 0; seriesBarFunction_t < seriesBarFunction_e.length; ++seriesBarFunction_t) {
          const seriesBarFunction_r = seriesBarFunction_e[seriesBarFunction_t],
            seriesBarFunction_a = seriesBarFunction_t + 1;
          seriesBarFunction_i += seriesBarFunction_a, seriesBarFunction_s += seriesBarFunction_r, seriesBarFunction_o += seriesBarFunction_a * seriesBarFunction_a, seriesBarFunction_n += seriesBarFunction_r * seriesBarFunction_a
        }
        seriesBarFunction_t.slope = (seriesBarFunction_e.length * seriesBarFunction_n - seriesBarFunction_i * seriesBarFunction_s) / (seriesBarFunction_e.length * seriesBarFunction_o - seriesBarFunction_i * seriesBarFunction_i), seriesBarFunction_t.average = seriesBarFunction_s / seriesBarFunction_e.length, seriesBarFunction_t.intercept = seriesBarFunction_t
          .average - seriesBarFunction_t.slope * seriesBarFunction_i / seriesBarFunction_e.length + seriesBarFunction_t.slope
      }(seriesBarFunction_e, seriesBarFunction_o), function(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_o) {
        let seriesBarFunction_n = 0,
          seriesBarFunction_r = 0,
          seriesBarFunction_a = 0,
          seriesBarFunction_l = 0,
          seriesBarFunction_c = 0,
          seriesBarFunction_h = 0,
          seriesBarFunction_d = seriesBarFunction_o.intercept;
        const seriesBarFunction_u = seriesBarFunction_e.length - 1,
          _ = seriesBarFunction_o.intercept + seriesBarFunction_o.slope * seriesBarFunction_u / 2;
        for (let seriesBarFunction_s = 0; seriesBarFunction_s <= seriesBarFunction_u; ++seriesBarFunction_s) {
          let seriesBarFunction_u = seriesBarFunction_t[seriesBarFunction_s] - seriesBarFunction_d;
          seriesBarFunction_u > seriesBarFunction_n && (seriesBarFunction_n = seriesBarFunction_u), seriesBarFunction_u = seriesBarFunction_d - seriesBarFunction_i[seriesBarFunction_s], seriesBarFunction_u > seriesBarFunction_r && (seriesBarFunction_r = seriesBarFunction_u), seriesBarFunction_u = seriesBarFunction_e[seriesBarFunction_s];
          const seriesBarFunction_p = seriesBarFunction_u - seriesBarFunction_o.average,
            seriesBarFunction_m = seriesBarFunction_d - _;
          seriesBarFunction_u -= seriesBarFunction_d, seriesBarFunction_a += seriesBarFunction_u * seriesBarFunction_u, seriesBarFunction_l += seriesBarFunction_p * seriesBarFunction_p, seriesBarFunction_c += seriesBarFunction_m * seriesBarFunction_m, seriesBarFunction_h += seriesBarFunction_p * seriesBarFunction_m, seriesBarFunction_d += seriesBarFunction_o.slope
        }
        seriesBarFunction_o.stdDev = Math.sqrt(seriesBarFunction_a / (0 === seriesBarFunction_u ? 1 : seriesBarFunction_u)), seriesBarFunction_o.pearsons = seriesBarFunction_s.Std.isZero(seriesBarFunction_l) || seriesBarFunction_s.Std.isZero(seriesBarFunction_c) ? 0 : seriesBarFunction_h / Math
          .sqrt(seriesBarFunction_l * seriesBarFunction_c), seriesBarFunction_o.upDev = seriesBarFunction_n, seriesBarFunction_o.downDev = seriesBarFunction_r
      }(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_o)), seriesBarFunction_o
    }
    const seriesBarFunction_n = {
      name: "Regression Trend",
      metainfo: {
        _metainfoVersion: 51,
        description: "Regression Trend",
        format: {
          type: "inherit"
        },
        id: "RegressionTrend@tv-basicstudies-144",
        is_hidden_study: !0,
        is_price_study: !0,
        shortDescription: "Reg Trend",
        defaults: {
          inputs: {
            "first bar time": 0,
            "last bar time": 0,
            "lower diviation": -2,
            source: "close",
            "upper diviation": 2,
            "use lower diviation": !0,
            "use upper diviation": !0
          },
          styles: {}
        },
        inputs: [{
          defval: 2,
          id: "upper diviation",
          max: 500,
          min: -500,
          name: "Upper Deviation",
          type: "float"
        }, {
          defval: -2,
          id: "lower diviation",
          max: 500,
          min: -500,
          name: "Lower Deviation",
          type: "float"
        }, {
          defval: !0,
          id: "use upper diviation",
          name: "Use Upper Deviation",
          type: "bool"
        }, {
          defval: !0,
          id: "use lower diviation",
          name: "Use Lower Deviation",
          type: "bool"
        }, {
          defval: 0,
          id: "first bar time",
          isHidden: !0,
          max: 253370764800,
          min: -253370764800,
          name: "First bar time",
          type: "time"
        }, {
          defval: 0,
          id: "last bar time",
          isHidden: !0,
          max: 253370764800,
          min: -253370764800,
          name: "Last bar time",
          type: "time"
        }, {
          defval: "close",
          id: "source",
          name: "Source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"],
          type: "source"
        }],
        plots: []
      },
      constructor: class {
        constructor() {
          this._resultSent = !1
        }
        init(seriesBarFunction_e, seriesBarFunction_t) {
          this._resultSent = !1, this._data = {
            baseLine: {
              startPrice: NaN,
              endPrice: NaN
            },
            upLine: {
              startPrice: NaN,
              endPrice: NaN
            },
            downLine: {
              startPrice: NaN,
              endPrice: NaN
            },
            pearsons: NaN,
            startIndex__t: NaN,
            endIndex__t: NaN
          }
        }
        main(seriesBarFunction_e, seriesBarFunction_t) {
          const seriesBarFunction_i = seriesBarFunction_t(6),
            seriesBarFunction_n = seriesBarFunction_e.new_unlimited_var(seriesBarFunction_s.Std.time(seriesBarFunction_e)),
            seriesBarFunction_r = seriesBarFunction_e.new_unlimited_var(seriesBarFunction_s.Std.high(seriesBarFunction_e)),
            seriesBarFunction_a = seriesBarFunction_e.new_unlimited_var(seriesBarFunction_s.Std.low(seriesBarFunction_e)),
            seriesBarFunction_l = seriesBarFunction_e.new_unlimited_var(seriesBarFunction_s.Std[seriesBarFunction_i](seriesBarFunction_e));
          if (!seriesBarFunction_e.symbol.isLastBar) return null;
          if (this._resultSent) return null;
          const seriesBarFunction_c = seriesBarFunction_t(0),
            seriesBarFunction_h = seriesBarFunction_t(1),
            seriesBarFunction_d = seriesBarFunction_t(2),
            seriesBarFunction_u = seriesBarFunction_t(3),
            _ = seriesBarFunction_t(4),
            seriesBarFunction_p = seriesBarFunction_t(5),
            seriesBarFunction_m = seriesBarFunction_n.indexOf(_),
            seriesBarFunction_g = seriesBarFunction_n.indexOf(seriesBarFunction_p),
            seriesBarFunction_f = [],
            seriesBarFunction_y = [],
            seriesBarFunction_v = [],
            S = [];
          for (let seriesBarFunction_e = seriesBarFunction_m; seriesBarFunction_e >= seriesBarFunction_g; --seriesBarFunction_e) seriesBarFunction_f.push(seriesBarFunction_n.get(seriesBarFunction_e)), seriesBarFunction_y.push(seriesBarFunction_r.get(seriesBarFunction_e)), seriesBarFunction_v.push(seriesBarFunction_a.get(seriesBarFunction_e)), S.push(seriesBarFunction_l.get(seriesBarFunction_e));
          return this._updateData(seriesBarFunction_f, seriesBarFunction_d, seriesBarFunction_c, seriesBarFunction_u, seriesBarFunction_h, _, seriesBarFunction_p, seriesBarFunction_o(S, seriesBarFunction_y, seriesBarFunction_v)), this._resultSent = !0, {
            type: "non_series_data",
            nonseries: !0,
            data: {
              data: this._data
            }
          }
        }
        _updateData(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s, seriesBarFunction_o, seriesBarFunction_n, seriesBarFunction_r, seriesBarFunction_a) {
          const seriesBarFunction_l = seriesBarFunction_e.length - 1;
          this._data.baseLine.startPrice = seriesBarFunction_a.intercept, this._data.baseLine.endPrice = seriesBarFunction_a.intercept + seriesBarFunction_a.slope * seriesBarFunction_l;
          const seriesBarFunction_c = seriesBarFunction_a.intercept + (seriesBarFunction_t ? seriesBarFunction_a.stdDev * seriesBarFunction_i : seriesBarFunction_a.upDev);
          this._data.upLine.startPrice = seriesBarFunction_c, this._data.upLine.endPrice = seriesBarFunction_c + seriesBarFunction_a.slope * seriesBarFunction_l;
          const seriesBarFunction_h = seriesBarFunction_a.intercept + (seriesBarFunction_s ? seriesBarFunction_a.stdDev * seriesBarFunction_o : -seriesBarFunction_a.downDev);
          this._data.downLine.startPrice = seriesBarFunction_h, this._data.downLine.endPrice = seriesBarFunction_h + seriesBarFunction_a.slope * seriesBarFunction_l, this._data
            .pearsons = seriesBarFunction_a.pearsons, this._data.startIndex__t = seriesBarFunction_n, this._data.endIndex__t = seriesBarFunction_r
        }
      }
    }