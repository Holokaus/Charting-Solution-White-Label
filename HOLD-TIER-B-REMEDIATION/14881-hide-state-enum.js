/**
 * ============================================================================
 * TRADINGVIEW MODULE 14881 - HIDE STATE ENUMERATIONS
 * ============================================================================
 *
 * Purpose: Enumeration for hiding different UI elements and states
 *
 * Size: 0.6 KB
 *
 * States:
 *   - Drawings: Hide drawing tools
 *   - Indicators: Hide technical indicators
 *   - Positions: Hide position markers
 *   - All: Hide all elements
 *
 * Exports:
 *   - hideState: HideState enum with all states
 *   - hideStateDelegate: Delegate for hide state changes
 *
 * Dependencies:
 *   - 48096: Delegate class for event handling
 *
 * @module 14881
 * @category UI System
 * @subcategory Hide States
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    hideState: () => HideState,
    hideStateDelegate: () => hideStateDelegate
  });

  var HideState;
  const Delegate = moduleRequire(48096);

  // Hide state enumeration
  !function(HideState) {
    HideState[HideState.Drawings = "drawings"] = "Drawings";
    HideState[HideState.Indicators = "indicators"] = "Indicators";
    HideState[HideState.Positions = "positions"] = "Positions";
    HideState[HideState.All = "all"] = "All";
  }(HideState || (HideState = {}));

  // Delegate for hide state changes
  const hideStateDelegate = new Delegate.Delegate;
}
