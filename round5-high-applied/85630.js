/**
 * Module 85630 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

85630: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      SeriesColumnsPaneView: () => p
    });
    var bitmapCoordinatesPane_s = i(50151),
      o = i(10555),
      n = i(37103),
      r = i(69708),
      a = i(2383),
      l = i(94602),
      c = i(5471),
      h = i(13173),
      d = i(45801),
      u = i(93387),
      _ = i(52945);
    class p {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._items = [], this._invalidated = !0, this._isMarkersEnabled = (0, n.enabled)("source_selection_markers"),
          this._selectionData = null, this._histogramBase = 0, this._source = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t, this
          ._selectionIndexer = new h.SelectionIndexes(bitmapCoordinatesPane_t.timeScale())
      }
      update() {
        this._invalidated = !0
      }
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1);
        const bitmapCoordinatesPane_e = {
            barSpacing: this._model.timeScale().barSpacing(),
            items: this._items,
            lineColor: "",
            histogramBase: this._histogramBase
          },
          bitmapCoordinatesPane_t = new l.CompositeRenderer;
        return bitmapCoordinatesPane_t.append(new u.PaneRendererColumns(bitmapCoordinatesPane_e)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && bitmapCoordinatesPane_t.append(new d.SelectionRenderer(this._selectionData)), bitmapCoordinatesPane_t
      }
      _updateImpl() {
        this._items = [];
        const bitmapCoordinatesPane_e = this._model.timeScale(),
          bitmapCoordinatesPane_t = this._source.priceScale();
        if (bitmapCoordinatesPane_e.isEmpty() || !bitmapCoordinatesPane_t || bitmapCoordinatesPane_t.isEmpty()) return;
        const i = bitmapCoordinatesPane_e.visibleBarsStrictRange();
        if (null === i) return;
        if (0 === this._source.bars().size()) return;
        const n = this._source.nearestIndex(i.firstBar(), c.PlotRowSearchMode.NearestRight),
          l = this._source.nearestIndex(i.lastBar(), c.PlotRowSearchMode.NearestLeft);
        if (void 0 === n || void 0 === l) return;
        const h = this._source.barColorer(),
          d = {},
          u = this._source.barFunction();
        for (const {
            index: bitmapCoordinatesPane_e,
            value: bitmapCoordinatesPane_t
          }
          of this._source.bars().rangeIterator(n, l)) {
          const i = u(bitmapCoordinatesPane_t);
          if (!(0, r.default)(i)) continue;
          d.value = bitmapCoordinatesPane_t;
          let bitmapCoordinatesPane_s = this._source.precomputedBarStyle(bitmapCoordinatesPane_t);
          void 0 === bitmapCoordinatesPane_s && (bitmapCoordinatesPane_s = h.barStyle(bitmapCoordinatesPane_e, !1, d), this._source.setPrecomputedBarStyle(bitmapCoordinatesPane_t, bitmapCoordinatesPane_s)), this._items.push({
            timePointIndex: bitmapCoordinatesPane_e,
            left: NaN,
            center: NaN,
            right: NaN,
            y: i,
            style: bitmapCoordinatesPane_s
          }), d.previousValue = bitmapCoordinatesPane_t
        }
        const p = this._source.firstValue();
        if (null === p) return;
        bitmapCoordinatesPane_t.pointsArrayToCoordinates(this._items, p), bitmapCoordinatesPane_e.fillBarBorders(this._items);
        const m = this._source.properties().childs().columnStyle.childs().baselinePosition?.value();
        if ("zero" === m) {
          const bitmapCoordinatesPane_e = bitmapCoordinatesPane_t.isPercentage() ? (0, _.fromPercent)(0, p) : 0;
          this._histogramBase = bitmapCoordinatesPane_t.priceToCoordinate(bitmapCoordinatesPane_e, p)
        } else this._histogramBase = bitmapCoordinatesPane_t.isInverted() ? 0 : bitmapCoordinatesPane_t.height();
        if (this._model.selection().isSelected(this._source)) {
          const i = this._selectionIndexer.indexes();
          this._selectionData = {
            points: [],
            bgColors: [],
            visible: !0,
            barSpacing: bitmapCoordinatesPane_e.barSpacing(),
            hittestResult: a.HitTarget.Regular
          };
          const n = (0,
            bitmapCoordinatesPane_s.ensureNotNull)(this._model.paneForSource(this._source)).height();
          this._selectionData.hittestResult = a.HitTarget.Regular;
          for (let bitmapCoordinatesPane_s = 0; bitmapCoordinatesPane_s < i.length; bitmapCoordinatesPane_s++) {
            const r = i[bitmapCoordinatesPane_s],
              a = this._source.bars().valueAt(r);
            if (null === a) continue;
            const l = u(a),
              c = bitmapCoordinatesPane_e.indexToCoordinate(r),
              h = bitmapCoordinatesPane_t.priceToCoordinate(l, p);
            this._selectionData.points.push({
              point: new o.Point(c, h)
            }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(h / n))
          }
        } else this._selectionIndexer.clear()
      }
    }