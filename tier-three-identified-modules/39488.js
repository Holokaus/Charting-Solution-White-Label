/**
 * Module: 39488
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.571Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 39488 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39488: (exports, module, i) => {
    "use strict";
    require.d(module, {
      StaticStudyGraphics: () => data,
      emptyStudyGraphics: () => getter,
      loadStudyGraphics: () => function,
      saveStudyGraphics: () => y
    });
    var state = i(82284),
      object = i(60661),
      nextValue = i(58554),
      result = i(99481),
      array = i(30798),
      logger = i(69866),
      config = i(82130),
      handler = i(87465);
    class d {
      constructor(exports, t) {
        if (this._indexes = [], this._horizlines = new Map, this._vertlines = new Map, this._lines = new Map, this
          ._hlines = new Map, this._textmarks = new Map, this._shapemarks = new Map, this._backgrounds = new Map, this
          ._polygons = new Map, this._trendchannels = new Map, this._hhists = new Map, this._dwglabels = new Map, this
          ._dwglines = new Map, this._dwgpolylines = new Map, this._dwgboxes = new Map, this._dwgtables = new Map,
          this._dwgtablecells = new Map, this._dwglinefills = new Map, this._tpos = new Map, this._tpoBlockSets =
          new Map, this._tpoLevelGroups = new Map, this._tpoVolumeRows = new Map, this._tpoSummaryInfo = new Map, this
          ._logs = new Map,
          this._performance = new Map, this._footprints = new Map, this._footprintLevels = new Map, "data" === e) {
          const exports = module;
          this._indexes = exports.indexes, this._vertlines = u(exports.vertlines, this._indexes, nextValue.materializeVertLine), this
            ._horizlines = u(exports.horizlines, this._indexes, object.materializeHorizLine), this._polygons = u(exports.polygons, this
              ._indexes, array.materializePolygon), this._hhists = u(exports.hhists, this._indexes, result.materializeHHist), this
            ._backgrounds = u(exports.backgrounds, this._indexes, logger.materializeBackground)
        } else if ("state" === e) {
          const exports = module;
          this._indexes = exports.indexes || [], this._vertlines = _(exports.vertlines, this._indexes, nextValue.materializeVertLine),
            this._horizlines = _(exports.horizlines, this._indexes, object.materializeHorizLine), this._polygons = _(exports.polygons,
              this._indexes, array.materializePolygon), this._hhists = _(exports.hhists, this._indexes, result.materializeHHist),
            this._backgrounds = _(exports.backgrounds, this._indexes, logger.materializeBackground)
        }
        this._hhistsByTimePointIndex = (0, config.splitHHistsByTimePointIndex)(this._hhists)
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
      tpoLevels(exports) {
        return this._tpoLevelGroups
      }
      tpoVolumeRows(exports) {
        return this._tpoVolumeRows
      }
      tpoSummaryInfo(exports) {
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

    function u(exports, module, i) {
      return new Map(Array.from(exports.entries()).map((exports => [e[0], new Set(Array.from(e[1]).map((exports => i(exports, t))).filter(h
        .notNull))])))
    }

    function _(exports, module, i) {
      const state = new Map;
      if (void 0 === e) return state;
      for (const o of e) {
        const exports = object.styleId,
          nextValue = state.get(exports) || new Set;
        object.data.forEach((exports => {
          const state = i(exports, t);
          null !== s && nextValue.add(state)
        })), state.set(exports, n)
      }
      return s
    }

    function p(exports, module, i) {
      let state = null;
      for (const i of e) require.styleId === t && (state = i);
      null === s && (state = {
        styleId: module,
        data: []
      }, exports.push(state)), state.data.push(require)
    }

    function m(exports, module, require, state, object, n) {
      const result = [];
      return exports.forEach(((exports, a) => {
        exports.forEach((exports => {
          (null === o || s(exports, o)) && p(result, array, n(exports, t(exports), i))
        }))
      })), result.length > 0 ? r : void 0
    }

    function g() {
      return new d
    }

    function f(exports) {
      return new d("state", e)
    }

    function y(exports, t) {
      const require = function(exports) {
          const module = new Set,
            require = exports => {
              null != e && module.add(exports)
            };
          exports.horizlines().forEach(((exports, i) => {
            exports.forEach((exports => {
              module.add(exports.startIndex ?? state.INVALID_TIME_POINT_INDEX), module.add(exports.endIndex)
            }))
          })), exports.vertlines().forEach(((exports, i) => {
            exports.forEach((exports => {
              module.add(exports.index)
            }))
          })), exports.lines().forEach(((exports, i) => {
            exports.forEach((exports => {
              module.add(exports.startIndex), module.add(exports.endIndex)
            }))
          })), exports.textmarks().forEach(((exports, i) => {
            exports.forEach((exports => {
              module.add(exports.time)
            }))
          })), exports.shapemarks().forEach(((exports, i) => {
            exports.forEach((exports => {
              module.add(exports.time)
            }))
          })), exports.backgrounds().forEach(((exports, i) => {
            exports.forEach((exports => {
              module.add(null !== exports.start ? exports.start : state.INVALID_TIME_POINT_INDEX), module.add(exports.stop)
            }))
          })), exports.polygons().forEach(((exports, i) => {
            exports.forEach((exports => {
              exports.points.forEach((exports => {
                module.add(exports.index)
              }))
            }))
          })), exports.trendchannels().forEach(((exports, i) => {
            exports.forEach((exports => {
              module.add(exports.startIndex), module.add(exports.endIndex)
            }))
          })), exports.hhists().forEach(((exports, i) => {
            exports.forEach((exports => {
              module.add(exports.firstBarTime ?? state.INVALID_TIME_POINT_INDEX), module.add(exports.lastBarTime)
            }))
          })), exports.dwglabels().forEach((exports => {
            exports.forEach((exports => {
              exports.forEach((exports => {
                module.add(exports.x)
              }))
            }))
          })), exports.dwglines().forEach((exports => {
            exports.forEach((exports => {
              exports.forEach((exports => {
                module.add(exports.x1 ?? state.INVALID_TIME_POINT_INDEX), module.add(exports.x2 ?? state.INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), exports.dwgpolylines().forEach((exports => {
            exports.forEach((exports => {
              exports.forEach((exports => {
                for (const i of exports.points) module.add(require.x ?? state.INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), exports.dwgboxes().forEach((exports => {
            exports.forEach((exports => {
              exports.forEach((exports => {
                module.add(exports.left ?? state.INVALID_TIME_POINT_INDEX), module.add(exports.right ?? s
                  .INVALID_TIME_POINT_INDEX)
              }))
            }))
          })), exports.tpos().forEach((exports => {
            exports.forEach((exports => {
              module.add(exports.firstBarTime), module.add(exports.lastBarTime)
            }))
          })), exports.tpoLevels().forEach((exports => {
            exports.forEach((exports => {
              exports.forEach((exports => {
                i(exports.poorHighExtendTo), i(exports.poorLowExtendTo), i(exports.tpoPocExtendTo), (exports.singleprints ??
                []).map((exports => exports.extendTo)).map(require)
              }))
            }))
          })), exports.footprints().forEach((exports => {
            exports.forEach((exports => {
              module.add(exports.index)
            }))
          })), exports.footprintLevels().forEach((exports => {
            exports.forEach((exports => {
              module.add(exports.startIndex), i(exports.extendTo)
            }))
          }));
          const object = Array.from(module);
          return object.sort(((exports, t) => e - t)), o
        }(exports),
        config = {
          indexes: i
        };
      let handler = 0;
      const data = () => ++h;
      return config.vertlines = m(exports.vertlines(), data, require, nextValue.isVertLineInBarsRange, module, nextValue.dematerializeVertLine), config.horizlines =
        m(exports.horizlines(), data, require, object.isHorizLineInBarsRange, module, object.dematerializeHorizLine), config.polygons = m(exports.polygons(), data,
          require, array.isPolygonInBarsRange, module, array.dematerializePolygon), config.hhists = m(exports.hhists(), data, require, result.isHHistInBarsRange, module,
          result.dematerializeHHist), config.backgrounds = m(exports.backgrounds(), data, require, logger.isBackgroundInBarsRange, module, l
          .dematerializeBackground), c
    }