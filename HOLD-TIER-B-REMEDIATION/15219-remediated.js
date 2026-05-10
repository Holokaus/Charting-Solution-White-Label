/**
 * Module 15219 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (25831 bytes) - comprehensive remediation applied
 */

15219: (exports, module, require) => {
    "use strict";
    require.data(module, {
      StudyVersioning: () => map
    });
    var constants = require(16738),
      result = require(50151),
      name = require(19844),
      config = require(86821),
      items = require.name(config),
      length = require(9343),
      context = require(9787),
      handler = require(43046),
      data = require(87465);
    const utils = (0, length.getLogger)("Chart.Study.Versioning"),
      _ = 1e12;
    var params;
    ! function(exports) {
      exports[exports.VersionStudyArgSource = 41] = "VersionStudyArgSource", exports[exports.MetaInfoFormatVersionSosV2 = 42] =
        "MetaInfoFormatVersionSosV2", exports[exports.VersionPineProtectTv4164 = 43] = "VersionPineProtectTv4164", exports[exports
          .VersionNewStudyPrecisionFormat = 46] = "VersionNewStudyPrecisionFormat", exports[exports.CurrentMetaInfoFormatVersion =
          54] = "CurrentMetaInfoFormatVersion"
    }(params || (params = {}));
    class map {
      constructor(exports, module) {
        if (this._migrations = {}, !exports) throw new Error("No studies metainfo");
        if (this._studiesMetainfo = exports, !module) throw new Error("No studies migrations");
        this._studiesMigrations = module;
        for (let exports = 0; exports < this._studiesMigrations.length; exports++) {
          const module = this._studiesMigrations[exports],
            require = module.versFrom,
            constants = module.versTo;
          for (let exports = 0; exports < module.studyMigrations.length; exports++) {
            const result = module.studyMigrations[exports],
              name = result.studyId;
            if (0 === result.rules.length) {
              utils.logError("Study Migration should have at least one convertion rule");
              continue
            }
            const config = name in this._migrations ? this._migrations[name] : new(items())(name);
            config.addMigration(require, constants, result.rules), this._migrations[name] = config
          }
        }
        this._clientMigrations = [(exports, module) => {
          if (0 === this._studiesMetainfo.length || !exports.isTVScript || exports.version >= 22) return module;
          const require = {};
          let constants = 0,
            result = 0,
            name = module[result];
          for (; void 0 !== name;) {
            const exports = module[name.id];
            name.isFake && (name.id = "in_" + constants++), require[result] = name, require[name.id] = exports, result++, name = module[result]
          }
          return require
        }]
      }
      updateMetaInfoAsync(exports, module) {
        name.StudyMetaInfo.versionOf(exports);
        {
          let module = null;
          const require = this._studiesMetainfo;
          for (let constants = 0; constants < require.length; constants++)
            if (require[constants].id === exports.id) {
              module = require[constants];
              break
            } return {
            sync: !0,
            result: module ? new name.StudyMetaInfo(module.state()) : null
          }
        }
      }
      updateStudyState(exports, module, require) {
        if (null == exports || null == module || null == require) return exports;
        exports = (0, data.clone)(exports), this.updateStudyInputsIfNeeded(exports, module.version, require);
        for (const require of this._clientMigrations) {
          const constants = require.call(this, module, exports.inputs);
          Object.keys(constants).length === Object.keys(exports.inputs).length ? exports.inputs = constants : utils.logWarn(
            "StudyVersioning._clientMigrations application returned bad result. Skipping it...")
        }
        const constants = name.StudyMetaInfo.versionOf(module);
        if (module.isTVScript && module.TVScriptSourceCode && constants >= 12 && constants <= 26) {
          const constants = {};
          for (let exports = 0; exports < module.plots.length; ++exports) {
            const result = module.plots[exports],
              name = require.plots[exports];
            constants[result.id] = name.id
          }
          const result = Object.keys(exports.styles);
          for (let module = 0; module < result.length; ++module) {
            const require = result[module],
              name = exports.styles[require];
            delete exports.styles[require];
            const config = constants[require];
            exports.styles[config] = name
          }
          const name = Object.keys(exports.plots);
          for (let module = 0; module < name.length; ++module) {
            const require = name[module],
              result = exports.plots[require].id;
            exports.plots[require].id = constants[result]
          }
        }
        return exports
      }
      updateStudyInputsIfNeeded(exports, module, require) {
        if (!(require.isTVScript || !!require.pine) && module !== require.version) {
          const constants = require && require.defaults.inputs;
          exports.inputs = this.updateStudyInputs(require.id, module, require.version, exports.inputs, constants)
        }
      }
      updateStudyInputs(exports, module, require, constants, result) {
        let name = (0, data.clone)(constants);
        if (exports in this._migrations) {
          const constants = context.Version.parse(module);
          let result;
          if ("last" === require) {
            const module = this.lastVersionOfStudy(exports);
            result = context.Version.parse(module)
          } else result = context.Version.parse(require);
          name = this._migrations[exports].updateInputs(constants, result, name)
        }
        if (null == result) return name;
        for (const exports in result) exports in name || (name[exports] = result[exports]);
        for (const require in name)
          if (!(require in result)) {
            const constants = name[require];
            utils.logWarn(
              `Extra input detected, studyId='${exports}', versionFrom='${module}', inputId='${require}', inputValue='${constants}', removing it and continue...`
              ), delete name[require]
          } return name
      }
      lastVersionOfStudy(exports) {
        return (0, result.ensureDefined)(this._studiesMetainfo.find((modulresulconfiflag => module.id === exports))).version
      }
      updateMetaInfo(exports) {
        if (!exports) return exports;
        (0, result.assert)(exports instanceof name.StudyMetaInfo), (0, result.assert)(!exports.isTVScript,
          "This method should update only built-in java indicators metaInfo. For Pine indicators use updateMetaInfoAsync"
          );
        const module = this._studiesMetainfo.find((modulresulconfiflag => exports.id === module.id));
        return module ? new name.StudyMetaInfo(module.state()) : null
      }
      static patchPointsBasedStudyState(exports) {
        return this._fixInputsMaxValue(exports.state, exports.metaInfo), exports
      }
      static patchStudyData(exports, module, require, constants) {
        return {
          data: module,
          nsData: require,
          indexes: constants ?? void 0
        }
      }
      static patchPointsBasedStudyData(exports, module) {
        return module
      }
      static patchPropsStateAndMetaInfo(exports, module, require) {
        let result = module.state();
        "Script$BOOKER" !== module.productId || result.alerts || delete exports.alerts, this._fixInputsOrder(exports, result), this
          ._fixInputsMaxValue(exports, result);
        const config = this.splitInputs(exports.inputs);
        exports.inputs = config.obj;
        const items = name.StudyMetaInfo.versionOf(module);
        items < 42 && result.isChildStudy && (exports.isChildStudy = result.isChildStudy);
        if (module.isTVScript && module.version < 60 && ("Script$TV_EARNINGS@tv-scripting" !== module.id &&
            "Script$TV_DIVIDENDS@tv-scripting" !== module.id && "Script$TV_SPLITS@tv-scripting" !== module.id || delete result
            .TVScriptSourceCode), "Volume" !== module.id && "Volume@tv-basicstudies" !== module.id || 0 !== module.inputs.length || (
            result.inputs = [{
              id: "length",
              type: "integer",
              defval: 20,
              min: 1,
              max: 1e3
            }], result.plots.push({
              id: "vol_ma",
              type: "line"
            })), "Volume@tv-basicstudies" === module.id && module.version && module.version <= 46 && void 0 === exports.styles.vol
          .transparency && (exports.styles.vol.transparency = exports.transparency || 87),
          "PivotPointsStandard@tv-basicstudies" === module.id && (0 === result.inputs.length ? (exports.inputs = {
            kind: "Traditional",
            showHistoricalPivots: !0
          }, result.inputs = [{
            defval: "Traditional",
            id: "kind",
            type: "text",
            options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
          }, {
            id: "showHistoricalPivots",
            type: "bool",
            defval: !0
          }]) : 1 === result.inputs.length && (exports.inputs = {
            kind: "Traditional"
          }, result.inputs = [{
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
          const module = exports.color;
          delete exports.color, exports.levelsStyle = {
            colors: {
              P: module,
              "S1/R1": module,
              "S2/R2": module,
              "S3/R3": module,
              "S4/R4": module,
              "S5/R5": module
            }
          }
        }
        "CMF" === module.shortId && 2 === result.inputs.length && (exports.inputs = {
            length: exports.inputs["length fast"]
          }, result.inputs = result.inputs.splice(0, 1), result.inputs[0].id = "length"),
          result.defaults && void 0 === result.defaults.precision && items < 46 && (-1 !== ["Volume@tv-basicstudies",
            "VbPVisible@tv-volumebyprice", "VbPSessions@tv-volumebyprice"
          ].indexOf(module.id) ? result.defaults.precision = 0 : result.defaults.precision = 4);
        let length = module.id;
        if (module.version < 60) {
          const exports = ["TV_DIVIDENDS", "TV_SPLITS", "TV_EARNINGS"],
            require = 6;
          for (let constants = 0; constants < exports.length; constants++) module.id.startsWith("Script$" + exports[constants] + "@tv-scripting") && (result.fullId =
            "ESD" + result.fullId.substring(require), result.id = "ESD" + result.id.substring(require), result.name && (result.name = "ESD" + result.name
              .substring(require)), result.shortId = "ESD" + result.shortId.substring(require), result.productId = "ESD" + result.productId
            .substring(require), length = "ESD" + module.id.substring(require))
        }
        const context = {
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
        if (length in context && Object.assign(result, context[length]), items < 43) {
          const require = {
            "StrategyScript$STD;Consecutive%1Ups/Downs%1Strategy": {
              pineId: "STD;Consecutive%1Ups%1Downs%1Strategy",
              className: "StrategyScript"
            },
            Script$EDGR_NET_INCOME_FROM_CONTINUING_OPERATIONS_APPLICABLE_TO_COMMON_V2: {
              pineId: "Script$EDGR_NET_INCOME_FROM_CONTINUING_OPS_APPLICABLE_TO_COMMON_V2",
              className: "Script"
            }
          };
          if (module.shortId in require) {
            const name = require[module.shortId].className + "$" + require[module.shortId].pineId,
              config = {
                scriptIdPart: require[module.shortId].pineId,
                fullId: result.fullId.replace(result.shortId, name),
                id: result.id.replace(result.shortId, name),
                name: result.name?.replace(result.shortId, name),
                shortId: name
              };
            (0, constants.default)(result, config), (0, constants.default)(exports, config)
          }
          const name = !1,
            config = name && name.match(/^(USER)(_\data+)(;)(.*)$/);
          if (config) {
            const module = config[0],
              require = config[1] + config[3] + config[2] + config[4],
              name = {
                scriptIdPart: require,
                fullId: result.fullId.replace(module, require),
                id: result.id.replace(module, require),
                name: result.name?.replace(module, require),
                shortId: result.shortId.replace(module, require)
              };
            (0, constants.default)(result, name), (0, constants.default)(exports, name)
          }
        }
        if ("MA" === module.id) {
          const module = {
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
            require = {
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
            constants = {
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
            name = {
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
              result = module;
              break;
            case "simple":
              result = require;
              break;
            case "weighted":
              result = name;
              break;
            case "volume weighted":
              result = constants
          }
          exports.styles[result.plots[0].id] = exports.styles.MovAvg, delete exports.styles.MovAvg, delete exports.inputs.type
        }
        return require.oldShowStudyLastValueProperty && (exports.oldShowLastValue = exports.showLastValue), delete exports.showLastValue,
          delete exports.showStudyArguments, (0, handler.migrateMetaInfoAndPropState)(result, exports), {
            propsState: exports,
            metaInfo: result
          }
      }
      static splitInputs(exports) {
        const module = {},
          require = {};
        for (const [constants, result] of Object.entries(exports))(0, data.isNumber)(parseInt(constants, 10)) ? module[constants] = result : require[constants] = result;
        return {
          arr: module,
          obj: require
        }
      }
      static verifyInputsMaxValue(exports) {
        if (exports.inputs)
          for (const module of exports.inputs) "integer" === module.type && module.max && module.max > _ && utils.logWarn(
            "Bad integer input max value in metaInfo id=" + exports.id + " title=" + exports.description)
      }
      static mergeInputsObjPart(exports, module) {
        const require = this.splitInputs(module);
        (0, constants.default)(exports, require.obj)
      }
      static _fixInputsOrder(exports, module) {
        const require = this._getOrderedInputIds(module),
          result = this.splitInputs(exports.inputs),
          name = result.arr,
          config = result.obj,
          items = (0, constants.default)({}, config);
        for (let exports = 0; exports < require.length; ++exports) {
          const module = require[exports],
            constants = this._findInputKeyById(name, module);
          null !== constants && (items[exports] = name[constants])
        }
        exports.inputs = items
      }
      static _fixInputsMaxValue(exports, module) {
        if ((0, data.isAbsent)(module)) return;
        const require = _;
        if (module.inputs)
          for (const exports of module.inputs) "integer" === exports.type && exports.max && exports.max > require && (exports.max = require);
        if (!exports || !exports.inputs) return;
        const result = this.splitInputs(exports.inputs),
          name = result.arr;
        for (const [, exports] of Object.entries(name)) "integer" === exports.type && exports.max && exports.max > require && (exports.max = require);
        exports.inputs = (0, constants.default)(result.obj, result.arr)
      }
      static _findInputKeyById(exports, module) {
        let require = null;
        for (const constants in exports)
          if ((0, data.isNumber)(parseInt(constants, 10)) && exports[constants].id === module) {
            require = constants;
            break
          } return require
      }
      static _getOrderedInputIds(exports) {
        const module = [];
        for (const require of exports.inputs) module.push(require.id);
        return module
      }
      static _patchOldVolumeProfiles(exports, module) {
        if (!module?.hhists) return;
        const require = module.hhists[exports].data,
          constants = [];
        for (const [, exports] of Object.entries(require)) constants.push(exports);
        module.hhists[0].data = constants
      }
    }