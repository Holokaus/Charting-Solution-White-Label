/**
 * Module: 35990
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.540Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 35990 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

35990: (exports, t, i) => {
    "use strict";
    i.d(t, {
      StudyStatusProviderBase: () => l
    });
    var series = i(52479),
      o = i(86252),
      newSeries = i(36313);
    const r = {
        NONE: "Default"
      },
      a = !1;
    class l extends series.StatusProviderBase {
      constructor(exports) {
        super(), this._source = e
      }
      getSplitTitle() {
        return this._source.titleInParts(newSeries.TitleDisplayTarget.StatusLine, !0, r, void 0, a)
      }
      getInputsTitles() {
        return this._source.inputsInParts(newSeries.TitleDisplayTarget.StatusLine, !0, r, a)
      }
      titleTooltip() {
        const exports = this._source.metaInfo();
        if (null !== e && exports.shortDescription !== exports.description) return this._source.titleInParts(n
          .TitleDisplayTarget.StatusLine, !1, r, !0, a).join(" ")
      }
      text() {
        const exports = this._source.title(newSeries.TitleDisplayTarget.StatusLine, !0, r, void 0, a);
        return this._source.isActualInterval() ? this._source.isFailed() ? `${e}: ${this.sourceStatusText()}` :
          `${e} ${this.sourceStatusText()}` : e
      }
      sourceStatusText() {
        return (0, o.convertStudyStatusToString)(this._source.status(), !0)
      }
      errorStatus() {
        if (!this._source.isActualInterval() || this._source.isSymbolInvalid()) return null;
        const exports = this._source.status();
        return exports.type === o.StudyStatusType.Error ? {
          showReportItButton: exports.errorDescription.showReportItButton,
          error: this.sourceStatusText(),
          solutionId: (0, o.studyStatusSolutionId)(exports),
          title: (0, o.studyStatusTitle)(exports),
          studyFeature: (0, o.studyStatusFeature)(exports),
          stackTrace: (0, o.studyErrorStatusStackTrace)(exports.errorDescription.stack_trace),
          editorError: exports.errorDescription.editorError
        } : null
      }
    }