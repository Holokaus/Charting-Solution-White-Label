/**
 * Module 23024 - Auto-beautified from TradingView webpack bundle
 *
 * @module 23024
 * @date 2026-04-23
 * @size 377 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 34840
 *
 * Exports:
 *   - getChartStorage (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getChartStorage: () => n
});
var s = i(34840);
let o = null;
async function n() {
    const e = (0, s.getCustomAdapter)();
    if (null === o)
      if (null !== e) {
        const {
          ChartStorageExternalAdapter: t
        } = await i.e(8313).then(i.bind(i, 33047));
        o = new t(e)
      } else {
        const {
          ChartStorageHttpLibrary: e
        } = await i.e(6124).then(i.bind(i, 64998));
        o = new e
      } return null === o && (o = new ChartStorageHttp), o
