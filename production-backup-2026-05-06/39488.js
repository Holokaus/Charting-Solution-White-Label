/**
 * Module 39488 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39488: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_d(logger_t, {
      StaticStudyGraphics: () => logger_d,
      emptyStudyGraphics: () => logger_g,
      loadStudyGraphics: () => logger_f,
      saveStudyGraphics: () => logger_y
    });
    var logger_s = logger_i(82284),
      logger_o = logger_i(60661),
      logger_n = logger_i(58554),
      logger_r = logger_i(99481),
      logger_a = logger_i(30798),
      logger_l = logger_i(69866),
      logger_c = logger_i(82130),
      logger_h = logger_i(87465);
    class logger_d {
      constructor(logger_e, logger_t) {
        if (this._indexes = [], this._horizlines = new Map, this._vertlines = new Map, this._lines = new Map, this
          ._hlines = new Map, this._textmarks = new Map, this._shapemarks = new Map, this._backgrounds = new Map, this
          ._polygons = new Map, this._trendchannels = new Map, this._hhists = new Map, this._dwglabels = new Map, this
          ._dwglines = new Map, this._dwgpolylines = new Map, this._dwgboxes = new Map, this._dwgtables = new Map,
          this._dwgtablecells = new Map, this._dwglinefills = new Map, this._tpos = new Map, this._tpoBlockSets =
          new Map, this._tpoLevelGroups = new Map, this._tpoVolumeRows = new Map, this._tpoSummaryInfo = new Map, this
          ._logs = new Map,
          this._performance = new Map, this._footprints = new Map, this._footprintLevels = new Map, "data" === logger_e) {
          const logger_e = logger_t;
          this._indexes = logger_e.indexes, this._vertlines = logger_u(logger_e.vertlines, this._indexes, logger_n.materializeVertLine), this
            ._horizlines = logger_u(logger_e.horizlines, this._indexes, logger_o.materializeHorizLine), this._polygons = logger_u(logger_e.polygons, this
              ._indexes, logger_a.materializePolygon), this._hhists = logger_u(logger_e.hhists, this._indexes, logger_r.materializeHHist), this
            ._backgrounds = logger_u(logger_e.backgrounds, this._indexes, logger_l.materializeBackground)
        } else if ("state" === logger_e) {
          const logger_e = logger_t;
          this._indexes = logger_e.indexes || [], this._vertlines = _(logger_e.vertlines, this._indexes, logger_n.materializeVertLine),
            this._horizlines = _(logger_e.horizlines, this._indexes, logger_o.materializeHorizLine), this._polygons = _(logger_e.polygons,
              this._indexes, logger_a.materializePolygon), this._hhists = _(logger_e.hhists, this._indexes, logger_r.materializeHHist),
            this._backgrounds = _(logger_e.backgrounds, this._indexes, logger_l.materializeBackground)
        }
        this._hhistsByTimePointIndex = (0, logger_c.splitHHistsByTimePointIndex)(this._hhists)
      }
      horizlines() {
        return this._horizlines
      }
      vertlines() {
        return this._vertlines
      }
      lines() {
        return this._lines
      }
      hlines() {
        return this._hlines
      }
      textmarks() {
        return this._textmarks
      }
      shapemarks() {
        return this._shapemarks
      }
      backgrounds() {
        return this._backgrounds
      }
      polygons() {
        return this._polygons
      }
      trendchannels() {
        return this._trendchannels
      }
      hhists() {
        return this._hhists
      }
      dwglabels() {
        return this._dwglabels
      }
      dwglines() {
        return this._dwglines
      }
      dwgpolylines() {
        return this._dwgpolylines
      }
      dwgboxes() {
        return this._dwgboxes
      }
      dwgtables() {
        return this._dwgtables
      }
      dwgtablecells() {
        return this._dwgtablecells
      }
      dwglinefills() {
        return this._dwglinefills
      }
      tpos() {
        return this._tpos
      }
      tpoBlockSets() {
        return this._tpoBlockSets
      }
      tpoLevels(logger_e) {
        return this._tpoLevelGroups
      }
      tpoVolumeRows(logger_e) {
        return this._tpoVolumeRows
      }
      tpoSummaryInfo(logger_e) {
        return this._tpoSummaryInfo
      }
      logs() {
        return this._logs
      }
      performance() {
        return this._performance
      }
      footprints() {
        return this._footprints
      }
      footprintLevels() {
        return this._footprintLevels
      }
      hhistsByTimePointIndex() {
        return this._hhistsByTimePointIndex
      }
    }

    function logger_u(logger_e, logger_t, logger_i) {
      return new Map(Array.from(logger_e.entries()).map((logger_e => [logger_e[0], new Set(Array.from(logger_e[1]).map((logger_e => logger_i(logger_e, logger_t))).filter(logger_h
        .notNull))])))
    }

    function _(logger_e, logger_t, logger_i) {
      const logger_s = new Map;
      if (void 0 === logger_e) return logger_s;
      for (const logger_o of logger_e) {
        const logger_e = logger_o.styleId,
          logger_n = logger_s.get(logger_e) || new Set;
        logger_o.data.forEach((logger_e => {
          const logger_s = logger_i(logger_e, logger_t);
          null !== logger_s && logger_n.add(logger_s)
        })), logger_s.set(logger_e, logger_n)
      }
      return logger_s
    }

    function logger_p(logger_e, logger_t, logger_i) {
      let logger_s = null;
      for (const logger_i of logger_e) logger_i.styleId === logger_t && (logger_s = logger_i);
      null === logger_s && (logger_s = {
        styleId: logger_t,
        data: []
      }, logger_e.push(logger_s)), logger_s.data.push(logger_i)
    }

    function logger_m(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n) {
      const logger_r = [];
      return logger_e.forEach(((logger_e, logger_a) => {
        logger_e.forEach((logger_e => {
          (null === logger_o || logger_s(logger_e, logger_o)) && logger_p(logger_r, logger_a, logger_n(logger_e, logger_t(logger_e), logger_i))
        }))
      })), logger_r.length > 0 ? logger_r : void 0
    }

    function logger_g() {
      return new logger_d
    }

    function logger_f(logger_e) {
      return new logger_d("state", logger_e)
    }

    function logger_y(logger_e, logger_t) {
      const logger_i = function(logger_e) {
          const logger_t = new Set,
            logger_i = logger_e => {
              null != logger_e && logger_t.add(logger_e)
            };
          logger_e.horizlines().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.startIndex ?? logger_s.INVALID_TIME_POINT_INDEX), logger_t.add(logger_e.endIndex)
            }))
          })), logger_e.vertlines().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.index)
            }))
          })), logger_e.lines().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.startIndex), logger_t.add(logger_e.endIndex)
            }))
          })), logger_e.textmarks().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.time)
            }))
          })), logger_e.shapemarks().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.time)
            }))
          })), logger_e.backgrounds().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_t.add(null !== logger_e.start ? logger_e.start : logger_s.INVALID_TIME_POINT_INDEX), logger_t.add(logger_e.stop)
            }))
          })), logger_e.polygons().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_e.points.forEach((logger_e => {
                logger_t.add(logger_e.index)
              }))
            }))
          })), logger_e.trendchannels().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.startIndex), logger_t.add(logger_e.endIndex)
            }))
          })), logger_e.hhists().forEach(((logger_e, logger_i) => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.firstBarTime ?? logger_s.INVALID_TIME_POINT_INDEX), logger_t.add(logger_e.lastBarTime)
            }))
          })), logger_e.dwglabels().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                logger_t.add(logger_e.logger_x)
              }))
            }))
          })), logger_e.dwglines().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                logger_t.add(logger_e.x1 ?? logger_s.INVALID_TIME_POINT_INDEX), logger_t.add(logger_e.x2 ?? logger_s.INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), logger_e.dwgpolylines().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                for (const logger_i of logger_e.points) logger_t.add(logger_i.logger_x ?? logger_s.INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), logger_e.dwgboxes().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                logger_t.add(logger_e.left ?? logger_s.INVALID_TIME_POINT_INDEX), logger_t.add(logger_e.right ?? logger_s
                  .INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), logger_e.tpos().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.firstBarTime), logger_t.add(logger_e.lastBarTime)
            }))
          })), logger_e.tpoLevels().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                logger_i(logger_e.poorHighExtendTo), logger_i(logger_e.poorLowExtendTo), logger_i(logger_e.tpoPocExtendTo), (logger_e.singleprints ??
                []).map((logger_e => logger_e.extendTo)).map(logger_i)
              }))
            }))
          })), logger_e.footprints().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.index)
            }))
          })), logger_e.footprintLevels().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_t.add(logger_e.startIndex), logger_i(logger_e.extendTo)
            }))
          }));
          const logger_o = Array.from(logger_t);
          return logger_o.sort(((logger_e, logger_t) => logger_e - logger_t)), logger_o
        }(logger_e),
        logger_c = {
          indexes: logger_i
        };
      let logger_h = 0;
      const logger_d = () => ++logger_h;
      return logger_c.vertlines = logger_m(logger_e.vertlines(), logger_d, logger_i, logger_n.isVertLineInBarsRange, logger_t, logger_n.dematerializeVertLine), logger_c.horizlines =
        logger_m(logger_e.horizlines(), logger_d, logger_i, logger_o.isHorizLineInBarsRange, logger_t, logger_o.dematerializeHorizLine), logger_c.polygons = logger_m(logger_e.polygons(), logger_d,
          logger_i, logger_a.isPolygonInBarsRange, logger_t, logger_a.dematerializePolygon), logger_c.hhists = logger_m(logger_e.hhists(), logger_d, logger_i, logger_r.isHHistInBarsRange, logger_t,
          logger_r.dematerializeHHist), logger_c.backgrounds = logger_m(logger_e.backgrounds(), logger_d, logger_i, logger_l.isBackgroundInBarsRange, logger_t, logger_l
          .dematerializeBackground), logger_c
    }