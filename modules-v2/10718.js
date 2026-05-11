/**
 * Module 10718 - Date Format Utilities
 * 
 * Provides comprehensive date formatting functionality for TradingView charts.
 * Supports multiple date formats with locale awareness, timezone handling,
 * and weekday integration for international markets.
 * 
 * @module DateFormatUtilities
 * @version 1.0.0
 * @see Translation utilities (module 11542)
 * @see Locale utilities (module 28865)
 * @see Number formatting (module 95322)
 */

import { t as translate } from './11542-translation-utils';
import { getIsoLanguageCodeFromLanguage } from './28865-locale-utilities';
import { numberToStringWithLeadingZero } from './95322-number-formatting';

/**
 * Month name translations lookup
 * Maps month numbers (1-12) to translated month names
 * @type {Object<number, Function>}
 */
const monthNameTranslations = {
  1: () => translate(null, void 0, 62310),   // January
  2: () => translate(null, void 0, 2507),    // February
  3: () => translate(null, void 0, 92767),   // March
  4: () => translate(null, void 0, 27072),   // April
  5: () => translate(null, { context: "short" }, 13132), // May
  6: () => translate(null, void 0, 429),     // June
  7: () => translate(null, void 0, 53786),   // July
  8: () => translate(null, void 0, 46450),   // August
  9: () => translate(null, void 0, 6816),    // September
  10: () => translate(null, void 0, 12179),  // October
  11: () => translate(null, void 0, 26899),   // November
  12: () => translate(null, void 0, 32084)   // December
};

/**
 * Quarter name translations lookup
 * Maps quarter numbers (1-4) to translated quarter names
 * @type {Object<number, Function>}
 */
const quarterNameTranslations = {
  1: () => translate(null, void 0, 14568),   // Q1
  2: () => translate(null, void 0, 13534),   // Q2
  3: () => translate(null, void 0, 14530),   // Q3
  4: () => translate(null, void 0, 3762)     // Q4
};

/**
 * Get the month number (1-12) from a date
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {number} Month number (1-12)
 */
function getMonthNumber(date, useLocalTimezone) {
  return (useLocalTimezone ? date.getMonth() : date.getUTCMonth()) + 1;
}

/**
 * Get the full year from a date
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {number} Full year (e.g., 2024)
 */
function getFullYear(date, useLocalTimezone) {
  return useLocalTimezone ? date.getFullYear() : date.getUTCFullYear();
}

/**
 * Get the short weekday name for a date
 * 
 * @param {Date} date - The source date
 * @param {string} timezone - The timezone identifier
 * @returns {string} Short weekday name
 */
function getShortWeekday(date, timezone) {
  const locale = window.language 
    ? getIsoLanguageCodeFromLanguage(window.language) 
    : void 0;
  
  return date.toLocaleDateString(locale, {
    weekday: "short",
    timeZone: "local" === timezone ? void 0 : timezone
  });
}

/**
 * Get the quarter number (1-4) from a date
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {number} Quarter number (1-4)
 */
function getQuarterNumber(date, useLocalTimezone) {
  const month = getMonthNumber(date, useLocalTimezone);
  return Math.floor((month - 1) / 3) + 1;
}

/**
 * Get translated quarter name
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {string} Translated quarter name (e.g., "Q1")
 */
function getQuarterName(date, useLocalTimezone) {
  const quarter = getQuarterNumber(date, useLocalTimezone);
  return quarterNameTranslations[quarter]();
}

/**
 * Get day of month with leading zero
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {string} Day of month (01-31)
 */
function getDayOfMonth(date, useLocalTimezone) {
  const day = useLocalTimezone ? date.getDate() : date.getUTCDate();
  return numberToStringWithLeadingZero(day, 2);
}

/**
 * Get translated month name
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {string} Translated month name
 */
function getMonthName(date, useLocalTimezone) {
  const month = getMonthNumber(date, useLocalTimezone);
  return monthNameTranslations[month]();
}

/**
 * Get month number with leading zero
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {string} Month number (01-12)
 */
function getMonthWithLeadingZero(date, useLocalTimezone) {
  const month = getMonthNumber(date, useLocalTimezone);
  return numberToStringWithLeadingZero(month, 2);
}

