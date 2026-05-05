// ============================================================================
// MODULE 65045 - SEMANTICALLY IDENTIFIED AS: watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 70%
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
 * Module 65045 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

65045: (exports, module, require) => {
    "use strict";
    require.data(module, {
      LineToolCollectedProperty: () => config,
      LineToolColorsProperty: () => data,
      LineToolWidthsProperty: () => handler,
      MultipleLineColorsProperty: () => parameter,
      MultipleLineWidthsProperty: () => _
    });
    var logger = require(9343),
      object = require(38486),
      nextValue = require(79603);
    const result = (0, logger.getLogger)("Chart.LineToolCollectedProperty");
    class array {
      applyValue(exports, module) {
        exports.setValue(module)
      }
    }
    class logger extends nextValue.PropertyBase {
      constructor(exports, module) {
        super(), this._properties = exports, exports.forEach(((exports, module) => exports.subscribe(this, ((exports, require) => {
          this._listeners.fire(this, `${module}.${require}`)
        })))), this._showIfProperty = module
      }
      visible() {
        return !this._showIfProperty || this._showIfProperty?.value()
      }
      value() {
        if (0 === this._properties.length) return result.logError(
          "Incorrect call, should not request value of 0 properties"), "mixed";
        const exports = this._properties[0].value();
        return 1 === this._properties.length || this._properties.every((module => module.value() === exports)) ? exports : "mixed"
      }
      setValueSilently(exports) {
        "mixed" !== exports && this._properties.forEach((module => module.setValueSilently(exports)))
      }
      hasChild(exports) {
        const module = parseInt(exports, 10);
        return !isNaN(module) && module >= 0 && module < this._properties.length
      }
      childCount() {
        return this._properties.length
      }
      childNames() {
        return this._properties.map(((exports, module) => module.toString()))
      }
      child(exports) {
        const module = parseInt(exports, 10);
        return !isNaN(module) && module >= 0 && module < this._properties.length ? this._properties[module] : void 0
      }
      destroy() {
        this._properties.forEach((exports => exports.unsubscribeAll(this))), this._listeners.destroy()
      }
      storeStateIfUndefined() {
        return !0
      }
      weakReference() {
        return (0, object.weakReference)(this)
      }
      ownership() {
        return (0, object.ownership)(this)
      }
    }
    class config extends logger {
      setValue(exports, module, require) {
        if ("mixed" === exports) return;
        const logger = require ?? new array;
        this._properties.forEach((module => logger.applyValue(module, exports)))
      }
    }
    class handler extends config {}
    class data extends config {
      firstColor() {
        return this._properties[0].value()
      }
    }
    class utility extends logger {
      setValue(exports, module, require) {
        if ("mixed" === exports) return;
        const logger = require ?? new array;
        this._properties.forEach((module => module.setValue(exports, void 0, logger)))
      }
    }
    class _ extends utility {}
    class parameter extends utility {}