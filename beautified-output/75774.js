/**
 * Module 75774 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
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
      h = s && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent
      .indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS"),
      d = s && /mac/i.test(navigator.platform),
      u = s && /Win32|Win64/i.test(navigator.platform),
      _ = s && /Linux/i.test(navigator.platform),
      p = s && /Android/i.test(navigator.userAgent),
      m = s && /BlackBerry/i.test(navigator.userAgent),
      g = s && /iPhone|iPad|iPod/.test(navigator.platform),
      f = s && /Opera Mini/i.test(navigator.userAgent),
      y = s && ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /iPad/.test(navigator.platform)),
      v = p || m || g || f