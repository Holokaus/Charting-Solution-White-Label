/**
 * ============================================================================
 * TRADINGVIEW MODULE 87296 - RESOLUTION UTILITIES
 * ============================================================================
 *
 * Purpose: Chart resolution and interval management utilities
 *
 * Size: 12.1 KB
 *
 * Functions:
 *   - compareResolutions: Compare two resolutions
 *   - convertResolutionsFromSettings: Convert resolutions from settings
 *   - getApplicableIntervalForFrequency: Get applicable interval for frequency
 *   - getCustomResolutions: Get custom resolutions
 *   - getMaxResolutionValue: Get maximum resolution value
 *   - getResolutionByChartStyle: Get resolution by chart style
 *   - getTranslatedResolution: Get translated resolution
 *   - getTranslatedResolutionModel: Get translated resolution model
 *   - intervalIsSupported: Check if interval is supported
 *   - isAvailable: Check if resolution is available
 *   - isIntervalEnabled: Check if interval is enabled
 *   - isResolutionMultiplierValid: Check if resolution multiplier is valid
 *   - isSecondsEnabled: Check if seconds are enabled
 *   - mergeResolutions: Merge multiple resolutions
 *   - normalizeIntervalString: Normalize interval string
 *   - setLastUsedResolution: Set last used resolution
 *   - sortResolutions: Sort resolutions
 *
 * Features:
 *   - Resolution comparison and validation
 *   - Interval string normalization
 *   - Custom resolution management
 *   - Translation support for resolutions
 *   - Chart style integration
 *   - Frequency-based interval selection
 *   - Settings-based resolution conversion
 *
 * Dependencies:
 *   - 87465: Resolution utilities
 *   - 11542: Translation utilities
 *   - 46082: Resolution utilities
 *
 * Exports:
 *   - compareResolutions: Resolution comparison function
 *   - convertResolutionsFromSettings: Settings conversion function
 *   - getApplicableIntervalForFrequency: Interval selection function
 *   - getCustomResolutions: Custom resolutions function
 *   - getMaxResolutionValue: Max resolution value function
 *   - getResolutionByChartStyle: Style-based resolution function
 *   - getTranslatedResolution: Translation function
 *   - getTranslatedResolutionModel: Model translation function
 *   - intervalIsSupported: Interval support function
 *   - isAvailable: Availability check function
 *   - isIntervalEnabled: Interval enablement function
 *   - isResolutionMultiplierValid: Multiplier validation function
 *   - isSecondsEnabled: Seconds enablement function
 *   - mergeResolutions: Resolution merge function
 *   - normalizeIntervalString: String normalization function
 *   - setLastUsedResolution: Last used resolution setter
 *   - sortResolutions: Resolution sorting function
 *
 * @module 87296
 * @category Chart System
 * @subpackage Resolution Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.resolutionUtils_d(moduleConfig, {
    compareResolutions: () => compareResolutions,
    convertResolutionsFromSettings: () => convertResolutionsFromSettings,
    getApplicableIntervalForFrequency: () => getApplicableIntervalForFrequency,
    getCustomResolutions: () => getCustomResolutions,
    getMaxResolutionValue: () => getMaxResolutionValue,
    getResolutionByChartStyle: () => getResolutionByChartStyle,
    getTranslatedResolution: () => getTranslatedResolution,
    getTranslatedResolutionModel: () => getTranslatedResolutionModel,
    intervalIsSupported: () => intervalIsSupported,
    isAvailable: () => isAvailable,
    isIntervalEnabled: () => isIntervalEnabled,
    isResolutionMultiplierValid: () => isResolutionMultiplierValid,
    isSecondsEnabled: () => isSecondsEnabled,
    mergeResolutions: () => mergeResolutions,
    normalizeIntervalString: () => normalizeIntervalString,
    setLastUsedResolution: () => setLastUsedResolution,
    sortResolutions: () => sortResolutions
  });

  const ResolutionUtils = moduleRequire(87465),
    TranslationUtils = moduleRequire(11542),
    ResolutionUtils2 = moduleRequire(46082);

  /**
   * Compare two resolutions
   * @param {Object} resolution1 - First resolution
   * @param {Object} resolution2 - Second resolution
   * @returns {number} Comparison result
   */
  function compareResolutions(resolution1, resolution2) {
    // Resolution comparison logic
    if (resolution1.value < resolution2.value) return -1;
    if (resolution1.value > resolution2.value) return 1;
    return 0;
  }

  /**
   * Convert resolutions from settings
   * @param {Array} settings - Settings array
   * @returns {Array} Converted resolutions
   */
  function convertResolutionsFromSettings(settings) {
    return settings.map(setting => ({
      ...setting,
      value: parseInt(setting.value),
      description: TranslationUtils.translate(setting.description)
    }));
  }

  /**
   * Get applicable interval for frequency
   * @param {number} frequency - Frequency value
   * @returns {Object} Applicable interval
   */
  function getApplicableIntervalForFrequency(frequency) {
    // Frequency to interval mapping logic
    const intervalMap = {
      1: '1',
      5: '5',
      15: '15',
      30: '30',
      60: '60',
      240: '4H',
      1440: '1D'
    };
    
    return {
      value: intervalMap[frequency] || '1',
      frequency: frequency
    };
  }

  /**
   * Get custom resolutions
   * @returns {Array} Array of custom resolutions
   */
  function getCustomResolutions() {
    return ResolutionUtils.getCustomResolutions() || [];
  }

  /**
   * Get maximum resolution value
   * @returns {number} Maximum resolution value
   */
  function getMaxResolutionValue() {
    return ResolutionUtils.getMaxResolutionValue() || 1440;
  }

  /**
   * Get resolution by chart style
   * @param {string} chartStyle - Chart style
   * @returns {Object} Resolution for chart style
   */
  function getResolutionByChartStyle(chartStyle) {
    const styleMap = {
      'candlestick': '1',
      'line': '1',
      'area': '1',
      'renko': '1',
      'kagi': '1',
      'pointandfigure': '1',
      'hollowcandle': '1',
      'heikinashi': '1'
    };
    
    return {
      value: styleMap[chartStyle] || '1',
      style: chartStyle
    };
  }

  /**
   * Get translated resolution
   * @param {Object} resolution - Resolution object
   * @returns {string} Translated resolution
   */
  function getTranslatedResolution(resolution) {
    return TranslationUtils.translate(resolution.description || resolution.value);
  }

  /**
   * Get translated resolution model
   * @param {Object} resolution - Resolution object
   * @returns {Object} Translated resolution model
   */
  function getTranslatedResolutionModel(resolution) {
    return {
      ...resolution,
      translatedDescription: TranslationUtils.translate(resolution.description),
      translatedValue: TranslationUtils.translate(resolution.value.toString())
    };
  }

  /**
   * Check if interval is supported
   * @param {string} interval - Interval string
   * @returns {boolean} True if supported
   */
  function intervalIsSupported(interval) {
    const supportedIntervals = ['1', '5', '15', '30', '60', '240', '1440'];
    return supportedIntervals.includes(interval);
  }

  /**
   * Check if resolution is available
   * @param {Object} resolution - Resolution object
   * @returns {boolean} True if available
   */
  function isAvailable(resolution) {
    return ResolutionUtils.isResolutionAvailable(resolution);
  }

  /**
   * Check if interval is enabled
   * @param {string} interval - Interval string
   * @returns {boolean} True if enabled
   */
  function isIntervalEnabled(interval) {
    return ResolutionUtils.isIntervalEnabled(interval);
  }

  /**
   * Check if resolution multiplier is valid
   * @param {number} multiplier - Resolution multiplier
   * @returns {boolean} True if valid
   */
  function isResolutionMultiplierValid(multiplier) {
    return multiplier > 0 && multiplier <= 1000;
  }

  /**
   * Check if seconds are enabled
   * @returns {boolean} True if seconds are enabled
   */
  function isSecondsEnabled() {
    return ResolutionUtils.isSecondsEnabled();
  }

  /**
   * Merge multiple resolutions
   * @param {...Object} resolutions - Resolution objects to merge
   * @returns {Array} Merged resolutions array
   */
  function mergeResolutions(...resolutions) {
    const merged = new Set();
    resolutions.forEach(resolution => {
      if (Array.isArray(resolution)) {
        resolution.forEach(r => merged.add(r));
      } else {
        merged.add(resolution);
      }
    });
    
    return Array.from(merged).sort(compareResolutions);
  }

  /**
   * Normalize interval string
   * @param {string} interval - Interval string to normalize
   * @returns {string} Normalized interval string
   */
  function normalizeIntervalString(interval) {
    if (!interval) return '1';
    
    // Remove whitespace and convert to uppercase
    const normalized = interval.trim().toUpperCase();
    
    // Handle common variations
    const variations = {
      '1M': '1',
      '5M': '5',
      '15M': '15',
      '30M': '30',
      '1H': '60',
      '4H': '240',
      '1D': '1440'
    };
    
    return variations[normalized] || normalized;
  }

  /**
   * Set last used resolution
   * @param {Object} resolution - Last used resolution
   */
  function setLastUsedResolution(resolution) {
    ResolutionUtils.setLastUsedResolution(resolution);
  }

  /**
   * Sort resolutions
   * @param {Array} resolutions - Resolutions array to sort
   * @returns {Array} Sorted resolutions array
   */
  function sortResolutions(resolutions) {
    return [...resolutions].sort(compareResolutions);
  }
}
