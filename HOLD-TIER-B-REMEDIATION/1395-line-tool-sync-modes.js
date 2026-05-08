/**
 * ============================================================================
 * TRADINGVIEW MODULE 1395 - LINE TOOL SYNC MODES
 * ============================================================================
 *
 * Purpose: Enumeration for line tool synchronization modes
 *
 * Size: 0.6 KB
 *
 * Sync Modes:
 *   - Default: Normal synchronization (0)
 *   - ForceOn: Force synchronization enabled (1)
 *   - ForceOff: Force synchronization disabled (2)
 *
 * Used by:
 *   - Line tool management
 *   - Drawing synchronization
 *   - Chart state management
 *
 * Exports:
 *   - CreateLineToolSyncMode: Factory function for sync modes
 *
 * @module 1395
 * @category Drawing Tools
 * @subcategory Synchronization
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  let lineToolSyncModes;
  
  moduleRequire.moduleRequire_d(moduleConfig, {
    CreateLineToolSyncMode: () => CreateLineToolSyncMode
  });

  /**
   * Create line tool sync mode enumeration
   * @param {Object} modes - Mode definitions
   */
  function CreateLineToolSyncMode(modes) {
    modes[modes.Default = 0] = "Default";
    modes[modes.ForceOn = 1] = "ForceOn";
    modes[modes.ForceOff = 2] = "ForceOff";
  }
}
