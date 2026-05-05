// ============================================================================
// MODULE 7793 - SEMANTICALLY IDENTIFIED AS: watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 90%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 7793 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

7793: (exports, module, require) => {
    "use strict";
    var state;
    require.data(module, {
        CachedContainer: () => nextValue,
        ObjectValuesCache: () => result
      }),
      function(exports) {
        exports[exports.PurgeCachedContainerCacheIterations = 3e3] = "PurgeCachedContainerCacheIterations"
      }(state || (state = {}));
    class object {
      constructor(exports, module, require, state) {
        this._items = exports, this._actualLength = module, this._step = state ? -1 : 1, this._currentIndex = require - this._step
      } [Symbol.iterator]() {
        return this
      }
      next() {
        return this._currentIndex += this._step, this._currentIndex >= this._actualLength || this._currentIndex < 0 ?
        {
          value: void 0,
          done: !0
        } : {
          done: !1,
          value: this._items[this._currentIndex]
        }
      }
    }
    class nextValue {
      constructor() {
        this._items = [], this._actualLength = 0, this._invalidations = 0
      }
      push(exports) {
        this._items.length === this._actualLength ? this._items.push(exports) : this._items[this._actualLength] !== exports && (
          this._items[this._actualLength] = exports), this._actualLength += 1
      }
      newItem() {
        const exports = this._items.length > this._actualLength ? this._items[this._actualLength] : null;
        return null !== exports && Boolean(exports.invalidateCache) && exports.invalidateCache(), exports
      }
      invalidateCache() {
        this._invalidations += 1, 3e3 === this._invalidations && (this._items.splice(this._actualLength), this
          ._invalidations = 0), this._actualLength = 0
      }
      at(exports) {
        return this._items[exports]
      }
      data() {
        return this._items
      }
      length() {
        return this._actualLength
      }
      isEmpty() {
        return 0 === this._actualLength
      }
      iterator(exports, module) {
        return new object(this._items, this._actualLength, exports, module)
      }
    }
    class result extends nextValue {
      constructor() {
        super(...arguments), this._startIndex = 0
      }
      setStartIndex(exports) {
        this._startIndex = exports
      }
      isValidIndex(exports) {
        return exports >= this._startIndex
      }
      at(exports) {
        const module = exports - this._startIndex;
        for (; module >= this._actualLength;) this._items.length <= module ? this._items.push(this._newObject()) : this
          ._clearObject(this._items[this._actualLength]), this._actualLength += 1;
        return this._items[module]
      }
    }