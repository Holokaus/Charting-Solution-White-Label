import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TradingView, Widget, ChartStyle, PriceScaleMode, CrosshairMode, toolRegistry, studyRegistry } from '../src/index.js';

describe('TradingView namespace', () => {
  it('exports TradingView as an object', () => {
    expect(typeof TradingView).toBe('object');
  });

  it('TradingView.widget is Widget', () => {
    expect(TradingView.widget).toBe(Widget);
  });

  it('has version set', () => {
    expect(TradingView.version).toBe('30.0.0-reconstructed');
  });
});

describe('Enums', () => {
  it('ChartStyle.CANDLES is 0', () => {
    expect(ChartStyle.CANDLES).toBe(0);
  });

  it('ChartStyle.BARS is 1', () => {
    expect(ChartStyle.BARS).toBe(1);
  });

  it('ChartStyle.LINE is 2', () => {
    expect(ChartStyle.LINE).toBe(2);
  });

  it('PriceScaleMode.NORMAL is 0', () => {
    expect(PriceScaleMode.NORMAL).toBe(0);
  });

  it('PriceScaleMode.LOG is 1', () => {
    expect(PriceScaleMode.LOG).toBe(1);
  });

  it('CrosshairMode.NORMAL is 0', () => {
    expect(CrosshairMode.NORMAL).toBe(0);
  });
});

describe('Registries', () => {
  it('toolRegistry has 18 tools', () => {
    expect(toolRegistry.getNames().length).toBe(18);
  });
  it('studyRegistry has 25 studies', () => {

    expect(studyRegistry.getNames().length).toBe(25);
  });
});

describe('Widget', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    container.style.width = '800px';
    container.style.height = '600px';
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  });

  it('creates without throwing', () => {
    expect(() => new Widget({ container, symbol: 'TEST', interval: '1D' })).not.toThrow();
  });

  it('has chart() method', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    expect(typeof widget.chart).toBe('function');
    widget.remove();
  });

  it('has setSymbol() method', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    expect(typeof widget.setSymbol).toBe('function');
    widget.remove();
  });

  it('has setInterval() method', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    expect(typeof widget.setInterval).toBe('function');
    widget.remove();
  });

  it('chart() returns a chart instance', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    const chart = widget.chart();
    expect(chart).not.toBeNull();
    widget.remove();
  });

  it('chart has getSymbol()', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    const chart = widget.chart();
    expect(typeof chart.getSymbol).toBe('function');
    widget.remove();
  });

  it('chart.getSymbol() returns the configured symbol', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    const chart = widget.chart();
    expect(chart.getSymbol()).toBe('TEST');
    widget.remove();
  });

  it('chart has getInterval()', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    const chart = widget.chart();
    expect(typeof chart.getInterval).toBe('function');
    widget.remove();
  });

  it('widget state is destroyed after remove', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    widget.remove();
    expect(widget.state).toBe('destroyed');
  });

  it('chart is null after widget remove', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    const chart = widget.chart();
    widget.remove();
    expect(chart.state).toBe('destroyed');
  });

  it('setSymbol updates chart symbol', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    widget.setSymbol('AAPL');
    expect(widget.chart().getSymbol()).toBe('AAPL');
    widget.remove();
  });

  it('setInterval updates chart interval', () => {
    const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
    widget.setInterval('1H');
    expect(widget.chart().getInterval()).toBe('1H');
    widget.remove();
  });
});
