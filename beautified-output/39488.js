/**
 * Module 39488 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39488: (e, t, i) => {
    "use strict";
    i.d(t, {
      StaticStudyGraphics: () => d,
      emptyStudyGraphics: () => g,
      loadStudyGraphics: () => f,
      saveStudyGraphics: () => y
    });
    var s = i(82284),
      o = i(60661),
      n = i(58554),
      r = i(99481),
      a = i(30798),
      l = i(69866),
      c = i(82130),
      h = i(87465);
    class d {
      constructor(e, t) {
        if (this._indexes = [], this._horizlines = new Map, this._vertlines = new Map, this._lines = new Map, this
          ._hlines = new Map, this._textmarks = new Map, this._shapemarks = new Map, this._backgrounds = new Map, this
          ._polygons = new Map, this._trendchannels = new Map, this._hhists = new Map, this._dwglabels = new Map, this
          ._dwglines = new Map, this._dwgpolylines = new Map, this._dwgboxes = new Map, this._dwgtables = new Map,
          this._dwgtablecells = new Map, this._dwglinefills = new Map, this._tpos = new Map, this._tpoBlockSets =
          new Map, this._tpoLevelGroups = new Map, this._tpoVolumeRows = new Map, this._tpoSummaryInfo = new Map, this
          ._logs = new Map,
          this._performance = new Map, this._footprints = new Map, this._footprintLevels = new Map, "data" === e) {
          const e = t;
          this._indexes = e.indexes, this._vertlines = u(e.vertlines, this._indexes, n.materializeVertLine), this
            ._horizlines = u(e.horizlines, this._indexes, o.materializeHorizLine), this._polygons = u(e.polygons, this
              ._indexes, a.materializePolygon), this._hhists = u(e.hhists, this._indexes, r.materializeHHist), this
            ._backgrounds = u(e.backgrounds, this._indexes, l.materializeBackground)
        } else if ("state" === e) {
          const e = t;
          this._indexes = e.indexes || [], this._vertlines = _(e.vertlines, this._indexes, n.materializeVertLine),
            this._horizlines = _(e.horizlines, this._indexes, o.materializeHorizLine), this._polygons = _(e.polygons,
              this._indexes, a.materializePolygon), this._hhists = _(e.hhists, this._indexes, r.materializeHHist),
            this._backgrounds = _(e.backgrounds, this._indexes, l.materializeBackground)
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
      tpoLevels(e) {
        return this._tpoLevelGroups
      }
      tpoVolumeRows(e) {
        return this._tpoVolumeRows
      }
      tpoSummaryInfo(e) {
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

    function u(e, t, i) {
      return new Map(Array.from(e.entries()).map((e => [e[0], new Set(Array.from(e[1]).map((e => i(e, t))).filter(h
        .notNull))])))
    }

    function _(e, t, i) {
      const s = new Map;
      if (void 0 === e) return s;
      for (const o of e) {
        const e = o.styleId,
          n = s.get(e) || new Set;
        o.data.forEach((e => {
          const s = i(e, t);
          null !== s && n.add(s)
        })), s.set(e, n)
      }
      return s
    }

    function p(e, t, i) {
      let s = null;
      for (const i of e) i.styleId === t && (s = i);
      null === s && (s = {
        styleId: t,
        data: []
      }, e.push(s)), s.data.push(i)
    }

    function m(e, t, i, s, o, n) {
      const r = [];
      return e.forEach(((e, a) => {
        e.forEach((e => {
          (null === o || s(e, o)) && p(r, a, n(e, t(e), i))
        }))
      })), r.length > 0 ? r : void 0
    }

    function g() {
      return new d
    }

    function f(e) {
      return new d("state", e)
    }

    function y(e, t) {
      const i = function(e) {
          const t = new Set,
            i = e => {
              null != e && t.add(e)
            };
          e.horizlines().forEach(((e, i) => {
            e.forEach((e => {
              t.add(e.startIndex ?? s.INVALID_TIME_POINT_INDEX), t.add(e.endIndex)
            }))
          })), e.vertlines().forEach(((e, i) => {
            e.forEach((e => {
              t.add(e.index)
            }))
          })), e.lines().forEach(((e, i) => {
            e.forEach((e => {
              t.add(e.startIndex), t.add(e.endIndex)
            }))
          })), e.textmarks().forEach(((e, i) => {
            e.forEach((e => {
              t.add(e.time)
            }))
          })), e.shapemarks().forEach(((e, i) => {
            e.forEach((e => {
              t.add(e.time)
            }))
          })), e.backgrounds().forEach(((e, i) => {
            e.forEach((e => {
              t.add(null !== e.start ? e.start : s.INVALID_TIME_POINT_INDEX), t.add(e.stop)
            }))
          })), e.polygons().forEach(((e, i) => {
            e.forEach((e => {
              e.points.forEach((e => {
                t.add(e.index)
              }))
            }))
          })), e.trendchannels().forEach(((e, i) => {
            e.forEach((e => {
              t.add(e.startIndex), t.add(e.endIndex)
            }))
          })), e.hhists().forEach(((e, i) => {
            e.forEach((e => {
              t.add(e.firstBarTime ?? s.INVALID_TIME_POINT_INDEX), t.add(e.lastBarTime)
            }))
          })), e.dwglabels().forEach((e => {
            e.forEach((e => {
              e.forEach((e => {
                t.add(e.x)
              }))
            }))
          })), e.dwglines().forEach((e => {
            e.forEach((e => {
              e.forEach((e => {
                t.add(e.x1 ?? s.INVALID_TIME_POINT_INDEX), t.add(e.x2 ?? s.INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), e.dwgpolylines().forEach((e => {
            e.forEach((e => {
              e.forEach((e => {
                for (const i of e.points) t.add(i.x ?? s.INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), e.dwgboxes().forEach((e => {
            e.forEach((e => {
              e.forEach((e => {
                t.add(e.left ?? s.INVALID_TIME_POINT_INDEX), t.add(e.right ?? s
                  .INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), e.tpos().forEach((e => {
            e.forEach((e => {
              t.add(e.firstBarTime), t.add(e.lastBarTime)
            }))
          })), e.tpoLevels().forEach((e => {
            e.forEach((e => {
              e.forEach((e => {
                i(e.poorHighExtendTo), i(e.poorLowExtendTo), i(e.tpoPocExtendTo), (e.singleprints ??
                []).map((e => e.extendTo)).map(i)
              }))
            }))
          })), e.footprints().forEach((e => {
            e.forEach((e => {
              t.add(e.index)
            }))
          })), e.footprintLevels().forEach((e => {
            e.forEach((e => {
              t.add(e.startIndex), i(e.extendTo)
            }))
          }));
          const o = Array.from(t);
          return o.sort(((e, t) => e - t)), o
        }(e),
        c = {
          indexes: i
        };
      let h = 0;
      const d = () => ++h;
      return c.vertlines = m(e.vertlines(), d, i, n.isVertLineInBarsRange, t, n.dematerializeVertLine), c.horizlines =
        m(e.horizlines(), d, i, o.isHorizLineInBarsRange, t, o.dematerializeHorizLine), c.polygons = m(e.polygons(), d,
          i, a.isPolygonInBarsRange, t, a.dematerializePolygon), c.hhists = m(e.hhists(), d, i, r.isHHistInBarsRange, t,
          r.dematerializeHHist), c.backgrounds = m(e.backgrounds(), d, i, l.isBackgroundInBarsRange, t, l
          .dematerializeBackground), c
    }