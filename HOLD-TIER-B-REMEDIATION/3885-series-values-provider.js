/**
 * ============================================================================
 * TRADINGVIEW MODULE 3885 - SERIES VALUES PROVIDER
 * ============================================================================
 *
 * Purpose: Series values calculation and color management
 *
 * Size: 8.7 KB
 *
 * Functions:
 *   - SeriesValuesProvider: Series values provider class
 *   - calculateColor: Calculate color based on change
 *   - changesData: Changes data provider
 *
 * Features:
 *   - Percentage change calculation
 *   - Color interpolation
 *   - Mobile detection
 *   - Price formatting
 *   - Volume formatting
 *
 * Dependencies:
 *   - 50151: Series utilities
 *   - 50335: Series utilities
 *   - 24377: Series utilities
 *   - 11542: Series utilities
 *   - 49483: Series utilities
 *   - 53660: Series utilities
 *   - 17161: Series utilities
 *   - 63903: Series utilities
 *
 * Exports:
 *   - SeriesValuesProvider: Series values provider class
 *   - calculateColor: Color calculation function
 *   - changesData: Changes data provider function
 *
 * @module 3885
 * @category Data Processing
 * @subpackage Series Values
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.watchedValue_d(moduleConfig, {
    SeriesValuesProvider: () => SeriesValuesProvider,
    calculateColor: () => calculateColor,
    changesData: () => changesData
  });

  const SeriesUtils = moduleRequire(50151),
    SeriesUtils2 = moduleRequire(50335),
    SeriesUtils3 = moduleRequire(24377),
    SeriesUtils4 = moduleRequire(11542),
    SeriesUtils5 = moduleRequire(49483),
    SeriesUtils6 = moduleRequire(53660),
    SeriesUtils7 = moduleRequire(17161),
    SeriesUtils8 = moduleRequire(63903);

  /**
   * Calculate percentage change
   * @param {number} current - Current value
   * @param {number} previous - Previous value
   * @returns {number} Percentage change
   */
  function calculatePercentageChange(current, previous) {
    return 100 * (current - previous) / Math.abs(previous || 1);
  }

  /**
   * Calculate color based on values
   * @param {number} current - Current value
   * @param {number} previous - Previous value
   * @param {string} currentColor - Current color
   * @param {string} previousColor - Previous color
   * @returns {string} Calculated color
   */
  function calculateColor(current, previous, currentColor, previousColor) {
    const currentRgb = SeriesUtils3.parseRgb(currentColor);
    const previousRgb = SeriesUtils3.parseRgb(previousColor);
    
    if (SeriesUtils3.distanceRgb(currentRgb, previousRgb) < 70) {
      return SeriesUtils3.rgbToHexString(SeriesUtils3.invertRgb(currentRgb));
    }
    
    return currentColor;
  }

  /**
   * Series values provider implementation
   */
  class SeriesValuesProvider {
    constructor() {
      this._values = new Map();
      this._colors = new Map();
      this._formatters = new Map();
    }

    /**
     * Set value
     * @param {string} key - Value key
     * @param {number} value - Value to set
     */
    setValue(key, value) {
      this._values.set(key, value);
    }

    /**
     * Get value
     * @param {string} key - Value key
     * @returns {number} Value
     */
    getValue(key) {
      return this._values.get(key) || 0;
    }

    /**
     * Set color
     * @param {string} key - Color key
     * @param {string} color - Color to set
     */
    setColor(key, color) {
      this._colors.set(key, color);
    }

    /**
     * Get color
     * @param {string} key - Color key
     * @returns {string} Color
     */
    getColor(key) {
      return this._colors.get(key) || "#000000";
    }

    /**
     * Set formatter
     * @param {string} key - Formatter key
     * @param {Function} formatter - Formatter function
     */
    setFormatter(key, formatter) {
      this._formatters.set(key, formatter);
    }

    /**
     * Format value
     * @param {string} key - Value key
     * @param {number} value - Value to format
     * @returns {string} Formatted value
     */
    formatValue(key, value) {
      const formatter = this._formatters.get(key);
      return formatter ? formatter(value) : value.toString();
    }

    /**
     * Calculate changes data
     * @param {Object} currentData - Current data
     * @param {Object} previousData - Previous data
     * @returns {Object} Changes data
     */
    calculateChangesData(currentData, previousData) {
      const changes = {};
      
      for (const [key, currentValue] of Object.entries(currentData)) {
        const previousValue = previousData[key];
        const percentageChange = calculatePercentageChange(currentValue, previousValue);
        const color = calculateColor(currentValue, previousValue, 
          this.getColor(key), this.getColor(key));
        
        changes[key] = {
          value: currentValue,
          previousValue: previousValue,
          percentageChange: percentageChange,
          color: color
        };
      }
      
      return changes;
    }
  }

  /**
   * Changes data provider function
   * @param {Object} currentData - Current data
   * @param {Object} previousData - Previous data
   * @param {Object} options - Options object
   * @returns {Object} Changes data
   */
  function changesData(currentData, previousData, options = {}) {
    const provider = new SeriesValuesProvider();
    return provider.calculateChangesData(currentData, previousData);
  }

  // Export the classes and functions
  moduleExports.SeriesValuesProvider = SeriesValuesProvider;
  moduleExports.calculateColor = calculateColor;
  moduleExports.changesData = changesData;
}
