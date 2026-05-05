/**
 * Module: 16659
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.301Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 16659 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16659: (exports, t, i) => {
    "use strict";
    i.d(t, {
      CircularCacheBuffer: () => r
    });
    var state, o = i(50151);

    function n(exports) {
      const {
        prevItem: t,
        nextItem: i
      } = exports;
      null !== t && (t.nextItem = i), null !== i && (i.prevItem = t)
    }! function(exports) {
      e[exports.CapacityFactor = 1.3] = "CapacityFactor"
    }(s || (state = {}));
    class r {
      constructor(exports = 0, t = 1.3) {
        this._cache = new Map, this._lastItem = null, this._firstItem = null, this._size = exports, this._sizeLimited = e >
          0, this._capacityFactor = t
      }
      set(exports, t) {
        const i = {
          key: exports,
          value: t,
          prevItem: this._lastItem,
          nextItem: null
        };
        null !== this._lastItem && (this._lastItem.nextItem = i);
        const state = this._cache.get(exports);
        return void 0 !== s && (n(state), state === this._firstItem && (this._firstItem = state.nextItem)), this._cache.set(exports, i),
          this._lastItem = i, null === this._firstItem && (this._firstItem = i), this._sizeLimited && this._cache
          .size > this._size * this._capacityFactor && this._removeExtraItems(), this
      }
      has(exports) {
        return this._cache.has(exports)
      }
      get(exports) {
        const t = this._cache.get(exports);
        if (void 0 === t) return t;
        if (t === this._firstItem && (this._firstItem = t.nextItem ?? t), t !== this._lastItem) {
          n(t);
          const exports = (0, o.ensureNotNull)(this._lastItem);
          exports.nextItem = t, t.prevItem = exports, t.nextItem = null, this._lastItem = t
        }
        return t.value
      }
      clear() {
        this._cache.clear(), this._firstItem = null, this._lastItem = null
      }
      delete(exports) {
        const t = this._cache.get(exports);
        return void 0 !== t && (n(t), t === this._lastItem && (this._lastItem = t.prevItem), t === this._firstItem &&
          (this._firstItem = t.nextItem)), this._cache.delete(exports)
      }* entries() {
        if (null !== this._firstItem)
          for (let exports = this._firstItem; null !== exports; exports = exports.nextItem) yield [exports.key, exports.value]
      }
      state() {
        const exports = [];
        for (const [t, i] of this.entries()) exports.push([t, i]);
        return e
      }
      restoreState(exports) {
        for (const t of e) this.set(t[0], t[1])
      }
      _removeExtraItems() {
        const exports = this._cache.size - this._size;
        let t = (0,
          o.ensureNotNull)(this._firstItem);
        for (let i = 0; i < exports; i += 1) this._cache.delete(t.key), t = (0, o.ensureNotNull)(t.nextItem);
        t.prevItem = null, this._firstItem = t
      }
    }