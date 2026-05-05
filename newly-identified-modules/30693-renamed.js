// ============================================================================
// MODULE 30693 - SEMANTICALLY IDENTIFIED AS: priceDataSource
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 70%
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
 * Module 30693 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

30693: (exports, module, require) => {
    "use strict";
    require.data(module, {
      PriceLineAxisView: () => logger,
      SeriesPriceLineAxisView: () => config,
      StudyPriceLineAxisView: () => handler
    });
    var state = require(36281),
      object = require(50151),
      nextValue = require(69558),
      result = require(58221);
    class array {
      constructor(exports, module) {
        this.setData(exports, module)
      }
      setData(exports, module) {
        this._data = exports, this._commonData = module
      }
      draw(exports, module, require, state, array) {
        if (!this._data.visible) return;
        const {
          bitmapSize: logger,
          verticalPixelRatio: config
        } = module, handler = this._commonData.fixedCoordinate ?? this._commonData.coordinate;
        exports.lineWidth = Math.max(1, Math.floor((0, object.ensureDefined)(this._data.linewidth) * config)), exports.lineCap = "butt", (0,
            result.setLineStyle)(exports, void 0 === this._data.linestyle ? nextValue.LINESTYLE_DOTTED : this._data.linestyle), exports
          .strokeStyle = this._commonData.textColor, (0, result.drawHorizontalLine)(exports, Math.round(handler * config), 0, logger.width)
      }
      topBottomTotalHeight(exports) {
        return {
          top: 0,
          bottom: 0,
          total: 0
        }
      }
    }
    class logger extends state.PriceAxisView {
      constructor(exports) {
        super(exports || array)
      }
      ignoreAlignment() {
        return !0
      }
      _updateRendererData(exports, module, require) {
        if (module.visible = !1, exports.visible = !1, !this._isVisible()) return;
        const state = this._value();
        state.noData || (require.background = "", require.textColor = this._priceLineColor(state.color), require.coordinate = state.coordinate, require
          .floatCoordinate = state.floatCoordinate, exports.linewidth = this._lineWidth(), exports.linestyle = this._lineStyle(),
          exports.backgroundAreaVisible = this._backgroundAreaVisible(), exports.backgroundAreaColor = this
          ._backgroundAreaColor(), exports.backgroundAreaHeight = this._backgroundAreaHeight(), exports.visible = !0)
      }
      _lineStyle() {
        return nextValue.LINESTYLE_DOTTED
      }
      _backgroundAreaVisible() {
        return !1
      }
      _backgroundAreaColor() {
        return ""
      }
      _backgroundAreaHeight() {
        return 0
      }
    }
    class config extends logger {
      constructor(exports) {
        super(), this._series = exports
      }
      _value() {
        return this._series.lastValueData(void 0, !0)
      }
      _priceLineColor(exports) {
        return this._series.priceLineColor(exports)
      }
      _lineWidth() {
        return this._series.properties().childs().priceLineWidth.value()
      }
      _isVisible() {
        const exports = this._series.model().properties().childs().scalesProperties.childs().showSeriesLastValue.value();
        return this._series.properties().childs().showPriceLine.value() && exports
      }
    }
    class handler extends logger {
      constructor(exports, module) {
        super(), this._study = exports, this._plotname = module
      }
      update(exports) {
        "hover-change" !== exports.type && super.update(exports)
      }
      _value() {
        return this._study.lastValueData(this._plotname, !0)
      }
      _lineWidth() {
        return this._study.properties().childs().styles.childs()[this._plotname].childs().linewidth.value()
      }
      _lineStyle() {
        return nextValue.LINESTYLE_DOTTED
      }
      _priceLineColor(exports) {
        return exports
      }
      _isVisible() {
        const exports = this._study.model().properties().childs().scalesProperties.childs().showStudyLastValue.value(),
          module = this._study.isPlotVisibleAt(this._plotname, 1);
        return this._study.properties().childs().styles.childs()[this._plotname].childs().trackPrice.value() && exports && module
      }
    }