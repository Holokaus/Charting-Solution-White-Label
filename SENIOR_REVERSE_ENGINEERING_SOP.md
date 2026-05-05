# 🏆 SENIOR REVERSE ENGINEERING SOP - Class-1 Quality Workflow

**Organization:** TradingView Charting Library Reverse Engineering Project  
**Effective Date:** May 5, 2026  
**Quality Standard:** Class-1 (20+ years reverse engineering experience)  
**Audience:** All AI agents and human reviewers  

---

## 1. CORE PRINCIPLES

### 1.1 Accuracy > Speed
- **Mandatory:** Every module identification must be validated
- **Conservative:** Prefer false negatives (missing modules) over false positives (wrong assignments)
- **Verification-First:** Deploy only after rigorous verification
- **No Exceptions:** Senior standards apply to every module, every tier

### 1.2 Class-1 Quality Standards
- **Semantic Accuracy:** 100% of deployed modules must have correct semantic names
- **Code Understanding:** Every deployed module must have verifiable keyword evidence
- **Traceability:** All assignments must be documented with justification
- **Reversibility:** Every decision must be reversible with documented procedures

### 1.3 Pattern Matching Discipline
- **Pattern ≠ Semantic:** Structural similarity does not equal semantic correctness
- **Keyword Verification:** Required before ANY semantic assignment
- **Confidence Scoring:** Must reflect semantic accuracy, not just pattern match
- **Graduated Trust:** Higher tiers require more evidence

---

## 2. DISCOVERY WORKFLOW (Rigorous Standards)

### 2.1 Phase 1: Pattern Database Construction

**Objective:** Build verified semantic patterns from KNOWN modules only

**Steps:**
```
1. Load only verified approved modules (currently 330)
2. For EACH known module:
   a. Read code content
   b. Extract semantic indicators:
      - Keywords related to semantic name
      - Method patterns
      - Class definitions
      - Export types
      - Async/event patterns
   c. GATE 1: Verify keyword presence (mandatory)
      - MUST find 2+ keywords matching semantic name
      - If keywords missing → REJECT (even if it's a "known" module)
      - Document all rejections
   d. Store only keyword-verified patterns
3. Output: Pattern database with keyword verification proof
```

**Quality Check:**
- All patterns must have verifiable keyword evidence
- Document any "known" modules that fail keyword verification (investigate root cause)

### 2.2 Phase 2: Unknown Module Analysis

**Objective:** Identify candidate modules using Class-1 gates

**Steps:**
```
1. Iterate through all 466 modules
2. Skip known modules
3. For EACH unknown module:
   a. Read code content
   b. GATE 1: Check for semantic keywords
      - Try to match against semantic keyword profiles
      - If NO semantic keywords found:
         → REJECT (hard fail)
         → Record rejection
         → Continue to next module
      - If semantic keywords found:
         → Continue to next gate
   c. GATE 2: Calculate semantic confidence
      - Score based on:
         • Keyword matches (40%) - weighted by importance
         • Pattern similarity (40%) - method count, exports, async patterns
         • Confidence bonus (20%) - consistency factors
      - Formula: (keywords * 0.4) + (patterns * 0.4) + (consistency * 0.2)
   d. GATE 3: Apply threshold filters
      - HIGH (75%+):   Ready for immediate deployment with validation
      - MEDIUM (60-75%): Good candidates, require manual review
      - LOW (45-60%):   Exploratory only, needs expert validation
      - REJECT (<45%): Do not deploy
   e. Document ALL decisions with:
      - Semantic name suggested
      - Confidence score
      - Keywords found
      - Pattern matches
      - Any uncertainty flags
```

**Quality Gates (Non-Negotiable):**
- ✅ GATE 1: Must have semantic keywords (hard fail if absent)
- ✅ GATE 2: Semantic confidence > threshold
- ✅ GATE 3: Traceability - every assignment documented
- ✅ GATE 4: Conservative scoring - prefer rejection over wrong assignment

### 2.3 Keyword Verification Table

**Master Reference - Keywords that MUST appear in code:**

