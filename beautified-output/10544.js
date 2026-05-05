/**
 * Module 10544 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

10544: (e, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      LineToolElliott: () => m,
      LineToolElliottCorrection: () => P,
      LineToolElliottDegree: () => s,
      LineToolElliottDoubleCombo: () => M,
      LineToolElliottImpulse: () => y,
      LineToolElliottTriangle: () => S,
      LineToolElliottTripleCombo: () => w
    });
    var s, o, n = i(11542),
      r = i(95804),
      a = i(41414),
      l = i(41706),
      c = i(78176),
      h = i(65045),
      d = i(13896);
    ! function(e) {
      e[e.Supermillennium = 0] = "Supermillennium", e[e.Millennium = 1] = "Millennium", e[e.Submillennium = 2] =
        "Submillennium", e[e.GrandSupercycle = 3] = "GrandSupercycle", e[e.Supercycle = 4] = "Supercycle", e[e.Cycle =
          5] = "Cycle", e[e.Primary = 6] = "Primary", e[e.Intermediate = 7] = "Intermediate", e[e.Minor = 8] = "Minor",
        e[e.Minute = 9] = "Minute", e[e.Minuette = 10] = "Minuette", e[e.Subminuette = 11] = "Subminuette", e[e.Micro =
          12] = "Micro", e[e.Submicro = 13] = "Submicro", e[e.Minuscule = 14] = "Minuscule"
    }(s || (s = {})),
    function(e) {
      e[e.Current = 4] = "Current"
    }(o || (o = {}));
    const u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      _ = new r.TranslatedString("change Elliott degree", n.t(null, void 0, i(47977))),
      p = [{
        value: 0,
        title: n.t(null, void 0, i(3348))
      }, {
        value: 1,
        title: n.t(null, void 0, i(87957))
      }, {
        value: 2,
        title: n.t(null, void 0, i(63375))
      }, {
        value: 3,
        title: n.t(null, void 0, i(57726))
      }, {
        value: 4,
        title: n.t(null, void 0, i(67948))
      }, {
        value: 5,
        title: n.t(null, void 0, i(87380))
      }, {
        value: 6,
        title: n.t(null, void 0, i(59189))
      }, {
        value: 7,
        title: n.t(null, void 0, i(10268))
      }, {
        value: 8,
        title: n.t(null, {
          context: "wave"
        }, i(51077))
      }, {
        value: 9,
        title: n.t(null, {
          context: "wave"
        }, i(922))
      }, {
        value: 10,
        title: n.t(null, void 0, i(14724))
      }, {
        value: 11,
        title: n.t(null, void 0, i(30585))
      }, {
        value: 12,
        title: n.t(null, void 0, i(24866))
      }, {
        value: 13,
        title: n.t(null, void 0, i(1145))
      }, {
        value: 14,
        title: n.t(null, void 0, i(78273))
      }];
    class m extends a.LineDataSource {
      constructor(e, t, s, o) {
        super(e, t ?? m.createProperties(e.backgroundTheme().spawnOwnership()), s, o), this.version = 4, Promise
          .all([i.e(6290), i.e(986), i.e(6668), i.e(1583)]).then(i.bind(i, 60509)).then((e => {
            this._setPaneViews([new e.ElliottLabelsPaneView(this, this._model)])
          }))
      }
      migrateVersion(e, t, i) {
        if (i.properties.hasChild("background") && i.properties.removeProperty("background"), i.properties.hasChild(
            "backgroundColor") && i.properties.removeProperty("backgroundColor"), i.properties.hasChild(
            "showBackground") && i.properties.removeProperty("showBackground"), 1 === e) {
          const e = Object.assign({}, this._timePoint[0]);
          if (this._timePoint.unshift(e), this._points.length > 0) {
            const e = Object.assign({}, this._points[0]);
            this._points.unshift(e)
          }
        }
      }
      applyTemplate(e) {
        const t = e;
        delete t.background, delete t.backgroundColor, delete t.showBackground, super.applyTemplate(e)
      }
      name() {
        return "Elliott Labels"
      }
      async additionalActions(e) {
        return {
          actions: [new l.Action({
            actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
            options: {
              label: n.t(null, void 0, i(23403)),
              subItems: u.map((t => {
                const i = p.filter((e => e.value === t))[0];
                return new l.Action({
                  actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                  options: {
                    label: i.title,
                    checkable: !0,
                    checked: this.properties().childs().degree.value() === t,
                    onExecute: () => {
                      e.setProperty(this.properties().childs().degree, t, _, d
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
      label(e) {
        const t = u.length - this.properties().childs().degree.value() - 1,
          i = Math.floor(t / 3);
        return {
          group: i,
          bold: !!(i % 2),
          decoration: ["", "brackets", "circle"][t % 3],
          label: this.labelsGroup()[i][e]
        }
      }
      availableDegreesValues() {
        return p
      }
      static createProperties(e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliott",
          state: t,
          theme: e
        });
        return this._configureProperties(i), i
      }
      static migrateState(e) {
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
        "LineToolElliottSubminuette" === e.type && (e.type = "LineToolElliottImpulse", e.state.degree = t[e.state
            .wavesize]), "LineToolElliottMinor" === e.type && (e.type = "LineToolElliottImpulse", e.state.degree =
            t[e.state.wavesize]), "LineToolElliottCircle" === e.type && (e.type = "LineToolElliottImpulse", e.state
            .degree = t[e.state.wavesize]), "LineToolElliottMinorRetr" === e.type && (e.type =
            "LineToolElliottCorrection", e.state.degree = i[e.state.wavesize]), "LineToolElliottMajorRetr" === e
          .type && (e.type = "LineToolElliottCorrection", e.state.degree = i[e.state.wavesize])
      }
      async _getPropertyDefinitionsViewModelClass() {
        return (await Promise.all([i.e(3198), i.e(5410), i.e(2745), i.e(8823), i.e(8537)]).then(i.bind(i, 6238)))
          .ElliottPatternDefinitionsViewModel
      }
      static _configureProperties(e) {
        super._configureProperties(e), e.addChild("linesColors", new h.LineToolColorsProperty([e.childs().color])),
          e.addExcludedKey("linesColors", 3)
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
      constructor(e, t, i, s) {
        super(e, t ?? y.createProperties(e.backgroundTheme().spawnOwnership()), i, s)
      }
      name() {
        return "Elliott Impulse Wave (12345)"
      }
      labelsGroup() {
        return f
      }
      static createProperties(e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottimpulse",
          state: t,
          theme: e
        });
        return this._configureProperties(i), i
      }
    }
    const v = [
      ["0", "A", "B", "C", "D", "E"],
      ["0", "a", "b", "c", "d", "e"],
      ["0", "A", "B", "C", "D", "E"],
      ["0", "a", "b", "c", "d", "e"],
      ["0", "A", "B", "C", "D", "E"]
    ];
    class S extends g {
      constructor(e, t, i, s) {
        super(e, t ?? S.createProperties(e.backgroundTheme().spawnOwnership()), i, s)
      }
      name() {
        return "Elliott Triangle Wave (ABCDE)"
      }
      labelsGroup() {
        return v
      }
      static createProperties(e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliotttriangle",
          state: t,
          theme: e
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
      constructor(e, t, i, s) {
        super(e, t ?? w.createProperties(e.backgroundTheme().spawnOwnership()), i, s)
      }
      name() {
        return "Elliott Triple Combo Wave (WXYXZ)"
      }
      labelsGroup() {
        return b
      }
      static createProperties(e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliotttriplecombo",
          state: t,
          theme: e
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
      constructor(e, t, i, s) {
        super(e, t ?? P.createProperties(e.backgroundTheme().spawnOwnership()), i, s)
      }
      name() {
        return "Elliott Correction Wave (ABC)"
      }
      labelsGroup() {
        return T
      }
      static createProperties(e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottcorrection",
          state: t,
          theme: e
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
      constructor(e, t, i, s) {
        super(e, t ?? M.createProperties(e.backgroundTheme().spawnOwnership()), i, s)
      }
      name() {
        return "Elliott Double Combo Wave (WXY)"
      }
      labelsGroup() {
        return x
      }
      static createProperties(e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottdoublecombo",
          state: t,
          theme: e
        });
        return this._configureProperties(i), i
      }
    }