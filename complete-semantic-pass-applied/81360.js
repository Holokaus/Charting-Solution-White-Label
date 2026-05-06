/**
 * Module 81360 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

81360: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      lineToolsSelectHotkeys: () => lineToolManager_o
    });
    lineToolManager_i(40167);
    var lineToolManager_s = lineToolManager_i(68335);
    const lineToolManager_o = {
      LineToolFibRetracement: {
        hash: lineToolManager_s.Modifiers.Alt + 70,
        action: "setTool",
        description: "Draw Fib Retracement"
      },
      LineToolHorzLine: {
        hash: lineToolManager_s.Modifiers.Alt + 72,
        action: "drawRightThere",
        description: "Draw Horizontal Line here"
      },
      LineToolHorzRay: {
        hash: lineToolManager_s.Modifiers.Alt + 74,
        action: "drawRightThere",
        description: "Draw Horizontal Ray here"
      },
      LineToolRectangle: {
        hash: lineToolManager_s.Modifiers.Alt + lineToolManager_s.Modifiers.Shift + 82,
        action: "setTool",
        description: "Draw Rectangle"
      },
      LineToolTrendLine: {
        hash: lineToolManager_s.Modifiers.Alt + 84,
        action: "setTool",
        description: "Draw Trend Line"
      },
      LineToolVertLine: {
        hash: lineToolManager_s.Modifiers.Alt + 86,
        action: "drawRightThere",
        description: "Draw Vertical Line here"
      },
      LineToolCrossLine: {
        hash: lineToolManager_s.Modifiers.Alt + 67,
        action: "drawRightThere",
        description: "Draw Cross Line here"
      }
    }