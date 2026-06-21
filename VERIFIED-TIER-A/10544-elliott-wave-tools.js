/**
 * Module 10544 - Elliott Wave Line Tools
 * 
 * Implements Elliott Wave analysis tools for technical analysis on TradingView charts.
 * Provides multiple Elliott Wave patterns including Impulse, Correction, Triangle,
 * Double Combo, and Triple Combo waves with various degree levels.
 * 
 * @module 10544
 * @see LineDataSource (module 41414)
 * @see Action (module 41706)
 * @see DefaultProperty (module 78176)
 * @see LineToolColorsProperty (module 65045)
 * @see TranslatedString (module 95804)
 * @see translation utilities (module 11542)
 */

import { t as translate } from './11542-translation-utils';
import { TranslatedString } from './95804-translated-string';
import { LineDataSource } from './41414-line-data-source';
import { Action } from './41706-action';
import { DefaultProperty } from './78176-default-property';
import { LineToolColorsProperty } from './65045-line-tool-colors-property';

/**
 * Elliott Wave Degree Levels
 * 
 * Represents the hierarchical classification of Elliott Waves from largest to smallest.
 * Each degree represents a different time scale in market analysis.
 * 
 * @enum {number}
 * @readonly
 */
export const LineToolElliottDegree = {
    Supermillennium: 0,   // Largest degree - centuries
    Millennium: 1,        // Hundreds of years
    Submillennium: 2,     // Decades to centuries
    GrandSupercycle: 3,   // Several decades
    Supercycle: 4,        // One to several decades
    Cycle: 5,             // One year to several years
    Primary: 6,           // Several months to years
    Intermediate: 7,      // Weeks to months
    Minor: 8,             // Weeks
    Minute: 9,            // Days to weeks
    Minuette: 10,         // Hours to days
    Subminuette: 11,      // Minutes to hours
    Micro: 12,            // Seconds to minutes
    Submicro: 13,         // Fractions of seconds
    Minuscule: 14         // Smallest degree
};

/**
 * Current wave selection mode
 * 
 * @enum {number}
 * @readonly
 */
const CurrentMode = {
    Current: 4
};

/**
 * Available degree values for Elliott Wave tools
 * All 15 degrees from Supermillennium to Minuscule
 */
const ALL_DEGREES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

/**
 * Translation key for changing Elliott degree property
 */
const CHANGE_DEGREE_TRANSLATION_KEY = 47977;

/**
 * Degree labels configuration
 * Maps degree values to their display titles with proper translations
 */
const DEGREE_LABELS = [
    { value: 0, title: translate(null, void 0, 3348) },      // Supermillennium
    { value: 1, title: translate(null, void 0, 87957) },     // Millennium
    { value: 2, title: translate(null, void 0, 63375) },     // Submillennium
    { value: 3, title: translate(null, void 0, 57726) },     // GrandSupercycle
    { value: 4, title: translate(null, void 0, 67948) },     // Supercycle
    { value: 5, title: translate(null, void 0, 87380) },     // Cycle
    { value: 6, title: translate(null, void 0, 59189) },     // Primary
    { value: 7, title: translate(null, void 0, 10268) },     // Intermediate
    { value: 8, title: translate(null, { context: "wave" }, 51077) },  // Minor
    { value: 9, title: translate(null, { context: "wave" }, 922) },    // Minute
    { value: 10, title: translate(null, void 0, 14724) },    // Minuette
    { value: 11, title: translate(null, void 0, 30585) },    // Subminuette
    { value: 12, title: translate(null, void 0, 24866) },    // Micro
    { value: 13, title: translate(null, void 0, 1145) },     // Submicro
    { value: 14, title: translate(null, void 0, 78273) }     // Minuscule
];

/**
 * Base Elliott Wave Line Tool
 * 
 * Provides core functionality for all Elliott Wave drawing tools.
 * Handles property management, version migration, and degree selection.
 * 
 * @class
 * @extends LineDataSource
 */
export class LineToolElliott extends LineDataSource {
    /**
     * Current version of the Elliott Wave tool state
     * Used for migration of legacy states
     */
    version = 4;

