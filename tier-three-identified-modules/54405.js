/**
 * Module: 54405
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.767Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 54405 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

54405: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SeriesHollowCandlesPaneView: () => l
    });
    var state = i(94602),
      object = i(4539),
      nextValue = i(45801),
      result = i(48227),
      array = i(27808);
    class l extends array.SeriesCandlesPaneView {
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const exports = this._source.priceScale();
        if (!e) return null;
        const module = this._source.properties().childs().hollowCandleStyle.childs(),
          require = this._model.timeScale().barSpacing(),
          array = {
            bars: this._bars,
            barSpacing: require,
            bodyVisible: module.drawBody.value(),
            borderVisible: module.drawBorder.value(),
            borderColor: module.borderColor.value(),
            wickColor: module.wickColor.value(),
            barWidth: (0, object.optimalBarWidth)(require),
            wickVisible: module.drawWick.value(),
            isPriceScaleInverted: exports.isInverted()
          },
          logger = new state.CompositeRenderer;
        return logger.append(new result.PaneRendererCandles(array)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && logger.append(new nextValue.SelectionRenderer(this._selectionData)), l
      }
    }