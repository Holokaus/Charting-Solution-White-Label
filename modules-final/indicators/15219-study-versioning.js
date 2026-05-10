/**
 * ============================================================================
 * TRADINGVIEW MODULE 15219 - STUDY VERSIONING SYSTEM
 * ============================================================================
 *
 * Purpose: Study versioning and migration system for technical indicators
 *
 * Size: 10.2 KB
 *
 * Class: StudyVersioning
 *   - Manages study version migrations
 *   - Handles input updates and compatibility
 *   - Provides meta-info updates
 *   - Supports client-side migrations
 *
 * Features:
 *   - Study input migration
 *   - Meta-info version management
 *   - Client-side migration support
 *   - Input validation and ordering
 *   - Study state patching
 *
 * Dependencies:
 *   - 16738: Study meta-info utilities
 *   - 50151: Assertion utilities
 *   - 19844: Study meta-info class
 *   - 86821: Study migration utilities
 *   - 9343: Logger utilities
 *   - 9787: Version parsing
 *   - 43046: Meta-info migration
 *   - 87465: Object cloning
 *
 * Exports:
 *   - StudyVersioning: Study versioning class
 *
 * @module 15219
 * @category Technical Indicators
 * @subpackage Version Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    StudyVersioning: () => StudyVersioning
  });

  const studyMetaInfoUtils = moduleRequire(16738),
    assertionUtils = moduleRequire(50151),
    StudyMetaInfo = moduleRequire(19844),
    migrationUtils = moduleRequire(86821),
    StudyMigrationFactory = moduleRequire(86821),
    logger = moduleRequire(9343),
    VersionParser = moduleRequire(9787),
    metaInfoMigration = moduleRequire(43046),
    objectClone = moduleRequire(87465);

  const loggerInstance = logger.getLogger("Chart.Study.Versioning");
  const MAX_INTEGER_VALUE = 1e12;

  // Version constants
  !function(VersionConstants) {
    VersionConstants[VersionConstants.VersionStudyArgSource = 41] = "VersionStudyArgSource";
    VersionConstants[VersionConstants.MetaInfoFormatVersionSosV2 = 42] = "MetaInfoFormatVersionSosV2";
    VersionConstants[VersionConstants.VersionPineProtectTv4164 = 43] = "VersionPineProtectTv4164";
    VersionConstants[VersionConstants.VersionNewStudyPrecisionFormat = 46] = "VersionNewStudyPrecisionFormat";
    VersionConstants[VersionConstants.CurrentMetaInfoFormatVersion = 54] = "CurrentMetaInfoFormatVersion";
  }(VersionConstants || (VersionConstants = {}));

  /**
   * Study versioning system for managing migrations and compatibility
   */
  class StudyVersioning {
    /**
     * @param {Array} studiesMetainfo - Array of study meta-info objects
     * @param {Array} studiesMigrations - Array of study migration definitions
     */
    constructor(studiesMetainfo, studiesMigrations) {
      this._migrations = {};
      
      if (!studiesMetainfo) throw new Error("No studies metainfo");
      if (!studiesMigrations) throw new Error("No studies migrations");
      
      this._studiesMetainfo = studiesMetainfo;
      this._studiesMigrations = studiesMigrations;
      
      // Initialize migrations for each study
      for (let i = 0; i < this._studiesMigrations.length; i++) {
        const migration = this._studiesMigrations[i];
        const versionFrom = migration.versFrom;
        const versionTo = migration.versTo;
        
        for (let j = 0; j < migration.studyMigrations.length; j++) {
          const studyMigration = migration.studyMigrations[j];
          const studyId = studyMigration.studyId;
          
          if (0 === studyMigration.rules.length) {
            loggerInstance.logError("Study Migration should have at least one conversionion rule");
            continue;
          }
          
          const studyMigrator = this._migrations[studyId] ? 
            this._migrations[studyId] : 
            new StudyMigrationFactory(studyId);
          
          studyMigrator.addMigration(versionFrom, versionTo, studyMigration.rules);
          this._migrations[studyId] = studyMigrator;
        }
      }
      
      // Initialize client migrations
      this._clientMigrations = [(studyState, studyInputs) => {
        if (0 === this._studiesMetainfo.length || !studyState.isTVScript || studyState.version >= 22) {
          return studyInputs;
        }
        
        const migratedInputs = {};
        let fakeIndex = 0;
        let inputIndex = 0;
        let currentInput = studyInputs[inputIndex];
        
        while (void 0 !== currentInput) {
          const input = studyInputs[currentInput.id];
          if (input.isFake) {
            currentInput.id = "in_" + fakeIndex++;
          }
          migratedInputs[currentInput.id] = input;
          migratedInputs[input.id] = input;
          inputIndex++;
          currentInput = studyInputs[inputIndex];
        }
        
        return migratedInputs;
      }];
    }

    /**
     * Update meta-info asynchronously
     * @param {Object} metaInfo - Meta-info to update
     * @returns {Promise<Object>} Promise resolving to updated meta-info
     */
    async updateMetaInfoAsync(metaInfo) {
      StudyMetaInfo.versionOf(metaInfo);
      
      let metaInfoResult = null;
      const studiesMetainfo = this._studiesMetainfo;
      
      for (let i = 0; i < studiesMetainfo.length; i++) {
        if (studiesMetainfo[i].id === metaInfo.id) {
          metaInfoResult = studiesMetainfo[i];
          break;
        }
      }
      
      return {
        sync: true,
        result: metaInfoResult ? new StudyMetaInfo.StudyMetaInfo(metaInfoResult.state()) : null
      };
    }

    /**
     * Update study state with migrations
     * @param {Object} studyState - Current study state
     * @param {Object} newMetaInfo - New meta-info
     * @param {Object} oldMetaInfo - Old meta-info
     * @returns {Object} Updated study state
     */
    updateStudyState(studyState, newMetaInfo, oldMetaInfo) {
      if (null == studyState || null == newMetaInfo || null == oldMetaInfo) {
        return studyState;
      }
      
      studyState = objectClone.clone(studyState);
      this.updateStudyInputsIfNeeded(studyState, newMetaInfo.version, oldMetaInfo);
      
      // Apply client migrations
      for (const clientMigration of this._clientMigrations) {
        const migratedInputs = clientMigration.call(this, newMetaInfo, studyState.inputs);
        
        if (Object.keys(migratedInputs).length === Object.keys(studyState.inputs).length) {
          studyState.inputs = migratedInputs;
        } else {
          loggerInstance.logWarn(
            "StudyVersioning._clientMigrations application returned bad result. Skipping it..."
          );
        }
      }
      
      const version = StudyMetaInfo.versionOf(newMetaInfo);
      
      // Handle TV script special cases
      if (newMetaInfo.isTVScript && newMetaInfo.TVScriptSourceCode && 
          version >= 12 && version <= 26) {
        const plotIdMap = {};
        
        for (let i = 0; i < newMetaInfo.plots.length; ++i) {
          const plot = newMetaInfo.plots[i];
          const oldPlot = oldMetaInfo.plots[i];
          plotIdMap[plot.id] = oldPlot.id;
        }
        
        const styleKeys = Object.keys(studyState.styles);
        for (let i = 0; i < styleKeys.length; ++i) {
          const styleKey = styleKeys[i];
          const oldStyle = studyState.styles[styleKey];
          delete studyState.styles[styleKey];
          const newStyleKey = plotIdMap[styleKey];
          studyState.styles[newStyleKey] = oldStyle;
        }
        
        const plotKeys = Object.keys(studyState.plots);
        for (let i = 0; i < plotKeys.length; ++i) {
          const plotKey = plotKeys[i];
          const oldPlot = studyState.plots[plotKey];
          const newPlotId = plotIdMap[oldPlot.id];
          studyState.plots[plotKey].id = newPlotId;
        }
      }
      
      return studyState;
    }

    /**
     * Update study inputs if needed
     * @param {Object} studyState - Study state
     * @param {number} newVersion - New version
     * @param {Object} oldMetaInfo - Old meta-info
     */
    updateStudyInputsIfNeeded(studyState, newVersion, oldMetaInfo) {
      if (!(oldMetaInfo.isTVScript || !!oldMetaInfo.pine) && newVersion !== oldMetaInfo.version) {
        const defaultInputs = oldMetaInfo && oldMetaInfo.defaults.inputs;
        studyState.inputs = this.updateStudyInputs(
          oldMetaInfo.id, 
          newVersion, 
          oldMetaInfo.version, 
          studyState.inputs, 
          defaultInputs
        );
      }
    }

    /**
     * Update study inputs with migration
     * @param {string} studyId - Study ID
     * @param {number} versionFrom - From version
     * @param {number} versionTo - To version
     * @param {Object} currentInputs - Current inputs
     * @param {Object} defaultInputs - Default inputs
     * @returns {Object} Updated inputs
     */
    updateStudyInputs(studyId, versionFrom, versionTo, currentInputs, defaultInputs) {
      let updatedInputs = objectClone.clone(defaultInputs);
      
      if (studyId in this._migrations) {
        const versionFromParsed = VersionParser.Version.parse(versionFrom);
        let versionToParsed;
        
        if ("last" === versionTo) {
          const lastVersion = this.lastVersionOfStudy(studyId);
          versionToParsed = VersionParser.Version.parse(lastVersion);
        } else {
          versionToParsed = VersionParser.Version.parse(versionTo);
        }
        
        updatedInputs = this._migrations[studyId].updateInputs(
          versionFromParsed, 
          versionToParsed, 
          updatedInputs
        );
      }
      
      if (null == versionTo) return updatedInputs;
      
      // Merge new inputs
      for (const inputId in versionTo) {
        if (inputId in updatedInputs) {
          updatedInputs[inputId] = versionTo[inputId];
        }
      }
      
      // Remove obsolete inputs
      for (const inputId in updatedInputs) {
        if (!(inputId in versionTo)) {
          const inputValue = updatedInputs[inputId];
          loggerInstance.logWarn(
            `Extra input detected, studyId='${studyId}', versionFrom='${versionFrom}', inputId='${inputId}', inputValue='${inputValue}', removing it and continue...`
          );
          delete updatedInputs[inputId];
        }
      }
      
      return updatedInputs;
    }

    /**
     * Get last version of study
     * @param {string} studyId - Study ID
     * @returns {number} Last version number
     */
    lastVersionOfStudy(studyId) {
      return migrationUtils.ensureDefined(
        this._studiesMetainfo.find(metaInfo => metaInfo.id === studyId)
      ).version;
    }

    /**
     * Update meta-info for built-in indicators
     * @param {Object} metaInfo - Meta-info to update
     * @returns {Object} Updated meta-info
     */
    updateMetaInfo(metaInfo) {
      if (!metaInfo) return metaInfo;
      
      assertionUtils.assert(metaInfo instanceof StudyMetaInfo.StudyMetaInfo);
      assertionUtils.assert(
        !metaInfo.isTVScript,
        "This method should update only built-in java indicators metaInfo. For Pine indicators use updateMetaInfoAsync"
      );
      
      const metaInfoData = this._studiesMetainfo.find(metaInfo => metaInfo.id === metaInfo.id);
      return metaInfoData ? new StudyMetaInfo.StudyMetaInfo(metaInfoData.state()) : null;
    }

    /**
     * Patch points-based study state
     * @param {Object} studyState - Study state to patch
     * @returns {Object} Patched study state
     */
    static patchPointsBasedStudyState(studyState) {
      return this._fixInputsMaxValue(studyState.state, studyState.metaInfo);
    }

    /**
     * Patch study data
     * @param {Object} studyState - Study state
     * @param {Object} data - Study data
     * @param {Object} nsData - NS data
     * @param {Object} indexes - Indexes
     * @returns {Object} Patched study data
     */
    static patchStudyData(studyState, data, nsData, indexes) {
      return {
        data: data,
        nsData: nsData,
        indexes: indexes ?? void 0
      };
    }

    /**
     * Patch points-based study data
     * @param {Object} studyState - Study state
     * @param {Object} data - Study data
     * @returns {Object} Patched study data
     */
    static patchPointsBasedStudyData(studyState, data) {
      return data;
    }

    /**
     * Patch props state and meta-info
     * @param {Object} studyState - Study state
     * @param {Object} metaInfo - Meta-info
     * @param {Object} studyData - Study data
     * @returns {Object} Patched study state and meta-info
     */
    static patchPropsStateAndMetaInfo(studyState, metaInfo, studyData) {
      let metaInfoState = metaInfo.state();
      
      // Remove alerts for BOOKER
      if ("Script$BOOKER" !== metaInfo.productId || metaInfoState.alerts) {
        delete studyState.alerts;
      }
      
      this._fixInputsOrder(studyState, metaInfoState);
      this._fixInputsMaxValue(studyState, metaInfoState);
      
      const inputsSplit = this.splitInputs(studyState.inputs);
      studyState.inputs = inputsSplit.obj;
      
      const version = StudyMetaInfo.versionOf(metaInfo);
      
      // Handle child study meta-info
      if (version < 42 && metaInfoState.isChildStudy) {
        studyState.isChildStudy = metaInfoState.isChildStudy;
      }
      
      // Handle special TV script cases
      if (metaInfo.isTVScript && metaInfo.version < 60) {
        // Remove TV script source code for certain studies
        if ("Script$TV_EARNINGS@tv-scripting" !== metaInfo.id &&
            "Script$TV_DIVIDENDS@tv-scripting" !== metaInfo.id && 
            "Script$TV_SPLITS@tv-scripting" !== metaInfo.id) {
          delete metaInfoState.TVScriptSourceCode;
        }
        
        // Add volume input for Volume study
        if ("Volume" !== metaInfo.id && "Volume@tv-basicstudies" !== metaInfo.id || 
            0 !== metaInfo.inputs.length) {
          metaInfoState.inputs = [{
            id: "length",
            type: "integer",
            defval: 20,
            min: 1,
            max: 1e3
          }];
          metaInfoState.plots.push({
            id: "vol_ma",
            type: "line"
          });
        }
        
        // Handle Volume@tv-basicstudies transparency
        if ("Volume@tv-basicstudies" === metaInfo.id && metaInfo.version && 
            metaInfo.version <= 46 && void 0 === metaInfoState.vol.transparency) {
          metaInfoState.vol.transparency = metaInfoState.transparency || 87;
        }
        
        // Handle PivotPointsStandard@tv-basicstudies
        if ("PivotPointsStandard@tv-basicstudies" === metaInfo.id) {
          if (0 === metaInfoState.inputs.length) {
            metaInfoState.inputs = {
              kind: "Traditional",
              showHistoricalPivots: true
            };
            metaInfoState.inputs = [{
              defval: "Traditional",
              id: "kind",
              type: "text",
              options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
            }, {
              id: "showHistoricalPivots",
              type: "bool",
              defval: true
            }];
          } else if (1 === metaInfoState.inputs.length) {
            metaInfoState.inputs = {
              kind: "Traditional"
            };
            metaInfoState.inputs = [{
              defval: "Traditional",
              id: "kind",
              type: "text",
              options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
            }, {
              id: "showHistoricalPivots",
              type: "bool",
              defval: true
            }];
          }
          
          if (void 0 === metaInfoState._hardCodedDefaultsVersion) {
            metaInfoState._hardCodedDefaultsVersion = 1;
            const color = metaInfoState.color;
            delete metaInfoState.color;
            metaInfoState.levelsStyle = {
              colors: {
                P: color,
                "S1/R1": color,
                "S2/R2": color,
                "S3/R3": color,
                "S4/R4": color,
                "S5/R5": color
              }
            };
          }
        }
        
        // Handle CMF study
        if ("CMF" === metaInfo.shortId && 2 === metaInfoState.inputs.length) {
          metaInfoState.inputs = {
            length: metaInfoState.inputs["length fast"]
          };
          metaInfoState.inputs = metaInfoState.inputs.splice(0, 1);
          metaInfoState.inputs[0].id = "length";
        }
        
        // Handle precision defaults
        if (metaInfoState.defaults && void 0 === metaInfoState.defaults.precision && 
            version < 46) {
          const excludeList = ["Volume@tv-basicstudies", "VbPVisible@tv-volumebyprice", "VbPSessions@tv-volumebyprice"];
          metaInfoState.defaults.precision = excludeList.indexOf(metaInfo.id) === -1 ? 0 : 4;
        }
      }
      
      let studyId = metaInfo.id;
      
      // Handle ESD prefix for TV scripts
      if (metaInfo.version < 60) {
        const esdStudies = ["TV_DIVIDENDS", "TV_SPLITS", "TV_EARNINGS"];
        const prefixLength = 6;
        
        for (let i = 0; i < esdStudies.length; i++) {
          if (metaInfo.id.startsWith("Script$" + esdStudies[i] + "@tv-scripting")) {
            metaInfoState.fullId = "ESD" + metaInfoState.fullId.substring(prefixLength);
            metaInfoState.id = "ESD" + metaInfoState.id.substring(prefixLength);
            metaInfoState.name && (metaInfoState.name = "ESD" + metaInfoState.name.substring(prefixLength));
            metaInfoState.shortId = "ESD" + metaInfoState.shortId.substring(prefixLength);
            metaInfoState.productId = "ESD" + metaInfoState.productId.substring(prefixLength);
            studyId = "ESD" + metaInfo.id.substring(prefixLength);
          }
        }
      }
      
      // Handle ESD study mappings
      const esdMappings = {
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
      
      if (studyId in esdMappings) {
        Object.assign(metaInfoState, esdMappings[studyId]);
      }
      
      // Handle MA study type selection
      if ("MA" === metaInfo.id) {
        const maTypes = {
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
        };
        
        const maSimple = {
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
        };
        
        const maVolumeWeighted = {
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
        };
        
        const maWeighted = {
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
        
        switch (metaInfoState.inputs.type) {
          case "exp":
            metaInfoState = maTypes;
            break;
          case "simple":
            metaInfoState = maSimple;
            break;
          case "weighted":
            metaInfoState = maWeighted;
            break;
          case "volume weighted":
            metaInfoState = maVolumeWeighted;
            break;
        }
        
        metaInfoState.styles[metaInfoState.plots[0].id] = metaInfoState.styles.MovAvg;
        delete metaInfoState.styles.MovAvg;
        delete metaInfoState.inputs.type;
      }
      
      // Handle old show study last value property
      if (metaInfo.oldShowStudyLastValueProperty) {
        metaInfoState.oldShowLastValue = metaInfoState.showLastValue;
        delete metaInfoState.showLastValue;
      }
      
      delete metaInfoState.showStudyArguments;
      metaInfoMigration.migrateMetaInfoAndPropState(metaInfoState, metaInfo);
      
      return {
        propsState: metaInfoState,
        metaInfo: metaInfoState
      };
    }

    /**
     * Split inputs into array and object
     * @param {Object} inputs - Input object to split
     * @returns {Object} Split inputs with arr and obj properties
     */
    static splitInputs(inputs) {
      const arr = {};
      const obj = {};
      
      for (const [key, value] of Object.entries(inputs)) {
        if (assertionUtils.isNumber(parseInt(key, 10))) {
          arr[key] = value;
        } else {
          obj[key] = value;
        }
      }
      
      return {
        arr: arr,
        obj: obj
      };
    }

    /**
     * Verify input max values
     * @param {Object} metaInfo - Meta-info to verify
     */
    static verifyInputsMaxValue(metaInfo) {
      if (metaInfo.inputs) {
        for (const input of metaInfo.inputs) {
          if ("integer" === input.type && input.max && input.max > MAX_INTEGER_VALUE) {
            loggerInstance.logWarn(
              "Bad integer input max value in metaInfo id=" + metaInfo.id + " title=" + metaInfo.description
            );
          }
        }
      }
    }

    /**
     * Merge inputs object part
     * @param {Object} metaInfo - Meta-info
     * @param {Object} inputs - Inputs to merge
     */
    static mergeInputsObjPart(metaInfo, inputs) {
      const inputsSplit = this.splitInputs(inputs);
      assertionUtils.default(metaInfo, inputsSplit.obj);
    }

    /**
     * Fix inputs order
     * @param {Object} studyState - Study state
     * @param {Object} metaInfoState - Meta-info state
     */
    static _fixInputsOrder(studyState, metaInfoState) {
      const orderedInputIds = this._getOrderedInputIds(metaInfoState);
      const inputsSplit = this.splitInputs(studyState.inputs);
      const inputArray = inputsSplit.arr;
      const inputObject = inputsSplit.obj;
      const mergedInputs = assertionUtils.default({}, inputObject);
      
      for (let i = 0; i < orderedInputIds.length; ++i) {
        const inputId = orderedInputIds[i];
        const inputKey = this._findInputKeyById(inputArray, inputId);
        
        if (null !== inputKey) {
          mergedInputs[i] = inputArray[inputKey];
        }
      }
      
      studyState.inputs = mergedInputs;
    }

    /**
     * Fix inputs max values
     * @param {Object} studyState - Study state
     * @param {Object} metaInfoState - Meta-info state
     */
    static _fixInputsMaxValue(studyState, metaInfoState) {
      if (assertionUtils.isAbsent(metaInfoState)) return;
      
      const maxIntegerValue = MAX_INTEGER_VALUE;
      
      if (metaInfoState.inputs) {
        for (const input of metaInfoState.inputs) {
          if ("integer" === input.type && input.max && input.max > maxIntegerValue) {
            input.max = maxIntegerValue;
          }
        }
      }
      
      if (!studyState || !StudyState.inputs) return;
      
      const inputsSplit = this.splitInputs(studyState.inputs);
      const inputArray = inputsSplit.arr;
      
      for (const [, input] of Object.entries(inputArray)) {
        if ("integer" === input.type && input.max && input.max > maxIntegerValue) {
          input.max = maxIntegerValue;
        }
      }
      
      studyState.inputs = assertionUtils.default(inputsSplit.obj, inputArray);
    }

    /**
     * Find input key by ID
     * @param {Object} inputArray - Input array
     * @param {string} inputId - Input ID to find
     * @returns {string|null} Input key or null
     */
    static _findInputKeyById(inputArray, inputId) {
      let inputKey = null;
      
      for (const key in inputArray) {
        if (assertionUtils.isNumber(parseInt(key, 10)) && 
            inputArray[key].id === inputId) {
          inputKey = key;
          break;
        }
      }
      
      return inputKey;
    }

    /**
     * Get ordered input IDs
     * @param {Object} metaInfoState - Meta-info state
     * @returns {Array} Ordered input IDs
     */
    static _getOrderedInputIds(metaInfoState) {
      const orderedInputIds = [];
      
      for (const input of metaInfoState.inputs) {
        orderedInputIds.push(input.id);
      }
      
      return orderedInputIds;
    }

    /**
     * Patch old volume profiles
     * @param {Object} studyState - Study state
     * @param {Object} metaInfoState - Meta-info state
     */
    static _patchOldVolumeProfiles(studyState, metaInfoState) {
      if (!metaInfoState?.hhists) return;
      
      const hhistData = metaInfoState.hhists[studyState].data;
      const hhistArray = [];
      
      for (const [, hhist] of Object.entries(hhistData)) {
        hhistArray.push(hhist);
      }
      
      metaInfoState.hhists[0].data = hhistArray;
    }
  }
}
