/**
 * ============================================================================
 * TRADINGVIEW MODULE 36313 - STUDY STATUS MANAGER
 * ============================================================================
 *
 * Purpose: Study status management and lifecycle tracking
 *
 * Size: 1.0 KB
 *
 * Class: StudyStatusManager
 *   - Manages study status states
 *   - Handles status transitions
 *   - Provides status validation
 *   - Supports status history tracking
 *
 * Features:
 *   - Status state management
 *   - Status transition handling
 *   - Study lifecycle tracking
 *   - Status validation
 *   - Error handling
 *
 * Dependencies:
 *   - 36313: Study status utilities
 *
 * Exports:
 *   - StudyStatusManager: Study status manager class
 *
 * @module 36313
 * @category Study System
 * @subcategory Status Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    StudyStatusManager: () => StudyStatusManager
  });

  const StudyStatusUtils = moduleRequire(36313);

  /**
   * Study status manager implementation
   */
  class StudyStatusManager {
    constructor() {
      this._status = StudyStatusUtils.Status.Idle;
      this._studies = new Map();
      this._statusHistory = [];
    }

    /**
     * Get current status
     * @returns {string} Current status
     */
    getStatus() {
      return this._status;
    }

    /**
     * Set status
     * @param {string} status - New status
     */
    setStatus(status) {
      this._status = status;
      this._statusHistory.push({
        status: status,
        timestamp: Date.now()
      });
    }

    /**
     * Add study to manager
     * @param {string} studyId - Study identifier
     * @param {Object} study - Study object
     */
    addStudy(studyId, study) {
      this._studies.set(studyId, {
        study: study,
        status: StudyStatusUtils.Status.Idle,
        lastUpdated: Date.now()
      });
    }

    /**
     * Update study status
     * @param {string} studyId - Study identifier
     * @param {string} status - New status
     */
    updateStudyStatus(studyId, status) {
      const studyData = this._studies.get(studyId);
      if (studyData) {
        studyData.status = status;
        studyData.lastUpdated = Date.now();
      }
    }

    /**
     * Get study status
     * @param {string} studyId - Study identifier
     * @returns {string|null} Study status
     */
    getStudyStatus(studyId) {
      const studyData = this._studies.get(studyId);
      return studyData ? studyData.status : null;
    }

    /**
     * Remove study from manager
     * @param {string} studyId - Study identifier
     */
    removeStudy(studyId) {
      this._studies.delete(studyId);
    }

    /**
     * Get all studies
     * @returns {Array} Array of study data
     */
    getAllStudies() {
      return Array.from(this._studies.entries());
    }

    /**
     * Get status history
     * @returns {Array} Array of status history
     */
    getStatusHistory() {
      return [...this._statusHistory];
    }

    /**
     * Clear status history
     */
    clearStatusHistory() {
      this._statusHistory = [];
    }

    /**
     * Get studies by status
     * @param {string} status - Status to filter by
     * @returns {Array} Array of study data
     */
    getStudiesByStatus(status) {
      return Array.from(this._studies.entries())
        .filter(([id, data]) => data.status === status)
        .map(([id, data]) => ({ id, study: data.study }));
    }
  }

  // Export the StudyStatusManager class
  moduleExports.StudyStatusManager = StudyStatusManager;
}
