import { describe, it, expect } from 'vitest';
import { Parser, PineSyntaxError } from '../src/pine/Parser.js';
import { Transpiler } from '../src/pine/Transpiler.js';
import { Runtime } from '../src/pine/Runtime.js';
import { CustomStudy } from '../src/api/CustomStudy.js';

describe('Parser', () => {
  it('parses study declaration', () => {
    const p = new Parser();
    const ast = p.parse('//@version=4\nstudy(title: "Test", overlay: true)');
    expect(ast.type).toBe('Program');
    expect(ast.body[0].type).toBe('StudyDeclaration');
  });

  it('parses plot statement', () => {
    const p = new Parser();
    const ast = p.parse('plot(close)');
    expect(ast.body[0].type).toBe('PlotStatement');
    expect(ast.body[0].series.type).toBe('Identifier');
    expect(ast.body[0].series.name).toBe('close');
  });

  it('parses input as function call', () => {
    const p = new Parser();
    const ast = p.parse('x = input(14)');
    expect(ast.body[0].type).toBe('Assignment');
    expect(ast.body[0].value.type).toBe('CallExpression');
    expect(ast.body[0].value.callee).toBe('input');
  });

  it('parses binary expressions', () => {
    const p = new Parser();
    const ast = p.parse('x = close + high * 2');
    expect(ast.body[0].type).toBe('Assignment');
    expect(ast.body[0].value.type).toBe('BinaryOp');
  });

  it('parses if/else', () => {
    const p = new Parser();
    const ast = p.parse('if close > open: x = 1 else: x = 0');
    expect(ast.body[0].type).toBe('IfStatement');
  });

  it('parses for loop', () => {
    const p = new Parser();
    const ast = p.parse('for i = 0 to 10: x = x + i');
    expect(ast.body[0].type).toBe('ForStatement');
  });

  it('parses function calls', () => {
    const p = new Parser();
    const ast = p.parse('x = sma(close, 14)');
    const call = ast.body[0].value;
    expect(call.type).toBe('CallExpression');
    expect(call.callee).toBe('sma');
    expect(call.arguments.length).toBe(2);
  });

  it('throws on invalid syntax', () => {
    const p = new Parser();
    expect(() => p.parse('@#$%')).toThrow(PineSyntaxError);
  });
});

describe('Transpiler', () => {
  it('generates executable JS from AST', () => {
    const p = new Parser();
    const t = new Transpiler();
    const ast = p.parse('plot(close)');
    const js = t.transpile(ast);
    expect(js).toContain('function(bars, builtin, inputs)');
    expect(js).toContain('_close');
  });

  it('generates correct output for sma', () => {
    const p = new Parser();
    const t = new Transpiler();
    const ast = p.parse('x = sma(close, 3)\nplot(x)');
    const js = t.transpile(ast);
    expect(js).toContain('builtin.sma');
  });
});

