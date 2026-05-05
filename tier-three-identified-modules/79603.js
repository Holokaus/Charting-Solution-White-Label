/**
 * Module: 79603
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.047Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 79603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79603: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PropertyBase: () => n
    });
    var assertionUtils = i(50151),
      o = i(48096);
    class n {
      constructor() {
        this._listeners = new o.Delegate, this._muteChildChanges = !1, this._owner = null, this._name = ""
      }
      nameInOwner() {
        return this._name
      }
      setNameInOwner(exports) {
        this._name = e
      }
      owner() {
        return this._owner
      }
      setOwner(exports) {
        this._owner = e
      }
      pathToRoot() {
        const exports = this._owner?.pathToRoot();
        return e ? `${e}.${this._name}` : this._name
      }
      pathToRootProperty() {
        if (!this._owner) return "";
        const exports = this._owner.pathToRootProperty?.();
        return e ? `${e}.${this._name}` : this._name
      }
      removeProperty(exports) {
        (0, assertionUtils.assert)(!1, `Trying to call "removeProperty" on property ${this.pathToRoot()}`)
      }
      addChild(exports, t) {
        (0, assertionUtils.assert)(!1, `Trying to call "addChild" on property ${this.pathToRoot()}`)
      }
      hasChild(exports) {
        return !1
      }
      childCount() {
        return 0
      }
      childNames() {
        return []
      }
      childs() {
        (0, assertionUtils.assert)(!1, `Trying to call "childs" on property ${this.pathToRoot()}`)
      }
      state(exports, t) {
        return this.value()
      }
      merge(exports, t) {
        (0, assertionUtils.assert)(!1, `Trying to call "merge" on property ${this.pathToRoot()}`)
      }
      mergeAndFire(exports) {
        (0, assertionUtils.assert)(!1, `Trying to call "mergeAndFire" on property ${this.pathToRoot()}`)
      }
      child(exports) {
        if (this.hasChild(exports)) return this.childs()[e]
      }
      muteChildChanges(exports) {
        this._muteChildChanges = e
      }
      fireChanged() {
        this._listeners.fire(this, this.pathToRootProperty())
      }
      listeners() {
        return this._listeners
      }
      subscribe(exports, t) {
        this.listeners().subscribe(exports, t, !1)
      }
      unsubscribe(exports, t) {
        this.listeners().unsubscribe(exports, t)
      }
      unsubscribeAll(exports) {
        this.listeners().unsubscribeAll(exports)
      }
    }