# 📋 PHASE-BY-PHASE WORKFLOW EXECUTOR GUIDE

**For:** AI Agents executing discovery/application/validation/archival phases  
**Purpose:** Step-by-step checklist to ensure Class-1 quality gates applied  
**Compliance:** Mandatory - follow exactly, no deviations  

---

## PHASE 0: PRE-START REQUIREMENTS

### Before Starting ANY Work:

```bash
1. [ ] Read PROJECT_STATUS_[DATE].md for context
2. [ ] Review SENIOR_REVERSE_ENGINEERING_SOP.md (entire document)
3. [ ] Review CLASS-1_QUALITY_CHECKLIST.md (entire document)
4. [ ] Understand current baseline coverage (currently 330 modules)
5. [ ] Locate rollback procedures from previous phases
6. [ ] Confirm this is the next planned phase (check status doc)
7. [ ] Understand success criteria for this phase
```

**If ANY requirement unclear:** STOP and clarify before proceeding.

---

## PHASE 1: DISCOVERY - Step-by-Step

### Step 1.1: Verify Discovery Algorithm

```bash
CHECKLIST:
1. [ ] Discovery script uses keyword verification gate
2. [ ] Semantic keyword table loaded (watchedValue, series, etc.)
3. [ ] Confidence scoring formula includes keyword weighting (40%+)
4. [ ] Conservative thresholds set: 75% HIGH, 60% MEDIUM, 45% LOW
5. [ ] Discovery runs against current approved baseline
6. [ ] Output files configured:
   - advanced-pattern-discovery-round[N].md
   - pattern-discovery-round[N]-analysis.json
```

### Step 1.2: Execute Discovery

```bash
COMMAND: node advanced-discovery-round[N]-fixed.cjs 2>&1

WAIT FOR COMPLETION - DO NOT INTERRUPT

VERIFY OUTPUT:
1. [ ] Exit code 0 (success)
2. [ ] Console shows discovery complete
3. [ ] Output files generated:
   - [ ] advanced-pattern-discovery-round[N].md exists
   - [ ] pattern-discovery-round[N]-analysis.json exists
```

### Step 1.3: Review Discovery Results

```bash
OPEN: advanced-pattern-discovery-round[N].md

CHECKLIST:
1. [ ] Report shows discovery complete
2. [ ] Baseline size correct (currently 330)
3. [ ] Class-1 gates documented
4. [ ] Keyword verification results shown
5. [ ] HIGH/MEDIUM/LOW counts listed
6. [ ] Coverage projections realistic
7. [ ] All rejections documented with reasons

READ: pattern-discovery-round[N]-analysis.json

CHECKLIST:
1. [ ] JSON structure valid (no parse errors)
2. [ ] Summary shows HIGH/MEDIUM/LOW counts
3. [ ] Each discovery has:
   - moduleId
   - tier
   - suggested (semantic name)
   - score (confidence percentage)
   - keywords (if HIGH tier)
4. [ ] Quality gates present in JSON
```

### Step 1.4: Quality Gate Verification

```bash
THRESHOLD CHECKS:

1. [ ] HIGH-confidence modules (75%+) have 2+ keywords minimum
2. [ ] MEDIUM-confidence modules (60-75%) have keyword verification
3. [ ] Total discoveries > 5 (reasonable discovery results)
4. [ ] Rejections documented (modules that failed keyword gate)
5. [ ] No module assigned without semantic keyword evidence
6. [ ] Coverage increase 5-15% is normal (concern if >20% jump)

IF ANY FAILS:
=> HALT
=> Review discovery algorithm
=> Check keyword table
=> Run discovery again
```

### Step 1.5: Decision Gate

**Question 1:** Does discovery report show Class-1 gates applied?
- YES: Continue
- NO: HALT - investigate algorithm

**Question 2:** Are HIGH-confidence modules (75%+) present?
- YES: Continue (apply HIGH tier)
- NO: Document and evaluate MEDIUM for manual review

