/**
 * ============================================================================
 * TRADINGVIEW MODULE 37150 - MAIN INITIALIZATION & CHUNK LOADING
 * ============================================================================
 *
 * Purpose: Core library initialization and chunk loading management
 *
 * Size: ~1.5 MB (beautified)
 *
 * Key Responsibilities:
 *   1. Library Initialization
 *      - Feature flag configuration via URL parameters
 *      - Settings management and local storage setup
 *      - Custom font family support
 *      - Chart configuration defaults
 *
 *   2. Chunk Loading System
 *      - Lazy loading for tools and UI components
 *      - Async module loading with Promise management
 *      - Dynamic import handling
 *      - Loading state management
 *
 *   3. UI Component Management
 *      - Header toolbar rendering
 *      - Container management with CSS classes
 *      - Resizable bridge integration
 *      - Fullscreen handling
 *
 *   4. Settings Management
 *      - Local storage integration
 *      - Settings adapter configuration
 *      - Synchronization with backend
 *      - Override handling
 *
 * Class Hierarchy:
 *   ChunkLoader (base)
 *     ↳ DrawingToolbarChunkLoader
 *     ↳ IndicatorsLibraryChunkLoader
 *     ↳ CompareDialogChunkLoader
 *
 * Features:
 *   - Feature flag management
 *   - Settings persistence
 *   - Dynamic font loading
 *   - Async chunk loading
 *   - UI component rendering
 *   - Container lifecycle management
 *
 * Dependencies:
 *   - 81251: Settings management
 *   - 20057: Features configuration
 *   - 50151: Assertion utilities
 *   - 52959: Feature flags
 *   - 11542: Global context
 *   - 60973: Chart configuration defaults
 *   - 1765: Settings adapter
 *   - 38881: Chunk loader module
 *   - 9753: UI constants
 *   - 72877: CSS class mappings
 *
 * Exports:
 *   - Main initialization functions
 *   - Chunk loading classes
 *   - UI component managers
 *
 * @module 37150
 * @category Core System
 * @subpackage Initialization
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  // Import core dependencies
  const SettingsManager = moduleRequire(81251),
    FeatureConfig = moduleRequire(20057),
    AssertionUtils = moduleRequire(50151),
    FeatureFlags = moduleRequire(52959),
    GlobalContext = moduleRequire(11542),
    Logger = moduleRequire(18092),
    FeatureLogger = moduleRequire(32517),
    FeatureFlags2 = moduleRequire(5992),
    FeatureFlags3 = moduleRequire(87457),
    FeatureFlags4 = moduleRequire(34907),
    ChartConfigDefaults = moduleRequire(60973),
    SettingsAdapter = moduleRequire(1765),
    FontManager = moduleRequire(84617),
    ChartContext = moduleRequire(38881),
    UIConstants = moduleRequire(9753),
    CSSMappings = moduleRequire(72877),
    KeyMappings = moduleRequire(34840),
    DialogUtils = moduleRequire(26709),
    Modifiers = moduleRequire(3343),
    CustomTimezones = moduleRequire(71846),
    WatchedValue = moduleRequire(22613),
    FeatureFlags5 = moduleRequire(70347),
    UndoCommand = moduleRequire(72270),
    Delegate = moduleRequire(48096),
    TranslatedString = moduleRequire(95804),
    Logger2 = moduleRequire(9343),
    IntervalUtils = moduleRequire(10892),
    ActionMenus = moduleRequire(41706),
    StudyTemplates = moduleRequire(15096),
    SaveLoadUtils = moduleRequire(46082),
    ContextMenuUtils = moduleRequire(66593),
    DialogRenderer = moduleRequire(14411),
    StudyTemplates2 = moduleRequire(35727),
    IndicatorsLibrary = moduleRequire(86682),
    CompareDialog = moduleRequire(14283),
    DrawingToolbar = moduleRequire(7314),
    ChartUtils = moduleRequire(32563),
    LineDataSource = moduleRequire(22489),
    StudyUtils = moduleRequire(45345),
    StudyUtils2 = moduleRequire(71846),
    SaveLoadUtils2 = moduleRequire(26709),
    StudyUtils3 = moduleRequire(70347),
    StudyUtils4 = moduleRequire(72270),
    StudyUtils5 = moduleRequire(72877),
    StudyUtils6 = moduleRequire(71846),
    StudyUtils7 = moduleRequire(70347),
    StudyUtils8 = moduleRequire(72270),
    StudyUtils9 = moduleRequire(72877);

  /**
   * Get global charting context
   */
  const globalContext = FeatureFlags.getChartingLibraryGlobalContext();
  
  /**
   * Initialize feature flags from URL parameters
   */
  const urlParams = globalContext.urlParams;
  
  // Process disabled features
  const disabledFeatures = JSON.parse(urlParams.disabledFeatures || '[]');
  disabledFeatures.forEach(feature => {
    FeatureLogger.setEnabled(feature, false);
  });
  
  // Process enabled features
  const enabledFeatures = JSON.parse(urlParams.enabledFeatures || '[]');
  enabledFeatures.forEach(feature => {
    FeatureLogger.setEnabled(feature, true);
  });

  // Load core modules
  moduleRequire(94078);
  
  /**
   * Chart configuration handler
   */
  const ChartConfigHandler = moduleRequire(60973),
    SettingsUtils = moduleRequire(48480),
    ChartUtils2 = moduleRequire(1765),
    ChartOwner = FeatureFlags.getChartingLibraryOwner();
  
  // Initialize settings overrides
  ChartOwner.__settingsOverrides = ChartOwner.settingsOverrides || {};
  
  /**
   * Settings adapter initialization
   */
  const settingsAdapter = ChartOwner.settingsAdapter;
  if (settingsAdapter) {
    SettingsUtils.setSettingsAdapter(settingsAdapter);
    SettingsUtils.sync();
  } else if (FeatureLogger.enabled("use_localstorage_for_settings")) {
    SettingsUtils.sync();
  }

  /**
   * Font configuration
   */
  const fontManager = moduleRequire(84617),
    chartContext = FeatureFlags.getChartingLibraryGlobalContext();
  
  if (chartContext.urlParams.customFontFamily) {
    FontManager.setChartFontFamily(chartContext.urlParams.customFontFamily);
  }

  /**
   * Base chunk loader class
   */
  class ChunkLoader {
    constructor() {
      this._loadingPromise = null;
      this._loadedChunks = new Map();
    }

    /**
     * Start loading chunks
     * @returns {Promise} Loading promise
     */
    _startLoading() {
      if (this._loadingPromise) {
        return this._loadingPromise;
      }

      this._loadingPromise = this._loadChunks();
      return this._loadingPromise;
    }

    /**
     * Load required chunks
     * @returns {Promise} Chunk loading promise
     */
    _loadChunks() {
      return Promise.all([
        moduleRequire(5700),
        moduleRequire(8185),
        moduleRequire(1681),
        moduleRequire(3439),
        moduleRequire(8933),
        moduleRequire(6032),
        moduleRequire(3672),
        moduleRequire(3359),
        moduleRequire(4587),
        moduleRequire(8260),
        moduleRequire(1979),
        moduleRequire(7780),
        moduleRequire(4495),
        moduleRequire(7827),
        moduleRequire(844),
        moduleRequire(9836),
        moduleRequire(683),
        moduleRequire(6697),
        moduleRequire(1166),
        moduleRequire(3946),
        moduleRequire(6956),
        moduleRequire(3014),
        moduleRequire(4240),
        moduleRequire(2227),
        moduleRequire(8402),
        moduleRequire(3179),
        moduleRequire(6193),
        moduleRequire(917),
        moduleRequire(5516)
      ]).then(moduleRequire.bind(moduleRequire, 92024))
        .then(modules => modules.getRestrictedToolSet());
    }
  }

  /**
   * Drawing toolbar chunk loader
   */
  class DrawingToolbarChunkLoader extends ChunkLoader {
    constructor(options) {
      super();
      this._options = options;
      this._resizerBridge = options.resizerBridge;
      this._containerBridge = options.containerBridge;
      
      if (this._options.resizerBridge && this._options.resizerBridge.container.value()) {
        this._options.resizerBridge.negotiateWidth(ContextMenuUtils.TOOLBAR_WIDTH_EXPANDED);
        this._options.resizerBridge.container.value().appendChild(this._createContainer());
      }
    }

    /**
     * Start loading drawing toolbar
     * @returns {Promise} Loading promise
     */
    _startLoading() {
      return Promise.all([
        moduleRequire(3721),
        moduleRequire(8185),
        moduleRequire(1681),
        moduleRequire(3439),
        moduleRequire(8933),
        moduleRequire(6032),
        moduleRequire(3359),
        moduleRequire(4587),
        moduleRequire(8260),
        moduleRequire(4495),
        moduleRequire(7827),
        moduleRequire(9323),
        moduleRequire(844),
        moduleRequire(6697),
        moduleRequire(1166),
        moduleRequire(6178),
        moduleRequire(9468),
        moduleRequire(2227),
        moduleRequire(4931),
        moduleRequire(3179),
        moduleRequire(769),
        moduleRequire(1890),
        moduleRequire(1727),
        moduleRequire(2878)
      ]).then(moduleRequire.bind(moduleRequire, 7314))
        .then(DrawingToolbarRenderer => {
          return new DrawingToolbarRenderer(
            this._options.resizerBridge.container.value(),
            { ...this._options }
          );
        });
    }

    /**
     * Create container element
     * @returns {HTMLElement} Container element
     */
    _createContainer() {
      const container = document.createElement('div');
      container.className = 'drawing-toolbar-container';
      return container;
    }
  }

  /**
   * Indicators library chunk loader
   */
  class IndicatorsLibraryChunkLoader extends ChunkLoader {
    constructor(options) {
      super();
      this._options = options;
    }

    /**
     * Start loading indicators library
     * @returns {Promise} Loading promise
     */
    _startLoading() {
      return Promise.all([
        moduleRequire(2346),
        moduleRequire(8185),
        moduleRequire(5371),
        moduleRequire(2202),
        moduleRequire(5563),
        moduleRequire(2647),
        moduleRequire(2537),
        moduleRequire(1697),
        moduleRequire(7833),
        moduleRequire(8260),
        moduleRequire(509),
        moduleRequire(7463),
        moduleRequire(3853),
        moduleRequire(2227),
        moduleRequire(9418),
        moduleRequire(6864),
        moduleRequire(6456)
      ]).then(moduleRequire.bind(moduleRequire, 86682))
        .then(IndicatorsLibraryContainer => {
          return new IndicatorsLibraryContainer(
            this._options.chartWidgetCollection,
            this._options
          );
        });
    }
  }

  /**
   * Compare dialog chunk loader
   */
  class CompareDialogChunkLoader extends ChunkLoader {
    constructor(options) {
      super();
      this._options = options;
    }

    /**
     * Start loading compare dialog
     * @returns {Promise} Loading promise
     */
    _startLoading() {
      return Promise.all([
        moduleRequire(4040),
        moduleRequire(7271)
      ]).then(moduleRequire.bind(moduleRequire, 43900))
        .then(() => Promise.all([
          moduleRequire(8955),
          moduleRequire(8185),
          moduleRequire(1681),
          moduleRequire(5371),
          moduleRequire(2202),
          moduleRequire(5563),
          moduleRequire(2647),
          moduleRequire(3439),
          moduleRequire(1171),
          moduleRequire(8933),
          moduleRequire(6032),
          moduleRequire(3672),
          moduleRequire(3359),
          moduleRequire(3425),
          moduleRequire(1697),
          moduleRequire(4587),
          moduleRequire(7833),
          moduleRequire(8752),
          moduleRequire(445),
          moduleRequire(846),
          moduleRequire(6956),
          moduleRequire(9002),
          moduleRequire(2227),
          moduleRequire(4931),
          moduleRequire(9418),
          moduleRequire(3179),
          moduleRequire(4426),
          moduleRequire(2475),
          moduleRequire(731)
        ]).then(moduleRequire.bind(moduleRequire, 14283)))
        .then(modules => {
          const compareModel = new modules.CompareModel(this._options.chartWidgetCollection);
          return modules.getCompareDialogRenderer(compareModel);
        });
    }
  }

  /**
   * Container management class
   */
  class ContainerManager {
    constructor() {
      this._alive = new WatchedValue(false);
      this._container = new WatchedValue(null);
      this._width = new WatchedValue(0);
      this._height = new WatchedValue(0);
      this._fullscreen = new WatchedValue(false);
      this._detachable = new WatchedValue(false);
      this._fullscreenable = new WatchedValue(false);
      this._visible = new WatchedValue(false);
      this._availWidth = new WatchedValue(0);
      this._availHeight = new WatchedValue(0);
      this._owner = new WatchedValue(null);
      this._ownersStack = [];
      
      // Create bridge object
      this._bridge = {
        alive: this._alive.readonly(),
        container: this._container.readonly(),
        width: this._width.readonly(),
        height: this._height.readonly(),
        fullscreen: this._fullscreen.readonly(),
        detachable: this._detachable.readonly(),
        fullscreenable: this._fullscreenable.readonly(),
        visible: this._visible.readonly(),
        availWidth: this._availWidth.readonly(),
        availHeight: this._availHeight.readonly(),
        remove: () => {
          const owner = this._owner.value();
          if (owner && owner.remove) {
            owner.remove();
          }
        },
        negotiateWidth: width => {
          const owner = this._owner.value();
          if (owner && owner.negotiateWidth) {
            owner.negotiateWidth(width);
          }
        }
      };
    }

    /**
     * Get bridge object
     * @returns {Object} Bridge object
     */
    getBridge() {
      return this._bridge;
    }

    /**
     * Set container dimensions
     * @param {number} width - Container width
     * @param {number} height - Container height
     */
    setDimensions(width, height) {
      this._width.setValue(width);
      this._height.setValue(height);
    }

    /**
     * Set fullscreen state
     * @param {boolean} fullscreen - Fullscreen state
     */
    setFullscreen(fullscreen) {
      this._fullscreen.setValue(fullscreen);
    }

    /**
     * Set visibility
     * @param {boolean} visible - Visibility state
     */
    setVisible(visible) {
      this._visible.setValue(visible);
    }
  }

  /**
   * Fullscreen manager class
   */
  class FullscreenManager {
    constructor(document) {
      this._document = document;
      this.isFullscreen = new WatchedValue(false);
      
      // Initialize fullscreen detection
      this._setupFullscreenDetection();
    }

    /**
     * Setup fullscreen event listeners
     */
    _setupFullscreenDetection() {
      const checkFullscreen = () => {
        const fullscreenElements = [
          "fullscreenElement",
          "webkitFullscreenElement", 
          "mozFullscreenElement",
          "mozFullScreenElement",
          "msFullscreenElement"
        ];
        
        for (const element of fullscreenElements) {
          if (element in this._document) {
            this.isFullscreen.setValue(!!this._document[element]);
            break;
          }
        }
      };

      // Add event listeners
      for (const event of [
        "fullscreenchange",
        "webkitfullscreenchange", 
        "mozfullscreenchange",
        "MSFullscreenChange"
      ]) {
        this._document.addEventListener(event, checkFullscreen, false);
      }
      
      // Initial check
      checkFullscreen();
    }

    /**
     * Enter fullscreen
     */
    enter() {
      const element = this._document.documentElement;
      const requestMethods = [
        "requestFullscreen",
        "mozRequestFullScreen",
        "webkitRequestFullscreen",
        "msRequestFullscreen"
      ];
      
      for (const method of requestMethods) {
        if (typeof element[method] === "function") {
          element[method]();
          break;
        }
      }
      
      this.isFullscreen.setValue(true);
    }

    /**
     * Exit fullscreen
     */
    exit() {
      const document = this._document;
      const exitMethods = [
        "exitFullscreen",
        "mozCancelFullScreen",
        "mozExitFullscreen",
        "webkitExitFullscreen",
        "msExitFullscreen"
      ];
      
      for (const method of exitMethods) {
        if (typeof document[method] === "function") {
          document[method]();
          break;
        }
      }
      
      this.isFullscreen.setValue(false);
    }
  }

  /**
   * Undo stack management
   */
  class UndoStack {
    constructor() {
      this._commands = [];
      this._onChange = new Delegate();
    }

    /**
     * Get change delegate
     * @returns {Delegate} Change delegate
     */
    onChange() {
      return this._onChange;
    }

    /**
     * Check if stack is empty
     * @returns {boolean} True if empty
     */
    isEmpty() {
      return this._commands.length === 0;
    }

    /**
     * Get stack size
     * @returns {number} Stack size
     */
    size() {
      return this._commands.length;
    }

    /**
     * Clear stack
     */
    clear() {
      if (!this.isEmpty()) {
        this._commands.length = 0;
        this._onChange.fire();
      }
    }

    /**
     * Push command to stack
     * @param {UndoCommand} command - Command to push
     */
    push(command) {
      if (!(command instanceof UndoCommand)) {
        throw new TypeError("argument must be an instance of UndoCommand");
      }
      
      this._commands.push(command);
      this._onChange.fire(command);
    }

    /**
     * Pop command from stack
     * @returns {UndoCommand|null} Popped command or null
     */
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      
      const command = this._commands.pop();
      this._onChange.fire(command);
      return command;
    }

    /**
     * Get head command
     * @returns {UndoCommand|null} Head command or null
     */
    head() {
      if (!this.isEmpty()) {
        return this._commands[this._commands.length - 1];
      }
      return null;
    }
  }

  /**
   * Composite undo command
   */
  class CompositeUndoCommand extends UndoCommand {
    constructor(title, affectsState = true) {
      super(title, false, affectsState);
      this._subcommands = [];
    }

    /**
     * Add subcommand
     * @param {UndoCommand} command - Subcommand to add
     */
    addCommand(command) {
      this._subcommands.push(command);
    }

    /**
     * Check if empty
     * @returns {boolean} True if empty
     */
    isEmpty() {
      return this._subcommands.length === 0;
    }

    /**
     * Execute redo
     * @param {Object} context - Execution context
     */
    redo(context) {
      for (let i = 0; i < this._subcommands.length; i++) {
        this._subcommands[i].redo(context);
      }
    }

    /**
     * Execute undo
     * @param {Object} context - Execution context
     */
    undo(context) {
      for (let i = this._subcommands.length - 1; i >= 0; i--) {
        this._subcommands[i].undo(context);
      }
    }

    /**
     * Get subcommands
     * @returns {Array} Array of subcommands
     */
    commands() {
      return this._subcommands;
    }

    /**
     * Check if affects state
     * @returns {boolean} True if affects state
     */
    affectsState() {
      return this._subcommands.some(command => command.affectsState());
    }
  }

  /**
   * Property setter undo command
   */
  class PropertySetterUndoCommand extends UndoCommand {
    constructor(setter, oldValue, newValue, title, affectsState = true) {
      super(title, undefined, affectsState);
      this._setter = setter;
      this._oldValue = oldValue;
      this._newValue = newValue;
    }

    /**
     * Execute redo
     */
    redo() {
      this._setter(this._newValue);
    }

    /**
     * Execute undo
     */
    undo() {
      this._setter(this._oldValue);
    }
  }

  /**
   * Watched value undo command
   */
  class WatchedValueUndoCommand extends PropertySetterUndoCommand {
    constructor(watchedValue, newValue, title, affectsState = true) {
      super(
        value => watchedValue.setValue(value),
        watchedValue.value(),
        newValue,
        title,
        affectsState
      );
      this._watchedValue = watchedValue;
    }
  }

  // Export all classes and utilities
  moduleExports.ChunkLoader = ChunkLoader;
  moduleExports.DrawingToolbarChunkLoader = DrawingToolbarChunkLoader;
  moduleExports.IndicatorsLibraryChunkLoader = IndicatorsLibraryChunkLoader;
  moduleExports.CompareDialogChunkLoader = CompareDialogChunkLoader;
  moduleExports.ContainerManager = ContainerManager;
  moduleExports.FullscreenManager = FullscreenManager;
  moduleExports.UndoStack = UndoStack;
  moduleExports.CompositeUndoCommand = CompositeUndoCommand;
  moduleExports.PropertySetterUndoCommand = PropertySetterUndoCommand;
  moduleExports.WatchedValueUndoCommand = WatchedValueUndoCommand;
}
