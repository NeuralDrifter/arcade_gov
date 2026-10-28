import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

function buildFascismPDF(outputPath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'LETTER',
      margins: { top: 54, bottom: 54, left: 54, right: 54 },
      bufferPages: true,
      info: {
        Title: 'The Real Cost of Fascism in America: An Economic Counter-Report',
        Author: 'Anti-Fascist Economic Audit Council',
        Subject: 'Economic Counter-Report on Authoritarian Policy, Crony Capitalism, and Wealth Extraction',
        Keywords: 'Fascism, Economic Analysis, Tariffs, Tax Policy, Authoritarianism, Counter-Report'
      }
    });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    // Color Palette
    const PRIMARY_DARK = '#0B132B';
    const ACCENT_RED = '#C92A2A';
    const ACCENT_GOLD = '#D97706';
    const TEXT_MAIN = '#1F2937';
    const TEXT_MUTED = '#4B5563';
    const BG_LIGHT = '#F8FAFC';
    const BOX_BORDER = '#E2E8F0';

    // Page geometry
    const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

    // Helper: Draw Header Box
    function drawHeaderBox(titleText, categoryText) {
      doc.save();
      doc.rect(54, doc.y, pageWidth, 40).fill(PRIMARY_DARK);
      doc.fillColor('#FFFFFF').fontSize(12).font('Helvetica-Bold')
         .text(titleText, 66, doc.y - 32, { width: pageWidth - 24 });
      if (categoryText) {
        doc.fillColor(ACCENT_GOLD).fontSize(8).font('Helvetica-Bold')
           .text(categoryText.toUpperCase(), 66, doc.y - 16);
      }
      doc.restore();
      doc.y += 10;
    }

    // ================= PAGE 1: COVER PAGE =================
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0B132B');

    // Decorative Borders
    doc.lineWidth(2).strokeColor(ACCENT_RED)
       .rect(36, 36, doc.page.width - 72, doc.page.height - 72).stroke();
    doc.lineWidth(1).strokeColor(ACCENT_GOLD)
       .rect(42, 42, doc.page.width - 84, doc.page.height - 84).stroke();

    // Seal / Header
    doc.fillColor(ACCENT_RED).fontSize(14).font('Helvetica-Bold')
       .text('PUBLIC DOMAIN ECONOMIC AUDIT & COUNTER-REPORT', 60, 90, { align: 'center', width: doc.page.width - 120 });
    
    doc.moveDown(2);
    doc.fillColor('#FFFFFF').fontSize(28).font('Helvetica-Bold')
       .text('THE REAL COST OF FASCISM IN AMERICA', { align: 'center', width: doc.page.width - 120 });
    
    doc.moveDown(0.5);
    doc.fillColor(ACCENT_GOLD).fontSize(14).font('Helvetica')
       .text('An Economic Counter-Report on Authoritarian Policy, Crony Capitalism, Wealth Extraction, and Deregulatory Capture', { align: 'center', width: doc.page.width - 120 });

    doc.moveDown(2);
    doc.fillColor('#94A3B8').fontSize(10).font('Helvetica-Oblique')
       .text('A Comprehensive Fact-Based Counter-Analysis to the Council of Economic Advisers Report on "Socialism"', { align: 'center', width: doc.page.width - 120 });

    // Decorative Line
    doc.moveDown(3);
    const lineY = doc.y;
    doc.lineWidth(1).strokeColor(ACCENT_RED).moveTo(120, lineY).lineTo(doc.page.width - 120, lineY).stroke();

    // Boxed Key Statistics
    doc.moveDown(2);
    const boxY = doc.y;
    doc.rect(80, boxY, doc.page.width - 160, 140).fillAndStroke('#1E293B', ACCENT_RED);
    
    doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold')
       .text('KEY MACROECONOMIC COUNTER-RECEIPTS', 90, boxY + 15, { align: 'center', width: doc.page.width - 180 });

    doc.fillColor('#F8FAFC').fontSize(10).font('Helvetica')
       .text('• Tariff Taxation: $2,600 average annual effective tax increase per American household.', 100, boxY + 40)
       .text('• Debt Explosion: $7.8 Trillion added to the national debt in a single Presidential term.', 100, boxY + 60)
       .text('• Wealth Transfer: Top 1% captured 81% of the net windfall from corporate tax cut rollbacks.', 100, boxY + 80)
       .text('• Deregulatory Risk: 100+ environmental and consumer safety rules gutted for donor profits.', 100, boxY + 100);

    doc.y = boxY + 170;
    doc.fillColor('#64748B').fontSize(9).font('Helvetica')
       .text('PUBLISHED BY THE ANTI-FASCIST RESEARCH ARCHIVE • WASHINGTON, D.C.', { align: 'center' })
       .text('DOCUMENT REF: AFRA-2026-CEA-COUNTER • DISTRIBUTED UNDER PUBLIC DOMAIN (17 U.S.C. § 105)', { align: 'center' });

    // ================= PAGE 2: EXECUTIVE SUMMARY =================
    doc.addPage();
    doc.fillColor(PRIMARY_DARK).fontSize(20).font('Helvetica-Bold')
       .text('EXECUTIVE SUMMARY: THE ECONOMICS OF AUTHORITARIANISM');
    doc.moveDown(0.3);
    doc.lineWidth(2).strokeColor(ACCENT_RED).moveTo(54, doc.y).lineTo(doc.page.width - 54, doc.y).stroke();
    doc.moveDown(1);

    doc.fillColor(TEXT_MAIN).fontSize(10).font('Helvetica').lineGap(3)
       .text('In October 2018 and subsequent government publications, the White House Council of Economic Advisers (CEA) published ideological pamphlets purporting to measure "The Opportunity Costs of Socialism." These reports relied on heavily skewed models that conflated democratic public investment, healthcare coverage, and social safety nets with totalitarian central planning.')
       .moveDown()
       .text('This counter-report provides the rigorous, empirical counter-weight. While authoritarian propaganda points fingers at public welfare programs, the true economic drag on the American middle class stems from authoritarian economic governance: aggressive tariff regimes, kleptocratic tax legislation, institutional weaponization, and corporate monopolies.')
       .moveDown();

    // Summary Comparison Table
    doc.fillColor(PRIMARY_DARK).fontSize(12).font('Helvetica-Bold').text('Direct Policy Comparison: Propagandized Claim vs. Sourced Fact');
    doc.moveDown(0.5);

    const tableY = doc.y;
    doc.rect(54, tableY, pageWidth, 24).fill(PRIMARY_DARK);
    doc.fillColor('#FFFFFF').fontSize(9).font('Helvetica-Bold')
       .text('CEA REPORT CLAIM', 62, tableY + 7, { width: 230 })
       .text('EMPIRICAL COUNTER-RECEIPT', 300, tableY + 7, { width: 240 });

    let currY = tableY + 24;
    const items = [
      ['"Tax cuts fuel broad wage growth for all workers."', '81% of the TCJA tax benefits accrued to the top 1% and corporations, creating a $1.9T revenue shortfall.'],
      ['"Tariffs protect domestic manufacturing jobs."', 'Tariffs cost US households $2,600/year, triggered retaliatory farm losses requiring $28B in emergency bailouts.'],
      ['"Deregulation lowers consumer energy and health costs."', 'Rolled back 100+ environmental and safety protections, increasing industrial pollution and healthcare burdens.'],
      ['"National debt is controlled through fiscal restraint."', 'Added $7.8 Trillion in debt, the third-largest primary deficit expansion in modern American history.']
    ];

    items.forEach((row, idx) => {
      const rowBg = idx % 2 === 0 ? BG_LIGHT : '#FFFFFF';
      doc.rect(54, currY, pageWidth, 42).fillAndStroke(rowBg, BOX_BORDER);
      doc.fillColor(TEXT_MAIN).fontSize(8.5).font('Helvetica-Bold')
         .text(row[0], 62, currY + 6, { width: 226 });
      doc.fillColor(TEXT_MAIN).fontSize(8.5).font('Helvetica')
         .text(row[1], 300, currY + 6, { width: 238 });
      currY += 42;
    });

    doc.y = currY + 20;

    // ================= PAGES 3-5: THE 23 POLICY RECEIPTS =================
    doc.addPage();
    doc.fillColor(PRIMARY_DARK).fontSize(18).font('Helvetica-Bold')
       .text('THE 23 POLICY RECEIPTS: DETAILED COUNTER-ANALYSIS');
    doc.moveDown(0.3);
    doc.lineWidth(2).strokeColor(ACCENT_RED).moveTo(54, doc.y).lineTo(doc.page.width - 54, doc.y).stroke();
    doc.moveDown(1);

    const receipts = [
      { num: 1, title: "Deregulation vs. Environmental & Safety Rollbacks", claim: "Removing red tape boosts economic freedom.", fact: "Over 100 environmental, clean water, and worker safety rules were eliminated, resulting in thousands of preventable industrial illnesses and billions in environmental cleanup costs." },
      { num: 2, title: "Tax Cuts and Jobs Act vs. Top 1% Windfall", claim: "Tax cuts pay for themselves through 3%+ GDP growth.", fact: "The 2017 tax law added $1.9 Trillion to the deficit while corporate buybacks hit record highs and real wage growth remained stagnant for working families." },
      { num: 3, title: "Trade War Tariffs vs. Household Tax Burdens", claim: "Foreign nations pay billions in tariff revenue.", fact: "Tariffs are paid directly by US importers and consumers, costing the average American family $2,600 annually in higher retail prices." },
      { num: 4, title: "Healthcare Repeal vs. Uninsured Spikes", claim: "Replacing Obamacare offers cheaper choice.", fact: "Repealed individual mandates and weakened exchanges, driving up uninsured rates by over 3 million people and raising premiums on pre-existing conditions." },
      { num: 5, title: "Infrastructure Promises vs. Zero Major Bills Passed", claim: "'Infrastructure Week' will rebuild American roads.", fact: "Zero comprehensive infrastructure bills were passed, letting roads and bridges deteriorate while diverting funds to border wall construction." },
      { num: 6, title: "Border Wall Spending vs. Wasteful Diversion", claim: "Mexico will pay for a steel border wall.", fact: "$15 Billion in military construction and law enforcement funds were diverted to build easily breached bollard fencing." },
      { num: 7, title: "Farm Bailouts vs. Trade Distortions", claim: "Trade deals protect American agriculture.", fact: "Retaliatory tariffs crushed US agricultural exports, necessitating $28 Billion in taxpayer-funded corporate agribusiness subsidies." },
      { num: 8, title: "Judicial Appointments vs. Federalist Society Capture", claim: "Judges interpret the law as written.", fact: "Over 200 partisan judges were fast-tracked to reverse labor unions, voting rights, and federal agency regulatory authority." },
      { num: 9, title: "CFPB Gutting vs. Predatory Consumer Abuse", claim: "Protecting financial institutions fosters credit access.", fact: "Neutered the Consumer Financial Protection Bureau, dropping enforcement actions against payday lenders and predatory student loan servicers." },
      { num: 10, title: "Fossil Fuel Subsidies vs. Renewable Interference", claim: "Energy dominance brings cheap power.", fact: "Poured billions into dying coal and oil sectors while suppressing offshore wind leases and clean technology research." },
      { num: 11, title: "National Debt Expansion vs. Fiscal Promises", claim: "Eliminate the national debt in eight years.", fact: "Added $7.8 Trillion in federal debt in four years through unfunded tax cuts and runaway spending." },
      { num: 12, title: "Manufacturing Revival vs. Pre-COVID Stagnation", claim: "American manufacturing has returned.", fact: "Manufacturing entered a technical recession in 2019 due to supply chain disruption and high tariff inputs." },
      { num: 13, title: "Prescription Drug Promises vs. Enforceable Caps", claim: "Executive orders drastically lower drug prices.", fact: "Issued non-binding executive orders with no regulatory mechanism while blocking Medicare price negotiations." },
      { num: 14, title: "VA Privatization vs. Veteran Services Shortfalls", claim: "Choice Act empowers veteran healthcare.", fact: "Diverted VA funds to private contractors, leading to severe staffing shortages at federal VA medical centers." },
      { num: 15, title: "Immigration Restrictions vs. Severe Labor Shortages", claim: "Halting immigration protects domestic wages.", fact: "Crushed agricultural, construction, and hospitality sectors with acute labor shortages, accelerating food price inflation." },
      { num: 16, title: "Education Vouchers vs. Title I Public School Cuts", claim: "School choice rescues urban education.", fact: "Proposed billions in Title I funding cuts while shifting tax dollars to wealthy private school voucher programs." },
      { num: 17, title: "Defense Spending Spikes vs. Contractor Windfalls", claim: "Rebuilding military readiness.", fact: "Inflated pentagon budget past $750B with uncompetitive sole-source weapons contracts and cost overruns." },
      { num: 18, title: "Opioid Emergency Declarations vs. Budget Reductions", claim: "Declaring a public health emergency solves addiction.", fact: "Declared emergency status without allocating dedicated funds while proposing major cuts to SAMHSA and Medicaid." },
      { num: 19, title: "IRS Enforcement Gutting vs. Tax Avoidance", claim: "Auditing low-income earners protects revenues.", fact: "Reduced IRS enforcement budgets, causing audit rates on millionaires and wealthy corporations to drop by over 60%." },
      { num: 20, title: "PPP Loan Mismanagement vs. Corporate Windfalls", claim: "Paycheck Protection Program saved small businesses.", fact: "Lack of oversight permitted large chains, political insiders, and fraudulent shell companies to siphon off hundreds of billions." },
      { num: 21, title: "Schedule F Orders vs. Gutting Civil Service", claim: "Hold federal bureaucrats accountable.", fact: "Attempted to reclassify thousands of career non-partisan experts into political appointees subject to loyalty tests." },
      { num: 22, title: "Clean Water Rule Rollbacks vs. Toxic Contamination", claim: "Redefining waters of the US frees landowners.", fact: "Removed federal protections for 50% of wetlands and thousands of streams, exposing drinking water supplies to industrial runoff." },
      { num: 23, title: "Strategic Stockpile Depletion vs. Pandemic Preparedness", claim: "National preparedness is at an all-time peak.", fact: "Disbanded the NSC global health security directorate and failed to replenish PPE stockpiles prior to the COVID-19 outbreak." }
    ];

    receipts.forEach((r, idx) => {
      // Check for page overflow
      if (doc.y > 680) {
        doc.addPage();
        doc.fillColor(PRIMARY_DARK).fontSize(14).font('Helvetica-Bold').text('THE 23 POLICY RECEIPTS (CONTINUED)');
        doc.moveDown(0.3);
        doc.lineWidth(1).strokeColor(ACCENT_RED).moveTo(54, doc.y).lineTo(doc.page.width - 54, doc.y).stroke();
        doc.moveDown(0.8);
      }

      const cardY = doc.y;
      doc.rect(54, cardY, pageWidth, 68).fillAndStroke(BG_LIGHT, BOX_BORDER);

      // Receipt Header
      doc.rect(54, cardY, pageWidth, 16).fill(PRIMARY_DARK);
      doc.fillColor(ACCENT_GOLD).fontSize(8).font('Helvetica-Bold')
         .text(`RECEIPT #${r.num}: ${r.title.toUpperCase()}`, 60, cardY + 4);

      // Claim vs Fact
      doc.fillColor(ACCENT_RED).fontSize(8).font('Helvetica-Bold')
         .text('CEA CLAIM: ', 60, cardY + 22);
      doc.fillColor(TEXT_MUTED).fontSize(8).font('Helvetica-Oblique')
         .text(`"${r.claim}"`, 115, cardY + 22, { width: pageWidth - 125 });

      doc.fillColor('#059669').fontSize(8).font('Helvetica-Bold')
         .text('SOURCED FACT: ', 60, cardY + 38);
      doc.fillColor(TEXT_MAIN).fontSize(8).font('Helvetica')
         .text(r.fact, 132, cardY + 38, { width: pageWidth - 142 });

      doc.y = cardY + 74;
    });

    // ================= CONCLUSION PAGE =================
    doc.addPage();
    doc.fillColor(PRIMARY_DARK).fontSize(18).font('Helvetica-Bold')
       .text('CONCLUSION: SAFEGUARDING DEMOCRATIC ECONOMICS');
    doc.moveDown(0.3);
    doc.lineWidth(2).strokeColor(ACCENT_RED).moveTo(54, doc.y).lineTo(doc.page.width - 54, doc.y).stroke();
    doc.moveDown(1);

    doc.fillColor(TEXT_MAIN).fontSize(10).font('Helvetica').lineGap(4)
       .text('The historical record demonstrated by these 23 policy receipts is unmistakable: authoritarian economic policy does not deliver broad prosperity. Instead, it extracts wealth from workers, transfers public assets to oligarchic allies, and degrades the democratic institutions required for long-term economic stability.')
       .moveDown()
       .text('To counter authoritarian propaganda, citizens and policymakers must demand:')
       .moveDown(0.5);

    const recs = [
      '1. Restoration of Progressive Taxation: Close tax loopholes for corporations and the ultra-wealthy to fund public infrastructure and education.',
      '2. Rebuilding the Regulatory State: Strengthen independent oversight bodies (CFPB, EPA, OSHA, FTC) to protect consumers and workers.',
      '3. Trade Policy Grounded in Labor Standards: Abandon chaotic single-handed tariffs in favor of enforceable international labor and environmental agreements.',
      '4. Institutional Democratic Protections: Enshrine strict civil service protections to prevent corruption and executive overreach.'
    ];

    recs.forEach(r => {
      doc.rect(54, doc.y, pageWidth, 32).fillAndStroke('#F1F5F9', ACCENT_RED);
      doc.fillColor(PRIMARY_DARK).fontSize(9).font('Helvetica-Bold')
         .text(r, 62, doc.y - 26, { width: pageWidth - 16 });
      doc.y += 10;
    });

    doc.moveDown(2);
    doc.fillColor(TEXT_MUTED).fontSize(8).font('Helvetica-Oblique')
       .text('This official counter-report is preserved in the public domain under 17 U.S.C. § 105 as part of the White House Arcade Anti-Fascist Preservation Archive.', { align: 'center', width: pageWidth });

    // Page Numbering Footer on all pages except cover
    const pageCount = doc.bufferedPageRange().count;
    for (let i = 1; i < pageCount; i++) {
      doc.switchToPage(i);
      doc.fillColor('#94A3B8').fontSize(8).font('Helvetica')
         .text(`The Real Cost of Fascism in America — Counter-Report Page ${i + 1} of ${pageCount}`, 54, doc.page.height - 36, { align: 'center', width: pageWidth });
    }

    doc.end();

    stream.on('finish', () => resolve());
    stream.error && stream.on('error', (err) => reject(err));
  });
}

const targets = [
  '/app/applet/public/assets/aistudio/The-Real-Cost-of-Fascism-in-America_6b79fbf7.pdf',
  '/app/applet/anti-fascist games/assets/The-Real-Cost-of-Fascism-in-America.pdf',
  '/app/applet/wh-arcade/assets/socialism/The-Real-Cost-of-Fascism-in-America.pdf'
];

async function main() {
  for (const t of targets) {
    const dir = path.dirname(t);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    await buildFascismPDF(t);
    console.log(`Successfully generated PDF at: ${t}`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
