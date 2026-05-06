/**
 * Module 32503 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32503: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_d(logger_t, {
      pivotPointsStandardStudyItem: () => logger_p
    });
    var logger_s, logger_o, logger_n = logger_i(51101),
      logger_r = logger_i(50151),
      logger_a = logger_i(51829),
      logger_l = logger_i(46082),
      logger_c = logger_i(4622),
      logger_h = logger_i(19979);
    ! function(logger_e) {
      logger_e[logger_e.TRADITIONAL = 0] = "TRADITIONAL", logger_e[logger_e.FIBONACCI = 1] = "FIBONACCI", logger_e[logger_e.WOODIE = 2] = "WOODIE", logger_e[logger_e.CLASSIC =
        3] = "CLASSIC", logger_e[logger_e.DEMARK = 4] = "DEMARK", logger_e[logger_e.CAMARILLA = 5] = "CAMARILLA", logger_e[logger_e.FLOOR = 6] = "FLOOR"
    }(logger_s || (logger_s = {})),
    function(logger_e) {
      logger_e.AUTO = "Auto", logger_e.DAILY = "Daily", logger_e.WEEKLY = "Weekly", logger_e.MONTHLY = "Monthly", logger_e.YEARLY = "Yearly"
    }(logger_o || (logger_o = {}));
    class logger_d {
      constructor() {
        this.logger_p = NaN, this.r1 = NaN, this.s1 = NaN, this.r2 = NaN, this.s2 = NaN, this.r3 = NaN, this.s3 = NaN, this
          .r4 = NaN, this.s4 = NaN, this.r5 = NaN, this.s5 = NaN, this.startIndex__t = NaN, this.endIndex__t = NaN
      }
    }
    class logger_u {
      constructor() {
        this.pivots = []
      }
    }

    function _(logger_e, logger_t) {
      let logger_i;
      switch (logger_t) {
        case "Auto":
          logger_i = function(logger_e) {
            const logger_t = logger_l.Interval.parse(logger_e.interval + logger_e.resolution);
            switch (logger_t.kind()) {
              case logger_l.ResolutionKind.Weeks:
              case logger_l.ResolutionKind.Months:
                return "12M";
              case logger_l.ResolutionKind.Days:
                return "1M";
              case logger_l.ResolutionKind.Minutes:
                return logger_t.multiplier() >= 1 && logger_t.multiplier() <= 15 ? "1D" : "1W";
              case logger_l.ResolutionKind.Seconds:
              case logger_l.ResolutionKind.Ticks:
                return "1D"
            }
            throw new Error("Unexpected resolution type: " + logger_e.resolution)
          }(logger_e);
          break;
        case "Daily":
          logger_i = "1D";
          break;
        case "Weekly":
          logger_i = "1W";
          break;
        case "Monthly":
          logger_i = "1M";
          break;
        case "Yearly":
          logger_i = "12M";
          break;
        default:
          throw new Error("No such pivTimeFrame: " + logger_t)
      }
      const logger_s = "D" === logger_e.resolution && "Daily" === logger_t,
        logger_o = "W" === logger_e.resolution && ("Daily" === logger_t || "Weekly" === logger_t),
        logger_n = "M" === logger_e.resolution && ("Daily" === logger_t || "Weekly" === logger_t || "Monthly" === logger_t);
      return (logger_s || logger_o || logger_n || logger_e.info && (0, logger_c.findSuitableResolutionToBuildFrom)(logger_i, logger_e.info).error) && logger_h.Std.error(
        "You cannot see this pivot timeframe on this resolution"), logger_i
    }
    const logger_p = {
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
        init(logger_e, logger_t) {
          this._isValidResolution = !1;
          const logger_i = logger_t(0),
            logger_s = logger_t(1),
            logger_o = logger_t(2),
            logger_a = logger_t(3);
          this._data = new logger_u, this._firstMainSeriesBarTime = NaN, this._kindPP = function(logger_e) {
            switch (logger_e) {
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
                throw new Error("Unknown kind " + logger_e)
            }
          }(logger_i), this._showHistoricalPivots = logger_s, this._historicalPivotsToKeep = logger_a, this._pivTimeFrame = logger_o;
          const logger_l = logger_t(4);
          let logger_c;
          logger_c = "" === logger_l ? logger_e.new_sym(logger_e.symbol.tickerid, _(logger_e.symbol, this._pivTimeFrame)) : logger_e.new_sym(logger_l, _(logger_e.symbol,
            logger_o)), this._isValidResolution = !0, (0, logger_r.assert)(logger_c.isdwm(),
            "logger_a DWM resolution is required to use logger_a multi-day bar builder"), this._barBuilder = (0, logger_n
            .newBarBuilder)(logger_c.period, logger_e.symbol.session)
        }
        main(logger_e, logger_t, logger_i) {
          if (!this._isValidResolution) return null;
          if (logger_e.is_main_symbol(logger_i)) return isNaN(this._firstMainSeriesBarTime) && (this._firstMainSeriesBarTime = logger_e
              .symbol.time, this._removeUnusedPivots()), logger_e.symbol.isLastBar && logger_e.symbol.isNewBar ? this
            ._createResponse() : null;
          logger_e.select_sym(1);
          const logger_s = logger_e.new_var(logger_h.Std.open(logger_e)),
            logger_o = logger_e.new_var(logger_h.Std.high(logger_e)),
            logger_n = logger_e.new_var(logger_h.Std.low(logger_e)),
            logger_r = logger_e.new_var(logger_h.Std.close(logger_e)),
            logger_l = this._data,
            logger_c = logger_s.get(0),
            logger_u = logger_s.get(1),
            _ = logger_o.get(1),
            logger_p = logger_n.get(1),
            logger_m = logger_r.get(1),
            logger_g = logger_e.symbol.isLastBar;
          if (0 === logger_e.symbol.index || !logger_e.symbol.isNewBar) return logger_e.select_sym(0), null;
          this._barBuilder.moveTo(logger_e.symbol.time);
          const logger_f = function(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n, logger_r, logger_a) {
            const logger_l = new logger_d;
            let logger_c = NaN;
            const logger_u = logger_i - logger_s;
            switch (logger_a) {
              case 0:
                logger_c = (logger_i + logger_s + logger_o) / 3, logger_l.logger_p = logger_c, logger_l.r1 = 2 * logger_c - logger_s, logger_l.s1 = 2 * logger_c - logger_i, logger_l.r2 = logger_c + (logger_i - logger_s), logger_l.s2 = logger_c -
                  (logger_i - logger_s), logger_l.r3 = 2 * logger_c + (logger_i - 2 * logger_s), logger_l.s3 = 2 * logger_c - (2 * logger_i - logger_s), logger_l.r4 = 3 * logger_c + (logger_i - 3 * logger_s), logger_l
                  .s4 = 3 * logger_c - (3 * logger_i - logger_s), logger_l.r5 = 4 * logger_c + (logger_i - 4 * logger_s), logger_l.s5 = 4 * logger_c - (4 * logger_i - logger_s);
                break;
              case 1:
                logger_c = (logger_i + logger_s + logger_o) / 3, logger_l.logger_p = logger_c, logger_l.r1 = logger_c + .382 * logger_u, logger_l.s1 = logger_c - .382 * logger_u, logger_l.r2 = logger_c + .618 * logger_u, logger_l
                  .s2 = logger_c - .618 * logger_u, logger_l.r3 = logger_c + logger_u, logger_l.s3 = logger_c - logger_u;
                break;
              case 2:
                logger_c = (logger_i + logger_s + 2 * logger_e) / 4, logger_l.logger_p = logger_c, logger_l.r1 = 2 * logger_c - logger_s, logger_l.s1 = 2 * logger_c - logger_i, logger_l.r2 = logger_c + logger_u, logger_l.s2 = logger_c -
                  logger_u, logger_l.r3 = logger_i + 2 * (logger_c - logger_s), logger_l.s3 = logger_s - 2 * (logger_i - logger_c), logger_l.r4 = logger_l.r3 + logger_u, logger_l.s4 = logger_l.s3 - logger_u;
                break;
              case 3:
                logger_c = (logger_i + logger_s + logger_o) / 3, logger_l.logger_p = logger_c, logger_l.r1 = 2 * logger_c - logger_s, logger_l.s1 = 2 * logger_c - logger_i, logger_l.r2 = logger_c + logger_u, logger_l.s2 = logger_c - logger_u, logger_l
                  .r3 = logger_c + 2 * logger_u, logger_l.s3 = logger_c - 2 * logger_u, logger_l.r4 = logger_c + 3 * logger_u, logger_l.s4 = logger_c - 3 * logger_u;
                break;
              case 4:
                let logger_n = NaN;
                logger_n = logger_h.Std.equal(logger_t, logger_o) ? logger_i + logger_s + 2 * logger_o : logger_h.Std.greater(logger_o, logger_t) ? 2 * logger_i + logger_s + logger_o : 2 * logger_s + logger_i + logger_o, logger_c =
                  logger_n / 4, logger_l.logger_p = logger_c, logger_l.r1 = logger_n / 2 - logger_s, logger_l.s1 = logger_n / 2 - logger_i;
                break;
              case 5:
                logger_c = (logger_i + logger_s + logger_o) / 3, logger_l.logger_p = logger_c, logger_l.r1 = logger_o + 1.1 * logger_u / 12, logger_l.s1 = logger_o - 1.1 * logger_u / 12, logger_l.r2 = logger_o + 1.1 *
                  logger_u / 6, logger_l.s2 = logger_o - 1.1 * logger_u / 6, logger_l.r3 = logger_o + 1.1 * logger_u / 4, logger_l.s3 = logger_o - 1.1 * logger_u / 4, logger_l.r4 = logger_o +
                  1.1 * logger_u / 2, logger_l.s4 = logger_o - 1.1 * logger_u / 2;
                break;
              case 6:
                logger_c = (logger_i + logger_s + logger_o) / 3, logger_l.logger_p = logger_c, logger_l.r1 = 2 * logger_c - logger_s, logger_l.s1 = 2 * logger_c - logger_i, logger_l.r2 = logger_c + (logger_i - logger_s), logger_l.s2 = logger_c -
                  (logger_i - logger_s), logger_l.r3 = logger_c - logger_l.s1 + logger_l.r2, logger_l.s3 = 2 * logger_c - (2 * logger_i - logger_s);
                break;
              default:
                throw new Error("Unknown kind")
            }
            return logger_l.startIndex__t = logger_n, logger_l.endIndex__t = logger_r, logger_l
          }(logger_c, logger_u, _, logger_p, logger_m, this._barBuilder.startOfBar(0), this._barBuilder.startOfBar(logger_a.SessionStage
            .POST_SESSION), this._kindPP);
          return logger_e.select_sym(0), this._showHistoricalPivots || (logger_l.pivots = []), logger_l.pivots.push(logger_f), logger_l.pivots
            .length > this._historicalPivotsToKeep && logger_l.pivots.shift(), logger_g ? this._createResponse() : null
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
          const logger_e = Math.max(this._data.pivots.findIndex((logger_e => logger_e.startIndex__t > this._firstMainSeriesBarTime)) -
            1, 0);
          logger_e > 0 && this._data.pivots.splice(0, logger_e)
        }
      }
    }