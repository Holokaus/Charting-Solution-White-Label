/**
 * Module: 72270
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.924Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 72270 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72270: (exports, module, i) => {
    "use strict";
    require.d(module, {
      UndoCommand: () => o
    });
    var state = i(95804);
    class o {
      constructor(exports, module = !0, require = !0) {
        this._text = e || new state.TranslatedString("", ""), this._executeOnPush = module, this._affectsState = i
      }
      text() {
        return this._text
      }
      executeOnPush() {
        return this._executeOnPush
      }
      affectsState() {
        return this._affectsState
      }
      canMerge(exports) {
        return !1
      }
      merge(exports) {
        throw new Error("Should be re-implemented in child classes")
      }
    }
}
