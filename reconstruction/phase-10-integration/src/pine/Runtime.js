export class Runtime {
  constructor() {
    this.userDefinedFunctions = new Map();
  }

  registerFunction(name, fn) {
    this.userDefinedFunctions.set(name, fn);
  }

  userFn(name, args) {
    const fn = this.userDefinedFunctions.get(name);
    if (!fn) throw new Error(`Undefined function: ${name}`);
    return fn(...args);
  }

  sma(values, length) {
    if (!values || values.length < length) return null;
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < length - 1) { result.push(null); continue; }
      let sum = 0;
      for (let j = i - length + 1; j <= i; j++) sum += values[j];
      result.push(sum / length);
    }
    return result;
  }

  ema(values, length) {
    if (!values || values.length < length) return null;
    const result = [];
    const k = 2 / (length + 1);
    let ema = null;
    for (let i = 0; i < values.length; i++) {
      if (ema === null) {
        if (i < length - 1) { result.push(null); continue; }
        let sum = 0;
        for (let j = i - length + 1; j <= i; j++) sum += values[j];
        ema = sum / length;
      } else {
        ema = k * values[i] + (1 - k) * ema;
      }
      result.push(ema);
    }
    return result;
  }

  wma(values, length) {
    if (!values || values.length < length) return null;
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < length - 1) { result.push(null); continue; }
      let sum = 0, weightSum = 0;
      for (let j = 0; j < length; j++) {
        const w = length - j;
        sum += values[i - j] * w;
        weightSum += w;
      }
      result.push(sum / weightSum);
    }
    return result;
  }

  rsi(values, length) {
    if (!values || values.length < length + 1) return null;
    const result = [];
    const changes = [null];
    for (let i = 1; i < values.length; i++) changes.push(values[i] - values[i - 1]);
    let avgGain = null, avgLoss = null;
    for (let i = 0; i < values.length; i++) {
      if (i === 0) { result.push(null); continue; }
      if (avgGain === null) {
        if (i < length) { result.push(null); continue; }
        let gain = 0, loss = 0;
        for (let j = i - length + 1; j <= i; j++) {
          const c = changes[j] || 0;
          if (c > 0) gain += c; else loss += Math.abs(c);
        }
        avgGain = gain / length; avgLoss = loss / length;
      } else {
        const c = changes[i] || 0;
        avgGain = (avgGain * (length - 1) + (c > 0 ? c : 0)) / length;
        avgLoss = (avgLoss * (length - 1) + (c < 0 ? Math.abs(c) : 0)) / length;
      }
      const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      result.push(avgLoss === 0 && avgGain === 0 ? null : 100 - 100 / (1 + rs));
    }
    return result;
  }

  macd(values, fast, slow, signal) {
    const fastEma = this.ema(values, fast);
    const slowEma = this.ema(values, slow);
    const macdLine = [];
    for (let i = 0; i < values.length; i++) {
      if (!fastEma || !slowEma || fastEma[i] === null || slowEma[i] === null) macdLine.push(null);
      else macdLine.push(fastEma[i] - slowEma[i]);
    }
    const sigLine = this.ema(macdLine, signal);
    const result = [];
    for (let i = 0; i < macdLine.length; i++) {
      if (macdLine[i] === null || !sigLine || sigLine[i] === null) {
        result.push({ macd: null, signal: null, histogram: null });
      } else {
        result.push({ macd: macdLine[i], signal: sigLine[i], histogram: macdLine[i] - sigLine[i] });
      }
    }
    return result;
  }

  stoch(high, low, close, kPeriod, kSmooth, dPeriod) {
    const kRaw = [];
    for (let i = 0; i < close.length; i++) {
      if (i < kPeriod - 1) { kRaw.push(null); continue; }
      let hh = -Infinity, ll = Infinity;
      for (let j = i - kPeriod + 1; j <= i; j++) {
        if (high[j] > hh) hh = high[j];
        if (low[j] < ll) ll = low[j];
      }
      kRaw.push(hh === ll ? 50 : ((close[i] - ll) / (hh - ll)) * 100);
    }
    const k = this.sma(kRaw, kSmooth);
    const d = this.sma(k, dPeriod);
    return k.map((kv, i) => ({ K: kv, D: d[i] }));
  }

  highest(values, length) {
    if (!values || values.length === 0) return null;
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < length - 1) { result.push(null); continue; }
      let max = -Infinity;
      for (let j = i - length + 1; j <= i; j++) {
        if (values[j] > max) max = values[j];
      }
      result.push(max);
    }
    return result;
  }

  lowest(values, length) {
    if (!values || values.length === 0) return null;
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < length - 1) { result.push(null); continue; }
      let min = Infinity;
      for (let j = i - length + 1; j <= i; j++) {
        if (values[j] < min) min = values[j];
      }
      result.push(min);
    }
    return result;
  }

  crossover(series1, series2) {
    if (series1 === null || series2 === null) return false;
    return series1 > series2;
  }

  crossunder(series1, series2) {
    if (series1 === null || series2 === null) return false;
    return series1 < series2;
  }

  iff(condition, trueVal, falseVal) { return condition ? trueVal : falseVal; }

  na(value) { return value === null || value === undefined || (typeof value === 'number' && isNaN(value)); }

  nz(value, fallback = 0) { return this.na(value) ? fallback : value; }

  barssince(condition) { return condition ? 0 : 1; }

  security(ticker, resolution, expression) { return expression; }

  input(defVal) { return defVal; }
  abs(v) { return Math.abs(v); }
  max(a, b) { return Math.max(a, b); }
  min(a, b) { return Math.min(a, b); }
  pow(a, b) { return Math.pow(a, b); }
  sqrt(v) { return Math.sqrt(v); }
  log(v) { return Math.log(v); }
  exp(v) { return Math.exp(v); }
  floor(v) { return Math.floor(v); }
  ceil(v) { return Math.ceil(v); }
  round(v) { return Math.round(v); }

  cum(values) {
    const result = []; let sum = 0;
    for (let i = 0; i < values.length; i++) { sum += values[i]; result.push(sum); }
    return result;
  }

  change(values) {
    const result = [null];
    for (let i = 1; i < values.length; i++) result.push(values[i] - values[i - 1]);
    return result;
  }

  rising(values, length) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < length) { result.push(null); continue; }
      let ok = true;
      for (let j = i - length + 1; j <= i; j++) { if (values[j] <= values[j - 1]) { ok = false; break; } }
      result.push(ok);
    }
    return result;
  }

  falling(values, length) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < length) { result.push(null); continue; }
      let ok = true;
      for (let j = i - length + 1; j <= i; j++) { if (values[j] >= values[j - 1]) { ok = false; break; } }
      result.push(ok);
    }
    return result;
  }

  valuewhen(condition, value) { return condition ? value : null; }
  timenow() { return Date.now(); }
  syminfo_tickerid() { return ''; }
  syminfo_mintick() { return 0.01; }
}
