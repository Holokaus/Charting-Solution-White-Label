/**
 * Module 71382 - Touch Event Detector
 * 
 * Detects if an input event is a touch event.
 * Falls back to global touch detection if sourceCapabilities unavailable.
 * 
 * @module TouchEventDetector
 * @see Input capabilities module (32563)
 */

import { touch as isTouchDevice } from './32563-input-capabilities.js';

/**
 * Check if event is a touch event
 * @param {Event} event - Input event to check
 * @returns {boolean} True if event is from touch input
 */
export function isTouchEvent(event) {
  const capabilities = event.sourceCapabilities;
  let isTouch = capabilities && capabilities.firesTouchEvents;
  
  // Fallback to global touch detection if undefined
  if (isTouch === undefined) {
    isTouch = isTouchDevice;
  }
  
  return isTouch;
}

export default isTouchEvent;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → event (parameter)
// - t → capabilities (local constant)
// - i → isTouch (local variable)
// - s → inputCapabilities (touch property)
// - o → isTouchEvent (exported function)
// ============================================================================