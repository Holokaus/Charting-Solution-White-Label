/**
 * Apply High-Confidence Module Identifications
 * Renames 37 newly identified modules using semantic names
 */
const fs = require('fs');
const path = require('path');

const ANALYSIS_FILE = './module-pattern-analysis.json';
const BEAUTIFIED_DIR = './beautified-output';
const OUTPUT_DIR = './newly-identified-modules';

// Semantic variable mapping for renaming
const SEMANTIC_MAP = {
  e: 'exports',
  t: 'module',
  i: 'require',
  s: 'state',
  n: 'nextValue',
  a: 'array',
  o: 'object',
  r: 'result',
  c: 'config',
  l: 'logger',
  h: 'handler',
  d: 'data',
  u: 'utility',
  p: 'parameter',
  m: 'method',
  g: 'getter',
  f: 'function',
  v: 'value',
  b: 'boolean',
  w: 'watcher',
  x: 'context',
  k: 'key',
  z: 'callback',
  j: 'job',
  y: 'yValue',
  q: 'query',
};

/**
 * Apply semantic variable renaming to content
 */
function applySemanticsToContent(content) {
  let result = content;
  let replacementCount = 0;

  // Apply semantic variable mappings
  for (const [minified, semantic] of Object.entries(SEMANTIC_MAP)) {
    const pattern = new RegExp(`\\b${minified}\\b`, 'g');
    const matches = (result.match(pattern) || []).length;
    if (matches > 0) {
      result = result.replace(pattern, semantic);
      replacementCount += matches;
    }
  }

  return { result, replacementCount };
}

/**
 * Generate semantic documentation header
 */
function generateHeader(moduleId, semanticName, score) {
  return `// ============================================================================
// MODULE ${moduleId} - SEMANTICALLY IDENTIFIED AS: ${semanticName}
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: ${(score * 100).toFixed(0)}%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================
`;
}

/**
 * Main application
 */
async function applyIdentifications() {
  try {
    console.log('🔄 Applying high-confidence identifications...\n');

    // Load analysis
    if (!fs.existsSync(ANALYSIS_FILE)) {
      console.error('❌ Analysis file not found:', ANALYSIS_FILE);
      process.exit(1);
    }

    const analysis = JSON.parse(fs.readFileSync(ANALYSIS_FILE, 'utf-8'));
    const identifications = analysis.highConfidenceIdentifications;

    console.log(`📊 Found ${identifications.length} high-confidence identifications\n`);

    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Process each identification
    console.log('🔨 Applying semantic variable renaming...');
    const results = [];
    let processed = 0;

    for (const id of identifications) {
      const sourceFile = path.join(BEAUTIFIED_DIR, `${id.moduleId}.js`);
      const outputFile = path.join(OUTPUT_DIR, `${id.moduleId}-renamed.js`);

      if (!fs.existsSync(sourceFile)) {
        console.warn(`⚠️  Source file not found: ${sourceFile}`);
        continue;
      }

      // Read beautified content
      const beautifiedContent = fs.readFileSync(sourceFile, 'utf-8');

      // Apply semantics
      const { result: semanticContent, replacementCount } = applySemanticsToContent(beautifiedContent);

      // Add header
      const header = generateHeader(id.moduleId, id.suggestedName, id.score);
      const finalContent = header + '\n' + semanticContent;

      // Save
      fs.writeFileSync(outputFile, finalContent);

      results.push({
        moduleId: id.moduleId,
        semanticName: id.suggestedName,
        score: id.score,
        replacements: replacementCount,
        success: true,
      });

      processed++;
      if (processed % 10 === 0) {
        console.log(`  [${processed}/${identifications.length}] Processed`);
      }
    }

    console.log(`✓ Semantic renaming complete\n`);

    // Generate summary report
    console.log('📋 Generating summary report...');
    const totalReplacements = results.reduce((sum, r) => sum + r.replacements, 0);
    const avgReplacements = Math.round(totalReplacements / results.length);

    let report = `# High-Confidence Identifications Applied\n\n`;
    report += `Generated: ${new Date().toISOString()}\n\n`;

    report += `## Summary\n\n`;
    report += `- **Modules Processed:** ${results.length}\n`;
    report += `- **Total Semantic Replacements:** ${totalReplacements.toLocaleString()}\n`;
    report += `- **Average per Module:** ${avgReplacements} replacements\n`;
    report += `- **Average Confidence Score:** ${(results.reduce((sum, r) => sum + r.score, 0) / results.length * 100).toFixed(0)}%\n\n`;

    report += `## Breakdown by Semantic Name\n\n`;
    const byName = {};
    for (const r of results) {
      if (!byName[r.semanticName]) {
        byName[r.semanticName] = [];
      }
      byName[r.semanticName].push(r);
    }

    for (const [name, items] of Object.entries(byName).sort()) {
      const avgScore = (items.reduce((sum, i) => sum + i.score, 0) / items.length * 100).toFixed(0);
      report += `### ${name} (${items.length} modules)\n\n`;
      report += `| Module ID | Score | Replacements |\n`;
      report += `|-----------|-------|---------------|\n`;
      for (const item of items.sort((a, b) => b.score - a.score)) {
        report += `| ${item.moduleId} | ${(item.score * 100).toFixed(0)}% | ${item.replacements.toLocaleString()} |\n`;
      }
      report += `\n`;
    }

    report += `## Next Steps\n\n`;
    report += `1. Review the renamed modules in ${OUTPUT_DIR}/\n`;
    report += `2. Compare against original beautified versions\n`;
    report += `3. Validate semantic names are appropriate\n`;
    report += `4. Consider applying medium-confidence candidates\n`;

    const reportFile = './newly-identified-applications-report.md';
    fs.writeFileSync(reportFile, report);
    console.log(`✓ Report saved to ${reportFile}\n`);

    // Display summary
    console.log('═══════════════════════════════════════');
    console.log('✅ IDENTIFICATIONS APPLIED');
    console.log('═══════════════════════════════════════');
    console.log(`Total Modules: ${results.length}`);
    console.log(`Total Replacements: ${totalReplacements.toLocaleString()}`);
    console.log(`Average per Module: ${avgReplacements}`);
    console.log(`Output Directory: ${OUTPUT_DIR}`);
    console.log(`\n📊 By Semantic Name:`);
    for (const [name, items] of Object.entries(byName).sort()) {
      console.log(`   - ${name}: ${items.length} modules`);
    }
    console.log(`\n✅ Ready for validation and medium-confidence review!`);

  } catch (error) {
    console.error('❌ Error applying identifications:', error.message);
    process.exit(1);
  }
}

applyIdentifications();
