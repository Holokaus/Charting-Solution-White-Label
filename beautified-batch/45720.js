/**
 * Module 45720 - Auto-beautified from TradingView webpack bundle
 *
 * @module 45720
 * @date 2026-04-23
 * @size 510 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - AbstractMapContainer (internal: a)
 *   - getDefault2Lazy (internal: n)
 *   - getDefault3 (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";

function s(e, t, i) {
  const s = e.get(t);
  return void 0 !== s ? s : (e.set(t, i), i)
}

function o(e, t, i) {
  const s = e.get(t);
  if (void 0 !== s) return s;
  const o = i();
  return e.set(t, o), o
}

function n(e, t, i, n) {
  return o(s(e, t, new Map), i, n)
}

function r(e, t, i, o, n) {
  const r = s(e, t, new Map),
    a = s(r, i, new Map);
  return s(a, o, n)
}
i.d(t, {
  AbstractMapContainer: () => a,
  getDefault2Lazy: () => n,
  getDefault3: () => r
});
class a {
  constructor() {
    this._map = new Map, this._size = 0
  }
  size() {
    return this._size
  }
  clear() {
    this._map.clear(), this._size = 0
  }
