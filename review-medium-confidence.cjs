/**
 * Review Medium-Confidence Candidates
 * Displays candidates with confidence scores and similar matches
 */
const fs = require('fs');

const ANALYSIS_FILE = './module-pattern-analysis.json';
const OUTPUT_FILE = './medium-confidence-candidates-detailed.md';

async function reviewCandidates() {
  try {
    console.log('📋 Analyzing medium-confidence candidates...\n');

    const analysis = JSON.parse(fs.readFileSync(ANALYSIS_FILE, 'utf-8'));
    const candidates = analysis.mediumConfidenceCandidates;

    console.log(`Found ${candidates.length} medium-confidence candidates\n`);

    let report = `# Medium-Confidence Candidates - Detailed Review\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `These modules have 40-60% pattern similarity to known modules.\n`;
    report += `Review recommended before application.\n\n`;

    report += `## Summary by Top Match\n\n`;
    
    // Group by suggested name
    const byName = {};
    for (const cand of candidates) {
      if (!byName[cand.suggestedName]) {
        byName[cand.suggestedName] = [];
      }
      byName[cand.suggestedName].push(cand);
    }

    for (const [name, items] of Object.entries(byName).sort((a, b) => b[1].length - a[1].length)) {
      report += `### ${name} (${items.length} candidates)\n\n`;
      report += `| Module ID | Score | Alternative Matches |\n`;
      report += `|-----------|-------|---------------------|\n`;
      
      for (const item of items.sort((a, b) => b.score - a.score)) {
        const alts = item.otherMatches && item.otherMatches.length > 0
          ? item.otherMatches.map(m => `${m.semantic} (${(m.score*100).toFixed(0)}%)`).join(', ')
          : 'None';
        report += `| ${item.moduleId} | ${(item.score*100).toFixed(0)}% | ${alts} |\n`;
      }
      report += '\n';
    }

    report += `## Detailed View - Sorted by Confidence\n\n`;
    report += `Top 20 candidates by confidence score:\n\n`;
    
    const sorted = candidates.sort((a, b) => b.score - a.score).slice(0, 20);
    report += `| Module ID | Suggested | Score | Alternatives |\n`;
    report += `|-----------|-----------|-------|---------------|\n`;
    for (const cand of sorted) {
      const alts = cand.otherMatches && cand.otherMatches.length > 0
        ? cand.otherMatches.slice(0, 2).map(m => `${m.semantic}`).join(', ')
        : 'None';
      report += `| ${cand.moduleId} | ${cand.suggestedName} | ${(cand.score*100).toFixed(0)}% | ${alts} |\n`;
    }

    report += `\n## Recommendation\n\n`;
    report += `Candidates with **50%+ confidence** (${candidates.filter(c => c.score >= 0.5).length} modules):\n\n`;
    const highestCandidates = candidates.filter(c => c.score >= 0.5).sort((a, b) => b.score - a.score);
    
    for (const cand of highestCandidates) {
      report += `- **Module ${cand.moduleId}** → \`${cand.suggestedName}\` (${(cand.score*100).toFixed(0)}%)\n`;
    }

    report += `\n**Next Steps:**\n`;
    report += `1. Review the 50%+ candidates above\n`;
    report += `2. Compare beautified output to verify semantic match\n`;
    report += `3. Apply approved candidates using the same method as high-confidence\n`;
    report += `4. Build pattern database incrementally as new modules are identified\n`;

    fs.writeFileSync(OUTPUT_FILE, report);
    console.log(`✓ Report saved to ${OUTPUT_FILE}\n`);

    // Display summary
    console.log('═══════════════════════════════════════');
    console.log('📊 MEDIUM-CONFIDENCE SUMMARY');
    console.log('═══════════════════════════════════════');
    console.log(`Total Candidates: ${candidates.length}`);
    console.log(`50%+ Confidence: ${candidates.filter(c => c.score >= 0.5).length}`);
    console.log(`45-50% Range: ${candidates.filter(c => c.score >= 0.45 && c.score < 0.5).length}`);
    console.log(`40-45% Range: ${candidates.filter(c => c.score >= 0.4 && c.score < 0.45).length}`);
    console.log(`\nTop Categories by Candidate Count:`);
    const sorted2 = Object.entries(byName).sort((a, b) => b[1].length - a[1].length).slice(0, 5);
    for (const [name, items] of sorted2) {
      console.log(`  - ${name}: ${items.length} candidates`);
    }
    console.log(`\n✅ Use report to guide next review!`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

reviewCandidates();
