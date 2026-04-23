/**
 * Module 75774 - Auto-beautified from TradingView webpack bundle
 *
 * @module 75774
 * @date 2026-04-23
 * @size 1159 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - isAndroid (internal: p)
 *   - isAnyMobile (internal: v)
 *   - isBlackBerry (internal: m)
 *   - isChrome (internal: a)
 *   - isEdge (internal: c)
 *   - isFF (internal: l)
 *   - isIOS (internal: g)
 *   - isIPad (internal: y)
 *   - isLinux (internal: _)
 *   - isMac (internal: d)
 *   - isOperaMini (internal: f)
 *   - isSafari (internal: h)
 *   - isWindows (internal: u)
 *   - mobiletouch (internal: n)
 *   - touch (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

75774: (e, t, i) => {
    "use strict";
    i.d(t, {
      isAndroid: () => p,
      isAnyMobile: () => v,
      isBlackBerry: () => m,
      isChrome: () => a,
      isEdge: () => c,
      isFF: () => l,
      isIOS: () => g,
      isIPad: () => y,
      isLinux: () => _,
      isMac: () => d,
      isOperaMini: () => f,
      isSafari: () => h,
      isWindows: () => u,
      mobiletouch: () => n,
      touch: () => r
    });
    const s = "undefined" != typeof window && "undefined" != typeof navigator,
      o = s && "ontouchstart" in window,
      n = s && o && "onorientationchange" in window,
      r = s && (o || !!navigator.maxTouchPoints),
      a = s && window.chrome && window.chrome.runtime,
      l = s && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
      c = s && /\sEdge\/\d\d\b/.test(navigator.userAgent),
      h = s && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS"),
      d = s && /mac/i.test(navigator.platform),
      u = s && /Win32|Win64/i.test(navigator.platform),
      _ = s && /Linux/i.test(navigator.platform),
      p = s && /Android/i.test(navigator.userAgent),
      m = s && /BlackBerry/i.test(navigator.userAgent),
      g = s && /iPhone|iPad|iPod/.test(navigator.platform),
      f = s && /Opera Mini/i.test(navigator.userAgent),
      y = s && ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /iPad/.test(navigator.platform)),
      v = p || m || g || f
