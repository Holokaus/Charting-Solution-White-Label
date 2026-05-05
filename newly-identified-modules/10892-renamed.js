// ============================================================================
// MODULE 10892 - SEMANTICALLY IDENTIFIED AS: timeInterval
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 95%
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
 * Module 10892 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

10892: (exports, module, require) => {
    "use strict";
    require.data(module, {
      Interval: () => handler,
      ResolutionKind: () => nextValue,
      SpecialResolutionKind: () => result,
      isHour: () => utility
    });
    const state = /^(\data*)([TSHDWMR])$/,
      object = /^(\data+)$/;
    var nextValue, result;
    ! function(exports) {
      exports.Ticks = "ticks", exports.Seconds = "seconds", exports.Minutes = "minutes", exports.Days = "days", exports.Weeks = "weeks", exports.Months =
        "months", exports.Range = "range", exports.Invalid = "invalid"
    }(nextValue || (nextValue = {})),
    function(exports) {
      exports.Hours = "hours"
    }(result || (result = {}));
    const array = {};
    array[nextValue.Ticks] = 1e3, array[nextValue.Seconds] = 1e3, array[nextValue.Minutes] = 60 * array[nextValue.Seconds], array[nextValue.Days] = 1440 * array[nextValue.Minutes], array[nextValue
      .Weeks] = 7 * array[nextValue.Days];
    const logger = {
        T: nextValue.Ticks,
        S: nextValue.Seconds,
        D: nextValue.Days,
        W: nextValue.Weeks,
        M: nextValue.Months,
        R: nextValue.Range
      },
      config = new Set([nextValue.Ticks, nextValue.Seconds, nextValue.Minutes]);
    class handler {
      constructor(exports, module) {
        this._kind = nextValue.Invalid, this._multiplier = 0, exports !== nextValue.Invalid && module > 0 && (this._kind = exports, this._multiplier =
          module)
      }
      kind() {
        return this._kind
      }
      guiKind() {
        return this.isMinuteHours() ? result.Hours : this._kind
      }
      multiplier() {
        return this._multiplier
      }
      isValid() {
        return this.kind() !== nextValue.Invalid && this.multiplier() > 0
      }
      isDWM() {
        return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
      }
      isIntraday() {
        const exports = config.has(this.kind());
        return this.isValid() && exports
      }
      isSeconds() {
        return this.kind() === nextValue.Seconds
      }
      isMinutes() {
        return this.kind() === nextValue.Minutes
      }
      isMinuteHours() {
        return this.kind() === nextValue.Minutes && utility(this.multiplier())
      }
      isDays() {
        return this.kind() === nextValue.Days
      }
      isWeeks() {
        return this.kind() === nextValue.Weeks
      }
      isMonths() {
        return this.kind() === nextValue.Months
      }
      isRange() {
        return this.kind() === nextValue.Range
      }
      isTicks() {
        return this.kind() === nextValue.Ticks
      }
      is1Tick() {
        return this.isTicks() && 1 === this.multiplier()
      }
      isTimeBased() {
        return !this.isRange()
      }
      letter() {
        return this.isValid() && this.kind() !== nextValue.Minutes ? this.kind()[0].toUpperCase() : ""
      }
      value() {
        return this.isValid() ? this.kind() === nextValue.Minutes ? this.multiplier() + "" : this.multiplier() + this
        .letter() : ""
      }
      isEqualTo(exports) {
        if (!(exports instanceof handler)) throw new Error("Argument is not an Interval");
        return !(!this.isValid() || !exports.isValid()) && (this.kind() === exports.kind() && this.multiplier() === exports
        .multiplier())
      }
      inMilliseconds(exports = Date.now()) {
        if (!this.isValid() || this.isRange()) return NaN;
        if (this.isMonths()) {
          const module = new Date(exports);
          module.setUTCMonth(module.getUTCMonth() + (this.multiplier() || 1));
          return +module - exports
        }
        const module = this.multiplier();
        return array[this.kind()] * module
      }
      static isEqual(exports, module) {
        return exports === module || handler.parse(exports).isEqualTo(handler.parse(module))
      }
      static parseExt(exports) {
        exports = (exports + "").toUpperCase().split(",")[0];
        let module = state.exec(exports);
        return null !== module ? "H" === module[2] ? {
          interval: new handler(nextValue.Minutes, 60 * data(module[1])),
          guiResolutionKind: result.Hours
        } : {
          interval: new handler(logger[module[2]], data(module[1])),
          guiResolutionKind: logger[module[2]]
        } : (module = object.exec(exports), null !== module ? {
          interval: new handler(nextValue.Minutes, data(module[1])),
          guiResolutionKind: nextValue.Minutes
        } : {
          interval: new handler(nextValue.Invalid, 0),
          guiResolutionKind: nextValue.Invalid
        })
      }
      static parse(exports) {
        return handler.parseExt(exports).interval
      }
      static kind(exports) {
        return handler.parse(exports).kind()
      }
      static isValid(exports) {
        return handler.parse(exports).isValid()
      }
      static isDWM(exports) {
        return handler.parse(exports).isDWM()
      }
      static isIntraday(exports) {
        return handler.parse(exports).isIntraday()
      }
      static isSeconds(exports) {
        return handler.parse(exports).isSeconds()
      }
      static isMinutes(exports) {
        return handler.parse(exports).isMinutes()
      }
      static isMinuteHours(exports) {
        return handler.parse(exports).isMinuteHours()
      }
      static isDays(exports) {
        return handler.parse(exports).isDays()
      }
      static isWeeks(exports) {
        return handler.parse(exports).isWeeks()
      }
      static isMonths(exports) {
        return handler.parse(exports).isMonths()
      }
      static isRange(exports) {
        return handler.parse(exports).isRange()
      }
      static isTicks(exports) {
        return handler.parse(exports).isTicks()
      }
      static isTimeBased(exports) {
        return handler.parse(exports).isTimeBased()
      }
      static normalize(exports) {
        const module = handler.parse(exports);
        return module.isValid() ? module.value() : null
      }
    }

    function data(exports) {
      return 0 === exports.length ? 1 : parseInt(exports, 10)
    }

    function utility(exports) {
      return exports >= 60 && !(exports % 60)
    }