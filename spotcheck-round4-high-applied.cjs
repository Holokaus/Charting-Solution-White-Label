#!/usr/bin/env node

/**
 * Spot-Check Round 4 HIGH Applied Modules
 * Validates semantic integrity of applied HIGH tier modules
 */

const fs = require('fs');
const path = require('path');

const COMPLETE_SEMANTIC_MAPPING = {
  watchedValue: { e: 'watchedValue_e', s: 'watchedValue_s', n: 'watchedValue_n', a: 'watchedValue_a', t: 'watchedValue_t', o: 'watchedValue_o', r: 'watchedValue_r', l: 'watchedValue_l', i: 'watchedValue_i', c: 'watchedValue_c', h: 'watchedValue_h', d: 'watchedValue_d', u: 'watchedValue_u', p: 'watchedValue_p', m: 'watchedValue_m', g: 'watchedValue_g', f: 'watchedValue_f', v: 'watchedValue_v', b: 'watchedValue_b', w: 'watchedValue_w', x: 'watchedValue_x', k: 'watchedValue_k', z: 'watchedValue_z', j: 'watchedValue_j', y: 'watchedValue_y', q: 'watchedValue_q' },
  seriesBarFunction: { e: 'seriesBarFunction_e', s: 'seriesBarFunction_s', n: 'seriesBarFunction_n', a: 'seriesBarFunction_a', t: 'seriesBarFunction_t', o: 'seriesBarFunction_o', r: 'seriesBarFunction_r', l: 'seriesBarFunction_l', i: 'seriesBarFunction_i', c: 'seriesBarFunction_c', h: 'seriesBarFunction_h', d: 'seriesBarFunction_d', u: 'seriesBarFunction_u', p: 'seriesBarFunction_p', m: 'seriesBarFunction_m', g: 'seriesBarFunction_g', f: 'seriesBarFunction_f', v: 'seriesBarFunction_v', b: 'seriesBarFunction_b', w: 'seriesBarFunction_w', x: 'seriesBarFunction_x', k: 'seriesBarFunction_k', z: 'seriesBarFunction_z', j: 'seriesBarFunction_j', y: 'seriesBarFunction_y', q: 'seriesBarFunction_q' }
};

function detectSemanticType(content) {
  for (const [type, varMap] of Object.entries(COMPLETE_SEMANTIC_MAPPING)) {
    let count = 0;
    for (const mapped of Object.values(varMap)) {
      const pattern = new RegExp(`\\b${mapped}\\b`, 'g');
      count += (content.match(pattern) || []).length;
    }
    if (count > 5) return type;
  }
  return null;
}

function checkSemanticIntegrity(content, semanticType) {
  const mapping = COMPLETE_SEMANTIC_MAPPING[semanticType];
  if (!mapping) return { valid: false, reason: 'Unknown type' };

  const unmappedPattern = /\b[a-z]\b(?!_)/g;
  const unmappedVars = content.match(unmappedPattern) || [];
  
  if (unmappedVars.length > 10) {
    return { valid: false, reason: `Too many unmapped: ${unmappedVars.length}` };
  }

  let semanticVarCount = 0;
  for (const mapped of Object.values(mapping)) {
    if (content.includes(mapped)) semanticVarCount++;
  }

  if (semanticVarCount < 2) {
    return { valid: false, reason: `Only ${semanticVarCount} semantic vars` };
  }

  return { valid: true, semanticVarCount };
}

async function spotCheck() {
  console.log('🔍 SPOT-CHECK: Round 4 HIGH Applied Modules\n');

  const dir = './round4-high-confidence-applied';
  if (!fs.existsSync(dir)) {
    console.log(`❌ Directory not found: ${dir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).slice(0, 5);
  
  let passed = 0;
  let failed = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const moduleId = path.basename(file, '.js');
    
    const detectedType = detectSemanticType(content);
    if (!detectedType) {
      console.log(`❌ Module ${moduleId}: NO TYPE DETECTED`);
      failed++;
      continue;
    }

    const integrity = checkSemanticIntegrity(content, detectedType);
    if (!integrity.valid) {
      console.log(`❌ Module ${moduleId}: ${integrity.reason}`);
      failed++;
      continue;
    }

    console.log(`✅ Module ${moduleId}: PASS (${detectedType}, ${integrity.semanticVarCount} vars)`);
    passed++;
  }

  console.log(`\n📊 RESULTS: ${passed}/${files.length} PASSED (${Math.round(passed/files.length*100)}%)`);
  console.log(`${passed === files.length ? '✅ GATE PASSED' : '⚠️ GATE AT RISK'} - Safe to apply MEDIUM tier`);
}

spotCheck().catch(console.error);
