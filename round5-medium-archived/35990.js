/**
 * Module 35990 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

35990: (e, t, i) => {
    "use strict";
    i.d(t, {
      StudyStatusProviderBase: () => l
    });
    var s = i(52479),
      o = i(86252),
      n = i(36313);
    const r = {
        NONE: "Default"
      },
      a = !1;
    class l extends s.StatusProviderBase {
      constructor(e) {
        super(), this._source = e
      }
      getSplitTitle() {
        return this._source.titleInParts(n.TitleDisplayTarget.StatusLine, !0, r, void 0, a)
      }
      getInputsTitles() {
        return this._source.inputsInParts(n.TitleDisplayTarget.StatusLine, !0, r, a)
      }
      titleTooltip() {
        const e = this._source.metaInfo();
        if (null !== e && e.shortDescription !== e.description) return this._source.titleInParts(n
          .TitleDisplayTarget.StatusLine, !1, r, !0, a).join(" ")
      }
      text() {
        const e = this._source.title(n.TitleDisplayTarget.StatusLine, !0, r, void 0, a);
        return this._source.isActualInterval() ? this._source.isFailed() ? `${e}: ${this.sourceStatusText()}` :
          `${e} ${this.sourceStatusText()}` : e
      }
      sourceStatusText() {
        return (0, o.convertStudyStatusToString)(this._source.status(), !0)
      }
      errorStatus() {
        if (!this._source.isActualInterval() || this._source.isSymbolInvalid()) return null;
        const e = this._source.status();
        return e.type === o.StudyStatusType.Error ? {
          showReportItButton: e.errorDescription.showReportItButton,
          error: this.sourceStatusText(),
          solutionId: (0, o.studyStatusSolutionId)(e),
          title: (0, o.studyStatusTitle)(e),
          studyFeature: (0, o.studyStatusFeature)(e),
          stackTrace: (0, o.studyErrorStatusStackTrace)(e.errorDescription.stack_trace),
          editorError: e.errorDescription.editorError
        } : null
      }
    }