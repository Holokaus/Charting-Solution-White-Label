import { describe, it, expect } from 'vitest';
import { Stochastic } from '../src/studies/Stochastic.js';
import { CCI } from '../src/studies/CCI.js';
import { ATR } from '../src/studies/ATR.js';
import { OBV } from '../src/studies/OBV.js';
import { VWAP } from '../src/studies/VWAP.js';
import { PivotPoints } from '../src/studies/PivotPoints.js';
import { ParabolicSAR } from '../src/studies/ParabolicSAR.js';
import { Ichimoku } from '../src/studies/Ichimoku.js';
import { ADX } from '../src/studies/ADX.js';
import { Momentum } from '../src/studies/Momentum.js';
import { WilliamsR } from '../src/studies/WilliamsR.js';
import { UltimateOscillator } from '../src/studies/UltimateOscillator.js';
import { MFI } from '../src/studies/MFI.js';
import { ChaikinOsc } from '../src/studies/ChaikinOsc.js';
import { KeltnerChannels } from '../src/studies/KeltnerChannels.js';
import { DonchianChannels } from '../src/studies/DonchianChannels.js';
import { SuperTrend } from '../src/studies/SuperTrend.js';
import { ZigZag } from '../src/studies/ZigZag.js';
import { LinearRegression } from '../src/studies/LinearRegression.js';
import { Correlation } from '../src/studies/Correlation.js';

const makeBars = (closes, extra = {}) =>
  closes.map((c, i) => ({
    open: extra.open ? extra.open[i] : c,
    high: extra.high ? extra.high[i] : c + 1,
    low: extra.low ? extra.low[i] : c - 1,
    close: c,
    volume: extra.volume ? extra.volume[i] : 1000
  }));

describe('Stochastic', () => {
  it('returns null for insufficient data', () => {
    const s = new Stochastic();
    expect(s.calculate([])).toEqual([]);
    expect(s.calculate([{ close: 1 }]).every(v => v.K === null)).toBe(true);
  });
  it('computes K and D values', () => {
    const bars = makeBars([44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]);
    const s = new Stochastic({ kPeriod: 14 });
    const r = s.calculate(bars);
    const valid = r.filter(v => v.K !== null);
    expect(valid.length).toBeGreaterThan(0);
    expect(valid[valid.length - 1].K).toBeGreaterThan(0);
    expect(valid[valid.length - 1].K).toBeLessThanOrEqual(100);
    expect(valid[valid.length - 1].D).not.toBeNull();
  });
  it('handles flat prices', () => {
    const bars = makeBars(Array(20).fill(50));
    const s = new Stochastic({ kPeriod: 5 });
    const r = s.calculate(bars);
    const valid = r.filter(v => v.K !== null);
    expect(valid.length).toBeGreaterThan(0);
    expect(valid[0].K).toBe(50);
  });
});

describe('CCI', () => {
  it('returns empty for empty bars', () => {
    expect(new CCI().calculate([])).toEqual([]);
  });
  it('returns empty for insufficient data', () => {
    const bars = makeBars(Array(5).fill(50));
    expect(new CCI({ length: 10 }).calculate(bars)).toEqual([]);
  });
  it('computes CCI with known trend', () => {
    const bars = makeBars(Array(20).fill(50).map((v, i) => v + i * 2));
    const cci = new CCI({ length: 14 });
    const r = cci.calculate(bars);
    expect(r[13]).not.toBeNull();
    expect(r[19]).toBeGreaterThan(0);
  });
});

describe('ATR', () => {
  it('returns empty for insufficient data', () => {
    expect(new ATR().calculate([{ high: 1, low: 0, close: 0.5 }])).toEqual([]);
  });
  it('computes positive ATR', () => {
    const bars = Array(20).fill(0).map((_, i) => ({ high: 50 + i, low: 40 + i, close: 45 + i }));
    const atr = new ATR({ length: 14 });
    const r = atr.calculate(bars);
    expect(r[14]).not.toBeNull();
    expect(r[14]).toBeGreaterThan(0);
  });
});

describe('OBV', () => {
  it('starts at 0 and accumulates', () => {
    const bars = Array(5).fill(0).map((_, i) => ({ close: 50 + i, volume: 1000 }));
    const obv = new OBV();
    const r = obv.calculate(bars);
    expect(r[0]).toBe(0);
    expect(r[4]).toBeGreaterThan(0);
  });
  it('returns empty for single bar', () => {
    expect(new OBV().calculate([{ close: 50, volume: 1000 }])).toEqual([]);
  });
  it('decreases on down close', () => {
    const bars = [
      { close: 50, volume: 1000 },
      { close: 48, volume: 500 }
    ];
    const r = new OBV().calculate(bars);
    expect(r[1]).toBe(-500);
  });
});

