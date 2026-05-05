/**
 * Module 3186 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3186: (e, t, i) => {
    "use strict";
    i.d(t, {
      GraphicsListColl: () => s
    });
    class s {
      constructor() {
        this._stable = [], this._variable = null, this._owner = null
      }
      addStable(e) {
        e.setOwner(this), this._stable.push(e)
      }
      setVariable(e) {
        this._variable = e, null !== this._variable && this._variable.setOwner(this)
      }
      primitivesData(e) {
        const t = [];
        return this._forEach((i => t.push(...i.primitivesData(e)))), t
      }
      deleteErasedItems() {
        this._forEach((e => e.deleteErasedItems()))
      }
      markPostedItems() {
        this._forEach((e => e.markPostedItems()))
      }
      isNaN() {
        return this._all((e => e.isNaN()))
      }
      dirty() {
        null !== this._owner && this._owner.dirty()
      }
      setOwner(e) {
        this._owner = e
      }
      _forEach(e) {
        for (const t of this._stable) e(t);
        null !== this._variable && e(this._variable)
      }
      _all(e) {
        for (const t of this._stable)
          if (!e(t)) return !1;
        return null === this._variable || e(this._variable)
      }
    }