    /**
     * Create a new Elliott Wave tool instance
     * 
     * @param {ChartModel} chartModel - The chart model instance
     * @param {DefaultProperty} [properties] - Tool properties (auto-created if not provided)
     * @param {Point[]} points - Anchor points for the tool
     * @param {Object} [options] - Additional options
     */
    constructor(chartModel, properties, points, options) {
        const defaultProperties = properties ?? LineToolElliott.createProperties(
            chartModel.backgroundTheme().spawnOwnership()
        );
        
        super(chartModel, defaultProperties, points, options);
        
        // Load pane views asynchronously
        Promise.all([
            import(/* webpackChunkName: "6290" */ 'chunk-6290'),
            import(/* webpackChunkName: "986" */ 'chunk-986'),
            import(/* webpackChunkName: "6668" */ 'chunk-6668'),
            import(/* webpackChunkName: "1583" */ 'chunk-1583')
        ])
        .then(() => import('./60509-elliott-labels-pane-view'))
        .then((module) => {
            this._setPaneViews([
                new module.ElliottLabelsPaneView(this, this._model)
            ]);
        });
    }

    /**
     * Migrate state from older versions to current format
     * 
     * @param {number} oldVersion - The previous version number
     * @param {Object} oldState - The old state object
     * @param {DefaultProperty} properties - The properties container
     * 
     * @description
     * Version 1 migration:
     * - Removes background-related properties (background, backgroundColor, showBackground)
     * - Prepends a new time point and coordinate point to arrays
     */
    migrateVersion(oldVersion, oldState, properties) {
        // Remove deprecated background properties
        if (properties.hasChild("background")) {
            properties.removeProperty("background");
        }
        if (properties.hasChild("backgroundColor")) {
            properties.removeProperty("backgroundColor");
        }
        if (properties.hasChild("showBackground")) {
            properties.removeProperty("showBackground");
        }

        // Version 1 specific migration
        if (oldVersion === 1) {
            // Prepend a copy of the first time point
            const firstTimePoint = Object.assign({}, this._timePoint[0]);
            this._timePoint.unshift(firstTimePoint);
            
            // Prepend a copy of the first coordinate point if points exist
            if (this._points.length > 0) {
                const firstPoint = Object.assign({}, this._points[0]);
                this._points.unshift(firstPoint);
            }
        }
    }

    /**
     * Apply a template to the tool, excluding background properties
     * 
     * @param {Object} template - The template to apply
     */
    applyTemplate(template) {
        // Create a copy without background properties
        const cleanTemplate = { ...template };
        delete cleanTemplate.background;
        delete cleanTemplate.backgroundColor;
        delete cleanTemplate.showBackground;
        
        super.applyTemplate(cleanTemplate);
    }

    /**
     * Get the display name of this tool
     * 
     * @returns {string} Tool name
     */
    name() {
        return "Elliott Labels";
    }

    /**
     * Get additional actions for the context menu
     * 
     * @param {LineToolElliott} toolInstance - The tool instance
     * @returns {Promise<Object>} Actions configuration with placement info
     */
    async additionalActions(toolInstance) {
        return {
            actions: [
                new Action({
                    actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                    options: {
                        label: translate(null, void 0, 23403),
                        subItems: ALL_DEGREES.map((degreeValue) => {
                            const degreeInfo = DEGREE_LABELS.find(d => d.value === degreeValue);
                            
                            return new Action({
                                actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                                options: {
                                    label: degreeInfo.title,
                                    checkable: true,
                                    checked: this.properties().childs().degree.value() === degreeValue,
                                    onExecute: () => {
                                        // Import undo infrastructure
                                        import('./13896-undo-infrastructure').then((module) => {
                                            toolInstance.setProperty(
                                                this.properties().childs().degree,
                                                degreeValue,
                                                new TranslatedString(
                                                    "change Elliott degree",
                                                    translate(null, void 0, CHANGE_DEGREE_TRANSLATION_KEY)
                                                ),
                                                module.lineToolsDoNotAffectChartInvalidation
                                            );
                                        });
                                    }
                                }
                            });
                        })
                    }
                })
            ],
            placement: "CustomAction"
        };
    }

