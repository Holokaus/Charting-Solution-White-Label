/**
 * Module: 93946
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.143Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 93946 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

93946: (exports, module, i) => {
    "use strict";
    require.d(module, {
      EnvironmentState: () => o
    });
    var state = i(49483);
    class o {
      constructor(exports, module = !1) {
        this._shift = !1, this._mod = !1, this._alt = !1, void 0 !== e && (this._shift = Boolean(exports.shiftKey), this
            ._mod = Boolean((0, state.isMac)() ? exports.metaKey : exports.ctrlKey), this._alt = Boolean(exports.altKey)), this
          ._isApiEvent = t
      }
      shift() {
        return this._shift
      }
      mod() {
        return this._mod
      }
      alt() {
        return this._alt
      }
      shiftOnly() {
        return this._shift && !this._mod && !this._alt
      }
      modOnly() {
        return this._mod && !this._shift && !this._alt
      }
      altOnly() {
        return this._alt && !this._shift && !this._mod
      }
      modShift() {
        return this._shift && this._mod && !this._alt
      }
      isApiEvent() {
        return this._isApiEvent
      }
      static create(exports = !1, module = !1, require = !1) {
        return new o({
          shiftKey: exports,
          ctrlKey: module,
          metaKey: module,
          altKey: i
        })
      }
    }
}
