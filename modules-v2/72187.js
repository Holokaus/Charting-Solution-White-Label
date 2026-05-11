/**
 * Module 72187 - PlotList
 * 
 * Core data structure for storing and manipulating chart plot data.
 * Provides efficient storage, search, and min/max calculation for bar data.
 * 
 * @module 72187
 * @exports PlotList, mergeMinMax
 * 
 * Dependencies:
 *   - 50151: Assertion utilities (ensureNotNull)
 *   - 12217: Unknown utility
 *   - 82284: Unknown utility  
 *   - 9343: Logger (getLogger)
 *   - 5471: Unknown utility
 * 
 * Key Features:
 *   1. Efficient bar storage with start/end indexing
 *   2. Min/max caching for performance
 *   3. Search by index, time, or value
 *   4. Support for empty value predicates
 *   5. Range-based min/max calculations
 */

"use strict";

// Import dependencies
const assertionUtils = require('./50151-assertion-utils');
const loggerModule = require('./9343-logger');
// Note: Modules 12217, 82284, 5471 not yet processed

const getLogger = loggerModule.getLogger;
const ensureNotNull = assertionUtils.ensureNotNull;

// Create logger instance
const log = getLogger("Chart.PlotList");

// Constants
const CACHE_BLOCK_SIZE = 30;

/**
 * Get the index of a plot row
 * @param {Object} plotRow - Plot row object
 * @returns {number} Index value
 */
function getIndex(plotRow) {
  return plotRow.index;
}

/**
 * Get the first value from a plot row's value array
 * @param {Object} plotRow - Plot row object  
 * @returns {*} First value in value array
 */
function getFirstValue(plotRow) {
  return plotRow.value[0];
}

/**
 * PlotList - Main data structure for chart plots
 * 
 * Stores plot data with efficient access patterns:
 * - O(1) first/last access
 * - O(log n) search operations
 * - Cached min/max calculations
 * - Support for sparse data via empty value predicate
 */
class PlotList {
  /**
   * Create a new PlotList instance
   * @param {Map|null} plotFunctions - Map of plot functions (default: null)
   * @param {Function|null} emptyValuePredicate - Function to determine if value is empty (default: null)
   */
  constructor(plotFunctions = null, emptyValuePredicate = null) {
    // Internal storage
    this._items = [];
    this._start = 0;
    this._end = 0;
    this._shareRead = false;
    
    // Caches for performance
    this._minMaxCache = new Map();
    this._rowSearchCacheByIndex = new Map();
    this._rowSearchCacheByIndexWithoutEmptyValues = new Map();
    this._rowSearchCacheByTime = new Map();
    this._rowSearchCacheByTimeWithoutEmptyValues = new Map();
    
    // Configuration
    this._plotFunctions = plotFunctions || new Map();
    this._emptyValuePredicate = emptyValuePredicate;
  }

  /**
   * Clear all data and reset state
   */
  clear() {
    this._items = [];
    this._start = 0;
    this._end = 0;
    this._shareRead = false;
    this._minMaxCache.clear();
    this._invalidateSearchCaches();
  }

  /**
   * Get first plot row
   * @returns {Object|null} First plot row or null if empty
   */
  first() {
    return this.size() > 0 ? this._items[this._start] : null;
  }

  /**
   * Get last plot row
   * @returns {Object|null} Last plot row or null if empty
   */
  last() {
    return this.size() > 0 ? this._items[this._end - 1] : null;
  }

  /**
   * Get index of first plot row
   * @returns {number|null} First index or null if empty
   */
  firstIndex() {
    return this.size() > 0 ? this._indexAt(this._start) : null;
  }

  /**
   * Get index of first plottable (non-empty) row
   * @returns {number|null} First plottable index or null if none
   */
  firstPlottableIndex() {
    if (this.isEmpty()) return null;
    
    for (let i = this._start; i < this._end; ++i) {
      const plotRow = this._items[i];
      if (!this._isEmptyPlotRow(plotRow)) {
        return this._indexAt(i);
      }
    }
    return null;
  }

