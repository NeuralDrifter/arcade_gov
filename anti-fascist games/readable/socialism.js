
'use strict';
globalThis.TrumpCostMatch=(()=>{
 const originalSource="https://www.whitehouse.gov/wp-content/uploads/2026/10/The-Real-Cost-of-Socialism-In-America-Summary.pdf";
 const facts=[
  {
    "value": "+234%",
    "unit": "jump in import taxes collected, 2024 to 2025",
    "consequence": "His tariffs tripled the tax on your goods.",
    "policy": "TRUMP’S 2025 TARIFFS",
    "connection": "Customs duties went from $79 billion to $264 billion in one year.",
    "context": "Importers pay it first; shoppers pay it at the register.",
    "source": "https://taxfoundation.org/research/federal-tax/trump-tariffs-trade-war/",
    "sourceLabel": "Tax Foundation - Trump tariffs tracker",
    "kind": "Research estimate",
    "id": "prices",
    "label": "Groceries",
    "topic": "EVERYDAY PRICES",
    "art": 0,
    "color": "#d3bd79",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "prices",
      "label": "Groceries",
      "topic": "EVERYDAY PRICES",
      "art": 0,
      "color": "#d3bd79",
      "promise": "An affordable life.",
      "policy": "THE SOCIALIST AGENDA",
      "consequence": "Your prices surge.",
      "value": "+130–160%",
      "unit": "higher prices over ten years",
      "context": "If the agenda is financed by borrowing.",
      "page": 2
    }
  },
  {
    "value": "−$2,700",
    "unit": "a year for the poorest 10% of households",
    "consequence": "His law and tariffs take from the bottom.",
    "policy": "TRUMP + GOP RECONCILIATION LAW",
    "connection": "Medicaid and SNAP cuts plus tariff costs hit the lowest incomes hardest.",
    "context": "About 7% of their income. The richest 10% gain nearly $8,000 a year.",
    "source": "https://budgetlab.yale.edu/research/combined-distributional-effects-one-big-beautiful-bill-act-and-tariffs-0",
    "sourceLabel": "Yale Budget Lab - August 12, 2025",
    "kind": "Projection",
    "id": "pay",
    "label": "Paycheck",
    "topic": "YOUR PAYCHECK",
    "art": 1,
    "color": "#f3c66e",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "pay",
      "label": "Paycheck",
      "topic": "YOUR PAYCHECK",
      "art": 1,
      "color": "#f3c66e",
      "promise": "More for workers.",
      "policy": "FUND THE AGENDA WITH TAXES",
      "consequence": "Your paycheck shrinks.",
      "value": "−28.4%",
      "unit": "in after-tax hourly wages",
      "context": "If tax increases finance the agenda; about $22,000 less per worker each year, in 2026 dollars.",
      "page": 2
    }
  },
  {
    "value": "59,000",
    "unit": "households on emergency housing vouchers HUD let run dry",
    "consequence": "His HUD is pulling rent aid.",
    "policy": "TRUMP HUD EMERGENCY-VOUCHER WIND-DOWN",
    "connection": "HUD told agencies in March 2025 the money would run out in 2026.",
    "context": "Vouchers for people who were homeless or at risk. Secretary Turner: the safety net “was never meant to be a lifestyle.”",
    "source": "https://stateline.org/2026/04/27/emergency-housing-vouchers-are-ending-early-leaving-cities-and-renters-scrambling/",
    "sourceLabel": "Stateline - April 27, 2026",
    "kind": "Administrative action",
    "id": "rent",
    "label": "Housing",
    "topic": "YOUR HOME",
    "art": 2,
    "color": "#83c5c5",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "rent",
      "label": "Housing",
      "topic": "YOUR HOME",
      "art": 2,
      "color": "#83c5c5",
      "promise": "A home for everyone.",
      "policy": "UNIVERSAL RENT CONTROL",
      "consequence": "Millions of homes vanish.",
      "value": "3.3 million",
      "unit": "fewer rental homes after ten years",
      "context": "Under universal rent control, relative to the report’s baseline.",
      "page": 3
    }
  },
  {
    "value": "1.3 million",
    "unit": "jobs lost at the 2032 peak",
    "consequence": "Over a million jobs vanish.",
    "policy": "TRUMP + GOP ENERGY ROLLBACKS",
    "connection": "Reduced clean-energy support cuts projected employment.",
    "context": "Energy Innovation’s July 2026 model of his energy and manufacturing rollbacks; on top of 144,000 clean-energy jobs already gone.",
    "source": "https://energyinnovation.org/wp-content/uploads/The-Economic-Consumer-Cost-and-Pollution-Impacts-of-Federal-Energy-Policy-Changes.pdf",
    "sourceLabel": "Energy Innovation - July 2026",
    "kind": "Projection",
    "id": "jobs",
    "label": "Jobs",
    "topic": "YOUR JOB",
    "art": 3,
    "color": "#98bce5",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "jobs",
      "label": "Jobs",
      "topic": "YOUR JOB",
      "art": 3,
      "color": "#98bce5",
      "promise": "Less work. Same pay.",
      "policy": "A 32-HOUR WORKWEEK",
      "consequence": "Millions of jobs vanish.",
      "value": "4.2–6.9M",
      "unit": "jobs lost",
      "context": "Under a 32-hour workweek mandate with unchanged weekly pay.",
      "page": 3
    }
  },
  {
    "value": "Up to 16M",
    "unit": "more people uninsured",
    "consequence": "Millions lose their coverage.",
    "policy": "TRUMP + GOP LAW + EXPIRED ACA CREDITS",
    "connection": "Medicaid cuts, Marketplace rules and letting ACA tax credits lapse.",
    "context": "CBO: 14.2 million by 2034 from the law and the expired credits. His CMS rule adds up to 1.8 million more.",
    "source": "https://www.kff.org/uninsured/how-will-the-2025-reconciliation-law-affect-the-uninsured-rate-in-each-state/",
    "sourceLabel": "KFF on CBO estimates",
    "kind": "Projection",
    "id": "care",
    "label": "Health care",
    "topic": "YOUR HEALTH",
    "art": 4,
    "color": "#efaa99",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "care",
      "label": "Health care",
      "topic": "YOUR HEALTH",
      "art": 4,
      "color": "#efaa99",
      "promise": "Free health care.",
      "policy": "MEDICARE FOR ALL",
      "consequence": "Health care suffers.",
      "value": "−22%",
      "unit": "medical productivity by 2036",
      "context": "Under Medicare for All.",
      "page": 3
    }
  },
  {
    "value": "−$6.6T",
    "unit": "wiped off U.S. stocks in two days",
    "consequence": "Your retirement took the hit.",
    "policy": "TRUMP’S “LIBERATION DAY” TARIFFS",
    "connection": "His April 2 tariff announcement set off the selloff.",
    "context": "April 3–4, 2025: the worst two-day loss in U.S. stock-market history.",
    "source": "https://www.aljazeera.com/economy/2025/4/9/eight-charts-that-reveal-the-economic-impact-of-trumps-tariffs",
    "sourceLabel": "Al Jazeera - April 9, 2025",
    "kind": "Observed market change",
    "id": "savings",
    "label": "Savings",
    "topic": "YOUR SAVINGS",
    "art": 5,
    "color": "#eab6c0",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "savings",
      "label": "Savings",
      "topic": "YOUR SAVINGS",
      "art": 5,
      "color": "#eab6c0",
      "promise": "Tax only billionaires.",
      "policy": "A 5% BILLIONAIRE WEALTH TAX",
      "consequence": "Your savings take the hit.",
      "value": "−$2,100",
      "unit": "from the median 401(k)",
      "context": "From the wealth tax’s projected effect on stock-market value.",
      "page": 3
    }
  },
  {
    "value": "7.7 million",
    "unit": "SAVE borrowers notified of interest restarting in August 2025",
    "consequence": "His department restarted the interest meter.",
    "policy": "TRUMP EDUCATION DEPARTMENT / SAVE",
    "connection": "Interest resumed for borrowers previously in interest-free forbearance.",
    "context": "Borrowers who had been in interest-free forbearance while courts blocked the SAVE plan.",
    "source": "https://www.ed.gov/about/news/press-release/us-department-of-education-continues-improve-federal-student-loan-repayment-options-addresses-illegal-biden-administration-actions",
    "sourceLabel": "Education Department - July 2025",
    "kind": "Administrative action",
    "id": "tuition",
    "label": "College",
    "topic": "HIGHER EDUCATION",
    "art": 6,
    "color": "#c5abe5",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "tuition",
      "label": "College",
      "topic": "HIGHER EDUCATION",
      "art": 6,
      "color": "#c5abe5",
      "promise": "College without a bill.",
      "policy": "DEBT CANCELLATION & FREE TUITION",
      "consequence": "The bill goes to taxpayers.",
      "value": "$3.6T",
      "unit": "ten-year federal cost",
      "context": "Student-debt cancellation and free undergraduate tuition at all institutions; 2027–2036, in constant 2026 dollars.",
      "page": 3
    }
  },
  {
    "value": "+$10,900",
    "unit": "tariff cost built into each new home",
    "consequence": "Your first home costs more.",
    "policy": "TRUMP’S BUILDING-MATERIAL TARIFFS",
    "connection": "Tariffs on lumber, steel, aluminum and appliances go straight into the price.",
    "context": "Builders’ average estimate, April 2025. Most buyers then pay interest on it for 30 years.",
    "source": "https://www.nahb.org/advocacy/top-priorities/building-materials-trade-policy/how-tariffs-impact-the-home-building-industry",
    "sourceLabel": "NAHB / Wells Fargo - April 2025",
    "kind": "Survey estimate",
    "id": "mortgage",
    "label": "Mortgages",
    "topic": "BUYING A HOME",
    "art": 7,
    "color": "#81d1c6",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "mortgage",
      "label": "Mortgages",
      "topic": "BUYING A HOME",
      "art": 7,
      "color": "#81d1c6",
      "promise": "A more affordable future.",
      "policy": "FUND THE AGENDA BY BORROWING",
      "consequence": "Home loans get costlier.",
      "value": ">12%",
      "unit": "30-year mortgage rates",
      "context": "If the agenda is financed by borrowing. This is the projected mortgage rate, not an increase of 12 percentage points.",
      "page": 2
    }
  },
  {
    "value": "−4.6%",
    "unit": "GDP by 2054 versus no law",
    "consequence": "His law shrinks the economy.",
    "policy": "TRUMP + GOP RECONCILIATION LAW",
    "connection": "Debt crowds out investment for decades.",
    "context": "Penn Wharton’s 30-year projection of the law he signed.",
    "source": "https://budgetmodel.wharton.upenn.edu/p/2025-07-08-president-trump-signed-reconciliation-bill/",
    "sourceLabel": "Penn Wharton Budget Model - July 8, 2025",
    "kind": "Projection",
    "id": "output",
    "label": "The economy",
    "topic": "ECONOMIC OUTPUT",
    "art": 8,
    "color": "#e9a585",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "output",
      "label": "The economy",
      "topic": "ECONOMIC OUTPUT",
      "art": 8,
      "color": "#e9a585",
      "promise": "Prosperity for everyone.",
      "policy": "FUND THE AGENDA WITH TAXES",
      "consequence": "The economy shrinks.",
      "value": "−19%",
      "unit": "approximately, in real GDP",
      "context": "If financed by tax increases, including the programs’ direct effects; CEA says real GDP could fall by about 19%.",
      "page": 2
    }
  },
  {
    "value": "+$4.1T",
    "unit": "added to the national debt, 2025–2034",
    "consequence": "His law buries you in debt.",
    "policy": "TRUMP + GOP RECONCILIATION LAW",
    "connection": "Tax and spending changes increase required borrowing.",
    "context": "CBO’s estimate of the enacted law, interest included.",
    "source": "https://www.cbo.gov/publication/61466",
    "sourceLabel": "CBO - August 4, 2025",
    "kind": "Projection",
    "id": "debt",
    "label": "Public debt",
    "topic": "NATIONAL DEBT",
    "art": 9,
    "color": "#81bbc6",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "debt",
      "label": "Public debt",
      "topic": "NATIONAL DEBT",
      "art": 9,
      "color": "#81bbc6",
      "promise": "Borrow now. Prosper later.",
      "policy": "FUND THE AGENDA BY BORROWING",
      "consequence": "Debt more than doubles.",
      "value": "254%",
      "unit": "of GDP in publicly held federal debt by 2036",
      "context": "If the agenda is financed by borrowing. This is the debt-to-GDP ratio, not a 254% increase in debt.",
      "page": 2
    }
  },
  {
    "value": "+$4.6T",
    "unit": "in tax cuts and new spending over ten years",
    "consequence": "His cuts don’t pay for themselves.",
    "policy": "TRUMP + GOP RECONCILIATION LAW",
    "connection": "Spending cuts cover less than a third of it.",
    "context": "Penn Wharton: $4.6 trillion out, $1.4 trillion of cuts in.",
    "source": "https://budgetmodel.wharton.upenn.edu/p/2025-07-08-president-trump-signed-reconciliation-bill/",
    "sourceLabel": "Penn Wharton Budget Model - July 8, 2025",
    "kind": "Projection",
    "id": "deficits",
    "label": "Federal budget",
    "topic": "THE FEDERAL BUDGET",
    "art": 10,
    "color": "#c1cce4",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "deficits",
      "label": "Federal budget",
      "topic": "THE FEDERAL BUDGET",
      "art": 10,
      "color": "#c1cce4",
      "promise": "The programs pay for themselves.",
      "policy": "SEVEN SCORED PROGRAMS",
      "consequence": "The deficit explodes.",
      "value": "+$49T",
      "unit": "added federal deficits over ten years",
      "context": "Roughly $49 trillion, net of proposed wealth-tax revenue; 2027–2036, in constant 2026 dollars.",
      "page": 2
    }
  },
  {
    "value": "+$650B",
    "unit": "more paid by households for energy through 2040",
    "consequence": "His rollbacks drive up your energy bill.",
    "policy": "TRUMP + GOP ENERGY POLICY CHANGES",
    "connection": "Less clean power and efficiency; gasoline up 26% by 2040.",
    "context": "Energy Innovation, July 2026. About $4,500 per household, 2026–2040.",
    "source": "https://energyinnovation.org/wp-content/uploads/The-Economic-Consumer-Cost-and-Pollution-Impacts-of-Federal-Energy-Policy-Changes.pdf",
    "sourceLabel": "Energy Innovation - July 2026",
    "kind": "Projection",
    "id": "energy",
    "label": "Energy",
    "topic": "ENERGY & CLIMATE MANDATES",
    "art": 11,
    "color": "#f5d16f",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "energy",
      "label": "Energy",
      "topic": "ENERGY & CLIMATE MANDATES",
      "art": 11,
      "color": "#f5d16f",
      "promise": "A greener, cheaper future.",
      "policy": "THE GREEN NEW DEAL",
      "consequence": "The mandates cost you.",
      "value": ">$91,000",
      "unit": "per household over 25 years",
      "context": "CEA’s estimate of the costs of Green New Deal mandates; this is a 25-year total.",
      "page": 3
    }
  },
  {
    "value": "Up to +18%",
    "unit": "on electricity rates by 2035",
    "consequence": "His law can raise your power bill.",
    "policy": "TRUMP + GOP CLEAN-ENERGY CREDIT REPEALS",
    "connection": "Less new generation raises modeled electricity costs.",
    "context": "Energy Innovation’s model of the final 2025 law.",
    "source": "https://energyinnovation.org/report/updated-economic-impacts-of-u-s-senate-passed-one-big-beautiful-bill-act-energy-provisions/",
    "sourceLabel": "Energy Innovation - final 2025 law analysis",
    "kind": "Projection",
    "id": "utilities",
    "label": "Power bills",
    "topic": "HOUSEHOLD UTILITIES",
    "art": 12,
    "color": "#aaa79d",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "utilities",
      "label": "Power bills",
      "topic": "HOUSEHOLD UTILITIES",
      "art": 12,
      "color": "#aaa79d",
      "promise": "Cheaper, cleaner energy.",
      "policy": "THE GREEN NEW DEAL",
      "consequence": "Your power bill rises.",
      "value": "+16.3%",
      "unit": "at least, in electricity bills",
      "context": "CEA projects about $340 more a year for heating alone in gas-heated homes under Green New Deal mandates.",
      "page": 3
    }
  },
  {
    "value": "50%",
    "unit": "tariff on imported steel and aluminum",
    "consequence": "His tariffs tax every repair.",
    "policy": "TRUMP’S METAL TARIFFS",
    "connection": "Import taxes add pressure to repair and building-input costs.",
    "context": "Rebar, nails, ductwork, roofing and appliances are made from them.",
    "source": "https://www.nahb.org/advocacy/top-priorities/building-materials-trade-policy/how-tariffs-impact-the-home-building-industry",
    "sourceLabel": "NAHB - building-material trade policy",
    "kind": "Policy rate",
    "id": "maintenance",
    "label": "Home repairs",
    "topic": "HOUSING QUALITY",
    "art": 13,
    "color": "#b69a7f",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "maintenance",
      "label": "Home repairs",
      "topic": "HOUSING QUALITY",
      "art": 13,
      "color": "#b69a7f",
      "promise": "Better housing for everyone.",
      "policy": "UNIVERSAL RENT CONTROL",
      "consequence": "Homes fall into disrepair.",
      "value": "−4.5%",
      "unit": "in rental-unit quality",
      "context": "Under universal rent control, as maintenance declines.",
      "page": 3
    }
  },
  {
    "value": "+$1,000",
    "unit": "average tariff tax hike per household in 2025",
    "consequence": "His tariffs raised your taxes.",
    "policy": "TRUMP’S 2025 TARIFFS",
    "connection": "A tariff is a tax paid by importers and passed on to buyers.",
    "context": "The highest effective tariff rate since 1947.",
    "source": "https://taxfoundation.org/research/federal-tax/trump-tariffs-trade-war/",
    "sourceLabel": "Tax Foundation - Trump tariffs tracker",
    "kind": "Research estimate",
    "id": "taxes",
    "label": "Income tax",
    "topic": "YOUR TAX BILL",
    "art": 14,
    "color": "#c39990",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "taxes",
      "label": "Income tax",
      "topic": "YOUR TAX BILL",
      "art": 14,
      "color": "#c39990",
      "promise": "More services. Less burden.",
      "policy": "FUND THE AGENDA WITH TAXES",
      "consequence": "Your tax rate nearly triples.",
      "value": "39.6%",
      "unit": "effective federal individual income-tax rate",
      "context": "Up from 14.1% of adjusted gross income if tax increases finance the agenda.",
      "page": 2
    }
  },
  {
    "value": "$20,000",
    "unit": "annual Parent PLUS cap per dependent student from July 2026",
    "consequence": "His law leaves a college-funding gap.",
    "policy": "TRUMP + GOP STUDENT-LOAN LIMITS",
    "connection": "The law limits federal parent borrowing for undergraduate costs.",
    "context": "Plus a $65,000 lifetime cap per student, starting July 2026.",
    "source": "https://fsapartners.ed.gov/sites/default/files/2026-05/FrequentlyAskedQuestionsLoanLimits.pdf",
    "sourceLabel": "Federal Student Aid - May 2026 loan-limit FAQ",
    "kind": "Enacted policy",
    "id": "tuitionannual",
    "label": "Tuition bills",
    "topic": "THE COST OF FREE TUITION",
    "art": 15,
    "color": "#9caa91",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "tuitionannual",
      "label": "Tuition bills",
      "topic": "THE COST OF FREE TUITION",
      "art": 15,
      "color": "#9caa91",
      "promise": "Tuition at no cost.",
      "policy": "FREE UNDERGRADUATE TUITION",
      "consequence": "The spending never ends.",
      "value": "$84–233B",
      "unit": "in permanent annual federal outlays",
      "context": "CEA’s annual spending estimate for free undergraduate tuition; this is a federal cost, not a student’s bill.",
      "page": 3
    }
  },
  {
    "value": "−$911B",
    "unit": "federal Medicaid spending, 2025–2034, projected",
    "consequence": "His law cuts the money behind care.",
    "policy": "TRUMP + GOP MEDICAID CHANGES",
    "connection": "Reduced federal support squeezes health-care financing.",
    "context": "CBO: 14% less federal Medicaid money, as KFF reports. Hospitals, nursing homes and clinics absorb it.",
    "source": "https://www.kff.org/medicaid/medicaid-financing-the-basics/",
    "sourceLabel": "KFF - Medicaid financing analysis",
    "kind": "Projection",
    "id": "healthfunding",
    "label": "Hospitals",
    "topic": "HEALTH-CARE FINANCING",
    "art": 16,
    "color": "#c5b69d",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "healthfunding",
      "label": "Hospitals",
      "topic": "HEALTH-CARE FINANCING",
      "art": 16,
      "color": "#c5b69d",
      "promise": "Care without the cost.",
      "policy": "MEDICARE FOR ALL",
      "consequence": "The public bill balloons.",
      "value": "$47.41T",
      "unit": "ten-year federal fiscal cost",
      "context": "Medicare for All, 2027–2036, in constant 2026 dollars.",
      "page": 3
    }
  },
  {
    "value": "−274,000",
    "unit": "federal payroll jobs in 2025, as reported January 2026",
    "consequence": "His workforce cuts removed jobs.",
    "policy": "TRUMP’S FEDERAL WORKFORCE DOWNSIZING",
    "connection": "BLS links the October drop to deferred resignations leaving payroll.",
    "context": "BLS, January 30, 2026: the federal workforce shrank by 274,000 in 2025.",
    "source": "https://www.bls.gov/opub/ted/2026/federal-employment-reached-lowest-level-since-2014.htm",
    "sourceLabel": "BLS - January 30, 2026 data vintage",
    "kind": "Observed employment change",
    "id": "unemployment",
    "label": "Employment",
    "topic": "THE JOB MARKET",
    "art": 17,
    "color": "#d0a57b",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "unemployment",
      "label": "Employment",
      "topic": "THE JOB MARKET",
      "art": 17,
      "color": "#d0a57b",
      "promise": "Shorter hours. Secure jobs.",
      "policy": "A 32-HOUR WORKWEEK",
      "consequence": "Unemployment climbs.",
      "value": "6.6–8.2%",
      "unit": "projected unemployment rate",
      "context": "Up from 4.1% under a 32-hour workweek mandate with unchanged weekly pay.",
      "page": 3
    }
  },
  {
    "value": "−$34.8B",
    "unit": "in factories and clean-energy projects cancelled in 2025",
    "consequence": "Businesses walked away.",
    "policy": "TRUMP + GOP CLEAN-ENERGY ROLLBACKS",
    "connection": "Over 38,000 current and planned jobs went with them.",
    "context": "Nearly three times the $12.3 billion of new investment announced the same year.",
    "source": "https://www.eenews.net/articles/us-clean-energy-project-cancellations-hit-34b/",
    "sourceLabel": "E2 via E&E News - 2025 year-end",
    "kind": "Observed market change",
    "id": "wealthjobs",
    "label": "Businesses",
    "topic": "WORK & INVESTMENT",
    "art": 18,
    "color": "#9bacb4",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "wealthjobs",
      "label": "Businesses",
      "topic": "WORK & INVESTMENT",
      "art": 18,
      "color": "#9bacb4",
      "promise": "Only billionaires pay.",
      "policy": "A 5% BILLIONAIRE WEALTH TAX",
      "consequence": "Workers lose out, too.",
      "value": "1.1M",
      "unit": "workers unemployed",
      "context": "CEA’s estimate under a 5% annual tax on net wealth above $1 billion.",
      "page": 3
    }
  },
  {
    "value": "Up to $7,500",
    "unit": "new clean-vehicle credit ended for acquisitions after September 30, 2025",
    "consequence": "His law removed help buying a car.",
    "policy": "TRUMP + GOP CLEAN-VEHICLE CREDIT REPEAL",
    "connection": "Eligible buyers lose a purchase subsidy.",
    "context": "Gone for cars bought after September 30, 2025.",
    "source": "https://www.irs.gov/credits-deductions/credits-for-new-clean-vehicles-purchased-in-2023-or-after",
    "sourceLabel": "IRS - new clean-vehicle credit",
    "kind": "Enacted policy",
    "id": "vehicles",
    "label": "Cars",
    "topic": "VEHICLE MANDATES",
    "art": 19,
    "color": "#c2978e",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "vehicles",
      "label": "Cars",
      "topic": "VEHICLE MANDATES",
      "art": 19,
      "color": "#c2978e",
      "promise": "A cheaper way forward.",
      "policy": "THE GREEN NEW DEAL",
      "consequence": "Mandates drive up costs.",
      "value": "$884B",
      "unit": "in vehicle-mandate costs over ten years",
      "context": "CEA’s estimate of the Green New Deal’s vehicle mandates.",
      "page": 3
    }
  },
  {
    "value": "−$2.3T",
    "unit": "cumulative GDP effect, 2026–2040, modeled",
    "consequence": "His energy retreat cuts production too.",
    "policy": "TRUMP + GOP ENERGY POLICY CHANGES",
    "connection": "Slower electrification and investment reduce modeled output.",
    "context": "Energy Innovation, July 2026: up to $250 billion lost in a single year.",
    "source": "https://energyinnovation.org/report/economic-consumer-cost-and-pollution-impacts-of-federal-energy-policy-changes/",
    "sourceLabel": "Energy Innovation - July 2026",
    "kind": "Projection",
    "id": "workweekoutput",
    "label": "Production",
    "topic": "WORKWEEK & OUTPUT",
    "art": 20,
    "color": "#aca9a4",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "workweekoutput",
      "label": "Production",
      "topic": "WORKWEEK & OUTPUT",
      "art": 20,
      "color": "#aca9a4",
      "promise": "Work less. Produce as much.",
      "policy": "A 32-HOUR WORKWEEK",
      "consequence": "Production takes a hit.",
      "value": "−$5.2T",
      "unit": "in real GDP over ten years",
      "context": "Under a 32-hour workweek mandate with unchanged weekly pay; a 1.5% reduction in real GDP.",
      "page": 3
    }
  },
  {
    "value": "−8.3%",
    "unit": "in capital stock by 2054",
    "consequence": "His law starves investment.",
    "policy": "TRUMP + GOP RECONCILIATION LAW",
    "connection": "PWBM projects less capital as public debt rises.",
    "context": "Penn Wharton’s 30-year projection of the law he signed.",
    "source": "https://budgetmodel.wharton.upenn.edu/p/2025-07-08-president-trump-signed-reconciliation-bill/",
    "sourceLabel": "Penn Wharton Budget Model - July 8, 2025",
    "kind": "Projection",
    "id": "capital",
    "label": "Investment",
    "topic": "PRODUCTIVE CAPITAL",
    "art": 21,
    "color": "#c4ad81",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "capital",
      "label": "Investment",
      "topic": "PRODUCTIVE CAPITAL",
      "art": 21,
      "color": "#c4ad81",
      "promise": "Build a stronger economy.",
      "policy": "FUND THE AGENDA WITH TAXES",
      "consequence": "The economy loses capacity.",
      "value": "−11.5%",
      "unit": "in capital stock",
      "context": "If the agenda is financed by tax increases.",
      "page": 2
    }
  },
  {
    "value": "+$718B",
    "unit": "added debt-service costs over 2025–2034",
    "consequence": "His law leaves an interest bill.",
    "policy": "TRUMP + GOP RECONCILIATION LAW",
    "connection": "More borrowing means more interest owed.",
    "context": "On top of a $970 billion net interest bill in 2025 that already tops defense spending.",
    "source": "https://www.cbo.gov/publication/61466",
    "sourceLabel": "CBO - August 4, 2025",
    "kind": "Projection",
    "id": "interest",
    "label": "Debt interest",
    "topic": "THE INTEREST BILL",
    "art": 22,
    "color": "#bba886",
    "promise": "DONALD TRUMP + REPUBLICAN POLICY",
    "original": {
      "id": "interest",
      "label": "Debt interest",
      "topic": "THE INTEREST BILL",
      "art": 22,
      "color": "#bba886",
      "promise": "Borrow now. Pay later.",
      "policy": "FUND THE AGENDA BY BORROWING",
      "consequence": "Interest overtakes revenue.",
      "value": ">100%",
      "unit": "of projected federal revenue by 2036",
      "context": "If financed by borrowing, annual federal interest payments would exceed all projected federal revenue in 2036.",
      "page": 2
    }
  }
];
 const levels=[
  {
    "id": "budget",
    "title": "Your budget",
    "tagline": "The price of getting through the day.",
    "color": "#ba8076",
    "ids": [
      "prices",
      "pay",
      "rent",
      "utilities",
      "maintenance",
      "taxes"
    ]
  },
  {
    "id": "future",
    "title": "Your future",
    "tagline": "Work, health, education and savings.",
    "color": "#a294a7",
    "ids": [
      "jobs",
      "care",
      "tuition",
      "savings",
      "tuitionannual",
      "healthfunding",
      "unemployment",
      "wealthjobs"
    ]
  },
  {
    "id": "nation",
    "title": "The bigger picture",
    "tagline": "Follow the costs through the economy.",
    "color": "#b49a74",
    "ids": [
      "energy",
      "mortgage",
      "output",
      "debt",
      "deficits",
      "vehicles",
      "workweekoutput",
      "capital",
      "interest"
    ]
  }
];
 const fact=id=>facts.find(f=>f.id===id),current=s=>levels[s.level],currentFacts=s=>current(s).ids.map(fact);
 function shuffled(level,random=Math.random){const deck=levels[level].ids.flatMap(id=>[0,1].map(copy=>({key:id+'-'+copy,id})));for(let i=deck.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}return deck;}
 function boardState(level,random){return{level,deck:shuffled(level,random),selected:[],matched:[],moves:0,phase:'idle',remaining:0,lastMatch:null};}
 function create(random=Math.random){return{...boardState(0,random),totalMoves:0,seen:[],credited:[]};}
 function applyCredits(s){s.matched=current(s).ids.filter(id=>s.credited.includes(id));s.lastMatch=s.matched.at(-1)||null;}
 function flip(s,index){
  if(!['idle','one'].includes(s.phase)||!Number.isInteger(index)||!s.deck[index]||s.selected.includes(index)||s.matched.includes(s.deck[index].id))return null;
  s.selected.push(index);if(s.selected.length===1){s.phase='one';return'first';}s.moves++;s.totalMoves++;
  const id=s.deck[s.selected[0]].id;if(id===s.deck[index].id){s.matched.push(id);if(!s.seen.includes(id))s.seen.push(id);s.lastMatch=id;s.phase='matching';s.remaining=600;return'match';}
  s.phase='mismatch';s.remaining=1100;return'mismatch';
 }
 function tick(s,ms){if(!['matching','mismatch'].includes(s.phase)||!Number.isFinite(ms)||ms<=0)return null;s.remaining=Math.max(0,s.remaining-ms);if(s.remaining)return null;if(s.phase==='matching'){s.phase='fact';return'fact';}s.selected=[];s.phase='idle';return'reset';}
 function completedPhase(s){return s.level===levels.length-1?'complete':'level-complete';}
 function continueGame(s){if(s.phase!=='fact')return false;s.selected=[];s.phase=s.matched.length===current(s).ids.length?completedPhase(s):'idle';return true;}
 function nextLevel(s,random=Math.random){if(s.phase!=='level-complete')return false;Object.assign(s,boardState(s.level+1,random));applyCredits(s);return true;}
 function restartLevel(s,random=Math.random){s.totalMoves-=s.moves;s.credited=s.credited.filter(id=>!current(s).ids.includes(id));s.seen=[...new Set([...levels.slice(0,s.level).flatMap(l=>l.ids),...s.credited])];Object.assign(s,boardState(s.level,random));}
 function snapshot(s){return{version:2,level:s.level,order:s.deck.map(c=>c.key),matched:[...s.matched],moves:s.moves,totalMoves:s.totalMoves,credited:[...s.credited]};}
 function validOrder(order,ids){const allowed=ids.flatMap(id=>[id+'-0',id+'-1']);return Array.isArray(order)&&order.length===allowed.length&&new Set(order).size===allowed.length&&order.every(k=>allowed.includes(k));}
 function validMatches(matched,ids){return Array.isArray(matched)&&new Set(matched).size===matched.length&&matched.every(id=>ids.includes(id));}
 function restore(raw){
  try{const saved=typeof raw==='string'?JSON.parse(raw):raw;
   if(!saved||saved.version!==2||!Number.isInteger(saved.level)||!levels[saved.level])return create();
   const ids=levels[saved.level].ids;
   if(!validOrder(saved.order,ids)||!validMatches(saved.matched,ids))return create();
   if(!Number.isSafeInteger(saved.moves)||saved.moves<0||!Number.isSafeInteger(saved.totalMoves)||saved.totalMoves<saved.moves||saved.totalMoves>10000000)return create();
   const credited=saved.credited??[];if(!validMatches(credited,facts.map(f=>f.id))||saved.moves<saved.matched.filter(id=>!credited.includes(id)).length)return create();
   const s={...boardState(saved.level),deck:saved.order.map(key=>({key,id:key.slice(0,-2)})),matched:[...saved.matched],moves:saved.moves,totalMoves:saved.totalMoves,credited:[...credited],seen:[...new Set([...levels.slice(0,saved.level).flatMap(l=>l.ids),...saved.matched,...credited])],lastMatch:saved.matched.at(-1)||null};
   if(s.matched.length===ids.length)s.phase=completedPhase(s);return s;
  }catch{return create();}
 }
 return{originalSource,facts,levels,fact,current,currentFacts,create,flip,tick,continueGame,nextLevel,restartLevel,snapshot,restore};
})();
(()=>{
 const E=TrumpCostMatch,$=id=>document.getElementById(id),board=$('board'),report=$('report-dialog'),reveal=$('cost-dialog'),saveKey='trump-cost-counterclaims-v3';

 function loadSavedGame(){
  try{return E.restore(localStorage.getItem(saveKey));}
  catch{return E.create();}
 }
 let state=loadSavedGame(),parentPaused=false,muted=false,audio=null,lastFrame=null,cardNodes=[];
 try{muted=localStorage.getItem('trump-cost-muted')==='1';}catch{}
 const tell=data=>{if(parent!==window)parent.postMessage(data,location.origin);},blocked=()=>parentPaused||document.hidden||report.open||reveal.open,announce=text=>{$('announcer').textContent=text;},art=f=>`<span class="art art-${f.art}" aria-hidden="true"></span>`;
 function save(){try{localStorage.setItem(saveKey,JSON.stringify(E.snapshot(state)));}catch{}}
 function sound(kind){if(muted)return;try{audio??=new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const notes=kind==='match'?[392,494,587]:kind==='miss'?[170,145]:kind==='complete'?[392,494,587,784]:[330];notes.forEach((f,i)=>{const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime+i*.08;o.type='sine';o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.045,t+.012);g.gain.exponentialRampToValueAtTime(.001,t+.2);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+.22);});}catch{}}
 function updateSound(){const b=$('sound');b.textContent=muted?'Sound off':'Sound on';b.setAttribute('aria-label',muted?'Turn sound on':'Mute sound');b.setAttribute('aria-pressed',String(!muted));try{localStorage.setItem('trump-cost-muted',muted?'1':'0');}catch{}tell({type:'arcade:sound',soundOn:!muted});}
 function buildBoard(){
  const level=E.current(state);$('pair-track').setAttribute('aria-label',level.ids.length+' pairs');board.setAttribute('data-level',String(state.level));$('game').style.setProperty('--level-accent',level.color);$('level-number').textContent='LEVEL '+(state.level+1)+' / '+E.levels.length;$('level-name').textContent=level.title;$('level-path').innerHTML=E.levels.map((l,i)=>`<span class="${i<state.level?'done':i===state.level?'current':''}" aria-label="Level ${i+1}: ${l.title}${i<state.level?', completed':i===state.level?', current':', locked'}">${i<state.level?'✓':String(i+1).padStart(2,'0')}</span>`).join('');
  board.innerHTML=state.deck.map((c,i)=>{const f=E.fact(c.id);return`<button class="memory-card" data-index="${i}" style="--card-color:${f.color};--deal:${i*22}ms" aria-label="Card ${i+1}, face down"><span class="card-inner"><span class="card-back" aria-hidden="true"><span class="card-number">${String(i+1).padStart(2,'0')}</span><span class="back-symbol"><i></i><b>?</b></span><span class="back-title">THE COST<br>OF TRUMP</span></span><span class="card-front" aria-hidden="true"><span class="card-art">${art(f)}</span><span class="face-label">${f.label}</span><span class="match-badge">✓</span></span></span></button>`;}).join('');
  cardNodes=Array.from(board.querySelectorAll('.memory-card'));cardNodes.forEach((button,i)=>button.addEventListener('click',()=>choose(i)));$('pair-track').innerHTML=E.currentFacts(state).map(f=>`<span id="track-${f.id}" class="pair-slot" style="--card-color:${f.color}" aria-label="${f.label}, not matched">${art(f)}<span class="slot-dot"></span></span>`).join('');
  $('progress-bar').setAttribute('aria-valuemax',String(level.ids.length));$('intro-note').textContent=level.ids.length+' pairs. Follow the receipts.';
 }
 function sync(){
  cardNodes.forEach((button,i)=>{const c=state.deck[i],f=E.fact(c.id),matched=state.matched.includes(c.id),up=matched||state.selected.includes(i);button.classList.toggle('is-up',up);button.classList.toggle('is-matched',matched);button.classList.toggle('is-miss',state.phase==='mismatch'&&state.selected.includes(i));button.setAttribute('aria-label',`Card ${i+1}, ${up?f.label+(matched?', matched':''):'face down'}`);button.setAttribute('aria-disabled',String(matched));button.querySelector('.face-label').textContent=matched?f.value:f.label;});
  const total=E.current(state).ids.length;$('pairs').textContent=state.matched.length+' / '+total;$('moves').textContent=String(state.moves);$('progress-fill').style.width=(state.matched.length/total*100)+'%';$('progress-bar').setAttribute('aria-valuenow',String(state.matched.length));E.currentFacts(state).forEach(f=>{const n=$('track-'+f.id),found=state.matched.includes(f.id);n.classList.toggle('found',found);n.setAttribute('aria-label',f.label+(found?', matched':', not matched'));});
  $('turn-hint').textContent=state.phase==='one'?'Now find its matching picture.':state.phase==='mismatch'?'Different pictures. Remember them and try again.':state.phase==='matching'?'A match. Here comes the cost.':'Flip any two cards to find a pair.';
 }
 function choose(index){if(blocked())return;const result=E.flip(state,index);if(!result)return;sync();sound(result==='match'?'match':result==='mismatch'?'miss':'flip');const f=E.fact(state.deck[index].id);announce(result==='first'?f.label+'. Find its matching picture.':result==='match'?f.label+' matched.':f.label+'. Different pictures. Try again.');}
 function showOriginalClaim(f){
  const claim=f.original;
  $('original-policy').textContent=claim.policy;
  $('original-title').textContent=claim.consequence;
  $('original-value').textContent=claim.value;
  $('original-unit').textContent=claim.unit;
  $('original-context').textContent=claim.context;
  $('original-source').href=E.originalSource+'#page='+claim.page;
 }
 function openCost(){
  const f=E.fact(state.lastMatch),count=E.current(state).ids.length;$('cost-art').className='cost-art art art-'+f.art;showOriginalClaim(f);$('cost-connection').textContent=f.connection;$('cost-dialog').style.setProperty('--card-color',f.color);$('cost-topic').textContent=f.topic;$('match-count').textContent='PAIR '+state.matched.length+' OF '+count;$('cost-promise').textContent=f.promise;$('cost-policy').textContent=f.policy;$('cost-title').textContent=f.consequence;$('cost-value').textContent=f.value;$('cost-unit').textContent=f.unit;$('cost-context').textContent=f.context;$('cost-source').href=f.source;$('cost-source').textContent=f.kind+' - '+f.sourceLabel+' (source)';
  const label=state.matched.length===count?(state.level===E.levels.length-1?'SEE ALL '+E.facts.length+' COSTS':'LEVEL COMPLETE'):'KEEP MATCHING';$('continue').innerHTML=label+' <span aria-hidden="true">→</span>';reveal.showModal();$('continue').focus({preventScroll:true});announce(f.consequence+' '+f.value+' '+f.unit+'. '+f.kind+'. '+f.context);
 }
 function latest(){const f=E.fact(state.lastMatch);$('latest-cost').hidden=!f;if(!f)return;$('latest-art').className='latest-art art art-'+f.art;$('latest-title').textContent=f.consequence;$('latest-value').textContent=f.value;$('latest-unit').textContent=f.unit;$('latest-context').textContent=f.context;$('latest-source').href=f.source;$('latest-source').textContent=f.kind+' - '+f.sourceLabel+' (source)';}
 function dismissCost(){if(parentPaused||document.hidden||!E.continueGame(state))return;reveal.close();sync();latest();save();if(state.phase==='complete')finish();else if(state.phase==='level-complete')levelFinish();else{cardNodes[state.deck.findIndex(c=>!state.matched.includes(c.id))]?.focus({preventScroll:true});announce(state.matched.length+' of '+E.current(state).ids.length+' pairs matched. Keep matching.');}}
 function levelFinish(){
  const next=E.levels[state.level+1];$('play').hidden=true;$('ending').hidden=true;$('level-finish').hidden=false;$('cleared-title').textContent='Level '+(state.level+1)+' complete.';$('cleared-stats').textContent=E.current(state).ids.length+' pairs found in '+state.moves+' moves';$('next-number').textContent='UP NEXT · LEVEL '+(state.level+2);$('next-title').textContent=next.title;$('next-description').textContent=next.tagline;$('next-preview').setAttribute('data-count',String(next.ids.length));$('next-preview').innerHTML=next.ids.map(id=>{const f=E.fact(id);return`<span class="preview-card" style="--card-color:${f.color}">${art(f)}<span>${f.label}</span></span>`;}).join('');$('next-detail').textContent=next.ids.filter(id=>!state.credited.includes(id)).length+' new pairs · '+next.ids.length*2+' cards';$('next-level').innerHTML='PLAY LEVEL '+(state.level+2)+' <span aria-hidden="true">→</span>';sound('complete');$('next-level').focus({preventScroll:true});announce('Level '+(state.level+1)+' complete. Next: '+next.title+', '+next.ids.filter(id=>!state.credited.includes(id)).length+' new pairs.');
 }
 function finish(){
  $('play').hidden=true;$('level-finish').hidden=true;$('ending').hidden=false;$('end-moves').textContent=state.totalMoves+' total moves';$('consequence-list').innerHTML=E.levels.flatMap(l=>l.ids).map(id=>{const f=E.fact(id);return`<a class="end-card" href="${f.source}" target="_blank" rel="noopener noreferrer"><span class="end-visual">${art(f)}</span><span class="end-detail"><span class="end-topic">${f.topic}</span><small class="end-original">THEIR CLAIM: ${f.original.value} ${f.original.unit}</small><strong>${f.value}</strong><span class="end-unit">${f.unit}</span><small>${f.connection}</small><small>${f.context}</small></span><span class="end-arrow" aria-hidden="true">↗</span></a>`;}).join('');sound('complete');$('replay').focus({preventScroll:true});announce('All three levels completed. '+E.facts.length+' pairs found in '+state.totalMoves+' moves.');
 }
 function showBoard(){lastFrame=null;$('play').hidden=false;$('level-finish').hidden=true;$('ending').hidden=true;buildBoard();sync();latest();}
 function restart(){if(blocked())return;state=E.create();showBoard();save();cardNodes[0].focus({preventScroll:true});announce('Game restarted. Level one: Your budget.');}
 function nextLevel(){if(blocked()||!E.nextLevel(state))return;showBoard();save();cardNodes[0].focus({preventScroll:true});announce('Level '+(state.level+1)+'. '+E.current(state).title+'. Find '+E.current(state).ids.length+' new pairs.');}
 function replay(){if(blocked())return;state=E.create();showBoard();save();cardNodes[0].focus({preventScroll:true});announce('New campaign. Level one: Your budget.');}
 function frame(now){const elapsed=lastFrame===null?0:Math.min(80,Math.max(0,now-lastFrame));lastFrame=now;if(!blocked()){const result=E.tick(state,elapsed);if(result==='fact')openCost();if(result==='reset'){sync();save();announce('Cards turned back. Try another pair.');}}requestAnimationFrame(frame);}
 $('continue').addEventListener('click',dismissCost);reveal.addEventListener('cancel',e=>{e.preventDefault();dismissCost();});$('replay').addEventListener('click',replay);$('shuffle').addEventListener('click',restart);$('next-level').addEventListener('click',nextLevel);
 function showReport(){
  if(parentPaused||document.hidden||reveal.open)return;
  $('source-list').innerHTML=E.facts.map(f=>`<li><a href="${f.source}" target="_blank" rel="noopener noreferrer">${f.label}: ${f.sourceLabel} ?</a><small>${f.kind}</small><a href="${E.originalSource}#page=${f.original.page}" target="_blank" rel="noopener noreferrer">Original CEA claim: page ${f.original.page}</a></li>`).join('');
  report.showModal();
 }
 $('report-open').addEventListener('click',showReport);$('end-report').addEventListener('click',showReport);$('report-close').addEventListener('click',()=>report.close());$('sound').addEventListener('click',()=>{muted=!muted;updateSound();});
 document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='m'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.repeat){muted=!muted;updateSound();}if(blocked()||!document.activeElement?.classList.contains('memory-card'))return;const i=cardNodes.indexOf(document.activeElement),columns=getComputedStyle(board).gridTemplateColumns.split(' ').filter(Boolean).length,offsets={ArrowRight:1,ArrowLeft:-1,ArrowDown:columns,ArrowUp:-columns};if(e.key in offsets){e.preventDefault();cardNodes[Math.max(0,Math.min(cardNodes.length-1,i+offsets[e.key]))].focus({preventScroll:true});}});
 window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent||e.data?.type!=='arcade:command')return;if(e.data.action==='pause')parentPaused=true;if(e.data.action==='resume')parentPaused=false;if(e.data.action==='sound'){muted=!muted;updateSound();}});
 window.__arcadeGame={get muted(){return muted;}};window.addEventListener('load',()=>tell({type:'arcade:ready',soundOn:!muted}));
 showBoard();updateSound();if(state.phase==='complete')finish();else if(state.phase==='level-complete')levelFinish();requestAnimationFrame(frame);
})();
//# sourceURL=raw-html-custom-scripts-js-after
