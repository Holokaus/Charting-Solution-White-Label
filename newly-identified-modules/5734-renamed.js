// ============================================================================
// MODULE 5734 - SEMANTICALLY IDENTIFIED AS: deleteLockedLineTools
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 65%
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
 * Module 5734 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

5734: (exports, module, require) => {
    "use strict";
    require.data(module, {
      doNotShowDeleteLockedLineConfirmProperty: () => array,
      doNotShowDeleteLockedLineKey: () => nextValue
    });
    var settingsAdapter = require(1765),
      object = require(41072);
    const nextValue = "do_not_show_delete_locked_line_confirm";

    function result() {
      return settingsAdapter.getBool(nextValue, !1)
    }
    const array = (0, object.createPrimitiveProperty)(result());
    array.subscribe(null, (() => settingsAdapter.setValue(nextValue, array.value()))), settingsAdapter.onSync.subscribe(null, (() => array
      .setValue(result())))