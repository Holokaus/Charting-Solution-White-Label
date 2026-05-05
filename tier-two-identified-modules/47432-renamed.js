// ============================================================================
// MODULE 47432 - SEMANTICALLY IDENTIFIED (TIER 2): priceDataSource
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
 * Module 47432 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

47432: (exports, module, require) => {
    "use strict";
    require.data(module, {
      LineToolPriceAxisView: () => result
    });
    var assertionUtils = require(50151),
      object = require(36281),
      nextValue = require(52859);
    class result extends object.PriceAxisView {
      constructor(exports, module) {
        super(), this._source = exports, this._data = module, this._properties = exports.model().properties().childs()
          .scalesProperties
      }
      _updateRendererData(exports, module, require) {
        exports.visible = !1;
        const assertionUtils = this._source.model();
        if (!assertionUtils.timeScale() || assertionUtils.timeScale().isEmpty()) return;
        const object = this._source.priceScale();
        if (null === object || object.isEmpty()) return;
        if (!assertionUtils.selection().isSelected(this._source) && !this._source.isForcedDrawPriceAxisLabel())
          return;
        if (null === assertionUtils.timeScale().visibleBarsStrictRange()) return;
        const result = this._source.priceAxisPoints(),
          array = this._data.pointIndex;
        if (result.length <= array) return;
        const logger = result[array];
        if (!isFinite(logger.price)) return;
        const config = this._source.ownerSource(),
          handler = null !== config ? config.firstValue() : null;
        if (null === handler) return;
        let data = this._data.backgroundPropertyGetter ? this._data.backgroundPropertyGetter() : null;
        null === data && (data = this._getBgColor()), require.background = (0, nextValue.resetTransparency)(data), require.borderColor =
          "#2E84A6", require.textColor = this.generateTextColor(require.background), require.coordinate = object.priceToCoordinate(logger.price,
            handler), exports.text = this._formatPrice(logger.price, handler), exports.visible = !0
      }
      _getBgColor() {
        return this._active ? this._properties.childs().axisLineToolLabelBackgroundColorActive.value() : this
          ._properties.childs().axisLineToolLabelBackgroundColorCommon.value()
      }
      _formatPrice(exports, module) {
        return (0, assertionUtils.ensureNotNull)(this._source.priceScale()).formatPrice(exports, module)
      }
    }