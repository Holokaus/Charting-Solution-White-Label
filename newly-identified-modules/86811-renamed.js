// ============================================================================
// MODULE 86811 - SEMANTICALLY IDENTIFIED AS: watchedValue
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
 * Module 86811 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86811: (exports, module, require) => {
    "use strict";
    require.data(module, {
      GraphicsObj: () => logger
    });
    var state = require(19979);
    class object {
      constructor(exports, module, require, state) {
        this._value = exports, this._name = module, this._owner = require, this._comparer = void 0 !== state ? state : (exports, module) => null == exports ?
          null != module : exports === module
      }
      getName() {
        return this._name
      }
      set(exports) {
        const module = this._comparer(this._value, exports);
        return module && this._owner.dirty(), this._value = exports, module
      }
      get() {
        return this._value
      }
    }
    class nextValue {
      constructor(exports, module, require) {
        this._owner = null, this._value = exports, this._name = module, this._owner = require
      }
      getName() {
        return this._name
      }
      set(exports) {
        return this._value !== exports && (this._value = exports, null !== this._owner && this._owner.dirty(), !0)
      }
      get() {
        return this._value
      }
    }
    class result extends object {
      constructor(exports, module, require, state) {
        super(exports, module, require, state)
      }
    }
    class array {
      constructor(exports) {
        this._owner = exports
      }
      createField(exports, module) {
        return new object(exports, module, this)
      }
      createDoubleField(exports, module) {
        return new object(exports, module, this, ((exports, module) => !state.Std.equal(exports, module)))
      }
      createDoubleArrayField(exports, module) {
        return new result(exports, module, this, ((exports, module) => {
          if (exports === module) return !1;
          const require = exports.length;
          if (module.length !== require) return !0;
          for (let object = 0; object < require; object++) {
            const require = exports[object],
              nextValue = module[object];
            if (!state.Std.equal(require, nextValue)) return !0
          }
          return !1
        }))
      }
      createTimeField(exports, module) {
        return new nextValue(exports, module, this)
      }
      dirty() {
        null !== this._owner && this._owner.dirty()
      }
      setOwner(exports) {
        this._owner = exports
      }
    }
    class logger {
      constructor(exports) {
        this._mixinJSONObject = new array(this), this._state = 0, this._owner = null, this._gen = exports, this._id = exports
          .nextGraphicsObjId(), this._id2 = this._mixinJSONObject.createField(this.id(), "id")
      }
      dirty() {
        null !== this._owner && this._owner.dirty()
      }
      setOwner(exports) {
        this._owner = exports
      }
      id() {
        return this._id
      }
      unsetOwner(exports) {
        this._owner === exports && (this._owner = null)
      }
      state() {
        return this._state
      }
      erase() {
        1 === this._state && this._gen.pushEraseObjCmd(this._id, this.jsonName()), this._state = 2, this.dirty()
      }
      markAsPosted() {
        1 !== this._state && (this._state = 1, this.dirty())
      }
      isErased() {
        return 2 === this._state
      }
      isPosted() {
        return 1 === this._state
      }
      isNaN() {
        return !1
      }
      _processObjUpdate() {
        1 === this._state && (this._gen.pushEraseObjCmd(this._id, this.jsonName()), this._id = this._gen
          .nextGraphicsObjId(), this._id2.set(this._id), this._state = 0), this.dirty()
      }
    }