/**
 * Module 52746 - SeriesData
 * 
 * Manages bar data storage for chart series.
 * Handles both regular bars and non-series (projection) bars.
 * Provides search, iteration, and data manipulation APIs.
 * 
 * @module 52746
 * @exports SeriesData, barFunction, barFunctions, seriesPlotFunctionMap
 * 
 * Dependencies:
 *   - 50151: Assertion utilities (ensureNotNull)
 *   - 55803: ConflatedChunksBuilder (data merging)
 *   - 72187: PlotList (data structure for bars)
 * 
 * Key Features:
 *   1. Dual storage (regular bars + non-series bars)
 *   2. Bar value extraction (open, high, low, close, volume, etc.)
 *   3. Search operations (by index, by value)
 *   4. Data merging and conflation
 *   5. Clone/clear/iteration utilities
 */

"use strict";

// Import dependencies
const assertionUtils = require('./50151-assertion-utils');
const { PlotList } = require('./72187-plot-list');
const { ConflatedChunksBuilder } = require('./55803-conflated-chunks-builder');

/**
 * Direction for searching from left or right
 * @enum {number}
 */
const SearchDirection = {
  FromLeft: -1,
  FromRight: 1
};

/**
 * Plot field indices
 * @enum {number}
 */
const PlotField = {
  Time: 0,
  Open: 1,
  High: 2,
  Low: 3,
  Close: 4,
  Volume: 5,
  Adt: 6
};

/**
 * Standard price calculation formulas
 * Maps formula names to functions that extract/calculate values from bar arrays
 */
const barFunctions = {
  open: (bar) => bar[PlotField.Open],
  high: (bar) => bar[PlotField.High],
  low: (bar) => bar[PlotField.Low],
  close: (bar) => bar[PlotField.Close],
  hl2: (bar) => (bar[PlotField.High] + bar[PlotField.Low]) / 2,
  hlc3: (bar) => (bar[PlotField.High] + bar[PlotField.Low] + bar[PlotField.Close]) / 3,
  ohlc4: (bar) => (bar[PlotField.Open] + bar[PlotField.High] + bar[PlotField.Low] + bar[PlotField.Close]) / 4
};

/**
 * Supported price formula names
 */
const supportedFormulas = ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"];

/**
 * Value location types for projections
 * @enum {number}
 */
const ValueLocation = {
  FirstPrice: 0,
  LastPrice: 1,
  LastValuePrice: 2
};

/**
 * Create a map of plot functions for all supported formulas
 * @returns {Map<string, Function>} Map of formula name to function
 */
function seriesPlotFunctionMap() {
  const formulaMap = new Map();
  
  supportedFormulas.forEach((formulaName, index) => {
    formulaMap.set(formulaName, barFunction(formulaName));
  });
  
  return formulaMap;
}

/**
 * Create a bar value extraction function
 * 
 * Returns a function that extracts values from bars using the specified formula,
 * with optional fallback formulas for different contexts.
 * 
 * @param {string} primaryFormula - Primary formula name (e.g., "close", "hl2")
 * @param {string} [context2Formula] - Formula for context 2
 * @param {string} [context0Formula] - Formula for context 0
 * @returns {Function} Function that takes (bar, context) and returns extracted value
 */
function barFunction(primaryFormula, context2Formula, context0Formula) {
  const primaryFunc = barFunctions[context2Formula ?? primaryFormula];
  const fallbackFunc = barFunctions[primaryFormula];
  const context0Func = barFunctions[context0Formula ?? primaryFormula];
  
  return (bar, context) => {
    switch (context) {
      case 0:
        return primaryFunc(bar);
      case 2:
        return context0Func(bar);
      default:
        return fallbackFunc(bar);
    }
  };
}

/**
 * Check if a plot value is null/undefined at given index
 * @param {Array} bar - Bar array
 * @param {number} plotIndex - Plot field index
 * @returns {boolean} True if value is missing
 */
function isPlotValueMissing(bar, plotIndex) {
  return bar == null || bar[plotIndex] == null;
}

/**
 * SeriesData - Container for series bar data
 * 
 * Manages two separate PlotLists:
 * - m_bars: Regular price bars
 * - m_nsBars: Non-series bars (projections, future data, etc.)
 * 
 * Provides unified API for searching, iterating, and manipulating bars.
 * 
 * @class SeriesData
 */
class SeriesData {
  
  /**
   * Create a SeriesData instance
   */
  constructor() {
    // Main bar storage with plot function mapping
    this.m_bars = new PlotList(seriesPlotFunctionMap(), isPlotValueMissing);
    
    // Non-series bar storage (projections, etc.)
    this.m_nsBars = new PlotList(seriesPlotFunctionMap(), isPlotValueMissing);
    
    // Builder for merging and conflating data chunks
    this._conflatedChunksBuilder = new ConflatedChunksBuilder(
      this.m_bars,
      (formulaName) => barFunctions[formulaName]
    );
    
    // Projection-related properties
    this.lastProjectionPrice = undefined;
    this.boxSize = undefined;
    this.reversalAmount = undefined;
  }
  
  /**
   * Get regular bars PlotList
   * @returns {PlotList} Regular bars
   */
  bars() {
    return this.m_bars;
  }
  
  /**
   * Get non-series bars PlotList
   * @returns {PlotList} Non-series bars
   */
  nsBars() {
    return this.m_nsBars;
  }
  
  /**
   * Get conflated data chunks for rendering optimization
   * @param {number} startBar - Start bar index
   * @param {number} endBar - End bar index
   * @returns {Array} Conflated chunks
   */
  conflatedChunks(startBar, endBar) {
    return this._conflatedChunksBuilder.conflatedChunks(startBar, endBar);
  }
  