    /**
     * Generate label information for a specific point index
     * 
     * @param {number} pointIndex - Index of the point to label
     * @returns {Object} Label configuration with group, style, and text
     */
    label(pointIndex) {
        const degreeValue = this.properties().childs().degree.value();
        const invertedDegree = ALL_DEGREES.length - degreeValue - 1;
        const groupIndex = Math.floor(invertedDegree / 3);
        
        // Determine label styling based on degree
        const isBold = !!(groupIndex % 2);
        const decorationTypes = ["", "brackets", "circle"];
        const decoration = decorationTypes[invertedDegree % 3];
        
        // Get the appropriate label group
        const labelGroups = this.labelsGroup();
        const labelText = labelGroups[groupIndex][pointIndex];
        
        return {
            group: groupIndex,
            bold: isBold,
            decoration: decoration,
            label: labelText
        };
    }

    /**
     * Get available degree values for selection
     * 
     * @returns {Array<Object>} Array of degree configurations with values and titles
     */
    availableDegreesValues() {
        return DEGREE_LABELS;
    }

    /**
     * Create default properties for Elliott Wave tools
     * 
     * @param {IChartTheme} theme - Chart theme for styling
     * @param {OwnershipToken} [ownershipToken] - Property ownership token
     * @returns {DefaultProperty} Configured property container
     */
    static createProperties(theme, ownershipToken) {
        const properties = new DefaultProperty({
            defaultName: "linetoolelliott",
            state: ownershipToken,
            theme: theme
        });
        
        this._configureProperties(properties);
        return properties;
    }

    /**
     * Migrate legacy state objects to current format
     * 
     * @param {Object} legacyState - The legacy state to migrate
     * 
     * @description
     * Handles migration of old Elliott Wave tool types:
     * - LineToolElliottSubminuette -> LineToolElliottImpulse
     * - LineToolElliottMinor -> LineToolElliottImpulse
     * - LineToolElliottCircle -> LineToolElliottImpulse
     * - LineToolElliottMinorRetr -> LineToolElliottCorrection
     * - LineToolElliottMajorRetr -> LineToolElliottCorrection
     */
    static migrateState(legacyState) {
        // Mapping tables for wave size to degree conversion
        const impulseWaveSizeToDegree = {
            0: 11, 1: 10, 2: 9, 3: 8, 4: 7, 5: 6, 6: 5, 7: 4, 8: 3
        };
        
        const correctionWaveSizeToDegree = {
            0: 11, 1: 8
        };

        // Migrate Subminuette type
        if (legacyState.type === "LineToolElliottSubminuette") {
            legacyState.type = "LineToolElliottImpulse";
            legacyState.state.degree = impulseWaveSizeToDegree[legacyState.state.wavesize];
        }
        
        // Migrate Minor type
        if (legacyState.type === "LineToolElliottMinor") {
            legacyState.type = "LineToolElliottImpulse";
            legacyState.state.degree = impulseWaveSizeToDegree[legacyState.state.wavesize];
        }
        
        // Migrate Circle type
        if (legacyState.type === "LineToolElliottCircle") {
            legacyState.type = "LineToolElliottImpulse";
            legacyState.state.degree = impulseWaveSizeToDegree[legacyState.state.wavesize];
        }
        
        // Migrate Minor Retracement type
        if (legacyState.type === "LineToolElliottMinorRetr") {
            legacyState.type = "LineToolElliottCorrection";
            legacyState.state.degree = correctionWaveSizeToDegree[legacyState.state.wavesize];
        }
        
        // Migrate Major Retracement type
        if (legacyState.type === "LineToolElliottMajorRetr") {
            legacyState.type = "LineToolElliottCorrection";
            legacyState.state.degree = correctionWaveSizeToDegree[legacyState.state.wavesize];
        }
    }

    /**
     * Get the property definitions view model class
     * 
     * @returns {Promise<Class>} Promise resolving to the view model class
     */
    async _getPropertyDefinitionsViewModelClass() {
        const module = await Promise.all([
            import(/* webpackChunkName: "3198" */ 'chunk-3198'),
            import(/* webpackChunkName: "5410" */ 'chunk-5410'),
            import(/* webpackChunkName: "2745" */ 'chunk-2745'),
            import(/* webpackChunkName: "8823" */ 'chunk-8823'),
            import(/* webpackChunkName: "8537" */ 'chunk-8537')
        ]).then(() => import('./6238-elliott-pattern-definitions-view-model'));
        
        return module.ElliottPatternDefinitionsViewModel;
    }

