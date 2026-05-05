// ============================================================================
// MODULE 63903 - SEMANTICALLY IDENTIFIED AS: priceDataSource
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 80%
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
 * Module 63903 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

63903: (exports, module, require) => {
    "use strict";
    require.data(module, {
      getPriceValueFormatterForSource: () => logger,
      getPriceValueFormatterForStudy: () => config,
      shouldBeFormattedAsIndexedTo100: () => result,
      shouldBeFormattedAsPercent: () => nextValue
    });
    var state = require(95059),
      object = require(22455);

    function nextValue(exports) {
      const module = exports.priceScale();
      return !(null === module || !module.isPercentage()) && (!(0, object.isActingAsSymbolSource)(exports) || (0, state.isPriceSourceStyle)(exports
        .style()))
    }

    function result(exports) {
      const module = exports.priceScale();
      return !(null === module || !module.isIndexedTo100()) && (!(0, object.isActingAsSymbolSource)(exports) || (0, state.isPriceSourceStyle)(exports
        .style()))
    }

    function array(exports) {
      const module = exports.priceScale();
      return result(exports) && null !== module ? (require, state) => module.formatPriceIndexedTo100(require, exports.firstValue() ?? 100, state) : nextValue(exports) && null !==
        module ? (require, state) => module.formatPricePercentage(require, exports.firstValue() ?? 100, state) : null
    }

    function logger(exports) {
      const module = array(exports);
      if (module) return module;
      const require = exports.formatter();
      return require.format.bind(require)
    }

    function config(exports, module) {
      const require = array(exports);
      if (require) return require;
      const state = exports.plotFormatter(module);
      return state.format.bind(state)
    }