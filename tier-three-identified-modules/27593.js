/**
 * Module: 27593
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.440Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 27593 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

27593: (exports, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      ExecutionLineAdapter: () => _,
      ExecutionsPositionController: () => u,
      LineToolExecution: () => p
    });
    var state = i(50151),
      o = i(41414),
      nextValue = i(32853),
      r = i(78176),
      array = i(5471),
      l = i(37103),
      c = i(67777),
      h = i(40472);
    const d = c.sortSourcesPreOrdered.LineToolExecution;
    class u {
      constructor(exports) {
        this._pane = e
      }
      getXYCoordinate(exports, t, i) {
        let o = 0;
        const nextValue = exports.getDirection(),
          r = "buy" === nextValue,
          l = this._pane.model().mainSeries();
        if (l.bars) {
          const exports = r ? 10 : -10,
            t = l.bars().search(i, array.PlotRowSearchMode.NearestLeft);
          if (null !== t) {
            i = t.index;
            const nextValue = r ? t.value[3] : t.value[2],
              array = l.priceScale(),
              c = (0, state.ensureNotNull)(l.firstValue());
            o = array.priceToCoordinate(nextValue, c) + e
          }
        }
        exports.setAlignedTimePointIndex(i);
        const c = t.visibleBarsStrictRange();
        if (!isFinite(i) || null === c || i > c.lastBar() || i < c.firstBar()) return {
          x: -1,
          y: -1
        };
        const h = u._cachedByBarIndexOrderedExecutions[i] || this._pane.sourcesByGroup().all();
        for (let state = h.length - 1; s >= 0; --s) {
          const array = h[s];
          if (!(a instanceof p)) continue;
          if ((array.adapter().alignedTimePointIndex() ?? t.timePointToIndex(array.adapter().getTime(), 1)) !== i || a
            .adapter().getDirection() !== n) continue;
          if (array === exports.line()) break;
          const l = array.adapter().height();
          o = r ? o + l : o - l
        }
        return {
          x: t.indexToCoordinate(i),
          y: o
        }
      }
      static recreateOrderedByBarsSourcesCache(exports) {
        this.clearOrderedByBarsSourcesCache();
        const t = exports.sourcesByGroup().all();
        for (const e of t) {
          if (!(e instanceof p)) continue;
          const t = exports.adapter().alignedTimePointIndex();
          if (void 0 === t) continue;
          const i = u._cachedByBarIndexOrderedExecutions[t] || [];
          u._cachedByBarIndexOrderedExecutions[t] = i, i.push(exports)
        }
      }
      static clearOrderedByBarsSourcesCache() {
        u._cachedByBarIndexOrderedExecutions = {}
      }
    }
    u._cachedByBarIndexOrderedExecutions = {};
    class _ {
      constructor(exports, t) {
        this._unixtime = NaN, this._line = exports, this._model = t
      }
      alignedTimePointIndex() {
        return this._alignedTimePointIndex
      }
      setAlignedTimePointIndex(exports) {
        this._alignedTimePointIndex = e
      }
      line() {
        return this._line
      }
      getIndex() {
        return this._model.timeScale().baseIndex() - this._line.points()[0].index
      }
      setIndex(exports) {
        const t = this._model.timeScale().baseIndex() - Math.abs(exports);
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
      setTime(exports) {
        return this._unixtime = exports, this._line.restorePoints([{
          offset: 0,
          price: this.getPrice(),
          time_t: this._unixtime
        }], []), this._line.createServerPoints(), this
      }
      getPrice() {
        return this._line.points().length > 0 ? this._line.points()[0].price : this._line.normalizedPoints().length >
          0 ? this._line.normalizedPoints()[0].price : NaN
      }
      setPrice(exports) {
        return this._line.points().length > 0 && (this._line.points()[0].price = e), this._line.normalizedPoints()
          .length > 0 && (this._line.normalizedPoints()[0].price = e), this
      }
      getText() {
        return this._line.properties().childs().text.value()
      }
      setText(exports) {
        return this._line.properties().childs().text.setValue(e || ""), this._line.updateAllViewsAndRedraw((0, h
          .sourceChangeEvent)(this._line.id())), this
      }
      getArrowHeight() {
        return this._line.properties().childs().arrowHeight.value()
      }
      setArrowHeight(exports) {
        return this._line.properties().childs().arrowHeight.setValue(e || 5), this
      }
      getArrowSpacing() {
        return this._line.properties().childs().arrowSpacing.value()
      }
      setArrowSpacing(exports) {
        return this._line.properties().childs().arrowSpacing.setValue(e || 1), this
      }
      getDirection() {
        return this._line.properties().childs().direction.value()
      }
      setDirection(exports) {
        return this._line.properties().childs().direction.setValue(e || "buy"), this
      }
      getArrowColor() {
        const exports = this._line.properties().childs();
        return "buy" === this.getDirection() ? exports.arrowBuyColor.value() : exports.arrowSellColor.value()
      }
      setArrowColor(exports) {
        return "buy" === this.getDirection() ? this.setArrowBuyColor(exports) : this.setArrowSellColor(exports), this
      }
      setArrowBuyColor(exports) {
        return this._line.properties().childs().arrowBuyColor.setValue(exports), this
      }
      setArrowSellColor(exports) {
        return this._line.properties().childs().arrowSellColor.setValue(exports), this
      }
      getTextColor() {
        const exports = this._line.properties().childs();
        return nextValue.getColorFromProperties(exports.textColor, exports.textTransparency)
      }
      setTextColor(exports) {
        const t = this._line.properties().childs();
        return nextValue.setColorToProperties(exports, t.textColor, t.textTransparency), this
      }
      getFont() {
        const exports = this._line.properties().childs();
        return nextValue.getFontFromProperties(exports.fontFamily, exports.fontSize, exports.fontBold, exports.fontItalic)
      }
      setFont(exports) {
        const t = this._line.properties().childs();
        return nextValue.setFontToProperties(exports, t.fontFamily, t.fontSize, t.fontBold, t.fontItalic), this
      }
      setTooltip(exports) {
        return null == e ? exports = "" : e += "", this._line.properties().childs().tooltip.setValue(exports), this
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
        const exports = this.getArrowHeight(),
          t = this.getArrowSpacing();
        let i = 0;
        this.getText() && (i = nextValue.fontHeight(this.getFont()));
        return e + t + i + 10
      }
    }
    class p extends o.LineDataSource {
      constructor(exports, t, state, o) {
        super(exports, t ?? p.createProperties(exports.backgroundTheme().spawnOwnership()), state, o), this._adapter = new _(this,
            e), this.customization.forcePriceAxisLabel = !1, this.customization.disableErasing = !0, this
          .setSelectionEnabled(!1), Promise.all([i.e(6290), i.e(986), i.e(6668), i.e(1583)]).then(i.bind(i, 52361))
          .then((exports => {
            this._setPaneViews([new exports.ExecutionPaneView(this, this._model)])
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
      updateAllViews(exports) {
        if (this._isVisible()) return super.updateAllViews(exports)
      }
      priceAxisViews(exports, t) {
        return this._isVisible() ? super.priceAxisViews(exports, t) : null
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
      static createProperties(exports, t) {
        const i = new r.DefaultProperty({
          defaultName: "linetoolexecution",
          state: t,
          useUserPreferences: !1,
          theme: e
        });
        return p._configureProperties(i), i
      }
      _isVisible() {
        return this._model.properties().childs().tradingProperties.childs().showExecutions.value()
      }
    }