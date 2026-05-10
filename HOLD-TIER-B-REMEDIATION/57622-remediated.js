/**
 * Module 57622 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

57622: (exports, t, i) => {
    "use strict";
    i.d(t, {
      regressionTrendStudyItem: () => n
    });
    var modes = i(19979);

    function options(exports, t, i) {
      const o = {
        slope: NaN,
        average: NaN,
        intercept: NaN,
        stdDev: NaN,
        upDev: NaN,
        downDev: NaN,
        pearsons: NaN
      };
      return 0 === exports.length || (function(exports, t) {
        let i = 0,
          modes = 0,
          o = 0,
          n = 0;
        for (let t = 0; t < exports.length; ++t) {
          const r = exports[t],
            seriesBarFunction_a = t + 1;
          i += seriesBarFunction_a, modes += r, o += seriesBarFunction_a * seriesBarFunction_a, n += r * seriesBarFunction_a
        }
        t.slope = (exports.length * n - i * modes) / (exports.length * o - i * i), t.average = modes / exports.length, t.intercept = t
          .average - t.slope * i / exports.length + t.slope
      }(exports, o), function(exports, t, i, o) {
        let n = 0,
          r = 0,
          seriesBarFunction_a = 0,
          l = 0,
          c = 0,
          h = 0,
          d = o.intercept;
        const u = exports.length - 1,
          _ = o.intercept + o.slope * u / 2;
        for (let modes = 0; modes <= u; ++modes) {
          let u = t[modes] - d;
          u > n && (n = u), u = d - i[modes], u > r && (r = u), u = exports[modes];
          const p = u - o.average,
            m = d - _;
          u -= d, seriesBarFunction_a += u * u, l += p * p, c += m * m, h += p * m, d += o.slope
        }
        o.stdDev = Math.sqrt(seriesBarFunction_a / (0 === u ? 1 : u)), o.pearsons = modes.Std.isZero(l) || modes.Std.isZero(c) ? 0 : h / Math
          .sqrt(l * c), o.upDev = n, o.downDev = r
      }(exports, t, i, o)), o
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
        init(exports, t) {
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
        main(exports, t) {
          const i = t(6),
            n = exports.new_unlimited_var(modes.Std.time(exports)),
            r = exports.new_unlimited_var(modes.Std.high(exports)),
            seriesBarFunction_a = exports.new_unlimited_var(modes.Std.low(exports)),
            l = exports.new_unlimited_var(modes.Std[i](exports));
          if (!exports.symbol.isLastBar) return null;
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
          for (let exports = m; exports >= g; --exports) f.push(n.get(exports)), y.push(r.get(exports)), v.push(seriesBarFunction_a.get(exports)), S.push(l.get(exports));
          return this._updateData(f, d, c, u, h, _, p, o(S, y, v)), this._resultSent = !0, {
            type: "non_series_data",
            nonseries: !0,
            data: {
              data: this._data
            }
          }
        }
        _updateData(exports, t, i, modes, o, n, r, seriesBarFunction_a) {
          const l = exports.length - 1;
          this._data.baseLine.startPrice = seriesBarFunction_a.intercept, this._data.baseLine.endPrice = seriesBarFunction_a.intercept + seriesBarFunction_a.slope * l;
          const c = seriesBarFunction_a.intercept + (t ? seriesBarFunction_a.stdDev * i : seriesBarFunction_a.upDev);
          this._data.upLine.startPrice = c, this._data.upLine.endPrice = c + seriesBarFunction_a.slope * l;
          const h = seriesBarFunction_a.intercept + (modes ? seriesBarFunction_a.stdDev * o : -seriesBarFunction_a.downDev);
          this._data.downLine.startPrice = h, this._data.downLine.endPrice = h + seriesBarFunction_a.slope * l, this._data
            .pearsons = seriesBarFunction_a.pearsons, this._data.startIndex__t = n, this._data.endIndex__t = r
        }
      }
    }