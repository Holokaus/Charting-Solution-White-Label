# Round 4 Improved MEDIUM - Spot-Check Report

Generated: 2026-05-06T05:26:57.142Z

## Spot-Check Sample

Selected 5 modules for manual verification:

| Module ID | Semantic Name | Confidence | Validation Tier |
|-----------|---------------|------------|----------------|
| 13896 | lineToolManager | 80% | GOOD |
| 97995 | lineToolManager | 80% | GOOD |
| 7543 | dataSource | 70% | FAIR |
| 92211 | seriesBarFunction | 100% | GOOD |
| 35727 | priceDataSource | 88% | FAIR |

## Manual Verification Checklist

For each module below, manually verify:

1. **Semantic name matches code functionality**
2. **Keywords from semantic name appear in code**
3. **Variable renaming is appropriate**
4. **No syntax errors introduced**
5. **Code structure aligns with assigned responsibility**

## Module Details for Review

### Module 13896 (lineToolManager)

- **Confidence:** 80%
- **Keywords:** 2
- **Validation:** GOOD (7/8)
- **Replacements:** 2

**First 30 lines:**
```javascript
/**
 * Module: 13896
 * Semantic: lineToolManager
 * Confidence: 80.0%
 * Keywords: 2
 * Generated: 2026-05-06T05:26:21.422Z
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

/**
 * Module 13896 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13896: (lineToolManager_e, t, i) => {
    "use strict";
    i.d(t, {
      lineToolsDoNotAffectChartInvalidation: () => lineToolManager_s
    });
    const lineToolManager_s = !1
```

**Manual Assessment:** [ ] PASS  [ ] FAIL  [ ] UNCERTAIN

**Notes:** _________________________________________________

### Module 97995 (lineToolManager)

- **Confidence:** 80%
- **Keywords:** 2
- **Validation:** GOOD (7/8)
- **Replacements:** 2

**First 30 lines:**
```javascript
/**
 * Module: 97995
 * Semantic: lineToolManager
 * Confidence: 80.0%
 * Keywords: 2
 * Generated: 2026-05-06T05:26:21.427Z
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

/**
 * Module 97995 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

97995: (lineToolManager_e, t, i) => {
    "use strict";
    i.d(t, {
      trackDrawingToolSelected: () => lineToolManager_s
    });
    i(11946), i(78861);

    function lineToolManager_s(lineToolManager_e, t) {
      0
    }
```

**Manual Assessment:** [ ] PASS  [ ] FAIL  [ ] UNCERTAIN

**Notes:** _________________________________________________

### Module 7543 (dataSource)

- **Confidence:** 70%
- **Keywords:** 2
- **Validation:** FAIR (6/8)
- **Replacements:** 3

**First 30 lines:**
```javascript
/**
 * Module: 7543
 * Semantic: dataSource
 * Confidence: 70.0%
 * Keywords: 2
 * Generated: 2026-05-06T05:26:21.426Z
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

/**
 * Module 7543 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

7543: (dataSource_e, dataSource_t, i) => {
    "use strict";

    function dataSource_s(dataSource_e) {
      return Boolean(dataSource_e.showInObjectTree)
    }
    i.d(dataSource_t, {
      isDataSource: () => dataSource_s
    })
```

**Manual Assessment:** [ ] PASS  [ ] FAIL  [ ] UNCERTAIN

**Notes:** _________________________________________________

### Module 92211 (seriesBarFunction)

- **Confidence:** 100%
- **Keywords:** 2
- **Validation:** GOOD (7/8)
- **Replacements:** 3

**First 30 lines:**
```javascript
/**
 * Module: 92211
 * Semantic: seriesBarFunction
 * Confidence: 100.0%
 * Keywords: 2
 * Generated: 2026-05-06T05:26:21.427Z
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

/**
 * Module 92211 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

92211: (seriesBarFunction_e, t, i) => {
    "use strict";
    i.d(t, {
      extractSymbolNameFromSymbolInfo: () => l
    });
    var seriesBarFunction_s = i(37103);
    const o = seriesBarFunction_s.enabled("pay_attention_to_ticker_not_symbol"),
      n = seriesBarFunction_s.enabled("charting_library_single_symbol_request"),
      r = seriesBarFunction_s.enabled("use_ticker_on_symbol_info_update"),
      seriesBarFunction_a = seriesBarFunction_s.enabled("uppercase_instrument_names");

    function l(seriesBarFunction_e, t, i, seriesBarFunction_s) {
      let l = seriesBarFunction_e && (i && seriesBarFunction_e.pro_name || seriesBarFunction_e.full_name || seriesBarFunction_e.name);
      return n && t ? l = t : (r || !seriesBarFunction_s && o) && seriesBarFunction_e && seriesBarFunction_e.ticker && (l = seriesBarFunction_e.ticker), seriesBarFunction_a && l && (l = l.toUpperCase()), l
```

**Manual Assessment:** [ ] PASS  [ ] FAIL  [ ] UNCERTAIN

**Notes:** _________________________________________________

### Module 35727 (priceDataSource)

- **Confidence:** 88%
- **Keywords:** 2
- **Validation:** FAIR (6/8)
- **Replacements:** 3

**First 30 lines:**
```javascript
/**
 * Module: 35727
 * Semantic: priceDataSource
 * Confidence: 88.0%
 * Keywords: 2
 * Generated: 2026-05-06T05:26:21.424Z
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

/**
 * Module 35727 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

35727: (priceDataSource_e, priceDataSource_t, i) => {
    "use strict";
    i.d(priceDataSource_t, {
      customFormatters: () => priceDataSource_s
    });
    const priceDataSource_s = {
      dateFormatter: null,
      timeFormatter: null,
      tickMarkFormatter: null,
      priceFormatterFactory: null,
      studyFormatterFactory: null
    }
```

**Manual Assessment:** [ ] PASS  [ ] FAIL  [ ] UNCERTAIN

**Notes:** _________________________________________________

## Spot-Check Results Summary

- **Total Reviewed:** 5
- **Passed:** ___ / 5
- **Failed:** ___ / 5
- **Pass Rate:** ___%

**Gate Requirement:** 80%+ (4/5 or 5/5 must pass)

**Decision:** [ ] PROCEED TO ARCHIVE  [ ] ROLLBACK  [ ] INVESTIGATE FURTHER

