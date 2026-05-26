var Y = Object.defineProperty;
var B = (d, t, e) => t in d ? Y(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var b = (d, t, e) => B(d, typeof t != "symbol" ? t + "" : t, e);
const W = Object.freeze({
  CANDLES: 0,
  BARS: 1,
  LINE: 2,
  AREA: 3,
  BASELINE: 4
}), N = Object.freeze({
  NORMAL: 0,
  LOG: 1,
  PERCENTAGE: 2,
  INDEXED_TO_100: 3
}), z = Object.freeze({
  NORMAL: 0,
  MAGNET: 1
}), x = {
  widget: null,
  ChartStyle: W,
  PriceScaleMode: N,
  CrosshairMode: z,
  version: "30.0.0-reconstructed",
  _toolRegistry: null,
  _studyRegistry: null
}, p = class p {
  constructor(t) {
    this._emitter = t, this._state = p.STATES.UNINITIALIZED, this._transitions = {
      [p.STATES.UNINITIALIZED]: [p.STATES.LOADING],
      [p.STATES.LOADING]: [p.STATES.READY, p.STATES.DESTROYED],
      [p.STATES.READY]: [p.STATES.ACTIVE, p.STATES.DESTROYED],
      [p.STATES.ACTIVE]: [p.STATES.DESTROYED],
      [p.STATES.DESTROYED]: []
    };
  }
  transition(t) {
    const e = this._state, s = this._transitions[e];
    if (!s || !s.includes(t))
      throw new Error(`Invalid transition: ${e} → ${t}`);
    return this._emit("leave", e), this._state = t, this._emit("enter", t), this._state;
  }
  destroy() {
    return this._state !== p.STATES.DESTROYED && this.transition(p.STATES.DESTROYED), this._state;
  }
  get state() {
    return this._state;
  }
  is(t) {
    return this._state === t;
  }
  canTransition(t) {
    const e = this._transitions[this._state];
    return e && e.includes(t);
  }
  _emit(t, e) {
    this._emitter && typeof this._emitter.emit == "function" && this._emitter.emit(`state:${t}:${e}`);
  }
};
b(p, "STATES", Object.freeze({
  UNINITIALIZED: "uninitialized",
  LOADING: "loading",
  READY: "ready",
  ACTIVE: "active",
  DESTROYED: "destroyed"
}));
let C = p;
const P = "tv-theme", $ = [
  "--tv-color-bg",
  "--tv-color-pane-bg",
  "--tv-color-toolbar-bg",
  "--tv-color-text",
  "--tv-color-text-secondary",
  "--tv-color-border",
  "--tv-color-grid",
  "--tv-color-crosshair",
  "--tv-color-up",
  "--tv-color-down",
  "--tv-color-wick",
  "--tv-color-volume"
], I = {
  light: {
    "--tv-color-bg": "#FFFFFF",
    "--tv-color-pane-bg": "#F5F5F5",
    "--tv-color-toolbar-bg": "#FAFAFA",
    "--tv-color-text": "#212121",
    "--tv-color-text-secondary": "#757575",
    "--tv-color-border": "#E0E0E0",
    "--tv-color-grid": "#F0F0F0",
    "--tv-color-crosshair": "#212121",
    "--tv-color-up": "#26A69A",
    "--tv-color-down": "#EF5350",
    "--tv-color-wick": "#212121",
    "--tv-color-volume": "#26A69A80"
  },
  dark: {
    "--tv-color-bg": "#131722",
    "--tv-color-pane-bg": "#1E222D",
    "--tv-color-toolbar-bg": "#1E222D",
    "--tv-color-text": "#D1D4DC",
    "--tv-color-text-secondary": "#787B86",
    "--tv-color-border": "#2A2E39",
    "--tv-color-grid": "#2A2E39",
    "--tv-color-crosshair": "#D1D4DC",
    "--tv-color-up": "#089981",
    "--tv-color-down": "#F23645",
    "--tv-color-wick": "#D1D4DC",
    "--tv-color-volume": "#08998180"
  },
  custom: {
    "--tv-color-bg": "#131722",
    "--tv-color-pane-bg": "#1E222D",
    "--tv-color-toolbar-bg": "#1E222D",
    "--tv-color-text": "#D1D4DC",
    "--tv-color-text-secondary": "#787B86",
    "--tv-color-border": "#2A2E39",
    "--tv-color-grid": "#2A2E39",
    "--tv-color-crosshair": "#D1D4DC",
    "--tv-color-up": "#089981",
    "--tv-color-down": "#F23645",
    "--tv-color-wick": "#D1D4DC",
    "--tv-color-volume": "#08998180"
  }
};
class E {
  constructor(t) {
    this._container = t, this._currentTheme = "dark";
  }
  apply(t, e = {}) {
    const s = I[t] || I.dark, i = { ...t === "custom" ? {} : s, ...e };
    for (const [o, n] of Object.entries(i))
      $.includes(o) && this._container.style.setProperty(o, n);
    this._currentTheme = t;
    try {
      localStorage.setItem(P, t);
    } catch {
    }
  }
  getCurrentTheme() {
    return this._currentTheme;
  }
  getVariable(t) {
    return getComputedStyle(this._container).getPropertyValue(t).trim() || null;
  }
  static restore(t) {
    try {
      const e = localStorage.getItem(P);
      if (e) {
        const s = new E(t);
        return s.apply(e), s;
      }
    } catch {
    }
    return new E(t);
  }
}
const k = "30.0.0-reconstructed";
class V {
  constructor() {
    this._state = null;
  }
  save() {
    return {
      version: k,
      timestamp: Date.now(),
      charts: [],
      layout: { sashWeights: [0.7, 0.3] }
    };
  }
  load(t) {
    if (!t || typeof t != "object")
      throw new Error("Invalid layout state: must be an object");
    if (!t.version)
      throw new Error("Invalid layout state: missing version");
    if (!this._isCompatible(t.version))
      throw new Error(`Incompatible layout version: ${t.version}`);
    return this._state = t, t;
  }
  addChart(t) {
    return this._state || (this._state = this.save()), this._state.charts.push(t), this._state;
  }
  removeChart(t) {
    this._state && t >= 0 && t < this._state.charts.length && this._state.charts.splice(t, 1);
  }
  setLayout(t) {
    this._state && (this._state.layout = { ...this._state.layout, ...t });
  }
  serialize() {
    const t = this._state || this.save();
    return JSON.stringify(t);
  }
  deserialize(t) {
    try {
      const e = JSON.parse(t);
      return this.load(e);
    } catch (e) {
      throw new Error(`Failed to deserialize layout: ${e.message}`);
    }
  }
  getState() {
    return this._state;
  }
  _isCompatible(t) {
    const e = (s) => parseInt(s.split(".")[0], 10);
    return e(t) === e(k);
  }
  static createChartState(t, e) {
    return {
      symbol: t || "",
      interval: e || "1D",
      chartType: 0,
      studies: [],
      drawings: [],
      visibleRange: null,
      priceScale: { mode: 0, autoScale: !0 }
    };
  }
}
class X {
  constructor(t, e, s) {
    this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"), this._container = t, this._width = e || t.clientWidth, this._height = s || t.clientHeight, this._dpr = window.devicePixelRatio || 1, this._rafId = null, this._scene = [], this._updateSize(), t.appendChild(this._canvas);
  }
  get canvas() {
    return this._canvas;
  }
  get ctx() {
    return this._ctx;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get dpr() {
    return this._dpr;
  }
  clear() {
    this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.fillStyle = "#131722", this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }
  render(t) {
    this._scene = t || this._scene, this.clear(), this._ctx.setTransform(this._dpr, 0, 0, this._dpr, 0, 0);
    for (const e of this._scene)
      typeof e.render == "function" && e.render(this._ctx);
  }
  startLoop(t) {
    this._scene = t || this._scene;
    const e = () => {
      this.render(), this._rafId = requestAnimationFrame(e);
    };
    this._rafId = requestAnimationFrame(e);
  }
  stopLoop() {
    this._rafId && (cancelAnimationFrame(this._rafId), this._rafId = null);
  }
  resize(t, e) {
    this._width = t || this._container.clientWidth, this._height = e || this._container.clientHeight, this._updateSize(), this.render();
  }
  _updateSize() {
    this._canvas.width = this._width * this._dpr, this._canvas.height = this._height * this._dpr, this._canvas.style.width = `${this._width}px`, this._canvas.style.height = `${this._height}px`;
  }
  destroy() {
    this.stopLoop(), this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas), this._scene = [];
  }
}
class j {
  constructor(t, e) {
    this._width = t || 800, this._height = e || 600, this._barSpacing = 6, this._offset = 0, this._visibleRange = { from: 0, to: 0 }, this._dataRange = { min: 0, max: 0 };
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get barSpacing() {
    return this._barSpacing;
  }
  get offset() {
    return this._offset;
  }
  get visibleRange() {
    return this._visibleRange;
  }
  setBarSpacing(t) {
    t >= 2 && t <= 100 && (this._barSpacing = t);
  }
  resize(t, e) {
    this._width = t, this._height = e;
  }
  pan(t) {
    this._offset += t, this._clampOffset(), this._recalcVisibleRange();
  }
  zoom(t, e) {
    this.xToTime(e);
    const s = Math.max(2, Math.min(100, this._barSpacing * t));
    this._barSpacing = s, this._clampOffset(), this._recalcVisibleRange();
  }
  fit(t) {
    !t || t.length === 0 || (this._dataRange.min = t[0].time, this._dataRange.max = t[t.length - 1].time, this._offset = 0, this._barSpacing = Math.max(2, this._width / t.length), this._recalcVisibleRange());
  }
  timeToX(t) {
    return (t - this._visibleRange.from) / (this._barSpacing || 1) * this._barSpacing - this._offset;
  }
  xToTime(t) {
    const e = (t + this._offset) / this._barSpacing;
    return Math.round(this._visibleRange.from + e * this._barSpacing);
  }
  getVisibleBars(t) {
    return t ? t.filter(
      (e) => e.time >= this._visibleRange.from && e.time <= this._visibleRange.to
    ) : [];
  }
  _clampOffset() {
    this._offset < 0 && (this._offset = 0);
  }
  _recalcVisibleRange() {
    const t = Math.ceil(this._width / this._barSpacing) + 2, e = Math.floor(this._offset / this._barSpacing);
    this._visibleRange.from = this._dataRange.min + e * (this._barSpacing || 1), this._visibleRange.to = this._visibleRange.from + t * (this._barSpacing || 1);
  }
}
const T = Object.freeze({
  LINEAR: 0,
  LOG: 1,
  PERCENTAGE: 2,
  INDEXED_TO_100: 3
});
class H {
  constructor(t, e = T.LINEAR) {
    this._height = t, this._mode = e, this._min = 0, this._max = 100, this._padding = 0.05, this._basePrice = null, this._marginTop = 8, this._marginBottom = 8;
  }
  get mode() {
    return this._mode;
  }
  setMode(t) {
    Object.values(T).includes(t) && (this._mode = t);
  }
  resize(t) {
    this._height = t;
  }
  autoScale(t) {
    if (!t || t.length === 0) return;
    let e = 1 / 0, s = -1 / 0;
    for (const o of t)
      o.low < e && (e = o.low), o.high > s && (s = o.high);
    (this._mode === T.PERCENTAGE || this._mode === T.INDEXED_TO_100) && (this._basePrice = t[0].close);
    const i = s - e || 1;
    this._min = e - i * this._padding, this._max = s + i * this._padding;
  }
  setRange(t, e) {
    this._min = t, this._max = e;
  }
  priceToY(t) {
    const e = this._height - this._marginTop - this._marginBottom;
    let s;
    switch (this._mode) {
      case T.LOG: {
        const i = Math.max(t, 1e-4), o = Math.max(this._min, 1e-4), n = Math.max(this._max, 1e-4);
        s = (Math.log(i) - Math.log(o)) / (Math.log(n) - Math.log(o));
        break;
      }
      case T.PERCENTAGE: {
        const i = this._basePrice || this._min, o = (t - i) / i * 100, n = (this._min - i) / i * 100, l = (this._max - i) / i * 100 - n || 1;
        s = (o - n) / l;
        break;
      }
      case T.INDEXED_TO_100: {
        const i = this._basePrice || this._min, o = t / i * 100, n = this._min / i * 100, l = this._max / i * 100 - n || 1;
        s = (o - n) / l;
        break;
      }
      default: {
        const i = this._max - this._min || 1;
        s = (t - this._min) / i;
      }
    }
    return this._marginTop + e * (1 - s);
  }
  yToPrice(t) {
    const e = this._height - this._marginTop - this._marginBottom, s = 1 - (t - this._marginTop) / e;
    switch (this._mode) {
      case T.LOG: {
        const i = Math.max(this._min, 1e-4), o = Math.max(this._max, 1e-4);
        return Math.exp(Math.log(i) + s * (Math.log(o) - Math.log(i)));
      }
      case T.PERCENTAGE: {
        const i = this._basePrice || this._min, o = (this._min - i) / i * 100, n = (this._max - i) / i * 100, r = o + s * (n - o);
        return i * (1 + r / 100);
      }
      case T.INDEXED_TO_100: {
        const i = this._basePrice || this._min, o = this._min / i * 100, n = this._max / i * 100;
        return (o + s * (n - o)) / 100 * i;
      }
      default:
        return this._min + s * (this._max - this._min);
    }
  }
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
  get basePrice() {
    return this._basePrice;
  }
}
class G {
  constructor(t, e = 6) {
    this._width = t, this._barSpacing = e, this._offset = 0, this._timezoneOffset = 0, this._firstVisibleTime = 0;
  }
  get width() {
    return this._width;
  }
  get barSpacing() {
    return this._barSpacing;
  }
  resize(t) {
    this._width = t;
  }
  setBarSpacing(t) {
    t >= 2 && t <= 100 && (this._barSpacing = t);
  }
  setTimezone(t) {
    this._timezoneOffset = t * 60 * 1e3;
  }
  setFirstVisibleTime(t) {
    this._firstVisibleTime = t;
  }
  setOffset(t) {
    this._offset = t;
  }
  timeToX(t) {
    return (t + this._timezoneOffset - this._firstVisibleTime) / (this._barSpacing || 1) * this._barSpacing - this._offset;
  }
  xToTime(t) {
    const e = this._firstVisibleTime + (t + this._offset) / this._barSpacing * this._barSpacing;
    return Math.round(e - this._timezoneOffset);
  }
  formatLabel(t) {
    const e = new Date(t + this._timezoneOffset);
    switch (this._barSpacing * this._width > 1e5 ? "yearly" : this._barSpacing * this._width > 5e4 ? "monthly" : this._barSpacing * this._width > 1e4 ? "daily" : "intraday") {
      case "yearly":
        return e.getFullYear().toString();
      case "monthly":
        return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getMonth()]} ${e.getFullYear()}`;
      case "daily":
        return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getMonth()]} ${String(e.getDate()).padStart(2, "0")}`;
      default:
        return `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
    }
  }
  getTickPositions() {
    const t = this._width + this._offset, e = Math.ceil(t / this._barSpacing), s = Math.max(1, Math.floor(e / 10)), i = [];
    for (let o = 0; o <= e; o += s)
      i.push(o * this._barSpacing - this._offset);
    return i;
  }
}
class U {
  render(t, e, s, i, o, n = {}) {
    const r = s.barSpacing, l = Math.max(1, (r - 2) / 2), a = n.hollow || !1;
    for (const h of e) {
      const c = s.timeToX(h.time) + r / 2;
      if (c < -r || c > s.width + r) continue;
      const u = i.priceToY(h.high), _ = i.priceToY(h.low), g = i.priceToY(h.open), f = i.priceToY(h.close), y = h.close >= h.open, S = Math.min(g, f), m = Math.max(g, f), w = Math.max(1, m - S);
      t.beginPath(), t.moveTo(c, u), t.lineTo(c, _), t.strokeStyle = y ? n.upColor || "#26A69A" : n.downColor || "#EF5350", t.lineWidth = 1, t.stroke(), t.fillStyle = y ? a ? "#FFFFFF" : n.upColor || "#26A69A" : n.downColor || "#EF5350", t.fillRect(c - l, S, l * 2, w), a && y && (t.strokeStyle = n.upColor || "#26A69A", t.lineWidth = 1, t.strokeRect(c - l, S, l * 2, w));
    }
  }
}
class J {
  render(t, e, s, i, o, n = {}) {
    const r = s.barSpacing, l = Math.max(1, r * 0.3);
    for (const a of e) {
      const h = s.timeToX(a.time) + r / 2;
      if (h < -r || h > s.width + r) continue;
      const c = i.priceToY(a.high), u = i.priceToY(a.low), _ = i.priceToY(a.open), g = i.priceToY(a.close), f = a.close >= a.open;
      t.strokeStyle = f ? n.upColor || "#26A69A" : n.downColor || "#EF5350", t.lineWidth = 1, t.beginPath(), t.moveTo(h, c), t.lineTo(h, u), t.stroke(), t.beginPath(), t.moveTo(h - l, _), t.lineTo(h, _), t.stroke(), t.beginPath(), t.moveTo(h, g), t.lineTo(h + l, g), t.stroke();
    }
  }
}
class q {
  render(t, e, s, i, o, n = {}) {
    if (e.length === 0) return;
    const r = n.smooth || !1, l = n.color || "#2196F3", a = n.lineWidth || 2, h = [];
    for (const c of e) {
      const u = s.timeToX(c.time) + s.barSpacing / 2;
      if (u < -s.barSpacing || u > s.width + s.barSpacing) continue;
      const _ = i.priceToY(c.close);
      h.push({ x: u, y: _ });
    }
    if (!(h.length < 2)) {
      if (t.strokeStyle = l, t.lineWidth = a, t.lineJoin = "round", t.lineCap = "round", t.beginPath(), r && h.length > 2) {
        t.moveTo(h[0].x, h[0].y);
        for (let u = 1; u < h.length - 1; u++) {
          const _ = (h[u].x + h[u + 1].x) / 2, g = (h[u].y + h[u + 1].y) / 2;
          t.quadraticCurveTo(h[u].x, h[u].y, _, g);
        }
        const c = h[h.length - 1];
        t.lineTo(c.x, c.y);
      } else {
        t.moveTo(h[0].x, h[0].y);
        for (let c = 1; c < h.length; c++)
          t.lineTo(h[c].x, h[c].y);
      }
      t.stroke();
    }
  }
}
class Z {
  render(t, e, s, i, o, n = {}) {
    if (e.length === 0) return;
    const r = n.lineColor || "#2196F3", l = n.topColor || "rgba(33, 150, 243, 0.3)", a = n.bottomColor || "rgba(33, 150, 243, 0.0)", h = n.lineWidth || 2, c = [];
    for (const g of e) {
      const f = s.timeToX(g.time) + s.barSpacing / 2;
      if (f < -s.barSpacing || f > s.width + s.barSpacing) continue;
      const y = i.priceToY(g.close);
      c.push({ x: f, y });
    }
    if (c.length < 2) return;
    const u = i.priceToY(i.min);
    t.beginPath(), t.moveTo(c[0].x, c[0].y);
    for (let g = 1; g < c.length; g++)
      t.lineTo(c[g].x, c[g].y);
    t.lineTo(c[c.length - 1].x, u), t.lineTo(c[0].x, u), t.closePath();
    const _ = t.createLinearGradient(0, c[0].y, 0, u);
    _.addColorStop(0, l), _.addColorStop(1, a), t.fillStyle = _, t.fill(), t.strokeStyle = r, t.lineWidth = h, t.lineJoin = "round", t.beginPath(), t.moveTo(c[0].x, c[0].y);
    for (let g = 1; g < c.length; g++)
      t.lineTo(c[g].x, c[g].y);
    t.stroke();
  }
}
class K {
  render(t, e, s, i, o, n = {}) {
    if (e.length === 0) return;
    const r = n.baselinePrice || i.min, l = i.priceToY(r), a = n.topColor || "rgba(38, 166, 154, 0.2)", h = n.bottomColor || "rgba(239, 83, 80, 0.2)", c = n.lineColor || "#787B86", u = n.lineWidth || 2, _ = [];
    for (const m of e) {
      const w = s.timeToX(m.time) + s.barSpacing / 2;
      if (w < -s.barSpacing || w > s.width + s.barSpacing) continue;
      const O = i.priceToY(m.close);
      _.push({ x: w, y: O });
    }
    if (_.length < 2) return;
    const g = Math.min(..._.map((m) => m.y)), f = Math.max(..._.map((m) => m.y)), y = t.createLinearGradient(0, g, 0, l);
    y.addColorStop(0, a), y.addColorStop(1, "rgba(38, 166, 154, 0.0)");
    const S = t.createLinearGradient(0, l, 0, f);
    S.addColorStop(0, "rgba(239, 83, 80, 0.0)"), S.addColorStop(1, h), t.beginPath(), t.moveTo(_[0].x, _[0].y);
    for (let m = 1; m < _.length; m++)
      t.lineTo(_[m].x, _[m].y);
    t.lineTo(_[_.length - 1].x, l), t.lineTo(_[0].x, l), t.closePath(), t.fillStyle = y, t.fill(), t.beginPath(), t.moveTo(_[0].x, l);
    for (let m = 0; m < _.length; m++)
      t.lineTo(_[m].x, _[m].y);
    t.lineTo(_[_.length - 1].x, l), t.closePath(), t.fillStyle = S, t.fill(), t.strokeStyle = c, t.lineWidth = u, t.lineJoin = "round", t.beginPath(), t.moveTo(_[0].x, _[0].y);
    for (let m = 1; m < _.length; m++)
      t.lineTo(_[m].x, _[m].y);
    t.stroke();
  }
}
class Q {
  constructor() {
    this._x = -1, this._y = -1, this._visible = !1, this._color = "#787B86", this._onMove = null;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get visible() {
    return this._visible;
  }
  setOnMove(t) {
    this._onMove = t;
  }
  move(t, e) {
    this._x = t, this._y = e, this._visible = !0, this._onMove && this._onMove(t, e);
  }
  hide() {
    this._visible = !1;
  }
  render(t, e, s, i, o = {}) {
    if (!this._visible) return;
    const n = o.color || this._color, r = 60, l = 20, a = 18;
    t.strokeStyle = n, t.lineWidth = 1, t.setLineDash([4, 4]), t.beginPath(), t.moveTo(0, this._y), t.lineTo(e.width, this._y), t.stroke(), t.beginPath(), t.moveTo(this._x, 0), t.lineTo(this._x, e.height), t.stroke(), t.setLineDash([]);
    const h = s.yToPrice(this._y);
    t.fillStyle = n, t.font = "11px sans-serif", t.textAlign = "left", t.textBaseline = "middle";
    const c = h.toFixed(2), u = e.width - r, _ = Math.max(l / 2, Math.min(e.height - l / 2, this._y));
    t.fillStyle = "#1E222D", t.fillRect(u, _ - l / 2, r, l), t.fillStyle = n, t.fillText(c, u + 4, _);
    const g = i.xToTime(this._x), f = i.formatLabel(g);
    t.textAlign = "center", t.textBaseline = "top";
    const y = Math.max(30, Math.min(e.width - 30, this._x));
    t.fillStyle = "#1E222D", t.fillRect(y - 30, e.height - a, 60, a), t.fillStyle = n, t.fillText(f, y, e.height - a + 2);
  }
}
class tt {
  constructor() {
    this._symbol = "", this._interval = "", this._ohlcv = { o: null, h: null, l: null, c: null, v: null }, this._x = 10, this._y = 10;
  }
  setSymbol(t) {
    this._symbol = t;
  }
  setInterval(t) {
    this._interval = t;
  }
  updateOHLCV(t) {
    t && (this._ohlcv = {
      o: t.open,
      h: t.high,
      l: t.low,
      c: t.close,
      v: t.volume
    });
  }
  render(t, e, s, i, o = {}) {
    const n = [];
    if (this._symbol && n.push({ text: `${this._symbol}${this._interval ? " • " + this._interval : ""}`, bold: !0, color: o.textColor || "#D1D4DC" }), this._ohlcv.o !== null) {
      const u = this._ohlcv.c >= this._ohlcv.o ? o.upColor || "#089981" : o.downColor || "#F23645";
      if (n.push({ text: `O: ${this._ohlcv.o.toFixed(2)}`, color: o.textColor || "#D1D4DC" }), n.push({ text: `H: ${this._ohlcv.h.toFixed(2)}`, color: o.textColor || "#D1D4DC" }), n.push({ text: `L: ${this._ohlcv.l.toFixed(2)}`, color: o.textColor || "#D1D4DC" }), n.push({ text: `C: ${this._ohlcv.c.toFixed(2)}`, bold: !0, color: u }), this._ohlcv.v !== null) {
        const _ = this._ohlcv.v >= 1e6 ? (this._ohlcv.v / 1e6).toFixed(1) + "M" : this._ohlcv.v >= 1e3 ? (this._ohlcv.v / 1e3).toFixed(1) + "K" : this._ohlcv.v.toString();
        n.push({ text: `V: ${_}`, color: o.secondaryColor || "#787B86", small: !0 });
      }
    }
    const r = 16, l = 6, a = Math.max(...n.map((c) => t.measureText(c.text).width)) + l * 2, h = n.length * r + l * 2;
    t.fillStyle = o.bgColor || "rgba(30, 34, 45, 0.8)", t.fillRect(0, 0, a + l, h), t.textBaseline = "top", t.textAlign = "left";
    for (let c = 0; c < n.length; c++) {
      const u = n[c];
      t.font = u.bold ? "bold 11px sans-serif" : u.small ? "10px sans-serif" : "11px sans-serif", t.fillStyle = u.color, t.fillText(u.text, l, l + c * r);
    }
  }
}
class et {
  constructor() {
    this._color = "#2A2E39", this._horizontalLines = 8, this._verticalLines = 10;
  }
  setColor(t) {
    this._color = t;
  }
  setHorizontalLines(t) {
    this._horizontalLines = t;
  }
  setVerticalLines(t) {
    this._verticalLines = t;
  }
  render(t, e, s, i, o = {}) {
    const n = o.color || this._color, r = o.style || "dotted";
    t.strokeStyle = n, t.lineWidth = 0.5, r === "dotted" ? t.setLineDash([2, 4]) : r === "dashed" ? t.setLineDash([4, 4]) : t.setLineDash([]);
    const l = e.height / this._horizontalLines;
    for (let h = 0; h <= this._horizontalLines; h++) {
      const c = h * l;
      t.beginPath(), t.moveTo(0, c), t.lineTo(e.width, c), t.stroke();
    }
    const a = e.width / this._verticalLines;
    for (let h = 0; h <= this._verticalLines; h++) {
      const c = h * a;
      t.beginPath(), t.moveTo(c, 0), t.lineTo(c, e.height), t.stroke();
    }
    t.setLineDash([]);
  }
}
class st {
  constructor() {
    this._bars = [], this._paginationToken = null, this._hasMoreHistory = !1;
  }
  add(t) {
    if (!(!t || t.length === 0)) {
      for (const e of t) {
        const s = this._bars.find((i) => i.time === e.time);
        s ? Object.assign(s, e) : this._bars.push(e);
      }
      this._sort();
    }
  }
  update(t) {
    if (!t) return;
    const e = this._bars[this._bars.length - 1];
    e && t.time === e.time ? Object.assign(e, t) : (this._bars.push(t), this._sort());
  }
  getRange(t, e) {
    return this._bars.filter((s) => s.time >= t && s.time <= e);
  }
  getLast() {
    return this._bars.length > 0 ? this._bars[this._bars.length - 1] : null;
  }
  getFirst() {
    return this._bars.length > 0 ? this._bars[0] : null;
  }
  getAll() {
    return [...this._bars];
  }
  count() {
    return this._bars.length;
  }
  clear() {
    this._bars = [], this._paginationToken = null, this._hasMoreHistory = !1;
  }
  setPaginationToken(t) {
    this._paginationToken = t, this._hasMoreHistory = t !== null;
  }
  getPaginationToken() {
    return this._paginationToken;
  }
  hasMore() {
    return this._hasMoreHistory;
  }
  _sort() {
    this._bars.sort((t, e) => t.time - e.time);
  }
}
class it {
  constructor(t) {
    this._cache = t, this._barCompleted = null, this._barUpdated = null;
  }
  onBarCompleted(t) {
    this._barCompleted = t;
  }
  onBarUpdated(t) {
    this._barUpdated = t;
  }
  update(t) {
    if (!t || t.time == null || t.close == null) return;
    const e = this._cache.getLast();
    if (!e || t.time > e.time) {
      const s = {
        time: t.time,
        open: t.close,
        high: t.close,
        low: t.close,
        close: t.close,
        volume: t.volume || 0
      };
      this._cache.add([s]), this._barCompleted && this._barCompleted(s);
    } else t.time === e.time && (e.high = Math.max(e.high, t.close), e.low = Math.min(e.low, t.close), e.close = t.close, t.volume != null && (e.volume = (e.volume || 0) + t.volume), this._cache.update(e), this._barUpdated && this._barUpdated(e));
  }
  updateBar(t) {
    this._cache.update(t);
    const e = this._cache.getLast();
    e && e.time === t.time && this._barUpdated && this._barUpdated(e);
  }
}
class nt {
  constructor(t, e, s, i) {
    this._container = t, this._symbol = e || "AAPL", this._interval = s || "1D", this._datafeed = i, this._chartStyle = 0, this._studies = [];
    const o = t.clientWidth || 800, n = t.clientHeight || 600;
    this._renderer = new X(t, o, n), this._viewport = new j(o, n), this._priceScale = new H(n, T.LINEAR), this._timeScale = new G(o, 6), this._cache = new st(), this._updater = new it(this._cache), this._candlestickRenderer = new U(), this._barRenderer = new J(), this._lineRenderer = new q(), this._areaRenderer = new Z(), this._baselineRenderer = new K(), this._crosshair = new Q(), this._legend = new tt(), this._grid = new et(), this._bars = [], this._options = { theme: "dark" }, this._setupMouse(), this._setupData(), this._startLoop();
  }
  setSymbol(t) {
    this._symbol = t, this._legend.setSymbol(t);
  }
  setInterval(t) {
    this._interval = t, this._legend.setInterval(t);
  }
  getSymbol() {
    return this._symbol;
  }
  getInterval() {
    return this._interval;
  }
  addStudy(t) {
    this._studies.push(t);
  }
  setData(t) {
    this._bars = t || [], this._cache.clear(), this._cache.add(t), t.length > 0 && (this._viewport.fit(t), this._priceScale.autoScale(t), this._legend.setSymbol(this._symbol), this._legend.setInterval(this._interval));
  }
  addBar(t) {
    this._bars.push(t), this._updater.update(t);
  }
  setChartStyle(t) {
    this._chartStyle = t;
  }
  destroy() {
    this._renderer.destroy();
  }
  _setupMouse() {
    this._renderer.canvas.addEventListener("mousemove", (t) => {
      const e = this._renderer.canvas.getBoundingClientRect(), s = t.clientX - e.left, i = t.clientY - e.top;
      this._crosshair.move(s, i), this._updateLegendFromCrosshair(s, i);
    }), this._renderer.canvas.addEventListener("mouseleave", () => {
      this._crosshair.hide();
    }), this._renderer.canvas.addEventListener("wheel", (t) => {
      t.preventDefault();
      const e = this._renderer.canvas.getBoundingClientRect(), s = t.clientX - e.left, i = t.deltaY > 0 ? 1.1 : 0.9;
      this._viewport.zoom(i, s);
    });
  }
  _updateLegendFromCrosshair(t, e) {
    if (!this._bars || this._bars.length === 0) return;
    const s = this._viewport.xToTime(t), i = this._bars.reduce(
      (o, n) => Math.abs(n.time - s) < Math.abs(o.time - s) ? n : o
    );
    this._legend.updateOHLCV(i);
  }
  _setupData() {
    this._datafeed && typeof this._datafeed.getBars == "function" && this._datafeed.getBars(this._symbol, this._interval, (t) => {
      this.setData(t);
    });
  }
  _startLoop() {
    const t = () => {
      this._render(), requestAnimationFrame(t);
    };
    requestAnimationFrame(t);
  }
  _render() {
    if (!this._bars || this._bars.length === 0) return;
    const t = this._viewport.getVisibleBars(this._bars);
    t.length > 0 && this._priceScale.autoScale(t), this._renderer.clear(), this._grid.render(this._renderer.ctx, this._viewport, this._priceScale, this._timeScale, {
      color: this._options.theme === "dark" ? "#2A2E39" : "#E0E0E0",
      style: "dotted"
    });
    const e = this._options.theme === "dark" ? { upColor: "#089981", downColor: "#F23645", wickColor: "#D1D4DC" } : { upColor: "#26A69A", downColor: "#EF5350", wickColor: "#212121" };
    switch (this._chartStyle) {
      case 1:
        this._barRenderer.render(this._renderer.ctx, t, this._viewport, this._priceScale, this._timeScale, e);
        break;
      case 2:
        this._lineRenderer.render(this._renderer.ctx, t, this._viewport, this._priceScale, this._timeScale, { color: "#2196F3" });
        break;
      case 3:
        this._areaRenderer.render(this._renderer.ctx, t, this._viewport, this._priceScale, this._timeScale, { lineColor: "#2196F3", topColor: "rgba(33,150,243,0.3)" });
        break;
      default:
        this._candlestickRenderer.render(this._renderer.ctx, t, this._viewport, this._priceScale, this._timeScale, e);
    }
    for (const s of this._studies)
      if (s._renderer) {
        const i = s.calculate(this._bars);
        s._renderer.render(this._renderer.ctx, i, this._viewport, this._priceScale, {
          bars: this._bars,
          ...s._renderOptions || {}
        });
      }
    this._crosshair.render(this._renderer.ctx, this._viewport, this._priceScale, this._timeScale, {
      color: "#787B86"
    }), this._legend.render(this._renderer.ctx, this._viewport, this._priceScale, this._timeScale, {
      textColor: "#D1D4DC",
      secondaryColor: "#787B86",
      upColor: "#089981",
      downColor: "#F23645",
      bgColor: "rgba(30,34,45,0.8)"
    });
  }
}
class ot {
  constructor(t) {
    if (this._options = t || {}, this._container = typeof t.container == "string" ? document.querySelector(t.container) : t.container, !this._container) throw new Error("Widget requires a valid container");
    this._emitter = { _handlers: {}, emit(e, s) {
      (this._handlers[e] || []).forEach((i) => i(s));
    }, on(e, s) {
      (this._handlers[e] = this._handlers[e] || []).push(s);
    } }, this._stateMachine = new C(this._emitter), this._themeManager = new E(this._container), this._layoutManager = new V(), this._datafeed = t.datafeed || null, this._symbol = t.symbol || "AAPL", this._interval = t.interval || "1D", this._chart = null, this._studies = [], this._init();
  }
  _init() {
    this._options.theme && this._themeManager.apply(this._options.theme), this._stateMachine.transition("loading"), this._chart = new nt(this._container, this._symbol, this._interval, this._datafeed), this._stateMachine.transition("ready"), this._stateMachine.transition("active"), this._options.symbol && this._chart.setSymbol(this._options.symbol), this._options.interval && this._chart.setInterval(this._options.interval);
  }
  chart() {
    return this._chart;
  }
  setSymbol(t) {
    this._symbol = t, this._chart && this._chart.setSymbol(t);
  }
  setInterval(t) {
    this._interval = t, this._chart && this._chart.setInterval(t);
  }
  changeTheme(t) {
    this._themeManager.apply(t), this._chart && (this._chart._options.theme = t);
  }
  addStudy(t, e) {
    const s = this._options.studyRegistry;
    if (!s) return null;
    const i = s.create(t, e);
    return this._studies.push(i), this._chart && this._chart.addStudy(i), i;
  }
  remove() {
    this._chart && this._chart.destroy(), this._stateMachine.destroy();
  }
  get state() {
    return this._stateMachine.state;
  }
}
class rt {
  constructor() {
    this._tools = /* @__PURE__ */ new Map();
  }
  register(t, e) {
    if (this._tools.has(t))
      throw new Error(`Tool already registered: ${t}`);
    this._tools.set(t, e);
  }
  create(t, e = {}) {
    if (!this._tools.has(t))
      throw new Error(`Unknown tool: ${t}`);
    const s = this._tools.get(t), i = new s();
    return e.points && (i.points = e.points), e.style && (i.style = { ...i.style, ...e.style }), i;
  }
  getNames() {
    return Array.from(this._tools.keys());
  }
  getClass(t) {
    return this._tools.get(t) || null;
  }
}
class lt {
  constructor() {
    this.name = "TrendLine", this.icon = "↗", this.cursor = "crosshair", this.maxPoints = 2, this.points = [], this.style = { color: "#2196F3", width: 2, extend: !1 };
  }
  render(t, e, s, i, o = {}) {
    if (this.points.length < 2) return;
    const n = { ...this.style, ...o }, r = this._toPixel(this.points[0], e, s, i), l = this._toPixel(this.points[1], e, s, i);
    if (!(r == null || l == null)) {
      if (t.strokeStyle = n.color, t.lineWidth = n.width, t.beginPath(), n.extend) {
        const a = l.x - r.x, h = l.y - r.y;
        if (a === 0)
          t.moveTo(r.x, 0), t.lineTo(l.x, e.height);
        else {
          const c = h / a, u = r.y + c * -r.x, _ = r.y + c * (e.width - r.x);
          t.moveTo(0, u), t.lineTo(e.width, _);
        }
      } else
        t.moveTo(r.x, r.y), t.lineTo(l.x, l.y);
      t.stroke();
    }
  }
  hitTest(t, e, s, i, o, n = 5) {
    if (this.points.length < 2) return !1;
    const r = this._toPixel(this.points[0], s, i, o), l = this._toPixel(this.points[1], s, i, o);
    return r == null || l == null ? !1 : this._distToSegment(t, e, r.x, r.y, l.x, l.y) <= n;
  }
  _toPixel(t, e, s, i) {
    return t.time == null || t.price == null ? null : {
      x: e.timeToX(t.time),
      y: s.priceToY(t.price)
    };
  }
  _distToSegment(t, e, s, i, o, n) {
    const r = o - s, l = n - i, a = r * r + l * l;
    if (a === 0) return Math.hypot(t - s, e - i);
    let h = ((t - s) * r + (e - i) * l) / a;
    return h = Math.max(0, Math.min(1, h)), Math.hypot(t - (s + h * r), e - (i + h * l));
  }
}
class ht {
  constructor() {
    this.name = "HorizontalLine", this.icon = "—", this.cursor = "crosshair", this.maxPoints = 1, this.points = [], this.style = { color: "#FF9800", width: 1, labelColor: "#FFFFFF" };
  }
  render(t, e, s, i, o = {}) {
    if (this.points.length < 1) return;
    const n = { ...this.style, ...o }, r = s.priceToY(this.points[0].price);
    if (r == null) return;
    t.strokeStyle = n.color, t.lineWidth = n.width, t.setLineDash([4, 4]), t.beginPath(), t.moveTo(0, r), t.lineTo(e.width, r), t.stroke(), t.setLineDash([]);
    const l = this.points[0].price.toFixed(2);
    t.font = "11px sans-serif", t.textAlign = "left", t.textBaseline = "middle";
    const a = t.measureText(l).width, h = e.width - a - 12, c = Math.max(10, Math.min(e.height - 10, r));
    t.fillStyle = n.color, t.fillRect(h - 4, c - 8, a + 12, 16), t.fillStyle = n.labelColor, t.fillText(l, h + 2, c);
  }
  hitTest(t, e, s, i, o, n = 5) {
    if (this.points.length < 1) return !1;
    const r = i.priceToY(this.points[0].price);
    return r != null && Math.abs(e - r) <= n;
  }
}
class at {
  constructor() {
    this.name = "VerticalLine", this.icon = "|", this.cursor = "crosshair", this.maxPoints = 1, this.points = [], this.style = { color: "#4CAF50", width: 1, labelColor: "#FFFFFF" };
  }
  render(t, e, s, i, o = {}) {
    if (this.points.length < 1) return;
    const n = { ...this.style, ...o }, r = e.timeToX(this.points[0].time);
    if (r == null) return;
    t.strokeStyle = n.color, t.lineWidth = n.width, t.setLineDash([4, 4]), t.beginPath(), t.moveTo(r, 0), t.lineTo(r, e.height), t.stroke(), t.setLineDash([]);
    const l = i.formatLabel(this.points[0].time);
    t.font = "11px sans-serif", t.textAlign = "center", t.textBaseline = "bottom";
    const a = t.measureText(l).width, h = Math.max(a / 2 + 4, Math.min(e.width - a / 2 - 4, r));
    t.fillStyle = n.color, t.fillRect(h - a / 2 - 4, e.height - 22, a + 8, 18), t.fillStyle = n.labelColor, t.fillText(l, h, e.height - 4);
  }
  hitTest(t, e, s, i, o, n = 5) {
    if (this.points.length < 1) return !1;
    const r = s.timeToX(this.points[0].time);
    return r != null && Math.abs(t - r) <= n;
  }
}
class ct {
  constructor() {
    this.name = "Rectangle", this.icon = "▭", this.cursor = "crosshair", this.maxPoints = 2, this.points = [], this.style = { color: "#9C27B0", width: 1, fill: !1, fillColor: "rgba(156, 39, 176, 0.15)" };
  }
  render(t, e, s, i, o = {}) {
    if (this.points.length < 2) return;
    const n = { ...this.style, ...o }, r = this._toPixel(this.points[0], e, s, i), l = this._toPixel(this.points[1], e, s, i);
    if (r == null || l == null) return;
    const a = Math.min(r.x, l.x), h = Math.min(r.y, l.y), c = Math.abs(l.x - r.x), u = Math.abs(l.y - r.y);
    n.fill && (t.fillStyle = n.fillColor, t.fillRect(a, h, c, u)), t.strokeStyle = n.color, t.lineWidth = n.width, t.strokeRect(a, h, c, u);
  }
  hitTest(t, e, s, i, o, n = 5) {
    if (this.points.length < 2) return !1;
    const r = this._toPixel(this.points[0], s, i, o), l = this._toPixel(this.points[1], s, i, o);
    if (r == null || l == null) return !1;
    const a = Math.min(r.x, l.x), h = Math.min(r.y, l.y), c = Math.abs(l.x - r.x), u = Math.abs(l.y - r.y);
    return t >= a - n && t <= a + c + n && e >= h - n && e <= h + u + n ? t < a + n || t > a + c - n || e < h + n || e > h + u - n || !0 : !1;
  }
  _toPixel(t, e, s, i) {
    return t.time == null || t.price == null ? null : {
      x: e.timeToX(t.time),
      y: s.priceToY(t.price)
    };
  }
}
class _t {
  constructor() {
    this.name = "Text", this.icon = "T", this.cursor = "crosshair", this.maxPoints = 1, this.points = [], this.style = {
      color: "#FFFFFF",
      bgColor: "rgba(30, 34, 45, 0.85)",
      font: "13px sans-serif",
      alignment: "center",
      text: ""
    };
  }
  render(t, e, s, i, o = {}) {
    if (this.points.length < 1) return;
    const n = { ...this.style, ...o };
    if (!n.text) return;
    const r = this._toPixel(this.points[0], e, s, i);
    if (r == null) return;
    t.font = n.font, t.textBaseline = "middle";
    const a = t.measureText(n.text).width, h = parseInt(n.font, 10) || 13, c = 6, u = r.x - a / 2 - c, _ = r.y - h / 2 - c, g = a + c * 2, f = h + c * 2;
    t.fillStyle = n.bgColor, t.fillRect(u, _, g, f), t.fillStyle = n.color, t.textAlign = "center", t.fillText(n.text, r.x, r.y);
  }
  hitTest(t, e, s, i, o, n = 5) {
    if (this.points.length < 1) return !1;
    const r = this._toPixel(this.points[0], s, i, o);
    return r == null ? !1 : Math.hypot(t - r.x, e - r.y) <= n * 3;
  }
  _toPixel(t, e, s, i) {
    return t.time == null || t.price == null ? null : {
      x: e.timeToX(t.time),
      y: s.priceToY(t.price)
    };
  }
}
class ut {
  constructor() {
    this.name = "FibonacciRetracement", this.icon = "Fib", this.cursor = "crosshair", this.maxPoints = 2, this.points = [], this.style = { color: "#E91E63", width: 1, labelColor: "#FFFFFF", levels: [0, 23.6, 38.2, 50, 61.8, 78.6, 100] };
  }
  render(t, e, s, i, o = {}) {
    if (this.points.length < 2) return;
    const n = { ...this.style, ...o }, r = Math.max(this.points[0].price, this.points[1].price), l = Math.min(this.points[0].price, this.points[1].price), a = r - l;
    if (a !== 0)
      for (const h of n.levels) {
        const c = r - a * (h / 100), u = s.priceToY(c);
        if (u == null) continue;
        const _ = 1 - h / 100 * 0.6;
        t.strokeStyle = n.color, t.globalAlpha = _, t.lineWidth = n.width, t.setLineDash([2, 3]), t.beginPath(), t.moveTo(0, u), t.lineTo(e.width, u), t.stroke(), t.setLineDash([]), t.globalAlpha = 1;
        const g = `${h}% (${c.toFixed(2)})`;
        t.font = "10px sans-serif", t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = n.color, t.globalAlpha = _, t.fillText(g, 4, u - 6), t.globalAlpha = 1;
      }
  }
  hitTest(t, e, s, i, o, n = 5) {
    if (this.points.length < 2) return !1;
    const r = this._pixel(this.points[0], s, i, o), l = this._pixel(this.points[1], s, i, o);
    return r == null || l == null ? !1 : Math.hypot(t - r.x, e - r.y) <= n || Math.hypot(t - l.x, e - l.y) <= n;
  }
  _pixel(t, e, s, i) {
    return t.time == null || t.price == null ? null : { x: e.timeToX(t.time), y: s.priceToY(t.price) };
  }
}
class dt {
  constructor() {
    this.name = "FibonacciExtension", this.icon = "FibExt", this.cursor = "crosshair", this.maxPoints = 3, this.points = [], this.style = { color: "#00BCD4", width: 1, labelColor: "#FFFFFF", levels: [61.8, 100, 161.8, 261.8] };
  }
  render(t, e, s, i, o = {}) {
    if (this.points.length < 3) return;
    const n = { ...this.style, ...o };
    this.points[0].price;
    const r = this.points[1].price, a = this.points[2].price - r;
    for (const h of n.levels) {
      const c = a * (h / 100), u = r + c, _ = s.priceToY(u);
      if (_ == null) continue;
      const g = 0.4 + (1 - h / 261.8) * 0.6;
      t.strokeStyle = n.color, t.globalAlpha = g, t.lineWidth = n.width, t.setLineDash([3, 3]), t.beginPath(), t.moveTo(0, _), t.lineTo(e.width, _), t.stroke(), t.setLineDash([]), t.globalAlpha = 1;
      const f = `${h}% (${u.toFixed(2)})`;
      t.font = "10px sans-serif", t.textAlign = "right", t.textBaseline = "bottom", t.fillStyle = n.color, t.globalAlpha = g, t.fillText(f, e.width - 4, _ - 4), t.globalAlpha = 1;
    }
  }
  hitTest(t, e, s, i, o, n = 5) {
    if (this.points.length < 3) return !1;
    for (const r of this.points) {
      const l = this._pixel(r, s, i, o);
      if (l && Math.hypot(t - l.x, e - l.y) <= n) return !0;
    }
    return !1;
  }
  _pixel(t, e, s, i) {
    return t.time == null || t.price == null ? null : { x: e.timeToX(t.time), y: s.priceToY(t.price) };
  }
}
class gt {
  constructor() {
    this.name = "FibonacciFan", this.icon = "Fan", this.cursor = "crosshair", this.maxPoints = 2, this.points = [], this.style = { color: "#FF5722", width: 1, labelColor: "#FFFFFF", levels: [38.2, 50, 61.8] };
  }
  render(t, e, s, i, o = {}) {
    if (this.points.length < 2) return;
    const n = { ...this.style, ...o }, r = this.points[0], l = this.points[1], a = e.timeToX(r.time), h = s.priceToY(r.price), c = e.timeToX(l.time), u = s.priceToY(l.price);
    if (a == null || h == null || c == null || u == null) return;
    const _ = c - a, g = u - h;
    if (_ !== 0)
      for (const f of n.levels) {
        const y = Math.atan2(Math.abs(g), Math.abs(_)) * (f / 100), S = Math.tan(y) * Math.sign(g) / Math.sign(_);
        t.strokeStyle = n.color, t.globalAlpha = 0.7, t.lineWidth = n.width, t.setLineDash([2, 4]), t.beginPath(), t.moveTo(a, h), _ > 0 ? t.lineTo(e.width, h + S * (e.width - a)) : t.lineTo(0, h + S * -a), t.stroke(), t.setLineDash([]), t.globalAlpha = 1, t.font = "10px sans-serif", t.fillStyle = n.color, t.textAlign = "left", t.textBaseline = "bottom", t.fillText(`${f}%`, 4, h - 4 - n.levels.indexOf(f) * 14);
      }
  }
  hitTest(t, e, s, i, o, n = 5) {
    if (this.points.length < 1) return !1;
    const r = this._pixel(this.points[0], s, i, o);
    return r != null && Math.hypot(t - r.x, e - r.y) <= n;
  }
  _pixel(t, e, s, i) {
    return t.time == null || t.price == null ? null : { x: e.timeToX(t.time), y: s.priceToY(t.price) };
  }
}
const v = new rt();
v.register("TrendLine", lt);
v.register("HorizontalLine", ht);
v.register("VerticalLine", at);
v.register("Rectangle", ct);
v.register("Text", _t);
v.register("FibonacciRetracement", ut);
v.register("FibonacciExtension", dt);
v.register("FibonacciFan", gt);
class mt {
  constructor() {
    this._studies = /* @__PURE__ */ new Map();
  }
  register(t, e) {
    if (this._studies.has(t))
      throw new Error(`Study already registered: ${t}`);
    this._studies.set(t, e);
  }
  create(t, e = {}) {
    if (!this._studies.has(t))
      throw new Error(`Unknown study: ${t}`);
    const s = this._studies.get(t);
    return new s(e);
  }
  getNames() {
    return Array.from(this._studies.keys());
  }
  getInputs(t) {
    return this._studies.has(t) ? this._studies.get(t).inputs || [] : null;
  }
  getOutputs(t) {
    return this._studies.has(t) ? this._studies.get(t).outputs || [] : null;
  }
}
class A {
  constructor(t = {}) {
    this.type = t.type || "SMA", this.length = t.length || 14, this.source = t.source || "close";
  }
  calculate(t) {
    if (!t || t.length < this.length) return [];
    const e = t.map((s) => s[this.source]);
    switch (this.type) {
      case "SMA":
        return this._sma(e);
      case "EMA":
        return this._ema(e);
      case "WMA":
        return this._wma(e);
      case "SMMA":
        return this._smma(e);
      default:
        return this._sma(e);
    }
  }
  _sma(t) {
    const e = [];
    for (let s = 0; s < t.length; s++)
      if (s < this.length - 1)
        e.push(null);
      else {
        let i = 0;
        for (let o = s - this.length + 1; o <= s; o++) i += t[o];
        e.push(i / this.length);
      }
    return e;
  }
  _ema(t) {
    const e = [], s = 2 / (this.length + 1);
    let i = null;
    for (let o = 0; o < t.length; o++) {
      if (i === null) {
        let n = 0;
        if (o < this.length - 1) {
          e.push(null);
          continue;
        }
        for (let r = o - this.length + 1; r <= o; r++) n += t[r];
        i = n / this.length;
      } else
        i = s * t[o] + (1 - s) * i;
      e.push(i);
    }
    return e;
  }
  _wma(t) {
    const e = [], s = this.length * (this.length + 1) / 2;
    for (let i = 0; i < t.length; i++)
      if (i < this.length - 1)
        e.push(null);
      else {
        let o = 0;
        for (let n = 0; n < this.length; n++)
          o += t[i - n] * (this.length - n);
        e.push(o / s);
      }
    return e;
  }
  _smma(t) {
    const e = [];
    let s = null;
    for (let i = 0; i < t.length; i++) {
      if (s === null) {
        if (i < this.length - 1) {
          e.push(null);
          continue;
        }
        let o = 0;
        for (let n = i - this.length + 1; n <= i; n++) o += t[n];
        s = o / this.length;
      } else
        s = (s * (this.length - 1) + t[i]) / this.length;
      e.push(s);
    }
    return e;
  }
}
b(A, "inputs", [
  { name: "type", type: "select", options: ["SMA", "EMA", "WMA", "SMMA"], default: "SMA" },
  { name: "length", type: "integer", min: 1, max: 200, default: 14 },
  { name: "source", type: "select", options: ["close", "high", "low", "open"], default: "close" }
]), b(A, "outputs", ["MA"]);
class F {
  constructor(t = {}) {
    this.length = t.length || 14;
  }
  calculate(t) {
    if (!t || t.length < this.length + 1) return [];
    const e = t.map((l) => l.close), s = [], i = [];
    for (let l = 1; l < e.length; l++) {
      const a = e[l] - e[l - 1];
      s.push(Math.max(0, a)), i.push(Math.max(0, -a));
    }
    const o = this._rma(s, this.length), n = this._rma(i, this.length), r = [];
    for (let l = 0; l < e.length; l++)
      if (l <= this.length)
        r.push(null);
      else {
        const a = o[l - 1], h = n[l - 1], u = 100 - 100 / (1 + (h === 0 ? 1 / 0 : a / h));
        r.push(u);
      }
    return r;
  }
  _rma(t, e) {
    const s = [];
    let i = null;
    for (let o = 0; o < t.length; o++) {
      if (i === null) {
        if (o < e - 1) {
          s.push(null);
          continue;
        }
        let n = 0;
        for (let r = o - e + 1; r <= o; r++) n += t[r];
        i = n / e;
      } else
        i = (i * (e - 1) + t[o]) / e;
      s.push(i);
    }
    return s;
  }
}
b(F, "inputs", [
  { name: "length", type: "integer", min: 1, max: 100, default: 14 }
]), b(F, "outputs", ["RSI"]);
class D {
  constructor(t = {}) {
    this.fast = t.fast || 12, this.slow = t.slow || 26, this.signal = t.signal || 9;
  }
  calculate(t) {
    if (!t || t.length < this.slow) return [];
    const e = t.map((a) => a.close), s = this._ema(e, this.fast), i = this._ema(e, this.slow), o = [];
    for (let a = 0; a < e.length; a++)
      s[a] === null || i[a] === null ? o.push(null) : o.push(s[a] - i[a]);
    const n = this._ema(o.filter((a) => a !== null), this.signal), r = [];
    let l = 0;
    for (let a = 0; a < e.length; a++)
      if (o[a] === null)
        r.push({ macd: null, signal: null, histogram: null });
      else {
        const h = n[l], c = h !== null ? o[a] - h : null;
        r.push({ macd: o[a], signal: h, histogram: c }), l++;
      }
    return r;
  }
  _ema(t, e) {
    const s = [], i = 2 / (e + 1);
    let o = null;
    for (let n = 0; n < t.length; n++) {
      if (t[n] === null) {
        s.push(null);
        continue;
      }
      if (o === null) {
        if (n < e - 1) {
          s.push(null);
          continue;
        }
        let r = 0;
        for (let l = n - e + 1; l <= n; l++) r += t[l];
        o = r / e;
      } else
        o = i * t[n] + (1 - i) * o;
      s.push(o);
    }
    return s;
  }
}
b(D, "inputs", [
  { name: "fast", type: "integer", min: 1, max: 100, default: 12 },
  { name: "slow", type: "integer", min: 1, max: 200, default: 26 },
  { name: "signal", type: "integer", min: 1, max: 100, default: 9 }
]), b(D, "outputs", ["MACD", "Signal", "Histogram"]);
class L {
  constructor(t = {}) {
    this.length = t.length || 20, this.mult = t.mult || 2;
  }
  calculate(t) {
    if (!t || t.length < this.length) return [];
    const e = t.map((i) => i.close), s = [];
    for (let i = 0; i < e.length; i++)
      if (i < this.length - 1)
        s.push({ middle: null, upper: null, lower: null });
      else {
        let o = 0;
        for (let a = i - this.length + 1; a <= i; a++) o += e[a];
        const n = o / this.length;
        let r = 0;
        for (let a = i - this.length + 1; a <= i; a++)
          r += (e[a] - n) ** 2;
        const l = Math.sqrt(r / this.length);
        s.push({
          middle: n,
          upper: n + this.mult * l,
          lower: n - this.mult * l
        });
      }
    return s;
  }
}
b(L, "inputs", [
  { name: "length", type: "integer", min: 1, max: 200, default: 20 },
  { name: "mult", type: "float", min: 0.1, max: 5, default: 2 }
]), b(L, "outputs", ["Middle", "Upper", "Lower"]);
class R {
  constructor(t = {}) {
    this.maLength = t.maLength || 20;
  }
  calculate(t) {
    if (!t || t.length === 0) return [];
    const e = t.map((i) => i.volume || 0), s = [];
    for (let i = 0; i < e.length; i++) {
      let o = null;
      if (i >= this.maLength - 1) {
        let n = 0;
        for (let r = i - this.maLength + 1; r <= i; r++) n += e[r];
        o = n / this.maLength;
      }
      s.push({ volume: e[i], volumeMA: o });
    }
    return s;
  }
}
b(R, "inputs", [
  { name: "maLength", type: "integer", min: 1, max: 200, default: 20 }
]), b(R, "outputs", ["Volume", "VolumeMA"]);
const M = new mt();
M.register("MovingAverage", A);
M.register("RSI", F);
M.register("MACD", D);
M.register("BollingerBands", L);
M.register("Volume", R);
x.widget = ot;
x._toolRegistry = v;
x._studyRegistry = M;
export {
  W as ChartStyle,
  z as CrosshairMode,
  N as PriceScaleMode,
  x as TradingView,
  ot as Widget,
  x as default,
  M as studyRegistry,
  v as toolRegistry
};
