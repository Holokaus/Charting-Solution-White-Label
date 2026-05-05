/**
 * Module 72972 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72972: (e, t, i) => {
    "use strict";
    i.d(t, {
      isStudyDescriptor: () => u,
      studyMetaInfoRepository: () => g
    });
    var s = i(81251),
      o = i(11542),
      n = i(50151),
      r = i(19844),
      a = i(43046),
      l = i(9787),
      c = i(15219),
      h = i(9343),
      d = i(88723);
    (0, h.getLogger)("Chart.Studies.StudyMetaInfoRepository", {
      color: "#606"
    });

    function u(e) {
      return "object" == typeof e && null !== e && "type" in e && ("java" === e.type && "studyId" in e || "pine" === e
        .type && "pineId" in e)
    }
    class _ {
      constructor(e) {
        this._isReady = !1, this._studyVersioning = null, this._rawStudiesMetaInfo = [], this
          ._rawStudiesMetaInfoDeferredPromise = null,
          this._javaStudiesMetaInfo = [], this._pineMetaInfoCache = [], this._compileErrors = new WeakMap, this
          ._studiesMigrations = [], this._chartApi = e
      }
      async requestMetaInfo() {
        if (null === this._rawStudiesMetaInfoDeferredPromise) {
          this._rawStudiesMetaInfoDeferredPromise = (0, d.createDeferredPromise)();
          const e = (await this._chartApi.requestMetadata()).params[1].metainfo.slice();
          this._processLibraryMetaInfo(e), this._studyVersioning = new c.StudyVersioning(this._javaStudiesMetaInfo,
            this._studiesMigrations), this._requestFinished(), this._rawStudiesMetaInfoDeferredPromise.resolve(this
            ._rawStudiesMetaInfo)
        }
        return this._rawStudiesMetaInfoDeferredPromise.promise
      }
      async findById(e) {
        this._isReady || await this.requestMetaInfo();
        const t = this._findStudyMetaInfo(e);
        if (null !== t) {
          const e = this._compileErrors.get(t);
          return e ? Promise.reject(e) : Promise.resolve(t)
        }
        return "pine" === e.type ? this._compilePine(e) : Promise.reject(
          `unexpected study id=${e.studyId} with type=${e.type}`)
      }
      findByIdSync(e) {
        return this._findStudyMetaInfo(e)
      }
      isReady() {
        return this._isReady
      }
      async findAllJavaStudies() {
        return this._isReady || await this.requestMetaInfo(), this._javaStudiesMetaInfo
      }
      studyVersioning() {
        return (0, n.ensureNotNull)(this._studyVersioning)
      }
      getInternalMetaInfoArray() {
        return this._javaStudiesMetaInfo
      }
      addPineMetaInfo(e, t) {
        const i = m(this._pineMetaInfoCache, e);
        return t && (!Array.isArray(t) || t.length > 0) && (t = Array.isArray(t) ? new PineCompileFailErrorImpl({
          warnings: [],
          errors: t
        }, e) : t, this._compileErrors.set(i, t)), i
      }
      async getLatestMetaInfoForPineStudy(e, t) {
        return null
      }
      _processMigrations(e) {
        throw new Error("not implemented")
      }
      _processSiteMetaInfo(e, t) {
        throw new Error("not implemented")
      }
      _processLibraryMetaInfo(e) {
        for (const t of e) p(t), m(this._javaStudiesMetaInfo, t);
        this._javaStudiesMetaInfo = this._javaStudiesMetaInfo.sort(((e, t) => {
          const i = e.description_localized || e.description,
            s = t.description_localized || t.description;
          return i > s ? 1 : i < s ? -1 : 0
        })), r.StudyMetaInfo.overrideDefaults(this._javaStudiesMetaInfo)
      }
      _requestFinished() {
        this._isReady = !0
      }
      _findStudyMetaInfo(e) {
        return "java" === e.type ? ((0, n.assert)(0 !== this._javaStudiesMetaInfo.length,
          "Java studies metainfo should be define here"), this._javaStudiesMetaInfo.find((t => t.id === e
          .studyId)) || null) : this._pineMetaInfoCache.find((t => t.scriptIdPart === e.pineId && (void 0 === e
          .pineVersion || (0, n.ensureDefined)(t.pine).version === e.pineVersion))) || null
      }
      _compilePine(e) {
        throw new Error("unsupported")
      }
    }

    function p(e) {
      e.description_localized = o.t(e.description, {
        context: "study"
      }, i(83477))
    }

    function m(e, t) {
      const i = new r.StudyMetaInfo(t).state();
      (0, a.migrateMetaInfoAndPropState)(i);
      const s = new r.StudyMetaInfo(i);
      let o = !0;
      const n = e.findIndex((e => e.id === s.id));
      if (-1 === n) e.push(s);
      else {
        const t = e[n],
          i = void 0 !== t.pine ? l.Version.parse(t.pine.version) : null,
          r = void 0 !== s.pine ? l.Version.parse(s.pine.version) : null;
        null === r || null === i || r.isGreaterOrEqual(i) ? (t.removeDefaults(), e[n] = s) : o = !1
      }
      return o && s.createDefaults(), s
    }
    const g = (0, s.default)((() => new _(window.ChartApiInstance)))