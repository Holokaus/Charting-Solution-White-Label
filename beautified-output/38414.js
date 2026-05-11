/**
 * Module 38414 - DialogRenderer Class
 * 
 * Base dialog renderer with visibility management.
 * Provides container management and visibility state tracking.
 * 
 * @module DialogRenderer
 * @see WatchedValue module (22613)
 */

import { WatchedValue } from './22613-watched-value.js';

/**
 * Base dialog renderer class
 * @class DialogRenderer
 */
export class DialogRenderer {
  constructor() {
    this._container = document.createElement("div");
    this._visibility = new WatchedValue(false);
    this._rootInstance = null;
  }

  /**
   * Get readonly visibility state
   * @returns {WatchedValue} Visibility watched value
   */
  visible() {
    return this._visibility.readonly();
  }

  /**
   * Set dialog visibility
   * @param {boolean} isVisible - New visibility state
   * @private
   */
  _setVisibility(isVisible) {
    this._visibility.setValue(isVisible);
  }
}

export default DialogRenderer;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - s → WatchedValueClass (WatchedValue)
// - o → DialogRenderer (exported class)
// - e → isVisible (parameter)
// ============================================================================