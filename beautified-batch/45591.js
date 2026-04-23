/**
 * Module 45591 - Auto-beautified from TradingView webpack bundle
 *
 * @module 45591
 * @date 2026-04-23
 * @size 1309 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151
 *
 * Exports:
 *   - Container (internal: n)
 *   - StudyGraphicsData (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  Container: () => n,
  StudyGraphicsData: () => o
});
var s = i(50151);
class o {
  constructor() {
    this._horizlines = [], this._hhists = [], this._polygons = [], this._vertlines = [], this._containersCache = [], this._containerNamesCache = [],
      this._containersMapCache = new Map, this._addToCache("horizlines", this._horizlines), this._addToCache("hhists", this._hhists), this._addToCache("polygons", this._polygons), this._addToCache("vertlines", this._vertlines)
  }
  primitiveData(e) {
    const t = {};
    let i = !1;
    for (const s of this._containerNamesCache) {
      const o = [],
        n = this.getObjsContainer(s);
      for (const t of n) {
        if (t.isNaN()) continue;
        const i = t.primitiveData(e);
        i.data.length > 0 && o.push(i)
      }
      o.length > 0 && (t[s] = o, i = !0)
    }
    return i ? t : null
  }
  deleteErasedAndMarkPostedObjs() {
    this.forEachList((e => {
      e.deleteErasedItems(), e.markPostedItems()
    }))
  }
  deleteErasedObjs() {
    this.forEachList((e => e.deleteErasedItems()))
  }
  getObjsContainer(e) {
    return (0, s.ensureDefined)(this._containersMapCache.get(e))
  }
  forEachList(e) {
    for (const t of this._containersCache)
      for (const i of t) e(i.data)
  }
  _addToCache(e, t) {
    this._containersCache.push(t), this._containerNamesCache.push(e), this._containersMapCache.set(e, t)
  }
}
class n {
  constructor(e, t) {
    this.styleId = e, this.data = t
  }
  isNaN() {
    return this.data.isNaN()
  }
  primitiveData(e) {
    return {
      styleId: this.styleId,
      data: this.data.primitivesData(e)
    }
  }
