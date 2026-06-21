/**
 * ============================================================================
 * TRADINGVIEW MODULE 35727 - CUSTOM FORMATTERS CONFIGURATION
 * ============================================================================
 *
 * Purpose: Configuration object for custom formatters in price data sources
 *
 * Size: 0.5 KB
 *
 * Exports:
 *   - customFormatters: Configuration object with formatter factories
 *
 * Formatters:
 *   - dateFormatter: Date formatting function factory
 *   - timeFormatter: Time formatting function factory
 *   - tickMarkFormatter: Tick mark formatting function factory
 *   - priceFormatterFactory: Price formatting function factory
 *   - studyFormatterFactory: Study formatting function factory
 *
 * Used by:
 *   - Price data sources
 *   - Series data formatting
 *   - Chart display customization
 *
 * @module 35727
 * @category Data Formatting
 * @subcategory Custom Formatters
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    customFormatters: () => customFormatters
  });

  const customFormatters = {
    dateFormatter: null,
    timeFormatter: null,
    tickMarkFormatter: null,
    priceFormatterFactory: null,
    studyFormatterFactory: null
  };
}
