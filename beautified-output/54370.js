/**
 * Module 54370 - All Chart Styles
 * 
 * Returns the complete list of available chart style IDs.
 * Conditionally includes HiLo and Japanese chart styles based on feature flags.
 * 
 * @module AllChartStyles
 * @see Feature flags module (37103)
 */

import { enabled as isFeatureEnabled } from './37103-feature-flags.js';

/**
 * Get all available chart style IDs
 * @returns {number[]} Array of chart style identifiers
 */
export function allChartStyles() {
  const baseStyles = [0, 1, 9, 13, 2, 14, 15, 3, 16, 10];
  
  // Add HiLo style if enabled
  if (isFeatureEnabled("chart_style_hilo")) {
    baseStyles.push(12);
  }
  
  // Always add additional styles
  baseStyles.push(21);
  
  // Add Japanese styles if enabled
  if (isFeatureEnabled("japanese_chart_styles")) {
    return baseStyles.concat([8]);
  }
  
  return baseStyles;
}

export default allChartStyles;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → baseStyles (local array)
// - t → unused
// - i → unused
// - s → featureFlags (enabled function)
// - o → allChartStyles (exported function)
// ============================================================================