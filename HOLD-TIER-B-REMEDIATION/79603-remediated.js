/**
 * Module 79603 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

79603: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PropertyBase: () => name
    });
    var assertionUtils = i(50151),
      o = i(48096);
    class name {
      constructor() {
        this._listeners = new o.Delegate, this._muteChildChanges = !1, this._owner = null, this._name = ""
      }
      nameInOwner() {
        return this._name
      }
      setNameInOwner(exports) {
        this._name = exports
      }
      owner() {
        return this._owner
      }
      setOwner(exports) {
        this._owner = exports
      }
      pathToRoot() {
        const exports = this._owner?.pathToRoot();
        return exports ? `${exports}.${this._name}` : this._name
      }
      pathToRootProperty() {
        if (!this._owner) return "";
        const exports = this._owner.pathToRootProperty?.();
        return exports ? `${exports}.${this._name}` : this._name
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
        if (this.hasChild(exports)) return this.childs()[exports]
      }
      muteChildChanges(exports) {
        this._muteChildChanges = exports
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