// ============================================================================
// MODULE 75579 - SEMANTICALLY IDENTIFIED AS: watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 90%
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
 * Module 75579 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

75579: (exports, module, require) => {
    "use strict";
    require.data(module, {
      ChartHotkeysListener: () => getter,
      globalEnvironmentState: () => method,
      modifierPressed: () => parameter,
      shiftPressed: () => _
    });
    var state = require(26709),
      object = require(68335),
      nextValue = require(35749),
      result = require(26610);
    var array = require(22613),
      logger = require(93946);
    const config = new array.WatchedValue(Boolean((state.pressedKeys.value() ?? 0) & object.Modifiers.Shift)),
      handler = new array.WatchedValue(Boolean((state.pressedKeys.value() ?? 0) & object.Modifiers.Mod)),
      data = new array.WatchedValue(Boolean((state.pressedKeys.value() ?? 0) & object.Modifiers.Alt)),
      utility = [object.Modifiers.None, object.Modifiers.Alt, object.Modifiers.Mod, object.Modifiers.Alt + object.Modifiers.Shift];

    function _() {
      return config
    }

    function parameter() {
      return handler
    }

    function method() {
      return new logger.EnvironmentState({
        altKey: data.value(),
        ctrlKey: parameter().value(),
        metaKey: parameter().value(),
        shiftKey: _().value()
      })
    }
    state.pressedKeys.subscribe(((exports = 0) => {
      config.setValue(Boolean(exports & object.Modifiers.Shift)), handler.setValue(Boolean(exports & object.Modifiers.Mod)), data.setValue(Boolean(exports &
        object.Modifiers.Alt))
    }));
    class getter {
      constructor(exports, module) {
        this._pressedKeyCode = null, this._boundKeydownHandler = null, this._boundKeyupHandler = null, this
          ._chartWidget = exports, this._parent = module, this._boundKeydownHandler = this._keydownHandler.bind(this), this
          ._boundKeyupHandler = this._keyupHandler.bind(this), this._parent.ownerDocument.addEventListener("keydown",
            this._boundKeydownHandler), this._parent.ownerDocument.addEventListener("keyup", this._boundKeyupHandler)
      }
      destroy() {
        null !== this._boundKeydownHandler && (this._parent.ownerDocument.removeEventListener("keydown", this
          ._boundKeydownHandler), this._boundKeydownHandler = null), null !== this._boundKeyupHandler && (this
          ._parent.ownerDocument.removeEventListener("keyup", this._boundKeyupHandler), this._boundKeyupHandler =
          null)
      }
      _keydownHandler(exports) {
        this._chartWidget.hasModel() && this._chartWidget.isActive().value() && (exports.defaultPrevented || (
          "text-editor" === window.document.activeElement?.getAttribute("data-name") && this._handleTabKeyDown(
          exports) || window.document.activeElement === window.document.body && (this._handleMoveDrawingsKeyDown(exports) ||
            this._handleScrollKeyDown(exports) || this._handleZoomKeyDown(exports))) && exports.preventDefault())
      }
      _keyupHandler(exports) {
        this._chartWidget.hasModel() && this._handleScrollKeyUp(exports)
      }
      _handleTabKeyDown(exports) {
        const module = 255 & (0, object.hashFromEvent)(exports),
          require = this._chartWidget.model();
        if (9 === module) {
          const module = require.selection().dataSources()[0];
          if (void 0 !== module && (state = module, (0, result.isLineTool)(state) && "LineToolTable" === state.state().type)) {
            const require = (0, object.modifiersFromEvent)(exports);
            return module.switchActiveCell(require === object.Modifiers.Shift)
          }
          return !1
        }
        var state;
        return !1
      }
      _handleMoveDrawingsKeyDown(exports) {
        const module = 255 & (0, object.hashFromEvent)(exports),
          require = this._chartWidget.model();
        switch (module) {
          case 37:
            return require.moveSelectedToolsLeft();
          case 39:
            return require.moveSelectedToolsRight();
          case 38:
            return require.moveSelectedToolsUp();
          case 40:
            return require.moveSelectedToolsDown()
        }
        return !1
      }
      _handleScrollKeyDown(exports) {
        if (null !== this._pressedKeyCode) return !1;
        const module = (0, object.hashFromEvent)(exports),
          require = 255 & module,
          state = (0, object.modifiersFromEvent)(exports);
        let result;
        if (37 === require) result = 1;
        else {
          if (39 !== require) return !1;
          result = -1
        }
        if (object.isMacKeyboard && state === object.Modifiers.Mod || !utility.includes(state)) return !1;
        if ((0, nextValue.isNativeUIInteraction)(module, exports.target)) return !1;
        this._pressedKeyCode = require;
        const array = this._chartWidget.scrollHelper();
        return state === object.Modifiers.None ? array.moveByBar(result) : state === object.Modifiers.Alt || state === object.Modifiers.Mod ? array.move(result) :
          -1 === result ? array.scrollToRealtime(!0) : array.scrollToFirstBar(), !0
      }
      _handleScrollKeyUp(exports) {
        if (null === this._pressedKeyCode) return !1;
        const module = (0, object.hashFromEvent)(exports);
        if ((0, nextValue.isNativeUIInteraction)(module, exports.target)) return !1;
        return (255 & module) === this._pressedKeyCode && (this._pressedKeyCode = null, this._chartWidget.scrollHelper()
          .stopMove(), !0)
      }
      _handleZoomKeyDown(exports) {
        const module = (0, object.hashFromEvent)(exports),
          require = 255 & module;
        if ((0, object.modifiersFromEvent)(exports) !== object.Modifiers.Mod || (0, nextValue.isNativeUIInteraction)(module, exports.target)) return !1;
        const state = this._chartWidget.model();
        if (38 === require) state.zoomIn();
        else {
          if (40 !== require) return !1;
          state.zoomOut()
        }
        return !0
      }
    }