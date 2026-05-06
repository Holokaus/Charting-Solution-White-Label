/**
 * Module 72972 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72972: (series_e, series_t, i) => {
    "use strict";
    i.d(series_t, {
      isStudyDescriptor: () => u,
      studyMetaInfoRepository: () => g
    });
    var series_s = i(81251),
      o = i(11542),
      series_n = i(50151),
      r = i(19844),
      series_a = i(43046),
      l = i(9787),
      c = i(15219),
      h = i(9343),
      d = i(88723);
    (0, h.getLogger)("Chart.Studies.StudyMetaInfoRepository", {
      color: "#606"
    });

    function u(series_e) {
      return "object" == typeof series_e && null !== series_e && "type" in series_e && ("java" === series_e.type && "studyId" in series_e || "pine" === series_e
        .type && "pineId" in series_e)
    }
    class _ {
      constructor(series_e) {
        this._isReady = !1, this._studyVersioning = null, this._rawStudiesMetaInfo = [], this
          ._rawStudiesMetaInfoDeferredPromise = null,
          this._javaStudiesMetaInfo = [], this._pineMetaInfoCache = [], this._compileErrors = new WeakMap, this
          ._studiesMigrations = [], this._chartApi = series_e
      }
      async requestMetaInfo() {
        if (null === this._rawStudiesMetaInfoDeferredPromise) {
          this._rawStudiesMetaInfoDeferredPromise = (0, d.createDeferredPromise)();
          const series_e = (await this._chartApi.requestMetadata()).params[1].metainfo.slice();
          this._processLibraryMetaInfo(series_e), this._studyVersioning = new c.StudyVersioning(this._javaStudiesMetaInfo,
            this._studiesMigrations), this._requestFinished(), this._rawStudiesMetaInfoDeferredPromise.resolve(this
            ._rawStudiesMetaInfo)
        }
        return this._rawStudiesMetaInfoDeferredPromise.promise
      }
      async findById(series_e) {
        this._isReady || await this.requestMetaInfo();
        const series_t = this._findStudyMetaInfo(series_e);
        if (null !== series_t) {
          const series_e = this._compileErrors.get(series_t);
          return series_e ? Promise.reject(series_e) : Promise.resolve(series_t)
        }
        return "pine" === series_e.type ? this._compilePine(series_e) : Promise.reject(
          `unexpected study id=${series_e.studyId} with type=${series_e.type}`)
      }
      findByIdSync(series_e) {
        return this._findStudyMetaInfo(series_e)
      }
      isReady() {
        return this._isReady
      }
      async findAllJavaStudies() {
        return this._isReady || await this.requestMetaInfo(), this._javaStudiesMetaInfo
      }
      studyVersioning() {
        return (0, series_n.ensureNotNull)(this._studyVersioning)
      }
      getInternalMetaInfoArray() {
        return this._javaStudiesMetaInfo
      }
      addPineMetaInfo(series_e, series_t) {
        const i = m(this._pineMetaInfoCache, series_e);
        return series_t && (!Array.isArray(series_t) || series_t.length > 0) && (series_t = Array.isArray(series_t) ? new PineCompileFailErrorImpl({
          warnings: [],
          errors: series_t
        }, series_e) : series_t, this._compileErrors.set(i, series_t)), i
      }
      async getLatestMetaInfoForPineStudy(series_e, series_t) {
        return null
      }
      _processMigrations(series_e) {
        throw new Error("not implemented")
      }
      _processSiteMetaInfo(series_e, series_t) {
        throw new Error("not implemented")
      }
      _processLibraryMetaInfo(series_e) {
        for (const series_t of series_e) p(series_t), m(this._javaStudiesMetaInfo, series_t);
        this._javaStudiesMetaInfo = this._javaStudiesMetaInfo.sort(((series_e, series_t) => {
          const i = series_e.description_localized || series_e.description,
            series_s = series_t.description_localized || series_t.description;
          return i > series_s ? 1 : i < series_s ? -1 : 0
        })), r.StudyMetaInfo.overrideDefaults(this._javaStudiesMetaInfo)
      }
      _requestFinished() {
        this._isReady = !0
      }
      _findStudyMetaInfo(series_e) {
        return "java" === series_e.type ? ((0, series_n.assert)(0 !== this._javaStudiesMetaInfo.length,
          "Java studies metainfo should be define here"), this._javaStudiesMetaInfo.find((series_t => series_t.id === series_e
          .studyId)) || null) : this._pineMetaInfoCache.find((series_t => series_t.scriptIdPart === series_e.pineId && (void 0 === series_e
          .pineVersion || (0, series_n.ensureDefined)(series_t.pine).version === series_e.pineVersion))) || null
      }
      _compilePine(series_e) {
        throw new Error("unsupported")
      }
    }

    function p(series_e) {
      series_e.description_localized = o.series_t(series_e.description, {
        context: "study"
      }, i(83477))
    }

    function m(series_e, series_t) {
      const i = new r.StudyMetaInfo(series_t).state();
      (0, series_a.migrateMetaInfoAndPropState)(i);
      const series_s = new r.StudyMetaInfo(i);
      let o = !0;
      const series_n = series_e.findIndex((series_e => series_e.id === series_s.id));
      if (-1 === series_n) series_e.push(series_s);
      else {
        const series_t = series_e[series_n],
          i = void 0 !== series_t.pine ? l.Version.parse(series_t.pine.version) : null,
          r = void 0 !== series_s.pine ? l.Version.parse(series_s.pine.version) : null;
        null === r || null === i || r.isGreaterOrEqual(i) ? (series_t.removeDefaults(), series_e[series_n] = series_s) : o = !1
      }
      return o && series_s.createDefaults(), series_s
    }
    const g = (0, series_s.default)((() => new _(window.ChartApiInstance)))