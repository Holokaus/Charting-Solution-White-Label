// Module 15219
// Original file: 15219.js
// Size: 10.0 KB
// Purpose: Auto-extracted webpack module from TradingView library

(e, t, i) => {
  "use strict";
  i.d(t, {
    StudyVersioning: () => m
  });
  var s = i(16738),
    o = i(50151),
    n = i(19844),
    r = i(86821),
    a = i.n(r),
    l = i(9343),
    c = i(9787),
    h = i(43046),
    d = i(87465);
  const u = (0, l.getLogger)("Chart.Study.Versioning"),
    _ = 1e12;
  var p;
  ! function(e) {
    e[e.VersionStudyArgSource = 41] = "VersionStudyArgSource", e[e.MetaInfoFormatVersionSosV2 = 42] =
      "MetaInfoFormatVersionSosV2", e[e.VersionPineProtectTv4164 = 43] = "VersionPineProtectTv4164", e[e
        .VersionNewStudyPrecisionFormat = 46] = "VersionNewStudyPrecisionFormat", e[e.CurrentMetaInfoFormatVersion =
      54] = "CurrentMetaInfoFormatVersion"
  }(p || (p = {}));
  class m {
    constructor(e, t) {
      if (this._migrations = {}, !e) throw new Error("No studies metainfo");
      if (this._studiesMetainfo = e, !t) throw new Error("No studies migrations");
      this._studiesMigrations = t;
      for (let e = 0; e < this._studiesMigrations.length; e++) {
        const t = this._studiesMigrations[e],
          i = t.versFrom,
          s = t.versTo;
        for (let e = 0; e < t.studyMigrations.length; e++) {
          const o = t.studyMigrations[e],
            n = o.studyId;
          if (0 === o.rules.length) {
            u.logError("Study Migration should have at least one convertion rule");
            continue
          }
          const r = n in this._migrations ? this._migrations[n] : new(a())(n);
          r.addMigration(i, s, o.rules), this._migrations[n] = r
        }
      }
      this._clientMigrations = [(e, t) => {
        if (0 === this._studiesMetainfo.length || !e.isTVScript || e.version >= 22) return t;
        const i = {};
        let s = 0,
          o = 0,
          n = t[o];
        for (; void 0 !== n;) {
          const e = t[n.id];
          n.isFake && (n.id = "in_" + s++), i[o] = n, i[n.id] = e, o++, n = t[o]
        }
        return i
      }]
    }
    updateMetaInfoAsync(e, t) {
      n.StudyMetaInfo.versionOf(e);
      {
        let t = null;
        const i = this._studiesMetainfo;
        for (let s = 0; s < i.length; s++)
          if (i[s].id === e.id) {
            t = i[s];
            break
          } return {
          sync: !0,
          result: t ? new n.StudyMetaInfo(t.state()) : null
        }
      }
    }
    updateStudyState(e, t, i) {
      if (null == e || null == t || null == i) return e;
      e = (0, d.clone)(e), this.updateStudyInputsIfNeeded(e, t.version, i);
      for (const i of this._clientMigrations) {
        const s = i.call(this, t, e.inputs);
        Object.keys(s)
          .length === Object.keys(e.inputs)
          .length ? e.inputs = s : u.logWarn(
            "StudyVersioning._clientMigrations application returned bad result. Skipping it...")
      }
      const s = n.StudyMetaInfo.versionOf(t);
      if (t.isTVScript && t.TVScriptSourceCode && s >= 12 && s <= 26) {
        const s = {};
        for (let e = 0; e < t.plots.length; ++e) {
          const o = t.plots[e],
            n = i.plots[e];
          s[o.id] = n.id
        }
        const o = Object.keys(e.styles);
        for (let t = 0; t < o.length; ++t) {
          const i = o[t],
            n = e.styles[i];
          delete e.styles[i];
          const r = s[i];
          e.styles[r] = n
        }
        const n = Object.keys(e.plots);
        for (let t = 0; t < n.length; ++t) {
          const i = n[t],
            o = e.plots[i].id;
          e.plots[i].id = s[o]
        }
      }
      return e
    }
    updateStudyInputsIfNeeded(e, t, i) {
      if (!(i.isTVScript || !!i.pine) && t !== i.version) {
        const s = i && i.defaults.inputs;
        e.inputs = this.updateStudyInputs(i.id, t, i.version, e.inputs, s)
      }
    }
    updateStudyInputs(e, t, i, s, o) {
      let n = (0, d.clone)(s);
      if (e in this._migrations) {
        const s = c.Version.parse(t);
        let o;
        if ("last" === i) {
          const t = this.lastVersionOfStudy(e);
          o = c.Version.parse(t)
        } else o = c.Version.parse(i);
        n = this._migrations[e].updateInputs(s, o, n)
      }
      if (null == o) return n;
      for (const e in o) e in n || (n[e] = o[e]);
      for (const i in n)
        if (!(i in o)) {
          const s = n[i];
          u.logWarn(
            `Extra input detected, studyId='${e}', versionFrom='${t}', inputId='${i}', inputValue='${s}', removing it and continue...`
            ), delete n[i]
        } return n
    }
    lastVersionOfStudy(e) {
      return (0, o.ensureDefined)(this._studiesMetainfo.find((t => t.id === e)))
        .version
    }
    updateMetaInfo(e) {
      if (!e) return e;
      (0, o.assert)(e instanceof n.StudyMetaInfo), (0, o.assert)(!e.isTVScript,
        "This method should update only built-in java indicators metaInfo. For Pine indicators use updateMetaInfoAsync"
        );
      const t = this._studiesMetainfo.find((t => e.id === t.id));
      return t ? new n.StudyMetaInfo(t.state()) : null
    }
    static patchPointsBasedStudyState(e) {
      return this._fixInputsMaxValue(e.state, e.metaInfo), e
    }
    static patchStudyData(e, t, i, s) {
      return {
        data: t,
        nsData: i,
        indexes: s ?? void 0
      }
    }
    static patchPointsBasedStudyData(e, t) {
      return t
    }
    static patchPropsStateAndMetaInfo(e, t, i) {
      let o = t.state();
      "Script$BOOKER" !== t.productId || o.alerts || delete e.alerts, this._fixInputsOrder(e, o), this
        ._fixInputsMaxValue(e, o);
      const r = this.splitInputs(e.inputs);
      e.inputs = r.obj;
      const a = n.StudyMetaInfo.versionOf(t);
      a < 42 && o.isChildStudy && (e.isChildStudy = o.isChildStudy);
      if (t.isTVScript && t.version < 60 && ("Script$TV_EARNINGS@tv-scripting" !== t.id &&
          "Script$TV_DIVIDENDS@tv-scripting" !== t.id && "Script$TV_SPLITS@tv-scripting" !== t.id || delete o
          .TVScriptSourceCode), "Volume" !== t.id && "Volume@tv-basicstudies" !== t.id || 0 !== t.inputs.length || (o
          .inputs = [{
            id: "length",
            type: "integer",
            defval: 20,
            min: 1,
            max: 1e3
          }], o.plots.push({
            id: "vol_ma",
            type: "line"
          })), "Volume@tv-basicstudies" === t.id && t.version && t.version <= 46 && void 0 === e.styles.vol
        .transparency && (e.styles.vol.transparency = e.transparency || 87), "PivotPointsStandard@tv-basicstudies" ===
        t.id && (0 === o.inputs.length ? (e.inputs = {
          kind: "Traditional",
          showHistoricalPivots: !0
        }, o.inputs = [{
          defval: "Traditional",
          id: "kind",
          type: "text",
          options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
        }, {
          id: "showHistoricalPivots",
          type: "bool",
          defval: !0
        }]) : 1 === o.inputs.length && (e.inputs = {
          kind: "Traditional"
        }, o.inputs = [{
          defval: "Traditional",
          id: "kind",
          type: "text",
          options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
        }, {
          id: "showHistoricalPivots",
          type: "bool",
          defval: !0
        }]), void 0 === e._hardCodedDefaultsVersion)) {
        e._hardCodedDefaultsVersion = 1;
        const t = e.color;
        delete e.color, e.levelsStyle = {
          colors: {
            P: t,
            "S1/R1": t,
            "S2/R2": t,
            "S3/R3": t,
            "S4/R4": t,
            "S5/R5": t
          }
        }
      }
      "CMF" === t.shortId && 2 === o.inputs.length && (e.inputs = {
          length: e.inputs["length fast"]
        }, o.inputs = o.inputs.splice(0, 1), o.inputs[0].id = "length"),
        o.defaults && void 0 === o.defaults.precision && a < 46 && (-1 !== ["Volume@tv-basicstudies",
            "VbPVisible@tv-volumebyprice", "VbPSessions@tv-volumebyprice"].indexOf(t.id) ? o.defaults.precision = 0 :
          o.defaults.precision = 4);
      let l = t.id;
      if (t.version < 60) {
        const e = ["TV_DIVIDENDS", "TV_SPLITS", "TV_EARNINGS"],
          i = 6;
        for (let s = 0; s < e.length; s++) t.id.startsWith("Script$" + e[s] + "@tv-scripting") && (o.fullId = "ESD" +
          o.fullId.substring(i), o.id = "ESD" + o.id.substring(i), o.name && (o.name = "ESD" + o.name.substring(i)),
          o.shortId = "ESD" + o.shortId.substring(i), o.productId = "ESD" + o.productId.substring(i), l = "ESD" + t
          .id.substring(i))
      }
      const c = {
        "ESD$TV_EARNINGS@tv-scripting": {
          fullId: "Earnings@tv-basicstudies-129!",
          id: "Earnings@tv-basicstudies",
          name: "Earnings@tv-basicstudies",
          shortId: "Earnings",
          productId: "tv-basicstudies"
        },
        "ESD$TV_SPLITS@tv-scripting": {
          fullId: "Splits@tv-basicstudies-129!",
          id: "Splits@tv-basicstudies",
          name: "Splits@tv-basicstudies",
          shortId: "Splits",
          productId: "tv-basicstudies"
        },
        "ESD$TV_DIVIDENDS@tv-scripting": {
          fullId: "Dividends@tv-basicstudies-129!",
          id: "Dividends@tv-basicstudies",
          name: "Dividends@tv-basicstudies",
          shortId: "Dividends",
          productId: "tv-basicstudies"
        }
      };
      if (l in c && Object.assign(o, c[l]), a < 43) {
        const i = {
          "StrategyScript$STD;Consecutive%1Ups/Downs%1Strategy": {
            pineId: "STD;Consecutive%1Ups%1Downs%1Strategy",
            className: "StrategyScript"
          },
          Script$EDGR_NET_INCOME_FROM_CONTINUING_OPERATIONS_APPLICABLE_TO_COMMON_V2: {
            pineId: "Script$EDGR_NET_INCOME_FROM_CONTINUING_OPS_APPLICABLE_TO_COMMON_V2",
            className: "Script"
          }
        };
        if (t.shortId in i) {
          const n = i[t.shortId].className + "$" + i[t.shortId].pineId,
            r = {
              scriptIdPart: i[t.shortId].pineId,
              fullId: o.fullId.replace(o.shortId, n),
              id: o.id.replace(o.shortId, n),
              name: o.name?.replace(o.shortId, n),
              shortId: n
            };
          (0, s.default)(o, r), (0, s.default)(e, r)
        }
        const n = !1,
          r = n && n.match(/^(USER)(_\d+)(;)(.*)$/);
        if (r) {
          const t = r[0],
            i = r[1] + r[3] + r[2] + r[4],
            n = {
              scriptIdPart: i,
              fullId: o.fullId.replace(t, i),
              id: o.id.replace(t, i),
              name: o.name?.replace(t, i),
              shortId: o.shortId.replace(t, i)
            };
          (0, s.default)(o, n), (0, s.default)(e, n)
        }
      }
      if ("MA" === t.id) {
        const t = {
            id: "MAExp",
            properties: [{
              id: "is_price_study",
              type: "bool",
              value: "true"
            }],
            inputs: [{
              id: "length",
              type: "integer",
              defval: 20,
              min: 1,
              max: 500
            }, {
              id: "source",
              type: "text",
              defval: "close",
              options: ["open", "high", "low", "close"]
            }],
            plots: [{
              id: "MovAvgExp",
              type: "line"
            }],
            palettes: {}
          },
          i = {
            id: "MASimple",
            properties: [{
              id: "is_price_study",
              type: "bool",
              value: "true"
            }],
            inputs: [{
              id: "length",
              type: "integer",
              defval: 20,
              min: 1,
              max: 500
            }, {
              id: "source",
              type: "text",
              defval: "close",
              options: ["open", "high", "low", "close"]
            }],
            plots: [{
              id: "MovAvgSimple",
              type: "line"
            }],
            palettes: {}
          },
          s = {
            id: "MAVolumeWeighted",
            properties: [{
              id: "is_price_study",
              type: "bool",
              value: "true"
            }],
            inputs: [{
              id: "length",
              type: "integer",
              defval: 20,
              min: 1,
              max: 500
            }, {
              id: "source",
              type: "text",
              defval: "close",
              options: ["open", "high", "low", "close"]
            }],
            plots: [{
              id: "MovAvgVolumeWeighted",
              type: "line"
            }],
            palettes: {}
          },
          n = {
            id: "MAWeighted",
            properties: [{
              id: "is_price_study",
              type: "bool",
              value: "true"
            }],
            inputs: [{
              id: "length",
              type: "integer",
              defval: 20,
              min: 1,
              max: 500
            }, {
              id: "source",
              type: "text",
              defval: "close",
              options: ["open", "high", "low", "close"]
            }],
            plots: [{
              id: "MovAvgWeighted",
              type: "line"
            }],
            palettes: {}
          };
        switch (e.inputs.type) {
          case "exp":
            o = t;
            break;
          case "simple":
            o = i;
            break;
          case "weighted":
            o = n;
            break;
          case "volume weighted":
            o = s
        }
        e.styles[o.plots[0].id] = e.styles.MovAvg, delete e.styles.MovAvg, delete e.inputs.type
      }
      return i.oldShowStudyLastValueProperty && (e.oldShowLastValue = e.showLastValue), delete e.showLastValue,
        delete e.showStudyArguments, (0, h.migrateMetaInfoAndPropState)(o, e), {
          propsState: e,
          metaInfo: o
        }
    }
    static splitInputs(e) {
      const t = {},
        i = {};
      for (const [s, o] of Object.entries(e))(0, d.isNumber)(parseInt(s, 10)) ? t[s] = o : i[s] = o;
      return {
        arr: t,
        obj: i
      }
    }
    static verifyInputsMaxValue(e) {
      if (e.inputs)
        for (const t of e.inputs) "integer" === t.type && t.max && t.max > _ && u.logWarn(
          "Bad integer input max value in metaInfo id=" + e.id + " title=" + e.description)
    }
    static mergeInputsObjPart(e, t) {
      const i = this.splitInputs(t);
      (0, s.default)(e, i.obj)
    }
    static _fixInputsOrder(e, t) {
      const i = this._getOrderedInputIds(t),
        o = this.splitInputs(e.inputs),
        n = o.arr,
        r = o.obj,
        a = (0, s.default)({}, r);
      for (let e = 0; e < i.length; ++e) {
        const t = i[e],
          s = this._findInputKeyById(n, t);
        null !== s && (a[e] = n[s])
      }
      e.inputs = a
    }
    static _fixInputsMaxValue(e, t) {
      if ((0, d.isAbsent)(t)) return;
      const i = _;
      if (t.inputs)
        for (const e of t.inputs) "integer" === e.type && e.max && e.max > i && (e.max = i);
      if (!e || !e.inputs) return;
      const o = this.splitInputs(e.inputs),
        n = o.arr;
      for (const [, e] of Object.entries(n)) "integer" === e.type && e.max && e.max > i && (e.max = i);
      e.inputs = (0, s.default)(o.obj, o.arr)
    }
    static _findInputKeyById(e, t) {
      let i = null;
      for (const s in e)
        if ((0, d.isNumber)(parseInt(s, 10)) && e[s].id === t) {
          i = s;
          break
        } return i
    }
    static _getOrderedInputIds(e) {
      const t = [];
      for (const i of e.inputs) t.push(i.id);
      return t
    }
    static _patchOldVolumeProfiles(e, t) {
      if (!t?.hhists) return;
      const i = t.hhists[e].data,
        s = [];
      for (const [, e] of Object.entries(i)) s.push(e);
      t.hhists[0].data = s
    }
  }
