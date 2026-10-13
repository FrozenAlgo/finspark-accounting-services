import React from "react";
import {
  Scale,
  CheckCircle2,
  FileCheck,
  Clock,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { companyName, companyEmail, contactsNo } from "@/lib/data";

export const metadata = {
  title: `Terms of Business | ${companyName}`,
  description: `Standard operating terms and practice conditions for ${companyName}.`,
};

export default function TermsOfBusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-slate-200 pb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#278393]/15 text-[#278393] border border-[#278393]/25 text-xs font-bold tracking-wider uppercase">
            <Scale size={14} />
            Professional Standards
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#083761] tracking-tight">
            Terms of Business
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Practice Engagement Conditions • Governed by FCCA Professional
            Regulations & UK Law
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <CheckCircle2 className="text-[#278393]" size={18} />
              1. Engagement & Scope
            </h2>
            <p>
              These Terms of Business apply to all services provided by{" "}
              <strong>{companyName}</strong> to clients. Specific schedules for
              statutory accountancy, MTD digital migrations, Corporation Tax,
              VAT, payroll, and CIS compliance will be outlined in your formal
              Engagement Letter issued by partners{" "}
              <strong>Asif Chaudhry</strong> or <strong>Asim Malik</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <Clock className="text-[#278393]" size={18} />
              2. Client Care & Response Commitments
            </h2>
            <p>
              Under our <em>Client Care Promise</em>, inquiries submitted during
              standard business operating hours receive direct access to
              designated advisers with a concrete initial turnaround target
              within 4 business hours. You will deal directly with senior
              accountants rather than generic call centers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <FileCheck className="text-[#278393]" size={18} />
              3. Client Responsibilities & HMRC Deadlines
            </h2>
            <p>
              To ensure timely statutory submissions to HMRC and Companies
              House:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                Clients must provide full, accurate, and prompt accounting
                records, bank feeds, and receipts.
              </li>
              <li>
                Clients remain legally responsible for approving final tax
                returns and financial statements prior to deadline submission
                dates.
              </li>
              <li>
                {companyName} accepts no liability for late filing penalties
                resulting from client delays in supplying necessary
                documentation.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <ShieldCheck className="text-[#278393]" size={18} />
              4. Fees, Billing & Transparent Pricing
            </h2>
            <p>
              Our fee structure is agreed upon upfront (fixed monthly packages
              or bespoke project fees). We adhere strictly to a{" "}
              <strong>Zero Hidden Invoice Policy</strong>. Any additional work
              falling outside the original Engagement Letter scope will be
              discussed and quoted prior to commencement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <AlertTriangle className="text-[#278393]" size={18} />
              5. Professional Integrity & AML Compliance
            </h2>
            <p>
              As qualified accountants, we operate under strict Anti-Money
              Laundering regulations. Proof of identity and business address
              verification are statutory prerequisites before formal client
              onboarding can complete.
            </p>
          </section>

          {/* Contact Box */}
          <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1 text-xs">
            <p className="font-bold text-[#083761]">
              Questions regarding practice terms?
            </p>
            <p className="text-slate-500">
              Contact partner advisory at{" "}
              <a
                href={`mailto:${companyEmail.email}`}
                className="text-[#278393] underline font-bold"
              >
                {companyEmail.email}
              </a>{" "}
              or call{" "}
              <a href={contactsNo[0].href} className="text-[#083761] font-bold">
                {contactsNo[0].number}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
