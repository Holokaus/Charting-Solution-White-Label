/**
 * Module 78176 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

78176: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      DefaultProperty: () => F,
      allowSavingDefaults: () => A,
      cleanUpStateKeys: () => watchedValue_x,
      createDefaultsState: () => M,
      extractAllPropertiesKeys: () => L,
      extractState: () => E,
      extractThemedColors: () => D
    });
    var watchedValue_s = watchedValue_i(90054),
      watchedValue_o = watchedValue_i(16738),
      watchedValue_n = watchedValue_i(81960),
      watchedValue_r = watchedValue_i(54029),
      watchedValue_a = watchedValue_i(47339),
      watchedValue_l = watchedValue_i(28569),
      watchedValue_c = watchedValue_i(50279),
      watchedValue_h = watchedValue_i(15943),
      watchedValue_d = watchedValue_i(82433),
      watchedValue_u = watchedValue_i(83873),
      _ = watchedValue_i(50151),
      watchedValue_p = watchedValue_i(24377),
      watchedValue_m = watchedValue_i(9343),
      watchedValue_g = watchedValue_i(29970),
      watchedValue_f = watchedValue_i(24633),
      watchedValue_y = watchedValue_i(45345),
      watchedValue_v = watchedValue_i(22489),
      S = watchedValue_i(48096),
      watchedValue_b = watchedValue_i(55114),
      watchedValue_w = watchedValue_i(60973),
      C = watchedValue_i(43337);
    const T = (0, watchedValue_m.getLogger)("ThemedDefaults");

    function P(watchedValue_e) {
      return watchedValue_e.value() === watchedValue_f.StdTheme.Dark ? watchedValue_f.StdTheme.Dark : watchedValue_f.StdTheme.Light
    }

    function watchedValue_x(watchedValue_e, watchedValue_t, watchedValue_i) {
      for (const watchedValue_s of watchedValue_t)
        if ((0, watchedValue_n.default)(watchedValue_e, watchedValue_s), watchedValue_i) {
          const watchedValue_t = watchedValue_s.split(".");
          for (watchedValue_t.pop(); watchedValue_t.length;) {
            const watchedValue_i = (0, watchedValue_r.default)(watchedValue_e, watchedValue_t);
            if (!(0, watchedValue_d.default)(watchedValue_i) || 0 !== Object.keys(watchedValue_i).length) break;
            (0, watchedValue_n.default)(watchedValue_e, watchedValue_t), watchedValue_t.pop()
          }
        }
    }

    function M(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_n) {
      const watchedValue_r = watchedValue_e ? watchedValue_w.defaults : watchedValue_w.factoryDefaults,
        watchedValue_a = watchedValue_t.startsWith("study_") ? (0, watchedValue_s.default)(watchedValue_r("study")) : {};
      let watchedValue_l = (0, watchedValue_s.default)(watchedValue_r(watchedValue_t, watchedValue_n));
      return watchedValue_t.startsWith("study_") && watchedValue_l.inputs && delete watchedValue_l.inputs.symbol, "linetoolicon" === watchedValue_t && watchedValue_e && (watchedValue_l.icon = (0, watchedValue_w
          .defaults)(watchedValue_t).icon), "linetooemoji" === watchedValue_t && watchedValue_e && (watchedValue_l.emoji = (0, watchedValue_w.defaults)(watchedValue_t).emoji), "linetoolsticker" ===
        watchedValue_t && watchedValue_e && (watchedValue_l.sticker = (0, watchedValue_w.defaults)(watchedValue_t).sticker), watchedValue_l = (0, watchedValue_s.default)(watchedValue_l), watchedValue_x(watchedValue_l, watchedValue_i), (0, watchedValue_o.default)(watchedValue_a, watchedValue_l), watchedValue_a
    }
    let I = !1;

    function A(watchedValue_e) {
      I = watchedValue_e
    }

    function L(watchedValue_e) {
      const watchedValue_t = Object.keys(watchedValue_e),
        watchedValue_i = [];
      return watchedValue_t.forEach((watchedValue_t => {
        const watchedValue_s = watchedValue_e[watchedValue_t];
        if ((0, watchedValue_d.default)(watchedValue_s)) {
          L(watchedValue_s).forEach((watchedValue_e => watchedValue_i.push(`${watchedValue_t}.${watchedValue_e}`)))
        } else watchedValue_i.push(watchedValue_t)
      })), watchedValue_i
    }

    function watchedValue_k(watchedValue_e, watchedValue_t, watchedValue_i = "") {
      if (1 === watchedValue_t.length && "*" === watchedValue_t[0]) return watchedValue_e;
      const watchedValue_s = {};
      for (const watchedValue_o of watchedValue_t) {
        const watchedValue_n = watchedValue_o.split("."),
          watchedValue_r = watchedValue_n[0],
          watchedValue_a = watchedValue_e[watchedValue_r],
          watchedValue_l = "" === watchedValue_i ? watchedValue_r : `${watchedValue_i}.${watchedValue_r}`;
        if (watchedValue_e.hasOwnProperty(watchedValue_r))
          if (watchedValue_n.length > 1) {
            if (!(0, watchedValue_d.default)(watchedValue_a)) {
              T.logError(`path ${watchedValue_l} must be an object, but it is watchedValue_a primitive`);
              continue
            } {
              const watchedValue_e = watchedValue_t.filter((watchedValue_e => watchedValue_e.startsWith(`${watchedValue_r}.`))).map((watchedValue_e => watchedValue_e.split(".").slice(1).join(".")));
              watchedValue_s[watchedValue_r] = watchedValue_k(watchedValue_a, watchedValue_e, watchedValue_l)
            }
          } else {
            if ((0, watchedValue_d.default)(watchedValue_a)) {
              T.logError(`path ${watchedValue_l} must be watchedValue_a primitive, but it is an object`);
              continue
            }
            watchedValue_s[watchedValue_r] = watchedValue_a
          }
      }
      return watchedValue_s
    }

    function E(watchedValue_e, watchedValue_t, watchedValue_i) {
      if (!watchedValue_e) return {};
      let watchedValue_s = watchedValue_e;
      return watchedValue_t && (watchedValue_s = watchedValue_k(watchedValue_e, watchedValue_t)), watchedValue_i && watchedValue_x(watchedValue_s, watchedValue_i, !0), watchedValue_s
    }

    function D(watchedValue_e, watchedValue_t) {
      const watchedValue_i = L(watchedValue_e),
        watchedValue_s = [];
      for (const watchedValue_o of watchedValue_i) {
        const watchedValue_i = (0, watchedValue_r.default)(watchedValue_e, watchedValue_o),
          watchedValue_n = (0, watchedValue_r.default)(watchedValue_t, watchedValue_o);
        (0, _.assert)(void 0 !== watchedValue_i, `Light theme value for ${watchedValue_o} is undefined`), (0,
          _.assert)(void 0 !== watchedValue_n, `Dark theme value for ${watchedValue_o} is undefined`), watchedValue_s.push({
          path: watchedValue_o,
          colors: [watchedValue_i, watchedValue_n]
        })
      }
      return watchedValue_s
    }

    function B(watchedValue_e, watchedValue_t) {
      watchedValue_e.includes(watchedValue_t) || watchedValue_e.push(watchedValue_t)
    }

    function V(watchedValue_e, watchedValue_t) {
      const watchedValue_i = watchedValue_e.indexOf(watchedValue_t); - 1 !== watchedValue_i && watchedValue_e.splice(watchedValue_i, 1)
    }

    function R(watchedValue_e, watchedValue_t) {
      const watchedValue_i = (0, watchedValue_l.default)(watchedValue_e, ((watchedValue_e, watchedValue_i, watchedValue_s) => {
        if (void 0 === watchedValue_t[watchedValue_s]) return watchedValue_e;
        if (!(0, watchedValue_c.default)(watchedValue_i, watchedValue_t[watchedValue_s]))
          if ((0, watchedValue_d.default)(watchedValue_i) && (0, watchedValue_d.default)(watchedValue_t[watchedValue_s])) {
            const watchedValue_o = R(watchedValue_i, watchedValue_t[watchedValue_s]);
            void 0 !== watchedValue_o && (watchedValue_e[watchedValue_s] = watchedValue_o)
          } else watchedValue_e[watchedValue_s] = watchedValue_i;
        return watchedValue_e
      }), {});
      return (0, watchedValue_h.default)(watchedValue_i) ? void 0 : watchedValue_i
    }

    function N(watchedValue_e) {
      return watchedValue_e === watchedValue_f.StdTheme.Dark ? 1 : 0
    }

    function O(watchedValue_e, watchedValue_t) {
      if (watchedValue_e === watchedValue_t) return !0;
      if (typeof watchedValue_e != typeof watchedValue_t) return !1;
      if (!(0, watchedValue_u.default)(watchedValue_e) || !(0, watchedValue_u.default)(watchedValue_t)) return !1;
      const watchedValue_i = (0, watchedValue_p.tryParseRgba)(watchedValue_e),
        watchedValue_s = (0, watchedValue_p.tryParseRgba)(watchedValue_t);
      return !(!watchedValue_i || !watchedValue_s) && !!(0, watchedValue_g.colorsAreCloseEnough)(watchedValue_e, watchedValue_t)
    }
    class F extends C.Property {
      constructor(watchedValue_e) {
        const {
          defaultName: watchedValue_t,
          nonThemedDefaultsKeys: watchedValue_i,
          themedDefaultsKeys: watchedValue_s,
          excludedDefaultsKeys: watchedValue_n = [],
          themedColors: watchedValue_r,
          replaceThemedColorsOnThemeChange: watchedValue_a = !1,
          allStateKeys: watchedValue_l,
          excludedStateKeys: watchedValue_c = [],
          excludedTemplateKeys: watchedValue_h = [],
          state: watchedValue_d,
          useUserPreferences: watchedValue_u = !0,
          saveNonDefaultUserPreferencesOnly: watchedValue_p = !1,
          ignoreAllowSavingDefaults: watchedValue_m = !1,
          alwaysSaveDefaultKeys: watchedValue_g = ["version"],
          saveDefaultsConsumer: C = watchedValue_w.saveDefaults,
          factoryDefaultsSupplier: T = () => M(!1, watchedValue_t, [], null),
          schema: watchedValue_x = (0, watchedValue_b.createPropertySchema)(T()),
          theme: I = watchedValue_y.watchedTheme.spawnOwnership()
        } = watchedValue_e;
        super(void 0, watchedValue_x), this._themedColors = [], this._restoreFactoryDefaultsEvent = new S.Delegate, this
          ._replaceThemedColorsOnThemeChange = !1, this._forbidSavingDefaults = !1, this._defaultName = watchedValue_t, this
          ._useUserPreferences = watchedValue_u, this._saveNonDefaultUserPreferencesOnly = watchedValue_p, this._ignoreAllowSavingDefaults =
          watchedValue_m, this._saveDefaultsConsumer = C, this._factoryDefaultsSupplier = T, this._allStateKeys = watchedValue_l, this
          ._excludedStateKeys = watchedValue_c, this._nonThemedDefaultsKeys = watchedValue_i, this._themedDefaultsKeys = watchedValue_s, this
          ._allDefaultsKeys = watchedValue_i || watchedValue_s ? [...watchedValue_i ?? [], ...watchedValue_s ?? []] : void 0, this._excludedDefaultsKeys = watchedValue_n, this
          ._excludedTemplateKeys = watchedValue_h, this._themedColors = watchedValue_r, this._alwaysSaveDefaultKeys = watchedValue_g, (0, _.assert)(
            void 0 === this._allDefaultsKeys || 0 === this._excludedDefaultsKeys.length,
            "Defaults keys and excluded defaults keys cannot be used at the same time"), (0, _.assert)(void 0 ===
            this._allStateKeys || 0 === this._excludedStateKeys.length,
            "State keys and excluded state keys cannot be used at the same time"), this._theme = I;
        const A = P(this._theme);
        this.merge((0, watchedValue_o.default)(this._factoryDefaultsForTheme((0, watchedValue_v.isStdThemeName)(A) ? A : watchedValue_f.StdTheme.Light),
            this._userSettings(), E(watchedValue_d, watchedValue_l, watchedValue_c))), watchedValue_r && watchedValue_a && this.setThemedColors(watchedValue_r), this
          ._restoreFactoryDefaultsEvent = new S.Delegate
      }
      destroy() {
        this._theme?.release(), this._unsubscribeWatchedTheme?.(), super.destroy()
      }
      applyTemplate(watchedValue_e, watchedValue_t) {
        this.mergeAndFire(E((0, watchedValue_o.default)((0, watchedValue_s.default)(watchedValue_t), watchedValue_e), this._allStateKeys, this._excludedTemplateKeys))
      }
      preferences() {
        return E(this.state(this._excludedDefaultsKeys), this._allDefaultsKeys)
      }
      template() {
        return E(this.state(void 0, 4), void 0, this._excludedTemplateKeys)
      }
      mergePreferences(watchedValue_e) {
        this.mergeAndFire(E(watchedValue_e, this._allDefaultsKeys, this._excludedDefaultsKeys))
      }
      addExcludedKey(watchedValue_e, watchedValue_t) {
        1 & watchedValue_t && B(this._excludedDefaultsKeys, watchedValue_e), 2 & watchedValue_t && B(this._excludedStateKeys, watchedValue_e), 4 & watchedValue_t && B(this
          ._excludedTemplateKeys, watchedValue_e)
      }
      removeExcludedKey(watchedValue_e, watchedValue_t) {
        1 & watchedValue_t && V(this._excludedDefaultsKeys, watchedValue_e), 2 & watchedValue_t && V(this._excludedStateKeys, watchedValue_e)
      }
      restoreFactoryDefaults() {
        const watchedValue_e = this.factoryDefaults();
        watchedValue_x(watchedValue_e, this._excludedDefaultsKeys), this.mergeAndFire(watchedValue_e), this._defaultName.startsWith("study_") && !this
          ._defaultName.startsWith("study_VbPFixed") || this._saveDefaultsConsumer(this._defaultName), this
          ._restoreFactoryDefaultsEvent.fire()
      }
      onRestoreFactoryDefaults() {
        return this._restoreFactoryDefaultsEvent
      }
      saveDefaults() {
        if (!this._useUserPreferences || this._forbidSavingDefaults) return;
        let watchedValue_e;
        if (this._saveNonDefaultUserPreferencesOnly) {
          const watchedValue_t = this.state(this._excludedDefaultsKeys),
            watchedValue_i = this.factoryDefaults();
          if (watchedValue_e = R(E(watchedValue_t, this._nonThemedDefaultsKeys), E(watchedValue_i, this._nonThemedDefaultsKeys, this
              ._excludedDefaultsKeys)), this._alwaysSaveDefaultKeys.length) {
            const watchedValue_i = E(watchedValue_t, this._alwaysSaveDefaultKeys);
            watchedValue_e = watchedValue_e ?? {}, (0, watchedValue_o.default)(watchedValue_e, watchedValue_i)
          }
          const watchedValue_s = this.themeDefaults(P(this._theme)),
            watchedValue_n = this.themeState(),
            watchedValue_r = R(watchedValue_n, watchedValue_s);
          (0, watchedValue_h.default)(watchedValue_r) || (watchedValue_e = watchedValue_e ?? {}, (0, watchedValue_o.default)(watchedValue_e, watchedValue_n))
        } else watchedValue_e = this.preferences();
        this._saveDefaultsConsumer(this._defaultName, watchedValue_e)
      }
      themeDefaults(watchedValue_e) {
        if (this._themedColors) return function(watchedValue_e, watchedValue_t) {
          const watchedValue_i = {};
          for (const {
              path: watchedValue_s,
              colors: watchedValue_o
            }
            of watchedValue_e)(0, watchedValue_a.default)(watchedValue_i, watchedValue_s, watchedValue_o[N(watchedValue_t)]);
          return watchedValue_i
        }(this._themedColors, watchedValue_e === watchedValue_f.StdTheme.Dark ? watchedValue_f.StdTheme.Dark : watchedValue_f.StdTheme.Light);
        return E(this._factoryDefaultsSupplier(), this._themedDefaultsKeys, this._excludedDefaultsKeys)
      }
      factoryDefaults() {
        return this._factoryDefaultsForTheme(P(this._theme))
      }
      themeState() {
        const watchedValue_e = super.state(this._excludedDefaultsKeys),
          watchedValue_t = this._themedColors;
        return E(watchedValue_e, watchedValue_t ? watchedValue_t.map((watchedValue_e => watchedValue_e.path)) : this._themedDefaultsKeys)
      }
      allThemePropertiesAreDefault(watchedValue_e) {
        (0, _.assert)(!!this._themedColors, "This method should not be called if themed colors are not set");
        return function(watchedValue_e, watchedValue_t, watchedValue_i = []) {
          for (const watchedValue_s of watchedValue_i) {
            const watchedValue_i = watchedValue_s.path;
            if (!O((0, watchedValue_r.default)(watchedValue_e, watchedValue_i), (0, watchedValue_r.default)(watchedValue_t, watchedValue_i))) return !1
          }
          return !0
        }(this.themeState(), this.themeDefaults(watchedValue_e), this._themedColors)
      }
      clone(watchedValue_e) {
        return new F(this._options())
      }
      setThemedColors(watchedValue_e) {
        if (this._themedColors = watchedValue_e, void 0 === this._unsubscribeWatchedTheme) {
          const watchedValue_e = () => {
            this._updateThemedColors(!1)
          };
          this._theme.subscribe(watchedValue_e), this._unsubscribeWatchedTheme = () => this._theme.unsubscribe(watchedValue_e)
        }
        this._updateThemedColors(!0)
      }
      applyDefaultThemedProperties(watchedValue_e) {
        this._themedColors && this.mergeAndFire(this.themeDefaults(watchedValue_e))
      }
      state(watchedValue_e, watchedValue_t) {
        return E(super.state([...this._excludedStateKeys, ...watchedValue_e ?? []], watchedValue_t), this._allStateKeys)
      }
      _updateThemedColors(watchedValue_e) {
        if (!this._themedColors) return;
        const watchedValue_t = P(this._theme),
          watchedValue_i = watchedValue_t === watchedValue_f.StdTheme.Light ? watchedValue_f.StdTheme.Dark : watchedValue_f.StdTheme.Light;
        for (const watchedValue_s of this._themedColors) {
          const watchedValue_o = (0, _.ensureDefined)(this.childByPath(watchedValue_s.path)),
            watchedValue_n = watchedValue_s.colors[N(watchedValue_i)];
          ("" === watchedValue_o.value() || !watchedValue_e && O(watchedValue_o.value(), watchedValue_n)) && watchedValue_o.setValue(watchedValue_s.colors[N(watchedValue_t)])
        }
      }
      _userSettings() {
        if (!this._useUserPreferences) return;
        const watchedValue_e = M(!0, this._defaultName, [], null);
        if (!watchedValue_e) return;
        return E((0, watchedValue_b.extractStateWithSchema)(watchedValue_e, this._schema, 1), this._allDefaultsKeys, this
          ._excludedDefaultsKeys)
      }
      _options() {
        return {
          defaultName: this._defaultName,
          factoryDefaultsSupplier: this._factoryDefaultsSupplier,
          state: this.state(),
          nonThemedDefaultsKeys: this._nonThemedDefaultsKeys,
          themedDefaultsKeys: this._themedDefaultsKeys,
          excludedDefaultsKeys: this._excludedDefaultsKeys,
          themedColors: this._themedColors,
          replaceThemedColorsOnThemeChange: this._replaceThemedColorsOnThemeChange,
          allStateKeys: this._allStateKeys,
          excludedStateKeys: this._excludedDefaultsKeys,
          excludedTemplateKeys: this._excludedTemplateKeys,
          useUserPreferences: this._useUserPreferences,
          saveNonDefaultUserPreferencesOnly: this._saveNonDefaultUserPreferencesOnly,
          ignoreAllowSavingDefaults: this._ignoreAllowSavingDefaults,
          saveDefaultsConsumer: this._saveDefaultsConsumer,
          alwaysSaveDefaultKeys: this._alwaysSaveDefaultKeys,
          theme: this._theme.spawnOwnership()
        }
      }
      _childChanged(watchedValue_e, watchedValue_t) {
        super._childChanged(watchedValue_e, watchedValue_t), this._propertyAffectsDefaults(watchedValue_t) && this.saveDefaults()
      }
      _fireMergeAndFireChangedProps(watchedValue_e) {
        this._forbidSavingDefaults = !0, super._fireMergeAndFireChangedProps(watchedValue_e), this._forbidSavingDefaults = !1, watchedValue_e
          .some((watchedValue_e => this._propertyAffectsDefaults(watchedValue_e.pathToRootProperty()))) && this.saveDefaults()
      }
      _factoryDefaultsForTheme(watchedValue_e) {
        return (0, watchedValue_o.default)(this._factoryDefaultsSupplier(), this.themeDefaults(watchedValue_e))
      }
      _propertyAffectsDefaults(watchedValue_e) {
        return (this._ignoreAllowSavingDefaults || I) && !this._defaultName.startsWith("replayStudyStrategy") && (!
          this._defaultName.startsWith("study_") || this._defaultName.startsWith("study_VbPFixed")) && (this
          ._allDefaultsKeys && this._allDefaultsKeys.includes(watchedValue_e) || !this._allDefaultsKeys && !this
          ._excludedDefaultsKeys?.includes(watchedValue_e)) && (0, C.isPrimitiveType)(this.childByPath(watchedValue_e)?.value())
      }
    }