  /**
   * Merge regular bar data
   * @param {Array} data - New bar data to merge
   * @returns {*} Merge result
   */
  mergeRegularBars(data) {
    return this._conflatedChunksBuilder.mergeData(data);
  }
  
  /**
   * Get total number of bars (regular + non-series)
   * @returns {number} Total bar count
   */
  size() {
    return this.m_bars.size() + this.m_nsBars.size();
  }
  
  /**
   * Iterate over all bars
   * @param {Function} callback - Function to call for each bar
   */
  each(callback) {
    this.m_bars.each(callback);
    this.m_nsBars.each(callback);
  }
  
  /**
   * Clear all bar data
   */
  clear() {
    this.m_nsBars.clear();
    this.lastProjectionPrice = undefined;
    this._conflatedChunksBuilder.clearData();
  }
  
  /**
   * Create a deep clone of this SeriesData
   * @returns {SeriesData} Cloned instance
   */
  clone() {
    const cloned = new SeriesData();
    
    cloned.lastProjectionPrice = this.lastProjectionPrice;
    cloned.boxSize = this.boxSize;
    cloned.reversalAmount = this.reversalAmount;
    cloned.m_bars = this.m_bars.clone();
    cloned.m_nsBars = this.m_bars.clone(); // Note: original code uses m_bars here
    
    return cloned;
  }
  
  /**
   * Check if both bar collections are empty
   * @returns {boolean} True if no bars
   */
  isEmpty() {
    return this.m_bars.isEmpty() && this.m_nsBars.isEmpty();
  }
  
  /**
   * Get first bar (prefers regular bars)
   * @returns {*} First bar entry or null
   */
  first() {
    return this.m_bars.isEmpty() ? this.m_nsBars.first() : this.m_bars.first();
  }
  
  /**
   * Get last bar (prefers non-series bars)
   * @returns {*} Last bar entry or null
   */
  last() {
    return this.m_nsBars.isEmpty() ? this.m_bars.last() : this.m_nsBars.last();
  }
  
  /**
   * Search for bar at index with optional direction and plot filter
   * 
   * Search priority:
   * 1. If non-series bars empty → search regular bars
   * 2. If regular bars empty OR index >= first non-series index → search non-series
   * 3. Otherwise → search regular bars
   * 
   * @param {number} index - Bar index to search for
   * @param {number} [direction] - Search direction (SearchDirection.FromLeft/FromRight)
   * @param {number} [plotIndex] - Plot field index to filter on
   * @returns {*} Matching bar entry or null
   */
  search(index, direction, plotIndex) {
    // If non-series bars are empty, search regular bars
    if (this.nsBars().isEmpty()) {
      return this.bars().search(index, direction, plotIndex);
    }
    
    // If regular bars empty OR index is in non-series range, search non-series
    const nsFirstIndex = assertionUtils.ensureNotNull(this.nsBars().firstIndex());
    if (this.bars().isEmpty() || nsFirstIndex <= index) {
      return this.nsBars().search(index, direction, plotIndex);
    }
    
    // Otherwise search regular bars
    return this.bars().search(index, direction, plotIndex);
  }
  
  /**
   * Get bar value at specific index
   * @param {number} index - Bar index
   * @returns {*} Bar value or null if not found
   */
  valueAt(index) {
    const barEntry = this.search(index);
    return barEntry !== null ? barEntry.value : null;
  }
  
  /**
   * Find time point index for a given plot value
   * 
   * Searches for the bar where a specific plot field matches the target value.
   * Supports searching from left or right.
   * 
   * @param {number} targetValue - Value to search for
   * @param {number} plotField - Plot field index (e.g., PlotField.Close)
   * @param {SearchDirection} direction - Search direction
   * @returns {number} Time point index
   * @throws {Error} If unsupported search direction
   */
  plotValueToTimePointIndex(targetValue, plotField, direction) {
    
    // Search from right (most recent first)
    if (direction === SearchDirection.FromRight) {
      // Predicate: find bars where value >= target
      const predicate = (index, bar) => {
        const plotValue = bar[plotField];
        return plotValue != null && targetValue >= plotValue;
      };
      
      // Try regular bars first
      const regularResult = this.m_bars.findLast(predicate);
      if (regularResult !== null) {
        return regularResult.index;
      }
      
      // Then try non-series bars
      const nsResult = this.m_nsBars.findLast(predicate);
      if (nsResult !== null) {
        return nsResult.index;
      }
      
      // Fallback to first index
      return this.m_bars.firstIndex();
    }
    
    // Search from left (oldest first)
    if (direction === SearchDirection.FromLeft) {
      // Predicate: find bars where value <= target
      const predicate = (index, bar) => {
        const plotValue = bar[plotField];
        return plotValue != null && targetValue <= plotValue;
      };
      
      // Try regular bars first
      const regularResult = this.m_bars.findFirst(predicate);
      if (regularResult !== null) {
        return regularResult.index;
      }
      
      // Then try non-series bars
      const nsResult = this.m_nsBars.findFirst(predicate);
      if (nsResult !== null) {
        return nsResult.index;
      }
      
      // Fallback to last index
      return this.m_bars.lastIndex();
    }
    
    throw new Error("plotValueToTimePointIndex: unsupported search mode");
  }
  
  /**
   * Move data (for scrolling/panning)
   * @param {number} offset - Number of positions to move
   */
  moveData(offset) {
    this._conflatedChunksBuilder.moveData(offset);
    this.m_nsBars.move(offset);
  }
}

// Export public API
module.exports = {
  SeriesData,
  barFunction,
  barFunctions,
  seriesPlotFunctionMap
};
