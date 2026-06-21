/**
 * ============================================================================
 * TRADINGVIEW MODULE 14881 - HIDE STATE ENHANCED
 * ============================================================================
 *
 * Purpose: Enhanced hide state management with comprehensive type support
 *
 * Size: 0.4 KB
 *
 * Classes:
 *   - HideStateEnhanced: Enhanced hide state manager
 *
 * Features:
 *   - Hide state change management
 *   - Multiple hide types (drawings, indicators, positions, all)
 *   - Event delegation for state changes
 *   - State type enumeration
 *   - Flexible hide state configuration
 *
 * Dependencies:
 *   - 48096: Delegate utilities
 *
 * Exports:
 *   - HideStateEnhanced: Enhanced hide state class
 *   - hideStateChange: Hide state change function
 *
 * @module 14881
 * @category UI System
 * @subpackage Hide State Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.hideStateEnhanced_d(moduleConfig, {
    HideStateEnhanced: () => HideStateEnhanced,
    hideStateChange: () => hideStateChange
  });

  const DelegateUtils = moduleRequire(48096);

  /**
   * Hide state types enumeration
   */
  const HideStateTypes = {
    Drawings: "drawings",
    Indicators: "indicators", 
    Positions: "positions",
    All: "all"
  };

  /**
   * Initialize hide state defaults
   * @param {Object} config - Configuration object
   */
  function initializeHideStateDefaults(config) {
    return {
      ...config,
      hideTypes: HideStateTypes,
      defaultState: HideStateTypes.All
    };
  }

  /**
   * Enhanced hide state manager class
   */
  class HideStateEnhanced {
    constructor(options = {}) {
      this._currentState = options.initialState || HideStateTypes.All;
      this._previousState = null;
      this._stateHistory = [];
      this._eventDelegate = new DelegateUtils.Delegate();
      this._config = initializeHideStateDefaults(options);
    }

    /**
     * Get current hide state
     * @returns {string} Current hide state
     */
    getCurrentState() {
      return this._currentState;
    }

    /**
     * Set hide state
     * @param {string} state - New hide state
     */
    setHideState(state) {
      if (!Object.values(HideStateTypes).includes(state)) {
        throw new Error(`Invalid hide state: ${state}`);
      }

      this._previousState = this._currentState;
      this._currentState = state;
      
      // Add to history
      this._stateHistory.push({
        from: this._previousState,
        to: state,
        timestamp: Date.now()
      });

      // Fire state change event
      this._eventDelegate.fire('stateChanged', {
        from: this._previousState,
        to: state,
        timestamp: Date.now()
      });
    }

    /**
     * Get previous state
     * @returns {string|null} Previous hide state
     */
    getPreviousState() {
      return this._previousState;
    }

    /**
     * Get state history
     * @returns {Array} Array of state changes
     */
    getStateHistory() {
      return [...this._stateHistory];
    }

    /**
     * Check if drawings are hidden
     * @returns {boolean} True if drawings hidden
     */
    areDrawingsHidden() {
      return this._currentState === HideStateTypes.Drawings || 
             this._currentState === HideStateTypes.All;
    }

    /**
     * Check if indicators are hidden
     * @returns {boolean} True if indicators hidden
     */
    areIndicatorsHidden() {
      return this._currentState === HideStateTypes.Indicators || 
             this._currentState === HideStateTypes.All;
    }

    /**
     * Check if positions are hidden
     * @returns {boolean} True if positions hidden
     */
    arePositionsHidden() {
      return this._currentState === HideStateTypes.Positions || 
             this._currentState === HideStateTypes.All;
    }

    /**
     * Check if everything is hidden
     * @returns {boolean} True if all elements hidden
     */
    isAllHidden() {
      return this._currentState === HideStateTypes.All;
    }

    /**
     * Get event delegate
     * @returns {Delegate} Event delegate
     */
    getEventDelegate() {
      return this._eventDelegate;
    }

    /**
     * Toggle drawings visibility
     */
    toggleDrawings() {
      const newState = this.areDrawingsHidden() ? 
        HideStateTypes.Indicators : HideStateTypes.Drawings;
      this.setHideState(newState);
    }

    /**
     * Toggle indicators visibility
     */
    toggleIndicators() {
      const newState = this.areIndicatorsHidden() ? 
        HideStateTypes.Drawings : HideStateTypes.Indicators;
      this.setHideState(newState);
    }

    /**
     * Toggle positions visibility
     */
    togglePositions() {
      const newState = this.arePositionsHidden() ? 
        HideStateTypes.Indicators : HideStateTypes.Positions;
      this.setHideState(newState);
    }

    /**
     * Toggle all visibility
     */
    toggleAll() {
      const newState = this.isAllHidden() ? 
        HideStateTypes.Indicators : HideStateTypes.All;
      this.setHideState(newState);
    }

    /**
     * Reset to default state
     */
    resetToDefault() {
      this.setHideState(this._config.defaultState);
    }

    /**
     * Get state summary
     * @returns {Object} Current state summary
     */
    getStateSummary() {
      return {
        currentState: this._currentState,
        previousState: this._previousState,
        isDrawingsHidden: this.areDrawingsHidden(),
        isIndicatorsHidden: this.areIndicatorsHidden(),
        isPositionsHidden: this.arePositionsHidden(),
        isAllHidden: this.isAllHidden(),
        historyLength: this._stateHistory.length
      };
    }

    /**
     * Clear state history
     */
    clearHistory() {
      this._stateHistory = [];
    }

    /**
     * Destroy hide state manager
     */
    destroy() {
      this._eventDelegate.removeAllListeners();
      this._currentState = null;
      this._previousState = null;
      this._stateHistory = [];
    }
  }

  /**
   * Hide state change function
   * @param {Object} changeData - Change data object
   * @returns {boolean} True if state changed
   */
  function hideStateChange(changeData) {
    return changeData && 
           (changeData.drawingsChanged || 
            changeData.indicatorsChanged || 
            changeData.positionsChanged || 
            changeData.allChanged);
  }

  // Export enhanced hide state class and functions
  moduleExports.HideStateEnhanced = HideStateEnhanced;
  moduleExports.hideStateChange = hideStateChange;
  moduleExports.HideStateTypes = HideStateTypes;
}
