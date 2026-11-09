"use client";

import { companyName, contactsNo, serviceLinks } from "@/lib/data";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsappIcon } from "../ui/BrandIcon";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#083761] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block bg-white p-3 rounded-xl shadow-md border border-white/20">
              <Image
                src="/FinsparklogoCropped.webp"
                alt="Finspark Limited Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              {companyName} provides bespoke accounting, statutory compliance,
              tax planning, and strategic advisory services to small and medium
              enterprises.
            </p>

            <p className="text-xs text-slate-400 font-medium">
              Registered in England & Wales.
            </p>
          </div>

          {/* COLUMN 2: CORE SERVICES */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-[#278393] uppercase">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: EXPLORE (site pages) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-[#278393] uppercase">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: OFFICE + HOURS + PHONES */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-[#278393] uppercase">
              London Office
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>7 Haven Lane</p>
              <p>Ealing, London</p>
              <p>W5 2HZ, United Kingdom</p>
            </div>

            <div className="pt-1">
              <span className="inline-block text-xs font-bold text-[#278393] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                Mon – Fri: 9:00 AM – 5:00 PM
              </span>
            </div>

            <div className="space-y-2.5 pt-2">
              <p className="font-semibold text-white flex items-center gap-2 text-xs sm:text-sm">
                <WhatsappIcon className="h-5 w-5 text-green-500 shrink-0" />
                <a
                  href={contactsNo[0].href}
                  className="hover:text-[#278393] transition-colors"
                >
                  {contactsNo[0].number}
                  <span className="text-[11px] text-green-200 font-medium">
                    {" "}
                    WhatsApp
                  </span>
                </a>
              </p>
              <p className="font-semibold text-white flex items-center gap-2 text-xs sm:text-sm">
                <Phone size={16} className="shrink-0 text-slate-300" />
                <a
                  href={contactsNo[1].href}
                  className="hover:text-[#278393] transition-colors"
                >
                  {contactsNo[1].number}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Finspark Accounting and Business
            Services Limited. All rights reserved.
          </div>

          <div className="text-slate-400 font-medium text-center">
            Website designed & managed by{" "}
            <a
              href="https://portfolio-kappa-nine-204xtzt9as.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#278393] font-bold underline underline-offset-4 transition-colors"
            >
              Offscript
            </a>
          </div>

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
          </div>
        </div>
      </div>
    </footer>
  );
}
