/**
 * Module 78861 - Auto-beautified from TradingView webpack bundle
 *
 * @module 78861
 * @date 2026-04-23
 * @size 4070 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 22613, 41072, 48096, 50151, 51768, 62773, 76422, 78176
 *
 * Exports:
 *   - DrawingSyncMode (internal: s)
 *   - SelectPointMode (internal: o)
 *   - activePointSelectionMode (internal: J)
 *   - alignTo45Degrees (internal: Ie)
 *   - barTimesUnderCursor (internal: ee)
 *   - beenSetLineToolLastPoint (internal: F)
 *   - cancelLineTool (internal: ne)
 *   - cancelledLineTool (internal: O)
 *   - changeLineStyle (internal: me)
 *   - changeLineTool (internal: de)
 *   - changedLineStyle (internal: K)
 *   - changedLineTool (internal: j)
 *   - continueLineTool (internal: oe)
 *   - continuedLineTool (internal: N)
 *   - copiedLineTool (internal: Y)
 *   - copyLineTool (internal: ge)
 *   - createLineTool (internal: se)
 *   - createdLineTool (internal: R)
 *   - crosshairLock (internal: x)
 *   - cursorTool (internal: k)
 *   - drawOnAllCharts (internal: Ae)
 *   - drawOnAllChartsMode (internal: Le)
 *   - emojiTool (internal: A)
 *   - finishChangingLineTool (internal: ue)
 *   - finishLineTool (internal: pe)
 *   - finishMovingLineTool (internal: ce)
 *   - finishedChangingLineTool (internal: G)
 *   - finishedMovingLineTool (internal: z)
 *   - hideAllDrawings (internal: Te)
 *   - hideAllIndicators (internal: Pe)
 *   - hideMarksOnBars (internal: Me)
 *   - iconTool (internal: I)
 *   - init (internal: be)
 *   - isDirectionalMovementActive (internal: V)
 *   - isStudyEditingNow (internal: Q)
 *   - isToolCreatingNow (internal: E)
 *   - isToolEditingNow (internal: D)
 *   - isToolMovingNow (internal: B)
 *   - lockDrawings (internal: xe)
 *   - moveLineTool (internal: le)
 *   - movedLineTool (internal: H)
 *   - properties (internal: Ce)
 *   - removeLineTool (internal: _e)
 *   - removedLineTool (internal: q)
 *   - resetToCursor (internal: v)
 *   - restoreLineTool (internal: fe)
 *   - restoreLineToolState (internal: ye)
 *   - restoredLineTool (internal: Z)
 *   - restoredLineToolState (internal: X)
 *   - runOnDrawingStateReady (internal: we)
 *   - setLineToolLastPoint (internal: re)
 *   - startChangingLineTool (internal: he)
 *   - startMovingLineTool (internal: ae)
 *   - startedChangingLineTool (internal: U)
 *   - startedMovingLineTool (internal: W)
 *   - stickerTool (internal: L)
 *   - tool (internal: M)
 *   - toolIsCursor (internal: m)
 *   - toolIsDemonstration (internal: f)
 *   - toolIsEraser (internal: g)
 *   - toolIsMeasure (internal: y)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.r(t), i.d(t, {
  DrawingSyncMode: () => s,
  SelectPointMode: () => o,
  activePointSelectionMode: () => J,
  alignTo45Degrees: () => Ie,
  barTimesUnderCursor: () => ee,
  beenSetLineToolLastPoint: () => F,
  cancelLineTool: () => ne,
  cancelledLineTool: () => O,
  changeLineStyle: () => me,
  changeLineTool: () => de,
  changedLineStyle: () => K,
  changedLineTool: () => j,
  continueLineTool: () => oe,
  continuedLineTool: () => N,
  copiedLineTool: () => Y,
  copyLineTool: () => ge,
  createLineTool: () => se,
  createdLineTool: () => R,
  crosshairLock: () => x,
  cursorTool: () => k,
  drawOnAllCharts: () => Ae,
  drawOnAllChartsMode: () => Le,
  emojiTool: () => A,
  finishChangingLineTool: () => ue,
  finishLineTool: () => pe,
  finishMovingLineTool: () => ce,
  finishedChangingLineTool: () => G,
  finishedLineTool: () => $,
  finishedMovingLineTool: () => z,
  hideAllDrawings: () => Te,
  hideAllIndicators: () => Pe,
  hideMarksOnBars: () => Me,
  iconTool: () => I,
  init: () => be,
  isDirectionalMovementActive: () => V,
  isStudyEditingNow: () => Q,
  isToolCreatingNow: () => E,
  isToolEditingNow: () => D,
  isToolMovingNow: () => B,
  lockDrawings: () => xe,
  moveLineTool: () => le,
  movedLineTool: () => H,
  properties: () => Ce,
  removeLineTool: () => _e,
  removedLineTool: () => q,
  resetToCursor: () => v,
  restoreLineTool: () => fe,
  restoreLineToolState: () => ye,
  restoredLineTool: () => Z,
  restoredLineToolState: () => X,
  runOnDrawingStateReady: () => we,
  setLineToolLastPoint: () => re,
  startChangingLineTool: () => he,
  startMovingLineTool: () => ae,
  startedChangingLineTool: () => U,
  startedMovingLineTool: () => W,
  stickerTool: () => L,
  tool: () => M,
  toolIsCursor: () => m,
  toolIsDemonstration: () => f,
  toolIsEraser: () => g,
  toolIsMeasure: () => y
});
var s, o, n = i(50151),
  r = i(41072),
  a = i(78176),
  l = i(22613),
  c = i(62773),
  h = i(48096),
  d = i(1765),
  u = i(76422),
  _ = i(51768);
! function(e) {
  e[e.Layout = 1] = "Layout", e[e.Global = 2] = "Global"
}(s || (s = {})),
function(e) {
  e[e.None = 0] = "None", e[e.Replay = 1] = "Replay", e[e.Study = 2] = "Study"
}(o || (o = {}));
const p = new Set(["cursor", "arrow", "dot", "performance", "demonstration"]);

function m(e) {
  return p.has(e)
}

function g(e) {
  return "eraser" === e
}

function f(e) {
  return "demonstration" === e
}

function y(e) {
  return "measure" === e
}

function v(e = !1) {
  if (!e && S) {
    if (S.childs().stayInDrawingMode.value()) return
  }
  M.setValue(k.value())
}
let S = null,
  b = null,
  w = null,
  C = null,
  T = null,
  P = null;
const x = new c.WatchedObject(null),
  M = new l.WatchedValue,
  I = new l.WatchedValue,
  A = new l.WatchedValue,
  L = new l.WatchedValue,
  k = new l.WatchedValue,
  E = new l.WatchedValue(!1),
  D = new l.WatchedValue(!1),
  B = new l.WatchedValue(!1),
  V = new l.WatchedValue(!1),
  R = new h.Delegate,
  N = new h.Delegate,
  O = new h.Delegate,
  F = new h.Delegate,
  W = new h.Delegate,
  H = new h.Delegate,
  z = new h.Delegate,
  U = new h.Delegate,
  j = new h.Delegate,
  G = new h.Delegate,
  q = new h.Delegate,
  $ = new h.Delegate,
  K = new h.Delegate,
  Y = new h.Delegate,
  Z = new h.Delegate,
  X = new h.Delegate,
  J = new l.WatchedValue(o.None),
  Q = new l.WatchedValue(!1),
  ee = new Map;

function te(e, t) {
  const i = t || {
    value: !1
  };
  return t => {
    i.value || (i.value = !0, e.fire(t), i.value = !1)
  }
}
const ie = {
    value: !1
  },
  se = te(R, ie),
  oe = te(N, ie),
  ne = te(O, ie),
  re = te(F, ie),
  ae = te(W),
  le = te(H),
  ce = te(z),
  he = te(U),
  de = te(j),
  ue = te(G),
  _e = te(q),
  pe = te($),
  me = te(K, ie),
  ge = te(Y, ie),
  fe = te(Z),
  ye = te(X);
let ve = !1,
  Se = [];

function be() {
  if (ve) return;
  const e = d.getValue("chart.cursorPreference", "cursor");
  M.setValue(m(e) ? e : "cursor"), M.subscribe((e => {
    m(e) ? k.setValue(e) : g(e) && (0, _.trackEvent)("Chart cursors", e)
  }), {
    callWithLast: !0
  }), k.subscribe((e => {
    (0, _.trackEvent)("Chart cursors", e), e && "performance" !== e && !f(e) && d.setValue("chart.cursorPreference", e)
  })), S = new a.DefaultProperty({
    defaultName: "drawings"
  }), b = (0, r.createPrimitiveProperty)(!1), w = (0, r.createPrimitiveProperty)(!1), C = (0, r.createPrimitiveProperty)(!1), T = (0, r.createPrimitiveProperty)(!d.getBool("BarsMarksContainer.visibile", !0)), P = (0, r.createPrimitiveProperty)(!1), M.subscribe((e => {
    (0, u.emit)("onSelectedLineToolChanged")
  })), ve = !0, Se.forEach((e => e())), Se = []
}

function we(e) {
  ve ? e() : Se.push(e)
}

function Ce() {
  return (0, n.ensureNotNull)(S)
}

function Te() {
  return (0,
    n.ensureNotNull)(b)
}

function Pe() {
  return (0, n.ensureNotNull)(w)
}

function xe() {
  return (0, n.ensureNotNull)(C)
}

function Me() {
  return (0, n.ensureNotNull)(T)
}

function Ie() {
  return (0, n.ensureNotNull)(P)
}

function Ae() {
  return Ce().childs().drawOnAllCharts
}

function Le() {
  return Ce().childs().drawOnAllChartsMode
