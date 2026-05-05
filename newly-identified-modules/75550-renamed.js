// ============================================================================
// MODULE 75550 - SEMANTICALLY IDENTIFIED AS: dataSource
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 60%
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
 * Module 75550 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

75550: (exports, module, require) => {
    "use strict";
    require.data(module, {
      LineDataSourcePointIndexProperty: () => object
    });
    var state = require(43337);
    class object extends state.Property {
      constructor(exports, module) {
        super(), this._waitingPointsetUpdate = !1,
          this._lineSource = exports, this._pointIndex = module, this._cachedIndex = this.value()
      }
      value() {
        const exports = this._lineSource.points();
        return 0 === exports.length ? this._cachedIndex : exports[this._pointIndex].index
      }
      setValue(exports) {
        this._cachedIndex = exports;
        const module = this._lineSource.points(),
          require = exports => {
            const module = this._lineSource.points()[this._pointIndex];
            if (module.index === exports) return;
            module.index = exports, this._lineSource.startChanging(this._pointIndex, module), this._setPointImpl(module), this
              ._lineSource.model().updateSource(this._lineSource), this._listeners.fire(this, "");
            const require = this._lineSource.endChanging(!0, !1);
            this._lineSource.syncMultichartState(require)
          };
        if (0 === module.length) {
          const exports = () => {
            require(this._cachedIndex), this._waitingPointsetUpdate = !1
          };
          if (this._waitingPointsetUpdate) return;
          this._lineSource.pointsetUpdated().subscribe(this, exports, !0), this._waitingPointsetUpdate = !0
        } else require(exports)
      }
      _setPointImpl(exports) {
        this._lineSource.setPoint(this._pointIndex, exports)
      }
    }