describe('VWAP', () => {
  it('computes cumulative VWAP', () => {
    const bars = makeBars([50, 51, 52], { volume: [1000, 2000, 3000] });
    const v = new VWAP();
    const r = v.calculate(bars);
    expect(r[0]).not.toBeNull();
    expect(r[2]).not.toBeNull();
  });
  it('returns empty for no bars', () => {
    expect(new VWAP().calculate([])).toEqual([]);
  });
});

describe('PivotPoints', () => {
  const bars = makeBars([50, 52, 48, 51, 53]);
  it('computes Traditional pivots', () => {
    const p = new PivotPoints({ type: 'Traditional' });
    const r = p.calculate(bars);
    expect(r[1].PP).not.toBeNull();
    expect(r[1].R1).toBeGreaterThan(r[1].PP);
    expect(r[1].S1).toBeLessThan(r[1].PP);
  });
  it('computes Fibonacci pivots', () => {
    const p = new PivotPoints({ type: 'Fibonacci' });
    const r = p.calculate(bars);
    expect(r[1].PP).not.toBeNull();
  });
  it('returns null for first bar', () => {
    const p = new PivotPoints();
    const r = p.calculate(bars);
    expect(r[0].PP).toBeNull();
  });
});

describe('ParabolicSAR', () => {
  it('trends upward in uptrend', () => {
    const bars = makeBars(Array(30).fill(50).map((v, i) => v + i));
    const psar = new ParabolicSAR();
    const r = psar.calculate(bars);
    expect(r[1]).not.toBeNull();
    expect(r[29]).toBeGreaterThan(r[1]);
  });
  it('returns null for single bar', () => {
    expect(new ParabolicSAR().calculate([{ high: 50, low: 40, close: 45 }])).toEqual([]);
  });
});

describe('Ichimoku', () => {
  it('returns all five lines', () => {
    const bars = makeBars(Array(60).fill(50).map((v, i) => v + Math.sin(i)));
    const ic = new Ichimoku();
    const r = ic.calculate(bars);
    const last = r[r.length - 1];
    expect(last.Tenkan).not.toBeNull();
    expect(last.Kijun).not.toBeNull();
    expect(last.SenkouA).not.toBeNull();
    expect(last.SenkouB).not.toBeNull();
  });
  it('returns empty for insufficient data', () => {
    const bars = makeBars(Array(5).fill(50));
    const ic = new Ichimoku();
    expect(ic.calculate(bars)).toEqual([]);
  });
});

describe('ADX', () => {
  it('computes ADX with DI+ and DI-', () => {
    const bars = makeBars(Array(30).fill(50).map((v, i) => v + (i < 15 ? i : 30 - i)));
    const adx = new ADX({ length: 14 });
    const r = adx.calculate(bars);
    expect(r[14].ADX).not.toBeNull();
    expect(r[14]['DI+']).not.toBeNull();
    expect(r[14]['DI-']).not.toBeNull();
  });
  it('returns empty for insufficient data', () => {
    const bars = makeBars(Array(5).fill(50));
    expect(new ADX({ length: 14 }).calculate(bars)).toEqual([]);
  });
});

describe('Momentum', () => {
  it('calculates price difference', () => {
    const bars = makeBars([50, 51, 52, 53, 54, 55]);
    const m = new Momentum({ length: 3 });
    const r = m.calculate(bars);
    expect(r[3]).toBe(53 - 50);
    expect(r[4]).toBe(54 - 51);
  });
  it('returns empty for short data', () => {
    expect(new Momentum({ length: 5 }).calculate(makeBars([50, 51]))).toEqual([]);
  });
});

describe('WilliamsR', () => {
  it('bounds between -100 and 0', () => {
    const bars = makeBars([50, 55, 45, 60, 40, 65, 35, 70, 30, 75, 25, 80, 20, 85, 15, 90]);
    const w = new WilliamsR({ length: 5 });
    const r = w.calculate(bars);
    const valid = r.filter(v => v !== null);
    expect(Math.max(...valid)).toBeLessThanOrEqual(0);
    expect(Math.min(...valid)).toBeGreaterThanOrEqual(-100);
  });
  it('returns empty for insufficient data', () => {
    expect(new WilliamsR({ length: 14 }).calculate(makeBars([50]))).toEqual([]);
  });
});

describe('UltimateOscillator', () => {
  it('binds between 0-100', () => {
    const bars = makeBars(Array(35).fill(50).map((v, i) => v + Math.sin(i * 0.5) * 10));
    const uo = new UltimateOscillator();
    const r = uo.calculate(bars);
    const valid = r.filter(v => v !== null);
    expect(valid.length).toBeGreaterThan(0);
    expect(Math.min(...valid)).toBeGreaterThanOrEqual(0);
    expect(Math.max(...valid)).toBeLessThanOrEqual(100);
  });
  it('handles flat market', () => {
    const bars = makeBars(Array(40).fill(50));
    const uo = new UltimateOscillator();
    const r = uo.calculate(bars);
    const valid = r.filter(v => v !== null);
    expect(valid.every(v => v === 50)).toBe(true);
  });
});