  /**
   * Check if plot list is empty
   * @returns {boolean} True if no data
   */
  isEmpty() {
    return 0 === this.size();
  }

  /**
   * Get total number of plot rows
   * @returns {number} Count of rows
   */
  size() {
    return this._end - this._start;
  }

  /**
   * Get plot row at specific index
   * @param {number} index - Bar index to search for
   * @returns {Object|null} Plot row or null if not found
   */
  valueAtIndex(index) {
    const cached = this._rowSearchCacheByIndex.get(index);
    if (cached !== undefined) return cached;
    
    const result = this._searchRowIndex(index);
    this._rowSearchCacheByIndex.set(index, result);
    return result;
  }

  /**
   * Get first plottable value at or after index
   * @param {number} index - Starting index
   * @returns {Object|null} Plot row or null if not found
   */
  valueAtOrAfterIndex(index) {
    const cached = this._rowSearchCacheByIndexWithoutEmptyValues.get(index);
    if (cached !== undefined) return cached;
    
    const lowerBound = this._lowerbound(index, getIndex);
    let result = null;
    
    for (let i = lowerBound; i < this._end; ++i) {
      const plotRow = this._items[i];
      if (!this._isEmptyPlotRow(plotRow)) {
        result = plotRow;
        break;
      }
    }
    
    this._rowSearchCacheByIndexWithoutEmptyValues.set(index, result);
    return result;
  }

  /**
   * Get plot row at specific time
   * @param {number} time - Time value to search for
   * @returns {Object|null} Plot row or null if not found
   */
  valueAtTime(time) {
    const cached = this._rowSearchCacheByTime.get(time);
    if (cached !== undefined) return cached;
    
    const result = this._searchRowTime(time);
    this._rowSearchCacheByTime.set(time, result);
    return result;
  }

  /**
   * Get first plottable value at or after time
   * @param {number} time - Starting time
   * @returns {Object|null} Plot row or null if not found
   */
  valueAtOrAfterTime(time) {
    const cached = this._rowSearchCacheByTimeWithoutEmptyValues.get(time);
    if (cached !== undefined) return cached;
    
    const lowerBound = this._lowerbound(time, getFirstValue);
    let result = null;
    
    for (let i = lowerBound; i < this._end; ++i) {
      const plotRow = this._items[i];
      if (!this._isEmptyPlotRow(plotRow)) {
        result = plotRow;
        break;
      }
    }
    
    this._rowSearchCacheByTimeWithoutEmptyValues.set(time, result);
    return result;
  }

  /**
   * Get value at specific index (alias)
   * @param {number} index - Bar index
   * @returns {Object|null} Plot row or null
   */
  valueAt(index) {
    return this.valueAtIndex(index);
  }

  /**
   * Calculate min/max for entire plot
   * @param {number} plotFunction - Plot function identifier
   * @returns {Object|null} Min/max object {min, max} or null
   */
  minMax(plotFunction) {
    return this._plotMinMax(this._start, this._end, plotFunction);
  }

  /**
   * Calculate min/max for visible range
   * @param {number} fromIndex - Start index
   * @param {number} toIndex - End index
   * @param {number} plotFunction - Plot function identifier
   * @returns {Object|null} Min/max object {min, max} or null
   */
  visibleMinMax(fromIndex, toIndex, plotFunction) {
    const lower = this._lowerbound(fromIndex, getIndex);
    return this._plotMinMax(lower, this._upperbound(toIndex), plotFunction);
  }

