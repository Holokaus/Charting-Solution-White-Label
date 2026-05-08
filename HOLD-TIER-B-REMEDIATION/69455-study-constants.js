/**
 * ============================================================================
 * TRADINGVIEW MODULE 69455 - STUDY CONSTANTS ENUMERATIONS
 * ============================================================================
 *
 * Purpose: Enumeration constants for study input types and properties
 *
 * Size: 2.4 KB
 *
 * Constants:
 *   - Input types: Text, Integer, Float, Price, Session, Resolution, etc.
 *   - Study types: None, DataWindow, StatusLine, All
 *   - Input flags: Hidden, Visible, Inline, Group
 *   - Special types: Symbol, Source, Time, BarTime, Color
 *
 * Used by:
 *   - Study input validation
 *   - Study configuration
 *   - Study property management
 *
 * Exports:
 *   - StudyInputType: Input type enumeration
 *   - StudyType: Study type enumeration
 *   - StudyInputFlag: Input flag enumeration
 *   - StudySpecialInputType: Special input type enumeration
 *
 * @module 69455
 * @category Technical Indicators
 * @subcategory Study Constants
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";

  // Study input type enumeration
  !function(StudyInputType) {
    StudyInputType[StudyInputType.Text = "text"] = "Text";
    StudyInputType[StudyInputType.Integer = "integer"] = "Integer";
    StudyInputType[StudyInputType.Float = "float"] = "Float";
    StudyInputType[StudyInputType.Price = "price"] = "Price";
    StudyInputType[StudyInputType.Session = "session"] = "Session";
    StudyInputType[StudyInputType.Resolution = "resolution"] = "Resolution";
    StudyInputType[StudyInputType.Source = "source"] = "Source";
    StudyInputType[StudyInputType.Symbol = "symbol"] = "Symbol";
    StudyInputType[StudyInputType.Time = "time"] = "Time";
    StudyInputType[StudyInputType.BarTime = "bar_time"] = "BarTime";
    StudyInputType[StudyInputType.Color = "color"] = "Color";
    StudyInputType[StudyInputType.Textarea = "text_area"] = "Textarea";
  }(StudyInputType || (StudyInputType = {}));

  // Study type enumeration
  !function(StudyType) {
    StudyType[StudyType.None = 0] = "None";
    StudyType[StudyType.DataWindow = 2] = "DataWindow";
    StudyType[StudyType.StatusLine = 8] = "StatusLine";
    StudyType[StudyType.All = 15] = "All";
  }(StudyType || (StudyType = {}));

  // Study input flag enumeration
  !function(StudyInputFlag) {
    StudyInputFlag[StudyInputFlag.Hidden = 0] = "Hidden";
    StudyInputFlag[StudyInputFlag.Visible = 1] = "Visible";
    StudyInputFlag[StudyInputFlag.Inline = 2] = "Inline";
    StudyInputFlag[StudyInputFlag.Group = 3] = "Group";
  }(StudyInputFlag || (StudyInputFlag = {}));

  // Special input type enumeration
  !function(StudySpecialInputType) {
    StudySpecialInputType[StudySpecialInputType.None = 0] = "None";
    StudySpecialInputType[StudySpecialInputType.DataWindow = 2] = "DataWindow";
    StudySpecialInputType[StudySpecialInputType.StatusLine = 8] = "StatusLine";
    StudySpecialInputType[StudySpecialInputType.All = 15] = "All";
  }(StudySpecialInputType || (StudySpecialInputType = {}));

  moduleRequire.moduleRequire_d(moduleConfig, {
    StudyInputType: () => StudyInputType,
    StudyType: () => StudyType,
    StudyInputFlag: () => StudyInputFlag,
    StudySpecialInputType: () => StudySpecialInputType
  });
}
