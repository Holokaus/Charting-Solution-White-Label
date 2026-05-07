/**
 * Module 90995 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

90995: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      getHideModeStateValue: () => watchedValue_u,
      getHideOptions: () => watchedValue_h,
      getSavedHideMode: () => _,
      toggleHideMode: () => watchedValue_d
    });
    var watchedValue_s = watchedValue_i(50151),
      watchedValue_o = watchedValue_i(11542),
      watchedValue_n = watchedValue_i(1765),
      watchedValue_r = watchedValue_i(49470),
      watchedValue_a = watchedValue_i(78861),
      watchedValue_l = watchedValue_i(14881);
    let watchedValue_c = null;

    function watchedValue_h() {
      if (null !== watchedValue_c) return watchedValue_c;
      const watchedValue_e = (0, watchedValue_r.tradingService)();
      return watchedValue_c = new Map([
        ["drawings", {
          label: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(3217)),
          dataName: "hide-drawing-tools",
          tooltip: {
            active: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(85891)),
            inactive: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(52563))
          },
          getBoxedValue: () => (0, watchedValue_a.hideAllDrawings)(),
          trackLabel: "hide drawings"
        }],
        ["indicators", {
          label: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(72351)),
          dataName: "hide-indicators",
          tooltip: {
            active: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(98753)),
            inactive: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(78525))
          },
          getBoxedValue: () => (0, watchedValue_a.hideAllIndicators)(),
          trackLabel: "hide indicators"
        }],
        ["positions", {
          label: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(92226)),
          dataName: "hide-positions-and-orders",
          tooltip: {
            active: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(20506)),
            inactive: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(42164))
          },
          getBoxedValue: () => (0, watchedValue_s.ensureNotNull)(watchedValue_e).showTradedSources,
          inverted: !0,
          trackLabel: "hide positions"
        }],
        ["all", {
          label: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(47074)),
          dataName: "hide-all",
          tooltip: {
            active: watchedValue_e ? watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(86738)) : watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(25881)),
            inactive: watchedValue_e ? watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(18216)) : watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(90763))
          },
          trackLabel: "hide all"
        }]
      ]), watchedValue_e || watchedValue_c.delete("positions"), watchedValue_c
    }

    function watchedValue_d(watchedValue_e) {
      watchedValue_e ? watchedValue_n.setValue("ChartToolsHideMode", watchedValue_e) : watchedValue_e = _();
      const watchedValue_t = watchedValue_p();
      let watchedValue_i = !watchedValue_t;
      return "all" === watchedValue_e ? (watchedValue_m(((watchedValue_e, watchedValue_t, watchedValue_s) => {
        watchedValue_e.setValue(watchedValue_s ? !watchedValue_i : watchedValue_i)
      })), watchedValue_l.hideStateChange.fire({
        hideMode: watchedValue_e,
        isActive: watchedValue_i
      }), watchedValue_i) : (watchedValue_m(((watchedValue_s, watchedValue_o, watchedValue_n) => {
        if (watchedValue_o === watchedValue_e) {
          const watchedValue_e = watchedValue_t ? !watchedValue_n : !watchedValue_s.value();
          watchedValue_s.setValue(watchedValue_e), watchedValue_i = watchedValue_n ? !watchedValue_e : watchedValue_e
        } else watchedValue_s.setValue(Boolean(watchedValue_n))
      })), watchedValue_l.hideStateChange.fire({
        hideMode: watchedValue_e,
        isActive: watchedValue_i
      }), watchedValue_i)
    }

    function watchedValue_u(watchedValue_e) {
      if ("all" === watchedValue_e) return watchedValue_p();
      const watchedValue_t = (0, watchedValue_s.ensureDefined)(watchedValue_h().get(watchedValue_e)),
        watchedValue_i = (0, watchedValue_s.ensureDefined)(watchedValue_t.getBoxedValue)().value();
      return watchedValue_t.inverted ? !watchedValue_i : watchedValue_i
    }

    function _() {
      const watchedValue_e = watchedValue_n.getValue("ChartToolsHideMode", "drawings");
      return watchedValue_h().has(watchedValue_e) ? watchedValue_e : "drawings"
    }

    function watchedValue_p() {
      let watchedValue_e = !0;
      return watchedValue_m(((watchedValue_t, watchedValue_i, watchedValue_s) => {
        const watchedValue_o = watchedValue_t.value();
        watchedValue_e = watchedValue_e && (watchedValue_s ? !watchedValue_o : watchedValue_o)
      })), watchedValue_e
    }

    function watchedValue_m(watchedValue_e) {
      watchedValue_h().forEach(((watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_t.getBoxedValue?.();
        watchedValue_s && watchedValue_e(watchedValue_s, watchedValue_i, watchedValue_t.inverted)
      }))
    }