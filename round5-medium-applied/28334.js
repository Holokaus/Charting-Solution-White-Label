/**
 * Module 28334 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

28334: (e, t, i) => {
    "use strict";
    i.d(t, {
      SeriesHLCBarsPaneView: () => l
    });
    var s = i(94602),
      o = i(45801),
      n = i(64138),
      r = i(62802);

    function a(e) {
      return null != e
    }
    class l extends r.SeriesBarsPaneView {
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const e = this._source.properties().childs(),
          t = {
            bars: this._bars,
            dontDrawOpen: !0,
            thinBars: e.hlcBarsStyle.childs().thinBars.value()
          },
          i = new s.CompositeRenderer;
        return i.append(new n.PaneRendererBars(t)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && i.append(new o.SelectionRenderer(this._selectionData)), i
      }
      _createItem(e, t, i) {
        const s = t[2],
          o = t[3],
          n = t[4];
        if (!a(s) || !a(o) || !a(n)) return null;
        return {
          center: NaN,
          open: NaN,
          high: s,
          low: o,
          close: n,
          color: i.barColor,
          left: NaN,
          right: NaN,
          timePointIndex: e
        }
      }
    }