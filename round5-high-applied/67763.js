/**
 * Module 67763 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

67763: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      AbstractJsonStoreService: () => o,
      CommonJsonStoreService: () => watchedValue_n
    });
    var delegate = i(48096);
    class o {
      constructor(watchedValue_e, t, i, o, watchedValue_n) {
        this._onChange = new delegate.Delegate, this._handleChange = () => {
            this._onChange.fire(this.get())
          }, this._crossTabEvents = watchedValue_e, this._jsonKeyValueStore = t, this.CROSSTAB_EVENT_NAME = i, this
          .JSON_STORE_KEY = o, this.defaultStoreValue = this._serialize(watchedValue_n), this._subscribe()
      }
      get() {
        const watchedValue_e = this._jsonKeyValueStore.getJSON(this.JSON_STORE_KEY, this.defaultStoreValue);
        return this._deserialize(watchedValue_e)
      }
      set(watchedValue_e, t) {
        const i = this._serialize(watchedValue_e);
        this._jsonKeyValueStore.setJSON(this.JSON_STORE_KEY, i, t), this._crossTabEvents.emit(this
          .CROSSTAB_EVENT_NAME), this._onChange.fire(watchedValue_e)
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
    class watchedValue_n extends o {
      _serialize(watchedValue_e) {
        return watchedValue_e
      }
      _deserialize(watchedValue_e) {
        return watchedValue_e
      }
    }
}
