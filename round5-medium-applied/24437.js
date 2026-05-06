/**
 * Module 24437 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24437: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      LiveStudyGraphics: () => _
    });
    var watchedValue_s = i(50151),
      o = i(12217),
      watchedValue_n = i(48096),
      r = i(99481),
      watchedValue_a = i(60661),
      l = i(58554),
      c = i(30798),
      h = i(69866),
      d = i(82130),
      u = i(39488);
    class _ {
      constructor(watchedValue_e = {}) {
        this._indexes = [], this._hhistsByTimePointIndex = new Map, this._primitivesCollection = function(watchedValue_e) {
          const watchedValue_t = {};
          for (const i of d.primitiveNames) {
            watchedValue_t[i] = new Map;
            const watchedValue_s = watchedValue_e[i];
            if (void 0 !== watchedValue_s)
              for (const watchedValue_e in watchedValue_s)
                if (watchedValue_s.hasOwnProperty(watchedValue_e)) switch (i) {
                  case "horizlines":
                    watchedValue_t[i].set(watchedValue_e, v.horizlines());
                    break;
                  case "vertlines":
                    watchedValue_t[i].set(watchedValue_e, v.vertlines());
                    break;
                  case "backgrounds":
                    watchedValue_t[i].set(watchedValue_e, v.backgrounds());
                    break;
                  case "polygons":
                    watchedValue_t[i].set(watchedValue_e, v.polygons());
                    break;
                  case "hhists":
                    watchedValue_t[i].set(watchedValue_e, v.hhists())
                }
          }
          0;
          return watchedValue_t
        }(watchedValue_e)
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
        for (const watchedValue_e of d.regularPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => watchedValue_e.clear()));
        for (const watchedValue_e of d.groupedPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => {
          watchedValue_e.forEach((watchedValue_e => watchedValue_e.clear()))
        }));
        this._hhistsByTimePointIndex = new Map
      }
      extract() {
        const watchedValue_e = {
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
        return this._hhistsByTimePointIndex = new Map, new u.StaticStudyGraphics("data", watchedValue_e)
      }
      replaceIndexesTo(watchedValue_e) {
        this._indexes = watchedValue_e;
        const watchedValue_t = watchedValue_e => watchedValue_e.replaceIndexesTo(this._indexes);
        for (const watchedValue_e of d.regularPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach(watchedValue_t);
        for (const watchedValue_e of d.groupedPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => {
          watchedValue_e.forEach(watchedValue_t)
        }));
        this._hhistsByTimePointIndex = (0, d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
      processCommands(watchedValue_e) {
        void 0 !== watchedValue_e.erase && this._processEraseCommands(watchedValue_e.erase), void 0 !== watchedValue_e.create && this._processCreateCommands(
          watchedValue_e.create)
      }
      _processCreateCommands(watchedValue_e) {
        for (const watchedValue_t in watchedValue_e) {
          if (!watchedValue_e.hasOwnProperty(watchedValue_t)) continue;
          const i = watchedValue_t;
          switch (i) {
            case "hhists":
              y(this._indexes, this._primitivesCollection.hhists, watchedValue_e[i]);
              break;
            case "horizlines":
              y(this._indexes, this._primitivesCollection.horizlines, watchedValue_e[i]);
              break;
            case "vertlines":
              y(this._indexes, this._primitivesCollection.vertlines, watchedValue_e[i]);
              break;
            case "polygons":
              y(this._indexes, this._primitivesCollection.polygons, watchedValue_e[i]);
              break;
            case "backgrounds":
              y(this._indexes, this._primitivesCollection.backgrounds, watchedValue_e[i])
          }
        }
        this._hhistsByTimePointIndex = (0, d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
      _processEraseCommands(watchedValue_e) {
        for (const watchedValue_t of watchedValue_e)
          if ("all" === watchedValue_t.action) {
            for (const watchedValue_e of d.regularPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => watchedValue_e
          .clearPrimitives()));
            for (const watchedValue_e of d.groupedPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => {
              watchedValue_e.forEach((watchedValue_e => watchedValue_e.clearPrimitives()))
            }))
          } else {
            const watchedValue_e = watchedValue_e => watchedValue_e.deleteById(watchedValue_t.id);
            (0, d.isRegularPrimiriveName)(watchedValue_t.type) ? this._primitivesCollection[watchedValue_t.type].forEach(watchedValue_e): this
              ._primitivesCollection[watchedValue_t.type].forEach((watchedValue_t => {
                watchedValue_t.forEach(watchedValue_e)
              }))
          } this._hhistsByTimePointIndex = (0, d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
    }
    class p {
      constructor(watchedValue_e, watchedValue_t) {
        this._primitivesDataById = new Map, this._primitiveById = new Map, this._changed = new watchedValue_n.Delegate, this
          ._cleared = new watchedValue_n.Delegate, this._materializePrimitive = watchedValue_e,
          this._isRematerializationRequiredWithNewIndexes = watchedValue_t
      }
      changed() {
        return this._changed
      }
      cleared() {
        return this._cleared
      }
      forEach(watchedValue_e, watchedValue_t) {
        this._primitiveById.forEach((i => {
          watchedValue_e.call(watchedValue_t, i, i, this)
        }))
      }
      has(watchedValue_e) {
        let watchedValue_t = !1;
        return this._primitiveById.forEach((i => {
          watchedValue_t = watchedValue_t || i === watchedValue_e
        })), watchedValue_t
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
      hasId(watchedValue_e) {
        return this._primitiveById.has(watchedValue_e)
      }
      addData(watchedValue_e, watchedValue_t) {
        const i = [];
        watchedValue_e.forEach((watchedValue_e => {
          this._primitivesDataById.set(watchedValue_e.id, watchedValue_e);
          const watchedValue_s = this._tryMaterialize(watchedValue_t, watchedValue_e);
          null !== watchedValue_s && i.push(watchedValue_s)
        })), i.length > 0 && this._changed.fire({
          created: i,
          removed: []
        })
      }
      deleteById(watchedValue_e) {
        const watchedValue_t = this._primitiveById.get(watchedValue_e);
        watchedValue_t && (this._primitiveById.delete(watchedValue_e), this._primitivesDataById.delete(watchedValue_e), this._changed.fire({
          created: [],
          removed: [watchedValue_t]
        }))
      }
      clear() {
        this.clearPrimitives()
      }
      clearPrimitives() {
        this._primitivesDataById.clear(), this._primitiveById.clear(), this._cleared.fire()
      }
      replaceIndexesTo(watchedValue_e) {
        if (!this._isRematerializationRequiredWithNewIndexes) return;
        const watchedValue_t = Array.from(this._primitiveById.values());
        this._primitiveById.clear(), this._primitivesDataById.forEach(this._tryMaterialize.bind(this, watchedValue_e), this);
        const i = Array.from(this._primitiveById.values());
        this._changed.fire({
          created: i,
          removed: watchedValue_t
        })
      }
      extract() {
        const watchedValue_e = new Set(this._primitivesDataById.values());
        return this.clearPrimitives(), watchedValue_e
      }
      _tryMaterialize(watchedValue_e, watchedValue_t) {
        const i = this._materializePrimitive(watchedValue_t, watchedValue_e);
        return null !== i && ((0, watchedValue_s.assert)(!this._primitiveById.has(watchedValue_t.id),
          "primitive with specified id should not exist"), this._primitiveById.set(watchedValue_t.id, i)), i
      }
    }

    function m(watchedValue_e) {
      const watchedValue_t = new Map;
      for (const [watchedValue_n, r] of watchedValue_e) watchedValue_t.set(watchedValue_n, (i = r, (watchedValue_s = watchedValue_t.get(watchedValue_n)) ? (0, o.join)(watchedValue_s, i.extract()) : i.extract()));
      var i, watchedValue_s;
      return watchedValue_t
    }

    function g(watchedValue_e) {
      return m((0, o.mapEntriesGenerator)(watchedValue_e))
    }

    function f(watchedValue_e) {
      return m((0, o.nestedMapGenerator)(watchedValue_e))
    }

    function y(watchedValue_e, watchedValue_t, i = []) {
      for (const o of i) {
        const i = o.styleId,
          watchedValue_n = watchedValue_t.get(i);
        (0, watchedValue_s.assert)(void 0 !== watchedValue_n, "Every style used by graphics primitive should be declared in study metainfo"), watchedValue_n
          .addData(o.data, watchedValue_e)
      }
    }
    const v = {
      horizlines: () => new p(watchedValue_a.materializeHorizLine, watchedValue_a.containsHorizLineTimePointIndexes),
      vertlines: () => new p(l.materializeVertLine, l.containsVertLineTimePointIndexes),
      lines: () => new p(materializeLine, containsLineTimePointIndexes),
      hlines: () => new p(materializeLevel, containsLevelTimePointIndexes),
      textmarks: () => new p(materializeTextMark, containsTextMarkTimePointIndexes),
      shapemarks: () => new p(materializeShapeMark, containsShapeMarkTimePointIndexes),
      backgrounds: () => new p(h.materializeBackground, h.containsBackgroundTimePointIndexes),
      polygons: () => new p(c.materializePolygon, c.containsPolygonTimePointIndexes),
      trendchannels: () => new p(materializeTrendChannel, containsTrendChannelTimePointIndexes),
      hhists: () => new p(r.materializeHHist, r.containsHHistTimePointIndexes),
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