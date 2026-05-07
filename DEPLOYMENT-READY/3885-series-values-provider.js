/**
 * Module 3885 - Series Values Provider
 * 
 * Provides value display functionality for series data including:
 * - OHLC values (Open, High, Low, Close)
 * - Last price and change calculations
 * - Volume display with formatting
 * - Color calculation for price movements
 * - Mobile-friendly display modes
 * 
 * @module tv-series-values
 */

import { ensureNotNull, isNumber } from '50151';
import { isNumber as checkIsNumber } from '50335';
import { parseRgb, distanceRgb, rgbToHexString, invertRgb } from '24377';
import { t } from '11542';
import { CheckMobile } from '49483';
import { resetTransparency } from '52859';
import { forceLTRStr } from '24640';
import { PlotRowSearchMode } from '5471';
import { getLastDayChangeAvailable } from '78861';
import { getPercentageFormatter, getVolumeFormatter } from '56265';
import { notAvailable } from '53660';
import { lastDayChangeAvailable, alwaysShowLastPriceAndLastDayChange } from '17161';
import { getPriceValueFormatterForSource, shouldBeFormattedAsPercent, shouldBeFormattedAsIndexedTo100 } from '63903';
import { isLineToolName } from '11946';
import { tool } from '70859';

/**
 * Calculate percentage change between two values
 * @param {number} previous - Previous value
 * @param {number} current - Current value
 * @returns {number} Percentage change
 */
function calculatePercentChange(previous, current) {
  return 100 * (current - previous) / Math.abs(previous || 1);
}

/**
 * Price source types enumeration
 */
const PriceSourceType = {
  Open: 0,
  High: 1,
  Low: 2,
  Close: 3,
  Source: 4,
  LastPrice: 5,
  Change: 6,
  Volume: 7,
  LastDayChange: 8
};

/**
 * Calculate color for price movement indication
 * @param {string} baseColor - Base background color
 * @param {string} targetColor - Target color to compare
 * @returns {string} Appropriate contrasting color
 */
function calculateColor(baseColor, targetColor) {
  const baseRgb = parseRgb(targetColor);
  const targetRgb = parseRgb(baseColor);
  
  // If colors are too similar, invert the base color
  if (distanceRgb(baseRgb, targetRgb) < 70) {
    return rgbToHexString(invertRgb(baseRgb));
  }
  
  return targetColor;
}

/**
 * Calculate bar change and last day change data
 * @param {Object} seriesData - Series data object
 * @param {Object} quotes - Quote data
 * @param {Array} currentBar - Current bar data
 * @param {number} currentIndex - Current bar index
 * @param {Object} lastBar - Last bar information
 * @returns {Object} Bar change and last day change data
 */
function calculateChangesData(seriesData, quotes, currentBar, currentIndex, lastBar) {
  let barChange = null;
  let lastDayChange = null;
  
  // Process last day change if available
  if (null !== quotes) {
    const currentPrice = currentBar[4];
    const change = quotes.change || 0;
    
    lastDayChange = {
      change: change,
      currentPrice: currentPrice,
      prevPrice: currentPrice - change,
      percentChange: quotes.change_percent || 0
    };
  }
  
  // Process bar change
  const lastPrice = currentBar[4];
  const searchResult = seriesData.search(lastBar.index - 1, PlotRowSearchMode.NearestLeft, 1);
  const previousPrice = searchResult?.value[4] ?? null;
  
  if (null !== previousPrice && null != lastPrice) {
    barChange = {
      change: lastPrice - previousPrice,
      currentPrice: lastPrice,
      prevPrice: previousPrice,
      percentChange: calculatePercentChange(previousPrice, lastPrice)
    };
  }
  
  return {
    barChange: barChange,
    lastDayChange: lastDayChange
  };
}

/**
 * SeriesValuesProvider - Provides formatted values for series display
 * Used in legend, data window, and status line displays
 */
