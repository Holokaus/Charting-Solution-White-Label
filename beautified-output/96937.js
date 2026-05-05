/**
 * Module 96937 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

96937: (e, t, i) => {
    "use strict";
    i.d(t, {
      activateKeyPressHandler: () => m,
      showDialog: () => g
    });
    const s = [];
    let o = null;

    function n(e) {
      for (let t = 0; t < s.length; t++)
        if (s[t].name === e) return t;
      return -1
    }

    function r(e) {
      if (!o)
        for (let t = s.length - 1; t >= 0 && !0 !== s[t].func(e); t--);
    }
    window.addEventListener("keypress", r, !1);
    var a = i(4745),
      l = i(37103),
      c = i(59613),
      h = i(59672),
      d = i(8686),
      u = i(51768);
    let _ = null;

    function p(e) {
      if (!(0, a.globalKeypressMatches)(e)) return !1;
      e.preventDefault();
      const t = String.fromCharCode(e.charCode);
      return l.enabled("show_interval_dialog_on_key_press") && function(e) {
        return /[1-9]/.test(e)
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
      function(e, t) {
        const i = {
            name: e,
            func: t
          },
          o = n(i.name);
        o > -1 && s.splice(o, 1), s.unshift(i)
      }("symbolEdit", p)
    }

    function g(e) {
      const t = _ = (0, d.loadNewSymbolSearch)().then((i => {
        t === _ && i.showDefaultSearchDialog(e)
      }));
      return t
    }