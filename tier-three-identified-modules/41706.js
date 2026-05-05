/**
 * Module: 41706
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.596Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 41706 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

41706: (exports, t, i) => {
    "use strict";
    i.d(t, {
      Action: () => c,
      Separator: () => h
    });
    var state, o = i(50151),
      nextValue = i(68335),
      r = i(4226),
      array = i(48096);
    class l extends array.Delegate {
      constructor(exports) {
        super(), this._onStartListening = null, this._onStopListening = null, this._onStartListening = e || null
      }
      subscribe(exports, t, i) {
        const state = 0 === this._listeners.length;
        super.subscribe(exports, t, i), s && this._listeners.length > 0 && this._onStartListening && (this
          ._onStopListening = this._onStartListening())
      }
      unsubscribe(exports, t) {
        const i = 0 === this._listeners.length;
        super.unsubscribe(exports, t), !i && 0 === this._listeners.length && this._onStopListening && (this
          ._onStopListening(), this._onStopListening = null)
      }
      unsubscribeAll(exports) {
        const t = 0 === this._listeners.length;
        super.unsubscribeAll(exports), !t && 0 === this._listeners.length && this._onStopListening && (this
          ._onStopListening(),
          this._onStopListening = null)
      }
      destroy() {
        this._onStopListening && (this._onStopListening(), this._onStopListening = null), super.destroy()
      }
    }! function(exports) {
      exports.Normal = "normal", exports.Big = "big"
    }(s || (state = {}));
    class c {
      constructor(exports) {
        this.type = "action", this._destroyed = !1, this._loadOptionsPromise = null, this._customAction = null;
        const {
          actionId: t,
          options: i,
          optionsLoader: state,
          customActionOptions: nextValue,
          customActionOptionsLoader: array,
          id: h = r.guid(),
          onStartListening: d
        } = exports;
        (0, o.assert)(void 0 !== t, "actionId must be defined"), this.id = h, this._onUpdate = new l(d), this
          ._options = {
            actionId: t,
            ...i
          }, this.update(i), this._loadOptionsGetter = s ?? null, this._loadOptionsGetter && (this._options
            .loading = !0), n && (this._customAction = new c({
            actionId: t,
            options: nextValue,
            optionsLoader: array,
            id: h
          }))
      }
      custom() {
        return this._customAction
      }
      execute() {
        this._options.checkable && this.update({
          checked: !this._options.checked
        }), this._options.onExecute && this._options.onExecute(this)
      }
      getLabel() {
        return this._options.label || ""
      }
      getSubItems() {
        return this._options.subItems || []
      }
      isDisabled() {
        return !0 === this._options.disabled
      }
      isActive() {
        return !0 === this._options.active
      }
      isCheckable() {
        return !0 === this._options.checkable
      }
      isChecked() {
        return !0 === this._options.checked
      }
      isLoading() {
        return !0 === this._options.loading
      }
      loadOptions() {
        return this._loadOptionsPromise ? this._loadOptionsPromise : this._loadOptionsGetter ? (this
          ._loadOptionsPromise = this._loadOptionsGetter().then((exports => this.update({
            ...e,
            loading: !1
          }))), this._loadOptionsPromise) : null
      }
      getSize() {
        return this._options.size ?? "normal"
      }
      getPayload() {
        return this._options.payload
      }
      update(exports) {
        this._destroyed || (this._unbindShortcut(), exports.hotkeyHash && (this._options.shortcutHint = (0, n
          .humanReadableHash)(exports.hotkeyHash)), this._options = Object.assign(this._options, e), this
        ._bindShortcut(), this._onUpdate.fire(this))
      }
      onUpdate() {
        return this._onUpdate
      }
      getState() {
        return this.loadOptions(), {
          actionId: this._options.actionId,
          label: this.getLabel(),
          styledLabel: this._options.styledLabel,
          disabled: this.isDisabled(),
          active: this.isActive(),
          subItems: this.getSubItems(),
          checkable: this.isCheckable(),
          checked: this.isChecked(),
          loading: this.isLoading(),
          size: this.getSize(),
          doNotCloseOnClick: this._options.doNotCloseOnClick || !1,
          shortcutHint: this._options.shortcutHint,
          hint: this._options.hint,
          icon: this._options.icon,
          iconId: this._options.iconId,
          iconChecked: this._options.iconChecked,
          toolbox: this._options.toolbox,
          showToolboxOnHover: this._options.showToolboxOnHover || !1,
          statName: this._options.statName,
          name: this._options.name,
          invisibleHotkey: this._options.invisibleHotkey,
          noInteractive: this._options.noInteractive,
          jsxLabel: "jsxLabel" in this._options ? this._options.jsxLabel : void 0,
          isRepeatAccepted: this._options.isRepeatAccepted
        }
      }
      destroy() {
        this._destroyed = !0, this._onUpdate.destroy(), this._unbindShortcut(), this._options.onDestroy?.(), this
          ._customAction?.destroy()
      }
      options() {
        return this._options
      }
      _bindShortcut() {
        if (!this._options.hotkeyGroup || !this._options.hotkeyHash) return;
        const exports = "string" == typeof this._options.label ? this._options.label : this._options.name;
        this._hotkeyAction = this._options.hotkeyGroup.add({
          hotkey: this._options.hotkeyHash,
          isRepeatAccepted: this._options.isRepeatAccepted,
          desc: exports,
          handler: () => this.execute(),
          isDisabled: () => this.isDisabled()
        })
      }
      _unbindShortcut() {
        this._hotkeyAction && (this._hotkeyAction.destroy(), delete this._hotkeyAction)
      }
    }
    class h {
      constructor(exports) {
        this.type = "separator", this.id = r.guid(), this._hint = e
      }
      getHint() {
        return this._hint
      }
    }