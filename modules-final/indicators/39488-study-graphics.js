/**
 * ============================================================================
 * TRADINGVIEW MODULE 39488 - STUDY GRAPHICS
 * ============================================================================
 *
 * Purpose: Study graphics management and rendering
 *
 * Size: 10.3 KB
 *
 * Class: StaticStudyGraphics
 *   - Manages study graphics data
 *   - Handles graphics loading/saving
 *   - Provides graphics validation
 *   - Supports multiple graphics types
 *
 * Features:
 *   - Graphics data management
 *   - Index and line management
 *   - Shape and polygon handling
 *   - Background and trend support
 *   - Performance tracking
 *
 * Dependencies:
 *   - 82284: Study graphics utilities
 *   - 60661: Study graphics utilities
 *   - 58554: Study graphics utilities
 *   - 99481: Study graphics utilities
 *   - 30798: Study graphics utilities
 *   - 69866: Study graphics utilities
 *   - 82130: Study graphics utilities
 *   - 87465: Study graphics utilities
 *
 * Exports:
 *   - StaticStudyGraphics: Study graphics class
 *   - emptyStudyGraphics: Empty graphics function
 *   - loadStudyGraphics: Load graphics function
 *   - saveStudyGraphics: Save graphics function
 *
 * @module 39488
 * @category Study System
 * @subpackage Graphics Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    StaticStudyGraphics: () => StaticStudyGraphics,
    emptyStudyGraphics: () => emptyStudyGraphics,
    loadStudyGraphics: () => loadStudyGraphics,
    saveStudyGraphics: () => saveStudyGraphics
  });

  const StudyGraphicsUtils = moduleRequire(82284),
    GraphicsUtils = moduleRequire(60661),
    GraphicsUtils2 = moduleRequire(58554),
    GraphicsUtils3 = moduleRequire(99481),
    GraphicsUtils4 = moduleRequire(30798),
    GraphicsUtils5 = moduleRequire(69866),
    GraphicsUtils6 = moduleRequire(82130),
    GraphicsUtils7 = moduleRequire(87465);

  /**
   * Study graphics implementation
   */
  class StaticStudyGraphics {
    constructor(data, type) {
      this._indexes = [];
      this._horizlines = new Map();
      this._vertlines = new Map();
      this._lines = new Map();
      this._textmarks = new Map();
      this._shapemarks = new Map();
      this._backgrounds = new Map();
      this._polygons = new Map();
      this._trendchannels = new Map();
      this._hhists = new Map();
      this._dwglabels = new Map();
      this._dwglines = new Map();
      this._dwgpolylines = new Map();
      this._dwgboxes = new Map();
      this._dwgtables = new Map();
      this._dwgtablecells = new Map();
      this._dwglinefills = new Map();
      this._tpos = new Map();
      this._tpoBlockSets = new Map();
      this._tpoLevelGroups = new Map();
      this._tpoVolumeRows = new Map();
      this._tpoSummaryInfo = new Map();
      this._logs = new Map();
      this._performance = new Map();
      this._footprints = new Map();
      this._footprintLevels = new Map();
      
      if (type === "data") {
        this._initializeGraphicsData(data);
      } else if (type === "state") {
        this._initializeGraphicsState(data);
      }
    }

    /**
     * Initialize graphics data
     * @param {Object} data - Graphics data object
     */
    _initializeGraphicsData(data) {
      this._indexes = data.indexes || [];
      this._vertlines = GraphicsUtils2.materializeVertLines(data.vertlines, this._indexes, GraphicsUtils7.materializeVertLine);
      this._horizlines = GraphicsUtils2.materializeHorizLines(data.horizlines, this._indexes, GraphicsUtils6.materializeHorizLine);
      this._polygons = GraphicsUtils2.materializePolygons(data.polygons, this._indexes, GraphicsUtils4.materializePolygon);
      this._hhists = GraphicsUtils2.materializeHHists(data.hhists, this._indexes, GraphicsUtils3.materializeHHist);
      this._backgrounds = GraphicsUtils2.materializeBackgrounds(data.backgrounds, this._indexes, GraphicsUtils5.materializeBackground);
    }

    /**
     * Initialize graphics state
     * @param {Object} data - Graphics state object
     */
    _initializeGraphicsState(data) {
      this._indexes = data.indexes || [];
      this._vertlines = GraphicsUtils2.materializeVertLines(data.vertlines, this._indexes, GraphicsUtils7.materializeVertLine);
      this._horizlines = GraphicsUtils2.materializeHorizLines(data.horizlines, this._indexes, GraphicsUtils6.materializeHorizLine);
      this._polygons = GraphicsUtils2.materializePolygons(data.polygons, this._indexes, GraphicsUtils4.materializePolygon);
      this._hhists = GraphicsUtils2.materializeHHists(data.hhists, this._indexes, GraphicsUtils3.materializeHHist);
      this._backgrounds = GraphicsUtils2.materializeBackgrounds(data.backgrounds, this._indexes, GraphicsUtils5.materializeBackground);
    }

    /**
     * Get horizontal lines
     * @returns {Map} Horizontal lines map
     */
    horizlines() {
      return this._horizlines;
    }

    /**
     * Get vertical lines
     * @returns {Map} Vertical lines map
     */
    vertlines() {
      return this._vertlines;
    }

    /**
     * Get polygons
     * @returns {Map} Polygons map
     */
    polygons() {
      return this._polygons;
    }

    /**
     * Get HHists by time point index
     * @returns {Map} HHists map
     */
    hhistsByTimePointIndex() {
      return GraphicsUtils6.splitHHistsByTimePointIndex(this._hhists);
    }
  }

  /**
   * Create empty study graphics
   * @returns {StaticStudyGraphics} Empty graphics object
   */
  function emptyStudyGraphics() {
    return new StaticStudyGraphics({}, "state");
  }

  /**
   * Load study graphics
   * @param {Object} data - Graphics data
   * @returns {StaticStudyGraphics} Loaded graphics object
   */
  function loadStudyGraphics(data) {
    return new StaticStudyGraphics(data, "data");
  }

  /**
   * Save study graphics
   * @param {StaticStudyGraphics} graphics - Graphics object to save
   * @returns {Object} Saved graphics data
   */
  function saveStudyGraphics(graphics) {
    return {
      indexes: graphics._indexes,
      vertlines: GraphicsUtils2.dematerializeVertLines(graphics._vertlines),
      horizlines: GraphicsUtils2.dematerializeHorizLines(graphics._horizlines),
      polygons: GraphicsUtils2.dematerializePolygons(graphics._polygons),
      hhists: GraphicsUtils2.dematerializeHHists(graphics._hhists),
      backgrounds: GraphicsUtils2.dematerializeBackgrounds(graphics._backgrounds)
    };
  }

  // Export classes and functions
  moduleExports.StaticStudyGraphics = StaticStudyGraphics;
  moduleExports.emptyStudyGraphics = emptyStudyGraphics;
  moduleExports.loadStudyGraphics = loadStudyGraphics;
  moduleExports.saveStudyGraphics = saveStudyGraphics;
}
