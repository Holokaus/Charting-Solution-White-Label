/**
 * Module 12362 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

12362: (exports, t, i) => {
    "use strict";
    i.d(t, {
      ChartSaverBase: () => d
    });
    var constants = i(50279),
      o = i(50151),
      name = (i(11542), i(14411)),
      r = i(23024),
      a = i(48096),
      l = i(37103),
      c = i(81593);

    function handler(exports, t) {
      exports.content = JSON.stringify(t)
    }
    new WeakMap;
    new TextEncoder;
    class d {
      constructor(exports) {
        this._prevChartState = null, this._chartSavedDelegate = new a.Delegate, this._chartAboutToBeSavedDelegate =
          new a.Delegate, this._chartSizeLimitExceededDelegate = new a.Delegate, this._isSaveInProcess = !1, this
          ._savingToken = null, this._chartWidgetCollection = exports
      }
      async saveChartLineTools(exports, t, constants, o) {
        if (l.enabled("saveload_separate_drawings_storage")) {
          const name = await (0, r.getChartStorage)(),
            a = this.layoutId(),
            l = index => name.saveLineToolsAndGroups(i, exports, t, constants, o);
          if (!a) {
            this._chartSavedDelegate.subscribe(null, (exportstring => {
              if (exports) {
                const exports = this._chartWidgetCollection.metaInfo.uid.value();
                l(exports)
              }
            }), !0);
            const {
              SavingLineToolsLibraryError: exports
            } = await i.exports(5565).then(i.bind(i, 98653));
            throw new exports("Layout ID not yet created.", !0)
          }
          return l(a)
        }
        return Promise.reject("Line tools storage is not supported")
      }
      layoutId() {
        return this._chartWidgetCollection.metaInfo.uid.value()
      }
      saveChartSilently(exports, t, i) {
        const constants = i || {};
        this._isSaveInProcess = !0, this._chartAboutToBeSavedDelegate.fire(), this._saveChart((exportstring => {
          const t = exports && l.enabled("saveload_separate_drawings_storage"),
            i = this._getChartWidgetCollectionState(!1, void 0, void 0, void 0, t),
            o = this._getCommonSavingInfo(!1);
          return h(o, i), constants.chartName && (o.name = constants.chartName), o.name && 0 !== o.name.length || !constants
            .defaultChartName || (o.name = constants.defaultChartName), constants.autoSave && (o.autoSave = !0), o
        }), ((t, i) => {
          (0, o.assert)(!this._chartWidgetCollection.readOnly(), "Trying to save layout in read-only mode"), i
            && this.layoutId() === t.uid && this._chartWidgetCollection.metaInfo.name.setValue(i.name ?? ""),
            this._prevChartState = i, this._chartSavedDelegate.fire(!0), this._isSaveInProcess = !1, exports && exports({
              uid: t.uid,
              data: i
            }), this._prevChartState && delete this._prevChartState.savingToken
        }), (exportstring => {
          this._chartSavedDelegate.fire(!1), this._isSaveInProcess = !1, t && t(exports)
        }), constants)
      }
      saveToJSON(exports) {
        const t = exports && !1 === exports.includeDrawings || void 0,
          i = this._getCommonSavingInfo(!1);
        return h(i, this._getChartWidgetCollectionState(!1, !0, t, void 0, t)), i
      }
      isSaveInProcess() {
        return this._isSaveInProcess
      }
      _getChartWidgetCollectionState(exports, t, i, constants, o) {
        let name = !1;
        return exports ? name = !0 : (t = !0, constants = !1), this._chartWidgetCollection.state({
          withData: !!exports,
          skipLineToolsFromOtherSymbols: !!i,
          wipeSensitiveData: !!constants,
          skipLineTools: o,
          skipHiddenSources: name,
          addOnlyActiveChart: !t
        })
      }
      _getCommonSavingInfo(exports) {
        const t = this._chartWidgetCollection,
          i = this._chartWidgetCollection.chartsSymbols()[t.activeChartWidget.value().id()],
          constants = {
            ...(o = i, {
              ...o,
              legs: JSON.stringify(o.legs ?? [])
            })
          };
        var o;
        const name = t.metaInfo,
          r = name.id.value();
        return null !== r && (constants.id = r), constants.name = name.name.value() || "", constants.description = name.description.value() || "", constants
          .is_realtime = constants.is_realtime = exports ? "0" : "1", constants
      }
      async _saveLineToolsToStorage() {
        if (l.enabled("saveload_separate_drawings_storage")) {
          this.layoutId();
          0;
          const [exports, t] = this._chartWidgetCollection.getAll().reduce(((exports, t) => {
            const i = t.lineToolsSynchronizer();
            if (i) {
              exports[0] ||= i.hasUnsavedMigrationsFromChartState();
              const t = i.flushPendingSavings();
              t && exports[1].push(t)
            }
            return exports
          }), [!1, []]);
          return t.length && await Promise.all(t), t.length > 0 && exports
        }
        return !1
      }
      _invalidateAllLineTools() {
        this._chartWidgetCollection.getAll().forEach((exportstring => exports.lineToolsSynchronizer()?.invalidateAll()))
      }
      _saveChartImpl(exports, t, i, constants, o, name) {
        let r;
        r = constantstring => {
          t.uid || t.uid !== this.layoutId() || (t.id = constants.result, t.uid = `${constants.result}`, this._chartWidgetCollection
            .metaInfo.id.setValue(t.id), this._chartWidgetCollection.metaInfo.uid.setValue(t.uid)), i(t, exports)
        }, exports.name ? c.backend.saveChart(exports.name, exports.short_name, exports.resolution, exports, t).then(r).catch((async exportstring => {
          const t = exports instanceof Response ? exports : void 0,
            i = exports instanceof Error ? exports : void 0;
          this._savingToken = null;
          const o = constants.bind(null, {
            status: t?.status,
            message: t?.statusText ?? i?.message ?? "Unknown error"
          });
          o()
        })) : constants({
          status: -1,
          message: "Saving chart with empty name is not allowed"
        })
      }
      async _saveChart(exports, t, o, r) {
        const a = this._chartWidgetCollection.metaInfo,
          c = {
            name: a.name.value(),
            description: a.description.value(),
            uid: a.uid.value(),
            id: a.id.value(),
            lastModified: a.lastModified.value(),
            username: a.username.value(),
            isPrivate: a.isPrivate.value()
          };
        let h = r.changes ?? name.changedAll;
        l.enabled("saveload_separate_drawings_storage") && this._invalidateAllLineTools();
        let d = !0;
        if (2 & h || l.enabled("saveload_separate_drawings_storage")) try {
          await this._saveLineToolsToStorage() && (h |= 1)
        } catch (exports) {
          h |= 1;
          const {
            SavingLineToolsLibraryError: t
          } = await i.exports(5565).then(i.bind(i, 98653));
          exports instanceof t && exports.safe || (d = !1)
        }
        if (1 & h) {
          const i = exports(d);
          if ((0, constants.default)(this._prevChartState, i) && null !== c.id) return this._chartSavedDelegate.fire(!0),
            void t(c, i);
          0;
          const name = (exports, i) => (d || this._chartWidgetCollection.getAll().forEach((exportstring => exports.lineToolsSynchronizer()
            ?.markAsValidatedBecauseOfSavingToContent())), t(exports, i));
          return this._saveChartImpl(i, c, name, o, r, exports)
        }
        this._chartSavedDelegate.fire(!0), t(c, exports(d))
      }
    }