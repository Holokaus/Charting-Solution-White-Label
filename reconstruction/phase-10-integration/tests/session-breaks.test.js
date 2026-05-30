import { describe, it, expect } from 'vitest';
import { SessionBreaks } from '../src/chart/SessionBreaks.js';

describe('SessionBreaks', () => {
  it('detects gaps larger than threshold', () => {
    const sb = new SessionBreaks({ gapThreshold: 100 });
    const bars = [
      { time: 0 }, { time: 50 }, { time: 200 }
    ];
    const breaks = sb.detect(bars);
    expect(breaks.length).toBe(1);
    expect(breaks[0].start).toBe(50);
    expect(breaks[0].end).toBe(200);
  });

  it('returns empty for consecutive bars', () => {
    const sb = new SessionBreaks({ gapThreshold: 100 });
    const bars = [{ time: 0 }, { time: 10 }, { time: 20 }];
    expect(sb.detect(bars).length).toBe(0);
  });

  it('returns empty for less than 2 bars', () => {
    const sb = new SessionBreaks();
    expect(sb.detect([]).length).toBe(0);
    expect(sb.detect([{ time: 1 }]).length).toBe(0);
  });
});
