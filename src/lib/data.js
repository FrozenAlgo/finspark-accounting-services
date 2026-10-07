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
    title: "Bookkeeping & VAT Returns",
    description:
      "Making Tax Digital (MTD) compliant workflows. We reconcile bank statements, log expenses, and submit flawless quarterly VAT returns on time.",
    points: [
      "Cloud software setups (Xero, QuickBooks)",
      "Digital ledger management & MTD VAT filing",
    ],
    icon: "Calculator",
    href: "/services#bookkeeping-vat",
  },
  {
    id: "company-accounts-tax",
    title: "Company Accounts & Tax Return",
    description:
      "Statutory Companies House submissions and Corporation Tax (CT600) filings. We systematically identify allowances to reduce your tax burden.",
    points: [
      "Complete statutory financial statements",
      "Corporate tax planning & relief reviews",
    ],
    icon: "Building2",
    href: "/services#company-accounts-tax",
  },
  {
    id: "payroll",
    title: "Payroll & Auto-Enrolment",
    description:
      "Hassle-free PAYE payroll management, automated employee digital payslips, workplace pension compliance, and CIS monthly returns.",
    points: [
      "RTI submissions directly to HMRC",
      "Pension compliance & CIS subcontractor statements",
    ],
    icon: "Users",
    href: "/services#self-assessment",
  },
  {
    id: "self-assessment",
    title: "Self Assessment Tax Returns",
    description:
      "Stress-free personal tax returns for sole traders, company directors, partners, and landlords. No last-minute January panic or penalty stress.",
    points: [
      "Allowable expense optimization",
      "Rental income & dividend tax calculations",
    ],
    icon: "FileCheck",
    href: "/services#payroll",
  },
  {
    id: "capital-gains",
    title: "Capital Gains Tax Returns",
    description:
      "Expert guidance and timely reporting for property sales, crypto, shares, and asset disposals within strict HMRC 60-day filing deadlines.",
    points: [
      "UK property disposal 60-day reporting",
      "Maximum relief & tax allowance utilization",
    ],
    icon: "TrendingUp",
    href: "/services#capital-gains",
  },
  {
    id: "secretarial",
    title: "Secretarial & Statutory Work",
    description:
      "Keep your company fully compliant with Companies House requirements. We handle annual filings, record management, and official registers.",
    points: [
      "Annual Confirmation Statement filings",
      "Shareholder & director register maintenance",
    ],
    icon: "ShieldCheck",
    href: "/services#secretarial",
  },
  {
    id: "adhoc-mortgage",
    title: "Adhoc Work & Mortgage Support",
    description:
      "Fast, certified accountant certificates and administrative verification for mortgage applications, tenancy checks, and official loan approvals.",
    points: [
      "Accountant reference letters for mortgages",
      "Income verification & SA302 calculations",
    ],
    icon: "FileSpreadsheet",
    href: "/services#adhoc-mortgage",
  },
];
export const serviceLinks = [
  { name: "Bookkeeping & VAT", href: "/services#bookkeeping-vat" },
  { name: "Company Accounts & Tax", href: "/services#company-accounts-tax" },
  { name: "Self Assessment", href: "/services#self-assessment" },
  { name: "Payroll", href: "/services#payroll" },
  { name: "Capital Gains", href: "/services#capital-gains" },
  { name: "Secretarial Work", href: "/services#secretarial" },
  { name: "Adhoc & Mortgage Support", href: "/services#adhoc-mortgage" },
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
  phone: "+44 7587 486885",
  whatsapp: "+44 7884 003546",
  email: "info@finsparkaccounting.co.uk",
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
