import { describe, it, expect } from 'vitest';
import { toolRegistry } from '../src/index.js';
import { Channel } from '../src/tools/Channel.js';
import { Pitchfork } from '../src/tools/Pitchfork.js';
import { GannFan } from '../src/tools/GannFan.js';
import { GannBox } from '../src/tools/GannBox.js';
import { ElliottWave } from '../src/tools/ElliottWave.js';
import { Brush } from '../src/tools/Brush.js';
import { Arrow } from '../src/tools/Arrow.js';
import { Measure } from '../src/tools/Measure.js';
import { DateRange } from '../src/tools/DateRange.js';
import { PriceRange } from '../src/tools/PriceRange.js';

const mockViewport = { width: 800, height: 600, timeToX: (t) => t * 80, barSpacing: 6 };
const mockPriceScale = { priceToY: (p) => 600 - (p - 90) * 20 };
const mockTimeScale = { formatLabel: () => '' };

describe('Channel', () => {
  it('has correct properties', () => {
    const t = new Channel();
    expect(t.name).toBe('Channel');
    expect(t.maxPoints).toBe(3);
  });

  it('registers and creates via registry', () => {
    const t = toolRegistry.create('Channel');
    expect(t.name).toBe('Channel');
  });

  it('hitTest with 3 points', () => {
    const t = new Channel();
    t.points = [
      { time: 0, price: 100 },
      { time: 5, price: 110 },
      { time: 1, price: 95 }
    ];
    const viewport = { width: 800, height: 600, timeToX: (t) => t * 80, barSpacing: 6 };
    const priceScale = { priceToY: (p) => 600 - (p - 90) * 20 };
    expect(t.hitTest(280, 400, viewport, priceScale, null)).toBe(true);
    expect(t.hitTest(0, 0, viewport, priceScale, null)).toBe(false);
  });
});

describe('Pitchfork', () => {
  it('has correct properties', () => {
    const t = new Pitchfork();
    expect(t.name).toBe('Pitchfork');
    expect(t.maxPoints).toBe(3);
  });

  it('registers and creates via registry', () => {
    const t = toolRegistry.create('Pitchfork');
    expect(t.name).toBe('Pitchfork');
  });
});

describe('GannFan', () => {
  it('has correct properties', () => {
    const t = new GannFan();
    expect(t.name).toBe('GannFan');
    expect(t.maxPoints).toBe(2);
    expect(t.angles.length).toBe(8);
  });

  it('registers via registry', () => {
    const t = toolRegistry.create('GannFan');
    expect(t.name).toBe('GannFan');
  });
});

describe('GannBox', () => {
  it('has correct properties', () => {
    const t = new GannBox();
    expect(t.name).toBe('GannBox');
    expect(t.maxPoints).toBe(2);
  });

  it('hitTest returns true inside box', () => {
    const t = toolRegistry.create('GannBox');
    t.points = [{ time: 0, price: 100 }, { time: 10, price: 110 }];
    expect(t.hitTest(400, 300, mockViewport, mockPriceScale, mockTimeScale, 5)).toBe(true);
  });
});

describe('ElliottWave', () => {
  it('has correct properties', () => {
    const t = new ElliottWave();
    expect(t.name).toBe('ElliottWave');
    expect(t.maxPoints).toBe(5);
  });

  it('registers via registry', () => {
    const t = toolRegistry.create('ElliottWave');
    expect(t.name).toBe('ElliottWave');
  });
});

describe('Brush', () => {
  it('has correct properties', () => {
    const t = new Brush();
    expect(t.name).toBe('Brush');
    expect(t.maxPoints).toBe(Infinity);
  });

  it('registers via registry', () => {
    const t = toolRegistry.create('Brush');
    expect(t.name).toBe('Brush');
  });
});

describe('Arrow', () => {
  it('has correct properties', () => {
    const t = new Arrow();
    expect(t.name).toBe('Arrow');
    expect(t.maxPoints).toBe(2);
  });

  it('hitTest works on line', () => {
    const t = toolRegistry.create('Arrow');
    t.points = [{ time: 0, price: 100 }, { time: 10, price: 110 }];
    expect(t.hitTest(400, 300, mockViewport, mockPriceScale, mockTimeScale, 10)).toBe(true);
  });
});

describe('Measure', () => {
  it('has correct properties', () => {
    const t = new Measure();
    expect(t.name).toBe('Measure');
    expect(t.maxPoints).toBe(2);
  });

  it('registers via registry', () => {
    const t = toolRegistry.create('Measure');
    expect(t.name).toBe('Measure');
  });
});

describe('DateRange', () => {
  it('has correct properties', () => {
    const t = new DateRange();
    expect(t.name).toBe('DateRange');
    expect(t.maxPoints).toBe(2);
  });

  it('registers via registry', () => {
    const t = toolRegistry.create('DateRange');
    expect(t.name).toBe('DateRange');
  });
});

describe('PriceRange', () => {
  it('has correct properties', () => {
    const t = new PriceRange();
    expect(t.name).toBe('PriceRange');
    expect(t.maxPoints).toBe(2);
  });

  it('registers via registry', () => {
    const t = toolRegistry.create('PriceRange');
    expect(t.name).toBe('PriceRange');
  });
});
