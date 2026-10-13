import React from "react";
import { ShieldCheck, Lock, Eye, FileText, Server, Bell } from "lucide-react";
import { companyName, companyEmail, contactsNo } from "@/lib/data";

export const metadata = {
  title: `Privacy Policy | ${companyName}`,
  description: `Privacy policy and data protection governance for ${companyName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-slate-200 pb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#278393]/15 text-[#278393] border border-[#278393]/25 text-xs font-bold tracking-wider uppercase">
            <ShieldCheck size={14} />
            Data Protection & GDPR
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#083761] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Last Updated: October 2026 • Compliant with UK GDPR & Data
            Protection Act 2018
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <Eye className="text-[#278393]" size={18} />
              1. Introduction & Overview
            </h2>
            <p>
              At <strong>{companyName}</strong> ("we", "our", or "us"), led by
              senior partners <strong>Asif Chaudhry</strong> and{" "}
              <strong>Asim Malik</strong>, we respect your privacy and are
              committed to protecting your personal financial data. This Privacy
              Policy outlines how we collect, use, process, and safeguard
              information provided when you use our website or engage our
              accounting, audit, MTD, and tax compliance services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <FileText className="text-[#278393]" size={18} />
              2. Information We Collect
            </h2>
            <p>
              Depending on whether you are a website visitor, prospective
              client, or contracted client, we may collect the following
              personal and financial information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Contact Information:</strong> Name, business name, phone
                number, email address, and physical address.
              </li>
              <li>
                <strong>Tax & Compliance Identifiers:</strong> Unique Taxpayer
                References (UTR), National Insurance numbers, VAT numbers, and
                Company Registration numbers.
              </li>
              <li>
                <strong>Financial Data:</strong> Bank statements, payroll
                records, invoices, bookkeeping ledgers, and HMRC correspondence.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, and
                analytics activity captured via cookies during website visits.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <Server className="text-[#278393]" size={18} />
              3. How We Use Your Information
            </h2>
            <p>
              We process personal data strictly under lawful legal bases under
              UK GDPR, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                Executing contract engagements (e.g., Year-End filings, CIS
                deductions, Corporation Tax, and Payroll).
              </li>
              <li>
                Fulfilling legal obligations mandated by HMRC, Companies House,
                and Anti-Money Laundering (AML) legislation.
              </li>
              <li>
                Responding to legitimate consultation requests and direct
                service inquiries within 4 office hours.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <Lock className="text-[#278393]" size={18} />
              4. Data Security & Storage
            </h2>
            <p>
              We implement enterprise-grade encryption, cloud backup
              infrastructure, and restricted internal access controls. Client
              financial files are never sold, rented, or commercialized. Data is
              shared with statutory bodies (e.g., HMRC) strictly to fulfill your
              agreed services or when legally compelled.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#083761] flex items-center gap-2">
              <Bell className="text-[#278393]" size={18} />
              5. Your Rights & Contact Information
            </h2>
            <p>
              Under UK GDPR, you hold rights to access, rectify, port, or
              request erasure of your personal data. To exercise any of these
              rights or ask questions regarding data processing, please contact
              us directly:
            </p>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1.5 text-xs font-medium">
              <p className="font-bold text-[#083761]">{companyName}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${companyEmail.email}`}
                  className="text-[#278393] underline"
                >
                  {companyEmail.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={contactsNo[0].href}
                  className="text-[#083761] font-bold"
                >
                  {contactsNo[0].number}
                </a>
              </p>
              <p>Location: London & UK Regional Practice</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
