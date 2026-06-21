/**
 * Module 43337 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43337: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      Property: () => m,
      isPrimitiveType: () => p
    });
    var watchedValue_s = i(69708),
      o = i(83873),
      watchedValue_n = i(83350),
      r = i(88987),
      a = i(56052),
      l = i(50151),
      c = i(9343),
      h = i(38486),
      d = i(79603),
      u = i(55114);
    const _ = (0, c.getLogger)("Property");

    function p(watchedValue_e) {
      return null === watchedValue_e || (0, watchedValue_s.default)(watchedValue_e) && Number.isFinite(watchedValue_e) || (0,
        o.default)(watchedValue_e) || (0, watchedValue_n.default)(watchedValue_e)
    }
    class m extends d.PropertyBase {
      constructor(watchedValue_e, t) {
        if (super(), this._childs = [], this._dependents = [], this._schema = t || (0, u.createPropertySchema)(watchedValue_e),
          void 0 !== watchedValue_e)
          if ((0, u.validateSchema)(watchedValue_e, this._schema) || _.logWarn(
              `The state with a data type: ${(0,u.dataType)(watchedValue_e)} does not match a schema`), p(watchedValue_e)) this._value = watchedValue_e;
          else {
            let t = Object.entries(watchedValue_e);
            (0, u.isArraySchema)(this._schema) && (t = t.filter((([watchedValue_e]) => !Number.isNaN(+watchedValue_e))));
            for (const [watchedValue_e, i] of t) this.addProperty(watchedValue_e, i)
          }
      }
      destroy() {
        this.listeners().destroy();
        for (const watchedValue_e of this._childs) this.child(watchedValue_e)?.destroy?.()
      }
      merge(watchedValue_e, t) {
        let i = null,
          watchedValue_s = 0;
        if (t && (i = [], watchedValue_s = i.length), void 0 === watchedValue_e) return i;
        if (p(watchedValue_e)) return this._value !== watchedValue_e && i?.push(this), this._value = watchedValue_e, i;
        if ((0, a.default)(watchedValue_e)) {
          (0, u.isArraySchema)(this._schema) || _.logWarn("Property is not an array");
          for (let watchedValue_s = 0; watchedValue_s < watchedValue_e.length; watchedValue_s++) {
            const o = this.childs()[watchedValue_s];
            if (o) {
              const watchedValue_n = o.merge(watchedValue_e[watchedValue_s], t);
              i?.push(...watchedValue_n)
            } else {
              const t = this.addProperty(`${watchedValue_s}`, watchedValue_e[watchedValue_s]);
              i?.push(t)
            }
          }
        } else {
          let watchedValue_s = Object.entries(watchedValue_e);
          (0, u.isArraySchema)(this._schema) && (watchedValue_s = watchedValue_s.filter((([watchedValue_e]) => !Number.isNaN(+watchedValue_e))));
          for (const [watchedValue_e, o] of watchedValue_s) {
            const watchedValue_s = this.childs()[watchedValue_e];
            if (watchedValue_s) {
              const watchedValue_e = watchedValue_s.merge(o, t);
              i?.push(...watchedValue_e)
            } else {
              const t = this.addProperty(watchedValue_e, o);
              i?.push(t)
            }
          }
        }
        return i && i.length > watchedValue_s && i.push(this), i
      }
      mergeAndFire(watchedValue_e) {
        const t = (0, l.ensureNotNull)(this.merge(watchedValue_e, !0));
        this._fireMergeAndFireChangedProps(t)
      }
      state(watchedValue_e, t) {
        const i = (0, r.default)(this.value) ? this.value() : void 0;
        if (void 0 !== i) return i;
        const watchedValue_s = (0, u.isArraySchema)(this._schema) ? [] : {};
        for (const i of this._childs) {
          if (watchedValue_e && -1 !== watchedValue_e.indexOf(i)) continue;
          if ((0, u.isArraySchema)(this._schema) && Number.isNaN(+i)) continue;
          if (void 0 !== t && "subschema" in this._schema) {
            const watchedValue_e = (0, u.isArraySchema)(this._schema) ? this._schema.subschema : this._schema.subschema[i];
            if (void 0 !== this._schema.saveFlags && !watchedValue_e) continue;
            if (void 0 !== watchedValue_e?.saveFlags && !(watchedValue_e.saveFlags & t)) continue
          }
          const o = this.childs()[i];
          let watchedValue_n;
          if (watchedValue_e) {
            const watchedValue_s = [];
            for (const t of watchedValue_e) t.startsWith(i + ".") && watchedValue_s.push(t.substring(i.length + 1));
            watchedValue_n = o?.state(watchedValue_s, t)
          } else watchedValue_n = o?.state();
          (void 0 !== watchedValue_n || o?.storeStateIfUndefined()) && ((0, a.default)(watchedValue_s) ? watchedValue_s[+i] = watchedValue_n : watchedValue_s[i] = watchedValue_n)
        }
        return watchedValue_s
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
      childByPath(watchedValue_e) {
        let t = this;
        for (const i of watchedValue_e.split(".")) {
          if (void 0 === t) break;
          t = t.child(i)
        }
        return t
      }
      hasChild(watchedValue_e) {
        return this._childs.includes(watchedValue_e)
      }
      setValue(watchedValue_e, t) {
        (this._value !== watchedValue_e || t) && (this._value = watchedValue_e, this.fireChanged())
      }
      setValueSilently(watchedValue_e) {
        this._value = watchedValue_e
      }
      addProperty(watchedValue_e, t) {
        let i;
        (0, u.isArraySchema)(this._schema) && Number.isNaN(+watchedValue_e) && _.logWarn("Property is an array"), this
          .removeProperty(watchedValue_e), this._schema.type === u.DataTypes.OBJECT ? i = this._schema.subschema[watchedValue_e] : this
          ._schema.type === u.DataTypes.ARRAY && (i = this._schema.subschema);
        const watchedValue_s = new m(t, i);
        return this[watchedValue_e] = watchedValue_s, this._childs.push(watchedValue_e), watchedValue_s.subscribe(this, ((watchedValue_e, t) => {
          this._childChanged(watchedValue_e, t)
        })), watchedValue_s.setOwner(this), watchedValue_s.setNameInOwner(watchedValue_e), watchedValue_s
      }
      removeProperty(watchedValue_e) {
        const t = this.child(watchedValue_e);
        t && (t.setNameInOwner(""), t.setOwner(null), t.unsubscribeAll(this), delete this[watchedValue_e], this._childs = this
          ._childs.filter((t => t !== watchedValue_e)))
      }
      addChild(watchedValue_e, t) {
        if ((0,
            u.isArraySchema)(this._schema) && Number.isNaN(+watchedValue_e)) throw new Error("Property is an array");
        this[watchedValue_e] && this.removeProperty(watchedValue_e), this[watchedValue_e] = t, -1 === this._childs.indexOf(watchedValue_e) && this._childs.push(watchedValue_e), t
          .subscribe(this, ((watchedValue_e, t) => this._childChanged(watchedValue_e, t))), t.setOwner(this), t.setNameInOwner(watchedValue_e)
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
      addDependent(watchedValue_e) {
        this._dependents.push(watchedValue_e)
      }
      removeDependent(watchedValue_e) {
        const t = this._dependents.indexOf(watchedValue_e);
        t >= 0 && this._dependents.splice(t, 1)
      }
      dependents() {
        return this._dependents
      }
      _childChanged(watchedValue_e, t) {
        this._muteChildChanges || this._listeners.fire(this, t)
      }
      _fireMergeAndFireChangedProps(watchedValue_e) {
        this.muteChildChanges(!0);
        for (const t of watchedValue_e) t.muteChildChanges(!0);
        for (const t of watchedValue_e) t.muteChildChanges(!1), t.fireChanged();
        this.muteChildChanges(!1)
      }
    }