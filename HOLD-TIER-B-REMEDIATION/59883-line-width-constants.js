/**
 * ============================================================================
 * TRADINGVIEW MODULE 59883 - LINE TOOL WIDTH CONSTANTS
 * ============================================================================
 *
 * Purpose: Default line width constant for drawing tools
 *
 * Size: 0.4 KB
 *
 * Exports:
 *   - DEFAULT_LINE_TOOL_LINE_WIDTH: number = 2
 *
 * @module 59883
 * @category Drawing Tools
 * @subcategory Line Properties
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    DEFAULT_LINE_TOOL_LINE_WIDTH: () => DEFAULT_LINE_WIDTH
  });
  const DEFAULT_LINE_WIDTH = 2;
}
