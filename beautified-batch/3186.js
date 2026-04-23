/**
 * Module 3186 - Auto-beautified from TradingView webpack bundle
 *
 * @module 3186
 * @date 2026-04-23
 * @size 784 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - GraphicsListColl (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

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
