/**
 * Module 24437 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24437: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      LiveStudyGraphics: () => _
    });
    var watchedValue_s = watchedValue_i(50151),
      watchedValue_o = watchedValue_i(12217),
      watchedValue_n = watchedValue_i(48096),
      watchedValue_r = watchedValue_i(99481),
      watchedValue_a = watchedValue_i(60661),
      watchedValue_l = watchedValue_i(58554),
      watchedValue_c = watchedValue_i(30798),
      watchedValue_h = watchedValue_i(69866),
      watchedValue_d = watchedValue_i(82130),
      watchedValue_u = watchedValue_i(39488);
    class _ {
      constructor(watchedValue_e = {}) {
        this._indexes = [], this._hhistsByTimePointIndex = new Map, this._primitivesCollection = function(watchedValue_e) {
          const watchedValue_t = {};
          for (const watchedValue_i of watchedValue_d.primitiveNames) {
            watchedValue_t[watchedValue_i] = new Map;
            const watchedValue_s = watchedValue_e[watchedValue_i];
            if (void 0 !== watchedValue_s)
              for (const watchedValue_e in watchedValue_s)
                if (watchedValue_s.hasOwnProperty(watchedValue_e)) switch (watchedValue_i) {
                  case "horizlines":
                    watchedValue_t[watchedValue_i].set(watchedValue_e, watchedValue_v.horizlines());
                    break;
                  case "vertlines":
                    watchedValue_t[watchedValue_i].set(watchedValue_e, watchedValue_v.vertlines());
                    break;
                  case "backgrounds":
                    watchedValue_t[watchedValue_i].set(watchedValue_e, watchedValue_v.backgrounds());
                    break;
                  case "polygons":
                    watchedValue_t[watchedValue_i].set(watchedValue_e, watchedValue_v.polygons());
                    break;
                  case "hhists":
                    watchedValue_t[watchedValue_i].set(watchedValue_e, watchedValue_v.hhists())
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
        for (const watchedValue_e of watchedValue_d.regularPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => watchedValue_e.clear()));
        for (const watchedValue_e of watchedValue_d.groupedPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => {
          watchedValue_e.forEach((watchedValue_e => watchedValue_e.clear()))
        }));
        this._hhistsByTimePointIndex = new Map
      }
      extract() {
        const watchedValue_e = {
          indexes: this._indexes,
          horizlines: watchedValue_g(this._primitivesCollection.horizlines),
          vertlines: watchedValue_g(this._primitivesCollection.vertlines),
          lines: watchedValue_g(this._primitivesCollection.lines),
          hlines: watchedValue_g(this._primitivesCollection.hlines),
          textmarks: watchedValue_g(this._primitivesCollection.textmarks),
          shapemarks: watchedValue_g(this._primitivesCollection.shapemarks),
          backgrounds: watchedValue_g(this._primitivesCollection.backgrounds),
          polygons: watchedValue_g(this._primitivesCollection.polygons),
          trendchannels: watchedValue_g(this._primitivesCollection.trendchannels),
          hhists: watchedValue_g(this._primitivesCollection.hhists),
          dwglabels: watchedValue_f(this._primitivesCollection.dwglabels),
          dwglines: watchedValue_f(this._primitivesCollection.dwglines),
          dwgpolylines: watchedValue_f(this._primitivesCollection.dwgpolylines),
          dwgboxes: watchedValue_f(this._primitivesCollection.dwgboxes),
          dwgtables: watchedValue_f(this._primitivesCollection.dwgtables),
          dwgtablecells: watchedValue_g(this._primitivesCollection.dwgtablecells),
          dwglinefills: watchedValue_g(this._primitivesCollection.dwglinefills),
          tpos: watchedValue_g(this._primitivesCollection.tpos),
          tpoBlockSets: watchedValue_f(this._primitivesCollection.tpoBlockSets),
          tpoLevels: watchedValue_f(this._primitivesCollection.tpoLevels),
          tpoVolumeRows: watchedValue_f(this._primitivesCollection.tpoVolumeRows),
          tpoSummaryInfo: watchedValue_f(this._primitivesCollection.tpoSummaryInfo),
          logs: new Map,
          performance: new Map,
          footprints: watchedValue_g(this._primitivesCollection.footprints),
          footprintLevels: watchedValue_g(this._primitivesCollection.footprintLevels)
        };
        return this._hhistsByTimePointIndex = new Map, new watchedValue_u.StaticStudyGraphics("data", watchedValue_e)
      }
      replaceIndexesTo(watchedValue_e) {
        this._indexes = watchedValue_e;
        const watchedValue_t = watchedValue_e => watchedValue_e.replaceIndexesTo(this._indexes);
        for (const watchedValue_e of watchedValue_d.regularPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach(watchedValue_t);
        for (const watchedValue_e of watchedValue_d.groupedPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => {
          watchedValue_e.forEach(watchedValue_t)
        }));
        this._hhistsByTimePointIndex = (0, watchedValue_d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
      processCommands(watchedValue_e) {
        void 0 !== watchedValue_e.erase && this._processEraseCommands(watchedValue_e.erase), void 0 !== watchedValue_e.create && this._processCreateCommands(
          watchedValue_e.create)
      }
      _processCreateCommands(watchedValue_e) {
        for (const watchedValue_t in watchedValue_e) {
          if (!watchedValue_e.hasOwnProperty(watchedValue_t)) continue;
          const watchedValue_i = watchedValue_t;
          switch (watchedValue_i) {
            case "hhists":
              watchedValue_y(this._indexes, this._primitivesCollection.hhists, watchedValue_e[watchedValue_i]);
              break;
            case "horizlines":
              watchedValue_y(this._indexes, this._primitivesCollection.horizlines, watchedValue_e[watchedValue_i]);
              break;
            case "vertlines":
              watchedValue_y(this._indexes, this._primitivesCollection.vertlines, watchedValue_e[watchedValue_i]);
              break;
            case "polygons":
              watchedValue_y(this._indexes, this._primitivesCollection.polygons, watchedValue_e[watchedValue_i]);
              break;
            case "backgrounds":
              watchedValue_y(this._indexes, this._primitivesCollection.backgrounds, watchedValue_e[watchedValue_i])
          }
        }
        this._hhistsByTimePointIndex = (0, watchedValue_d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
      _processEraseCommands(watchedValue_e) {
        for (const watchedValue_t of watchedValue_e)
          if ("all" === watchedValue_t.action) {
            for (const watchedValue_e of watchedValue_d.regularPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => watchedValue_e
          .clearPrimitives()));
            for (const watchedValue_e of watchedValue_d.groupedPrimitiveNames) this._primitivesCollection[watchedValue_e].forEach((watchedValue_e => {
              watchedValue_e.forEach((watchedValue_e => watchedValue_e.clearPrimitives()))
            }))
          } else {
            const watchedValue_e = watchedValue_e => watchedValue_e.deleteById(watchedValue_t.id);
            (0, watchedValue_d.isRegularPrimiriveName)(watchedValue_t.type) ? this._primitivesCollection[watchedValue_t.type].forEach(watchedValue_e): this
              ._primitivesCollection[watchedValue_t.type].forEach((watchedValue_t => {
                watchedValue_t.forEach(watchedValue_e)
              }))
          } this._hhistsByTimePointIndex = (0, watchedValue_d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
    }
    class watchedValue_p {
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
        this._primitiveById.forEach((watchedValue_i => {
          watchedValue_e.call(watchedValue_t, watchedValue_i, watchedValue_i, this)
        }))
      }
      has(watchedValue_e) {
        let watchedValue_t = !1;
        return this._primitiveById.forEach((watchedValue_i => {
          watchedValue_t = watchedValue_t || watchedValue_i === watchedValue_e
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
        const watchedValue_i = [];
        watchedValue_e.forEach((watchedValue_e => {
          this._primitivesDataById.set(watchedValue_e.id, watchedValue_e);
          const watchedValue_s = this._tryMaterialize(watchedValue_t, watchedValue_e);
          null !== watchedValue_s && watchedValue_i.push(watchedValue_s)
        })), watchedValue_i.length > 0 && this._changed.fire({
          created: watchedValue_i,
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
        const watchedValue_i = Array.from(this._primitiveById.values());
        this._changed.fire({
          created: watchedValue_i,
          removed: watchedValue_t
        })
      }
      extract() {
        const watchedValue_e = new Set(this._primitivesDataById.values());
        return this.clearPrimitives(), watchedValue_e
      }
      _tryMaterialize(watchedValue_e, watchedValue_t) {
        const watchedValue_i = this._materializePrimitive(watchedValue_t, watchedValue_e);
        return null !== watchedValue_i && ((0, watchedValue_s.assert)(!this._primitiveById.has(watchedValue_t.id),
          "primitive with specified id should not exist"), this._primitiveById.set(watchedValue_t.id, watchedValue_i)), watchedValue_i
      }
    }

    function watchedValue_m(watchedValue_e) {
      const watchedValue_t = new Map;
      for (const [watchedValue_n, watchedValue_r] of watchedValue_e) watchedValue_t.set(watchedValue_n, (watchedValue_i = watchedValue_r, (watchedValue_s = watchedValue_t.get(watchedValue_n)) ? (0, watchedValue_o.join)(watchedValue_s, watchedValue_i.extract()) : watchedValue_i.extract()));
      var watchedValue_i, watchedValue_s;
      return watchedValue_t
    }

    function watchedValue_g(watchedValue_e) {
      return watchedValue_m((0, watchedValue_o.mapEntriesGenerator)(watchedValue_e))
    }

    function watchedValue_f(watchedValue_e) {
      return watchedValue_m((0, watchedValue_o.nestedMapGenerator)(watchedValue_e))
    }

    function watchedValue_y(watchedValue_e, watchedValue_t, watchedValue_i = []) {
      for (const watchedValue_o of watchedValue_i) {
        const watchedValue_i = watchedValue_o.styleId,
          watchedValue_n = watchedValue_t.get(watchedValue_i);
        (0, watchedValue_s.assert)(void 0 !== watchedValue_n, "Every style used by graphics primitive should be declared in study metainfo"), watchedValue_n
          .addData(watchedValue_o.data, watchedValue_e)
      }
    }
    const watchedValue_v = {
      horizlines: () => new watchedValue_p(watchedValue_a.materializeHorizLine, watchedValue_a.containsHorizLineTimePointIndexes),
      vertlines: () => new watchedValue_p(watchedValue_l.materializeVertLine, watchedValue_l.containsVertLineTimePointIndexes),
      lines: () => new watchedValue_p(materializeLine, containsLineTimePointIndexes),
      hlines: () => new watchedValue_p(materializeLevel, containsLevelTimePointIndexes),
      textmarks: () => new watchedValue_p(materializeTextMark, containsTextMarkTimePointIndexes),
      shapemarks: () => new watchedValue_p(materializeShapeMark, containsShapeMarkTimePointIndexes),
      backgrounds: () => new watchedValue_p(watchedValue_h.materializeBackground, watchedValue_h.containsBackgroundTimePointIndexes),
      polygons: () => new watchedValue_p(watchedValue_c.materializePolygon, watchedValue_c.containsPolygonTimePointIndexes),
      trendchannels: () => new watchedValue_p(materializeTrendChannel, containsTrendChannelTimePointIndexes),
      hhists: () => new watchedValue_p(watchedValue_r.materializeHHist, watchedValue_r.containsHHistTimePointIndexes),
      dwglines: () => new watchedValue_p(materializeDwgLine, containsDwgLineTimePointIndexes),
      dwglinefills: () => new watchedValue_p(materializeDwgLineFill, containsDwgLineFillTimePointIndexes),
      dwglabels: () => new watchedValue_p(materializeDwgLabel, containsDwgLabelTimePointIndexes),
      dwgtablecells: () => new watchedValue_p(materializeDwgTableCell, containsDwgTableCellTimePointIndexes),
      dwgpolylines: () => new watchedValue_p(materializeDwgPolyline, containsDwgPolylineTimePointIndexes),
      dwgboxes: () => new watchedValue_p(materializeDwgBox, containsDwgBoxTimePointIndexes),
      dwgtables: () => new watchedValue_p(materializeDwgTable, containsDwgTableTimePointIndexes),
      tpos: () => new watchedValue_p(materializeTpo, containsTpoTimePointIndexes),
      tpoBlockSets: () => new watchedValue_p(materializeTpoBlockSet, containsTpoBlockSetTimePointIndexes),
      tpoLevels: () => new watchedValue_p(materializeTpoLevelGroup, containsTpoLevelGroupTimePointIndexes),
      tpoVolumeRows: () => new watchedValue_p(materializeTpoVolumeRow, containsTpoVolumeRowTimePointIndexes),
      tpoSummary: () => new watchedValue_p(materializeTpoSummary, containsTpoSummaryTimePointIndexes),
      logs: () => new watchedValue_p(materializeLog, containsLogTimePointIndexes),
      footprints: () => new watchedValue_p(materializeVolumeFootprint, containsFootprintTimePointIndexes),
      footprintLevels: () => new watchedValue_p(materializeVolumeFootprintPriceLevel, containsFootprintPriceLevelTimePointIndexes)
    }