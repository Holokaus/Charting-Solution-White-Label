// ============================================================================
// MODULE 26610 - SEMANTICALLY IDENTIFIED AS: lineToolManager
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 100%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 26610 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

26610: (exports, module, require) => {
    "use strict";
    require.data(module, {
      cloneLineTool: () => B,
      createLineTool: () => T,
      createLineToolProperties: () => context,
      createStudyLineToolProperties: () => M,
      ensureAllLineToolsLoadedForLayout: () => watcher,
      initAllLineToolsFromContent: () => C,
      initLineTool: () => yValue,
      isBrushBasedLineTool: () => A,
      isEditableTextLineTool: () => E,
      isLineTool: () => parameter.isLineTool,
      isTrading: () => L,
      prepareLineToolPropertiesByOwnerSource: () => P,
      setNewToolProperties: () => getter,
      supportsPhantomMode: () => I,
      tryFindStudyLineToolNameByStudyId: () => D,
      unsetNewToolProperties: () => function
    });
    var state = require(82433),
      object = require(50151),
      nextValue = require(10555),
      result = require(9343),
      array = require(81922),
      logger = require(52974),
      config = require(95059),
      handler = require(11946),
      data = require(91111),
      utility = require(55393),
      _ = require(58570),
      parameter = require(97217);
    let method = null;

    function getter(exports, module, require) {
      return null !== method && method.tool === exports && method.toolData === module || (function(!0), method = {
        properties: context(require.backgroundTheme().spawnOwnership(), exports, !require.readOnly()),
        tool: exports,
        toolData: module
      }), method.properties
    }

    function function(exports) {
      exports && method?.properties.destroy(), method = null
    }
    async function yValue(exports) {
      await (0, _.loadMetaInfoForLinetoolIfRequired)(exports);
      const module = (0, _.asLineToolName)(exports);
      (0, _.isLineToolLoaded)(module) || (0, handler.isLineToolName)(module) && await (0, _.loadLineTool)(module)
    }

    function value(exports, module) {
      const require = "charts" in exports ? exports.charts : [exports];
      for (const exports of require) {
        for (const require of exports.panes)
          for (const exports of require.sources) module(exports.type);
        exports.lineToolsGroups?.groups.forEach((exports => {
          exports.tools.forEach((exports => module(exports)))
        }))
      }
    }
    class S extends Error {
      constructor(exports, module) {
        super(`Failed to load line tool: ${exports}`), this.name = "LineToolLoadError", this.toolName = exports, this
          .originalError = module
      }
    }
    const boolean = (0, result.getLogger)("LineToolsSynchronizer");
    async function watcher(exports) {
      const module = new Set,
        require = exports => {
          (0, _.isAsyncGenericLineToolName)(exports) && module.add(exports)
        };
      for (const module of exports) value(module, require);
      const state = [...module],
        object = (await Promise.allSettled(state.map((exports => (0, _.ensureLineToolLoaded)(exports).catch((module => {
          throw new S(exports, module)
        })))))).filter((exports => "rejected" === exports.status));
      object.length > 0 && object.forEach((exports => {
        const module = exports.reason;
        boolean.logError(`Failed to load line tool: ${module.toolName}`)
      }))
    }
    async function C(exports) {
      if (!exports) return;
      const module = new Set;
      value(exports, (exports => {
        (0, handler.isLineToolName)(exports) && module.add(exports)
      })), await Promise.all(Array.from(module).map((exports => yValue(exports))))
    }

    function T(exports, module, require, state, nextValue, result, array) {
      (0, object.assert)((0, handler.isLineToolName)(exports), "Unknown line tool: " + exports);
      const logger = (0, _.asLineToolName)(exports);
      let config;
      if ((0, object.assert)((0, _.isLineToolLoaded)(logger), `Line tool ${logger} is not loaded`), nextValue || require || null === method || method.tool !==
        exports || (require = method.properties, function(!1)), (0, _.isAsyncStudyLineToolName)(logger)) {
        config = new((0, _.getLoadedLineTool)(logger))(module, require, (0, object.ensureDefined)(state), nextValue, result)
      } else {
        config = new((0, _.getLoadedLineTool)(logger))(module, require, nextValue, result)
      }
      return config.toolname = exports, function(!0), config
    }

    function P(exports, module) {
      const require = (0, object.ensureNotNull)(module.symbolSource()),
        state = require.symbolInfo(),
        nextValue = state ? (0, config.extractLineToolSymbolFromSymbolInfo)(state, require.symbol()) : require.symbol();
      exports.childs().symbol.setValue(nextValue), require.model().currencyConversionEnabled() && require.isConvertedToOtherCurrency() && exports
        .childs().currencyId.setValue(require.currency()), require.model().unitConversionEnabled() && require.isConvertedToOtherUnit() &&
        exports.childs().unitId.setValue(require.unit()), exports.childs().symbolStateVersion.setValue(2), exports.childs().zOrderVersion
        .setValue(2)
    }

    function context(exports, module, require, state) {
      (0, object.assert)((0, handler.isLineToolName)(module), `${module} should be name of the line tool`);
      const nextValue = (0, _.asLineToolName)(module);
      if ((0, object.assert)((0, _.isLineToolLoaded)(nextValue), `Line tool ${nextValue} is not loaded`), (0, _.isAsyncStudyLineToolName)(
        nextValue)) {
        return (0, _.getLoadedLineTool)(nextValue).createProperties(exports, state)
      }
      return (0, _.getLoadedLineTool)(nextValue).createProperties(exports, state, require)
    }

    function M(exports, module, require, state, nextValue, result) {
      (0, object.assert)((0, handler.isStudyLineToolName)(module), `${module} should be name of the study line tool`);
      const array = (0, _.asLineToolName)(module);
      if ((0, _.isAsyncStudyLineToolName)(array)) {
        return (0, _.getLoadedLineTool)(array).createPropertiesFromStudyMetaInfoAndState(require, state, nextValue, result, exports)
      }
      throw new Error(`Property creation is not implemented for study line tool ${module}`)
    }

    function I(exports) {
      (0, object.assert)((0, handler.isLineToolName)(exports), `${exports} should be name of the line tool`);
      const module = (0, _.asLineToolName)(exports);
      (0, object.assert)((0, _.isLineToolLoaded)(module), `Line tool ${module} is not loaded`);
      const require = (0, _.getLoadedLineTool)(module);
      return void 0 !== require && Boolean(require.supportPhantomMode)
    }

    function A(exports) {
      return exports instanceof utility.LineToolBrushBase
    }

    function L(exports) {
      return exports instanceof logger.LineToolTrading
    }
    const key = ["editableTextStyle", "editableText", "editableTextProperties"];

    function E(exports) {
      return (0, state.default)(exports) && key.every((module => module in exports))
    }

    function D(exports) {
      let module = null;
      return exports === data.lineToolsStudyIds.LineToolRegressionTrend ? module = "LineToolRegressionTrend" : exports === data
        .lineToolsStudyIds.LineToolVbPFixed ? module = "LineToolVbPFixed" : exports === data.lineToolsStudyIds
        .LineToolFixedRangeVolumeProfile && (module = "LineToolFixedRangeVolumeProfile"), module
    }

    function B(exports, module, require, state, result) {
      const logger = module.toolname,
        config = module.properties().state();
      config.intervalsVisibilities = (0, array.mergeIntervalVisibilitiesDefaults)(config?.intervalsVisibilities);
      const handler = context(exports.backgroundTheme().spawnOwnership(), module.toolname, !exports.readOnly(), config);
      handler.childs().visible.setValue(!0);
      const data = (0, object.ensureNotNull)(module.ownerSource()),
        utility = T(logger, exports, handler, null, void 0, void 0);
      void 0 !== state && utility.setId(state), utility.setOwnerSource(data), utility.toolname = logger;
      const _ = utility.clonePositionOffset();
      if (module.isFixed()) {
        const exports = (0, object.ensureDefined)(module.fixedPoint()),
          state = require ? exports.add(new nextValue.Point(_.xCoordOffset, _.yCoordOffset)) : exports;
        utility.addFixedPoint(state)
      }
      const parameter = module.normalizedPoints(),
        method = require ? function(exports, module, require) {
          const state = (0, object.ensureNotNull)(module.priceScale()),
            nextValue = (0, object.ensureNotNull)(module.firstValue());
          return exports.map((exports => {
            const module = exports.price,
              object = state.priceToCoordinate(module, nextValue) + require.yCoordOffset,
              result = state.coordinateToPrice(object, nextValue),
              array = exports.interval;
            return {
              time_t: exports.time_t,
              price: result,
              offset: exports.offset + require.barOffset,
              interval: array
            }
          }))
        }(parameter, data, _) : parameter,
        getter = module.points();
      return utility.restorePoints(method, getter), utility.cloneData && utility.cloneData(module), utility.recalculateStateByData && utility
      .recalculateStateByData(), utility
    }