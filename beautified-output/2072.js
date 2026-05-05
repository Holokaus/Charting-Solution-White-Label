/**
 * Module 2072 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2072: (e, t, i) => {
    "use strict";
    i.d(t, {
      WatchedValue: () => n
    });
    const s = (0, i(9343).getLogger)("Common.WatchedValue");

    function o(e) {
      s.logError(`${e&&(e.stack||e.message)}`)
    }
    class n {
      constructor(...e) {
        this._listeners = [], e.length > 0 ? this._value = e[0] : delete this._value
      }
      destroy() {
        this.unsubscribe()
      }
      value() {
        return this._owner ? this._owner._value : this._value
      }
      setValue(e, t) {
        const i = this._owner ? this._owner : this;
        if (i.writeLock) return;
        const s = i._value === e || Number.isNaN(i._value) && Number.isNaN(e);
        if (!t && s && i.hasOwnProperty("_value")) return;
        i._value = e;
        const n = i._listeners.slice();
        let r = 0;
        for (let t = 0; t < n.length; t++) {
          n[t].once && (i._listeners.splice(t - r, 1), r++);
          try {
            n[t].cb(e)
          } catch (e) {
            o(e)
          }
        }
      }
      deleteValue() {
        this.setValue(void 0)
      }
      subscribe(e, t) {
        if ("function" != typeof e) throw new TypeError("callback must be a function");
        const i = !!t && !!t.once,
          s = !!t && !!t.callWithLast,
          n = this._owner ? this._owner : this;
        if (s && n.hasOwnProperty("_value")) {
          try {
            e(n._value)
          } catch (e) {
            o(e)
          }
          if (i) return
        }
        n._listeners.push({
          cb: e,
          owner: this,
          once: !!t && !!t.once
        })
      }
      unsubscribe(e) {
        const t = this._owner ? this._owner : this;
        void 0 === e && (e = null);
        const i = t._listeners;
        for (let s = i.length; s--;) i[s].owner !== this && t !== this || i[s].cb !== e && null !== e || i.splice(s,
          1)
      }
      readonly() {
        if (this._readonlyInstance) return this._readonlyInstance;
        const e = {
          subscribe: this.subscribe.bind(this),
          unsubscribe: this.unsubscribe.bind(this),
          value: this.value.bind(this),
          when: this.when.bind(this),
          ownership: this.ownership.bind(this),
          spawnOwnership: this.spawnOwnership.bind(this),
          weakReference: this.weakReference.bind(this),
          spawn: e => this.spawn(e).readonly(),
          destroy: this.destroy.bind(this)
        };
        return this._readonlyInstance = e, e
      }
      spawn(e) {
        return this._spawn(e)
      }
      when(e) {
        ! function(e, t, i) {
          if (t(e.value())) return void i();
          const s = o => {
            t(o) && (e.unsubscribe(s), i())
          };
          e.subscribe(s, {
            callWithLast: !0
          })
        }(this, (e => Boolean(e)), (() => {
          try {
            e(this.value())
          } catch (e) {
            o(e)
          }
        }))
      }
      assertNoSubscriptions() {
        0
      }
      ownership() {
        return this
      }
      release() {
        this.destroy()
      }
      spawnOwnership() {
        return this._spawn()
      }
      weakReference() {
        return this._spawn(void 0, !0)
      }
      _spawn(e, t) {
        return new r(this._owner || this, e, t)
      }
    }
    class r extends n {
      constructor(e, t, i) {
        super(), delete this._listeners, this._owner = e, this._onDestroy = t, this._weakReference = !!i
      }
      destroy() {
        try {
          this._onDestroy?.()
        } catch (e) {
          o(e)
        }
        super.destroy()
      }
      readonly() {
        return this._readonlySpawnInstance || (this._readonlySpawnInstance = {
          ...super.readonly(),
          destroy: () => this.destroy(),
          readonly() {
            return this
          }
        }), this._readonlySpawnInstance
      }
      release() {
        this._weakReference || super.release()
      }
    }
  },
  93132: (e, t, i) => {
    "use strict";
    i.d(t, {
      ActionGroup: () => o
    });
    class s {
      constructor(e, t) {
        this._group = e;
        const {
          hotkey: i,
          handler: s,
          desc: o,
          isDisabled: n,
          element: r = null,
          isRepeatAccepted: a = !1
        } = t;
        this.hotkey = i, this.handler = s, this.desc = o, this.element = r, this.isRepeatAccepted = a, this
          .isDisabled = n ? "function" == typeof n ? n : () => !0 : () => !1
      }
      destroy() {
        this._group && (this._group.remove(this), this._group = null)
      }
    }
    class o {
      constructor(e, t) {
        this._actions = new Map, this._manager = e, this.order = t?.order ?? 0, this.modal = !(!t || !t.modal), t && (
            this.desc = t.desc), t && t.isDisabled ? "function" == typeof t.isDisabled ? this.isDisabled = t
          .isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1, this._manager.registerGroup(this)
      }
      add(e) {
        let t = this._actions.get(e.hotkey);
        t || (t = [], this._actions.set(e.hotkey, t));
        const i = new s(this, e);
        return t.push(i), i
      }
      remove(e) {
        const t = this._actions.get(e.hotkey);
        if (!t) return;
        const i = t.findIndex((t => t === e));
        i >= 0 && (1 === t.length ? this._actions.delete(e.hotkey) : t.splice(i, 1))
      }
      handleHotkey(e, t) {
        const i = this._actions.get(e);
        if (!i) return !1;
        for (const s of i)
          if ((!s.element || t.target && s.element.contains(t.target)) && !s.isDisabled(t)) return t.repeat && !s
            .isRepeatAccepted || (s.handler(t), this._callMatchedHotkeyHandler(e)), t.preventDefault(), !0;
        return !1
      }
      promote() {
        this._manager.promoteGroup(this)
      }
      destroy() {
        for (const [, e] of this._actions)
          for (const t of e) t.destroy();
        this._actions.clear(), this._manager.unregisterGroup(this)
      }
      static setMatchedHotkeyHandler(e) {
        o._matchedHotkeyHandler = e
      }
      _callMatchedHotkeyHandler(e) {
        o._matchedHotkeyHandler && o._matchedHotkeyHandler(e)
      }
    }