    /**
     * Configure properties with common settings
     * 
     * @param {DefaultProperty} properties - Properties to configure
     * @protected
     */
    static _configureProperties(properties) {
        super._configureProperties(properties);
        
        // Add line colors property
        properties.addChild(
            "linesColors",
            new LineToolColorsProperty([properties.childs().color])
        );
        
        // Exclude linesColors from certain operations
        properties.addExcludedKey("linesColors", 3);
    }
}

/**
 * Base class for Elliott Wave patterns requiring 6 points
 * 
 * @class
 * @extends LineToolElliott
 */
class ElliottWaveSixPoints extends LineToolElliott {
    /**
     * Get the required number of points for this tool
     * 
     * @returns {number} Number of points (6)
     */
    pointsCount() {
        return 6;
    }
}

/**
 * Elliott Wave Impulse Pattern Labels
 * Standard impulse wave labeling: 0, 1, 2, 3, 4, 5 with alternating styles
 */
const IMPULSE_LABELS = [
    ["0", "1", "2", "3", "4", "5"],      // Group 0
    ["0", "i", "ii", "iii", "iv", "v"],  // Group 1 (lowercase roman)
    ["0", "1", "2", "3", "4", "5"],      // Group 2
    ["0", "I", "II", "III", "IV", "V"],  // Group 3 (uppercase roman)
    ["0", "1", "2", "3", "4", "5"]       // Group 4
];

/**
 * Elliott Wave Impulse Tool
 * 
 * Draws the classic 5-wave impulse pattern (1-2-3-4-5)
 * representing the directional movement in the trend.
 * 
 * @class
 * @extends ElliottWaveSixPoints
 */
export class LineToolElliottImpulse extends ElliottWaveSixPoints {
    /**
     * Create a new Elliott Impulse Wave tool
     * 
     * @param {ChartModel} chartModel - The chart model instance
     * @param {DefaultProperty} [properties] - Tool properties
     * @param {Point[]} points - Anchor points
     * @param {Object} [options] - Additional options
     */
    constructor(chartModel, properties, points, options) {
        const defaultProperties = properties ?? LineToolElliottImpulse.createProperties(
            chartModel.backgroundTheme().spawnOwnership()
        );
        super(chartModel, defaultProperties, points, options);
    }

    /**
     * Get the display name
     * 
     * @returns {string} Tool name
     */
    name() {
        return "Elliott Impulse Wave (12345)";
    }

    /**
     * Get the label groups for impulse waves
     * 
     * @returns {string[][]} Multi-dimensional array of labels
     */
    labelsGroup() {
        return IMPULSE_LABELS;
    }

    /**
     * Create default properties for Impulse tool
     * 
     * @param {IChartTheme} theme - Chart theme
     * @param {OwnershipToken} [ownershipToken] - Ownership token
     * @returns {DefaultProperty} Configured properties
     */
    static createProperties(theme, ownershipToken) {
        const properties = new DefaultProperty({
            defaultName: "linetoolelliottimpulse",
            state: ownershipToken,
            theme: theme
        });
        
        this._configureProperties(properties);
        return properties;
    }
}

/**
 * Elliott Wave Triangle Pattern Labels
 * Triangle wave labeling: 0, A, B, C, D, E with alternating styles
 */
const TRIANGLE_LABELS = [
    ["0", "A", "B", "C", "D", "E"],      // Group 0
    ["0", "a", "b", "c", "d", "e"],      // Group 1 (lowercase)
    ["0", "A", "B", "C", "D", "E"],      // Group 2
    ["0", "a", "b", "c", "d", "e"],      // Group 3
    ["0", "A", "B", "C", "D", "E"]       // Group 4
];

/**
 * Elliott Wave Triangle Tool
 * 
 * Draws triangle correction patterns (A-B-C-D-E)
 * typically seen in sideways or consolidating markets.
 * 
 * @class
 * @extends ElliottWaveSixPoints
 */
