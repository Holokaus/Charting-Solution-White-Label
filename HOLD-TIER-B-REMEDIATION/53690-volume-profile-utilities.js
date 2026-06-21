/**
 * ============================================================================
 * TRADINGVIEW MODULE 53690 - VOLUME PROFILE UTILITIES
 * ============================================================================
 *
 * Purpose: Volume profile study utilities and data management
 *
 * Size: 8.1 KB
 *
 * Classes:
 *   - VolumeProfileVisibleRangeStudyItem: Volume profile visible range study item
 *
 * Functions:
 *   - volumeProfileVisibleRangeStudyItem: Create volume profile study item
 *
 * Features:
 *   - Volume profile data management
 *   - Visible range calculation
 *   - Study item creation and configuration
 *   - Graphics list management
 *   - Time scale integration
 *   - Bar time tracking
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 13823: Volume profile utilities
 *   - 99481: Graphics utilities
 *   - 46082: Graphics utilities
 *   - 3186: Graphics utilities
 *   - 96777: Graphics utilities
 *   - 30376: Graphics utilities
 *
 * Exports:
 *   - volumeProfileVisibleRangeStudyItem: Volume profile study item creation function
 *
 * @module 53690
 * @category Study System
 * @subpackage Volume Profile
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.volumeProfile_d(moduleConfig, {
    volumeProfileVisibleRangeStudyItem: () => volumeProfileVisibleRangeStudyItem
  });

  const AssertionUtils = moduleRequire(50151),
    VolumeProfileUtils = moduleRequire(13823),
    GraphicsUtils = moduleRequire(99481),
    GraphicsUtils2 = moduleRequire(46082),
    GraphicsUtils3 = moduleRequire(3186),
    GraphicsUtils4 = moduleRequire(96777),
    GraphicsUtils5 = moduleRequire(30376);

  /**
   * Create volume profile visible range study item
   * @param {Object} study - Study object
   * @param {Object} model - Model object
   * @param {Object} timeScale - Time scale object
   * @param {Object} ctx - Canvas context
   * @param {Object} dataSource - Data source object
   * @param {Object} paneView - Pane view object
   * @returns {Object} Volume profile study item
   */
  function volumeProfileVisibleRangeStudyItem(study, model, timeScale, ctx, dataSource, paneView) {
    return new VolumeProfileVisibleRangeStudyItem(
      study,
      model,
      timeScale,
      ctx,
      dataSource,
      new GraphicsUtils.GraphicsList(),
      GraphicsUtils2,
      false,
      GraphicsUtils3,
      GraphicsUtils4,
      GraphicsUtils5,
      () => VolumeProfileVisibleRangeStudyItem,
      GraphicsUtils5,
      GraphicsUtils4,
      GraphicsUtils3,
      GraphicsUtils2,
      GraphicsUtils,
      true
    );
  }

  /**
   * Volume profile visible range study item class
   */
  class VolumeProfileVisibleRangeStudyItem extends GraphicsUtils.VolumeByPriceExpr {
    constructor(study, model, timeScale, ctx, dataSource, graphicsList, graphicsUtils, visible, graphicsUtils3, graphicsUtils4, graphicsUtils5, createStudyItem, graphicsUtils6, graphicsUtils7, graphicsUtils8, graphicsUtils9, visible2) {
      super(study, model, timeScale, ctx, dataSource, graphicsList, graphicsUtils, visible, graphicsUtils3, graphicsUtils4, graphicsUtils5, createStudyItem, graphicsUtils6, graphicsUtils7, graphicsUtils8, graphicsUtils9, visible2);
      this._firstBarTime = GraphicsUtils6;
      this._lastBarTime = GraphicsUtils4;
    }

    /**
     * Update study data
     * @param {Object} study - Study object
     */
    update(study) {
      this._supplyRowsLayout(this._ctx);
      if (this.timeInRequestedRange(study)) {
        super.update(study);
      }
    }

    /**
     * Check if time is in requested range
     * @param {Object} study - Study object
     * @returns {boolean} True if time is in range
     */
    timeInRequestedRange(study) {
      const barTime = this._timeScale().get(study);
      return this._firstBarTime <= barTime && barTime < this._lastBarTime;
    }

    /**
     * Supply rows layout
     * @param {Object} ctx - Canvas context
     */
    _supplyRowsLayout(ctx) {
      // Layout implementation would go here
      // This is a placeholder for the actual implementation
    }
  }

  // Export the study item creation function
  moduleExports.volumeProfileVisibleRangeStudyItem = volumeProfileVisibleRangeStudyItem;
}
