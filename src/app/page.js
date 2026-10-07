import Hero from "@/components/home/Hero";
import Image from "next/image";
import {
  User,
  Mail,
  Building2,
  Phone,
  MessageSquare,
  ArrowRightCircle,
  Calculator,
  Check,
  Lock,
  CheckCircleIcon,
  MapPin,
  Send,
  Users,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import AnimatedBtn from "@/components/ui/AnimatedBtn";
import FAQ from "@/components/home/FAQ";
import ServiceCard from "@/components/services/ServiceCard";
import AmbientBackground from "@/components/ui/AmbientBackground";
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
  },
];

const steps = [
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

const stats = [
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
export default function Home() {
  return (
    <div>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-4  gap-4 py-8">
        <div className="text-center">
          <h6 className="text-[#278393] text-2xl  lg:text-3xl font-bold ">
            10+ Years
          </h6>
          <p className="text-xs lg:text-sm font-semibold  text-gray-600">
            Established Practice
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-[#278393] text-2xl  lg:text-3xl font-bold ">
            350+
          </h6>
          <p className="text-xs lg:text-sm font-semibold  text-gray-600">
            Local Business Clients
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-[#278393] text-2xl  lg:text-3xl font-bold ">
            100%
          </h6>
          <p className="text-xs lg:text-sm font-semibold  text-gray-600">
            On-Time HMRC Submissions
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-[#278393] text-2xl  lg:text-3xl font-bold ">
            &lt; 4 Hours
          </h6>
          <p className="text-xs lg:text-sm font-semibold  text-gray-600">
            Avg Response Turnaround
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50/60 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <AmbientBackground
          variant="light"
          theme="minimal"
          glowPosition="center"
        />
        <div className="text-sm text-center py-4 z-10">
          <h6 className="text-[#278393] font-bold">WHAT WE DO</h6>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083761] my-3 tracking-tight">
            Comprehensive Accountancy Solutions
          </h1>
          <p className="text-gray-500">
            Whether you're a sole trader, thriving SME, or contractor, our
            proactive team provides exact <br /> figures and tailored support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: HEADING & STEPS ================= */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#278393] uppercase block mb-3">
                THE PAL DIFFERENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#083761] leading-[1.18] tracking-tight">
                No chasing. No jargon. <br className="hidden sm:inline" />
                Just straightforward answers.
              </h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-xl font-normal">
                Most business owners tell us their previous accountant felt
                distant, speaking in confusing acronyms and sending unexpected
                invoices. At Penney’s Accountancy, we redefine that experience.
              </p>
            </div>

            {/* Numbered Step List */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 transition-all hover:bg-slate-50"
                >
                  {/* Number Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#278393]/15 text-[#278393] font-extrabold flex items-center justify-center shrink-0 text-base">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#083761] text-base leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: PARTNERSHIP CARD ================= */}
          <div className="lg:col-span-6">
            <div className="bg-[#278393]/5 border border-[#278393]/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#083761] tracking-tight">
                What our client partnership looks like:
              </h3>

              {/* 2x2 Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-100 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#278393] block mb-2 tracking-tight">
                        {stat.value}
                      </span>
                      <h4 className="font-bold text-[#083761] text-base leading-tight mb-1">
                        {stat.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote Callout */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border-l-4 border-[#278393] shadow-xs">
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  "Switching accountants takes under 7 days with zero disruption
                  to your payroll or tax schedule."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialCard />
      <section className="w-full bg-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT COLUMN: IMAGE WITH BACKDROP & BADGE ================= */}
          <div className="lg:col-span-6 mb-8 lg:mb-0">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Soft Light-Blue Background Frame */}
              <div className="absolute -inset-3 bg-[#278393]/15 rounded-[32px] -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[14/11] shadow-sm">
                <Image
                  src="/images/businesssupport.jpg"
                  alt="Callum & The Dedicated Surrey Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Overlapping Floating Bottom Badge */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] bg-white rounded-2xl px-6 py-4 shadow-xl border border-slate-100 text-center z-10">
                <span className="text-xs font-semibold text-slate-500 block mb-0.5">
                  Callum & The Dedicated Surrey Team
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#083761] leading-tight">
                  Collaborative Advisory That Puts You First
                </h4>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT & BADGES ================= */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            {/* Section Header */}
            <div>
              <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#278393] uppercase block mb-3">
                THE PEOPLE BEHIND YOUR NUMBERS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#083761] leading-[1.18] tracking-tight">
                A friendly face whenever you need advice
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
              <p>
                Accounting isn't just about spreadsheets and balancing
                books—it's about understanding the real people, families, and
                hard work behind each enterprise.
              </p>
              <p>
                Our team in Tongham and Farnborough takes time to listen to your
                unique commercial objectives. Whether it's planning your first
                dividend withdrawal, hiring your first employee, or scaling into
                new premises, we’re right beside you.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Pill 1 */}
              <div className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <Check
                  size={18}
                  className="text-[#278393] shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-xs sm:text-sm font-bold text-[#083761]">
                  Walk-in friendly office
                </span>
              </div>

              {/* Pill 2 */}
              <div className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <Check
                  size={18}
                  className="text-[#278393] shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-xs sm:text-sm font-bold text-[#083761]">
                  Always happy to explain details
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-white grid grid-cols-1 lg:grid-cols-12 relative">
          {/* ================= LEFT COLUMN: CONTACT INFO (DARK NAVY) ================= */}
          <div className="lg:col-span-5 bg-[#083761] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle Background Glow Accent */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#278393]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-8 relative z-10">
              {/* Header Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#278393] text-xs font-bold tracking-widest uppercase backdrop-blur-md border border-white/10">
                GET IN TOUCH
              </span>

              {/* Heading & Description */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  Let’s Talk About Your Business Numbers
                </h2>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Contact our office today for a relaxed, confidential
                  discussion over a cup of coffee or a telephone consultation.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6 pt-2">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                    <MapPin size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      Office Location:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      4 The Old Coach House, Tongham, Farnham, Surrey, GU10 1DW
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                    <Phone size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      Phone Support:
                    </h4>
                    <a
                      href="tel:+447587486885"
                      className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      +44 7587 486885
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                    <Mail size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      Email Address:
                    </h4>
                    <a
                      href="mailto:info@finspark.co.uk"
                      className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      info@finspark.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="pt-8 mt-8 border-t border-white/10 relative z-10">
              <p className="text-xs text-slate-400 font-normal">
                Finspark Limited is an Acumist Group practice.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: FORM WITH FLOATING LABELS ================= */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between relative bg-white">
            <div>
              {/* Form Header */}
              <div className="border-b border-slate-200 pb-4 mb-8">
                <h3 className="text-2xl sm:text-3xl font-black text-[#083761] tracking-tight">
                  Send An Enquiry
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
                  Please enter your contact details below and our team will get
                  back to you within 24 hours.
                </p>
              </div>

              {/* Form Body */}
              <form id="contact-form" className="space-y-6">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Your Name */}
                  <div className="relative pt-4">
                    <input
                      type="text"
                      id="client-name"
                      placeholder=" "
                      required
                      className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300"
                    />
                    <label
                      htmlFor="client-name"
                      className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <User className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
                  </div>

                  {/* Your Email */}
                  <div className="relative pt-4">
                    <input
                      type="email"
                      id="client-email"
                      placeholder=" "
                      required
                      className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300"
                    />
                    <label
                      htmlFor="client-email"
                      className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <Mail className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
                  </div>
                </div>

                {/* Row 2: Business Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  {/* Business Name */}
                  <div className="relative pt-4">
                    <input
                      type="text"
                      id="client-business"
                      placeholder=" "
                      required
                      className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300"
                    />
                    <label
                      htmlFor="client-business"
                      className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                    >
                      Your Business Name{" "}
                      <span className="text-rose-500">*</span>
                    </label>
                    <Building2 className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
                  </div>

                  {/* Your Phone */}
                  <div className="relative pt-4">
                    <input
                      type="tel"
                      id="client-phone"
                      placeholder=" "
                      required
                      className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300"
                    />
                    <label
                      htmlFor="client-phone"
                      className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                    >
                      Your Phone <span className="text-rose-500">*</span>
                    </label>
                    <Phone className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
                  </div>
                </div>

                {/* Row 3: How Can We Help (Textarea) */}
                <div className="relative pt-4">
                  <textarea
                    id="client-message"
                    rows={3}
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                  <label
                    htmlFor="client-message"
                    className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                              peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                  >
                    How can we help? <span className="text-rose-500">*</span>
                  </label>
                  <MessageSquare className="absolute right-0 bottom-3 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
                </div>

                {/* Animated Button */}
                <div className="pt-4">
                  <AnimatedBtn
                    hoverText="Send Now"
                    icon={Send}
                    bgColor="bg-[#278393]"
                    hoverBgColor="hover:bg-[#083761]"
                    textColor="text-white"
                    hoverTextColor="hover:text-gray-100"
                  >
                    Send Consultation Request
                  </AnimatedBtn>
                </div>
              </form>
            </div>

            {/* Privacy Note */}
            <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 text-xs text-slate-400">
              <Lock size={14} className="text-[#278393] shrink-0" />
              <span>
                We strictly respect your privacy. No spam or aggressive sales
                tactics.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