| Semantic Name | Required Keywords | Min Found | Evidence Weight |
|---------------|-------------------|-----------|-----------------|
| watchedValue | watch, listener, subscr, notify, value, state, change | 2 | 40% |
| series | series, chart, data, plot, bar, line, candle | 2 | 40% |
| dataSource | data, source, fetch, provider, stream, request | 2 | 40% |
| priceDataSource | price, quote, tick, feed, market, symbol | 2 | 40% |
| logger | log, debug, info, warn, error, level, console | 2 | 40% |
| config | config, settings, options, preference, setup | 2 | 40% |
| handler | handle, process, execute, event, perform | 2 | 40% |
| delegate | delegate, proxy, forward, relay, distribute | 2 | 40% |
| canvasRendering | canvas, render, draw, paint, graphics | 2 | 40% |
| chartManager | chart, manage, control, state | 2 | 40% |
| lineToolManager | line, tool, draw, manage, user | 2 | 40% |

**Rule:** No assignment without minimum keywords in table.

---

## 3. APPLICATION WORKFLOW

### 3.1 Pre-Application Gate

**Before applying ANY modules:**

```
1. Verify discovery results have keyword verification documented
2. Check that confidence thresholds met
3. Confirm no overlaps with previously deployed modules
4. Generate impact analysis (what could break if wrong?)
5. Sign-off: Minimum 2 senior-level reviewers (or 1 AI + 1 human)
6. Document: ALL assumptions and risks
```

**Checkpoints:**
- [ ] Discovery report generated with quality gates documented
- [ ] All modules have keyword verification proof
- [ ] Confidence scores calculated and justified
- [ ] Impact analysis complete
- [ ] Review sign-off obtained
- [ ] Risk mitigation plan documented

### 3.2 Application Phase

**Step 1: Apply semantic variable renaming**
```
1. Load discovered modules
2. For each module:
   a. Apply semantic variable mapping
   b. Add metadata header with:
      - Module ID
      - Semantic name
      - Confidence score
      - Keywords found
      - Date applied
   c. Verify brace balance (syntax check)
   d. Store in output directory
```

**Step 2: Generate application report**
```
1. Document total replacements per semantic category
2. List all applied modules with metadata
3. Note any anomalies or errors
4. Calculate statistics
```

### 3.3 Validation Phase

**CRITICAL: Rigorous 8-point validation for EVERY module**

```
Validation Checklist (all 8 must pass for "GOOD" tier):

1. ✅ Module ID Valid
   - Check: Numeric format
   - Gate: Required

2. ✅ Semantic Name Valid
   - Check: Metadata header present with semantic name
   - Gate: Required

3. ✅ Content Valid
   - Check: >15 substantive non-comment lines
   - Gate: Required for deployed modules

4. ✅ Header Present
   - Check: JSDoc-style metadata comment
   - Gate: Required

5. ✅ Semantics Applied
   - Check: Semantic variable names found (threshold: 3+ different semantic variables)
   - Gate: Required

6. ✅ Exports Found
   - Check: Export statement detected (i.d(t, ...) or module.exports)
   - Gate: Optional (internal helpers may not export)

7. ✅ No Obvious Errors
   - Check: Brace matching (open === close, min 1)
   - Gate: Critical for code integrity

8. ✅ Size Reasonable
   - Check: 100B - 500KB
   - Gate: Required
```

**Scoring:**
- GOOD (7-8 pass): Ready for deployment ✅
- FAIR (6-7 pass): Optional review recommended 🟡
- NEEDS_REVIEW (<6 pass): Do not deploy ❌

**Special Notes:**
- Exports check: Not all modules need exports (internal helpers valid)
- Brace matching: Apply only to new beautified code
- Size check: Adjust per module type if needed

---

## 4. ARCHIVAL & DEPLOYMENT

### 4.1 Archive Gate

**Before archiving GOOD modules:**

```
1. Run final accuracy verification spot-check:
   a. Randomly select 5-10 modules from GOOD tier
   b. For EACH module:
      - Read actual code
      - Verify semantic name makes sense
      - Check keyword evidence still valid
      - Confirm no obvious misidentifications
   c. Pass rate must be 80%+ for approval
```

2. Generate manifest with metadata:
   - Module ID
   - Semantic name
   - Quality score
   - Validation date
   - Keywords found (evidence)
   - Confidence tier

3. Create checksums/hashes for integrity tracking

4. Document rollback procedure for each archive

### 4.2 Deployment Gate

**Final decision point - last chance to catch errors:**

```
1. Review spot-check results
2. Verify manifest integrity
3. Check coverage numbers
4. Confirm no regressions
5. Senior sign-off REQUIRED
```

