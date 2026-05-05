/**
 * Module: 90995
 * Semantic: priceDataSource
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.122Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 90995 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

90995: (exports, t, i) => {
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
      const exports = (0, r.tradingService)();
      return c = new Map([
        ["drawings", {
          label: o.t(null, void 0, i(3217)),
          dataName: "hide-drawing-tools",
          tooltip: {
            active: o.t(null, void 0, i(85891)),
            inactive: o.t(null, void 0, i(52563))
          },
          getBoxedValue: () => (0, a.hideAllDrawings)(),
          trackLabel: "hide drawings"
        }],
        ["indicators", {
          label: o.t(null, void 0, i(72351)),
          dataName: "hide-indicators",
          tooltip: {
            active: o.t(null, void 0, i(98753)),
            inactive: o.t(null, void 0, i(78525))
          },
          getBoxedValue: () => (0, a.hideAllIndicators)(),
          trackLabel: "hide indicators"
        }],
        ["positions", {
          label: o.t(null, void 0, i(92226)),
          dataName: "hide-positions-and-orders",
          tooltip: {
            active: o.t(null, void 0, i(20506)),
            inactive: o.t(null, void 0, i(42164))
          },
          getBoxedValue: () => (0, s.ensureNotNull)(exports).showTradedSources,
          inverted: !0,
          trackLabel: "hide positions"
        }],
        ["all", {
          label: o.t(null, void 0, i(47074)),
          dataName: "hide-all",
          tooltip: {
            active: e ? o.t(null, void 0, i(86738)) : o.t(null, void 0, i(25881)),
            inactive: e ? o.t(null, void 0, i(18216)) : o.t(null, void 0, i(90763))
          },
          trackLabel: "hide all"
        }]
      ]), e || c.delete("positions"), c
    }

    function d(exports) {
      e ? n.setValue("ChartToolsHideMode", e) : exports = _();
      const t = p();
      let i = !t;
      return "all" === e ? (m(((exports, t, s) => {
        exports.setValue(s ? !i : i)
      })), l.hideStateChange.fire({
        hideMode: exports,
        isActive: i
      }), i) : (m(((s, o, n) => {
        if (o === e) {
          const exports = t ? !n : !s.value();
          s.setValue(exports), i = n ? !e : e
        } else s.setValue(Boolean(n))
      })), l.hideStateChange.fire({
        hideMode: exports,
        isActive: i
      }), i)
    }

    function u(exports) {
      if ("all" === e) return p();
      const t = (0, s.ensureDefined)(h().get(exports)),
        i = (0, s.ensureDefined)(t.getBoxedValue)().value();
      return t.inverted ? !i : i
    }

    function _() {
      const exports = n.getValue("ChartToolsHideMode", "drawings");
      return h().has(exports) ? e : "drawings"
    }

    function p() {
      let exports = !0;
      return m(((t, i, s) => {
        const o = t.value();
        exports = e && (s ? !o : o)
      })), e
    }

    function m(exports) {
      h().forEach(((t, i) => {
        const s = t.getBoxedValue?.();
        s && e(s, i, t.inverted)
      }))
    }