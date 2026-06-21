/**
 * Module 42516 - Series Bar Function Utilities
 *
 * @description Exports functions for determining if data sources affect chart state invalidation
 * @dependencies 
 *   - 97217 (isLineTool utility)
 *   - 13896 (line tools constants)
 * @exports sourcesAffectState
 */

const { isLineTool } = require('./97217-line-tool-manager-utils');
const { lineToolsDoNotAffectChartInvalidation } = require('./13896-line-tools-constants');

/**
 * Determines whether a collection of sources should trigger chart state invalidation
 * 
 * Chart invalidation is the process of redrawing/updating the chart when data changes.
 * Some sources (like certain line tools) may not require full chart invalidation.
 *
 * @param {Array<Object>} sources - Array of source objects to evaluate
 * @returns {boolean} true if the sources should trigger chart state invalidation
 * 
 * @example
 * // Check if adding these sources requires chart redraw
 * const shouldInvalidate = sourcesAffectState([tool1, tool2, indicator1]);
 * if (shouldInvalidate) {
 *     chart.invalidate(); // Redraw the chart
 * }
 */
function sourcesAffectState(sources) {
  // If line tools don't affect invalidation, check if any source is NOT a line tool
  // If all sources are line tools and they don't affect invalidation, return false
  if (!lineToolsDoNotAffectChartInvalidation) {
    return true; // Always invalidate if line tools DO affect invalidation
  }
  
  // Return true if ANY source is not a line tool
  // (meaning: if all are line tools, we might skip invalidation)
  return sources.some(source => !isLineTool(source));
}

module.exports = {
  sourcesAffectState
};
