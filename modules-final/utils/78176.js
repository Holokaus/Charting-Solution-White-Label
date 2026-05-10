/**
 * Module 78176 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

78176: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      DefaultProperty: () => F,
      allowSavingDefaults: () => A,
      cleanUpStateKeys: () => x,
      createDefaultsState: () => M,
      extractAllPropertiesKeys: () => L,
      extractState: () => E,
      extractThemedColors: () => D
    });
    var watchedValue_s = i(90054),
      o = i(16738),
      watchedValue_n = i(81960),
      r = i(54029),
      a = i(47339),
      l = i(28569),
      c = i(50279),
      h = i(15943),
      d = i(82433),
      u = i(83873),
      _ = i(50151),
      p = i(24377),
      m = i(9343),
      g = i(29970),
      f = i(24633),
      y = i(45345),
      v = i(22489),
      S = i(48096),
      b = i(55114),
      w = i(60973),
      C = i(43337);
    const T = (0, m.getLogger)("ThemedDefaults");

    function P(watchedValue_e) {
      return watchedValue_e.value() === f.StdTheme.Dark ? f.StdTheme.Dark : f.StdTheme.Light
    }

    function x(watchedValue_e, t, i) {
      for (const watchedValue_s of t)
        if ((0, watchedValue_n.default)(watchedValue_e, watchedValue_s), i) {
          const t = watchedValue_s.split(".");
          for (t.pop(); t.length;) {
            const i = (0, r.default)(watchedValue_e, t);
            if (!(0, d.default)(i) || 0 !== Object.keys(i).length) break;
            (0, watchedValue_n.default)(watchedValue_e, t), t.pop()
          }
        }
    }

    function M(watchedValue_e, t, i, watchedValue_n) {
      const r = watchedValue_e ? w.defaults : w.factoryDefaults,
        a = t.startsWith("study_") ? (0, watchedValue_s.default)(r("study")) : {};
      let l = (0, watchedValue_s.default)(r(t, watchedValue_n));
      return t.startsWith("study_") && l.inputs && delete l.inputs.symbol, "linetoolicon" === t && watchedValue_e && (l.icon = (0, w
          .defaults)(t).icon), "linetooemoji" === t && watchedValue_e && (l.emoji = (0, w.defaults)(t).emoji), "linetoolsticker" ===
        t && watchedValue_e && (l.sticker = (0, w.defaults)(t).sticker), l = (0, watchedValue_s.default)(l), x(l, i), (0, o.default)(a, l), a
    }
    let I = !1;

    function A(watchedValue_e) {
      I = watchedValue_e
    }

    function L(watchedValue_e) {
      const t = Object.keys(watchedValue_e),
        i = [];
      return t.forEach((t => {
        const watchedValue_s = watchedValue_e[t];
        if ((0, d.default)(watchedValue_s)) {
          L(watchedValue_s).forEach((watchedValue_e => i.push(`${t}.${watchedValue_e}`)))
        } else i.push(t)
      })), i
    }

    function k(watchedValue_e, t, i = "") {
      if (1 === t.length && "*" === t[0]) return watchedValue_e;
      const watchedValue_s = {};
      for (const o of t) {
        const watchedValue_n = o.split("."),
          r = watchedValue_n[0],
          a = watchedValue_e[r],
          l = "" === i ? r : `${i}.${r}`;
        if (watchedValue_e.hasOwnProperty(r))
          if (watchedValue_n.length > 1) {
            if (!(0, d.default)(a)) {
              T.logError(`path ${l} must be an object, but it is a primitive`);
              continue
            } {
              const watchedValue_e = t.filter((watchedValue_e => watchedValue_e.startsWith(`${r}.`))).map((watchedValue_e => watchedValue_e.split(".").slice(1).join(".")));
              watchedValue_s[r] = k(a, watchedValue_e, l)
            }
          } else {
            if ((0, d.default)(a)) {
              T.logError(`path ${l} must be a primitive, but it is an object`);
              continue
            }
            watchedValue_s[r] = a
          }
      }
      return watchedValue_s
    }

    function E(watchedValue_e, t, i) {
      if (!watchedValue_e) return {};
      let watchedValue_s = watchedValue_e;
      return t && (watchedValue_s = k(watchedValue_e, t)), i && x(watchedValue_s, i, !0), watchedValue_s
    }

    function D(watchedValue_e, t) {
      const i = L(watchedValue_e),
        watchedValue_s = [];
      for (const o of i) {
        const i = (0, r.default)(watchedValue_e, o),
          watchedValue_n = (0, r.default)(t, o);
        (0, _.assert)(void 0 !== i, `Light theme value for ${o} is undefined`), (0,
          _.assert)(void 0 !== watchedValue_n, `Dark theme value for ${o} is undefined`), watchedValue_s.push({
          path: o,
          colors: [i, watchedValue_n]
        })
      }
      return watchedValue_s
    }

    function B(watchedValue_e, t) {
      watchedValue_e.includes(t) || watchedValue_e.push(t)
    }

    function V(watchedValue_e, t) {
      const i = watchedValue_e.indexOf(t); - 1 !== i && watchedValue_e.splice(i, 1)
    }

    function R(watchedValue_e, t) {
      const i = (0, l.default)(watchedValue_e, ((watchedValue_e, i, watchedValue_s) => {
        if (void 0 === t[watchedValue_s]) return watchedValue_e;
        if (!(0, c.default)(i, t[watchedValue_s]))
          if ((0, d.default)(i) && (0, d.default)(t[watchedValue_s])) {
            const o = R(i, t[watchedValue_s]);
            void 0 !== o && (watchedValue_e[watchedValue_s] = o)
          } else watchedValue_e[watchedValue_s] = i;
        return watchedValue_e
      }), {});
      return (0, h.default)(i) ? void 0 : i
    }

    function N(watchedValue_e) {
      return watchedValue_e === f.StdTheme.Dark ? 1 : 0
    }

    function O(watchedValue_e, t) {
      if (watchedValue_e === t) return !0;
      if (typeof watchedValue_e != typeof t) return !1;
      if (!(0, u.default)(watchedValue_e) || !(0, u.default)(t)) return !1;
      const i = (0, p.tryParseRgba)(watchedValue_e),
        watchedValue_s = (0, p.tryParseRgba)(t);
      return !(!i || !watchedValue_s) && !!(0, g.colorsAreCloseEnough)(watchedValue_e, t)
    }
    class F extends C.Property {
      constructor(watchedValue_e) {
        const {
          defaultName: t,
          nonThemedDefaultsKeys: i,
          themedDefaultsKeys: watchedValue_s,
          excludedDefaultsKeys: watchedValue_n = [],
          themedColors: r,
          replaceThemedColorsOnThemeChange: a = !1,
          allStateKeys: l,
          excludedStateKeys: c = [],
          excludedTemplateKeys: h = [],
          state: d,
          useUserPreferences: u = !0,
          saveNonDefaultUserPreferencesOnly: p = !1,
          ignoreAllowSavingDefaults: m = !1,
          alwaysSaveDefaultKeys: g = ["version"],
          saveDefaultsConsumer: C = w.saveDefaults,
          factoryDefaultsSupplier: T = () => M(!1, t, [], null),
          schema: x = (0, b.createPropertySchema)(T()),
          theme: I = y.watchedTheme.spawnOwnership()
        } = watchedValue_e;
        super(void 0, x), this._themedColors = [], this._restoreFactoryDefaultsEvent = new S.Delegate, this
          ._replaceThemedColorsOnThemeChange = !1, this._forbidSavingDefaults = !1, this._defaultName = t, this
          ._useUserPreferences = u, this._saveNonDefaultUserPreferencesOnly = p, this._ignoreAllowSavingDefaults =
          m, this._saveDefaultsConsumer = C, this._factoryDefaultsSupplier = T, this._allStateKeys = l, this
          ._excludedStateKeys = c, this._nonThemedDefaultsKeys = i, this._themedDefaultsKeys = watchedValue_s, this
          ._allDefaultsKeys = i || watchedValue_s ? [...i ?? [], ...watchedValue_s ?? []] : void 0, this._excludedDefaultsKeys = watchedValue_n, this
          ._excludedTemplateKeys = h, this._themedColors = r, this._alwaysSaveDefaultKeys = g, (0, _.assert)(
            void 0 === this._allDefaultsKeys || 0 === this._excludedDefaultsKeys.length,
            "Defaults keys and excluded defaults keys cannot be used at the same time"), (0, _.assert)(void 0 ===
            this._allStateKeys || 0 === this._excludedStateKeys.length,
            "State keys and excluded state keys cannot be used at the same time"), this._theme = I;
        const A = P(this._theme);
        this.merge((0, o.default)(this._factoryDefaultsForTheme((0, v.isStdThemeName)(A) ? A : f.StdTheme.Light),
            this._userSettings(), E(d, l, c))), r && a && this.setThemedColors(r), this
          ._restoreFactoryDefaultsEvent = new S.Delegate
      }
      destroy() {
        this._theme?.release(), this._unsubscribeWatchedTheme?.(), super.destroy()
      }
      applyTemplate(watchedValue_e, t) {
        this.mergeAndFire(E((0, o.default)((0, watchedValue_s.default)(t), watchedValue_e), this._allStateKeys, this._excludedTemplateKeys))
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
      addExcludedKey(watchedValue_e, t) {
        1 & t && B(this._excludedDefaultsKeys, watchedValue_e), 2 & t && B(this._excludedStateKeys, watchedValue_e), 4 & t && B(this
          ._excludedTemplateKeys, watchedValue_e)
      }
      removeExcludedKey(watchedValue_e, t) {
        1 & t && V(this._excludedDefaultsKeys, watchedValue_e), 2 & t && V(this._excludedStateKeys, watchedValue_e)
      }
      restoreFactoryDefaults() {
        const watchedValue_e = this.factoryDefaults();
        x(watchedValue_e, this._excludedDefaultsKeys), this.mergeAndFire(watchedValue_e), this._defaultName.startsWith("study_") && !this
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
          const t = this.state(this._excludedDefaultsKeys),
            i = this.factoryDefaults();
          if (watchedValue_e = R(E(t, this._nonThemedDefaultsKeys), E(i, this._nonThemedDefaultsKeys, this
              ._excludedDefaultsKeys)), this._alwaysSaveDefaultKeys.length) {
            const i = E(t, this._alwaysSaveDefaultKeys);
            watchedValue_e = watchedValue_e ?? {}, (0, o.default)(watchedValue_e, i)
          }
          const watchedValue_s = this.themeDefaults(P(this._theme)),
            watchedValue_n = this.themeState(),
            r = R(watchedValue_n, watchedValue_s);
          (0, h.default)(r) || (watchedValue_e = watchedValue_e ?? {}, (0, o.default)(watchedValue_e, watchedValue_n))
        } else watchedValue_e = this.preferences();
        this._saveDefaultsConsumer(this._defaultName, watchedValue_e)
      }
      themeDefaults(watchedValue_e) {
        if (this._themedColors) return function(watchedValue_e, t) {
          const i = {};
          for (const {
              path: watchedValue_s,
              colors: o
            }
            of watchedValue_e)(0, a.default)(i, watchedValue_s, o[N(t)]);
          return i
        }(this._themedColors, watchedValue_e === f.StdTheme.Dark ? f.StdTheme.Dark : f.StdTheme.Light);
        return E(this._factoryDefaultsSupplier(), this._themedDefaultsKeys, this._excludedDefaultsKeys)
      }
      factoryDefaults() {
        return this._factoryDefaultsForTheme(P(this._theme))
      }
      themeState() {
        const watchedValue_e = super.state(this._excludedDefaultsKeys),
          t = this._themedColors;
        return E(watchedValue_e, t ? t.map((watchedValue_e => watchedValue_e.path)) : this._themedDefaultsKeys)
      }
      allThemePropertiesAreDefault(watchedValue_e) {
        (0, _.assert)(!!this._themedColors, "This method should not be called if themed colors are not set");
        return function(watchedValue_e, t, i = []) {
          for (const watchedValue_s of i) {
            const i = watchedValue_s.path;
            if (!O((0, r.default)(watchedValue_e, i), (0, r.default)(t, i))) return !1
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
      state(watchedValue_e, t) {
        return E(super.state([...this._excludedStateKeys, ...watchedValue_e ?? []], t), this._allStateKeys)
      }
      _updateThemedColors(watchedValue_e) {
        if (!this._themedColors) return;
        const t = P(this._theme),
          i = t === f.StdTheme.Light ? f.StdTheme.Dark : f.StdTheme.Light;
        for (const watchedValue_s of this._themedColors) {
          const o = (0, _.ensureDefined)(this.childByPath(watchedValue_s.path)),
            watchedValue_n = watchedValue_s.colors[N(i)];
          ("" === o.value() || !watchedValue_e && O(o.value(), watchedValue_n)) && o.setValue(watchedValue_s.colors[N(t)])
        }
      }
      _userSettings() {
        if (!this._useUserPreferences) return;
        const watchedValue_e = M(!0, this._defaultName, [], null);
        if (!watchedValue_e) return;
        return E((0, b.extractStateWithSchema)(watchedValue_e, this._schema, 1), this._allDefaultsKeys, this
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
      _childChanged(watchedValue_e, t) {
        super._childChanged(watchedValue_e, t), this._propertyAffectsDefaults(t) && this.saveDefaults()
      }
      _fireMergeAndFireChangedProps(watchedValue_e) {
        this._forbidSavingDefaults = !0, super._fireMergeAndFireChangedProps(watchedValue_e), this._forbidSavingDefaults = !1, watchedValue_e
          .some((watchedValue_e => this._propertyAffectsDefaults(watchedValue_e.pathToRootProperty()))) && this.saveDefaults()
      }
      _factoryDefaultsForTheme(watchedValue_e) {
        return (0, o.default)(this._factoryDefaultsSupplier(), this.themeDefaults(watchedValue_e))
      }
      _propertyAffectsDefaults(watchedValue_e) {
        return (this._ignoreAllowSavingDefaults || I) && !this._defaultName.startsWith("replayStudyStrategy") && (!
          this._defaultName.startsWith("study_") || this._defaultName.startsWith("study_VbPFixed")) && (this
          ._allDefaultsKeys && this._allDefaultsKeys.includes(watchedValue_e) || !this._allDefaultsKeys && !this
          ._excludedDefaultsKeys?.includes(watchedValue_e)) && (0, C.isPrimitiveType)(this.childByPath(watchedValue_e)?.value())
      }
    }
}
