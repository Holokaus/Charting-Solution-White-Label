#!/usr/bin/env node

/**
 * Spot-Check Round 4 Improved - 5 HIGH Tier Modules
 * Tests semantic integrity BEFORE applying to all 5 HIGH tier modules
 * 
 * Modules:
 * 1. 11751 - watchedValue (score 100, 3 keywords)
 * 2. 55014 - seriesBarFunction (score 100, 4 keywords)
 * 3. 57340 - watchedValue (score 100, 3 keywords)
 * 4. 72104 - seriesBarFunction (score 92, 3 keywords)
 * 5. 8811 - watchedValue (score 100, 3 keywords)
 */

const fs = require('fs');
const path = require('path');

const COMPLETE_SEMANTIC_MAPPING = {
  watchedValue: {
    e: 'watchedValue_e',
    s: 'watchedValue_s',
    n: 'watchedValue_n',
    a: 'watchedValue_a',
    t: 'watchedValue_t',
    o: 'watchedValue_o',
    r: 'watchedValue_r',
    l: 'watchedValue_l',
    i: 'watchedValue_i',
    c: 'watchedValue_c',
    h: 'watchedValue_h',
    d: 'watchedValue_d',
    u: 'watchedValue_u',
    p: 'watchedValue_p',
    m: 'watchedValue_m',
    g: 'watchedValue_g',
    f: 'watchedValue_f',
    v: 'watchedValue_v',
    b: 'watchedValue_b',
    w: 'watchedValue_w',
    x: 'watchedValue_x',
    k: 'watchedValue_k',
    z: 'watchedValue_z',
    j: 'watchedValue_j',
    y: 'watchedValue_y',
    q: 'watchedValue_q'
  },
  seriesBarFunction: {
    e: 'seriesBarFunction_e',
    s: 'seriesBarFunction_s',
    n: 'seriesBarFunction_n',
    a: 'seriesBarFunction_a',
    t: 'seriesBarFunction_t',
    o: 'seriesBarFunction_o',
    r: 'seriesBarFunction_r',
    l: 'seriesBarFunction_l',
    i: 'seriesBarFunction_i',
    c: 'seriesBarFunction_c',
    h: 'seriesBarFunction_h',
    d: 'seriesBarFunction_d',
    u: 'seriesBarFunction_u',
    p: 'seriesBarFunction_p',
    m: 'seriesBarFunction_m',
    g: 'seriesBarFunction_g',
    f: 'seriesBarFunction_f',
    v: 'seriesBarFunction_v',
    b: 'seriesBarFunction_b',
    w: 'seriesBarFunction_w',
    x: 'seriesBarFunction_x',
    k: 'seriesBarFunction_k',
    z: 'seriesBarFunction_z',
    j: 'seriesBarFunction_j',
    y: 'seriesBarFunction_y',
    q: 'seriesBarFunction_q'
  }
};

const TEST_MODULES = [
  { id: '11751', expectedType: 'watchedValue' },
  { id: '55014', expectedType: 'seriesBarFunction' },
  { id: '57340', expectedType: 'watchedValue' },
  { id: '72104', expectedType: 'seriesBarFunction' },
  { id: '8811', expectedType: 'watchedValue' }
];

function detectSemanticType(content) {
  for (const [type, varMap] of Object.entries(COMPLETE_SEMANTIC_MAPPING)) {
    let count = 0;
    for (const varName of Object.keys(varMap)) {
      const pattern = new RegExp(`\\b${varName}\\b`, 'g');
      count += (content.match(pattern) || []).length;
    }
    if (count > 5) return type;
  }
  return null;
}

function checkSemanticIntegrity(content, semanticType) {
  const mapping = COMPLETE_SEMANTIC_MAPPING[semanticType];
  if (!mapping) return { valid: false, reason: 'Unknown semantic type' };

  const unmappedPattern = /\b[a-z]\b(?!_)/g;
  const unmappedVars = content.match(unmappedPattern) || [];
  
  if (unmappedVars.length > 0) {
    return { valid: false, reason: `Unmapped variables: ${unmappedVars.join(', ')}` };
  }

  let semanticVarCount = 0;
  for (const [varName, mapped] of Object.entries(mapping)) {
    const pattern = new RegExp(`\\b${mapped}\\b`, 'g');
    if ((content.match(pattern) || []).length > 0) {
      semanticVarCount++;
    }
  }

  if (semanticVarCount < 2) {
    return { valid: false, reason: `Only ${semanticVarCount} semantic variables found` };
  }

  return { valid: true, semanticVarCount };
}

async function spotCheck() {
  console.log('🔍 SPOT-CHECK: Round 4 Improved - 5 HIGH Tier Modules\n');
  
  let passed = 0;
  let failed = 0;
  const results = [];

  for (const test of TEST_MODULES) {
    const filePath = path.join('deployed-modules', `${test.id}.js`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ Module ${test.id}: FILE NOT FOUND`);
      failed++;
      results.push({ id: test.id, status: 'FAIL', reason: 'File not found' });
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const detectedType = detectSemanticType(content);
    
    if (!detectedType) {
      console.log(`❌ Module ${test.id}: NO SEMANTIC TYPE DETECTED`);
      failed++;
      results.push({ id: test.id, status: 'FAIL', reason: 'No semantic type detected' });
      continue;
    }

    if (detectedType !== test.expectedType) {
      console.log(`❌ Module ${test.id}: TYPE MISMATCH (expected ${test.expectedType}, got ${detectedType})`);
      failed++;
      results.push({ id: test.id, status: 'FAIL', reason: `Type mismatch: ${detectedType}` });
      continue;
    }

    const integrity = checkSemanticIntegrity(content, detectedType);
    if (!integrity.valid) {
      console.log(`❌ Module ${test.id}: INTEGRITY CHECK FAILED - ${integrity.reason}`);
      failed++;
      results.push({ id: test.id, status: 'FAIL', reason: integrity.reason });
      continue;
    }

    console.log(`✅ Module ${test.id}: PASS (${detectedType}, ${integrity.semanticVarCount} semantic vars)`);
    passed++;
    results.push({ id: test.id, status: 'PASS', type: detectedType, semanticVars: integrity.semanticVarCount });
  }

  console.log(`\n📊 RESULTS: ${passed}/5 PASSED, ${failed}/5 FAILED`);
  console.log(`\n${passed === 5 ? '✅ GATE PASSED - Safe to apply all 5 HIGH tier modules' : '❌ GATE FAILED - Do not apply'}`);

  return { passed, failed, results, gatePass: passed === 5 };
}

spotCheck().catch(console.error);
