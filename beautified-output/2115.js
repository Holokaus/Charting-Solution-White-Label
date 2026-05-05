/**
 * Module 2115 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2115: (e, t, i) => {
    "use strict";
    i.d(t, {
      Series: () => wi
    });
    var s = i(50279),
      o = i(50151),
      n = i(9343),
      r = i(51768),
      a = i(76422),
      l = i(88723),
      c = i(67135),
      h = i(86572),
      d = i(52746),
      u = i(72187),
      _ = i(5471),
      p = i(24062),
      m = i(43337),
      g = i(95059),
      f = i(92211),
      y = i(30342),
      v = i(67563),
      S = i(82095),
      b = i(13651),
      w = i(11542),
      C = i(37103),
      T = i(19e3),
      P = i(52479),
      x = (i(3618), i(75641));
    i(40080);

    function M(e) {
      const t = "QUANDL" === (e = e || {}).listedExchange,
        s = {
          title: "",
          description: "",
          interval: "",
          listedExchange: "",
          provider: "",
          chartStyle: "",
          sessionDescription: "",
          priceSource: "",
          adjustment: "",
          backadjustment: "",
          settlement: ""
        };
      let o = "";
      if (e.description && t)
        if (2 === e.description.split("/").length) o = e.description.split("/")[1];
        else {
          e.description.split("'").filter((e => e.length)).forEach((e => {
            let t = [];
            t = e && ("/" === e[0] || /\d+\/\(?/.test(e)) ? [e] : e.split("/").filter((e => e.length)), o += t[
              2 === t.length ? 1 : 0]
          }))
        }
      else o = e.description ? e.description : e.symbol;
      if (e.ticker ? (s.title = e.ticker, s.description = I(o)) : s.title = I(o), e.interval && (s.interval = (0, x
          .translatedIntervalString)(e.interval)), t && e.description) {
        const t = /[\w_]+\/[\w_]+/.exec(e.description);
        t && t[0] ? s.provider = I(t[0].split("/")[0]) : s.provider = I(e.description.split("/")[0])
      }
      return e.listedExchange && (s.listedExchange = I(e.listedExchange)), s.chartStyle = I(function(e) {
        return e.inputs, 8 === e.style ? w.t(null, void 0, i(63876)) : ""
      }(e)), e.sessionDescription && (s.sessionDescription = I(e.sessionDescription)), void 0 !== e.priceSource && (s
        .priceSource = I(e.priceSource)), e.adjustment && "dividends" === e.adjustment && (s.adjustment = w.t(null, {
        context: "adjustments"
      }, i(94920))), void 0 !== e.backadjustment && (s.backadjustment = w.t(null, {
        context: "adjustments"
      }, i(16755))), e["settlement-as-close"] && (s.settlement = w.t(null, {
        context: "adjustments"
      }, i(82631))), s
    }

    function I(e) {
      return e.replace(/'/g, "")
    }
    var A = i(89837);
    const L = w.t(null, void 0, i(70963)),
      k = w.t(null, void 0, i(75546)),
      E = C.enabled("hide_unresolved_symbols_in_legend"),
      D = C.enabled("symbol_info_price_source");
    class B extends P.StatusProviderBase {
      constructor(e, t, i) {
        super(), this._series = e, this._statusViewProperties = t, this._options = i || {}
      }
      text() {
        return function(e) {
          const t = M(e);
          return (e.ticker ? t.description : t.title) + (t.interval ? ", " + t.interval : "") + function(e, t =
            ", ") {
            return (e.provider ? `${t}${e.provider}` : "") + (e.listedExchange ? `${t}${e.listedExchange}` :
              "") + (e.chartStyle ? `${t}${e.chartStyle}` : "") + (e.adjustment ? `${t}${e.adjustment}` : "") +
              (e.backadjustment ? `${t}${e.backadjustment}` : "") + (e.settlement ? `${t}${e.settlement}` :
              "") + (e.sessionDescription ? `${t}${e.sessionDescription}` : "") + (e.priceSource ?
                `${t}${e.priceSource}` : "")
          }(t)
        }(this._getTitleGenerationOptions())
      }
      getSplitTitle() {
        return M(this._getTitleGenerationOptions())
      }
      getInputsTitles() {
        return null
      }
      bold() {
        return !1
      }
      size() {
        return this._statusViewProperties.childs().fontSize.value() + "px"
      }
      errorStatus() {
        const e = this._series.unsupportedResolutionState().value(),
          t = e ? (0, A.getErrorFromUnsupportedResolutionState)(e) : this._series.seriesErrorMessage();
        return null !== t ? {
          error: t,
          title: e ? k : L
        } : null
      }
      _getTitleGenerationOptions() {
        const e = this._series.symbolInfo(),
          t = this._statusViewProperties.childs(),
          i = this._series.symbolTextSourceProxyProperty().value();
        let s;
        t.showExchange.value() && e && (s = (0, g.getSymbolListedExchange)(e));
        const o = (D && e?.price_source_id ? this._series.model().availablePriceSources(this._series
            .getSymbolString()).name(e.price_source_id) : null) ?? void 0,
          n = this._series.getInputsProperties().state();
        17 === this._series.style() && (n.type = this._series.properties().childs().volFootprintStyle.childs().type
          .value());
        const r = this._series.aliasSymbolInfo();
        return {
          description: R(i, r),
          listedExchange: s,
          symbol: E && null === r ? "" : this._series.symbolOrAlias(),
          interval: t.showInterval.value() && !this._options.hideResolution ? this._series.interval() : void 0,
          style: this._series.properties().childs().style.value(),
          inputs: n,
          boxSize: this._series.data().boxSize,
          reversalAmount: this._series.data().reversalAmount,
          ticker: V(i, r),
          priceSource: o
        }
      }
    }

    function V(e, t) {
      return "ticker-and-description" !== e ? "" : null !== t ? t.name : void 0
    }

    function R(e, t) {
      if (null !== t) return "ticker" === e ? t.name : "long-description" === e && void 0 !== t.long_description ? t
        .long_description : (0, T.getTranslatedSymbolDescription)({
          pro_name: t.pro_name || void 0,
          short_name: t.name || void 0,
          description: t.description || void 0,
          short_description: t.short_description || void 0,
          local_description: t.local_description || void 0,
          language: t.language || void 0
        })
    }
    class N extends b.StatusView {
      constructor(e, t, i) {
        super(new B(e, t, i)), this._invalidated = !0, this._series = e, this._series.onRestarted().subscribe(this,
            this.update), this._series.dataEvents().symbolResolved().subscribe(this, this.update), this._series
          .dataEvents().completed().subscribe(this, this.update), this._series.boxSizeValue().subscribe(this.update
            .bind(this)), t.childs().symbolTextSource.subscribe(this, this.update)
      }
      getSeriesPrecision() {
        let e = 4;
        const t = this._series.symbolInfo();
        return t && t.pricescale && (e = Math.round(Math.log(t.pricescale) / Math.log(10))), e
      }
      round(e) {
        const t = this.getSeriesPrecision(),
          i = Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
        return i ? i.toString() : ""
      }
      update() {
        this._invalidated = !0
      }
      text() {
        return this._updateImpl(), super.text()
      }
      bold() {
        return this._updateImpl(), super.bold()
      }
      size() {
        return this._updateImpl(), super.size()
      }
      getSplitTitle() {
        return this._updateImpl(),
          this._statusProvider.getSplitTitle()
      }
      _updateImpl() {
        this._invalidated && (this._bold = this._statusProvider.bold(), this._size = this._statusProvider.size(),
          this._text = this._statusProvider.text(), this._invalidated = !1)
      }
    }
    var O = i(50335),
      F = i(40137),
      W = i(49483),
      H = i(78861),
      z = i(11946),
      U = i(24640);
    const j = W.CheckMobile.any(),
      G = C.enabled("hide_resolution_in_legend");
    class q extends F.DataWindowView {
      constructor(e, t) {
        super(), this._invalidated = !0, this._series = e, this._model = t, this.update()
      }
      update() {
        this._invalidated = !0
      }
      items() {
        return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._items
      }
      series() {
        return this._series
      }
      canShowItems() {
        return !!this._model.mainPane()?.maximized().value() || void 0 === this._model.panes().find((e => e
          .maximized().value()))
      }
      _updateImpl() {
        const e = this._getValuesProvider();
        this._valuesProvider !== e && (this._valuesProvider = e, this._items = this._valuesProvider.getItems().map((
          e => new F.DataWindowItem(e.id, e.title, "", e.unimportant))));
        const t = this._series.aliasSymbolInfo();
        if (t) {
          const e = [t.name];
          G || e.push((0, U.forceRTLStr)((0, x.translatedIntervalString)(this._series.interval()))), e.push((0, g
              .getSymbolListedExchange)(t)), this._header = e.join(` ${g.symbolTitleSeparator} `), this._title = t
            .description
        } else this._header = this._series.symbolOrAlias();
        let i = this._model.crosshairSource().appliedIndex();
        C.enabled("use_last_visible_bar_value_in_legend") && !(0, O.isNumber)(i) && (i = this._model.timeScale()
          .visibleBarsStrictRange()?.lastBar() ?? NaN);
        const s = this._valuesProvider.getValues(i);
        for (let e = 0; e < s.length; ++e) {
          const t = s[e],
            i = this._items[e];
          i.setValue(t.value), i.setVisible(t.visible), i.setColor(t.color), i.setTitle(t.title)
        }
      }
      _getValuesProvider() {
        return this._series.dataWindowValuesProvider()
      }
      _showLastPriceAndChangeOnly() {
        return j && (null === this._model.crosshairSource().pane || (0, z.isLineToolName)(H.tool.value()) ||
          null !== this._model.lineBeingEdited())
      }
    }
    var $ = i(67455);
    const K = w.t(null, void 0, i(72445));
    class Y extends q {
      constructor(e, t) {
        super(e, t), this._backgroundColorSpawn = t.backgroundTopColor().spawn(), this._backgroundColorSpawn
          .subscribe(this.update.bind(this));
        const i = t.properties().childs().paneProperties.childs().legendProperties.childs();
        this._visibilityProperty = (0, $.combineProperty)(((e, t, i, s, o) => `${e}:${t}:${i}:${s}:${o}`), i
            .showBarChange.weakReference(), i.showSeriesOHLC.weakReference(), i.showVolume.weakReference(), i
            .showLastDayChange.weakReference(), i.showSeriesLegendCloseOnMobile.weakReference()), this
          ._visibilityProperty.subscribe(this, this.update)
      }
      areValuesVisible() {
        return this._visibilityProperty.value().includes("true")
      }
      additional() {
        return null
      }
      marketTitle() {
        const e = this._series.marketStatusModel().status().value();
        return this._showLastPriceAndChangeOnly() && ("pre_market" === e || "post_market" === e) ? `${K}:` : ""
      }
      destroy() {
        this._backgroundColorSpawn.destroy(), this._visibilityProperty.destroy()
      }
      _getValuesProvider() {
        return this._series.legendValuesProvider()
      }
    }
    var Z, X = i(53107),
      J = i(91106),
      Q = i(46082),
      ee = i(47312),
      te = i(51101),
      ie = i(99955),
      se = i(4226);
    ! function(e) {
      e[e.ExtrapolateBarsLimit = 2e3] = "ExtrapolateBarsLimit"
    }(Z || (Z = {}));
    let oe = 0;
    class ne {
      constructor(e, t) {
        this._extrapolatedData = [], this._cacheForFuture = !1, this._modelId = oe++, this._builderCache = null, this
          ._uniqueId = (0, se.randomHashN)(6), this._resolution = t, this._symbolInfo = e, this._valid = Boolean(e
            .timezone) && Boolean(e.session), this._session = new ee.SessionInfo(e.timezone, e.session, e
            .session_holidays, e.corrections)
      }
      syncSourceTarget() {
        return {
          uniqueId: this._uniqueId,
          resolution: this._resolution,
          session: this._session.state()
        }
      }
      getSymbolInfo() {
        return this._symbolInfo
      }
      getSession() {
        return this._session
      }
      getResolution() {
        return this._resolution
      }
      uniqueId() {
        return this._modelId
      }
      distance(e, t) {
        if (!this.isValid()) return {
          success: !1
        };
        if (e > t) return {
          success: !1
        };
        if (e === t) return {
          success: !0,
          result: 0
        };
        let i = this._extrapolatedData.length,
          s = 0 !== i ? this._extrapolatedData[0] : null,
          o = null !== s ? this._extrapolatedData[i - 1] : null;
        const n = e < t;
        if (1e3 * e === s && this._cacheForFuture === n || (this._extrapolatedData = [1e3 * e], i = 1, s = null, o =
            null), null === s || null !== o && 1e3 * t > o) {
          const s = (0, ie.extrapolateBarsFrontToTime)(this.barBuilder(), o || 1e3 * e, 1e3 * t, 2e3, !0);
          this._extrapolatedData = this._extrapolatedData.concat(s.times), i = this._extrapolatedData.length, this
            ._cacheForFuture = n
        }
        if (o = this._extrapolatedData[i - 1], o < 1e3 * t) return {
          success: !1
        };
        const r = this._extrapolatedData.indexOf(1e3 * t);
        return -1 === r ? {
          success: !1
        } : {
          success: !0,
          result: r
        }
      }
      projectTime(e, t) {
        if (!this.isValid()) return e;
        let i = this._extrapolatedData.length,
          s = i > 0 ? this._extrapolatedData[0] : null,
          o = null !== s ? this._extrapolatedData[i - 1] : null;
        const n = t >= 0;
        1e3 * e === s && this._cacheForFuture === n || (this._extrapolatedData = [1e3 * e], i = 1, s = null, o =
        null);
        const r = Math.abs(t);
        if (null === s || r >= i) {
          const s = (0, ie.extrapolateBarsFrontByCount)(this.barBuilder(), o || 1e3 * e, Math.sign(t) * (r - i + 1), !
            0);
          this._extrapolatedData = this._extrapolatedData.concat(s.times), i = this._extrapolatedData.length, this
            ._cacheForFuture = n
        }
        return i < r ? e : this._extrapolatedData[r] / 1e3
      }
      isValid() {
        return this._valid
      }
      dataSize() {
        return this._extrapolatedData.length
      }
      createNewModelWithResolution(e) {
        return new ne(this._symbolInfo, e)
      }
      barBuilder() {
        return null === this._builderCache && (this._builderCache = (0, te.newBarBuilder)(this._resolution, this
          ._session, this._session)), this._builderCache
      }
    }
    var re = i(62773),
      ae = i(50888);
    i(59149);
    (0, n.getLogger)("Chart.Definitions.Series");

    function le(e, t) {
      return "TickByTick" === e ? {
        mode: e,
        updatePeriod: t
      } : {
        mode: e
      }
    }
    async function ce(e, t, i) {
      const s = [];
      return (0, ae.isDelay)(e.delay) ? async function(e) {
        const t = [];
        return (0, ae.witoutRealtime)(e) ? t.push(le("DelayNoRealtime")) : t.push(le("DelayToRealtime")), t
      }(e): (0, ae.isEod)(e, t) ? (s.push(le("EOD")), s) : s
    }
    class he {
      constructor(e, t, i) {
        this._dataUpdatedInfoStatus = new re.WatchedObject(null), this._symbolInfo = e, this._status = t, this
          ._updatePeriod = i, this._symbolInfo.subscribe(this._update.bind(this)), this._status.subscribe(this._update
            .bind(this)), this._updatePeriod.subscribe(this._update.bind(this))
      }
      destroy() {
        this._symbolInfo.release(), this._status.release(), this._updatePeriod.release()
      }
      status() {
        return this._dataUpdatedInfoStatus.readonly()
      }
      symbolName() {
        const e = this._symbolInfo.value();
        return null !== e ? e.name : ""
      }
      time() {
        const e = this._symbolInfo.value(),
          t = null !== e && e.delay && e.delay > 0 ? e.delay : 900;
        return Math.round(t / 60)
      }
      listedExchange() {
        const e = this._symbolInfo.value();
        return null !== e ? (0, g.getSymbolListedExchange)(e) : ""
      }
      async description() {
        const e = this._symbolInfo.value();
        if (null === e) return "";
        return {}.description || e.listed_exchange
      }
      tradedExchange() {
        const e = this._symbolInfo.value();
        return null !== e ? (0, g.getSymbolTradedExchange)(e) : ""
      }
      proName() {
        const e = this._symbolInfo.value();
        return null !== e ? e.pro_name : ""
      }
      country() {
        return this._symbolInfo.value()?.country || ""
      }
      proPerm() {
        const e = this._symbolInfo.value();
        return null !== e ? e.pro_perm : ""
      }
      firstReplacedByBatsExchange() {
        const e = this._symbolInfo.value();
        return e && (0, ae.firstReplacedByBatsExchange)(e)
      }
      isSpread() {
        const e = this._symbolInfo.value();
        return null !== e && "spread" === e.type
      }
      isDelay() {
        const e = this._symbolInfo.value();
        return Boolean(e?.delay)
      }
      async _update() {
        const e = this._symbolInfo.value();
        if (null === e) return void this._dataUpdatedInfoStatus.setValue(null);
        const t = this._status.value();
        if ("string" == typeof t) return void this._dataUpdatedInfoStatus.setValue(null);
        if (2 === t || 1 === t) return;
        const i = await ce(e, t, this._updatePeriod.value());
        0 !== i.length ? this._dataUpdatedInfoStatus.setValue(i) : this._dataUpdatedInfoStatus.setValue(null)
      }
    }
    i(32925);
    var de = i(87465);
    (0, n.getLogger)("Chart.DataProblemModel");
    class ue {
      constructor(e, t) {
        this._mainDataProblem = new re.WatchedObject(null), this._supportPortalProblems = new re.WatchedObject([]),
          this._allDataProblems = new re.WatchedObject([]), this._pushStreamHandler = null, this._destroyed = !1, this
          ._quotesProvider = e, this._quotesProvider.quotesUpdate().subscribe(this, this._update.bind(this)), this
          ._symbolInfo = t, this._symbolInfo.subscribe((e => {
            e || this._mainDataProblem.setValue(null)
          })), this._mainDataProblem.subscribe((() => this._updateAllDataProblems())), this._supportPortalProblems
          .subscribe((() => this._updateAllDataProblems())), this._requestSupportPortalProblems()
      }
      destroy() {
        this._quotesProvider.quotesUpdate().unsubscribeAll(this), this._symbolInfo.release(), this._destroyed = !0
      }
      dataProblems() {
        return this._allDataProblems
      }
      _resetStatus() {
        this._mainDataProblem.setValue(null)
      }
      _update(e) {
        void 0 === e.values || void 0 === e.values.data_problem ? this._resetStatus() : this._mainDataProblem
          .setValue((0, de.clone)(e.values.data_problem))
      }
      _updateAllDataProblems() {
        const e = this._mainDataProblem.value(),
          t = this._supportPortalProblems.value();
        this._allDataProblems.setValue(null === e ? t : [e, ...t])
      }
      async _requestSupportPortalProblems() {
        0
      }
    }
    var _e = i(57025),
      pe = i(52859),
      me = i(36281),
      ge = i(97902),
      fe = i(97725),
      ye = i(52945),
      ve = i(40472);
    const Se = C.enabled("force_exchange_as_title"),
      be = C.enabled("chart_style_hilo_last_price");
    const we = {
      alwaysShowGlobalLast: !1,
      visibleOnHistoryOnly: !1,
      showCountdown: !0,
      showSymbolLabel: !0,
      useSolidBodyColor: !0
    };
    class Ce extends me.PriceAxisView {
      constructor(e, t, i) {
        super(), this._previousCountdown = "", this._source = e, this._model = t, this._options = {
          ...we,
          ...i
        }
      }
      updateCountdown() {
        this._countdownText() !== this._previousCountdown && (this.update((0, ve.sourceChangeEvent)(this._source
          .id())),
          this._model.updateSourcePriceScale(this._source))
      }
      _getSource() {
        return this._source
      }
      _getModel() {
        return this._model
      }
      _isCountdownEnabled() {
        return this._options.showCountdown
      }
      _countdownText() {
        const e = Q.Interval.parse(this._source.interval());
        if (e.isDWM() || e.isTicks() || e.isSeconds() && 1 === e.multiplier()) return "";
        const t = this._source.data().bars().last();
        if (null === t) return "";
        const i = 1e3 * (0, o.ensure)(t.value[0]),
          s = Q.Interval.parse(this._source.interval()).inMilliseconds(),
          n = i.valueOf() + s;
        let r = Math.round((n - this._currentTime()) / 1e3);
        if (r <= 0) return "";
        r = Math.min(r, s / 1e3);
        let a = null;
        r >= 3600 && (a = (0, fe.addLeadingZero)(Math.floor(r / 3600))), r %= 3600;
        const l = (0, fe.addLeadingZero)(Math.floor(r / 60));
        r %= 60;
        const c = (0, fe.addLeadingZero)(Math.floor(r));
        return null !== a ? `${a}:${l}:${c}` : `${l}:${c}`
      }
      _updateRendererData(e, t, i) {
        if (e.visible = !1, t.visible = !1, !this._source.isVisible()) return;
        const s = this._source.properties().childs();
        if (!be && 12 === s.style.value()) return;
        const n = this._model.timeScale().visibleBarsStrictRange(),
          r = this._source.data().last();
        if (null === n || null === r) return;
        if (this._options.visibleOnHistoryOnly && n.contains(r.index)) return;
        const a = this._model.properties().childs().scalesProperties.childs();
        let l = a.showSeriesLastValue.value(),
          c = this._isCountdownEnabled() && s.showCountdown.value() && (12 === (h = s.style.value()) ? be : (0, g
            .isTimeBasedStyle)(h)) && (this._options.alwaysShowGlobalLast || n.contains(r.index));
        var h;
        let d = this._options.showSymbolLabel && a.showSymbolLabels.value();
        const u = a.seriesLastValueMode.value() === ge.PriceAxisLastValueMode.LastPriceAndPercentageValue,
          _ = this._source.lastValueData(void 0, this._options.alwaysShowGlobalLast);
        if (_.noData) return;
        const p = 8 === s.style.value();
        if ((l || c || d) && p && s.haStyle.childs().showRealLastPrice.value()) {
          const e = this._source.lastValueData(void 0, !1),
            t = this._source.lastValueData(void 0, !0);
          e.noData || t.noData || e.index !== t.index || (l = !1, c = !1, d = !1)
        }
        const m = (0, pe.resetTransparency)(this._source.priceLineColor(_.color));
        if (this._options.useSolidBodyColor ? (i.background = m, i.borderColor = void 0) : (i.background = this
            ._model.backgroundColorAtYPercentFromTop((i.fixedCoordinate ?? i.coordinate) / (0, o.ensureNotNull)(this
              ._model.paneForSource(this._source)).height()), i.borderColor = m), i.coordinate = _.coordinate, i
          .floatCoordinate = _.floatCoordinate, l || c) {
          const t = this._axisFirstLineText(_, l);
          e.text = t, this._options.useSolidBodyColor ? (i.textColor = this.generateTextColor(i.background), e
            .borderVisible = !1) : (e.borderVisible = !0, i.textColor = m), e.textColor = i.textColor;
          const s = l && u ? (0, ye.getOppositeModePriceText)(this._source.priceScale(), _) : "";
          e.secondLine = s, i.secondLineTextColor = i.textColor;
          const o = c ? this._countdownText() : "";
          this._previousCountdown = o, e.thirdLine = o, i.thirdLineTextColor = (0, pe.generateColor)(i.textColor,
            25), 0 === t.length && 0 === s.length && 0 === o.length || (e.visible = !0)
        }
        d && (t.text = this._paneText(d), t.visible = t.text.length > 0)
      }
      _paneText(e) {
        let t = "";
        const i = this._source.aliasSymbolInfo();
        return Se ? t = (0, g.displayedSymbolExchange)(i) : e && (t = (0, g.displayedSymbolName)(i)), t
      }
      _axisFirstLineText(e, t) {
        return t ? (0,
          ye.getCurrentModePriceText)(this._source.priceScale(), e) : ""
      }
      _currentTime() {
        return window.ChartApiInstance.serverTime()
      }
    }
    var Te = i(18113),
      Pe = i(67225),
      xe = i(30693);
    class Me extends Ce {
      lastPrice() {
        return this._getSource().data().lastProjectionPrice
      }
      _updateRendererData(e, t, i) {
        e.visible = !1, t.visible = !1;
        const s = this._getModel(),
          n = this._getSource(),
          r = n.priceScale(),
          a = s.timeScale(),
          l = this.lastPrice();
        if (a.isEmpty() || r.isEmpty() || void 0 === l) return;
        const c = a.visibleBarsStrictRange();
        if (null === c) return;
        const h = c.firstBar(),
          d = c.lastBar(),
          u = n.data(),
          p = u.search(d, _.PlotRowSearchMode.NearestLeft);
        if (null === p) return;
        const m = n.nearestIndex(h, _.PlotRowSearchMode.NearestRight);
        if (void 0 === m) return;
        const g = n.model().properties().childs().scalesProperties.childs(),
          f = (0, o.ensureNotNull)(u.valueAt(m))[4];
        let y = i.background,
          v = g.showSeriesLastValue.value(),
          S = !1,
          b = !1,
          w = !1;
        const C = n.lastValueData(4, !1),
          T = n.properties().childs();
        if (8 === T.style.value() && T.haStyle.childs().showRealLastPrice.value()) {
          const e = n.lastValueData(4, !0);
          if (e.noData || e.color === i.background || (y = (0, pe.resetTransparency)(e.color)), !e.noData && !C
            .noData) {
            const t = e.index === C.index;
            S = t && g.showSymbolLabels.value(), b = g.seriesLastValueMode.value() === ge.PriceAxisLastValueMode
              .LastPriceAndPercentageValue, v = v && t, w = t && this._isCountdownEnabled() && T.showCountdown.value()
          }
        } else {
          const e = n.barColorer().barStyle(p.index, !0);
          y = (0, pe.resetTransparency)(e.barColor)
        }
        if (i.background = y, i.textColor = this.generateTextColor(y), i.secondLineTextColor = i.textColor, i
          .thirdLineTextColor = (0, pe.generateColor)(i.textColor, 25), i.coordinate = r.priceToCoordinate(l, f), e
          .visible = v || w, !C.noData) {
          const i = n.priceScale().isPercentage();
          C.formattedPriceAbsolute = r.formatPriceAbsolute(l), C.formattedPricePercentage = r.formatPricePercentage(l,
              f, {
                signPositive: !0
              }), C.text = i ? C.formattedPricePercentage : C.formattedPriceAbsolute, e.text = this
            ._axisFirstLineText(C, v), e.secondLine = v && b ? i ? C.formattedPriceAbsolute : C
            .formattedPricePercentage : "", e.thirdLine = w ? this._countdownText() : "", t.text = this._paneText(S)
        }
        t.visible = S
      }
    }
    var Ie = i(69555),
      Ae = i(40738),
      Le = i(58978),
      ke = i(69558);
    const Ee = {
      light: {
        lineStyle: ke.LINESTYLE_DOTTED,
        lineWidth: 1,
        backgroundColor: Le.colorsPalette["color-tv-blue-50"],
        lineColor: Le.colorsPalette["color-cold-gray-500"]
      },
      dark: {
        lineStyle: ke.LINESTYLE_DOTTED,
        lineWidth: 1,
        backgroundColor: Le.colorsPalette["color-tv-blue-a800"],
        lineColor: Le.colorsPalette["color-cold-gray-500"]
      }
    };

    function De(e) {
      return e ? Ee.dark : Ee.light
    }
    class Be extends Ae.HorizontalLinePaneView {
      constructor(e, t, i) {
        super(), this._model = e, this._isVisible = t.lineVisible, this._lineColor = t.lineColor, this._lineWidth =
          t.lineWidth, this._getValue = i
      }
      _updateImpl() {
        const e = this._lineRendererData;
        if (e.visible = !1, !this._isVisible.value()) return;
        const t = this._model.mainSeries(),
          i = t.priceScale(),
          s = t.firstValue(),
          o = this._getValue();
        if (null === s || null === o) return;
        const n = De(this._model.dark().value()),
          r = this._lineColor.value() || n.lineColor,
          a = this._lineWidth.value() || n.lineWidth;
        e.visible = !0, e.y = i.priceToCoordinate(o, s), e.linestyle = n.lineStyle, e.linewidth = a, e.color = r
      }
    }
    class Ve extends me.PriceAxisView {
      constructor(e, t, i, s) {
        super(), this._model = e, this._label = t, this._isVisible = i.labelVisible, this._backgroundColor = i
          .lineColor, this._getValue = s
      }
      _updateRendererData(e, t, i) {
        if (e.visible = !1, t.visible = !1, !this._isVisible.value()) return;
        const s = this._model.mainSeries(),
          o = s.priceScale(),
          n = s.firstValue(),
          r = this._getValue();
        if (null === n || null === r) return;
        const a = De(this._model.dark().value()),
          l = (0, pe.resetTransparency)(this._backgroundColor.value() || a.backgroundColor);
        e.visible = !0, t.visible = !0, e.text = o.formatPriceAbsolute(r), t.text = this._label, i.coordinate = o
          .priceToCoordinate(r, n), i.background = l, i.textColor = this.generateTextColor(l)
      }
    }
    class Re extends xe.PriceLineAxisView {
      constructor(e, t, i) {
        super(), this._model = e, this._isLineVisible = t, this._getValue = i
      }
      _isVisible() {
        return this._isLineVisible.value()
      }
      _lineWidth() {
        return De(this._model.dark().value()).lineWidth
      }
      _lineStyle() {
        return De(this._model.dark().value()).lineStyle
      }
      _priceLineColor(e) {
        return De(this._model.dark().value()).lineColor
      }
      _value() {
        const e = this._model.mainSeries(),
          t = e.priceScale(),
          i = e.firstValue(),
          s = this._getValue();
        if (null === i || null === s) return {
          noData: !0
        };
        const o = t.priceToCoordinate(s, i);
        return {
          noData: !1,
          floatCoordinate: o,
          coordinate: o,
          color: "",
          formattedPricePercentage: "",
          formattedPriceAbsolute: "",
          formattedPriceIndexedTo100: "",
          text: "",
          index: 0
        }
      }
    }
    var Ne;
    ! function(e) {
      e[e.High = 0] = "High", e[e.Low = 1] = "Low"
    }(Ne || (Ne = {}));
    const Oe = w.t(null, void 0, i(78254)),
      Fe = w.t(null, void 0, i(65318));

    function We(e, t, i, s) {
      const o = new Be(e, i, s),
        n = new Ve(e, i.label, i, s);
      return {
        paneView: o,
        panePriceAxisView: new Ie.PanePriceAxisView(n, t, e),
        priceAxisView: n,
        priceLineAxisView: new Re(e, i.lineVisible, s)
      }
    }
    const He = {
      light: {
        lineStyle: ke.LINESTYLE_DOTTED,
        lineWidth: 1,
        textColor: (0, Le.getHexColorByName)("color-cold-gray-900"),
        backgroundColor: (0, Le.getHexColorByName)("color-tv-blue-50"),
        lineColor: (0, Le.getHexColorByName)("color-cold-gray-500")
      },
      dark: {
        lineStyle: ke.LINESTYLE_DOTTED,
        lineWidth: 1,
        textColor: (0, Le.getHexColorByName)("color-white"),
        backgroundColor: (0, Le.getHexColorByName)("color-tv-blue-a800"),
        lineColor: (0, Le.getHexColorByName)("color-cold-gray-500")
      }
    };

    function ze(e) {
      return e ? He.dark : He.light
    }
    class Ue extends Ae.HorizontalLinePaneView {
      constructor(e, t, i) {
        super(), this._model = e, this._isVisible = t.lineVisible, this._lineColor = t.lineColor, this._lineWidth =
          t.lineWidth, this._getValue = i
      }
      _updateImpl() {
        const e = this._lineRendererData;
        if (e.visible = !1, !this._isVisible.value()) return;
        const t = this._model.mainSeries(),
          i = t.priceScale(),
          s = t.firstValue(),
          o = this._getValue();
        if (null === s || null === o) return;
        const n = ze(this._model.dark().value()),
          r = this._lineColor.value() ? this._lineColor.value() : n.lineColor,
          a = this._lineWidth.value() ? this._lineWidth.value() : n.lineWidth;
        e.visible = !0, e.y = i.priceToCoordinate(o, s), e.linestyle = n.lineStyle, e.linewidth = a, e.color = r
      }
    }
    class je extends me.PriceAxisView {
      constructor(e, t, i, s) {
        super(), this._model = e, this._label = t, this._isVisible = i, this._getValue = s
      }
      _updateRendererData(e, t, i) {
        if (e.visible = !1, t.visible = !1, !this._isVisible.value()) return;
        const s = this._model.mainSeries(),
          o = s.priceScale(),
          n = s.firstValue(),
          r = this._getValue();
        if (null === n || null === r) return;
        const a = ze(this._model.dark().value());
        e.visible = !0, t.visible = !0, e.text = o.formatPriceAbsolute(r), t.text = this._label, i.coordinate = o
          .priceToCoordinate(r, n), i.background = a.backgroundColor, i.textColor = a.textColor
      }
    }
    class Ge extends xe.PriceLineAxisView {
      constructor(e, t, i) {
        super(), this._model = e, this._isLineVisible = t, this._getValue = i
      }
      _isVisible() {
        return this._isLineVisible.value()
      }
      _lineWidth() {
        return ze(this._model.dark().value()).lineWidth
      }
      _lineStyle() {
        return ze(this._model.dark().value()).lineStyle
      }
      _priceLineColor(e) {
        return ze(this._model.dark().value()).lineColor
      }
      _value() {
        const e = this._model.mainSeries(),
          t = e.priceScale(),
          i = e.firstValue(),
          s = this._getValue();
        if (null === i || null === s) return {
          noData: !0
        };
        const o = t.priceToCoordinate(s, i);
        return {
          noData: !1,
          floatCoordinate: o,
          coordinate: o,
          color: "",
          formattedPricePercentage: "",
          formattedPriceAbsolute: "",
          formattedPriceIndexedTo100: "",
          text: "",
          index: 0
        }
      }
    }
    var qe;
    ! function(e) {
      e[e.Avg = 0] = "Avg"
    }(qe || (qe = {}));
    const $e = w.t(null, void 0, i(73025));

    function Ke(e, t, i, s) {
      const o = i.childs(),
        n = function(e, t, i, s) {
          const o = new Ue(e, i, s),
            n = new je(e, i.label, i.labelVisible, s),
            r = new Ie.PanePriceAxisView(n, t, e),
            a = new Ge(e, i.lineVisible, s);
          return {
            paneView: o,
            panePriceAxisView: r,
            priceAxisView: n,
            priceLineAxisView: a
          }
        }(e, t, {
          label: $e,
          labelVisible: o.averageClosePriceLabelVisible,
          lineVisible: o.averageClosePriceLineVisible,
          lineColor: o.averagePriceLineColor,
          lineWidth: o.averagePriceLineWidth
        }, (() => s(0)));
      return {
        paneViews: [n.paneView],
        panePriceAxisViews: [n.panePriceAxisView],
        priceAxisViews: [n.priceAxisView],
        priceLineAxisViews: [n.priceLineAxisView]
      }
    }
    var Ye = i(3885);
    const Ze = {
        open: w.t(null, {
          context: "in_legend"
        }, i(46728)),
        high: w.t(null, {
          context: "in_legend"
        }, i(43253)),
        low: w.t(null, {
          context: "in_legend"
        }, i(89923)),
        close: w.t(null, {
          context: "in_legend"
        }, i(2696)),
        hl2: w.t(null, {
          context: "in_legend"
        }, i(61372)),
        hlc3: w.t(null, {
          context: "in_legend"
        }, i(55096)),
        ohlc4: w.t(null, {
          context: "in_legend"
        }, i(94174))
      },
      Xe = W.CheckMobile.any();
    class Je extends Ye.SeriesValuesProvider {
      constructor(e, t) {
        super(e, t);
        const i = t.properties().childs().paneProperties.childs().legendProperties.childs();
        this._showBarChangeProp = i.showBarChange, this._showLastDayChangeProp = i.showLastDayChange, this
          ._showSeriesOHLCProp = i.showSeriesOHLC, this._showVolumeProp = i.showVolume, this
          ._showSeriesLegendCloseOnMobile = i.showSeriesLegendCloseOnMobile, this._seriesStyleProp = e.properties()
          .childs().style;
        const s = this._emptyValues[0],
          o = this._emptyValues[1],
          n = this._emptyValues[2];
        s.title = Ze.open, o.title = Ze.high, n.title = Ze.low, s.unimportant = !0, o.unimportant = !0, n
          .unimportant = !0, this._emptyValues[6].title = "", this._emptyValues[8].title = "", this._emptyValues[4]
          .title = ""
      }
      getValues(e) {
        const t = super.getValues(e),
          i = this._series.style(),
          s = 12 !== i,
          o = this._showOHLC(),
          n = s && this._showBarChangeProp.value(),
          r = s && this._showLastDayChange(),
          a = !Xe || this._showSeriesLegendCloseOnMobile.value(),
          l = this._mobileNonTrackingMode();
        if (this._showLastPriceAndChangeOnly()) {
          const e = t[5];
          return e.visible = e.visible && o && a && l, t[6].visible &&= n, t[8].visible = !1, t
        }
        const c = 12 !== i && 16 !== i && 21 !== i,
          h = 12 !== i,
          d = this._series.intervalObj().value().is1Tick(),
          u = t[7];
        u.visible = u.visible && this._showVolumeProp.value();
        const _ = (0, g.isPriceSourceStyle)(this._seriesStyleProp.value()),
          p = o && !_,
          m = o && _;
        if (t[0].visible = p && c && !d, t[1].visible = p && !d, t[2].visible = p && !d, t[3].visible = p && h, t[3]
          .title = d ? "" : Ze.close, t[4].visible = m, t[6].visible &&= n, t[8].visible &&= r, 16 === i) {
          const e = this._series.properties().childs().hlcAreaStyle.childs();
          t[1].color = e.highLineColor.value(), t[2].color = e.lowLineColor.value(), t[3].color = e.closeLineColor
            .value()
        }
        return t
      }
      _showOHLC() {
        return this._showSeriesOHLCProp.value()
      }
      _showLastDayChange() {
        return this._showLastDayChangeProp.value()
      }
    }
    class Qe extends Je {
      _showOHLC() {
        return !0
      }
      _showLastDayChange() {
        return !1
      }
    }
    var et, tt = i(48096),
      it = i(36597),
      st = i(60911),
      ot = i(10555);
    class nt {
      constructor() {
        this._data = null
      }
      setData(e) {
        this._data = e
      }
      data() {
        return this._data
      }
      draw(e, t) {
        const i = this._data;
        if (null === i) return;
        const {
          horizontalPixelRatio: s,
          verticalPixelRatio: o
        } = t;
        e.save();
        const n = Math.max(1, Math.floor(s)),
          r = n % 2 / 2,
          a = Math.round(i.center.x * s) + r,
          l = i.center.y * o;
        e.fillStyle = i.seriesLineColor, e.beginPath();
        const c = Math.max(2, 1.5 * i.seriesLineWidth) * s;
        e.arc(a, l, c, 0, 2 * Math.PI, !1), e.fill(), e.fillStyle = i.fillColor, e.beginPath(), e.arc(a, l, i.radius *
          s, 0, 2 * Math.PI, !1), e.fill(), e.lineWidth = n, e.strokeStyle = i.strokeColor, e.beginPath(), e.arc(a,
          l, i.radius * s + n / 2, 0, 2 * Math.PI, !1), e.stroke(), e.restore()
      }
      hitTest(e) {
        return null
      }
    }

    function rt(e) {
      return e
    }! function(e) {
      e[e.AnimationPeriod = 2600] = "AnimationPeriod", e[e.Stage1Period = .25] = "Stage1Period", e[e.Stage2Period =
          .275] = "Stage2Period", e[e.Stage3Period = .475] = "Stage3Period", e[e.Stage1StartCircleRadius = 4] =
        "Stage1StartCircleRadius", e[e.Stage1EndCircleRadius = 10] = "Stage1EndCircleRadius", e[e.Stage1StartFillAlpha =
          .25] = "Stage1StartFillAlpha", e[e.Stage1EndFillAlpha = 0] = "Stage1EndFillAlpha", e[e
          .Stage1StartStrokeAlpha = .4] = "Stage1StartStrokeAlpha", e[e.Stage1EndStrokeAlpha = .8] =
        "Stage1EndStrokeAlpha", e[e.Stage2StartCircleRadius = 10] = "Stage2StartCircleRadius", e[e
          .Stage2EndCircleRadius = 14] = "Stage2EndCircleRadius", e[e.Stage2StartFillAlpha = 0] =
        "Stage2StartFillAlpha", e[e.Stage2EndFillAlpha = 0] = "Stage2EndFillAlpha", e[e.Stage2StartStrokeAlpha = .8] =
        "Stage2StartStrokeAlpha", e[e.Stage2EndStrokeAlpha = 0] = "Stage2EndStrokeAlpha", e[e.Stage3StartCircleRadius =
          14] = "Stage3StartCircleRadius", e[e.Stage3EndCircleRadius = 14] = "Stage3EndCircleRadius", e[e
          .Stage3StartFillAlpha = 0] = "Stage3StartFillAlpha", e[e.Stage3EndFillAlpha = 0] = "Stage3EndFillAlpha", e[e
          .Stage3StartStrokeAlpha = 0] = "Stage3StartStrokeAlpha", e[e.Stage3EndStrokeAlpha = 0] =
        "Stage3EndStrokeAlpha"
    }(et || (et = {}));
    const at = [{
      start: 0,
      end: .25,
      startRadius: 4,
      endRadius: 10,
      startFillAlpha: .25,
      endFillAlpha: 0,
      startStrokeAlpha: .4,
      endStrokeAlpha: .8,
      easing: rt
    }, {
      start: .25,
      end: .525,
      startRadius: 10,
      endRadius: 14,
      startFillAlpha: 0,
      endFillAlpha: 0,
      startStrokeAlpha: .8,
      endStrokeAlpha: 0,
      easing: rt
    }, {
      start: .525,
      end: 1,
      startRadius: 14,
      endRadius: 14,
      startFillAlpha: 0,
      endFillAlpha: 0,
      startStrokeAlpha: 0,
      endStrokeAlpha: 0,
      easing: rt
    }];

    function lt(e, t, i, s) {
      const o = i + (s - i) * t;
      return (0, pe.applyTransparency)(e, (0, pe.alphaToTransparency)(o))
    }
    const ct = (0, Le.getHexColorByName)("color-minty-green-400"),
      ht = (0, Le.getHexColorByName)("color-ripe-red-500");

    function dt(e, t, i) {
      const s = e % 2600 / 2600;
      let o;
      for (const e of at)
        if (s >= e.start && s <= e.end) {
          o = e;
          break
        } if (void 0 === o) throw new Error("Last price animation internal logic error");
      const n = o.easing((s - o.start) / (o.end - o.start));
      return {
        fillColor: lt(i, n, o.startFillAlpha, o.endFillAlpha),
        strokeColor: lt(i, n, o.startStrokeAlpha, o.endStrokeAlpha),
        radius: (r = n, a = o.startRadius, l = o.endRadius, a + (l - a) * r)
      };
      var r, a, l
    }
    class ut {
      constructor(e) {
        this._renderer = new nt, this._invalidated = !0, this._stageInvalidated = !0, this._startTime = performance
          .now(), this._endTime = this._startTime - 1, this._prevRenderedPrice = null, this._series = e
      }
      update(e) {
        if (this._invalidated = !0, "data-source-change" === e.type && e.sourceId === this._series.id() && e
          .realtime && this._series.seriesLoaded()) {
          const e = performance.now(),
            t = this._endTime - e;
          if (t > 0) return void(t < 650 && (this._endTime += 2600));
          this._startTime = e, this._endTime = e + 2600
        }
      }
      invalidateStage() {
        this._stageInvalidated = !0
      }
      animationActive() {
        return performance.now() <= this._endTime
      }
      stopAnimation() {
        this._endTime = this._startTime - 1
      }
      renderer(e) {
        return this._invalidated ? (this._updateImpl(e), this._invalidated = !1, this._stageInvalidated = !1) : this
          ._stageInvalidated && (this._updateRendererDataStage(), this._stageInvalidated = !1), this._renderer
      }
      _updateImpl(e) {
        this._renderer.setData(null);
        const t = this._series.model().timeScale(),
          i = t.visibleBarsStrictRange(),
          s = this._series.firstValue(),
          o = this._series.lastValueData(void 0, !0, !0);
        if (null === i || null === s || void 0 === o.index || void 0 === o.price || !i.contains(o.index)) return;
        const n = new ot.Point(t.indexToCoordinate(o.index), this._series.priceScale().priceToCoordinate(o.price, s)),
          r = o.color,
          a = this._series.properties().childs();
        let l;
        switch (this._series.style()) {
          case 3:
            l = a.areaStyle.childs().linewidth.value();
            break;
          case 10:
            const t = a.baselineStyle,
              i = Math.round(e.mediaSize.height * (Math.abs(100 - t.childs().baseLevelPercentage.value()) / 100));
            l = n.y <= i ? t.childs().topLineWidth.value() : t.childs().bottomLineWidth.value();
            break;
          case 14:
            l = a.lineWithMarkersStyle.childs().linewidth.value();
            break;
          case 15:
            l = a.steplineStyle.childs().linewidth.value();
            break;
          default:
            l = a.lineStyle.childs().linewidth.value()
        }
        this._lastBaseColor = null === this._prevRenderedPrice || this._prevRenderedPrice === o.price ? r : this
          ._prevRenderedPrice < o.price ? ct : ht;
        const c = dt(this._duration(), 0, this._lastBaseColor);
        this._renderer.setData({
          seriesLineColor: r,
          seriesLineWidth: l,
          fillColor: c.fillColor,
          strokeColor: c.strokeColor,
          radius: c.radius,
          center: n
        }), this._prevRenderedPrice = o.price
      }
      _updateRendererDataStage() {
        const e = this._renderer.data();
        if (null !== e) {
          const t = dt(this._duration(), e.seriesLineColor, this._lastBaseColor);
          e.fillColor = t.fillColor, e.strokeColor = t.strokeColor, e.radius = t.radius
        }
      }
      _duration() {
        return this.animationActive() ? performance.now() - this._startTime : 2599
      }
    }
    var _t = i(51304),
      pt = i(22613),
      mt = i(29806),
      gt = i(98155);
    class ft {
      constructor() {
        this._created = new tt.Delegate,
          this._modified = new tt.Delegate, this._loading = new tt.Delegate, this._completed = new tt.Delegate, this
          ._error = new tt.Delegate, this._symbolError = new tt.Delegate, this._symbolResolved = new tt.Delegate, this
          ._seriesError = new tt.Delegate, this._symbolNotPermitted = new tt.Delegate, this._symbolInvalid = new tt
          .Delegate, this._symbolGroupNotPermitted = new tt.Delegate, this._chartTypeNotPermitted = new tt.Delegate,
          this._intradaySpreadNotPermitted = new tt.Delegate, this._intradayExchangeNotPermitted = new tt.Delegate,
          this._customIntervalNotPermitted = new tt.Delegate, this._secondsIntervalNotPermitted = new tt.Delegate,
          this._ticksIntervalNotPermitted = new tt.Delegate, this._barReceived = new tt.Delegate, this
          ._seriesTimeFrame = new tt.Delegate, this._dataUpdated = new tt.Delegate, this
          ._unsupportedResolutionRequested = new tt.Delegate
      }
      destroy() {
        this._created.destroy(), this._modified.destroy(), this._loading.destroy(), this._completed.destroy(), this
          ._error.destroy(), this._symbolError.destroy(), this._symbolResolved.destroy(), this._seriesError.destroy(),
          this._symbolInvalid.destroy(), this._symbolNotPermitted.destroy(), this._symbolGroupNotPermitted.destroy(),
          this._chartTypeNotPermitted.destroy(), this._intradaySpreadNotPermitted.destroy(), this
          ._intradayExchangeNotPermitted.destroy(), this._customIntervalNotPermitted.destroy(), this
          ._secondsIntervalNotPermitted.destroy(), this._ticksIntervalNotPermitted.destroy(), this._barReceived
          .destroy(), this._seriesTimeFrame.destroy(), this._dataUpdated.destroy(), this
          ._unsupportedResolutionRequested.destroy()
      }
      created() {
        return this._created
      }
      modified() {
        return this._modified
      }
      loading() {
        return this._loading
      }
      completed() {
        return this._completed
      }
      error() {
        return this._error
      }
      symbolError() {
        return this._symbolError
      }
      symbolResolved() {
        return this._symbolResolved
      }
      seriesError() {
        return this._seriesError
      }
      symbolInvalid() {
        return this._symbolInvalid
      }
      symbolNotPermitted() {
        return this._symbolNotPermitted
      }
      symbolGroupNotPermitted() {
        return this._symbolGroupNotPermitted
      }
      chartTypeNotPermitted() {
        return this._chartTypeNotPermitted
      }
      intradaySpreadNotPermitted() {
        return this._intradaySpreadNotPermitted
      }
      intradayExchangeNotPermitted() {
        return this._intradayExchangeNotPermitted
      }
      customIntervalNotPermitted() {
        return this._customIntervalNotPermitted
      }
      secondsIntervalNotPermitted() {
        return this._secondsIntervalNotPermitted
      }
      ticksIntervalNotPermitted() {
        return this._ticksIntervalNotPermitted
      }
      barReceived() {
        return this._barReceived
      }
      seriesTimeFrame() {
        return this._seriesTimeFrame
      }
      dataUpdated() {
        return this._dataUpdated
      }
      unsupportedResolutionRequested() {
        return this._unsupportedResolutionRequested
      }
      fireCompleted(e) {
        this._completed.fire(e)
      }
      fireCreated(e) {
        this._created.fire(e)
      }
      fireModified() {
        this._modified.fire()
      }
      fireLoading(e) {
        this._loading.fire(e)
      }
      fireError() {
        this._error.fire()
      }
      fireSymbolError(e) {
        this._symbolError.fire(e), this.fireError()
      }
      fireSymbolResolved(e) {
        this._symbolResolved.fire(e)
      }
      fireSeriesError(e) {
        this._seriesError.fire(e), this.fireError()
      }
      fireSymbolInvalid() {
        this._symbolInvalid.fire()
      }
      fireSymbolNotPermitted(e) {
        this._symbolNotPermitted.fire(e)
      }
      fireSymbolGroupNotPermitted(e) {
        this._symbolGroupNotPermitted.fire(e)
      }
      fireChartTypeNotPermitted(e) {
        this._chartTypeNotPermitted.fire(e), this.fireError()
      }
      fireIntradaySpreadNotPermitted() {
        this._intradaySpreadNotPermitted.fire(), this.fireError()
      }
      fireIntradayExchangeNotPermitted() {
        this._intradayExchangeNotPermitted.fire(), this.fireError()
      }
      fireCustomIntervalNotPermitted(e) {
        this._customIntervalNotPermitted.fire(e), this.fireError()
      }
      fireSecondsIntervalNotPermitted() {
        this._secondsIntervalNotPermitted.fire(), this.fireError()
      }
      fireTicksIntervalNotPermitted() {
        this._ticksIntervalNotPermitted.fire(), this.fireError()
      }
      fireBarReceived(e) {
        this._barReceived.fire(e)
      }
      fireSeriesTimeFrame(e, t, i, s, o) {
        this._seriesTimeFrame.fire(e, t, i, s, o)
      }
      fireDataUpdated(e, t, i, s, o) {
        this._dataUpdated.fire(e, t, i, s, o)
      }
      fireUnsupportedResolutionRequested() {
        this._unsupportedResolutionRequested.fire()
      }
    }
    var yt = i(77380);
    const vt = (0, n.getLogger)("Chart.SeriesDataSource");
    var St;
    ! function(e) {
      e[e.Idle = 0] = "Idle", e[e.AwaitingConnection = 1] = "AwaitingConnection", e[e.AwaitingFirstDataUpdate = 2] =
        "AwaitingFirstDataUpdate", e[e.Active = 3] = "Active"
    }(St || (St = {}));
    let bt = 1;
    let wt = 1;

    function Ct(e) {
      return e.startDate ? e.endDate || e.count ? e.endDate ? ["from_to", e.startDate, e.endDate] : ["bar_count", e
        .startDate, (0, o.ensure)(e.count)
      ] : ["from_to", e.startDate] : e.count || 300
    }

    function Tt(e) {
      return (0, st.extractExtendedSymbol)(e).symbol
    }
    class Pt {
      constructor(e, t, i, s) {
        this._extSymbol = null, this._lastResolvedSymbol = "", this._createSeriesOverriddenParams = 0, this
          ._instanceId = null, this._symbolInstanceId = null, this._resolution = null, this._timeFrame = null, this
          ._data = new d.SeriesData, this._dataEvents = new ft, this._status = St.Idle, this._turnaroundCounter = 1,
          this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this), this
          ._ongoingDataUpdate = Promise.resolve(), this._gateway = e, this._turnaroundPrefix = t, this
          ._createSeriesParams = Ct(i ?? {
            count: 300
          }), this._timeFrame = s || null, this._gateway.isConnected().subscribe(this
            ._boundOnGatewayIsConnectedChanged)
      }
      destroy() {
        this.stop(), this._gateway.isConnected().unsubscribe(this._boundOnGatewayIsConnectedChanged), this._dataEvents
          .destroy()
      }
      canModifySeries(e, t) {
        const i = !(0, de.deepEquals)(this._extSymbol, e)[0],
          s = null === this._resolution || !Q.Interval.isEqual(this._resolution, t);
        return i || s
      }
      modifySeries(e, t, i = null, s = !1, n = null) {
        s && (vt.logNormal("Due to force flag clearing symbol & resolution to force re-requesting data."), this
          ._extSymbol = null, this._resolution = null);
        const r = Tt(e),
          a = !this.symbolSameAsResolved(r);
        if (a && (this._lastResolvedSymbol = ""), this._extSymbol && !a) {
          const t = Tt(this._extSymbol);
          (0, st.replaceExtendedSymbol)(e, t)
        }
        const l = this._extSymbol,
          c = this._resolution;
        if (this._extSymbol = e, this._resolution = t, null === this._instanceId) return void(this._timeFrame = i);
        const h = !(0, de.deepEquals)(l, e)[0];
        h && (0, st.replaceExtendedSymbol)(this._extSymbol, r);
        const d = null === c || !Q.Interval.isEqual(c, t);
        (h || d || null !== i) && (this._timeFrame = null, (h || d) && this._turnaroundCounter++, h && this
          ._resolveSymbol(), this._gateway.modifySeries(this._instanceId, this.turnaround(), (0,
            o.ensureNotNull)(this._symbolInstanceId), this._resolution, n, i, this._onMessage.bind(this)), this
          ._dataEvents.fireModified())
      }
      requestMoreData(e) {
        null !== this._instanceId && this._gateway.requestMoreData(this._instanceId, e, this._onMessage.bind(this))
      }
      requestMoreTickmarks(e) {
        null !== this._instanceId && this._gateway.requestMoreTickmarks(this._instanceId, e, this._onMessage.bind(
          this))
      }
      setFutureTickmarksMode(e) {
        null !== this._instanceId && this._gateway.setFutureTickmarksMode(e)
      }
      isStarted() {
        return this._status !== St.Idle
      }
      isActive() {
        return this._status === St.Active
      }
      resolution() {
        return this._resolution
      }
      start() {
        this.isStarted() ? vt.logNormal("start: data source is already started, nothing to do") : ((0, o.assert)(
            null !== this._extSymbol, "symbol must be set before start"), (0, o.assert)(null !== this._resolution,
            "resolution must be set before start"), this._gateway.isConnected().value() ? this._createSeries() :
          this._changeStatusTo(St.AwaitingConnection))
      }
      stop() {
        this.isStarted() ? (null !== this._instanceId && (this._gateway.removeSeries(this._instanceId), this
          ._instanceId = null), this._symbolInstanceId = null, this._changeStatusTo(St.Idle)) : vt.logNormal(
          "stop: data source is already stopped, nothing to do")
      }
      instanceId() {
        return this._instanceId
      }
      data() {
        return this._data
      }
      setData(e) {
        this._data = e
      }
      setTimeframe(e) {
        this._timeFrame = e
      }
      clearData() {
        this.isStarted() ? this._enqueueUpdate((() => this._clearDataImpl())) : this._clearDataImpl()
      }
      dataEvents() {
        return this._dataEvents
      }
      turnaround() {
        return `${this._turnaroundPrefix}${this._turnaroundCounter}`
      }
      symbolInstanceId() {
        return this._symbolInstanceId
      }
      symbol() {
        return this._extSymbol
      }
      updateExtSymbol(e) {
        this._extSymbol = e
      }
      moveData(e) {
        return this._enqueueUpdate((() => this._data.moveData(e)))
      }
      setInitialRequestOptions(e) {
        this._createSeriesOverriddenParams = Ct(e)
      }
      symbolSameAsResolved(e) {
        return null !== this._extSymbol && (0, yt.symbolSameAsResolved)(e, Tt(this._extSymbol), this
          ._lastResolvedSymbol)
      }
      resolvedSymbol() {
        return null === this._extSymbol ? null : Tt(this._extSymbol)
      }
      _resolveSymbol() {
        null !== this._extSymbol && (this._symbolInstanceId = this._gateway.resolveSymbol("sds_sym_" + bt++, (0, st
          .encodeExtendedSymbolOrGetSimpleSymbolString)(this._extSymbol), this._onMessage.bind(this)))
      }
      _clearDataImpl() {
        this._data.clear()
      }
      _changeStatusTo(e) {
        (0, o.assert)(this._status !== e, "Source and destination status should be distinct"), vt.logNormal(
          `Status changed from ${St[this._status]} to ${St[e]}`), this._status = e
      }
      _createSeries() {
        (0, o.assert)(this._status !== St.Active, 'Status should not be "Active" when creating a study'), this
          ._instanceId = "sds_" + wt++, this._resolveSymbol();
        const e = this._createSeriesOverriddenParams || this._createSeriesParams;
        this._createSeriesOverriddenParams && (this._createSeriesOverriddenParams = 0), this._gateway.createSeries(
            this._instanceId, this.turnaround(), (0, o.ensureNotNull)(this._symbolInstanceId), (0, o.ensureNotNull)(
              this._resolution), e, this._timeFrame, this._onMessage.bind(this)), this._timeFrame = null, this
          ._changeStatusTo(St.AwaitingFirstDataUpdate), this._dataEvents.fireCreated(this._instanceId)
      }
      _onGatewayIsConnectedChanged(e) {
        e ? this._onGatewayConnected() : this._onGatewayDisconnected()
      }
      _onGatewayConnected() {
        this._status === St.AwaitingConnection && this._createSeries()
      }
      _onGatewayDisconnected() {
        this._status !== St.Idle && this._status !== St.AwaitingConnection && (this._instanceId = null, this
          ._changeStatusTo(St.AwaitingConnection)), this._turnaroundCounter = 1
      }
      _onMessage(e) {
        this._enqueueUpdate((() => this._onMessageImpl(e)))
      }
      async _onMessageImpl(e) {
        switch (e.method) {
          case "symbol_resolved": {
            const [t, i] = e.params;
            if (t !== this._symbolInstanceId) {
              null !== this._symbolInstanceId && vt.logNormal(
                `Resolve for old symbol, expected: ${this._symbolInstanceId}, actual ${e.params[0]}`);
              break
            }
            this._onSymbolResolved(i);
            break
          }
          case "symbol_error":
            if (e.params[0] !== this._symbolInstanceId) {
              null !== this._symbolInstanceId && vt.logNormal(
                `Symbol error for old symbol, expected: ${this._symbolInstanceId}, actual ${e.params[0]}`);
              break
            }
            this._onSymbolError(e);
            break;
          case "series_timeframe": {
            const [t, i, s, o, n, r, a] = e.params;
            if (!this._checkTurnaround(t, i)) {
              vt.logNormal(
                `Time frame for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${i})`
                );
              break
            }
            this._onSeriesTimeFrame(s, o, n, r, a);
            break
          }
          case "series_error": {
            const [t, i] = e.params;
            if (!this._checkTurnaround(t, i)) {
              vt.logNormal(
                `Series error for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${i})`
                );
              break
            }
            this._onSeriesError(e.params[2]);
            break
          }
          case "series_loading": {
            const [t, i] = e.params;
            if (!this._checkTurnaround(t, i)) break;
            this._onSeriesLoading(e.time);
            break
          }
          case "series_completed": {
            const [t, i, s, o] = e.params;
            if (!this._checkTurnaround(t, s)) {
              vt.logNormal(
                `Series completed for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${s})`
                );
              break
            }
            this._onSeriesCompleted(i, e.time, o);
            break
          }
          case "data_update":
            if (!this._checkTurnaround(e.params.customId, e.params.turnaround)) {
              vt.logNormal(
                `Data update for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e.params.customId} (${e.params.turnaround})`
                );
              break
            }
            await this._onDataUpdate(e.params.plots, e.params.nonseries, e.params.lastBar);
            break;
          case "clear_data": {
            if (e.params.turnaround !== this.turnaround()) {
              vt.logNormal(`Clear data for old data, expected: ${this.turnaround()}, actual ${e.params.turnaround}`);
              break
            }
            const t = this._data.first();
            this._clearDataImpl(), this._dataEvents.fireDataUpdated(void 0, !1, null, !1, t);
            break
          }
        }
      }
      _onSeriesError(e) {
        let t, i;
        if ("string" == typeof e) i = {
          error: e
        }, t = e;
        else if (i = e, e.ctx) {
          const i = {};
          Object.entries(e.ctx).forEach((([e, t]) => {
            i[e] = t.toString()
          })), t = e.error.format(i)
        } else t = e.error;
        if (t.startsWith("study_not_auth:")) {
          const e = t.split(":", 2)[1].split("@", 2)[0];
          if (["BarSetRenko", "BarSetPriceBreak", "BarSetKagi", "BarSetPnF"].includes(e)) this._dataEvents
            .fireChartTypeNotPermitted(e);
          else {
            if ("BarSetSpread" === e) return void this._dataEvents.fireIntradaySpreadNotPermitted();
            if ("BarSetRange" === e) {
              const e = `${(0,o.ensureNotNull)(this._extSymbol).inputs.range}R`;
              this._dataEvents.fireCustomIntervalNotPermitted(e)
            }
          }
        } else {
          if (t.startsWith("unsupported")) return void this._dataEvents.fireUnsupportedResolutionRequested();
          "resolution_not_entitled" === t ? this._dataEvents.fireIntradayExchangeNotPermitted() :
            "custom_resolution" === t ? this._dataEvents.fireCustomIntervalNotPermitted((0, o.ensureNotNull)(this
              ._resolution)) : "seconds_not_entitled" === t ? this._dataEvents.fireSecondsIntervalNotPermitted() :
            "ticks_not_entitled" === t && this._dataEvents.fireTicksIntervalNotPermitted()
        }
        this._dataEvents.fireSeriesError(i)
      }
      _onSeriesTimeFrame(e, t, i, s, o) {
        this._dataEvents.fireSeriesTimeFrame(e, t, i, s ?? !0, o)
      }
      _onSymbolError(e) {
        if (e.params[1] === gt.permissionDenied) switch (e.params[2]) {
          case gt.SymbolErrorPermissionDeniedReason.Symbol:
            this._dataEvents.fireSymbolNotPermitted(e.params[3]);
            break;
          case gt.SymbolErrorPermissionDeniedReason.GroupPermission:
            this._dataEvents.fireSymbolGroupNotPermitted(e.params[3]);
            break;
          default:
            this._dataEvents.fireSymbolNotPermitted(e.params[2])
        } else e.params[1] === gt.invalidSymbol && this._dataEvents.fireSymbolInvalid();
        this._dataEvents.fireSymbolError(e.params[1])
      }
      _onSymbolResolved(e) {
        this._lastResolvedSymbol = (0, o.ensureNotNull)((0, f.extractSymbolNameFromSymbolInfo)(e, "")), this
          ._dataEvents.fireSymbolResolved(e)
      }
      async _onDataUpdate(e, t, i) {
        this._onDataUnpacked(e, i, await async function(e) {
          if (void 0 === e) return {
            projectionPlots: [],
            boxSize: null
          };
          if ("" === e.d || "nochange" === e.indexes) return null;
          const t = await (0, mt.unpackNonSeriesData)(e.d);
          if (null === t || t.indexes_replace) return null;
          const i = e.indexes,
            {
              bars: s,
              price: o,
              boxSize: n,
              reversalAmount: r
            } = t.data,
            a = (s || []).map((e => {
              let t;
              return "factor" in e ? t = e.factor : "additionalPrice" in e && (t = e.additionalPrice), {
                index: i[e.time],
                value: [0, e.open, e.high, e.low, e.close, e.volume, t]
              }
            }));
          return {
            lastPrice: o,
            projectionPlots: a,
            reversalAmount: r,
            boxSize: n
          }
        }(t))
      }
      _enqueueUpdate(e) {
        return this._ongoingDataUpdate = this._ongoingDataUpdate.then(e, e), this._ongoingDataUpdate
      }
      _onDataUnpacked(e, t, i) {
        if (this._status === St.Idle) return;
        this._status === St.AwaitingFirstDataUpdate && (this._changeStatusTo(St.Active), this._clearDataImpl());
        const s = this._data.bars().size(),
          o = this._data.first(),
          n = this._data.bars().firstIndex(),
          r = this._data.mergeRegularBars(e);
        null !== i && (this._data.nsBars().clear(), this._data.nsBars().merge(i.projectionPlots), this._data
          .lastProjectionPrice = i.lastPrice, null !== i.boxSize && (this._data.boxSize = i.boxSize), this._data
          .reversalAmount = i.reversalAmount);
        const a = null === n,
          l = a || null !== r && r.index < n;
        this._dataEvents.fireDataUpdated(t, l, r, a, o), s !== this._data.bars().size() && null !== r && this
          ._dataEvents.fireBarReceived(r)
      }
      _onSeriesLoading(e) {
        this._dataEvents.fireLoading(e)
      }
      _onSeriesCompleted(e, t, i) {
        this._dataEvents.fireCompleted({
          updateMode: e,
          time: t,
          flags: i
        })
      }
      _checkTurnaround(e, t) {
        return this._instanceId === e && (void 0 === t || t === this.turnaround())
      }
    }
    var xt = i(87296),
      Mt = i(12178);
    class It extends Ae.HorizontalLinePaneView {
      constructor(e) {
        super(), this._series = e, this._model = e.model()
      }
    }
    const At = C.enabled("chart_style_hilo_last_price");
    class Lt extends It {
      constructor(e) {
        super(e), this._lineRendererData.linestyle = ke.LINESTYLE_DOTTED
      }
      _updateImpl() {
        this._lineRendererData.visible = !1;
        const e = this._series.properties().childs();
        if (!e.showPriceLine.value()) return;
        if (!At && 12 === e.style.value()) return;
        const t = 8 === e.style.value() && e.haStyle.childs().showRealLastPrice.value(),
          i = this._series.lastValueData(t ? 4 : void 0, !0);
        if (i.noData) return;
        let s = i.coordinate;
        if (t) {
          const e = this._series.firstValue(),
            t = this._series.data().lastProjectionPrice;
          if (null === e || void 0 === t) return;
          s = this._series.priceScale().priceToCoordinate(t, e)
        }
        this._lineRendererData.visible = !0, this._lineRendererData.y = s, this._lineRendererData.color = this._series
          .priceLineColor(i.color), this._lineRendererData.linewidth = e.priceLineWidth.value()
      }
    }
    var kt = i(64651),
      Et = i(88732),
      Dt = i(85630),
      Bt = i(62802),
      Vt = i(27808),
      Rt = i(32399),
      Nt = i(4249),
      Ot = i(46340),
      Ft = i(94602),
      Wt = i(4539),
      Ht = i(45801),
      zt = i(48227);
    class Ut extends Vt.SeriesCandlesPaneView {
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const e = this._source.priceScale();
        if (!e) return null;
        const t = this._source.properties().childs().haStyle.childs(),
          i = this._model.timeScale().barSpacing(),
          s = {
            bars: this._bars,
            barSpacing: i,
            bodyVisible: t.drawBody.value(),
            borderVisible: t.drawBorder.value(),
            borderColor: t.borderColor.value(),
            wickColor: t.wickColor.value(),
            barWidth: (0, Wt.optimalBarWidth)(i),
            wickVisible: t.drawWick.value(),
            isPriceScaleInverted: e.isInverted()
          },
          o = new Ft.CompositeRenderer;
        return o.append(new zt.PaneRendererCandles(s)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && o.append(new Ht.SelectionRenderer(this._selectionData)), o
      }
    }
    var jt = i(54405),
      Gt = i(43501),
      qt = i(17776),
      $t = i(70859),
      Kt = i(2088),
      Yt = i(35727),
      Zt = i(88145),
      Xt = (i(22033), i(36313)),
      Jt = i(54370);
    class Qt extends It {
      constructor(e) {
        super(e)
      }
      _updateImpl() {
        this._lineRendererData.visible = !1;
        const e = this._series.priceScale().mode();
        if (!e.percentage && !e.indexedTo100) return;
        const t = this._series.firstValue();
        null !== t && (this._lineRendererData.visible = !0, this._lineRendererData.y = this._series.priceScale()
          .priceToCoordinate(t, t), this._lineRendererData.color = this._series.properties().childs().baseLineColor
          .value())
      }
    }
    var ei = i(48943),
      ti = i(86252),
      ii = i(93201),
      si = i(52959),
      oi = i(31789);
    class ni {
      constructor(e) {
        this._items = [], this._invalidated = !0, this._seriesValuesProvider = null, this._model = e
      }
      destroy() {}
      items() {
        return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._items
      }
      update(e) {
        this._invalidated = !0
      }
      _updateImpl() {
        const e = this._model.mainSeries();
        this._seriesValuesProvider || (this._seriesValuesProvider = new Ye.SeriesValuesProvider(e, this._model));
        const t = this._model.crosshairSource().appliedIndex(),
          i = e.chartFloatingTooltipValuesProvider(),
          s = this._seriesValuesProvider.getValues(t),
          o = oi.priceSourceTitles[e.priceSource() ?? "close"],
          n = !!this._model.mainPane()?.priceDataSources().some((e => (0, Kt.isStudy)(e) &&
            "Volume@tv-basicstudies" === e.metaInfo().id)),
          r = (e, t) => 7 === t ? e || n : e;
        this._items = i.getValues(t).map(((e, t) => ({
          ...e,
          title: 4 === t ? o : s[t].title,
          visible: r(e.visible, t)
        }))).filter((e => e.visible)).map((e => ({
          titleText: e.title,
          titleInputs: "",
          value: e.value,
          valueColor: e.color
        })))
      }
    }
    var ri = i(28334),
      ai = i(11768);
    const li = C.enabled("price_scale_always_last_bar_value"),
      ci = C.enabled("display_data_mode"),
      hi = !C.enabled("hide_series_legend_item"),
      di = C.enabled("hide_price_scale_global_last_bar_value"),
      ui = C.enabled("show_average_close_price_line_and_label"),
      _i = C.enabled("no_bars_status"),
      pi = C.enabled("charting_library_debug_mode"),
      mi = C.enabled("chart_style_hilo_last_price"),
      gi = (0, n.getLogger)("Chart.Series"),
      fi = C.enabled("pre_post_market_sessions");
    const yi = {
      countdownEnabled: !0,
      lastPriceAnimationEnabled: !0
    };

    function vi(e, t, i) {
      return void 0 === t ? null : `${e}=${t} (${i?"changed":"unchanged"})`
    }

    function Si(e) {
      const t = e.state();
      return t.data.forEach((e => e.value.splice(7, 1))), t
    }

    function bi(e) {
      const {
        seriesStatus: t,
        additionalStudyStatus: i
      } = e;
      if (S.seriesLoadingStatuses.has(t)) return 2;
      if (i) {
        if (4 !== t && i.type === ti.StudyStatusType.Error) return 13;
        if (S.seriesReadyStatuses.has(t) && (i.type === ti.StudyStatusType.Loading || i.type === ti.StudyStatusType
            .Undefined)) return 2
      }
      return t
    }
    class wi extends c.PriceDataSource {
      constructor(e, t, i, s) {
        t.removeProperty("currencyId"), super(e, "_seriesId"), this.isSeries = !0, this
          .requestingStyleIsNotSupported = new tt.Delegate, this.requestingStyleSupportRecovered = new tt.Delegate,
          this._paneView = null, this._futureBarsPaneView = null, this._projectionBarsPaneView = null, this
          ._waterlineView = null, this._priceLineView = null, this._gotoDateView = null, this
          ._baseHorizontalLineView = null, this._priceStep = null, this._symbolInfo = new pt.WatchedValue(null),
          this._isPrePostMarketPricesAvailableProperty = new m.Property(!1), this
          ._isBackAdjustmentForbiddenProperty = new m.Property(!0), this._isSettlementAsCloseForbiddenProperty =
          new m.Property(!0), this._highLowPriceCache = new Map, this._averagePriceCache = new Map, this
          ._prevClosePriceAxisView = null, this._priceScaleAboutToBeChanged = new tt.Delegate, this._onRestarted =
          new tt.Delegate, this._onStatusChanged = new tt.Delegate, this._tagsChanged = new tt.Delegate, this
          ._intervalChanged = new tt.Delegate, this._sessionIdChanged = new tt.Delegate, this
          ._requestMoreDataAvailable = !0, this._lineStyleLastPriceCirclePaneView = new ut(this), this
          ._prevClosePriceLineView = null, this._dataPoweredBy = null, this._symbolResolvingActive = new pt
          .WatchedValue(!1), this._predictBars = 0, this._syncModel = null, this._data = null, this
          ._lastCompleteFlags = null, this._haStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(8, !0))
          }, this._renkoStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(4, !0))
          }, this._pbStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(7, !0))
          }, this._kagiStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(5, !0))
          }, this._pnfStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(6, !0))
          }, this._rangeStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(11, !0))
          }, this._volFootprintStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(17, !0))
          }, this._tpoStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(18, !0))
          }, this._svpStyle = {
            studyId: (0, o.ensureNotNull)((0, g.chartStyleStudyId)(20, !0))
          }, this._barColorerCache = null, this._quotesLastSplits = new pt.WatchedValue(null),
          this._overriddenLastSplits = new pt.WatchedValue(null), this._lastSplits = (0, ei.combine)(((e, t) => t ||
            e), this._quotesLastSplits.weakReference(), this._overriddenLastSplits.weakReference()), this
          ._boxSizeValue = new pt.WatchedValue, this._base = 100, this._pointValue = 1, this._formattingDeps = null,
          this._defaultFormatter = new v.PriceFormatter({
            priceScale: this._base
          }), this._formatter = new v.PriceFormatter({
            priceScale: this._base
          }), this._ignoreMinMoveFormatter = new v.PriceFormatter({
            priceScale: this._base
          }), this._ignoreMinMovePriceStep = null, this._lastBarCloseTime = null, this
          ._onSessionIdPropertyChangedBound = this._onSessionIdPropertyChanged.bind(this), this
          ._ignoreSessionIdProxyPropertyChanges = !1, this._textSourceIsAlwaysTickerRestrictionEnabled = !1, this
          ._lastPriceAnimationActive = !1, this._currentSession = "out_of_session", this._onStyleChanged = new tt
          .Delegate, this._obsoleteZOrder = 0, this._seriesErrorMessage = null, this
          ._seriesAlwaysFalseHibernatedVW = new pt.WatchedValue(!1), this._styleToRecover = null, this
          ._precomputedBarStyles = new WeakMap, this._doNotShowLastAvailableBar = !1, this
          ._gotoDateResultCleared = !1, this._endOfDataPaneView = null, this._pendingTimeRange = null, this
          ._replaySubscriber = new pt.WatchedValue(null), this._symbolIntervalChanged = new tt.Delegate, this
          ._isReplayResolutionAvailableForUser = null, this._onInReplayStateChanged = new tt.Delegate, this
          ._onReplaySubscriberSeriesModified = new tt.Delegate, this._paramsNotApplicableForReplay = new tt
          .Delegate, this._onTimeFrameApplied = new tt.Delegate, this._seriesLoaded = !1, this._seriesCompleted = !
          1, this._status = new pt.WatchedValue({
            seriesStatus: 0
          }), this._prevRequestedInterval = "", this._isActingAsSymbolSource = new pt.WatchedValue(!0), this
          ._unsupportedResolutionState = new pt.WatchedValue(null), this._countdownUpdateTimer = null, this
          ._deferredDestroyed = (0, l.createDeferredPromise)(), this._volumePointWeights = null, this
          ._studyBindings = null, this._lineColorAtYPercentFromTop = new Pe.GradientColorCache, this
          ._savedLeftEdge = null, this._pendingScrollToLeftEdge = null, this._symbolSourceWV = new pt.WatchedValue(
            this), this._updateTimeScaleTimePointWeights = () => {
            0
          };
        const n = t.childs().interval;
        this._intervalObj = new pt.WatchedValue(Q.Interval.parse(n.value())), t.childs().interval.subscribe(this, (
        () => this._intervalObj.setValue(Q.Interval.parse(n.value())))), this._seriesStatus = (0, ei.combine)(bi,
          this._status.weakReference()), this._seriesSource = new Pt(e.chartApi(), "s", s);
        const r = this._seriesSource.dataEvents();
        r.symbolResolved().subscribe(this, this._onSymbolResolved), r.symbolError().subscribe(this, this
            ._onSymbolError), r.seriesTimeFrame().subscribe(this, this._onSeriesTimeFrame), r.seriesError()
          .subscribe(this, this._onSeriesError), r.loading().subscribe(this, this._onSeriesLoading), r.completed()
          .subscribe(this, this._onSeriesCompleted), r.dataUpdated().subscribe(this, this._onDataUpdated), r
          .barReceived().subscribe(this, this._onBarReceived), r.unsupportedResolutionRequested().subscribe(this,
            this._onUnsupportedResolutionRequested), this._quotesProvider = new _e.QuotesProvider(void 0, e
            .collapsed().spawnOwnership()),
          this._quotesProvider.quotesUpdate().subscribe(this, this._onQuotesUpdate);
        const a = t.childs();
        if (t.hasChild("extendedHours")) {
          (0, o.ensureDefined)(a.extendedHours).value() && !t.hasChild("sessionId") && t.addChild("sessionId", new m
            .Property("extended")), t.removeProperty("extendedHours")
        }
        t.hasChild("sessionId") || t.addChild("sessionId", new m.Property(y.SubsessionId.Regular)), (0, Jt
          .allChartStyles)().includes(a.style.value()) || a.style.setValueSilently(2);
        const c = a.lineStyle.childs();
        if (a.lineStyle.hasChild("styleType")) {
          let e, t;
          const i = c.styleType.value();
          0 === i && (t = 14, e = a.lineWithMarkersStyle.childs()), 1 === i && (t = 15, e = a.steplineStyle
            .childs()), e && (e.color.setValueSilently(c.color.value()), e.linestyle.setValueSilently(c.linestyle
              .value()), e.linewidth.setValueSilently(c.linewidth.value()), e.priceSource.setValueSilently(c
              .priceSource.value())), void 0 !== t && 2 === a.style.value() && a.style.setValue(t), a.lineStyle
            .removeProperty("styleType")
        }
        this._studyBindings?.bindToSeriesProperties(t), this._setProperties(t), this._sessionIdProxyProperty = new m
          .Property(a.sessionId.value()), a.sessionId.subscribe(this, (() => this._updateSessionIdProxyProperty())),
          this._sessionIdProxyProperty.subscribe(this, this._onSessionIdProxyPropertyChanged), this
          ._symbolTextSourceProxyProperty = new m.Property, this._recalcSymbolTextSourceProxyProperty(), a
          .statusViewStyle.childs().symbolTextSource.subscribe(this, this._recalcSymbolTextSourceProxyProperty),
          this._symbolTextSourceProxyProperty.subscribe(this, (() => e.lightUpdate())), this._options = (0, de
            .merge)((0, de.clone)(yi), i), this._prevChartStyle = a.style.value(), this._priceAxisView = new Ce(
            this, e, {
              alwaysShowGlobalLast: !di,
              showCountdown: i.countdownEnabled
            });
        let h = null;
        li || di || (h = new Ce(this, e, {
            visibleOnHistoryOnly: !0,
            showSymbolLabel: !1,
            showCountdown: !1,
            alwaysShowGlobalLast: !1,
            useSolidBodyColor: !1
          })), this._priceLinePriceAxisView = new xe.SeriesPriceLineAxisView(this), this._priceLineAxisViews = [this
            ._priceLinePriceAxisView
          ], this._projectionPriceAxisView = new Me(this, e, {
            showCountdown: i.countdownEnabled
          }), this._priceAxisViews = [this._priceAxisView, this._projectionPriceAxisView], null !== h && this
          ._priceAxisViews.push(h), this._panePriceAxisView = new Ie.PanePriceAxisView(this._priceAxisView, this,
          e), this._historyPricePanePriceAxisView = null !== h ? new Ie.PanePriceAxisView(h, this, e) : null, this
          ._projectionPanePriceAxisView = new Ie.PanePriceAxisView(this._projectionPriceAxisView, this, e), this
          ._labelPaneViews = [this._panePriceAxisView, this._projectionPanePriceAxisView], null !== this
          ._historyPricePanePriceAxisView && this._labelPaneViews.push(this._historyPricePanePriceAxisView), this
          ._highLowAvgPaneViews = [], this._averagePaneViews = [], ui && this._createAverageViews(), this
          ._createHighLowAvgViews(), this._subscribeRestartToSessionIdChange(), a.visible.subscribe(this, this
            ._updateLastPriceAnimationActive), this._updateLastPriceAnimationActive(), a.minTick.subscribe(this,
            this._onFormatterPropsChanged), this._dataWindowView = new q(this, e), this._legendView = new Y(this,
          e), this._statusView = new N(this, a.statusViewStyle), this._floatingTooltipView = new ni(e),
          this._marketStatusModel = new X.MarketStatusModel(this._quotesProvider), this._dataUpdatedModeModel = ci ?
          new he(this._symbolInfo.spawn().ownership(), this._seriesStatus.spawn().ownership(), (0, $
              .createWVFromGetterAndSubscription)((() => this._lastCompleteFlags?.rt_update_period), r.completed())
            .ownership()) : null, this._dataProblemModel = new ue(this._quotesProvider, this._symbolInfo.spawn()
            .ownership()), this._symbolResolvingActive.subscribe((() => e.realignLineTools())), this
          ._intervalChanged.subscribe(this, (() => e.realignLineTools())), this._intervalChanged.subscribe(this, (
          () => this._checkChartStyle())), this._studyBindings?.syncStudy(this.style()), this.createPaneView(), this
          ._properties.addExcludedKey("visible", 1), this._properties.addExcludedKey("currencyId", 1), this
          ._futureBarsPaneView = null, this._priceLineView = null, this._baseHorizontalLineView = new Qt(this);
        for (const [, e] of Object.entries(S.STYLE_SHORT_NAMES)) this._properties.child(`${e}Style`)?.subscribe(
          this, (() => this.invalidateBarStylesCache()));
        const d = a.renkoStyle.childs().inputs.childs();
        d.boxSize.subscribe(this, (() => this._restartIfStyleMatches(4))), d.style.subscribe(this, (() => this
            ._restartIfStyleMatches(4))), d.atrLength.subscribe(this, (() => this._restartIfStyleMatches(4))), d
          .percentageLTP.subscribe(this, (() => this._restartIfStyleMatches(4))), d.wicks.subscribe(this, (() =>
            this._restartIfStyleMatches(4))), d.sources.subscribe(this, (() => this._restartIfStyleMatches(4))), a
          .pbStyle.childs().inputs.childs().lb.subscribe(this, (() => this._restartIfStyleMatches(7)));
        const u = a.kagiStyle.childs().inputs.childs();
        u.reversalAmount.subscribe(this, (() => this._restartIfStyleMatches(5))), u.style.subscribe(this, (() =>
            this._restartIfStyleMatches(5))), u.atrLength.subscribe(this, (() => this._restartIfStyleMatches(5))), u
          .percentageLTP.subscribe(this, (() => this._restartIfStyleMatches(5)));
        const _ = a.pnfStyle.childs().inputs.childs();
        _.boxSize.subscribe(this, (() => this._restartIfStyleMatches(6))), _.reversalAmount.subscribe(this, (() =>
            this._restartIfStyleMatches(6))), _.sources.subscribe(this, (() => this._restartIfStyleMatches(6))), _
          .style.subscribe(this, (() => this._restartIfStyleMatches(6))), _.atrLength.subscribe(this, (() => this
            ._restartIfStyleMatches(6))), _.percentageLTP.subscribe(this, (() => this._restartIfStyleMatches(6))), _
          .oneStepBackBuilding.subscribe(this, (() => this._restartIfStyleMatches(6))), a.rangeStyle.childs().inputs
          .childs().phantomBars.subscribe(this, (() => this._restartIfStyleMatches(11))), this._isDWMProperty =
          new m.Property(this.isDWM()), this._onRestarted.subscribe(this, (() => this._isDWMProperty.setValue(this
            .isDWM()))), a.showCountdown.subscribe(this, this._onShowCountdownChanged), this
          ._onShowCountdownChanged(a.showCountdown), this._recreatePriceFormattingDependencies(), a.lineStyle
          .childs().priceSource.subscribe(this, this._updateBarFunction), a.lineWithMarkersStyle.childs()
          .priceSource.subscribe(this, this._updateBarFunction), a.steplineStyle.childs().priceSource.subscribe(
            this, this._updateBarFunction), a.areaStyle.childs().priceSource.subscribe(this, this
            ._updateBarFunction),
          a.baselineStyle.childs().priceSource.subscribe(this, this._updateBarFunction), a.columnStyle.childs()
          .priceSource.subscribe(this, this._updateBarFunction), this._updateBarFunction(), this._isInReplay = (0,
            ei.combine)((e => null !== e), this._replaySubscriber.weakReference()), this._valuesProvider = new Ye
          .SeriesValuesProvider(this, this.model()), this._legendValuesProvider = new Je(this, this.model()), this
          ._tableViewValuesProvider = new ai.SeriesTableViewValuesProvider(this, this.model()), this
          ._dataWindowValuesProvider = new Ye.SeriesValuesProvider(this, this.model()), this._valuesProvider =
          new Ye.SeriesValuesProvider(this, this.model()), this._chartFloatingTooltipValuesProvider = new Qe(this,
            this.model())
      }
      setId(e) {
        super.setId(e), (0, Te.getPersistentLogger)()?.addPersistentLogEntry(`Set series Id to ${e}`, n.LOGLEVEL
          .INFO, "chart.series")
      }
      supportsConflatedChunks() {
        return !0
      }
      conflatedChunks(e, t) {
        return this.data().conflatedChunks(e, t)
      }
      seriesErrorMessage() {
        const {
          seriesStatus: e,
          additionalStudyStatus: t
        } = this._status.value();
        return this.isFailed() ? this._seriesErrorMessage : S.seriesLoadingStatuses.has(e) ? null : t?.type === ti
          .StudyStatusType.Error ? (0, ti.convertStudyStatusToString)({
            type: ti.StudyStatusType.Error,
            errorDescription: t.errorDescription
          }, !0) : null
      }
      destroy() {
        this._lastSplits.destroy(), this._seriesStatus.destroy(), this._quotesProvider.quotesUpdate()
          .unsubscribeAll(this), this._quotesProvider.destroy(), this.clearGotoDateResult(), this._legendView
          .destroy(), this._floatingTooltipView.destroy(), this._marketStatusModel.destroy(), this._model
          .symbolAliasService()?.onAliasChanged().unsubscribeAll(this), this._aliasSymbolInfo?.release(), this
          ._studyBindings?.destroy(), this._dataUpdatedModeModel?.destroy(), this._dataProblemModel.destroy(), this
          ._paneView && this._paneView.destroy && this._paneView.destroy(), this._seriesSource.destroy(), this
          ._quotesProvider.quotesUpdate().unsubscribeAll(this), this._model.timeScale()
          .visibleBarsStrictRangeChanged().unsubscribeAll(this), this._unsubscribeRestartToSessionIdChange(), this
          ._paramsNotApplicableForReplay.destroy(), this._onTimeFrameApplied.destroy(), this._deferredDestroyed
          .resolve(), this._properties.destroy(), this._isInReplay.destroy(), super.destroy()
      }
      isActingAsSymbolSource() {
        return this._isActingAsSymbolSource.readonly()
      }
      barColorer() {
        if (this._barColorerCache) return this._barColorerCache;
        let e = null;
        const t = this._model.panes();
        for (let i = t.length - 1; i >= 0; i--) {
          const s = t[i].dataSources().filter(Kt.isStudy).filter((e => e.hasBarColorer() && !e.isSourceHidden()))
            .sort(((e, t) => e.zorder() - t.zorder()));
          for (let t = 0; t < s.length; t++) {
            const i = (0, o.ensureNotNull)(s[t].barColorer());
            null === e ? e = i : e.pushBackBarColorer(i)
          }
        }
        return null === e ? e = new $t.SeriesBarColorer(this) : e.pushBackBarColorer(new $t.SeriesBarColorer(this)),
          this._barColorerCache = e, e
      }
      createPaneView() {
        this._paneView = null, this._projectionBarsPaneView = null, this._waterlineView = null, this
          ._priceLineView = this.hasClosePrice() ? new Lt(this) : null;
        const e = this._properties.childs().style.value();
        switch (e) {
          case 0:
            this._paneView = new Bt.SeriesBarsPaneView(this, this._model);
            break;
          case 17:
          case 19:
          case 1:
            this._paneView = new Vt.SeriesCandlesPaneView(this, this._model, 1 === e || 19 === e ? 1 : .2);
            break;
          case 2:
          case 18:
          case 14:
          case 15:
            this._paneView = new Rt.SeriesLinePaneView(this, this._model);
            break;
          case 3:
            this._paneView = new Nt.SeriesAreaPaneView(this, this._model);
            break;
          case 16:
            this._paneView = new Ot.SeriesHLCAreaPaneView(this, this._model);
            break;
          case 8:
            this._paneView = new Ut(this, this._model);
            break;
          case 9:
            this._paneView = new jt.SeriesHollowCandlesPaneView(this, this._model);
            break;
          case 13:
            this._paneView = new Dt.SeriesColumnsPaneView(this, this._model);
            break;
          case 10: {
            this._paneView = new Gt.SeriesBaselinePaneView(this, this._model);
            const e = this._properties.childs().baselineStyle.childs();
            this._waterlineView = new kt.SeriesWaterlinePaneView({
              paneHeight: () => this.priceScale().height(),
              color: () => e.baselineColor.value(),
              baseLevelPercentage: () => e.baseLevelPercentage.value()
            });
            break
          }
          case 12:
            this._paneView = new Et.SeriesHiLoPaneView(this, this._model);
            break;
          case 21:
            this._paneView = new ri.SeriesHLCBarsPaneView(this, this._model)
        }
        if (null === this._paneView) throw Error("Unknown chart style assigned: " + e)
      }
      properties() {
        return this._properties
      }
      zorder() {
        return 0
      }
      quotesProvider() {
        return this._quotesProvider
      }
      currentSession() {
        return this._currentSession
      }
      syncModel() {
        if (!this._syncModel) {
          const e = this.symbolInfo(),
            t = this.interval();
          if (!e || !t) return null;
          this._syncModel = new ne(e, t)
        }
        return this._syncModel
      }
      labelPaneViews() {
        return this._labelPaneViews
      }
      topPaneViews() {
        const e = [];
        if (null !== this._gotoDateView && e.push(this._gotoDateView), this._lastPriceAnimationActive) {
          const t = this._lineStyleLastPriceCirclePaneView;
          t.animationActive() && setTimeout((() => this._model.invalidate(_t.InvalidationMask.cursor())), 0), t
            .invalidateStage(), e.push(t)
        }
        return 0 !== e.length ? e : null
      }
      paneViews(e) {
        if (!this.properties().childs().visible.value() || !this._model.isSnapshot() && !this._wasCompletedBefore())
          return null;
        const t = e === this._model.paneForSource(this),
          i = t ? [(0, o.ensureNotNull)(this._baseHorizontalLineView), (0, o.ensureNotNull)(this._paneView)] : [];
        return i.push(...this._studyBindings?.paneViews(e) ?? []), t && (this._endOfDataPaneView && i.push(this
            ._endOfDataPaneView), this._futureBarsPaneView && i.push(this._futureBarsPaneView), this
          ._projectionBarsPaneView && i.push(this._projectionBarsPaneView), null !== this._waterlineView && i
          .push(this._waterlineView), null !== this._priceLineView && i.push(this._priceLineView), window
          .TradingView.printing && this._lastPriceAnimationActive && (this._lineStyleLastPriceCirclePaneView
            .stopAnimation(), i.push(this._lineStyleLastPriceCirclePaneView)), i.push(...this
            ._highLowAvgPaneViews), i.push(...this._averagePaneViews)), i
      }
      widgetSideAreaViews(e) {
        return this._studyBindings?.widgetSideAreaViews(e) ?? null
      }
      priceAxisViews(e, t) {
        return e.findTargetPriceAxisViews(this, t, this._priceAxisViews, this._priceLineAxisViews)
      }
      clearHighLowPriceCache() {
        this._highLowPriceCache.clear()
      }
      clearAveragePriceCache() {
        this._averagePriceCache.clear()
      }
      priceScale() {
        return (0, o.ensureNotNull)(this._priceScale)
      }
      setPriceScale(e) {
        this._priceScale !== e && (this._priceScaleAboutToBeChanged.fire(), this._priceScale = e,
          this._properties.removeProperty("priceAxisProperties"), this._properties.addChild("priceAxisProperties",
            e.properties()), this._properties.childs().priceAxisProperties.fireChanged(), (0, a.emit)(
            "series_event", "price_scale_changed"), this._priceScaleChanged.fire(e))
      }
      priceScaleChanged() {
        return this._priceScaleChanged
      }
      priceScaleAboutToBeChanged() {
        return this._priceScaleAboutToBeChanged
      }
      applyPreferences(e) {
        const t = (0, de.clone)(e);
        this.priceScale().setMode({
          autoScale: t.priceAxisProperties.autoScale,
          percentage: t.priceAxisProperties.percentage,
          log: t.priceAxisProperties.log,
          lockScale: t.priceAxisProperties.lockScale
        }), this.setChartStyleWithIntervalIfNeeded(t.style);
        const {
          style: i,
          interval: s,
          ...o
        } = t;
        this._properties.mergePreferences(o), this._properties.saveDefaults(), this.createPaneView(), this
          .invalidateBarStylesCache()
      }
      disconnect() {
        this._studyBindings?.stop(), this._seriesSource.stop(), this._predictBars = 0, this._updateStatus({
          ...this._status.value(),
          seriesStatus: 0
        }), this._model.isSnapshot() || this.purgeSymbolInfo()
      }
      isStarted() {
        return this._seriesSource.isStarted()
      }
      isCompleted() {
        return this._seriesCompleted
      }
      restart(e) {
        if (5 === this._status.value().seriesStatus) return;
        let t = null;
        this._pendingTimeRange && (t = this._pendingTimeRange, this._seriesSource.isStarted() || (this._seriesSource
          .setTimeframe(t), this._pendingTimeRange = null));
        const i = this._properties.childs().interval.value(),
          s = (0, Mt.getServerInterval)(i),
          o = this._getResolvingSymbolObject();
        this._seriesSource.canModifySeries(o, s) ? (this._seriesLoaded = !1, this._seriesCompleted = !1, this
          ._lastCompleteFlags = null, this._onRestarted.fire(), this._setStatus(1), this._updateSymbolInfo(null),
          Q.Interval.isEqual(i, this._prevRequestedInterval) || this._notifyIntervalChanged(i), this
          ._onBeforeModifySeries(this.getSymbolString(), i), this._onTimeFrameApplied.fire(t), this._data = null,
          this.model().recalcVisibleRangeStudies(h.RecalcVisibleRangeStudiesReason.SeriesRestart), this
          ._seriesSource.modifySeries(o, s, t), this._seriesSource.isStarted() || this._seriesSource.start(), this
          ._prevRequestedInterval = this.interval(), this._pendingTimeRange = null, this.updateAllViews((0, ve
            .sourceChangeEvent)(this.id())), this._model.lightUpdate()) : this._seriesSource.isStarted() || (this
          ._updateSymbolInfo(null), this._seriesSource.start())
      }
      isSymbolInvalid() {
        return 4 === this._status.value().seriesStatus
      }
      getSymbolString() {
        return (0, st.encodeExtendedSymbolOrGetSimpleSymbolString)(this._getSymbolObject())
      }
      getAlertSymbolString() {
        return (0, st.encodeExtendedSymbolOrGetSimpleSymbolString)(this._getSymbolObject(this.actualSymbol()))
      }
      getAlertProSymbolString() {
        return (0, st.encodeExtendedSymbolOrGetSimpleSymbolString)(this._getSymbolObject(this.proSymbol()))
      }
      getQuotesSymbolString() {
        return (0, st.encodeExtendedSymbolOrGetSimpleSymbolString)(this._getExtendedSymbolObject())
      }
      invalidateBarStylesCache(e) {
        gi.logDebug("Invalidate style cache starting from " + e), this._clearStylePlot(this.bars(), e), this
          ._clearStylePlot(this.nsBars())
      }
      isLoading() {
        return S.seriesLoadingStatuses.has(this.statusWV().value())
      }
      isFailed() {
        const e = this.status();
        return 12 === e || 4 === e || 10 === e || 14 === e
      }
      isStatusError() {
        return 12 === this.status()
      }
      unsupportedResolutionState() {
        return this._unsupportedResolutionState.readonly()
      }
      actualSymbol() {
        return (0, g.actualSymbol)(this.symbolInfo(), this.symbol())
      }
      proSymbol() {
        return (0, g.proSymbol)(this.symbolInfo(), this.symbol())
      }
      onStyleChanged() {
        return this._onStyleChanged
      }
      style() {
        return this.properties().childs().style.value()
      }
      setStyle(e) {
        this.setSymbolParams({
          style: e
        })
      }
      isRangeBasedStyle() {
        return (0, g.isRangeBasedStyle)(this.style())
      }
      symbolSameAsCurrent(e) {
        return this.symbol() === e || (0, it.symbolSameAsCurrent)(e, this.symbolInfo())
      }
      symbolSameAsResolved(e) {
        return this._model.isSnapshot() ? this.symbolSameAsCurrent(e) : this._seriesSource.symbolSameAsResolved(e)
      }
      status() {
        return this._seriesStatus.value()
      }
      statusWV() {
        return this._seriesStatus
      }
      compositeStatusVW() {
        return this._status
      }
      symbol() {
        return this.properties().childs().symbol.value()
      }
      symbolOrAlias() {
        const e = this.symbol(),
          t = this._model.symbolAliasService()?.getAliasByProName(e);
        return t?.aliasName ?? e
      }
      symbolChanged() {
        return this.properties().childs().symbol
      }
      seriesSource() {
        return this._seriesSource
      }
      symbolInfo() {
        return this._symbolInfo.value()
      }
      aliasSymbolInfo() {
        return (this._aliasSymbolInfo ?? this._symbolInfo).value()
      }
      symbolInfoWV() {
        return this._symbolInfo.readonly()
      }
      lastSplits() {
        return this._lastSplits
      }
      overrideLastSplits(e) {
        this._overriddenLastSplits.setValue(e)
      }
      symbolResolved() {
        return this.dataEvents().symbolResolved()
      }
      symbolResolvingActive() {
        return this._symbolResolvingActive
      }
      symbolHibernated() {
        return this._seriesAlwaysFalseHibernatedVW
      }
      getSymbolName() {
        return this.symbolInfo()?.name ?? ""
      }
      firstValue() {
        const e = this.firstBar();
        return null === e ? null : this._barFunction(e, 0)
      }
      firstBar() {
        const e = this.model().timeScale().visibleBarsStrictRange();
        if (null === e) return null;
        const t = e.firstBar(),
          i = this.data().search(t, _.PlotRowSearchMode.NearestRight);
        return null !== i ? i.value : null
      }
      formatter(e = !0) {
        return e ? this._formatter : this._ignoreMinMoveFormatter
      }
      defaultFormatter() {
        return this._defaultFormatter
      }
      priceStep(e = !0) {
        return e ? this._priceStep : this._ignoreMinMovePriceStep
      }
      bars() {
        return this.data().bars()
      }
      nsBars() {
        return this.data().nsBars()
      }
      interval() {
        return this.properties().childs().interval.value()
      }
      setInterval(e) {
        this.setSymbolParams({
          interval: e
        })
      }
      intervalObj() {
        return this._intervalObj.readonly()
      }
      prevClose() {
        const e = this.priceScale();
        if (e.isEmpty() || this.data().isEmpty()) return null;
        const t = this.quotes(),
          i = this.firstValue();
        if (null === t || null === i) return null;
        const s = t.prev_close_price;
        return void 0 === s ? null : {
          coordinate: e.priceToCoordinate(s, i),
          floatCoordinate: e.priceToCoordinate(s, i),
          formattedPricePercentage: e.formatPricePercentage(s, i, {
            signPositive: !0
          }),
          formattedPriceAbsolute: e.formatPriceAbsolute(s),
          formattedPriceIndexedTo100: e.formatPriceIndexedTo100(s, i)
        }
      }
      priceLineColor(e) {
        return this.properties().childs().priceLineColor.value() || e
      }
      hasClosePrice() {
        return mi || 12 !== this.properties().childs().style.value()
      }
      lastValueData(e, t, i) {
        const s = {
            noData: !0
          },
          o = this.priceScale();
        if (this.model().timeScale().isEmpty() || o.isEmpty() || this.data().isEmpty()) return s;
        const n = this.model().timeScale().visibleBarsStrictRange(),
          r = this.firstValue();
        if (null === n || null === r) return s;
        let a, l;
        if (t) {
          const e = this.data().bars().last();
          if (null === e) return s;
          a = e.value, l = e.index
        } else {
          const e = this.data().bars().search(n.lastBar(), _.PlotRowSearchMode.NearestLeft);
          if (null === e) return s;
          a = e.value, l = e.index
        }
        const c = (void 0 !== e ? a[e] : this._barFunction(a, 2)) ?? NaN,
          h = this.barColorer().barStyle(l, !1),
          d = o.priceToCoordinate(c, r),
          u = {
            ...o.getFormattedValues(c, r, !0),
            noData: !1,
            color: h.barColor,
            floatCoordinate: d,
            coordinate: d,
            index: l
          };
        return i && (u.price = c), u
      }
      isDWM() {
        return this.intervalObj().value().isDWM()
      }
      isPulse() {
        const e = this.symbolInfo();
        return null !== e && (e.resolutions ?? []).length > 0
      }
      data() {
        return this._data ?? this._seriesSource.data()
      }
      clearData() {
        (0, o.assert)(null === this._data, "Cannot clear loaded data"), this._studyBindings?.clearData(), this
          ._seriesSource.clearData(), this._dataRangeUpdated.fire({
            type: "full"
          })
      }
      nearestData(e, t) {
        return this.data().search(e, t) ?? void 0
      }
      nearestIndex(e, t) {
        return this.nearestData(e, t)?.index
      }
      nearestValue(e, t, i) {
        const s = this.nearestData(e, i);
        return s?.value[t] ?? void 0
      }
      onSymbolIntervalChanged() {
        return this._symbolIntervalChanged
      }
      onIntervalChanged() {
        return this._intervalChanged
      }
      onStatusChanged() {
        return this._onStatusChanged
      }
      onRestarted() {
        return this._onRestarted
      }
      fixLastBar(e) {
        0
      }
      requestMoreData(e) {
        if (!S.seriesReadyStatuses.has(this._status.value().seriesStatus)) return;
        if (this._model.timeScale().isEmpty()) return;
        const t = this._model.timeScale().visibleBarsStrictRange();
        if (null === t) return;
        if (0 === this.bars().size()) return;
        const i = t.lastBar() - (0, o.ensureNotNull)(this.data().last()).index;
        if (this._predictBars < i && (this._predictBars = i, this._seriesSource.requestMoreTickmarks(i)), !this
          ._requestMoreDataAvailable) return;
        const s = (0, o.ensureNotNull)(this.bars().firstIndex()),
          n = e || Math.max(s - t.firstBar(), s - (this._studyBindings?.requestMoreDataIndex() ?? s));
        if (n <= 0) return;
        if (!Number.isFinite(n)) return void gi.logWarn("requestMoreData: invalid bar count: " + n +
          ", visible bars: [" + t.firstBar() + ", " + t.lastBar() + "], last index: " + (0, o.ensureNotNull)(
            this.data().last()).index + ", predicted bars: " + this._predictBars + ", required bars:" + e);
        this._requestMoreDataAvailable = !1;
        const r = this._colorOnPrevBar() ? 2 : 0;
        this._seriesSource.requestMoreData(n + r), this._setStatus(2)
      }
      isNeedRestart(e) {
        return 5 !== this._status.value().seriesStatus && (void 0 === e && (e = this.properties().childs().style
          .value()), (0, g.styleChangeRequiresRestart)(this._prevChartStyle, e))
      }
      isStyleSupported(e) {
        return !0
      }
      sessionId() {
        return this.properties().childs().sessionId.value()
      }
      sessionIdChanged() {
        return this._sessionIdChanged
      }
      priceRange(e, t, i) {
        const s = this._priceScale;
        if (this.data().isEmpty() || !s) return null;
        if (s.isLockScale()) {
          const e = this._model.mainSeriesScaleRatio();
          if (null !== e) {
            const i = s.internalHeight() / (this.model().timeScale().barSpacing() / e),
              n = (0, o.ensureNotNull)(this.data().search(t, _.PlotRowSearchMode.NearestLeft)).value,
              r = ((0, o.ensure)(n[2]) + (0, o.ensure)(n[3])) / 2;
            return new p.PriceRange(r - .5 * i, r + .5 * i)
          }
        }
        const n = this.priceSource();
        let r, a, l;
        if (null !== n ? (r = this.data().bars().minMaxOnRangeCached(e, t, [{
            name: n,
            offset: 0
          }]), a = this.data().nsBars().minMaxOnRangeCached(e, t, [{
            name: n,
            offset: 0
          }])) : (r = this.data().bars().minMaxOnRangeCached(e, t, [{
            name: "low",
            offset: 0
          }, {
            name: "high",
            offset: 0
          }]), a = this.data().nsBars().minMaxOnRange(e, t, [{
            name: "low",
            offset: 0
          }, {
            name: "high",
            offset: 0
          }])), r = (0, u.mergeMinMax)(r, a), null === r) l = new p.PriceRange(-.5, .5);
        else if (r.min === r.max) {
          const e = 5 / (this.symbolInfo()?.pricescale ?? 100);
          l = new p.PriceRange(r.min - e, r.max + e)
        } else l = new p.PriceRange(r.min, r.max);
        return s.isLog() ? new p.PriceRange(s.priceToLogical(l.minValue()), s.priceToLogical(l.maxValue())) : l
      }
      autoScaleInfo(e, t, i) {
        let s = {
          range: this.priceRange(e, t, {
            ...i,
            scaleSeriesOnly: !0
          }),
          topPixelMargin: this._paneView?.topPixelMargin?.(),
          bottomPixelMargin: this._paneView?.bottomPixelMargin?.()
        };
        if (!i.scaleSeriesOnly) {
          const o = this._model.allStudies().filter((e => e.isVisible())),
            n = (e, t) => void 0 === e ? t : void 0 === t ? e : Math.max(e, t),
            r = o.map((s => s.autoScaleInfo(e, t, {
              ...i,
              forceOverlayOnly: !0
            })));
          this._studyBindings && r.push(...this._studyBindings.autoScaleInfos(e, t, i));
          const a = (e, t) => ({
            range: e.range ? t.range ? e.range.merge(t.range) : e.range : t.range,
            topPixelMargin: n(e.topPixelMargin, t.topPixelMargin),
            bottomPixelMargin: n(e.bottomPixelMargin, t.bottomPixelMargin)
          });
          s = r.reduce(a, s)
        }
        return s
      }
      onChartStyleChanged() {
        if (this._updateBarFunction(), this.isNeedRestart()) {
          this.data().clear();
          const e = (0, g.isStyleSupportedForReplay)(this.style());
          0, this._saveLeftEdgeIfRequired(!1) || this.model().timeScale().scrollToRealtime(!1), this.restart(e)
        }
        const e = this.properties();
        this._prevChartStyle !== e.childs().style.value() && this._studyBindings?.syncStudy(this.style()), this
          ._prevChartStyle = e.childs().style.value(), this._onStyleChanged.fire(e.childs().style.value()), this
          .invalidateBarStylesCache(), this._updateLastPriceAnimationActive(), this._styleToRecover
          ?.originalStyle !== this.style() && (this._styleToRecover = null), this._updateTimeScaleTimePointWeights()
      }
      setChartStyleWithIntervalIfNeeded(e, t) {
        const i = this.interval(),
          s = t ?? (0, xt.getResolutionByChartStyle)(e, i, this._model.defaultResolutions()),
          o = Q.Interval.isEqual(s, i);
        this.setSymbolParams({
          interval: o ? void 0 : s,
          style: e
        })
      }
      getInputsProperties() {
        const e = this._properties.child(`${this.getStyleShortName()}Style`);
        return e?.childs().inputs ?? new m.Property
      }
      getInputsInfoProperties() {
        const e = this._studyBindings?.getInputsInfoProperties();
        if (e) return e;
        const t = this._properties.child(`${this.getStyleShortName()}Style`);
        return t?.childs().inputInfo ?? new m.Property
      }
      getSourceIcon() {
        return {
          type: "loadSvg",
          svgId: `series.${this.style()}`
        }
      }
      onSourceIconChanged() {
        return this._onStyleChanged
      }
      purgeSymbolInfo() {
        this._symbolInfo.setValue(null), this._quotesLastSplits.setValue(null)
      }
      idForAlert() {
        return super.idForAlert()
      }
      hasStateForAlert() {
        return !1
      }
      stateForAlert() {
        throw new Error("Not implemented")
      }
      async stateForAlertAsync() {
        return this.stateForAlert()
      }
      styleStudyInfos() {
        return {
          haStyle: this._haStyle,
          renkoStyle: this._renkoStyle,
          pbStyle: this._pbStyle,
          kagiStyle: this._kagiStyle,
          pnfStyle: this._pnfStyle,
          rangeStyle: this._rangeStyle,
          volFootprintStyle: this._volFootprintStyle,
          tpoStyle: this._tpoStyle,
          svpStyle: this._svpStyle
        }
      }
      dataEvents() {
        return this._seriesSource.dataEvents()
      }
      isSpread() {
        return "spread" === this.symbolInfo()?.type
      }
      isYield() {
        const e = this.symbolInfo();
        return null !== e && (0, Zt.isYield)(e)
      }
      dividendsAdjustmentProperty() {
        return null
      }
      sessionIdProxyProperty() {
        return this._sessionIdProxyProperty
      }
      symbolTextSourceProxyProperty() {
        return this._symbolTextSourceProxyProperty
      }
      setTextSourceIsAlwaysTickerRestrictionEnabled(e) {
        this._textSourceIsAlwaysTickerRestrictionEnabled = e, this._recalcSymbolTextSourceProxyProperty()
      }
      isDWMProperty() {
        return this._isDWMProperty
      }
      isPrePostMarketPricesAvailableProperty() {
        return this._isPrePostMarketPricesAvailableProperty
      }
      isSettlementAsCloseForbiddenProperty() {
        return this._isSettlementAsCloseForbiddenProperty
      }
      isBackAdjustmentForbiddenProperty() {
        return this._isBackAdjustmentForbiddenProperty
      }
      getStyleShortName() {
        const e = this.style(),
          t = S.STYLE_SHORT_NAMES[e];
        return (0, o.assert)(!!t, `Missed short name for style ${e}`), t
      }
      invalidateBarColorerCache() {
        this._barColorerCache = null, this.invalidateBarStylesCache()
      }
      paramsNotApplicableForReplay() {
        throw new Error("Not implemented")
      }
      onTimeFrameApplied() {
        return this._onTimeFrameApplied
      }
      onInReplayStateChanged() {
        throw new Error("Not implemented")
      }
      onReplayModified() {
        throw new Error("Not implemented")
      }
      dataWindowView() {
        return this._dataWindowView
      }
      chartFloatingTooltipView() {
        return this._floatingTooltipView
      }
      statusView() {
        return hi ? this._statusView : null
      }
      legendView() {
        return this._legendView
      }
      marketStatusModel() {
        return this._marketStatusModel
      }
      isMainSeries() {
        return !0
      }
      dataUpdatedModeModel() {
        return this._dataUpdatedModeModel
      }
      dataProblemModel() {
        return this._dataProblemModel
      }
      setDefaultTimeframe(e) {
        this._pendingTimeRange = e
      }
      loadDataTo(e) {
        const t = this._properties.childs().interval.value();
        this._onTimeFrameApplied.fire(e), this._seriesSource.modifySeries(this._getResolvingSymbolObject(), (0, Mt
          .getServerInterval)(t), e)
      }
      isInReplay() {
        return this._isInReplay
      }
      quotes() {
        return this.data().isEmpty() ? null : this._quotesProvider.quotes()
      }
      base() {
        return this._base
      }
      pointValue() {
        return this._pointValue
      }
      barCloseTime() {
        return this._lastBarCloseTime
      }
      priceSource() {
        let e = null;
        const t = this._properties.childs();
        switch (t.style.value()) {
          case 2:
            e = t.lineStyle.childs().priceSource.value();
            break;
          case 18:
            e = t.tpoStyle.childs().priceSource.value();
            break;
          case 14:
            e = t.lineWithMarkersStyle.childs().priceSource.value();
            break;
          case 15:
            e = t.steplineStyle.childs().priceSource.value();
            break;
          case 3:
            e = t.areaStyle.childs().priceSource.value();
            break;
          case 10:
            e = t.baselineStyle.childs().priceSource.value();
            break;
          case 13:
            e = t.columnStyle.childs().priceSource.value()
        }
        return e
      }
      lineColorAtYPercentFromTop(e) {
        let t;
        switch (this.style()) {
          case 2:
            t = this.properties().childs().lineStyle.childs();
            break;
          case 14:
            t = this.properties().childs().lineWithMarkersStyle.childs();
            break;
          case 15:
            t = this.properties().childs().steplineStyle.childs();
            break;
          default:
            t = null
        }
        return t ? t.colorType?.value() === ii.ColorType.Solid ? t.color.value() : this._lineColorAtYPercentFromTop
          .gradientColor((0, o.ensureDefined)(t.gradientStartColor).value(), (0, o.ensureDefined)(t
            .gradientEndColor).value(), e) : null
      }
      updateAllViews(e) {
        this._studyBindings?.updateAllViews(e), "hover-change" !== e.type && (this._paneView?.update(e), this
          ._dataWindowView.update(), this._legendView.update(), this._statusView.update(), this
          ._floatingTooltipView.update(e), this._averagePaneViews.forEach((t => t.update(e))), this
          ._highLowAvgPaneViews.forEach((t => t.update(e))), this._labelPaneViews.forEach((t => t.update(e))),
          this._priceAxisViews.forEach((t => t.update(e))), this._priceLineAxisViews.forEach((t => t.update(e))),
          this._futureBarsPaneView?.update(e), this._projectionBarsPaneView?.update(e), this._waterlineView
          ?.update(e), this._priceLineView?.update(e), this._gotoDateView?.update(e), this._endOfDataPaneView
          ?.update(e), this._baseHorizontalLineView?.update(e), this._model.activeStrategySource().value()
          ?.updateAllViews(e), this._model.replayStudyStrategy().value()?.updateAllViews(e), this
          ._lineStyleLastPriceCirclePaneView.update(e))
      }
      styleStudyInfo(e) {
        return this.styleStudyInfos()[e]
      }
      barFunction() {
        return this._barFunction
      }
      precomputedBarStyle(e) {
        return this._precomputedBarStyles.get(e)
      }
      setPrecomputedBarStyle(e, t) {
        this._precomputedBarStyles.set(e, t)
      }
      symbolParams() {
        return (0, it.symbolParams)(this)
      }
      compareSymbolParams(e) {
        return (0, it.compareSymbolParams)(this, e, this._model.unitConversionEnabled())
      }
      setSymbolParams(e) {
        const {
          symbol: t,
          currency: i,
          unit: s,
          style: n,
          interval: r
        } = e, {
          symbolChanged: a,
          intervalChanged: l,
          currencyChanged: c,
          unitChanged: h,
          styleChanged: d
        } = this.compareSymbolParams(e), u = [vi("symbol", t, a), vi("interval", r, l), vi("currency", i, c), vi(
          "unit", s, h), vi("style", n, d)].filter((e => null !== e)).join("; ");
        gi.logInfo(`Applying series symbol params: ${u}`);
        const _ = this.properties().childs();
        void 0 !== t && _.symbol.setValue(t), void 0 !== i && _.currencyId.setValue(i), void 0 !== s && _.unitId
          .setValue(s), l && _.interval.setValue((0, o.ensureDefined)(r)), void 0 !== n && d && _.style.setValue(n);
        let p = !1;
        d && (p = this.isNeedRestart(), this.onChartStyleChanged());
        let m = Promise.resolve();
        return !p && (a || l || c || h) && (m = this._applySymbolParamsChanges({
          symbolChanged: a,
          currencyChanged: c,
          unitChanged: h,
          intervalChanged: l,
          styleChanged: d
        })), (a || c || h) && this.model().checkLineToolSelection(), m
      }
      setSymbol(e) {
        this.setSymbolParams({
          symbol: e
        })
      }
      currency() {
        return this.properties().childs().currencyId.value() || null
      }
      setCurrency(e) {
        this.setSymbolParams({
          currency: e
        })
      }
      isConvertedToOtherCurrency() {
        return (0, g.isConvertedToOtherCurrency)(this.symbolInfo())
      }
      unit() {
        return this.properties().childs().unitId.value() || null
      }
      setUnit(e) {
        this.setSymbolParams({
          unit: e
        })
      }
      measureUnitId() {
        return (0, g.measureUnitId)(this.symbolInfo())
      }
      isConvertedToOtherUnit() {
        return (0, g.isConvertedToOtherUnit)(this.symbolInfo(), this._model.unitConversionEnabled())
      }
      valueAt(e, t) {
        return this.data().search(e)?.value[t] ?? null
      }
      symbolSource() {
        return this
      }
      symbolSourceWV() {
        return this._symbolSourceWV.readonly()
      }
      barsProvider() {
        return this
      }
      title(e) {
        return this.symbolTitle(e)
      }
      name() {
        return this.symbolTitle(Xt.TitleDisplayTarget.StatusLine)
      }
      symbolTitle(e, t, i) {
        let s = this.properties().childs().symbol.value();
        const o = this.aliasSymbolInfo();
        if (null !== o && (s = (0, g.symbolTitle)(o, t)), i) return s;
        let n = (0, x.translatedIntervalString)(this.properties().childs().interval.value());
        return e === Xt.TitleDisplayTarget.DataWindow && (n = (0, U.forceRTLStr)(n)), `${s}, ${n}`
      }
      setObsoleteZOrder(e) {
        this._obsoleteZOrder = e
      }
      obsoleteZOrder() {
        return this._obsoleteZOrder
      }
      valuesProvider() {
        return this._valuesProvider
      }
      legendValuesProvider() {
        return this._legendValuesProvider
      }
      tableViewValuesProvider() {
        return this._tableViewValuesProvider
      }
      dataWindowValuesProvider() {
        return this._dataWindowValuesProvider
      }
      chartFloatingTooltipValuesProvider() {
        return this._chartFloatingTooltipValuesProvider
      }
      statusProvider(e) {
        return new B(this, this.properties().childs().statusViewStyle, e)
      }
      moveItem(e, t, i) {
        if (10 === this.style() && 0 === t) {
          const t = this.priceScale(),
            i = this.properties().childs().baselineStyle,
            s = t.height(),
            o = 100 - e.y / s * 100,
            n = o < 0 ? 0 : Math.round(10 * o) / 10;
          i.childs().baseLevelPercentage.setValue(Math.max(Math.min(n, 100), 0))
        }
      }
      rerequestData() {
        this._applySymbolParamsChanges({
          force: !0
        })
      }
      switchToReplay(e, t) {
        throw new Error("Not implemented")
      }
      switchToRealtime() {
        throw new Error("Not implemented")
      }
      async canChangeResolution(e) {
        return !0
      }
      async canChangeSymbol(e) {
        return {
          result: !0
        }
      }
      requestMoreDataAvailable() {
        return this._requestMoreDataAvailable
      }
      seriesLoaded() {
        return this._seriesLoaded
      }
      endOfData() {
        return void 0 !== this._lastCompleteFlags?.data_completed
      }
      endOfDataType() {
        return this._lastCompleteFlags?.data_completed ?? null
      }
      dataPoweredBy() {
        return null
      }
      boxSizeValue() {
        return this._boxSizeValue
      }
      isUserDeletable() {
        return !1
      }
      changeTimeFrame() {
        (0, r.trackEvent)("GUI", "Change timeframe")
      }
      onTagsChanged() {
        return this._tagsChanged
      }
      state(e) {
        const t = this.obsoleteZOrder();
        let i = {
          type: "MainSeries",
          id: this.id(),
          zorder: t,
          haStyle: this._haStyle,
          renkoStyle: this._renkoStyle,
          pbStyle: this._pbStyle,
          kagiStyle: this._kagiStyle,
          pnfStyle: this._pnfStyle,
          rangeStyle: this._rangeStyle,
          volFootprintStyle: this._volFootprintStyle,
          tpoStyle: this._tpoStyle,
          svpStyle: this._svpStyle,
          formattingDeps: this._formattingDeps,
          studyBindings: this._studyBindings?.state(!!e)
        };
        const s = this.properties().state(void 0, 2);
        if (s.symbol = (0, g.symbolToSaveInState)(this.symbolInfo() ?? this._model.chartApi().lastSymbolResolveInfo(
            s.symbol), s.symbol), this._model.unitConversionEnabled() || (s.unitId = null), i.state = s, e) {
          let e = this.bars();
          const t = this._model.timeScale().visibleExtendedDataRange(e, 0);
          null !== t && (e = e.range(t.firstBar(), t.lastBar())), i = {
            ...i,
            bars: Si(e),
            nsBars: Si(this.nsBars()),
            symbolInfo: this.symbolInfo(),
            rtPrice: this.data().lastProjectionPrice,
            boxSize: this.data().boxSize,
            reversalAmount: this.data().reversalAmount
          }
        }
        return i
      }
      restoreState(e, t) {
        t && this._setStatus(5), !this._model.unitConversionEnabled() && e.state && delete e.state.unitId, e
          .state && Q.Interval.isRange(e.state.interval) && (e.state.style = 11);
        const i = e.state;
        if (void 0 !== i) {
          const e = i.style,
            t = void 0;
          t && !this._model.isSnapshot() && (i.style = 2, runOrGoProWithoutSync((() => {
            i.style = e
          }), t.feature, {
            feature: t.featureName
          }))
        }
        if (this._properties.mergeAndFire(e.state), this._prevChartStyle = this.properties().childs().style.value(),
          this.createPaneView(), t) {
          const t = e;
          this.restoreData(t.bars, t.nsBars, t.symbolInfo, t.rtPrice, t.boxSize, t.reversalAmount)
        }
        e.formattingDeps && (this._formattingDeps = e.formattingDeps, this._recreatePriceFormattingDependencies()),
          this._studyBindings?.restoreState(e.studyBindings ?? {}, t), this._studyBindings?.syncStudy(this.style())
      }
      restoreData(e, t, i, s, o, n) {
        this._updateStatus({
            seriesStatus: 5
          }), this._data = new d.SeriesData, this._data.bars().restoreState(e), this._data.nsBars().restoreState(t),
          this._updateSymbolInfo(i), this._data.lastProjectionPrice = s, this._data.boxSize = o;
        const r = this.properties().childs();
        o || (6 === r.style.value() ? this._data.boxSize = r.pnfStyle.childs().inputs.childs().boxSize.value() :
            4 === r.style.value() && (this._data.boxSize = r.renkoStyle.childs().inputs.childs().boxSize.value())),
          this._data.reversalAmount = n, n || 5 === r.style.value() && (this._data.reversalAmount = r.kagiStyle
            .childs().inputs.childs().reversalAmount.value())
      }
      async setGotoDateResult(e, t) {
        this._gotoDateResultCleared = !1;
        const s = await Promise.all([i.e(6778), i.e(4079)]).then(i.bind(i, 75203));
        this._gotoDateResultCleared || (this._gotoDateView = new s.GotoDateView(this, e, t), this._gotoDateView
          .doNotShowLastAvailableBar(this._doNotShowLastAvailableBar), this._model.updateSource(this))
      }
      clearGotoDateResult() {
        this._gotoDateView = null, this._gotoDateResultCleared = !0
      }
      doNotShowLastAvailableBar(e) {
        this._doNotShowLastAvailableBar = e, this._gotoDateView?.doNotShowLastAvailableBar(e)
      }
      dataUpdated() {
        return this.dataEvents().dataUpdated()
      }
      moveData(e) {
        const t = this._seriesSource.moveData(e);
        null !== this._volumePointWeights && this._volumePointWeights.moveData(e), t.then((() => {
          this._isDestroyed || this.bars().isEmpty() || this._onIndexDiffsApplied(e)
        }))
      }
      async seriesCreated() {
        const e = this._seriesSource.instanceId();
        if (null !== e) return e;
        const t = await Promise.race([this._deferredDestroyed.promise.then((() => {})), this._model.isSnapshot() ?
          Promise.resolve(null) : new Promise((e => {
            this.dataEvents().created().subscribe(this, e, !0)
          }))
        ]);
        if (void 0 === t) throw new Error("Series has been destroyed");
        return t
      }
      activeStudyBinding() {
        return this._studyBindings?.activeStudy() ?? null
      }
      contextMenuStatName() {
        return "SeriesContextMenu"
      }
      _updateBarFunction() {
        this._barFunction = (0, qt.barFunctionByStyle)(this.style(), this.priceSource())
      }
      _setProperties(e) {
        e.hasChild("timeframe") || e.merge({
            timeframe: ""
          }), e.hasChild("shortName") || e.merge({
            shortName: ""
          }), e.hasChild("currencyId") || e.addChild("currencyId", new m.Property(null)), e.hasChild("unitId") || e
          .addChild("unitId", new m.Property(null)), this._properties = e;
        const t = e.childs();
        t.currencyId.subscribe(this, this._onCurrencyChanged), t.unitId.subscribe(this, this._onUnitChanged), t
          .timeframe.subscribe(this, this.changeTimeFrame), e.subscribe(this, this._onPropertiesChanged)
      }
      _updateSessionIdProxyProperty(e) {
        const t = this._properties.childs().sessionId.value();
        let i = t;
        if (e) {
          const e = this.symbolInfo();
          null !== e && (i = e.subsession_id || t)
        }
        this._ignoreSessionIdProxyPropertyChanges = !0, this._sessionIdProxyProperty.setValue(i), this
          ._ignoreSessionIdProxyPropertyChanges = !1
      }
      _onSessionIdProxyPropertyChanged() {
        this._ignoreSessionIdProxyPropertyChanges || this._properties.childs().sessionId.setValue(this
          ._sessionIdProxyProperty.value()), this._updateLastPriceAnimationActive()
      }
      _onSymbolResolved(e) {
        this._seriesErrorMessage = null, this._updateSymbolInfo(e), this._model.updateSource(this), this._model
          .onWidget() || ((0, r.trackEvent)("Symbol", e.listed_exchange, e.name), (0, r.trackEvent)("Symbol Type", e
            .type, e.listed_exchange));
        const t = e.minmov / e.pricescale,
          i = this.properties().childs();
        4 === i.style.value() && i.renkoStyle.childs().inputs.childs().boxSize.value() < t ? i.renkoStyle.childs()
          .inputs.merge({
            boxSize: t
          }) : 6 === i.style.value() && i.pnfStyle.childs().inputs.childs().boxSize.value() < t ? i.pnfStyle
          .childs().inputs.merge({
            boxSize: t
          }) : 5 === i.style.value() && i.kagiStyle.childs().inputs.childs().reversalAmount.value() < t && i
          .kagiStyle.childs().inputs.merge({
            reversalAmount: t
          }), this._checkChartStyle(), this._formattingDeps = {
            format: e.format,
            pricescale: e.pricescale,
            minmov: e.minmov,
            fractional: e.fractional,
            minmove2: e.minmove2,
            variable_tick_size: e.variable_tick_size
          }, this._updateLastPriceAnimationActive()
      }
      _onSymbolError(e) {
        this._setStatus(4), this._properties.childs().shortName.setValue(this._properties.childs().symbol.value()),
          this._model.clearAllStudies(), this.updateAllViews((0, ve.sourceChangeEvent)(this.id())), this._model
          .updateSource(this), this._symbolResolvingActive.setValue(!1)
      }
      _sendTelemetryCounter(e, t) {}
      _getTelemetryAdditionalData(e, t) {
        return {}
      }
      _onSeriesTimeFrame(e, t, i, s, o) {
        const n = (0, g.isSingleValueBasedStyle)(this.style()) ? e + .5 : e;
        let r = t;
        if (void 0 === o) null !== i && "period-back" !== i.type || (r += this._model
        .studyAwareDefaultRightOffset());
        else if (o.applyDefaultRightMargin) r += this._model.studyAwareDefaultRightOffset();
        else if (o.percentRightMargin) {
          const e = t - n + 1,
            i = Math.max(0, Math.min(.99, o.percentRightMargin / 100));
          r += i * e / (1 - i)
        }
        this._model.setTimeViewport(n, r)
      }
      _onSeriesError(e) {
        let t = e.error;
        const i = e.ctx;
        if (i) {
          const e = {};
          Object.keys(i).forEach((t => {
            e[t] = i[t].toString()
          })), t = t.format(e)
        }
        pi && gi.logNormal("Error reason: " + t), this._seriesErrorMessage = decodeURIComponent(t.split(":", 2)[0]);
        const s = "unknown_symbol" !== t ? 12 : _i && this.symbolInfo() ? 10 : 4;
        this._setStatus(s), this._seriesLoaded = !0, this._enablePriceRangeReady()
      }
      _onSeriesLoading(e) {
        this._setStatus(2)
      }
      _onDataUpdated(e, t, i, s, n) {
        t && n && this._colorOnPrevBar() && this._precomputedBarStyles.delete(n.value);
        this.symbolInfo();
        if (null !== this._volumePointWeights) {
          const e = t ? this.bars().fullRangeIterator() : i ? this.bars().rangeIterator(i.index, (0, o
            .ensureNotNull)(this.bars().lastIndex())) : null;
          if (null !== e)
            for (const t of e) this._volumePointWeights.setVolume(t.index, t.value[5])
        }
        t ? this._requestMoreDataAvailable = !0 : this._lastPriceAnimationActive && this._seriesLoaded && this
          ._lineStyleLastPriceCirclePaneView.update((0, ve.sourceChangeEvent)(this.id())), this._lastBarCloseTime =
          e && e.closeTime || null, this._boxSizeValue.setValue(this.data().boxSize), this._statusView.update();
        const r = this.bars().firstIndex(),
          a = this.bars().lastIndex();
        null !== r && null !== a ? this._dataRangeUpdated.fire({
          type: "partial",
          startIndex: i?.index ?? r,
          endIndex: t ? n?.index ?? a : a
        }) : this._dataRangeUpdated.fire({
          type: "full"
        }), this.clearAveragePriceCache(), this.clearHighLowPriceCache();
        const l = this.model(),
          c = (0, o.ensureNotNull)(l.paneForSource(this));
        l.recalculatePane(c, (0, ve.sourceChangeEvent)({
          sourceId: this.id(),
          realtime: !t,
          firstUpdatedTimePointIndex: i?.index ?? void 0
        })), l.updateSource(this)
      }
      _plotsDataRange() {
        const e = this.bars().firstIndex(),
          t = this.bars().lastIndex();
        return null !== e && null !== t ? [e, t] : null
      }
      _setStatus(e) {
        const t = {
          ...this._status.value(),
          seriesStatus: e
        };
        this._updateStatus(t), this._statusView.update(), this.model().updateSource(this), this._onStatusChanged
          .fire()
      }
      _onBarReceived(e) {
        this.model().recalcVisibleRangeStudies(h.RecalcVisibleRangeStudiesReason.DataUpdate)
      }
      _onUnsupportedResolutionRequested() {
        const e = (0, o.ensureNotNull)(this._getStateForUnsupportedResolution());
        this._seriesErrorMessage = e.reason, this._unsupportedResolutionState.setValue(e), this._setStatus(14), this
          ._seriesLoaded = !0, this.clearData(), this._model.timeScale().points().clear(), this
          ._enablePriceRangeReady()
      }
      _getStateForUnsupportedResolution() {
        const e = this.symbolInfo();
        if (null === e) return null;
        const t = this.interval(),
          i = (0, A.getResolutionUnsupportedReason)(e, t);
        if (null === i) return null;
        const s = e.name;
        if ("less_than_frequency" !== i) {
          let o = ["D", "W", "M"];
          return !0 !== (0, si.getChartingLibraryGlobalContext)().configurationData.is_tradingview_data && (o = e
            .supported_resolutions), {
            ticker: s,
            reason: i,
            unsupportedResolution: t,
            applicableResolution: o[0],
            supportedResolutions: o
          }
        } {
          const n = (0, o.ensureDefined)(e.data_frequency);
          let r = (0, xt.getApplicableIntervalForFrequency)(n, t);
          this._model.defaultResolutions();
          return {
            ticker: s,
            reason: i,
            applicableResolution: r,
            unsupportedResolution: t,
            supportedResolutions: []
          }
        }
      }
      _recreateFormatter() {
        let e = null;
        e = Yt.customFormatters?.priceFormatterFactory?.(this.symbolInfo(), this.properties().childs().minTick
            .value()) ?? null, null !== e ? (this._formatter = e, this._ignoreMinMoveFormatter = e) : (this
            ._defaultFormatter = (0, g.createSeriesFormatter)(this.aliasSymbolInfo() ?? this._formattingDeps,
              "default"), this._formatter = (0, g.createSeriesFormatter)(this.aliasSymbolInfo() ?? this
              ._formattingDeps, this.properties().childs().minTick.value()), this._ignoreMinMoveFormatter = (0, g
              .createSeriesFormatter)(this.symbolInfo(), this.properties().childs().minTick.value(), !0)), this
          ._priceScale?.updateFormatter(), this._formatterChanged.fire()
      }
      _recreatePriceStep() {
        const {
          minMove: e,
          priceScale: t
        } = (0, g.getSeriesPriceFormattingState)(this.symbolInfo()), i = e / t;
        this._ignoreMinMovePriceStep = 1 / t, this._priceStep !== i && (this._priceStep = i, this._priceStepChanged
          .fire())
      }
      _recreatePriceFormattingDependencies() {
        this._recreateFormatter(), this._recreatePriceStep()
      }
      _onQuotesUpdate(e, t) {
        void 0 !== e.values.current_session && e.values.current_session !== this._currentSession && (this
          ._currentSession = e.values.current_session, this._updateLastPriceAnimationActive())
      }
      _updateIsPrePostMarketPricesForbiddenProperty() {
        const e = this.symbolInfo(),
          t = (0, g.symbolHasPreOrPostMarket)(e) && (this.isDWM() || !!e && (0, g.isRegularSessionId)(this
            .sessionIdProxyProperty().value(), e));
        this._isPrePostMarketPricesAvailableProperty.setValue(t)
      }
      _updateSettlementAsCloseForbiddenProperty() {}
      _updateBackAdjustmentForbiddenProperty() {}
      _removeReplaySubscriber() {
        throw new Error("Not implemented")
      }
      _getSymbolForApi() {
        return this.symbol()
      }
      _getSymbolObject(e) {
        const t = this._getExtendedSymbolObject(e),
          i = this.properties().childs().style.value();
        if (S.SYMBOL_STRING_DATA.hasOwnProperty(i) && !S.chartStylesWithAttachedStudies.includes(i)) {
          return {
            symbol: t,
            type: this.styleStudyInfo(this.getStyleShortName() + "Style").studyId + "!",
            inputs: this.getInputsProperties().state()
          }
        }
        return t
      }
      _getExtendedSymbolObject(e) {
        const t = {
            symbol: e ?? this._getSymbolForApi()
          },
          i = this.properties().childs();
        null !== this.currency() && (t["currency-id"] = this.currency());
        const s = this.unit();
        return this._model.unitConversionEnabled() && null !== s && (t["unit-id"] = s), !this.isDWM() && fi && (t
          .session = i.sessionId.value()), t
      }
      _checkChartStyle() {
        const e = this.style();
        (0, g.isCloseBasedSymbol)(this.symbolInfo()) || this.intervalObj().value().is1Tick() ? (0, g
          .isSingleValueBasedStyle)(e) || (this.requestingStyleIsNotSupported.fire(), this._styleToRecover = {
          correctedStyle: this.style(),
          originalStyle: e
        }) : "hlc" === this.symbolInfo()?.visible_plots_set ? (0, g.isHLCBasedStyle)(e) || (0, g
          .isSingleValueBasedStyle)(e) || (this.requestingStyleIsNotSupported.fire(), this._styleToRecover = {
          correctedStyle: this.style(),
          originalStyle: e
        }) : null !== this._styleToRecover && (this.requestingStyleSupportRecovered.fire(this._styleToRecover
          .originalStyle), this._styleToRecover = null)
      }
      _updateSymbolInfo(e) {
        if (this._symbolInfo.setValue(e), e) {
          const t = this._getResolvingSymbolObject(),
            i = this._properties.childs();
          i.shortName.setValue(e.name);
          const o = (0, f.extractSymbolNameFromSymbolInfo)(e, this.symbol());
          o && i.symbol.setValue(o);
          const n = (0, g.symbolCurrency)(e),
            r = (0, g.symbolUnit)(e, this._model.unitConversionEnabled());
          "alwaysOff" === (0, J.currencyUnitVisibilityProperty)().value() || n === i.currencyId.value() && r === i
            .unitId.value() || this._model.fullUpdate(), i.currencyId.setValue(n), i.unitId.setValue(r);
          const a = this._getResolvingSymbolObject(),
            l = this._seriesSource.symbol();
          (0, s.default)(t, l) && !(0, s.default)(a, l) && this._seriesSource.updateExtSymbol(a), this
            ._updateSessionIdProxyProperty(!0)
        }
        const t = this.aliasSymbolInfo();
        this._base = t ? t.pricescale / t.minmov : 100, this._pointValue = e && e.pointvalue || 1;
        const i = this.getQuotesSymbolString();
        i !== this._quotesProvider.symbol() && this._quotesLastSplits.setValue(null), this._quotesProvider
          .setQuotesSessionSymbol(i), this._marketStatusModel.setSymbolInfo(e), e && this
          ._recreatePriceFormattingDependencies(), this._statusView.update(), this.priceScale().updateFormatter(),
          this._symbolResolvingActive.setValue(!e), fi && this._updateIsPrePostMarketPricesForbiddenProperty()
      }
      _createHighLowAvgViews() {
        const e = this.properties().childs().highLowAvgPrice,
          t = this._getHighLowPrice.bind(this),
          i = function(e, t, i, s) {
            const o = i.childs(),
              n = We(e, t, {
                label: Oe,
                labelVisible: o.highLowPriceLabelsVisible,
                lineVisible: o.highLowPriceLinesVisible,
                lineColor: o.highLowPriceLinesColor,
                lineWidth: o.highLowPriceLinesWidth
              }, (() => s(0))),
              r = We(e, t, {
                label: Fe,
                labelVisible: o.highLowPriceLabelsVisible,
                lineVisible: o.highLowPriceLinesVisible,
                lineColor: o.highLowPriceLinesColor,
                lineWidth: o.highLowPriceLinesWidth
              }, (() => s(1)));
            return {
              paneViews: [n.paneView, r.paneView],
              panePriceAxisViews: [n.panePriceAxisView, r.panePriceAxisView],
              priceAxisViews: [n.priceAxisView, r.priceAxisView],
              priceLineAxisViews: [n.priceLineAxisView, r.priceLineAxisView]
            }
          }(this._model, this, e, t);
        this._highLowAvgPaneViews.push(...i.paneViews), this._labelPaneViews.push(...i.panePriceAxisViews), this
          ._priceAxisViews.push(...i.priceAxisViews), this._priceLineAxisViews.push(...i.priceLineAxisViews)
      }
      _createAverageViews() {
        const e = this.properties().childs().highLowAvgPrice,
          t = this._getAveragePrice.bind(this),
          i = Ke(this._model, this, e, t);
        this._averagePaneViews.push(...i.paneViews), this._labelPaneViews.push(...i.panePriceAxisViews), this
          ._priceAxisViews.push(...i.priceAxisViews), this._priceLineAxisViews.push(...i.priceLineAxisViews)
      }
      _getHighLowPrice(e) {
        if (!this._highLowPriceCache.has(e)) {
          const e = this._model.timeScale().visibleBarsStrictRange();
          if (null === e) return null;
          const t = function(e, t, i) {
            return e.minMaxOnRangeCached(t, i, [{
              name: "low",
              offset: 0
            }, {
              name: "high",
              offset: 0
            }])
          }(this._model.mainSeries().bars(), e.firstBar(), e.lastBar());
          if (null === t) return null;
          this._highLowPriceCache.set(1, t.min), this._highLowPriceCache.set(0, t.max)
        }
        return this._highLowPriceCache.get(e)
      }
      _getAveragePrice(e) {
        if (!this._averagePriceCache.has(e)) {
          const e = this._model.timeScale().visibleBarsStrictRange();
          if (null === e) return null;
          const t = function(e, t, i) {
            0;
            const s = (0, d.barFunction)("close");
            let o = 0,
              n = 0;
            for (let r = t; r <= i; r++) {
              const t = e.valueAt(r);
              null !== t && (o += s(t), n++)
            }
            return n ? o / n : null
          }(this._model.mainSeries().bars(), e.firstBar(), e.lastBar());
          if (null === t) return null;
          this._averagePriceCache.set(0, t)
        }
        return this._averagePriceCache.get(e)
      }
      _updateCompleteStatusMode(e) {
        switch (e = "pulsed" === e ? "delayed" : e) {
          case "streaming":
            this._setStatus(3);
            break;
          case "endofday":
            this._setStatus(6);
            break;
          case "delayed":
            this._setStatus(8);
            break;
          case "replay":
            this._setStatus(11)
        }
        e.match(/delayed_streaming/) && this._setStatus(9)
      }
      _onSeriesCompleted(e) {
        if (14 === this._status.value().seriesStatus) return;
        this._seriesErrorMessage = null, this._updateCompleteStatusMode(e.updateMode), this._lastCompleteFlags = e
          .flags ?? null;
        const t = (0, o.ensureNotNull)(this._model.paneForSource(this));
        t.recalculatePriceScale(this.priceScale(), (0, ve.sourceChangeEvent)(this.id()));
        const i = _t.InvalidationMask.full();
        if (null !== this._model.appliedTimeFrame().value() && i.lockVisibleTimeRangeOnResize(), this._model
          .invalidate(i), !this.priceScale().isLockScale() || this.model().timeScale().isEmpty() || this
          ._seriesLoaded || (this.model().timeScale().correctOffset(), this.model().timeScale().correctBarSpacing(),
            this.model().resetPriceScale(t, this.priceScale())), this._seriesLoaded = !0, this._seriesCompleted = !
          0, this.model().recalcVisibleRangeStudies(h.RecalcVisibleRangeStudiesReason.SeriesCompleted),
          this.model().recalcStudyBasedLineTools(), null !== this._savedLeftEdge && 2 !== this._status.value()
          .seriesStatus) {
          const e = 1e3 * this._savedLeftEdge,
            t = this._pendingScrollToLeftEdge;
          setTimeout((() => {
            this._model.syncTimeWithModel((0, o.ensureNotNull)(this.syncModel()).syncSourceTarget(), e, {
              targetPointAlignment: "left",
              alignIfTargetPointIsVisible: !0,
              autoscaleAfterScroll: !1
            }).then((() => {
              t?.resolve()
            })).catch((() => {}))
          }), 0), this._savedLeftEdge = null, this._pendingScrollToLeftEdge = null
        }
        this._enablePriceRangeReady()
      }
      _notifyIntervalChanged(e) {
        const t = {
          timeframe: this._pendingTimeRange ?? void 0
        };
        this._intervalChanged.fire(e, t), this._pendingTimeRange = t.timeframe ?? null
      }
      _onCurrencyChanged() {
        this._currencyChanged.fire()
      }
      _onUnitChanged() {
        this._unitChanged.fire()
      }
      _saveLeftEdgeIfRequired(e, t = null) {
        if (this._savedLeftEdge = null, !t && !e && this._model.properties().childs().scalesProperties.childs()
          .saveLeftEdge.value()) {
          const e = this._model.timeScale();
          if (!e.isEmpty()) {
            let t = e.visibleBarsStrictRange()?.firstBar();
            if (void 0 !== t) {
              const i = this._seriesSource.data()?.bars().first();
              return null != i && (t = Math.max(t, i.index)), this._savedLeftEdge = e.indexToTimePoint(t), this
                ._pendingScrollToLeftEdge = (0, l.createDeferredPromise)(), !0
            }
          }
        }
        return !1
      }
      async _processReplayOnApplySymbolParamsChanges(e, t) {}
      async _applySymbolParamsChanges(e) {
        this._lastCompleteFlags = null, this.clearGotoDateResult();
        const t = this.interval();
        this.currency(), this.unit();
        Q.Interval.isRange(t) && this._properties.childs().rangeStyle.childs().inputs.childs().range.setValue(Q
          .Interval.parse(t).multiplier());
        const {
          symbolChanged: i,
          intervalChanged: s,
          currencyChanged: o,
          unitChanged: n,
          force: r
        } = e, a = fi && s && Q.Interval.parse(t).isDWM() != Q.Interval.parse(t).isDWM();
        if (this._syncModel = null, this._prevRequestedInterval = t, 5 !== this._status.value().seriesStatus && (!
            this._seriesSource.isStarted() || i || o || n || a) && this._updateSymbolInfo(null), this
          ._processReplayOnApplySymbolParamsChanges(!!s, t), 5 === this._status.value().seriesStatus)
        return void this._model.realignLineTools();
        this._setStatus(1), fi && this._updateIsPrePostMarketPricesForbiddenProperty(), this._symbolIntervalChanged
          .fire(), s && this._notifyIntervalChanged(t), this._onRestarted.fire(), this._seriesLoaded = !1, this
          ._seriesCompleted = !1, this._lineStyleLastPriceCirclePaneView.stopAnimation();
        let l = null;
        this._pendingTimeRange && (l = this._pendingTimeRange, this._pendingTimeRange = null), this
          ._onTimeFrameApplied.fire(l), this._onBeforeModifySeries(this.getSymbolString(), t);
        const c = this._shouldDefineNumberOfBarsForModifySeries(e) && this._visibleBarsCount() || null;
        this.model().recalcVisibleRangeStudies(h.RecalcVisibleRangeStudiesReason.SeriesRestart), this
          ._saveLeftEdgeIfRequired(!!i, l), this._data = null, this._seriesSource.modifySeries(this
            ._getResolvingSymbolObject(), (0, Mt.getServerInterval)(t), l, r, c), this._seriesSource.isStarted() ||
          (this._predictBars = 0, this._seriesSource.start()), (i || o || n) && this.disablePriceRangeReady(), this
          .updateAllViews((0, ve.sourceChangeEvent)(this.id())), this._model.lightUpdate(), this
          ._pendingScrollToLeftEdge && await this._pendingScrollToLeftEdge.promise
      }
      async _onBeforeModifySeries(e, t) {
        const i = null;
        i?.modifySeries(e, t)
      }
      _getResolvingSymbolObject() {
        let e = this._getSymbolObject(this._symbolForResolve());
        const t = null;
        return t && (e = t.generateReplaySymbol(e)), e
      }
      _onSessionIdPropertyChanged() {
        this._sessionIdChanged.fire(), this.isDWM() || (this._saveLeftEdgeIfRequired(!1), this.restart(!0), this
          ._updateLastPriceAnimationActive()), this._syncModel = null
      }
      _subscribeRestartToSessionIdChange() {
        this.properties().childs().sessionId.subscribe(this, this._onSessionIdPropertyChangedBound)
      }
      _unsubscribeRestartToSessionIdChange() {
        this.properties().childs().sessionId.unsubscribe(this, this._onSessionIdPropertyChangedBound)
      }
      _updateLastPriceAnimationActive() {
        if (!this._options.lastPriceAnimationEnabled || C.enabled("disable_pulse_animation")) return;
        const e = this._lastPriceAnimationActive,
          t = this.properties().childs(),
          i = t.style.value(),
          s = 3 === i || 10 === i || 2 === i || 14 === i || 15 === i,
          o = this.symbolInfo();
        if (!this._model.isSnapshot() && t.visible.value() && s && o) {
          const e = this.currentSession(),
            t = !(0, g.isRegularSessionId)(this.sessionIdProxyProperty().value(), o) && !this.isDWM();
          this._lastPriceAnimationActive = "market" === e || t && ("pre_market" === e || "post_market" === e)
        } else this._lastPriceAnimationActive = !1;
        this._lastPriceAnimationActive && e !== this._lastPriceAnimationActive && this.model().invalidate(_t
          .InvalidationMask.cursor())
      }
      _onPropertiesChanged(e) {
        const t = this._properties.childs();
        if (e === t.symbol || e === t.interval || e === t.timeframe) return;
        const i = this._id.value();
        this._tagsChanged.fire(), this.createPaneView(), this.updateAllViews((0, ve.sourceChangeEvent)(i)), this
          .model().updateSource(this), (0, a.emit)("series_properties_changed", i)
      }
      _recalcSymbolTextSourceProxyProperty() {
        this._textSourceIsAlwaysTickerRestrictionEnabled ? this._symbolTextSourceProxyProperty.setValue("ticker") :
          this._symbolTextSourceProxyProperty.setValue(this._properties.childs().statusViewStyle.childs()
            .symbolTextSource.value())
      }
      _clearStylePlot(e, t) {
        if (0 === e.size()) return;
        if (void 0 === t && e !== this.nsBars()) return void(this._precomputedBarStyles = new WeakMap);
        const i = t ?? (0, o.ensureNotNull)(e.firstIndex()),
          s = (0, o.ensureNotNull)(e.lastIndex()) + 1;
        e.range(i, s).each(((e, t) => (this._precomputedBarStyles.delete(t), !1)))
      }
      _visibleBarsCount() {
        const e = this._model.timeScale().visibleBarsStrictRange();
        return e?.count()
      }
      _symbolForResolve() {
        const e = this.symbol();
        return this._seriesSource.symbolSameAsResolved(e) ? this._seriesSource.resolvedSymbol() ?? e : e
      }
      _shouldDefineNumberOfBarsForModifySeries(e) {
        return C.enabled("request_only_visible_range_on_reset") && e.force || !1
      }
      _onShowCountdownChanged(e) {
        e.value() ? this._countdownUpdateTimer = this._model.setInterval((() => {
          this._priceAxisView.updateCountdown?.(), this._projectionPriceAxisView.updateCountdown?.()
        }), 500) : null !== this._countdownUpdateTimer && (this._model.clearInterval(this._countdownUpdateTimer),
          this._countdownUpdateTimer = null)
      }
      _onFormatterPropsChanged() {
        this._recreateFormatter(), this._model.fullUpdate()
      }
      _updateStatus(e) {
        14 !== e.seriesStatus && this._unsupportedResolutionState.setValue(null), this._status.setValue(e)
      }
      _wasCompletedBefore() {
        return this.isCompleted() && (this._studyBindings?.wasCompletedBefore() ?? !0)
      }
      _colorOnPrevBar() {
        const e = new Map([
          [1, "candleStyle"],
          [0, "barStyle"],
          [19, "volCandlesStyle"],
          [8, "haStyle"],
          [13, "columnStyle"]
        ]).get(this.style());
        return !!e && this._properties.childs()[e].childs().barColorsOnPrevClose.value()
      }
      _restartIfStyleMatches(e) {
        this.style() === e && this.restart()
      }
    }