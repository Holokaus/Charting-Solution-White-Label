/**
 * ============================================================================
 * TRADINGVIEW MODULE 55014 - ERROR FORMATTING UTILITIES
 * ============================================================================
 *
 * Purpose: Study error formatting and translation utilities
 *
 * Size: 1.5 KB
 *
 * Functions:
 *   - formatStudyError: Format study error message
 *   - triesTranslateError: Check if error is translation error
 *
 * Features:
 *   - Study error message formatting
 *   - Translation error detection
 *   - Error message templates
 *   - Bold highlighting support
 *   - Internationalization support
 *
 * Dependencies:
 *   - 11542: Translation utilities
 *   - 25059: Error message utilities
 *   - 81657: Error message utilities
 *   - 72819: Error message utilities
 *   - 66751: Error message utilities
 *   - 94966: Error message utilities
 *
 * Exports:
 *   - formatStudyError: Study error formatting function
 *   - triesTranslateError: Translation error detection function
 *
 * @module 55014
 * @category Error Handling
 * @subpackage Error Formatting
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.errorFormatting_d(moduleConfig, {
    formatStudyError: () => formatStudyError,
    triesTranslateError: () => triesTranslateError
  });

  const TranslationUtils = moduleRequire(11542),
    ErrorMessageUtils = moduleRequire(25059),
    ErrorMessageUtils2 = moduleRequire(81657),
    ErrorMessageUtils3 = moduleRequire(72819),
    ErrorMessageUtils4 = moduleRequire(66751),
    ErrorMessageUtils5 = moduleRequire(94966);

  /**
   * Error message templates map
   */
  const ERROR_TEMPLATES = new Map([
    [
      "You cannot see this pivot timeframe on this resolution",
      ErrorMessageUtils.getMessage(25059)
    ],
    [
      "The data vendor doesn't provide volume data for this symbol.",
      ErrorMessageUtils.getMessage(81657)
    ],
    [
      "Histogram is too large, please increase 'Row Size' input.",
      ErrorMessageUtils.getMessage(72819)
    ],
    [
      "Histogram is too large, please reduce 'Row Size' input.",
      ErrorMessageUtils.getMessage(66751)
    ],
    [
      "Histogram is too large, please increase 'Ticks Per Row' input.",
      ErrorMessageUtils.getMessage(94966)
    ]
  ]);

  /**
   * Format study error message
   * @param {Object} errorData - Error data object
   * @returns {string} Formatted error message
   */
  function formatStudyError(errorData) {
    const template = ERROR_TEMPLATES.get(errorData.message);
    
    if (!template) {
      return errorData.message || 'Unknown error occurred';
    }
    
    return template.replace(
      /\{(\w+)\}/g,
      (match, word) => `<b>${word}</b>`
    );
  }

  /**
   * Check if error is translation error
   * @param {Object} errorData - Error data object
   * @returns {boolean} True if translation error
   */
  function triesTranslateError(errorData) {
    return errorData && 
           errorData.message && 
           typeof errorData.message === 'string' &&
           errorData.message.includes('translate');
  }

  // Export functions
  moduleExports.formatStudyError = formatStudyError;
  moduleExports.triesTranslateError = triesTranslateError;
}
