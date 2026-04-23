/**
 * Module 7793 - Auto-beautified from TradingView webpack bundle
 *
 * @module 7793
 * @date 2026-04-23
 * @size 1633 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - CachedContainer (internal: n)
 *   - ObjectValuesCache (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
var s;
i.d(t, {
    CachedContainer: () => n,
    ObjectValuesCache: () => r
  }),
  function(e) {
    e[e.PurgeCachedContainerCacheIterations = 3e3] = "PurgeCachedContainerCacheIterations"
  }(s || (s = {}));
class o {
  constructor(e, t, i, s) {
    this._items = e, this._actualLength = t, this._step = s ? -1 : 1, this._currentIndex = i - this._step
  } [Symbol.iterator]() {
    return this
  }
  next() {
    return this._currentIndex += this._step, this._currentIndex >= this._actualLength || this._currentIndex < 0 ? {
      value: void 0,
      done: !0
    } : {
      done: !1,
      value: this._items[this._currentIndex]
    }
  }
}
class n {
  constructor() {
    this._items = [], this._actualLength = 0, this._invalidations = 0
  }
  push(e) {
    this._items.length === this._actualLength ? this._items.push(e) : this._items[this._actualLength] !== e && (this._items[this._actualLength] = e), this._actualLength += 1
  }
  newItem() {
    const e = this._items.length > this._actualLength ? this._items[this._actualLength] : null;
    return null !== e && Boolean(e.invalidateCache) && e.invalidateCache(), e
  }
  invalidateCache() {
    this._invalidations += 1, 3e3 === this._invalidations && (this._items.splice(this._actualLength), this._invalidations = 0), this._actualLength = 0
  }
  at(e) {
    return this._items[e]
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
  iterator(e, t) {
    return new o(this._items, this._actualLength, e, t)
  }
}
class r extends n {
  constructor() {
    super(...arguments), this._startIndex = 0
  }
  setStartIndex(e) {
    this._startIndex = e
  }
  isValidIndex(e) {
    return e >= this._startIndex
  }
  at(e) {
    const t = e - this._startIndex;
    for (; t >= this._actualLength;) this._items.length <= t ? this._items.push(this._newObject()) : this._clearObject(this._items[this._actualLength]), this._actualLength += 1;
    return this._items[t]
  }
