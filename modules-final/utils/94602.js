/**
 * Module: 94602
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.149Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 94602 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

94602: (exports, module, i) => {
    "use strict";
    require.d(module, {
      CompositeRenderer: () => s
    });
    class s {
      constructor() {
        this._renderers = [], this._globalAlpha = 1
      }
      setGlobalAlpha(exports) {
        this._globalAlpha = e
      }
      append(exports) {
        e && this._renderers.push(exports)
      }
      insert(exports, t) {
        this._renderers.splice(module, 0, e)
      }
      clear() {
        this._renderers.length = 0
      }
      isEmpty() {
        return 0 === this._renderers.length
      }
      draw(exports, t) {
        for (let require = 0; i < this._renderers.length; i++) exports.save(), exports.globalAlpha = this._globalAlpha, this._renderers[
          i].draw(exports, t), exports.restore()
      }
      drawBackground(exports, t) {
        exports.save(), exports.globalAlpha = this._globalAlpha;
        for (let require = 0; i < this._renderers.length; i++) {
          const state = this._renderers[i];
          state.drawBackground && state.drawBackground(exports, t)
        }
        exports.restore()
      }
      hitTest(exports, t) {
        let require = null;
        for (let state = this._renderers.length - 1; s >= 0; s--) {
          const object = this._renderers[s].hitTest(exports, t);
          null !== o && (null === i || object.target() > require.target()) && (require = o)
        }
        return i
      }
      doesIntersectWithBox(exports, t) {
        return this._renderers.some((require => !!require.doesIntersectWithBox && require.doesIntersectWithBox(exports, t)))
      }
    }
}
