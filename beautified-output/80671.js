/**
 * Module 80671 - Study Status View
 * 
 * Status view component for technical study/indicators.
 * Displays study-specific status information and metadata.
 * 
 * @module StudyStatusView
 * @see Status view base class (13651)
 */

import { StatusView } from './13651-status-view.js';

/**
 * Status view for chart studies
 * @class StudyStatusView
 * @extends StatusView
 */
export class StudyStatusView extends StatusView {
  /**
   * Create study status view
   * @param {Object} config - View configuration
   * @param {Object} config.statusProvider - Status provider instance
   */
  constructor(config) {
    super(config.statusProvider());
  }

  /**
   * Get split title for display
   * @returns {string} Split title text
   */
  getSplitTitle() {
    return this._statusProvider.getSplitTitle();
  }

  /**
   * Get title tooltip text
   * @returns {string} Tooltip content
   */
  titleTooltip() {
    return this._statusProvider.titleTooltip();
  }

  /**
   * Get input parameter titles
   * @returns {Array} Input titles
   */
  getInputsTitles() {
    return this._statusProvider.getInputsTitles();
  }

  /**
   * Update status view
   * @param {*} data - Update data
   */
  update(data) {
    this._text = this._statusProvider.text();
  }
}

export default StudyStatusView;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → config (constructor parameter)
// - s → StatusViewClass (StatusView)
// - o → StudyStatusView (exported class)
// ============================================================================