class SeriesValuesProvider {
  /**
   * Create a SeriesValuesProvider instance
   * @param {Object} series - The series object
   * @param {Object} model - Chart model
   * @param {boolean} searchNearestLeft - Whether to search for nearest left value
   */
  constructor(series, model, searchNearestLeft = true) {
    this._series = series;
    this._model = model;
    this._searchNearestLeftValue = searchNearestLeft;
    
    // Initialize empty value templates
    this._emptyValues = [
      {
        title: t(null, void 0, 'Open'),
        visible: false,
        value: '',
        index: 0,
        orderIndex: 0,
        id: 'open'
      },
      {
        title: t(null, void 0, 'High'),
        visible: false,
        value: '',
        index: 1,
        orderIndex: 1,
        id: 'high'
      },
      {
        title: t(null, void 0, 'Low'),
        visible: false,
        value: '',
        index: 2,
        orderIndex: 2,
        id: 'low'
      },
      {
        title: t(null, { context: 'input' }, 'Close'),
        visible: false,
        value: '',
        index: 3,
        orderIndex: 3,
        id: 'close'
      },
      {
        title: '',
        visible: false,
        value: '',
        index: 4,
        orderIndex: 4,
        id: 'source'
      },
      {
        title: '',
        visible: false,
        value: '',
        index: 5,
        orderIndex: 5,
        id: 'lastPrice'
      },
      {
        title: t(null, void 0, 'Change'),
        visible: false,
        value: '',
        index: 6,
        orderIndex: 6,
        id: 'change'
      },
      {
        title: t(null, { context: 'study' }, 'Volume'),
        visible: false,
        value: '',
        index: 7,
        orderIndex: 7,
        id: 'volume'
      },
      {
        title: t(null, void 0, 'Last Day Change'),
        visible: false,
        value: '',
        index: 8,
        orderIndex: 8,
        id: 'lastDayChange'
      }
    ];
  }
  
  /**
   * Get the template items for value display
   * @returns {Array} Array of value item templates
   */
  getItems() {
    return this._emptyValues;
  }
  
  /**
   * Get formatted values for a specific bar index
   * @param {number} index - Bar index to get values for
   * @returns {Array} Array of formatted value objects
   */
  getValues(index) {
    const showLastPriceAndChangeOnly = this._showLastPriceAndChangeOnly();
    
    // Initialize values with default not available state
    const values = this._emptyValues.map((item, i) => ({
      ...item,
      value: (6 === i || 8 === i) ? this._getNotAvailableWithPercent() : notAvailable,
      visible: 5 !== i && 4 !== i && !showLastPriceAndChangeOnly
    }));
    
    // Check if we can display values
    if (this._model.timeScale().isEmpty() || 
        0 === this._series.bars().size() || 
        this._series.priceScale().isEmpty()) {
      return values;
    }
    
    const lastBar = ensureNotNull(this._series.data().bars().last());
    
    // Validate index parameter
    if (!checkIsNumber(index)) {
      index = lastBar.index;
    }
    
    const searchMode = this._searchNearestLeftValue ? 
      PlotRowSearchMode.NearestLeft : 
      PlotRowSearchMode.Exact;
    
    const nearestIndex = this._series.nearestIndex(index, searchMode);
    
    if (void 0 === nearestIndex) {
      return values;
    }
    
    const barData = this._series.data().valueAt(nearestIndex);
    const backgroundColor = this._model.backgroundTopColor().value();
    
    if (null === barData) {
      return values;
    }
    
    const open = barData[1];
    const high = barData[2];
    const low = barData[3];
    const close = barData[4];
    
    // Calculate changes
    const { barChange, lastDayChange } = calculateChangesData(
      this._series.data(),
      this._series.quotes(),
      barData,
      nearestIndex,
      lastBar.value
    );
    
    // Get appropriate formatter
    const formatter = getPriceValueFormatterForSource(this._series);
    
    // Format change values if needed
    const shouldFormatAsPercent = shouldBeFormattedAsPercent(this._series);
    const shouldFormatAsIndexed = shouldBeFormattedAsIndexedTo100(this._series);
    
    if (!shouldFormatAsPercent && !shouldFormatAsIndexed) {
      const priceFormatter = this._series.formatter();
      const formatOptions = { signPositive: true };
      
      // Format bar change
      if (void 0 !== barChange) {
        const { currentPrice, prevPrice, change, percentChange } = barChange;
        const formattedChange = priceFormatter.formatChange?.(currentPrice, prevPrice, formatOptions) ?? 
                               priceFormatter.format(change, formatOptions);
        const percentFormatter = getPercentageFormatter();
        values[6].value = forceLTRStr(`${formattedChange} (${percentFormatter.format(percentChange, formatOptions)})`);
      }
      
      // Format last day change
      if (void 0 !== lastDayChange) {
        const { currentPrice, prevPrice, change, percentChange } = lastDayChange;
        const formattedChange = priceFormatter.formatChange?.(currentPrice, prevPrice, formatOptions) ?? 
                               priceFormatter.format(change, formatOptions);
        const percentFormatter = getPercentageFormatter();
        values[8].value = forceLTRStr(`${formattedChange} (${percentFormatter.format(percentChange, formatOptions)})`);
      }
    }
    
    let textColor = null;
    
    if (showLastPriceAndChangeOnly) {
      // Show only last price and change
      values[5].value = null == close ? notAvailable : formatter(close);
      values[5].visible = true;
      
      textColor = this._getChangeColor(barChange?.change, nearestIndex);
      values[6].visible = void 0 !== barChange;
      values[8].visible = void 0 !== lastDayChange || lastDayChangeAvailable;
    } else {
      // Show full OHLCV data
      values[0].value = null == open ? notAvailable : formatter(open);
      values[1].value = null == high ? notAvailable : formatter(high);
      values[2].value = null == low ? notAvailable : formatter(low);
      values[3].value = null == close ? notAvailable : formatter(close);
      values[4].value = formatter(this._series.barFunction()(barData));
      
      // Volume
      const volumeValue = barData[5];
      if (checkIsNumber(volumeValue)) {
        const volumeFormatter = getVolumeFormatter(2);
        values[7].value = volumeFormatter.format(volumeValue);
      } else {
        values[7].visible = false;
      }
      
      // Visibility based on interval and style
      const is1Tick = this._series.intervalObj().value().is1Tick();
      const isSpecialStyle = 21 !== this._series.style();
      
      values[0].visible = !is1Tick && isSpecialStyle;
      values[1].visible = !is1Tick;
      values[2].visible = !is1Tick;
      values[8].visible = void 0 !== lastDayChange || lastDayChangeAvailable;
      values[6].visible = void 0 !== barChange;
      
      // Get bar color for text coloring
      const barColorer = this._series.barColorer().barStyle(nearestIndex, false);
      textColor = calculateColor(backgroundColor, barColorer.barBorderColor ?? barColorer.barColor);
    }
    
    // Apply transparency reset and color calculation
    textColor = resetTransparency(calculateColor(backgroundColor, textColor));
    
    // Apply color to all values
    for (const value of values) {
      if (!value.color) {
        value.color = textColor;
      }
    }
    
    // Special handling for last day change color
    if (values[8].visible) {
      values[8].color = resetTransparency(calculateColor(backgroundColor, this._getChangeColor(lastDayChange?.change, nearestIndex)));
    }
    
    return values;
  }
  
