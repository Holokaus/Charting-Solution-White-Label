/**
 * Module 27593 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

27593: (series_e, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      ExecutionLineAdapter: () => _,
      ExecutionsPositionController: () => u,
      LineToolExecution: () => p
    });
    var series_s = i(50151),
      o = i(41414),
      n = i(32853),
      r = i(78176),
      series_a = i(5471),
      l = i(37103),
      c = i(67777),
      h = i(40472);
    const d = c.sortSourcesPreOrdered.LineToolExecution;
    class u {
      constructor(series_e) {
        this._pane = series_e
      }
      getXYCoordinate(series_e, t, i) {
        let o = 0;
        const n = series_e.getDirection(),
          r = "buy" === n,
          l = this._pane.model().mainSeries();
        if (l.bars) {
          const series_e = r ? 10 : -10,
            t = l.bars().search(i, series_a.PlotRowSearchMode.NearestLeft);
          if (null !== t) {
            i = t.index;
            const n = r ? t.value[3] : t.value[2],
              series_a = l.priceScale(),
              c = (0, series_s.ensureNotNull)(l.firstValue());
            o = series_a.priceToCoordinate(n, c) + series_e
          }
        }
        series_e.setAlignedTimePointIndex(i);
        const c = t.visibleBarsStrictRange();
        if (!isFinite(i) || null === c || i > c.lastBar() || i < c.firstBar()) return {
          x: -1,
          y: -1
        };
        const h = u._cachedByBarIndexOrderedExecutions[i] || this._pane.sourcesByGroup().all();
        for (let series_s = h.length - 1; series_s >= 0; --series_s) {
          const series_a = h[series_s];
          if (!(series_a instanceof p)) continue;
          if ((series_a.adapter().alignedTimePointIndex() ?? t.timePointToIndex(series_a.adapter().getTime(), 1)) !== i || series_a
            .adapter().getDirection() !== n) continue;
          if (series_a === series_e.line()) break;
          const l = series_a.adapter().height();
          o = r ? o + l : o - l
        }
        return {
          x: t.indexToCoordinate(i),
          y: o
        }
      }
      static recreateOrderedByBarsSourcesCache(series_e) {
        this.clearOrderedByBarsSourcesCache();
        const t = series_e.sourcesByGroup().all();
        for (const series_e of t) {
          if (!(series_e instanceof p)) continue;
          const t = series_e.adapter().alignedTimePointIndex();
          if (void 0 === t) continue;
          const i = u._cachedByBarIndexOrderedExecutions[t] || [];
          u._cachedByBarIndexOrderedExecutions[t] = i, i.push(series_e)
        }
      }
      static clearOrderedByBarsSourcesCache() {
        u._cachedByBarIndexOrderedExecutions = {}
      }
    }
    u._cachedByBarIndexOrderedExecutions = {};
    class _ {
      constructor(series_e, t) {
        this._unixtime = NaN, this._line = series_e, this._model = t
      }
      alignedTimePointIndex() {
        return this._alignedTimePointIndex
      }
      setAlignedTimePointIndex(series_e) {
        this._alignedTimePointIndex = series_e
      }
      line() {
        return this._line
      }
      getIndex() {
        return this._model.timeScale().baseIndex() - this._line.points()[0].index
      }
      setIndex(series_e) {
        const t = this._model.timeScale().baseIndex() - Math.abs(series_e);
        this._line.startMoving({
          logical: this._line.points()[0]
        });
        const i = {
          ...this._line.points()[0]
        };
        return i.index = t, this._line.move({
          logical: i
        }), this._line.endMoving(!1), this
      }
      getTime() {
        return this._unixtime
      }
      setTime(series_e) {
        return this._unixtime = series_e, this._line.restorePoints([{
          offset: 0,
          price: this.getPrice(),
          time_t: this._unixtime
        }], []), this._line.createServerPoints(), this
      }
      getPrice() {
        return this._line.points().length > 0 ? this._line.points()[0].price : this._line.normalizedPoints().length >
          0 ? this._line.normalizedPoints()[0].price : NaN
      }
      setPrice(series_e) {
        return this._line.points().length > 0 && (this._line.points()[0].price = series_e), this._line.normalizedPoints()
          .length > 0 && (this._line.normalizedPoints()[0].price = series_e), this
      }
      getText() {
        return this._line.properties().childs().text.value()
      }
      setText(series_e) {
        return this._line.properties().childs().text.setValue(series_e || ""), this._line.updateAllViewsAndRedraw((0, h
          .sourceChangeEvent)(this._line.id())), this
      }
      getArrowHeight() {
        return this._line.properties().childs().arrowHeight.value()
      }
      setArrowHeight(series_e) {
        return this._line.properties().childs().arrowHeight.setValue(series_e || 5), this
      }
      getArrowSpacing() {
        return this._line.properties().childs().arrowSpacing.value()
      }
      setArrowSpacing(series_e) {
        return this._line.properties().childs().arrowSpacing.setValue(series_e || 1), this
      }
      getDirection() {
        return this._line.properties().childs().direction.value()
      }
      setDirection(series_e) {
        return this._line.properties().childs().direction.setValue(series_e || "buy"), this
      }
      getArrowColor() {
        const series_e = this._line.properties().childs();
        return "buy" === this.getDirection() ? series_e.arrowBuyColor.value() : series_e.arrowSellColor.value()
      }
      setArrowColor(series_e) {
        return "buy" === this.getDirection() ? this.setArrowBuyColor(series_e) : this.setArrowSellColor(series_e), this
      }
      setArrowBuyColor(series_e) {
        return this._line.properties().childs().arrowBuyColor.setValue(series_e), this
      }
      setArrowSellColor(series_e) {
        return this._line.properties().childs().arrowSellColor.setValue(series_e), this
      }
      getTextColor() {
        const series_e = this._line.properties().childs();
        return n.getColorFromProperties(series_e.textColor, series_e.textTransparency)
      }
      setTextColor(series_e) {
        const t = this._line.properties().childs();
        return n.setColorToProperties(series_e, t.textColor, t.textTransparency), this
      }
      getFont() {
        const series_e = this._line.properties().childs();
        return n.getFontFromProperties(series_e.fontFamily, series_e.fontSize, series_e.fontBold, series_e.fontItalic)
      }
      setFont(series_e) {
        const t = this._line.properties().childs();
        return n.setFontToProperties(series_e, t.fontFamily, t.fontSize, t.fontBold, t.fontItalic), this
      }
      setTooltip(series_e) {
        return null == series_e ? series_e = "" : series_e += "", this._line.properties().childs().tooltip.setValue(series_e), this
      }
      getTooltip() {
        return this._line.properties().childs().tooltip.value()
      }
      remove() {
        this._model.removeSource(this._line)
      }
      getPoints() {
        return this._line.points()
      }
      height() {
        const series_e = this.getArrowHeight(),
          t = this.getArrowSpacing();
        let i = 0;
        this.getText() && (i = n.fontHeight(this.getFont()));
        return series_e + t + i + 10
      }
    }
    class p extends o.LineDataSource {
      constructor(series_e, t, series_s, o) {
        super(series_e, t ?? p.createProperties(series_e.backgroundTheme().spawnOwnership()), series_s, o), this._adapter = new _(this,
            series_e), this.customization.forcePriceAxisLabel = !1, this.customization.disableErasing = !0, this
          .setSelectionEnabled(!1), Promise.all([i.series_e(6290), i.series_e(986), i.series_e(6668), i.series_e(1583)]).then(i.bind(i, 52361))
          .then((series_e => {
            this._setPaneViews([new series_e.ExecutionPaneView(this, this._model)])
          }))
      }
      adapter() {
        return this._adapter
      }
      zorder() {
        return d
      }
      isSpeciallyZOrderedSource() {
        return !0
      }
      pointsCount() {
        return 1
      }
      name() {
        return "Execution"
      }
      hasContextMenu() {
        return !1
      }
      state() {
        return {}
      }
      updateAllViews(series_e) {
        if (this._isVisible()) return super.updateAllViews(series_e)
      }
      priceAxisViews(series_e, t) {
        return this._isVisible() ? super.priceAxisViews(series_e, t) : null
      }
      paneViews() {
        return window.TradingView.printing && !l.enabled("snapshot_trading_drawings") ? null : this._isVisible() ?
          super.paneViews() : null
      }
      userEditEnabled() {
        return !1
      }
      showInObjectTree() {
        return !1
      }
      cloneable() {
        return !1
      }
      copiable() {
        return !1
      }
      isSynchronizable() {
        return !1
      }
      static createProperties(series_e, t) {
        const i = new r.DefaultProperty({
          defaultName: "linetoolexecution",
          state: t,
          useUserPreferences: !1,
          theme: series_e
        });
        return p._configureProperties(i), i
      }
      _isVisible() {
        return this._model.properties().childs().tradingProperties.childs().showExecutions.value()
      }
    }
}
