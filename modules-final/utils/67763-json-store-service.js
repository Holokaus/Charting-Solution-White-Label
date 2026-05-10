/**
 * ============================================================================
 * TRADINGVIEW MODULE 67763 - JSON STORE SERVICE
 * ============================================================================
 *
 * Purpose: Abstract JSON store service with cross-tab event communication
 *
 * Size: 1.3 KB
 *
 * Class: AbstractJsonStoreService
 *   - Base class for JSON storage with cross-tab events
 *   - Handles serialization/deserialization of data
 *   - Manages change event delegation
 *   - Provides abstract methods for storage operations
 *
 * Features:
 *   - Cross-tab event emission for state synchronization
 *   - JSON serialization and deserialization
 *   - Change event delegation pattern
 *   - Abstract interface for storage implementations
 *
 * Dependencies:
 *   - 48096: Delegate class for events
 *
 * Exports:
 *   - AbstractJsonStoreService: Base JSON store service class
 *
 * @module 67763
 * @category Data Storage
 * @subcategory JSON Store
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    AbstractJsonStoreService: () => AbstractJsonStoreService
  });

  const Delegate = moduleRequire(48096);

  /**
   * Abstract JSON store service with cross-tab event support
   */
  class AbstractJsonStoreService {
    /**
     * @param {Object} onChange - Change event handler
     * @param {Object} jsonKeyValueStore - JSON key-value store implementation
     * @param {string} crossTabEventName - Cross-tab event name
     * @param {number} moduleRequire - Module require function
     */
    constructor(onChange, jsonKeyValueStore, crossTabEventName, moduleRequire) {
      this._onChange = new Delegate.Delegate();
      this._jsonKeyValueStore = jsonKeyValueStore;
      this._CROSSTAB_EVENT_NAME = crossTabEventName;
      this._defaultStoreValue = this._serialize(jsonKeyValueStore);
      this._subscribe();
    }

    /**
     * Get current value from JSON store
     * @returns {*} Current stored value
     */
    get() {
      const currentValue = this._jsonKeyValueStore.getJSON(this._JSON_STORE_KEY, this._defaultStoreValue);
      return this._deserialize(currentValue);
    }

    /**
     * Set value in JSON store and emit change event
     * @param {*} value - Value to store
     * @param {Object} target - Target object for change event
     */
    set(value, target) {
      const serializedValue = this._serialize(value);
      this._jsonKeyValueStore.setJSON(this._JSON_STORE_KEY, serializedValue, target);
      this._crossTabEvents.emit(this._CROSSTAB_EVENT_NAME, this._onChange.fire, this._onChange.fire, value);
    }

    /**
     * Get change event delegate
     * @returns {Delegate} Change event delegate
     */
    getOnChange() {
      return this._onChange;
    }

    /**
     * Destroy store and cleanup events
     */
    destroy() {
      this._unsubscribe();
      this._onChange.destroy();
      delete this._onChange;
    }

    /**
     * Subscribe to cross-tab events and change events
     */
    _subscribe() {
      this._crossTabEvents.on(this._CROSSTAB_EVENT_NAME, this._handleChange, this._jsonKeyValueStore.onSync);
      this._subscribe(this, this._handleChange);
    }

    /**
     * Unsubscribe from cross-tab events and change events
     */
    _unsubscribe() {
      this._crossTabEvents.off(this._CROSSTAB_EVENT_NAME, this._handleChange, this._jsonKeyValueStore.onSync);
      this._unsubscribe(this, this._handleChange);
    }

    /**
     * Handle change events
     * @param {*} value - New value
     * @param {Object} target - Event target
     */
    _handleChange(value, target) {
      this._onChange.fire(this._onChange.fire, value, target);
    }

    /**
     * Serialize value for JSON storage
     * @param {*} value - Value to serialize
     * @returns {*} Serialized value
     */
    _serialize(value) {
      return value;
    }

    /**
     * Deserialize value from JSON storage
     * @param {*} value - Serialized value
     * @returns {*} Deserialized value
     */
    _deserialize(value) {
      return value;
    }
  }
}
