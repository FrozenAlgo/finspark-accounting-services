"use client";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  ChevronRight,
  Bell,
  Award,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-finspark-navy text-slate-300 border-t border-slate-800/80 relative footer-grid-bg">
      {/* Top Footer Accent Gradient Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-finspark-teal via-cyan-400 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 4-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Footer Logo */}
            <a href="#" className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-finspark-deep font-black text-xl shadow-md">
                <span className="text-finspark-teal">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                  FINSPARK
                </span>
                <span className="text-[9px] tracking-widest font-semibold text-slate-400 uppercase mt-0.5">
                  LIMITED
                </span>
                <span className="text-[8px] text-finspark-teal font-medium tracking-tight">
                  BOOKKEEPING | ACCOUNTS | BRIGHTER BUSINESS
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              FinSpark Limited provides proactive bookkeeping, tax planning, and
              strategic financial management to help Farnborough businesses
              thrive.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 pt-1 text-sm text-slate-300">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-finspark-teal shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span>Haven Lane, Farnborough, Hampshire, UK</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-finspark-teal shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+447587486885"
                  className="hover:text-finspark-teal transition-colors"
                >
                  +44 7587 486885
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-finspark-teal shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@finspark.co.uk"
                  className="hover:text-finspark-teal transition-colors"
                >
                  info@finspark.co.uk
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            {/* Social Media Links Container */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center space-x-3">
                {/* LinkedIn Custom SVG */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-finspark-deep border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-finspark-teal hover:border-finspark-teal transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* X / Twitter Custom SVG */}
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg bg-finspark-deep border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-finspark-teal hover:border-finspark-teal transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>

                {/* Instagram Custom SVG */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-finspark-deep border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-finspark-teal hover:border-finspark-teal transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services (2 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-finspark-teal pl-3">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-finspark-teal transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-finspark-teal group-hover:translate-x-1 transition-transform" />
                  Bookkeeping & VAT Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-finspark-teal transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-finspark-teal group-hover:translate-x-1 transition-transform" />
                  Self-Assessment & Tax
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-finspark-teal transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-finspark-teal group-hover:translate-x-1 transition-transform" />
                  Payroll & HMRC Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-finspark-teal transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-finspark-teal group-hover:translate-x-1 transition-transform" />
                  CIS Returns & Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-finspark-teal transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-finspark-teal group-hover:translate-x-1 transition-transform" />
                  Management Accounts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-finspark-teal transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-finspark-teal group-hover:translate-x-1 transition-transform" />
                  Business Support & Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-finspark-teal pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-finspark-teal transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-finspark-teal transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-finspark-teal transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-finspark-teal transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-finspark-teal transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-finspark-teal transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-finspark-teal hover:underline font-semibold"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & HMRC Badge (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-finspark-teal pl-3">
              Stay Updated
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Subscribe to our newsletter for key tax deadline reminders and
              legal accounting updates.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={(e) => handleNewsletter(e)} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-finspark-deep border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-finspark-teal"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-finspark-teal hover:bg-finspark-hover text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Bell className="w-4 h-4" />
              </button>
            </form>
            <div
              id="newsletter-status"
              className="hidden text-xs text-emerald-400 font-medium"
            >
              ✓ Subscribed successfully!
            </div>

            {/* HMRC Certified Badge Card */}
            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-finspark-deep border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800 text-finspark-cyan shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    HMRC Compliant
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Certified Accountants & Agents
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Added the missing parent row closing tag */}
        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 FinSpark Limited. All rights reserved.</p>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
