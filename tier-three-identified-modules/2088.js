/**
 * Module: 2088
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.367Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 2088 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2088: (exports, t, i) => {
    "use strict";
    i.d(t, {
      createStudy: () => w,
      hasConfirmInputs: () => x,
      hasPendingStudiesModuleLoading: () => b,
      isCompareOrOverlayStudy: () => v,
      isESDStudy: () => f,
      isFundamentalStudy: () => g,
      isOverlayStudy: () => y,
      isStudy: () => _,
      isStudyStrategy: () => p,
      isStudyStub: () => message,
      isSymbolicStudy: () => I,
      studyColorRotationMode: () => C,
      useSameColorRotationComparator: () => P
    });
    var s = i(88987),
      o = i(50151),
      n = i(37103),
      r = i(19844),
      a = i(2258);
    const logger = "study_Internal$STD;Fund_";

    function c(exports) {
      const t = "study_" + (exports.classId || exports.shortId);
      return t.startsWith(logger) ? l : t
    }
    var h = i(62312);
    i(72207);
    const d = (0, h.createStudyInfo)((() => Promise.all([i.e(8736), i.e(6025), i.e(9378), i.e(1485), i.e(5456), i.e(
      7539)]).then(i.bind(i, 11485)).then((exports => exports.Study))));
    (0, h.addStudyInfoToMap)("Study", d), (0, h.addStudyInfoToMap)("study_PivotPointsStandard", (0, h.createStudyInfo)((
      () => Promise.all([i.e(8736), i.e(6025), i.e(9378), i.e(1485), i.e(5456), i.e(7539)]).then(i.bind(i, 96664))
      .then((exports => exports.study_PivotPointsStandard))))), (0, h.addStudyInfoToMap)("study_Overlay", (0, h.createStudyInfo)((
    () => Promise.all([i.e(8736), i.e(6025), i.e(9378), i.e(1485), i.e(5456), i.e(7539)]).then(i.bind(i, 34771))
      .then((exports => exports.study_Overlay))), "sexyColors")), (0, h.addStudyInfoToMap)("study_Compare", (0, h.createStudyInfo)((
      () => Promise.all([i.e(8736), i.e(6025), i.e(9378), i.e(1485), i.e(5456), i.e(7539)]).then(i.bind(i, 55456))
      .then((exports => exports.StudyCompare))), "sexyColors")), (0, h.addStudyInfoToMap)("study_Volume", (0, h.createStudyInfo)((
    () => Promise.all([i.e(8736), i.e(6025), i.e(9378), i.e(1485), i.e(5456), i.e(7539)]).then(i.bind(i, 51106))
      .then((exports => exports.VolumeStudy))))), (0, h.addStudyInfoToMap)("study_VbPVisible", (0, h.createStudyInfo)((() => Promise
      .all([i.e(8736), i.e(6025), i.e(9378), i.e(1485), i.e(5456), i.e(7539)]).then(i.bind(i, 10635)).then((exports => e
        .VbPVisibleWrapper))), "noRotations")), (0, h.addStudyInfoToMap)("study_VbPFixed", (0,
      h.createStudyInfo)((() => Promise.all([i.e(8736), i.e(6025), i.e(9378), i.e(1485), i.e(5456), i.e(7539)]).then(i
      .bind(i, 10635)).then((exports => exports.VolumeProfileStudyWithThemedColors))), "noRotations")), (0, h.addStudyInfoToMap)(
      "study_ScriptWithDataOffset", (0, h.createStudyInfo)((() => Promise.all([i.e(8736), i.e(6025), i.e(9378), i.e(
        1485), i.e(5456), i.e(7539)]).then(i.bind(i, 75848)).then((exports => exports.study_ScriptWithDataOffset))))), n.enabled(
      "moving_average_study_changable_currency_unit") && (0, h.addStudyInfoToMap)("study_Moving Average", (0, h
      .createStudyInfo)((() => Promise.all([i.e(7598), i.e(6025), i.e(9378), i.e(1485), i.e(5248)]).then(i.bind(i,
      45135)).then((exports => exports.study_MovingAverage)))));
    const u = ["studyName", "guiPlotName", "isLinkedToSeries"];

    function _(exports) {
      return u.every((t => t in e))
    }

    function p(exports) {
      return !1
    }

    function m(exports) {
      return e instanceof a.StudyStub
    }

    function g(exports) {
      return !1
    }

    function f(exports) {
      return !1
    }

    function y(exports) {
      return _(exports) && "Overlay@tv-basicstudies" === exports.metaInfo().id
    }

    function v(exports) {
      return y(exports) || _(exports) && "Compare@tv-basicstudies" === exports.metaInfo().id
    }
    let S = 0;

    function b() {
      return S > 0
    }
    async function w(exports, t, i, s, n, r, a, l) {
      let u;
      const _ = 2 === a;
      if (!u) {
        const exports = c(s);
        u = (0, h.getStudyInfoByName)(e ?? "Study") ?? d
      }
      u.studyConstructor || (S += 1, u.studyConstructor = await (0, o.ensureDefined)(u.studyConstructorAsyncGetter)(),
        S -= 1);
      const p = new((0, o.ensureDefined)(u?.studyConstructor))(exports, t, i, s, n, _, !!l);
      return void 0 !== r && p.setId(r), p
    }

    function C(exports) {
      const t = c(exports),
        i = (0, h.getStudyInfoByName)(t);
      return i ? (0, s.default)(i.colorRotationMode) ? i.colorRotationMode(exports) : i.colorRotationMode : void 0 === e
        .pine || r.StudyMetaInfo.isStandardPine(exports.id) ? 1 !== exports.plots.length ? "shift" : "loop" : null
    }

    function T(exports, t) {
      return exports.id === t.id && (s = t, ((i = e).pine ? i.pine.version : void 0) === (s.pine ? s.pine.version : void 0));
      var i, s
    }

    function P(exports) {
      const t = c(exports),
        i = (0, h.getStudyInfoByName)(t);
      if (i) {
        const exports = i.colorRotationComparator;
        if (void 0 !== e) return e
      }
      return T
    }

    function x(exports) {
      return (e ?? []).some((exports => exports.confirm))
    }
    const M = ["Overlay@tv-basicstudies", "CorrelationCoefficient@tv-basicstudies", "Correlation Coeff@tv-basicstudies",
      "Spread@tv-basicstudies", "Ratio@tv-basicstudies"
    ];

    function I(exports) {
      return M.includes(exports.id)
    }