/**
 * Module 43337 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43337: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      Property: () => watchedValue_m,
      isPrimitiveType: () => watchedValue_p
    });
    var watchedValue_s = watchedValue_i(69708),
      watchedValue_o = watchedValue_i(83873),
      watchedValue_n = watchedValue_i(83350),
      watchedValue_r = watchedValue_i(88987),
      watchedValue_a = watchedValue_i(56052),
      watchedValue_l = watchedValue_i(50151),
      watchedValue_c = watchedValue_i(9343),
      watchedValue_h = watchedValue_i(38486),
      watchedValue_d = watchedValue_i(79603),
      watchedValue_u = watchedValue_i(55114);
    const _ = (0, watchedValue_c.getLogger)("Property");

    function watchedValue_p(watchedValue_e) {
      return null === watchedValue_e || (0, watchedValue_s.default)(watchedValue_e) && Number.isFinite(watchedValue_e) || (0,
        watchedValue_o.default)(watchedValue_e) || (0, watchedValue_n.default)(watchedValue_e)
    }
    class watchedValue_m extends watchedValue_d.PropertyBase {
      constructor(watchedValue_e, watchedValue_t) {
        if (super(), this._childs = [], this._dependents = [], this._schema = watchedValue_t || (0, watchedValue_u.createPropertySchema)(watchedValue_e),
          void 0 !== watchedValue_e)
          if ((0, watchedValue_u.validateSchema)(watchedValue_e, this._schema) || _.logWarn(
              `The state with watchedValue_a data type: ${(0,watchedValue_u.dataType)(watchedValue_e)} does not match watchedValue_a schema`), watchedValue_p(watchedValue_e)) this._value = watchedValue_e;
          else {
            let watchedValue_t = Object.entries(watchedValue_e);
            (0, watchedValue_u.isArraySchema)(this._schema) && (watchedValue_t = watchedValue_t.filter((([watchedValue_e]) => !Number.isNaN(+watchedValue_e))));
            for (const [watchedValue_e, watchedValue_i] of watchedValue_t) this.addProperty(watchedValue_e, watchedValue_i)
          }
      }
      destroy() {
        this.listeners().destroy();
        for (const watchedValue_e of this._childs) this.child(watchedValue_e)?.destroy?.()
      }
      merge(watchedValue_e, watchedValue_t) {
        let watchedValue_i = null,
          watchedValue_s = 0;
        if (watchedValue_t && (watchedValue_i = [], watchedValue_s = watchedValue_i.length), void 0 === watchedValue_e) return watchedValue_i;
        if (watchedValue_p(watchedValue_e)) return this._value !== watchedValue_e && watchedValue_i?.push(this), this._value = watchedValue_e, watchedValue_i;
        if ((0, watchedValue_a.default)(watchedValue_e)) {
          (0, watchedValue_u.isArraySchema)(this._schema) || _.logWarn("Property is not an array");
          for (let watchedValue_s = 0; watchedValue_s < watchedValue_e.length; watchedValue_s++) {
            const watchedValue_o = this.childs()[watchedValue_s];
            if (watchedValue_o) {
              const watchedValue_n = watchedValue_o.merge(watchedValue_e[watchedValue_s], watchedValue_t);
              watchedValue_i?.push(...watchedValue_n)
            } else {
              const watchedValue_t = this.addProperty(`${watchedValue_s}`, watchedValue_e[watchedValue_s]);
              watchedValue_i?.push(watchedValue_t)
            }
          }
        } else {
          let watchedValue_s = Object.entries(watchedValue_e);
          (0, watchedValue_u.isArraySchema)(this._schema) && (watchedValue_s = watchedValue_s.filter((([watchedValue_e]) => !Number.isNaN(+watchedValue_e))));
          for (const [watchedValue_e, watchedValue_o] of watchedValue_s) {
            const watchedValue_s = this.childs()[watchedValue_e];
            if (watchedValue_s) {
              const watchedValue_e = watchedValue_s.merge(watchedValue_o, watchedValue_t);
              watchedValue_i?.push(...watchedValue_e)
            } else {
              const watchedValue_t = this.addProperty(watchedValue_e, watchedValue_o);
              watchedValue_i?.push(watchedValue_t)
            }
          }
        }
        return watchedValue_i && watchedValue_i.length > watchedValue_s && watchedValue_i.push(this), watchedValue_i
      }
      mergeAndFire(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_l.ensureNotNull)(this.merge(watchedValue_e, !0));
        this._fireMergeAndFireChangedProps(watchedValue_t)
      }
      state(watchedValue_e, watchedValue_t) {
        const watchedValue_i = (0, watchedValue_r.default)(this.value) ? this.value() : void 0;
        if (void 0 !== watchedValue_i) return watchedValue_i;
        const watchedValue_s = (0, watchedValue_u.isArraySchema)(this._schema) ? [] : {};
        for (const watchedValue_i of this._childs) {
          if (watchedValue_e && -1 !== watchedValue_e.indexOf(watchedValue_i)) continue;
          if ((0, watchedValue_u.isArraySchema)(this._schema) && Number.isNaN(+watchedValue_i)) continue;
          if (void 0 !== watchedValue_t && "subschema" in this._schema) {
            const watchedValue_e = (0, watchedValue_u.isArraySchema)(this._schema) ? this._schema.subschema : this._schema.subschema[watchedValue_i];
            if (void 0 !== this._schema.saveFlags && !watchedValue_e) continue;
            if (void 0 !== watchedValue_e?.saveFlags && !(watchedValue_e.saveFlags & watchedValue_t)) continue
          }
          const watchedValue_o = this.childs()[watchedValue_i];
          let watchedValue_n;
          if (watchedValue_e) {
            const watchedValue_s = [];
            for (const watchedValue_t of watchedValue_e) watchedValue_t.startsWith(watchedValue_i + ".") && watchedValue_s.push(watchedValue_t.substring(watchedValue_i.length + 1));
            watchedValue_n = watchedValue_o?.state(watchedValue_s, watchedValue_t)
          } else watchedValue_n = watchedValue_o?.state();
          (void 0 !== watchedValue_n || watchedValue_o?.storeStateIfUndefined()) && ((0, watchedValue_a.default)(watchedValue_s) ? watchedValue_s[+watchedValue_i] = watchedValue_n : watchedValue_s[watchedValue_i] = watchedValue_n)
        }
        return watchedValue_s
      }
      clone() {
        return new watchedValue_m(this.state())
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
        let watchedValue_t = this;
        for (const watchedValue_i of watchedValue_e.split(".")) {
          if (void 0 === watchedValue_t) break;
          watchedValue_t = watchedValue_t.child(watchedValue_i)
        }
        return watchedValue_t
      }
      hasChild(watchedValue_e) {
        return this._childs.includes(watchedValue_e)
      }
      setValue(watchedValue_e, watchedValue_t) {
        (this._value !== watchedValue_e || watchedValue_t) && (this._value = watchedValue_e, this.fireChanged())
      }
      setValueSilently(watchedValue_e) {
        this._value = watchedValue_e
      }
      addProperty(watchedValue_e, watchedValue_t) {
        let watchedValue_i;
        (0, watchedValue_u.isArraySchema)(this._schema) && Number.isNaN(+watchedValue_e) && _.logWarn("Property is an array"), this
          .removeProperty(watchedValue_e), this._schema.type === watchedValue_u.DataTypes.OBJECT ? watchedValue_i = this._schema.subschema[watchedValue_e] : this
          ._schema.type === watchedValue_u.DataTypes.ARRAY && (watchedValue_i = this._schema.subschema);
        const watchedValue_s = new watchedValue_m(watchedValue_t, watchedValue_i);
        return this[watchedValue_e] = watchedValue_s, this._childs.push(watchedValue_e), watchedValue_s.subscribe(this, ((watchedValue_e, watchedValue_t) => {
          this._childChanged(watchedValue_e, watchedValue_t)
        })), watchedValue_s.setOwner(this), watchedValue_s.setNameInOwner(watchedValue_e), watchedValue_s
      }
      removeProperty(watchedValue_e) {
        const watchedValue_t = this.child(watchedValue_e);
        watchedValue_t && (watchedValue_t.setNameInOwner(""), watchedValue_t.setOwner(null), watchedValue_t.unsubscribeAll(this), delete this[watchedValue_e], this._childs = this
          ._childs.filter((watchedValue_t => watchedValue_t !== watchedValue_e)))
      }
      addChild(watchedValue_e, watchedValue_t) {
        if ((0,
            watchedValue_u.isArraySchema)(this._schema) && Number.isNaN(+watchedValue_e)) throw new Error("Property is an array");
        this[watchedValue_e] && this.removeProperty(watchedValue_e), this[watchedValue_e] = watchedValue_t, -1 === this._childs.indexOf(watchedValue_e) && this._childs.push(watchedValue_e), watchedValue_t
          .subscribe(this, ((watchedValue_e, watchedValue_t) => this._childChanged(watchedValue_e, watchedValue_t))), watchedValue_t.setOwner(this), watchedValue_t.setNameInOwner(watchedValue_e)
      }
      childs() {
        return this
      }
      storeStateIfUndefined() {
        return !0
      }
      ownership() {
        return (0, watchedValue_h.ownership)(this)
      }
      weakReference() {
        return (0, watchedValue_h.weakReference)(this)
      }
      addDependent(watchedValue_e) {
        this._dependents.push(watchedValue_e)
      }
      removeDependent(watchedValue_e) {
        const watchedValue_t = this._dependents.indexOf(watchedValue_e);
        watchedValue_t >= 0 && this._dependents.splice(watchedValue_t, 1)
      }
      dependents() {
        return this._dependents
      }
      _childChanged(watchedValue_e, watchedValue_t) {
        this._muteChildChanges || this._listeners.fire(this, watchedValue_t)
      }
      _fireMergeAndFireChangedProps(watchedValue_e) {
        this.muteChildChanges(!0);
        for (const watchedValue_t of watchedValue_e) watchedValue_t.muteChildChanges(!0);
        for (const watchedValue_t of watchedValue_e) watchedValue_t.muteChildChanges(!1), watchedValue_t.fireChanged();
        this.muteChildChanges(!1)
      }
    }