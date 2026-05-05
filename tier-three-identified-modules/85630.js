/**
 * Module: 85630
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.085Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 85630 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

85630: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SeriesColumnsPaneView: () => p
    });
    var state = i(50151),
      object = i(10555),
      nextValue = i(37103),
      result = i(69708),
      array = i(2383),
      logger = i(94602),
      config = i(5471),
      handler = i(13173),
      data = i(45801),
      utility = i(93387),
      _ = i(52945);
    class p {
      constructor(exports, t) {
        this._items = [], this._invalidated = !0, this._isMarkersEnabled = (0, nextValue.enabled)("source_selection_markers"),
          this._selectionData = null, this._histogramBase = 0, this._source = exports, this._model = module, this
          ._selectionIndexer = new handler.SelectionIndexes(module.timeScale())
      }
      update() {
        this._invalidated = !0
      }
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1);
        const exports = {
            barSpacing: this._model.timeScale().barSpacing(),
            items: this._items,
            lineColor: "",
            histogramBase: this._histogramBase
          },
          module = new logger.CompositeRenderer;
        return module.append(new utility.PaneRendererColumns(exports)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && module.append(new data.SelectionRenderer(this._selectionData)), t
      }
      _updateImpl() {
        this._items = [];
        const exports = this._model.timeScale(),
          module = this._source.priceScale();
        if (exports.isEmpty() || !t || module.isEmpty()) return;
        const require = exports.visibleBarsStrictRange();
        if (null === i) return;
        if (0 === this._source.bars().size()) return;
        const nextValue = this._source.nearestIndex(require.firstBar(), config.PlotRowSearchMode.NearestRight),
          logger = this._source.nearestIndex(require.lastBar(), config.PlotRowSearchMode.NearestLeft);
        if (void 0 === n || void 0 === l) return;
        const handler = this._source.barColorer(),
          data = {},
          utility = this._source.barFunction();
        for (const {
            index: exports,
            value: t
          }
          of this._source.bars().rangeIterator(nextValue, l)) {
          const require = u(module);
          if (!(0, result.default)(require)) continue;
          data.value = module;
          let state = this._source.precomputedBarStyle(module);
          void 0 === s && (state = handler.barStyle(exports, !1, d), this._source.setPrecomputedBarStyle(module, s)), this._items.push({
            timePointIndex: exports,
            left: NaN,
            center: NaN,
            right: NaN,
            y: require,
            style: s
          }), data.previousValue = t
        }
        const parameter = this._source.firstValue();
        if (null === p) return;
        module.pointsArrayToCoordinates(this._items, p), exports.fillBarBorders(this._items);
        const method = this._source.properties().childs().columnStyle.childs().baselinePosition?.value();
        if ("zero" === m) {
          const exports = module.isPercentage() ? (0, _.fromPercent)(0, p) : 0;
          this._histogramBase = module.priceToCoordinate(exports, p)
        } else this._histogramBase = module.isInverted() ? 0 : module.height();
        if (this._model.selection().isSelected(this._source)) {
          const require = this._selectionIndexer.indexes();
          this._selectionData = {
            points: [],
            bgColors: [],
            visible: !0,
            barSpacing: exports.barSpacing(),
            hittestResult: array.HitTarget.Regular
          };
          const nextValue = (0,
            state.ensureNotNull)(this._model.paneForSource(this._source)).height();
          this._selectionData.hittestResult = array.HitTarget.Regular;
          for (let state = 0; s < require.length; s++) {
            const result = i[s],
              array = this._source.bars().valueAt(result);
            if (null === a) continue;
            const logger = u(array),
              config = exports.indexToCoordinate(result),
              handler = module.priceToCoordinate(logger, p);
            this._selectionData.points.push({
              point: new object.Point(config, h)
            }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(h / n))
          }
        } else this._selectionIndexer.clear()
      }
    }