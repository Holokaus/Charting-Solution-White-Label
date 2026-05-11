/**
 * Module 9753 - Header Toolbar Height Constants
 * 
 * Defines header toolbar height values for collapsed and expanded states.
 * Used for layout calculations in the charting interface.
 * 
 * @module HeaderToolbarHeights
 * @see CSS values module (41183)
 */

import { cssValues } from './41183-css-values.js';

/**
 * Header toolbar height when expanded (from CSS)
 * @type {number}
 */
export const HEADER_TOOLBAR_HEIGHT_EXPANDED = parseInt(cssValues["css-value-header-toolbar-height"]);

/**
 * Header toolbar height when collapsed
 * @type {number}
 */
export const HEADER_TOOLBAR_HEIGHT_COLLAPSED = 3;

export default {
  HEADER_TOOLBAR_HEIGHT_EXPANDED,
  HEADER_TOOLBAR_HEIGHT_COLLAPSED
};

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → unused
// - t → unused
// - i → unused
// - s → cssValues (CSS values import)
// - o → HEADER_TOOLBAR_HEIGHT_EXPANDED (constant)
// - n → HEADER_TOOLBAR_HEIGHT_COLLAPSED (constant)
// ============================================================================