/**
 * Module 2088 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2088: (series_e, series_t, series_i) => {
    "use strict";
    series_i.series_d(series_t, {
      createStudy: () => series_w,
      hasConfirmInputs: () => series_x,
      hasPendingStudiesModuleLoading: () => series_b,
      isCompareOrOverlayStudy: () => series_v,
      isESDStudy: () => series_f,
      isFundamentalStudy: () => series_g,
      isOverlayStudy: () => series_y,
      isStudy: () => _,
      isStudyStrategy: () => series_p,
      isStudyStub: () => series_m,
      isSymbolicStudy: () => I,
      studyColorRotationMode: () => C,
      useSameColorRotationComparator: () => P
    });
    var series_s = series_i(88987),
      series_o = series_i(50151),
      series_n = series_i(37103),
      series_r = series_i(19844),
      series_a = series_i(2258);
    const series_l = "study_Internal$STD;Fund_";

    function series_c(series_e) {
      const series_t = "study_" + (series_e.classId || series_e.shortId);
      return series_t.startsWith(series_l) ? series_l : series_t
    }
    var series_h = series_i(62312);
    series_i(72207);
    const series_d = (0, series_h.createStudyInfo)((() => Promise.all([series_i.series_e(8736), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(1485), series_i.series_e(5456), series_i.series_e(
      7539)]).then(series_i.bind(series_i, 11485)).then((series_e => series_e.Study))));
    (0, series_h.addStudyInfoToMap)("Study", series_d), (0, series_h.addStudyInfoToMap)("study_PivotPointsStandard", (0, series_h.createStudyInfo)((
      () => Promise.all([series_i.series_e(8736), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(1485), series_i.series_e(5456), series_i.series_e(7539)]).then(series_i.bind(series_i, 96664))
      .then((series_e => series_e.study_PivotPointsStandard))))), (0, series_h.addStudyInfoToMap)("study_Overlay", (0, series_h.createStudyInfo)((
    () => Promise.all([series_i.series_e(8736), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(1485), series_i.series_e(5456), series_i.series_e(7539)]).then(series_i.bind(series_i, 34771))
      .then((series_e => series_e.study_Overlay))), "sexyColors")), (0, series_h.addStudyInfoToMap)("study_Compare", (0, series_h.createStudyInfo)((
      () => Promise.all([series_i.series_e(8736), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(1485), series_i.series_e(5456), series_i.series_e(7539)]).then(series_i.bind(series_i, 55456))
      .then((series_e => series_e.StudyCompare))), "sexyColors")), (0, series_h.addStudyInfoToMap)("study_Volume", (0, series_h.createStudyInfo)((
    () => Promise.all([series_i.series_e(8736), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(1485), series_i.series_e(5456), series_i.series_e(7539)]).then(series_i.bind(series_i, 51106))
      .then((series_e => series_e.VolumeStudy))))), (0, series_h.addStudyInfoToMap)("study_VbPVisible", (0, series_h.createStudyInfo)((() => Promise
      .all([series_i.series_e(8736), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(1485), series_i.series_e(5456), series_i.series_e(7539)]).then(series_i.bind(series_i, 10635)).then((series_e => series_e
        .VbPVisibleWrapper))), "noRotations")), (0, series_h.addStudyInfoToMap)("study_VbPFixed", (0,
      series_h.createStudyInfo)((() => Promise.all([series_i.series_e(8736), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(1485), series_i.series_e(5456), series_i.series_e(7539)]).then(series_i
      .bind(series_i, 10635)).then((series_e => series_e.VolumeProfileStudyWithThemedColors))), "noRotations")), (0, series_h.addStudyInfoToMap)(
      "study_ScriptWithDataOffset", (0, series_h.createStudyInfo)((() => Promise.all([series_i.series_e(8736), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(
        1485), series_i.series_e(5456), series_i.series_e(7539)]).then(series_i.bind(series_i, 75848)).then((series_e => series_e.study_ScriptWithDataOffset))))), series_n.enabled(
      "moving_average_study_changable_currency_unit") && (0, series_h.addStudyInfoToMap)("study_Moving Average", (0, series_h
      .createStudyInfo)((() => Promise.all([series_i.series_e(7598), series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(1485), series_i.series_e(5248)]).then(series_i.bind(series_i,
      45135)).then((series_e => series_e.study_MovingAverage)))));
    const series_u = ["studyName", "guiPlotName", "isLinkedToSeries"];

    function _(series_e) {
      return series_u.every((series_t => series_t in series_e))
    }

    function series_p(series_e) {
      return !1
    }

    function series_m(series_e) {
      return series_e instanceof series_a.StudyStub
    }

    function series_g(series_e) {
      return !1
    }

    function series_f(series_e) {
      return !1
    }

    function series_y(series_e) {
      return _(series_e) && "Overlay@tv-basicstudies" === series_e.metaInfo().id
    }

    function series_v(series_e) {
      return series_y(series_e) || _(series_e) && "Compare@tv-basicstudies" === series_e.metaInfo().id
    }
    let S = 0;

    function series_b() {
      return S > 0
    }
    async function series_w(series_e, series_t, series_i, series_s, series_n, series_r, series_a, series_l) {
      let series_u;
      const _ = 2 === series_a;
      if (!series_u) {
        const series_e = series_c(series_s);
        series_u = (0, series_h.getStudyInfoByName)(series_e ?? "Study") ?? series_d
      }
      series_u.studyConstructor || (S += 1, series_u.studyConstructor = await (0, series_o.ensureDefined)(series_u.studyConstructorAsyncGetter)(),
        S -= 1);
      const series_p = new((0, series_o.ensureDefined)(series_u?.studyConstructor))(series_e, series_t, series_i, series_s, series_n, _, !!series_l);
      return void 0 !== series_r && series_p.setId(series_r), series_p
    }

    function C(series_e) {
      const series_t = series_c(series_e),
        series_i = (0, series_h.getStudyInfoByName)(series_t);
      return series_i ? (0, series_s.default)(series_i.colorRotationMode) ? series_i.colorRotationMode(series_e) : series_i.colorRotationMode : void 0 === series_e
        .pine || series_r.StudyMetaInfo.isStandardPine(series_e.id) ? 1 !== series_e.plots.length ? "shift" : "loop" : null
    }

    function T(series_e, series_t) {
      return series_e.id === series_t.id && (series_s = series_t, ((series_i = series_e).pine ? series_i.pine.version : void 0) === (series_s.pine ? series_s.pine.version : void 0));
      var series_i, series_s
    }

    function P(series_e) {
      const series_t = series_c(series_e),
        series_i = (0, series_h.getStudyInfoByName)(series_t);
      if (series_i) {
        const series_e = series_i.colorRotationComparator;
        if (void 0 !== series_e) return series_e
      }
      return T
    }

    function series_x(series_e) {
      return (series_e ?? []).some((series_e => series_e.confirm))
    }
    const M = ["Overlay@tv-basicstudies", "CorrelationCoefficient@tv-basicstudies", "Correlation Coeff@tv-basicstudies",
      "Spread@tv-basicstudies", "Ratio@tv-basicstudies"
    ];

    function I(series_e) {
      return M.includes(series_e.id)
    }