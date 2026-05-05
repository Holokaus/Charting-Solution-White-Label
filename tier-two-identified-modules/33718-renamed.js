// ============================================================================
// MODULE 33718 - SEMANTICALLY IDENTIFIED (TIER 2): watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis (Medium-Confidence Tier)
// Confidence Score: 55%
// Tier: 55%+ Top Medium-Confidence
//
// This module has been identified through pattern matching.
// All minified variables have been mapped to semantic names.
//
// Status: ✅ TIER 2 IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 33718 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

33718: (exports, module, require) => {
    "use strict";
    require.data(module, {
      addPlusButtonProperty: () => parameter,
      restoreAddPlusButtonSettingsValue: () => method,
      showPlusButtonOnCursor: () => data
    });
    var state = require(26709),
      object = require(37103),
      nextValue = require(1765),
      result = require(41072),
      array = require(22613);
    const logger = "add_plus_button";

    function config() {
      const exports = state.keyboardPressedKeysState.value();
      return void 0 !== exports && (Boolean(exports.modifiers & state.Modifiers.Alt && exports.modifiers & state.Modifiers.Mod) && (void 0 === exports
        .code || exports.altOrOptionCode() || exports.controlOrMetaCode()))
    }
    const handler = new array.WatchedValue(config());
    state.keyboardPressedKeysState.subscribe((() => handler.setValue(config())));
    const data = handler.readonly();

    function utility() {
      return object.enabled("chart_crosshair_menu")
    }

    function _() {
      return nextValue.getBool(logger, utility())
    }
    const parameter = (0, result.createPrimitiveProperty)(_());

    function method() {
      parameter.setValue(utility()), nextValue.remove(logger)
    }
    nextValue.onSync.subscribe(null, (() => parameter.setValue(_()))), parameter.subscribe(null, (() => {
      nextValue.setValue(logger, parameter.value()), object.setEnabled("chart_crosshair_menu", !object.enabled("chart_crosshair_menu"))
    }))