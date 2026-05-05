/**
 * Module 43229 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43229: (e, t, i) => {
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
    }