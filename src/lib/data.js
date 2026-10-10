import {
  TrendingUp,
  PieChart,
  BarChart3,
  ShieldCheck,
  Calculator,
  Coins,
  CheckCircle2,
  Building,
  Users,
} from "lucide-react";

export const servicesData = [
  {
    id: "bookkeeping-vat",
    slug: "bookkeeping-vat",
    title: "Bookkeeping & VAT Returns",
    description:
      "Making Tax Digital (MTD) compliant workflows. We reconcile bank statements, log expenses, and submit flawless quarterly VAT returns on time.",
    points: [
      "Cloud software setups (Xero, QuickBooks)",
      "Digital ledger management & MTD VAT filing",
    ],
    icon: "Calculator",
    href: "/services/bookkeeping-vat",

    banner: {
      badge: "Core Accountancy Service",
      subBadge: "Weekly & Monthly Support",
      subHeading: "Accurate bookkeeping, handled properly — and on time.",
      image: "/images/Faq.jpg",
    },

    featuresSection: {
      tag: "STRESS-FREE COMPLIANCE",
      heading: "Professional bookkeeping that keeps your business on track",
      intro: [
        "Keeping your bookkeeping up to date is essential for understanding your finances, meeting HMRC requirements, and avoiding unnecessary stress. At Finspark Accounting, we provide reliable bookkeeping services that give you clarity, confidence, and control over your numbers.",
        "We don't just record transactions and disappear. Our team is proactive, responsive, and easy to contact, so if you have a question or something doesn't look right, you can get it sorted quickly.",
      ],
      items: [
        {
          title: "Recording income and expenditure",
          description:
            "Keeping every sale and expense accurately logged, so your figures always reflect reality without guesswork.",
          tag: "Granular tracking",
          icon: "Receipt",
        },
        {
          title: "Year-end preparation",
          description:
            "Keeping everything ready for year-end accounts to make your annual tax filing smoother, faster, and far less stressful.",
          tag: "Audit-ready files",
          icon: "Calendar",
        },
        {
          title: "Bank & credit reconciliations",
          description:
            "Matching your accounts directly to bank and card statements to ensure nothing is missing, double-counted, or incorrect.",
          tag: "Exact balance matching",
          icon: "Landmark",
        },
        {
          title: "Organising receipts & data",
          description:
            "Turning paperwork, PDFs, and smartphone photos into clean, structured digital entries with zero missing receipts.",
          tag: "Cloud document capture",
          icon: "Folder",
        },
        {
          title: "Maintaining accurate records",
          description:
            "Keeping your books regularly updated across all twelve months, completely eliminating the deadline panic.",
          tag: "Continuous management",
          icon: "RefreshCw",
        },
        {
          title: "Preparing records for VAT",
          description:
            "Ensuring your figures are verified, VAT-ready, and formatted for Making Tax Digital (MTD) before submission.",
          tag: "MTD compliant",
          icon: "FileText",
        },
      ],
    },

    audienceSection: {
      tag: "TAILORED ACCOUNTING SUPPORT",
      heading: "Who our bookkeeping services are for",
      subHeading:
        "Whether you're starting out or running a multi-team company, we adapt to the cadence of your daily operations.",
      items: [
        {
          title: "Sole Traders",
          description:
            "If you're running your business on your own, bookkeeping can quickly become time-consuming. We provide clarity, handle HMRC filings, and explain your cash flow in plain English.",
          tag: "Clarity & Compliance",
          icon: "User",
        },
        {
          title: "Limited Companies",
          description:
            "Essential foundation for corporate tax, VAT returns, payroll, and directors' loans. Consistent bookkeeping that keeps management accounts in flawless shape.",
          tag: "Structured Reporting",
          icon: "Building2",
        },
        {
          title: "Trades & Services",
          description:
            "Handling frequent payments, supplier invoices, material costs, and CIS deductions. Clean records so you never face end-of-quarter or supplier panics.",
          tag: "High Transaction Flow",
          icon: "Wrench",
        },
        {
          title: "Growing Businesses",
          description:
            "Business owners wanting to reclaim evenings and weekends. Eliminate financial admin stress with a responsive team that proactively spots discrepancies.",
          tag: "Time Reclaimed",
          icon: "Clock",
        },
      ],
    },

    workflowSection: {
      tag: "DIGITAL CLOUD ECOSYSTEM",
      heading: "How we make daily bookkeeping effortless for you",
      subHeading:
        "Forget shoe boxes of paper receipts. Whether you snap pictures of receipts on your mobile or automatically sync bank feeds through cloud software, Finspark integrates seamlessly with the software you prefer.",
      steps: [
        {
          num: "1",
          title: "Snap & Upload",
          description:
            "Drop photos of receipts or email electronic invoices directly into your dedicated client hub.",
        },
        {
          num: "2",
          title: "Reconcile & Validate",
          description:
            "Our bookkeepers categorise every expense according to HMRC rules and reconcile against your bank feed.",
        },
        {
          num: "3",
          title: "Review & Relax",
          description:
            "Gain clear, real-time reports whenever you need to see your profit, VAT position, or cash balance.",
        },
      ],
      platforms: [
        {
          title: "Xero Accounting",
          desc: "Gold Partner setup, migrations & day-to-day oversight.",
        },
        {
          title: "QuickBooks",
          desc: "Comprehensive ProAdvisor workflows & bank feeds.",
        },
        {
          title: "Dext & Hubdoc",
          desc: "Instant optical receipt capture and automatic filing.",
        },
        {
          title: "Sage & Bespoke",
          desc: "Custom legacy conversions and spreadsheet transfers.",
        },
      ],
    },
  },

  {
    id: "company-accounts-tax",
    slug: "company-accounts-tax",
    title: "Company Accounts & Tax Return",
    description:
      "Statutory Companies House submissions and Corporation Tax (CT600) filings. We systematically identify allowances to reduce your tax burden.",
    points: [
      "Complete statutory financial statements",
      "Corporate tax planning & relief reviews",
    ],
    icon: "Building2",
    href: "/services/company-accounts-tax",

    banner: {
      badge: "Corporate Tax & Filing",
      subBadge: "Companies House & HMRC Compliant",
      subHeading: "Flawless corporate accounts with optimized tax efficiency.",
      image: "/images/Faq.jpg",
    },

    featuresSection: {
      tag: "CORPORATE ACCOUNTING",
      heading: "Statutory accounts prepared with precision & foresight",
      intro: [
        "Filing corporate financial statements doesn't have to be a yearly scramble. We prepare full statutory accounts for limited companies, ensuring strict adherence to UK GAAP and IFRS rules.",
        "We proactively examine every allowable business expense, capital allowance, and director tax band to minimize your Corporation Tax liability legally.",
      ],
      items: [
        {
          title: "Full Statutory Year-End Accounts",
          description:
            "Comprehensive balance sheets, profit and loss statements, and notes prepared for shareholders and directors.",
          tag: "Statutory Reporting",
          icon: "FileSpreadsheet",
        },
        {
          title: "Corporation Tax Filings (CT600)",
          description:
            "Accurate calculation and electronic submission of your annual CT600 return directly to HMRC.",
          tag: "HMRC Submission",
          icon: "Calculator",
        },
        {
          title: "Capital Allowances Review",
          description:
            "Maximizing claims on machinery, vehicle, and tech investments to offset corporate profits.",
          tag: "Tax Savings",
          icon: "Coins",
        },
        {
          title: "Companies House Filings",
          description:
            "Submitting micro-entity or small company abridged accounts accurately and well ahead of statutory deadlines.",
          tag: "Deadline Guarantee",
          icon: "ShieldCheck",
        },
      ],
    },

    audienceSection: {
      tag: "WHO IT IS FOR",
      heading: "Tailored corporate accounting for incorporated businesses",
      subHeading:
        "Designed for business directors who want total compliance peace of mind and strategic tax planning.",
      items: [
        {
          title: "Single-Director Companies",
          description:
            "Optimize salary and dividend splits to minimize tax exposure while staying compliant.",
          tag: "Dividend Optimization",
          icon: "User",
        },
        {
          title: "Multi-Shareholder Entities",
          description:
            "Clear, transparent profit allocations and statutory accounting for board and investor meetings.",
          tag: "Investor Grade",
          icon: "Building2",
        },
        {
          title: "Fast-Growing Tech & Services",
          description:
            "Year-round tax advice and cash flow insight as your turnover and operational complexity scale up.",
          tag: "Scale-Up Support",
          icon: "TrendingUp",
        },
      ],
    },
    workflowSection: {
      tag: "DIGITAL CLOUD ECOSYSTEM",
      heading: "How we make daily bookkeeping effortless for you",
      subHeading:
        "Forget shoe boxes of paper receipts. Whether you snap pictures of receipts on your mobile or automatically sync bank feeds through cloud software, Finspark integrates seamlessly with the software you prefer.",
      steps: [
        {
          num: "1",
          title: "Snap & Upload",
          description:
            "Drop photos of receipts or email electronic invoices directly into your dedicated client hub.",
        },
        {
          num: "2",
          title: "Reconcile & Validate",
          description:
            "Our bookkeepers categorise every expense according to HMRC rules and reconcile against your bank feed.",
        },
        {
          num: "3",
          title: "Review & Relax",
          description:
            "Gain clear, real-time reports whenever you need to see your profit, VAT position, or cash balance.",
        },
      ],
      platforms: [
        {
          title: "Xero Accounting",
          desc: "Gold Partner setup, migrations & day-to-day oversight.",
        },
        {
          title: "QuickBooks",
          desc: "Comprehensive ProAdvisor workflows & bank feeds.",
        },
        {
          title: "Dext & Hubdoc",
          desc: "Instant optical receipt capture and automatic filing.",
        },
        {
          title: "Sage & Bespoke",
          desc: "Custom legacy conversions and spreadsheet transfers.",
        },
      ],
    },
  },

  {
    id: "payroll",
    slug: "payroll",
    title: "Payroll & Auto-Enrolment",
    description:
      "Hassle-free PAYE payroll management, automated employee digital payslips, workplace pension compliance, and CIS monthly returns.",
    points: [
      "RTI submissions directly to HMRC",
      "Pension compliance & CIS subcontractor statements",
    ],
    icon: "Users",
    href: "/services/payroll",

    banner: {
      badge: "PAYE & Auto-Enrolment",
      subBadge: "Timely & Accurate Pay Runs",
      subHeading: "Seamless payroll management for teams of all sizes.",
      image: "/images/Faq.jpg",
    },

    featuresSection: {
      tag: "PEOPLE & PAYROLL",
      heading:
        "Reliable payroll processing with full workplace pension management",
      intro: [
        "Paying your team correctly and on time is vital for staff retention and legal compliance. We manage your entire payroll pipeline—from wage calculations to digital payslips.",
        "We also manage workplace pension auto-enrolment contributions and file monthly CIS returns for construction subcontractors.",
      ],
      items: [
        {
          title: "Real Time Information (RTI)",
          description:
            "Automated Full Payment Submissions (FPS) and Employer Payment Summaries (EPS) filed directly to HMRC.",
          tag: "Instant HMRC Sync",
          icon: "RefreshCw",
        },
        {
          title: "Digital Employee Payslips",
          description:
            "Secure cloud access for employees to download payslips, P60s, and P45s anytime.",
          tag: "Paperless Access",
          icon: "FileText",
        },
        {
          title: "Auto-Enrolment Pensions",
          description:
            "Assessment of staff eligibility, pension declaration filing, and monthly contribution submissions.",
          tag: "Pension Compliance",
          icon: "ShieldCheck",
        },
        {
          title: "CIS Subcontractor Filings",
          description:
            "Monthly Construction Industry Scheme deductions, verification, and deduction statements.",
          tag: "Construction Ready",
          icon: "Wrench",
        },
      ],
    },

    audienceSection: {
      tag: "WHO IT IS FOR",
      heading: "Complete payroll coverage for employers & contractors",
      subHeading:
        "Whether you employ 1 person or 50, we remove the burden of payroll calculations and pensions.",
      items: [
        {
          title: "Small Businesses & Startups",
          description:
            "Avoid expensive dedicated in-house HR software and run smooth monthly salary processing.",
          tag: "Cost Effective",
          icon: "Users",
        },
        {
          title: "Construction Firms & Contractors",
          description:
            "Stress-free CIS verification and monthly deduction filings for all active site subcontractors.",
          tag: "CIS Managed",
          icon: "Wrench",
        },
      ],
    },
    workflowSection: {
      tag: "DIGITAL CLOUD ECOSYSTEM",
      heading: "How we make daily bookkeeping effortless for you",
      subHeading:
        "Forget shoe boxes of paper receipts. Whether you snap pictures of receipts on your mobile or automatically sync bank feeds through cloud software, Finspark integrates seamlessly with the software you prefer.",
      steps: [
        {
          num: "1",
          title: "Snap & Upload",
          description:
            "Drop photos of receipts or email electronic invoices directly into your dedicated client hub.",
        },
        {
          num: "2",
          title: "Reconcile & Validate",
          description:
            "Our bookkeepers categorise every expense according to HMRC rules and reconcile against your bank feed.",
        },
        {
          num: "3",
          title: "Review & Relax",
          description:
            "Gain clear, real-time reports whenever you need to see your profit, VAT position, or cash balance.",
        },
      ],
      platforms: [
        {
          title: "Xero Accounting",
          desc: "Gold Partner setup, migrations & day-to-day oversight.",
        },
        {
          title: "QuickBooks",
          desc: "Comprehensive ProAdvisor workflows & bank feeds.",
        },
        {
          title: "Dext & Hubdoc",
          desc: "Instant optical receipt capture and automatic filing.",
        },
        {
          title: "Sage & Bespoke",
          desc: "Custom legacy conversions and spreadsheet transfers.",
        },
      ],
    },
  },

  {
    id: "self-assessment",
    slug: "self-assessment",
    title: "Self Assessment Tax Returns",
    description:
      "Stress-free personal tax returns for sole traders, company directors, partners, and landlords. No last-minute January panic or penalty stress.",
    points: [
      "Allowable expense optimization",
      "Rental income & dividend tax calculations",
    ],
    icon: "FileCheck",
    href: "/services/self-assessment",

    banner: {
      badge: "Personal Tax Services",
      subBadge: "January Panic Free",
      subHeading:
        "Accurate, stress-free personal tax filing for peace of mind.",
      image: "/images/Faq.jpg",
    },

    featuresSection: {
      tag: "PERSONAL TAX FILING",
      heading: "Maximize allowable expenses and avoid late HMRC penalties",
      intro: [
        "Navigating personal tax returns can be confusing. We ensure every valid allowance and claimable expense is factored in so you never pay a penny more in tax than necessary.",
        "We calculate your payments on account, clarify your exact bill months in advance, and file early to eliminate January deadline stress.",
      ],
      items: [
        {
          title: "Sole Trader Income Tax",
          description:
            "Detailed profit calculation, expense reconciliation, and class 2/4 National Insurance adjustments.",
          tag: "Sole Trader Specific",
          icon: "User",
        },
        {
          title: "Landlord Tax Returns",
          description:
            "Section 24 mortgage interest relief calculations and property profit optimization.",
          tag: "Property Specialists",
          icon: "Building",
        },
        {
          title: "Director Dividend Declarations",
          description:
            "Reconciling dividend income and multi-source earnings for company executives.",
          tag: "Executive Tax",
          icon: "Coins",
        },
      ],
    },

    audienceSection: {
      tag: "WHO IT IS FOR",
      heading: "Personalized tax support for individuals & property owners",
      subHeading:
        "For anyone receiving non-PAYE income or requiring annual HMRC reporting.",
      items: [
        {
          title: "Sole Traders & Freelancers",
          description:
            "Keep your personal trading accounts compliant and tax-optimized.",
          tag: "Self-Employed",
          icon: "User",
        },
        {
          title: "Buy-to-Let Landlords",
          description:
            "Clear reporting on rental profits, capital improvements, and allowable deductions.",
          tag: "Landlords",
          icon: "Building",
        },
      ],
    },
    workflowSection: {
      tag: "DIGITAL CLOUD ECOSYSTEM",
      heading: "How we make daily bookkeeping effortless for you",
      subHeading:
        "Forget shoe boxes of paper receipts. Whether you snap pictures of receipts on your mobile or automatically sync bank feeds through cloud software, Finspark integrates seamlessly with the software you prefer.",
      steps: [
        {
          num: "1",
          title: "Snap & Upload",
          description:
            "Drop photos of receipts or email electronic invoices directly into your dedicated client hub.",
        },
        {
          num: "2",
          title: "Reconcile & Validate",
          description:
            "Our bookkeepers categorise every expense according to HMRC rules and reconcile against your bank feed.",
        },
        {
          num: "3",
          title: "Review & Relax",
          description:
            "Gain clear, real-time reports whenever you need to see your profit, VAT position, or cash balance.",
        },
      ],
      platforms: [
        {
          title: "Xero Accounting",
          desc: "Gold Partner setup, migrations & day-to-day oversight.",
        },
        {
          title: "QuickBooks",
          desc: "Comprehensive ProAdvisor workflows & bank feeds.",
        },
        {
          title: "Dext & Hubdoc",
          desc: "Instant optical receipt capture and automatic filing.",
        },
        {
          title: "Sage & Bespoke",
          desc: "Custom legacy conversions and spreadsheet transfers.",
        },
      ],
    },
  },

  {
    id: "capital-gains",
    slug: "capital-gains",
    title: "Capital Gains Tax Returns",
    description:
      "Expert guidance and timely reporting for property sales, crypto, shares, and asset disposals within strict HMRC 60-day filing deadlines.",
    points: [
      "UK property disposal 60-day reporting",
      "Maximum relief & tax allowance utilization",
    ],
    icon: "TrendingUp",
    href: "/services/capital-gains",

    banner: {
      badge: "Capital Assets & CGT",
      subBadge: "60-Day HMRC Deadline Compliant",
      subHeading:
        "Protect your capital assets and meet strict UK disposal deadlines.",
      image: "/images/Faq.jpg",
    },

    featuresSection: {
      tag: "ASSET TAXATION",
      heading: "Fast 60-day property disposal reporting & relief claims",
      intro: [
        "Disposing of UK residential property or high-value assets triggers strict 60-day reporting and payment rules with HMRC.",
        "We calculate your exact capital gains tax liability, factor in annual exempt amounts, and file your UK Property Return on time.",
      ],
      items: [
        {
          title: "60-Day UK Property Disposals",
          description:
            "Immediate calculation and filing for buy-to-let, second home, or land sales within HMRC deadlines.",
          tag: "Fast Action Required",
          icon: "Clock",
        },
        {
          title: "Shares & Crypto Portfolio CGT",
          description:
            "Pooling calculations, bed-and-breakfasting checks, and tax calculations for investment sales.",
          tag: "Portfolio Analysis",
          icon: "TrendingUp",
        },
      ],
    },

    audienceSection: {
      tag: "WHO IT IS FOR",
      heading: "Targeted support for property & financial asset sellers",
      subHeading:
        "For individuals or directors selling high-value investments or UK real estate.",
      items: [
        {
          title: "Property Investors & Sellers",
          description:
            "Avoid steep HMRC late-filing fines on residential sales.",
          tag: "60-Day Ready",
          icon: "Building",
        },
        {
          title: "Crypto & Stock Investors",
          description:
            "Accurate transaction tracking and allowable loss harvesting.",
          tag: "Investor Relief",
          icon: "Coins",
        },
      ],
    },
    workflowSection: {
      tag: "DIGITAL CLOUD ECOSYSTEM",
      heading: "How we make daily bookkeeping effortless for you",
      subHeading:
        "Forget shoe boxes of paper receipts. Whether you snap pictures of receipts on your mobile or automatically sync bank feeds through cloud software, Finspark integrates seamlessly with the software you prefer.",
      steps: [
        {
          num: "1",
          title: "Snap & Upload",
          description:
            "Drop photos of receipts or email electronic invoices directly into your dedicated client hub.",
        },
        {
          num: "2",
          title: "Reconcile & Validate",
          description:
            "Our bookkeepers categorise every expense according to HMRC rules and reconcile against your bank feed.",
        },
        {
          num: "3",
          title: "Review & Relax",
          description:
            "Gain clear, real-time reports whenever you need to see your profit, VAT position, or cash balance.",
        },
      ],
      platforms: [
        {
          title: "Xero Accounting",
          desc: "Gold Partner setup, migrations & day-to-day oversight.",
        },
        {
          title: "QuickBooks",
          desc: "Comprehensive ProAdvisor workflows & bank feeds.",
        },
        {
          title: "Dext & Hubdoc",
          desc: "Instant optical receipt capture and automatic filing.",
        },
        {
          title: "Sage & Bespoke",
          desc: "Custom legacy conversions and spreadsheet transfers.",
        },
      ],
    },
  },

  {
    id: "secretarial",
    slug: "secretarial",
    title: "Secretarial & Statutory Work",
    description:
      "Keep your company fully compliant with Companies House requirements. We handle annual filings, record management, and official registers.",
    points: [
      "Annual Confirmation Statement filings",
      "Shareholder & director register maintenance",
    ],
    icon: "ShieldCheck",
    href: "/services/secretarial",

    banner: {
      badge: "Corporate Governance",
      subBadge: "Companies House Registered",
      subHeading: "Keep your legal business register up-to-date and compliant.",
      image: "/images/Faq.jpg",
    },

    featuresSection: {
      tag: "CORPORATE COMPLIANCE",
      heading: "Statutory governance & official register management",
      intro: [
        "Company secretarial duties are essential to maintaining your business's legal standing with Companies House.",
        "We manage your annual confirmation statements, share issuance records, and official director change notifications seamlessly.",
      ],
      items: [
        {
          title: "Confirmation Statement Filings",
          description:
            "Filing mandatory annual statutory updates regarding company structure, PSCs, and registered addresses.",
          tag: "Statutory Duty",
          icon: "ShieldCheck",
        },
        {
          title: "Share Capital & Director Changes",
          description:
            "Issuing new shares, recording transfers, and updating board director changes accurately.",
          tag: "Corporate Records",
          icon: "Users",
        },
      ],
    },

    audienceSection: {
      tag: "WHO IT IS FOR",
      heading: "Essential governance for all registered limited companies",
      subHeading:
        "Keep your company details verified and compliant at Companies House.",
      items: [
        {
          title: "Active Limited Companies",
          description:
            "Ensure your business never gets struck off due to missed statutory filings.",
          tag: "Legal Security",
          icon: "Building2",
        },
      ],
    },
    workflowSection: {
      tag: "DIGITAL CLOUD ECOSYSTEM",
      heading: "How we make daily bookkeeping effortless for you",
      subHeading:
        "Forget shoe boxes of paper receipts. Whether you snap pictures of receipts on your mobile or automatically sync bank feeds through cloud software, Finspark integrates seamlessly with the software you prefer.",
      steps: [
        {
          num: "1",
          title: "Snap & Upload",
          description:
            "Drop photos of receipts or email electronic invoices directly into your dedicated client hub.",
        },
        {
          num: "2",
          title: "Reconcile & Validate",
          description:
            "Our bookkeepers categorise every expense according to HMRC rules and reconcile against your bank feed.",
        },
        {
          num: "3",
          title: "Review & Relax",
          description:
            "Gain clear, real-time reports whenever you need to see your profit, VAT position, or cash balance.",
        },
      ],
      platforms: [
        {
          title: "Xero Accounting",
          desc: "Gold Partner setup, migrations & day-to-day oversight.",
        },
        {
          title: "QuickBooks",
          desc: "Comprehensive ProAdvisor workflows & bank feeds.",
        },
        {
          title: "Dext & Hubdoc",
          desc: "Instant optical receipt capture and automatic filing.",
        },
        {
          title: "Sage & Bespoke",
          desc: "Custom legacy conversions and spreadsheet transfers.",
        },
      ],
    },
  },

  {
    id: "adhoc-mortgage",
    slug: "adhoc-mortgage",
    title: "Adhoc Work & Mortgage Support",
    description:
      "Fast, certified accountant certificates and administrative verification for mortgage applications, tenancy checks, and official loan approvals.",
    points: [
      "Accountant reference letters for mortgages",
      "Income verification & SA302 calculations",
    ],
    icon: "FileSpreadsheet",
    href: "/services/adhoc-mortgage",

    banner: {
      badge: "Verification & Certificates",
      subBadge: "Fast Turnaround",
      subHeading:
        "Certified accountant letters to secure your mortgage or business loans.",
      image: "/images/Faq.jpg",
    },

    featuresSection: {
      tag: "EXPERT CERTIFICATION",
      heading: "Fast accountant references for lenders & brokers",
      intro: [
        "Lenders and mortgage brokers frequently require signed accountant certificates and SA302 forms to prove self-employed or director income.",
        "We issue verified reference letters, certify financial statements, and provide official income verification to help secure your property.",
      ],
      items: [
        {
          title: "Mortgage Reference Letters",
          description:
            "Certified earnings statements and director dividend verification accepted by UK lenders.",
          tag: "Broker Approved",
          icon: "CheckCircle2",
        },
        {
          title: "SA302 & Tax Overview Downloads",
          description:
            "Extracting official HMRC tax calculation summaries for immediate submission.",
          tag: "HMRC Verified",
          icon: "FileText",
        },
      ],
    },

    audienceSection: {
      tag: "WHO IT IS FOR",
      heading:
        "Fast-track verification for directors, sole traders & landlords",
      subHeading:
        "Get your earnings certified quickly when applying for personal or commercial loans.",
      items: [
        {
          title: "Company Directors & Self-Employed",
          description:
            "Prove your historical earnings and future dividend projections to lenders.",
          tag: "Fast Track",
          icon: "User",
        },
      ],
    },
    workflowSection: {
      tag: "DIGITAL CLOUD ECOSYSTEM",
      heading: "How we make daily bookkeeping effortless for you",
      subHeading:
        "Forget shoe boxes of paper receipts. Whether you snap pictures of receipts on your mobile or automatically sync bank feeds through cloud software, Finspark integrates seamlessly with the software you prefer.",
      steps: [
        {
          num: "1",
          title: "Snap & Upload",
          description:
            "Drop photos of receipts or email electronic invoices directly into your dedicated client hub.",
        },
        {
          num: "2",
          title: "Reconcile & Validate",
          description:
            "Our bookkeepers categorise every expense according to HMRC rules and reconcile against your bank feed.",
        },
        {
          num: "3",
          title: "Review & Relax",
          description:
            "Gain clear, real-time reports whenever you need to see your profit, VAT position, or cash balance.",
        },
      ],
      platforms: [
        {
          title: "Xero Accounting",
          desc: "Gold Partner setup, migrations & day-to-day oversight.",
        },
        {
          title: "QuickBooks",
          desc: "Comprehensive ProAdvisor workflows & bank feeds.",
        },
        {
          title: "Dext & Hubdoc",
          desc: "Instant optical receipt capture and automatic filing.",
        },
        {
          title: "Sage & Bespoke",
          desc: "Custom legacy conversions and spreadsheet transfers.",
        },
      ],
    },
  },
];