**Abort Conditions (trigger immediate halt):**
- Spot-check pass rate < 80%
- Any evidence of semantic misassignment
- Keyword verification gaps found
- Coverage anomalies detected
- Any uncertainty whatsoever

---

## 5. QUALITY METRICS & GATES

### 5.1 Threshold Table

| Metric | Minimum | Target | Maximum |
|--------|---------|--------|---------|
| Discovery Pass Rate | 70% | 80%+ | N/A |
| Keyword Verification | MANDATORY | 100% | N/A |
| Application Success | 100% | 100% | N/A |
| Validation GOOD % | 60% | 80%+ | N/A |
| Spot-Check Pass Rate | 80% | 90%+ | N/A |
| Confidence Score (HIGH) | 75% | 85%+ | 100% |
| Confidence Score (MEDIUM) | 60% | 75%+ | 85% |
| False Positive Rate | 0% | 0% | <5% |

### 5.2 Gates by Tier

| Tier | Keyword Verify | Min Confidence | Validation % | Spot-Check | Deploy? |
|------|----------------|----------------|--------------|-----------|---------|
| HIGH (75%+) | ✅ REQUIRED | 75% | 85%+ | 90%+ | ✅ YES |
| MEDIUM (60-75%) | ✅ REQUIRED | 60% | 75%+ | 80%+ | 🟡 REVIEW |
| LOW (45-60%) | ✅ REQUIRED | 45% | 70%+ | 70%+ | ❌ NO |
| REJECTED (<45%) | - | <45% | - | - | ❌ NO |

### 5.3 What Triggers Rollback

**Automatic rollback if ANY of these occur:**
```
❌ Spot-check pass rate drops below 80%
❌ Keyword verification fails for >10% of tier
❌ Validation GOOD percentage drops below 60%
❌ Any evidence of semantic misassignment found
❌ Coverage increases > 10% without proportional validation increase
❌ Human reviewer expresses concern
❌ Traceability/documentation incomplete
```

**Rollback procedure:**
1. Document trigger reason
2. Delete deployed modules and directories
3. Revert coverage claim
4. Investigate root cause
5. Fix algorithm before retry

---

## 6. DOCUMENTATION REQUIREMENTS

### 6.1 Every Operation Must Generate

**Discovery:**
- [ ] `advanced-discovery-round[N].md` - Human-readable results with gates applied
- [ ] `pattern-discovery-round[N]-analysis.json` - Raw data with confidence scores
- [ ] `discovery-quality-report.md` - Gate enforcement and rejections documented

**Application:**
- [ ] `[semantic]-applications-report.md` - Modules applied per semantic category
- [ ] `[semantic]-applications-stats.json` - Statistics and error log

**Validation:**
- [ ] `validation-[tier]-[round].md` - Detailed validation results
- [ ] `validation-[tier]-[round]-details.json` - Raw validation data with all 8 checks

**Archival:**
- [ ] `[round]-approved-manifest.json` - Metadata for all archived modules
- [ ] `[round]-rollback-procedure.md` - How to undo if needed

**Spot-Check:**
- [ ] `accuracy-verification-[round].md` - Spot-check results with evidence
- [ ] `accuracy-verification-[round].json` - Raw spot-check data

### 6.2 Status Tracking File

**Mandatory:** `PROJECT_STATUS_[DATE].md` that includes:
- Current coverage (X/466 modules)
- Coverage percentage
- Modules deployed by tier
- Modules pending review
- Modules rolled back (with reason)
- Open issues and next steps
- Previous session summary (for continuity)

---

## 7. WORKFLOW DECISION TREE

