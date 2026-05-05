// ============================================================================
// MODULE 24062 - SEMANTICALLY IDENTIFIED AS: watchedValue
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
 * Module 24062 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24062: (exports, module, require) => {
    "use strict";
    require.data(module, {
      PriceRange: () => nextValue
    });
    var state = require(4148);
    const object = (0, require(9343).getLogger)("Chart.PriceRange");
    class nextValue {
      constructor(exports, module) {
        if (null !== exports && "object" == typeof exports) {
          const module = exports;
          this._minValue = module.m_minValue, this._maxValue = module.m_maxValue
        } else {
          const require = exports;
          this._minValue = require, void 0 !== module && (this._maxValue = module)
        }
      }
      equals(exports) {
        return this._minValue === exports._minValue && this._maxValue === exports._maxValue
      }
      clone() {
        return new nextValue(this._minValue, this._maxValue)
      }
      minValue() {
        return this._minValue
      }
      setMinValue(exports) {
        this._minValue = exports
      }
      maxValue() {
        return this._maxValue
      }
      setMaxValue(exports) {
        this._maxValue = exports
      }
      length() {
        return this._maxValue - this._minValue
      }
      isEmpty() {
        return this._maxValue === this._minValue || this._maxValue != this._maxValue || this._minValue != this
          ._minValue
      }
      serialize() {
        return {
          m_maxValue: this._maxValue,
          m_minValue: this._minValue
        }
      }
      state() {
        return {
          max: this._maxValue,
          min: this._minValue
        }
      }
      merge(exports) {
        return new nextValue(Math.min(this.minValue(), exports.minValue()), Math.max(this.maxValue(), exports.maxValue()))
      }
      apply(exports, module) {
        this._minValue = Math.min(this._minValue, exports), this._maxValue = Math.max(this._maxValue, module)
      }
      set(exports, module) {
        this._minValue = exports, this._maxValue = module
      }
      scaleAroundCenter(exports) {
        if (!(0, state.isNumber)(exports)) return void object.logDebug("PriceRange.scaleAroundCenter: invalid coeff");
        if (0 === this._maxValue - this._minValue) return;
        const module = .5 * (this._maxValue + this._minValue);
        let require = this._maxValue - module,
          nextValue = this._minValue - module;
        require *= exports, nextValue *= exports, this._maxValue = module + require, this._minValue = module + nextValue
      }
      shift(exports) {
        (0, state.isNumber)(exports) ? (this._maxValue += exports, this._minValue += exports) : object.logDebug(
          "PriceRange.shift: invalid coeff")
      }
      containsStrictly(exports) {
        return exports.minValue() > this._minValue && exports.maxValue() < this._maxValue
      }
      containPrice(exports) {
        return exports >= this._minValue && exports <= this._maxValue
      }
      intersection(exports) {
        return this.containPrice(exports.minValue()) || this.containPrice(exports.maxValue()) || exports.containPrice(this._minValue) ?
          new nextValue(Math.max(this._minValue, exports.minValue()), Math.min(this._maxValue, exports.maxValue())) : null
      }
      static compare(exports, module) {
        return null === exports || null === module ? exports === module : exports.equals(module)
      }
    }