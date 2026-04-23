/**
 * Module 59998 - Auto-beautified from TradingView webpack bundle
 *
 * @module 59998
 * @date 2026-04-23
 * @size 281 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2072, 87465
 *
 * Exports:
 *   - WatchedObject (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  WatchedObject: () => r
});
var s = i(87465),
  o = i(2072);

function n(e, t) {
  return (0, s.deepEquals)(e, t)[0]
}
class r extends o.WatchedValue {
    constructor(e, t = n) {
      super(e), this._comparator = t
    }
    setValue(e, t) {
      !t && this._comparator(this.value(), e) || super.setValue(e, t)
    }
