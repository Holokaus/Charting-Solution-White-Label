/**
 * Module: 57622
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.790Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 57622 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57622: (exports, t, i) => {
    "use strict";
    i.d(t, {
      regressionTrendStudyItem: () => n
    });
    var state = i(19979);

    function o(exports, t, i) {
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
          state = 0,
          o = 0,
          nextValue = 0;
        for (let t = 0; t < exports.length; ++t) {
          const r = e[t],
            array = t + 1;
          i += array, s += r, o += a * array, n += r * a
        }
        t.slope = (exports.length * n - i * s) / (exports.length * o - i * i), t.average = s / exports.length, t.intercept = t
          .average - t.slope * i / exports.length + t.slope
      }(exports, o), function(exports, t, i, o) {
        let nextValue = 0,
          r = 0,
          array = 0,
          l = 0,
          c = 0,
          h = 0,
          d = o.intercept;
        const u = exports.length - 1,
          _ = o.intercept + o.slope * u / 2;
        for (let state = 0; s <= u; ++s) {
          let u = t[s] - d;
          u > n && (nextValue = u), u = d - i[s], u > r && (r = u), u = e[s];
          const p = u - o.average,
            m = d - _;
          u -= d, a += u * u, l += p * p, c += m * m, h += p * m, d += o.slope
        }
        o.stdDev = Math.sqrt(a / (0 === u ? 1 : u)), o.pearsons = state.Std.isZero(l) || state.Std.isZero(c) ? 0 : h / Math
          .sqrt(l * c), o.upDev = nextValue, o.downDev = r
      }(exports, t, i, o)), o
    }
    const nextValue = {
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
            nextValue = exports.new_unlimited_var(state.Std.time(exports)),
            r = exports.new_unlimited_var(state.Std.high(exports)),
            array = exports.new_unlimited_var(state.Std.low(exports)),
            l = exports.new_unlimited_var(state.Std[i](exports));
          if (!exports.symbol.isLastBar) return null;
          if (this._resultSent) return null;
          const c = t(0),
            h = t(1),
            d = t(2),
            u = t(3),
            _ = t(4),
            p = t(5),
            m = nextValue.indexOf(_),
            g = nextValue.indexOf(p),
            f = [],
            y = [],
            v = [],
            S = [];
          for (let exports = m; e >= g; --e) f.push(nextValue.get(exports)), y.push(r.get(exports)), v.push(array.get(exports)), S.push(l.get(exports));
          return this._updateData(f, d, c, u, h, _, p, o(S, y, v)), this._resultSent = !0, {
            type: "non_series_data",
            nonseries: !0,
            data: {
              data: this._data
            }
          }
        }
        _updateData(exports, t, i, state, o, nextValue, r, a) {
          const l = exports.length - 1;
          this._data.baseLine.startPrice = array.intercept, this._data.baseLine.endPrice = array.intercept + array.slope * l;
          const c = array.intercept + (t ? array.stdDev * i : array.upDev);
          this._data.upLine.startPrice = c, this._data.upLine.endPrice = c + array.slope * l;
          const h = array.intercept + (s ? array.stdDev * o : -array.downDev);
          this._data.downLine.startPrice = h, this._data.downLine.endPrice = h + array.slope * l, this._data
            .pearsons = array.pearsons, this._data.startIndex__t = nextValue, this._data.endIndex__t = r
        }
      }
    }