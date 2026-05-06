/**
 * Module 12362 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

12362: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      ChartSaverBase: () => watchedValue_d
    });
    var watchedValue_s = watchedValue_i(50279),
      watchedValue_o = watchedValue_i(50151),
      watchedValue_n = (watchedValue_i(11542), watchedValue_i(14411)),
      watchedValue_r = watchedValue_i(23024),
      watchedValue_a = watchedValue_i(48096),
      watchedValue_l = watchedValue_i(37103),
      watchedValue_c = watchedValue_i(81593);

    function watchedValue_h(watchedValue_e, watchedValue_t) {
      watchedValue_e.content = JSON.stringify(watchedValue_t)
    }
    new WeakMap;
    new TextEncoder;
    class watchedValue_d {
      constructor(watchedValue_e) {
        this._prevChartState = null, this._chartSavedDelegate = new watchedValue_a.Delegate, this._chartAboutToBeSavedDelegate =
          new watchedValue_a.Delegate, this._chartSizeLimitExceededDelegate = new watchedValue_a.Delegate, this._isSaveInProcess = !1, this
          ._savingToken = null, this._chartWidgetCollection = watchedValue_e
      }
      async saveChartLineTools(watchedValue_e, watchedValue_t, watchedValue_s, watchedValue_o) {
        if (watchedValue_l.enabled("saveload_separate_drawings_storage")) {
          const watchedValue_n = await (0, watchedValue_r.getChartStorage)(),
            watchedValue_a = this.layoutId(),
            watchedValue_l = watchedValue_i => watchedValue_n.saveLineToolsAndGroups(watchedValue_i, watchedValue_e, watchedValue_t, watchedValue_s, watchedValue_o);
          if (!watchedValue_a) {
            this._chartSavedDelegate.subscribe(null, (watchedValue_e => {
              if (watchedValue_e) {
                const watchedValue_e = this._chartWidgetCollection.metaInfo.uid.value();
                watchedValue_l(watchedValue_e)
              }
            }), !0);
            const {
              SavingLineToolsLibraryError: watchedValue_e
            } = await watchedValue_i.watchedValue_e(5565).then(watchedValue_i.bind(watchedValue_i, 98653));
            throw new watchedValue_e("Layout ID not yet created.", !0)
          }
          return watchedValue_l(watchedValue_a)
        }
        return Promise.reject("Line tools storage is not supported")
      }
      layoutId() {
        return this._chartWidgetCollection.metaInfo.uid.value()
      }
      saveChartSilently(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = watchedValue_i || {};
        this._isSaveInProcess = !0, this._chartAboutToBeSavedDelegate.fire(), this._saveChart((watchedValue_e => {
          const watchedValue_t = watchedValue_e && watchedValue_l.enabled("saveload_separate_drawings_storage"),
            watchedValue_i = this._getChartWidgetCollectionState(!1, void 0, void 0, void 0, watchedValue_t),
            watchedValue_o = this._getCommonSavingInfo(!1);
          return watchedValue_h(watchedValue_o, watchedValue_i), watchedValue_s.chartName && (watchedValue_o.name = watchedValue_s.chartName), watchedValue_o.name && 0 !== watchedValue_o.name.length || !watchedValue_s
            .defaultChartName || (watchedValue_o.name = watchedValue_s.defaultChartName), watchedValue_s.autoSave && (watchedValue_o.autoSave = !0), watchedValue_o
        }), ((watchedValue_t, watchedValue_i) => {
          (0, watchedValue_o.assert)(!this._chartWidgetCollection.readOnly(), "Trying to save layout in read-only mode"), watchedValue_i
            && this.layoutId() === watchedValue_t.uid && this._chartWidgetCollection.metaInfo.name.setValue(watchedValue_i.name ?? ""),
            this._prevChartState = watchedValue_i, this._chartSavedDelegate.fire(!0), this._isSaveInProcess = !1, watchedValue_e && watchedValue_e({
              uid: watchedValue_t.uid,
              data: watchedValue_i
            }), this._prevChartState && delete this._prevChartState.savingToken
        }), (watchedValue_e => {
          this._chartSavedDelegate.fire(!1), this._isSaveInProcess = !1, watchedValue_t && watchedValue_t(watchedValue_e)
        }), watchedValue_s)
      }
      saveToJSON(watchedValue_e) {
        const watchedValue_t = watchedValue_e && !1 === watchedValue_e.includeDrawings || void 0,
          watchedValue_i = this._getCommonSavingInfo(!1);
        return watchedValue_h(watchedValue_i, this._getChartWidgetCollectionState(!1, !0, watchedValue_t, void 0, watchedValue_t)), watchedValue_i
      }
      isSaveInProcess() {
        return this._isSaveInProcess
      }
      _getChartWidgetCollectionState(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o) {
        let watchedValue_n = !1;
        return watchedValue_e ? watchedValue_n = !0 : (watchedValue_t = !0, watchedValue_s = !1), this._chartWidgetCollection.state({
          withData: !!watchedValue_e,
          skipLineToolsFromOtherSymbols: !!watchedValue_i,
          wipeSensitiveData: !!watchedValue_s,
          skipLineTools: watchedValue_o,
          skipHiddenSources: watchedValue_n,
          addOnlyActiveChart: !watchedValue_t
        })
      }
      _getCommonSavingInfo(watchedValue_e) {
        const watchedValue_t = this._chartWidgetCollection,
          watchedValue_i = this._chartWidgetCollection.chartsSymbols()[watchedValue_t.activeChartWidget.value().id()],
          watchedValue_s = {
            ...(watchedValue_o = watchedValue_i, {
              ...watchedValue_o,
              legs: JSON.stringify(watchedValue_o.legs ?? [])
            })
          };
        var watchedValue_o;
        const watchedValue_n = watchedValue_t.metaInfo,
          watchedValue_r = watchedValue_n.id.value();
        return null !== watchedValue_r && (watchedValue_s.id = watchedValue_r), watchedValue_s.name = watchedValue_n.name.value() || "", watchedValue_s.description = watchedValue_n.description.value() || "", watchedValue_s
          .is_realtime = watchedValue_s.is_realtime = watchedValue_e ? "0" : "1", watchedValue_s
      }
      async _saveLineToolsToStorage() {
        if (watchedValue_l.enabled("saveload_separate_drawings_storage")) {
          this.layoutId();
          0;
          const [watchedValue_e, watchedValue_t] = this._chartWidgetCollection.getAll().reduce(((watchedValue_e, watchedValue_t) => {
            const watchedValue_i = watchedValue_t.lineToolsSynchronizer();
            if (watchedValue_i) {
              watchedValue_e[0] ||= watchedValue_i.hasUnsavedMigrationsFromChartState();
              const watchedValue_t = watchedValue_i.flushPendingSavings();
              watchedValue_t && watchedValue_e[1].push(watchedValue_t)
            }
            return watchedValue_e
          }), [!1, []]);
          return watchedValue_t.length && await Promise.all(watchedValue_t), watchedValue_t.length > 0 && watchedValue_e
        }
        return !1
      }
      _invalidateAllLineTools() {
        this._chartWidgetCollection.getAll().forEach((watchedValue_e => watchedValue_e.lineToolsSynchronizer()?.invalidateAll()))
      }
      _saveChartImpl(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o, watchedValue_n) {
        let watchedValue_r;
        watchedValue_r = watchedValue_s => {
          watchedValue_t.uid || watchedValue_t.uid !== this.layoutId() || (watchedValue_t.id = watchedValue_s.result, watchedValue_t.uid = `${watchedValue_s.result}`, this._chartWidgetCollection
            .metaInfo.id.setValue(watchedValue_t.id), this._chartWidgetCollection.metaInfo.uid.setValue(watchedValue_t.uid)), watchedValue_i(watchedValue_t, watchedValue_e)
        }, watchedValue_e.name ? watchedValue_c.backend.saveChart(watchedValue_e.name, watchedValue_e.short_name, watchedValue_e.resolution, watchedValue_e, watchedValue_t).then(watchedValue_r).catch((async watchedValue_e => {
          const watchedValue_t = watchedValue_e instanceof Response ? watchedValue_e : void 0,
            watchedValue_i = watchedValue_e instanceof Error ? watchedValue_e : void 0;
          this._savingToken = null;
          const watchedValue_o = watchedValue_s.bind(null, {
            status: watchedValue_t?.status,
            message: watchedValue_t?.statusText ?? watchedValue_i?.message ?? "Unknown error"
          });
          watchedValue_o()
        })) : watchedValue_s({
          status: -1,
          message: "Saving chart with empty name is not allowed"
        })
      }
      async _saveChart(watchedValue_e, watchedValue_t, watchedValue_o, watchedValue_r) {
        const watchedValue_a = this._chartWidgetCollection.metaInfo,
          watchedValue_c = {
            name: watchedValue_a.name.value(),
            description: watchedValue_a.description.value(),
            uid: watchedValue_a.uid.value(),
            id: watchedValue_a.id.value(),
            lastModified: watchedValue_a.lastModified.value(),
            username: watchedValue_a.username.value(),
            isPrivate: watchedValue_a.isPrivate.value()
          };
        let watchedValue_h = watchedValue_r.changes ?? watchedValue_n.changedAll;
        watchedValue_l.enabled("saveload_separate_drawings_storage") && this._invalidateAllLineTools();
        let watchedValue_d = !0;
        if (2 & watchedValue_h || watchedValue_l.enabled("saveload_separate_drawings_storage")) try {
          await this._saveLineToolsToStorage() && (watchedValue_h |= 1)
        } catch (watchedValue_e) {
          watchedValue_h |= 1;
          const {
            SavingLineToolsLibraryError: watchedValue_t
          } = await watchedValue_i.watchedValue_e(5565).then(watchedValue_i.bind(watchedValue_i, 98653));
          watchedValue_e instanceof watchedValue_t && watchedValue_e.safe || (watchedValue_d = !1)
        }
        if (1 & watchedValue_h) {
          const watchedValue_i = watchedValue_e(watchedValue_d);
          if ((0, watchedValue_s.default)(this._prevChartState, watchedValue_i) && null !== watchedValue_c.id) return this._chartSavedDelegate.fire(!0),
            void watchedValue_t(watchedValue_c, watchedValue_i);
          0;
          const watchedValue_n = (watchedValue_e, watchedValue_i) => (watchedValue_d || this._chartWidgetCollection.getAll().forEach((watchedValue_e => watchedValue_e.lineToolsSynchronizer()
            ?.markAsValidatedBecauseOfSavingToContent())), watchedValue_t(watchedValue_e, watchedValue_i));
          return this._saveChartImpl(watchedValue_i, watchedValue_c, watchedValue_n, watchedValue_o, watchedValue_r, watchedValue_e)
        }
        this._chartSavedDelegate.fire(!0), watchedValue_t(watchedValue_c, watchedValue_e(watchedValue_d))
      }
    }