/**
 * Module 75579 - Auto-beautified from TradingView webpack bundle
 *
 * @module 75579
 * @date 2026-04-23
 * @size 3648 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22613, 26610, 26709, 35749, 68335, 93946
 *
 * Exports:
 *   - ChartHotkeysListener (internal: g)
 *   - globalEnvironmentState (internal: m)
 *   - modifierPressed (internal: p)
 *   - shiftPressed (internal: _)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  ChartHotkeysListener: () => g,
  globalEnvironmentState: () => m,
  modifierPressed: () => p,
  shiftPressed: () => _
});
var s = i(26709),
  o = i(68335),
  n = i(35749),
  r = i(26610);
var a = i(22613),
  l = i(93946);
const c = new a.WatchedValue(Boolean((s.pressedKeys.value() ?? 0) & o.Modifiers.Shift)),
  h = new a.WatchedValue(Boolean((s.pressedKeys.value() ?? 0) & o.Modifiers.Mod)),
  d = new a.WatchedValue(Boolean((s.pressedKeys.value() ?? 0) & o.Modifiers.Alt)),
  u = [o.Modifiers.None, o.Modifiers.Alt, o.Modifiers.Mod, o.Modifiers.Alt + o.Modifiers.Shift];

function _() {
  return c
}

function p() {
  return h
}

function m() {
  return new l.EnvironmentState({
    altKey: d.value(),
    ctrlKey: p().value(),
    metaKey: p().value(),
    shiftKey: _().value()
  })
}
s.pressedKeys.subscribe(((e = 0) => {
  c.setValue(Boolean(e & o.Modifiers.Shift)), h.setValue(Boolean(e & o.Modifiers.Mod)), d.setValue(Boolean(e & o.Modifiers.Alt))
}));
class g {
  constructor(e, t) {
    this._pressedKeyCode = null, this._boundKeydownHandler = null, this._boundKeyupHandler = null, this._chartWidget = e, this._parent = t, this._boundKeydownHandler = this._keydownHandler.bind(this), this._boundKeyupHandler = this._keyupHandler.bind(this), this._parent.ownerDocument.addEventListener("keydown", this._boundKeydownHandler), this._parent.ownerDocument.addEventListener("keyup", this._boundKeyupHandler)
  }
  destroy() {
    null !== this._boundKeydownHandler && (this._parent.ownerDocument.removeEventListener("keydown", this._boundKeydownHandler), this._boundKeydownHandler = null), null !== this._boundKeyupHandler && (this._parent.ownerDocument.removeEventListener("keyup", this._boundKeyupHandler), this._boundKeyupHandler = null)
  }
  _keydownHandler(e) {
    this._chartWidget.hasModel() && this._chartWidget.isActive().value() && (e.defaultPrevented || ("text-editor" === window.document.activeElement?.getAttribute("data-name") && this._handleTabKeyDown(e) || window.document.activeElement === window.document.body && (this._handleMoveDrawingsKeyDown(e) || this._handleScrollKeyDown(e) || this._handleZoomKeyDown(e))) && e.preventDefault())
  }
  _keyupHandler(e) {
    this._chartWidget.hasModel() && this._handleScrollKeyUp(e)
  }
  _handleTabKeyDown(e) {
    const t = 255 & (0, o.hashFromEvent)(e),
      i = this._chartWidget.model();
    if (9 === t) {
      const t = i.selection().dataSources()[0];
      if (void 0 !== t && (s = t, (0, r.isLineTool)(s) && "LineToolTable" === s.state().type)) {
        const i = (0, o.modifiersFromEvent)(e);
        return t.switchActiveCell(i === o.Modifiers.Shift)
      }
      return !1
    }
    var s;
    return !1
  }
  _handleMoveDrawingsKeyDown(e) {
    const t = 255 & (0, o.hashFromEvent)(e),
      i = this._chartWidget.model();
    switch (t) {
      case 37:
        return i.moveSelectedToolsLeft();
      case 39:
        return i.moveSelectedToolsRight();
      case 38:
        return i.moveSelectedToolsUp();
      case 40:
        return i.moveSelectedToolsDown()
    }
    return !1
  }
  _handleScrollKeyDown(e) {
    if (null !== this._pressedKeyCode) return !1;
    const t = (0, o.hashFromEvent)(e),
      i = 255 & t,
      s = (0, o.modifiersFromEvent)(e);
    let r;
    if (37 === i) r = 1;
    else {
      if (39 !== i) return !1;
      r = -1
    }
    if (o.isMacKeyboard && s === o.Modifiers.Mod || !u.includes(s)) return !1;
    if ((0, n.isNativeUIInteraction)(t, e.target)) return !1;
    this._pressedKeyCode = i;
    const a = this._chartWidget.scrollHelper();
    return s === o.Modifiers.None ? a.moveByBar(r) : s === o.Modifiers.Alt || s === o.Modifiers.Mod ? a.move(r) : -1 === r ? a.scrollToRealtime(!0) : a.scrollToFirstBar(), !0
  }
  _handleScrollKeyUp(e) {
    if (null === this._pressedKeyCode) return !1;
    const t = (0, o.hashFromEvent)(e);
    if ((0, n.isNativeUIInteraction)(t, e.target)) return !1;
    return (255 & t) === this._pressedKeyCode && (this._pressedKeyCode = null, this._chartWidget.scrollHelper().stopMove(), !0)
  }
  _handleZoomKeyDown(e) {
    const t = (0, o.hashFromEvent)(e),
      i = 255 & t;
    if ((0, o.modifiersFromEvent)(e) !== o.Modifiers.Mod || (0, n.isNativeUIInteraction)(t, e.target)) return !1;
    const s = this._chartWidget.model();
    if (38 === i) s.zoomIn();
    else {
      if (40 !== i) return !1;
      s.zoomOut()
    }
    return !0
  }
