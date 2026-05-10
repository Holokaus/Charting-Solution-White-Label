/**
 * Module 79603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79603: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      PropertyBase: () => watchedValue_n
    });
    var assertionUtils = i(50151),
      o = i(48096);
    class watchedValue_n {
      constructor() {
        this._listeners = new o.Delegate, this._muteChildChanges = !1, this._owner = null, this._name = ""
      }
      nameInOwner() {
        return this._name
      }
      setNameInOwner(watchedValue_e) {
        this._name = watchedValue_e
      }
      owner() {
        return this._owner
      }
      setOwner(watchedValue_e) {
        this._owner = watchedValue_e
      }
      pathToRoot() {
        const watchedValue_e = this._owner?.pathToRoot();
        return watchedValue_e ? `${watchedValue_e}.${this._name}` : this._name
      }
      pathToRootProperty() {
        if (!this._owner) return "";
        const watchedValue_e = this._owner.pathToRootProperty?.();
        return watchedValue_e ? `${watchedValue_e}.${this._name}` : this._name
      }
      removeProperty(watchedValue_e) {
        (0, assertionUtils.assert)(!1, `Trying to call "removeProperty" on property ${this.pathToRoot()}`)
      }
      addChild(watchedValue_e, t) {
        (0, assertionUtils.assert)(!1, `Trying to call "addChild" on property ${this.pathToRoot()}`)
      }
      hasChild(watchedValue_e) {
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
      state(watchedValue_e, t) {
        return this.value()
      }
      merge(watchedValue_e, t) {
        (0, assertionUtils.assert)(!1, `Trying to call "merge" on property ${this.pathToRoot()}`)
      }
      mergeAndFire(watchedValue_e) {
        (0, assertionUtils.assert)(!1, `Trying to call "mergeAndFire" on property ${this.pathToRoot()}`)
      }
      child(watchedValue_e) {
        if (this.hasChild(watchedValue_e)) return this.childs()[watchedValue_e]
      }
      muteChildChanges(watchedValue_e) {
        this._muteChildChanges = watchedValue_e
      }
      fireChanged() {
        this._listeners.fire(this, this.pathToRootProperty())
      }
      listeners() {
        return this._listeners
      }
      subscribe(watchedValue_e, t) {
        this.listeners().subscribe(watchedValue_e, t, !1)
      }
      unsubscribe(watchedValue_e, t) {
        this.listeners().unsubscribe(watchedValue_e, t)
      }
      unsubscribeAll(watchedValue_e) {
        this.listeners().unsubscribeAll(watchedValue_e)
      }
    }
}
