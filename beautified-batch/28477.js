/**
 * Module 28477 - Auto-beautified from TradingView webpack bundle
 *
 * @module 28477
 * @date 2026-04-23
 * @size 314 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - AbstractBarColorer (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  AbstractBarColorer: () => s
});
class s {
  constructor() {
    this._backColorers = []
  }
  barStyle(e, t, i) {
    const s = {};
    for (const o of this._backColorers) o.applyBarStyle(e, t, s, i);
    return this.applyBarStyle(e, t, s, i), s
  }
  pushBackBarColorer(e) {
    this._backColorers.unshift(e)
  }
  firstColoredBar(e) {
    return null
  }
