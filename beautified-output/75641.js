/**
 * Module 75641 - Translated Interval String
 * 
 * Translates interval identifiers to human-readable strings.
 * Supports both numeric intervals and special resolutions.
 * 
 * @module TranslatedIntervalString
 * @see Resolution model module (87296)
 */

import { getTranslatedResolutionModel } from './87296-resolution-model.js';

/**
 * Get translated string representation of an interval
 * @param {string} interval - Interval identifier (e.g., "1", "60", "1D")
 * @returns {string} Human-readable interval string
 */
export function translatedIntervalString(interval) {
  const resolutionModel = getTranslatedResolutionModel(interval, true);
  
  if (resolutionModel === null) {
    return interval;
  }
  
  const suffix = resolutionModel.mayOmitShortKind ? "" : resolutionModel.shortKind;
  return resolutionModel.multiplier + suffix;
}

export default translatedIntervalString;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → interval (parameter)
// - t → resolutionModel (local constant)
// - i → unused
// - s → resolutionModule (getTranslatedResolutionModel function)
// - o → translatedIntervalString (exported function)
// ============================================================================