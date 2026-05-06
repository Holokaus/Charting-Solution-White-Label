/**
 * Module 32503 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32503: (e, t, i) => {
    "use strict";
    i.d(t, {
      pivotPointsStandardStudyItem: () => p
    });
    var s, o, n = i(51101),
      r = i(50151),
      a = i(51829),
      l = i(46082),
      c = i(4622),
      h = i(19979);
    ! function(e) {
      e[e.TRADITIONAL = 0] = "TRADITIONAL", e[e.FIBONACCI = 1] = "FIBONACCI", e[e.WOODIE = 2] = "WOODIE", e[e.CLASSIC =
        3] = "CLASSIC", e[e.DEMARK = 4] = "DEMARK", e[e.CAMARILLA = 5] = "CAMARILLA", e[e.FLOOR = 6] = "FLOOR"
    }(s || (s = {})),
    function(e) {
      e.AUTO = "Auto", e.DAILY = "Daily", e.WEEKLY = "Weekly", e.MONTHLY = "Monthly", e.YEARLY = "Yearly"
    }(o || (o = {}));
    class d {
      constructor() {
        this.p = NaN, this.r1 = NaN, this.s1 = NaN, this.r2 = NaN, this.s2 = NaN, this.r3 = NaN, this.s3 = NaN, this
          .r4 = NaN, this.s4 = NaN, this.r5 = NaN, this.s5 = NaN, this.startIndex__t = NaN, this.endIndex__t = NaN
      }
    }
    class u {
      constructor() {
        this.pivots = []
      }
    }

    function _(e, t) {
      let i;
      switch (t) {
        case "Auto":
          i = function(e) {
            const t = l.Interval.parse(e.interval + e.resolution);
            switch (t.kind()) {
              case l.ResolutionKind.Weeks:
              case l.ResolutionKind.Months:
                return "12M";
              case l.ResolutionKind.Days:
                return "1M";
              case l.ResolutionKind.Minutes:
                return t.multiplier() >= 1 && t.multiplier() <= 15 ? "1D" : "1W";
              case l.ResolutionKind.Seconds:
              case l.ResolutionKind.Ticks:
                return "1D"
            }
            throw new Error("Unexpected resolution type: " + e.resolution)
          }(e);
          break;
        case "Daily":
          i = "1D";
          break;
        case "Weekly":
          i = "1W";
          break;
        case "Monthly":
          i = "1M";
          break;
        case "Yearly":
          i = "12M";
          break;
        default:
          throw new Error("No such pivTimeFrame: " + t)
      }
      const s = "D" === e.resolution && "Daily" === t,
        o = "W" === e.resolution && ("Daily" === t || "Weekly" === t),
        n = "M" === e.resolution && ("Daily" === t || "Weekly" === t || "Monthly" === t);
      return (s || o || n || e.info && (0, c.findSuitableResolutionToBuildFrom)(i, e.info).error) && h.Std.error(
        "You cannot see this pivot timeframe on this resolution"), i
    }
    const p = {
      name: "Pivot Points Standard",
      metainfo: {
        _metainfoVersion: 44,
        defaults: {
          inputs: {
            kind: "Traditional",
            lookBack: 15,
            pivTimeFrame: "Auto",
            showHistoricalPivots: !0,
            symbol: ""
          },
          precision: "4"
        },
        description: "Pivot Points Standard",
        id: "PivotPointsStandard@tv-basicstudies-80",
        inputs: [{
          defval: "Traditional",
          id: "kind",
          name: "Type",
          options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla", "Floor"],
          type: "text"
        }, {
          defval: !0,
          id: "showHistoricalPivots",
          name: "Show historical pivots",
          type: "bool"
        }, {
          defval: "Auto",
          id: "pivTimeFrame",
          name: "Pivots Timeframe",
          options: ["Auto", "Daily", "Weekly", "Monthly", "Yearly"],
          type: "text"
        }, {
          defval: 15,
          id: "lookBack",
          max: 5e3,
          min: 1,
          name: "Number of Pivots Back",
          type: "integer"
        }, {
          defval: "",
          id: "symbol",
          name: "Other Symbol",
          type: "symbol",
          optional: !0
        }],
        is_price_study: !0,
        linkedToSeries: !0,
        shortDescription: "Pivots",
        format: {
          type: "price",
          precision: 4
        }
      },
      constructor: class {
        constructor() {
          this._firstMainSeriesBarTime = NaN
        }
        init(e, t) {
          this._isValidResolution = !1;
          const i = t(0),
            s = t(1),
            o = t(2),
            a = t(3);
          this._data = new u, this._firstMainSeriesBarTime = NaN, this._kindPP = function(e) {
            switch (e) {
              case "Traditional":
                return 0;
              case "Fibonacci":
                return 1;
              case "Woodie":
                return 2;
              case "Classic":
                return 3;
              case "DeMark":
                return 4;
              case "Camarilla":
                return 5;
              case "Floor":
                return 6;
              default:
                throw new Error("Unknown kind " + e)
            }
          }(i), this._showHistoricalPivots = s, this._historicalPivotsToKeep = a, this._pivTimeFrame = o;
          const l = t(4);
          let c;
          c = "" === l ? e.new_sym(e.symbol.tickerid, _(e.symbol, this._pivTimeFrame)) : e.new_sym(l, _(e.symbol,
            o)), this._isValidResolution = !0, (0, r.assert)(c.isdwm(),
            "a DWM resolution is required to use a multi-day bar builder"), this._barBuilder = (0, n
            .newBarBuilder)(c.period, e.symbol.session)
        }
        main(e, t, i) {
          if (!this._isValidResolution) return null;
          if (e.is_main_symbol(i)) return isNaN(this._firstMainSeriesBarTime) && (this._firstMainSeriesBarTime = e
              .symbol.time, this._removeUnusedPivots()), e.symbol.isLastBar && e.symbol.isNewBar ? this
            ._createResponse() : null;
          e.select_sym(1);
          const s = e.new_var(h.Std.open(e)),
            o = e.new_var(h.Std.high(e)),
            n = e.new_var(h.Std.low(e)),
            r = e.new_var(h.Std.close(e)),
            l = this._data,
            c = s.get(0),
            u = s.get(1),
            _ = o.get(1),
            p = n.get(1),
            m = r.get(1),
            g = e.symbol.isLastBar;
          if (0 === e.symbol.index || !e.symbol.isNewBar) return e.select_sym(0), null;
          this._barBuilder.moveTo(e.symbol.time);
          const f = function(e, t, i, s, o, n, r, a) {
            const l = new d;
            let c = NaN;
            const u = i - s;
            switch (a) {
              case 0:
                c = (i + s + o) / 3, l.p = c, l.r1 = 2 * c - s, l.s1 = 2 * c - i, l.r2 = c + (i - s), l.s2 = c -
                  (i - s), l.r3 = 2 * c + (i - 2 * s), l.s3 = 2 * c - (2 * i - s), l.r4 = 3 * c + (i - 3 * s), l
                  .s4 = 3 * c - (3 * i - s), l.r5 = 4 * c + (i - 4 * s), l.s5 = 4 * c - (4 * i - s);
                break;
              case 1:
                c = (i + s + o) / 3, l.p = c, l.r1 = c + .382 * u, l.s1 = c - .382 * u, l.r2 = c + .618 * u, l
                  .s2 = c - .618 * u, l.r3 = c + u, l.s3 = c - u;
                break;
              case 2:
                c = (i + s + 2 * e) / 4, l.p = c, l.r1 = 2 * c - s, l.s1 = 2 * c - i, l.r2 = c + u, l.s2 = c -
                  u, l.r3 = i + 2 * (c - s), l.s3 = s - 2 * (i - c), l.r4 = l.r3 + u, l.s4 = l.s3 - u;
                break;
              case 3:
                c = (i + s + o) / 3, l.p = c, l.r1 = 2 * c - s, l.s1 = 2 * c - i, l.r2 = c + u, l.s2 = c - u, l
                  .r3 = c + 2 * u, l.s3 = c - 2 * u, l.r4 = c + 3 * u, l.s4 = c - 3 * u;
                break;
              case 4:
                let n = NaN;
                n = h.Std.equal(t, o) ? i + s + 2 * o : h.Std.greater(o, t) ? 2 * i + s + o : 2 * s + i + o, c =
                  n / 4, l.p = c, l.r1 = n / 2 - s, l.s1 = n / 2 - i;
                break;
              case 5:
                c = (i + s + o) / 3, l.p = c, l.r1 = o + 1.1 * u / 12, l.s1 = o - 1.1 * u / 12, l.r2 = o + 1.1 *
                  u / 6, l.s2 = o - 1.1 * u / 6, l.r3 = o + 1.1 * u / 4, l.s3 = o - 1.1 * u / 4, l.r4 = o +
                  1.1 * u / 2, l.s4 = o - 1.1 * u / 2;
                break;
              case 6:
                c = (i + s + o) / 3, l.p = c, l.r1 = 2 * c - s, l.s1 = 2 * c - i, l.r2 = c + (i - s), l.s2 = c -
                  (i - s), l.r3 = c - l.s1 + l.r2, l.s3 = 2 * c - (2 * i - s);
                break;
              default:
                throw new Error("Unknown kind")
            }
            return l.startIndex__t = n, l.endIndex__t = r, l
          }(c, u, _, p, m, this._barBuilder.startOfBar(0), this._barBuilder.startOfBar(a.SessionStage
            .POST_SESSION), this._kindPP);
          return e.select_sym(0), this._showHistoricalPivots || (l.pivots = []), l.pivots.push(f), l.pivots
            .length > this._historicalPivotsToKeep && l.pivots.shift(), g ? this._createResponse() : null
        }
        _createResponse() {
          return 0 === this._data.pivots.length ? null : {
            nonseries: !0,
            type: "non_series_data",
            data: {
              data: this._data
            }
          }
        }
        _removeUnusedPivots() {
          const e = Math.max(this._data.pivots.findIndex((e => e.startIndex__t > this._firstMainSeriesBarTime)) -
            1, 0);
          e > 0 && this._data.pivots.splice(0, e)
        }
      }
    }