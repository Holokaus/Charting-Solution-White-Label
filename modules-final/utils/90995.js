/**
 * Module 90995 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

90995: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      getHideModeStateValue: () => u,
      getHideOptions: () => h,
      getSavedHideMode: () => _,
      toggleHideMode: () => d
    });
    var watchedValue_s = i(50151),
      o = i(11542),
      watchedValue_n = i(1765),
      r = i(49470),
      a = i(78861),
      l = i(14881);
    let c = null;

    function h() {
      if (null !== c) return c;
      const watchedValue_e = (0, r.tradingService)();
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
          getBoxedValue: () => (0, watchedValue_s.ensureNotNull)(watchedValue_e).showTradedSources,
          inverted: !0,
          trackLabel: "hide positions"
        }],
        ["all", {
          label: o.t(null, void 0, i(47074)),
          dataName: "hide-all",
          tooltip: {
            active: watchedValue_e ? o.t(null, void 0, i(86738)) : o.t(null, void 0, i(25881)),
            inactive: watchedValue_e ? o.t(null, void 0, i(18216)) : o.t(null, void 0, i(90763))
          },
          trackLabel: "hide all"
        }]
      ]), watchedValue_e || c.delete("positions"), c
    }

    function d(watchedValue_e) {
      watchedValue_e ? watchedValue_n.setValue("ChartToolsHideMode", watchedValue_e) : watchedValue_e = _();
      const t = p();
      let i = !t;
      return "all" === watchedValue_e ? (m(((watchedValue_e, t, watchedValue_s) => {
        watchedValue_e.setValue(watchedValue_s ? !i : i)
      })), l.hideStateChange.fire({
        hideMode: watchedValue_e,
        isActive: i
      }), i) : (m(((watchedValue_s, o, watchedValue_n) => {
        if (o === watchedValue_e) {
          const watchedValue_e = t ? !watchedValue_n : !watchedValue_s.value();
          watchedValue_s.setValue(watchedValue_e), i = watchedValue_n ? !watchedValue_e : watchedValue_e
        } else watchedValue_s.setValue(Boolean(watchedValue_n))
      })), l.hideStateChange.fire({
        hideMode: watchedValue_e,
        isActive: i
      }), i)
    }

    function u(watchedValue_e) {
      if ("all" === watchedValue_e) return p();
      const t = (0, watchedValue_s.ensureDefined)(h().get(watchedValue_e)),
        i = (0, watchedValue_s.ensureDefined)(t.getBoxedValue)().value();
      return t.inverted ? !i : i
    }

    function _() {
      const watchedValue_e = watchedValue_n.getValue("ChartToolsHideMode", "drawings");
      return h().has(watchedValue_e) ? watchedValue_e : "drawings"
    }

    function p() {
      let watchedValue_e = !0;
      return m(((t, i, watchedValue_s) => {
        const o = t.value();
        watchedValue_e = watchedValue_e && (watchedValue_s ? !o : o)
      })), watchedValue_e
    }

    function m(watchedValue_e) {
      h().forEach(((t, i) => {
        const watchedValue_s = t.getBoxedValue?.();
        watchedValue_s && watchedValue_e(watchedValue_s, i, t.inverted)
      }))
    }
}
