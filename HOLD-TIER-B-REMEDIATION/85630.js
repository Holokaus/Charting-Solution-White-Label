/**
 * Module 85630 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

85630: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesColumnsPaneView: () => bitmapCoordinatesPane_p
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(50151),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(10555),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(37103),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(69708),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(2383),
      bitmapCoordinatesPane_l = bitmapCoordinatesPane_i(94602),
      bitmapCoordinatesPane_c = bitmapCoordinatesPane_i(5471),
      bitmapCoordinatesPane_h = bitmapCoordinatesPane_i(13173),
      bitmapCoordinatesPane_d = bitmapCoordinatesPane_i(45801),
      bitmapCoordinatesPane_u = bitmapCoordinatesPane_i(93387),
      _ = bitmapCoordinatesPane_i(52945);
    class bitmapCoordinatesPane_p {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._items = [], this._invalidated = !0, this._isMarkersEnabled = (0, bitmapCoordinatesPane_n.enabled)("source_selection_markers"),
          this._selectionData = null, this._histogramBase = 0, this._source = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t, this
          ._selectionIndexer = new bitmapCoordinatesPane_h.SelectionIndexes(bitmapCoordinatesPane_t.timeScale())
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
          bitmapCoordinatesPane_t = new bitmapCoordinatesPane_l.CompositeRenderer;
        return bitmapCoordinatesPane_t.append(new bitmapCoordinatesPane_u.PaneRendererColumns(bitmapCoordinatesPane_e)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && bitmapCoordinatesPane_t.append(new bitmapCoordinatesPane_d.SelectionRenderer(this._selectionData)), bitmapCoordinatesPane_t
      }
      _updateImpl() {
        this._items = [];
        const bitmapCoordinatesPane_e = this._model.timeScale(),
          bitmapCoordinatesPane_t = this._source.priceScale();
        if (bitmapCoordinatesPane_e.isEmpty() || !bitmapCoordinatesPane_t || bitmapCoordinatesPane_t.isEmpty()) return;
        const bitmapCoordinatesPane_i = bitmapCoordinatesPane_e.visibleBarsStrictRange();
        if (null === bitmapCoordinatesPane_i) return;
        if (0 === this._source.bars().size()) return;
        const bitmapCoordinatesPane_n = this._source.nearestIndex(bitmapCoordinatesPane_i.firstBar(), bitmapCoordinatesPane_c.PlotRowSearchMode.NearestRight),
          bitmapCoordinatesPane_l = this._source.nearestIndex(bitmapCoordinatesPane_i.lastBar(), bitmapCoordinatesPane_c.PlotRowSearchMode.NearestLeft);
        if (void 0 === bitmapCoordinatesPane_n || void 0 === bitmapCoordinatesPane_l) return;
        const bitmapCoordinatesPane_h = this._source.barColorer(),
          bitmapCoordinatesPane_d = {},
          bitmapCoordinatesPane_u = this._source.barFunction();
        for (const {
            index: bitmapCoordinatesPane_e,
            value: bitmapCoordinatesPane_t
          }
          of this._source.bars().rangeIterator(bitmapCoordinatesPane_n, bitmapCoordinatesPane_l)) {
          const bitmapCoordinatesPane_i = bitmapCoordinatesPane_u(bitmapCoordinatesPane_t);
          if (!(0, bitmapCoordinatesPane_r.default)(bitmapCoordinatesPane_i)) continue;
          bitmapCoordinatesPane_d.value = bitmapCoordinatesPane_t;
          let bitmapCoordinatesPane_s = this._source.precomputedBarStyle(bitmapCoordinatesPane_t);
          void 0 === bitmapCoordinatesPane_s && (bitmapCoordinatesPane_s = bitmapCoordinatesPane_h.barStyle(bitmapCoordinatesPane_e, !1, bitmapCoordinatesPane_d), this._source.setPrecomputedBarStyle(bitmapCoordinatesPane_t, bitmapCoordinatesPane_s)), this._items.push({
            timePointIndex: bitmapCoordinatesPane_e,
            left: NaN,
            center: NaN,
            right: NaN,
            bitmapCoordinatesPane_y: bitmapCoordinatesPane_i,
            style: bitmapCoordinatesPane_s
          }), bitmapCoordinatesPane_d.previousValue = bitmapCoordinatesPane_t
        }
        const bitmapCoordinatesPane_p = this._source.firstValue();
        if (null === bitmapCoordinatesPane_p) return;
        bitmapCoordinatesPane_t.pointsArrayToCoordinates(this._items, bitmapCoordinatesPane_p), bitmapCoordinatesPane_e.fillBarBorders(this._items);
        const bitmapCoordinatesPane_m = this._source.properties().childs().columnStyle.childs().baselinePosition?.value();
        if ("zero" === bitmapCoordinatesPane_m) {
          const bitmapCoordinatesPane_e = bitmapCoordinatesPane_t.isPercentage() ? (0, _.fromPercent)(0, bitmapCoordinatesPane_p) : 0;
          this._histogramBase = bitmapCoordinatesPane_t.priceToCoordinate(bitmapCoordinatesPane_e, bitmapCoordinatesPane_p)
        } else this._histogramBase = bitmapCoordinatesPane_t.isInverted() ? 0 : bitmapCoordinatesPane_t.height();
        if (this._model.selection().isSelected(this._source)) {
          const bitmapCoordinatesPane_i = this._selectionIndexer.indexes();
          this._selectionData = {
            points: [],
            bgColors: [],
            visible: !0,
            barSpacing: bitmapCoordinatesPane_e.barSpacing(),
            hittestResult: bitmapCoordinatesPane_a.HitTarget.Regular
          };
          const bitmapCoordinatesPane_n = (0,
            bitmapCoordinatesPane_s.ensureNotNull)(this._model.paneForSource(this._source)).height();
          this._selectionData.hittestResult = bitmapCoordinatesPane_a.HitTarget.Regular;
          for (let bitmapCoordinatesPane_s = 0; bitmapCoordinatesPane_s < bitmapCoordinatesPane_i.length; bitmapCoordinatesPane_s++) {
            const bitmapCoordinatesPane_r = bitmapCoordinatesPane_i[bitmapCoordinatesPane_s],
              bitmapCoordinatesPane_a = this._source.bars().valueAt(bitmapCoordinatesPane_r);
            if (null === bitmapCoordinatesPane_a) continue;
            const bitmapCoordinatesPane_l = bitmapCoordinatesPane_u(bitmapCoordinatesPane_a),
              bitmapCoordinatesPane_c = bitmapCoordinatesPane_e.indexToCoordinate(bitmapCoordinatesPane_r),
              bitmapCoordinatesPane_h = bitmapCoordinatesPane_t.priceToCoordinate(bitmapCoordinatesPane_l, bitmapCoordinatesPane_p);
            this._selectionData.points.push({
              point: new bitmapCoordinatesPane_o.Point(bitmapCoordinatesPane_c, bitmapCoordinatesPane_h)
            }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(bitmapCoordinatesPane_h / bitmapCoordinatesPane_n))
          }
        } else this._selectionIndexer.clear()
      }
    }