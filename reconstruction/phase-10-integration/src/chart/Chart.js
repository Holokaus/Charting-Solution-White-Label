import { CanvasRenderer } from '../../../phase-07-chart-engine/src/core/CanvasRenderer.js';
import { Viewport } from '../../../phase-07-chart-engine/src/core/Viewport.js';
import { PriceScale, PriceMode } from '../../../phase-07-chart-engine/src/scales/PriceScale.js';
import { TimeScale } from '../../../phase-07-chart-engine/src/scales/TimeScale.js';
import { CandlestickRenderer } from '../../../phase-07-chart-engine/src/series/CandlestickRenderer.js';
import { BarRenderer } from '../../../phase-07-chart-engine/src/series/BarRenderer.js';
import { LineRenderer } from '../../../phase-07-chart-engine/src/series/LineRenderer.js';
import { AreaRenderer } from '../../../phase-07-chart-engine/src/series/AreaRenderer.js';
import { BaselineRenderer } from '../../../phase-07-chart-engine/src/series/BaselineRenderer.js';
import { Crosshair } from '../../../phase-07-chart-engine/src/overlay/Crosshair.js';
import { Legend } from '../../../phase-07-chart-engine/src/overlay/Legend.js';
import { Grid } from '../../../phase-07-chart-engine/src/overlay/Grid.js';
import { BarCache } from '../../../phase-07-chart-engine/src/data/BarCache.js';
import { RealtimeUpdater } from '../../../phase-07-chart-engine/src/data/RealtimeUpdater.js';

export class Chart {
  constructor(container, symbol, interval, datafeed) {
    this._container = container;
    this._symbol = symbol || 'AAPL';
    this._interval = interval || '1D';
    this._datafeed = datafeed;
    this._chartStyle = 0;
    this._studies = [];

    const w = container.clientWidth || 800;
    const h = container.clientHeight || 600;

    this._renderer = new CanvasRenderer(container, w, h);
    this._viewport = new Viewport(w, h);
    this._priceScale = new PriceScale(h, PriceMode.LINEAR);
    this._timeScale = new TimeScale(w, 6);
    this._cache = new BarCache();
    this._updater = new RealtimeUpdater(this._cache);

    this._candlestickRenderer = new CandlestickRenderer();
    this._barRenderer = new BarRenderer();
    this._lineRenderer = new LineRenderer();
    this._areaRenderer = new AreaRenderer();
    this._baselineRenderer = new BaselineRenderer();

    this._crosshair = new Crosshair();
    this._legend = new Legend();
    this._grid = new Grid();

    this._bars = [];
    this._options = { theme: 'dark' };

    this._setupMouse();
    this._setupData();
    this._startLoop();
  }

  setSymbol(symbol) {
    this._symbol = symbol;
    this._legend.setSymbol(symbol);
  }

  setInterval(interval) {
    this._interval = interval;
    this._legend.setInterval(interval);
  }

  getSymbol() { return this._symbol; }
  getInterval() { return this._interval; }

  addStudy(study) {
    this._studies.push(study);
  }

  setData(bars) {
    this._bars = bars || [];
    this._cache.clear();
    this._cache.add(bars);
    if (bars.length > 0) {
      this._viewport.fit(bars);
      this._priceScale.autoScale(bars);
      this._legend.setSymbol(this._symbol);
      this._legend.setInterval(this._interval);
    }
  }

  addBar(bar) {
    this._bars.push(bar);
    this._updater.update(bar);
  }

  setChartStyle(style) {
    this._chartStyle = style;
  }

  destroy() {
    this._renderer.destroy();
  }

  _setupMouse() {
    this._renderer.canvas.addEventListener('mousemove', (e) => {
      const rect = this._renderer.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this._crosshair.move(x, y);
      this._updateLegendFromCrosshair(x, y);
    });
    this._renderer.canvas.addEventListener('mouseleave', () => {
      this._crosshair.hide();
    });
    this._renderer.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = this._renderer.canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const factor = e.deltaY > 0 ? 1.1 : 0.9;
      this._viewport.zoom(factor, cx);
    });
  }

  _updateLegendFromCrosshair(x, y) {
    if (!this._bars || this._bars.length === 0) return;
    const t = this._viewport.xToTime(x);
    const nearest = this._bars.reduce((prev, curr) =>
      Math.abs(curr.time - t) < Math.abs(prev.time - t) ? curr : prev
    );
    this._legend.updateOHLCV(nearest);
  }

  _setupData() {
    if (this._datafeed && typeof this._datafeed.getBars === 'function') {
      this._datafeed.getBars(this._symbol, this._interval, (bars) => {
        this.setData(bars);
      });
    }
  }

  _startLoop() {
    const loop = () => {
      this._render();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  _render() {
    if (!this._bars || this._bars.length === 0) return;

    const visible = this._viewport.getVisibleBars(this._bars);
    if (visible.length > 0) {
      this._priceScale.autoScale(visible);
    }

    this._renderer.clear();

    this._grid.render(this._renderer.ctx, this._viewport, this._priceScale, this._timeScale, {
      color: this._options.theme === 'dark' ? '#2A2E39' : '#E0E0E0',
      style: 'dotted'
    });

    const seriesOptions = this._options.theme === 'dark'
      ? { upColor: '#089981', downColor: '#F23645', wickColor: '#D1D4DC' }
      : { upColor: '#26A69A', downColor: '#EF5350', wickColor: '#212121' };

    switch (this._chartStyle) {
      case 1:
        this._barRenderer.render(this._renderer.ctx, visible, this._viewport, this._priceScale, this._timeScale, seriesOptions);
        break;
      case 2:
        this._lineRenderer.render(this._renderer.ctx, visible, this._viewport, this._priceScale, this._timeScale, { color: '#2196F3' });
        break;
      case 3:
        this._areaRenderer.render(this._renderer.ctx, visible, this._viewport, this._priceScale, this._timeScale, { lineColor: '#2196F3', topColor: 'rgba(33,150,243,0.3)' });
        break;
      default:
        this._candlestickRenderer.render(this._renderer.ctx, visible, this._viewport, this._priceScale, this._timeScale, seriesOptions);
    }

    for (const study of this._studies) {
      if (study._renderer) {
        const studyData = study.calculate(this._bars);
        study._renderer.render(this._renderer.ctx, studyData, this._viewport, this._priceScale, {
          bars: this._bars,
          ...(study._renderOptions || {})
        });
      }
    }

    this._crosshair.render(this._renderer.ctx, this._viewport, this._priceScale, this._timeScale, {
      color: '#787B86'
    });

    this._legend.render(this._renderer.ctx, this._viewport, this._priceScale, this._timeScale, {
      textColor: '#D1D4DC', secondaryColor: '#787B86', upColor: '#089981', downColor: '#F23645', bgColor: 'rgba(30,34,45,0.8)'
    });
  }
}
