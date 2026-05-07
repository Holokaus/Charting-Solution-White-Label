/**
 * ============================================================================
 * TRADINGVIEW MODULE 10544 - ELLIOTT WAVE DRAWING TOOLS
 * ============================================================================
 *
 * Purpose: Elliott Wave pattern drawing tools for technical analysis
 *
 * Size: ~13 KB
 *
 * Key Responsibilities:
 *   1. Elliott Wave Pattern Drawing
 *      - Impulse waves (5-wave patterns: 1-2-3-4-5)
 *      - Correction waves (3-wave patterns: A-B-C)
 *      - Triangle waves (5-wave patterns: A-B-C-D-E)
 *      - Double combo (W-X-Y)
 *      - Triple combo (W-X-Y-X-Z)
 *
 *   2. Wave Degree System
 *      - 15 degrees from Supermillennium to Minuscule
 *      - Visual hierarchy based on wave degree
 *      - Color coding per degree level
 *
 *   3. Interactive Properties
 *      - Wave degree selection
 *      - Label positioning and styling
 *      - Line color customization
 *      - Background visibility toggle
 *
 *   4. Context Menu Integration
 *      - Change degree action
 *      - Submenu with all 15 degree options
 *      - Undo/redo support
 *
 * Class Hierarchy:
 *   LineToolElliott (base, 4-6 points)
 *     ↳ LineToolElliottImpulse (5 waves)
 *     ↳ LineToolElliottTriangle (5 waves A-E)
 *     ↳ LineToolElliottTripleCombo (WXYXZ)
 *     ↳ LineToolElliottCorrection (ABC)
 *     ↳ LineToolElliottDoubleCombo (WXY)
 *
 * Dependencies:
 *   - 11542: i18n translations
 *   - 95804: TranslatedString utilities
 *   - 41414: LineDataSource (base class)
 *   - 41706: Action menus
 *   - 78176: DefaultProperty
 *   - 65045: LineToolColorsProperty
 *   - 13896: Chart invalidation constants
 *
 * @module 10544
 * @category Drawing Tools
 * @subcategory Elliott Wave Analysis
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.r(moduleConfig), moduleRequire.d(moduleConfig, {
    LineToolElliott: () => LineToolElliottBase,
    LineToolElliottCorrection: () => LineToolElliottCorrection,
    LineToolElliottDegree: () => ElliottDegree,
    LineToolElliottDoubleCombo: () => LineToolElliottDoubleCombo,
    LineToolElliottImpulse: () => LineToolElliottImpulse,
    LineToolElliottTriangle: () => LineToolElliottTriangle,
    LineToolElliottTripleCombo: () => LineToolElliottTripleCombo
  });

  // Module imports
  var ElliottDegree, CurrentWaveStyle,
    i18n = moduleRequire(11542),
    TranslatedString = moduleRequire(95804),
    LineDataSource = moduleRequire(41414),
    Action = moduleRequire(41706),
    DefaultProperty = moduleRequire(78176),
    LineToolColorsProperty = moduleRequire(65045),
    chartInvalidation = moduleRequire(13896);

  // Elliott Wave Degree enumeration (15 hierarchical levels)
  !function(ElliottDegree) {
    ElliottDegree[ElliottDegree.Supermillennium = 0] = "Supermillennium";
    ElliottDegree[ElliottDegree.Millennium = 1] = "Millennium";
    ElliottDegree[ElliottDegree.Submillennium = 2] = "Submillennium";
    ElliottDegree[ElliottDegree.GrandSupercycle = 3] = "GrandSupercycle";
    ElliottDegree[ElliottDegree.Supercycle = 4] = "Supercycle";
    ElliottDegree[ElliottDegree.Cycle = 5] = "Cycle";
    ElliottDegree[ElliottDegree.Primary = 6] = "Primary";
    ElliottDegree[ElliottDegree.Intermediate = 7] = "Intermediate";
    ElliottDegree[ElliottDegree.Minor = 8] = "Minor";
    ElliottDegree[ElliottDegree.Minute = 9] = "Minute";
    ElliottDegree[ElliottDegree.Minuette = 10] = "Minuette";
    ElliottDegree[ElliottDegree.Subminuette = 11] = "Subminuette";
    ElliottDegree[ElliottDegree.Micro = 12] = "Micro";
    ElliottDegree[ElliottDegree.Submicro = 13] = "Submicro";
    ElliottDegree[ElliottDegree.Minuscule = 14] = "Minuscule";
  }(ElliottDegree || (ElliottDegree = {}));

  // Current wave style (for visual highlighting)
  !function(CurrentWaveStyle) {
    CurrentWaveStyle[CurrentWaveStyle.Current = 4] = "Current";
  }(CurrentWaveStyle || (CurrentWaveStyle = {}));

  // All 15 degree values for dropdown
  const allDegreeValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  // Translated action string for property changes
  const changeDegreeUndoText = new TranslatedString.TranslatedString(
    "change Elliott degree",
    i18n.t(null, void 0, moduleRequire(47977))
  );

  // Degree option labels for UI dropdown
  const degreeOptions = [{
    value: 0,
    title: i18n.t(null, void 0, moduleRequire(3348))
  }, {
    value: 1,
    title: i18n.t(null, void 0, moduleRequire(87957))
  }, {
    value: 2,
    title: i18n.t(null, void 0, moduleRequire(63375))
  }, {
    value: 3,
    title: i18n.t(null, void 0, moduleRequire(57726))
  }, {
    value: 4,
    title: i18n.t(null, void 0, moduleRequire(67948))
  }, {
    value: 5,
    title: i18n.t(null, void 0, moduleRequire(87380))
  }, {
    value: 6,
    title: i18n.t(null, void 0, moduleRequire(59189))
  }, {
    value: 7,
    title: i18n.t(null, void 0, moduleRequire(10268))
  }, {
    value: 8,
    title: i18n.t(null, { context: "wave" }, moduleRequire(51077))
  }, {
    value: 9,
    title: i18n.t(null, { context: "wave" }, moduleRequire(922))
  }, {
    value: 10,
    title: i18n.t(null, void 0, moduleRequire(14724))
  }, {
    value: 11,
    title: i18n.t(null, void 0, moduleRequire(30585))
  }, {
    value: 12,
    title: i18n.t(null, void 0, moduleRequire(24866))
  }, {
    value: 13,
    title: i18n.t(null, void 0, moduleRequire(1145))
  }, {
    value: 14,
    title: i18n.t(null, void 0, moduleRequire(78273))
  }];

  /**
   * Base class for all Elliott Wave drawing tools
   * @extends LineDataSource
   */
  class LineToolElliottBase extends LineDataSource.LineDataSource {
    /**
     * @param {ChartModel} chartModel - The chart model instance
     * @param {Property|null} properties - Tool properties (created if null)
     * @param {number} sourceIndex - Source index in chart
     * @param {number} zOrder - Z-order for rendering
     */
    constructor(chartModel, properties, sourceIndex, zOrder) {
      super(chartModel, properties ?? LineToolElliottBase.createProperties(
        chartModel.backgroundTheme().spawnOwnership()
      ), sourceIndex, zOrder);

      this.version = 4;

      // Lazy load Elliott labels pane view
      Promise.all([
        moduleRequire.moduleRequire(6290),
        moduleRequire.moduleRequire(986),
        moduleRequire.moduleRequire(6668),
        moduleRequire.moduleRequire(1583)
      ]).then(moduleRequire.bind(moduleRequire, 60509)).then((elliottLabelsModule => {
        this._setPaneViews([new elliottLabelsModule.ElliottLabelsPaneView(this, this._model)]);
      }));
    }

    /**
     * Migrate legacy tool state to current version
     * @param {number} fromVersion - Source version
     * @param {ChartModel} chartModel - Chart model
     * @param {object} migratedState - State to migrate
     */
    migrateVersion(fromVersion, chartModel, migratedState) {
      // Remove deprecated background properties
      if (migratedState.properties.hasChild("background")) {
        migratedState.properties.removeProperty("background");
      }
      if (migratedState.properties.hasChild("backgroundColor")) {
        migratedState.properties.removeProperty("backgroundColor");
      }
      if (migratedState.properties.hasChild("showBackground")) {
        migratedState.properties.removeProperty("showBackground");
      }

      // Version 1: Duplicate first point and time point
      if (1 === fromVersion) {
        const duplicatedTimePoint = Object.assign({}, this._timePoint[0]);
        this._timePoint.unshift(duplicatedTimePoint);

        if (this._points.length > 0) {
          const duplicatedPoint = Object.assign({}, this._points[0]);
          this._points.unshift(duplicatedPoint);
        }
      }
    }

    /**
     * Apply template properties to this tool
     * @param {object} template - Template object
     */
    applyTemplate(template) {
      const templateCopy = template;
      delete templateCopy.background;
      delete templateCopy.backgroundColor;
      delete templateCopy.showBackground;
      super.applyTemplate(template);
    }

    /**
     * @returns {string} Tool display name
     */
    name() {
      return "Elliott Labels";
    }

    /**
     * Get context menu actions for this tool
     * @param {ActionDispatcher} actionDispatcher - Action dispatcher
     * @returns {object} Actions configuration
     */
    async additionalActions(actionDispatcher) {
      return {
        actions: [new Action.Action({
          actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
          options: {
            label: i18n.t(null, void 0, moduleRequire(23403)),
            subItems: allDegreeValues.map((degreeValue => {
              const degreeOption = degreeOptions.filter((opt => opt.value === degreeValue))[0];
              return new Action.Action({
                actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                options: {
                  label: degreeOption.title,
                  checkable: !0,
                  checked: this.properties().childs().degree.value() === degreeValue,
                  onExecute: () => {
                    actionDispatcher.setProperty(
                      this.properties().childs().degree,
                      degreeValue,
                      changeDegreeUndoText,
                      chartInvalidation.lineToolsDoNotAffectChartInvalidation
                    );
                  }
                }
              });
            }))
          }
        })],
        placement: "CustomAction"
      };
    }

    /**
     * Get label styling for a specific wave index
     * @param {number} waveIndex - Index of the wave (0-5)
     * @returns {object} Label style configuration
     */
    label(waveIndex) {
      const degreeValue = allDegreeValues.length - this.properties().childs().degree.value() - 1;
      const groupIndex = Math.floor(degreeValue / 3);

      return {
        group: groupIndex,
        bold: !!(groupIndex % 2),
        decoration: ["", "brackets", "circle"][degreeValue % 3],
        label: this.labelsGroup()[groupIndex][waveIndex]
      };
    }

    /**
     * @returns {Array} Available degree values for dropdown
     */
    availableDegreesValues() {
      return degreeOptions;
    }

    /**
     * Create default properties for Elliott tool
     * @param {Theme} theme - Chart theme
     * @param {object} state - Initial state
     * @returns {DefaultProperty} Configured property object
     */
    static createProperties(theme, state) {
      const properties = new DefaultProperty.DefaultProperty({
        defaultName: "linetoolelliott",
        state: state,
        theme: theme
      });
      this._configureProperties(properties);
      return properties;
    }

    /**
     * Migrate legacy tool state
     * @param {object} state - State to migrate
     */
    static migrateState(state) {
      // Wave size to degree mappings for legacy tools
      const subminuetteMapping = {
        0: 11, 1: 10, 2: 9, 3: 8, 4: 7,
        5: 6, 6: 5, 7: 4, 8: 3
      };
      const minorMapping = { 0: 11, 1: 8 };

      // Convert old tool types to new standardized types
      if ("LineToolElliottSubminuette" === state.type) {
        state.type = "LineToolElliottImpulse";
        state.state.degree = subminuetteMapping[state.state.wavesize];
      } else if ("LineToolElliottMinor" === state.type) {
        state.type = "LineToolElliottImpulse";
        state.state.degree = subminuetteMapping[state.state.wavesize];
      } else if ("LineToolElliottCircle" === state.type) {
        state.type = "LineToolElliottImpulse";
        state.state.degree = subminuetteMapping[state.state.wavesize];
      } else if ("LineToolElliottMinorRetr" === state.type) {
        state.type = "LineToolElliottCorrection";
        state.state.degree = minorMapping[state.state.wavesize];
      } else if ("LineToolElliottMajorRetr" === state.type) {
        state.type = "LineToolElliottCorrection";
        state.state.degree = minorMapping[state.state.wavesize];
      }
    }

    /**
     * @returns {Promise<ElliottPatternDefinitionsViewModel>}
     */
    async _getPropertyDefinitionsViewModelClass() {
      return (await Promise.all([
        moduleRequire.moduleRequire(3198),
        moduleRequire.moduleRequire(5410),
        moduleRequire.moduleRequire(2745),
        moduleRequire.moduleRequire(8823),
        moduleRequire.moduleRequire(8537)
      ]).then(moduleRequire.bind(moduleRequire, 6238)))
        .ElliottPatternDefinitionsViewModel;
    }

    /**
     * Configure tool properties
     * @param {DefaultProperty} properties - Properties to configure
     */
    static _configureProperties(properties) {
      super._configureProperties(properties);
      properties.addChild("linesColors", new LineToolColorsProperty.LineToolColorsProperty(
        [properties.childs().color]
      ));
      properties.addExcludedKey("linesColors", 3);
    }
  }

  /**
   * Base class for 6-point Elliott patterns
   * @extends LineToolElliottBase
   */
  class LineToolElliott6Point extends LineToolElliottBase {
    pointsCount() {
      return 6;
    }
  }

  // Elliott Impulse wave labels (0,1,2,3,4,5 variants)
  const impulseLabels = [
    ["0", "1", "2", "3", "4", "5"],
    ["0", "i", "ii", "iii", "iv", "v"],
    ["0", "1", "2", "3", "4", "5"],
    ["0", "I", "II", "III", "IV", "V"],
    ["0", "1", "2", "3", "4", "5"]
  ];

  /**
   * Elliott Impulse Wave (12345 pattern)
   * @extends LineToolElliott6Point
   */
  class LineToolElliottImpulse extends LineToolElliott6Point {
    constructor(chartModel, properties, sourceIndex, zOrder) {
      super(chartModel, properties ?? LineToolElliottImpulse.createProperties(
        chartModel.backgroundTheme().spawnOwnership()
      ), sourceIndex, zOrder);
    }

    name() {
      return "Elliott Impulse Wave (12345)";
    }

    labelsGroup() {
      return impulseLabels;
    }

    static createProperties(theme, state) {
      const properties = new DefaultProperty.DefaultProperty({
        defaultName: "linetoolelliottimpulse",
        state: state,
        theme: theme
      });
      this._configureProperties(properties);
      return properties;
    }
  }

  // Elliott Triangle wave labels (ABCDE variants)
  const triangleLabels = [
    ["0", "A", "B", "C", "D", "E"],
    ["0", "a", "b", "c", "d", "e"],
    ["0", "A", "B", "C", "D", "E"],
    ["0", "a", "b", "c", "d", "e"],
    ["0", "A", "B", "C", "D", "E"]
  ];

  /**
   * Elliott Triangle Wave (ABCDE pattern)
   * @extends LineToolElliott6Point
   */
  class LineToolElliottTriangle extends LineToolElliott6Point {
    constructor(chartModel, properties, sourceIndex, zOrder) {
      super(chartModel, properties ?? LineToolElliottTriangle.createProperties(
        chartModel.backgroundTheme().spawnOwnership()
      ), sourceIndex, zOrder);
    }

    name() {
      return "Elliott Triangle Wave (ABCDE)";
    }

    labelsGroup() {
      return triangleLabels;
    }

    static createProperties(theme, state) {
      const properties = new DefaultProperty.DefaultProperty({
        defaultName: "linetoolelliotttriangle",
        state: state,
        theme: theme
      });
      this._configureProperties(properties);
      return properties;
    }
  }

  // Elliott Triple Combo labels (WXYXZ variants)
  const tripleComboLabels = [
    ["0", "W", "X", "Y", "X", "Z"],
    ["0", "w", "x", "y", "x", "z"],
    ["0", "W", "X", "Y", "X", "Z"],
    ["0", "w", "x", "y", "x", "z"],
    ["0", "W", "X", "Y", "X", "Z"]
  ];

  /**
   * Elliott Triple Combo Wave (WXYXZ pattern)
   * @extends LineToolElliott6Point
   */
  class LineToolElliottTripleCombo extends LineToolElliott6Point {
    constructor(chartModel, properties, sourceIndex, zOrder) {
      super(chartModel, properties ?? LineToolElliottTripleCombo.createProperties(
        chartModel.backgroundTheme().spawnOwnership()
      ), sourceIndex, zOrder);
    }

    name() {
      return "Elliott Triple Combo Wave (WXYXZ)";
    }

    labelsGroup() {
      return tripleComboLabels;
    }

    static createProperties(theme, state) {
      const properties = new DefaultProperty.DefaultProperty({
        defaultName: "linetoolelliotttriplecombo",
        state: state,
        theme: theme
      });
      this._configureProperties(properties);
      return properties;
    }
  }

  /**
   * Base class for 4-point Elliott patterns
   * @extends LineToolElliottBase
   */
  class LineToolElliott4Point extends LineToolElliottBase {
    pointsCount() {
      return 4;
    }
  }

  // Elliott Correction wave labels (ABC variants)
  const correctionLabels = [
    ["0", "A", "B", "C"],
    ["0", "a", "b", "c"],
    ["0", "A", "B", "C"],
    ["0", "a", "b", "c"],
    ["0", "A", "B", "C"]
  ];

  /**
   * Elliott Correction Wave (ABC pattern)
   * @extends LineToolElliott4Point
   */
  class LineToolElliottCorrection extends LineToolElliott4Point {
    constructor(chartModel, properties, sourceIndex, zOrder) {
      super(chartModel, properties ?? LineToolElliottCorrection.createProperties(
        chartModel.backgroundTheme().spawnOwnership()
      ), sourceIndex, zOrder);
    }

    name() {
      return "Elliott Correction Wave (ABC)";
    }

    labelsGroup() {
      return correctionLabels;
    }

    static createProperties(theme, state) {
      const properties = new DefaultProperty.DefaultProperty({
        defaultName: "linetoolelliottcorrection",
        state: state,
        theme: theme
      });
      this._configureProperties(properties);
      return properties;
    }
  }

  // Elliott Double Combo labels (WXY variants)
  const doubleComboLabels = [
    ["0", "W", "X", "Y"],
    ["0", "w", "x", "y"],
    ["0", "W", "X", "Y"],
    ["0", "w", "x", "y"],
    ["0", "W", "X", "Y"]
  ];

  /**
   * Elliott Double Combo Wave (WXY pattern)
   * @extends LineToolElliott4Point
   */
  class LineToolElliottDoubleCombo extends LineToolElliott4Point {
    constructor(chartModel, properties, sourceIndex, zOrder) {
      super(chartModel, properties ?? LineToolElliottDoubleCombo.createProperties(
        chartModel.backgroundTheme().spawnOwnership()
      ), sourceIndex, zOrder);
    }

    name() {
      return "Elliott Double Combo Wave (WXY)";
    }

    labelsGroup() {
      return doubleComboLabels;
    }

    static createProperties(theme, state) {
      const properties = new DefaultProperty.DefaultProperty({
        defaultName: "linetoolelliottdoublecombo",
        state: state,
        theme: theme
      });
      this._configureProperties(properties);
      return properties;
    }
  }

  // Module exports are handled by the i.d() call at the top
  // No additional code needed

}
