/**
 * Module 4659 - Auto-beautified from TradingView webpack bundle
 *
 * @module 4659
 * @date 2026-04-23
 * @size 1057 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - StudyError (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  StudyError: () => s
});
class s extends Error {
  constructor(e, t) {
    super(e), this.studyError = !0, this.title = t
  }
}
},
75719: (e, t, i) => {
    "use strict";
    var s;
    i.d(t, {
        EraseAll: () => n,
        EraseObj: () => o,
        GraphicsCmds: () => r
      }),
      function(e) {
        e.One = "one", e.All = "all"
      }(s || (s = {}));
    class o {
      constructor(e, t) {
        this.id = e, this.type = t
      }
      primitiveData() {
        return {
          action: "one",
          id: this.id,
          type: this.type
        }
      }
    }
    class n {
      primitiveData() {
        return {
          action: "all"
        }
      }
    }
    class r {
      constructor() {
        this.erase = [], this.create = null, this._modified = !1
      }
      primitiveData(e) {
        if (this.isNaN()) return null;
        const t = {},
          i = this.create && this.create.primitiveData(e);
        return null !== i && (t.create = i), null !== this.erase && this.erase.length > 0 && (t.erase = this.erase.map((e => e.primitiveData()))), void 0 === t.create && void 0 === t.erase ? null : t
      }
      setCreate(e) {
        this.create = e, this.create.forEachList((e => e.setOwner(this)))
      }
      isNaN() {
        return (null === this.erase || 0 === this.erase.length) && null === this.create
      }
      isModified() {
        return this._modified
      }
      setModified(e) {
        this._modified = e
      }
      dirty() {
        this._modified = !0
      }
      setOwner(e) {
        throw new Error("Unsupported")
      }
