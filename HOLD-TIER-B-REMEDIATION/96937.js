/**
 * Module 96937 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

96937: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      activateKeyPressHandler: () => watchedValue_m,
      showDialog: () => watchedValue_g
    });
    const watchedValue_s = [];
    let watchedValue_o = null;

    function watchedValue_n(watchedValue_e) {
      for (let watchedValue_t = 0; watchedValue_t < watchedValue_s.length; watchedValue_t++)
        if (watchedValue_s[watchedValue_t].name === watchedValue_e) return watchedValue_t;
      return -1
    }

    function watchedValue_r(watchedValue_e) {
      if (!watchedValue_o)
        for (let watchedValue_t = watchedValue_s.length - 1; watchedValue_t >= 0 && !0 !== watchedValue_s[watchedValue_t].func(watchedValue_e); watchedValue_t--);
    }
    window.addEventListener("keypress", watchedValue_r, !1);
    var watchedValue_a = watchedValue_i(4745),
      watchedValue_l = watchedValue_i(37103),
      watchedValue_c = watchedValue_i(59613),
      watchedValue_h = watchedValue_i(59672),
      watchedValue_d = watchedValue_i(8686),
      watchedValue_u = watchedValue_i(51768);
    let _ = null;

    function watchedValue_p(watchedValue_e) {
      if (!(0, watchedValue_a.globalKeypressMatches)(watchedValue_e)) return !1;
      watchedValue_e.preventDefault();
      const watchedValue_t = String.fromCharCode(watchedValue_e.charCode);
      return watchedValue_l.enabled("show_interval_dialog_on_key_press") && function(watchedValue_e) {
        return /[1-9]/.test(watchedValue_e)
      }(watchedValue_t) ? (0, watchedValue_c.showChangeIntervalDialogAsync)({
        initVal: watchedValue_t
      }) : watchedValue_l.enabled("symbol_search_hot_key") && (watchedValue_g({
        defaultValue: watchedValue_t,
        selectSearchOnInit: !1,
        source: "keyboard",
        trackResultsOptions: {
          trackResults: !1,
          emptySearchType: "empty_result__supercharts"
        },
        enableOptionsChain: watchedValue_l.enabled("symbol_search_option_chain_selector")
      }), (0, watchedValue_u.trackEvent)("GUI", "SS", "hotkey")), !0
    }

    function watchedValue_m() {
      (0, watchedValue_h.loadChangeIntervalDialog)(),
      function(watchedValue_e, watchedValue_t) {
        const watchedValue_i = {
            name: watchedValue_e,
            func: watchedValue_t
          },
          watchedValue_o = watchedValue_n(watchedValue_i.name);
        watchedValue_o > -1 && watchedValue_s.splice(watchedValue_o, 1), watchedValue_s.unshift(watchedValue_i)
      }("symbolEdit", watchedValue_p)
    }

    function watchedValue_g(watchedValue_e) {
      const watchedValue_t = _ = (0, watchedValue_d.loadNewSymbolSearch)().then((watchedValue_i => {
        watchedValue_t === _ && watchedValue_i.showDefaultSearchDialog(watchedValue_e)
      }));
      return watchedValue_t
    }