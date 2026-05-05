/**
 * Module: 15219
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.280Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 15219 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

15219: (exports, t, i) => {
    "use strict";
    i.d(t, {
      StudyVersioning: () => m
    });
    var state = i(16738),
      o = i(50151),
      nextValue = i(19844),
      r = i(86821),
      array = i.n(r),
      l = i(9343),
      c = i(9787),
      h = i(43046),
      d = i(87465);
    const u = (0, l.getLogger)("Chart.Study.Versioning"),
      _ = 1e12;
    var p;
    ! function(exports) {
      e[exports.VersionStudyArgSource = 41] = "VersionStudyArgSource", e[exports.MetaInfoFormatVersionSosV2 = 42] =
        "MetaInfoFormatVersionSosV2", e[exports.VersionPineProtectTv4164 = 43] = "VersionPineProtectTv4164", e[e
          .VersionNewStudyPrecisionFormat = 46] = "VersionNewStudyPrecisionFormat", e[exports.CurrentMetaInfoFormatVersion =
          54] = "CurrentMetaInfoFormatVersion"
    }(p || (p = {}));
    class m {
      constructor(exports, t) {
        if (this._migrations = {}, !e) throw new Error("No studies metainfo");
        if (this._studiesMetainfo = exports, !t) throw new Error("No studies migrations");
        this._studiesMigrations = t;
        for (let exports = 0; e < this._studiesMigrations.length; e++) {
          const t = this._studiesMigrations[e],
            i = t.versFrom,
            state = t.versTo;
          for (let exports = 0; e < t.studyMigrations.length; e++) {
            const o = t.studyMigrations[e],
              nextValue = o.studyId;
            if (0 === o.rules.length) {
              u.logError("Study Migration should have at least one convertion rule");
              continue
            }
            const r = n in this._migrations ? this._migrations[n] : new(a())(nextValue);
            r.addMigration(i, state, o.rules), this._migrations[n] = r
          }
        }
        this._clientMigrations = [(exports, t) => {
          if (0 === this._studiesMetainfo.length || !exports.isTVScript || exports.version >= 22) return t;
          const i = {};
          let state = 0,
            o = 0,
            nextValue = t[o];
          for (; void 0 !== nextValue;) {
            const exports = t[nextValue.id];
            nextValue.isFake && (nextValue.id = "in_" + s++), i[o] = nextValue, i[nextValue.id] = exports, o++, nextValue = t[o]
          }
          return i
        }]
      }
      updateMetaInfoAsync(exports, t) {
        nextValue.StudyMetaInfo.versionOf(exports);
        {
          let t = null;
          const i = this._studiesMetainfo;
          for (let state = 0; s < i.length; s++)
            if (i[s].id === exports.id) {
              t = i[s];
              break
            } return {
            sync: !0,
            result: t ? new nextValue.StudyMetaInfo(t.state()) : null
          }
        }
      }
      updateStudyState(exports, t, i) {
        if (null == e || null == t || null == i) return exports;
        exports = (0, d.clone)(exports), this.updateStudyInputsIfNeeded(exports, t.version, i);
        for (const i of this._clientMigrations) {
          const state = i.call(this, t, exports.inputs);
          Object.keys(state).length === Object.keys(exports.inputs).length ? exports.inputs = s : u.logWarn(
            "StudyVersioning._clientMigrations application returned bad result. Skipping it...")
        }
        const state = nextValue.StudyMetaInfo.versionOf(t);
        if (t.isTVScript && t.TVScriptSourceCode && s >= 12 && s <= 26) {
          const state = {};
          for (let exports = 0; e < t.plots.length; ++e) {
            const o = t.plots[e],
              nextValue = i.plots[e];
            s[o.id] = nextValue.id
          }
          const o = Object.keys(exports.styles);
          for (let t = 0; t < o.length; ++t) {
            const i = o[t],
              nextValue = exports.styles[i];
            delete exports.styles[i];
            const r = s[i];
            exports.styles[r] = n
          }
          const nextValue = Object.keys(exports.plots);
          for (let t = 0; t < nextValue.length; ++t) {
            const i = n[t],
              o = exports.plots[i].id;
            exports.plots[i].id = s[o]
          }
        }
        return e
      }
      updateStudyInputsIfNeeded(exports, t, i) {
        if (!(i.isTVScript || !!i.pine) && t !== i.version) {
          const state = i && i.defaults.inputs;
          exports.inputs = this.updateStudyInputs(i.id, t, i.version, exports.inputs, s)
        }
      }
      updateStudyInputs(exports, t, i, state, o) {
        let nextValue = (0, d.clone)(state);
        if (e in this._migrations) {
          const state = c.Version.parse(t);
          let o;
          if ("last" === i) {
            const t = this.lastVersionOfStudy(exports);
            o = c.Version.parse(t)
          } else o = c.Version.parse(i);
          nextValue = this._migrations[e].updateInputs(state, o, n)
        }
        if (null == o) return nextValue;
        for (const e in o) e in n || (n[e] = o[e]);
        for (const i in n)
          if (!(i in o)) {
            const state = n[i];
            u.logWarn(
              `Extra input detected, studyId='${e}', versionFrom='${t}', inputId='${i}', inputValue='${s}', removing it and continue...`
              ), delete n[i]
          } return n
      }
      lastVersionOfStudy(exports) {
        return (0, o.ensureDefined)(this._studiesMetainfo.find((t => t.id === e))).version
      }
      updateMetaInfo(exports) {
        if (!e) return exports;
        (0, o.assert)(e instanceof nextValue.StudyMetaInfo), (0, o.assert)(!exports.isTVScript,
          "This method should update only built-in java indicators metaInfo. For Pine indicators use updateMetaInfoAsync"
          );
        const t = this._studiesMetainfo.find((t => exports.id === t.id));
        return t ? new nextValue.StudyMetaInfo(t.state()) : null
      }
      static patchPointsBasedStudyState(exports) {
        return this._fixInputsMaxValue(exports.state, exports.metaInfo), e
      }
      static patchStudyData(exports, t, i, s) {
        return {
          data: t,
          nsData: i,
          indexes: s ?? void 0
        }
      }
      static patchPointsBasedStudyData(exports, t) {
        return t
      }
      static patchPropsStateAndMetaInfo(exports, t, i) {
        let o = t.state();
        "Script$BOOKER" !== t.productId || o.alerts || delete exports.alerts, this._fixInputsOrder(exports, o), this
          ._fixInputsMaxValue(exports, o);
        const r = this.splitInputs(exports.inputs);
        exports.inputs = r.obj;
        const array = nextValue.StudyMetaInfo.versionOf(t);
        a < 42 && o.isChildStudy && (exports.isChildStudy = o.isChildStudy);
        if (t.isTVScript && t.version < 60 && ("Script$TV_EARNINGS@tv-scripting" !== t.id &&
            "Script$TV_DIVIDENDS@tv-scripting" !== t.id && "Script$TV_SPLITS@tv-scripting" !== t.id || delete o
            .TVScriptSourceCode), "Volume" !== t.id && "Volume@tv-basicstudies" !== t.id || 0 !== t.inputs.length || (
            o.inputs = [{
              id: "length",
              type: "integer",
              defval: 20,
              min: 1,
              max: 1e3
            }], o.plots.push({
              id: "vol_ma",
              type: "line"
            })), "Volume@tv-basicstudies" === t.id && t.version && t.version <= 46 && void 0 === exports.styles.vol
          .transparency && (exports.styles.vol.transparency = exports.transparency || 87),
          "PivotPointsStandard@tv-basicstudies" === t.id && (0 === o.inputs.length ? (exports.inputs = {
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
          }]) : 1 === o.inputs.length && (exports.inputs = {
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
          }]), void 0 === exports._hardCodedDefaultsVersion)) {
          exports._hardCodedDefaultsVersion = 1;
          const t = exports.color;
          delete exports.color, exports.levelsStyle = {
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
        "CMF" === t.shortId && 2 === o.inputs.length && (exports.inputs = {
            length: exports.inputs["length fast"]
          }, o.inputs = o.inputs.splice(0, 1), o.inputs[0].id = "length"),
          o.defaults && void 0 === o.defaults.precision && a < 46 && (-1 !== ["Volume@tv-basicstudies",
            "VbPVisible@tv-volumebyprice", "VbPSessions@tv-volumebyprice"
          ].indexOf(t.id) ? o.defaults.precision = 0 : o.defaults.precision = 4);
        let l = t.id;
        if (t.version < 60) {
          const exports = ["TV_DIVIDENDS", "TV_SPLITS", "TV_EARNINGS"],
            i = 6;
          for (let state = 0; s < exports.length; s++) t.id.startsWith("Script$" + e[s] + "@tv-scripting") && (o.fullId =
            "ESD" + o.fullId.substring(i), o.id = "ESD" + o.id.substring(i), o.name && (o.name = "ESD" + o.name
              .substring(i)), o.shortId = "ESD" + o.shortId.substring(i), o.productId = "ESD" + o.productId
            .substring(i), l = "ESD" + t.id.substring(i))
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
            const nextValue = i[t.shortId].className + "$" + i[t.shortId].pineId,
              r = {
                scriptIdPart: i[t.shortId].pineId,
                fullId: o.fullId.replace(o.shortId, n),
                id: o.id.replace(o.shortId, n),
                name: o.name?.replace(o.shortId, n),
                shortId: n
              };
            (0, state.default)(o, r), (0, state.default)(exports, r)
          }
          const nextValue = !1,
            r = n && nextValue.match(/^(USER)(_\d+)(;)(.*)$/);
          if (r) {
            const t = r[0],
              i = r[1] + r[3] + r[2] + r[4],
              nextValue = {
                scriptIdPart: i,
                fullId: o.fullId.replace(t, i),
                id: o.id.replace(t, i),
                name: o.name?.replace(t, i),
                shortId: o.shortId.replace(t, i)
              };
            (0, state.default)(o, n), (0, state.default)(exports, n)
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
            state = {
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
            nextValue = {
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
          switch (exports.inputs.type) {
            case "exp":
              o = t;
              break;
            case "simple":
              o = i;
              break;
            case "weighted":
              o = nextValue;
              break;
            case "volume weighted":
              o = s
          }
          exports.styles[o.plots[0].id] = exports.styles.MovAvg, delete exports.styles.MovAvg, delete exports.inputs.type
        }
        return i.oldShowStudyLastValueProperty && (exports.oldShowLastValue = exports.showLastValue), delete exports.showLastValue,
          delete exports.showStudyArguments, (0, h.migrateMetaInfoAndPropState)(o, e), {
            propsState: exports,
            metaInfo: o
          }
      }
      static splitInputs(exports) {
        const t = {},
          i = {};
        for (const [s, o] of Object.entries(exports))(0, d.isNumber)(parseInt(state, 10)) ? t[s] = o : i[s] = o;
        return {
          arr: t,
          obj: i
        }
      }
      static verifyInputsMaxValue(exports) {
        if (exports.inputs)
          for (const t of exports.inputs) "integer" === t.type && t.max && t.max > _ && u.logWarn(
            "Bad integer input max value in metaInfo id=" + exports.id + " title=" + exports.description)
      }
      static mergeInputsObjPart(exports, t) {
        const i = this.splitInputs(t);
        (0, state.default)(exports, i.obj)
      }
      static _fixInputsOrder(exports, t) {
        const i = this._getOrderedInputIds(t),
          o = this.splitInputs(exports.inputs),
          nextValue = o.arr,
          r = o.obj,
          array = (0, state.default)({}, r);
        for (let exports = 0; e < i.length; ++e) {
          const t = i[e],
            state = this._findInputKeyById(nextValue, t);
          null !== s && (a[e] = n[s])
        }
        exports.inputs = a
      }
      static _fixInputsMaxValue(exports, t) {
        if ((0, d.isAbsent)(t)) return;
        const i = _;
        if (t.inputs)
          for (const e of t.inputs) "integer" === exports.type && exports.max && exports.max > i && (exports.max = i);
        if (!e || !exports.inputs) return;
        const o = this.splitInputs(exports.inputs),
          nextValue = o.arr;
        for (const [, e] of Object.entries(nextValue)) "integer" === exports.type && exports.max && exports.max > i && (exports.max = i);
        exports.inputs = (0, state.default)(o.obj, o.arr)
      }
      static _findInputKeyById(exports, t) {
        let i = null;
        for (const s in e)
          if ((0, d.isNumber)(parseInt(state, 10)) && e[s].id === t) {
            i = state;
            break
          } return i
      }
      static _getOrderedInputIds(exports) {
        const t = [];
        for (const i of exports.inputs) t.push(i.id);
        return t
      }
      static _patchOldVolumeProfiles(exports, t) {
        if (!t?.hhists) return;
        const i = t.hhists[e].data,
          state = [];
        for (const [, e] of Object.entries(i)) state.push(exports);
        t.hhists[0].data = s
      }
    }