export class LineToolElliottTriangle extends ElliottWaveSixPoints {
    /**
     * Create a new Elliott Triangle Wave tool
     * 
     * @param {ChartModel} chartModel - The chart model instance
     * @param {DefaultProperty} [properties] - Tool properties
     * @param {Point[]} points - Anchor points
     * @param {Object} [options] - Additional options
     */
    constructor(chartModel, properties, points, options) {
        const defaultProperties = properties ?? LineToolElliottTriangle.createProperties(
            chartModel.backgroundTheme().spawnOwnership()
        );
        super(chartModel, defaultProperties, points, options);
    }

    /**
     * Get the display name
     * 
     * @returns {string} Tool name
     */
    name() {
        return "Elliott Triangle Wave (ABCDE)";
    }

    /**
     * Get the label groups for triangle waves
     * 
     * @returns {string[][]} Multi-dimensional array of labels
     */
    labelsGroup() {
        return TRIANGLE_LABELS;
    }

    /**
     * Create default properties for Triangle tool
     * 
     * @param {IChartTheme} theme - Chart theme
     * @param {OwnershipToken} [ownershipToken] - Ownership token
     * @returns {DefaultProperty} Configured properties
     */
    static createProperties(theme, ownershipToken) {
        const properties = new DefaultProperty({
            defaultName: "linetoolelliotttriangle",
            state: ownershipToken,
            theme: theme
        });
        
        this._configureProperties(properties);
        return properties;
    }
}

/**
 * Elliott Wave Triple Combo Pattern Labels
 * Triple combo labeling: 0, W, X, Y, X, Z
 */
const TRIPLE_COMBO_LABELS = [
    ["0", "W", "X", "Y", "X", "Z"],      // Group 0
    ["0", "w", "x", "y", "x", "z"],      // Group 1 (lowercase)
    ["0", "W", "X", "Y", "X", "Z"],      // Group 2
    ["0", "w", "x", "y", "x", "z"],      // Group 3
    ["0", "W", "X", "Y", "X", "Z"]       // Group 4
];

/**
 * Elliott Wave Triple Combo Tool
 * 
 * Draws triple combination patterns (W-X-Y-X-Z)
 * representing complex corrective structures.
 * 
 * @class
 * @extends ElliottWaveSixPoints
 */
export class LineToolElliottTripleCombo extends ElliottWaveSixPoints {
    /**
     * Create a new Elliott Triple Combo Wave tool
     * 
     * @param {ChartModel} chartModel - The chart model instance
     * @param {DefaultProperty} [properties] - Tool properties
     * @param {Point[]} points - Anchor points
     * @param {Object} [options] - Additional options
     */
    constructor(chartModel, properties, points, options) {
        const defaultProperties = properties ?? LineToolElliottTripleCombo.createProperties(
            chartModel.backgroundTheme().spawnOwnership()
        );
        super(chartModel, defaultProperties, points, options);
    }

    /**
     * Get the display name
     * 
     * @returns {string} Tool name
     */
    name() {
        return "Elliott Triple Combo Wave (WXYXZ)";
    }

    /**
     * Get the label groups for triple combo waves
     * 
     * @returns {string[][]} Multi-dimensional array of labels
     */
    labelsGroup() {
        return TRIPLE_COMBO_LABELS;
    }

    /**
     * Create default properties for Triple Combo tool
     * 
     * @param {IChartTheme} theme - Chart theme
     * @param {OwnershipToken} [ownershipToken] - Ownership token
     * @returns {DefaultProperty} Configured properties
     */
    static createProperties(theme, ownershipToken) {
        const properties = new DefaultProperty({
            defaultName: "linetoolelliotttriplecombo",
            state: ownershipToken,
            theme: theme
        });
        
        this._configureProperties(properties);
        return properties;
    }
}

/**
 * Base class for Elliott Wave patterns requiring 4 points
 * 
 * @class
 * @extends LineToolElliott
 */
class ElliottWaveFourPoints extends LineToolElliott {
    /**
     * Get the required number of points for this tool
     * 
     * @returns {number} Number of points (4)
     */
    pointsCount() {
        return 4;
    }
}

/**
 * Elliott Wave Correction Pattern Labels
 * Standard correction wave labeling: 0, A, B, C
 */
