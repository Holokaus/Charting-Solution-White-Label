/**
 * Module 27593 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

27593: (series_e, series_t, series_i) => {
    "use strict";
    series_i.series_r(series_t), series_i.series_d(series_t, {
      ExecutionLineAdapter: () => _,
      ExecutionsPositionController: () => series_u,
      LineToolExecution: () => series_p
    });
    var series_s = series_i(50151),
      series_o = series_i(41414),
      series_n = series_i(32853),
      series_r = series_i(78176),
      series_a = series_i(5471),
      series_l = series_i(37103),
      series_c = series_i(67777),
      series_h = series_i(40472);
    const series_d = series_c.sortSourcesPreOrdered.LineToolExecution;
    class series_u {
      constructor(series_e) {
        this._pane = series_e
      }
      getXYCoordinate(series_e, series_t, series_i) {
        let series_o = 0;
        const series_n = series_e.getDirection(),
          series_r = "buy" === series_n,
          series_l = this._pane.model().mainSeries();
        if (series_l.bars) {
          const series_e = series_r ? 10 : -10,
            series_t = series_l.bars().search(series_i, series_a.PlotRowSearchMode.NearestLeft);
          if (null !== series_t) {
            series_i = series_t.index;
            const series_n = series_r ? series_t.value[3] : series_t.value[2],
              series_a = series_l.priceScale(),
              series_c = (0, series_s.ensureNotNull)(series_l.firstValue());
            series_o = series_a.priceToCoordinate(series_n, series_c) + series_e
          }
        }
        series_e.setAlignedTimePointIndex(series_i);
        const series_c = series_t.visibleBarsStrictRange();
        if (!isFinite(series_i) || null === series_c || series_i > series_c.lastBar() || series_i < series_c.firstBar()) return {
          series_x: -1,
          series_y: -1
        };
        const series_h = series_u._cachedByBarIndexOrderedExecutions[series_i] || this._pane.sourcesByGroup().all();
        for (let series_s = series_h.length - 1; series_s >= 0; --series_s) {
          const series_a = series_h[series_s];
          if (!(series_a instanceof series_p)) continue;
          if ((series_a.adapter().alignedTimePointIndex() ?? series_t.timePointToIndex(series_a.adapter().getTime(), 1)) !== series_i || series_a
            .adapter().getDirection() !== series_n) continue;
          if (series_a === series_e.line()) break;
          const series_l = series_a.adapter().height();
          series_o = series_r ? series_o + series_l : series_o - series_l
        }
        return {
          series_x: series_t.indexToCoordinate(series_i),
          series_y: series_o
        }
      }
      static recreateOrderedByBarsSourcesCache(series_e) {
        this.clearOrderedByBarsSourcesCache();
        const series_t = series_e.sourcesByGroup().all();
        for (const series_e of series_t) {
          if (!(series_e instanceof series_p)) continue;
          const series_t = series_e.adapter().alignedTimePointIndex();
          if (void 0 === series_t) continue;
          const series_i = series_u._cachedByBarIndexOrderedExecutions[series_t] || [];
          series_u._cachedByBarIndexOrderedExecutions[series_t] = series_i, series_i.push(series_e)
        }
      }
      static clearOrderedByBarsSourcesCache() {
        series_u._cachedByBarIndexOrderedExecutions = {}
      }
    }
    series_u._cachedByBarIndexOrderedExecutions = {};
    class _ {
      constructor(series_e, series_t) {
        this._unixtime = NaN, this._line = series_e, this._model = series_t
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
        const series_t = this._model.timeScale().baseIndex() - Math.abs(series_e);
        this._line.startMoving({
          logical: this._line.points()[0]
        });
        const series_i = {
          ...this._line.points()[0]
        };
        return series_i.index = series_t, this._line.move({
          logical: series_i
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
        return this._line.properties().childs().text.setValue(series_e || ""), this._line.updateAllViewsAndRedraw((0, series_h
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
        return series_n.getColorFromProperties(series_e.textColor, series_e.textTransparency)
      }
      setTextColor(series_e) {
        const series_t = this._line.properties().childs();
        return series_n.setColorToProperties(series_e, series_t.textColor, series_t.textTransparency), this
      }
      getFont() {
        const series_e = this._line.properties().childs();
        return series_n.getFontFromProperties(series_e.fontFamily, series_e.fontSize, series_e.fontBold, series_e.fontItalic)
      }
      setFont(series_e) {
        const series_t = this._line.properties().childs();
        return series_n.setFontToProperties(series_e, series_t.fontFamily, series_t.fontSize, series_t.fontBold, series_t.fontItalic), this
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
          series_t = this.getArrowSpacing();
        let series_i = 0;
        this.getText() && (series_i = series_n.fontHeight(this.getFont()));
        return series_e + series_t + series_i + 10
      }
    }
    class series_p extends series_o.LineDataSource {
      constructor(series_e, series_t, series_s, series_o) {
        super(series_e, series_t ?? series_p.createProperties(series_e.backgroundTheme().spawnOwnership()), series_s, series_o), this._adapter = new _(this,
            series_e), this.customization.forcePriceAxisLabel = !1, this.customization.disableErasing = !0, this
          .setSelectionEnabled(!1), Promise.all([series_i.series_e(6290), series_i.series_e(986), series_i.series_e(6668), series_i.series_e(1583)]).then(series_i.bind(series_i, 52361))
          .then((series_e => {
            this._setPaneViews([new series_e.ExecutionPaneView(this, this._model)])
          }))
      }
      adapter() {
        return this._adapter
      }
      zorder() {
        return series_d
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
      priceAxisViews(series_e, series_t) {
        return this._isVisible() ? super.priceAxisViews(series_e, series_t) : null
      }
      paneViews() {
        return window.TradingView.printing && !series_l.enabled("snapshot_trading_drawings") ? null : this._isVisible() ?
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
      static createProperties(series_e, series_t) {
        const series_i = new series_r.DefaultProperty({
          defaultName: "linetoolexecution",
          state: series_t,
          useUserPreferences: !1,
          theme: series_e
        });
        return series_p._configureProperties(series_i), series_i
      }
      _isVisible() {
        return this._model.properties().childs().tradingProperties.childs().showExecutions.value()
      }
    }