/**
 * ============================================================================
 * TRADINGVIEW MODULE 10544 - ELLIOTT WAVE DRAWING TOOLS
 * ============================================================================
 *
 * Purpose: Elliott Wave pattern drawing tools for technical analysis
 *
 * Size: ~13 KB
 *
 * Key Responsibilities:
 *   1. Elliott Wave Pattern Drawing
 *      - Impulse waves (5-wave patterns: 1-2-3-4-5)
 *      - Correction waves (3-wave patterns: A-B-C)
 *      - Triangle waves (5-wave patterns: A-B-C-D-E)
 *      - Double combo (W-X-Y)
 *      - Triple combo (W-X-Y-X-Z)
 *
 *   2. Wave Degree System
 *      - 15 degrees from Supermillennium to Minuscule
 *      - Visual hierarchy based on wave degree
 *
 * Dependencies:
 *   - 11542: Translation utilities
 *   - 95804: Elliott wave utilities
 *   - 41414: Line drawing source
 *
 * Exports:
 *   - LineToolElliott: Elliott wave line tool
 *   - LineToolElliottCorrection: Elliott correction tool
 *   - LineToolElliottDegree: Wave degree enumeration
 *   - LineToolElliottDoubleCombo: Double combo tool
 *   - LineToolElliottImpulse: Impulse wave tool
 *   - LineToolElliottTriangle: Triangle wave tool
 *   - LineToolElliottTripleCombo: Triple combo tool
 *
 * @module 10544
 * @category Drawing Tools
 * @subcategory Elliott Waves
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.watchedValue_r(moduleConfig, {
    LineToolElliott: () => LineToolElliott,
    LineToolElliottCorrection: () => LineToolElliottCorrection,
    LineToolElliottDegree: () => LineToolElliottDegree,
    LineToolElliottDoubleCombo: () => LineToolElliottDoubleCombo,
    LineToolElliottImpulse: () => LineToolElliottImpulse,
    LineToolElliottTriangle: () => LineToolElliottTriangle,
    LineToolElliottTripleCombo: () => LineToolElliottTripleCombo
  });

  const TranslationUtils = moduleRequire(11542),
    ElliottWaveUtils = moduleRequire(95804),
    LineDrawingSource = moduleRequire(41414);
    var watchedValue_s, watchedValue_o, watchedValue_n = watchedValue_i(11542),
      watchedValue_r = watchedValue_i(95804),
      watchedValue_a = watchedValue_i(41414),
      watchedValue_l = watchedValue_i(41706),
      watchedValue_c = watchedValue_i(78176),
      watchedValue_h = watchedValue_i(65045),
      watchedValue_d = watchedValue_i(13896);
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.Supermillennium = 0] = "Supermillennium", watchedValue_e[watchedValue_e.Millennium = 1] = "Millennium", watchedValue_e[watchedValue_e.Submillennium = 2] =
        "Submillennium", watchedValue_e[watchedValue_e.GrandSupercycle = 3] = "GrandSupercycle", watchedValue_e[watchedValue_e.Supercycle = 4] = "Supercycle", watchedValue_e[watchedValue_e.Cycle = 5] = "Cycle";
    }
          watchedValue_e[watchedValue_e.Primary = 6] = "Primary";
          watchedValue_e[watchedValue_e.Intermediate = 7] = "Intermediate";
          watchedValue_e[watchedValue_e.Minor = 8] = "Minor";
          watchedValue_e[watchedValue_e.Minute = 9] = "Minute";
          watchedValue_e[watchedValue_e.Minuette = 10] = "Minuette";
          watchedValue_e[watchedValue_e.Subminuette = 11] = "Subminuette";
          watchedValue_e[watchedValue_e.Micro = 12] = "Micro";
          watchedValue_e[watchedValue_e.Submicro = 13] = "Submicro";
          watchedValue_e[watchedValue_e.Minuscule = 14] = "Minuscule";
    }(watchedValue_s || (watchedValue_s = {}));
    
    function setDegreeCurrent(watchedValue_e) {
      watchedValue_e[watchedValue_e.Current = 4] = "Current";
    }(watchedValue_o || (watchedValue_o = {}));
    const watchedValue_u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      _ = new watchedValue_r.TranslatedString("change Elliott degree", watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(47977))),
      watchedValue_p = [{
        value: 0,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(3348))
      }, {
        value: 1,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(87957))
      }, {
        value: 2,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(63375))
      }, {
        value: 3,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(57726))
      }, {
        value: 4,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(67948))
      }, {
        value: 5,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(87380))
      }, {
        value: 6,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(59189))
      }, {
        value: 7,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(10268))
      }, {
        value: 8,
        title: watchedValue_n.watchedValue_t(null, {
          context: "wave"
        }, watchedValue_i(51077))
      }, {
        value: 9,
        title: watchedValue_n.watchedValue_t(null, {
          context: "wave"
        }, watchedValue_i(922))
      }, {
        value: 10,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(14724))
      }, {
        value: 11,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(30585))
      }, {
        value: 12,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(24866))
      }, {
        value: 13,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(1145))
      }, {
        value: 14,
        title: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(78273))
      }];
    class watchedValue_m extends watchedValue_a.LineDataSource {
      constructor(watchedValue_e, watchedValue_t, watchedValue_s, watchedValue_o) {
        super(watchedValue_e, watchedValue_t ?? watchedValue_m.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), watchedValue_s, watchedValue_o), this.version = 4, Promise
          .all([watchedValue_i.watchedValue_e(6290), watchedValue_i.watchedValue_e(986), watchedValue_i.watchedValue_e(6668), watchedValue_i.watchedValue_e(1583)]).then(watchedValue_i.bind(watchedValue_i, 60509)).then((watchedValue_e => {
            this._setPaneViews([new watchedValue_e.ElliottLabelsPaneView(this, this._model)])
          }))
      }
      migrateVersion(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (watchedValue_i.properties.hasChild("background") && watchedValue_i.properties.removeProperty("background"), watchedValue_i.properties.hasChild(
            "backgroundColor") && watchedValue_i.properties.removeProperty("backgroundColor"), watchedValue_i.properties.hasChild(
            "showBackground") && watchedValue_i.properties.removeProperty("showBackground"), 1 === watchedValue_e) {
          const watchedValue_e = Object.assign({}, this._timePoint[0]);
          if (this._timePoint.unshift(watchedValue_e), this._points.length > 0) {
            const watchedValue_e = Object.assign({}, this._points[0]);
            this._points.unshift(watchedValue_e)
          }
        }
      }
      applyTemplate(watchedValue_e) {
        const watchedValue_t = watchedValue_e;
        delete watchedValue_t.background, delete watchedValue_t.backgroundColor, delete watchedValue_t.showBackground, super.applyTemplate(watchedValue_e)
      }
      name() {
        return "Elliott Labels"
      }
      async additionalActions(watchedValue_e) {
        return {
          actions: [new watchedValue_l.Action({
            actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
            options: {
              label: watchedValue_n.watchedValue_t(null, void 0, watchedValue_i(23403)),
              subItems: watchedValue_u.map((watchedValue_t => {
                const watchedValue_i = watchedValue_p.filter((watchedValue_e => watchedValue_e.value === watchedValue_t))[0];
                return new watchedValue_l.Action({
                  actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                  options: {
                    label: watchedValue_i.title,
                    checkable: !0,
                    checked: this.properties().childs().degree.value() === watchedValue_t,
                    onExecute: () => {
                      watchedValue_e.setProperty(this.properties().childs().degree, watchedValue_t, _, watchedValue_d
                        .lineToolsDoNotAffectChartInvalidation)
                    }
                  }
                })
              }))
            }
          })],
          placement: "CustomAction"
        }
      }
      label(watchedValue_e) {
        const watchedValue_t = watchedValue_u.length - this.properties().childs().degree.value() - 1,
          watchedValue_i = Math.floor(watchedValue_t / 3);
        return {
          group: watchedValue_i,
          bold: !!(watchedValue_i % 2),
          decoration: ["", "brackets", "circle"][watchedValue_t % 3],
          label: this.labelsGroup()[watchedValue_i][watchedValue_e]
        }
      }
      availableDegreesValues() {
        return watchedValue_p
      }
      static createProperties(watchedValue_e, watchedValue_t) {
        const watchedValue_i = new watchedValue_c.DefaultProperty({
          defaultName: "linetoolelliott",
          state: watchedValue_t,
          theme: watchedValue_e
        });
        return this._configureProperties(watchedValue_i), watchedValue_i
      }
      static migrateState(watchedValue_e) {
        const watchedValue_t = {
            0: 11,
            1: 10,
            2: 9,
            3: 8,
            4: 7,
            5: 6,
            6: 5,
            7: 4,
            8: 3
          },
          watchedValue_i = {
            0: 11,
            1: 8
          };
        "LineToolElliottSubminuette" === watchedValue_e.type && (watchedValue_e.type = "LineToolElliottImpulse", watchedValue_e.state.degree = watchedValue_t[watchedValue_e.state
            .wavesize]), "LineToolElliottMinor" === watchedValue_e.type && (watchedValue_e.type = "LineToolElliottImpulse", watchedValue_e.state.degree =
            watchedValue_t[watchedValue_e.state.wavesize]), "LineToolElliottCircle" === watchedValue_e.type && (watchedValue_e.type = "LineToolElliottImpulse", watchedValue_e.state
            .degree = watchedValue_t[watchedValue_e.state.wavesize]), "LineToolElliottMinorRetr" === watchedValue_e.type && (watchedValue_e.type =
            "LineToolElliottCorrection", watchedValue_e.state.degree = watchedValue_i[watchedValue_e.state.wavesize]), "LineToolElliottMajorRetr" === watchedValue_e
          .type && (watchedValue_e.type = "LineToolElliottCorrection", watchedValue_e.state.degree = watchedValue_i[watchedValue_e.state.wavesize])
      }
      async _getPropertyDefinitionsViewModelClass() {
        return (await Promise.all([watchedValue_i.watchedValue_e(3198), watchedValue_i.watchedValue_e(5410), watchedValue_i.watchedValue_e(2745), watchedValue_i.watchedValue_e(8823), watchedValue_i.watchedValue_e(8537)]).then(watchedValue_i.bind(watchedValue_i, 6238)))
          .ElliottPatternDefinitionsViewModel
      }
      static _configureProperties(watchedValue_e) {
        super._configureProperties(watchedValue_e), watchedValue_e.addChild("linesColors", new watchedValue_h.LineToolColorsProperty([watchedValue_e.childs().color])),
          watchedValue_e.addExcludedKey("linesColors", 3)
      }
    }
    class watchedValue_g extends watchedValue_m {
      pointsCount() {
        return 6
      }
    }
    const watchedValue_f = [
      ["0", "1", "2", "3", "4", "5"],
      ["0", "watchedValue_i", "ii", "iii", "iv", "watchedValue_v"],
      ["0", "1", "2", "3", "4", "5"],
      ["0", "I", "II", "III", "IV", "V"],
      ["0", "1", "2", "3", "4", "5"]
    ];
    class watchedValue_y extends watchedValue_g {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        super(watchedValue_e, watchedValue_t ?? watchedValue_y.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), watchedValue_i, watchedValue_s)
      }
      name() {
        return "Elliott Impulse Wave (12345)"
      }
      labelsGroup() {
        return watchedValue_f
      }
      static createProperties(watchedValue_e, watchedValue_t) {
        const watchedValue_i = new watchedValue_c.DefaultProperty({
          defaultName: "linetoolelliottimpulse",
          state: watchedValue_t,
          theme: watchedValue_e
        });
        return this._configureProperties(watchedValue_i), watchedValue_i
      }
    }
    const watchedValue_v = [
      ["0", "A", "B", "C", "D", "E"],
      ["0", "watchedValue_a", "watchedValue_b", "watchedValue_c", "watchedValue_d", "watchedValue_e"],
      ["0", "A", "B", "C", "D", "E"],
      ["0", "watchedValue_a", "watchedValue_b", "watchedValue_c", "watchedValue_d", "watchedValue_e"],
      ["0", "A", "B", "C", "D", "E"]
    ];
    class S extends watchedValue_g {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        super(watchedValue_e, watchedValue_t ?? S.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), watchedValue_i, watchedValue_s)
      }
      name() {
        return "Elliott Triangle Wave (ABCDE)"
      }
      labelsGroup() {
        return watchedValue_v
      }
      static createProperties(watchedValue_e, watchedValue_t) {
        const watchedValue_i = new watchedValue_c.DefaultProperty({
          defaultName: "linetoolelliotttriangle",
          state: watchedValue_t,
          theme: watchedValue_e
        });
        return this._configureProperties(watchedValue_i), watchedValue_i
      }
    }
    const watchedValue_b = [
      ["0", "W", "X", "Y", "X", "Z"],
      ["0", "watchedValue_w", "watchedValue_x", "watchedValue_y", "watchedValue_x", "watchedValue_z"],
      ["0", "W", "X", "Y", "X", "Z"],
      ["0", "watchedValue_w", "watchedValue_x", "watchedValue_y", "watchedValue_x", "watchedValue_z"],
      ["0", "W", "X", "Y", "X", "Z"]
    ];
    class watchedValue_w extends watchedValue_g {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        super(watchedValue_e, watchedValue_t ?? watchedValue_w.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), watchedValue_i, watchedValue_s)
      }
      name() {
        return "Elliott Triple Combo Wave (WXYXZ)"
      }
      labelsGroup() {
        return watchedValue_b
      }
      static createProperties(watchedValue_e, watchedValue_t) {
        const watchedValue_i = new watchedValue_c.DefaultProperty({
          defaultName: "linetoolelliotttriplecombo",
          state: watchedValue_t,
          theme: watchedValue_e
        });
        return this._configureProperties(watchedValue_i), watchedValue_i
      }
    }
    class C extends watchedValue_m {
      pointsCount() {
        return 4
      }
    }
    const T = [
      ["0", "A", "B", "C"],
      ["0", "watchedValue_a", "watchedValue_b", "watchedValue_c"],
      ["0", "A", "B", "C"],
      ["0", "watchedValue_a", "watchedValue_b", "watchedValue_c"],
      ["0", "A", "B", "C"]
    ];
    class P extends C {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        super(watchedValue_e, watchedValue_t ?? P.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), watchedValue_i, watchedValue_s)
      }
      name() {
        return "Elliott Correction Wave (ABC)"
      }
      labelsGroup() {
        return T
      }
      static createProperties(watchedValue_e, watchedValue_t) {
        const watchedValue_i = new watchedValue_c.DefaultProperty({
          defaultName: "linetoolelliottcorrection",
          state: watchedValue_t,
          theme: watchedValue_e
        });
        return this._configureProperties(watchedValue_i), watchedValue_i
      }
    }
    const watchedValue_x = [
      ["0", "W", "X", "Y"],
      ["0", "watchedValue_w", "watchedValue_x", "watchedValue_y"],
      ["0", "W", "X", "Y"],
      ["0", "watchedValue_w", "watchedValue_x", "watchedValue_y"],
      ["0", "W", "X", "Y"]
    ];
    class M extends C {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        super(watchedValue_e, watchedValue_t ?? M.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), watchedValue_i, watchedValue_s)
      }
      name() {
        return "Elliott Double Combo Wave (WXY)"
      }
      labelsGroup() {
        return watchedValue_x
      }
      static createProperties(watchedValue_e, watchedValue_t) {
        const watchedValue_i = new watchedValue_c.DefaultProperty({
          defaultName: "linetoolelliottdoublecombo",
          state: watchedValue_t,
          theme: watchedValue_e
        });
        return this._configureProperties(watchedValue_i), watchedValue_i
      }
    }