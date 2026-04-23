/**
 * Module 38881 - Auto-beautified from TradingView webpack bundle
 *
 * @module 38881
 * @date 2026-04-23
 * @size 404 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 95406
 *
 * Exports:
 *   - ChunkLoader (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  ChunkLoader: () => o
});
var s = i(95406);
class o {
  constructor() {
    this._retries = 5, this._cache = null, this._tryLoad = (e, t) => {
      this._retries = this._retries - 1;
      this._startLoading(e).then(t, 0 !== this._retries ? i => {
        (0, s.isAbortError)(i) || setTimeout((() => this._tryLoad(e, t)), 3e3)
      } : void 0)
    }
  }
  load(e) {
    return this._cache || (this._cache = new Promise(this._tryLoad.bind(this, e ?? null))), this._cache
  }
