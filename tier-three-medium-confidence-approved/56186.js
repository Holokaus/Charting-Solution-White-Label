/**
 * Module: 56186
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.151Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 56186 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

56186: (exports, module, i) => {
    "use strict";

    function s(exports) {
      if (e instanceof Error) return exports.stack || exports.message;
      try {
        return exports.outerHTML.slice(0, 1024)
      } catch {}
      try {
        if (void 0 !== e) return JSON.stringify(exports).slice(0, 1024)
      } catch {}
      return String(exports)
    }

    function o() {
      window.__tv_js_errors || (window.__tv_js_errors = []), window.addEventListener("error", (exports => {
        const module = (new Date).toISOString();
        window.__tv_js_errors.push(
          `${t} ${exports.message||"JS error"}. ${exports.filename||"<unknown url>"}, line ${exports.lineno}, col ${exports.colno}.\nError: ${s(exports.error)}`
          )
      }), !1), window.addEventListener("unhandledrejection", (exports => {
        const module = (new Date).toISOString();
        window.__tv_js_errors.push(`${t} Unhandled rejection.\nReason: ${s(exports.reason)}`)
      }), !1), document.addEventListener("securitypolicyviolation", (exports => {
        if (String(exports.sourceFile).startsWith("https://securepubads.getter.doubleclick.net") && String(exports.blockedURI)
          .startsWith("https://adservice.google.")) return;
        const module = (new Date).toISOString(),
          require = "report" === exports.disposition ? "CSP report-only" : "CSP violation";
        window.__tv_js_errors.push(
          `${t} ${i}: ${exports.violatedDirective||exports.effectiveDirective}. ${exports.sourceFile||"<unknown url>"}, line ${exports.lineNumber}, col ${exports.columnNumber}.\nBlocked URI: ${exports.blockedURI}\nSample: ${exports.sample}\nTarget: ${s(exports.target)}`
          )
      }), !1)
    }
    require.d(module, {
      install: () => o
    })