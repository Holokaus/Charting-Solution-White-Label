/**
 * Module 67763 - Auto-beautified from TradingView webpack bundle
 *
 * @module 67763
 * @date 2026-04-23
 * @size 1157 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 48096
 *
 * Exports:
 *   - AbstractJsonStoreService (internal: o)
 *   - CommonJsonStoreService (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  AbstractJsonStoreService: () => o,
  CommonJsonStoreService: () => n
});
var s = i(48096);
class o {
  constructor(e, t, i, o, n) {
    this._onChange = new s.Delegate, this._handleChange = () => {
      this._onChange.fire(this.get())
    }, this._crossTabEvents = e, this._jsonKeyValueStore = t, this.CROSSTAB_EVENT_NAME = i, this.JSON_STORE_KEY = o, this.defaultStoreValue = this._serialize(n), this._subscribe()
  }
  get() {
    const e = this._jsonKeyValueStore.getJSON(this.JSON_STORE_KEY, this.defaultStoreValue);
    return this._deserialize(e)
  }
  set(e, t) {
    const i = this._serialize(e);
    this._jsonKeyValueStore.setJSON(this.JSON_STORE_KEY, i, t), this._crossTabEvents.emit(this.CROSSTAB_EVENT_NAME), this._onChange.fire(e)
  }
  getOnChange() {
    return this._onChange
  }
  destroy() {
    this._unsubscribe(), this._onChange.destroy(), delete this._onChange
  }
  _subscribe() {
    this._crossTabEvents.on(this.CROSSTAB_EVENT_NAME, this._handleChange), this._jsonKeyValueStore.onSync.subscribe(this, this._handleChange)
  }
  _unsubscribe() {
    this._crossTabEvents.off(this.CROSSTAB_EVENT_NAME, this._handleChange), this._jsonKeyValueStore.onSync.unsubscribe(this, this._handleChange)
  }
}
class n extends o {
  _serialize(e) {
    return e
  }
  _deserialize(e) {
    return e
  }
