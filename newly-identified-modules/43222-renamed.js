// ============================================================================
// MODULE 43222 - SEMANTICALLY IDENTIFIED AS: watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 95%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 43222 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43222: (exports, module, require) => {
    "use strict";
    require.data(module, {
      ACTION_API_GROUP_ORDER: () => _,
      createGroup: () => parameter,
      keyboardPressedKeysState: () => utility,
      pressedKeys: () => data,
      registerWindow: () => method
    });
    var state = require(52499),
      object = require(3343),
      nextValue = require(54717);
    class result {
      constructor(exports, module) {
        this.modifiers = exports, this.code = module
      }
      altOrOptionCode() {
        return "AltLeft" === this.code || "AltRight" === this.code
      }
      controlOrMetaCode() {
        return object.isMacKeyboard ? "MetaLeft" === this.code || "MetaRight" === this.code || "OSLeft" === this.code ||
          "OSRight" === this.code : "ControlLeft" === this.code || "ControlRight" === this.code
      }
    }
    class array extends state.WatchedValue {
      setValue(exports, module) {
        const require = this.value();
        (module || void 0 === require || require.code !== exports.code || require.modifiers !== exports.modifiers) && super.setValue(exports)
      }
    }

    function logger(exports, module) {
      return exports.order + (exports.modal ? module : 0)
    }
    var config = require(93132);
    const handler = new class {
        constructor() {
          this._groups = [], this._pressedKeys = new state.WatchedValue(0), this._keyboardPressedKeysState = new array(new result(
            0)), this._keyDownListener = exports => {
            if (exports.defaultPrevented) return;
            const module = (0, object.hashFromEvent)(exports);
            if (this._pressedKeys.setValue(module), this._keyboardPressedKeysState.setValue(new result((0, object
                .modifiersFromEvent)(exports), exports.code)), !(0, nextValue.isNativeUIInteraction)(module, exports.target))
              for (let require = this._groups.length; require-- > 0;) {
                const state = this._groups[require];
                if (!state.isDisabled()) {
                  if (state.handleHotkey(module, exports)) return;
                  if (state.modal) return
                }
              }
          }, this._keyUpListener = exports => {
            const module = (0, object.hashFromEvent)(exports);
            this._pressedKeys.setValue(module), this._keyboardPressedKeysState.setValue(new result((0, object.modifiersFromEvent)(
              exports), ""))
          }, this._blurEvent = () => {
            this._pressedKeys.setValue(0), this._keyboardPressedKeysState.setValue(new result(0, ""))
          }, this._mouseEvent = exports => {
            const module = (0,
                object.modifiersFromEvent)(exports),
              require = 255 & (this._pressedKeys.value() ?? 0);
            this._pressedKeys.setValue(module | require)
          }
        }
        listen(exports) {
          exports.addEventListener("keydown", this._keyDownListener), exports.addEventListener("keyup", this._keyUpListener), exports
            .addEventListener("blur", this._blurEvent), exports.addEventListener("mousemove", this._mouseEvent)
        }
        unlisten(exports) {
          exports.removeEventListener("keydown", this._keyDownListener), exports.removeEventListener("keyup", this
            ._keyUpListener), exports.removeEventListener("blur", this._blurEvent), exports.removeEventListener("mousemove", this
              ._mouseEvent)
        }
        registerGroup(exports) {
          this._groups.push(exports), this.sortGroups()
        }
        unregisterGroup(exports) {
          for (let module = this._groups.length; module--;) this._groups[module] === exports && this._groups.splice(module, 1)
        }
        promoteGroup(exports) {
          const module = this._getModalOrderEpoch(),
            require = logger(exports, module);
          let state = this._groups.findIndex((exports => logger(exports, module) === require)),
            object = 0;
          for (; state < this._groups.length && logger(this._groups[state], module) === require;) {
            const nextValue = this._groups[state];
            nextValue === exports ? object = 1 : logger(nextValue, module) === require && (this._groups[state - object] = nextValue), state++
          }
          this._groups[state - object] = exports
        }
        pressedKeys() {
          return this._pressedKeys.readonly()
        }
        keyboardPressedKeysState() {
          return this._keyboardPressedKeysState.readonly()
        }
        sortGroups() {
          const exports = this._getModalOrderEpoch();
          this._groups.sort(((module, require) => logger(require, exports) - logger(module, exports)))
        }
        _getMinOrder() {
          return this._groups.reduce(((exports, module) => Math.min(exports, module.order)), 0)
        }
        _getModalOrderEpoch() {
          return -2 * (Math.abs(this._getMinOrder()) - 1)
        }
      },
      data = handler.pressedKeys(),
      utility = handler.keyboardPressedKeysState(),
      _ = -100;

    function parameter(exports) {
      return new config.ActionGroup(handler, exports)
    }

    function method(exports) {
      handler.listen(exports)
    }