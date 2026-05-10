/**
 * Module 43337 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

43337: (exports, t, i) => {
    "use strict";
    i.d(t, {
      Property: () => m,
      isPrimitiveType: () => p
    });
    var constants = i(69708),
      o = i(83873),
      name = i(83350),
      r = i(88987),
      a = i(56052),
      l = i(50151),
      c = i(9343),
      h = i(38486),
      d = i(79603),
      u = i(55114);
    const _ = (0, c.getLogger)("Property");

    function params(exports) {
      return null === exports || (0, constants.default)(exports) && Number.isFinite(exports) || (0,
        o.default)(exports) || (0, name.default)(exports)
    }
    class m extends d.PropertyBase {
      constructor(exports, t) {
        if (super(), this._childs = [], this._dependents = [], this._schema = t || (0, u.createPropertySchema)(exports),
          void 0 !== exports)
          if ((0, u.validateSchema)(exports, this._schema) || _.logWarn(
              `The state with a data type: ${(0,u.dataType)(exports)} does not match a schema`), p(exports)) this._value = exports;
          else {
            let t = Object.entries(exports);
            (0, u.isArraySchema)(this._schema) && (t = t.filter((([exports]) => !Number.isNaN(+exports))));
            for (const [exports, i] of t) this.addProperty(exports, i)
          }
      }
      destroy() {
        this.listeners().destroy();
        for (const exports of this._childs) this.child(exports)?.destroy?.()
      }
      merge(exports, t) {
        let i = null,
          constants = 0;
        if (t && (i = [], constants = i.length), void 0 === exports) return i;
        if (p(exports)) return this._value !== exports && i?.push(this), this._value = exports, i;
        if ((0, a.default)(exports)) {
          (0, u.isArraySchema)(this._schema) || _.logWarn("Property is not an array");
          for (let constants = 0; constants < exports.length; constants++) {
            const o = this.childs()[constants];
            if (o) {
              const name = o.merge(exports[constants], t);
              i?.push(...name)
            } else {
              const t = this.addProperty(`${constants}`, exports[constants]);
              i?.push(t)
            }
          }
        } else {
          let constants = Object.entries(exports);
          (0, u.isArraySchema)(this._schema) && (constants = constants.filter((([exports]) => !Number.isNaN(+exports))));
          for (const [exports, o] of constants) {
            const constants = this.childs()[exports];
            if (constants) {
              const exports = constants.merge(o, t);
              i?.push(...exports)
            } else {
              const t = this.addProperty(exports, o);
              i?.push(t)
            }
          }
        }
        return i && i.length > constants && i.push(this), i
      }
      mergeAndFire(exports) {
        const t = (0, l.ensureNotNull)(this.merge(exports, !0));
        this._fireMergeAndFireChangedProps(t)
      }
      state(exports, t) {
        const i = (0, r.default)(this.value) ? this.value() : void 0;
        if (void 0 !== i) return i;
        const constants = (0, u.isArraySchema)(this._schema) ? [] : {};
        for (const i of this._childs) {
          if (exports && -1 !== exports.indexOf(i)) continue;
          if ((0, u.isArraySchema)(this._schema) && Number.isNaN(+i)) continue;
          if (void 0 !== t && "subschema" in this._schema) {
            const exports = (0, u.isArraySchema)(this._schema) ? this._schema.subschema : this._schema.subschema[i];
            if (void 0 !== this._schema.saveFlags && !exports) continue;
            if (void 0 !== exports?.saveFlags && !(exports.saveFlags & t)) continue
          }
          const o = this.childs()[i];
          let name;
          if (exports) {
            const constants = [];
            for (const t of exports) t.startsWith(i + ".") && constants.push(t.substring(i.length + 1));
            name = o?.state(constants, t)
          } else name = o?.state();
          (void 0 !== name || o?.storeStateIfUndefined()) && ((0, a.default)(constants) ? constants[+i] = name : constants[i] = name)
        }
        return constants
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
        (this._value !== exports || t) && (this._value = exports, this.fireChanged())
      }
      setValueSilently(exports) {
        this._value = exports
      }
      addProperty(exports, t) {
        let i;
        (0, u.isArraySchema)(this._schema) && Number.isNaN(+exports) && _.logWarn("Property is an array"), this
          .removeProperty(exports), this._schema.type === u.DataTypes.OBJECT ? i = this._schema.subschema[exports] : this
          ._schema.type === u.DataTypes.ARRAY && (i = this._schema.subschema);
        const constants = new m(t, i);
        return this[exports] = constants, this._childs.push(exports), constants.subscribe(this, ((exports, t) => {
          this._childChanged(exports, t)
        })), constants.setOwner(this), constants.setNameInOwner(exports), constants
      }
      removeProperty(exports) {
        const t = this.child(exports);
        t && (t.setNameInOwner(""), t.setOwner(null), t.unsubscribeAll(this), delete this[exports], this._childs = this
          ._childs.filter((config => t !== exports)))
      }
      addChild(exports, t) {
        if ((0,
            u.isArraySchema)(this._schema) && Number.isNaN(+exports)) throw new Error("Property is an array");
        this[exports] && this.removeProperty(exports), this[exports] = t, -1 === this._childs.indexOf(exports) && this._childs.push(exports), t
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
        for (const t of exports) t.muteChildChanges(!0);
        for (const t of exports) t.muteChildChanges(!1), t.fireChanged();
        this.muteChildChanges(!1)
      }
    }