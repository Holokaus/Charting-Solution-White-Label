// ============================================================================
// MODULE 11768 - SEMANTICALLY IDENTIFIED AS: series
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 75%
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
 * Module 11768 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

11768: (exports, module, require) => {
    "use strict";
    require.data(module, {
      SeriesTableViewValuesProvider: () => array,
      fillSymbolSourceValuesProviderItemsVisibility: () => result
    });
    var state = require(3885),
      object = require(95059),
      nextValue = require(31789);

    function result(exports, module, require, state) {
      const result = 12 !== require,
        array = state.properties().childs().paneProperties.childs().legendProperties.childs(),
        logger = 12 !== require && 16 !== require && 21 !== require,
        config = 12 !== require,
        handler = (0, object.isPriceSourceStyle)(require),
        data = !handler;
      exports[5].visible = !1;
      const utility = state.mainSeries().intervalObj().value().is1Tick();
      exports[0].visible = data && logger && !utility, exports[1].visible = data && !utility, exports[2].visible = data && !utility, exports[3].visible = data && config, exports[6].visible =
        array.showBarChange.value() && result, exports[4].visible = handler, exports[4].title = module ? nextValue.priceSourceTitles[module] : ""
    }
    class array {
      constructor(exports, module) {
        this._model = module, this._series = exports, this._valuesProvider = new state.SeriesValuesProvider(exports, module, !1)
      }
      getItems() {
        const exports = this._valuesProvider.getItems(),
          module = this._series.style();
        result(exports, this._series.priceSource(), module, this._model);
        const require = this._model.properties().childs().paneProperties.childs().legendProperties.childs();
        return exports[8].visible = !1, exports[7].visible = require.showVolume.value(), exports
      }
      getValues(exports) {
        const module = this._series.bars().lastIndex();
        return null === module || module < exports ? null : this._valuesProvider.getValues(exports)
      }
    }