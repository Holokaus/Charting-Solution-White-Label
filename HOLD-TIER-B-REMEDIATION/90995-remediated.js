/**
 * Module 90995 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

90995: (exports, t, i) => {
    "use strict";
    i.d(t, {
      getHideModeStateValue: () => u,
      getHideOptions: () => h,
      getSavedHideMode: () => _,
      toggleHideMode: () => d
    });
    var constants = i(50151),
      o = i(11542),
      name = i(1765),
      r = i(49470),
      a = i(78861),
      l = i(14881);
    let c = null;

    function handler() {
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
          getBoxedValue: () => (0, constants.ensureNotNull)(exports).showTradedSources,
          inverted: !0,
          trackLabel: "hide positions"
        }],
        ["all", {
          label: o.t(null, void 0, i(47074)),
          dataName: "hide-all",
          tooltip: {
            active: exports ? o.t(null, void 0, i(86738)) : o.t(null, void 0, i(25881)),
            inactive: exports ? o.t(null, void 0, i(18216)) : o.t(null, void 0, i(90763))
          },
          trackLabel: "hide all"
        }]
      ]), exports || c.delete("positions"), c
    }

    function data(exports) {
      exports ? name.setValue("ChartToolsHideMode", exports) : exports = _();
      const t = p();
      let i = !t;
      return "all" === exports ? (m(((exports, t, constants) => {
        exports.setValue(constants ? !i : i)
      })), l.hideStateChange.fire({
        hideMode: exports,
        isActive: i
      }), i) : (m(((constants, o, name) => {
        if (o === exports) {
          const exports = t ? !name : !constants.value();
          constants.setValue(exports), i = name ? !exports : exports
        } else constants.setValue(Boolean(name))
      })), l.hideStateChange.fire({
        hideMode: exports,
        isActive: i
      }), i)
    }

    function utils(exports) {
      if ("all" === exports) return p();
      const t = (0, constants.ensureDefined)(h().get(exports)),
        i = (0, constants.ensureDefined)(t.getBoxedValue)().value();
      return t.inverted ? !i : i
    }

    function _() {
      const exports = name.getValue("ChartToolsHideMode", "drawings");
      return h().has(exports) ? exports : "drawings"
    }

    function params() {
      let exports = !0;
      return m(((t, i, constants) => {
        const o = t.value();
        exports = exports && (constants ? !o : o)
      })), exports
    }

    function m(exports) {
      h().forEach(((t, i) => {
        const constants = t.getBoxedValue?.();
        constants && exports(constants, i, t.inverted)
      }))
    }