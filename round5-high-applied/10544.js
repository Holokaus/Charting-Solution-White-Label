/**
 * Module 10544 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

10544: (watchedValue_e, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      LineToolElliott: () => m,
      LineToolElliottCorrection: () => P,
      LineToolElliottDegree: () => watchedValue_s,
      LineToolElliottDoubleCombo: () => M,
      LineToolElliottImpulse: () => y,
      LineToolElliottTriangle: () => S,
      LineToolElliottTripleCombo: () => w
    });
    var watchedValue_s, o, watchedValue_n = i(11542),
      r = i(95804),
      a = i(41414),
      l = i(41706),
      c = i(78176),
      h = i(65045),
      d = i(13896);
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.Supermillennium = 0] = "Supermillennium", watchedValue_e[watchedValue_e.Millennium = 1] = "Millennium", watchedValue_e[watchedValue_e.Submillennium = 2] =
        "Submillennium", watchedValue_e[watchedValue_e.GrandSupercycle = 3] = "GrandSupercycle", watchedValue_e[watchedValue_e.Supercycle = 4] = "Supercycle", watchedValue_e[watchedValue_e.Cycle =
          5] = "Cycle", watchedValue_e[watchedValue_e.Primary = 6] = "Primary", watchedValue_e[watchedValue_e.Intermediate = 7] = "Intermediate", watchedValue_e[watchedValue_e.Minor = 8] = "Minor",
        watchedValue_e[watchedValue_e.Minute = 9] = "Minute", watchedValue_e[watchedValue_e.Minuette = 10] = "Minuette", watchedValue_e[watchedValue_e.Subminuette = 11] = "Subminuette", watchedValue_e[watchedValue_e.Micro =
          12] = "Micro", watchedValue_e[watchedValue_e.Submicro = 13] = "Submicro", watchedValue_e[watchedValue_e.Minuscule = 14] = "Minuscule"
    }(watchedValue_s || (watchedValue_s = {})),
    function(watchedValue_e) {
      watchedValue_e[watchedValue_e.Current = 4] = "Current"
    }(o || (o = {}));
    const u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      _ = new r.TranslatedString("change Elliott degree", watchedValue_n.t(null, void 0, i(47977))),
      p = [{
        value: 0,
        title: watchedValue_n.t(null, void 0, i(3348))
      }, {
        value: 1,
        title: watchedValue_n.t(null, void 0, i(87957))
      }, {
        value: 2,
        title: watchedValue_n.t(null, void 0, i(63375))
      }, {
        value: 3,
        title: watchedValue_n.t(null, void 0, i(57726))
      }, {
        value: 4,
        title: watchedValue_n.t(null, void 0, i(67948))
      }, {
        value: 5,
        title: watchedValue_n.t(null, void 0, i(87380))
      }, {
        value: 6,
        title: watchedValue_n.t(null, void 0, i(59189))
      }, {
        value: 7,
        title: watchedValue_n.t(null, void 0, i(10268))
      }, {
        value: 8,
        title: watchedValue_n.t(null, {
          context: "wave"
        }, i(51077))
      }, {
        value: 9,
        title: watchedValue_n.t(null, {
          context: "wave"
        }, i(922))
      }, {
        value: 10,
        title: watchedValue_n.t(null, void 0, i(14724))
      }, {
        value: 11,
        title: watchedValue_n.t(null, void 0, i(30585))
      }, {
        value: 12,
        title: watchedValue_n.t(null, void 0, i(24866))
      }, {
        value: 13,
        title: watchedValue_n.t(null, void 0, i(1145))
      }, {
        value: 14,
        title: watchedValue_n.t(null, void 0, i(78273))
      }];
    class m extends a.LineDataSource {
      constructor(watchedValue_e, t, watchedValue_s, o) {
        super(watchedValue_e, t ?? m.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), watchedValue_s, o), this.version = 4, Promise
          .all([i.watchedValue_e(6290), i.watchedValue_e(986), i.watchedValue_e(6668), i.watchedValue_e(1583)]).then(i.bind(i, 60509)).then((watchedValue_e => {
            this._setPaneViews([new watchedValue_e.ElliottLabelsPaneView(this, this._model)])
          }))
      }
      migrateVersion(watchedValue_e, t, i) {
        if (i.properties.hasChild("background") && i.properties.removeProperty("background"), i.properties.hasChild(
            "backgroundColor") && i.properties.removeProperty("backgroundColor"), i.properties.hasChild(
            "showBackground") && i.properties.removeProperty("showBackground"), 1 === watchedValue_e) {
          const watchedValue_e = Object.assign({}, this._timePoint[0]);
          if (this._timePoint.unshift(watchedValue_e), this._points.length > 0) {
            const watchedValue_e = Object.assign({}, this._points[0]);
            this._points.unshift(watchedValue_e)
          }
        }
      }
      applyTemplate(watchedValue_e) {
        const t = watchedValue_e;
        delete t.background, delete t.backgroundColor, delete t.showBackground, super.applyTemplate(watchedValue_e)
      }
      name() {
        return "Elliott Labels"
      }
      async additionalActions(watchedValue_e) {
        return {
          actions: [new l.Action({
            actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
            options: {
              label: watchedValue_n.t(null, void 0, i(23403)),
              subItems: u.map((t => {
                const i = p.filter((watchedValue_e => watchedValue_e.value === t))[0];
                return new l.Action({
                  actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                  options: {
                    label: i.title,
                    checkable: !0,
                    checked: this.properties().childs().degree.value() === t,
                    onExecute: () => {
                      watchedValue_e.setProperty(this.properties().childs().degree, t, _, d
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
        const t = u.length - this.properties().childs().degree.value() - 1,
          i = Math.floor(t / 3);
        return {
          group: i,
          bold: !!(i % 2),
          decoration: ["", "brackets", "circle"][t % 3],
          label: this.labelsGroup()[i][watchedValue_e]
        }
      }
      availableDegreesValues() {
        return p
      }
      static createProperties(watchedValue_e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliott",
          state: t,
          theme: watchedValue_e
        });
        return this._configureProperties(i), i
      }
      static migrateState(watchedValue_e) {
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
        "LineToolElliottSubminuette" === watchedValue_e.type && (watchedValue_e.type = "LineToolElliottImpulse", watchedValue_e.state.degree = t[watchedValue_e.state
            .wavesize]), "LineToolElliottMinor" === watchedValue_e.type && (watchedValue_e.type = "LineToolElliottImpulse", watchedValue_e.state.degree =
            t[watchedValue_e.state.wavesize]), "LineToolElliottCircle" === watchedValue_e.type && (watchedValue_e.type = "LineToolElliottImpulse", watchedValue_e.state
            .degree = t[watchedValue_e.state.wavesize]), "LineToolElliottMinorRetr" === watchedValue_e.type && (watchedValue_e.type =
            "LineToolElliottCorrection", watchedValue_e.state.degree = i[watchedValue_e.state.wavesize]), "LineToolElliottMajorRetr" === watchedValue_e
          .type && (watchedValue_e.type = "LineToolElliottCorrection", watchedValue_e.state.degree = i[watchedValue_e.state.wavesize])
      }
      async _getPropertyDefinitionsViewModelClass() {
        return (await Promise.all([i.watchedValue_e(3198), i.watchedValue_e(5410), i.watchedValue_e(2745), i.watchedValue_e(8823), i.watchedValue_e(8537)]).then(i.bind(i, 6238)))
          .ElliottPatternDefinitionsViewModel
      }
      static _configureProperties(watchedValue_e) {
        super._configureProperties(watchedValue_e), watchedValue_e.addChild("linesColors", new h.LineToolColorsProperty([watchedValue_e.childs().color])),
          watchedValue_e.addExcludedKey("linesColors", 3)
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
      constructor(watchedValue_e, t, i, watchedValue_s) {
        super(watchedValue_e, t ?? y.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), i, watchedValue_s)
      }
      name() {
        return "Elliott Impulse Wave (12345)"
      }
      labelsGroup() {
        return f
      }
      static createProperties(watchedValue_e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottimpulse",
          state: t,
          theme: watchedValue_e
        });
        return this._configureProperties(i), i
      }
    }
    const v = [
      ["0", "A", "B", "C", "D", "E"],
      ["0", "a", "b", "c", "d", "watchedValue_e"],
      ["0", "A", "B", "C", "D", "E"],
      ["0", "a", "b", "c", "d", "watchedValue_e"],
      ["0", "A", "B", "C", "D", "E"]
    ];
    class S extends g {
      constructor(watchedValue_e, t, i, watchedValue_s) {
        super(watchedValue_e, t ?? S.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), i, watchedValue_s)
      }
      name() {
        return "Elliott Triangle Wave (ABCDE)"
      }
      labelsGroup() {
        return v
      }
      static createProperties(watchedValue_e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliotttriangle",
          state: t,
          theme: watchedValue_e
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
      constructor(watchedValue_e, t, i, watchedValue_s) {
        super(watchedValue_e, t ?? w.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), i, watchedValue_s)
      }
      name() {
        return "Elliott Triple Combo Wave (WXYXZ)"
      }
      labelsGroup() {
        return b
      }
      static createProperties(watchedValue_e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliotttriplecombo",
          state: t,
          theme: watchedValue_e
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
      constructor(watchedValue_e, t, i, watchedValue_s) {
        super(watchedValue_e, t ?? P.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), i, watchedValue_s)
      }
      name() {
        return "Elliott Correction Wave (ABC)"
      }
      labelsGroup() {
        return T
      }
      static createProperties(watchedValue_e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottcorrection",
          state: t,
          theme: watchedValue_e
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
      constructor(watchedValue_e, t, i, watchedValue_s) {
        super(watchedValue_e, t ?? M.createProperties(watchedValue_e.backgroundTheme().spawnOwnership()), i, watchedValue_s)
      }
      name() {
        return "Elliott Double Combo Wave (WXY)"
      }
      labelsGroup() {
        return x
      }
      static createProperties(watchedValue_e, t) {
        const i = new c.DefaultProperty({
          defaultName: "linetoolelliottdoublecombo",
          state: t,
          theme: watchedValue_e
        });
        return this._configureProperties(i), i
      }
    }
}
