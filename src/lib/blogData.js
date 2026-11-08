/**
 * Finspark Accounting — blog content (file-based CMS)
 * Add a new post: copy an object, change slug/title/content, set featured if needed.
 * Detail page renders content[] blocks: p | h2 | h3 | ul | callout
 */

export const blogCategories = [
  "All Articles",
  "HMRC & Tax Deadlines",
  "Making Tax Digital",
  "Small Business & Sole Traders",
  "Limited Company Strategy",
  "Payroll & CIS",
];

export const posts = [
  {
    slug: "2025-2026-small-business-tax-guide",
    title:
      "The 2025/2026 Small Business Tax Guide: What Directors and Sole Traders Need to Know",
    excerpt:
      "Corporation tax bands, National Insurance changes, digital record-keeping and the practical steps to take before the end of the tax year — explained in plain English.",
    category: "HMRC & Tax Deadlines",
    badge: "Lead Advisory Briefing",
    readTime: "7 min read",
    author: "Asif Chaudhry, FCCA",
    authorRole: "Managing Director & Senior Lead",
    authorInitials: "AC",
    publishedDate: "2026-02-12",
    publishedLabel: "Published Feb 2026",
    image: "/images/taxreturn.webp",
    featured: true,
    content: [
      {
        type: "p",
        text: "Each tax year brings rule changes that affect how much tax you pay and when you must report to HMRC. For directors of limited companies and sole traders, the 2025/26 landscape is shaped by corporation tax rates, National Insurance, Making Tax Digital timelines and tighter expectations around digital records.",
      },
      {
        type: "p",
        text: "This guide summarises the areas most small businesses should review with their accountant — not as personal tax advice, but as a practical checklist so nothing important is left to the last minute.",
      },
      {
        type: "h2",
        text: "Corporation tax and marginal relief",
      },
      {
        type: "p",
        text: "Limited companies still face a split rate system: a lower rate for smaller profits and a higher main rate once profits pass the upper threshold, with marginal relief in between. Where your company sits on that scale affects cash flow planning, dividend decisions and how much you set aside for the corporation tax bill.",
      },
      {
        type: "p",
        text: "Directors should know their expected taxable profit early enough to plan payments and avoid a surprise liability when the CT600 is due.",
      },
      {
        type: "h2",
        text: "National Insurance and employment costs",
      },
      {
        type: "p",
        text: "Employer National Insurance is a real cost of hiring. Changes to rates or thresholds alter the true cost of a salary versus a dividend mix for owner-managed companies. Payroll should be reviewed whenever NI rules change so payslips and budgets stay accurate.",
      },
      {
        type: "h2",
        text: "Digital records are no longer optional culture",
      },
      {
        type: "p",
        text: "Whether or not you are already inside a Making Tax Digital mandate, HMRC expects clearer digital audit trails. Spreadsheet chaos at year-end costs more in fees and stress than steady monthly bookkeeping. Cloud software such as Xero or QuickBooks, with bank feeds reconciled regularly, is the baseline most growing businesses need.",
      },
      {
        type: "callout",
        text: "Good digital records reduce year-end cost, speed up VAT returns and make MTD transition far less painful when your turnover threshold is reached.",
      },
      {
        type: "h2",
        text: "Practical steps before 5 April",
      },
      {
        type: "ul",
        items: [
          "Confirm your accounting year-end and corporation tax payment dates",
          "Review salary and dividend planning with current NI and dividend allowance rules in mind",
          "Clear backlog bank transactions and uncoded expenses",
          "Check VAT scheme suitability if turnover is rising",
          "Diary Self Assessment and Companies House filing deadlines",
          "Speak to your adviser early if cash flow looks tight around tax payment dates",
        ],
      },
      {
        type: "h2",
        text: "How Finspark can help",
      },
      {
        type: "p",
        text: "We work with sole traders and limited companies across London and the UK on bookkeeping, VAT, year-end accounts, payroll and tax planning in plain English. If you want a clear picture of what 2025/26 means for your numbers, get in touch and we will walk through it with you.",
      },
    ],
  },
  {
    slug: "making-tax-digital-itsa-2026",
    title: "Making Tax Digital for ITSA: Are You Ready for the 2026 Rollout?",
    excerpt:
      "Sole traders and landlords above the income threshold face quarterly digital reporting. Here is what MTD for Income Tax means in practice and how to prepare.",
    category: "Making Tax Digital",
    readTime: "6 min read",
    author: "Asim Malik, FCCA",
    authorRole: "Partner",
    authorInitials: "AM",
    publishedDate: "2026-01-20",
    publishedLabel: "Published Jan 2026",
    image: "/images/bookkeeping.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Making Tax Digital (MTD) for Income Tax Self Assessment is one of the biggest shifts in how sole traders and landlords report to HMRC. Instead of a single annual digital tax return mindset, in-scope taxpayers will need compatible software and quarterly updates.",
      },
      {
        type: "h2",
        text: "Who is affected first?",
      },
      {
        type: "p",
        text: "HMRC is phasing MTD for ITSA by income level. Higher-income sole traders and landlords are brought in earlier; lower thresholds follow in later years. You need to check the current gov.uk thresholds against your qualifying income — not guess from social media summaries.",
      },
      {
        type: "h2",
        text: "What “quarterly” really means",
      },
      {
        type: "p",
        text: "You will keep digital records of income and expenses and submit quarterly updates through MTD-compatible software. A final declaration still ties the year together. This is closer to how VAT MTD already works for many businesses: steady digital habits beat one frantic month in January.",
      },
      {
        type: "callout",
        text: "If your bookkeeping is only updated once a year, MTD will feel painful. If records are monthly, quarterly updates become a routine submission, not a project.",
      },
      {
        type: "h2",
        text: "How to prepare",
      },
      {
        type: "ul",
        items: [
          "Confirm whether you are in the first wave using official HMRC guidance",
          "Move off pure paper or disconnected spreadsheets into compatible software",
          "Reconcile bank accounts monthly so quarterly figures are trustworthy",
          "Separate personal and business transactions clearly",
          "Ask your accountant how submissions will be handled under your engagement",
        ],
      },
      {
        type: "h2",
        text: "Landlords and multiple properties",
      },
      {
        type: "p",
        text: "Property income is a common trigger for MTD ITSA. If you have several lets, consistent categorisation of rents, repairs and finance costs matters. Software and a simple folder structure for invoices will save hours later.",
      },
      {
        type: "p",
        text: "Finspark helps clients get MTD-ready with clean digital bookkeeping and clear explanations of what HMRC expects — without jargon.",
      },
    ],
  },
  {
    slug: "sole-trader-vs-limited-company-2025",
    title: "Sole Trader vs Limited Company: Which Structure Fits You Better?",
    excerpt:
      "Tax rates, admin burden, limited liability and dividend rules all play a part. A calm comparison for owners thinking about incorporation.",
    category: "Limited Company Strategy",
    readTime: "7 min read",
    author: "Asif Chaudhry, FCCA",
    authorRole: "Managing Director & Senior Lead",
    authorInitials: "AC",
    publishedDate: "2025-11-18",
    publishedLabel: "Published Nov 2025",
    image: "/images/companytax.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Choosing between sole trader and limited company status is one of the most common questions we hear. There is no universal answer — the better structure depends on profit level, risk, growth plans and how you want to take money out of the business.",
      },
      {
        type: "h2",
        text: "Sole trader — simpler, personally exposed",
      },
      {
        type: "p",
        text: "As a sole trader you and the business are the same legal person. Profits are taxed through Self Assessment as income. Admin is lighter: no Companies House filings, no corporation tax return. The trade-off is unlimited personal liability for business debts and less flexibility in how you extract profits.",
      },
      {
        type: "h2",
        text: "Limited company — separate legal entity",
      },
      {
        type: "p",
        text: "A limited company is separate from you as an individual. That usually means limited liability (with important exceptions such as personal guarantees). Profits face corporation tax; you can take a salary, dividends or a mix. You must file accounts, confirmation statements and often pay more attention to record-keeping.",
      },
      {
        type: "h2",
        text: "Tax is only one factor",
      },
      {
        type: "p",
        text: "People often incorporate purely for tax. Sometimes the numbers work; sometimes National Insurance, dividend allowances, extra accountancy fees and admin erase the benefit. Liability protection, credibility with suppliers and plans to bring in shareholders can matter as much as the tax rate.",
      },
      {
        type: "callout",
        text: "Run the comparison on your real profit figure with current rates — not a generic online calculator from three years ago.",
      },
      {
        type: "h2",
        text: "When incorporation often makes sense",
      },
      {
        type: "ul",
        items: [
          "Profits are consistently high enough that company + salary/dividend planning is worthwhile after fees",
          "You want limited liability for commercial risk",
          "You plan to reinvest profits rather than draw everything out",
          "Clients or lenders expect a limited company structure",
        ],
      },
      {
        type: "p",
        text: "We help owners model both options in plain English before they file paperwork with Companies House. If you are unsure, a short review of your numbers is usually enough to see which way the structure leans.",
      },
    ],
  },
  {
    slug: "complete-guide-cis-deductions-hmrc",
    title: "CIS Deductions & HMRC Monthly Returns: A Practical Guide",
    excerpt:
      "How Construction Industry Scheme deductions work, what contractors must file, and how subcontractors can avoid cash-flow shocks.",
    category: "Payroll & CIS",
    readTime: "6 min read",
    author: "Asim Malik, FCCA",
    authorRole: "Partner",
    authorInitials: "AM",
    publishedDate: "2025-10-05",
    publishedLabel: "Published Oct 2025",
    image: "/images/payroll.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "The Construction Industry Scheme (CIS) affects contractors and subcontractors across the building trades. Mistakes on deduction rates or monthly returns lead to penalties and strained cash flow — especially for smaller subcontractors.",
      },
      {
        type: "h2",
        text: "What CIS is designed to do",
      },
      {
        type: "p",
        text: "Under CIS, contractors deduct a percentage from payments to subcontractors and pay that amount to HMRC. The deduction counts toward the subcontractor’s tax and National Insurance. Verification, correct status and timely returns are the core compliance duties.",
      },
      {
        type: "h2",
        text: "Contractor duties",
      },
      {
        type: "ul",
        items: [
          "Verify subcontractors with HMRC before first payment",
          "Apply the correct deduction rate (or gross payment status where held)",
          "Provide deduction statements to subcontractors",
          "File monthly CIS returns and pay deductions on time",
          "Keep clear records of payments and materials treatment",
        ],
      },
      {
        type: "h2",
        text: "Subcontractor cash flow",
      },
      {
        type: "p",
        text: "If you are a subcontractor, CIS deductions reduce money in your bank even though they are not “extra tax” on top of your final liability. Budget for net receipts. Registering for gross payment status is possible if you meet HMRC’s criteria — it is not automatic.",
      },
      {
        type: "callout",
        text: "Late CIS returns attract penalties quickly. Diary the monthly deadline the same way you diary payroll.",
      },
      {
        type: "h2",
        text: "Bookkeeping tips that prevent disputes",
      },
      {
        type: "p",
        text: "Separate labour and materials clearly when rules require it. Match deduction statements to bank receipts. If you use commercial software, map CIS suppliers correctly so VAT and CIS do not get muddled.",
      },
      {
        type: "p",
        text: "Finspark supports contractors and subcontractors with CIS returns, payroll alignment and records that stand up when HMRC asks questions.",
      },
    ],
  },
  {
    slug: "allowable-business-expenses-guide",
    title:
      "Allowable Business Expenses: Costs Small Business Owners Often Miss",
    excerpt:
      "From home working costs to phones, travel and training — a plain-English reminder of what can often be claimed when it is wholly for the business.",
    category: "Small Business & Sole Traders",
    readTime: "5 min read",
    author: "Asif Chaudhry, FCCA",
    authorRole: "Managing Director & Senior Lead",
    authorInitials: "AC",
    publishedDate: "2025-09-14",
    publishedLabel: "Published Sep 2025",
    image: "/images/businesssupport.jpg",
    featured: false,
    content: [
      {
        type: "p",
        text: "Allowable expenses reduce taxable profit. The basic test is whether a cost is incurred wholly and exclusively for the business. Mixed-use items need careful apportionment — and some costs are never allowable.",
      },
      {
        type: "h2",
        text: "Common categories people under-claim",
      },
      {
        type: "ul",
        items: [
          "Proportion of home broadband and mobile used for work",
          "Working-from-home costs (simplified or actual method where eligible)",
          "Professional subscriptions related to your trade",
          "Training that maintains or updates existing skills for the business",
          "Bank charges on business accounts",
          "Software subscriptions for bookkeeping, estimating or CRM",
          "Protective clothing or uniforms required for the trade",
        ],
      },
      {
        type: "h2",
        text: "Travel and vehicles",
      },
      {
        type: "p",
        text: "Business mileage can often be claimed using approved mileage rates or actual costs depending on your setup. Commuting from home to a permanent workplace is generally not allowable. Keep a mileage log that HMRC would find credible.",
      },
      {
        type: "h2",
        text: "What usually fails the test",
      },
      {
        type: "p",
        text: "Everyday clothing, most client entertaining, personal fines and purely private expenditure will not qualify. If an expense has a private benefit, only the business portion — if any — may be allowable.",
      },
      {
        type: "callout",
        text: "Receipts and clear notes beat memory at year-end. Photograph invoices as you go.",
      },
      {
        type: "p",
        text: "We review expense categories during bookkeeping and year-end work so clients claim what they should — and avoid what they should not.",
      },
    ],
  },
  {
    slug: "cash-flow-forecasting-prevent-surprises",
    title: "Cash Flow Forecasting: Avoid Month-End Surprises",
    excerpt:
      "Profit on the accounts is not the same as cash in the bank. A simple rolling forecast helps trades and limited companies plan VAT, payroll and tax bills.",
    category: "Small Business & Sole Traders",
    readTime: "5 min read",
    author: "Asim Malik, FCCA",
    authorRole: "Partner",
    authorInitials: "AM",
    publishedDate: "2025-08-22",
    publishedLabel: "Published Aug 2025",
    image: "/images/investment.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Many owners look profitable on paper and still struggle to pay VAT or wages. Cash flow forecasting bridges that gap by mapping when money actually enters and leaves the bank.",
      },
      {
        type: "h2",
        text: "A simple 13-week model",
      },
      {
        type: "p",
        text: "List opening bank balance, expected customer receipts week by week, then supplier payments, wages, rent, VAT, loan repayments and drawings. Update it weekly. You do not need complex software to start — a clear spreadsheet is enough.",
      },
      {
        type: "h2",
        text: "Seasonality and tax peaks",
      },
      {
        type: "p",
        text: "Construction, retail and hospitality often have uneven receipts. Corporation tax, VAT quarters and Self Assessment deadlines create predictable spikes. Put those dates in the forecast the moment they are known.",
      },
      {
        type: "callout",
        text: "If your forecast shows a red month, you still have time to chase invoices, delay non-essential spend or speak to your adviser — panic is optional when you look ahead.",
      },
      {
        type: "h2",
        text: "Link forecasts to bookkeeping",
      },
      {
        type: "p",
        text: "Aged debtors, unbilled work and overdue supplier bills should feed the forecast. Clean bookkeeping makes the forecast honest; messy books make it fiction.",
      },
      {
        type: "p",
        text: "Finspark helps clients build practical cash views alongside monthly management figures so tax deadlines do not arrive as surprises.",
      },
    ],
  },
  {
    slug: "why-responsive-accountants-matter",
    title: "Why a Responsive Accountant Saves You Money",
    excerpt:
      "Slow answers create missed deadlines, rushed filings and poor decisions. What “good service” should look like for a growing business.",
    category: "HMRC & Tax Deadlines",
    readTime: "4 min read",
    author: "Asif Chaudhry, FCCA",
    authorRole: "Managing Director & Senior Lead",
    authorInitials: "AC",
    publishedDate: "2025-07-30",
    publishedLabel: "Published Jul 2025",
    image: "/images/meeting.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Accountancy is not only about technical accuracy. Speed and clarity change outcomes. A question answered in hours can protect a filing deadline; a week of silence can turn into penalties or a bad commercial decision.",
      },
      {
        type: "h2",
        text: "Hidden costs of slow advisers",
      },
      {
        type: "ul",
        items: [
          "Late filing penalties that were avoidable",
          "Decisions made without tax input because the window closed",
          "Owner time wasted chasing updates",
          "Year-end bills inflated by emergency catch-up work",
        ],
      },
      {
        type: "h2",
        text: "What to expect from a modern firm",
      },
      {
        type: "p",
        text: "Direct contact with the people doing the work, agreed response times, plain-English explanations and fixed-fee clarity where possible. You should not need to learn HMRC’s language to understand your own numbers.",
      },
      {
        type: "callout",
        text: "At Finspark we focus on reachable advisers, clear monthly rhythms and explanations you can act on — not ticket queues.",
      },
      {
        type: "p",
        text: "If you are changing accountants, ask about response standards before you ask about price. The cheaper firm is rarely cheaper once penalties and lost time are included.",
      },
    ],
  },
  {
    slug: "vat-registration-threshold-schemes",
    title: "VAT Registration, Thresholds and Schemes Explained Simply",
    excerpt:
      "When you must register, when you might choose to, and how Flat Rate or standard VAT changes your admin and pricing.",
    category: "HMRC & Tax Deadlines",
    readTime: "6 min read",
    author: "Asim Malik, FCCA",
    authorRole: "Partner",
    authorInitials: "AM",
    publishedDate: "2025-06-16",
    publishedLabel: "Published Jun 2025",
    image: "/images/services.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "VAT is often the first major compliance step a growing sole trader or company faces. Crossing the taxable turnover threshold means mandatory registration; below it, voluntary registration can still be useful in some cases.",
      },
      {
        type: "h2",
        text: "Mandatory registration",
      },
      {
        type: "p",
        text: "Track taxable turnover on a rolling basis against the current HMRC threshold. Register on time — late registration can mean unexpected VAT due. Not all income counts as taxable turnover; get the definition right for your trade.",
      },
      {
        type: "h2",
        text: "Standard vs Flat Rate scheme",
      },
      {
        type: "p",
        text: "Under standard VAT you charge VAT on sales and reclaim VAT on eligible purchases. The Flat Rate scheme uses a industry percentage on gross turnover and limits recovery of input VAT (with limited exceptions). Which is better depends on your margin structure and cost profile.",
      },
      {
        type: "callout",
        text: "Flat Rate is not automatically “simpler and better”. Model both before you apply.",
      },
      {
        type: "h2",
        text: "Pricing after registration",
      },
      {
        type: "p",
        text: "Decide whether quotes are VAT-inclusive or exclusive and state it clearly. Cash-flow changes when you collect VAT that later goes to HMRC — put it aside rather than treat it as spending money.",
      },
      {
        type: "p",
        text: "We help clients register correctly, pick suitable schemes and keep MTD VAT submissions on track.",
      },
    ],
  },
  {
    slug: "year-end-accounts-checklist-limited-company",
    title: "Limited Company Year-End Accounts: A Practical Checklist",
    excerpt:
      "What directors should prepare before accounts and corporation tax work begins — so filings are faster and cleaner.",
    category: "Limited Company Strategy",
    readTime: "5 min read",
    author: "Asif Chaudhry, FCCA",
    authorRole: "Managing Director & Senior Lead",
    authorInitials: "AC",
    publishedDate: "2025-05-09",
    publishedLabel: "Published May 2025",
    image: "/images/accountingoffice.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Year-end does not have to be a scramble. Companies that keep books current throughout the year usually pay less in catch-up fees and file with fewer questions.",
      },
      {
        type: "h2",
        text: "Records to have ready",
      },
      {
        type: "ul",
        items: [
          "Bank statements and reconciled accounts for the whole period",
          "Sales invoices and purchase bills",
          "Payroll summaries and director payment notes",
          "Loan statements and hire purchase agreements",
          "Details of new equipment or vehicles",
          "Dividend records and board minutes where relevant",
          "Prior year accounts and corporation tax computations",
        ],
      },
      {
        type: "h2",
        text: "Director responsibilities",
      },
      {
        type: "p",
        text: "Accounts must give a true and fair view. Directors approve them. Even when an accountant prepares the numbers, responsibility for accuracy and timely Companies House and HMRC filings stays with the board.",
      },
      {
        type: "callout",
        text: "Diary Companies House accounts due dates and corporation tax payment dates at the start of each accounting year.",
      },
      {
        type: "p",
        text: "Finspark prepares statutory accounts and tax computations with clear explanations of profit, tax due and any planning points for the year ahead.",
      },
    ],
  },
  {
    slug: "payroll-for-small-limited-companies",
    title: "Payroll for Small Limited Companies: Getting the Basics Right",
    excerpt:
      "PAYE, RTI submissions, pensions auto-enrolment and director salaries — the essentials without the jargon.",
    category: "Payroll & CIS",
    readTime: "5 min read",
    author: "Asim Malik, FCCA",
    authorRole: "Partner",
    authorInitials: "AM",
    publishedDate: "2025-04-21",
    publishedLabel: "Published Apr 2025",
    image: "/images/payroll.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Once a limited company pays people — including directors — PAYE systems and Real Time Information (RTI) submissions usually enter the picture. Errors compound quickly through payslips, pensions and year-end forms.",
      },
      {
        type: "h2",
        text: "Core moving parts",
      },
      {
        type: "ul",
        items: [
          "Register as an employer when required",
          "Run payroll with correct tax codes and NI categories",
          "Submit RTI on or before payday",
          "Pay PAYE and NI to HMRC by the due date",
          "Assess auto-enrolment duties for staff",
          "Issue payslips and keep starter/leaver records",
        ],
      },
      {
        type: "h2",
        text: "Directors on payroll",
      },
      {
        type: "p",
        text: "Many owner-managers take a modest salary and balance the rest with dividends. The salary level affects NI, pension contributions and qualifying years for state pension. Payroll must reflect what is actually paid.",
      },
      {
        type: "callout",
        text: "Late RTI and missed PAYE payments attract attention. Align payday, software submission and bank payment in one routine.",
      },
      {
        type: "p",
        text: "We run payroll for small companies alongside bookkeeping so salary, tax and accounts stay consistent.",
      },
    ],
  },
  {
    slug: "self-assessment-deadlines-sole-traders",
    title: "Self Assessment Deadlines Sole Traders Should Never Miss",
    excerpt:
      "Key dates, payment on account and the habits that make January less stressful for sole traders and landlords.",
    category: "HMRC & Tax Deadlines",
    readTime: "4 min read",
    author: "Asif Chaudhry, FCCA",
    authorRole: "Managing Director & Senior Lead",
    authorInitials: "AC",
    publishedDate: "2025-03-11",
    publishedLabel: "Published Mar 2025",
    image: "/images/taxreturn.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Self Assessment is still the backbone of tax reporting for sole traders, many landlords and people with untaxed income. Missing dates is expensive; preparing early is not.",
      },
      {
        type: "h2",
        text: "Dates to lock in your calendar",
      },
      {
        type: "p",
        text: "Online filing deadlines, balancing payments and payments on account follow a familiar annual rhythm. Check the current tax year’s dates on GOV.UK each year rather than relying on memory — and set reminders a month ahead.",
      },
      {
        type: "h2",
        text: "Payments on account",
      },
      {
        type: "p",
        text: "If your tax bill is high enough, HMRC requires payments on account toward the following year. That surprises people who only budget for one January payment. Your accountant should flag whether payments on account apply.",
      },
      {
        type: "callout",
        text: "Spread money into a tax savings pot monthly. January is easier when the cash is already set aside.",
      },
      {
        type: "h2",
        text: "Records that speed up your return",
      },
      {
        type: "ul",
        items: [
          "Business income totals and bank statements",
          "Expense receipts organised by category",
          "Mileage logs",
          "Property income and finance costs for landlords",
          "P60/P45 and other tax deducted at source",
        ],
      },
      {
        type: "p",
        text: "Finspark prepares Self Assessment returns from organised digital records and explains the bill before you pay it.",
      },
    ],
  },
  {
    slug: "first-year-limited-company-checklist",
    title: "Your First Year as a Limited Company: Checklist for New Directors",
    excerpt:
      "From bank accounts and bookkeeping to PAYE, VAT and first accounts — a grounded checklist for newly incorporated companies.",
    category: "Limited Company Strategy",
    readTime: "6 min read",
    author: "Asim Malik, FCCA",
    authorRole: "Partner",
    authorInitials: "AM",
    publishedDate: "2025-02-08",
    publishedLabel: "Published Feb 2025",
    image: "/images/handshake.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Incorporation is the easy bit. The first twelve months set habits that either make compliance smooth or create a mess at first year-end.",
      },
      {
        type: "h2",
        text: "Set up foundations early",
      },
      {
        type: "ul",
        items: [
          "Open a dedicated business bank account",
          "Choose bookkeeping software and connect feeds",
          "Issue invoices under the company name with correct details",
          "Decide director salary and set up payroll if needed",
          "Record any director loans clearly",
          "Keep personal spending out of the company account",
        ],
      },
      {
        type: "h2",
        text: "Registrations to consider",
      },
      {
        type: "p",
        text: "PAYE, VAT and pensions duties depend on what the company does and earns. Not every new company needs all of them on day one — but ignoring a required registration is costly.",
      },
      {
        type: "h2",
        text: "First accounts and corporation tax",
      },
      {
        type: "p",
        text: "Your accounting reference date drives filing deadlines. Know those dates from month one. First accounts can be a short or long period depending on how you incorporated; plan for the workload either way.",
      },
      {
        type: "callout",
        text: "A short monthly bookkeeping rhythm in year one is cheaper than a full reconstruction at month twelve.",
      },
      {
        type: "p",
        text: "We support new companies with formation follow-through, bookkeeping and first-year accounts so directors can focus on winning work.",
      },
    ],
  },
  {
    slug: "xero-bookkeeping-good-habits",
    title: "Xero Bookkeeping Habits That Keep Your Accounts Clean",
    excerpt:
      "Bank rules, monthly reconciliation and coding discipline — the habits that make HMRC filings and year-end smoother.",
    category: "Small Business & Sole Traders",
    readTime: "5 min read",
    author: "Asif Chaudhry, FCCA",
    authorRole: "Managing Director & Senior Lead",
    authorInitials: "AC",
    publishedDate: "2025-01-19",
    publishedLabel: "Published Jan 2025",
    image: "/images/bookkeeping.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Software does not replace discipline. Xero (or QuickBooks) only helps if transactions are coded, reconciled and reviewed on a steady cycle.",
      },
      {
        type: "h2",
        text: "Weekly and monthly habits",
      },
      {
        type: "ul",
        items: [
          "Reconcile every business bank and card account monthly at minimum",
          "Code suspense items the same week they appear",
          "Attach bills and receipts to transactions",
          "Review aged receivables and chase overdue invoices",
          "Check VAT codes on unusual transactions",
        ],
      },
      {
        type: "h2",
        text: "Bank rules are helpers, not autopilot",
      },
      {
        type: "p",
        text: "Automatic rules speed up recurring entries but can miscode when a payment looks familiar and is not. Spot-check rule-driven entries each month.",
      },
      {
        type: "callout",
        text: "Unreconciled accounts are the number one reason year-end takes longer than clients expect.",
      },
      {
        type: "p",
        text: "Finspark provides ongoing bookkeeping support on cloud platforms so your records stay filing-ready throughout the year.",
      },
    ],
  },
  {
    slug: "directors-dividends-salary-basics",
    title: "Director Salary and Dividends: The Basics in Plain English",
    excerpt:
      "How salary and dividends differ, why both appear in owner-managed companies, and what records you should keep.",
    category: "Limited Company Strategy",
    readTime: "5 min read",
    author: "Asim Malik, FCCA",
    authorRole: "Partner",
    authorInitials: "AM",
    publishedDate: "2024-12-03",
    publishedLabel: "Published Dec 2024",
    image: "/images/companytax.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Owner-managed limited companies often pay directors a salary through PAYE and distribute remaining profits as dividends. Mixing the two without records causes confusion in accounts and with HMRC.",
      },
      {
        type: "h2",
        text: "Salary",
      },
      {
        type: "p",
        text: "Salary is a deductible cost for the company and is subject to PAYE and National Insurance rules. It needs payroll processing when you are an employer. Salary can support pension contributions and National Insurance credit history.",
      },
      {
        type: "h2",
        text: "Dividends",
      },
      {
        type: "p",
        text: "Dividends are paid from profits after corporation tax. They are not a substitute for random drawings. You need sufficient reserves, proper decisions and dividend documentation. Personal tax on dividends depends on your overall income and available allowances.",
      },
      {
        type: "callout",
        text: "Taking money out of the company without classifying it as salary, dividend or loan creates director loan account problems.",
      },
      {
        type: "h2",
        text: "Plan with current rates",
      },
      {
        type: "p",
        text: "Optimal mixes change when tax rates, NI or dividend allowances change. Review the plan annually rather than copying a structure from a forum post.",
      },
      {
        type: "p",
        text: "We help directors set a clear extraction plan and keep payroll and dividend records aligned with the accounts.",
      },
    ],
  },
  {
    slug: "choosing-an-accountant-what-to-ask",
    title: "Choosing an Accountant: Questions Worth Asking",
    excerpt:
      "Fees, software, response times and who actually does your work — a shortlist of questions before you switch or appoint a firm.",
    category: "Small Business & Sole Traders",
    readTime: "4 min read",
    author: "Asif Chaudhry, FCCA",
    authorRole: "Managing Director & Senior Lead",
    authorInitials: "AC",
    publishedDate: "2024-11-15",
    publishedLabel: "Published Nov 2024",
    image: "/images/contact.webp",
    featured: false,
    content: [
      {
        type: "p",
        text: "Price alone is a weak way to choose an accountant. The right questions reveal how the firm works and whether they fit how you run your business.",
      },
      {
        type: "h2",
        text: "Service and access",
      },
      {
        type: "ul",
        items: [
          "Who will handle my work day to day?",
          "How quickly do you respond to email or phone queries?",
          "Do you explain options in plain English?",
          "Is fixed monthly pricing available for ongoing work?",
        ],
      },
      {
        type: "h2",
        text: "Software and process",
      },
      {
        type: "ul",
        items: [
          "Which cloud platforms do you support?",
          "How do you collect records each month?",
          "What does the year-end timeline look like?",
          "Will you help with MTD readiness?",
        ],
      },
      {
        type: "h2",
        text: "Scope and fees",
      },
      {
        type: "p",
        text: "Ask what is included: bookkeeping, VAT, payroll, accounts, Self Assessment, CIS, ad hoc advice. Unexpected hourly bills often come from unclear scope, not from “expensive” firms alone.",
      },
      {
        type: "callout",
        text: "A good introductory conversation should feel clear and calm. If explanations are vague now, they will not improve after you sign.",
      },
      {
        type: "p",
        text: "Finspark is built around direct access to experienced advisers, cloud bookkeeping and transparent monthly packages for small businesses and contractors.",
      },
    ],
  },
  {
    slug: "hmrc-penalties-how-to-avoid-them",
    title: "HMRC Penalties: The Ones Small Businesses Trigger Most",
    excerpt:
      "Late returns, late payments and careless records — how common penalties arise and the simple habits that prevent them.",
    category: "HMRC & Tax Deadlines",
    readTime: "5 min read",
    author: "Asim Malik, FCCA",
    authorRole: "Partner",
    authorInitials: "AM",
    publishedDate: "2024-10-02",
    publishedLabel: "Published Oct 2024",
    image: "/images/Faq.jpg",
    featured: false,
    content: [
      {
        type: "p",
        text: "Most penalties we see are not about elaborate avoidance schemes. They come from missed dates, ignored post and bookkeeping left too late.",
      },
      {
        type: "h2",
        text: "High-frequency triggers",
      },
      {
        type: "ul",
        items: [
          "Late Self Assessment filing or payment",
          "Late company accounts at Companies House",
          "Late VAT returns or VAT payments",
          "Late CIS returns",
          "PAYE payment failures",
          "Failure to notify chargeability or register when required",
        ],
      },
      {
        type: "h2",
        text: "Prevention beats appeal",
      },
      {
        type: "p",
        text: "Shared calendars, automated software reminders and a monthly bookkeeping close catch problems early. Appeals sometimes succeed for reasonable excuse — but relying on appeals is not a control system.",
      },
      {
        type: "callout",
        text: "If you receive an HMRC letter you do not understand, forward it to your accountant the same day. Silence rarely helps.",
      },
      {
        type: "p",
        text: "We monitor filing calendars for clients and keep digital records in shape so deadlines are met as a matter of routine.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}

export function getFeaturedPost() {
  return posts.find((p) => p.featured) || posts[0];
}

export function getRecentPosts(excludeSlug) {
  return posts.filter((p) => p.slug !== excludeSlug && !p.featured);
}

export function getRelatedPosts(category, excludeSlug, limit = 3) {
  const same = posts.filter(
    (p) => p.category === category && p.slug !== excludeSlug,
  );
  if (same.length >= limit) return same.slice(0, limit);
  const extra = posts.filter(
    (p) => p.slug !== excludeSlug && p.category !== category,
  );
  return [...same, ...extra].slice(0, limit);
}
