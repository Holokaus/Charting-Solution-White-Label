/**
 * ============================================================================
 * TRADINGVIEW MODULE 36947 - LINE TOOL PITCHFORK
 * ============================================================================
 *
 * Purpose: Line tool pitchfork style enumeration
 *
 * Size: 0.7 KB
 *
 * Enumerations:
 *   - LineToolPitchforkStyle: Pitchfork style enumeration
 *
 * Features:
 *   - Original pitchfork style
 *   - Schiff pitchfork style
 *   - Inside pitchfork style
 *
 * Dependencies:
 *   - None (standalone module)
 *
 * Exports:
 *   - LineToolPitchforkStyle: Pitchfork style enumeration
 *
 * @module 36947
 * @category Line Tools
 * @subpackage Pitchfork
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.lineToolManager_d(moduleConfig, {
    LineToolPitchforkStyle: () => LineToolPitchforkStyle
  });

  /**
   * Line tool pitchfork style enumeration
   */
  const LineToolPitchforkStyle = {
    Original: 0,
    Schiff: 1,
    Inside: 2
  };

  // Export the enumeration
  moduleExports.LineToolPitchforkStyle = LineToolPitchforkStyle;
}
