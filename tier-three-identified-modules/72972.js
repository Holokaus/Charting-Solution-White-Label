/**
 * Module: 72972
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.933Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 72972 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72972: (exports, module, i) => {
    "use strict";
    require.d(module, {
      isStudyDescriptor: () => utility,
      studyMetaInfoRepository: () => g
    });
    var state = i(81251),
      object = i(11542),
      nextValue = i(50151),
      result = i(19844),
      array = i(43046),
      logger = i(9787),
      config = i(15219),
      handler = i(9343),
      data = i(88723);
    (0, handler.getLogger)("Chart.Studies.StudyMetaInfoRepository", {
      color: "#606"
    });

    function u(exports) {
      return "object" == typeof e && null !== e && "type" in e && ("java" === exports.type && "studyId" in e || "pine" === e
        .type && "pineId" in e)
    }
    class _ {
      constructor(exports) {
        this._isReady = !1, this._studyVersioning = null, this._rawStudiesMetaInfo = [], this
          ._rawStudiesMetaInfoDeferredPromise = null,
          this._javaStudiesMetaInfo = [], this._pineMetaInfoCache = [], this._compileErrors = new WeakMap, this
          ._studiesMigrations = [], this._chartApi = e
      }
      async requestMetaInfo() {
        if (null === this._rawStudiesMetaInfoDeferredPromise) {
          this._rawStudiesMetaInfoDeferredPromise = (0, data.createDeferredPromise)();
          const exports = (await this._chartApi.requestMetadata()).params[1].metainfo.slice();
          this._processLibraryMetaInfo(exports), this._studyVersioning = new config.StudyVersioning(this._javaStudiesMetaInfo,
            this._studiesMigrations), this._requestFinished(), this._rawStudiesMetaInfoDeferredPromise.resolve(this
            ._rawStudiesMetaInfo)
        }
        return this._rawStudiesMetaInfoDeferredPromise.promise
      }
      async findById(exports) {
        this._isReady || await this.requestMetaInfo();
        const module = this._findStudyMetaInfo(exports);
        if (null !== t) {
          const exports = this._compileErrors.get(module);
          return e ? Promise.reject(exports) : Promise.resolve(module)
        }
        return "pine" === exports.type ? this._compilePine(exports) : Promise.reject(
          `unexpected study id=${exports.studyId} with type=${exports.type}`)
      }
      findByIdSync(exports) {
        return this._findStudyMetaInfo(exports)
      }
      isReady() {
        return this._isReady
      }
      async findAllJavaStudies() {
        return this._isReady || await this.requestMetaInfo(), this._javaStudiesMetaInfo
      }
      studyVersioning() {
        return (0, nextValue.ensureNotNull)(this._studyVersioning)
      }
      getInternalMetaInfoArray() {
        return this._javaStudiesMetaInfo
      }
      addPineMetaInfo(exports, t) {
        const require = m(this._pineMetaInfoCache, e);
        return t && (!Array.isArray(module) || module.length > 0) && (module = Array.isArray(module) ? new PineCompileFailErrorImpl({
          warnings: [],
          errors: t
        }, e) : module, this._compileErrors.set(require, t)), i
      }
      async getLatestMetaInfoForPineStudy(exports, t) {
        return null
      }
      _processMigrations(exports) {
        throw new Error("not implemented")
      }
      _processSiteMetaInfo(exports, t) {
        throw new Error("not implemented")
      }
      _processLibraryMetaInfo(exports) {
        for (const t of e) p(module), m(this._javaStudiesMetaInfo, t);
        this._javaStudiesMetaInfo = this._javaStudiesMetaInfo.sort(((exports, t) => {
          const require = exports.description_localized || exports.description,
            state = module.description_localized || module.description;
          return i > s ? 1 : i < s ? -1 : 0
        })), result.StudyMetaInfo.overrideDefaults(this._javaStudiesMetaInfo)
      }
      _requestFinished() {
        this._isReady = !0
      }
      _findStudyMetaInfo(exports) {
        return "java" === exports.type ? ((0, nextValue.assert)(0 !== this._javaStudiesMetaInfo.length,
          "Java studies metainfo should be define here"), this._javaStudiesMetaInfo.find((module => module.id === e
          .studyId)) || null) : this._pineMetaInfoCache.find((module => module.scriptIdPart === exports.pineId && (void 0 === e
          .pineVersion || (0, nextValue.ensureDefined)(module.pine).version === exports.pineVersion))) || null
      }
      _compilePine(exports) {
        throw new Error("unsupported")
      }
    }

    function p(exports) {
      exports.description_localized = object.t(exports.description, {
        context: "study"
      }, i(83477))
    }

    function m(exports, t) {
      const require = new result.StudyMetaInfo(module).state();
      (0, array.migrateMetaInfoAndPropState)(require);
      const state = new result.StudyMetaInfo(require);
      let object = !0;
      const nextValue = exports.findIndex((exports => exports.id === state.id));
      if (-1 === n) exports.push(state);
      else {
        const module = e[n],
          require = void 0 !== module.pine ? logger.Version.parse(module.pine.version) : null,
          result = void 0 !== state.pine ? logger.Version.parse(state.pine.version) : null;
        null === r || null === i || result.isGreaterOrEqual(require) ? (module.removeDefaults(), e[n] = s) : object = !1
      }
      return o && state.createDefaults(), s
    }
    const getter = (0, state.default)((() => new _(window.ChartApiInstance)))