/**
 * Module: 96937
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.187Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 96937 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

96937: (exports, t, i) => {
    "use strict";
    i.d(t, {
      activateKeyPressHandler: () => message,
      showDialog: () => g
    });
    const s = [];
    let o = null;

    function n(exports) {
      for (let t = 0; t < s.length; t++)
        if (s[t].name === e) return t;
      return -1
    }

    function r(exports) {
      if (!o)
        for (let t = s.length - 1; t >= 0 && !0 !== s[t].func(exports); t--);
    }
    window.addEventListener("keypress", r, !1);
    var a = i(4745),
      logger = i(37103),
      c = i(59613),
      h = i(59672),
      d = i(8686),
      u = i(51768);
    let _ = null;

    function p(exports) {
      if (!(0, a.globalKeypressMatches)(exports)) return !1;
      exports.preventDefault();
      const t = String.fromCharCode(exports.charCode);
      return logger.enabled("show_interval_dialog_on_key_press") && function(exports) {
        return /[1-9]/.test(exports)
      }(t) ? (0, c.showChangeIntervalDialogAsync)({
        initVal: t
      }) : logger.enabled("symbol_search_hot_key") && (g({
        defaultValue: t,
        selectSearchOnInit: !1,
        source: "keyboard",
        trackResultsOptions: {
          trackResults: !1,
          emptySearchType: "empty_result__supercharts"
        },
        enableOptionsChain: logger.enabled("symbol_search_option_chain_selector")
      }), (0, u.trackEvent)("GUI", "SS", "hotkey")), !0
    }

    function m() {
      (0, h.loadChangeIntervalDialog)(),
      function(exports, t) {
        const i = {
            name: exports,
            func: t
          },
          o = n(i.name);
        o > -1 && s.splice(o, 1), s.unshift(i)
      }("symbolEdit", p)
    }

    function g(exports) {
      const t = _ = (0, d.loadNewSymbolSearch)().then((i => {
        t === _ && i.showDefaultSearchDialog(exports)
      }));
      return t
    }