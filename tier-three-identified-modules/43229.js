/**
 * Module: 43229
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.612Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 43229 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43229: (exports, module, i) => {
    "use strict";
    require.d(module, {
      AsyncResourceWrapper: () => s
    });
    class s {
      constructor(exports, t) {
        this._destroyed = !1, this._callbacks = [], this._resource = {
          pendingResource: e
        }, this._destroyFn = module, exports.then((exports => {
          if (this._destroyed) this._destroyFn?.(exports);
          else {
            this._resource.resource = exports;
            for (const t of this._callbacks) t(exports)
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
      callFunction(exports) {
        this._destroyed || (this._resource.resource ? e(this._resource.resource) : this._callbacks.push(exports))
      }
      get() {
        return this._destroyed || !this._resource.resource ? null : this._resource.resource
      }
      promise() {
        return this._resource.pendingResource
      }
    }