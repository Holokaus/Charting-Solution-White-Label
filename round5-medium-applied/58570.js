/**
 * Module 58570 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

58570: (series_e, series_t, i) => {
    "use strict";
    i.d(series_t, {
      asLineToolName: () => f,
      ensureLineToolLoaded: () => g,
      getLoadedLineTool: () => v,
      isAsyncGenericLineToolName: () => d,
      isAsyncStudyLineToolName: () => u,
      isLineToolLoaded: () => _,
      loadLineTool: () => m,
      loadMetaInfoForLinetoolIfRequired: () => y
    });
    var series_s = i(50151),
      o = i(72972),
      series_n = i(35107);
    const r = new Map;
    const series_a = async series_e => {
      const [series_t, series_s] = await Promise.all([Promise.all([i.series_e(2342), i.series_e(3952)]).then(i.bind(i, 85834)), Promise.all([i
        .series_e(2342), i.series_e(3952)
      ]).then(i.bind(i, 92483))]), o = series_t.LineToolRiskRewardLong, series_n = series_s.LineToolRiskRewardShort;
      return r.set("LineToolRiskRewardLong", o), r.set("LineToolRiskRewardShort", series_n), "LineToolRiskRewardLong" ===
        series_e ? o : series_n
    }, l = new Map([
      ["LineToolPriceNote", async () => (await Promise.all([i.series_e(9426), i.series_e(5410), i.series_e(2745), i.series_e(380)]).then(i
        .bind(i, 97865))).LineToolPriceNote],
      ["LineToolTextNote", async () => (await Promise.all([i.series_e(6645), i.series_e(5410), i.series_e(2745), i.series_e(986), i.series_e(9123)])
        .then(i.bind(i, 55241))).LineToolTextNote],
      ["LineToolNote", async () => (await Promise.all([i.series_e(3355), i.series_e(5410), i.series_e(2745), i.series_e(986), i.series_e(3248)])
        .then(i.bind(i, 77977))).LineToolNote],
      ["LineToolFibSpiral", async () => (await Promise.all([i.series_e(3181), i.series_e(5410), i.series_e(2745), i.series_e(8090)]).then(i
        .bind(i, 40882))).LineToolFibSpiral],
      ["LineToolCircleLines", async () => (await Promise.all([i.series_e(8896), i.series_e(5410), i.series_e(2745), i.series_e(9445)]).then(i
        .bind(i, 75249))).LineToolCyclicLines],
      ["LineToolNoteAbsolute", async () => (await Promise.all([i.series_e(3355), i.series_e(5410), i.series_e(2745), i.series_e(986), i.series_e(
        3248)]).then(i.bind(i, 77977))).LineToolNoteAbsolute],
      ["LineToolTable", async () => (await Promise.all([i.series_e(9494), i.series_e(5410), i.series_e(2745), i.series_e(986), i.series_e(319)])
        .then(i.bind(i, 53768))).LineToolTable],
      ["LineToolFibSpeedResistanceArcs", async () => (await Promise.all([i.series_e(1427), i.series_e(5410), i.series_e(2745), i.series_e(
        986), i.series_e(3710)
      ]).then(i.bind(i, 2709))).LineToolFibSpeedResistanceArcs],
      ["LineToolPitchfan", async () => (await Promise.all([i.series_e(7952), i.series_e(5410), i.series_e(2745), i.series_e(8823), i.series_e(1313)])
        .then(i.bind(i, 23712))).LineToolPitchfan],
      ["LineToolFibSpeedResistanceFan", async () => (await Promise.all([i.series_e(1308), i.series_e(5410), i.series_e(2745), i.series_e(
        906)]).then(i.bind(i, 5352))).LineToolFibSpeedResistanceFan],
      ["LineToolFibWedge", async () => (await Promise.all([i.series_e(6760), i.series_e(5410), i.series_e(2745), i.series_e(986), i.series_e(3314)])
        .then(i.bind(i, 39653))).LineToolFibWedge],
      ["LineToolEmoji", async () => (await Promise.all([i.series_e(6155), i.series_e(5410), i.series_e(2745), i.series_e(6668), i.series_e(5529)])
        .then(i.bind(i, 97879))).LineToolEmoji],
      ["LineToolBalloon", async () => (await Promise.all([i.series_e(2303), i.series_e(5410), i.series_e(2745), i.series_e(2891), i.series_e(1277)])
        .then(i.bind(i, 12891))).LineToolBalloon],
      ["LineToolComment", async () => (await Promise.all([i.series_e(2303), i.series_e(5410), i.series_e(2745), i.series_e(986), i.series_e(2891), i
        .series_e(3966)
      ]).then(i.bind(i, 67046))).LineToolComment],
      ["LineToolBezierCubic", async () => (await Promise.all([i.series_e(1432), i.series_e(5410), i.series_e(2745), i.series_e(9014)]).then(i
        .bind(i, 42318))).LineToolBezierCubic],
      ["LineToolInsidePitchfork", async () => (await Promise.all([i.series_e(8763), i.series_e(8468)]).then(i.bind(i, 72298)))
        .LineToolInsidePitchfork]
    ]);
    l.set("LineToolFibRetracement", (async () => (await Promise.all([i.series_e(7850), i.series_e(3723)]).then(i.bind(i, 91308)))
        .LineToolFibRetracement)), l.set("LineToolFibChannel", (async () => (await Promise.all([i.series_e(7850), i.series_e(2283)])
        .then(i.bind(i, 5871))).LineToolFibChannel)), l.set("LineToolProjection", (async () => (await Promise.all([i.series_e(
        7122), i.series_e(3945)]).then(i.bind(i, 11437))).LineToolProjection)), l.set("LineToolTrendBasedFibExtension", (
      async () => (await Promise.all([i.series_e(7850), i.series_e(4731)]).then(i.bind(i, 1086))).LineToolTrendBasedFibExtension)), l
      .set("LineToolElliott", (async () => (await Promise.resolve().then(i.bind(i, 10544))).LineToolElliott)), l.set(
        "LineToolFibCircles", (async () => (await Promise.all([i.series_e(7850), i.series_e(2816)]).then(i.bind(i, 33985)))
          .LineToolFibCircles)),
      l.set("LineToolVertLine", (async () => (await Promise.all([i.series_e(7122), i.series_e(1282)]).then(i.bind(i, 94894)))
        .LineToolVertLine)), l.set("LineToolCrossLine", (async () => (await i.series_e(7203).then(i.bind(i, 9431)))
        .LineToolCrossLine)), l.set("LineToolBarsPattern", (async () => (await Promise.all([i.series_e(4543), i.series_e(5206)]).then(
        i.bind(i, 66807))).LineToolBarsPattern)), l.set("LineToolTrendBasedFibTime", (async () => (await Promise.all([i
        .series_e(5111), i.series_e(7127)
      ]).then(i.bind(i, 42232))).LineToolTrendBasedFibTime)), l.set("LineToolFibTimeZone", (async () => (await Promise
        .all([i.series_e(5111), i.series_e(1506)]).then(i.bind(i, 40228))).LineToolFibTimeZone)), l.set("LineToolDateRange", (
    async () => (await i.series_e(4273).then(i.bind(i, 65096))).LineToolDateRange)), l.set("LineToolPriceRange", (async () => (
        await i.series_e(6477).then(i.bind(i, 27223))).LineToolPriceRange)), l.set("LineToolDateAndPriceRange", (async () => (
        await i.series_e(1455).then(i.bind(i, 22003))).LineToolDateAndPriceRange)), l.set("LineToolParallelChannel", (
    async () => (await i.series_e(2050).then(i.bind(i, 31191))).LineToolParallelChannel)), l.set("LineToolTrendAngle", (
    async () => (await Promise.all([i.series_e(7122), i.series_e(8372)]).then(i.bind(i, 75820))).LineToolTrendAngle)), l.set(
        "LineToolTrendLine", (async () => (await Promise.all([i.series_e(7122), i.series_e(8673)]).then(i.bind(i, 42150)))
          .LineToolTrendLine)), l.set("LineToolInfoLine", (async () => (await Promise.all([i.series_e(7122), i.series_e(7488)]).then(i
        .bind(i, 43470))).LineToolInfoLine)), l.set("LineToolArrowMark", (async () => (await i.series_e(569).then(i.bind(i,
        70214))).LineToolArrowMark)), l.set("LineToolGannSquare", (async () => (await i.series_e(9478).then(i.bind(i, 26141)))
        .LineToolGannSquare)), l.set("LineToolGannComplex", (async () => (await i.series_e(1963).then(i.bind(i, 68991)))
        .LineToolGannComplex)), l.set("LineToolGannFixed", (async () => (await i.series_e(6336).then(i.bind(i, 44934)))
        .LineToolGannFixed)), l.set("LineToolGannFan", (async () => (await Promise.all([i.series_e(5111), i.series_e(4981)]).then(i
        .bind(i, 646))).LineToolGannFan)), l.set("LineToolPitchfork", (async () => (await Promise.all([i.series_e(8763), i.series_e(
        5055)]).then(i.bind(i, 7029))).LineToolPitchfork)), l.set("LineToolDisjointAngle", (async () => (await i.series_e(9581)
        .then(i.bind(i, 56348))).LineToolDisjointChannel)), l.set("LineToolFlatBottom", (async () => (await i.series_e(9310)
        .then(i.bind(i, 28121))).LineToolFlatBottom)), l.set("LineToolIcon", (async () => (await i.series_e(7806).then(i.bind(
        i, 37130))).LineToolIcon)), l.set("LineToolSticker", (async () => (await i.series_e(8949).then(i.bind(i, 13238)))
        .LineToolSticker)), l.set("LineToolRotatedRectangle", (async () => (await i.series_e(4015).then(i.bind(i, 92417)))
        .LineToolRotatedRectangle)), l.set("LineToolHeadAndShoulders", (async () => (await i.series_e(3378).then(i.bind(i,
        43684))).LineToolHeadAndShoulders)), l.set("LineToolTriangle", (async () => (await i.series_e(6432).then(i.bind(i,
        41160))).LineToolTriangle)), l.set("LineToolTrianglePattern", (async () => (await i.series_e(3383).then(i.bind(i,
        94407))).LineToolTrianglePattern)), l.set("LineTool5PointsPattern", (async () => (await i.series_e(1155).then(i.bind(i,
        77657))).LineTool5PointsPattern)), l.set("LineToolThreeDrivers", (async () => (await i.series_e(4602).then(i.bind(i,
        95400))).LineToolThreeDrivers)),
      l.set("LineToolABCD", (async () => (await i.series_e(5283).then(i.bind(i, 21730))).LineToolABCD)), l.set(
        "LineToolPolyline", (async () => (await i.series_e(3866).then(i.bind(i, 52982))).LineToolPolyline)), l.set(
        "LineToolPath", (async () => (await i.series_e(961).then(i.bind(i, 18441))).LineToolPath)), l.set("LineToolPrediction",
        (async () => (await i.series_e(9534).then(i.bind(i, 45372))).LineToolPrediction)), l.set("LineToolPriceLabel", (
    async () => (await i.series_e(6484).then(i.bind(i, 60594))).LineToolPriceLabel)), l.set("LineToolArrowMarker", (async () =>
        (await i.series_e(1470).then(i.bind(i, 14638))).LineToolArrowMarker)), l.set("LineToolSignpost", (async () => (
        await Promise.all([i.series_e(7122), i.series_e(4674)]).then(i.bind(i, 4838))).LineToolSignpost)), l.set("LineToolBrush", (
        async () => (await i.series_e(5122).then(i.bind(i, 71514))).LineToolBrush)), l.set("LineToolArc", (async () => (await i
        .series_e(5967).then(i.bind(i, 20272))).LineToolArc)), l.set("LineToolCallout", (async () => (await Promise.all([i.series_e(
        7122), i.series_e(688)]).then(i.bind(i, 9587))).LineToolCallout)), l.set("LineToolText", (async () => (await Promise
        .all([i.series_e(7122), i.series_e(2312)]).then(i.bind(i, 77532))).LineToolText)), l.set("LineToolHorzLine", (async () => (
        await Promise.all([i.series_e(7122), i.series_e(4201)]).then(i.bind(i, 66605))).LineToolHorzLine)), l.set("LineToolHorzRay", (
        async () => (await i.series_e(574).then(i.bind(i, 80102))).LineToolHorzRay)), l.set("LineToolRectangle", (async () => (
        await Promise.all([i.series_e(7122), i.series_e(8422)]).then(i.bind(i, 22132))).LineToolRectangle)), l.set("LineToolCircle", (
        async () => (await Promise.all([i.series_e(7122), i.series_e(6748)]).then(i.bind(i, 40283))).LineToolCircle)), l.set(
        "LineToolEllipse", (async () => (await Promise.all([i.series_e(7122), i.series_e(7660)]).then(i.bind(i, 95121)))
          .LineToolEllipse)), l.set("LineToolTimeCycles", (async () => (await i.series_e(8334).then(i.bind(i, 79327)))
        .LineToolTimeCycles)), l.set("LineToolSineLine", (async () => (await i.series_e(1713).then(i.bind(i, 49684)))
        .LineToolSineLine)), l.set("LineToolGhostFeed", (async () => (await i.series_e(7563).then(i.bind(i, 46350)))
        .LineToolGhostFeed)), l.set("LineToolBezierQuadro", (async () => (await i.series_e(8061).then(i.bind(i, 12148)))
        .LineToolBezierQuadro)), l.set("LineToolArrow", (async () => (await Promise.all([i.series_e(7122), i.series_e(8607)]).then(i
        .bind(i, 81817))).LineToolArrow)), l.set("LineToolRay", (async () => (await Promise.all([i.series_e(7122), i.series_e(4934)])
        .then(i.bind(i, 94984))).LineToolRay)), l.set("LineToolExtended", (async () => (await Promise.all([i.series_e(7122), i
        .series_e(925)
      ]).then(i.bind(i, 81951))).LineToolExtended)), l.set("LineToolSchiffPitchfork", (async () => (await Promise.all([i
        .series_e(8763), i.series_e(7175)
      ]).then(i.bind(i, 28216))).LineToolSchiffPitchfork)), l.set("LineToolSchiffPitchfork2", (async () => (
        await Promise.all([i.series_e(8763), i.series_e(341)]).then(i.bind(i, 23366))).LineToolSchiffPitchfork2)), l.set(
        "LineToolTextAbsolute", (async () => (await Promise.all([i.series_e(7122), i.series_e(2312)]).then(i.bind(i, 77532)))
          .LineToolTextAbsolute)), l.set("LineToolArrowMarkLeft", (async () => (await i.series_e(569).then(i.bind(i, 70214)))
        .LineToolArrowMarkLeft)), l.set("LineToolArrowMarkRight", (async () => (await i.series_e(569).then(i.bind(i, 70214)))
        .LineToolArrowMarkRight)), l.set("LineToolArrowMarkUp", (async () => (await i.series_e(569).then(i.bind(i, 70214)))
        .LineToolArrowMarkUp)),
      l.set("LineToolArrowMarkDown", (async () => (await i.series_e(569).then(i.bind(i, 70214))).LineToolArrowMarkDown)), l
      .set("LineToolFlagMark", (async () => (await i.series_e(8820).then(i.bind(i, 23283))).LineToolFlagMark)), l.set(
        "LineToolCypherPattern", (async () => (await i.series_e(6740).then(i.bind(i, 573))).LineToolCypherPattern)), l.set(
        "LineToolElliottImpulse", (async () => (await Promise.resolve().then(i.bind(i, 10544))).LineToolElliottImpulse)
        ), l.set("LineToolElliottTriangle", (async () => (await Promise.resolve().then(i.bind(i, 10544)))
        .LineToolElliottTriangle)), l.set("LineToolElliottTripleCombo", (async () => (await Promise.resolve().then(i
        .bind(i, 10544))).LineToolElliottTripleCombo)), l.set("LineToolElliottCorrection", (async () => (await Promise
        .resolve().then(i.bind(i, 10544))).LineToolElliottCorrection)), l.set("LineToolElliottDoubleCombo", (async () =>
        (await Promise.resolve().then(i.bind(i, 10544))).LineToolElliottDoubleCombo)), l.set("LineToolRiskRewardLong", (
        () => series_a("LineToolRiskRewardLong"))), l.set("LineToolRiskRewardShort", (() => series_a("LineToolRiskRewardShort"))), l
      .set("LineToolPosition", (async () => (await i.series_e(1314).then(i.series_t.bind(i, 69593, 19))).LineToolPosition)), l.set(
        "LineToolOrder", (async () => (await i.series_e(2232).then(i.series_t.bind(i, 28837, 19))).LineToolOrder)), l.set(
        "LineToolHighlighter", (async () => (await i.series_e(2087).then(i.bind(i, 50991))).LineToolHighlighter)), l.set(
        "LineToolImage", (async () => (await Promise.all([i.series_e(5402), i.series_e(5231)]).then(i.bind(i, 62414))).LineToolImage)
        ), l.set("LineToolExecution", (async () => (await Promise.resolve().then(i.bind(i, 27593))).LineToolExecution));
    const c = new Map,
      h = new Map([
        ["LineToolAnchoredVWAP", async () => (await Promise.all([i.series_e(6025), i.series_e(9378), i.series_e(5500)]).then(i.bind(i,
          55157))).LineToolAnchoredVWAP],
        ["LineToolRegressionTrend", async () => (await i.series_e(9748).then(i.bind(i, 1232))).LineToolRegressionTrend],
        ["LineToolVbPFixed", async () => (await Promise.all([i.series_e(6025), i.series_e(5695)]).then(i.bind(i, 71112)))
          .LineToolVbPFixed],
        ["LineToolFixedRangeVolumeProfile", async () => (await Promise.all([i.series_e(6025), i.series_e(5695)]).then(i.bind(i,
          57296))).LineToolFixedRangeVolumeProfile]
      ]);

    function d(series_e) {
      return l.has(series_e) || h.has(series_e) || r.has(series_e)
    }

    function u(series_e) {
      return h.has(series_e)
    }

    function _(series_e) {
      return !d(series_e) || r.has(series_e) || c.has(series_e)
    }
    let p = 0;
    async function m(series_e) {
      if (_(series_e)) return v(series_e);
      const series_t = u(series_e);
      p += 1;
      const i = (0, series_s.ensureDefined)((series_t ? h : l).get(series_e)),
        o = await i();
      return p -= 1, series_t ? (c.set(series_e, (0, series_s.ensureDefined)(o)), v(series_e)) : (r.set(series_e, (0, series_s.ensureDefined)(o)), v(series_e))
    }
    async function g(series_e) {
      await y(series_e), d(series_e) && !_(series_e) && await m(series_e)
    }

    function f(series_e) {
      return series_e
    }
    async function y(series_e) {
      (function(series_e) {
        return ["LineToolRiskRewardLong", "LineToolRiskRewardShort"].includes(series_e), (0, series_n.isStudyLineTool)(series_e) || u(series_e)
      })(series_e) && await (0, o.studyMetaInfoRepository)().findAllJavaStudies()
    }

    function v(series_e) {
      return u(series_e) ? (0, series_s.ensureDefined)(c.get(series_e), `Study line tool ${series_e}`) : (0, series_s.ensureDefined)(r.get(series_e),
        `Line tool ${series_e}`)
    }