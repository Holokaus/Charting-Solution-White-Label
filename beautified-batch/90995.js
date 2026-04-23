/**
 * Module 90995 - Auto-beautified from TradingView webpack bundle
 *
 * @module 90995
 * @date 2026-04-23
 * @size 2000 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 3217, 11542, 14881, 18216, 20506, 25881, 42164, 47074, 49470, 50151, 52563, 72351, 78525, 78861, 85891, 86738, 90763, 92226, 98753
 *
 * Exports:
 *   - getHideModeStateValue (internal: u)
 *   - getHideOptions (internal: h)
 *   - getSavedHideMode (internal: _)
 *   - toggleHideMode (internal: d)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getHideModeStateValue: () => u,
  getHideOptions: () => h,
  getSavedHideMode: () => _,
  toggleHideMode: () => d
});
var s = i(50151),
  o = i(11542),
  n = i(1765),
  r = i(49470),
  a = i(78861),
  l = i(14881);
let c = null;

function h() {
  if (null !== c) return c;
  const e = (0, r.tradingService)();
  return c = new Map([["drawings", {
    label: o.t(null, void 0, i(3217)),
    dataName: "hide-drawing-tools",
    tooltip: {
      active: o.t(null, void 0, i(85891)),
      inactive: o.t(null, void 0, i(52563))
    },
    getBoxedValue: () => (0, a.hideAllDrawings)(),
    trackLabel: "hide drawings"
  }], ["indicators", {
    label: o.t(null, void 0, i(72351)),
    dataName: "hide-indicators",
    tooltip: {
      active: o.t(null, void 0, i(98753)),
      inactive: o.t(null, void 0, i(78525))
    },
    getBoxedValue: () => (0, a.hideAllIndicators)(),
    trackLabel: "hide indicators"
  }], ["positions", {
    label: o.t(null, void 0, i(92226)),
    dataName: "hide-positions-and-orders",
    tooltip: {
      active: o.t(null, void 0, i(20506)),
      inactive: o.t(null, void 0, i(42164))
    },
    getBoxedValue: () => (0, s.ensureNotNull)(e).showTradedSources,
    inverted: !0,
    trackLabel: "hide positions"
  }], ["all", {
    label: o.t(null, void 0, i(47074)),
    dataName: "hide-all",
    tooltip: {
      active: e ? o.t(null, void 0, i(86738)) : o.t(null, void 0, i(25881)),
      inactive: e ? o.t(null, void 0, i(18216)) : o.t(null, void 0, i(90763))
    },
    trackLabel: "hide all"
  }]]), e || c.delete("positions"), c
}

function d(e) {
  e ? n.setValue("ChartToolsHideMode", e) : e = _();
  const t = p();
  let i = !t;
  return "all" === e ? (m(((e, t, s) => {
    e.setValue(s ? !i : i)
  })), l.hideStateChange.fire({
    hideMode: e,
    isActive: i
  }), i) : (m(((s, o, n) => {
    if (o === e) {
      const e = t ? !n : !s.value();
      s.setValue(e), i = n ? !e : e
    } else s.setValue(Boolean(n))
  })), l.hideStateChange.fire({
    hideMode: e,
    isActive: i
  }), i)
}

function u(e) {
  if ("all" === e) return p();
  const t = (0, s.ensureDefined)(h().get(e)),
    i = (0, s.ensureDefined)(t.getBoxedValue)().value();
  return t.inverted ? !i : i
}

function _() {
  const e = n.getValue("ChartToolsHideMode", "drawings");
  return h().has(e) ? e : "drawings"
}

function p() {
  let e = !0;
  return m(((t, i, s) => {
    const o = t.value();
    e = e && (s ? !o : o)
  })), e
}

function m(e) {
  h().forEach(((t, i) => {
    const s = t.getBoxedValue?.();
    s && e(s, i, t.inverted)
  }))
