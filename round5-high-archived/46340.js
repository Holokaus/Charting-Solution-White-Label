/**
 * Module 46340 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

46340: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      SeriesHLCAreaPaneView: () => g
    });
    var bitmapCoordinatesPane_s = i(10555),
      o = i(50151),
      n = i(37103),
      r = i(97126),
      a = i(13173),
      l = i(45801),
      c = i(5471),
      h = i(4539),
      d = i(94602),
      u = i(2383),
      _ = i(79268),
      p = i(7793);
    class m extends p.ObjectValuesCache {
      _newObject() {
        return {
          high: void 0,
          close: void 0,
          low: void 0
        }
      }
      _clearObject(bitmapCoordinatesPane_e) {
        bitmapCoordinatesPane_e.high = void 0, bitmapCoordinatesPane_e.close = void 0, bitmapCoordinatesPane_e.low = void 0
      }
    }
    class g {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._isMarkersEnabled = (0, n.enabled)("source_selection_markers"), this._hlcAreaCache = new m, this
          ._highPoints = new p.CachedContainer, this._closePoints = new p.CachedContainer, this._lowPoints = new p
          .CachedContainer, this._barsBorders = new p.CachedContainer, this._filledAreas = new r.CachedMap, this
          ._renderer = new d.CompositeRenderer, this._invalidated = !0, this._source = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t, this
          ._selectionIndexer = new a.SelectionIndexes(bitmapCoordinatesPane_t.timeScale())
      }
      update() {
        this._invalidated = !0
      }
      renderer() {
        return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer
      }
      _updateImpl() {
        this._renderer.clear();
        const bitmapCoordinatesPane_e = this._model.timeScale(),
          bitmapCoordinatesPane_t = this._source.priceScale();
        if (bitmapCoordinatesPane_e.isEmpty() || !bitmapCoordinatesPane_t || bitmapCoordinatesPane_t.isEmpty()) return;
        const i = bitmapCoordinatesPane_e.visibleBarsStrictRange();
        if (null === i) return;
        if (0 === this._source.bars().size()) return;
        const n = this._source.firstValue();
        if (null === n) return;
        const a = this._source.nearestIndex(i.firstBar() - 1, c.PlotRowSearchMode.NearestLeft) ?? i.firstBar() - 1,
          d = this._source.nearestIndex(i.lastBar() + 1, c.PlotRowSearchMode.NearestRight) ?? i.lastBar() + 1;
        this._hlcAreaCache.invalidateCache(), this._hlcAreaCache.setStartIndex(a), this._barsBorders
        .invalidateCache(), this._highPoints.invalidateCache(), this._lowPoints.invalidateCache(), this._closePoints
          .invalidateCache(), this._filledAreas.invalidateCache();
        let p, m, g;
        this._source.bars().range(a, d).each(((bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) => {
          if (this._hlcAreaCache.isValidIndex(bitmapCoordinatesPane_e)) {
            const i = this._hlcAreaCache.at(bitmapCoordinatesPane_e);
            i.close = bitmapCoordinatesPane_t[4], i.high = bitmapCoordinatesPane_t[2], i.low = bitmapCoordinatesPane_t[3]
          }
          return !1
        }));
        const f = new Map,
          y = a + this._hlcAreaCache.length();
        for (let bitmapCoordinatesPane_e = a; bitmapCoordinatesPane_e < y; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_t = this._hlcAreaCache.at(bitmapCoordinatesPane_e),
            i = bitmapCoordinatesPane_t.close ?? null,
            bitmapCoordinatesPane_s = bitmapCoordinatesPane_t.high ?? null,
            o = bitmapCoordinatesPane_t.low ?? null;
          (null !== i || null !== bitmapCoordinatesPane_s || null !== o || Number.isFinite(p) || Number.isFinite(m) || Number.isFinite(
          g)) && (p = i, m = bitmapCoordinatesPane_s, g = o, this._highPoints.push(bitmapCoordinatesPane_s), this._closePoints.push(i), this._lowPoints.push(o),
            this._barsBorders.push({
              timePointIndex: bitmapCoordinatesPane_e,
              left: NaN,
              center: NaN,
              right: NaN
            }), f.set(bitmapCoordinatesPane_e, this._barsBorders.length() - 1))
        }
        bitmapCoordinatesPane_t.pricesArrayToCoordinates(this._highPoints.data(), n, this._highPoints.length()), bitmapCoordinatesPane_t.pricesArrayToCoordinates(
          this._closePoints.data(), n, this._closePoints.length()), bitmapCoordinatesPane_t.pricesArrayToCoordinates(this._lowPoints
        .data(), n, this._lowPoints.length()), bitmapCoordinatesPane_e.fillBarBorders(this._barsBorders.data(), {
          startItemIndex: 0,
          endItemIndex: this._barsBorders.length()
        });
        const v = this._source.properties().childs().hlcAreaStyle.childs(),
          S = v.highCloseFillColor.value(),
          b = v.closeLowFillColor.value(),
          w = this._filledAreas.get(S) ?? new r.AreaBackgroundItemsGroup({
            type: 0,
            color: S
          }),
          C = w.newItem() ?? new r.AreaBackgroundItem;
        w.push(C), this._filledAreas.set(S, w);
        const T = this._filledAreas.get(b) ?? new r.AreaBackgroundItemsGroup({
            type: 0,
            color: b
          }),
          P = T.newItem() ?? new r.AreaBackgroundItem;
        T.push(P), this._filledAreas.set(b, T);
        const x = [],
          M = [],
          I = [],
          A = this._barsBorders.length();
        for (let bitmapCoordinatesPane_e = 0; bitmapCoordinatesPane_e < A; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_t = this._closePoints.at(bitmapCoordinatesPane_e),
            i = this._highPoints.at(bitmapCoordinatesPane_e),
            bitmapCoordinatesPane_s = this._lowPoints.at(bitmapCoordinatesPane_e),
            o = this._barsBorders.at(bitmapCoordinatesPane_e),
            n = o.center,
            r = (0, h.coordinateIsValid)(bitmapCoordinatesPane_t),
            a = (0, h.coordinateIsValid)(i),
            l = (0, h.coordinateIsValid)(bitmapCoordinatesPane_s);
          r && a && l && (C.addPoints1Point(n, i), C.addPoints2Point(n, bitmapCoordinatesPane_t), P.addPoints1Point(n, bitmapCoordinatesPane_t), P
            .addPoints2Point(n, bitmapCoordinatesPane_s), x.push({
              y: i,
              ...o
            }), M.push({
              y: bitmapCoordinatesPane_t,
              ...o
            }), I.push({
              y: bitmapCoordinatesPane_s,
              ...o
            }))
        }
        const L = bitmapCoordinatesPane_e.barSpacing();
        if (this._renderer.append(new r.AreaBackgroundRenderer({
            barSpacing: L,
            colorAreas: this._filledAreas
          })), v.lowLineVisible.value() && this._renderer.append(new _.PaneRendererLine({
            barSpacing: L,
            items: I,
            simpleMode: !0,
            withMarkers: !1,
            lineColor: v.lowLineColor.value(),
            lineStyle: v.lowLineStyle.value(),
            lineWidth: v.lowLineWidth.value(),
            skipHoles: !0
          })), v.highLineVisible.value() && this._renderer.append(new _.PaneRendererLine({
            barSpacing: L,
            items: x,
            simpleMode: !0,
            withMarkers: !1,
            lineColor: v.highLineColor.value(),
            lineStyle: v.highLineStyle.value(),
            lineWidth: v.highLineWidth.value(),
            skipHoles: !0
          })), this._renderer.append(new _.PaneRendererLine({
            barSpacing: L,
            items: M,
            simpleMode: !0,
            withMarkers: !1,
            lineColor: v.closeLineColor.value(),
            lineStyle: v.closeLineStyle.value(),
            lineWidth: v.closeLineWidth.value(),
            skipHoles: !0
          })), this._model.selection().isSelected(this._source) && this._isMarkersEnabled) {
          const bitmapCoordinatesPane_t = this._selectionIndexer.indexes(),
            i = [],
            n = [],
            r = (0, o.ensureNotNull)(this._model.paneForSource(this._source)).height();
          for (let bitmapCoordinatesPane_e = 0; bitmapCoordinatesPane_e < bitmapCoordinatesPane_t.length; bitmapCoordinatesPane_e++) {
            const o = bitmapCoordinatesPane_t[bitmapCoordinatesPane_e],
              a = f.get(o);
            if (void 0 === a) continue;
            const l = this._closePoints.at(a),
              c = this._barsBorders.at(a).center;
            i.push({
              point: new bitmapCoordinatesPane_s.Point(c, l)
            }), n.push(this._model.backgroundColorAtYPercentFromTop(l / r))
          }
          this._renderer.append(new l.SelectionRenderer({
            bgColors: n,
            points: i,
            visible: !0,
            barSpacing: bitmapCoordinatesPane_e.barSpacing(),
            hittestResult: u.HitTarget.Regular
          }))
        } else this._selectionIndexer.clear()
      }
    }