**Decision:**
- ✅ PROCEED with HIGH-confidence tier
- 🟡 REVIEW MEDIUM-confidence tier (needs manual verification)
- ❌ HALT (no suitable modules, fix discovery)

---

## PHASE 2: APPLICATION - Step-by-Step

### Step 2.1: Prepare Application

```bash
CHECKLIST:
1. [ ] Input directory ready: ./beautified-output/
2. [ ] Output directory will be: ./round[N]-[TIER]-confidence-applied/
3. [ ] Application script prepared: apply-round[N]-[TIER].cjs
4. [ ] Semantic mappings configured
5. [ ] Report template ready
6. [ ] Statistics file configured
```

### Step 2.2: Execute Application

```bash
COMMAND: node apply-round[N]-[TIER].cjs 2>&1

WAIT FOR COMPLETION - DO NOT INTERRUPT

VERIFY OUTPUT:
1. [ ] Exit code 0 (success)
2. [ ] Console shows modules applied count
3. [ ] Output files generated:
   - [ ] round[N]-[TIER]-confidence-applied/ directory exists
   - [ ] [TIER]-applications-report.md exists
   - [ ] round[N]-[TIER]-applications-stats.json exists
4. [ ] Module count in directory matches expected
```

### Step 2.3: Verify Application Stats

```bash
READ: round[N]-[TIER]-applications-stats.json

CHECKLIST:
1. [ ] modules field matches discovery count
2. [ ] totalReplacements is non-zero (reasonable)
3. [ ] byCategory shows semantic categories used
4. [ ] applied array lists all modules
5. [ ] errors array is empty or minimal (1-2 max)

ANALYSIS:
1. [ ] Average replacements/module is reasonable (10-20 typical)
2. [ ] No semantic category has 0 modules (indicates diversity)
3. [ ] Replacements distributed across semantics (not all in one)
```

### Step 2.4: Quality Check

```bash
QUESTIONS:

Q1: Is modules_applied count > 0?
   YES: Continue
   NO: HALT - no modules applied

Q2: Is totalReplacements > 0?
   YES: Continue
   NO: HALT - no semantic renaming occurred

Q3: Are errors < 5% of total modules?
   YES: Continue
   NO: HALT - too many errors, investigate

Q4: Is error log reasonable?
   YES: Continue
   NO: HALT - unacceptable errors

DECISION:
- ✅ APPLICATION SUCCESS - continue to validation
- ❌ APPLICATION FAILED - investigate and retry
```

---

## PHASE 3: VALIDATION - Step-by-Step

### Step 3.1: Prepare Validation

```bash
CHECKLIST:
1. [ ] Input directory: ./round[N]-[TIER]-confidence-applied/
2. [ ] Stats file: round[N]-[TIER]-applications-stats.json
3. [ ] Validation script: validate-round[N]-[TIER].cjs
4. [ ] 8-point checklist configured (see CLASS-1_QUALITY_CHECKLIST.md)
5. [ ] Output files configured:
   - validation-round[N]-[TIER]-confidence.md
   - validation-round[N]-[TIER]-confidence-details.json
```

### Step 3.2: Execute Validation

```bash
COMMAND: node validate-round[N]-[TIER].cjs 2>&1

WAIT FOR COMPLETION - DO NOT INTERRUPT

VERIFY OUTPUT:
1. [ ] Exit code 0 (success)
2. [ ] Console shows validation complete
3. [ ] Output files generated:
   - [ ] validation-round[N]-[TIER]-confidence.md exists
   - [ ] validation-round[N]-[TIER]-confidence-details.json exists
4. [ ] Module count validated matches applied count
```

### Step 3.3: Review Validation Results

