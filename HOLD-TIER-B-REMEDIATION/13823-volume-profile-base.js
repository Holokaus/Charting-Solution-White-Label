/**
 * ============================================================================
 * TRADINGVIEW MODULE 13823 - VOLUME PROFILE BASE CLASS
 * ============================================================================
 *
 * Purpose: Base class for volume profile calculations and data management
 *
 * Size: 4.0 KB
 *
 * Classes:
 *   - VolumeProfileBase: Base class for volume profile implementations
 *   - VolumeProfileUpDown: Up/Down volume profile
 *   - VolumeProfileTotal: Total volume profile
 *   - VolumeProfileDelta: Delta volume profile
 *
 * Features:
 *   - Price range calculations
 *   - Row width calculations
 *   - Index calculations for volume bars
 *   - Start price management
 *   - Volume profile type enumeration
 *
 * Dependencies:
 *   - 37103: Feature flags
 *   - 46082: Volume profile utilities
 *   - 19979: Standard logging
 *   - 47132: Interval parsing
 *
 * Exports:
 *   - VolumeProfileBase: Base volume profile class
 *   - maxHHistItems: Maximum histogram items constant
 *   - numOfSubHists: Number of sub-histograms function
 *
 * @module 13823
 * @category Technical Indicators
 * @subcategory Volume Profile
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    VolumeProfileBase: () => VolumeProfileBase,
    maxHHistItems: () => maxHHistItems,
    numOfSubHists: () => numOfSubHists
  });

  const featureFlags = moduleRequire(37103),
    volumeProfileUtils = moduleRequire(46082),
    logger = moduleRequire(19979),
    intervalModule = moduleRequire(47132);

  // Volume profile type enumeration
  !function(VolumeProfileType) {
    VolumeProfileType[VolumeProfileType.NumberOfRows = 0] = "NumberOfRows";
    VolumeProfileType[VolumeProfileType.TicksPerRow = 1] = "TicksPerRow";
  }(VolumeProfileType || (VolumeProfileType = {}));

  /**
   * Get maximum number of histogram items
   * @returns {number} Maximum items (6000)
   */
  function maxHHistItems() {
    return 6000;
  }

  /**
   * Get number of sub-histograms
   * @param {string} type - Volume profile type
   * @returns {number} Number of sub-histograms (1 for Up/Down, 1 for Total)
   */
  function numOfSubHists(type) {
    switch (type) {
      case "Delta":
      case "Up/Down":
        return 2;
      case "Total":
        return 1;
      default:
        logger.Std.error(`Invalid study argument value: ${type}`);
    }
  }

  /**
   * Base class for volume profile calculations
   */
  class VolumeProfileBase {
    /**
     * @param {number} numberOfRows - Number of rows in profile
     * @param {number} minPrice - Minimum price
     * @param {number} maxPrice - Maximum price
     * @param {number} low - Low price
     * @param {number} high - High price
     * @param {string} type - Volume profile type
     */
    constructor(numberOfRows, minPrice, maxPrice, low, high, type) {
      this._minTick = NaN;
      this._minPrice = NaN;
      this._maxPrice = NaN;
      this._low = NaN;
      this._high = NaN;
      this._startPrice = NaN;
      this._indexLowVbP = NaN;
      this._indexHighVbP = NaN;
      this._rowSize = numberOfRows;
      this._type = type;
    }

    /**
     * Initialize volume profile with data
     * @param {number} minTick - Minimum tick value
     * @param {number} minPrice - Minimum price
     * @param {number} maxPrice - Maximum price
     * @param {number} low - Low price
     * @param {number} high - High price
     */
    init(minTick, minPrice, maxPrice, low, high) {
      this._minTick = minTick;
      this._minPrice = minPrice;
      this._maxPrice = maxPrice;
      this._low = low;
      this._high = high;
    }

    /**
     * Get start price
     * @returns {number} Start price
     */
    getStartPrice() {
      return this._startPrice;
    }

    /**
     * Set start price
     * @param {number} startPrice - Start price to set
     */
    setStartPrice(startPrice) {
      this._startPrice = startPrice;
    }

    /**
     * Get low volume bar index
     * @returns {number} Low volume bar index
     */
    getIndexLowVbP() {
      return this._indexLowVbP;
    }

    /**
     * Set low volume bar index
     * @param {number} index - Index to set
     */
    setIndexLowVbP(index) {
      this._indexLowVbP = index;
    }

    /**
     * Get high volume bar index
     * @returns {number} High volume bar index
     */
    getIndexHighVbP() {
      return this._indexHighVbP;
    }

    /**
     * Set high volume bar index
     * @param {number} index - Index to set
     */
    setIndexHighVbP(index) {
      this._indexHighVbP = index;
    }

    /**
     * Get volume profile type
     * @returns {string} Volume profile type
     */
    type() {
      return this._type;
    }
  }

  /**
   * Up/Down volume profile implementation
   */
  class VolumeProfileUpDown extends VolumeProfileBase {
    constructor(numberOfRows) {
      super(numberOfRows, 0);
    }

    /**
     * Calculate volume profile data
     */
    calculate() {
      this.setStartPrice(this._minPrice);
      const rowWidth = this.rowWidth();
      
      let lowIndex = Math.floor((this._low - this._minPrice) / rowWidth);
      let highIndex = Math.ceil((this._high - this._minPrice) / rowWidth) - 1;
      
      lowIndex = Math.max(lowIndex, 0);
      highIndex = Math.max(highIndex, 0);
      const lowIndexClamped = Math.min(lowIndex, this._rowSize - 1);
      const highIndexClamped = Math.min(highIndex, this._rowSize - 1);
      
      this.setIndexLowVbP(lowIndexClamped);
      this.setIndexHighVbP(highIndexClamped);
    }

    /**
     * Get row width for calculations
     * @returns {number} Row width
     */
    rowWidth() {
      return Math.max((this._maxPrice - this._minPrice) / this._rowSize, this._minTick);
    }
  }

  /**
   * Total volume profile implementation
   */
  class VolumeProfileTotal extends VolumeProfileBase {
    constructor(numberOfRows) {
      super(numberOfRows, 1);
    }

    /**
     * Calculate volume profile data
     */
    calculate() {
      this.setStartPrice(0);
      const rowWidth = this.rowWidth();
      
      let lowIndex = Math.floor(this._low / rowWidth);
      let highIndex = Math.ceil(this._high / rowWidth) - 1;
      
      lowIndex = Math.min(lowIndex, this._rowSize - 1);
      highIndex = Math.min(highIndex, this._rowSize - 1);
      
      this.setIndexLowVbP(lowIndex);
      this.setIndexHighVbP(highIndex);
    }

    /**
     * Get row width for calculations
     * @returns {number} Row width
     */
    rowWidth() {
      return this._minTick * this._rowSize;
    }
  }

  /**
   * Volume profile factory
   */
  class VolumeProfileFactory {
    /**
     * Find basic resolution for time period
     * @param {number} from - Start time
     * @param {number} to - End time
     * @param {string} symbol - Symbol name
     * @param {Object} options - Additional options
     * @returns {string} Resolution string
     */
    static findBasicResolutionForFromTo(from, to, symbol, options) {
      const resolution = volumeProfileUtils.getVolumeProfileResolutionForPeriod(from.value(), to, symbol, options);
      const interval = intervalModule.Interval.parse(resolution);
      
      if (featureFlags.enabled("charting_library_debug_mode")) {
        console.log(
          `${(new Date()).toISOString()} Selected resolution ${interval.value()} for (${from.value()}, ${to}, ${symbol})`
        );
      }
      
      return interval.value();
    }

    /**
     * Verify row size input
     * @param {number} rowSize - Row size to verify
     * @param {string} type - Input type
     */
    static verifyRowSizeInput(rowSize, type) {
      if ("Number Of Rows" === type && rowSize > maxHHistItems()) {
        logger.Std.error('Histogram is too large, please reduce "Row Size" input.');
      }
    }

    /**
     * Get rows layout based on type
     * @param {number} rowSize - Number of rows
     * @param {string} type - Volume profile type
     * @returns {VolumeProfileBase} Volume profile instance
     */
    static _getRowsLayout(rowSize, type) {
      return "Number Of Rows" === type ? new VolumeProfileUpDown(rowSize) : new VolumeProfileTotal(rowSize);
    }
  }
}
