/**
 * Module 16659 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16659: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      CircularCacheBuffer: () => r
    });
    var watchedValue_s, o = i(50151);

    function watchedValue_n(watchedValue_e) {
      const {
        prevItem: watchedValue_t,
        nextItem: i
      } = watchedValue_e;
      null !== watchedValue_t && (watchedValue_t.nextItem = i), null !== i && (i.prevItem = watchedValue_t)
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.CapacityFactor = 1.3] = "CapacityFactor"
    }(watchedValue_s || (watchedValue_s = {}));
    class r {
      constructor(watchedValue_e = 0, watchedValue_t = 1.3) {
        this._cache = new Map, this._lastItem = null, this._firstItem = null, this._size = watchedValue_e, this._sizeLimited = watchedValue_e >
          0, this._capacityFactor = watchedValue_t
      }
      set(watchedValue_e, watchedValue_t) {
        const i = {
          key: watchedValue_e,
          value: watchedValue_t,
          prevItem: this._lastItem,
          nextItem: null
        };
        null !== this._lastItem && (this._lastItem.nextItem = i);
        const watchedValue_s = this._cache.get(watchedValue_e);
        return void 0 !== watchedValue_s && (watchedValue_n(watchedValue_s), watchedValue_s === this._firstItem && (this._firstItem = watchedValue_s.nextItem)), this._cache.set(watchedValue_e, i),
          this._lastItem = i, null === this._firstItem && (this._firstItem = i), this._sizeLimited && this._cache
          .size > this._size * this._capacityFactor && this._removeExtraItems(), this
      }
      has(watchedValue_e) {
        return this._cache.has(watchedValue_e)
      }
      get(watchedValue_e) {
        const watchedValue_t = this._cache.get(watchedValue_e);
        if (void 0 === watchedValue_t) return watchedValue_t;
        if (watchedValue_t === this._firstItem && (this._firstItem = watchedValue_t.nextItem ?? watchedValue_t), watchedValue_t !== this._lastItem) {
          watchedValue_n(watchedValue_t);
          const watchedValue_e = (0, o.ensureNotNull)(this._lastItem);
          watchedValue_e.nextItem = watchedValue_t, watchedValue_t.prevItem = watchedValue_e, watchedValue_t.nextItem = null, this._lastItem = watchedValue_t
        }
        return watchedValue_t.value
      }
      clear() {
        this._cache.clear(), this._firstItem = null, this._lastItem = null
      }
      delete(watchedValue_e) {
        const watchedValue_t = this._cache.get(watchedValue_e);
        return void 0 !== watchedValue_t && (watchedValue_n(watchedValue_t), watchedValue_t === this._lastItem && (this._lastItem = watchedValue_t.prevItem), watchedValue_t === this._firstItem &&
          (this._firstItem = watchedValue_t.nextItem)), this._cache.delete(watchedValue_e)
      }* entries() {
        if (null !== this._firstItem)
          for (let watchedValue_e = this._firstItem; null !== watchedValue_e; watchedValue_e = watchedValue_e.nextItem) yield [watchedValue_e.key, watchedValue_e.value]
      }
      state() {
        const watchedValue_e = [];
        for (const [watchedValue_t, i] of this.entries()) watchedValue_e.push([watchedValue_t, i]);
        return watchedValue_e
      }
      restoreState(watchedValue_e) {
        for (const watchedValue_t of watchedValue_e) this.set(watchedValue_t[0], watchedValue_t[1])
      }
      _removeExtraItems() {
        const watchedValue_e = this._cache.size - this._size;
        let watchedValue_t = (0,
          o.ensureNotNull)(this._firstItem);
        for (let i = 0; i < watchedValue_e; i += 1) this._cache.delete(watchedValue_t.key), watchedValue_t = (0, o.ensureNotNull)(watchedValue_t.nextItem);
        watchedValue_t.prevItem = null, this._firstItem = watchedValue_t
      }
    }