describe('Runtime', () => {
  const rt = new Runtime();
  const values = [10, 12, 14, 16, 18, 20];

  it('sma computes simple moving average', () => {
    const r = rt.sma(values, 3);
    expect(r[0]).toBeNull();
    expect(r[1]).toBeNull();
    expect(r[2]).toBe(12);
    expect(r[3]).toBe(14);
    expect(r[4]).toBe(16);
  });

  it('ema computes exponential moving average', () => {
    const r = rt.ema(values, 3);
    expect(r[0]).toBeNull();
    expect(r[1]).toBeNull();
    expect(r[2]).toBe(12);
    expect(r[5]).toBeCloseTo(18, 0);
  });

  it('rsi computes relative strength index', () => {
    const r = rt.rsi(values, 3);
    expect(r[0]).toBeNull();
    const valid = r.filter(v => v !== null);
    expect(valid.every(v => v >= 0 && v <= 100)).toBe(true);
  });

  it('macd returns object with macd/signal/histogram', () => {
    const r = rt.macd(values, 3, 5, 2);
    expect(r[4]).not.toBeNull();
    expect(r[4].macd).not.toBeNull();
    expect(r[4].signal).not.toBeNull();
    expect(r[4].histogram).not.toBeNull();
  });

  it('stoch computes stochastic oscillator', () => {
    const high = [11, 13, 15, 17, 19, 21];
    const low = [9, 11, 13, 15, 17, 19];
    const r = rt.stoch(high, low, values, 3, 3, 3);
    expect(r[2].K).not.toBeNull();
    expect(r[2].D).not.toBeNull();
  });

  it('highest and lowest work correctly', () => {
    const h = rt.highest(values, 3);
    expect(h[2]).toBe(14);
    expect(h[5]).toBe(20);
    const l = rt.lowest(values, 3);
    expect(l[2]).toBe(10);
    expect(l[5]).toBe(16);
  });

  it('crossover and crossunder', () => {
    expect(rt.crossover(5, 3)).toBe(true);
    expect(rt.crossover(3, 5)).toBe(false);
    expect(rt.crossunder(3, 5)).toBe(true);
  });

  it('na and nz handle nulls', () => {
    expect(rt.na(null)).toBe(true);
    expect(rt.na(0)).toBe(false);
    expect(rt.nz(null)).toBe(0);
    expect(rt.nz(null, 5)).toBe(5);
    expect(rt.nz(3)).toBe(3);
  });

  it('cum accumulates', () => {
    const r = rt.cum([1, 2, 3]);
    expect(r).toEqual([1, 3, 6]);
  });

  it('change computes differences', () => {
    const r = rt.change([1, 3, 6]);
    expect(r[0]).toBeNull();
    expect(r[1]).toBe(2);
    expect(r[2]).toBe(3);
  });

  it('rising and falling detection', () => {
    const r = rt.rising([1, 2, 3, 4], 3);
    expect(r[2]).toBeNull();
    expect(r[3]).toBe(true);
    const f = rt.falling([4, 3, 2, 1], 3);
    expect(f[3]).toBe(true);
  });
});

describe('Parser additional', () => {
  it('parses negative numbers', () => {
    const p = new Parser();
    const ast = p.parse('x = -5');
    expect(ast.body[0].type).toBe('Assignment');
    expect(ast.body[0].value.type).toBe('UnaryOp');
    expect(ast.body[0].value.op).toBe('-');
  });

  it('parses boolean literals', () => {
    const p = new Parser();
    const ast = p.parse('x = true\ny = false');
    expect(ast.body[0].value.value).toBe(true);
    expect(ast.body[1].value.value).toBe(false);
  });

  it('parses array literals', () => {
    const p = new Parser();
    const ast = p.parse('x = [1, 2, 3]');
    expect(ast.body[0].value.type).toBe('ArrayLiteral');
    expect(ast.body[0].value.elements.length).toBe(3);
  });

  it('parses ternary', () => {
    const p = new Parser();
    const ast = p.parse('x = close > open ? high : low');
    expect(ast.body[0].value.type).toBe('Ternary');
  });

  it('parses comparison chains', () => {
    const p = new Parser();
    const ast = p.parse('x = close >= open and high > low');
    expect(ast.body[0].value.type).toBe('BinaryOp');
    expect(ast.body[0].value.op).toBe('and');
  });

  it('parses hline', () => {
    const p = new Parser();
    const ast = p.parse('hline(50, title: "Level")');
    expect(ast.body[0].type).toBe('HlineStatement');
  });

  it('throws on unexpected character', () => {
    const p = new Parser();
    expect(() => p.parse('x = @value')).toThrow(PineSyntaxError);
  });

  it('parses index expression', () => {
    const p = new Parser();
    const ast = p.parse('x = close[1]');
    expect(ast.body[0].value.type).toBe('IndexExpression');
  });
});

