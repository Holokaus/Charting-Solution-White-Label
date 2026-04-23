/**
 * Module 24437 - Auto-beautified from TradingView webpack bundle
 *
 * @module 24437
 * @date 2026-04-23
 * @size 10182 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 12217, 30798, 39488, 48096, 50151, 58554, 60661, 69866, 82130, 99481
 *
 * Exports:
 *   - LiveStudyGraphics (internal: _)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  LiveStudyGraphics: () => _
});
var s = i(50151),
  o = i(12217),
  n = i(48096),
  r = i(99481),
  a = i(60661),
  l = i(58554),
  c = i(30798),
  h = i(69866),
  d = i(82130),
  u = i(39488);
class _ {
  constructor(e = {}) {
    this._indexes = [], this._hhistsByTimePointIndex = new Map, this._primitivesCollection = function(e) {
      const t = {};
      for (const i of d.primitiveNames) {
        t[i] = new Map;
        const s = e[i];
        if (void 0 !== s)
          for (const e in s)
            if (s.hasOwnProperty(e)) switch (i) {
              case "horizlines":
                t[i].set(e, v.horizlines());
                break;
              case "vertlines":
                t[i].set(e, v.vertlines());
                break;
              case "backgrounds":
                t[i].set(e, v.backgrounds());
                break;
              case "polygons":
                t[i].set(e, v.polygons());
                break;
              case "hhists":
                t[i].set(e, v.hhists())
            }
      }
      0;
      return t
    }(e)
  }
  horizlines() {
    return this._primitivesCollection.horizlines
  }
  vertlines() {
    return this._primitivesCollection.vertlines
  }
  lines() {
    return this._primitivesCollection.lines
  }
  hlines() {
    return this._primitivesCollection.hlines
  }
  textmarks() {
    return this._primitivesCollection.textmarks
  }
  shapemarks() {
    return this._primitivesCollection.shapemarks
  }
  backgrounds() {
    return this._primitivesCollection.backgrounds
  }
  polygons() {
    return this._primitivesCollection.polygons
  }
  trendchannels() {
    return this._primitivesCollection.trendchannels
  }
  hhists() {
    return this._primitivesCollection.hhists
  }
  dwglabels() {
    return this._primitivesCollection.dwglabels
  }
  dwglines() {
    return this._primitivesCollection.dwglines
  }
  dwgpolylines() {
    return this._primitivesCollection.dwgpolylines
  }
  dwgboxes() {
    return this._primitivesCollection.dwgboxes
  }
  dwgtables() {
    return this._primitivesCollection.dwgtables
  }
  dwgtablecells() {
    return this._primitivesCollection.dwgtablecells
  }
  dwglinefills() {
    return this._primitivesCollection.dwglinefills
  }
  tpos() {
    return this._primitivesCollection.tpos
  }
  tpoBlockSets() {
    return this._primitivesCollection.tpoBlockSets
  }
  tpoLevels() {
    return this._primitivesCollection.tpoLevels
  }
  tpoVolumeRows() {
    return this._primitivesCollection.tpoVolumeRows
  }
  tpoSummaryInfo() {
    return this._primitivesCollection.tpoSummaryInfo
  }
  logs() {
    return this._primitivesCollection.logs
  }
  observableLogs() {
    return this._primitivesCollection.logs
  }
  performance() {
    return this._primitivesCollection.performance
  }
  observablePerformance() {
    return this._primitivesCollection.performance
  }
  footprints() {
    return this._primitivesCollection.footprints
  }
  footprintLevels() {
    return this._primitivesCollection.footprintLevels
  }
  hhistsByTimePointIndex() {
    return this._hhistsByTimePointIndex
  }
  clear() {
    this._indexes = [];
    for (const e of d.regularPrimitiveNames) this._primitivesCollection[e].forEach((e => e.clear()));
    for (const e of d.groupedPrimitiveNames) this._primitivesCollection[e].forEach((e => {
      e.forEach((e => e.clear()))
    }));
    this._hhistsByTimePointIndex = new Map
  }
  extract() {
    const e = {
      indexes: this._indexes,
      horizlines: g(this._primitivesCollection.horizlines),
      vertlines: g(this._primitivesCollection.vertlines),
      lines: g(this._primitivesCollection.lines),
      hlines: g(this._primitivesCollection.hlines),
      textmarks: g(this._primitivesCollection.textmarks),
      shapemarks: g(this._primitivesCollection.shapemarks),
      backgrounds: g(this._primitivesCollection.backgrounds),
      polygons: g(this._primitivesCollection.polygons),
      trendchannels: g(this._primitivesCollection.trendchannels),
      hhists: g(this._primitivesCollection.hhists),
      dwglabels: f(this._primitivesCollection.dwglabels),
      dwglines: f(this._primitivesCollection.dwglines),
      dwgpolylines: f(this._primitivesCollection.dwgpolylines),
      dwgboxes: f(this._primitivesCollection.dwgboxes),
      dwgtables: f(this._primitivesCollection.dwgtables),
      dwgtablecells: g(this._primitivesCollection.dwgtablecells),
      dwglinefills: g(this._primitivesCollection.dwglinefills),
      tpos: g(this._primitivesCollection.tpos),
      tpoBlockSets: f(this._primitivesCollection.tpoBlockSets),
      tpoLevels: f(this._primitivesCollection.tpoLevels),
      tpoVolumeRows: f(this._primitivesCollection.tpoVolumeRows),
      tpoSummaryInfo: f(this._primitivesCollection.tpoSummaryInfo),
      logs: new Map,
      performance: new Map,
      footprints: g(this._primitivesCollection.footprints),
      footprintLevels: g(this._primitivesCollection.footprintLevels)
    };
    return this._hhistsByTimePointIndex = new Map, new u.StaticStudyGraphics("data", e)
  }
  replaceIndexesTo(e) {
    this._indexes = e;
    const t = e => e.replaceIndexesTo(this._indexes);
    for (const e of d.regularPrimitiveNames) this._primitivesCollection[e].forEach(t);
    for (const e of d.groupedPrimitiveNames) this._primitivesCollection[e].forEach((e => {
      e.forEach(t)
    }));
    this._hhistsByTimePointIndex = (0, d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
  }
  processCommands(e) {
    void 0 !== e.erase && this._processEraseCommands(e.erase), void 0 !== e.create && this._processCreateCommands(e.create)
  }
  _processCreateCommands(e) {
    for (const t in e) {
      if (!e.hasOwnProperty(t)) continue;
      const i = t;
      switch (i) {
        case "hhists":
          y(this._indexes, this._primitivesCollection.hhists, e[i]);
          break;
        case "horizlines":
          y(this._indexes, this._primitivesCollection.horizlines, e[i]);
          break;
        case "vertlines":
          y(this._indexes, this._primitivesCollection.vertlines, e[i]);
          break;
        case "polygons":
          y(this._indexes, this._primitivesCollection.polygons, e[i]);
          break;
        case "backgrounds":
          y(this._indexes, this._primitivesCollection.backgrounds, e[i])
      }
    }
    this._hhistsByTimePointIndex = (0, d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
  }
  _processEraseCommands(e) {
    for (const t of e)
      if ("all" === t.action) {
        for (const e of d.regularPrimitiveNames) this._primitivesCollection[e].forEach((e => e.clearPrimitives()));
        for (const e of d.groupedPrimitiveNames) this._primitivesCollection[e].forEach((e => {
          e.forEach((e => e.clearPrimitives()))
        }))
      } else {
        const e = e => e.deleteById(t.id);
        (0, d.isRegularPrimiriveName)(t.type) ? this._primitivesCollection[t.type].forEach(e): this._primitivesCollection[t.type].forEach((t => {
          t.forEach(e)
        }))
      } this._hhistsByTimePointIndex = (0, d.splitHHistsByTimePointIndex)(this._primitivesCollection.hhists)
  }
}
class p {
  constructor(e, t) {
    this._primitivesDataById = new Map, this._primitiveById = new Map, this._changed = new n.Delegate, this._cleared = new n.Delegate, this._materializePrimitive = e,
      this._isRematerializationRequiredWithNewIndexes = t
  }
  changed() {
    return this._changed
  }
  cleared() {
    return this._cleared
  }
  forEach(e, t) {
    this._primitiveById.forEach((i => {
      e.call(t, i, i, this)
    }))
  }
  has(e) {
    let t = !1;
    return this._primitiveById.forEach((i => {
      t = t || i === e
    })), t
  }
  get size() {
    return this._primitiveById.size
  } [Symbol.iterator]() {
    return this._primitiveById.values()
  }
  entries() {
    throw new Error("Not implemented")
  }
  keys() {
    throw new Error("Not implemented")
  }
  union() {
    throw new Error("Not implemented")
  }
  intersection() {
    throw new Error("Not implemented")
  }
  difference() {
    throw new Error("Not implemented")
  }
  symmetricDifference() {
    throw new Error("Not implemented")
  }
  isSubsetOf() {
    throw new Error("Not implemented")
  }
  isSupersetOf() {
    throw new Error("Not implemented")
  }
  isDisjointFrom() {
    throw new Error("Not implemented")
  }
  values() {
    return this._primitiveById.values()
  }
  hasId(e) {
    return this._primitiveById.has(e)
  }
  addData(e, t) {
    const i = [];
    e.forEach((e => {
      this._primitivesDataById.set(e.id, e);
      const s = this._tryMaterialize(t, e);
      null !== s && i.push(s)
    })), i.length > 0 && this._changed.fire({
      created: i,
      removed: []
    })
  }
  deleteById(e) {
    const t = this._primitiveById.get(e);
    t && (this._primitiveById.delete(e), this._primitivesDataById.delete(e), this._changed.fire({
      created: [],
      removed: [t]
    }))
  }
  clear() {
    this.clearPrimitives()
  }
  clearPrimitives() {
    this._primitivesDataById.clear(), this._primitiveById.clear(), this._cleared.fire()
  }
  replaceIndexesTo(e) {
    if (!this._isRematerializationRequiredWithNewIndexes) return;
    const t = Array.from(this._primitiveById.values());
    this._primitiveById.clear(), this._primitivesDataById.forEach(this._tryMaterialize.bind(this, e), this);
    const i = Array.from(this._primitiveById.values());
    this._changed.fire({
      created: i,
      removed: t
    })
  }
  extract() {
    const e = new Set(this._primitivesDataById.values());
    return this.clearPrimitives(), e
  }
  _tryMaterialize(e, t) {
    const i = this._materializePrimitive(t, e);
    return null !== i && ((0, s.assert)(!this._primitiveById.has(t.id), "primitive with specified id should not exist"), this._primitiveById.set(t.id, i)), i
  }
}

function m(e) {
  const t = new Map;
  for (const [n, r] of e) t.set(n, (i = r, (s = t.get(n)) ? (0, o.join)(s, i.extract()) : i.extract()));
  var i, s;
  return t
}

function g(e) {
  return m((0, o.mapEntriesGenerator)(e))
}

function f(e) {
  return m((0, o.nestedMapGenerator)(e))
}

function y(e, t, i = []) {
  for (const o of i) {
    const i = o.styleId,
      n = t.get(i);
    (0, s.assert)(void 0 !== n, "Every style used by graphics primitive should be declared in study metainfo"), n.addData(o.data, e)
  }
}
const v = {
    horizlines: () => new p(a.materializeHorizLine, a.containsHorizLineTimePointIndexes),
    vertlines: () => new p(l.materializeVertLine, l.containsVertLineTimePointIndexes),
    lines: () => new p(materializeLine, containsLineTimePointIndexes),
    hlines: () => new p(materializeLevel, containsLevelTimePointIndexes),
    textmarks: () => new p(materializeTextMark, containsTextMarkTimePointIndexes),
    shapemarks: () => new p(materializeShapeMark, containsShapeMarkTimePointIndexes),
    backgrounds: () => new p(h.materializeBackground, h.containsBackgroundTimePointIndexes),
    polygons: () => new p(c.materializePolygon, c.containsPolygonTimePointIndexes),
    trendchannels: () => new p(materializeTrendChannel, containsTrendChannelTimePointIndexes),
    hhists: () => new p(r.materializeHHist, r.containsHHistTimePointIndexes),
    dwglines: () => new p(materializeDwgLine, containsDwgLineTimePointIndexes),
    dwglinefills: () => new p(materializeDwgLineFill, containsDwgLineFillTimePointIndexes),
    dwglabels: () => new p(materializeDwgLabel, containsDwgLabelTimePointIndexes),
    dwgtablecells: () => new p(materializeDwgTableCell, containsDwgTableCellTimePointIndexes),
    dwgpolylines: () => new p(materializeDwgPolyline, containsDwgPolylineTimePointIndexes),
    dwgboxes: () => new p(materializeDwgBox, containsDwgBoxTimePointIndexes),
    dwgtables: () => new p(materializeDwgTable, containsDwgTableTimePointIndexes),
    tpos: () => new p(materializeTpo, containsTpoTimePointIndexes),
    tpoBlockSets: () => new p(materializeTpoBlockSet, containsTpoBlockSetTimePointIndexes),
    tpoLevels: () => new p(materializeTpoLevelGroup, containsTpoLevelGroupTimePointIndexes),
    tpoVolumeRows: () => new p(materializeTpoVolumeRow, containsTpoVolumeRowTimePointIndexes),
    tpoSummary: () => new p(materializeTpoSummary, containsTpoSummaryTimePointIndexes),
    logs: () => new p(materializeLog, containsLogTimePointIndexes),
    footprints: () => new p(materializeVolumeFootprint, containsFootprintTimePointIndexes),
    footprintLevels: () => new p(materializeVolumeFootprintPriceLevel, containsFootprintPriceLevelTimePointIndexes)
