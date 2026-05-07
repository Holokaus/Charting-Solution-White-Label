/**
 * ============================================================================
 * TRADINGVIEW MODULE 13896 - CHART INVALIDATION CONSTANTS
 * ============================================================================
 *
 * Purpose: Flag indicating whether line tools affect chart invalidation
 *
 * Size: 0.4 KB
 *
 * Exports:
 *   - lineToolsDoNotAffectChartInvalidation: boolean = false
 *
 * Used by: Property change system to determine if chart needs re-render
 *
 * @module 13896
 * @category Drawing Tools
 * @subcategory Chart Invalidation
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    lineToolsDoNotAffectChartInvalidation: () => LINE_TOOLS_NO_INVALIDATION
  });
  const LINE_TOOLS_NO_INVALIDATION = false;
}
