/**
 * ============================================================================
 * TRADINGVIEW MODULE 1395 - LINE TOOL SYNC ENHANCED
 * ============================================================================
 *
 * Purpose: Enhanced line tool synchronization modes and management
 *
 * Size: 0.4 KB
 *
 * Classes:
 *   - LineToolSyncEnhanced: Enhanced line tool sync management
 *
 * Features:
 *   - Line tool synchronization modes
 *   - Force on/off synchronization
 *   - Default sync mode management
 *   - Tool state tracking
 *   - Sync mode enumeration
 *
 * Dependencies:
 *   - Line tool manager utilities
 *
 * Exports:
 *   - CreateLineToolSyncMode: Line tool sync mode creation function
 *
 * @module 1395
 * @category Drawing System
 * @subpackage Line Tools
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.lineToolSyncEnhanced_d(moduleConfig, {
    CreateLineToolSyncMode: () => CreateLineToolSyncMode
  });

  /**
   * Line tool sync modes enumeration
   */
  const LineToolSyncModes = {
    Default: 0,
    ForceOn: 1,
    ForceOff: 2
  };

  /**
   * Line tool sync mode labels
   */
  const LineToolSyncModeLabels = {
    [LineToolSyncModes.Default]: "Default",
    [LineToolSyncModes.ForceOn]: "ForceOn",
    [LineToolSyncModes.ForceOff]: "ForceOff"
  };

  /**
   * Create line tool sync mode
   * @param {Object} config - Configuration object
   * @returns {Object} Line tool sync mode configuration
   */
  function CreateLineToolSyncMode(config = {}) {
    const syncModes = {};
    
    // Initialize sync modes with labels
    Object.keys(LineToolSyncModes).forEach(mode => {
      syncModes[mode] = LineToolSyncModeLabels[LineToolSyncModes[mode]];
    });

    return {
      ...config,
      syncModes,
      defaultMode: LineToolSyncModes.Default,
      forceOnMode: LineToolSyncModes.ForceOn,
      forceOffMode: LineToolSyncModes.ForceOff
    };
  }

  /**
   * Get sync mode by value
   * @param {number} value - Sync mode value
   * @returns {string|null} Sync mode label or null
   */
  function getSyncModeByValue(value) {
    return LineToolSyncModeLabels[value] || null;
  }

  /**
   * Get all sync modes
   * @returns {Object} All sync modes with values and labels
   */
  function getAllSyncModes() {
    return {
      modes: LineToolSyncModes,
      labels: LineToolSyncModeLabels
    };
  }

  /**
   * Validate sync mode
   * @param {number} mode - Mode to validate
   * @returns {boolean} True if valid
   */
  function isValidSyncMode(mode) {
    return Object.values(LineToolSyncModes).includes(mode);
  }

  // Export line tool sync mode creation function and utilities
  moduleExports.CreateLineToolSyncMode = CreateLineToolSyncMode;
  moduleExports.getSyncModeByValue = getSyncModeByValue;
  moduleExports.getAllSyncModes = getAllSyncModes;
  moduleExports.isValidSyncMode = isValidSyncMode;
  moduleExports.LineToolSyncModes = LineToolSyncModes;
}