  /**
   * Merge bars with another plot list
   * @param {PlotList} other - Other plot list to merge
   * @returns {Object|null} Information about merged data or null
   */
  merge(other) {
    if (other.isEmpty()) return null;
    
    const firstIndex = other.firstIndex();
    const lastIndex = other.lastIndex();
    const ourLastIndex = this.lastIndex();
    
    let startIndex = null;
    
    if (null !== ourLastIndex && null !== firstIndex && firstIndex <= ourLastIndex) {
      startIndex = this._searchRowIndex(ourLastIndex);
      if (null !== startIndex) {
        startIndex = this._rowToOffset(startIndex) + 1;
        if (startIndex >= this._end) {
          startIndex = null;
        }
      }
    }
    
    const count = other.size();
    const result = {
      index: firstIndex,
      count: count,
      skipped: startIndex !== null ? startIndex - this._start : 0
    };
    
    this._mergeImpl(other, startIndex, count);
    return result;
  }

  /**
   * Clone this plot list
   * @returns {PlotList} New cloned instance
   */
  clone() {
    const cloned = new PlotList(this._plotFunctions, this._emptyValuePredicate);
    cloned._mergeImpl(this, null, this.size());
    return cloned;
  }

  /**
   * Get iterator for all values
   * @yields {Object} Plot rows
   */
  *values() {
    for (let i = this._start; i < this._end; ++i) {
      yield this._items[i];
    }
  }

  /**
   * Get iterator for plottable (non-empty) values only
   * @yields {Object} Non-empty plot rows
   */
  *plottableValues() {
    for (const value of this.values()) {
      if (!this._isEmptyPlotRow(value)) {
        yield value;
      }
    }
  }

  /**
   * Search for row by index using specified mode
   * @param {number} index - Index to search for
   * @param {number} mode - Search mode (NearestLeft, NearestRight, Exact)
   * @returns {Object|null} Plot row or null
   */
  search(index, mode) {
    switch (mode) {
      case 1: // NearestLeft
        return this._searchNearestLeft(index);
      case 2: // NearestRight
        return this._searchNearestRight(index);
      case 0: // Exact
      default:
        return this.valueAtIndex(index);
    }
  }

  /**
   * Get nearest index to specified index
   * @param {number} index - Target index
   * @param {number} mode - Search mode
   * @returns {number|null} Nearest index or null
   */
  nearestIndex(index, mode) {
    const row = this.search(index, mode);
    return row !== null ? this._indexAt(this._rowToOffset(row)) : null;
  }

  // ===== Private Methods =====

  /**
   * Get index at specific offset
   * @private
   * @param {number} offset - Array offset
   * @returns {number} Bar index
   */
  _indexAt(offset) {
    return this._items[offset].index;
  }

  /**
   * Convert plot row to array offset
   * @private
   * @param {Object} plotRow - Plot row
   * @returns {number} Array offset
   */
  _rowToOffset(plotRow) {
    return this._items.indexOf(plotRow);
  }

  /**
   * Check if plot row is empty
   * @private
   * @param {Object} plotRow - Plot row to check
   * @returns {boolean} True if empty
   */
  _isEmptyPlotRow(plotRow) {
    if (null === this._emptyValuePredicate) return false;
    const predicate = ensureNotNull(this._emptyValuePredicate);
    return predicate(plotRow.value);
  }

  /**
   * Search for row by index
   * @private
   * @param {number} index - Index to find
   * @returns {Object|null} Plot row or null
   */
  _searchRowIndex(index) {
    const offset = this._lowerbound(index, getIndex);
    if (offset >= this._end) return null;
    const plotRow = this._items[offset];
    return getIndex(plotRow) === index ? plotRow : null;
  }

  /**
   * Search for row by time
   * @private
   * @param {number} time - Time to find
   * @returns {Object|null} Plot row or null
   */
  _searchRowTime(time) {
    const offset = this._lowerbound(time, getFirstValue);
    if (offset >= this._end) return null;
    const plotRow = this._items[offset];
    return getFirstValue(plotRow) === time ? plotRow : null;
  }

