/**
 * Module 81360 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

81360: (exports, t, i) => {
    "use strict";
    i.d(t, {
      lineToolsSelectHotkeys: () => o
    });
    i(40167);
    var studyIds = i(68335);
    const o = {
      LineToolFibRetracement: {
        hash: studyIds.Modifiers.Alt + 70,
        action: "setTool",
        description: "Draw Fib Retracement"
      },
      LineToolHorzLine: {
        hash: studyIds.Modifiers.Alt + 72,
        action: "drawRightThere",
        description: "Draw Horizontal Line here"
      },
      LineToolHorzRay: {
        hash: studyIds.Modifiers.Alt + 74,
        action: "drawRightThere",
        description: "Draw Horizontal Ray here"
      },
      LineToolRectangle: {
        hash: studyIds.Modifiers.Alt + studyIds.Modifiers.Shift + 82,
        action: "setTool",
        description: "Draw Rectangle"
      },
      LineToolTrendLine: {
        hash: studyIds.Modifiers.Alt + 84,
        action: "setTool",
        description: "Draw Trend Line"
      },
      LineToolVertLine: {
        hash: studyIds.Modifiers.Alt + 86,
        action: "drawRightThere",
        description: "Draw Vertical Line here"
      },
      LineToolCrossLine: {
        hash: studyIds.Modifiers.Alt + 67,
        action: "drawRightThere",
        description: "Draw Cross Line here"
      }
    }