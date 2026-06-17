# Pine Script Runtime

## Overview

This package provides a lightweight Pine Script™-compatible runtime for defining and executing custom technical indicators within the charting solution. It is **not** a full Pine Script™ compiler/interpreter — it implements a functionally equivalent subset suitable for the most common indicator patterns.

## Architecture

Three layers work together:

```
Pine Script source text
        ↓
  Parser (Lexer + AST)
        ↓
  Transpiler (Pine AST → JS AST)
        ↓
  Runtime (execution sandbox)
        ↓
  CustomStudy (API wrapper)
```

## Supported Pine Script™ Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| `study()` declaration | ✅ | title, shorttitle, overlay, precision |
| `//@version=` directive | ✅ | 2, 3, 4, 5 |
| `plot()` | ✅ | color, linewidth, style (line/histogram/cross/area/columns) |
| `hline()` | ✅ | Simple horizontal reference lines |
| `input()` | ✅ | integer, float, bool, string, source, resolution |
| `sma()`, `ema()`, `wma()` | ✅ | Built-in moving averages |
| `rsi()`, `macd()`, `stoch()` | ✅ | Built-in oscillator functions |
| `highest()`, `lowest()` | ✅ | Rolling high/low over `length` bars |
| `security()` | ✅ | Higher-timeframe fetch (simplified) |
| ` crossover()`, `crossunder()` | ✅ | Cross detection helpers |
| `iff()` | ✅ | Ternary helper |
| `na()`, `nz()`, `barssince()` | ✅ | Null/value helpers |
| User-defined functions | ✅ | `fName(...) => expression` |
| `if`/`else` | ✅ | Conditional logic |
| `for` loops | ✅ | Loop over ranges |
| String / Color literals | ✅ | `#hex` colors |
| Built-in variables | ✅ | `open`, `high`, `low`, `close`, `volume`, `time`, `bar_index`, `barstate.*` |

## Not supported

- `strategy()` / `strategy.*` (use separate strategy engine)
- `fill()` (polygon fills between plots)
- `label.*`, `line.*`, `box.*` (drawing objects)
- `input.session()` (session picker)
- `library()` / `export()` / `import()`
- Dynamic array resizing
- Recursive function calls (depth limited)

## File Reference

| File | Purpose |
|------|---------|
| `src/pine/Parser.js` | Tokenizer + recursive-descent AST builder |
| `src/pine/Transpiler.js` | Pine AST → executable JS function |
| `src/pine/Runtime.js` | Sandbox with bar-loop and built-in functions |
| `src/api/CustomStudy.js` | Public API — wraps Runtime for the study registry |

## Example

```js
import { CustomStudy } from '../src/api/CustomStudy.js';

const myStudy = new CustomStudy({
  source: `
//@version=4
study(title: "My Custom MA Cross", overlay: true)
fastLen = input(9, "Fast Length")
slowLen = input(20, "Slow Length")
fastMA = sma(close, fastLen)
slowMA = sma(close, slowLen)
plot(fastMA, "Fast", color=blue, linewidth=2)
plot(slowMA, "Slow", color=red, linewidth=2)
  `
});

const bars = [/* ... OHLC data ... */];
const output = myStudy.calculate(bars);
// output: [{ fastMA: 101.5, slowMA: 100.2 }, ...]
```
