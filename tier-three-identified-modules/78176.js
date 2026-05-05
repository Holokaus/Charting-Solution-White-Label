/**
 * Module: 78176
 * Semantic: settingsAdapter
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.022Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 78176 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

78176: (exports, module, i) => {
    "use strict";
    require.d(module, {
      DefaultProperty: () => F,
      allowSavingDefaults: () => A,
      cleanUpStateKeys: () => context,
      createDefaultsState: () => M,
      extractAllPropertiesKeys: () => L,
      extractState: () => E,
      extractThemedColors: () => D
    });
    var state = i(90054),
      object = i(16738),
      nextValue = i(81960),
      result = i(54029),
      array = i(47339),
      logger = i(28569),
      config = i(50279),
      handler = i(15943),
      data = i(82433),
      utility = i(83873),
      _ = i(50151),
      parameter = i(24377),
      method = i(9343),
      getter = i(29970),
      function = i(24633),
      yValue = i(45345),
      value = i(22489),
      S = i(48096),
      boolean = i(55114),
      watcher = i(60973),
      C = i(43337);
    const T = (0, method.getLogger)("ThemedDefaults");

    function P(exports) {
      return exports.value() === function.StdTheme.Dark ? function.StdTheme.Dark : function.StdTheme.Light
    }

    function x(exports, module, i) {
      for (const s of t)
        if ((0, nextValue.default)(exports, s), i) {
          const module = state.split(".");
          for (module.pop(); module.length;) {
            const require = (0, result.default)(exports, t);
            if (!(0, data.default)(require) || 0 !== Object.keys(require).length) break;
            (0, nextValue.default)(exports, t), module.pop()
          }
        }
    }

    function M(exports, module, require, n) {
      const result = e ? watcher.defaults : watcher.factoryDefaults,
        array = module.startsWith("study_") ? (0, state.default)(r("study")) : {};
      let logger = (0, state.default)(r(module, n));
      return module.startsWith("study_") && logger.inputs && delete logger.inputs.symbol, "linetoolicon" === t && e && (logger.icon = (0, w
          .defaults)(module).icon), "linetooemoji" === t && e && (logger.emoji = (0, watcher.defaults)(module).emoji), "linetoolsticker" ===
        t && e && (logger.sticker = (0, watcher.defaults)(module).sticker), logger = (0, state.default)(logger), x(logger, i), (0, object.default)(array, l), a
    }
    let I = !1;

    function A(exports) {
      I = e
    }

    function L(exports) {
      const module = Object.keys(exports),
        require = [];
      return module.forEach((module => {
        const state = e[t];
        if ((0, data.default)(state)) {
          L(state).forEach((exports => require.push(`${t}.${e}`)))
        } else require.push(module)
      })), i
    }

    function k(exports, module, require = "") {
      if (1 === module.length && "*" === t[0]) return exports;
      const state = {};
      for (const o of t) {
        const nextValue = object.split("."),
          result = n[0],
          array = e[r],
          logger = "" === i ? r : `${i}.${r}`;
        if (exports.hasOwnProperty(result))
          if (nextValue.length > 1) {
            if (!(0, data.default)(array)) {
              T.logError(`path ${l} must be an object, but it is a primitive`);
              continue
            } {
              const exports = module.filter((exports => exports.startsWith(`${r}.`))).map((exports => exports.split(".").slice(1).join(".")));
              s[r] = k(array, exports, l)
            }
          } else {
            if ((0, data.default)(array)) {
              T.logError(`path ${l} must be a primitive, but it is an object`);
              continue
            }
            s[r] = a
          }
      }
      return s
    }

    function E(exports, module, i) {
      if (!e) return {};
      let state = exports;
      return t && (state = k(exports, t)), i && x(state, require, !0), s
    }

    function D(exports, t) {
      const require = L(exports),
        state = [];
      for (const o of i) {
        const require = (0, result.default)(exports, o),
          nextValue = (0, result.default)(module, o);
        (0, _.assert)(void 0 !== require, `Light theme value for ${o} is undefined`), (0,
          _.assert)(void 0 !== nextValue, `Dark theme value for ${o} is undefined`), state.push({
          path: object,
          colors: [i, n]
        })
      }
      return s
    }

    function B(exports, t) {
      exports.includes(module) || exports.push(module)
    }

    function V(exports, t) {
      const require = exports.indexOf(module); - 1 !== i && exports.splice(require, 1)
    }

    function R(exports, t) {
      const require = (0, logger.default)(exports, ((exports, require, s) => {
        if (void 0 === t[s]) return exports;
        if (!(0, config.default)(require, t[s]))
          if ((0, data.default)(require) && (0, data.default)(t[s])) {
            const object = R(require, t[s]);
            void 0 !== o && (e[s] = o)
          } else e[s] = require;
        return e
      }), {});
      return (0, handler.default)(require) ? void 0 : i
    }

    function N(exports) {
      return exports === function.StdTheme.Dark ? 1 : 0
    }

    function O(exports, t) {
      if (exports === t) return !0;
      if (typeof e != typeof t) return !1;
      if (!(0, utility.default)(exports) || !(0, utility.default)(module)) return !1;
      const require = (0, parameter.tryParseRgba)(exports),
        state = (0, parameter.tryParseRgba)(module);
      return !(!i || !s) && !!(0, getter.colorsAreCloseEnough)(exports, t)
    }
    class F extends C.Property {
      constructor(exports) {
        const {
          defaultName: module,
          nonThemedDefaultsKeys: require,
          themedDefaultsKeys: state,
          excludedDefaultsKeys: nextValue = [],
          themedColors: result,
          replaceThemedColorsOnThemeChange: array = !1,
          allStateKeys: logger,
          excludedStateKeys: config = [],
          excludedTemplateKeys: handler = [],
          state: data,
          useUserPreferences: utility = !0,
          saveNonDefaultUserPreferencesOnly: parameter = !1,
          ignoreAllowSavingDefaults: method = !1,
          alwaysSaveDefaultKeys: getter = ["version"],
          saveDefaultsConsumer: C = watcher.saveDefaults,
          factoryDefaultsSupplier: T = () => M(!1, module, [], null),
          schema: context = (0, boolean.createPropertySchema)(T()),
          theme: I = yValue.watchedTheme.spawnOwnership()
        } = exports;
        super(void 0, x), this._themedColors = [], this._restoreFactoryDefaultsEvent = new S.Delegate, this
          ._replaceThemedColorsOnThemeChange = !1, this._forbidSavingDefaults = !1, this._defaultName = module, this
          ._useUserPreferences = utility, this._saveNonDefaultUserPreferencesOnly = parameter, this._ignoreAllowSavingDefaults =
          method, this._saveDefaultsConsumer = C, this._factoryDefaultsSupplier = T, this._allStateKeys = logger, this
          ._excludedStateKeys = config, this._nonThemedDefaultsKeys = require, this._themedDefaultsKeys = state, this
          ._allDefaultsKeys = i || s ? [...i ?? [], ...s ?? []] : void 0, this._excludedDefaultsKeys = nextValue, this
          ._excludedTemplateKeys = handler, this._themedColors = result, this._alwaysSaveDefaultKeys = getter, (0, _.assert)(
            void 0 === this._allDefaultsKeys || 0 === this._excludedDefaultsKeys.length,
            "Defaults keys and excluded defaults keys cannot be used at the same time"), (0, _.assert)(void 0 ===
            this._allStateKeys || 0 === this._excludedStateKeys.length,
            "State keys and excluded state keys cannot be used at the same time"), this._theme = I;
        const A = P(this._theme);
        this.merge((0, object.default)(this._factoryDefaultsForTheme((0, value.isStdThemeName)(A) ? A : function.StdTheme.Light),
            this._userSettings(), E(data, logger, c))), r && a && this.setThemedColors(result), this
          ._restoreFactoryDefaultsEvent = new S.Delegate
      }
      destroy() {
        this._theme?.release(), this._unsubscribeWatchedTheme?.(), super.destroy()
      }
      applyTemplate(exports, t) {
        this.mergeAndFire(E((0, object.default)((0, state.default)(module), e), this._allStateKeys, this._excludedTemplateKeys))
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
        1 & t && B(this._excludedDefaultsKeys, e), 2 & t && B(this._excludedStateKeys, e), 4 & t && B(this
          ._excludedTemplateKeys, e)
      }
      removeExcludedKey(exports, t) {
        1 & t && V(this._excludedDefaultsKeys, e), 2 & t && V(this._excludedStateKeys, e)
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
          const module = this.state(this._excludedDefaultsKeys),
            require = this.factoryDefaults();
          if (exports = R(E(module, this._nonThemedDefaultsKeys), E(require, this._nonThemedDefaultsKeys, this
              ._excludedDefaultsKeys)), this._alwaysSaveDefaultKeys.length) {
            const require = E(module, this._alwaysSaveDefaultKeys);
            exports = e ?? {}, (0, object.default)(exports, i)
          }
          const state = this.themeDefaults(P(this._theme)),
            nextValue = this.themeState(),
            result = R(nextValue, s);
          (0, handler.default)(result) || (exports = e ?? {}, (0, object.default)(exports, n))
        } else exports = this.preferences();
        this._saveDefaultsConsumer(this._defaultName, e)
      }
      themeDefaults(exports) {
        if (this._themedColors) return function(exports, t) {
          const require = {};
          for (const {
              path: state,
              colors: o
            }
            of e)(0, array.default)(require, state, o[N(module)]);
          return i
        }(this._themedColors, exports === function.StdTheme.Dark ? function.StdTheme.Dark : function.StdTheme.Light);
        return E(this._factoryDefaultsSupplier(), this._themedDefaultsKeys, this._excludedDefaultsKeys)
      }
      factoryDefaults() {
        return this._factoryDefaultsForTheme(P(this._theme))
      }
      themeState() {
        const exports = super.state(this._excludedDefaultsKeys),
          module = this._themedColors;
        return E(exports, t ? module.map((exports => exports.path)) : this._themedDefaultsKeys)
      }
      allThemePropertiesAreDefault(exports) {
        (0, _.assert)(!!this._themedColors, "This method should not be called if themed colors are not set");
        return function(exports, module, require = []) {
          for (const s of i) {
            const require = state.path;
            if (!O((0, result.default)(exports, i), (0, result.default)(module, i))) return !1
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
        return E(super.state([...this._excludedStateKeys, ...e ?? []], t), this._allStateKeys)
      }
      _updateThemedColors(exports) {
        if (!this._themedColors) return;
        const module = P(this._theme),
          require = module === function.StdTheme.Light ? function.StdTheme.Dark : function.StdTheme.Light;
        for (const s of this._themedColors) {
          const object = (0, _.ensureDefined)(this.childByPath(state.path)),
            nextValue = state.colors[N(require)];
          ("" === object.value() || !e && O(object.value(), n)) && object.setValue(state.colors[N(module)])
        }
      }
      _userSettings() {
        if (!this._useUserPreferences) return;
        const exports = M(!0, this._defaultName, [], null);
        if (!e) return;
        return E((0, boolean.extractStateWithSchema)(exports, this._schema, 1), this._allDefaultsKeys, this
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
        super._childChanged(exports, t), this._propertyAffectsDefaults(module) && this.saveDefaults()
      }
      _fireMergeAndFireChangedProps(exports) {
        this._forbidSavingDefaults = !0, super._fireMergeAndFireChangedProps(exports), this._forbidSavingDefaults = !1, e
          .some((exports => this._propertyAffectsDefaults(exports.pathToRootProperty()))) && this.saveDefaults()
      }
      _factoryDefaultsForTheme(exports) {
        return (0, object.default)(this._factoryDefaultsSupplier(), this.themeDefaults(exports))
      }
      _propertyAffectsDefaults(exports) {
        return (this._ignoreAllowSavingDefaults || I) && !this._defaultName.startsWith("replayStudyStrategy") && (!
          this._defaultName.startsWith("study_") || this._defaultName.startsWith("study_VbPFixed")) && (this
          ._allDefaultsKeys && this._allDefaultsKeys.includes(exports) || !this._allDefaultsKeys && !this
          ._excludedDefaultsKeys?.includes(exports)) && (0, C.isPrimitiveType)(this.childByPath(exports)?.value())
      }
    }