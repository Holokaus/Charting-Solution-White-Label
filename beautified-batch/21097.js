/**
 * Module 21097 - Auto-beautified from TradingView webpack bundle
 *
 * @module 21097
 * @date 2026-04-23
 * @size 1432 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 9343, 11417, 40167
 *
 * Exports:
 *   - TVXWindowEvents (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

21097: (e, t, i) => {
    "use strict";
    i.d(t, {
      TVXWindowEvents: () => r
    });
    i(40167);
    var s = i(9343),
      o = i(11417);
    const n = (0, s.getLogger)("XWindowEvents");
    var r;
    ! function(e) {
      const t = "tvxwevents.",
        i = {};
      let s;
      window.BroadcastChannel ? (s = new BroadcastChannel("tvxwevents"), s.addEventListener("message", (function(e) {
        const {
          data: {
            event: t,
            value: s
          }
        } = e;
        i[t] && i[t].forEach((e => {
          e(s)
        }))
      })), function() {
        const e = [],
          i = performance.now();
        for (let i = 0; i < o.TVLocalStorage.length; i++) {
          const s = o.TVLocalStorage.key(i);
          s.startsWith(t) && e.push(s)
        }
        const s = o.TVLocalStorage.length;
        for (const t of e) o.TVLocalStorage.removeItem(t);
        const r = performance.now() - i;
        n.logNormal(`Total keys amount in local storage on operation start: ${s}`), n.logNormal(`Keys amount in local storage to be deleted: ${e.length}`), n.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(e)}`), n.logNormal(`Removing keys from local storage took ${r} ms`)
      }()) : window.addEventListener("storage", (function(e) {
        const {
          newValue: s,
          key: n
        } = e;
        if (null === s || !n || !n.startsWith(t)) return;
        const r = n.substring(11);
        i[r] && i[r].forEach((t => {
          t(e.newValue)
        }));
        o.TVLocalStorage.removeItem(n)
      })), e.on = function(e, t) {
        i[e] || (i[e] = []), i[e].push(t)
      }, e.off = function(e, t) {
        if (!i[e]) return;
        const s = i[e].indexOf(t); - 1 !== s && (1 === i[e].length ? delete i[e] : i[e].splice(s, 1))
      }, e.emit = function(e, i = Date.now()) {
        try {
          s ? s.postMessage({
            event: e,
            value: i
          }) : o.TVLocalStorage.setItem(t + e, i.toString())
        } catch (e) {
          n.logError(e.message)
        }
      }
    }(r || (r = {}))
