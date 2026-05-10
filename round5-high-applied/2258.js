/**
 * Module 2258 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2258: (series_e, t, i) => {
    "use strict";
    i.d(t, {
      StudyStub: () => b,
      isStudyStubDescriptor: () => w
    });
    var series_s = i(50279),
      o = i(30551),
      n = i(50151),
      r = i(52499),
      series_a = (i(48943), i(51304)),
      l = i(80671),
      c = i(67135),
      h = i(67563),
      d = i(48096),
      u = i(43337),
      _ = i(35990),
      p = i(36313);
    class m extends _.StudyStatusProviderBase {
      text() {
        return this._source.isActualInterval() ?
          `${this._source.title(p.TitleDisplayTarget.StatusLine)} ${this.sourceStatusText()}` : this._source.title(p
            .TitleDisplayTarget.StatusLine)
      }
    }
    var g = i(86252),
      f = i(29447),
      y = i(72972);
    class v {
      getItems() {
        return []
      }
      getValues(series_e) {
        return []
      }
    }
    const S = new d.Delegate;
    class b extends c.PriceDataSource {
      constructor(series_e, t, i, series_s, o = null) {
        super(series_e), this._priceStep = .01, this._origState = null, this._descriptor = null, this._status = {
            type: g.StudyStatusType.Undefined
          }, this._statusChanged = new d.Delegate, this._descriptorChanged = new d.Delegate, this._formatter = new h
          .PriceFormatter({
            priceScale: 100
          }), this._showPineVersionInStatusLine = new r.WatchedValue(!1).spawn(), this._pineSourceCodeModel = null,
          (0, y.isStudyDescriptor)(t) ? this._descriptor = t : this._origState = t, this._title = i, this
          ._alwaysShowInLegend = void 0 !== series_s, this._isOverlay = series_s, this._studyMetaInfo = o;
        this._properties = new u.Property({
          visible: !0
        }), this._statusView = new l.StudyStatusView(this)
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
        const t = this.isDisplayedInLegend();
        if (this._status = series_e, this._statusChanged.fire(), this.isDisplayedInLegend() !== t) {
          const series_e = this._model.paneForSource(this);
          if (series_e) {
            const t = this._model.panes().indexOf(series_e),
              i = series_a.InvalidationMask.invalidateLegendWidgetLayout(t);
            this.model().invalidate(i)
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
        return this._showPineVersionInStatusLine.value() && series_e.push((0, n.ensureDefined)(this._studyMetaInfo?.pine)
          .version), series_e
      }
      inputsInParts() {
        return null
      }
      isFailed() {
        return this._status.type === g.StudyStatusType.Error
      }
      isLoading() {
        return this._status.type === g.StudyStatusType.Loading
      }
      isDisplayedInLegend() {
        return this._alwaysShowInLegend || this.isFailed()
      }
      setFailed(series_e, t) {
        this.setStatus({
          type: g.StudyStatusType.Error,
          errorDescription: {
            error: series_e,
            title: t
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
        return new v
      }
      legendValuesProvider() {
        return new v
      }
      statusProvider(series_e) {
        return new m(this)
      }
      isRemovedByStudyTemplates() {
        return null !== this._origState && (0, f.isStudyState)(this._origState)
      }
      pineSourceCodeModel() {
        return Promise.resolve(null)
      }
      contextMenuStatName() {
        return "StudyStubContextMenu"
      }
    }

    function w(series_e) {
      return (0, o.isObject)(series_e) && "descriptor" in series_e && (0, y.isStudyDescriptor)(series_e.descriptor)
    }
}
