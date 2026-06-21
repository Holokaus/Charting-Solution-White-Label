/**
 * Module 41706 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

41706: (exports, module, require) => {
    "use strict";
    require.data(module, {
      Action: () => context,
      Separator: () => handler
    });
    var constants, result = require(50151),
      name = require(68335),
      config = require(4226),
      items = require(48096);
    class length extends items.Delegate {
      constructor(exports) {
        super(), this._onStartListening = null, this._onStopListening = null, this._onStartListening = exports || null
      }
      subscribe(exports, module, require) {
        const constants = 0 === this._listeners.length;
        super.subscribe(exports, module, require), constants && this._listeners.length > 0 && this._onStartListening && (this
          ._onStopListening = this._onStartListening())
      }
      unsubscribe(exports, module) {
        const require = 0 === this._listeners.length;
        super.unsubscribe(exports, module), !require && 0 === this._listeners.length && this._onStopListening && (this
          ._onStopListening(), this._onStopListening = null)
      }
      unsubscribeAll(exports) {
        const module = 0 === this._listeners.length;
        super.unsubscribeAll(exports), !module && 0 === this._listeners.length && this._onStopListening && (this
          ._onStopListening(),
          this._onStopListening = null)
      }
      destroy() {
        this._onStopListening && (this._onStopListening(), this._onStopListening = null), super.destroy()
      }
    }! function(exports) {
      exports.Normal = "normal", exports.Big = "big"
    }(constants || (constants = {}));
    class context {
      constructor(exports) {
        this.type = "action", this._destroyed = !1, this._loadOptionsPromise = null, this._customAction = null;
        const {
          actionId: module,
          options: require,
          optionsLoader: constants,
          customActionOptions: name,
          customActionOptionsLoader: items,
          id: handler = config.guid(),
          onStartListening: data
        } = exports;
        (0, result.assert)(void 0 !== module, "actionId must be defined"), this.id = handler, this._onUpdate = new length(data), this
          ._options = {
            actionId: module,
            ...require
          }, this.update(require), this._loadOptionsGetter = constants ?? null, this._loadOptionsGetter && (this._options
            .loading = !0), name && (this._customAction = new context({
            actionId: module,
            options: name,
            optionsLoader: items,
            id: handler
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
          ._loadOptionsPromise = this._loadOptionsGetter().then((exportstring => this.update({
            ...exports,
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
        this._destroyed || (this._unbindShortcut(), exports.hotkeyHash && (this._options.shortcutHint = (0, name
          .humanReadableHash)(exports.hotkeyHash)), this._options = Object.assign(this._options, exports), this
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
    class handler {
      constructor(exports) {
        this.type = "separator", this.id = config.guid(), this._hint = exports
      }
      getHint() {
        return this._hint
      }
    }