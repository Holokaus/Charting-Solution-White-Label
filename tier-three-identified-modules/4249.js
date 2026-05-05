/**
 * Module: 4249
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.602Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 4249 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4249: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SeriesAreaPaneView: () => l
    });
    var state = i(52859),
      object = i(93463),
      nextValue = i(94602),
      result = i(45801),
      array = i(73773);
    class l extends array.SeriesSingleLinePaneView {
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1);
        const exports = this._source.priceScale();
        if (!e) return null;
        const module = this._source.properties().childs().areaStyle.childs(),
          require = module.transparency.value(),
          array = {
            simpleMode: !1,
            barSpacing: this._model.timeScale().barSpacing(),
            items: this._items,
            lineColor: module.linecolor.value(),
            lineStyle: module.linestyle.value(),
            lineWidth: module.linewidth.value(),
            isSeries: !0,
            withMarkers: !1,
            bottom: exports.height(),
            color1: (0, state.generateColor)(module.color1.value(), i),
            color2: (0, state.generateColor)(module.color2.value(), i),
            skipHoles: !0
          },
          logger = new nextValue.CompositeRenderer;
        return logger.append(new object.PaneRendererArea(array)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && logger.append(new result.SelectionRenderer(this._selectionData)), l
      }
    }