/**
 * Module 57622 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57622: (seriesBarFunction_e, t, i) => {
    "use strict";
    i.d(t, {
      regressionTrendStudyItem: () => n
    });
    var seriesBarFunction_s = i(19979);

    function o(seriesBarFunction_e, t, i) {
      const o = {
        slope: NaN,
        average: NaN,
        intercept: NaN,
        stdDev: NaN,
        upDev: NaN,
        downDev: NaN,
        pearsons: NaN
      };
      return 0 === seriesBarFunction_e.length || (function(seriesBarFunction_e, t) {
        let i = 0,
          seriesBarFunction_s = 0,
          o = 0,
          n = 0;
        for (let t = 0; t < seriesBarFunction_e.length; ++t) {
          const r = seriesBarFunction_e[t],
            seriesBarFunction_a = t + 1;
          i += seriesBarFunction_a, seriesBarFunction_s += r, o += seriesBarFunction_a * seriesBarFunction_a, n += r * seriesBarFunction_a
        }
        t.slope = (seriesBarFunction_e.length * n - i * seriesBarFunction_s) / (seriesBarFunction_e.length * o - i * i), t.average = seriesBarFunction_s / seriesBarFunction_e.length, t.intercept = t
          .average - t.slope * i / seriesBarFunction_e.length + t.slope
      }(seriesBarFunction_e, o), function(seriesBarFunction_e, t, i, o) {
        let n = 0,
          r = 0,
          seriesBarFunction_a = 0,
          l = 0,
          c = 0,
          h = 0,
          d = o.intercept;
        const u = seriesBarFunction_e.length - 1,
          _ = o.intercept + o.slope * u / 2;
        for (let seriesBarFunction_s = 0; seriesBarFunction_s <= u; ++seriesBarFunction_s) {
          let u = t[seriesBarFunction_s] - d;
          u > n && (n = u), u = d - i[seriesBarFunction_s], u > r && (r = u), u = seriesBarFunction_e[seriesBarFunction_s];
          const p = u - o.average,
            m = d - _;
          u -= d, seriesBarFunction_a += u * u, l += p * p, c += m * m, h += p * m, d += o.slope
        }
        o.stdDev = Math.sqrt(seriesBarFunction_a / (0 === u ? 1 : u)), o.pearsons = seriesBarFunction_s.Std.isZero(l) || seriesBarFunction_s.Std.isZero(c) ? 0 : h / Math
          .sqrt(l * c), o.upDev = n, o.downDev = r
      }(seriesBarFunction_e, t, i, o)), o
    }
    const n = {
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
        init(seriesBarFunction_e, t) {
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
        main(seriesBarFunction_e, t) {
          const i = t(6),
            n = seriesBarFunction_e.new_unlimited_var(seriesBarFunction_s.Std.time(seriesBarFunction_e)),
            r = seriesBarFunction_e.new_unlimited_var(seriesBarFunction_s.Std.high(seriesBarFunction_e)),
            seriesBarFunction_a = seriesBarFunction_e.new_unlimited_var(seriesBarFunction_s.Std.low(seriesBarFunction_e)),
            l = seriesBarFunction_e.new_unlimited_var(seriesBarFunction_s.Std[i](seriesBarFunction_e));
          if (!seriesBarFunction_e.symbol.isLastBar) return null;
          if (this._resultSent) return null;
          const c = t(0),
            h = t(1),
            d = t(2),
            u = t(3),
            _ = t(4),
            p = t(5),
            m = n.indexOf(_),
            g = n.indexOf(p),
            f = [],
            y = [],
            v = [],
            S = [];
          for (let seriesBarFunction_e = m; seriesBarFunction_e >= g; --seriesBarFunction_e) f.push(n.get(seriesBarFunction_e)), y.push(r.get(seriesBarFunction_e)), v.push(seriesBarFunction_a.get(seriesBarFunction_e)), S.push(l.get(seriesBarFunction_e));
          return this._updateData(f, d, c, u, h, _, p, o(S, y, v)), this._resultSent = !0, {
            type: "non_series_data",
            nonseries: !0,
            data: {
              data: this._data
            }
          }
        }
        _updateData(seriesBarFunction_e, t, i, seriesBarFunction_s, o, n, r, seriesBarFunction_a) {
          const l = seriesBarFunction_e.length - 1;
          this._data.baseLine.startPrice = seriesBarFunction_a.intercept, this._data.baseLine.endPrice = seriesBarFunction_a.intercept + seriesBarFunction_a.slope * l;
          const c = seriesBarFunction_a.intercept + (t ? seriesBarFunction_a.stdDev * i : seriesBarFunction_a.upDev);
          this._data.upLine.startPrice = c, this._data.upLine.endPrice = c + seriesBarFunction_a.slope * l;
          const h = seriesBarFunction_a.intercept + (seriesBarFunction_s ? seriesBarFunction_a.stdDev * o : -seriesBarFunction_a.downDev);
          this._data.downLine.startPrice = h, this._data.downLine.endPrice = h + seriesBarFunction_a.slope * l, this._data
            .pearsons = seriesBarFunction_a.pearsons, this._data.startIndex__t = n, this._data.endIndex__t = r
        }
      }
    }
}
