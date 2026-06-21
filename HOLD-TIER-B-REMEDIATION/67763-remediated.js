/**
 * Module 67763 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

67763: (exports, t, i) => {
    "use strict";
    i.d(t, {
      AbstractJsonStoreService: () => o,
      CommonJsonStoreService: () => name
    });
    var delegate = i(48096);
    class o {
      constructor(exports, t, i, o, name) {
        this._onChange = new delegate.Delegate, this._handleChange = () => {
            this._onChange.fire(this.get())
          }, this._crossTabEvents = exports, this._jsonKeyValueStore = t, this.CROSSTAB_EVENT_NAME = i, this
          .JSON_STORE_KEY = o, this.defaultStoreValue = this._serialize(name), this._subscribe()
      }
      get() {
        const exports = this._jsonKeyValueStore.getJSON(this.JSON_STORE_KEY, this.defaultStoreValue);
        return this._deserialize(exports)
      }
      set(exports, t) {
        const i = this._serialize(exports);
        this._jsonKeyValueStore.setJSON(this.JSON_STORE_KEY, i, t), this._crossTabEvents.emit(this
          .CROSSTAB_EVENT_NAME), this._onChange.fire(exports)
      }
      getOnChange() {
        return this._onChange
      }
      destroy() {
        this._unsubscribe(), this._onChange.destroy(), delete this._onChange
      }
      _subscribe() {
        this._crossTabEvents.on(this.CROSSTAB_EVENT_NAME, this._handleChange), this._jsonKeyValueStore.onSync
          .subscribe(this, this._handleChange)
      }
      _unsubscribe() {
        this._crossTabEvents.off(this.CROSSTAB_EVENT_NAME, this._handleChange), this._jsonKeyValueStore.onSync
          .unsubscribe(this, this._handleChange)
      }
    }
    class name extends o {
      _serialize(exports) {
        return exports
      }
      _deserialize(exports) {
        return exports
      }
    }