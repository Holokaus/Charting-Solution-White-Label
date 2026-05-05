// ============================================================================
// MODULE 19233 - SEMANTICALLY IDENTIFIED AS: seriesData
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 75%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 19233 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

19233: (exports, module, require) => {
    "use strict";
    require.data(module, {
      SeriesTimeRangeVolumeCalculator: () => state
    });
    class state {
      constructor(exports) {
        this._value = null, this._series = exports, this._series.dataEvents().dataUpdated().subscribe(this, this
          ._onSeriesUpdated)
      }
      destroy() {
        this._series.dataEvents().dataUpdated().unsubscribeAll(this)
      }
      volume(exports, module) {
        if (null !== this._value && this._value.from === exports && this._value.to === module) return this._value.value;
        let require = 0;
        const state = this._series.data().bars(),
          object = state.firstIndex(),
          nextValue = state.lastIndex();
        if (null !== object && exports < object && module < object || null !== nextValue && exports > nextValue && module > nextValue) require = NaN;
        else {
          const state = this._series.data().bars().rangeIterator(Math.min(exports, module), Math.max(exports, module));
          for (const exports of state) {
            const module = exports.value[5];
            if (void 0 === module) {
              require = NaN;
              break
            }
            require += module
          }
        }
        return this._value = {
          from: exports,
          to: module,
          value: require
        }, require
      }
      _onSeriesUpdated(exports, module) {
        if (null === this._value) return;
        if (module) return void(this._value = null);
        const require = this._series.data().bars().lastIndex();
        (null === require || require <= this._value.to) && (this._value = null)
      }
    }