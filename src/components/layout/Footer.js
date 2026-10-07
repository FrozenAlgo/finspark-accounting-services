"use client";

import { MessageCircleCheck, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#083761] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* COLUMN 1: LOGO & ABOUT (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo Wrapper Container */}
            <div className="inline-block bg-white p-3 rounded-xl shadow-md border border-white/20">
              <Image
                src="/logo.png"
                alt="Finspark Limited Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Finspark Accounting and Business Services Limited provides bespoke
              accounting, statutory compliance, tax planning, and strategic
              advisory services to small and medium enterprises.
            </p>

            <p className="text-xs text-slate-400 font-medium">
              Registered in England & Wales.
            </p>
          </div>

          {/* COLUMN 2: CORE SERVICES (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-[#278393] uppercase">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Bookkeeping & VAT
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Year-End Accounts
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Self Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Payroll & CIS Schemes
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Outsourced FD Services
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: OFFICE LOCATION (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-[#278393] uppercase">
              London Office
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>7 Haven Lane</p>
              <p>Ealing, London</p>
              <p>W5 2HZ, United Kingdom</p>
              <p className="pt-2 font-semibold text-white flex items-center gap-1">
                <Phone size={16} />
                <a
                  href="tel:+447587486885"
                  className="hover:text-[#278393] transition-colors"
                >
                  +44 7587 486885
                </a>
              </p>
              <p className="pt-2 font-semibold text-white  flex items-center gap-1">
                <MessageCircleCheck size={16} />
                <a
                  href="tel:+447884003546"
                  className="hover:text-[#278393] transition-colors"
                >
                  +44 7884 003546
                </a>
              </p>
            </div>
          </div>

          {/* COLUMN 4: Office timing  (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-[#278393] uppercase">
              Office Hours
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our team is available Monday through Friday to assist with your
              accounting, tax, and business support needs.
            </p>
            <div className="pt-1">
              <span className="inline-block text-xs font-bold text-[#278393] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                Mon – Fri: 9:00 AM – 5:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Copyright */}
          <div>
            © {new Date().getFullYear()} Finspark Accounting and Business
            Services Limited. All rights reserved.
          </div>

          {/* Agency Credit */}
          <div className="text-slate-400 font-medium">
            Website designed & managed by{" "}
            <a
              href="https://offscript.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#278393] font-bold underline underline-offset-4 transition-colors"
            >
              Offscript
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Business
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookie Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