```
START: New Discovery Batch
│
├─→ STEP 1: Run discovery with Class-1 gates enabled
│   │
│   ├─→ Generate discovery report
│   ├─→ Verify keyword verification for ALL candidates
│   └─→ Record all rejections with reasons
│
├─→ STEP 2: Categorize by tier
│   │
│   ├─→ HIGH (75%+):      Continue to application
│   ├─→ MEDIUM (60-75%):  Halt for manual review
│   ├─→ LOW (45-60%):     Archive for optional later review
│   └─→ REJECT (<45%):    Document and ignore
│
├─→ STEP 3: Apply HIGH tier modules
│   │
│   ├─→ Apply semantic variable renaming
│   ├─→ Generate application report
│   └─→ Proceed to validation
│
├─→ STEP 4: Validate with 8-point checklist
│   │
│   ├─→ GOOD (7-8 pass):     Proceed to archival
│   ├─→ FAIR (6-7 pass):     Hold for review
│   └─→ NEEDS_REVIEW (<6):   Do not deploy
│
├─→ STEP 5: Spot-check GOOD modules
│   │
│   ├─→ Pass rate 80%+?
│   │   YES: Proceed to archival ✅
│   │   NO:  HALT, investigate, consider rollback
│   │
│   └─→ Spot-check for semantic accuracy:
│       - Read 5-10 random modules
│       - Verify semantic names make sense
│       - Check keyword evidence
│       - Any misassignments? HALT
│
├─→ STEP 6: Archive GOOD modules
│   │
│   ├─→ Generate manifest with metadata
│   ├─→ Create rollback procedure
│   └─→ Update coverage tracking
│
└─→ STEP 7: Update project status
    │
    ├─→ Document new coverage
    ├─→ Note any issues or learnings
    ├─→ Plan next phase
    └─→ COMPLETE: Ready for next agent
```

---

## 8. COMMON ERRORS & PREVENTION

### Error 1: Pattern Matching Without Semantic Verification
**Problem:** Similar code structure ≠ correct semantic name  
**Prevention:** Keyword verification is MANDATORY gate  
**Check:** Every assignment must have 2+ keywords from semantic keyword table  

### Error 2: Over-Confidence in Validation Metrics
**Problem:** Module may pass 8-point validation but still have wrong semantic name  
**Prevention:** Spot-check verification MANDATORY after every tier  
**Check:** Randomly sample 5-10 modules, manually verify semantic accuracy  

### Error 3: Deploying Low-Confidence Tiers
**Problem:** Modules below 75% confidence often have wrong semantic names  
**Prevention:** Strict thresholds: HIGH only for deployment, rest for review  
**Check:** Never skip confidence thresholds, no exceptions  

### Error 4: Missing Documentation
**Problem:** No one knows why a module was assigned or deployed  
**Prevention:** Every operation generates detailed reports and manifest files  
**Check:** All files must include rationale, keywords, confidence scores  

### Error 5: Ignoring Rejections
**Problem:** Modules that failed gates later prove to be wrong  
**Prevention:** Document ALL rejections, analyze patterns  
**Check:** Review rejections regularly to improve gates  

---

## 9. HANDOFF TO NEXT AGENT

### 9.1 Before Starting Any Work

**Checklist:**
```
1. [ ] Read PROJECT_STATUS_[DATE].md for context
2. [ ] Review accuracy-verification-*.md files
3. [ ] Check rollback procedures for all recent deployments
4. [ ] Understand coverage baseline (currently 330 modules)
5. [ ] Verify all gates in this SOP are understood
6. [ ] Confirm discovery algorithm includes keyword verification
7. [ ] Set up spot-check verification before ANY deployment
```

### 9.2 Throughout Session

**After each major operation:**
```
1. [ ] Generate required output files
2. [ ] Update PROJECT_STATUS_[DATE].md
3. [ ] Document any issues or learnings
4. [ ] Record decision rationale
5. [ ] Verify all gates applied
```

### 9.3 At Session End

**Prepare for next agent:**
```
1. [ ] Create final PROJECT_STATUS_[DATE].md
2. [ ] Document what was completed
3. [ ] Document what's pending
4. [ ] Flag any concerns or uncertain decisions
5. [ ] Provide rollback procedures for all recent changes
6. [ ] Include recommendations for next phase
```

---

## 10. SIGN-OFF & ACCOUNTABILITY

**This workflow is MANDATORY for all AI agents working on this project.**

**Non-Compliance Consequences:**
- Any deployment without keyword verification → AUTOMATIC ROLLBACK
- Any failure to spot-check → HALT pending review
- Any documentation gaps → HALT pending completion
- Any threshold violations → AUTOMATIC ROLLBACK + investigation

**Approved By:**
- Senior Reverse Engineering Standards
- Class-1 Quality Mandatory
- Accuracy > Speed, Always

---

**Last Updated:** May 5, 2026  
**Effective For:** All future discovery and deployment phases  
**Review Cycle:** After each major phase (Quarterly minimum)

---
