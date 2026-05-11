/**
 * Module 58570 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

58570: (series_e, series_t, series_i) => {
    "use strict";
    series_i.series_d(series_t, {
      asLineToolName: () => series_f,
      ensureLineToolLoaded: () => series_g,
      getLoadedLineTool: () => series_v,
      isAsyncGenericLineToolName: () => series_d,
      isAsyncStudyLineToolName: () => series_u,
      isLineToolLoaded: () => _,
      loadLineTool: () => series_m,
      loadMetaInfoForLinetoolIfRequired: () => series_y
    });
    var series_s = series_i(50151),
      series_o = series_i(72972),
      series_n = series_i(35107);
    const series_r = new Map;
    const series_a = async series_e => {
      const [series_t, series_s] = await Promise.all([Promise.all([series_i.series_e(2342), series_i.series_e(3952)]).then(series_i.bind(series_i, 85834)), Promise.all([series_i
        .series_e(2342), series_i.series_e(3952)
      ]).then(series_i.bind(series_i, 92483))]), series_o = series_t.LineToolRiskRewardLong, series_n = series_s.LineToolRiskRewardShort;
      return series_r.set("LineToolRiskRewardLong", series_o), series_r.set("LineToolRiskRewardShort", series_n), "LineToolRiskRewardLong" ===
        series_e ? series_o : series_n
    }, series_l = new Map([
      ["LineToolPriceNote", async () => (await Promise.all([series_i.series_e(9426), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(380)]).then(series_i
        .bind(series_i, 97865))).LineToolPriceNote],
      ["LineToolTextNote", async () => (await Promise.all([series_i.series_e(6645), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(986), series_i.series_e(9123)])
        .then(series_i.bind(series_i, 55241))).LineToolTextNote],
      ["LineToolNote", async () => (await Promise.all([series_i.series_e(3355), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(986), series_i.series_e(3248)])
        .then(series_i.bind(series_i, 77977))).LineToolNote],
      ["LineToolFibSpiral", async () => (await Promise.all([series_i.series_e(3181), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(8090)]).then(series_i
        .bind(series_i, 40882))).LineToolFibSpiral],
      ["LineToolCircleLines", async () => (await Promise.all([series_i.series_e(8896), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(9445)]).then(series_i
        .bind(series_i, 75249))).LineToolCyclicLines],
      ["LineToolNoteAbsolute", async () => (await Promise.all([series_i.series_e(3355), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(986), series_i.series_e(
        3248)]).then(series_i.bind(series_i, 77977))).LineToolNoteAbsolute],
      ["LineToolTable", async () => (await Promise.all([series_i.series_e(9494), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(986), series_i.series_e(319)])
        .then(series_i.bind(series_i, 53768))).LineToolTable],
      ["LineToolFibSpeedResistanceArcs", async () => (await Promise.all([series_i.series_e(1427), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(
        986), series_i.series_e(3710)
      ]).then(series_i.bind(series_i, 2709))).LineToolFibSpeedResistanceArcs],
      ["LineToolPitchfan", async () => (await Promise.all([series_i.series_e(7952), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(8823), series_i.series_e(1313)])
        .then(series_i.bind(series_i, 23712))).LineToolPitchfan],
      ["LineToolFibSpeedResistanceFan", async () => (await Promise.all([series_i.series_e(1308), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(
        906)]).then(series_i.bind(series_i, 5352))).LineToolFibSpeedResistanceFan],
      ["LineToolFibWedge", async () => (await Promise.all([series_i.series_e(6760), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(986), series_i.series_e(3314)])
        .then(series_i.bind(series_i, 39653))).LineToolFibWedge],
      ["LineToolEmoji", async () => (await Promise.all([series_i.series_e(6155), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(6668), series_i.series_e(5529)])
        .then(series_i.bind(series_i, 97879))).LineToolEmoji],
      ["LineToolBalloon", async () => (await Promise.all([series_i.series_e(2303), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(2891), series_i.series_e(1277)])
        .then(series_i.bind(series_i, 12891))).LineToolBalloon],
      ["LineToolComment", async () => (await Promise.all([series_i.series_e(2303), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(986), series_i.series_e(2891), series_i
        .series_e(3966)
      ]).then(series_i.bind(series_i, 67046))).LineToolComment],
      ["LineToolBezierCubic", async () => (await Promise.all([series_i.series_e(1432), series_i.series_e(5410), series_i.series_e(2745), series_i.series_e(9014)]).then(series_i
        .bind(series_i, 42318))).LineToolBezierCubic],
      ["LineToolInsidePitchfork", async () => (await Promise.all([series_i.series_e(8763), series_i.series_e(8468)]).then(series_i.bind(series_i, 72298)))
        .LineToolInsidePitchfork]
    ]);
    series_l.set("LineToolFibRetracement", (async () => (await Promise.all([series_i.series_e(7850), series_i.series_e(3723)]).then(series_i.bind(series_i, 91308)))
        .LineToolFibRetracement)), series_l.set("LineToolFibChannel", (async () => (await Promise.all([series_i.series_e(7850), series_i.series_e(2283)])
        .then(series_i.bind(series_i, 5871))).LineToolFibChannel)), series_l.set("LineToolProjection", (async () => (await Promise.all([series_i.series_e(
        7122), series_i.series_e(3945)]).then(series_i.bind(series_i, 11437))).LineToolProjection)), series_l.set("LineToolTrendBasedFibExtension", (
      async () => (await Promise.all([series_i.series_e(7850), series_i.series_e(4731)]).then(series_i.bind(series_i, 1086))).LineToolTrendBasedFibExtension)), series_l
      .set("LineToolElliott", (async () => (await Promise.resolve().then(series_i.bind(series_i, 10544))).LineToolElliott)), series_l.set(
        "LineToolFibCircles", (async () => (await Promise.all([series_i.series_e(7850), series_i.series_e(2816)]).then(series_i.bind(series_i, 33985)))
          .LineToolFibCircles)),
      series_l.set("LineToolVertLine", (async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(1282)]).then(series_i.bind(series_i, 94894)))
        .LineToolVertLine)), series_l.set("LineToolCrossLine", (async () => (await series_i.series_e(7203).then(series_i.bind(series_i, 9431)))
        .LineToolCrossLine)), series_l.set("LineToolBarsPattern", (async () => (await Promise.all([series_i.series_e(4543), series_i.series_e(5206)]).then(
        series_i.bind(series_i, 66807))).LineToolBarsPattern)), series_l.set("LineToolTrendBasedFibTime", (async () => (await Promise.all([series_i
        .series_e(5111), series_i.series_e(7127)
      ]).then(series_i.bind(series_i, 42232))).LineToolTrendBasedFibTime)), series_l.set("LineToolFibTimeZone", (async () => (await Promise
        .all([series_i.series_e(5111), series_i.series_e(1506)]).then(series_i.bind(series_i, 40228))).LineToolFibTimeZone)), series_l.set("LineToolDateRange", (
    async () => (await series_i.series_e(4273).then(series_i.bind(series_i, 65096))).LineToolDateRange)), series_l.set("LineToolPriceRange", (async () => (
        await series_i.series_e(6477).then(series_i.bind(series_i, 27223))).LineToolPriceRange)), series_l.set("LineToolDateAndPriceRange", (async () => (
        await series_i.series_e(1455).then(series_i.bind(series_i, 22003))).LineToolDateAndPriceRange)), series_l.set("LineToolParallelChannel", (
    async () => (await series_i.series_e(2050).then(series_i.bind(series_i, 31191))).LineToolParallelChannel)), series_l.set("LineToolTrendAngle", (
    async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(8372)]).then(series_i.bind(series_i, 75820))).LineToolTrendAngle)), series_l.set(
        "LineToolTrendLine", (async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(8673)]).then(series_i.bind(series_i, 42150)))
          .LineToolTrendLine)), series_l.set("LineToolInfoLine", (async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(7488)]).then(series_i
        .bind(series_i, 43470))).LineToolInfoLine)), series_l.set("LineToolArrowMark", (async () => (await series_i.series_e(569).then(series_i.bind(series_i,
        70214))).LineToolArrowMark)), series_l.set("LineToolGannSquare", (async () => (await series_i.series_e(9478).then(series_i.bind(series_i, 26141)))
        .LineToolGannSquare)), series_l.set("LineToolGannComplex", (async () => (await series_i.series_e(1963).then(series_i.bind(series_i, 68991)))
        .LineToolGannComplex)), series_l.set("LineToolGannFixed", (async () => (await series_i.series_e(6336).then(series_i.bind(series_i, 44934)))
        .LineToolGannFixed)), series_l.set("LineToolGannFan", (async () => (await Promise.all([series_i.series_e(5111), series_i.series_e(4981)]).then(series_i
        .bind(series_i, 646))).LineToolGannFan)), series_l.set("LineToolPitchfork", (async () => (await Promise.all([series_i.series_e(8763), series_i.series_e(
        5055)]).then(series_i.bind(series_i, 7029))).LineToolPitchfork)), series_l.set("LineToolDisjointAngle", (async () => (await series_i.series_e(9581)
        .then(series_i.bind(series_i, 56348))).LineToolDisjointChannel)), series_l.set("LineToolFlatBottom", (async () => (await series_i.series_e(9310)
        .then(series_i.bind(series_i, 28121))).LineToolFlatBottom)), series_l.set("LineToolIcon", (async () => (await series_i.series_e(7806).then(series_i.bind(
        series_i, 37130))).LineToolIcon)), series_l.set("LineToolSticker", (async () => (await series_i.series_e(8949).then(series_i.bind(series_i, 13238)))
        .LineToolSticker)), series_l.set("LineToolRotatedRectangle", (async () => (await series_i.series_e(4015).then(series_i.bind(series_i, 92417)))
        .LineToolRotatedRectangle)), series_l.set("LineToolHeadAndShoulders", (async () => (await series_i.series_e(3378).then(series_i.bind(series_i,
        43684))).LineToolHeadAndShoulders)), series_l.set("LineToolTriangle", (async () => (await series_i.series_e(6432).then(series_i.bind(series_i,
        41160))).LineToolTriangle)), series_l.set("LineToolTrianglePattern", (async () => (await series_i.series_e(3383).then(series_i.bind(series_i,
        94407))).LineToolTrianglePattern)), series_l.set("LineTool5PointsPattern", (async () => (await series_i.series_e(1155).then(series_i.bind(series_i,
        77657))).LineTool5PointsPattern)), series_l.set("LineToolThreeDrivers", (async () => (await series_i.series_e(4602).then(series_i.bind(series_i,
        95400))).LineToolThreeDrivers)),
      series_l.set("LineToolABCD", (async () => (await series_i.series_e(5283).then(series_i.bind(series_i, 21730))).LineToolABCD)), series_l.set(
        "LineToolPolyline", (async () => (await series_i.series_e(3866).then(series_i.bind(series_i, 52982))).LineToolPolyline)), series_l.set(
        "LineToolPath", (async () => (await series_i.series_e(961).then(series_i.bind(series_i, 18441))).LineToolPath)), series_l.set("LineToolPrediction",
        (async () => (await series_i.series_e(9534).then(series_i.bind(series_i, 45372))).LineToolPrediction)), series_l.set("LineToolPriceLabel", (
    async () => (await series_i.series_e(6484).then(series_i.bind(series_i, 60594))).LineToolPriceLabel)), series_l.set("LineToolArrowMarker", (async () =>
        (await series_i.series_e(1470).then(series_i.bind(series_i, 14638))).LineToolArrowMarker)), series_l.set("LineToolSignpost", (async () => (
        await Promise.all([series_i.series_e(7122), series_i.series_e(4674)]).then(series_i.bind(series_i, 4838))).LineToolSignpost)), series_l.set("LineToolBrush", (
        async () => (await series_i.series_e(5122).then(series_i.bind(series_i, 71514))).LineToolBrush)), series_l.set("LineToolArc", (async () => (await series_i
        .series_e(5967).then(series_i.bind(series_i, 20272))).LineToolArc)), series_l.set("LineToolCallout", (async () => (await Promise.all([series_i.series_e(
        7122), series_i.series_e(688)]).then(series_i.bind(series_i, 9587))).LineToolCallout)), series_l.set("LineToolText", (async () => (await Promise
        .all([series_i.series_e(7122), series_i.series_e(2312)]).then(series_i.bind(series_i, 77532))).LineToolText)), series_l.set("LineToolHorzLine", (async () => (
        await Promise.all([series_i.series_e(7122), series_i.series_e(4201)]).then(series_i.bind(series_i, 66605))).LineToolHorzLine)), series_l.set("LineToolHorzRay", (
        async () => (await series_i.series_e(574).then(series_i.bind(series_i, 80102))).LineToolHorzRay)), series_l.set("LineToolRectangle", (async () => (
        await Promise.all([series_i.series_e(7122), series_i.series_e(8422)]).then(series_i.bind(series_i, 22132))).LineToolRectangle)), series_l.set("LineToolCircle", (
        async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(6748)]).then(series_i.bind(series_i, 40283))).LineToolCircle)), series_l.set(
        "LineToolEllipse", (async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(7660)]).then(series_i.bind(series_i, 95121)))
          .LineToolEllipse)), series_l.set("LineToolTimeCycles", (async () => (await series_i.series_e(8334).then(series_i.bind(series_i, 79327)))
        .LineToolTimeCycles)), series_l.set("LineToolSineLine", (async () => (await series_i.series_e(1713).then(series_i.bind(series_i, 49684)))
        .LineToolSineLine)), series_l.set("LineToolGhostFeed", (async () => (await series_i.series_e(7563).then(series_i.bind(series_i, 46350)))
        .LineToolGhostFeed)), series_l.set("LineToolBezierQuadro", (async () => (await series_i.series_e(8061).then(series_i.bind(series_i, 12148)))
        .LineToolBezierQuadro)), series_l.set("LineToolArrow", (async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(8607)]).then(series_i
        .bind(series_i, 81817))).LineToolArrow)), series_l.set("LineToolRay", (async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(4934)])
        .then(series_i.bind(series_i, 94984))).LineToolRay)), series_l.set("LineToolExtended", (async () => (await Promise.all([series_i.series_e(7122), series_i
        .series_e(925)
      ]).then(series_i.bind(series_i, 81951))).LineToolExtended)), series_l.set("LineToolSchiffPitchfork", (async () => (await Promise.all([series_i
        .series_e(8763), series_i.series_e(7175)
      ]).then(series_i.bind(series_i, 28216))).LineToolSchiffPitchfork)), series_l.set("LineToolSchiffPitchfork2", (async () => (
        await Promise.all([series_i.series_e(8763), series_i.series_e(341)]).then(series_i.bind(series_i, 23366))).LineToolSchiffPitchfork2)), series_l.set(
        "LineToolTextAbsolute", (async () => (await Promise.all([series_i.series_e(7122), series_i.series_e(2312)]).then(series_i.bind(series_i, 77532)))
          .LineToolTextAbsolute)), series_l.set("LineToolArrowMarkLeft", (async () => (await series_i.series_e(569).then(series_i.bind(series_i, 70214)))
        .LineToolArrowMarkLeft)), series_l.set("LineToolArrowMarkRight", (async () => (await series_i.series_e(569).then(series_i.bind(series_i, 70214)))
        .LineToolArrowMarkRight)), series_l.set("LineToolArrowMarkUp", (async () => (await series_i.series_e(569).then(series_i.bind(series_i, 70214)))
        .LineToolArrowMarkUp)),
      series_l.set("LineToolArrowMarkDown", (async () => (await series_i.series_e(569).then(series_i.bind(series_i, 70214))).LineToolArrowMarkDown)), series_l
      .set("LineToolFlagMark", (async () => (await series_i.series_e(8820).then(series_i.bind(series_i, 23283))).LineToolFlagMark)), series_l.set(
        "LineToolCypherPattern", (async () => (await series_i.series_e(6740).then(series_i.bind(series_i, 573))).LineToolCypherPattern)), series_l.set(
        "LineToolElliottImpulse", (async () => (await Promise.resolve().then(series_i.bind(series_i, 10544))).LineToolElliottImpulse)
        ), series_l.set("LineToolElliottTriangle", (async () => (await Promise.resolve().then(series_i.bind(series_i, 10544)))
        .LineToolElliottTriangle)), series_l.set("LineToolElliottTripleCombo", (async () => (await Promise.resolve().then(series_i
        .bind(series_i, 10544))).LineToolElliottTripleCombo)), series_l.set("LineToolElliottCorrection", (async () => (await Promise
        .resolve().then(series_i.bind(series_i, 10544))).LineToolElliottCorrection)), series_l.set("LineToolElliottDoubleCombo", (async () =>
        (await Promise.resolve().then(series_i.bind(series_i, 10544))).LineToolElliottDoubleCombo)), series_l.set("LineToolRiskRewardLong", (
        () => series_a("LineToolRiskRewardLong"))), series_l.set("LineToolRiskRewardShort", (() => series_a("LineToolRiskRewardShort"))), series_l
      .set("LineToolPosition", (async () => (await series_i.series_e(1314).then(series_i.series_t.bind(series_i, 69593, 19))).LineToolPosition)), series_l.set(
        "LineToolOrder", (async () => (await series_i.series_e(2232).then(series_i.series_t.bind(series_i, 28837, 19))).LineToolOrder)), series_l.set(
        "LineToolHighlighter", (async () => (await series_i.series_e(2087).then(series_i.bind(series_i, 50991))).LineToolHighlighter)), series_l.set(
        "LineToolImage", (async () => (await Promise.all([series_i.series_e(5402), series_i.series_e(5231)]).then(series_i.bind(series_i, 62414))).LineToolImage)
        ), series_l.set("LineToolExecution", (async () => (await Promise.resolve().then(series_i.bind(series_i, 27593))).LineToolExecution));
    const series_c = new Map,
      series_h = new Map([
        ["LineToolAnchoredVWAP", async () => (await Promise.all([series_i.series_e(6025), series_i.series_e(9378), series_i.series_e(5500)]).then(series_i.bind(series_i,
          55157))).LineToolAnchoredVWAP],
        ["LineToolRegressionTrend", async () => (await series_i.series_e(9748).then(series_i.bind(series_i, 1232))).LineToolRegressionTrend],
        ["LineToolVbPFixed", async () => (await Promise.all([series_i.series_e(6025), series_i.series_e(5695)]).then(series_i.bind(series_i, 71112)))
          .LineToolVbPFixed],
        ["LineToolFixedRangeVolumeProfile", async () => (await Promise.all([series_i.series_e(6025), series_i.series_e(5695)]).then(series_i.bind(series_i,
          57296))).LineToolFixedRangeVolumeProfile]
      ]);

    function series_d(series_e) {
      return series_l.has(series_e) || series_h.has(series_e) || series_r.has(series_e)
    }

    function series_u(series_e) {
      return series_h.has(series_e)
    }

    function _(series_e) {
      return !series_d(series_e) || series_r.has(series_e) || series_c.has(series_e)
    }
    let series_p = 0;
    async function series_m(series_e) {
      if (_(series_e)) return series_v(series_e);
      const series_t = series_u(series_e);
      series_p += 1;
      const series_i = (0, series_s.ensureDefined)((series_t ? series_h : series_l).get(series_e)),
        series_o = await series_i();
      return series_p -= 1, series_t ? (series_c.set(series_e, (0, series_s.ensureDefined)(series_o)), series_v(series_e)) : (series_r.set(series_e, (0, series_s.ensureDefined)(series_o)), series_v(series_e))
    }
    async function series_g(series_e) {
      await series_y(series_e), series_d(series_e) && !_(series_e) && await series_m(series_e)
    }

    function series_f(series_e) {
      return series_e
    }
    async function series_y(series_e) {
      (function(series_e) {
        return ["LineToolRiskRewardLong", "LineToolRiskRewardShort"].includes(series_e), (0, series_n.isStudyLineTool)(series_e) || series_u(series_e)
      })(series_e) && await (0, series_o.studyMetaInfoRepository)().findAllJavaStudies()
    }

    function series_v(series_e) {
      return series_u(series_e) ? (0, series_s.ensureDefined)(series_c.get(series_e), `Study line tool ${series_e}`) : (0, series_s.ensureDefined)(series_r.get(series_e),
        `Line tool ${series_e}`)
    }
}
