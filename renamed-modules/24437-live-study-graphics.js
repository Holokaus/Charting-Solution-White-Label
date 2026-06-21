// Module 24437 - Live Study Graphics (Drawing Tools)
// Purpose: Manages user-drawn studies, annotations, and technical analysis tools
// Original file: modules-v2/24437.js
// Size: 9.9 KB (beautified)
// Note: Despite module name suggesting WebGL, this handles drawing tool data management
// Dependencies: 50151, 12217, 48096, 99481, 60661, 58554, 30798, 69866, 82130, 39488

"use strict";

// Import dependencies
const nullUtils = require(50151);            // ensureNotNull, assert
const arrayUtils = require(12217);           // join, mapEntriesGenerator, nestedMapGenerator
const eventSystem = require(48096);          // Delegate (event emitter)
const hhistRenderer = require(99481);        // materializeHHist, containsHHistTimePointIndexes
const horizLine = require(60661);            // materializeHorizLine, containsHorizLineTimePointIndexes
const vertLine = require(58554);             // materializeVertLine, containsVertLineTimePointIndexes
const polygon = require(30798);              // materializePolygon, containsPolygonTimePointIndexes
const background = require(69866);           // materializeBackground, containsBackgroundTimePointIndexes
const primitiveDefs = require(82130);        // primitiveNames, regularPrimitiveNames, groupedPrimitiveNames, etc.
const staticGraphics = require(39488);       // StaticStudyGraphics
  
  // ============================================================================
  // CLASS: LiveStudyGraphics
  // Main container for all user-drawn study graphics on a chart
  // Manages lifecycle, rendering, and data synchronization
  // ============================================================================
  
  class LiveStudyGraphics {
    /**
     * @param {Object} initialData - Initial graphics data by primitive type
     */
    constructor(initialData = {}) {
      this._indexes = [];
      this._hhistsByTimePointIndex = new Map();
      
      // Initialize primitives collection with all supported types
      this._primitivesCollection = this._initializePrimitives(initialData);
    }
    
    /**
     * Initialize primitives collection from data
     */
    _initializePrimitives(data) {
      const collection = {};
      
      // Create Map for each primitive type
      for (const primitiveName of primitiveDefs.primitiveNames) {
        collection[primitiveName] = new Map();
        
        const primitiveData = data[primitiveName];
        if (primitiveData !== undefined) {
          // Process each style/instance within primitive type
          for (const id in primitiveData) {
            if (primitiveData.hasOwnProperty(id)) {
              switch (primitiveName) {
                case "horizlines":
                  collection[primitiveName].set(id, PrimitiveFactory.horizlines());
                  break;
                case "vertlines":
                  collection[primitiveName].set(id, PrimitiveFactory.vertlines());
                  break;
                case "backgrounds":
                  collection[primitiveName].set(id, PrimitiveFactory.backgrounds());
                  break;
                case "polygons":
                  collection[primitiveName].set(id, PrimitiveFactory.polygons());
                  break;
                case "hhists":
                  collection[primitiveName].set(id, PrimitiveFactory.hhists());
                  break;
              }
            }
          }
        }
      }
      
      return collection;
    }
    
    // ==========================================================================
    // GETTERS - Access primitive collections by type
    // ==========================================================================
    
    horizlines() { return this._primitivesCollection.horizlines; }
    vertlines() { return this._primitivesCollection.vertlines; }
    lines() { return this._primitivesCollection.lines; }
    hlines() { return this._primitivesCollection.hlines; }
    textmarks() { return this._primitivesCollection.textmarks; }
    shapemarks() { return this._primitivesCollection.shapemarks; }
    backgrounds() { return this._primitivesCollection.backgrounds; }
    polygons() { return this._primitivesCollection.polygons; }
    trendchannels() { return this._primitivesCollection.trendchannels; }
    hhists() { return this._primitivesCollection.hhists; }
    dwglabels() { return this._primitivesCollection.dwglabels; }
    dwglines() { return this._primitivesCollection.dwglines; }
    dwgpolylines() { return this._primitivesCollection.dwgpolylines; }
    dwgboxes() { return this._primitivesCollection.dwgboxes; }
    dwgtables() { return this._primitivesCollection.dwgtables; }
    dwgtablecells() { return this._primitivesCollection.dwgtablecells; }
    dwglinefills() { return this._primitivesCollection.dwglinefills; }
    tpos() { return this._primitivesCollection.tpos; }
    tpoBlockSets() { return this._primitivesCollection.tpoBlockSets; }
    tpoLevels() { return this._primitivesCollection.tpoLevels; }
    tpoVolumeRows() { return this._primitivesCollection.tpoVolumeRows; }
    tpoSummaryInfo() { return this._primitivesCollection.tpoSummaryInfo; }
    logs() { return this._primitivesCollection.logs; }
    observableLogs() { return this._primitivesCollection.logs; }
    performance() { return this._primitivesCollection.performance; }
    observablePerformance() { return this._primitivesCollection.performance; }
    footprints() { return this._primitivesCollection.footprints; }
    footprintLevels() { return this._primitivesCollection.footprintLevels; }
    
    /**
     * Get histogram data indexed by time point
     */
    hhistsByTimePointIndex() {
      return this._hhistsByTimePointIndex;
    }
    
    // ==========================================================================
    // LIFECYCLE MANAGEMENT
    // ==========================================================================
    
    /**
     * Clear all graphics data
     */
    clear() {
      this._indexes = [];
      
      // Clear regular primitives
      for (const primitiveName of primitiveDefs.regularPrimitiveNames) {
        this._primitivesCollection[primitiveName].forEach(primitive => primitive.clear());
      }
      
      // Clear grouped primitives
      for (const primitiveName of primitiveDefs.groupedPrimitiveNames) {
        this._primitivesCollection[primitiveName].forEach(group => {
          group.forEach(primitive => primitive.clear());
        });
      }
      
      this._hhistsByTimePointIndex = new Map();
    }
    
    /**
     * Extract all graphics data as static snapshot
     * @returns {StaticStudyGraphics} Immutable copy of current state
     */
    extract() {
      const extractedData = {
        indexes: this._indexes,
        horizlines: extractRegular(this._primitivesCollection.horizlines),
        vertlines: extractRegular(this._primitivesCollection.vertlines),
        lines: extractRegular(this._primitivesCollection.lines),
        hlines: extractRegular(this._primitivesCollection.hlines),
        textmarks: extractRegular(this._primitivesCollection.textmarks),
        shapemarks: extractRegular(this._primitivesCollection.shapemarks),
        backgrounds: extractRegular(this._primitivesCollection.backgrounds),
        polygons: extractRegular(this._primitivesCollection.polygons),
        trendchannels: extractRegular(this._primitivesCollection.trendchannels),
        hhists: extractRegular(this._primitivesCollection.hhists),
        dwglabels: extractGrouped(this._primitivesCollection.dwglabels),
        dwglines: extractGrouped(this._primitivesCollection.dwglines),
        dwgpolylines: extractGrouped(this._primitivesCollection.dwgpolylines),
        dwgboxes: extractGrouped(this._primitivesCollection.dwgboxes),
        dwgtables: extractGrouped(this._primitivesCollection.dwgtables),
        dwgtablecells: extractRegular(this._primitivesCollection.dwgtablecells),
        dwglinefills: extractRegular(this._primitivesCollection.dwglinefills),
        tpos: extractRegular(this._primitivesCollection.tpos),
        tpoBlockSets: extractGrouped(this._primitivesCollection.tpoBlockSets),
        tpoLevels: extractGrouped(this._primitivesCollection.tpoLevels),
        tpoVolumeRows: extractGrouped(this._primitivesCollection.tpoVolumeRows),
        tpoSummaryInfo: extractGrouped(this._primitivesCollection.tpoSummaryInfo),
        logs: new Map(),
        performance: new Map(),
        footprints: extractRegular(this._primitivesCollection.footprints),
        footprintLevels: extractRegular(this._primitivesCollection.footprintLevels)
      };
      
      // Reset histogram index after extraction
      this._hhistsByTimePointIndex = new Map();
      
      return new staticGraphics.StaticStudyGraphics("data", extractedData);
    }
    
    /**
     * Replace time indexes and rematerialize time-dependent primitives
     * @param {number[]} newIndexes - New bar/time indexes
     */
    replaceIndexesTo(newIndexes) {
      this._indexes = newIndexes;
      
      const rematerialize = primitive => primitive.replaceIndexesTo(this._indexes);
      
      // Rematerialize regular primitives
      for (const primitiveName of primitiveDefs.regularPrimitiveNames) {
        this._primitivesCollection[primitiveName].forEach(rematerialize);
      }
      
      // Rematerialize grouped primitives
      for (const primitiveName of primitiveDefs.groupedPrimitiveNames) {
        this._primitivesCollection[primitiveName].forEach(group => {
          group.forEach(rematerialize);
        });
      }
      
      // Rebuild histogram time index
      this._hhistsByTimePointIndex = primitiveDefs.splitHHistsByTimePointIndex(
        this._primitivesCollection.hhists
      );
    }
    
    // ==========================================================================
    // COMMAND PROCESSING
    // ==========================================================================
    
    /**
     * Process create/erase commands for graphics updates
     * @param {Object} commands - Commands object with create/erase arrays
     */
    processCommands(commands) {
      if (commands.erase !== undefined) {
        this._processEraseCommands(commands.erase);
      }
      
      if (commands.create !== undefined) {
        this._processCreateCommands(commands.create);
      }
    }
    
    /**
     * Process create commands
     */
    _processCreateCommands(createCommands) {
      for (const primitiveType in createCommands) {
        if (!createCommands.hasOwnProperty(primitiveType)) {
          continue;
        }
        
        const type = primitiveType;
        
        switch (type) {
          case "hhists":
            addPrimitives(this._indexes, this._primitivesCollection.hhists, createCommands[type]);
            break;
          case "horizlines":
            addPrimitives(this._indexes, this._primitivesCollection.horizlines, createCommands[type]);
            break;
          case "vertlines":
            addPrimitives(this._indexes, this._primitivesCollection.vertlines, createCommands[type]);
            break;
          case "polygons":
            addPrimitives(this._indexes, this._primitivesCollection.polygons, createCommands[type]);
            break;
          case "backgrounds":
            addPrimitives(this._indexes, this._primitivesCollection.backgrounds, createCommands[type]);
            break;
        }
      }
      
      // Rebuild histogram time index
      this._hhistsByTimePointIndex = primitiveDefs.splitHHistsByTimePointIndex(
        this._primitivesCollection.hhists
      );
    }
    
    /**
     * Process erase commands
     */
    _processEraseCommands(eraseCommands) {
      for (const command of eraseCommands) {
        if (command.action === "all") {
          // Erase all primitives
          for (const primitiveName of primitiveDefs.regularPrimitiveNames) {
            this._primitivesCollection[primitiveName].forEach(primitive => 
              primitive.clearPrimitives()
            );
          }
          
          for (const primitiveName of primitiveDefs.groupedPrimitiveNames) {
            this._primitivesCollection[primitiveName].forEach(group => {
              group.forEach(primitive => primitive.clearPrimitives());
            });
          }
        } else {
          // Erase specific primitive by ID
          const deleteById = primitive => primitive.deleteById(command.id);
          
          if (primitiveDefs.isRegularPrimiriveName(command.type)) {
            this._primitivesCollection[command.type].forEach(deleteById);
          } else {
            this._primitivesCollection[command.type].forEach(group => {
              group.forEach(deleteById);
            });
          }
        }
      }
      
      // Rebuild histogram time index
      this._hhistsByTimePointIndex = primitiveDefs.splitHHistsByTimePointIndex(
        this._primitivesCollection.hhists
      );
    }
  }
  
  // ============================================================================
  // CLASS: PrimitiveContainer (p)
  // Container for primitives of a single type with change tracking
  // ============================================================================
  
  class PrimitiveContainer {
    /**
     * @param {Function} materializeFn - Function to materialize primitive from data
     * @param {boolean} requiresRematerialization - Whether indexes change requires rematerialization
     */
    constructor(materializeFn, requiresRematerialization) {
      this._primitivesDataById = new Map();
      this._primitiveById = new Map();
      this._changed = new eventSystem.Delegate();
      this._cleared = new eventSystem.Delegate();
      this._materializePrimitive = materializeFn;
      this._isRematerializationRequiredWithNewIndexes = requiresRematerialization;
    }
    
    /**
     * Get changed event delegate
     */
    changed() {
      return this._changed;
    }
    
    /**
     * Get cleared event delegate
     */
    cleared() {
      return this._cleared;
    }
    
    /**
     * Iterate over all primitives
     * @param {Function} callback - Callback(primitive, id, container)
     * @param {Object} [thisArg] - Optional this binding
     */
    forEach(callback, thisArg) {
      this._primitiveById.forEach((primitive, id) => {
        callback.call(thisArg, primitive, id, this);
      });
    }
    
    /**
     * Check if container has specific primitive instance
     */
    has(primitive) {
      let found = false;
      this._primitiveById.forEach(p => {
        found = found || p === primitive;
      });
      return found;
    }
    
    /**
     * Get number of primitives
     */
    get size() {
      return this._primitiveById.size;
    }
    
    /**
     * Iterator for primitives
     */
    [Symbol.iterator]() {
      return this._primitiveById.values();
    }
    
    // Not implemented (Set-like operations)
    entries() { throw new Error("Not implemented"); }
    keys() { throw new Error("Not implemented"); }
    union() { throw new Error("Not implemented"); }
    intersection() { throw new Error("Not implemented"); }
    difference() { throw new Error("Not implemented"); }
    symmetricDifference() { throw new Error("Not implemented"); }
    isSubsetOf() { throw new Error("Not implemented"); }
    isSupersetOf() { throw new Error("Not implemented"); }
    isDisjointFrom() { throw new Error("Not implemented"); }
    
    values() {
      return this._primitiveById.values();
    }
    
    /**
     * Check if primitive with ID exists
     */
    hasId(id) {
      return this._primitiveById.has(id);
    }
    
    /**
     * Add primitive data and materialize
     * @param {Array} dataList - Array of primitive data objects
     * @param {number[]} indexes - Time/bar indexes
     */
    addData(dataList, indexes) {
      const created = [];
      
      dataList.forEach(data => {
        // Store raw data
        this._primitivesDataById.set(data.id, data);
        
        // Materialize primitive
        const primitive = this._tryMaterialize(indexes, data);
        if (primitive !== null) {
          created.push(primitive);
        }
      });
      
      if (created.length > 0) {
        this._changed.fire({ created, removed: [] });
      }
    }
    
    /**
     * Delete primitive by ID
     */
    deleteById(id) {
      const primitive = this._primitiveById.get(id);
      
      if (primitive) {
        this._primitiveById.delete(id);
        this._primitivesDataById.delete(id);
        this._changed.fire({ created: [], removed: [primitive] });
      }
    }
    
    /**
     * Clear all primitives (alias)
     */
    clear() {
      this.clearPrimitives();
    }
    
    /**
     * Clear all primitives and data
     */
    clearPrimitives() {
      this._primitivesDataById.clear();
      this._primitiveById.clear();
      this._cleared.fire();
    }
    
    /**
     * Replace indexes and optionally rematerialize
     */
    replaceIndexesTo(newIndexes) {
      if (!this._isRematerializationRequiredWithNewIndexes) {
        return;
      }
      
      // Store current primitives
      const oldPrimitives = Array.from(this._primitiveById.values());
      
      // Clear and rematerialize
      this._primitiveById.clear();
      this._primitivesDataById.forEach(
        data => this._tryMaterialize(newIndexes, data),
        this
      );
      
      const newPrimitives = Array.from(this._primitiveById.values());
      
      // Fire change event
      this._changed.fire({
        created: newPrimitives,
        removed: oldPrimitives
      });
    }
    
    /**
     * Extract all data and clear primitives
     * @returns {Set} Set of primitive data objects
     */
    extract() {
      const dataSet = new Set(this._primitivesDataById.values());
      this.clearPrimitives();
      return dataSet;
    }
    
    /**
     * Try to materialize primitive from data
     * @private
     */
    _tryMaterialize(indexes, data) {
      const primitive = this._materializePrimitive(data, indexes);
      
      if (primitive !== null) {
        nullUtils.assert(
          !this._primitiveById.has(data.id),
          "primitive with specified id should not exist"
        );
        this._primitiveById.set(data.id, primitive);
      }
      
      return primitive;
    }
  }
  
  // ============================================================================
  // EXTRACTION HELPERS
  // ============================================================================
  
  /**
   * Extract grouped primitives (nested Maps)
   */
  function extractGrouped(groupedMap) {
    return extractNested(groupedMap, (map) => {
      const result = new Map();
      for (const [key, value] of map) {
        // Join existing extracted data or extract fresh
        const existing = result.get(key);
        const extracted = value.extract();
        result.set(key, existing ? arrayUtils.join(existing, extracted) : extracted);
      }
      return result;
    });
  }
  
  /**
   * Extract regular primitives (flat Map)
   */
  function extractRegular(regularMap) {
    return extractNested(arrayUtils.mapEntriesGenerator(regularMap), extractGrouped);
  }
  
  /**
   * Extract nested map structures
   */
  function extractNested(mapOrGenerator, extractorFn) {
    const result = new Map();
    
    for (const [key, value] of mapOrGenerator) {
      const existing = result.get(key);
      const extracted = value.extract();
      
      if (existing) {
        result.set(key, arrayUtils.join(existing, extracted));
      } else {
        result.set(key, extracted);
      }
    }
    
    return result;
  }
  
  /**
   * Add primitives from commands
   */
  function addPrimitives(indexes, primitiveMap, commands = []) {
    for (const command of commands) {
      const styleId = command.styleId;
      const primitiveContainer = primitiveMap.get(styleId);
      
      nullUtils.assert(
        primitiveContainer !== undefined,
        "Every style used by graphics primitive should be declared in study metainfo"
      );
      
      primitiveContainer.addData(command.data, indexes);
    }
  }
  
  // ============================================================================
  // PRIMITIVE FACTORY
  // Creates appropriate container for each primitive type
  // ============================================================================
  
  const PrimitiveFactory = {
    horizlines: () => new PrimitiveContainer(
      horizLine.materializeHorizLine,
      horizLine.containsHorizLineTimePointIndexes
    ),
    vertlines: () => new PrimitiveContainer(
      vertLine.materializeVertLine,
      vertLine.containsVertLineTimePointIndexes
    ),
    lines: () => new PrimitiveContainer(
      materializeLine,
      containsLineTimePointIndexes
    ),
    hlines: () => new PrimitiveContainer(
      materializeLevel,
      containsLevelTimePointIndexes
    ),
    textmarks: () => new PrimitiveContainer(
      materializeTextMark,
      containsTextMarkTimePointIndexes
    ),
    shapemarks: () => new PrimitiveContainer(
      materializeShapeMark,
      containsShapeMarkTimePointIndexes
    ),
    backgrounds: () => new PrimitiveContainer(
      background.materializeBackground,
      background.containsBackgroundTimePointIndexes
    ),
    polygons: () => new PrimitiveContainer(
      polygon.materializePolygon,
      polygon.containsPolygonTimePointIndexes
    ),
    trendchannels: () => new PrimitiveContainer(
      materializeTrendChannel,
      containsTrendChannelTimePointIndexes
    ),
    hhists: () => new PrimitiveContainer(
      hhistRenderer.materializeHHist,
      hhistRenderer.containsHHistTimePointIndexes
    ),
    dwglines: () => new PrimitiveContainer(
      materializeDwgLine,
      containsDwgLineTimePointIndexes
    ),
    dwglinefills: () => new PrimitiveContainer(
      materializeDwgLineFill,
      containsDwgLineFillTimePointIndexes
    ),
    dwglabels: () => new PrimitiveContainer(
      materializeDwgLabel,
      containsDwgLabelTimePointIndexes
    ),
    dwgtablecells: () => new PrimitiveContainer(
      materializeDwgTableCell,
      containsDwgTableCellTimePointIndexes
    ),
    dwgpolylines: () => new PrimitiveContainer(
      materializeDwgPolyline,
      containsDwgPolylineTimePointIndexes
    ),
    dwgboxes: () => new PrimitiveContainer(
      materializeDwgBox,
      containsDwgBoxTimePointIndexes
    ),
    dwgtables: () => new PrimitiveContainer(
      materializeDwgTable,
      containsDwgTableTimePointIndexes
    ),
    tpos: () => new PrimitiveContainer(
      materializeTpo,
      containsTpoTimePointIndexes
    ),
    tpoBlockSets: () => new PrimitiveContainer(
      materializeTpoBlockSet,
      containsTpoBlockSetTimePointIndexes
    ),
    tpoLevels: () => new PrimitiveContainer(
      materializeTpoLevelGroup,
      containsTpoLevelGroupTimePointIndexes
    ),
    tpoVolumeRows: () => new PrimitiveContainer(
      materializeTpoVolumeRow,
      containsTpoVolumeRowTimePointIndexes
    ),
    tpoSummary: () => new PrimitiveContainer(
      materializeTpoSummary,
      containsTpoSummaryTimePointIndexes
    ),
    logs: () => new PrimitiveContainer(
      materializeLog,
      containsLogTimePointIndexes
    ),
    footprints: () => new PrimitiveContainer(
      materializeVolumeFootprint,
      containsFootprintTimePointIndexes
    ),
    footprintLevels: () => new PrimitiveContainer(
      materializeVolumeFootprintPriceLevel,
      containsFootprintPriceLevelTimePointIndexes
    )
};

// Exported classes
module.exports = {
    LiveStudyGraphics: LiveStudyGraphics,
    PrimitiveContainer: PrimitiveContainer,
    PrimitiveFactory: PrimitiveFactory,
    extractGrouped: extractGrouped,
    extractRegular: extractRegular,
    extractNested: extractNested,
    addPrimitives: addPrimitives
};
