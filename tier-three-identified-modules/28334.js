/**
 * Module: 28334
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.451Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 28334 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

28334: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SeriesHLCBarsPaneView: () => l
    });
    var state = i(94602),
      object = i(45801),
      nextValue = i(64138),
      result = i(62802);

    function a(exports) {
      return null != e
    }
    class l extends result.SeriesBarsPaneView {
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const exports = this._source.properties().childs(),
          module = {
            bars: this._bars,
            dontDrawOpen: !0,
            thinBars: exports.hlcBarsStyle.childs().thinBars.value()
          },
          require = new state.CompositeRenderer;
        return require.append(new nextValue.PaneRendererBars(module)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && require.append(new object.SelectionRenderer(this._selectionData)), i
      }
      _createItem(exports, module, i) {
        const state = t[2],
          object = t[3],
          nextValue = t[4];
        if (!a(state) || !a(object) || !a(nextValue)) return null;
        return {
          center: NaN,
          open: NaN,
          high: state,
          low: object,
          close: nextValue,
          color: require.barColor,
          left: NaN,
          right: NaN,
          timePointIndex: e
        }
      }
    }