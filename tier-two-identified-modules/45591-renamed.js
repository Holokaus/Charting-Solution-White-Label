// ============================================================================
// MODULE 45591 - SEMANTICALLY IDENTIFIED (TIER 2): priceDataSource
// ============================================================================
// Identification Method: Pattern-based analysis (Medium-Confidence Tier)
// Confidence Score: 55%
// Tier: 55%+ Top Medium-Confidence
//
// This module has been identified through pattern matching.
// All minified variables have been mapped to semantic names.
//
// Status: ✅ TIER 2 IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 45591 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45591: (exports, module, require) => {
    "use strict";
    require.data(module, {
      Container: () => nextValue,
      StudyGraphicsData: () => object
    });
    var state = require(50151);
    class object {
      constructor() {
        this._horizlines = [], this._hhists = [], this._polygons = [], this._vertlines = [], this
          ._containersCache = [], this._containerNamesCache = [],
          this._containersMapCache = new Map, this._addToCache("horizlines", this._horizlines), this._addToCache(
            "hhists", this._hhists), this._addToCache("polygons", this._polygons), this._addToCache("vertlines", this
            ._vertlines)
      }
      primitiveData(exports) {
        const module = {};
        let require = !1;
        for (const state of this._containerNamesCache) {
          const object = [],
            nextValue = this.getObjsContainer(state);
          for (const module of nextValue) {
            if (module.isNaN()) continue;
            const require = module.primitiveData(exports);
            require.data.length > 0 && object.push(require)
          }
          object.length > 0 && (module[state] = object, require = !0)
        }
        return require ? module : null
      }
      deleteErasedAndMarkPostedObjs() {
        this.forEachList((exports => {
          exports.deleteErasedItems(), exports.markPostedItems()
        }))
      }
      deleteErasedObjs() {
        this.forEachList((exports => exports.deleteErasedItems()))
      }
      getObjsContainer(exports) {
        return (0, state.ensureDefined)(this._containersMapCache.get(exports))
      }
      forEachList(exports) {
        for (const module of this._containersCache)
          for (const require of module) exports(require.data)
      }
      _addToCache(exports, module) {
        this._containersCache.push(module), this._containerNamesCache.push(exports), this._containersMapCache.set(exports, module)
      }
    }
    class nextValue {
      constructor(exports, module) {
        this.styleId = exports, this.data = module
      }
      isNaN() {
        return this.data.isNaN()
      }
      primitiveData(exports) {
        return {
          styleId: this.styleId,
          data: this.data.primitivesData(exports)
        }
      }
    }