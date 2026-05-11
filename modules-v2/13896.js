/**
 * Module 13896 - Line Tools Non-Invalidation Flag
 * 
 * Defines whether drawing/line tools affect chart invalidation.
 * Set to FALSE: Line tools do not trigger chart recalculation.
 * 
 * @module 13896-line-tools-constants
 */

"use strict";

/**
 * Flag indicating whether line tools affect chart invalidation
 * @constant {boolean} LINE_TOOLS_DO_NOT_AFFECT_CHART_INVALIDATION
 * @default false
 */
const LINE_TOOLS_DO_NOT_AFFECT_CHART_INVALIDATION = false;

/**
 * Export the flag for use by the charting system
 */
module.exports = {
    lineToolsDoNotAffectChartInvalidation: () => LINE_TOOLS_DO_NOT_AFFECT_CHART_INVALIDATION
};
