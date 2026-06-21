/**
 * ============================================================================
 * TRADINGVIEW MODULE 14881 - HIDE STATE CHANGES
 * ============================================================================
 *
 * Purpose: Hide state change management for UI elements
 *
 * Size: 0.6 KB
 *
 * Function: hideStateChange()
 *   - Creates delegate for hide state changes
 *   - Manages visibility of different UI elements
 *   - Supports drawings, indicators, positions, and all elements
 *
 * UI Elements:
 *   - Drawings: Drawing tools visibility
 *   - Indicators: Technical indicators visibility
 *   - Positions: Trading positions visibility
 *   - All: All elements visibility
 *
 * Dependencies:
 *   - 48096: Delegate class
 *
 * Exports:
 *   - hideStateChange: Hide state change delegate
 *
 * @module 14881
 * @category UI System
 * @subpackage Visibility Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  let hideStateTypes;
  moduleRequire.moduleRequire_d(moduleConfig, {
    hideStateChange: () => hideStateChange
  });

  const Delegate = moduleRequire(48096);

  /**
   * Create hide state change enumeration
   * @param {Object} types - Type definitions
   */
  function createHideStateChange(types) {
    types[types.Drawings = "drawings"] = "Drawings";
    types[types.Indicators = "indicators"] = "Indicators";
    types[types.Positions = "positions"] = "Positions";
    types[types.All = "all"] = "All";
  }

  // Create hide state types
  createHideStateChange(hideStateTypes || (hideStateTypes = {}));

  /**
   * Create hide state change delegate
   * @returns {Delegate} Hide state change delegate
   */
  const hideStateChange = new Delegate.Delegate();
}
