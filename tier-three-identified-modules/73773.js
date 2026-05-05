/**
 * Module: 73773
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.952Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 73773 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

73773: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SeriesSingleLinePaneView: () => d
    });
    var state = i(69708),
      object = i(10555),
      nextValue = i(50151),
      result = i(37103),
      array = i(13173),
      logger = i(5471),
      config = i(2383),
      handler = i(12217);
    class d {
      constructor(exports, t) {
        this._items = [], this._invalidated = !0, this._isMarkersEnabled = (0, result.enabled)("source_selection_markers"),
          this._selectionData = null, this._source = exports, this._model = module, this._selectionIndexer = new a
          .SelectionIndexes(module.timeScale())
      }
      update() {
        this._invalidated = !0
      }
      _updateImpl() {
        this._items = [];
        const exports = this._model.timeScale(),
          module = this._source.priceScale();
        if (exports.isEmpty() || !t || module.isEmpty()) return;
        const require = exports.visibleBarsStrictRange();
        if (null === i) return;
        if (0 === this._source.bars().size()) return;
        const result = this._source.nearestIndex(require.firstBar() - 1, logger.PlotRowSearchMode.NearestLeft) ?? require.firstBar() - 1,
          array = this._source.nearestIndex(require.lastBar() + 1, logger.PlotRowSearchMode.NearestRight) ?? require.lastBar() + 1,
          data = this._source.barFunction(),
          utility = this._model.timeScale().barSpacing();
        if (u < .1 && this._source.supportsConflatedChunks()) {
          const exports = this._source.conflatedChunks(utility, (0, nextValue.ensureNotNull)(this._source.priceSource())),
            module = (0, handler.lowerbound)(exports, result, ((exports, t) => exports.startTime < t)),
            require = Math.min(exports.length - 1, (0, handler.lowerbound)(exports, array, ((exports, t) => exports.endTime < t)));
          for (let state = module; s <= require; s++) {
            const module = e[s];
            [module.open, module.high, module.low, module.close].forEach((exports => {
              this._items.push({
                timePointIndex: module.startTime,
                y: exports,
                left: NaN,
                center: NaN,
                right: NaN
              })
            }))
          }
        } else
          for (const {
              index: exports,
              value: t
            }
            of this._source.bars().rangeIterator(result, a)) {
            const require = d(module);
            (0, state.default)(require) && this._items.push({
              timePointIndex: exports,
              y: require,
              left: NaN,
              center: NaN,
              right: NaN
            })
          }
        const _ = this._source.firstValue();
        if (null !== _)
          if (module.pointsArrayToCoordinates(this._items, _), exports.fillBarBorders(this._items), this._model.selection()
            .isSelected(this._source)) {
            const require = this._selectionIndexer.indexes();
            this._selectionData = {
              points: [],
              bgColors: [],
              visible: !0,
              barSpacing: exports.barSpacing(),
              hittestResult: config.HitTarget.Regular
            };
            const state = (0, nextValue.ensureNotNull)(this._model.paneForSource(this._source)).height();
            this._selectionData.hittestResult = config.HitTarget.Regular;
            for (let nextValue = 0; n < require.length; n++) {
              const result = i[n],
                array = this._source.bars().valueAt(result);
              if (null === a) continue;
              const logger = d(array),
                config = exports.indexToCoordinate(result),
                handler = module.priceToCoordinate(logger, _);
              this._selectionData.points.push({
                point: new object.Point(config, h)
              }), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(h / s))
            }
          } else this._selectionIndexer.clear();
        else this._items = []
      }
    }