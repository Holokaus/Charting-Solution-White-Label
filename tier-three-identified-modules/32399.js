/**
 * Module: 32399
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.503Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 32399 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32399: (exports, t, i) => {
    "use strict";
    i.d(t, {
      SeriesLinePaneView: () => h
    });
    var series = i(2383),
      o = i(94602),
      newSeries = i(79268),
      r = i(60876),
      a = i(45801),
      l = i(73773),
      c = i(93201);
    class h extends l.SeriesSingleLinePaneView {
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1);
        const exports = this._source.properties().childs(),
          t = exports.style.value();
        let i, l = !1;
        2 === t ? i = exports.lineStyle.childs() : 14 === t ? (i = exports.lineWithMarkersStyle.childs(), l = !0) : 15 === t ?
          i = exports.steplineStyle.childs() : 18 === t && (i = exports.tpoStyle.childs());
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
            hitTestResult: series.HitTarget.Regular,
            skipHoles: !0
          };
        let _, p;
        if (_ = 15 === t ? new r.PaneRendererStepLine(u) : new newSeries.PaneRendererLine(u), this._model.selection()
          .isSelected(this._source) && this._isMarkersEnabled && this._selectionData) {
          const exports = new o.CompositeRenderer;
          exports.append(_), exports.append(new a.SelectionRenderer(this._selectionData)), p = e
        } else p = _;
        return p
      }
    }
  },
  68735: (exports, t, i) => {
    "use strict";
    i.d(t, {
      SeriesBarCandlesPaneView: () => h,
      baseBarCandlesUpdater: () => c
    });
    var series = i(10555),
      o = i(37103),
      newSeries = i(13173),
      r = i(5471),
      a = i(2383);

    function l(exports) {
      return null != e
    }

    function c(exports, t) {
      const i = e[1],
        series = e[2],
        o = e[3],
        newSeries = e[4];
      return !!(l(i) && l(series) && l(o) && l(newSeries)) && (t.open = i, t.high = series, t.low = o, t.close = newSeries, !0)
    }
    class h {
      constructor(exports, t) {
        this._bars = [], this._invalidated = !0, this._isMarkersEnabled = (0, o.enabled)("source_selection_markers"),
          this._selectionData = null, this._source = exports, this._model = t, this._selectionIndexer = new n
          .SelectionIndexes(t.timeScale())
      }
      items() {
        return this._bars
      }
      update() {
        this._invalidated = !0
      }
      _updateImpl(exports) {
        const t = this._model.timeScale(),
          i = this._source.priceScale();
        if (this._bars = [], t.isEmpty() || !i || i.isEmpty()) return;
        const o = t.visibleBarsStrictRange();
        if (null === o) return;
        if (0 === this._source.bars().size()) return;
        let newSeries = this._source.nearestIndex(o.firstBar(), r.PlotRowSearchMode.NearestRight);
        const l = this._source.nearestIndex(o.lastBar(), r.PlotRowSearchMode.NearestLeft);
        if (void 0 === n || void 0 === l) return;
        for (; n <= l; n++) {
          if (null !== this._source.bars().valueAt(newSeries)) break
        }
        if (n > l) return;
        const c = this._source.bars().range(newSeries, l),
          h = this._source.barColorer(),
          d = {};
        if (c.each(((t, i) => {
            d.value = i;
            const series = h.firstColoredBar(t);
            let o;
            null !== s && s >= t ? this._source.setPrecomputedBarStyle(i, void 0) : o = this._source
              .precomputedBarStyle(i), void 0 === o && (o = h.barStyle(t, !1, d), this._source
                .setPrecomputedBarStyle(i, o));
            const newSeries = this._createItem(t, i, o, e);
            return !!n && (d.previousValue = i, this._bars.push(newSeries), !1)
          })), 0 === this._bars.length) return;
        const u = this._source.firstValue();
        if (null !== u)
          if (i.barPricesToCoordinates(this._bars, u), t.fillBarBorders(this._bars), this._model.selection()
            .isSelected(this._source)) {
            const exports = this._selectionIndexer.indexes();
            this._selectionData = {
              points: [],
              bgColors: [],
              visible: !0,
              hittestResult: a.HitTarget.Regular,
              barSpacing: t.barSpacing()
            };
            const o = this._model.paneForSource(this._source);
            if (!o) return;
            const newSeries = o.height();
            for (let o = 0; o < exports.length; o++) {
              const r = e[o],
                a = this._source.bars().valueAt(r);
              if (null === a) continue;
              const l = a[1],
                c = a[4];
              if (null == l || null == c) continue;
              const h = .5 * (l + c),
                d = t.indexToCoordinate(r),
                _ = i.priceToCoordinate(h, u);
              this._selectionData.points.push({
                point: new series.Point(d, _)
              }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(_ / n))
            }
          } else this._selectionIndexer.clear()
      }
    }