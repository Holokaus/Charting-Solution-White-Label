/**
 * Module 39488 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39488: (logger_e, t, i) => {
    "use strict";
    i.d(t, {
      StaticStudyGraphics: () => d,
      emptyStudyGraphics: () => g,
      loadStudyGraphics: () => f,
      saveStudyGraphics: () => y
    });
    var logger_s = i(82284),
      o = i(60661),
      logger_n = i(58554),
      r = i(99481),
      a = i(30798),
      l = i(69866),
      c = i(82130),
      h = i(87465);
    class d {
      constructor(logger_e, t) {
        if (this._indexes = [], this._horizlines = new Map, this._vertlines = new Map, this._lines = new Map, this
          ._hlines = new Map, this._textmarks = new Map, this._shapemarks = new Map, this._backgrounds = new Map, this
          ._polygons = new Map, this._trendchannels = new Map, this._hhists = new Map, this._dwglabels = new Map, this
          ._dwglines = new Map, this._dwgpolylines = new Map, this._dwgboxes = new Map, this._dwgtables = new Map,
          this._dwgtablecells = new Map, this._dwglinefills = new Map, this._tpos = new Map, this._tpoBlockSets =
          new Map, this._tpoLevelGroups = new Map, this._tpoVolumeRows = new Map, this._tpoSummaryInfo = new Map, this
          ._logs = new Map,
          this._performance = new Map, this._footprints = new Map, this._footprintLevels = new Map, "data" === logger_e) {
          const logger_e = t;
          this._indexes = logger_e.indexes, this._vertlines = u(logger_e.vertlines, this._indexes, logger_n.materializeVertLine), this
            ._horizlines = u(logger_e.horizlines, this._indexes, o.materializeHorizLine), this._polygons = u(logger_e.polygons, this
              ._indexes, a.materializePolygon), this._hhists = u(logger_e.hhists, this._indexes, r.materializeHHist), this
            ._backgrounds = u(logger_e.backgrounds, this._indexes, l.materializeBackground)
        } else if ("state" === logger_e) {
          const logger_e = t;
          this._indexes = logger_e.indexes || [], this._vertlines = _(logger_e.vertlines, this._indexes, logger_n.materializeVertLine),
            this._horizlines = _(logger_e.horizlines, this._indexes, o.materializeHorizLine), this._polygons = _(logger_e.polygons,
              this._indexes, a.materializePolygon), this._hhists = _(logger_e.hhists, this._indexes, r.materializeHHist),
            this._backgrounds = _(logger_e.backgrounds, this._indexes, l.materializeBackground)
        }
        this._hhistsByTimePointIndex = (0, c.splitHHistsByTimePointIndex)(this._hhists)
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

    function u(logger_e, t, i) {
      return new Map(Array.from(logger_e.entries()).map((logger_e => [logger_e[0], new Set(Array.from(logger_e[1]).map((logger_e => i(logger_e, t))).filter(h
        .notNull))])))
    }

    function _(logger_e, t, i) {
      const logger_s = new Map;
      if (void 0 === logger_e) return logger_s;
      for (const o of logger_e) {
        const logger_e = o.styleId,
          logger_n = logger_s.get(logger_e) || new Set;
        o.data.forEach((logger_e => {
          const logger_s = i(logger_e, t);
          null !== logger_s && logger_n.add(logger_s)
        })), logger_s.set(logger_e, logger_n)
      }
      return logger_s
    }

    function p(logger_e, t, i) {
      let logger_s = null;
      for (const i of logger_e) i.styleId === t && (logger_s = i);
      null === logger_s && (logger_s = {
        styleId: t,
        data: []
      }, logger_e.push(logger_s)), logger_s.data.push(i)
    }

    function m(logger_e, t, i, logger_s, o, logger_n) {
      const r = [];
      return logger_e.forEach(((logger_e, a) => {
        logger_e.forEach((logger_e => {
          (null === o || logger_s(logger_e, o)) && p(r, a, logger_n(logger_e, t(logger_e), i))
        }))
      })), r.length > 0 ? r : void 0
    }

    function g() {
      return new d
    }

    function f(logger_e) {
      return new d("state", logger_e)
    }

    function y(logger_e, t) {
      const i = function(logger_e) {
          const t = new Set,
            i = logger_e => {
              null != logger_e && t.add(logger_e)
            };
          logger_e.horizlines().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.startIndex ?? logger_s.INVALID_TIME_POINT_INDEX), t.add(logger_e.endIndex)
            }))
          })), logger_e.vertlines().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.index)
            }))
          })), logger_e.lines().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.startIndex), t.add(logger_e.endIndex)
            }))
          })), logger_e.textmarks().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.time)
            }))
          })), logger_e.shapemarks().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.time)
            }))
          })), logger_e.backgrounds().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              t.add(null !== logger_e.start ? logger_e.start : logger_s.INVALID_TIME_POINT_INDEX), t.add(logger_e.stop)
            }))
          })), logger_e.polygons().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              logger_e.points.forEach((logger_e => {
                t.add(logger_e.index)
              }))
            }))
          })), logger_e.trendchannels().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.startIndex), t.add(logger_e.endIndex)
            }))
          })), logger_e.hhists().forEach(((logger_e, i) => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.firstBarTime ?? logger_s.INVALID_TIME_POINT_INDEX), t.add(logger_e.lastBarTime)
            }))
          })), logger_e.dwglabels().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                t.add(logger_e.x)
              }))
            }))
          })), logger_e.dwglines().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                t.add(logger_e.x1 ?? logger_s.INVALID_TIME_POINT_INDEX), t.add(logger_e.x2 ?? logger_s.INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), logger_e.dwgpolylines().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                for (const i of logger_e.points) t.add(i.x ?? logger_s.INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), logger_e.dwgboxes().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                t.add(logger_e.left ?? logger_s.INVALID_TIME_POINT_INDEX), t.add(logger_e.right ?? logger_s
                  .INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), logger_e.tpos().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.firstBarTime), t.add(logger_e.lastBarTime)
            }))
          })), logger_e.tpoLevels().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              logger_e.forEach((logger_e => {
                i(logger_e.poorHighExtendTo), i(logger_e.poorLowExtendTo), i(logger_e.tpoPocExtendTo), (logger_e.singleprints ??
                []).map((logger_e => logger_e.extendTo)).map(i)
              }))
            }))
          })), logger_e.footprints().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.index)
            }))
          })), logger_e.footprintLevels().forEach((logger_e => {
            logger_e.forEach((logger_e => {
              t.add(logger_e.startIndex), i(logger_e.extendTo)
            }))
          }));
          const o = Array.from(t);
          return o.sort(((logger_e, t) => logger_e - t)), o
        }(logger_e),
        c = {
          indexes: i
        };
      let h = 0;
      const d = () => ++h;
      return c.vertlines = m(logger_e.vertlines(), d, i, logger_n.isVertLineInBarsRange, t, logger_n.dematerializeVertLine), c.horizlines =
        m(logger_e.horizlines(), d, i, o.isHorizLineInBarsRange, t, o.dematerializeHorizLine), c.polygons = m(logger_e.polygons(), d,
          i, a.isPolygonInBarsRange, t, a.dematerializePolygon), c.hhists = m(logger_e.hhists(), d, i, r.isHHistInBarsRange, t,
          r.dematerializeHHist), c.backgrounds = m(logger_e.backgrounds(), d, i, l.isBackgroundInBarsRange, t, l
          .dematerializeBackground), c
    }
}
