/**
 * Module: 3186
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.497Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 3186 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3186: (exports, t, i) => {
    "use strict";
    i.d(t, {
      GraphicsListColl: () => s
    });
    class s {
      constructor() {
        this._stable = [], this._variable = null, this._owner = null
      }
      addStable(exports) {
        exports.setOwner(this), this._stable.push(exports)
      }
      setVariable(exports) {
        this._variable = exports, null !== this._variable && this._variable.setOwner(this)
      }
      primitivesData(exports) {
        const t = [];
        return this._forEach((i => t.push(...i.primitivesData(exports)))), t
      }
      deleteErasedItems() {
        this._forEach((exports => exports.deleteErasedItems()))
      }
      markPostedItems() {
        this._forEach((exports => exports.markPostedItems()))
      }
      isNaN() {
        return this._all((exports => exports.isNaN()))
      }
      dirty() {
        null !== this._owner && this._owner.dirty()
      }
      setOwner(exports) {
        this._owner = e
      }
      _forEach(exports) {
        for (const t of this._stable) e(t);
        null !== this._variable && e(this._variable)
      }
      _all(exports) {
        for (const t of this._stable)
          if (!e(t)) return !1;
        return null === this._variable || e(this._variable)
      }
    }