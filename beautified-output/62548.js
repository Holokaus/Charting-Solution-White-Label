/**
 * Module 62548 - Layout Initial Sizing State
 * 
 * Calculates initial sizing state for chart layout panes.
 * Recursively handles nested layouts with percentage-based sizing.
 * 
 * @module LayoutInitialSizingState
 * @see Layout utilities (69708)
 * @see Layout dependencies (50151)
 */

import { isEmptyLayout } from './69708-layout-utilities.js';
import './50151-layout-dependencies.js';

/**
 * Calculate initial sizing state from layout configuration
 * @param {Array} layoutConfig - Layout configuration array
 * @returns {Array} Sizing state with percentages and substates
 */
export function layoutInitialSizingState(layoutConfig) {
  const [, ...childConfigs] = layoutConfig;
  
  return calculatePaneSizes(childConfigs);
}

/**
 * Calculate pane sizes from child configurations
 * @param {Array} childConfigs - Array of child pane configurations
 * @returns {Array} Pane sizes with percentages
 * @private
 */
function calculatePaneSizes(childConfigs) {
  const equalPercent = 1 / childConfigs.length;
  
  return childConfigs.map(childConfig => ({
    percent: equalPercent,
    substate: isEmptyLayout(childConfig) ? undefined : layoutInitialSizingState(childConfig)
  }));
}

export default layoutInitialSizingState;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → layoutConfig (parameter)
// - t → childConfigs (extracted children)
// - i → unused
// - s → layoutUtils (isEmptyLayout function as default import)
// - o → layoutInitialSizingState (exported function)
// - inner o → calculatePaneSizes (recursive call)
// ============================================================================