describe('Runtime additional', () => {
  const rt = new Runtime();

  it('wma computes weighted moving average', () => {
    const r = rt.wma([1, 2, 3, 4, 5], 3);
    expect(r[0]).toBeNull();
    expect(r[1]).toBeNull();
    expect(r[2]).toBeCloseTo((3*3 + 2*2 + 1*1) / 6, 5);
  });

  it('macd returns nulls for short data', () => {
    const r = rt.macd([1, 2], 12, 26, 9);
    expect(r[0].macd).toBeNull();
  });

  it('highest returns null for empty array', () => {
    expect(rt.highest([], 5)).toBeNull();
  });

  it('lowest returns null for empty array', () => {
    expect(rt.lowest([], 5)).toBeNull();
  });

  it('sma returns null for short array', () => {
    expect(rt.sma([1], 5)).toBeNull();
  });

  it('ema returns null for short array', () => {
    expect(rt.ema([1], 5)).toBeNull();
  });

  it('rsi returns null for short array', () => {
    expect(rt.rsi([1], 5)).toBeNull();
  });

  it('iff selects correct branch', () => {
    expect(rt.iff(true, 'a', 'b')).toBe('a');
    expect(rt.iff(false, 'a', 'b')).toBe('b');
  });

  it('na detects NaN', () => {
    expect(rt.na(NaN)).toBe(true);
    expect(rt.na(undefined)).toBe(true);
    expect(rt.na(0)).toBe(false);
  });

  it('barssince returns basic value', () => {
    expect(rt.barssince(true)).toBe(0);
    expect(rt.barssince(false)).toBe(1);
  });

  it('cum returns prefix sums', () => {
    const r = rt.cum([2, 4, 6]);
    expect(r).toEqual([2, 6, 12]);
  });

  it('change returns first null', () => {
    const r = rt.change([5, 6, 8]);
    expect(r[0]).toBeNull();
    expect(r[2]).toBe(2);
  });

  it('rising returns null for insufficient data', () => {
    const r = rt.rising([1, 2, 3], 5);
    expect(r[0]).toBeNull();
  });

  it('falling returns null for insufficient data', () => {
    const r = rt.falling([3, 2, 1], 5);
    expect(r[0]).toBeNull();
  });

  it('valuewhen returns value on condition', () => {
    expect(rt.valuewhen(true, 42)).toBe(42);
    expect(rt.valuewhen(false, 42)).toBeNull();
  });

  it('timenow returns number', () => {
    expect(typeof rt.timenow()).toBe('number');
  });

  it('syminfo helpers return defaults', () => {
    expect(rt.syminfo_tickerid()).toBe('');
    expect(rt.syminfo_mintick()).toBe(0.01);
  });

  it('math functions delegate correctly', () => {
    expect(rt.abs(-5)).toBe(5);
    expect(rt.max(3, 7)).toBe(7);
    expect(rt.min(3, 7)).toBe(3);
    expect(rt.pow(2, 3)).toBe(8);
    expect(rt.sqrt(9)).toBe(3);
    expect(rt.log(Math.E)).toBeCloseTo(1, 5);
    expect(rt.floor(3.7)).toBe(3);
    expect(rt.ceil(3.2)).toBe(4);
    expect(rt.round(3.5)).toBe(4);
  });

  it('security passes through expression', () => {
    expect(rt.security('', '', 42)).toBe(42);
  });

  it('userFn throws for undefined function', () => {
    expect(() => rt.userFn('nonexistent', [])).toThrow('Undefined function');
  });

  it('registerFunction works', () => {
    rt.registerFunction('double', x => x * 2);
    expect(rt.userFn('double', [5])).toBe(10);
  });
});

describe('CustomStudy', () => {
  it('evaluates a complete Pine script', () => {
    const study = new CustomStudy({
      pineSource: `
study("MA Cross", overlay=true)
fast = sma(close, 3)
slow = sma(close, 5)
plot(fast, "Fast")
plot(slow, "Slow")
      `.trim()
    });
    const bars = [
      { open: 10, high: 11, low: 9, close: 10, volume: 100, time: 1 },
      { open: 11, high: 12, low: 10, close: 12, volume: 100, time: 2 },
      { open: 12, high: 14, low: 12, close: 14, volume: 100, time: 3 },
      { open: 14, high: 15, low: 13, close: 15, volume: 100, time: 4 },
      { open: 15, high: 16, low: 14, close: 16, volume: 100, time: 5 }
    ];
    const result = study.calculate(bars);
    expect(result.length).toBe(5);
    expect(result[4]).toHaveProperty('Fast');
    expect(result[4]).toHaveProperty('Slow');
    expect(result[4].Fast).not.toBeNull();
  });

  it('returns empty for no source', () => {
    const study = new CustomStudy();
    expect(study.calculate([])).toEqual([]);
  });

  it('supports simple sma study', () => {
    const study = new CustomStudy({
      pineSource: `
study("Simple MA")
x = sma(close, 3)
plot(x, "MA")
      `.trim()
    });
    const bars = Array(10).fill(0).map((_, i) => ({
      open: 10 + i, high: 11 + i, low: 9 + i, close: 10 + i, volume: 100, time: i
    }));
    const result = study.calculate(bars);
    expect(result.length).toBe(10);
    expect(result[2]).toHaveProperty('MA');
    expect(result[2].MA).not.toBeNull();
  });
});
