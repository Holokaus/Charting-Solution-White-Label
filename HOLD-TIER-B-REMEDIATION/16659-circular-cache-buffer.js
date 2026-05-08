/**
 * ============================================================================
 * TRADINGVIEW MODULE 16659 - CIRCULAR CACHE BUFFER
 * ============================================================================
 *
 * Purpose: Circular cache buffer with LRU functionality and capacity management
 *
 * Size: 3.2 KB
 *
 * Class: CircularCacheBuffer
 *   - Implements fixed-size circular buffer
 *   - Provides LRU (Least Recently Used) eviction
 *   - Supports capacity limiting
 *   - Maintains linked list for efficient access
 *
 * Features:
 *   - O(1) get/set operations
 *   - Automatic capacity management
 *   - LRU eviction policy
 *   - State serialization
 *   - Iterator support
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *
 * Exports:
 *   - CircularCacheBuffer: Circular cache buffer class
 *
 * @module 16659
 * @category Data Structures
 * @subpackage Caching
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    CircularCacheBuffer: () => CircularCacheBuffer
  });

  const assertionUtils = moduleRequire(50151);

  // Cache capacity factor enumeration
  !function(CapacityFactor) {
    CapacityFactor[CapacityFactor.CapacityFactor = 1] = "CapacityFactor";
  }(CapacityFactor || (CapacityFactor = {}));

  /**
   * Circular cache buffer with LRU functionality
   */
  class CircularCacheBuffer {
    /**
     * @param {number} size - Maximum cache size
     * @param {number} capacityFactor - Capacity factor for size limiting
     */
    constructor(size = 0, capacityFactor = 1.3) {
      this._cache = new Map();
      this._lastItem = null;
      this._firstItem = null;
      this._size = size;
      this._sizeLimited = size > 0;
      this._capacityFactor = capacityFactor;
    }

    /**
     * Set cache item with LRU management
     * @param {string} key - Cache key
     * @param {*} value - Cache value
     */
    set(key, value) {
      const cacheItem = {
        key: key,
        value: value,
        prevItem: this._lastItem,
        nextItem: null
      };
      
      // Update existing item's next pointer
      if (null !== this._lastItem) {
        this._lastItem.nextItem = cacheItem;
      }
      
      const existingItem = this._cache.get(key);
      if (void 0 !== existingItem) {
        this._linkItems(existingItem, cacheItem);
      }
      
      this._cache.set(key, cacheItem);
      
      // Handle first item and capacity limits
      if (null === this._firstItem) {
        this._firstItem = cacheItem;
      }
      
      if (this._sizeLimited && this._cache.size > this._size * this._capacityFactor) {
        this._removeExtraItems();
      }
    }

    /**
     * Check if cache contains key
     * @param {string} key - Cache key
     * @returns {boolean} True if key exists
     */
    has(key) {
      return this._cache.has(key);
    }

    /**
     * Get cache item and update LRU order
     * @param {string} key - Cache key
     * @returns {*} Cache value or undefined
     */
    get(key) {
      const cacheItem = this._cache.get(key);
      if (void 0 === cacheItem) {
        return cacheItem;
      }
      
      if (cacheItem === this._firstItem && 
          (cacheItem === this._lastItem)) {
        this._firstItem = cacheItem.nextItem ?? cacheItem;
      }
      
      if (cacheItem === this._lastItem) {
        // Item is already most recently used
        return cacheItem.value;
      }
      
      // Move item to end (most recently used)
      this._linkItems(cacheItem, cacheItem);
      
      const prevItem = cacheItem.prevItem;
      const nextItem = cacheItem.nextItem;
      
      if (cacheItem === this._firstItem) {
        this._firstItem = nextItem;
      }
      
      if (nextItem) {
        nextItem.prevItem = prevItem;
      }
      
      if (prevItem) {
        prevItem.nextItem = nextItem;
      }
      
      cacheItem.prevItem = this._lastItem;
      cacheItem.nextItem = null;
      this._lastItem.nextItem = cacheItem;
      this._lastItem = cacheItem;
      
      return cacheItem.value;
    }

    /**
     * Clear all cache items
     */
    clear() {
      this._cache.clear();
      this._firstItem = null;
      this._lastItem = null;
    }

    /**
     * Delete cache item
     * @param {string} key - Cache key
     */
    delete(key) {
      const cacheItem = this._cache.get(key);
      if (void 0 === cacheItem) {
        return;
      }
      
      this._unlinkItem(cacheItem);
      this._cache.delete(key);
    }

    /**
     * Get cache entries as array
     * @returns {Array} Array of [key, value] pairs
     */
    entries() {
      if (null !== this._firstItem) {
        for (let currentItem = this._firstItem; null !== currentItem; currentItem = currentItem.nextItem) {
          yield [currentItem.key, currentItem.value];
        }
      }
    }

    /**
     * Get cache state as array
     * @returns {Array} Array of [key, value] pairs
     */
    state() {
      const state = [];
      for (const [key, value] of this.entries()) {
        state.push([key, value]);
      }
      return state;
    }

    /**
     * Restore cache state
     * @param {Array} state - Array of [key, value] pairs
     */
    restoreState(state) {
      for (const [key, value] of state) {
        this.set(key, value);
      }
    }

    /**
     * Remove extra items when capacity exceeded
     */
    _removeExtraItems() {
      const itemsToRemove = this._cache.size - this._size;
      let currentItem = (0, assertionUtils.ensureNotNull)(this._firstItem);
      
      for (let i = 0; i < itemsToRemove; i++) {
        currentItem = (0, assertionUtils.ensureNotNull)(currentItem.nextItem);
        this._cache.delete(currentItem.key);
        currentItem = currentItem.nextItem;
      }
      
      this._firstItem = currentItem;
      currentItem.prevItem = null;
    }

    /**
     * Link cache items in LRU order
     * @param {Object} oldItem - Previous item in list
     * @param {Object} newItem - New item to insert
     */
    _linkItems(oldItem, newItem) {
      if (oldItem === this._firstItem && 
          (oldItem === this._lastItem)) {
        this._firstItem = newItem;
      }
      
      if (oldItem === this._lastItem) {
        return;
      }
      
      const nextItem = oldItem.nextItem;
      if (nextItem) {
        nextItem.prevItem = newItem;
      }
      
      newItem.prevItem = oldItem.prevItem;
      newItem.nextItem = nextItem;
      oldItem.nextItem = newItem;
      
      if (oldItem.prevItem) {
        oldItem.prevItem.nextItem = newItem;
      }
    }

    /**
     * Unlink cache item from list
     * @param {Object} item - Item to unlink
     */
    _unlinkItem(item) {
      if (item === this._firstItem) {
        this._firstItem = item.nextItem;
      }
      
      if (item === this._lastItem) {
        this._lastItem = item.prevItem;
      }
      
      if (item.prevItem) {
        item.prevItem.nextItem = item.nextItem;
      }
      
      if (item.nextItem) {
        item.nextItem.prevItem = item.prevItem;
      }
    }
  }
}
