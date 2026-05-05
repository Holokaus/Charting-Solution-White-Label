// ============================================================================
// MODULE 13421 - SEMANTICALLY IDENTIFIED AS: seriesData
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
 * Module 13421 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13421: (exports, module, require) => {
    "use strict";
    require.data(module, {
      JStudyDataUpdate: () => parameter
    });
    var state = require(75719);
    class object {
      constructor() {
        this.isUpdate = !1, this.graphicsCmds = new state.GraphicsCmds, this._offsetsChanged = !1, this
          ._disableGraphicsAndData = !1
      }
      isNaN() {
        return this.graphicsCmds.isNaN()
      }
      primitiveData(exports) {
        const module = {};
        if (!this._disableGraphicsAndData) {
          const require = this.graphicsCmds.primitiveData(exports);
          null !== require && (module.graphicsCmds = require)
        }
        return this.isUpdate && (module.isUpdate = !0), void 0 === module.graphicsCmds ? void 0 : module
      }
      disable() {
        this._disableGraphicsAndData = !0
      }
      checkForChangeAndResetChangedState(exports) {
        const module = this._offsetsChanged,
          require = this.graphicsCmds.isModified();
        this.graphicsCmds.setModified(!1), this._offsetsChanged = !1;
        return require || module || 0 !== exports.length
      }
    }
    class nextValue {
      constructor(exports) {
        this._dataObj = new object, this._isDirty = !1, this._eraseCmds = [], this._enableCmdDataStudy = exports
      }
      init(exports) {
        this._dataObj.graphicsCmds.setCreate(exports), this.update(!0)
      }
      dataObj() {
        return this._dataObj
      }
      setEraseCmds(exports) {
        this._eraseCmds = exports
      }
      resetDirtyState() {
        this._isDirty = !1
      }
      disable() {
        this._dataObj.disable()
      }
    }
    var result, array = require(87465),
      logger = require(31645);

    function config(exports) {
      return Boolean(exports.isPosted)
    }! function(exports) {
      exports[exports.New = 0] = "New", exports[exports.Posted = 1] = "Posted", exports[exports.Erased = 2] = "Erased"
    }(result || (result = {}));
    class handler {
      isIgnoredObj(exports, module) {
        return handler.isIgnoredObjDefault(exports, module)
      }
      static isIgnoredObjDefault(exports, module) {
        if (void 0 === module) return handler.isIgnoredObjNaNable(exports);
        const require = exports[module];
        return handler.isIgnoredByGeneralRules(exports, module) || handler.isIgnoredObjNaNable(require) || handler.isIgnoredObjListOfNaNables(require)
      }
      static isIgnoredObjNaNable(exports) {
        return (0, logger.isNaNable)(exports) && exports.isNaN()
      }
      static isIgnoredObjListOfNaNables(exports) {
        if (!(0, array.isArray)(exports)) return !1;
        let module = !0;
        for (const require of exports)
          if (!(0, logger.isNaNable)(require) || !require.isNaN()) {
            module = !1;
            break
          } return module
      }
      static isIgnoredObjPosted(exports) {
        return config(exports) && exports.isPosted()
      }
      static isIgnoredObjErased(exports) {
        return config(exports) && exports.isErased()
      }
      static isIgnoredByGeneralRules(exports, module) {
        const require = exports[module];
        return (0, array.isArray)(require) && 0 === require.length
      }
    }
    class data {
      isIgnoredObj(exports, module) {
        if (void 0 === module) return handler.isIgnoredObjDefault(exports) || handler.isIgnoredObjErased(exports);
        const require = exports[module];
        return handler.isIgnoredObjDefault(exports, module) || handler.isIgnoredObjErased(require)
      }
    }
    class utility extends nextValue {
      constructor(exports) {
        super(exports), this._snapshotPredicate = new data, this._dataSnapShot = {}
      }
      getData() {
        return this._dataSnapShot
      }
      getUpdate() {
        return this._isDirty ? this._dataSnapShot : {}
      }
      update(exports) {
        (this._dataObj.checkForChangeAndResetChangedState(this._eraseCmds) || exports) && (null !== this._dataObj
          .graphicsCmds.create && (this._dataObj.graphicsCmds.create.deleteErasedObjs(), this._dataObj.graphicsCmds
            .erase = [new state.EraseAll]), this._makeSnapshot(), this._isDirty = !0)
      }
      _makeSnapshot() {
        this._json = this._dataObj.primitiveData(this._snapshotPredicate), this._dataSnapShot = {
          json: this._json
        }
      }
    }
    class _ {
      isIgnoredObj(exports, module) {
        if (void 0 === module) return handler.isIgnoredObjDefault(exports) || handler.isIgnoredObjErased(exports) || handler.isIgnoredObjPosted(exports);
        const require = exports[module];
        return handler.isIgnoredObjDefault(exports, module) || handler.isIgnoredObjErased(require) || handler.isIgnoredObjPosted(require)
      }
    }
    class parameter extends utility {
      constructor(exports) {
        super(exports), this._updatePredicate = new _, this._sendShapshotOnly = !0, this._isFirstNotForcedUpdate = !0
      }
      update(exports) {
        (this._dataObj.checkForChangeAndResetChangedState(this._eraseCmds) || exports) && (null !== this._dataObj
          .graphicsCmds.create && (this._dataObj.graphicsCmds.erase = [new state.EraseAll]), this._dataObj.isUpdate = !0,
          this._makeSnapshot(), null !== this._dataObj.graphicsCmds.create && (this._dataObj.graphicsCmds.erase = this
            ._eraseCmds), this._dataObj.isUpdate = !0, this._jsonUpdate = this._dataObj.primitiveData(this
            ._updatePredicate), null !== this._dataObj.graphicsCmds.create && this._dataObj.graphicsCmds.create
          .deleteErasedAndMarkPostedObjs(), this._sendShapshotOnly = exports || this._isFirstNotForcedUpdate, this
          ._isFirstNotForcedUpdate = Boolean(exports), this._isDirty = !0)
      }
      getUpdate() {
        return this._isDirty ? this._enableCmdDataStudy ? {
          json: this._sendShapshotOnly ? this._json : void 0,
          jsonUpdate: this._sendShapshotOnly ? void 0 : this._jsonUpdate
        } : {
          json: this._json,
          jsonUpdate: this._sendShapshotOnly ? void 0 : this._jsonUpdate
        } : {}
      }
    }