  /**
   * Search nearest left (<=) index
   * @private
   * @param {number} index - Target index
   * @returns {Object|null} Plot row or null
   */
  _searchNearestLeft(index) {
    const offset = this._lowerbound(index, getIndex);
    if (offset >= this._end) {
      return this.size() > 0 ? this._items[this._end - 1] : null;
    }
    const plotRow = this._items[offset];
    const actualIndex = getIndex(plotRow);
    if (actualIndex === index) return plotRow;
    if (actualIndex < index) return null;
    return offset > this._start ? this._items[offset - 1] : null;
  }

  /**
   * Search nearest right (>=) index
   * @private
   * @param {number} index - Target index
   * @returns {Object|null} Plot row or null
   */
  _searchNearestRight(index) {
    const offset = this._lowerbound(index, getIndex);
    return offset < this._end ? this._items[offset] : null;
  }

  /**
   * Lower bound binary search
   * @private
   * @param {number} value - Value to find
   * @param {Function} selector - Function to extract comparison value
   * @returns {number} Offset of lower bound
   */
  _lowerbound(value, selector) {
    let low = this._start;
    let high = this._end;
    
    while (low < high) {
      const mid = (low + high) >> 1;
      const midValue = selector(this._items[mid]);
      if (midValue < value) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  /**
   * Upper bound binary search
   * @private
   * @param {number} value - Value to find
   * @returns {number} Offset of upper bound
   */
  _upperbound(value) {
    let low = this._start;
    let high = this._end;
    
    while (low < high) {
      const mid = (low + high) >> 1;
      const midValue = getIndex(this._items[mid]);
      if (midValue <= value) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  /**
   * Calculate min/max for range
   * @private
   * @param {number} from - Start offset
   * @param {number} to - End offset
   * @param {number} plotFunction - Plot function ID
   * @returns {Object|null} Min/max object or null
   */
  _plotMinMax(from, to, plotFunction) {
    if (from >= to) return null;
    
    let min = Infinity;
    let max = -Infinity;
    let found = false;
    
    for (let i = from; i < to; ++i) {
      const plotRow = this._items[i];
      if (this._isEmptyPlotRow(plotRow)) continue;
      
      const values = plotRow.value;
      const plotFunctionCount = this._plotFunctions?.size || 0;
      const valueIndex = plotFunction % (plotFunctionCount || values.length);
      const value = values[valueIndex];
      
      if (value !== null && value !== undefined) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        found = true;
      }
    }
    
    return found ? { min, max } : null;
  }

  /**
   * Merge implementation
   * @private
   * @param {PlotList} other - Other plot list
   * @param {number|null} startIndex - Start offset or null
   * @param {number} count - Number of items to merge
   */
  _mergeImpl(other, startIndex, count) {
    if (other.isEmpty()) return;
    
    const itemsToAdd = [];
    let added = 0;
    
    for (const item of other.values()) {
      if (added >= count) break;
      itemsToAdd.push(item);
      added++;
    }
    
    if (startIndex === null) {
      this._items = itemsToAdd;
      this._start = 0;
      this._end = itemsToAdd.length;
    } else {
      this._items.splice(startIndex, this._end - startIndex, ...itemsToAdd);
      this._end = startIndex + itemsToAdd.length;
    }
    
    this._minMaxCache.clear();
    this._invalidateSearchCaches();
  }

  /**
   * Invalidate all search caches
   * @private
   */
  _invalidateSearchCaches() {
    this._rowSearchCacheByIndex.clear();
    this._rowSearchCacheByIndexWithoutEmptyValues.clear();
    this._rowSearchCacheByTime.clear();
    this._rowSearchCacheByTimeWithoutEmptyValues.clear();
  }
}

/**
 * Merge two min/max objects
 * @param {Object|null} a - First min/max object
 * @param {Object|null} b - Second min/max object
 * @returns {Object|null} Merged min/max object or null
 */
function mergeMinMax(a, b) {
  if (a === null) return b;
  if (b === null) return a;
  
  return {
    min: Math.min(a.min, b.min),
    max: Math.max(a.max, b.max)
  };
}

// Export public API
module.exports = {
  PlotList,
  mergeMinMax
};