  /**
   * Check if mobile non-tracking mode is active
   * @returns {boolean} True if in mobile non-tracking mode
   * @private
   */
  _mobileNonTrackingMode() {
    const isMobile = CheckMobile.any();
    const hasNoCrosshairPane = null === this._model.crosshairSource().pane;
    const isDrawingTool = isLineToolName(tool.value());
    const isEditingLine = null !== this._model.lineBeingEdited();
    
    return isMobile && (hasNoCrosshairPane || isDrawingTool || isEditingLine);
  }
  
  /**
   * Check if only last price and change should be shown
   * @returns {boolean} True if simplified display mode
   * @private
   */
  _showLastPriceAndChangeOnly() {
    return alwaysShowLastPriceAndLastDayChange || this._mobileNonTrackingMode();
  }
  
  /**
   * Get change color based on price movement
   * @param {number} change - Price change value
   * @param {number} index - Bar index
   * @returns {string} Color string
   * @private
   */
  _getChangeColor(change, index) {
    const style = this._series.style();
    
    // Special handling for certain chart styles
    if (2 === style || 15 === style || 14 === style) {
      return this._series.barColorer().barStyle(index, false).barColor;
    }
    
    // Get up/down color based on change direction
    const isUp = void 0 === change || change >= 0;
    const colorProperties = isUp ? 
      SeriesBarColorer.upColor(this._series.properties()) : 
      SeriesBarColorer.downColor(this._series.properties());
    
    return colorProperties.barBorderColor ?? colorProperties.barColor;
  }
  
  /**
   * Get "Not Available" string with percent sign
   * @returns {string} Formatted N/A string
   * @private
   */
  _getNotAvailableWithPercent() {
    return `${notAvailable} (${notAvailable}%)`;
  }
}

export { 
  SeriesValuesProvider, 
  calculateColor, 
  calculateChangesData,
  PriceSourceType 
};

export default {
  SeriesValuesProvider,
  calculateColor,
  calculateChangesData,
  PriceSourceType
};
