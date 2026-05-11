/**
 * Module 41706 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

41706: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      Action: () => watchedValue_c,
      Separator: () => watchedValue_h
    });
    var watchedValue_s, watchedValue_o = watchedValue_i(50151),
      watchedValue_n = watchedValue_i(68335),
      watchedValue_r = watchedValue_i(4226),
      watchedValue_a = watchedValue_i(48096);
    class watchedValue_l extends watchedValue_a.Delegate {
      constructor(watchedValue_e) {
        super(), this._onStartListening = null, this._onStopListening = null, this._onStartListening = watchedValue_e || null
      }
      subscribe(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = 0 === this._listeners.length;
        super.subscribe(watchedValue_e, watchedValue_t, watchedValue_i), watchedValue_s && this._listeners.length > 0 && this._onStartListening && (this
          ._onStopListening = this._onStartListening())
      }
      unsubscribe(watchedValue_e, watchedValue_t) {
        const watchedValue_i = 0 === this._listeners.length;
        super.unsubscribe(watchedValue_e, watchedValue_t), !watchedValue_i && 0 === this._listeners.length && this._onStopListening && (this
          ._onStopListening(), this._onStopListening = null)
      }
      unsubscribeAll(watchedValue_e) {
        const watchedValue_t = 0 === this._listeners.length;
        super.unsubscribeAll(watchedValue_e), !watchedValue_t && 0 === this._listeners.length && this._onStopListening && (this
          ._onStopListening(),
          this._onStopListening = null)
      }
      destroy() {
        this._onStopListening && (this._onStopListening(), this._onStopListening = null), super.destroy()
      }
    }! function(watchedValue_e) {
      watchedValue_e.Normal = "normal", watchedValue_e.Big = "big"
    }(watchedValue_s || (watchedValue_s = {}));
    class watchedValue_c {
      constructor(watchedValue_e) {
        this.type = "action", this._destroyed = !1, this._loadOptionsPromise = null, this._customAction = null;
        const {
          actionId: watchedValue_t,
          options: watchedValue_i,
          optionsLoader: watchedValue_s,
          customActionOptions: watchedValue_n,
          customActionOptionsLoader: watchedValue_a,
          id: watchedValue_h = watchedValue_r.guid(),
          onStartListening: watchedValue_d
        } = watchedValue_e;
        (0, watchedValue_o.assert)(void 0 !== watchedValue_t, "actionId must be defined"), this.id = watchedValue_h, this._onUpdate = new watchedValue_l(watchedValue_d), this
          ._options = {
            actionId: watchedValue_t,
            ...watchedValue_i
          }, this.update(watchedValue_i), this._loadOptionsGetter = watchedValue_s ?? null, this._loadOptionsGetter && (this._options
            .loading = !0), watchedValue_n && (this._customAction = new watchedValue_c({
            actionId: watchedValue_t,
            options: watchedValue_n,
            optionsLoader: watchedValue_a,
            id: watchedValue_h
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
          ._loadOptionsPromise = this._loadOptionsGetter().then((watchedValue_e => this.update({
            ...watchedValue_e,
            loading: !1
          }))), this._loadOptionsPromise) : null
      }
      getSize() {
        return this._options.size ?? "normal"
      }
      getPayload() {
        return this._options.payload
      }
      update(watchedValue_e) {
        this._destroyed || (this._unbindShortcut(), watchedValue_e.hotkeyHash && (this._options.shortcutHint = (0, watchedValue_n
          .humanReadableHash)(watchedValue_e.hotkeyHash)), this._options = Object.assign(this._options, watchedValue_e), this
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
        const watchedValue_e = "string" == typeof this._options.label ? this._options.label : this._options.name;
        this._hotkeyAction = this._options.hotkeyGroup.add({
          hotkey: this._options.hotkeyHash,
          isRepeatAccepted: this._options.isRepeatAccepted,
          desc: watchedValue_e,
          handler: () => this.execute(),
          isDisabled: () => this.isDisabled()
        })
      }
      _unbindShortcut() {
        this._hotkeyAction && (this._hotkeyAction.destroy(), delete this._hotkeyAction)
      }
    }
    class watchedValue_h {
      constructor(watchedValue_e) {
        this.type = "separator", this.id = watchedValue_r.guid(), this._hint = watchedValue_e
      }
      getHint() {
        return this._hint
      }
    }
}
