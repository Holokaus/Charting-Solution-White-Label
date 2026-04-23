/**
 * Module 43229 - Auto-beautified from TradingView webpack bundle
 *
 * @module 43229
 * @date 2026-04-23
 * @size 789 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - AsyncResourceWrapper (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  AsyncResourceWrapper: () => s
});
class s {
  constructor(e, t) {
    this._destroyed = !1, this._callbacks = [], this._resource = {
      pendingResource: e
    }, this._destroyFn = t, e.then((e => {
      if (this._destroyed) this._destroyFn?.(e);
      else {
        this._resource.resource = e;
        for (const t of this._callbacks) t(e)
      }
    })).finally((() => {
      this._callbacks = []
    }))
  }
  destroy() {
    this._resource.resource && this._destroyFn?.(this._resource.resource), this._resource = {
      pendingResource: Promise.reject("Resource is destroyed").catch((() => {}))
    }, this._callbacks = [], this._destroyed = !0
  }
  callFunction(e) {
    this._destroyed || (this._resource.resource ? e(this._resource.resource) : this._callbacks.push(e))
  }
  get() {
    return this._destroyed || !this._resource.resource ? null : this._resource.resource
  }
  promise() {
    return this._resource.pendingResource
  }
