/**
 * Module 12362 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

12362: (watchedValue_e, chartWidget_reviewed, i) => {
    "use strict";
    i.d(chartWidget_reviewed, {
      ChartSaverBase: () => d
    });
    var watchedValue_s = i(50279),
      o = i(50151),
      watchedValue_n = (i(11542), i(14411)),
      r = i(23024),
      a = i(48096),
      l = i(37103),
      c = i(81593);

    function h(watchedValue_e, chartWidget_reviewed) {
      watchedValue_e.content = JSON.stringify(chartWidget_reviewed)
    }
    new WeakMap;
    new TextEncoder;
    class d {
      constructor(watchedValue_e) {
        this._prevChartState = null, this._chartSavedDelegate = new a.Delegate, this._chartAboutToBeSavedDelegate =
          new a.Delegate, this._chartSizeLimitExceededDelegate = new a.Delegate, this._isSaveInProcess = !1, this
          ._savingToken = null, this._chartWidgetCollection = watchedValue_e
      }
      async saveChartLineTools(watchedValue_e, chartWidget_reviewed, watchedValue_s, o) {
        if (l.enabled("saveload_separate_drawings_storage")) {
          const watchedValue_n = await (0, r.getChartStorage)(),
            a = this.layoutId(),
            l = i => watchedValue_n.saveLineToolsAndGroups(i, watchedValue_e, chartWidget_reviewed, watchedValue_s, o);
          if (!a) {
            this._chartSavedDelegate.subscribe(null, (watchedValue_e => {
              if (watchedValue_e) {
                const watchedValue_e = this._chartWidgetCollection.metaInfo.uid.value();
                l(watchedValue_e)
              }
            }), !0);
            const {
              SavingLineToolsLibraryError: watchedValue_e
            } = await i.watchedValue_e(5565).then(i.bind(i, 98653));
            throw new watchedValue_e("Layout ID not yet created.", !0)
          }
          return l(a)
        }
        return Promise.reject("Line tools storage is not supported")
      }
      layoutId() {
        return this._chartWidgetCollection.metaInfo.uid.value()
      }
      saveChartSilently(watchedValue_e, chartWidget_reviewed, i) {
        const watchedValue_s = i || {};
        this._isSaveInProcess = !0, this._chartAboutToBeSavedDelegate.fire(), this._saveChart((watchedValue_e => {
          const chartWidget_reviewed = watchedValue_e && l.enabled("saveload_separate_drawings_storage"),
            i = this._getChartWidgetCollectionState(!1, void 0, void 0, void 0, chartWidget_reviewed),
            o = this._getCommonSavingInfo(!1);
          return h(o, i), watchedValue_s.chartName && (o.name = watchedValue_s.chartName), o.name && 0 !== o.name.length || !watchedValue_s
            .defaultChartName || (o.name = watchedValue_s.defaultChartName), watchedValue_s.autoSave && (o.autoSave = !0), o
        }), ((chartWidget_reviewed, i) => {
          (0, o.assert)(!this._chartWidgetCollection.readOnly(), "Trying to save layout in read-only mode"), i
            && this.layoutId() === chartWidget_reviewed.uid && this._chartWidgetCollection.metaInfo.name.setValue(i.name ?? ""),
            this._prevChartState = i, this._chartSavedDelegate.fire(!0), this._isSaveInProcess = !1, watchedValue_e && watchedValue_e({
              uid: chartWidget_reviewed.uid,
              data: i
            }), this._prevChartState && delete this._prevChartState.savingToken
        }), (watchedValue_e => {
          this._chartSavedDelegate.fire(!1), this._isSaveInProcess = !1, chartWidget_reviewed && chartWidget_reviewed(watchedValue_e)
        }), watchedValue_s)
      }
      saveToJSON(watchedValue_e) {
        const chartWidget_reviewed = watchedValue_e && !1 === watchedValue_e.includeDrawings || void 0,
          i = this._getCommonSavingInfo(!1);
        return h(i, this._getChartWidgetCollectionState(!1, !0, chartWidget_reviewed, void 0, chartWidget_reviewed)), i
      }
      isSaveInProcess() {
        return this._isSaveInProcess
      }
      _getChartWidgetCollectionState(watchedValue_e, chartWidget_reviewed, i, watchedValue_s, o) {
        let watchedValue_n = !1;
        return watchedValue_e ? watchedValue_n = !0 : (chartWidget_reviewed = !0, watchedValue_s = !1), this._chartWidgetCollection.state({
          withData: !!watchedValue_e,
          skipLineToolsFromOtherSymbols: !!i,
          wipeSensitiveData: !!watchedValue_s,
          skipLineTools: o,
          skipHiddenSources: watchedValue_n,
          addOnlyActiveChart: !chartWidget_reviewed
        })
      }
      _getCommonSavingInfo(watchedValue_e) {
        const chartWidget_reviewed = this._chartWidgetCollection,
          i = this._chartWidgetCollection.chartsSymbols()[chartWidget_reviewed.activeChartWidget.value().id()],
          watchedValue_s = {
            ...(o = i, {
              ...o,
              legs: JSON.stringify(o.legs ?? [])
            })
          };
        var o;
        const watchedValue_n = chartWidget_reviewed.metaInfo,
          r = watchedValue_n.id.value();
        return null !== r && (watchedValue_s.id = r), watchedValue_s.name = watchedValue_n.name.value() || "", watchedValue_s.description = watchedValue_n.description.value() || "", watchedValue_s
          .is_realtime = watchedValue_s.is_realtime = watchedValue_e ? "0" : "1", watchedValue_s
      }
      async _saveLineToolsToStorage() {
        if (l.enabled("saveload_separate_drawings_storage")) {
          this.layoutId();
          0;
          const [watchedValue_e, chartWidget_reviewed] = this._chartWidgetCollection.getAll().reduce(((watchedValue_e, chartWidget_reviewed) => {
            const i = chartWidget_reviewed.lineToolsSynchronizer();
            if (i) {
              watchedValue_e[0] ||= i.hasUnsavedMigrationsFromChartState();
              const chartWidget_reviewed = i.flushPendingSavings();
              chartWidget_reviewed && watchedValue_e[1].push(chartWidget_reviewed)
            }
            return watchedValue_e
          }), [!1, []]);
          return chartWidget_reviewed.length && await Promise.all(chartWidget_reviewed), chartWidget_reviewed.length > 0 && watchedValue_e
        }
        return !1
      }
      _invalidateAllLineTools() {
        this._chartWidgetCollection.getAll().forEach((watchedValue_e => watchedValue_e.lineToolsSynchronizer()?.invalidateAll()))
      }
      _saveChartImpl(watchedValue_e, chartWidget_reviewed, i, watchedValue_s, o, watchedValue_n) {
        let r;
        r = watchedValue_s => {
          chartWidget_reviewed.uid || chartWidget_reviewed.uid !== this.layoutId() || (chartWidget_reviewed.id = watchedValue_s.result, chartWidget_reviewed.uid = `${watchedValue_s.result}`, this._chartWidgetCollection
            .metaInfo.id.setValue(chartWidget_reviewed.id), this._chartWidgetCollection.metaInfo.uid.setValue(chartWidget_reviewed.uid)), i(chartWidget_reviewed, watchedValue_e)
        }, watchedValue_e.name ? c.backend.saveChart(watchedValue_e.name, watchedValue_e.short_name, watchedValue_e.resolution, watchedValue_e, chartWidget_reviewed).then(r).catch((async watchedValue_e => {
          const chartWidget_reviewed = watchedValue_e instanceof Response ? watchedValue_e : void 0,
            i = watchedValue_e instanceof Error ? watchedValue_e : void 0;
          this._savingToken = null;
          const o = watchedValue_s.bind(null, {
            status: chartWidget_reviewed?.status,
            message: chartWidget_reviewed?.statusText ?? i?.message ?? "Unknown error"
          });
          o()
        })) : watchedValue_s({
          status: -1,
          message: "Saving chart with empty name is not allowed"
        })
      }
      async _saveChart(watchedValue_e, chartWidget_reviewed, o, r) {
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
        let h = r.changes ?? watchedValue_n.changedAll;
        l.enabled("saveload_separate_drawings_storage") && this._invalidateAllLineTools();
        let d = !0;
        if (2 & h || l.enabled("saveload_separate_drawings_storage")) try {
          await this._saveLineToolsToStorage() && (h |= 1)
        } catch (watchedValue_e) {
          h |= 1;
          const {
            SavingLineToolsLibraryError: chartWidget_reviewed
          } = await i.watchedValue_e(5565).then(i.bind(i, 98653));
          watchedValue_e instanceof chartWidget_reviewed && watchedValue_e.safe || (d = !1)
        }
        if (1 & h) {
          const i = watchedValue_e(d);
          if ((0, watchedValue_s.default)(this._prevChartState, i) && null !== c.id) return this._chartSavedDelegate.fire(!0),
            void chartWidget_reviewed(c, i);
          0;
          const watchedValue_n = (watchedValue_e, i) => (d || this._chartWidgetCollection.getAll().forEach((watchedValue_e => watchedValue_e.lineToolsSynchronizer()
            ?.markAsValidatedBecauseOfSavingToContent())), chartWidget_reviewed(watchedValue_e, i));
          return this._saveChartImpl(i, c, watchedValue_n, o, r, watchedValue_e)
        }
        this._chartSavedDelegate.fire(!0), chartWidget_reviewed(c, watchedValue_e(d))
      }
    }
}
