/**
 * Module 35990 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

35990: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_d(logger_t, {
      StudyStatusProviderBase: () => logger_l
    });
    var logger_s = logger_i(52479),
      logger_o = logger_i(86252),
      logger_n = logger_i(36313);
    const logger_r = {
        NONE: "Default"
      },
      logger_a = !1;
    class logger_l extends logger_s.StatusProviderBase {
      constructor(logger_e) {
        super(), this._source = logger_e
      }
      getSplitTitle() {
        return this._source.titleInParts(logger_n.TitleDisplayTarget.StatusLine, !0, logger_r, void 0, logger_a)
      }
      getInputsTitles() {
        return this._source.inputsInParts(logger_n.TitleDisplayTarget.StatusLine, !0, logger_r, logger_a)
      }
      titleTooltip() {
        const logger_e = this._source.metaInfo();
        if (null !== logger_e && logger_e.shortDescription !== logger_e.description) return this._source.titleInParts(logger_n
          .TitleDisplayTarget.StatusLine, !1, logger_r, !0, logger_a).join(" ")
      }
      text() {
        const logger_e = this._source.title(logger_n.TitleDisplayTarget.StatusLine, !0, logger_r, void 0, logger_a);
        return this._source.isActualInterval() ? this._source.isFailed() ? `${logger_e}: ${this.sourceStatusText()}` :
          `${logger_e} ${this.sourceStatusText()}` : logger_e
      }
      sourceStatusText() {
        return (0, logger_o.convertStudyStatusToString)(this._source.status(), !0)
      }
      errorStatus() {
        if (!this._source.isActualInterval() || this._source.isSymbolInvalid()) return null;
        const logger_e = this._source.status();
        return logger_e.type === logger_o.StudyStatusType.Error ? {
          showReportItButton: logger_e.errorDescription.showReportItButton,
          error: this.sourceStatusText(),
          solutionId: (0, logger_o.studyStatusSolutionId)(logger_e),
          title: (0, logger_o.studyStatusTitle)(logger_e),
          studyFeature: (0, logger_o.studyStatusFeature)(logger_e),
          stackTrace: (0, logger_o.studyErrorStatusStackTrace)(logger_e.errorDescription.stack_trace),
          editorError: logger_e.errorDescription.editorError
        } : null
      }
    }