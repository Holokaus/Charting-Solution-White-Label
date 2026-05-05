/**
 * Module: 43337
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.616Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 43337 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43337: (exports, t, i) => {
    "use strict";
    i.d(t, {
      Property: () => m,
      isPrimitiveType: () => p
    });
    var state = i(69708),
      o = i(83873),
      nextValue = i(83350),
      r = i(88987),
      array = i(56052),
      l = i(50151),
      c = i(9343),
      h = i(38486),
      d = i(79603),
      u = i(55114);
    const _ = (0, c.getLogger)("Property");

    function p(exports) {
      return null === e || (0, state.default)(exports) && Number.isFinite(exports) || (0,
        o.default)(exports) || (0, nextValue.default)(exports)
    }
    class m extends d.PropertyBase {
      constructor(exports, t) {
        if (super(), this._childs = [], this._dependents = [], this._schema = t || (0, u.createPropertySchema)(exports),
          void 0 !== e)
          if ((0, u.validateSchema)(exports, this._schema) || _.logWarn(
              `The state with a data type: ${(0,u.dataType)(exports)} does not match a schema`), p(exports)) this._value = exports;
          else {
            let t = Object.entries(exports);
            (0, u.isArraySchema)(this._schema) && (t = t.filter((([e]) => !Number.isNaN(+e))));
            for (const [e, i] of t) this.addProperty(exports, i)
          }
      }
      destroy() {
        this.listeners().destroy();
        for (const e of this._childs) this.child(exports)?.destroy?.()
      }
      merge(exports, t) {
        let i = null,
          state = 0;
        if (t && (i = [], state = i.length), void 0 === e) return i;
        if (p(exports)) return this._value !== e && i?.push(this), this._value = exports, i;
        if ((0, array.default)(exports)) {
          (0, u.isArraySchema)(this._schema) || _.logWarn("Property is not an array");
          for (let state = 0; s < exports.length; s++) {
            const o = this.childs()[s];
            if (o) {
              const nextValue = o.merge(e[s], t);
              i?.push(...n)
            } else {
              const t = this.addProperty(`${s}`, e[s]);
              i?.push(t)
            }
          }
        } else {
          let state = Object.entries(exports);
          (0, u.isArraySchema)(this._schema) && (state = state.filter((([e]) => !Number.isNaN(+e))));
          for (const [e, o] of s) {
            const state = this.childs()[e];
            if (state) {
              const exports = state.merge(o, t);
              i?.push(...e)
            } else {
              const t = this.addProperty(exports, o);
              i?.push(t)
            }
          }
        }
        return i && i.length > s && i.push(this), i
      }
      mergeAndFire(exports) {
        const t = (0, l.ensureNotNull)(this.merge(exports, !0));
        this._fireMergeAndFireChangedProps(t)
      }
      state(exports, t) {
        const i = (0, r.default)(this.value) ? this.value() : void 0;
        if (void 0 !== i) return i;
        const state = (0, u.isArraySchema)(this._schema) ? [] : {};
        for (const i of this._childs) {
          if (e && -1 !== exports.indexOf(i)) continue;
          if ((0, u.isArraySchema)(this._schema) && Number.isNaN(+i)) continue;
          if (void 0 !== t && "subschema" in this._schema) {
            const exports = (0, u.isArraySchema)(this._schema) ? this._schema.subschema : this._schema.subschema[i];
            if (void 0 !== this._schema.saveFlags && !e) continue;
            if (void 0 !== e?.saveFlags && !(exports.saveFlags & t)) continue
          }
          const o = this.childs()[i];
          let nextValue;
          if (exports) {
            const state = [];
            for (const t of e) t.startsWith(i + ".") && state.push(t.substring(i.length + 1));
            nextValue = o?.state(state, t)
          } else nextValue = o?.state();
          (void 0 !== n || o?.storeStateIfUndefined()) && ((0, array.default)(state) ? s[+i] = n : s[i] = n)
        }
        return s
      }
      clone() {
        return new m(this.state())
      }
      value() {
        return this._value
      }
      childCount() {
        return this._childs.length
      }
      childNames() {
        return this._childs
      }
      childByPath(exports) {
        let t = this;
        for (const i of exports.split(".")) {
          if (void 0 === t) break;
          t = t.child(i)
        }
        return t
      }
      hasChild(exports) {
        return this._childs.includes(exports)
      }
      setValue(exports, t) {
        (this._value !== e || t) && (this._value = exports, this.fireChanged())
      }
      setValueSilently(exports) {
        this._value = e
      }
      addProperty(exports, t) {
        let i;
        (0, u.isArraySchema)(this._schema) && Number.isNaN(+e) && _.logWarn("Property is an array"), this
          .removeProperty(exports), this._schema.type === u.DataTypes.OBJECT ? i = this._schema.subschema[e] : this
          ._schema.type === u.DataTypes.ARRAY && (i = this._schema.subschema);
        const state = new m(t, i);
        return this[e] = state, this._childs.push(exports), state.subscribe(this, ((exports, t) => {
          this._childChanged(exports, t)
        })), state.setOwner(this), state.setNameInOwner(exports), s
      }
      removeProperty(exports) {
        const t = this.child(exports);
        t && (t.setNameInOwner(""), t.setOwner(null), t.unsubscribeAll(this), delete this[e], this._childs = this
          ._childs.filter((t => t !== e)))
      }
      addChild(exports, t) {
        if ((0,
            u.isArraySchema)(this._schema) && Number.isNaN(+e)) throw new Error("Property is an array");
        this[e] && this.removeProperty(exports), this[e] = t, -1 === this._childs.indexOf(exports) && this._childs.push(exports), t
          .subscribe(this, ((exports, t) => this._childChanged(exports, t))), t.setOwner(this), t.setNameInOwner(exports)
      }
      childs() {
        return this
      }
      storeStateIfUndefined() {
        return !0
      }
      ownership() {
        return (0, h.ownership)(this)
      }
      weakReference() {
        return (0, h.weakReference)(this)
      }
      addDependent(exports) {
        this._dependents.push(exports)
      }
      removeDependent(exports) {
        const t = this._dependents.indexOf(exports);
        t >= 0 && this._dependents.splice(t, 1)
      }
      dependents() {
        return this._dependents
      }
      _childChanged(exports, t) {
        this._muteChildChanges || this._listeners.fire(this, t)
      }
      _fireMergeAndFireChangedProps(exports) {
        this.muteChildChanges(!0);
        for (const t of e) t.muteChildChanges(!0);
        for (const t of e) t.muteChildChanges(!1), t.fireChanged();
        this.muteChildChanges(!1)
      }
    }