describe('MFI', () => {
  it('binds between 0-100', () => {
    const bars = Array(30).fill(0).map((_, i) => ({
      high: 50 + i, low: 40 + i, close: 45 + (i % 3 === 0 ? 5 : -2), volume: 1000 + i * 100
    }));
    const mfi = new MFI({ length: 10 });
    const r = mfi.calculate(bars);
    const valid = r.filter(v => v !== null);
    expect(valid.length).toBeGreaterThan(0);
    expect(Math.min(...valid)).toBeGreaterThanOrEqual(0);
    expect(Math.max(...valid)).toBeLessThanOrEqual(100);
  });
  it('returns empty for short data', () => {
    const bars = Array(3).fill(0).map((_, i) => ({ high: 50, low: 40, close: 45, volume: 1000 }));
    expect(new MFI({ length: 14 }).calculate(bars)).toEqual([]);
  });
});

describe('ChaikinOsc', () => {
  it('computes oscillator values', () => {
    const bars = makeBars(Array(20).fill(50).map((v, i) => v + Math.sin(i)));
    const co = new ChaikinOsc();
    const r = co.calculate(bars);
    expect(r[10]).not.toBeNull();
  });
  it('returns empty for short data', () => {
    expect(new ChaikinOsc().calculate(makeBars([50]))).toEqual([]);
  });
});

describe('KeltnerChannels', () => {
  it('returns Upper >= Middle >= Lower', () => {
    const bars = makeBars(Array(30).fill(50).map((v, i) => v + Math.sin(i)));
    const kc = new KeltnerChannels();
    const r = kc.calculate(bars);
    const last = r[r.length - 1];
    expect(last.Upper).toBeGreaterThan(last.Middle);
    expect(last.Middle).toBeGreaterThan(last.Lower);
  });
  it('supports SMA mode', () => {
    const bars = makeBars(Array(30).fill(50));
    const kc = new KeltnerChannels({ maType: 'SMA' });
    const r = kc.calculate(bars);
    expect(r[19].Upper).not.toBeNull();
  });
});

describe('DonchianChannels', () => {
  it('returns Upper >= Middle >= Lower', () => {
    const bars = makeBars([45, 50, 55, 42, 58, 40, 60]);
    const dc = new DonchianChannels({ length: 3 });
    const r = dc.calculate(bars);
    expect(r[2].Upper).toBeGreaterThanOrEqual(r[2].Middle);
    expect(r[2].Middle).toBeGreaterThanOrEqual(r[2].Lower);
  });
  it('returns empty for short data', () => {
    expect(new DonchianChannels({ length: 5 }).calculate(makeBars([50]))).toEqual([]);
  });
});

describe('SuperTrend', () => {
  it('returns direction and supertrend values', () => {
    const bars = makeBars(Array(20).fill(50).map((v, i) => v + (i < 10 ? i : 20 - i)));
    const st = new SuperTrend({ period: 5 });
    const r = st.calculate(bars);
    expect(r[18].SuperTrend).not.toBeNull();
    expect([-1, 1]).toContain(r[18].Direction);
  });
  it('returns empty for short data', () => {
    expect(new SuperTrend().calculate(makeBars([50]))).toEqual([]);
  });
});

describe('ZigZag', () => {
  it('detects pivot points', () => {
    const bars = makeBars([50, 55, 53, 58, 52, 60, 49, 62, 48, 65, 47, 68, 46, 70, 45]);
    const zz = new ZigZag({ deviation: 3, depth: 3 });
    const r = zz.calculate(bars);
    expect(r[0]).not.toBeNull();
    expect(r[r.length - 1]).not.toBeNull();
  });
  it('fills all values', () => {
    const bars = makeBars(Array(30).fill(50));
    const zz = new ZigZag();
    const r = zz.calculate(bars);
    expect(r.every(v => v !== null)).toBe(true);
  });
});

describe('LinearRegression', () => {
  it('computes regression line', () => {
    const bars = makeBars(Array(20).fill(50).map((v, i) => v + i));
    const lr = new LinearRegression({ length: 10 });
    const r = lr.calculate(bars);
    expect(r[9]).not.toBeNull();
    expect(r[19]).toBeGreaterThan(r[9]);
  });
  it('returns empty for short data', () => {
    expect(new LinearRegression({ length: 5 }).calculate(makeBars([50]))).toEqual([]);
  });
});

describe('Correlation', () => {
  it('returns value between -1 and 1', () => {
    const bars = makeBars(Array(25).fill(50).map((v, i) => v + i));
    const c = new Correlation({ length: 20 });
    const r = c.calculate(bars);
    const valid = r.filter(v => v !== null);
    expect(valid.every(v => v >= -1 && v <= 1)).toBe(true);
  });
  it('perfectly correlated data returns > 0.9', () => {
    const bars = makeBars(Array(25).fill(50).map((v, i) => v + i));
    const c = new Correlation({ length: 20 });
    const r = c.calculate(bars);
    expect(r[24]).toBeGreaterThan(0.9);
  });
});
