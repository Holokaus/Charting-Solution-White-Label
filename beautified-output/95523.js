/**
 * Module 95523 - Timezone Offset Parser
 * 
 * Parses timezone strings and calculates UTC offsets.
 * Returns offset in milliseconds and formatted UTC string.
 * 
 * @module TimezoneOffsetParser
 * @see Timezone utilities (37236)
 */

import { get_timezone } from './37236-timezone-utilities.js';

/**
 * Parse timezone and return offset information
 * @param {string} timezone - Timezone identifier
 * @param {number} timestamp - Reference timestamp (default: now)
 * @returns {Object} Offset data with {offset, string} properties
 */
export function parseTzOffset(timezone, timestamp = Date.now()) {
  const offsetMs = get_timezone(timezone).offset_utc(timestamp);
  
  // Calculate hours and minutes
  const hours = offsetMs / 1000 / 60 / 60;
  const isFractional = hours % 1 !== 0;
  const minutes = isFractional ? ":" + Math.round(Math.abs(hours % 1 * 60)).toString().padStart(2, "0") : "";
  
  // Format UTC string
  let utcString;
  if (hours > 0) {
    utcString = "+" + Math.floor(hours) + minutes;
  } else if (hours === 0) {
    utcString = "";
  } else {
    utcString = String(Math.floor(hours) + minutes);
  }
  
  return {
    offset: offsetMs,
    string: "UTC" + utcString
  };
}

export default parseTzOffset;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → timezone (parameter)
// - t → timestamp (parameter with default)
// - i → offsetMs (offset in milliseconds)
// - s → timezoneUtils (get_timezone function)
// - o → minutesString (fractional minutes suffix)
// - n → hours (calculated hours)
// - r → utcString (formatted UTC string)
// ============================================================================