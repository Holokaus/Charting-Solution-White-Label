/**
 * ============================================================================
 * TRADINGVIEW MODULE 68659 - LOGGER CONFIGURATION
 * ============================================================================
 *
 * Purpose: Logger configuration with localStorage persistence and high-rate settings
 *
 * Size: 2.2 KB
 *
 * Functions:
 *   - saveLoggerState(): Save log level and high-rate settings
 *   - getLogLevel(): Get current log level
 *   - isHighRateEnabled(): Check if high-rate logging is enabled
 *
 * Logger Levels:
 *   - LOGLEVEL.WARNING: Warning level
 *   - LOGLEVEL.INFO: Info level
 *   - LOGLEVEL.ERROR: Error level
 *
 * Dependencies:
 *   - 9343: Logger utilities
 *   - 11417: TV localStorage
 *
 * Exports:
 *   - saveLoggerState: Function to save logger configuration
 *   - getLogLevel: Function to get current log level
 *   - isHighRateEnabled: Function to check high-rate setting
 *
 * @module 68659
 * @category Logging
 * @subcategory Configuration
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";

  const logger = moduleRequire(9343),
    tvLocalStorage = moduleRequire(11417);

  const LOG_LEVEL_KEY = "tv.logger.loglevel",
    LOG_HIGH_RATE_KEY = "tv.logger.logHighRate";

  /**
   * Save logger state to localStorage
   * @param {string} level - Log level to save
   * @param {boolean} isHighRateEnabled - High-rate logging enabled
   */
  function saveLoggerState(level, isHighRateEnabled) {
    try {
      tvLocalStorage.TVLocalStorage.setItem(LOG_LEVEL_KEY, String(logger.getLogLevel()));
      tvLocalStorage.TVLocalStorage.setItem(LOG_HIGH_RATE_KEY, String(isHighRateEnabled()));
    } catch (error) {
      logger.logWarn(
        `Cannot save logger state (level: ${logger.getLogLevel()}, high-rate: ${isHighRateEnabled()}) to localStorage: ${error.message}`
      );
    }
  }

  /**
   * Get current log level from localStorage
   * @returns {number} Current log level
   */
  function getLogLevel() {
    return parseInt(tvLocalStorage.TVLocalStorage.getItem(LOG_LEVEL_KEY) || "");
  }

  /**
   * Check if high-rate logging is enabled
   * @returns {boolean} True if high-rate logging is enabled
   */
  function isHighRateEnabled() {
    return "true" === tvLocalStorage.TVLocalStorage.getItem(LOG_HIGH_RATE_KEY);
  }

  moduleRequire.moduleRequire_d(moduleConfig, {
    saveLoggerState: () => saveLoggerState,
    getLogLevel: () => getLogLevel,
    isHighRateEnabled: () => isHighRateEnabled
  });
}