/**
 * Get two-digit year
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {string} Two-digit year (00-99)
 */
function getTwoDigitYear(date, useLocalTimezone) {
  const year = getFullYear(date, useLocalTimezone);
  return numberToStringWithLeadingZero(year % 100, 2);
}

/**
 * Get four-digit year
 * 
 * @param {Date} date - The source date
 * @param {boolean} useLocalTimezone - Whether to use local timezone or UTC
 * @returns {string} Four-digit year (e.g., "2024")
 */
function getFourDigitYear(date, useLocalTimezone) {
  const year = getFullYear(date, useLocalTimezone);
  return numberToStringWithLeadingZero(year, 4);
}

/**
 * Date format functions mapping
 * Each function takes a date and timezone flag, returns formatted string
 * 
 * @type {Object<string, Function>}
 */
const dateFormatFunctions = {
  // Quarter formats
  "qq 'yy": (date, useLocalTimezone) => 
    `${getQuarterName(date, useLocalTimezone)} '${getTwoDigitYear(date, useLocalTimezone)}`,
  
  "qq yyyy": (date, useLocalTimezone) => 
    `${getQuarterName(date, useLocalTimezone)} ${getFourDigitYear(date, useLocalTimezone)}`,
  
  // Day-Month-Year formats
  "dd MMM 'yy": (date, useLocalTimezone) => 
    `${getDayOfMonth(date, useLocalTimezone)} ${getMonthName(date, useLocalTimezone)} '${getTwoDigitYear(date, useLocalTimezone)}`,
  
  "MMM 'yy": (date, useLocalTimezone) => 
    `${getMonthName(date, useLocalTimezone)} '${getTwoDigitYear(date, useLocalTimezone)}`,
  
  "MMM dd, yyyy": (date, useLocalTimezone) => 
    `${getMonthName(date, useLocalTimezone)} ${getDayOfMonth(date, useLocalTimezone)}, ${getFourDigitYear(date, useLocalTimezone)}`,
  
  "MMM yyyy": (date, useLocalTimezone) => 
    `${getMonthName(date, useLocalTimezone)} ${getFourDigitYear(date, useLocalTimezone)}`,
  
  "MMM dd": (date, useLocalTimezone) => 
    `${getMonthName(date, useLocalTimezone)} ${getDayOfMonth(date, useLocalTimezone)}`,
  
  "dd MMM": (date, useLocalTimezone) => 
    `${getDayOfMonth(date, useLocalTimezone)} ${getMonthName(date, useLocalTimezone)}`,
  
  // ISO-style formats
  "yyyy-MM-dd": (date, useLocalTimezone) => 
    `${getFourDigitYear(date, useLocalTimezone)}-${getMonthWithLeadingZero(date, useLocalTimezone)}-${getDayOfMonth(date, useLocalTimezone)}`,
  
  "yy-MM-dd": (date, useLocalTimezone) => 
    `${getTwoDigitYear(date, useLocalTimezone)}-${getMonthWithLeadingZero(date, useLocalTimezone)}-${getDayOfMonth(date, useLocalTimezone)}`,
  
  // Slash-separated formats
  "yy/MM/dd": (date, useLocalTimezone) => 
    `${getTwoDigitYear(date, useLocalTimezone)}/${getMonthWithLeadingZero(date, useLocalTimezone)}/${getDayOfMonth(date, useLocalTimezone)}`,
  
  "yyyy/MM/dd": (date, useLocalTimezone) => 
    `${getFourDigitYear(date, useLocalTimezone)}/${getMonthWithLeadingZero(date, useLocalTimezone)}/${getDayOfMonth(date, useLocalTimezone)}`,
  
  "dd-MM-yyyy": (date, useLocalTimezone) => 
    `${getDayOfMonth(date, useLocalTimezone)}-${getMonthWithLeadingZero(date, useLocalTimezone)}-${getFourDigitYear(date, useLocalTimezone)}`,
  
  "dd-MM-yy": (date, useLocalTimezone) => 
    `${getDayOfMonth(date, useLocalTimezone)}-${getMonthWithLeadingZero(date, useLocalTimezone)}-${getTwoDigitYear(date, useLocalTimezone)}`,
  
  "dd/MM/yy": (date, useLocalTimezone) => 
    `${getDayOfMonth(date, useLocalTimezone)}/${getMonthWithLeadingZero(date, useLocalTimezone)}/${getTwoDigitYear(date, useLocalTimezone)}`,
  
  "dd/MM/yyyy": (date, useLocalTimezone) => 
    `${getDayOfMonth(date, useLocalTimezone)}/${getMonthWithLeadingZero(date, useLocalTimezone)}/${getFourDigitYear(date, useLocalTimezone)}`,
  
  // US-style formats
  "MM/dd/yy": (date, useLocalTimezone) => 
    `${getMonthWithLeadingZero(date, useLocalTimezone)}/${getDayOfMonth(date, useLocalTimezone)}/${getTwoDigitYear(date, useLocalTimezone)}`,
  
  "MM/dd/yyyy": (date, useLocalTimezone) => 
    `${getMonthWithLeadingZero(date, useLocalTimezone)}/${getDayOfMonth(date, useLocalTimezone)}/${getFourDigitYear(date, useLocalTimezone)}`
};

