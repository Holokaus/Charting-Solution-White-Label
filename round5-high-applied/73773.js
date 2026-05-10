/**
 * Module 73773 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

73773: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      SeriesSingleLinePaneView: () => d
    });
    var bitmapCoordinatesPane_s = i(69708),
      o = i(10555),
      n = i(50151),
      r = i(37103),
      a = i(13173),
      l = i(5471),
      c = i(2383),
      h = i(12217);
    class d {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._items = [], this._invalidated = !0, this._isMarkersEnabled = (0, r.enabled)("source_selection_markers"),
          this._selectionData = null, this._source = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t, this._selectionIndexer = new a
          .SelectionIndexes(bitmapCoordinatesPane_t.timeScale())
      }
      update() {
        this._invalidated = !0
      }
      _updateImpl() {
        this._items = [];
        const bitmapCoordinatesPane_e = this._model.timeScale(),
          bitmapCoordinatesPane_t = this._source.priceScale();
        if (bitmapCoordinatesPane_e.isEmpty() || !bitmapCoordinatesPane_t || bitmapCoordinatesPane_t.isEmpty()) return;
        const i = bitmapCoordinatesPane_e.visibleBarsStrictRange();
        if (null === i) return;
        if (0 === this._source.bars().size()) return;
        const r = this._source.nearestIndex(i.firstBar() - 1, l.PlotRowSearchMode.NearestLeft) ?? i.firstBar() - 1,
          a = this._source.nearestIndex(i.lastBar() + 1, l.PlotRowSearchMode.NearestRight) ?? i.lastBar() + 1,
          d = this._source.barFunction(),
          u = this._model.timeScale().barSpacing();
        if (u < .1 && this._source.supportsConflatedChunks()) {
          const bitmapCoordinatesPane_e = this._source.conflatedChunks(u, (0, n.ensureNotNull)(this._source.priceSource())),
            bitmapCoordinatesPane_t = (0, h.lowerbound)(bitmapCoordinatesPane_e, r, ((bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) => bitmapCoordinatesPane_e.startTime < bitmapCoordinatesPane_t)),
            i = Math.min(bitmapCoordinatesPane_e.length - 1, (0, h.lowerbound)(bitmapCoordinatesPane_e, a, ((bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) => bitmapCoordinatesPane_e.endTime < bitmapCoordinatesPane_t)));
          for (let bitmapCoordinatesPane_s = bitmapCoordinatesPane_t; bitmapCoordinatesPane_s <= i; bitmapCoordinatesPane_s++) {
            const bitmapCoordinatesPane_t = bitmapCoordinatesPane_e[bitmapCoordinatesPane_s];
            [bitmapCoordinatesPane_t.open, bitmapCoordinatesPane_t.high, bitmapCoordinatesPane_t.low, bitmapCoordinatesPane_t.close].forEach((bitmapCoordinatesPane_e => {
              this._items.push({
                timePointIndex: bitmapCoordinatesPane_t.startTime,
                y: bitmapCoordinatesPane_e,
                left: NaN,
                center: NaN,
                right: NaN
              })
            }))
          }
        } else
          for (const {
              index: bitmapCoordinatesPane_e,
              value: bitmapCoordinatesPane_t
            }
            of this._source.bars().rangeIterator(r, a)) {
            const i = d(bitmapCoordinatesPane_t);
            (0, bitmapCoordinatesPane_s.default)(i) && this._items.push({
              timePointIndex: bitmapCoordinatesPane_e,
              y: i,
              left: NaN,
              center: NaN,
              right: NaN
            })
          }
        const _ = this._source.firstValue();
        if (null !== _)
          if (bitmapCoordinatesPane_t.pointsArrayToCoordinates(this._items, _), bitmapCoordinatesPane_e.fillBarBorders(this._items), this._model.selection()
            .isSelected(this._source)) {
            const i = this._selectionIndexer.indexes();
            this._selectionData = {
              points: [],
              bgColors: [],
              visible: !0,
              barSpacing: bitmapCoordinatesPane_e.barSpacing(),
              hittestResult: c.HitTarget.Regular
            };
            const bitmapCoordinatesPane_s = (0, n.ensureNotNull)(this._model.paneForSource(this._source)).height();
            this._selectionData.hittestResult = c.HitTarget.Regular;
            for (let n = 0; n < i.length; n++) {
              const r = i[n],
                a = this._source.bars().valueAt(r);
              if (null === a) continue;
              const l = d(a),
                c = bitmapCoordinatesPane_e.indexToCoordinate(r),
                h = bitmapCoordinatesPane_t.priceToCoordinate(l, _);
              this._selectionData.points.push({
                point: new o.Point(c, h)
              }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(h / bitmapCoordinatesPane_s))
            }
          } else this._selectionIndexer.clear();
        else this._items = []
      }
    }
}
