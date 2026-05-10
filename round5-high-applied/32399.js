/**
 * Module 32399 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32399: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      SeriesLinePaneView: () => h
    });
    var bitmapCoordinatesPane_s = i(2383),
      o = i(94602),
      n = i(79268),
      r = i(60876),
      a = i(45801),
      l = i(73773),
      c = i(93201);
    class h extends l.SeriesSingleLinePaneView {
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1);
        const bitmapCoordinatesPane_e = this._source.properties().childs(),
          bitmapCoordinatesPane_t = bitmapCoordinatesPane_e.style.value();
        let i, l = !1;
        2 === bitmapCoordinatesPane_t ? i = bitmapCoordinatesPane_e.lineStyle.childs() : 14 === bitmapCoordinatesPane_t ? (i = bitmapCoordinatesPane_e.lineWithMarkersStyle.childs(), l = !0) : 15 === bitmapCoordinatesPane_t ?
          i = bitmapCoordinatesPane_e.steplineStyle.childs() : 18 === bitmapCoordinatesPane_t && (i = bitmapCoordinatesPane_e.tpoStyle.childs());
        const h = this._model.timeScale().barSpacing(),
          d = i.colorType?.value() !== c.ColorType.Gradient ? {
            type: c.ColorType.Solid,
            color: i.color.value()
          } : {
            type: c.ColorType.Gradient,
            startColor: i.gradientStartColor.value(),
            endColor: i.gradientEndColor.value()
          },
          u = {
            barSpacing: h,
            items: this._items,
            lineColor: d,
            lineStyle: i.linestyle.value(),
            withMarkers: l,
            lineWidth: i.linewidth.value(),
            simpleMode: !0,
            hitTestResult: bitmapCoordinatesPane_s.HitTarget.Regular,
            skipHoles: !0
          };
        let _, p;
        if (_ = 15 === bitmapCoordinatesPane_t ? new r.PaneRendererStepLine(u) : new n.PaneRendererLine(u), this._model.selection()
          .isSelected(this._source) && this._isMarkersEnabled && this._selectionData) {
          const bitmapCoordinatesPane_e = new o.CompositeRenderer;
          bitmapCoordinatesPane_e.append(_), bitmapCoordinatesPane_e.append(new a.SelectionRenderer(this._selectionData)), p = bitmapCoordinatesPane_e
        } else p = _;
        return p
      }
    }
  },
  68735: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      SeriesBarCandlesPaneView: () => h,
      baseBarCandlesUpdater: () => c
    });
    var bitmapCoordinatesPane_s = i(10555),
      o = i(37103),
      n = i(13173),
      r = i(5471),
      a = i(2383);

    function l(bitmapCoordinatesPane_e) {
      return null != bitmapCoordinatesPane_e
    }

    function c(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
      const i = bitmapCoordinatesPane_e[1],
        bitmapCoordinatesPane_s = bitmapCoordinatesPane_e[2],
        o = bitmapCoordinatesPane_e[3],
        n = bitmapCoordinatesPane_e[4];
      return !!(l(i) && l(bitmapCoordinatesPane_s) && l(o) && l(n)) && (bitmapCoordinatesPane_t.open = i, bitmapCoordinatesPane_t.high = bitmapCoordinatesPane_s, bitmapCoordinatesPane_t.low = o, bitmapCoordinatesPane_t.close = n, !0)
    }
    class h {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._bars = [], this._invalidated = !0, this._isMarkersEnabled = (0, o.enabled)("source_selection_markers"),
          this._selectionData = null, this._source = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t, this._selectionIndexer = new n
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
          i = this._source.priceScale();
        if (this._bars = [], bitmapCoordinatesPane_t.isEmpty() || !i || i.isEmpty()) return;
        const o = bitmapCoordinatesPane_t.visibleBarsStrictRange();
        if (null === o) return;
        if (0 === this._source.bars().size()) return;
        let n = this._source.nearestIndex(o.firstBar(), r.PlotRowSearchMode.NearestRight);
        const l = this._source.nearestIndex(o.lastBar(), r.PlotRowSearchMode.NearestLeft);
        if (void 0 === n || void 0 === l) return;
        for (; n <= l; n++) {
          if (null !== this._source.bars().valueAt(n)) break
        }
        if (n > l) return;
        const c = this._source.bars().range(n, l),
          h = this._source.barColorer(),
          d = {};
        if (c.each(((bitmapCoordinatesPane_t, i) => {
            d.value = i;
            const bitmapCoordinatesPane_s = h.firstColoredBar(bitmapCoordinatesPane_t);
            let o;
            null !== bitmapCoordinatesPane_s && bitmapCoordinatesPane_s >= bitmapCoordinatesPane_t ? this._source.setPrecomputedBarStyle(i, void 0) : o = this._source
              .precomputedBarStyle(i), void 0 === o && (o = h.barStyle(bitmapCoordinatesPane_t, !1, d), this._source
                .setPrecomputedBarStyle(i, o));
            const n = this._createItem(bitmapCoordinatesPane_t, i, o, bitmapCoordinatesPane_e);
            return !!n && (d.previousValue = i, this._bars.push(n), !1)
          })), 0 === this._bars.length) return;
        const u = this._source.firstValue();
        if (null !== u)
          if (i.barPricesToCoordinates(this._bars, u), bitmapCoordinatesPane_t.fillBarBorders(this._bars), this._model.selection()
            .isSelected(this._source)) {
            const bitmapCoordinatesPane_e = this._selectionIndexer.indexes();
            this._selectionData = {
              points: [],
              bgColors: [],
              visible: !0,
              hittestResult: a.HitTarget.Regular,
              barSpacing: bitmapCoordinatesPane_t.barSpacing()
            };
            const o = this._model.paneForSource(this._source);
            if (!o) return;
            const n = o.height();
            for (let o = 0; o < bitmapCoordinatesPane_e.length; o++) {
              const r = bitmapCoordinatesPane_e[o],
                a = this._source.bars().valueAt(r);
              if (null === a) continue;
              const l = a[1],
                c = a[4];
              if (null == l || null == c) continue;
              const h = .5 * (l + c),
                d = bitmapCoordinatesPane_t.indexToCoordinate(r),
                _ = i.priceToCoordinate(h, u);
              this._selectionData.points.push({
                point: new bitmapCoordinatesPane_s.Point(d, _)
              }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(_ / n))
            }
          } else this._selectionIndexer.clear()
      }
    }
}
