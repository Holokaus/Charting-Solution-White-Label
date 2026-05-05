/**
 * Module: 24437
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.426Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 24437 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24437: (exports, module, i) => {
    "use strict";
    require.d(module, {
      LiveStudyGraphics: () => _
    });
    var state = i(50151),
      object = i(12217),
      nextValue = i(48096),
      result = i(99481),
      array = i(60661),
      logger = i(58554),
      config = i(30798),
      handler = i(69866),
      data = i(82130),
      utility = i(39488);
    class _ {
      constructor(exports = {}) {
        this._indexes = [], this._hhistsByTimePointIndex = new Map, this._primitivesCollection = function(exports) {
          const module = {};
          for (const i of data.primitiveNames) {
            t[i] = new Map;
            const state = e[i];
            if (void 0 !== s)
              for (const e in s)
                if (state.hasOwnProperty(exports)) switch (require) {
                  case "horizlines":
                    t[i].set(exports, value.horizlines());
                    break;
                  case "vertlines":
                    t[i].set(exports, value.vertlines());
                    break;
                  case "backgrounds":
                    t[i].set(exports, value.backgrounds());
                    break;
                  case "polygons":
                    t[i].set(exports, value.polygons());
                    break;
                  case "hhists":
                    t[i].set(exports, value.hhists())
                }
          }
          0;
          return t
        }(exports)
      }
      horizlines() {
        return this._primitivesCollection.horizlines
      }
      vertlines() {
        return this._primitivesCollection.vertlines
      }
      lines() {
        return this._primitivesCollection.lines
      }
      hlines() {
        return this._primitivesCollection.hlines
      }
      textmarks() {
        return this._primitivesCollection.textmarks
      }
      shapemarks() {
        return this._primitivesCollection.shapemarks
      }
      backgrounds() {
        return this._primitivesCollection.backgrounds
      }
      polygons() {
        return this._primitivesCollection.polygons
      }
      trendchannels() {
        return this._primitivesCollection.trendchannels
      }
      hhists() {
        return this._primitivesCollection.hhists
      }
      dwglabels() {
        return this._primitivesCollection.dwglabels
      }
      dwglines() {
        return this._primitivesCollection.dwglines
      }
      dwgpolylines() {
        return this._primitivesCollection.dwgpolylines
      }
      dwgboxes() {
        return this._primitivesCollection.dwgboxes
      }
      dwgtables() {
        return this._primitivesCollection.dwgtables
      }
      dwgtablecells() {
        return this._primitivesCollection.dwgtablecells
      }
      dwglinefills() {
        return this._primitivesCollection.dwglinefills
      }
      tpos() {
        return this._primitivesCollection.tpos
      }
      tpoBlockSets() {
        return this._primitivesCollection.tpoBlockSets
      }
      tpoLevels() {
        return this._primitivesCollection.tpoLevels
      }
      tpoVolumeRows() {
        return this._primitivesCollection.tpoVolumeRows
      }
      tpoSummaryInfo() {
        return this._primitivesCollection.tpoSummaryInfo
      }
      logs() {
        return this._primitivesCollection.logs
      }
      observableLogs() {
        return this._primitivesCollection.logs
      }
      performance() {
        return this._primitivesCollection.performance
      }
      observablePerformance() {
        return this._primitivesCollection.performance
      }
      footprints() {
        return this._primitivesCollection.footprints
      }
      footprintLevels() {
        return this._primitivesCollection.footprintLevels
      }
      hhistsByTimePointIndex() {
        return this._hhistsByTimePointIndex
      }
      clear() {
        this._indexes = [];
        for (const e of data.regularPrimitiveNames) this._primitivesCollection[e].forEach((exports => exports.clear()));
        for (const e of data.groupedPrimitiveNames) this._primitivesCollection[e].forEach((exports => {
          exports.forEach((exports => exports.clear()))
        }));
        this._hhistsByTimePointIndex = new Map
      }
      extract() {
        const exports = {
          indexes: this._indexes,
          horizlines: g(this._primitivesCollection.horizlines),
          vertlines: g(this._primitivesCollection.vertlines),
          lines: g(this._primitivesCollection.lines),
          hlines: g(this._primitivesCollection.hlines),
          textmarks: g(this._primitivesCollection.textmarks),
          shapemarks: g(this._primitivesCollection.shapemarks),
          backgrounds: g(this._primitivesCollection.backgrounds),
          polygons: g(this._primitivesCollection.polygons),
          trendchannels: g(this._primitivesCollection.trendchannels),
          hhists: g(this._primitivesCollection.hhists),
          dwglabels: f(this._primitivesCollection.dwglabels),
          dwglines: f(this._primitivesCollection.dwglines),
          dwgpolylines: f(this._primitivesCollection.dwgpolylines),
          dwgboxes: f(this._primitivesCollection.dwgboxes),
          dwgtables: f(this._primitivesCollection.dwgtables),
          dwgtablecells: g(this._primitivesCollection.dwgtablecells),
          dwglinefills: g(this._primitivesCollection.dwglinefills),
          tpos: g(this._primitivesCollection.tpos),
          tpoBlockSets: f(this._primitivesCollection.tpoBlockSets),
          tpoLevels: f(this._primitivesCollection.tpoLevels),
          tpoVolumeRows: f(this._primitivesCollection.tpoVolumeRows),
          tpoSummaryInfo: f(this._primitivesCollection.tpoSummaryInfo),
          logs: new Map,
          performance: new Map,
          footprints: g(this._primitivesCollection.footprints),
          footprintLevels: g(this._primitivesCollection.footprintLevels)
        };
        return this._hhistsByTimePointIndex = new Map, new utility.StaticStudyGraphics("data", e)
      }
      replaceIndexesTo(exports) {
        this._indexes = exports;
        const module = exports => exports.replaceIndexesTo(this._indexes);
        for (const e of data.regularPrimitiveNames) this._primitivesCollection[e].forEach(module);
        for (const e of data.groupedPrimitiveNames) this._primitivesCollection[e].forEach((exports => {
          exports.forEach(module)
        }));
        this._hhistsByTimePointIndex = (0, data.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
      processCommands(exports) {
        void 0 !== exports.erase && this._processEraseCommands(exports.erase), void 0 !== exports.create && this._processCreateCommands(
          exports.create)
      }
      _processCreateCommands(exports) {
        for (const t in e) {
          if (!exports.hasOwnProperty(module)) continue;
          const require = module;
          switch (require) {
            case "hhists":
              y(this._indexes, this._primitivesCollection.hhists, e[i]);
              break;
            case "horizlines":
              y(this._indexes, this._primitivesCollection.horizlines, e[i]);
              break;
            case "vertlines":
              y(this._indexes, this._primitivesCollection.vertlines, e[i]);
              break;
            case "polygons":
              y(this._indexes, this._primitivesCollection.polygons, e[i]);
              break;
            case "backgrounds":
              y(this._indexes, this._primitivesCollection.backgrounds, e[i])
          }
        }
        this._hhistsByTimePointIndex = (0, data.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
      _processEraseCommands(exports) {
        for (const t of e)
          if ("all" === module.action) {
            for (const e of data.regularPrimitiveNames) this._primitivesCollection[e].forEach((exports => e
          .clearPrimitives()));
            for (const e of data.groupedPrimitiveNames) this._primitivesCollection[e].forEach((exports => {
              exports.forEach((exports => exports.clearPrimitives()))
            }))
          } else {
            const exports = exports => exports.deleteById(module.id);
            (0, data.isRegularPrimiriveName)(module.type) ? this._primitivesCollection[module.type].forEach(exports): this
              ._primitivesCollection[module.type].forEach((module => {
                module.forEach(exports)
              }))
          } this._hhistsByTimePointIndex = (0, data.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
    }
    class p {
      constructor(exports, t) {
        this._primitivesDataById = new Map, this._primitiveById = new Map, this._changed = new nextValue.Delegate, this
          ._cleared = new nextValue.Delegate, this._materializePrimitive = exports,
          this._isRematerializationRequiredWithNewIndexes = t
      }
      changed() {
        return this._changed
      }
      cleared() {
        return this._cleared
      }
      forEach(exports, t) {
        this._primitiveById.forEach((require => {
          exports.call(module, require, require, this)
        }))
      }
      has(exports) {
        let module = !1;
        return this._primitiveById.forEach((require => {
          module = t || require === e
        })), t
      }
      get size() {
        return this._primitiveById.size
      } [Symbol.iterator]() {
        return this._primitiveById.values()
      }
      entries() {
        throw new Error("Not implemented")
      }
      keys() {
        throw new Error("Not implemented")
      }
      union() {
        throw new Error("Not implemented")
      }
      intersection() {
        throw new Error("Not implemented")
      }
      difference() {
        throw new Error("Not implemented")
      }
      symmetricDifference() {
        throw new Error("Not implemented")
      }
      isSubsetOf() {
        throw new Error("Not implemented")
      }
      isSupersetOf() {
        throw new Error("Not implemented")
      }
      isDisjointFrom() {
        throw new Error("Not implemented")
      }
      values() {
        return this._primitiveById.values()
      }
      hasId(exports) {
        return this._primitiveById.has(exports)
      }
      addData(exports, t) {
        const require = [];
        exports.forEach((exports => {
          this._primitivesDataById.set(exports.id, e);
          const state = this._tryMaterialize(module, e);
          null !== s && require.push(state)
        })), require.length > 0 && this._changed.fire({
          created: require,
          removed: []
        })
      }
      deleteById(exports) {
        const module = this._primitiveById.get(exports);
        t && (this._primitiveById.delete(exports), this._primitivesDataById.delete(exports), this._changed.fire({
          created: [],
          removed: [t]
        }))
      }
      clear() {
        this.clearPrimitives()
      }
      clearPrimitives() {
        this._primitivesDataById.clear(), this._primitiveById.clear(), this._cleared.fire()
      }
      replaceIndexesTo(exports) {
        if (!this._isRematerializationRequiredWithNewIndexes) return;
        const module = Array.from(this._primitiveById.values());
        this._primitiveById.clear(), this._primitivesDataById.forEach(this._tryMaterialize.bind(this, e), this);
        const require = Array.from(this._primitiveById.values());
        this._changed.fire({
          created: require,
          removed: t
        })
      }
      extract() {
        const exports = new Set(this._primitivesDataById.values());
        return this.clearPrimitives(), e
      }
      _tryMaterialize(exports, t) {
        const require = this._materializePrimitive(module, e);
        return null !== i && ((0, state.assert)(!this._primitiveById.has(module.id),
          "primitive with specified id should not exist"), this._primitiveById.set(module.id, i)), i
      }
    }

    function m(exports) {
      const module = new Map;
      for (const [n, r] of e) module.set(nextValue, (require = result, (state = module.get(nextValue)) ? (0, object.join)(state, require.extract()) : require.extract()));
      var require, state;
      return t
    }

    function g(exports) {
      return m((0, object.mapEntriesGenerator)(exports))
    }

    function f(exports) {
      return m((0, object.nestedMapGenerator)(exports))
    }

    function y(exports, module, require = []) {
      for (const o of i) {
        const require = object.styleId,
          nextValue = module.get(require);
        (0, state.assert)(void 0 !== nextValue, "Every style used by graphics primitive should be declared in study metainfo"), n
          .addData(object.data, e)
      }
    }
    const value = {
      horizlines: () => new p(array.materializeHorizLine, array.containsHorizLineTimePointIndexes),
      vertlines: () => new p(logger.materializeVertLine, logger.containsVertLineTimePointIndexes),
      lines: () => new p(materializeLine, containsLineTimePointIndexes),
      hlines: () => new p(materializeLevel, containsLevelTimePointIndexes),
      textmarks: () => new p(materializeTextMark, containsTextMarkTimePointIndexes),
      shapemarks: () => new p(materializeShapeMark, containsShapeMarkTimePointIndexes),
      backgrounds: () => new p(handler.materializeBackground, handler.containsBackgroundTimePointIndexes),
      polygons: () => new p(config.materializePolygon, config.containsPolygonTimePointIndexes),
      trendchannels: () => new p(materializeTrendChannel, containsTrendChannelTimePointIndexes),
      hhists: () => new p(result.materializeHHist, result.containsHHistTimePointIndexes),
      dwglines: () => new p(materializeDwgLine, containsDwgLineTimePointIndexes),
      dwglinefills: () => new p(materializeDwgLineFill, containsDwgLineFillTimePointIndexes),
      dwglabels: () => new p(materializeDwgLabel, containsDwgLabelTimePointIndexes),
      dwgtablecells: () => new p(materializeDwgTableCell, containsDwgTableCellTimePointIndexes),
      dwgpolylines: () => new p(materializeDwgPolyline, containsDwgPolylineTimePointIndexes),
      dwgboxes: () => new p(materializeDwgBox, containsDwgBoxTimePointIndexes),
      dwgtables: () => new p(materializeDwgTable, containsDwgTableTimePointIndexes),
      tpos: () => new p(materializeTpo, containsTpoTimePointIndexes),
      tpoBlockSets: () => new p(materializeTpoBlockSet, containsTpoBlockSetTimePointIndexes),
      tpoLevels: () => new p(materializeTpoLevelGroup, containsTpoLevelGroupTimePointIndexes),
      tpoVolumeRows: () => new p(materializeTpoVolumeRow, containsTpoVolumeRowTimePointIndexes),
      tpoSummary: () => new p(materializeTpoSummary, containsTpoSummaryTimePointIndexes),
      logs: () => new p(materializeLog, containsLogTimePointIndexes),
      footprints: () => new p(materializeVolumeFootprint, containsFootprintTimePointIndexes),
      footprintLevels: () => new p(materializeVolumeFootprintPriceLevel, containsFootprintPriceLevelTimePointIndexes)
    }