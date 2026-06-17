import { describe, it, expect } from 'vitest';
import { Parser, PineSyntaxError } from '../src/pine/Parser.js';

describe('Pine Parser', () => {
  it('tokenizes a simple study declaration', () => {
    const parser = new Parser();
    const source = 'study("My Study", overlay=true)';
    const ast = parser.parse(source);
    expect(ast.type).toBe('Program');
    expect(ast.body.length).toBe(1);
    expect(ast.body[0].type).toBe('StudyDeclaration');
  });

  it('parses plot statement with title', () => {
    const parser = new Parser();
    const source = 'plot(close, "Close", color=blue)';
    const ast = parser.parse(source);
    expect(ast.body.length).toBe(1);
    expect(ast.body[0].type).toBe('PlotStatement');
    expect(ast.body[0].title).toBe('Close');
  });

  it('parses a full study with multiple statements', () => {
    const parser = new Parser();
    const source = `
study("My Study")
len = input(14, title="Length")
src = close
ma = sma(src, len)
plot(ma, "MA", color=#2196F3)
`;
    const ast = parser.parse(source);
    expect(ast.body.length).toBe(5);
    expect(ast.body[0].type).toBe('StudyDeclaration');
    expect(ast.body[1].type).toBe('Assignment');
    expect(ast.body[2].type).toBe('Assignment');
    expect(ast.body[3].type).toBe('Assignment');
    expect(ast.body[4].type).toBe('PlotStatement');
  });
});
