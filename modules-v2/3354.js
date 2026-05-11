/**
 * Module 3354 - Chart Layout Management
 * 
 * This module provides utilities for managing chart layouts in TradingView.
 * It handles single and multi-chart layouts, layout expressions, and sizing operations.
 * 
 * Features:
 * - Layout type detection (single vs multiple)
 * - Layout validation
 * - Layout size calculations
 * - Layout expression parsing
 * 
 * @module 3354
 * @category Layout/Management
 */

import './26743-layout-extensions.js';
import './62548-layout-presets.js';

/**
 * Internal layout registry
 * Stores custom layout configurations
 * @private
 */
let layoutRegistry = {};

/**
 * Built-in single chart layout
 * The default layout showing one chart
 * 
 * @type {LayoutDefinition}
 * @constant
 */
const SINGLE_LAYOUT = {
  /** Display title */
  title: '1 chart',
  /** Number of charts in layout */
  count: 1,
  /** Layout type identifier */
  layoutType: 's',
  
  /**
   * Calculates size for a sublayout
   * @param {number} totalSize - Total available size
   * @param {number} index - Sublayout index
   * @returns {number} Size for the sublayout
   * @throws {RangeError} If index is invalid for single layout
   */
  sizer: (totalSize, index) => {
    if (index !== 0) {
      throw new RangeError('invalid index');
    }
    return totalSize;
  },
  
  /**
   * Returns layout splitters configuration
   * @returns {Array} Empty array for single layout
   */
  splitters: () => [],
  
  /**
   * Applies resize operation
   * @param {Object} params - Resize parameters
   * @returns {Object} Resize result
   */
  resizeApplier: (params) => params.output,
  
  /**
   * Synchronizes sublayouts by splitter
   * @param {Object} splitter - Splitter configuration
   * @returns {Object} Synced sublayout
   */
  syncSublayoutsBySplitter: (splitter) => splitter,
  
  /** Layout expression tree */
  expression: ['h', 0]
};

/**
 * All available layouts
 * Combines built-in and custom layouts
 * 
 * @type {Object<string, LayoutDefinition>}
 * @public
 */
export const layouts = {
  ...SINGLE_LAYOUT,
  ...layoutRegistry
};

/**
 * Checks if a layout code represents a single chart layout
 * 
 * @param {string} layoutCode - The layout code to check
 * @returns {boolean} True if single chart layout
 * @private
 */
function isSingleLayout(layoutCode) {
  return layoutCode === 's';
}

/**
 * Checks if a layout code represents a multiple chart layout
 * 
 * @param {string} layoutCode - The layout code to check
 * @returns {boolean} True if multiple chart layout
 * @public
 * 
 * @example
 * if (isMultipleLayout(currentLayout)) {
 *   showLayoutSplitOptions();
 * }
 */
export function isMultipleLayout(layoutCode) {
  return !isSingleLayout(layoutCode);
}

/**
 * Validates if a layout code is supported
 * 
 * @param {string} layoutCode - The layout code to validate
 * @returns {boolean} True if layout is supported
 * @public
 * 
 * @example
 * if (!isSupportedLayout(userLayout)) {
 *   fallbackToDefaultLayout();
 * }
 */
export function isSupportedLayout(layoutCode) {
  return isSingleLayout(layoutCode) || layoutRegistry.hasOwnProperty(layoutCode);
}

/**
 * Attempts to guess the most suitable layout for given context
 * Currently defaults to single chart layout
 * 
 * @param {any} context - Layout context (currently unused)
 * @returns {string} Layout code ('s' for single)
 * @public
 * 
 * @example
 * const suggestedLayout = tryGuessingTheMostSuitableLayout(chartContext);
 * applyLayout(suggestedLayout);
 */
export function tryGuessingTheMostSuitableLayout(context) {
  return 's';
}

/**
 * Layout definition structure
 * @typedef {Object} LayoutDefinition
 * @property {string} title - Human-readable title
 * @property {number} count - Number of charts
 * @property {string} layoutType - Layout type identifier
 * @property {Function} sizer - Size calculation function
 * @property {Function} splitters - Splitters configuration getter
 * @property {Function} resizeApplier - Resize operation applier
 * @property {Function} syncSublayoutsBySplitter - Sublayout synchronizer
 * @property {Array} expression - Layout expression tree
 */

/**
 * Default exports
 */
export default {
  layouts,
  isMultipleLayout,
  isSupportedLayout,
  tryGuessingTheMostSuitableLayout
};
