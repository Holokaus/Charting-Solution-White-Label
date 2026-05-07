/**
 * Module 10718 - Date Format Utilities
 * 
 * Provides date formatting functions for the TradingView charting library.
 * Supports multiple date formats and localization for different languages.
 * 
 * @module 10718-date-format-utilities
 */

import { t as translate } from './11542-i18n';
import { getIsoLanguageCodeFromLanguage } from './28865-language-utils';
import { numberToStringWithLeadingZero } from './95322-number-utils';

// ============================================================================
// Month name translation functions (indexed 1-12)
// ============================================================================

const fullMonthNames = {
  1: () => translate(null, undefined, 62310),      // January
  2: () => translate(null, undefined, 2507),       // February
  3: () => translate(null, undefined, 92767),      // March
  4: () => translate(null, undefined, 27072),      // April
  5: () => translate(null, { context: 'short' }, 13132), // May
  6: () => translate(null, undefined, 429),        // June
  7: () => translate(null, undefined, 53786),      // July
  8: () => translate(null, undefined, 46450),      // August
  9: () => translate(null, undefined, 6816),       // September
  10: () => translate(null, undefined, 12179),     // October
  11: () => translate(null, undefined, 26899),     // November
  12: () => translate(null, undefined, 32084)      // December
};

const shortMonthNames = {
  1: () => translate(null, undefined, 14568),      // Jan
  2: () => translate(null, undefined, 13534),      // Feb
  3: () => translate(null, undefined, 14530),      // Mar
  4: () => translate(null, undefined, 3762)        // Apr (and possibly others)
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get month number (1-12) from a date
 * @param {Date} date - The date object
 * @param {boolean} useLocalTime - Whether to use local time or UTC
 * @returns {number} Month number (1-12)
 */
const getMonth = (date, useLocalTime) => (useLocalTime ? date.getMonth() : date.getUTCMonth()) + 1;

/**
 * Get full year from a date
 * @param {Date} date - The date object
 * @param {boolean} useLocalTime - Whether to use local time or UTC
 * @returns {number} Full year (e.g., 2024)
 */
const getFullYear = (date, useLocalTime) => useLocalTime ? date.getFullYear() : date.getUTCFullYear();

/**
 * Get weekday abbreviation using browser's Intl API
 * @param {Date} date - The date object
 * @param {string|undefined} timezone - Timezone identifier or undefined
 * @returns {string} Short weekday name (e.g., "Mon", "Tue")
 */
const getWeekdayShort = (date, timezone) => {
  const languageCode = window.language ? getIsoLanguageCodeFromLanguage(window.language) : undefined;
  return date.toLocaleDateString(languageCode, {
    weekday: 'short',
    timeZone: timezone === 'local' ? undefined : timezone
  });
};

/**
 * Get quarter name (Q1, Q2, Q3, Q4)
 * @param {Date} date - The date object
 * @param {boolean} useLocalTime - Whether to use local time or UTC
 * @returns {string} Quarter name
 */
const getQuarter = (date, useLocalTime) => {
  const month = getMonth(date, useLocalTime);
  const quarterNum = Math.floor((month - 1) / 3) + 1;
  return shortMonthNames[quarterNum]();
};

/**
 * Get day of month with leading zero
 * @param {Date} date - The date object
 * @param {boolean} useLocalTime - Whether to use local time or UTC
 * @returns {string} Day with leading zero (e.g., "05", "12")
 */
const getDayWithLeadingZero = (date, useLocalTime) => {
  const day = useLocalTime ? date.getDate() : date.getUTCDate();
  return numberToStringWithLeadingZero(day, 2);
};

/**
 * Get abbreviated month name
 * @param {Date} date - The date object
 * @param {boolean} useLocalTime - Whether to use local time or UTC
 * @returns {string} Abbreviated month name (e.g., "Jan", "Feb")
 */
const getShortMonthName = (date, useLocalTime) => {
  const month = getMonth(date, useLocalTime);
  return fullMonthNames[month]();
};

/**
 * Get month number with leading zero
 * @param {Date} date - The date object
 * @param {boolean} useLocalTime - Whether to use local time or UTC
 * @returns {string} Month with leading zero (e.g., "01", "12")
 */
const getMonthWithLeadingZero = (date, useLocalTime) => {
  const month = getMonth(date, useLocalTime);
  return numberToStringWithLeadingZero(month, 2);
};

/**
 * Get 2-digit year
 * @param {Date} date - The date object
 * @param {boolean} useLocalTime - Whether to use local time or UTC
 * @returns {string} 2-digit year (e.g., "24", "99")
 */
const getTwoDigitYear = (date, useLocalTime) => {
  const year = getFullYear(date, useLocalTime);
  return numberToStringWithLeadingZero(year % 100, 2);
};

/**
 * Get 4-digit year
 * @param {Date} date - The date object
 * @param {boolean} useLocalTime - Whether to use local time or UTC
 * @returns {string} 4-digit year (e.g., "2024", "1999")
 */
const getFourDigitYear = (date, useLocalTime) => {
  const year = getFullYear(date, useLocalTime);
  return numberToStringWithLeadingZero(year, 4);
};

// ============================================================================
// Date Format Functions
// ============================================================================

/**
 * Collection of date format functions
 * Each function takes a Date and optional timezone, returns formatted string
 */
const dateFormatFunctions = {
  "qq 'yy": (date, tz) => `${getQuarter(date, tz)} '${getTwoDigitYear(date, tz)}`,
  'qq yyyy': (date, tz) => `${getQuarter(date, tz)} ${getFourDigitYear(date, tz)}`,
  "dd MMM 'yy": (date, tz) => `${getDayWithLeadingZero(date, tz)} ${getShortMonthName(date, tz)} '${getTwoDigitYear(date, tz)}`,
  "MMM 'yy": (date, tz) => `${getShortMonthName(date, tz)} '${getTwoDigitYear(date, tz)}`,
  'MMM dd, yyyy': (date, tz) => `${getShortMonthName(date, tz)} ${getDayWithLeadingZero(date, tz)}, ${getFourDigitYear(date, tz)}`,
  'MMM yyyy': (date, tz) => `${getShortMonthName(date, tz)} ${getFourDigitYear(date, tz)}`,
  'MMM dd': (date, tz) => `${getShortMonthName(date, tz)} ${getDayWithLeadingZero(date, tz)}`,
  'dd MMM': (date, tz) => `${getDayWithLeadingZero(date, tz)} ${getShortMonthName(date, tz)}`,
  'yyyy-MM-dd': (date, tz) => `${getFourDigitYear(date, tz)}-${getMonthWithLeadingZero(date, tz)}-${getDayWithLeadingZero(date, tz)}`,
  'yy-MM-dd': (date, tz) => `${getTwoDigitYear(date, tz)}-${getMonthWithLeadingZero(date, tz)}-${getDayWithLeadingZero(date, tz)}`,
  'yy/MM/dd': (date, tz) => `${getTwoDigitYear(date, tz)}/${getMonthWithLeadingZero(date, tz)}/${getDayWithLeadingZero(date, tz)}`,
  'yyyy/MM/dd': (date, tz) => `${getFourDigitYear(date, tz)}/${getMonthWithLeadingZero(date, tz)}/${getDayWithLeadingZero(date, tz)}`,
  'dd-MM-yyyy': (date, tz) => `${getDayWithLeadingZero(date, tz)}-${getMonthWithLeadingZero(date, tz)}-${getFourDigitYear(date, tz)}`,
  'dd-MM-yy': (date, tz) => `${getDayWithLeadingZero(date, tz)}-${getMonthWithLeadingZero(date, tz)}-${getTwoDigitYear(date, tz)}`,
  'dd/MM/yy': (date, tz) => `${getDayWithLeadingZero(date, tz)}/${getMonthWithLeadingZero(date, tz)}/${getTwoDigitYear(date, tz)}`,
  'dd/MM/yyyy': (date, tz) => `${getDayWithLeadingZero(date, tz)}/${getMonthWithLeadingZero(date, tz)}/${getFourDigitYear(date, tz)}`,
  'MM/dd/yy': (date, tz) => `${getMonthWithLeadingZero(date, tz)}/${getDayWithLeadingZero(date, tz)}/${getTwoDigitYear(date, tz)}`,
  'MM/dd/yyyy': (date, tz) => `${getMonthWithLeadingZero(date, tz)}/${getDayWithLeadingZero(date, tz)}/${getFourDigitYear(date, tz)}`
};

/**
 * Create a date format function that includes weekday
 * For Japanese language, weekday appears after the date
 * For other languages, weekday appears before the date
 * 
 * @param {string} formatKey - Key from dateFormatFunctions
 * @param {string|undefined} timezone - Timezone identifier
 * @returns {Function} Function that formats date with weekday
 */
function getDateFormatWithWeekday(formatKey, timezone) {
  if (window.language === 'ja') {
    // Japanese: date first, then weekday in parentheses
    return (date, tz) => `${dateFormatFunctions[formatKey](date, tz)} (${getWeekdayShort(date, timezone)})`;
  } else {
    // Other languages: weekday first, then date
    return (date, tz) => `${getWeekdayShort(date, timezone)} ${dateFormatFunctions[formatKey](date, tz)}`;
  }
}

// ============================================================================
// Exports
// ============================================================================

/**
 * List of all available date format keys
 * @type {string[]}
 */
const availableDateFormats = Object.keys(dateFormatFunctions);

/**
 * Get the default date format based on current language
 * For CJK languages (Japanese, Korean, Chinese), use ISO format
 * For other languages, use European style (dd MMM 'yy)
 * 
 * @returns {string} Default date format key
 */
const defaultDateFormat = () => {
  const currentLanguage = window.language || '';
  const isCJKLanguage = ['ja', 'ko', 'zh', 'zh_TW'].includes(currentLanguage);
  return isCJKLanguage ? 'yyyy-MM-dd' : "dd MMM 'yy";
};

export {
  dateFormatFunctions,
  availableDateFormats,
  defaultDateFormat,
  getDateFormatWithWeekday
};
