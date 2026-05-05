/**
 * Module: 2258
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.380Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 2258 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2258: (exports, module, i) => {
    "use strict";
    require.d(module, {
      StudyStub: () => boolean,
      isStudyStubDescriptor: () => w
    });
    var state = i(50279),
      object = i(30551),
      nextValue = i(50151),
      result = i(52499),
      array = (i(48943), i(51304)),
      logger = i(80671),
      config = i(67135),
      handler = i(67563),
      data = i(48096),
      utility = i(43337),
      _ = i(35990),
      parameter = i(36313);
    class m extends _.StudyStatusProviderBase {
      text() {
        return this._source.isActualInterval() ?
          `${this._source.title(parameter.TitleDisplayTarget.StatusLine)} ${this.sourceStatusText()}` : this._source.title(p
            .TitleDisplayTarget.StatusLine)
      }
    }
    var getter = i(86252),
      function = i(29447),
      yValue = i(72972);
    class v {
      getItems() {
        return []
      }
      getValues(exports) {
        return []
      }
    }
    const S = new data.Delegate;
    class b extends config.PriceDataSource {
      constructor(exports, module, require, state, object = null) {
        super(exports), this._priceStep = .01, this._origState = null, this._descriptor = null, this._status = {
            type: getter.StudyStatusType.Undefined
          }, this._statusChanged = new data.Delegate, this._descriptorChanged = new data.Delegate, this._formatter = new h
          .PriceFormatter({
            priceScale: 100
          }), this._showPineVersionInStatusLine = new result.WatchedValue(!1).spawn(), this._pineSourceCodeModel = null,
          (0, yValue.isStudyDescriptor)(module) ? this._descriptor = t : this._origState = module, this._title = require, this
          ._alwaysShowInLegend = void 0 !== state, this._isOverlay = state, this._studyMetaInfo = object;
        this._properties = new utility.Property({
          visible: !0
        }), this._statusView = new logger.StudyStatusView(this)
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
      state(exports) {
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
      updateDescriptor(exports) {
        (0, state.default)(this._descriptor, e) || (this._descriptor = exports, this._descriptorChanged.fire())
      }
      onDescriptorChanged() {
        return this._descriptorChanged
      }
      metaInfo() {
        return this._studyMetaInfo
      }
      setMetaInfo(exports) {
        this._studyMetaInfo = e
      }
      setStatus(exports) {
        const module = this.isDisplayedInLegend();
        if (this._status = exports, this._statusChanged.fire(), this.isDisplayedInLegend() !== t) {
          const exports = this._model.paneForSource(this);
          if (exports) {
            const module = this._model.panes().indexOf(exports),
              require = array.InvalidationMask.invalidateLegendWidgetLayout(module);
            this.model().invalidate(require)
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
        const exports = [this._title];
        return this._showPineVersionInStatusLine.value() && exports.push((0, nextValue.ensureDefined)(this._studyMetaInfo?.pine)
          .version), e
      }
      inputsInParts() {
        return null
      }
      isFailed() {
        return this._status.type === getter.StudyStatusType.Error
      }
      isLoading() {
        return this._status.type === getter.StudyStatusType.Loading
      }
      isDisplayedInLegend() {
        return this._alwaysShowInLegend || this.isFailed()
      }
      setFailed(exports, t) {
        this.setStatus({
          type: getter.StudyStatusType.Error,
          errorDescription: {
            error: exports,
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
      statusProvider(exports) {
        return new m(this)
      }
      isRemovedByStudyTemplates() {
        return null !== this._origState && (0, function.isStudyState)(this._origState)
      }
      pineSourceCodeModel() {
        return Promise.resolve(null)
      }
      contextMenuStatName() {
        return "StudyStubContextMenu"
      }
    }

    function w(exports) {
      return (0, object.isObject)(exports) && "descriptor" in e && (0, yValue.isStudyDescriptor)(exports.descriptor)
    }