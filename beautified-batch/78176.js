/**
 * Module 78176 - Auto-beautified from TradingView webpack bundle
 *
 * @module 78176
 * @date 2026-04-23
 * @size 9635 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 9343, 15943, 16738, 22489, 24377, 24633, 28569, 29970, 43337, 45345, 47339, 48096, 50151, 50279, 54029, 55114, 60973, 81960, 82433, 83873, 90054
 *
 * Exports:
 *   - DefaultProperty (internal: F)
 *   - allowSavingDefaults (internal: A)
 *   - cleanUpStateKeys (internal: x)
 *   - createDefaultsState (internal: M)
 *   - extractAllPropertiesKeys (internal: L)
 *   - extractState (internal: E)
 *   - extractThemedColors (internal: D)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

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
var s = i(90054),
  o = i(16738),
  n = i(81960),
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

function P(e) {
  return e.value() === f.StdTheme.Dark ? f.StdTheme.Dark : f.StdTheme.Light
}

function x(e, t, i) {
  for (const s of t)
    if ((0, n.default)(e, s), i) {
      const t = s.split(".");
      for (t.pop(); t.length;) {
        const i = (0, r.default)(e, t);
        if (!(0, d.default)(i) || 0 !== Object.keys(i).length) break;
        (0, n.default)(e, t), t.pop()
      }
    }
}

function M(e, t, i, n) {
  const r = e ? w.defaults : w.factoryDefaults,
    a = t.startsWith("study_") ? (0, s.default)(r("study")) : {};
  let l = (0, s.default)(r(t, n));
  return t.startsWith("study_") && l.inputs && delete l.inputs.symbol, "linetoolicon" === t && e && (l.icon = (0, w.defaults)(t).icon), "linetooemoji" === t && e && (l.emoji = (0, w.defaults)(t).emoji), "linetoolsticker" === t && e && (l.sticker = (0, w.defaults)(t).sticker), l = (0, s.default)(l), x(l, i), (0, o.default)(a, l), a
}
let I = !1;

function A(e) {
  I = e
}

function L(e) {
  const t = Object.keys(e),
    i = [];
  return t.forEach((t => {
    const s = e[t];
    if ((0, d.default)(s)) {
      L(s).forEach((e => i.push(`${t}.${e}`)))
    } else i.push(t)
  })), i
}

function k(e, t, i = "") {
  if (1 === t.length && "*" === t[0]) return e;
  const s = {};
  for (const o of t) {
    const n = o.split("."),
      r = n[0],
      a = e[r],
      l = "" === i ? r : `${i}.${r}`;
    if (e.hasOwnProperty(r))
      if (n.length > 1) {
        if (!(0, d.default)(a)) {
          T.logError(`path ${l} must be an object, but it is a primitive`);
          continue
        } {
          const e = t.filter((e => e.startsWith(`${r}.`))).map((e => e.split(".").slice(1).join(".")));
          s[r] = k(a, e, l)
        }
      } else {
        if ((0, d.default)(a)) {
          T.logError(`path ${l} must be a primitive, but it is an object`);
          continue
        }
        s[r] = a
      }
  }
  return s
}

function E(e, t, i) {
  if (!e) return {};
  let s = e;
  return t && (s = k(e, t)), i && x(s, i, !0), s
}

function D(e, t) {
  const i = L(e),
    s = [];
  for (const o of i) {
    const i = (0, r.default)(e, o),
      n = (0, r.default)(t, o);
    (0, _.assert)(void 0 !== i, `Light theme value for ${o} is undefined`), (0,
      _.assert)(void 0 !== n, `Dark theme value for ${o} is undefined`), s.push({
      path: o,
      colors: [i, n]
    })
  }
  return s
}

function B(e, t) {
  e.includes(t) || e.push(t)
}

function V(e, t) {
  const i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
}

function R(e, t) {
  const i = (0, l.default)(e, ((e, i, s) => {
    if (void 0 === t[s]) return e;
    if (!(0, c.default)(i, t[s]))
      if ((0, d.default)(i) && (0, d.default)(t[s])) {
        const o = R(i, t[s]);
        void 0 !== o && (e[s] = o)
      } else e[s] = i;
    return e
  }), {});
  return (0, h.default)(i) ? void 0 : i
}

function N(e) {
  return e === f.StdTheme.Dark ? 1 : 0
}

function O(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (!(0, u.default)(e) || !(0, u.default)(t)) return !1;
  const i = (0, p.tryParseRgba)(e),
    s = (0, p.tryParseRgba)(t);
  return !(!i || !s) && !!(0, g.colorsAreCloseEnough)(e, t)
}
class F extends C.Property {
    constructor(e) {
      const {
        defaultName: t,
        nonThemedDefaultsKeys: i,
        themedDefaultsKeys: s,
        excludedDefaultsKeys: n = [],
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
      } = e;
      super(void 0, x), this._themedColors = [], this._restoreFactoryDefaultsEvent = new S.Delegate, this._replaceThemedColorsOnThemeChange = !1, this._forbidSavingDefaults = !1, this._defaultName = t, this._useUserPreferences = u, this._saveNonDefaultUserPreferencesOnly = p, this._ignoreAllowSavingDefaults = m, this._saveDefaultsConsumer = C, this._factoryDefaultsSupplier = T, this._allStateKeys = l, this._excludedStateKeys = c, this._nonThemedDefaultsKeys = i, this._themedDefaultsKeys = s, this._allDefaultsKeys = i || s ? [...i ?? [], ...s ?? []] : void 0, this._excludedDefaultsKeys = n, this._excludedTemplateKeys = h, this._themedColors = r, this._alwaysSaveDefaultKeys = g, (0, _.assert)(void 0 === this._allDefaultsKeys || 0 === this._excludedDefaultsKeys.length, "Defaults keys and excluded defaults keys cannot be used at the same time"), (0, _.assert)(void 0 === this._allStateKeys || 0 === this._excludedStateKeys.length, "State keys and excluded state keys cannot be used at the same time"), this._theme = I;
      const A = P(this._theme);
      this.merge((0, o.default)(this._factoryDefaultsForTheme((0, v.isStdThemeName)(A) ? A : f.StdTheme.Light), this._userSettings(), E(d, l, c))), r && a && this.setThemedColors(r), this._restoreFactoryDefaultsEvent = new S.Delegate
    }
    destroy() {
      this._theme?.release(), this._unsubscribeWatchedTheme?.(), super.destroy()
    }
    applyTemplate(e, t) {
      this.mergeAndFire(E((0, o.default)((0, s.default)(t), e), this._allStateKeys, this._excludedTemplateKeys))
    }
    preferences() {
      return E(this.state(this._excludedDefaultsKeys), this._allDefaultsKeys)
    }
    template() {
      return E(this.state(void 0, 4), void 0, this._excludedTemplateKeys)
    }
    mergePreferences(e) {
      this.mergeAndFire(E(e, this._allDefaultsKeys, this._excludedDefaultsKeys))
    }
    addExcludedKey(e, t) {
      1 & t && B(this._excludedDefaultsKeys, e), 2 & t && B(this._excludedStateKeys, e), 4 & t && B(this._excludedTemplateKeys, e)
    }
    removeExcludedKey(e, t) {
      1 & t && V(this._excludedDefaultsKeys, e), 2 & t && V(this._excludedStateKeys, e)
    }
    restoreFactoryDefaults() {
      const e = this.factoryDefaults();
      x(e, this._excludedDefaultsKeys), this.mergeAndFire(e), this._defaultName.startsWith("study_") && !this._defaultName.startsWith("study_VbPFixed") || this._saveDefaultsConsumer(this._defaultName), this._restoreFactoryDefaultsEvent.fire()
    }
    onRestoreFactoryDefaults() {
      return this._restoreFactoryDefaultsEvent
    }
    saveDefaults() {
      if (!this._useUserPreferences || this._forbidSavingDefaults) return;
      let e;
      if (this._saveNonDefaultUserPreferencesOnly) {
        const t = this.state(this._excludedDefaultsKeys),
          i = this.factoryDefaults();
        if (e = R(E(t, this._nonThemedDefaultsKeys), E(i, this._nonThemedDefaultsKeys, this._excludedDefaultsKeys)), this._alwaysSaveDefaultKeys.length) {
          const i = E(t, this._alwaysSaveDefaultKeys);
          e = e ?? {}, (0, o.default)(e, i)
        }
        const s = this.themeDefaults(P(this._theme)),
          n = this.themeState(),
          r = R(n, s);
        (0, h.default)(r) || (e = e ?? {}, (0, o.default)(e, n))
      } else e = this.preferences();
      this._saveDefaultsConsumer(this._defaultName, e)
    }
    themeDefaults(e) {
      if (this._themedColors) return function(e, t) {
        const i = {};
        for (const {
            path: s,
            colors: o
          }
          of e)(0, a.default)(i, s, o[N(t)]);
        return i
      }(this._themedColors, e === f.StdTheme.Dark ? f.StdTheme.Dark : f.StdTheme.Light);
      return E(this._factoryDefaultsSupplier(), this._themedDefaultsKeys, this._excludedDefaultsKeys)
    }
    factoryDefaults() {
      return this._factoryDefaultsForTheme(P(this._theme))
    }
    themeState() {
      const e = super.state(this._excludedDefaultsKeys),
        t = this._themedColors;
      return E(e, t ? t.map((e => e.path)) : this._themedDefaultsKeys)
    }
    allThemePropertiesAreDefault(e) {
      (0, _.assert)(!!this._themedColors, "This method should not be called if themed colors are not set");
      return function(e, t, i = []) {
        for (const s of i) {
          const i = s.path;
          if (!O((0, r.default)(e, i), (0, r.default)(t, i))) return !1
        }
        return !0
      }(this.themeState(), this.themeDefaults(e), this._themedColors)
    }
    clone(e) {
      return new F(this._options())
    }
    setThemedColors(e) {
      if (this._themedColors = e, void 0 === this._unsubscribeWatchedTheme) {
        const e = () => {
          this._updateThemedColors(!1)
        };
        this._theme.subscribe(e), this._unsubscribeWatchedTheme = () => this._theme.unsubscribe(e)
      }
      this._updateThemedColors(!0)
    }
    applyDefaultThemedProperties(e) {
      this._themedColors && this.mergeAndFire(this.themeDefaults(e))
    }
    state(e, t) {
      return E(super.state([...this._excludedStateKeys, ...e ?? []], t), this._allStateKeys)
    }
    _updateThemedColors(e) {
      if (!this._themedColors) return;
      const t = P(this._theme),
        i = t === f.StdTheme.Light ? f.StdTheme.Dark : f.StdTheme.Light;
      for (const s of this._themedColors) {
        const o = (0, _.ensureDefined)(this.childByPath(s.path)),
          n = s.colors[N(i)];
        ("" === o.value() || !e && O(o.value(), n)) && o.setValue(s.colors[N(t)])
      }
    }
    _userSettings() {
      if (!this._useUserPreferences) return;
      const e = M(!0, this._defaultName, [], null);
      if (!e) return;
      return E((0, b.extractStateWithSchema)(e, this._schema, 1), this._allDefaultsKeys, this._excludedDefaultsKeys)
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
    _childChanged(e, t) {
      super._childChanged(e, t), this._propertyAffectsDefaults(t) && this.saveDefaults()
    }
    _fireMergeAndFireChangedProps(e) {
      this._forbidSavingDefaults = !0, super._fireMergeAndFireChangedProps(e), this._forbidSavingDefaults = !1, e.some((e => this._propertyAffectsDefaults(e.pathToRootProperty()))) && this.saveDefaults()
    }
    _factoryDefaultsForTheme(e) {
      return (0, o.default)(this._factoryDefaultsSupplier(), this.themeDefaults(e))
    }
    _propertyAffectsDefaults(e) {
      return (this._ignoreAllowSavingDefaults || I) && !this._defaultName.startsWith("replayStudyStrategy") && (!this._defaultName.startsWith("study_") || this._defaultName.startsWith("study_VbPFixed")) && (this._allDefaultsKeys && this._allDefaultsKeys.includes(e) || !this._allDefaultsKeys && !this._excludedDefaultsKeys?.includes(e)) && (0, C.isPrimitiveType)(this.childByPath(e)?.value())
    }
