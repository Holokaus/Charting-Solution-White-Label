/**
 * Module 15574 - Ticks Resolution Check
 * 
 * Checks if tick-based resolution is enabled for the current chart configuration.
 * Used to determine if tick-by-tick data should be displayed.
 * 
 * @module TicksResolutionCheck
 * @see Feature flags module (37103)
 */

import { enabled as isFeatureEnabled } from './37103-feature-flags.js';

/**
 * Check if tick resolution feature is enabled
 * @returns {boolean} True if tick resolution is enabled
 */
export function isTicksEnabled() {
  return isFeatureEnabled("tick_resolution");
}

export default isTicksEnabled;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → unused (module context)
// - t → unused (module exports)
// - i → unused (module loader)
// - s → featureFlags (enabled function)
// - o → isTicksEnabled (exported function)
// ============================================================================