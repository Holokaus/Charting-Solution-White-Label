/**
 * Module 81360 - Auto-beautified from TradingView webpack bundle
 *
 * @module 81360
 * @date 2026-04-23
 * @size 820 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 40167, 68335
 *
 * Exports:
 *   - lineToolsSelectHotkeys (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  lineToolsSelectHotkeys: () => o
});
i(40167);
var s = i(68335);
const o = {
    LineToolFibRetracement: {
      hash: s.Modifiers.Alt + 70,
      action: "setTool",
      description: "Draw Fib Retracement"
    },
    LineToolHorzLine: {
      hash: s.Modifiers.Alt + 72,
      action: "drawRightThere",
      description: "Draw Horizontal Line here"
    },
    LineToolHorzRay: {
      hash: s.Modifiers.Alt + 74,
      action: "drawRightThere",
      description: "Draw Horizontal Ray here"
    },
    LineToolRectangle: {
      hash: s.Modifiers.Alt + s.Modifiers.Shift + 82,
      action: "setTool",
      description: "Draw Rectangle"
    },
    LineToolTrendLine: {
      hash: s.Modifiers.Alt + 84,
      action: "setTool",
      description: "Draw Trend Line"
    },
    LineToolVertLine: {
      hash: s.Modifiers.Alt + 86,
      action: "drawRightThere",
      description: "Draw Vertical Line here"
    },
    LineToolCrossLine: {
      hash: s.Modifiers.Alt + 67,
      action: "drawRightThere",
      description: "Draw Cross Line here"
    }
