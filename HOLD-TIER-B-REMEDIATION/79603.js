/**
 * Module 79603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79603: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      PropertyBase: () => watchedValue_n
    });
    var assertionUtils = watchedValue_i(50151),
      watchedValue_o = watchedValue_i(48096);
    class watchedValue_n {
      constructor() {
        this._listeners = new watchedValue_o.Delegate, this._muteChildChanges = !1, this._owner = null, this._name = ""
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
      addChild(watchedValue_e, watchedValue_t) {
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
      state(watchedValue_e, watchedValue_t) {
        return this.value()
      }
      merge(watchedValue_e, watchedValue_t) {
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
      subscribe(watchedValue_e, watchedValue_t) {
        this.listeners().subscribe(watchedValue_e, watchedValue_t, !1)
      }
      unsubscribe(watchedValue_e, watchedValue_t) {
        this.listeners().unsubscribe(watchedValue_e, watchedValue_t)
      }
      unsubscribeAll(watchedValue_e) {
        this.listeners().unsubscribeAll(watchedValue_e)
      }
    }