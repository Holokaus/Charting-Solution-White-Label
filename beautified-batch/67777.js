/**
 * Module 67777 - Auto-beautified from TradingView webpack bundle
 *
 * @module 67777
 * @date 2026-04-23
 * @size 1076 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - sortSources (internal: o)
 *   - sortSourcesPreOrdered (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  sortSources: () => o,
  sortSourcesPreOrdered: () => s
});
const s = {
  KeyFactsToday: 10000001,
  LatestUpdates: 10000002,
  BarMarks: 10000003,
  TimeScaleMarks: 10000004,
  ChartEventsSource: 10000005,
  Dividends: 10000006,
  Splits: 10000007,
  Earnings: 10000008,
  RollDates: 10000009,
  FutureContractExpiration: 10000010,
  LineToolOrder: 10000011,
  LineToolPosition: 10000012,
  LineToolExecution: 10000013,
  AlertLabelInactive: 10000014,
  AlertLabel: 10000015
};

function o(e, t) {
  if (0 === e.length) return [];
  if (!t) return [...e].sort(((e, t) => e.zorder() - t.zorder()));
  if (!(t.model().mainPane() === t)) return [...e].sort(((e, t) => e.zorder() - t.zorder()));
  const i = t.model().panes(),
    s = i.indexOf(t),
    o = e => i.findIndex((t => t.hasDataSource(e)));
  return e.map((e => {
    const i = !t.hasDataSource(e);
    return {
      source: e,
      isMultipane: i,
      aboveSeries: e.zorder() > t.model().mainSeries().zorder(),
      paneIndex: i ? o(e) : s
    }
  })).sort(((e, t) => e.isMultipane || t.isMultipane ? e.isMultipane && !t.isMultipane ? t.aboveSeries ? -1 : 1 : !e.isMultipane && t.isMultipane ? e.aboveSeries ? 1 : -1 : e.paneIndex - t.paneIndex : e.source.zorder() - t.source.zorder())).map((e => e.source))