```bash
READ: validation-round[N]-[TIER]-confidence.md

CHECKLIST:
1. [ ] Total modules validated = modules applied
2. [ ] GOOD tier percentage calculated
3. [ ] FAIR tier percentage shown
4. [ ] NEEDS_REVIEW percentage shown
5. [ ] Average score calculated
6. [ ] All GOOD modules listed
7. [ ] Quality breakdown table present

METRICS TO CHECK:
1. [ ] GOOD tier (7-8 checks pass) ≥ 60% (minimum acceptable)
2. [ ] Better if GOOD tier ≥ 75%
3. [ ] Best if GOOD tier ≥ 85%
4. [ ] Average score ≥ 70% (minimum)
```

### Step 3.4: Quality Gate Check

```bash
THRESHOLD ASSESSMENT:

□ GOOD tier ≥ 85%: EXCELLENT quality ✅
   → Archive and deploy
   → Proceed to spot-check

□ GOOD tier 75-85%: GOOD quality ✅
   → Archive and deploy
   → Proceed to spot-check

□ GOOD tier 60-75%: ACCEPTABLE quality 🟡
   → Archive but CAUTION
   → Mandatory manual review
   → Spot-check REQUIRED

□ GOOD tier < 60%: UNACCEPTABLE ❌
   → DO NOT ARCHIVE
   → DO NOT DEPLOY
   → HALT - investigate algorithm
   → Possible rollback needed

DECISION:
- ✅ PROCEED to archival (if ≥ 60% GOOD)
- 🟡 REVIEW required (if 60-75% GOOD)
- ❌ DO NOT DEPLOY (if < 60% GOOD)
```

---

## PHASE 4: SPOT-CHECK VERIFICATION - CRITICAL GATE

### ⚠️ This phase is MANDATORY and cannot be skipped

### Step 4.1: Prepare Spot-Check

```bash
CHECKLIST:
1. [ ] Archive directory ready: ./round[N]-[TIER]-approved/
2. [ ] Manifest file location: round[N]-[TIER]-approved-manifest.json
3. [ ] Spot-check script: verify-accuracy-comprehensive.cjs
4. [ ] Sample size: 5-10 modules (min 5)
5. [ ] Output files configured:
   - ACCURACY_VERIFICATION_ROUND[N]_[TIER].md
   - accuracy-verification-round[N]-[tier].json
```

### Step 4.2: Execute Spot-Check

```bash
COMMAND: node verify-accuracy-comprehensive.cjs 2>&1

WAIT FOR COMPLETION - DO NOT INTERRUPT

VERIFY OUTPUT:
1. [ ] Exit code 0 (success)
2. [ ] Console shows verification complete
3. [ ] Output files generated:
   - [ ] ACCURACY_VERIFICATION_ROUND[N]_[TIER].md exists
   - [ ] accuracy-verification-round[N]-[tier].json exists
4. [ ] Sample modules analyzed (5-10)
```

### Step 4.3: Review Spot-Check Results

```bash
READ: ACCURACY_VERIFICATION_ROUND[N]_[TIER].md

CHECKLIST:
1. [ ] Spot-check completed for N modules
2. [ ] Each module analyzed for:
   - Keyword evidence
   - Semantic accuracy
   - Confidence assessment
3. [ ] Overall assessment shown
4. [ ] Pass rate calculated

CRITICAL METRICS:
1. [ ] Keyword matches shown (must be 2+)
2. [ ] Methods/patterns documented
3. [ ] Classes/exports checked
4. [ ] Assessment for each module (PASS/FAIL)

PASS RATE ASSESSMENT:
□ 100% (5/5 or 10/10 pass): EXCELLENT ✅
   → Deploy immediately

□ 90-100%: VERY GOOD ✅
   → Deploy with confidence

□ 80-90%: ACCEPTABLE ✅
   → Deploy but MONITOR

□ 70-80%: CAUTION 🟡
   → HALT for manual review
   → Consider rollback

□ <70%: FAILURE ❌
   → AUTOMATIC ROLLBACK
   → Investigate discovery algorithm
```

### Step 4.4: Accuracy Gate Decision

