# TIER-B REMEDIATION EXECUTION PLAN
**Status:** INITIATED  
**Total Modules:** 198  
**Target:** Class-1 Semantic Quality  
**Timeline:** 4 Weeks  

## Current State Analysis

### Problem Identified: Mechanical Prefixing
All 198 modules in HOLD-TIER-B-REMEDIATION suffer from the same critical issue:
- Variables named `e`, `t`, `i` were renamed to `watchedValue_e`, `watchedValue_t`, `watchedValue_i`
- This is NOT semantic renaming - it's mechanical prefixing
- Zero comprehension value added
- JSDoc claims are FALSE

### Example Violations:
```javascript
// BEFORE (minified)
10980: (e, t, i) => { ... }

// AFTER (mechanical prefixing - STILL FAILS)
10980: (watchedValue_e, watchedValue_t, watchedValue_i) => { ... }

// SHOULD BE (true semantic)
10980: (exports, module, require) => { ... }
```

## Remediation Strategy

### Phase 1: Critical Infrastructure (Week 1) - 25 modules
**Priority:** Core utilities used by other modules
**Modules:**
- 10718-date-format-utilities.js
- 10892-interval-utilities.js
- 1765-settings-adapter.js
- 2115-series-data.js (150KB - CRITICAL)
- 2115-series.js (157KB - CRITICAL)
- 33350-canvas-utilities.js
- 41414-line-drawing-source.js
- 60876-step-line-renderer.js
- [Additional 17 core modules]

### Phase 2: Rendering & Display (Week 2) - 40 modules
**Priority:** Visual rendering pipeline
**Modules:**
- 36281-price-axis-renderer.js
- 59064-series-properties.js
- All renderer modules
- All display-related modules

### Phase 3: Study System (Week 3) - 50 modules
**Priority:** Indicator/study infrastructure
**Modules:**
- 15219.js (StudyVersioning)
- 24437-live-study-graphics.js
- 45-basic-studies-library.js
- 4783-indicators.js
- All study-related modules

### Phase 4: Remaining Modules (Week 4) - 83 modules
**Priority:** Tools, utilities, misc
**Modules:**
- All remaining modules
- Final validation pass

## Remediation Process (Per Module)

### Step 1: Analysis
```bash
# Identify all single-letter variables with prefixes
grep -E "(watchedValue_|lineToolManager_|dataSource_)[a-z]_" module.js
```

### Step 2: Semantic Mapping
Create mapping table:
| Old Name | Context | New Semantic Name |
|----------|---------|-------------------|
| watchedValue_e | First param | exports |
| watchedValue_t | Second param | module |
| watchedValue_i | Third param | require |
| watchedValue_s | Internal var | state |
| watchedValue_o | Internal var | options |
| watchedValue_n | Internal var | number/next |
| watchedValue_r | Internal var | result/reader |
| watchedValue_a | Internal var | array/arg |
| watchedValue_l | Internal var | list/length |
| watchedValue_c | Internal var | config/context |
| watchedValue_h | Internal var | handler/helper |
| watchedValue_d | Internal var | data/definition |
| watchedValue_u | Internal var | url/util |
| watchedValue_m | Internal var | method/map |
| watchedValue_p | Internal var | props/params |

### Step 3: Apply Transformations
- Replace ALL prefixed single-letter variables
- Preserve legitimate multi-character names
- Update all references consistently

### Step 4: Documentation
- Add accurate JSDoc header
- Document dependencies
- List exported symbols
- NO false claims

### Step 5: Validation Gate
- [ ] No single-letter variables (even prefixed)
- [ ] All exports documented
- [ ] Dependencies listed
- [ ] Keyword verification (2+ matches)
- [ ] Manual spot-check passed
- [ ] JSDoc accuracy verified
- [ ] No hallucinated claims
- [ ] Code compiles/runs

### Step 6: Promotion
- Move to VERIFIED-TIER-A upon passing all gates
- Update manifest
- Ready for deployment

## Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Modules Remediated | 0/198 | 198/198 |
| Class-1 Compliance | 0% | 100% |
| False Claims Removed | Pending | 100% |
| Spot-Check Pass Rate | N/A | 80%+ |

## Immediate Actions Required

1. **Start with smallest modules first** (quick wins, build momentum)
2. **Establish remediation pattern** on 5-10 modules
3. **Scale to full batch** once pattern proven
4. **Daily progress tracking** against plan

## Risk Mitigation

- **Original sources preserved** in modules-v2/
- **Rollback available** at any time
- **Incremental deployment** (no big-bang)
- **Validation gates enforced** (no shortcuts)

---

**Next Action:** Begin Phase 1 with 5 smallest modules to establish pattern.
