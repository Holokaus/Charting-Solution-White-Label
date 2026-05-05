/**
 * Module: 62802
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.850Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 62802 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

62802: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SeriesBarsPaneView: () => a
    });
    var state = i(94602),
      object = i(45801),
      nextValue = i(68735),
      result = i(64138);
    class a extends nextValue.SeriesBarCandlesPaneView {
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const exports = this._source.properties().childs(),
          module = {
            bars: this._bars,
            dontDrawOpen: exports.barStyle.childs().dontDrawOpen.value(),
            thinBars: 11 === exports.style.value() ? exports.rangeStyle.childs().thinBars.value() : exports.barStyle.childs().thinBars
              .value()
          },
          require = new state.CompositeRenderer;
        return require.append(new result.PaneRendererBars(module)),
          this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && i
          .append(new object.SelectionRenderer(this._selectionData)), i
      }
      _createItem(exports, module, i) {
        const state = {
          center: NaN,
          open: NaN,
          high: NaN,
          low: NaN,
          close: NaN,
          color: require.barColor,
          left: NaN,
          right: NaN,
          timePointIndex: e
        };
        return (0, nextValue.baseBarCandlesUpdater)(module, s) ? s : null
      }
    }