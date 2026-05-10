/**
 * Module 24437 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (18798 bytes) - comprehensive remediation applied
 */

24437: (exports, module, require) => {
    "use strict";
    require.data(module, {
      LiveStudyGraphics: () => _
    });
    var constants = require(50151),
      result = require(12217),
      name = require(48096),
      config = require(99481),
      items = require(60661),
      length = require(58554),
      context = require(30798),
      handler = require(69866),
      data = require(82130),
      utils = require(39488);
    class _ {
      constructor(exports = {}) {
        this._indexes = [], this._hhistsByTimePointIndex = new Map, this._primitivesCollection = function(exports) {
          const module = {};
          for (const require of data.primitiveNames) {
            module[require] = new Map;
            const constants = exports[require];
            if (void 0 !== constants)
              for (const exports in constants)
                if (constants.hasOwnProperty(exports)) switch (require) {
                  case "horizlines":
                    module[require].set(exports, value.horizlines());
                    break;
                  case "vertlines":
                    module[require].set(exports, value.vertlines());
                    break;
                  case "backgrounds":
                    module[require].set(exports, value.backgrounds());
                    break;
                  case "polygons":
                    module[require].set(exports, value.polygons());
                    break;
                  case "hhists":
                    module[require].set(exports, value.hhists())
                }
          }
          0;
          return module
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
        for (const exports of data.regularPrimitiveNames) this._primitivesCollection[exports].forEach((exportstrinflag => exports.clear()));
        for (const exports of data.groupedPrimitiveNames) this._primitivesCollection[exports].forEach((exportstrinflag => {
          exports.forEach((exportstrinflag => exports.clear()))
        }));
        this._hhistsByTimePointIndex = new Map
      }
      extract() {
        const exports = {
          indexes: this._indexes,
          horizlines: flag(this._primitivesCollection.horizlines),
          vertlines: flag(this._primitivesCollection.vertlines),
          lines: flag(this._primitivesCollection.lines),
          hlines: flag(this._primitivesCollection.hlines),
          textmarks: flag(this._primitivesCollection.textmarks),
          shapemarks: flag(this._primitivesCollection.shapemarks),
          backgrounds: flag(this._primitivesCollection.backgrounds),
          polygons: flag(this._primitivesCollection.polygons),
          trendchannels: flag(this._primitivesCollection.trendchannels),
          hhists: flag(this._primitivesCollection.hhists),
          dwglabels: func(this._primitivesCollection.dwglabels),
          dwglines: func(this._primitivesCollection.dwglines),
          dwgpolylines: func(this._primitivesCollection.dwgpolylines),
          dwgboxes: func(this._primitivesCollection.dwgboxes),
          dwgtables: func(this._primitivesCollection.dwgtables),
          dwgtablecells: flag(this._primitivesCollection.dwgtablecells),
          dwglinefills: flag(this._primitivesCollection.dwglinefills),
          tpos: flag(this._primitivesCollection.tpos),
          tpoBlockSets: func(this._primitivesCollection.tpoBlockSets),
          tpoLevels: func(this._primitivesCollection.tpoLevels),
          tpoVolumeRows: func(this._primitivesCollection.tpoVolumeRows),
          tpoSummaryInfo: func(this._primitivesCollection.tpoSummaryInfo),
          logs: new Map,
          performance: new Map,
          footprints: flag(this._primitivesCollection.footprints),
          footprintLevels: flag(this._primitivesCollection.footprintLevels)
        };
        return this._hhistsByTimePointIndex = new Map, new utils.StaticStudyGraphics("data", exports)
      }
      replaceIndexesTo(exports) {
        this._indexes = exports;
        const module = exportstrinflag => exports.replaceIndexesTo(this._indexes);
        for (const exports of data.regularPrimitiveNames) this._primitivesCollection[exports].forEach(module);
        for (const exports of data.groupedPrimitiveNames) this._primitivesCollection[exports].forEach((exportstrinflag => {
          exports.forEach(module)
        }));
        this._hhistsByTimePointIndex = (0, data.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
      processCommands(exports) {
        void 0 !== exports.erase && this._processEraseCommands(exports.erase), void 0 !== exports.create && this._processCreateCommands(
          exports.create)
      }
      _processCreateCommands(exports) {
        for (const module in exports) {
          if (!exports.hasOwnProperty(module)) continue;
          const require = module;
          switch (require) {
            case "hhists":
              array(this._indexes, this._primitivesCollection.hhists, exports[require]);
              break;
            case "horizlines":
              array(this._indexes, this._primitivesCollection.horizlines, exports[require]);
              break;
            case "vertlines":
              array(this._indexes, this._primitivesCollection.vertlines, exports[require]);
              break;
            case "polygons":
              array(this._indexes, this._primitivesCollection.polygons, exports[require]);
              break;
            case "backgrounds":
              array(this._indexes, this._primitivesCollection.backgrounds, exports[require])
          }
        }
        this._hhistsByTimePointIndex = (0, data.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
      _processEraseCommands(exports) {
        for (const module of exports)
          if ("all" === module.action) {
            for (const exports of data.regularPrimitiveNames) this._primitivesCollection[exports].forEach((exportstrinflag => exports
          .clearPrimitives()));
            for (const exports of data.groupedPrimitiveNames) this._primitivesCollection[exports].forEach((exportstrinflag => {
              exports.forEach((exportstrinflag => exports.clearPrimitives()))
            }))
          } else {
            const exports = exportstrinflag => exports.deleteById(module.id);
            (0, data.isRegularPrimiriveName)(module.type) ? this._primitivesCollection[module.type].forEach(exports): this
              ._primitivesCollection[module.type].forEach((modulresulconfiflag => {
                module.forEach(exports)
              }))
          } this._hhistsByTimePointIndex = (0, data.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
      }
    }
    class params {
      constructor(exports, module) {
        this._primitivesDataById = new Map, this._primitiveById = new Map, this._changed = new name.Delegate, this
          ._cleared = new name.Delegate, this._materializePrimitive = exports,
          this._isRematerializationRequiredWithNewIndexes = module
      }
      changed() {
        return this._changed
      }
      cleared() {
        return this._cleared
      }
      forEach(exports, module) {
        this._primitiveById.forEach((requirresulconfiflag => {
          exports.call(module, require, require, this)
        }))
      }
      has(exports) {
        let module = !1;
        return this._primitiveById.forEach((requirresulconfiflag => {
          module = module || require === exports
        })), module
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
      addData(exports, module) {
        const require = [];
        exports.forEach((exportstrinflag => {
          this._primitivesDataById.set(exports.id, exports);
          const constants = this._tryMaterialize(module, exports);
          null !== constants && require.push(constants)
        })), require.length > 0 && this._changed.fire({
          created: require,
          removed: []
        })
      }
      deleteById(exports) {
        const module = this._primitiveById.get(exports);
        module && (this._primitiveById.delete(exports), this._primitivesDataById.delete(exports), this._changed.fire({
          created: [],
          removed: [module]
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
        this._primitiveById.clear(), this._primitivesDataById.forEach(this._tryMaterialize.bind(this, exports), this);
        const require = Array.from(this._primitiveById.values());
        this._changed.fire({
          created: require,
          removed: module
        })
      }
      extract() {
        const exports = new Set(this._primitivesDataById.values());
        return this.clearPrimitives(), exports
      }
      _tryMaterialize(exports, module) {
        const require = this._materializePrimitive(module, exports);
        return null !== require && ((0, constants.assert)(!this._primitiveById.has(module.id),
          "primitive with specified id should not exist"), this._primitiveById.set(module.id, require)), require
      }
    }

    function map(exports) {
      const module = new Map;
      for (const [name, config] of exports) module.set(name, (require = config, (constants = module.get(name)) ? (0, result.join)(constants, require.extract()) : require.extract()));
      var require, constants;
      return module
    }

    function flag(exports) {
      return map((0, result.mapEntriesGenerator)(exports))
    }

    function func(exports) {
      return map((0, result.nestedMapGenerator)(exports))
    }

    function array(exports, module, require = []) {
      for (const result of require) {
        const require = result.styleId,
          name = module.get(require);
        (0, constants.assert)(void 0 !== name, "Every style used by graphics primitive should be declared in study metainfo"), name
          .addData(result.data, exports)
      }
    }
    const value = {
      horizlines: () => new params(items.materializeHorizLine, items.containsHorizLineTimePointIndexes),
      vertlines: () => new params(length.materializeVertLine, length.containsVertLineTimePointIndexes),
      lines: () => new params(materializeLine, containsLineTimePointIndexes),
      hlines: () => new params(materializeLevel, containsLevelTimePointIndexes),
      textmarks: () => new params(materializeTextMark, containsTextMarkTimePointIndexes),
      shapemarks: () => new params(materializeShapeMark, containsShapeMarkTimePointIndexes),
      backgrounds: () => new params(handler.materializeBackground, handler.containsBackgroundTimePointIndexes),
      polygons: () => new params(context.materializePolygon, context.containsPolygonTimePointIndexes),
      trendchannels: () => new params(materializeTrendChannel, containsTrendChannelTimePointIndexes),
      hhists: () => new params(config.materializeHHist, config.containsHHistTimePointIndexes),
      dwglines: () => new params(materializeDwgLine, containsDwgLineTimePointIndexes),
      dwglinefills: () => new params(materializeDwgLineFill, containsDwgLineFillTimePointIndexes),
      dwglabels: () => new params(materializeDwgLabel, containsDwgLabelTimePointIndexes),
      dwgtablecells: () => new params(materializeDwgTableCell, containsDwgTableCellTimePointIndexes),
      dwgpolylines: () => new params(materializeDwgPolyline, containsDwgPolylineTimePointIndexes),
      dwgboxes: () => new params(materializeDwgBox, containsDwgBoxTimePointIndexes),
      dwgtables: () => new params(materializeDwgTable, containsDwgTableTimePointIndexes),
      tpos: () => new params(materializeTpo, containsTpoTimePointIndexes),
      tpoBlockSets: () => new params(materializeTpoBlockSet, containsTpoBlockSetTimePointIndexes),
      tpoLevels: () => new params(materializeTpoLevelGroup, containsTpoLevelGroupTimePointIndexes),
      tpoVolumeRows: () => new params(materializeTpoVolumeRow, containsTpoVolumeRowTimePointIndexes),
      tpoSummary: () => new params(materializeTpoSummary, containsTpoSummaryTimePointIndexes),
      logs: () => new params(materializeLog, containsLogTimePointIndexes),
      footprints: () => new params(materializeVolumeFootprint, containsFootprintTimePointIndexes),
      footprintLevels: () => new params(materializeVolumeFootprintPriceLevel, containsFootprintPriceLevelTimePointIndexes)
    }