/**
 * Module 46340 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

46340: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesHLCAreaPaneView: () => bitmapCoordinatesPane_g
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(10555),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(50151),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(37103),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(97126),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(13173),
      bitmapCoordinatesPane_l = bitmapCoordinatesPane_i(45801),
      bitmapCoordinatesPane_c = bitmapCoordinatesPane_i(5471),
      bitmapCoordinatesPane_h = bitmapCoordinatesPane_i(4539),
      bitmapCoordinatesPane_d = bitmapCoordinatesPane_i(94602),
      bitmapCoordinatesPane_u = bitmapCoordinatesPane_i(2383),
      _ = bitmapCoordinatesPane_i(79268),
      bitmapCoordinatesPane_p = bitmapCoordinatesPane_i(7793);
    class bitmapCoordinatesPane_m extends bitmapCoordinatesPane_p.ObjectValuesCache {
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
    class bitmapCoordinatesPane_g {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._isMarkersEnabled = (0, bitmapCoordinatesPane_n.enabled)("source_selection_markers"), this._hlcAreaCache = new bitmapCoordinatesPane_m, this
          ._highPoints = new bitmapCoordinatesPane_p.CachedContainer, this._closePoints = new bitmapCoordinatesPane_p.CachedContainer, this._lowPoints = new bitmapCoordinatesPane_p
          .CachedContainer, this._barsBorders = new bitmapCoordinatesPane_p.CachedContainer, this._filledAreas = new bitmapCoordinatesPane_r.CachedMap, this
          ._renderer = new bitmapCoordinatesPane_d.CompositeRenderer, this._invalidated = !0, this._source = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t, this
          ._selectionIndexer = new bitmapCoordinatesPane_a.SelectionIndexes(bitmapCoordinatesPane_t.timeScale())
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
        const bitmapCoordinatesPane_i = bitmapCoordinatesPane_e.visibleBarsStrictRange();
        if (null === bitmapCoordinatesPane_i) return;
        if (0 === this._source.bars().size()) return;
        const bitmapCoordinatesPane_n = this._source.firstValue();
        if (null === bitmapCoordinatesPane_n) return;
        const bitmapCoordinatesPane_a = this._source.nearestIndex(bitmapCoordinatesPane_i.firstBar() - 1, bitmapCoordinatesPane_c.PlotRowSearchMode.NearestLeft) ?? bitmapCoordinatesPane_i.firstBar() - 1,
          bitmapCoordinatesPane_d = this._source.nearestIndex(bitmapCoordinatesPane_i.lastBar() + 1, bitmapCoordinatesPane_c.PlotRowSearchMode.NearestRight) ?? bitmapCoordinatesPane_i.lastBar() + 1;
        this._hlcAreaCache.invalidateCache(), this._hlcAreaCache.setStartIndex(bitmapCoordinatesPane_a), this._barsBorders
        .invalidateCache(), this._highPoints.invalidateCache(), this._lowPoints.invalidateCache(), this._closePoints
          .invalidateCache(), this._filledAreas.invalidateCache();
        let bitmapCoordinatesPane_p, bitmapCoordinatesPane_m, bitmapCoordinatesPane_g;
        this._source.bars().range(bitmapCoordinatesPane_a, bitmapCoordinatesPane_d).each(((bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) => {
          if (this._hlcAreaCache.isValidIndex(bitmapCoordinatesPane_e)) {
            const bitmapCoordinatesPane_i = this._hlcAreaCache.at(bitmapCoordinatesPane_e);
            bitmapCoordinatesPane_i.close = bitmapCoordinatesPane_t[4], bitmapCoordinatesPane_i.high = bitmapCoordinatesPane_t[2], bitmapCoordinatesPane_i.low = bitmapCoordinatesPane_t[3]
          }
          return !1
        }));
        const bitmapCoordinatesPane_f = new Map,
          bitmapCoordinatesPane_y = bitmapCoordinatesPane_a + this._hlcAreaCache.length();
        for (let bitmapCoordinatesPane_e = bitmapCoordinatesPane_a; bitmapCoordinatesPane_e < bitmapCoordinatesPane_y; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_t = this._hlcAreaCache.at(bitmapCoordinatesPane_e),
            bitmapCoordinatesPane_i = bitmapCoordinatesPane_t.close ?? null,
            bitmapCoordinatesPane_s = bitmapCoordinatesPane_t.high ?? null,
            bitmapCoordinatesPane_o = bitmapCoordinatesPane_t.low ?? null;
          (null !== bitmapCoordinatesPane_i || null !== bitmapCoordinatesPane_s || null !== bitmapCoordinatesPane_o || Number.isFinite(bitmapCoordinatesPane_p) || Number.isFinite(bitmapCoordinatesPane_m) || Number.isFinite(
          bitmapCoordinatesPane_g)) && (bitmapCoordinatesPane_p = bitmapCoordinatesPane_i, bitmapCoordinatesPane_m = bitmapCoordinatesPane_s, bitmapCoordinatesPane_g = bitmapCoordinatesPane_o, this._highPoints.push(bitmapCoordinatesPane_s), this._closePoints.push(bitmapCoordinatesPane_i), this._lowPoints.push(bitmapCoordinatesPane_o),
            this._barsBorders.push({
              timePointIndex: bitmapCoordinatesPane_e,
              left: NaN,
              center: NaN,
              right: NaN
            }), bitmapCoordinatesPane_f.set(bitmapCoordinatesPane_e, this._barsBorders.length() - 1))
        }
        bitmapCoordinatesPane_t.pricesArrayToCoordinates(this._highPoints.data(), bitmapCoordinatesPane_n, this._highPoints.length()), bitmapCoordinatesPane_t.pricesArrayToCoordinates(
          this._closePoints.data(), bitmapCoordinatesPane_n, this._closePoints.length()), bitmapCoordinatesPane_t.pricesArrayToCoordinates(this._lowPoints
        .data(), bitmapCoordinatesPane_n, this._lowPoints.length()), bitmapCoordinatesPane_e.fillBarBorders(this._barsBorders.data(), {
          startItemIndex: 0,
          endItemIndex: this._barsBorders.length()
        });
        const bitmapCoordinatesPane_v = this._source.properties().childs().hlcAreaStyle.childs(),
          S = bitmapCoordinatesPane_v.highCloseFillColor.value(),
          bitmapCoordinatesPane_b = bitmapCoordinatesPane_v.closeLowFillColor.value(),
          bitmapCoordinatesPane_w = this._filledAreas.get(S) ?? new bitmapCoordinatesPane_r.AreaBackgroundItemsGroup({
            type: 0,
            color: S
          }),
          C = bitmapCoordinatesPane_w.newItem() ?? new bitmapCoordinatesPane_r.AreaBackgroundItem;
        bitmapCoordinatesPane_w.push(C), this._filledAreas.set(S, bitmapCoordinatesPane_w);
        const T = this._filledAreas.get(bitmapCoordinatesPane_b) ?? new bitmapCoordinatesPane_r.AreaBackgroundItemsGroup({
            type: 0,
            color: bitmapCoordinatesPane_b
          }),
          P = T.newItem() ?? new bitmapCoordinatesPane_r.AreaBackgroundItem;
        T.push(P), this._filledAreas.set(bitmapCoordinatesPane_b, T);
        const bitmapCoordinatesPane_x = [],
          M = [],
          I = [],
          A = this._barsBorders.length();
        for (let bitmapCoordinatesPane_e = 0; bitmapCoordinatesPane_e < A; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_t = this._closePoints.at(bitmapCoordinatesPane_e),
            bitmapCoordinatesPane_i = this._highPoints.at(bitmapCoordinatesPane_e),
            bitmapCoordinatesPane_s = this._lowPoints.at(bitmapCoordinatesPane_e),
            bitmapCoordinatesPane_o = this._barsBorders.at(bitmapCoordinatesPane_e),
            bitmapCoordinatesPane_n = bitmapCoordinatesPane_o.center,
            bitmapCoordinatesPane_r = (0, bitmapCoordinatesPane_h.coordinateIsValid)(bitmapCoordinatesPane_t),
            bitmapCoordinatesPane_a = (0, bitmapCoordinatesPane_h.coordinateIsValid)(bitmapCoordinatesPane_i),
            bitmapCoordinatesPane_l = (0, bitmapCoordinatesPane_h.coordinateIsValid)(bitmapCoordinatesPane_s);
          bitmapCoordinatesPane_r && bitmapCoordinatesPane_a && bitmapCoordinatesPane_l && (C.addPoints1Point(bitmapCoordinatesPane_n, bitmapCoordinatesPane_i), C.addPoints2Point(bitmapCoordinatesPane_n, bitmapCoordinatesPane_t), P.addPoints1Point(bitmapCoordinatesPane_n, bitmapCoordinatesPane_t), P
            .addPoints2Point(bitmapCoordinatesPane_n, bitmapCoordinatesPane_s), bitmapCoordinatesPane_x.push({
              bitmapCoordinatesPane_y: bitmapCoordinatesPane_i,
              ...bitmapCoordinatesPane_o
            }), M.push({
              bitmapCoordinatesPane_y: bitmapCoordinatesPane_t,
              ...bitmapCoordinatesPane_o
            }), I.push({
              bitmapCoordinatesPane_y: bitmapCoordinatesPane_s,
              ...bitmapCoordinatesPane_o
            }))
        }
        const L = bitmapCoordinatesPane_e.barSpacing();
        if (this._renderer.append(new bitmapCoordinatesPane_r.AreaBackgroundRenderer({
            barSpacing: L,
            colorAreas: this._filledAreas
          })), bitmapCoordinatesPane_v.lowLineVisible.value() && this._renderer.append(new _.PaneRendererLine({
            barSpacing: L,
            items: I,
            simpleMode: !0,
            withMarkers: !1,
            lineColor: bitmapCoordinatesPane_v.lowLineColor.value(),
            lineStyle: bitmapCoordinatesPane_v.lowLineStyle.value(),
            lineWidth: bitmapCoordinatesPane_v.lowLineWidth.value(),
            skipHoles: !0
          })), bitmapCoordinatesPane_v.highLineVisible.value() && this._renderer.append(new _.PaneRendererLine({
            barSpacing: L,
            items: bitmapCoordinatesPane_x,
            simpleMode: !0,
            withMarkers: !1,
            lineColor: bitmapCoordinatesPane_v.highLineColor.value(),
            lineStyle: bitmapCoordinatesPane_v.highLineStyle.value(),
            lineWidth: bitmapCoordinatesPane_v.highLineWidth.value(),
            skipHoles: !0
          })), this._renderer.append(new _.PaneRendererLine({
            barSpacing: L,
            items: M,
            simpleMode: !0,
            withMarkers: !1,
            lineColor: bitmapCoordinatesPane_v.closeLineColor.value(),
            lineStyle: bitmapCoordinatesPane_v.closeLineStyle.value(),
            lineWidth: bitmapCoordinatesPane_v.closeLineWidth.value(),
            skipHoles: !0
          })), this._model.selection().isSelected(this._source) && this._isMarkersEnabled) {
          const bitmapCoordinatesPane_t = this._selectionIndexer.indexes(),
            bitmapCoordinatesPane_i = [],
            bitmapCoordinatesPane_n = [],
            bitmapCoordinatesPane_r = (0, bitmapCoordinatesPane_o.ensureNotNull)(this._model.paneForSource(this._source)).height();
          for (let bitmapCoordinatesPane_e = 0; bitmapCoordinatesPane_e < bitmapCoordinatesPane_t.length; bitmapCoordinatesPane_e++) {
            const bitmapCoordinatesPane_o = bitmapCoordinatesPane_t[bitmapCoordinatesPane_e],
              bitmapCoordinatesPane_a = bitmapCoordinatesPane_f.get(bitmapCoordinatesPane_o);
            if (void 0 === bitmapCoordinatesPane_a) continue;
            const bitmapCoordinatesPane_l = this._closePoints.at(bitmapCoordinatesPane_a),
              bitmapCoordinatesPane_c = this._barsBorders.at(bitmapCoordinatesPane_a).center;
            bitmapCoordinatesPane_i.push({
              point: new bitmapCoordinatesPane_s.Point(bitmapCoordinatesPane_c, bitmapCoordinatesPane_l)
            }), bitmapCoordinatesPane_n.push(this._model.backgroundColorAtYPercentFromTop(bitmapCoordinatesPane_l / bitmapCoordinatesPane_r))
          }
          this._renderer.append(new bitmapCoordinatesPane_l.SelectionRenderer({
            bgColors: bitmapCoordinatesPane_n,
            points: bitmapCoordinatesPane_i,
            visible: !0,
            barSpacing: bitmapCoordinatesPane_e.barSpacing(),
            hittestResult: bitmapCoordinatesPane_u.HitTarget.Regular
          }))
        } else this._selectionIndexer.clear()
      }
    }