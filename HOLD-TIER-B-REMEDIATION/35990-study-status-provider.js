/**
 * ============================================================================
 * TRADINGVIEW MODULE 35990 - STUDY STATUS PROVIDER
 * ============================================================================
 *
 * Purpose: Study status provider implementation
 *
 * Size: 2.1 KB
 *
 * Class: StudyStatusProviderBase
 *   - Base class for study status providers
 *   - Handles status text generation
 *   - Provides title formatting
 *   - Supports tooltip generation
 *
 * Features:
 *   - Status text generation
 *   - Title part formatting
 *   - Tooltip text generation
 *   - Error status handling
 *   - Study status conversion
 *
 * Dependencies:
 *   - 52479: Study status utilities
 *   - 86252: Study status utilities
 *   - 36313: Study status utilities
 *
 * Exports:
 *   - StudyStatusProviderBase: Study status provider base class
 *
 * @module 35990
 * @category Study System
 * @subcategory Status Providers
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.logger_d(moduleConfig, {
    StudyStatusProviderBase: () => StudyStatusProviderBase
  });

  const StudyStatusType = moduleRequire(52479),
    StudyStatusUtils = moduleRequire(86252),
    StudyStatusTitle = moduleRequire(36313);

  /**
   * Study status provider base class
   */
  class StudyStatusProviderBase {
    /**
     * @param {Object} source - Study source object
     */
    constructor(source) {
      super();
      this._source = source;
    }

    /**
     * Get split title for display target
     * @param {string} target - Display target
     * @param {boolean} showStatus - Show status flag
     * @param {boolean} showSolution - Show solution flag
     * @param {boolean} showFeature - Show feature flag
     * @param {string} separator - Title separator
     * @returns {string} Formatted title
     */
    getSplitTitle(target, showStatus, showSolution, showFeature, separator = " ") {
      const metaInfo = this._source.metaInfo();
      
      if (metaInfo !== null && metaInfo.shortDescription !== metaInfo.description) {
        return this._source.titleInParts(target, showStatus, showSolution, showFeature, separator).join(" ");
      }
      
      return this._source.title(target, showStatus, showSolution, showFeature);
    }

    /**
     * Get inputs titles for display target
     * @param {string} target - Display target
     * @param {boolean} showStatus - Show status flag
     * @param {boolean} showSolution - Show solution flag
     * @param {boolean} showFeature - Show feature flag
     * @param {string} separator - Title separator
     * @returns {string} Formatted title
     */
    getInputsTitles(target, showStatus, showSolution, showFeature, separator = " ") {
      return this._source.inputsInParts(target, showStatus, showSolution, showFeature, separator).join(" ");
    }

    /**
     * Get title with tooltip
     * @param {string} target - Display target
     * @param {boolean} showStatus - Show status flag
     * @param {boolean} showSolution - Show solution flag
     * @param {boolean} showFeature - Show feature flag
     * @returns {string} Title with tooltip
     */
    titleTooltip(target, showStatus, showSolution, showFeature) {
      const metaInfo = this._source.metaInfo();
      
      if (metaInfo !== null && metaInfo.shortDescription !== metaInfo.description) {
        return this._source.titleInParts(StudyStatusTitle.TitleDisplayTarget.StatusLine, showStatus, showSolution, showFeature).join(" ");
      }
      
      return this._source.title(target, showStatus, showSolution, showFeature);
    }

    /**
     * Get text representation
     * @param {string} target - Display target
     * @param {boolean} showStatus - Show status flag
     * @param {boolean} showSolution - Show solution flag
     * @param {boolean} showFeature - Show feature flag
     * @returns {string} Text representation
     */
    text(target, showStatus, showSolution, showFeature) {
      const metaInfo = this._source.metaInfo();
      
      if (metaInfo !== null && metaInfo.shortDescription !== metaInfo.description) {
        return `${this._source.title(target, showStatus, showSolution, showFeature)} ${this.sourceStatusText()}`;
      }
      
      return this._source.title(target, showStatus, showSolution, showFeature);
    }

    /**
     * Get source status text
     * @returns {string} Status text
     */
    sourceStatusText() {
      if (!this._source.isActualInterval() || this._source.isSymbolInvalid()) {
        return null;
      }
      
      const status = this._source.status();
      return StudyStatusUtils.convertStudyStatusToString(status, false);
    }

    /**
     * Get error status
     * @returns {Object} Error status object
     */
    errorStatus() {
      const status = this._source.status();
      
      if (status.type === StudyStatusType.Error) {
        return {
          showReportItButton: status.errorDescription.showReportItButton,
          error: this.sourceStatusText(),
          solutionId: StudyStatusUtils.studyStatusSolutionId(status),
          title: StudyStatusUtils.studyStatusTitle(status),
          studyFeature: StudyStatusUtils.studyStatusFeature(status)
        };
      }
      
      return null;
    }
  }

  // Export the StudyStatusProviderBase class
  moduleExports.StudyStatusProviderBase = StudyStatusProviderBase;
}
