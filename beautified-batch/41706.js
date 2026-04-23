/**
 * Module 41706 - Auto-beautified from TradingView webpack bundle
 *
 * @module 41706
 * @date 2026-04-23
 * @size 4138 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 4226, 48096, 50151, 68335
 *
 * Exports:
 *   - Action (internal: c)
 *   - Separator (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  Action: () => c,
  Separator: () => h
});
var s, o = i(50151),
  n = i(68335),
  r = i(4226),
  a = i(48096);
class l extends a.Delegate {
  constructor(e) {
    super(), this._onStartListening = null, this._onStopListening = null, this._onStartListening = e || null
  }
  subscribe(e, t, i) {
    const s = 0 === this._listeners.length;
    super.subscribe(e, t, i), s && this._listeners.length > 0 && this._onStartListening && (this._onStopListening = this._onStartListening())
  }
  unsubscribe(e, t) {
    const i = 0 === this._listeners.length;
    super.unsubscribe(e, t), !i && 0 === this._listeners.length && this._onStopListening && (this._onStopListening(), this._onStopListening = null)
  }
  unsubscribeAll(e) {
    const t = 0 === this._listeners.length;
    super.unsubscribeAll(e), !t && 0 === this._listeners.length && this._onStopListening && (this._onStopListening(),
      this._onStopListening = null)
  }
  destroy() {
    this._onStopListening && (this._onStopListening(), this._onStopListening = null), super.destroy()
  }
}! function(e) {
  e.Normal = "normal", e.Big = "big"
}(s || (s = {}));
class c {
  constructor(e) {
    this.type = "action", this._destroyed = !1, this._loadOptionsPromise = null, this._customAction = null;
    const {
      actionId: t,
      options: i,
      optionsLoader: s,
      customActionOptions: n,
      customActionOptionsLoader: a,
      id: h = r.guid(),
      onStartListening: d
    } = e;
    (0, o.assert)(void 0 !== t, "actionId must be defined"), this.id = h, this._onUpdate = new l(d), this._options = {
      actionId: t,
      ...i
    }, this.update(i), this._loadOptionsGetter = s ?? null, this._loadOptionsGetter && (this._options.loading = !0), n && (this._customAction = new c({
      actionId: t,
      options: n,
      optionsLoader: a,
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
    return this._loadOptionsPromise ? this._loadOptionsPromise : this._loadOptionsGetter ? (this._loadOptionsPromise = this._loadOptionsGetter().then((e => this.update({
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
  update(e) {
    this._destroyed || (this._unbindShortcut(), e.hotkeyHash && (this._options.shortcutHint = (0, n.humanReadableHash)(e.hotkeyHash)), this._options = Object.assign(this._options, e), this._bindShortcut(), this._onUpdate.fire(this))
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
    this._destroyed = !0, this._onUpdate.destroy(), this._unbindShortcut(), this._options.onDestroy?.(), this._customAction?.destroy()
  }
  options() {
    return this._options
  }
  _bindShortcut() {
    if (!this._options.hotkeyGroup || !this._options.hotkeyHash) return;
    const e = "string" == typeof this._options.label ? this._options.label : this._options.name;
    this._hotkeyAction = this._options.hotkeyGroup.add({
      hotkey: this._options.hotkeyHash,
      isRepeatAccepted: this._options.isRepeatAccepted,
      desc: e,
      handler: () => this.execute(),
      isDisabled: () => this.isDisabled()
    })
  }
  _unbindShortcut() {
    this._hotkeyAction && (this._hotkeyAction.destroy(), delete this._hotkeyAction)
  }
}
class h {
  constructor(e) {
    this.type = "separator", this.id = r.guid(), this._hint = e
  }
  getHint() {
    return this._hint
  }
