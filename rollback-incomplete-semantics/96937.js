/**
 * Module 96937 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

96937: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      activateKeyPressHandler: () => m,
      showDialog: () => g
    });
    const watchedValue_s = [];
    let o = null;

    function watchedValue_n(watchedValue_e) {
      for (let t = 0; t < watchedValue_s.length; t++)
        if (watchedValue_s[t].name === watchedValue_e) return t;
      return -1
    }

    function r(watchedValue_e) {
      if (!o)
        for (let t = watchedValue_s.length - 1; t >= 0 && !0 !== watchedValue_s[t].func(watchedValue_e); t--);
    }
    window.addEventListener("keypress", r, !1);
    var a = i(4745),
      l = i(37103),
      c = i(59613),
      h = i(59672),
      d = i(8686),
      u = i(51768);
    let _ = null;

    function p(watchedValue_e) {
      if (!(0, a.globalKeypressMatches)(watchedValue_e)) return !1;
      watchedValue_e.preventDefault();
      const t = String.fromCharCode(watchedValue_e.charCode);
      return l.enabled("show_interval_dialog_on_key_press") && function(watchedValue_e) {
        return /[1-9]/.test(watchedValue_e)
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
      function(watchedValue_e, t) {
        const i = {
            name: watchedValue_e,
            func: t
          },
          o = watchedValue_n(i.name);
        o > -1 && watchedValue_s.splice(o, 1), watchedValue_s.unshift(i)
      }("symbolEdit", p)
    }

    function g(watchedValue_e) {
      const t = _ = (0, d.loadNewSymbolSearch)().then((i => {
        t === _ && i.showDefaultSearchDialog(watchedValue_e)
      }));
      return t
    }