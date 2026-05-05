/**
 * Module: 81360
 * Semantic: lineToolUtils
 * Confidence: 40.0%
 * Generated: 2026-05-03T17:50:27.880Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 81360 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

81360: (exports, module, i) => {
    "use strict";
    require.d(module, {
      lineToolsSelectHotkeys: () => o
    });
    i(40167);
    var state = i(68335);
    const object = {
      LineToolFibRetracement: {
        hash: state.Modifiers.Alt + 70,
        action: "setTool",
        description: "Draw Fib Retracement"
      },
      LineToolHorzLine: {
        hash: state.Modifiers.Alt + 72,
        action: "drawRightThere",
        description: "Draw Horizontal Line here"
      },
      LineToolHorzRay: {
        hash: state.Modifiers.Alt + 74,
        action: "drawRightThere",
        description: "Draw Horizontal Ray here"
      },
      LineToolRectangle: {
        hash: state.Modifiers.Alt + state.Modifiers.Shift + 82,
        action: "setTool",
        description: "Draw Rectangle"
      },
      LineToolTrendLine: {
        hash: state.Modifiers.Alt + 84,
        action: "setTool",
        description: "Draw Trend Line"
      },
      LineToolVertLine: {
        hash: state.Modifiers.Alt + 86,
        action: "drawRightThere",
        description: "Draw Vertical Line here"
      },
      LineToolCrossLine: {
        hash: state.Modifiers.Alt + 67,
        action: "drawRightThere",
        description: "Draw Cross Line here"
      }
    }