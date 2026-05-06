/**
 * Apply Round 4 Improved MEDIUM Confidence Modules
 * Applies 22 MEDIUM-confidence (65%+, 2+ keywords) module identifications with semantic variable renaming
 * 
 * CRITICAL: This script applies modules discovered with improved algorithm that includes:
 * - Minimum 2 keyword matches required
 * - Minimum 65% confidence score
 * - Keyword verification enforced
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const OUTPUT_DIR = './round4-improved-medium-applied';
const ANALYSIS_FILE = './pattern-discovery-round4-improved-analysis.json';
const REPORT_FILE = './round4-improved-medium-application-report.md';

// Semantic mapping table for MEDIUM tier (2+ keywords)
const SEMANTIC_MAPPING = {
  'watchedValue': [
    { from: /\be\b/g, to: 'watchedValue_e' },
    { from: /\bs\b/g, to: 'watchedValue_s' },
    { from: /\bn\b/g, to: 'watchedValue_n' },
  ],
  'seriesBarFunction': [
    { from: /\be\b/g, to: 'seriesBarFunction_e' },
    { from: /\bs\b/g, to: 'seriesBarFunction_s' },
    { from: /\ba\b/g, to: 'seriesBarFunction_a' },
  ],
  'lineToolManager': [
    { from: /\be\b/g, to: 'lineToolManager_e' },
    { from: /\bs\b/g, to: 'lineToolManager_s' },
    { from: /\bn\b/g, to: 'lineToolManager_n' },
  ],
  'priceDataSource': [
    { from: /\be\b/g, to: 'priceDataSource_e' },
    { from: /\bs\b/g, to: 'priceDataSource_s' },
    { from: /\bt\b/g, to: 'priceDataSource_t' },
  ],
  'dataSource': [
    { from: /\be\b/g, to: 'dataSource_e' },
    { from: /\bs\b/g, to: 'dataSource_s' },
    { from: /\bt\b/g, to: 'dataSource_t' },
  ],
  'logger': [
    { from: /\be\b/g, to: 'logger_e' },
    { from: /\bs\b/g, to: 'logger_s' },
    { from: /\bn\b/g, to: 'logger_n' },
  ],
};

function applySemanticsToContent(content, semanticName) {
  if (!SEMANTIC_MAPPING[semanticName]) {
    console.log(`  ⚠️  No mapping for ${semanticName}, using defaults`);
    return { content, replacements: 0 };
  }

  let result = content;
  let replacements = 0;

  for (const mapping of SEMANTIC_MAPPING[semanticName]) {
    const newResult = result.replace(mapping.from, mapping.to);
    const count = (newResult.match(mapping.to) || []).length;
    replacements += count;
    result = newResult;
  }

  return { content: result, replacements };
}

function generateHeader(moduleId, semanticName, confidence, keywords) {
  const timestamp = new Date().toISOString();
  return `/**
 * Module: ${moduleId}
 * Semantic: ${semanticName}
 * Confidence: ${(confidence).toFixed(1)}%
 * Keywords: ${keywords}
 * Generated: ${timestamp}
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

`;
}

async function applyMediumConfidence() {
  try {
    console.log('🚀 Applying Round 4 Improved MEDIUM Confidence Modules\n');
    console.log('   Requirements: 65%+ confidence, 2+ keyword matches\n');

    const analysis = JSON.parse(fs.readFileSync(ANALYSIS_FILE, 'utf-8'));
    const discoveries = analysis.discoveries.filter(d => d.tier === 'MEDIUM');

    console.log(`📝 Found ${discoveries.length} MEDIUM-confidence discoveries\n`);
    
    if (discoveries.length === 0) {
      console.log('❌ No MEDIUM modules found to apply');
      return;
    }

    console.log(`📁 Creating output directory: ${OUTPUT_DIR}\n`);

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let totalReplacements = 0;
    let appliedCount = 0;
    const appliedModules = [];
    const failedModules = [];

    console.log('⚙️  Applying semantic variable renaming...\n');

    for (let i = 0; i < discoveries.length; i++) {
      const discovery = discoveries[i];
      const file = path.join(BEAUTIFIED_DIR, `${discovery.moduleId}.js`);

      if (!fs.existsSync(file)) {
        console.log(`⚠️  File not found: ${discovery.moduleId}`);
        failedModules.push({
          moduleId: discovery.moduleId,
          reason: 'File not found'
        });
        continue;
      }

      const content = fs.readFileSync(file, 'utf-8');
      const result = applySemanticsToContent(content, discovery.suggested);

      const header = generateHeader(
        discovery.moduleId, 
        discovery.suggested, 
        discovery.score,
        discovery.keywords
      );
      const newContent = header + result.content;

      const outputFile = path.join(OUTPUT_DIR, `${discovery.moduleId}.js`);
      fs.writeFileSync(outputFile, newContent);

      totalReplacements += result.replacements;
      appliedCount++;
      appliedModules.push({
        moduleId: discovery.moduleId,
        semanticName: discovery.suggested,
        confidence: discovery.score,
        keywords: discovery.keywords,
        replacements: result.replacements,
      });

      console.log(`  [${i + 1}/${discoveries.length}] Applied: ${discovery.moduleId} → ${discovery.suggested} (${discovery.score}%, ${discovery.keywords} keywords, ${result.replacements} replacements)`);
    }

    console.log(`\n✅ Application Summary:`);
    console.log(`   Applied: ${appliedCount}/${discoveries.length} modules`);
    console.log(`   Failed: ${failedModules.length} modules`);
    console.log(`   Total replacements: ${totalReplacements}`);
    console.log(`   Average replacements per module: ${(totalReplacements / appliedCount).toFixed(1)}\n`);

    // Group by semantic name
    const byName = {};
    for (const mod of appliedModules) {
      if (!byName[mod.semanticName]) {
        byName[mod.semanticName] = [];
      }
      byName[mod.semanticName].push(mod);
    }

    // Generate report
    console.log('📄 Generating application report...\n');
    
    let report = `# Round 4 Improved MEDIUM Confidence Application Report\n\n`;
    report += `**Timestamp:** ${new Date().toISOString()}\n`;
    report += `**Confidence Level:** 65%+ (MEDIUM tier)\n`;
    report += `**Keyword Requirement:** 2+ keywords minimum\n\n`;
    
    report += `## Summary\n\n`;
    report += `- **Modules Applied:** ${appliedCount}\n`;
    report += `- **Total Replacements:** ${totalReplacements}\n`;
    report += `- **Average per Module:** ${(totalReplacements / appliedCount).toFixed(1)}\n`;
    report += `- **Confidence Range:** ${Math.min(...appliedModules.map(m => m.confidence))}% - ${Math.max(...appliedModules.map(m => m.confidence))}%\n`;
    report += `- **Output Directory:** ${OUTPUT_DIR}\n\n`;

    report += `## Breakdown by Semantic Name\n\n`;
    for (const [name, modules] of Object.entries(byName)) {
      const avgConf = modules.reduce((sum, m) => sum + m.confidence, 0) / modules.length;
      const totalRepl = modules.reduce((sum, m) => sum + m.replacements, 0);
      report += `### ${name} (${modules.length} modules, ${totalRepl} replacements)\n`;
      report += `- Average confidence: ${avgConf.toFixed(1)}%\n`;
      report += `- Modules: ${modules.map(m => m.moduleId).join(', ')}\n\n`;
    }

    report += `## Detailed Module List\n\n`;
    report += `| Module ID | Semantic Name | Confidence | Keywords | Replacements |\n`;
    report += `|-----------|---------------|------------|----------|--------------|\n`;
    for (const mod of appliedModules.sort((a, b) => b.confidence - a.confidence)) {
      report += `| ${mod.moduleId} | ${mod.semanticName} | ${mod.confidence.toFixed(1)}% | ${mod.keywords} | ${mod.replacements} |\n`;
    }

    report += `\n## Next Steps\n\n`;
    report += `1. **VALIDATION REQUIRED:** Run validation script on all applied modules\n`;
    report += `2. **SPOT-CHECK:** Manually verify 5 random modules (80%+ pass rate required)\n`;
    report += `3. **ARCHIVE:** If validation passes, move to archived directory\n`;
    report += `4. **DEPLOY:** Add to verified baseline for next discovery iteration\n\n`;

    report += `## Validation Checklist (Pending)\n\n`;
    report += `- [ ] Run validate script on all ${appliedCount} modules\n`;
    report += `- [ ] Spot-check 5 modules manually\n`;
    report += `- [ ] Verify 80%+ accuracy before archiving\n`;
    report += `- [ ] Update CURRENT_STATUS_VERIFIED.md with new coverage\n\n`;

    if (failedModules.length > 0) {
      report += `## Failed Applications\n\n`;
      report += `| Module ID | Reason |\n`;
      report += `|-----------|--------|\n`;
      for (const mod of failedModules) {
        report += `| ${mod.moduleId} | ${mod.reason} |\n`;
      }
      report += `\n`;
    }

    fs.writeFileSync(REPORT_FILE, report);
    console.log(`✓ Report generated: ${REPORT_FILE}\n`);

    // Save metadata JSON
    const metadata = {
      timestamp: new Date().toISOString(),
      totalApplied: appliedCount,
      totalFailed: failedModules.length,
      totalReplacements: totalReplacements,
      modules: appliedModules,
      bySemanticName: byName,
    };
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'application-metadata.json'),
      JSON.stringify(metadata, null, 2)
    );
    console.log(`✓ Metadata saved: ${OUTPUT_DIR}/application-metadata.json\n`);

    console.log('🎉 MEDIUM Confidence Application Complete!\n');
    console.log('⚠️  IMPORTANT: Run validation and spot-check BEFORE deploying:\n');
    console.log('   node validate-round4-improved.cjs\n');
    console.log('   (Then manually spot-check 5 modules)\n');

  } catch (error) {
    console.error('❌ Error applying medium confidence modules:', error.message);
    throw error;
  }
}

applyMediumConfidence();
