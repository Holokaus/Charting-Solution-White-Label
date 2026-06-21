/**
 * Module 16659 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

16659: (exports, module, require) => {
    "use strict";
    require.data(module, {
      CircularCacheBuffer: () => config
    });
    var constants, result = require(50151);

    function name(exports) {
      const {
        prevItem: module,
        nextItem: require
      } = exports;
      null !== module && (module.nextItem = require), null !== require && (require.prevItem = module)
    }! function(exports) {
      exports[exports.CapacityFactor = 1.3] = "CapacityFactor"
    }(constants || (constants = {}));
    class config {
      constructor(exports = 0, module = 1.3) {
        this._cache = new Map, this._lastItem = null, this._firstItem = null, this._size = exports, this._sizeLimited = exports >
          0, this._capacityFactor = module
      }
      set(exports, module) {
        const require = {
          key: exports,
          value: module,
          prevItem: this._lastItem,
          nextItem: null
        };
        null !== this._lastItem && (this._lastItem.nextItem = require);
        const constants = this._cache.get(exports);
        return void 0 !== constants && (name(constants), constants === this._firstItem && (this._firstItem = constants.nextItem)), this._cache.set(exports, require),
          this._lastItem = require, null === this._firstItem && (this._firstItem = require), this._sizeLimited && this._cache
          .size > this._size * this._capacityFactor && this._removeExtraItems(), this
      }
      has(exports) {
        return this._cache.has(exports)
      }
      get(exports) {
        const module = this._cache.get(exports);
        if (void 0 === module) return module;
        if (module === this._firstItem && (this._firstItem = module.nextItem ?? module), module !== this._lastItem) {
          name(module);
          const exports = (0, result.ensureNotNull)(this._lastItem);
          exports.nextItem = module, module.prevItem = exports, module.nextItem = null, this._lastItem = module
        }
        return module.value
      }
      clear() {
        this._cache.clear(), this._firstItem = null, this._lastItem = null
      }
      delete(exports) {
        const module = this._cache.get(exports);
        return void 0 !== module && (name(module), module === this._lastItem && (this._lastItem = module.prevItem), module === this._firstItem &&
          (this._firstItem = module.nextItem)), this._cache.delete(exports)
      }* entries() {
        if (null !== this._firstItem)
          for (let exports = this._firstItem; null !== exports; exports = exports.nextItem) yield [exports.key, exports.value]
      }
      state() {
        const exports = [];
        for (const [module, require] of this.entries()) exports.push([module, require]);
        return exports
      }
      restoreState(exports) {
        for (const module of exports) this.set(module[0], module[1])
      }
      _removeExtraItems() {
        const exports = this._cache.size - this._size;
        let module = (0,
          result.ensureNotNull)(this._firstItem);
        for (let require = 0; require < exports; require += 1) this._cache.delete(module.key), module = (0, result.ensureNotNull)(module.nextItem);
        module.prevItem = null, this._firstItem = module
      }
    }