/**
 * Module 32399 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32399: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesLinePaneView: () => bitmapCoordinatesPane_h
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(2383),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(94602),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(79268),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(60876),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(45801),
      bitmapCoordinatesPane_l = bitmapCoordinatesPane_i(73773),
      bitmapCoordinatesPane_c = bitmapCoordinatesPane_i(93201);
    class bitmapCoordinatesPane_h extends bitmapCoordinatesPane_l.SeriesSingleLinePaneView {
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1);
        const bitmapCoordinatesPane_e = this._source.properties().childs(),
          bitmapCoordinatesPane_t = bitmapCoordinatesPane_e.style.value();
        let bitmapCoordinatesPane_i, bitmapCoordinatesPane_l = !1;
        2 === bitmapCoordinatesPane_t ? bitmapCoordinatesPane_i = bitmapCoordinatesPane_e.lineStyle.childs() : 14 === bitmapCoordinatesPane_t ? (bitmapCoordinatesPane_i = bitmapCoordinatesPane_e.lineWithMarkersStyle.childs(), bitmapCoordinatesPane_l = !0) : 15 === bitmapCoordinatesPane_t ?
          bitmapCoordinatesPane_i = bitmapCoordinatesPane_e.steplineStyle.childs() : 18 === bitmapCoordinatesPane_t && (bitmapCoordinatesPane_i = bitmapCoordinatesPane_e.tpoStyle.childs());
        const bitmapCoordinatesPane_h = this._model.timeScale().barSpacing(),
          bitmapCoordinatesPane_d = bitmapCoordinatesPane_i.colorType?.value() !== bitmapCoordinatesPane_c.ColorType.Gradient ? {
            type: bitmapCoordinatesPane_c.ColorType.Solid,
            color: bitmapCoordinatesPane_i.color.value()
          } : {
            type: bitmapCoordinatesPane_c.ColorType.Gradient,
            startColor: bitmapCoordinatesPane_i.gradientStartColor.value(),
            endColor: bitmapCoordinatesPane_i.gradientEndColor.value()
          },
          bitmapCoordinatesPane_u = {
            barSpacing: bitmapCoordinatesPane_h,
            items: this._items,
            lineColor: bitmapCoordinatesPane_d,
            lineStyle: bitmapCoordinatesPane_i.linestyle.value(),
            withMarkers: bitmapCoordinatesPane_l,
            lineWidth: bitmapCoordinatesPane_i.linewidth.value(),
            simpleMode: !0,
            hitTestResult: bitmapCoordinatesPane_s.HitTarget.Regular,
            skipHoles: !0
          };
        let _, bitmapCoordinatesPane_p;
        if (_ = 15 === bitmapCoordinatesPane_t ? new bitmapCoordinatesPane_r.PaneRendererStepLine(bitmapCoordinatesPane_u) : new bitmapCoordinatesPane_n.PaneRendererLine(bitmapCoordinatesPane_u), this._model.selection()
          .isSelected(this._source) && this._isMarkersEnabled && this._selectionData) {
          const bitmapCoordinatesPane_e = new bitmapCoordinatesPane_o.CompositeRenderer;
          bitmapCoordinatesPane_e.append(_), bitmapCoordinatesPane_e.append(new bitmapCoordinatesPane_a.SelectionRenderer(this._selectionData)), bitmapCoordinatesPane_p = bitmapCoordinatesPane_e
        } else bitmapCoordinatesPane_p = _;
        return bitmapCoordinatesPane_p
      }
    }
  },
  68735: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesBarCandlesPaneView: () => bitmapCoordinatesPane_h,
      baseBarCandlesUpdater: () => bitmapCoordinatesPane_c
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(10555),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(37103),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(13173),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(5471),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(2383);

    function bitmapCoordinatesPane_l(bitmapCoordinatesPane_e) {
      return null != bitmapCoordinatesPane_e
    }

    function bitmapCoordinatesPane_c(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
      const bitmapCoordinatesPane_i = bitmapCoordinatesPane_e[1],
        bitmapCoordinatesPane_s = bitmapCoordinatesPane_e[2],
        bitmapCoordinatesPane_o = bitmapCoordinatesPane_e[3],
        bitmapCoordinatesPane_n = bitmapCoordinatesPane_e[4];
      return !!(bitmapCoordinatesPane_l(bitmapCoordinatesPane_i) && bitmapCoordinatesPane_l(bitmapCoordinatesPane_s) && bitmapCoordinatesPane_l(bitmapCoordinatesPane_o) && bitmapCoordinatesPane_l(bitmapCoordinatesPane_n)) && (bitmapCoordinatesPane_t.open = bitmapCoordinatesPane_i, bitmapCoordinatesPane_t.high = bitmapCoordinatesPane_s, bitmapCoordinatesPane_t.low = bitmapCoordinatesPane_o, bitmapCoordinatesPane_t.close = bitmapCoordinatesPane_n, !0)
    }
    class bitmapCoordinatesPane_h {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._bars = [], this._invalidated = !0, this._isMarkersEnabled = (0, bitmapCoordinatesPane_o.enabled)("source_selection_markers"),
          this._selectionData = null, this._source = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t, this._selectionIndexer = new bitmapCoordinatesPane_n
          .SelectionIndexes(bitmapCoordinatesPane_t.timeScale())
      }
      items() {
        return this._bars
      }
      update() {
        this._invalidated = !0
      }
      _updateImpl(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = this._model.timeScale(),
          bitmapCoordinatesPane_i = this._source.priceScale();
        if (this._bars = [], bitmapCoordinatesPane_t.isEmpty() || !bitmapCoordinatesPane_i || bitmapCoordinatesPane_i.isEmpty()) return;
        const bitmapCoordinatesPane_o = bitmapCoordinatesPane_t.visibleBarsStrictRange();
        if (null === bitmapCoordinatesPane_o) return;
        if (0 === this._source.bars().size()) return;
        let bitmapCoordinatesPane_n = this._source.nearestIndex(bitmapCoordinatesPane_o.firstBar(), bitmapCoordinatesPane_r.PlotRowSearchMode.NearestRight);
        const bitmapCoordinatesPane_l = this._source.nearestIndex(bitmapCoordinatesPane_o.lastBar(), bitmapCoordinatesPane_r.PlotRowSearchMode.NearestLeft);
        if (void 0 === bitmapCoordinatesPane_n || void 0 === bitmapCoordinatesPane_l) return;
        for (; bitmapCoordinatesPane_n <= bitmapCoordinatesPane_l; bitmapCoordinatesPane_n++) {
          if (null !== this._source.bars().valueAt(bitmapCoordinatesPane_n)) break
        }
        if (bitmapCoordinatesPane_n > bitmapCoordinatesPane_l) return;
        const bitmapCoordinatesPane_c = this._source.bars().range(bitmapCoordinatesPane_n, bitmapCoordinatesPane_l),
          bitmapCoordinatesPane_h = this._source.barColorer(),
          bitmapCoordinatesPane_d = {};
        if (bitmapCoordinatesPane_c.each(((bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
            bitmapCoordinatesPane_d.value = bitmapCoordinatesPane_i;
            const bitmapCoordinatesPane_s = bitmapCoordinatesPane_h.firstColoredBar(bitmapCoordinatesPane_t);
            let bitmapCoordinatesPane_o;
            null !== bitmapCoordinatesPane_s && bitmapCoordinatesPane_s >= bitmapCoordinatesPane_t ? this._source.setPrecomputedBarStyle(bitmapCoordinatesPane_i, void 0) : bitmapCoordinatesPane_o = this._source
              .precomputedBarStyle(bitmapCoordinatesPane_i), void 0 === bitmapCoordinatesPane_o && (bitmapCoordinatesPane_o = bitmapCoordinatesPane_h.barStyle(bitmapCoordinatesPane_t, !1, bitmapCoordinatesPane_d), this._source
                .setPrecomputedBarStyle(bitmapCoordinatesPane_i, bitmapCoordinatesPane_o));
            const bitmapCoordinatesPane_n = this._createItem(bitmapCoordinatesPane_t, bitmapCoordinatesPane_i, bitmapCoordinatesPane_o, bitmapCoordinatesPane_e);
            return !!bitmapCoordinatesPane_n && (bitmapCoordinatesPane_d.previousValue = bitmapCoordinatesPane_i, this._bars.push(bitmapCoordinatesPane_n), !1)
          })), 0 === this._bars.length) return;
        const bitmapCoordinatesPane_u = this._source.firstValue();
        if (null !== bitmapCoordinatesPane_u)
          if (bitmapCoordinatesPane_i.barPricesToCoordinates(this._bars, bitmapCoordinatesPane_u), bitmapCoordinatesPane_t.fillBarBorders(this._bars), this._model.selection()
            .isSelected(this._source)) {
            const bitmapCoordinatesPane_e = this._selectionIndexer.indexes();
            this._selectionData = {
              points: [],
              bgColors: [],
              visible: !0,
              hittestResult: bitmapCoordinatesPane_a.HitTarget.Regular,
              barSpacing: bitmapCoordinatesPane_t.barSpacing()
            };
            const bitmapCoordinatesPane_o = this._model.paneForSource(this._source);
            if (!bitmapCoordinatesPane_o) return;
            const bitmapCoordinatesPane_n = bitmapCoordinatesPane_o.height();
            for (let bitmapCoordinatesPane_o = 0; bitmapCoordinatesPane_o < bitmapCoordinatesPane_e.length; bitmapCoordinatesPane_o++) {
              const bitmapCoordinatesPane_r = bitmapCoordinatesPane_e[bitmapCoordinatesPane_o],
                bitmapCoordinatesPane_a = this._source.bars().valueAt(bitmapCoordinatesPane_r);
              if (null === bitmapCoordinatesPane_a) continue;
              const bitmapCoordinatesPane_l = bitmapCoordinatesPane_a[1],
                bitmapCoordinatesPane_c = bitmapCoordinatesPane_a[4];
              if (null == bitmapCoordinatesPane_l || null == bitmapCoordinatesPane_c) continue;
              const bitmapCoordinatesPane_h = .5 * (bitmapCoordinatesPane_l + bitmapCoordinatesPane_c),
                bitmapCoordinatesPane_d = bitmapCoordinatesPane_t.indexToCoordinate(bitmapCoordinatesPane_r),
                _ = bitmapCoordinatesPane_i.priceToCoordinate(bitmapCoordinatesPane_h, bitmapCoordinatesPane_u);
              this._selectionData.points.push({
                point: new bitmapCoordinatesPane_s.Point(bitmapCoordinatesPane_d, _)
              }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(_ / bitmapCoordinatesPane_n))
            }
          } else this._selectionIndexer.clear()
      }
    }