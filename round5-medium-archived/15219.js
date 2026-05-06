/**
 * Module 15219 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

15219: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      StudyVersioning: () => m
    });
    var watchedValue_s = i(16738),
      o = i(50151),
      watchedValue_n = i(19844),
      r = i(86821),
      watchedValue_a = i.watchedValue_n(r),
      l = i(9343),
      c = i(9787),
      h = i(43046),
      d = i(87465);
    const u = (0, l.getLogger)("Chart.Study.Versioning"),
      _ = 1e12;
    var p;
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.VersionStudyArgSource = 41] = "VersionStudyArgSource", watchedValue_e[watchedValue_e.MetaInfoFormatVersionSosV2 = 42] =
        "MetaInfoFormatVersionSosV2", watchedValue_e[watchedValue_e.VersionPineProtectTv4164 = 43] = "VersionPineProtectTv4164", watchedValue_e[watchedValue_e
          .VersionNewStudyPrecisionFormat = 46] = "VersionNewStudyPrecisionFormat", watchedValue_e[watchedValue_e.CurrentMetaInfoFormatVersion =
          54] = "CurrentMetaInfoFormatVersion"
    }(p || (p = {}));
    class m {
      constructor(watchedValue_e, watchedValue_t) {
        if (this._migrations = {}, !watchedValue_e) throw new Error("No studies metainfo");
        if (this._studiesMetainfo = watchedValue_e, !watchedValue_t) throw new Error("No studies migrations");
        this._studiesMigrations = watchedValue_t;
        for (let watchedValue_e = 0; watchedValue_e < this._studiesMigrations.length; watchedValue_e++) {
          const watchedValue_t = this._studiesMigrations[watchedValue_e],
            i = watchedValue_t.versFrom,
            watchedValue_s = watchedValue_t.versTo;
          for (let watchedValue_e = 0; watchedValue_e < watchedValue_t.studyMigrations.length; watchedValue_e++) {
            const o = watchedValue_t.studyMigrations[watchedValue_e],
              watchedValue_n = o.studyId;
            if (0 === o.rules.length) {
              u.logError("Study Migration should have at least one convertion rule");
              continue
            }
            const r = watchedValue_n in this._migrations ? this._migrations[watchedValue_n] : new(watchedValue_a())(watchedValue_n);
            r.addMigration(i, watchedValue_s, o.rules), this._migrations[watchedValue_n] = r
          }
        }
        this._clientMigrations = [(watchedValue_e, watchedValue_t) => {
          if (0 === this._studiesMetainfo.length || !watchedValue_e.isTVScript || watchedValue_e.version >= 22) return watchedValue_t;
          const i = {};
          let watchedValue_s = 0,
            o = 0,
            watchedValue_n = watchedValue_t[o];
          for (; void 0 !== watchedValue_n;) {
            const watchedValue_e = watchedValue_t[watchedValue_n.id];
            watchedValue_n.isFake && (watchedValue_n.id = "in_" + watchedValue_s++), i[o] = watchedValue_n, i[watchedValue_n.id] = watchedValue_e, o++, watchedValue_n = watchedValue_t[o]
          }
          return i
        }]
      }
      updateMetaInfoAsync(watchedValue_e, watchedValue_t) {
        watchedValue_n.StudyMetaInfo.versionOf(watchedValue_e);
        {
          let watchedValue_t = null;
          const i = this._studiesMetainfo;
          for (let watchedValue_s = 0; watchedValue_s < i.length; watchedValue_s++)
            if (i[watchedValue_s].id === watchedValue_e.id) {
              watchedValue_t = i[watchedValue_s];
              break
            } return {
            sync: !0,
            result: watchedValue_t ? new watchedValue_n.StudyMetaInfo(watchedValue_t.state()) : null
          }
        }
      }
      updateStudyState(watchedValue_e, watchedValue_t, i) {
        if (null == watchedValue_e || null == watchedValue_t || null == i) return watchedValue_e;
        watchedValue_e = (0, d.clone)(watchedValue_e), this.updateStudyInputsIfNeeded(watchedValue_e, watchedValue_t.version, i);
        for (const i of this._clientMigrations) {
          const watchedValue_s = i.call(this, watchedValue_t, watchedValue_e.inputs);
          Object.keys(watchedValue_s).length === Object.keys(watchedValue_e.inputs).length ? watchedValue_e.inputs = watchedValue_s : u.logWarn(
            "StudyVersioning._clientMigrations application returned bad result. Skipping it...")
        }
        const watchedValue_s = watchedValue_n.StudyMetaInfo.versionOf(watchedValue_t);
        if (watchedValue_t.isTVScript && watchedValue_t.TVScriptSourceCode && watchedValue_s >= 12 && watchedValue_s <= 26) {
          const watchedValue_s = {};
          for (let watchedValue_e = 0; watchedValue_e < watchedValue_t.plots.length; ++watchedValue_e) {
            const o = watchedValue_t.plots[watchedValue_e],
              watchedValue_n = i.plots[watchedValue_e];
            watchedValue_s[o.id] = watchedValue_n.id
          }
          const o = Object.keys(watchedValue_e.styles);
          for (let watchedValue_t = 0; watchedValue_t < o.length; ++watchedValue_t) {
            const i = o[watchedValue_t],
              watchedValue_n = watchedValue_e.styles[i];
            delete watchedValue_e.styles[i];
            const r = watchedValue_s[i];
            watchedValue_e.styles[r] = watchedValue_n
          }
          const watchedValue_n = Object.keys(watchedValue_e.plots);
          for (let watchedValue_t = 0; watchedValue_t < watchedValue_n.length; ++watchedValue_t) {
            const i = watchedValue_n[watchedValue_t],
              o = watchedValue_e.plots[i].id;
            watchedValue_e.plots[i].id = watchedValue_s[o]
          }
        }
        return watchedValue_e
      }
      updateStudyInputsIfNeeded(watchedValue_e, watchedValue_t, i) {
        if (!(i.isTVScript || !!i.pine) && watchedValue_t !== i.version) {
          const watchedValue_s = i && i.defaults.inputs;
          watchedValue_e.inputs = this.updateStudyInputs(i.id, watchedValue_t, i.version, watchedValue_e.inputs, watchedValue_s)
        }
      }
      updateStudyInputs(watchedValue_e, watchedValue_t, i, watchedValue_s, o) {
        let watchedValue_n = (0, d.clone)(watchedValue_s);
        if (watchedValue_e in this._migrations) {
          const watchedValue_s = c.Version.parse(watchedValue_t);
          let o;
          if ("last" === i) {
            const watchedValue_t = this.lastVersionOfStudy(watchedValue_e);
            o = c.Version.parse(watchedValue_t)
          } else o = c.Version.parse(i);
          watchedValue_n = this._migrations[watchedValue_e].updateInputs(watchedValue_s, o, watchedValue_n)
        }
        if (null == o) return watchedValue_n;
        for (const watchedValue_e in o) watchedValue_e in watchedValue_n || (watchedValue_n[watchedValue_e] = o[watchedValue_e]);
        for (const i in watchedValue_n)
          if (!(i in o)) {
            const watchedValue_s = watchedValue_n[i];
            u.logWarn(
              `Extra input detected, studyId='${watchedValue_e}', versionFrom='${watchedValue_t}', inputId='${i}', inputValue='${watchedValue_s}', removing it and continue...`
              ), delete watchedValue_n[i]
          } return watchedValue_n
      }
      lastVersionOfStudy(watchedValue_e) {
        return (0, o.ensureDefined)(this._studiesMetainfo.find((watchedValue_t => watchedValue_t.id === watchedValue_e))).version
      }
      updateMetaInfo(watchedValue_e) {
        if (!watchedValue_e) return watchedValue_e;
        (0, o.assert)(watchedValue_e instanceof watchedValue_n.StudyMetaInfo), (0, o.assert)(!watchedValue_e.isTVScript,
          "This method should update only built-in java indicators metaInfo. For Pine indicators use updateMetaInfoAsync"
          );
        const watchedValue_t = this._studiesMetainfo.find((watchedValue_t => watchedValue_e.id === watchedValue_t.id));
        return watchedValue_t ? new watchedValue_n.StudyMetaInfo(watchedValue_t.state()) : null
      }
      static patchPointsBasedStudyState(watchedValue_e) {
        return this._fixInputsMaxValue(watchedValue_e.state, watchedValue_e.metaInfo), watchedValue_e
      }
      static patchStudyData(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        return {
          data: watchedValue_t,
          nsData: i,
          indexes: watchedValue_s ?? void 0
        }
      }
      static patchPointsBasedStudyData(watchedValue_e, watchedValue_t) {
        return watchedValue_t
      }
      static patchPropsStateAndMetaInfo(watchedValue_e, watchedValue_t, i) {
        let o = watchedValue_t.state();
        "Script$BOOKER" !== watchedValue_t.productId || o.alerts || delete watchedValue_e.alerts, this._fixInputsOrder(watchedValue_e, o), this
          ._fixInputsMaxValue(watchedValue_e, o);
        const r = this.splitInputs(watchedValue_e.inputs);
        watchedValue_e.inputs = r.obj;
        const watchedValue_a = watchedValue_n.StudyMetaInfo.versionOf(watchedValue_t);
        watchedValue_a < 42 && o.isChildStudy && (watchedValue_e.isChildStudy = o.isChildStudy);
        if (watchedValue_t.isTVScript && watchedValue_t.version < 60 && ("Script$TV_EARNINGS@tv-scripting" !== watchedValue_t.id &&
            "Script$TV_DIVIDENDS@tv-scripting" !== watchedValue_t.id && "Script$TV_SPLITS@tv-scripting" !== watchedValue_t.id || delete o
            .TVScriptSourceCode), "Volume" !== watchedValue_t.id && "Volume@tv-basicstudies" !== watchedValue_t.id || 0 !== watchedValue_t.inputs.length || (
            o.inputs = [{
              id: "length",
              type: "integer",
              defval: 20,
              min: 1,
              max: 1e3
            }], o.plots.push({
              id: "vol_ma",
              type: "line"
            })), "Volume@tv-basicstudies" === watchedValue_t.id && watchedValue_t.version && watchedValue_t.version <= 46 && void 0 === watchedValue_e.styles.vol
          .transparency && (watchedValue_e.styles.vol.transparency = watchedValue_e.transparency || 87),
          "PivotPointsStandard@tv-basicstudies" === watchedValue_t.id && (0 === o.inputs.length ? (watchedValue_e.inputs = {
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
          }]) : 1 === o.inputs.length && (watchedValue_e.inputs = {
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
          }]), void 0 === watchedValue_e._hardCodedDefaultsVersion)) {
          watchedValue_e._hardCodedDefaultsVersion = 1;
          const watchedValue_t = watchedValue_e.color;
          delete watchedValue_e.color, watchedValue_e.levelsStyle = {
            colors: {
              P: watchedValue_t,
              "S1/R1": watchedValue_t,
              "S2/R2": watchedValue_t,
              "S3/R3": watchedValue_t,
              "S4/R4": watchedValue_t,
              "S5/R5": watchedValue_t
            }
          }
        }
        "CMF" === watchedValue_t.shortId && 2 === o.inputs.length && (watchedValue_e.inputs = {
            length: watchedValue_e.inputs["length fast"]
          }, o.inputs = o.inputs.splice(0, 1), o.inputs[0].id = "length"),
          o.defaults && void 0 === o.defaults.precision && watchedValue_a < 46 && (-1 !== ["Volume@tv-basicstudies",
            "VbPVisible@tv-volumebyprice", "VbPSessions@tv-volumebyprice"
          ].indexOf(watchedValue_t.id) ? o.defaults.precision = 0 : o.defaults.precision = 4);
        let l = watchedValue_t.id;
        if (watchedValue_t.version < 60) {
          const watchedValue_e = ["TV_DIVIDENDS", "TV_SPLITS", "TV_EARNINGS"],
            i = 6;
          for (let watchedValue_s = 0; watchedValue_s < watchedValue_e.length; watchedValue_s++) watchedValue_t.id.startsWith("Script$" + watchedValue_e[watchedValue_s] + "@tv-scripting") && (o.fullId =
            "ESD" + o.fullId.substring(i), o.id = "ESD" + o.id.substring(i), o.name && (o.name = "ESD" + o.name
              .substring(i)), o.shortId = "ESD" + o.shortId.substring(i), o.productId = "ESD" + o.productId
            .substring(i), l = "ESD" + watchedValue_t.id.substring(i))
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
        if (l in c && Object.assign(o, c[l]), watchedValue_a < 43) {
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
          if (watchedValue_t.shortId in i) {
            const watchedValue_n = i[watchedValue_t.shortId].className + "$" + i[watchedValue_t.shortId].pineId,
              r = {
                scriptIdPart: i[watchedValue_t.shortId].pineId,
                fullId: o.fullId.replace(o.shortId, watchedValue_n),
                id: o.id.replace(o.shortId, watchedValue_n),
                name: o.name?.replace(o.shortId, watchedValue_n),
                shortId: watchedValue_n
              };
            (0, watchedValue_s.default)(o, r), (0, watchedValue_s.default)(watchedValue_e, r)
          }
          const watchedValue_n = !1,
            r = watchedValue_n && watchedValue_n.match(/^(USER)(_\d+)(;)(.*)$/);
          if (r) {
            const watchedValue_t = r[0],
              i = r[1] + r[3] + r[2] + r[4],
              watchedValue_n = {
                scriptIdPart: i,
                fullId: o.fullId.replace(watchedValue_t, i),
                id: o.id.replace(watchedValue_t, i),
                name: o.name?.replace(watchedValue_t, i),
                shortId: o.shortId.replace(watchedValue_t, i)
              };
            (0, watchedValue_s.default)(o, watchedValue_n), (0, watchedValue_s.default)(watchedValue_e, watchedValue_n)
          }
        }
        if ("MA" === watchedValue_t.id) {
          const watchedValue_t = {
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
            watchedValue_s = {
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
            watchedValue_n = {
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
          switch (watchedValue_e.inputs.type) {
            case "exp":
              o = watchedValue_t;
              break;
            case "simple":
              o = i;
              break;
            case "weighted":
              o = watchedValue_n;
              break;
            case "volume weighted":
              o = watchedValue_s
          }
          watchedValue_e.styles[o.plots[0].id] = watchedValue_e.styles.MovAvg, delete watchedValue_e.styles.MovAvg, delete watchedValue_e.inputs.type
        }
        return i.oldShowStudyLastValueProperty && (watchedValue_e.oldShowLastValue = watchedValue_e.showLastValue), delete watchedValue_e.showLastValue,
          delete watchedValue_e.showStudyArguments, (0, h.migrateMetaInfoAndPropState)(o, watchedValue_e), {
            propsState: watchedValue_e,
            metaInfo: o
          }
      }
      static splitInputs(watchedValue_e) {
        const watchedValue_t = {},
          i = {};
        for (const [watchedValue_s, o] of Object.entries(watchedValue_e))(0, d.isNumber)(parseInt(watchedValue_s, 10)) ? watchedValue_t[watchedValue_s] = o : i[watchedValue_s] = o;
        return {
          arr: watchedValue_t,
          obj: i
        }
      }
      static verifyInputsMaxValue(watchedValue_e) {
        if (watchedValue_e.inputs)
          for (const watchedValue_t of watchedValue_e.inputs) "integer" === watchedValue_t.type && watchedValue_t.max && watchedValue_t.max > _ && u.logWarn(
            "Bad integer input max value in metaInfo id=" + watchedValue_e.id + " title=" + watchedValue_e.description)
      }
      static mergeInputsObjPart(watchedValue_e, watchedValue_t) {
        const i = this.splitInputs(watchedValue_t);
        (0, watchedValue_s.default)(watchedValue_e, i.obj)
      }
      static _fixInputsOrder(watchedValue_e, watchedValue_t) {
        const i = this._getOrderedInputIds(watchedValue_t),
          o = this.splitInputs(watchedValue_e.inputs),
          watchedValue_n = o.arr,
          r = o.obj,
          watchedValue_a = (0, watchedValue_s.default)({}, r);
        for (let watchedValue_e = 0; watchedValue_e < i.length; ++watchedValue_e) {
          const watchedValue_t = i[watchedValue_e],
            watchedValue_s = this._findInputKeyById(watchedValue_n, watchedValue_t);
          null !== watchedValue_s && (watchedValue_a[watchedValue_e] = watchedValue_n[watchedValue_s])
        }
        watchedValue_e.inputs = watchedValue_a
      }
      static _fixInputsMaxValue(watchedValue_e, watchedValue_t) {
        if ((0, d.isAbsent)(watchedValue_t)) return;
        const i = _;
        if (watchedValue_t.inputs)
          for (const watchedValue_e of watchedValue_t.inputs) "integer" === watchedValue_e.type && watchedValue_e.max && watchedValue_e.max > i && (watchedValue_e.max = i);
        if (!watchedValue_e || !watchedValue_e.inputs) return;
        const o = this.splitInputs(watchedValue_e.inputs),
          watchedValue_n = o.arr;
        for (const [, watchedValue_e] of Object.entries(watchedValue_n)) "integer" === watchedValue_e.type && watchedValue_e.max && watchedValue_e.max > i && (watchedValue_e.max = i);
        watchedValue_e.inputs = (0, watchedValue_s.default)(o.obj, o.arr)
      }
      static _findInputKeyById(watchedValue_e, watchedValue_t) {
        let i = null;
        for (const watchedValue_s in watchedValue_e)
          if ((0, d.isNumber)(parseInt(watchedValue_s, 10)) && watchedValue_e[watchedValue_s].id === watchedValue_t) {
            i = watchedValue_s;
            break
          } return i
      }
      static _getOrderedInputIds(watchedValue_e) {
        const watchedValue_t = [];
        for (const i of watchedValue_e.inputs) watchedValue_t.push(i.id);
        return watchedValue_t
      }
      static _patchOldVolumeProfiles(watchedValue_e, watchedValue_t) {
        if (!watchedValue_t?.hhists) return;
        const i = watchedValue_t.hhists[watchedValue_e].data,
          watchedValue_s = [];
        for (const [, watchedValue_e] of Object.entries(i)) watchedValue_s.push(watchedValue_e);
        watchedValue_t.hhists[0].data = watchedValue_s
      }
    }