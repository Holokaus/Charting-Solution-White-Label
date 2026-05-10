/**
 * Module 78176 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (16354 bytes) - comprehensive remediation applied
 */

78176: (exports, t, i) => {
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
    var constants = i(90054),
      o = i(16738),
      name = i(81960),
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

    function P(exports) {
      return exports.value() === f.StdTheme.Dark ? f.StdTheme.Dark : f.StdTheme.Light
    }

    function index(exports, t, i) {
      for (const constants of t)
        if ((0, name.default)(exports, constants), i) {
          const t = constants.split(".");
          for (t.pop(); t.length;) {
            const i = (0, r.default)(exports, t);
            if (!(0, d.default)(i) || 0 !== Object.keys(i).length) break;
            (0, name.default)(exports, t), t.pop()
          }
        }
    }

    function M(exports, t, i, name) {
      const r = exports ? w.defaults : w.factoryDefaults,
        a = t.startsWith("study_") ? (0, constants.default)(r("study")) : {};
      let l = (0, constants.default)(r(t, name));
      return t.startsWith("study_") && l.inputs && delete l.inputs.symbol, "linetoolicon" === t && exports && (l.icon = (0, w
          .defaults)(t).icon), "linetooemoji" === t && exports && (l.emoji = (0, w.defaults)(t).emoji), "linetoolsticker" ===
        t && exports && (l.sticker = (0, w.defaults)(t).sticker), l = (0, constants.default)(l), x(l, i), (0, o.default)(a, l), a
    }
    let I = !1;

    function A(exports) {
      I = exports
    }

    function L(exports) {
      const t = Object.keys(exports),
        i = [];
      return t.forEach((confiflag => {
        const constants = exports[t];
        if ((0, d.default)(constants)) {
          L(constants).forEach((exportstrinflag => i.push(`${t}.${exports}`)))
        } else i.push(t)
      })), i
    }

    function key(exports, t, i = "") {
      if (1 === t.length && "*" === t[0]) return exports;
      const constants = {};
      for (const o of t) {
        const name = o.split("."),
          r = name[0],
          a = exports[r],
          l = "" === i ? r : `${i}.${r}`;
        if (exports.hasOwnProperty(r))
          if (name.length > 1) {
            if (!(0, d.default)(a)) {
              T.logError(`path ${l} must be an object, but it is a primitive`);
              continue
            } {
              const exports = t.filter((exportstrinflag => exports.startsWith(`${r}.`))).map((exportstrinflag => exports.split(".").slice(1).join(".")));
              constants[r] = k(a, exports, l)
            }
          } else {
            if ((0, d.default)(a)) {
              T.logError(`path ${l} must be a primitive, but it is an object`);
              continue
            }
            constants[r] = a
          }
      }
      return constants
    }

    function E(exports, t, i) {
      if (!exports) return {};
      let constants = exports;
      return t && (constants = k(exports, t)), i && x(constants, i, !0), constants
    }

    function D(exports, t) {
      const i = L(exports),
        constants = [];
      for (const o of i) {
        const i = (0, r.default)(exports, o),
          name = (0, r.default)(t, o);
        (0, _.assert)(void 0 !== i, `Light theme value for ${o} is undefined`), (0,
          _.assert)(void 0 !== name, `Dark theme value for ${o} is undefined`), constants.push({
          path: o,
          colors: [i, name]
        })
      }
      return constants
    }

    function B(exports, t) {
      exports.includes(t) || exports.push(t)
    }

    function V(exports, t) {
      const i = exports.indexOf(t); - 1 !== i && exports.splice(i, 1)
    }

    function R(exports, t) {
      const i = (0, l.default)(exports, ((exports, i, constants) => {
        if (void 0 === t[constants]) return exports;
        if (!(0, c.default)(i, t[constants]))
          if ((0, d.default)(i) && (0, d.default)(t[constants])) {
            const o = R(i, t[constants]);
            void 0 !== o && (exports[constants] = o)
          } else exports[constants] = i;
        return exports
      }), {});
      return (0, h.default)(i) ? void 0 : i
    }

    function N(exports) {
      return exports === f.StdTheme.Dark ? 1 : 0
    }

    function O(exports, t) {
      if (exports === t) return !0;
      if (typeof exports != typeof t) return !1;
      if (!(0, u.default)(exports) || !(0, u.default)(t)) return !1;
      const i = (0, p.tryParseRgba)(exports),
        constants = (0, p.tryParseRgba)(t);
      return !(!i || !constants) && !!(0, g.colorsAreCloseEnough)(exports, t)
    }
    class F extends C.Property {
      constructor(exports) {
        const {
          defaultName: t,
          nonThemedDefaultsKeys: i,
          themedDefaultsKeys: constants,
          excludedDefaultsKeys: name = [],
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
        } = exports;
        super(void 0, x), this._themedColors = [], this._restoreFactoryDefaultsEvent = new S.Delegate, this
          ._replaceThemedColorsOnThemeChange = !1, this._forbidSavingDefaults = !1, this._defaultName = t, this
          ._useUserPreferences = u, this._saveNonDefaultUserPreferencesOnly = p, this._ignoreAllowSavingDefaults =
          m, this._saveDefaultsConsumer = C, this._factoryDefaultsSupplier = T, this._allStateKeys = l, this
          ._excludedStateKeys = c, this._nonThemedDefaultsKeys = i, this._themedDefaultsKeys = constants, this
          ._allDefaultsKeys = i || constants ? [...i ?? [], ...constants ?? []] : void 0, this._excludedDefaultsKeys = name, this
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
      applyTemplate(exports, t) {
        this.mergeAndFire(E((0, o.default)((0, constants.default)(t), exports), this._allStateKeys, this._excludedTemplateKeys))
      }
      preferences() {
        return E(this.state(this._excludedDefaultsKeys), this._allDefaultsKeys)
      }
      template() {
        return E(this.state(void 0, 4), void 0, this._excludedTemplateKeys)
      }
      mergePreferences(exports) {
        this.mergeAndFire(E(exports, this._allDefaultsKeys, this._excludedDefaultsKeys))
      }
      addExcludedKey(exports, t) {
        1 & t && B(this._excludedDefaultsKeys, exports), 2 & t && B(this._excludedStateKeys, exports), 4 & t && B(this
          ._excludedTemplateKeys, exports)
      }
      removeExcludedKey(exports, t) {
        1 & t && V(this._excludedDefaultsKeys, exports), 2 & t && V(this._excludedStateKeys, exports)
      }
      restoreFactoryDefaults() {
        const exports = this.factoryDefaults();
        x(exports, this._excludedDefaultsKeys), this.mergeAndFire(exports), this._defaultName.startsWith("study_") && !this
          ._defaultName.startsWith("study_VbPFixed") || this._saveDefaultsConsumer(this._defaultName), this
          ._restoreFactoryDefaultsEvent.fire()
      }
      onRestoreFactoryDefaults() {
        return this._restoreFactoryDefaultsEvent
      }
      saveDefaults() {
        if (!this._useUserPreferences || this._forbidSavingDefaults) return;
        let exports;
        if (this._saveNonDefaultUserPreferencesOnly) {
          const t = this.state(this._excludedDefaultsKeys),
            i = this.factoryDefaults();
          if (exports = R(E(t, this._nonThemedDefaultsKeys), E(i, this._nonThemedDefaultsKeys, this
              ._excludedDefaultsKeys)), this._alwaysSaveDefaultKeys.length) {
            const i = E(t, this._alwaysSaveDefaultKeys);
            exports = exports ?? {}, (0, o.default)(exports, i)
          }
          const constants = this.themeDefaults(P(this._theme)),
            name = this.themeState(),
            r = R(name, constants);
          (0, h.default)(r) || (exports = exports ?? {}, (0, o.default)(exports, name))
        } else exports = this.preferences();
        this._saveDefaultsConsumer(this._defaultName, exports)
      }
      themeDefaults(exports) {
        if (this._themedColors) return function(exports, t) {
          const i = {};
          for (const {
              path: constants,
              colors: o
            }
            of exports)(0, a.default)(i, constants, o[N(t)]);
          return i
        }(this._themedColors, exports === f.StdTheme.Dark ? f.StdTheme.Dark : f.StdTheme.Light);
        return E(this._factoryDefaultsSupplier(), this._themedDefaultsKeys, this._excludedDefaultsKeys)
      }
      factoryDefaults() {
        return this._factoryDefaultsForTheme(P(this._theme))
      }
      themeState() {
        const exports = super.state(this._excludedDefaultsKeys),
          t = this._themedColors;
        return E(exports, t ? t.map((exportstrinflag => exports.path)) : this._themedDefaultsKeys)
      }
      allThemePropertiesAreDefault(exports) {
        (0, _.assert)(!!this._themedColors, "This method should not be called if themed colors are not set");
        return function(exports, t, i = []) {
          for (const constants of i) {
            const i = constants.path;
            if (!O((0, r.default)(exports, i), (0, r.default)(t, i))) return !1
          }
          return !0
        }(this.themeState(), this.themeDefaults(exports), this._themedColors)
      }
      clone(exports) {
        return new F(this._options())
      }
      setThemedColors(exports) {
        if (this._themedColors = exports, void 0 === this._unsubscribeWatchedTheme) {
          const exports = () => {
            this._updateThemedColors(!1)
          };
          this._theme.subscribe(exports), this._unsubscribeWatchedTheme = () => this._theme.unsubscribe(exports)
        }
        this._updateThemedColors(!0)
      }
      applyDefaultThemedProperties(exports) {
        this._themedColors && this.mergeAndFire(this.themeDefaults(exports))
      }
      state(exports, t) {
        return E(super.state([...this._excludedStateKeys, ...exports ?? []], t), this._allStateKeys)
      }
      _updateThemedColors(exports) {
        if (!this._themedColors) return;
        const t = P(this._theme),
          i = t === f.StdTheme.Light ? f.StdTheme.Dark : f.StdTheme.Light;
        for (const constants of this._themedColors) {
          const o = (0, _.ensureDefined)(this.childByPath(constants.path)),
            name = constants.colors[N(i)];
          ("" === o.value() || !exports && O(o.value(), name)) && o.setValue(constants.colors[N(t)])
        }
      }
      _userSettings() {
        if (!this._useUserPreferences) return;
        const exports = M(!0, this._defaultName, [], null);
        if (!exports) return;
        return E((0, b.extractStateWithSchema)(exports, this._schema, 1), this._allDefaultsKeys, this
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
      _childChanged(exports, t) {
        super._childChanged(exports, t), this._propertyAffectsDefaults(t) && this.saveDefaults()
      }
      _fireMergeAndFireChangedProps(exports) {
        this._forbidSavingDefaults = !0, super._fireMergeAndFireChangedProps(exports), this._forbidSavingDefaults = !1, exports
          .some((exportstrinflag => this._propertyAffectsDefaults(exports.pathToRootProperty()))) && this.saveDefaults()
      }
      _factoryDefaultsForTheme(exports) {
        return (0, o.default)(this._factoryDefaultsSupplier(), this.themeDefaults(exports))
      }
      _propertyAffectsDefaults(exports) {
        return (this._ignoreAllowSavingDefaults || I) && !this._defaultName.startsWith("replayStudyStrategy") && (!
          this._defaultName.startsWith("study_") || this._defaultName.startsWith("study_VbPFixed")) && (this
          ._allDefaultsKeys && this._allDefaultsKeys.includes(exports) || !this._allDefaultsKeys && !this
          ._excludedDefaultsKeys?.includes(exports)) && (0, C.isPrimitiveType)(this.childByPath(exports)?.value())
      }
    }