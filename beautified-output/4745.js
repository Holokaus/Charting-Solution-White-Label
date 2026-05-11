/**
 * Module 4745 - Spread Actions and Keypress Utilities
 * 
 * Provides feature flag checks for spread operations and global keypress validation.
 * Used to determine UI visibility and keyboard event handling.
 * 
 * @module SpreadActionsUtilities
 * @see Feature flags module (37103)
 */

import { enabled as isFeatureEnabled } from './37103-feature-flags.js';

/**
 * Check if spread operators feature is enabled
 * @returns {boolean} True if spread actions should be shown
 */
export function canShowSpreadActions() {
  return isFeatureEnabled("show_spread_operators");
}

/**
 * Check if keypress event should be processed globally
 * Filters out control keys, meta keys, and input field events
 * @param {KeyboardEvent} event - Keyboard event to check
 * @returns {boolean} True if keypress should be processed
 */
export function globalKeypressMatches(event) {
  // Skip control and meta key combinations
  if (event.ctrlKey) return false;
  if (event.metaKey) return false;
  
  // Skip events without character codes
  if (!event.charCode) return false;
  
  // Skip low character codes (control characters)
  if (!event.which || event.which <= 32) return false;
  
  // Skip input fields and listboxes
  const target = event.target;
  if (!target) return true;
  
  const isInputField = /^(input|textarea)$/i.test(target.tagName);
  const isListbox = target.getAttribute("role") === "listbox";
  
  return !isInputField && !isListbox;
}

export default { canShowSpreadActions, globalKeypressMatches };

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → event (parameter)
// - t → target (extracted from event)
// - s → featureFlags (enabled function)
// - o → canShowSpreadActions (exported function)
// - n → globalKeypressMatches (exported function)
// ============================================================================