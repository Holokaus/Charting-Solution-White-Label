/**
 * ============================================================================
 * TRADINGVIEW MODULE 36947 - PITCHFORK STYLE ENUMERATIONS
 * ============================================================================
 *
 * Purpose: Style variations for Andrew's Pitchfork drawing tool
 *
 * Size: 0.7 KB
 *
 * Styles:
 *   - Original (0): Standard pitchfork with median line
 *   - Schiff (1): Schiff-modified pitchfork
 *   - Inside (2): Inside pitchfork (inverted)
 *   - Schiff2 (3): Alternative Schiff modification
 *
 * Exports:
 *   - LineToolPitchforkStyle: Enum defining pitchfork variations
 *
 * @module 36947
 * @category Drawing Tools
 * @subcategory Pitchfork Tool
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  var LineToolPitchforkStyle;
  moduleRequire.moduleRequire_d(moduleConfig, {
    LineToolPitchforkStyle: () => LineToolPitchforkStyle
  }),
  function(LineToolPitchforkStyle) {
    LineToolPitchforkStyle[LineToolPitchforkStyle.Original = 0] = "Original";
    LineToolPitchforkStyle[LineToolPitchforkStyle.Schiff = 1] = "Schiff";
    LineToolPitchforkStyle[LineToolPitchforkStyle.Inside = 2] = "Inside";
    LineToolPitchforkStyle[LineToolPitchforkStyle.Schiff2 = 3] = "Schiff2";
  }(LineToolPitchforkStyle || (LineToolPitchforkStyle = {}));
}
