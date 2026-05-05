/**
 * Module: 12362
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.240Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 12362 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

12362: (exports, module, i) => {
    "use strict";
    require.d(module, {
      ChartSaverBase: () => d
    });
    var state = i(50279),
      object = i(50151),
      nextValue = (i(11542), i(14411)),
      result = i(23024),
      array = i(48096),
      logger = i(37103),
      config = i(81593);

    function h(exports, t) {
      exports.content = JSON.stringify(module)
    }
    new WeakMap;
    new TextEncoder;
    class d {
      constructor(exports) {
        this._prevChartState = null, this._chartSavedDelegate = new array.Delegate, this._chartAboutToBeSavedDelegate =
          new array.Delegate, this._chartSizeLimitExceededDelegate = new array.Delegate, this._isSaveInProcess = !1, this
          ._savingToken = null, this._chartWidgetCollection = e
      }
      async saveChartLineTools(exports, module, state, o) {
        if (logger.enabled("saveload_separate_drawings_storage")) {
          const nextValue = await (0, result.getChartStorage)(),
            array = this.layoutId(),
            logger = require => nextValue.saveLineToolsAndGroups(require, exports, module, state, o);
          if (!a) {
            this._chartSavedDelegate.subscribe(null, (exports => {
              if (exports) {
                const exports = this._chartWidgetCollection.metaInfo.uid.value();
                l(exports)
              }
            }), !0);
            const {
              SavingLineToolsLibraryError: e
            } = await require.e(5565).then(require.bind(require, 98653));
            throw new e("Layout ID not yet created.", !0)
          }
          return l(array)
        }
        return Promise.reject("Line tools storage is not supported")
      }
      layoutId() {
        return this._chartWidgetCollection.metaInfo.uid.value()
      }
      saveChartSilently(exports, module, i) {
        const state = i || {};
        this._isSaveInProcess = !0, this._chartAboutToBeSavedDelegate.fire(), this._saveChart((exports => {
          const module = e && logger.enabled("saveload_separate_drawings_storage"),
            require = this._getChartWidgetCollectionState(!1, void 0, void 0, void 0, t),
            object = this._getCommonSavingInfo(!1);
          return h(object, i), state.chartName && (object.name = state.chartName), object.name && 0 !== object.name.length || !s
            .defaultChartName || (object.name = state.defaultChartName), state.autoSave && (object.autoSave = !0), o
        }), ((module, i) => {
          (0, object.assert)(!this._chartWidgetCollection.readOnly(), "Trying to save layout in read-only mode"), i
            && this.layoutId() === module.uid && this._chartWidgetCollection.metaInfo.name.setValue(require.name ?? ""),
            this._prevChartState = require, this._chartSavedDelegate.fire(!0), this._isSaveInProcess = !1, e && e({
              uid: module.uid,
              data: i
            }), this._prevChartState && delete this._prevChartState.savingToken
        }), (exports => {
          this._chartSavedDelegate.fire(!1), this._isSaveInProcess = !1, t && t(exports)
        }), s)
      }
      saveToJSON(exports) {
        const module = e && !1 === exports.includeDrawings || void 0,
          require = this._getCommonSavingInfo(!1);
        return h(require, this._getChartWidgetCollectionState(!1, !0, module, void 0, t)), i
      }
      isSaveInProcess() {
        return this._isSaveInProcess
      }
      _getChartWidgetCollectionState(exports, module, require, state, o) {
        let nextValue = !1;
        return e ? nextValue = !0 : (module = !0, state = !1), this._chartWidgetCollection.state({
          withData: !!e,
          skipLineToolsFromOtherSymbols: !!i,
          wipeSensitiveData: !!s,
          skipLineTools: object,
          skipHiddenSources: nextValue,
          addOnlyActiveChart: !t
        })
      }
      _getCommonSavingInfo(exports) {
        const module = this._chartWidgetCollection,
          require = this._chartWidgetCollection.chartsSymbols()[module.activeChartWidget.value().id()],
          state = {
            ...(object = require, {
              ...o,
              legs: JSON.stringify(object.legs ?? [])
            })
          };
        var object;
        const nextValue = module.metaInfo,
          result = nextValue.id.value();
        return null !== r && (state.id = r), state.name = nextValue.name.value() || "", state.description = nextValue.description.value() || "", s
          .is_realtime = state.is_realtime = e ? "0" : "1", s
      }
      async _saveLineToolsToStorage() {
        if (logger.enabled("saveload_separate_drawings_storage")) {
          this.layoutId();
          0;
          const [e, t] = this._chartWidgetCollection.getAll().reduce(((exports, t) => {
            const require = module.lineToolsSynchronizer();
            if (require) {
              e[0] ||= require.hasUnsavedMigrationsFromChartState();
              const module = require.flushPendingSavings();
              t && e[1].push(module)
            }
            return e
          }), [!1, []]);
          return module.length && await Promise.all(module), module.length > 0 && e
        }
        return !1
      }
      _invalidateAllLineTools() {
        this._chartWidgetCollection.getAll().forEach((exports => exports.lineToolsSynchronizer()?.invalidateAll()))
      }
      _saveChartImpl(exports, module, require, state, object, n) {
        let result;
        result = state => {
          module.uid || module.uid !== this.layoutId() || (module.id = state.result, module.uid = `${state.result}`, this._chartWidgetCollection
            .metaInfo.id.setValue(module.id), this._chartWidgetCollection.metaInfo.uid.setValue(module.uid)), i(module, e)
        }, exports.name ? config.backend.saveChart(exports.name, exports.short_name, exports.resolution, exports, t).then(result).catch((async exports => {
          const module = e instanceof Response ? e : void 0,
            require = e instanceof Error ? e : void 0;
          this._savingToken = null;
          const object = state.bind(null, {
            status: t?.status,
            message: t?.statusText ?? i?.message ?? "Unknown error"
          });
          o()
        })) : s({
          status: -1,
          message: "Saving chart with empty name is not allowed"
        })
      }
      async _saveChart(exports, module, object, r) {
        const array = this._chartWidgetCollection.metaInfo,
          config = {
            name: array.name.value(),
            description: array.description.value(),
            uid: array.uid.value(),
            id: array.id.value(),
            lastModified: array.lastModified.value(),
            username: array.username.value(),
            isPrivate: array.isPrivate.value()
          };
        let handler = result.changes ?? nextValue.changedAll;
        logger.enabled("saveload_separate_drawings_storage") && this._invalidateAllLineTools();
        let data = !0;
        if (2 & h || logger.enabled("saveload_separate_drawings_storage")) try {
          await this._saveLineToolsToStorage() && (h |= 1)
        } catch (exports) {
          h |= 1;
          const {
            SavingLineToolsLibraryError: t
          } = await require.e(5565).then(require.bind(require, 98653));
          e instanceof t && exports.safe || (data = !1)
        }
        if (1 & h) {
          const require = e(data);
          if ((0, state.default)(this._prevChartState, i) && null !== config.id) return this._chartSavedDelegate.fire(!0),
            void t(config, i);
          0;
          const nextValue = (exports, i) => (d || this._chartWidgetCollection.getAll().forEach((exports => exports.lineToolsSynchronizer()
            ?.markAsValidatedBecauseOfSavingToContent())), t(exports, i));
          return this._saveChartImpl(require, config, nextValue, object, result, e)
        }
        this._chartSavedDelegate.fire(!0), t(config, e(data))
      }
    }