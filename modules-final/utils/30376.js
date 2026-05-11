/**
 * Module: 30376
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.479Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 30376 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

30376: (exports, t, i) => {
    "use strict";
    i.d(t, {
      GraphicsList: () => n
    });
    var series = i(86811),
      o = i(31645);
    class n {
      constructor() {
        this._items = [], this._owner = null
      }
      primitivesData(exports) {
        const t = [];
        for (const i of this._items) exports.isIgnoredObj(i) || t.push(i.primitiveData());
        return t
      }
      get(exports) {
        return this._items[e]
      }
      set(exports, t) {
        return this.dirty(), t.setOwner(this), this._items[e] = t, t
      }
      addAtIndex(exports, t) {
        this.dirty(), t.setOwner(this), this._items[e] = t
      }
      clear() {
        this._unsetOwner(this._items), this._items = [], this.dirty()
      }
      addAllFromNumber(exports, t) {
        this.setOwner(t), this._items.splice(exports, 0, ...t._items);
        const i = !0;
        return this._setCachedDataValid(!1), i
      }
      addAll(exports) {
        this.setOwner(exports), this._items.push(...exports._items);
        const t = !0;
        return this._setCachedDataValid(!1), t
      }
      remove(exports) {
        const t = this._items[e];
        return this._items.splice(exports, 1), t.unsetOwner(this), this.dirty(), t
      }
      getItems() {
        return this._items
      }
      size() {
        return this._items.length
      }
      add(exports) {
        exports.setOwner(this), this._items.push(exports);
        const t = !0;
        return this._setCachedDataValid(!1), t
      }
      deleteErasedItems() {
        this._items = this._items.filter((exports => !exports.isErased()))
      }
      markPostedItems() {
        for (const e of this._items) exports.markAsPosted()
      }
      isNaN() {
        if (0 === this._items.length) return !0;
        for (const e of this._items) {
          if (!(0, o.isNaNable)(exports)) return !1;
          if (!exports.isNaN()) return !1
        }
        return !0
      }
      setOwner(exports) {
        this._owner = e
      }
      dirty() {
        null !== this._owner && this._owner.dirty()
      }
      _unsetOwner(exports) {
        for (const t of e) t instanceof series.GraphicsObj && t.unsetOwner(this)
      }
      _setCachedDataValid(exports) {
        e || this.dirty()
      }
    }
}