const CORRECTION_LABELS = [
    ["0", "A", "B", "C"],      // Group 0
    ["0", "a", "b", "c"],      // Group 1 (lowercase)
    ["0", "A", "B", "C"],      // Group 2
    ["0", "a", "b", "c"],      // Group 3
    ["0", "A", "B", "C"]       // Group 4
];

/**
 * Elliott Wave Correction Tool
 * 
 * Draws ABC correction patterns representing counter-trend movements.
 * 
 * @class
 * @extends ElliottWaveFourPoints
 */
export class LineToolElliottCorrection extends ElliottWaveFourPoints {
    /**
     * Create a new Elliott Correction Wave tool
     * 
     * @param {ChartModel} chartModel - The chart model instance
     * @param {DefaultProperty} [properties] - Tool properties
     * @param {Point[]} points - Anchor points
     * @param {Object} [options] - Additional options
     */
    constructor(chartModel, properties, points, options) {
        const defaultProperties = properties ?? LineToolElliottCorrection.createProperties(
            chartModel.backgroundTheme().spawnOwnership()
        );
        super(chartModel, defaultProperties, points, options);
    }

    /**
     * Get the display name
     * 
     * @returns {string} Tool name
     */
    name() {
        return "Elliott Correction Wave (ABC)";
    }

    /**
     * Get the label groups for correction waves
     * 
     * @returns {string[][]} Multi-dimensional array of labels
     */
    labelsGroup() {
        return CORRECTION_LABELS;
    }

    /**
     * Create default properties for Correction tool
     * 
     * @param {IChartTheme} theme - Chart theme
     * @param {OwnershipToken} [ownershipToken] - Ownership token
     * @returns {DefaultProperty} Configured properties
     */
    static createProperties(theme, ownershipToken) {
        const properties = new DefaultProperty({
            defaultName: "linetoolelliottcorrection",
            state: ownershipToken,
            theme: theme
        });
        
        this._configureProperties(properties);
        return properties;
    }
}

/**
 * Elliott Wave Double Combo Pattern Labels
 * Double combo labeling: 0, W, X, Y
 */
const DOUBLE_COMBO_LABELS = [
    ["0", "W", "X", "Y"],      // Group 0
    ["0", "w", "x", "y"],      // Group 1 (lowercase)
    ["0", "W", "X", "Y"],      // Group 2
    ["0", "w", "x", "y"],      // Group 3
    ["0", "W", "X", "Y"]       // Group 4
];

/**
 * Elliott Wave Double Combo Tool
 * 
 * Draws double combination patterns (W-X-Y)
 * representing intermediate corrective structures.
 * 
 * @class
 * @extends ElliottWaveFourPoints
 */
export class LineToolElliottDoubleCombo extends ElliottWaveFourPoints {
    /**
     * Create a new Elliott Double Combo Wave tool
     * 
     * @param {ChartModel} chartModel - The chart model instance
     * @param {DefaultProperty} [properties] - Tool properties
     * @param {Point[]} points - Anchor points
     * @param {Object} [options] - Additional options
     */
    constructor(chartModel, properties, points, options) {
        const defaultProperties = properties ?? LineToolElliottDoubleCombo.createProperties(
            chartModel.backgroundTheme().spawnOwnership()
        );
        super(chartModel, defaultProperties, points, options);
    }

    /**
     * Get the display name
     * 
     * @returns {string} Tool name
     */
    name() {
        return "Elliott Double Combo Wave (WXY)";
    }

    /**
     * Get the label groups for double combo waves
     * 
     * @returns {string[][]} Multi-dimensional array of labels
     */
    labelsGroup() {
        return DOUBLE_COMBO_LABELS;
    }

    /**
     * Create default properties for Double Combo tool
     * 
     * @param {IChartTheme} theme - Chart theme
     * @param {OwnershipToken} [ownershipToken] - Ownership token
     * @returns {DefaultProperty} Configured properties
     */
    static createProperties(theme, ownershipToken) {
        const properties = new DefaultProperty({
            defaultName: "linetoolelliottdoublecombo",
            state: ownershipToken,
            theme: theme
        });
        
        this._configureProperties(properties);
        return properties;
    }
}
