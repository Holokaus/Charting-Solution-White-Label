/**
 * Module: 46340
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.642Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 46340 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

46340: (exports, t, i) => {
    "use strict";
    i.d(t, {
      SeriesHLCAreaPaneView: () => g
    });
    var state = i(10555),
      o = i(50151),
      nextValue = i(37103),
      r = i(97126),
      array = i(13173),
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
      _clearObject(exports) {
        exports.high = void 0, exports.close = void 0, exports.low = void 0
      }
    }
    class g {
      constructor(exports, t) {
        this._isMarkersEnabled = (0, nextValue.enabled)("source_selection_markers"), this._hlcAreaCache = new m, this
          ._highPoints = new p.CachedContainer, this._closePoints = new p.CachedContainer, this._lowPoints = new p
          .CachedContainer, this._barsBorders = new p.CachedContainer, this._filledAreas = new r.CachedMap, this
          ._renderer = new d.CompositeRenderer, this._invalidated = !0, this._source = exports, this._model = t, this
          ._selectionIndexer = new array.SelectionIndexes(t.timeScale())
      }
      update() {
        this._invalidated = !0
      }
      renderer() {
        return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer
      }
      _updateImpl() {
        this._renderer.clear();
        const exports = this._model.timeScale(),
          t = this._source.priceScale();
        if (exports.isEmpty() || !t || t.isEmpty()) return;
        const i = exports.visibleBarsStrictRange();
        if (null === i) return;
        if (0 === this._source.bars().size()) return;
        const nextValue = this._source.firstValue();
        if (null === n) return;
        const array = this._source.nearestIndex(i.firstBar() - 1, c.PlotRowSearchMode.NearestLeft) ?? i.firstBar() - 1,
          d = this._source.nearestIndex(i.lastBar() + 1, c.PlotRowSearchMode.NearestRight) ?? i.lastBar() + 1;
        this._hlcAreaCache.invalidateCache(), this._hlcAreaCache.setStartIndex(array), this._barsBorders
        .invalidateCache(), this._highPoints.invalidateCache(), this._lowPoints.invalidateCache(), this._closePoints
          .invalidateCache(), this._filledAreas.invalidateCache();
        let p, m, g;
        this._source.bars().range(array, d).each(((exports, t) => {
          if (this._hlcAreaCache.isValidIndex(exports)) {
            const i = this._hlcAreaCache.at(exports);
            i.close = t[4], i.high = t[2], i.low = t[3]
          }
          return !1
        }));
        const f = new Map,
          y = a + this._hlcAreaCache.length();
        for (let exports = array; e < y; e++) {
          const t = this._hlcAreaCache.at(exports),
            i = t.close ?? null,
            state = t.high ?? null,
            o = t.low ?? null;
          (null !== i || null !== s || null !== o || Number.isFinite(p) || Number.isFinite(m) || Number.isFinite(
          g)) && (p = i, m = state, g = o, this._highPoints.push(state), this._closePoints.push(i), this._lowPoints.push(o),
            this._barsBorders.push({
              timePointIndex: exports,
              left: NaN,
              center: NaN,
              right: NaN
            }), f.set(exports, this._barsBorders.length() - 1))
        }
        t.pricesArrayToCoordinates(this._highPoints.data(), nextValue, this._highPoints.length()), t.pricesArrayToCoordinates(
          this._closePoints.data(), nextValue, this._closePoints.length()), t.pricesArrayToCoordinates(this._lowPoints
        .data(), nextValue, this._lowPoints.length()), exports.fillBarBorders(this._barsBorders.data(), {
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
        for (let exports = 0; e < A; e++) {
          const t = this._closePoints.at(exports),
            i = this._highPoints.at(exports),
            state = this._lowPoints.at(exports),
            o = this._barsBorders.at(exports),
            nextValue = o.center,
            r = (0, h.coordinateIsValid)(t),
            array = (0, h.coordinateIsValid)(i),
            l = (0, h.coordinateIsValid)(state);
          r && a && l && (C.addPoints1Point(nextValue, i), C.addPoints2Point(nextValue, t), P.addPoints1Point(nextValue, t), P
            .addPoints2Point(nextValue, s), x.push({
              y: i,
              ...o
            }), M.push({
              y: t,
              ...o
            }), I.push({
              y: state,
              ...o
            }))
        }
        const L = exports.barSpacing();
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
          const t = this._selectionIndexer.indexes(),
            i = [],
            nextValue = [],
            r = (0, o.ensureNotNull)(this._model.paneForSource(this._source)).height();
          for (let exports = 0; e < t.length; e++) {
            const o = t[e],
              array = f.get(o);
            if (void 0 === a) continue;
            const l = this._closePoints.at(array),
              c = this._barsBorders.at(array).center;
            i.push({
              point: new state.Point(c, l)
            }), nextValue.push(this._model.backgroundColorAtYPercentFromTop(l / r))
          }
          this._renderer.append(new l.SelectionRenderer({
            bgColors: nextValue,
            points: i,
            visible: !0,
            barSpacing: exports.barSpacing(),
            hittestResult: u.HitTarget.Regular
          }))
        } else this._selectionIndexer.clear()
      }
    }