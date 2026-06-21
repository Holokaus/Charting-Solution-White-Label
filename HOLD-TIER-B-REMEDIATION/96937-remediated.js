/**
 * Module 96937 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

96937: (exports, t, i) => {
    "use strict";
    i.d(t, {
      activateKeyPressHandler: () => m,
      showDialog: () => g
    });
    const constants = [];
    let o = null;

    function name(exports) {
      for (let t = 0; t < constants.length; t++)
        if (constants[t].name === exports) return t;
      return -1
    }

    function data(exports) {
      if (!o)
        for (let t = constants.length - 1; t >= 0 && !0 !== constants[t].func(exports); t--);
    }
    window.addEventListener("keypress", r, !1);
    var array = i(4745),
      l = i(37103),
      c = i(59613),
      h = i(59672),
      d = i(8686),
      u = i(51768);
    let _ = null;

    function params(exports) {
      if (!(0, a.globalKeypressMatches)(exports)) return !1;
      exports.preventDefault();
      const t = String.fromCharCode(exports.charCode);
      return l.enabled("show_interval_dialog_on_key_press") && function(exports) {
        return /[1-9]/.test(exports)
      }(t) ? (0, c.showChangeIntervalDialogAsync)({
        initVal: t
      }) : l.enabled("symbol_search_hot_key") && (g({
        defaultValue: t,
        selectSearchOnInit: !1,
        source: "keyboard",
        trackResultsOptions: {
          trackResults: !1,
          emptySearchType: "empty_result__supercharts"
        },
        enableOptionsChain: l.enabled("symbol_search_option_chain_selector")
      }), (0, u.trackEvent)("GUI", "SS", "hotkey")), !0
    }

    function m() {
      (0, h.loadChangeIntervalDialog)(),
      function(exports, t) {
        const i = {
            name: exports,
            func: t
          },
          o = name(i.name);
        o > -1 && constants.splice(o, 1), constants.unshift(i)
      }("symbolEdit", p)
    }

    function g(exports) {
      const t = _ = (0, d.loadNewSymbolSearch)().then((index => {
        t === _ && i.showDefaultSearchDialog(exports)
      }));
      return t
    }