```bash
CRITICAL DECISION POINT:

IF Spot-Check Pass Rate ≥ 80%:
   => ✅ PROCEED TO ARCHIVAL
   => Accuracy verified
   => Class-1 gate passed

IF Spot-Check Pass Rate 70-80%:
   => 🟡 HALT FOR REVIEW
   => Manual verification needed
   => Get senior approval before deployment

IF Spot-Check Pass Rate < 70%:
   => ❌ AUTOMATIC ROLLBACK
   => Algorithm has issues
   => Investigate root cause
   => Do NOT deploy

DECISION:
- ✅ Accuracy verified (≥80%): Proceed to archival
- 🟡 Uncertain accuracy (70-80%): Halt + review
- ❌ Accuracy failed (<70%): ROLLBACK immediately
```

---

## PHASE 5: ARCHIVAL - Step-by-Step

### Step 5.1: Pre-Archival Gate

```bash
VERIFY SPOT-CHECK PASSED:
- [ ] Accuracy verification ≥ 80% (or approved exception)
- [ ] No semantic misassignments detected
- [ ] Keyword evidence verified for sampled modules
- [ ] All spot-check documentation available

IF SPOT-CHECK FAILED:
=> DO NOT PROCEED
=> HALT + ROLLBACK
=> See ROLLBACK SECTION below
```

### Step 5.2: Prepare Archival

```bash
CHECKLIST:
1. [ ] Archive directory: ./round[N]-[TIER]-approved/
2. [ ] Manifest file will be: round[N]-[TIER]-approved-manifest.json
3. [ ] Archival script: archive-round[N]-[TIER].cjs
4. [ ] Validation details file ready:
   validation-round[N]-[TIER]-confidence-details.json
```

### Step 5.3: Execute Archival

```bash
COMMAND: node archive-round[N]-[TIER].cjs 2>&1

WAIT FOR COMPLETION - DO NOT INTERRUPT

VERIFY OUTPUT:
1. [ ] Exit code 0 (success)
2. [ ] Console shows archival complete
3. [ ] Output files generated:
   - [ ] round[N]-[TIER]-approved/ directory exists
   - [ ] round[N]-[TIER]-approved-manifest.json exists
4. [ ] Module count in archive matches GOOD count
5. [ ] Coverage update announced
```

### Step 5.4: Verify Archival

```bash
CHECK FILES:
1. [ ] Archive directory exists
2. [ ] Manifest file exists and is valid JSON
3. [ ] Module files in archive directory = GOOD modules count

READ: round[N]-[TIER]-approved-manifest.json

CHECKLIST:
1. [ ] Each entry has:
   - semanticName
   - quality: "GOOD"
   - score: (percentage)
   - source: round[N]-[TIER]
   - archived: (timestamp)
2. [ ] All modules listed
3. [ ] No orphaned modules
```

---

## PHASE 6: FINAL STATUS UPDATE

### Step 6.1: Update Project Status

```bash
CREATE/UPDATE: PROJECT_STATUS_[DATE].md

INCLUDE:
1. [ ] Current date and time
2. [ ] Phase completed (Discovery/Application/Validation/Archival)
3. [ ] Previous coverage (X/466)
4. [ ] New coverage (Y/466)
5. [ ] Coverage percentage
6. [ ] Modules deployed by tier:
   - Tier 3 High: 211
   - Tier 3 Medium: 24
   - Tier 3 Low: 16
   - Round 3 HIGH: 4
   - Round 4 HIGH: [NEW]
   - Etc.
7. [ ] Total safe modules (verified)
8. [ ] Modules under review (if any)
9. [ ] Modules rolled back (if any)
10. [ ] Any issues or learnings
11. [ ] Next phase recommendation
12. [ ] Rollback procedure for this phase
```

### Step 6.2: Document Lessons Learned

```bash
DOCUMENT:
1. [ ] Any algorithm improvements identified
2. [ ] Any gate violations encountered
3. [ ] Any unexpected results
4. [ ] Recommendations for next phase
5. [ ] Estimated time for next phase
```

