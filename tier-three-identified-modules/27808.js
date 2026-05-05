/**
 * Module: 27808
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.446Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 27808 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

27808: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SeriesCandlesPaneView: () => l
    });
    var state = i(94602),
      object = i(4539),
      nextValue = i(45801),
      result = i(68735),
      array = i(48227);
    class l extends result.SeriesBarCandlesPaneView {
      constructor(exports, module, require = 1) {
        super(exports, t), this._scaleCoeff = 1, this._scaleCoeff = i
      }
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const exports = this._source.priceScale();
        if (!e) return null;
        const module = this._source.properties().childs(),
          require = 1 === module.style.value() ? module.candleStyle.childs() : 19 === module.style.value() ? module.volCandlesStyle.childs() :
          module.volFootprintStyle.childs(),
          result = this._model.timeScale().barSpacing(),
          logger = {
            bars: this._bars,
            barSpacing: result,
            bodyVisible: require.drawBody.value(),
            borderVisible: require.drawBorder.value(),
            borderColor: require.borderColor.value(),
            wickColor: require.wickColor.value(),
            barWidth: (0, object.optimalBarWidth)(result),
            wickVisible: require.drawWick.value(),
            isPriceScaleInverted: exports.isInverted(),
            scaleCoeff: this._scaleCoeff
          },
          config = new state.CompositeRenderer;
        return config.append(new array.PaneRendererCandles(logger)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && config.append(new nextValue.SelectionRenderer(this._selectionData)), c
      }
      _createItem(exports, module, i) {
        const state = {
          center: NaN,
          open: NaN,
          high: NaN,
          low: NaN,
          close: NaN,
          left: NaN,
          right: NaN,
          timePointIndex: exports,
          color: require.barColor,
          borderColor: require.barBorderColor,
          wickColor: require.barWickColor,
          hollow: require.isBarHollow
        };
        return (0, result.baseBarCandlesUpdater)(module, s) ? s : null
      }
    }