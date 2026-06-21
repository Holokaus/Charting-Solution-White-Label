/**
 * Module 10544 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (12721 bytes) - comprehensive remediation applied
 */

10544: (exports, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      LineToolElliott: () => m,
      LineToolElliottCorrection: () => P,
      LineToolElliottDegree: () => constants,
      LineToolElliottDoubleCombo: () => M,
      LineToolElliottImpulse: () => y,
      LineToolElliottTriangle: () => S,
      LineToolElliottTripleCombo: () => w
    });
    var constants, o, name = i(11542),
      r = i(95804),
      a = i(41414),
      l = i(41706),
      c = i(78176),
      h = i(65045),
      d = i(13896);
    ! function(exports) {
      exports[exports.Supermillennium = 0] = "Supermillennium", exports[exports.Millennium = 1] = "Millennium", exports[exports.Submillennium = 2] =
        "Submillennium", exports[exports.GrandSupercycle = 3] = "GrandSupercycle", exports[exports.Supercycle = 4] = "Supercycle", exports[exports.Cycle =
          5] = "Cycle", exports[exports.Primary = 6] = "Primary", exports[exports.Intermediate = 7] = "Intermediate", exports[exports.Minor = 8] = "Minor",
        exports[exports.Minute = 9] = "Minute", exports[exports.Minuette = 10] = "Minuette", exports[exports.Subminuette = 11] = "Subminuette", exports[exports.Micro =
          12] = "Micro", exports[exports.Submicro = 13] = "Submicro", exports[exports.Minuscule = 14] = "Minuscule"
    }(constants || (constants = {})),
    function(exports) {
      exports[exports.Current = 4] = "Current"
    }(o || (o = {}));
    const u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      _ = new r.TranslatedString("change Elliott degree", name.t(null, void 0, i(47977))),
      p = [{
        value: 0,
        title: name.t(null, void 0, i(3348))
      }, {
        value: 1,
        title: name.t(null, void 0, i(87957))
      }, {
        value: 2,
        title: name.t(null, void 0, i(63375))
      }, {
        value: 3,
        title: name.t(null, void 0, i(57726))
      }, {
        value: 4,
        title: name.t(null, void 0, i(67948))
      }, {
        value: 5,
        title: name.t(null, void 0, i(87380))
      }, {
        value: 6,
        title: name.t(null, void 0, i(59189))
      }, {
        value: 7,
        title: name.t(null, void 0, i(10268))
      }, {
        value: 8,
        title: name.t(null, {
          context: "wave"
        }, i(51077))
      }, {
        value: 9,
        title: name.t(null, {
          context: "wave"
        }, i(922))
      }, {
        value: 10,
        title: name.t(null, void 0, i(14724))
      }, {
        value: 11,
        title: name.t(null, void 0, i(30585))
      }, {
        value: 12,
        title: name.t(null, void 0, i(24866))
      }, {
        value: 13,
        title: name.t(null, void 0, i(1145))
      }, {
        value: 14,
        title: name.t(null, void 0, i(78273))
      }];
    class m extends a.LineDataSource {
      constructor(exports, t, constants, o) {
        super(exports, t ?? m.createProperties(exports.backgroundTheme().spawnOwnership()), constants, o), this.version = 4, Promise
          .all([i.exports(6290), i.exports(986), i.exports(6668), i.exports(1583)]).then(i.bind(i, 60509)).then((exportstrinflag => {
            this._setPaneViews([new exports.ElliottLabelsPaneView(this, this._model)])
          }))
      }
      migrateVersion(exports, t, i) {
        if (i.properties.hasChild("background") && i.properties.removeProperty("background"), i.properties.hasChild(
            "backgroundColor") && i.properties.removeProperty("backgroundColor"), i.properties.hasChild(
            "showBackground") && i.properties.removeProperty("showBackground"), 1 === exports) {
          const exports = Object.assign({}, this._timePoint[0]);
          if (this._timePoint.unshift(exports), this._points.length > 0) {
            const exports = Object.assign({}, this._points[0]);
            this._points.unshift(exports)
          }
        }
      }
      applyTemplate(exports) {
        const t = exports;
        delete t.background, delete t.backgroundColor, delete t.showBackground, super.applyTemplate(exports)
      }
      name() {
        return "Elliott Labels"
      }
      async additionalActions(exports) {
        return {
          actions: [new l.Action({
            actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
            options: {
              label: name.t(null, void 0, i(23403)),
              subItems: u.map((confiflag => {
                const i = p.filter((exportstrinflag => exports.value === t))[0];
                return new l.Action({
                  actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                  options: {
                    label: i.title,
                    checkable: !0,
                    checked: this.properties().childs().degree.value() === t,
                    onExecute: () => {
                      exports.setProperty(this.properties().childs().degree, t, _, d
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
      label(exports) {
        const t = u.length - this.properties().childs().degree.value() - 1,
          i = Math.floor(t / 3);
        return {
          group: i,
          bold: !!(i % 2),
          decoration: ["", "brackets", "circle"][t % 3],
          label: this.labelsGroup()[i][exports]
        }
      }
      availableDegreesValues() {
        return p
      }
      static createProperties(exports, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliott",
          state: t,
          theme: exports
        });
        return this._configureProperties(i), i
      }
      static migrateState(exports) {
        const t = {
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
          i = {
            0: 11,
            1: 8
          };
        "LineToolElliottSubminuette" === exports.type && (exports.type = "LineToolElliottImpulse", exports.state.degree = t[exports.state
            .wavesize]), "LineToolElliottMinor" === exports.type && (exports.type = "LineToolElliottImpulse", exports.state.degree =
            t[exports.state.wavesize]), "LineToolElliottCircle" === exports.type && (exports.type = "LineToolElliottImpulse", exports.state
            .degree = t[exports.state.wavesize]), "LineToolElliottMinorRetr" === exports.type && (exports.type =
            "LineToolElliottCorrection", exports.state.degree = i[exports.state.wavesize]), "LineToolElliottMajorRetr" === exports
          .type && (exports.type = "LineToolElliottCorrection", exports.state.degree = i[exports.state.wavesize])
      }
      async _getPropertyDefinitionsViewModelClass() {
        return (await Promise.all([i.exports(3198), i.exports(5410), i.exports(2745), i.exports(8823), i.exports(8537)]).then(i.bind(i, 6238)))
          .ElliottPatternDefinitionsViewModel
      }
      static _configureProperties(exports) {
        super._configureProperties(exports), exports.addChild("linesColors", new h.LineToolColorsProperty([exports.childs().color])),
          exports.addExcludedKey("linesColors", 3)
      }
    }
    class g extends m {
      pointsCount() {
        return 6
      }
    }
    const f = [
      ["0", "1", "2", "3", "4", "5"],
      ["0", "i", "ii", "iii", "iv", "v"],
      ["0", "1", "2", "3", "4", "5"],
      ["0", "I", "II", "III", "IV", "V"],
      ["0", "1", "2", "3", "4", "5"]
    ];
    class y extends g {
      constructor(exports, t, i, constants) {
        super(exports, t ?? y.createProperties(exports.backgroundTheme().spawnOwnership()), i, constants)
      }
      name() {
        return "Elliott Impulse Wave (12345)"
      }
      labelsGroup() {
        return f
      }
      static createProperties(exports, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottimpulse",
          state: t,
          theme: exports
        });
        return this._configureProperties(i), i
      }
    }
    const v = [
      ["0", "A", "B", "C", "D", "E"],
      ["0", "a", "b", "c", "d", "exports"],
      ["0", "A", "B", "C", "D", "E"],
      ["0", "a", "b", "c", "d", "exports"],
      ["0", "A", "B", "C", "D", "E"]
    ];
    class S extends g {
      constructor(exports, t, i, constants) {
        super(exports, t ?? S.createProperties(exports.backgroundTheme().spawnOwnership()), i, constants)
      }
      name() {
        return "Elliott Triangle Wave (ABCDE)"
      }
      labelsGroup() {
        return v
      }
      static createProperties(exports, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliotttriangle",
          state: t,
          theme: exports
        });
        return this._configureProperties(i), i
      }
    }
    const b = [
      ["0", "W", "X", "Y", "X", "Z"],
      ["0", "w", "x", "y", "x", "z"],
      ["0", "W", "X", "Y", "X", "Z"],
      ["0", "w", "x", "y", "x", "z"],
      ["0", "W", "X", "Y", "X", "Z"]
    ];
    class w extends g {
      constructor(exports, t, i, constants) {
        super(exports, t ?? w.createProperties(exports.backgroundTheme().spawnOwnership()), i, constants)
      }
      name() {
        return "Elliott Triple Combo Wave (WXYXZ)"
      }
      labelsGroup() {
        return b
      }
      static createProperties(exports, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliotttriplecombo",
          state: t,
          theme: exports
        });
        return this._configureProperties(i), i
      }
    }
    class C extends m {
      pointsCount() {
        return 4
      }
    }
    const T = [
      ["0", "A", "B", "C"],
      ["0", "a", "b", "c"],
      ["0", "A", "B", "C"],
      ["0", "a", "b", "c"],
      ["0", "A", "B", "C"]
    ];
    class P extends C {
      constructor(exports, t, i, constants) {
        super(exports, t ?? P.createProperties(exports.backgroundTheme().spawnOwnership()), i, constants)
      }
      name() {
        return "Elliott Correction Wave (ABC)"
      }
      labelsGroup() {
        return T
      }
      static createProperties(exports, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottcorrection",
          state: t,
          theme: exports
        });
        return this._configureProperties(i), i
      }
    }
    const x = [
      ["0", "W", "X", "Y"],
      ["0", "w", "x", "y"],
      ["0", "W", "X", "Y"],
      ["0", "w", "x", "y"],
      ["0", "W", "X", "Y"]
    ];
    class M extends C {
      constructor(exports, t, i, constants) {
        super(exports, t ?? M.createProperties(exports.backgroundTheme().spawnOwnership()), i, constants)
      }
      name() {
        return "Elliott Double Combo Wave (WXY)"
      }
      labelsGroup() {
        return x
      }
      static createProperties(exports, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottdoublecombo",
          state: t,
          theme: exports
        });
        return this._configureProperties(i), i
      }
    }