### Step 6.3: Prepare Handoff

```bash
FOR NEXT AI AGENT:
1. [ ] All documentation complete and clear
2. [ ] Rollback procedures documented
3. [ ] Status file updated
4. [ ] No ambiguous decisions left
5. [ ] All files organized and accessible
6. [ ] Ready for next phase start
```

---

## ROLLBACK PROCEDURE (If Needed)

### When to Rollback

**Automatic triggers:**
- [ ] Spot-check accuracy < 80%
- [ ] Semantic misassignment detected
- [ ] Keyword verification failed
- [ ] Validation GOOD tier < 60%
- [ ] Any gate violation

### How to Rollback

```bash
1. CREATE: rollback-round[N]-[TIER].cjs script
   - Delete: ./round[N]-[TIER]-confidence-applied/ directory
   - Delete: ./round[N]-[TIER]-approved/ directory
   - Delete: Application/validation/archival files
   - Delete: Round[N] specific manifests
   - Revert coverage to previous level

2. EXECUTE: node rollback-round[N]-[TIER].cjs 2>&1

3. VERIFY:
   - [ ] Directories deleted
   - [ ] Files deleted
   - [ ] Coverage reverted
   - [ ] Previous modules still intact

4. DOCUMENT:
   - [ ] Create ROLLBACK_REASON.md
   - [ ] Document what went wrong
   - [ ] Recommend fixes
   - [ ] Plan next attempt
```

---

## SUCCESS CRITERIA - Phase Complete

```bash
✅ ALL OF THE FOLLOWING MUST BE TRUE:

Discovery Phase:
- [ ] Discovery algorithm uses keyword verification
- [ ] Output files generated
- [ ] Coverage projection realistic
- [ ] No gate violations

Application Phase:
- [ ] All HIGH-confidence modules applied
- [ ] Output directory created with modules
- [ ] Stats file shows reasonable replacements
- [ ] Zero critical errors

Validation Phase:
- [ ] All modules validated (8-point checklist)
- [ ] GOOD tier ≥ 60%
- [ ] Validation files generated
- [ ] Quality metrics documented

Spot-Check Phase:
- [ ] ✅ CRITICAL: Accuracy ≥ 80%
- [ ] ✅ CRITICAL: No semantic misassignments
- [ ] ✅ CRITICAL: Keyword evidence verified
- [ ] Spot-check files generated

Archival Phase:
- [ ] Archive directory created
- [ ] GOOD modules moved to archive
- [ ] Manifest file generated
- [ ] Module count verified

Status Phase:
- [ ] PROJECT_STATUS_[DATE].md updated
- [ ] Coverage numbers accurate
- [ ] Rollback procedure documented
- [ ] Next phase clear

=> PHASE COMPLETE & READY FOR NEXT PHASE ✅
```

---

## TROUBLESHOOTING

### Problem: Discovery finds 0 modules
**Cause:** Keyword verification too strict or algorithm broken  
**Fix:**
1. Check keyword table is loaded
2. Verify semantic keyword profiles are complete
3. Test discovery on 1-2 modules manually
4. Adjust keyword thresholds if needed

### Problem: Validation GOOD tier < 60%
**Cause:** 8-point checklist too strict or algorithm issues  
**Fix:**
1. Review what checks are failing most
2. Consider if thresholds are reasonable
3. Check if issue is with application or validation
4. Adjust algorithm if needed

### Problem: Spot-check accuracy < 80%
**Cause:** Semantic assignment algorithm broken  
**Fix:**
1. Review keyword verification in discovery
2. Check confidence scoring formula
3. Consider if semantics assignments are correct
4. Investigate root cause before retry

### Problem: Rollback needed
**Cause:** Quality gate failed  
**Action:**
1. Execute rollback procedure
2. Document reason
3. Fix algorithm
4. Plan next attempt
5. Get approval before retry

---

**Last Updated:** May 5, 2026  
**Mandatory For:** All AI agents  
**Compliance:** 100% required  

---
