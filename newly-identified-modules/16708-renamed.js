// ============================================================================
// MODULE 16708 - SEMANTICALLY IDENTIFIED AS: deleteLockedLineTools
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 60%
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
 * Module 16708 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16708: (exports, module, require) => {
    "use strict";
    require.data(module, {
      DeleteLockedLineToolReason: () => state,
      confirmRemovingLockedLineTools: () => data,
      showDeleteLockedLineToolsConfirm: () => handler
    });
    var state, object = require(11542),
      nextValue = require(3615),
      result = require(5734),
      array = require(89947);
    ! function(exports) {
      exports[exports.RemoveSelected = 0] = "RemoveSelected", exports[exports.RemoveAll = 1] = "RemoveAll"
    }(state || (state = {}));
    const logger = object.module(null, void 0, require(41019)),
      config = object.module(null, void 0, require(41019));
    async function handler(exports, module) {
      if (result.doNotShowDeleteLockedLineConfirmProperty.value()) return void module(array.deleteLockedLineToolsProperty.value());
      const {
        getContent: handler
      } = await Promise.all([require.exports(7328), require.exports(3425), require.exports(6052), require.exports(1065), require.exports(4598)]).then(require.bind(require, 30627));
      (0, nextValue.showConfirm)({
        title: object.module(null, void 0, require(71692)),
        content: handler(exports === state.RemoveSelected ? logger : config),
        id: `${result.doNotShowDeleteLockedLineKey}-confirm`,
        mainButtonText: object.module(null, void 0, require(93123)),
        mainButtonIntent: "danger",
        cancelButtonText: object.module(null, void 0, require(99024)),
        onConfirm: ({
          dialogClose: exports
        }) => {
          result.doNotShowDeleteLockedLineConfirmProperty.value() && array.deleteLockedLineToolsProperty.setValue(!0), module(!
            0), exports()
        },
        onCancel: ({
          dialogClose: exports
        }) => {
          result.doNotShowDeleteLockedLineConfirmProperty.value() && array.deleteLockedLineToolsProperty.setValue(!1), module(!
            1), exports()
        }
      })
    }

    function data(exports) {
      return new Promise((module => {
        handler(exports, module)
      }))
    }