export const serviceLinks = [
  { name: "Bookkeeping & VAT", href: "/services/bookkeeping-vat" },
  { name: "Company Accounts & Tax", href: "/services/company-accounts-tax" },
  { name: "Self Assessment", href: "/services/self-assessment" },
  { name: "Payroll", href: "/services/payroll" },
  { name: "Capital Gains", href: "/services/capital-gains" },
  { name: "Secretarial Work", href: "/services/secretarial" },
  { name: "Adhoc & Mortgage Support", href: "/services/adhoc-mortgage" },
];

export const companyName = "Finspark Accounting and Business Services Limited";
export const companyEmail = {
  email: "info@finsparkaccounting.co.uk",
  href: "mailto:info@finsparkaccounting.co.uk",
};

export const contactsNo = [
  { number: "+44 7587 486885", href: "tel:+447587486885" },
  { number: "+44 7884 003546", href: "tel:+447884003546" },
];
export const companyInfo = {
  legalName: "Finspark Accounting and Business Services Limited",
  address: "7 Haven Lane, London, England",
  phone: [
    { number: "+44 7587 486885", href: "tel:+447587486885" },
    { number: "+44 7884 003546", href: "tel:+447884003546" },
  ],
  whatsapp: "+44 7884 003546",
  emailAddress: [
    {
      email: "info@finsparkaccounting.co.uk",
      href: "mailto:info@finsparkaccounting.co.uk",
    },
  ],
  hours: "Mon - Fri: 9:00 AM - 5:00 PM",
};
export const steps = [
  {
    num: "1",
    title: "Rapid & Accessible Communication",
    desc: "Direct phone lines and dedicated email responses. We don’t leave your questions parked in queues.",
  },
  {
    num: "2",
    title: "Fixed, Transparent Monthly Fees",
    desc: "Never receive a surprise bill for a quick telephone call. Everything agreed upfront.",
  },
  {
    num: "3",
    title: "Genuine Local Presence",
    desc: "Conveniently situated in Tongham and Farnborough. Drop by our office anytime to discuss your accounts.",
  },
];
export const stats = [
  {
    value: "0",
    title: "Unexplained Bills",
    desc: "Every price is crystal clear from day one.",
  },
  {
    value: "1:1",
    title: "Dedicated Contact",
    desc: "Know exactly who is managing your file.",
  },
  {
    value: "100%",
    title: "Digital or Paper",
    desc: "We adapt to your preferred way of working.",
  },
  {
    value: "Free",
    title: "Initial Review",
    desc: "Zero-commitment health-check on current setup.",
  },
];
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mark Davies",
    role: "Director, Precision Engineering Ltd",
    initials: "MD",
    avatarBg: "bg-[#2563eb]",
    quote:
      '"Callum and the team have transformed our bookkeeping. In the past, accounts were a huge source of anxiety. Now, everything runs seamlessly on Xero and questions are answered within hours."',
  },
  {
    id: 2,
    name: "Sarah Hughes",
    role: "Founder, Surrey Digital Agency",
    initials: "SH",
    avatarBg: "bg-[#1e293b]",
    quote:
      '"We have worked with Finspark for over 7 years. Friendly, highly responsive, and zero jargon. They ensure we never miss a VAT or Companies House deadline."',
  },
  {
    id: 3,
    name: "Richard Taylor",
    role: "Commercial Contractor, Hampshire",
    initials: "RT",
    avatarBg: "bg-[#083761]",
    quote:
      '"Switching from our old accounting firm was completely painless. Finspark handled the transition letter and took over our CIS and payroll with zero downtime for our tradespeople."',
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Managing Director, Apex Retail Group",
    initials: "ER",
    avatarBg: "bg-[#278393]",
    quote:
      '"Their strategic cash flow forecasting gave us the confidence to expand. They aren\'t just bookkeepers—they are genuinely an essential, proactive extension of our senior team."',
  },
  {
    id: 5,
    name: "James Miller",
    role: "Owner, Miller & Sons Logistics",
    initials: "JM",
    avatarBg: "bg-[#0f172a]",
    quote:
      '"Instant response times, transparent monthly pricing, and top-tier tax planning. Finspark saved us thousands on our annual tax bill within the very first six months alone."',
  },
];
export const FAQ_DATA = [
  {
    id: 1,
    question: "Fast, reliable communication",
    answer:
      "When you contact us, you'll get a prompt response and clear answers. No chasing, no being passed around, just straightforward support when you need it.",
  },
  {
    id: 2,
    question: "One dedicated team that knows your business",
    answer:
      "You'll work directly with experienced accountants who understand your specific industry, goals, and day-to-day operations inside and out.",
  },
  {
    id: 3,
    question: "Clear advice, without the jargon",
    answer:
      "We speak plain English. No complicated accounting terminology or hidden complexities—just simple, actionable insights to grow your business.",
  },
  {
    id: 4,
    question: "Built around small businesses",
    answer:
      "Our accounting and advisory services are tailored specifically for sole traders, SMEs, and ambitious entrepreneurs looking for flexible support.",
  },
  {
    id: 5,
    question: "Local, personal, and accountable",
    answer:
      "Based nearby, we offer both virtual convenience and face-to-face meetings, ensuring you always have a trusted partner in your corner.",
  },
];
export const ICON_SETS = {
  finance: [TrendingUp, Calculator, ShieldCheck, BarChart3, Coins, PieChart],
  trust: [
    ShieldCheck,
    CheckCircle2,
    Building,
    Users,
    ShieldCheck,
    CheckCircle2,
  ],
  minimal: [], // No floating icons, only soft glow & grid
};

export const teamData = [
  {
    name: "Asif Chaudhry",
    role: "Partner",
    qualification: "FCCA",
    image: "/team/asif-chaudhry.jpg", // placeholder until photos arrive
  },
  {
    name: "Asim Malik",
    role: "Partner",
    qualification: "FCCA",
    image: "/team/asim-malik.jpg",
  },
];
