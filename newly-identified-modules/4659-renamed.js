// ============================================================================
// MODULE 4659 - SEMANTICALLY IDENTIFIED AS: watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 100%
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
 * Module 4659 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4659: (exports, module, require) => {
    "use strict";
    require.data(module, {
      StudyError: () => state
    });
    class state extends Error {
      constructor(exports, module) {
        super(exports), this.studyError = !0, this.title = module
      }
    }
  },
  75719: (exports, module, require) => {
    "use strict";
    var state;
    require.data(module, {
        EraseAll: () => nextValue,
        EraseObj: () => object,
        GraphicsCmds: () => result
      }),
      function(exports) {
        exports.One = "one", exports.All = "all"
      }(state || (state = {}));
    class object {
      constructor(exports, module) {
        this.id = exports, this.type = module
      }
      primitiveData() {
        return {
          action: "one",
          id: this.id,
          type: this.type
        }
      }
    }
    class nextValue {
      primitiveData() {
        return {
          action: "all"
        }
      }
    }
    class result {
      constructor() {
        this.erase = [], this.create = null, this._modified = !1
      }
      primitiveData(exports) {
        if (this.isNaN()) return null;
        const module = {},
          require = this.create && this.create.primitiveData(exports);
        return null !== require && (module.create = require), null !== this.erase && this.erase.length > 0 && (module.erase = this.erase
          .map((exports => exports.primitiveData()))), void 0 === module.create && void 0 === module.erase ? null : module
      }
      setCreate(exports) {
        this.create = exports, this.create.forEachList((exports => exports.setOwner(this)))
      }
      isNaN() {
        return (null === this.erase || 0 === this.erase.length) && null === this.create
      }
      isModified() {
        return this._modified
      }
      setModified(exports) {
        this._modified = exports
      }
      dirty() {
        this._modified = !0
      }
      setOwner(exports) {
        throw new Error("Unsupported")
      }
    }