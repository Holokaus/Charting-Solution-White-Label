/**
 * Module 72270 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72270: (e, t, i) => {
    "use strict";
    i.d(t, {
      UndoCommand: () => o
    });
    var s = i(95804);
    class o {
      constructor(e, t = !0, i = !0) {
        this._text = e || new s.TranslatedString("", ""), this._executeOnPush = t, this._affectsState = i
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
      canMerge(e) {
        return !1
      }
      merge(e) {
        throw new Error("Should be re-implemented in child classes")
      }
    }