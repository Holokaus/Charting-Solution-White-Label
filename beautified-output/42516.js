/**
 * Module 42516 - Sources Affect State
 * 
 * Determines if chart sources require invalidation/state updates.
 * Filters out line tools that don't affect chart state.
 * 
 * @module SourcesAffectState
 * @see Line tool checker (97217)
 * @see Line tool settings (13896)
 */

import { isLineTool } from './97217-line-tool-checker.js';
import { lineToolsDoNotAffectChartInvalidation } from './13896-line-tool-settings.js';

/**
 * Check if sources affect chart state
 * @param {Array} sources - Array of chart sources
 * @returns {boolean} True if sources require state update
 */
export function sourcesAffectState(sources) {
  return !lineToolsDoNotAffectChartInvalidation || sources.some(source => !isLineTool(source));
}

export default sourcesAffectState;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → sources (parameter)
// - t → unused
// - i → unused
// - s → lineToolChecker (isLineTool function)
// - o → lineToolSettings (lineToolsDoNotAffectChartInvalidation)
// - n → sourcesAffectState (exported function)
// ============================================================================