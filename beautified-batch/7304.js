/**
 * Module 7304 - Auto-beautified from TradingView webpack bundle
 *
 * @module 7304
 * @date 2026-04-23
 * @size 557 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 37103
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
var s = i(37103);
window.onload = function() {
    location.hostname.indexOf(".") >= 0 && ! function() {
      try {
        return /^(192|172|10)\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]/.test(location.hostname) || /^.*((?:\.local)|localhost)$/.test(location.hostname)
      } catch (e) {
        return !1
      }
    }() && setTimeout((function() {
      try {
        var e = function() {
          var e = 0;
          return JSON.parse(urlParams.logo).image && (e = "C", s.enabled("link_to_tradingview") || (e = "D")), e
        }();
        window.ga && (0 !== e && window.ga("send", "event", "s", e), urlParams.utm || window.ga("send", "event", "l"))
      } catch (e) {}
    }), 3e4)
