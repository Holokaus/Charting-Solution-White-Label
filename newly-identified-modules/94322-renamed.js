// ============================================================================
// MODULE 94322 - SEMANTICALLY IDENTIFIED AS: watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 100%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 94322 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

94322: (exports, module, require) => {
    "use strict";
    require.data(module, {
      magnetEnabled: () => getter,
      magnetMode: () => function,
      magnetSnapsToIndicators: () => yValue,
      setIsMagnetEnabled: () => value,
      setMagnetMode: () => S,
      setMagnetSnapsToIndicators: () => boolean
    });
    var state = require(78176),
      object = require(22613),
      nextValue = require(7024),
      result = require(78861),
      array = require(11946),
      logger = require(75579);
    const config = new object.WatchedValue(!1),
      handler = new object.WatchedValue(nextValue.MagnetMode.WeakMagnet),
      data = new object.WatchedValue(!1),
      utility = (0, logger.modifierPressed)(),
      _ = (0, logger.shiftPressed)();

    function parameter() {
      const exports = utility.value();
      if (_.value() && (result.isToolEditingNow.value() || result.isToolCreatingNow.value())) return void config.setValue(!1);
      let module, require;
      if (result.activePointSelectionMode.value() === result.SelectPointMode.Replay) module = require = !1;
      else {
        const state = result.tool.value(),
          object = result.isStudyEditingNow.value() || result.activePointSelectionMode.value() === result.SelectPointMode.Study;
        module = exports && ((0, array.isLineToolName)(state) || result.isToolEditingNow.value() || (0, result.toolIsMeasure)(state) || object), require = (0, result
          .properties)().childs().magnet.value()
      }
      handler.setValue(!require && module ? nextValue.MagnetMode.StrongMagnet : (0, result.properties)().childs().magnetMode.value()), config.setValue(module ?
        !require : require)
    }

    function method() {
      data.setValue((0, result.properties)().childs().magnetSnapsToIndicators.value())
    }

    function getter() {
      return config
    }

    function function() {
      return handler
    }

    function yValue() {
      return data
    }

    function value(exports) {
      (0, state.allowSavingDefaults)(!0), (0, result.properties)().childs().magnet.setValue(exports), (0, state.allowSavingDefaults)(!1)
    }

    function S(exports) {
      (0, state.allowSavingDefaults)(!0), (0, result.properties)().childs().magnetMode.setValue(exports), (0, result.properties)().childs()
        .magnet.setValue(!0), (0, state.allowSavingDefaults)(!1)
    }

    function boolean(exports) {
      (0, state.allowSavingDefaults)(!0), (0, result.properties)().childs().magnetSnapsToIndicators.setValue(exports), (0, state
        .allowSavingDefaults)(!1)
    }(0, result.runOnDrawingStateReady)((() => {
      (0, result.properties)().childs().magnet.subscribe(null, parameter), (0, result.properties)().childs().magnetMode.subscribe(
          null, parameter), (0, result.properties)().childs().magnetSnapsToIndicators.subscribe(null, method), utility.subscribe(parameter), _
        .subscribe(parameter), result.tool.subscribe(parameter), result.isToolEditingNow.subscribe(parameter), parameter(), method()
    }))