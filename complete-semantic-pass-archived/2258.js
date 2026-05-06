/**
 * Module 2258 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2258: (series_e, series_t, series_i) => {
    "use strict";
    series_i.series_d(series_t, {
      StudyStub: () => series_b,
      isStudyStubDescriptor: () => series_w
    });
    var series_s = series_i(50279),
      series_o = series_i(30551),
      series_n = series_i(50151),
      series_r = series_i(52499),
      series_a = (series_i(48943), series_i(51304)),
      series_l = series_i(80671),
      series_c = series_i(67135),
      series_h = series_i(67563),
      series_d = series_i(48096),
      series_u = series_i(43337),
      _ = series_i(35990),
      series_p = series_i(36313);
    class series_m extends _.StudyStatusProviderBase {
      text() {
        return this._source.isActualInterval() ?
          `${this._source.title(series_p.TitleDisplayTarget.StatusLine)} ${this.sourceStatusText()}` : this._source.title(series_p
            .TitleDisplayTarget.StatusLine)
      }
    }
    var series_g = series_i(86252),
      series_f = series_i(29447),
      series_y = series_i(72972);
    class series_v {
      getItems() {
        return []
      }
      getValues(series_e) {
        return []
      }
    }
    const S = new series_d.Delegate;
    class series_b extends series_c.PriceDataSource {
      constructor(series_e, series_t, series_i, series_s, series_o = null) {
        super(series_e), this._priceStep = .01, this._origState = null, this._descriptor = null, this._status = {
            type: series_g.StudyStatusType.Undefined
          }, this._statusChanged = new series_d.Delegate, this._descriptorChanged = new series_d.Delegate, this._formatter = new series_h
          .PriceFormatter({
            priceScale: 100
          }), this._showPineVersionInStatusLine = new series_r.WatchedValue(!1).spawn(), this._pineSourceCodeModel = null,
          (0, series_y.isStudyDescriptor)(series_t) ? this._descriptor = series_t : this._origState = series_t, this._title = series_i, this
          ._alwaysShowInLegend = void 0 !== series_s, this._isOverlay = series_s, this._studyMetaInfo = series_o;
        this._properties = new series_u.Property({
          visible: !0
        }), this._statusView = new series_l.StudyStatusView(this)
      }
      destroy() {
        this._pineSourceCodeModel?.destroy(), this._showPineVersionInStatusLine.destroy(), super.destroy()
      }
      barColorer() {
        return null
      }
      properties() {
        return this._properties
      }
      statusView() {
        return this._statusView
      }
      legendView() {
        return null
      }
      state(series_e) {
        return this._origState
      }
      getDescriptor() {
        return null === this._descriptor ? null : {
          descriptor: this._descriptor,
          title: this._title,
          isOverlay: this._isOverlay,
          id: this.id(),
          status: this._status
        }
      }
      updateDescriptor(series_e) {
        (0, series_s.default)(this._descriptor, series_e) || (this._descriptor = series_e, this._descriptorChanged.fire())
      }
      onDescriptorChanged() {
        return this._descriptorChanged
      }
      metaInfo() {
        return this._studyMetaInfo
      }
      setMetaInfo(series_e) {
        this._studyMetaInfo = series_e
      }
      setStatus(series_e) {
        const series_t = this.isDisplayedInLegend();
        if (this._status = series_e, this._statusChanged.fire(), this.isDisplayedInLegend() !== series_t) {
          const series_e = this._model.paneForSource(this);
          if (series_e) {
            const series_t = this._model.panes().indexOf(series_e),
              series_i = series_a.InvalidationMask.invalidateLegendWidgetLayout(series_t);
            this.model().invalidate(series_i)
          }
        }
      }
      formatter() {
        return this._formatter
      }
      name() {
        return this._title
      }
      title() {
        return this.titleInParts().join(" ")
      }
      titleInParts() {
        const series_e = [this._title];
        return this._showPineVersionInStatusLine.value() && series_e.push((0, series_n.ensureDefined)(this._studyMetaInfo?.pine)
          .version), series_e
      }
      inputsInParts() {
        return null
      }
      isFailed() {
        return this._status.type === series_g.StudyStatusType.Error
      }
      isLoading() {
        return this._status.type === series_g.StudyStatusType.Loading
      }
      isDisplayedInLegend() {
        return this._alwaysShowInLegend || this.isFailed()
      }
      setFailed(series_e, series_t) {
        this.setStatus({
          type: series_g.StudyStatusType.Error,
          errorDescription: {
            error: series_e,
            title: series_t
          }
        }), this._model.updateSource(this)
      }
      isSymbolInvalid() {
        return !1
      }
      isActualInterval() {
        return !0
      }
      onIsActualIntervalChange() {
        return S
      }
      start() {}
      status() {
        return this._status
      }
      onStatusChanged() {
        return this._statusChanged
      }
      firstValue() {
        return null
      }
      currency() {
        return null
      }
      sessionId() {
        return this._model.mainSeries().sessionId()
      }
      sessionIdChanged() {
        return this._model.mainSeries().sessionIdChanged()
      }
      unit() {
        return null
      }
      symbolSource() {
        return this._model.mainSeries()
      }
      symbolSourceWV() {
        return this._model.mainSeries().symbolSourceWV()
      }
      barsProvider() {
        return this._model.mainSeries()
      }
      valuesProvider() {
        return new series_v
      }
      legendValuesProvider() {
        return new series_v
      }
      statusProvider(series_e) {
        return new series_m(this)
      }
      isRemovedByStudyTemplates() {
        return null !== this._origState && (0, series_f.isStudyState)(this._origState)
      }
      pineSourceCodeModel() {
        return Promise.resolve(null)
      }
      contextMenuStatName() {
        return "StudyStubContextMenu"
      }
    }

    function series_w(series_e) {
      return (0, series_o.isObject)(series_e) && "descriptor" in series_e && (0, series_y.isStudyDescriptor)(series_e.descriptor)
    }