/**
 * ============================================================================
 * TRADINGVIEW MODULE 18330 - STYLE ENUMERATIONS
 * ============================================================================
 *
 * Purpose: Style enumerations for chart elements and positioning
 *
 * Size: 1.1 KB
 *
 * Enumerations:
 *   - HAlign: Horizontal alignment (left, center, right)
 *   - LineStyle: Line styles (solid, dotted, dashed)
 *   - MarkLocation: Mark locations (above, below, top, bottom, left, right)
 *
 * Features:
 *   - Style type definitions
 *   - Position alignment options
 *   - Line style options
 *   - Mark location options
 *
 * Exports:
 *   - HAlign: Horizontal alignment enumeration
 *   - LineStyle: Line style enumeration
 *   - MarkLocation: Mark location enumeration
 *
 * @module 18330
 * @category UI System
 * @subpackage Style Definitions
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    HAlign: () => HAlign,
    LineStyle: () => LineStyle,
    MarkLocation: () => MarkLocation
  });

  // Mark location enumeration
  !function(MarkLocation) {
    MarkLocation.AboveBar = "AboveBar";
    MarkLocation.BelowBar = "BelowBar";
    MarkLocation.Top = "Top";
    MarkLocation.Bottom = "Bottom";
    MarkLocation.Right = "Right";
    MarkLocation.Left = "Left";
    MarkLocation.Absolute = "Absolute";
    MarkLocation.AbsoluteUp = "AbsoluteUp";
    MarkLocation.AbsoluteDown = "AbsoluteDown";
  }(MarkLocation || (MarkLocation = {}));

  // Horizontal alignment enumeration
  !function(HAlign) {
    HAlign.Left = "left";
    HAlign.Center = "center";
    HAlign.Right = "right";
  }(HAlign || (HAlign = {}));

  // Vertical alignment enumeration
  !function(VAlign) {
    VAlign.Top = "top";
    VAlign.Middle = "middle";
    VAlign.Bottom = "bottom";
  }(VAlign || (VAlign = {}));

  // Line style enumeration
  !function(LineStyle) {
    LineStyle[LineStyle.Solid = 0] = "Solid";
    LineStyle[LineStyle.Dotted = 1] = "Dotted";
    LineStyle[LineStyle.Dashed = 2] = "Dashed";
  }(LineStyle || (LineStyle = {}));
}
