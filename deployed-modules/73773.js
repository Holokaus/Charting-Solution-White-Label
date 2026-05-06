/**
 * Module 73773 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

73773: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesSingleLinePaneView: () => bitmapCoordinatesPane_d
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(69708),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(10555),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(50151),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(37103),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(13173),
      bitmapCoordinatesPane_l = bitmapCoordinatesPane_i(5471),
      bitmapCoordinatesPane_c = bitmapCoordinatesPane_i(2383),
      bitmapCoordinatesPane_h = bitmapCoordinatesPane_i(12217);
    class bitmapCoordinatesPane_d {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._items = [], this._invalidated = !0, this._isMarkersEnabled = (0, bitmapCoordinatesPane_r.enabled)("source_selection_markers"),
          this._selectionData = null, this._source = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t, this._selectionIndexer = new bitmapCoordinatesPane_a
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
        const bitmapCoordinatesPane_i = bitmapCoordinatesPane_e.visibleBarsStrictRange();
        if (null === bitmapCoordinatesPane_i) return;
        if (0 === this._source.bars().size()) return;
        const bitmapCoordinatesPane_r = this._source.nearestIndex(bitmapCoordinatesPane_i.firstBar() - 1, bitmapCoordinatesPane_l.PlotRowSearchMode.NearestLeft) ?? bitmapCoordinatesPane_i.firstBar() - 1,
          bitmapCoordinatesPane_a = this._source.nearestIndex(bitmapCoordinatesPane_i.lastBar() + 1, bitmapCoordinatesPane_l.PlotRowSearchMode.NearestRight) ?? bitmapCoordinatesPane_i.lastBar() + 1,
          bitmapCoordinatesPane_d = this._source.barFunction(),
          bitmapCoordinatesPane_u = this._model.timeScale().barSpacing();
        if (bitmapCoordinatesPane_u < .1 && this._source.supportsConflatedChunks()) {
          const bitmapCoordinatesPane_e = this._source.conflatedChunks(bitmapCoordinatesPane_u, (0, bitmapCoordinatesPane_n.ensureNotNull)(this._source.priceSource())),
            bitmapCoordinatesPane_t = (0, bitmapCoordinatesPane_h.lowerbound)(bitmapCoordinatesPane_e, bitmapCoordinatesPane_r, ((bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) => bitmapCoordinatesPane_e.startTime < bitmapCoordinatesPane_t)),
            bitmapCoordinatesPane_i = Math.min(bitmapCoordinatesPane_e.length - 1, (0, bitmapCoordinatesPane_h.lowerbound)(bitmapCoordinatesPane_e, bitmapCoordinatesPane_a, ((bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) => bitmapCoordinatesPane_e.endTime < bitmapCoordinatesPane_t)));
          for (let bitmapCoordinatesPane_s = bitmapCoordinatesPane_t; bitmapCoordinatesPane_s <= bitmapCoordinatesPane_i; bitmapCoordinatesPane_s++) {
            const bitmapCoordinatesPane_t = bitmapCoordinatesPane_e[bitmapCoordinatesPane_s];
            [bitmapCoordinatesPane_t.open, bitmapCoordinatesPane_t.high, bitmapCoordinatesPane_t.low, bitmapCoordinatesPane_t.close].forEach((bitmapCoordinatesPane_e => {
              this._items.push({
                timePointIndex: bitmapCoordinatesPane_t.startTime,
                bitmapCoordinatesPane_y: bitmapCoordinatesPane_e,
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
            of this._source.bars().rangeIterator(bitmapCoordinatesPane_r, bitmapCoordinatesPane_a)) {
            const bitmapCoordinatesPane_i = bitmapCoordinatesPane_d(bitmapCoordinatesPane_t);
            (0, bitmapCoordinatesPane_s.default)(bitmapCoordinatesPane_i) && this._items.push({
              timePointIndex: bitmapCoordinatesPane_e,
              bitmapCoordinatesPane_y: bitmapCoordinatesPane_i,
              left: NaN,
              center: NaN,
              right: NaN
            })
          }
        const _ = this._source.firstValue();
        if (null !== _)
          if (bitmapCoordinatesPane_t.pointsArrayToCoordinates(this._items, _), bitmapCoordinatesPane_e.fillBarBorders(this._items), this._model.selection()
            .isSelected(this._source)) {
            const bitmapCoordinatesPane_i = this._selectionIndexer.indexes();
            this._selectionData = {
              points: [],
              bgColors: [],
              visible: !0,
              barSpacing: bitmapCoordinatesPane_e.barSpacing(),
              hittestResult: bitmapCoordinatesPane_c.HitTarget.Regular
            };
            const bitmapCoordinatesPane_s = (0, bitmapCoordinatesPane_n.ensureNotNull)(this._model.paneForSource(this._source)).height();
            this._selectionData.hittestResult = bitmapCoordinatesPane_c.HitTarget.Regular;
            for (let bitmapCoordinatesPane_n = 0; bitmapCoordinatesPane_n < bitmapCoordinatesPane_i.length; bitmapCoordinatesPane_n++) {
              const bitmapCoordinatesPane_r = bitmapCoordinatesPane_i[bitmapCoordinatesPane_n],
                bitmapCoordinatesPane_a = this._source.bars().valueAt(bitmapCoordinatesPane_r);
              if (null === bitmapCoordinatesPane_a) continue;
              const bitmapCoordinatesPane_l = bitmapCoordinatesPane_d(bitmapCoordinatesPane_a),
                bitmapCoordinatesPane_c = bitmapCoordinatesPane_e.indexToCoordinate(bitmapCoordinatesPane_r),
                bitmapCoordinatesPane_h = bitmapCoordinatesPane_t.priceToCoordinate(bitmapCoordinatesPane_l, _);
              this._selectionData.points.push({
                point: new bitmapCoordinatesPane_o.Point(bitmapCoordinatesPane_c, bitmapCoordinatesPane_h)
              }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(bitmapCoordinatesPane_h / bitmapCoordinatesPane_s))
            }
          } else this._selectionIndexer.clear();
        else this._items = []
      }
    }