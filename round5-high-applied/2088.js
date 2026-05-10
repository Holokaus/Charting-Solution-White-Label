/**
 * Module 2088 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2088: (series_e, t, i) => {
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
      isStudyStub: () => m,
      isSymbolicStudy: () => I,
      studyColorRotationMode: () => C,
      useSameColorRotationComparator: () => P
    });
    var series_s = i(88987),
      o = i(50151),
      n = i(37103),
      r = i(19844),
      series_a = i(2258);
    const l = "study_Internal$STD;Fund_";

    function c(series_e) {
      const t = "study_" + (series_e.classId || series_e.shortId);
      return t.startsWith(l) ? l : t
    }
    var h = i(62312);
    i(72207);
    const d = (0, h.createStudyInfo)((() => Promise.all([i.series_e(8736), i.series_e(6025), i.series_e(9378), i.series_e(1485), i.series_e(5456), i.series_e(
      7539)]).then(i.bind(i, 11485)).then((series_e => series_e.Study))));
    (0, h.addStudyInfoToMap)("Study", d), (0, h.addStudyInfoToMap)("study_PivotPointsStandard", (0, h.createStudyInfo)((
      () => Promise.all([i.series_e(8736), i.series_e(6025), i.series_e(9378), i.series_e(1485), i.series_e(5456), i.series_e(7539)]).then(i.bind(i, 96664))
      .then((series_e => series_e.study_PivotPointsStandard))))), (0, h.addStudyInfoToMap)("study_Overlay", (0, h.createStudyInfo)((
    () => Promise.all([i.series_e(8736), i.series_e(6025), i.series_e(9378), i.series_e(1485), i.series_e(5456), i.series_e(7539)]).then(i.bind(i, 34771))
      .then((series_e => series_e.study_Overlay))), "sexyColors")), (0, h.addStudyInfoToMap)("study_Compare", (0, h.createStudyInfo)((
      () => Promise.all([i.series_e(8736), i.series_e(6025), i.series_e(9378), i.series_e(1485), i.series_e(5456), i.series_e(7539)]).then(i.bind(i, 55456))
      .then((series_e => series_e.StudyCompare))), "sexyColors")), (0, h.addStudyInfoToMap)("study_Volume", (0, h.createStudyInfo)((
    () => Promise.all([i.series_e(8736), i.series_e(6025), i.series_e(9378), i.series_e(1485), i.series_e(5456), i.series_e(7539)]).then(i.bind(i, 51106))
      .then((series_e => series_e.VolumeStudy))))), (0, h.addStudyInfoToMap)("study_VbPVisible", (0, h.createStudyInfo)((() => Promise
      .all([i.series_e(8736), i.series_e(6025), i.series_e(9378), i.series_e(1485), i.series_e(5456), i.series_e(7539)]).then(i.bind(i, 10635)).then((series_e => series_e
        .VbPVisibleWrapper))), "noRotations")), (0, h.addStudyInfoToMap)("study_VbPFixed", (0,
      h.createStudyInfo)((() => Promise.all([i.series_e(8736), i.series_e(6025), i.series_e(9378), i.series_e(1485), i.series_e(5456), i.series_e(7539)]).then(i
      .bind(i, 10635)).then((series_e => series_e.VolumeProfileStudyWithThemedColors))), "noRotations")), (0, h.addStudyInfoToMap)(
      "study_ScriptWithDataOffset", (0, h.createStudyInfo)((() => Promise.all([i.series_e(8736), i.series_e(6025), i.series_e(9378), i.series_e(
        1485), i.series_e(5456), i.series_e(7539)]).then(i.bind(i, 75848)).then((series_e => series_e.study_ScriptWithDataOffset))))), n.enabled(
      "moving_average_study_changable_currency_unit") && (0, h.addStudyInfoToMap)("study_Moving Average", (0, h
      .createStudyInfo)((() => Promise.all([i.series_e(7598), i.series_e(6025), i.series_e(9378), i.series_e(1485), i.series_e(5248)]).then(i.bind(i,
      45135)).then((series_e => series_e.study_MovingAverage)))));
    const u = ["studyName", "guiPlotName", "isLinkedToSeries"];

    function _(series_e) {
      return u.every((t => t in series_e))
    }

    function p(series_e) {
      return !1
    }

    function m(series_e) {
      return series_e instanceof series_a.StudyStub
    }

    function g(series_e) {
      return !1
    }

    function f(series_e) {
      return !1
    }

    function y(series_e) {
      return _(series_e) && "Overlay@tv-basicstudies" === series_e.metaInfo().id
    }

    function v(series_e) {
      return y(series_e) || _(series_e) && "Compare@tv-basicstudies" === series_e.metaInfo().id
    }
    let S = 0;

    function b() {
      return S > 0
    }
    async function w(series_e, t, i, series_s, n, r, series_a, l) {
      let u;
      const _ = 2 === series_a;
      if (!u) {
        const series_e = c(series_s);
        u = (0, h.getStudyInfoByName)(series_e ?? "Study") ?? d
      }
      u.studyConstructor || (S += 1, u.studyConstructor = await (0, o.ensureDefined)(u.studyConstructorAsyncGetter)(),
        S -= 1);
      const p = new((0, o.ensureDefined)(u?.studyConstructor))(series_e, t, i, series_s, n, _, !!l);
      return void 0 !== r && p.setId(r), p
    }

    function C(series_e) {
      const t = c(series_e),
        i = (0, h.getStudyInfoByName)(t);
      return i ? (0, series_s.default)(i.colorRotationMode) ? i.colorRotationMode(series_e) : i.colorRotationMode : void 0 === series_e
        .pine || r.StudyMetaInfo.isStandardPine(series_e.id) ? 1 !== series_e.plots.length ? "shift" : "loop" : null
    }

    function T(series_e, t) {
      return series_e.id === t.id && (series_s = t, ((i = series_e).pine ? i.pine.version : void 0) === (series_s.pine ? series_s.pine.version : void 0));
      var i, series_s
    }

    function P(series_e) {
      const t = c(series_e),
        i = (0, h.getStudyInfoByName)(t);
      if (i) {
        const series_e = i.colorRotationComparator;
        if (void 0 !== series_e) return series_e
      }
      return T
    }

    function x(series_e) {
      return (series_e ?? []).some((series_e => series_e.confirm))
    }
    const M = ["Overlay@tv-basicstudies", "CorrelationCoefficient@tv-basicstudies", "Correlation Coeff@tv-basicstudies",
      "Spread@tv-basicstudies", "Ratio@tv-basicstudies"
    ];

    function I(series_e) {
      return M.includes(series_e.id)
    }
}
