/**
 * Module 67763 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

67763: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      AbstractJsonStoreService: () => watchedValue_o,
      CommonJsonStoreService: () => watchedValue_n
    });
    var delegate = watchedValue_i(48096);
    class watchedValue_o {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_o, watchedValue_n) {
        this._onChange = new delegate.Delegate, this._handleChange = () => {
            this._onChange.fire(this.get())
          }, this._crossTabEvents = watchedValue_e, this._jsonKeyValueStore = watchedValue_t, this.CROSSTAB_EVENT_NAME = watchedValue_i, this
          .JSON_STORE_KEY = watchedValue_o, this.defaultStoreValue = this._serialize(watchedValue_n), this._subscribe()
      }
      get() {
        const watchedValue_e = this._jsonKeyValueStore.getJSON(this.JSON_STORE_KEY, this.defaultStoreValue);
        return this._deserialize(watchedValue_e)
      }
      set(watchedValue_e, watchedValue_t) {
        const watchedValue_i = this._serialize(watchedValue_e);
        this._jsonKeyValueStore.setJSON(this.JSON_STORE_KEY, watchedValue_i, watchedValue_t), this._crossTabEvents.emit(this
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
    class watchedValue_n extends watchedValue_o {
      _serialize(watchedValue_e) {
        return watchedValue_e
      }
      _deserialize(watchedValue_e) {
        return watchedValue_e
      }
    }