/**
 * Create a date formatter that includes weekday information
 * 
 * @param {string} formatPattern - The base date format pattern
 * @param {string} timezone - The timezone identifier
 * @returns {Function} Formatter function (date, useLocalTimezone) => formattedString
 */
function getDateFormatWithWeekday(formatPattern, timezone) {
  const baseFormatter = dateFormatFunctions[formatPattern];
  
  // Japanese and Korean locales put weekday in parentheses after date
  if (["ja", "ko", "zh", "zh_TW"].includes(window.language || "")) {
    return (date, useLocalTimezone) => 
      `${baseFormatter(date, useLocalTimezone)} (${getShortWeekday(date, timezone)})`;
  }
  
  // Standard locales put weekday before date
  return (date, useLocalTimezone) => 
    `${getShortWeekday(date, timezone)} ${baseFormatter(date, useLocalTimezone)}`;
}

/**
 * Get the list of available date format patterns
 * @returns {string[]} Array of available format patterns
 */
function getAvailableDateFormats() {
  return Object.keys(dateFormatFunctions);
}

/**
 * Get the default date format for the current locale
 * Asian locales (Japanese, Korean, Chinese) prefer ISO format
 * Other locales prefer standard dd MMM 'yy format
 * 
 * @returns {string} Default format pattern
 */
function getDefaultDateFormat() {
  const asianLocales = ["ja", "ko", "zh", "zh_TW"];
  return asianLocales.includes(window.language || "") 
    ? "yyyy-MM-dd" 
    : "dd MMM 'yy";
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  getAvailableDateFormats,
  dateFormatFunctions,
  getDefaultDateFormat,
  getDateFormatWithWeekday,
  getMonthName,
  getQuarterName,
  getDayOfMonth,
  getMonthNumber,
  getFullYear,
  getShortWeekday
};

// Default exports for compatibility
export default {
  availableDateFormats: getAvailableDateFormats,
  dateFormatFunctions,
  defaultDateFormat: getDefaultDateFormat,
  getDateFormatWithWeekday
};

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Original: Single-line minified webpack module
// Restored: Full semantic code with complete documentation
// 
// Variable mappings:
// - e → date (input date parameter)
// - t → useLocalTimezone (timezone flag)
// - i → moduleId (webpack import - converted to ES6)
// - s → translate (translation utility)
// - o → localeUtilities (ISO language code function)
// - n → numberFormatting (numberToStringWithLeadingZero)
// - r → monthNameTranslations (lookup object)
// - a → quarterNameTranslations (lookup object)
// - l → getMonthNumber (function)
// - c → getFullYear (function)
// - h → getShortWeekday (function)
// - d → getQuarterName (function)
// - u → getDayOfMonth (function)
// - _ → getMonthName (function)
// - p → getMonthWithLeadingZero (function)
// - m → getTwoDigitYear (function)
// - g → getFourDigitYear (function)
// - f → dateFormatFunctions (main export object)
// - y → getDateFormatWithWeekday (function)
// - v → getAvailableDateFormats (function)
// - S → getDefaultDateFormat (function)
// ============================================================================
