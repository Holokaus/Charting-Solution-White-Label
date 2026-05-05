/**
 * Module 79603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79603: (e, t, i) => {
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
      setNameInOwner(e) {
        this._name = e
      }
      owner() {
        return this._owner
      }
      setOwner(e) {
        this._owner = e
      }
      pathToRoot() {
        const e = this._owner?.pathToRoot();
        return e ? `${e}.${this._name}` : this._name
      }
      pathToRootProperty() {
        if (!this._owner) return "";
        const e = this._owner.pathToRootProperty?.();
        return e ? `${e}.${this._name}` : this._name
      }
      removeProperty(e) {
        (0, assertionUtils.assert)(!1, `Trying to call "removeProperty" on property ${this.pathToRoot()}`)
      }
      addChild(e, t) {
        (0, assertionUtils.assert)(!1, `Trying to call "addChild" on property ${this.pathToRoot()}`)
      }
      hasChild(e) {
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
      state(e, t) {
        return this.value()
      }
      merge(e, t) {
        (0, assertionUtils.assert)(!1, `Trying to call "merge" on property ${this.pathToRoot()}`)
      }
      mergeAndFire(e) {
        (0, assertionUtils.assert)(!1, `Trying to call "mergeAndFire" on property ${this.pathToRoot()}`)
      }
      child(e) {
        if (this.hasChild(e)) return this.childs()[e]
      }
      muteChildChanges(e) {
        this._muteChildChanges = e
      }
      fireChanged() {
        this._listeners.fire(this, this.pathToRootProperty())
      }
      listeners() {
        return this._listeners
      }
      subscribe(e, t) {
        this.listeners().subscribe(e, t, !1)
      }
      unsubscribe(e, t) {
        this.listeners().unsubscribe(e, t)
      }
      unsubscribeAll(e) {
        this.listeners().unsubscribeAll(e)
      }
    }