/**
 * ============================================================================
 * TRADINGVIEW MODULE 60755 - VOLUME DATA CHECKER (VbP)
 * ============================================================================
 *
 * Purpose: Volume by Price (VbP) volume data availability checker
 *
 * Size: 1.0 KB
 *
 * Detects whether the current symbol has volume data available.
 * Used by Volume Profile indicators to determine if they can be calculated.
 *
 * Class: VbPCheckHaveVolumeExpr
 *   - Tracks if any volume data exists
 *   - Disables itself if no volume found
 *   - Provides error messaging for missing volume
 *
 * Dependencies:
 *   - 19979: Std library (for error reporting)
 *
 * Exports:
 *   - VbPCheckHaveVolumeExpr: Volume checker class
 *
 * @module 60755
 * @category Technical Indicators
 * @subcategory Volume Profile
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    VbPCheckHaveVolumeExpr: () => VbPCheckHaveVolumeExpr
  });

  const stdLib = moduleRequire(19979);

  /**
   * Volume data availability checker for Volume by Price
   */
  class VbPCheckHaveVolumeExpr {
    /**
     * @param {Function} seriesGetter - Function that returns series with volume()
     */
    constructor(seriesGetter) {
      this._haveAnyVolume = false;
      this._isDisabled = false;
      this._seriesGetter = seriesGetter;
    }

    /**
     * Update volume detection state
     * @param {number} index - Bar index to check
     * @param {boolean} isLastBar - Whether this is the last bar
     */
    update(index, isLastBar) {
      if (this._haveAnyVolume || this._isDisabled) return;

      const volumeValue = this._seriesGetter.volume().get(index);

      if (0 !== volumeValue && Number.isFinite(volumeValue)) {
        this._haveAnyVolume = true;
      }

      if (isLastBar) {
        if (!this._haveAnyVolume) {
          stdLib.Std.error(
            "The data vendor doesn't provide volume data for this symbol."
          );
        }
        this._isDisabled = true;
      }
    }
  }
}
