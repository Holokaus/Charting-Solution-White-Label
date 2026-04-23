/**
 * Module 9343 - Auto-beautified from TradingView webpack bundle
 *
 * @module 9343
 * @date 2026-04-23
 * @size 2078 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - LOGLEVEL (internal: s)
 *   - getLogHistory (internal: v)
 *   - getLogLevel (internal: _)
 *   - getLogger (internal: b)
 *   - getRawLogHistory (internal: f)
 *   - isHighRateEnabled (internal: p)
 *   - loggingOff (internal: C)
 *   - loggingOn (internal: w)
 *   - serializeLogHistoryEntry (internal: y)
 *   - setHighRateStatus (internal: g)
 *   - setLogLevel (internal: m)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
var s;
i.r(t), i.d(t, {
    LOGLEVEL: () => s,
    getLogHistory: () => v,
    getLogLevel: () => _,
    getLogger: () => b,
    getRawLogHistory: () => f,
    isHighRateEnabled: () => p,
    loggingOff: () => C,
    loggingOn: () => w,
    serializeLogHistoryEntry: () => y,
    setHighRateStatus: () => g,
    setLogLevel: () => m
  }),
  function(e) {
    e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.NORMAL = 4] = "NORMAL", e[e.DEBUG = 5] = "DEBUG"
  }(s || (s = {}));
let o = 0;
const n = 1e3,
  r = [];
let a = null,
  l = null,
  c = null,
  h = null,
  d = s.WARNING,
  u = !1;

function _() {
  return d
}

function p() {
  return u
}

function m(e) {
  e = Math.max(s.ERROR, Math.min(s.DEBUG, e)), d = e
}

function g(e) {
  u = e
}

function f(e, t) {
  let i = r.reduce(((e, t) => e.concat(t)), []);
  return i.sort(((e, t) => e.id - t.id)), void 0 !== t && (i = i.filter((e => e.subSystemId === t))), "number" == typeof e && (i = i.slice(-e)), i
}

function y(e) {
  return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
}
const v = (e, t) => function(e, t) {
  let i, s = 0,
    o = 0;
  for (i = e.length - 1; i >= 1 && (s += 8 * (1 + encodeURIComponent(e[i]).length), !(i - 1 > 0 && (o = 8 * (1 + encodeURIComponent(e[i - 1]).length), s + o > t))); i--);
  return e.slice(i)
}(f(e, t).map(y), 75497472);

function S(e, t, i, r) {
  if (t === l && r.id === c) return;
  const u = new Date;
  if (e <= s.NORMAL && function(e, t, i, s, r) {
      "function" == typeof structuredClone && (t = structuredClone(t)), t = t.slice(0, n);
      const a = {
        id: o,
        message: t,
        subSystemId: s,
        timestamp: Number(e)
      };
      o += 1, i.push(a), void 0 !== r && i.length > r && i.splice(0, 1)
    }(u, t, i, r.id, r.maxCount), e <= d && (!r.highRate || p()) && (!a || r.id.match(a))) {
    const i = u.toISOString() + ":" + r.id + ":" + t;
    switch (e) {
      case s.DEBUG:
        console.debug(i);
        break;
      case s.INFO:
      case s.NORMAL:
        r.color ? console.log("%c" + i, "color: " + r.color) : console.log(i);
        break;
      case s.WARNING:
        console.warn(i);
        break;
      case s.ERROR:
        console.error(i)
    }
    l = t, c = r.id, null !== h && clearTimeout(h), h = setTimeout((() => {
      l = null, c = null, h = null
    }), 1e3)
  }
}

function b(e, t = {}) {
  const i = [];
  r.push(i);
  const o = Object.assign(t, {
    id: e
  });

  function n(e) {
    return t => S(e, String(t), i, o)
  }
  return {
    logDebug: n(s.DEBUG),
    logError: n(s.ERROR),
    logInfo: n(s.INFO),
    logNormal: n(s.NORMAL),
    logWarn: n(s.WARNING)
  }
}
const w = (e, t) => {
    m(s.DEBUG), u = Boolean(e), a = t || null
  },
  C = () => {
    m(s.INFO)
