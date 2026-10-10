"use client";

import { useState } from "react";
import { Calendar, MailPlus, Phone, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBtn from "../ui/AnimatedBtn";
import { companyEmail, contactsNo, serviceLinks } from "@/lib/data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="site-header   z-50 transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="top-bar bg-[#083761] text-white px-4 md:px-10 py-2.5 w-full text-xs sm:text-sm font-semibold border-b border-white/5">
        <div className="contact-info flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-5 max-w-7xl mx-auto">
          <a
            href={contactsNo[0].href}
            className="flex gap-1.5 items-center px-3 sm:px-4 py-1 border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            <Phone size={13} className="text-[#278393]" />
            <span>{contactsNo[0].number}</span>
          </a>
          <a
            href={companyEmail.href}
            className="flex gap-1.5 items-center px-3 sm:px-4 py-1 border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            <MailPlus size={13} className="text-[#278393]" />
            <span>{companyEmail.email}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#083761] pb-2.5 md:pb-3.5 ">
        <div className="main-nav flex justify-between items-center px-4 sm:px-8 lg:px-10 bg-white mx-3 sm:mx-6 md:mx-12 rounded-2xl shadow-lg py-2.5 md:py-1 border border-slate-100">
          {/* Clickable Logo */}
          <Link href="/" className="logo shrink-0 block">
            <Image
              src="/logo1.png"
              width={120}
              height={60}
              alt="Finspark Accounting and Business Services Limited Logo"
              className="w-32 sm:w-40 md:w-[120px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="navigations hidden lg:flex items-center gap-6 lg:gap-15 text-[#083761] text-sm lg:text-lg md:tracking-wide font-semibold">
            <li>
              <Link
                href="/"
                className="group relative py-1 hover:text-[#278393] transition-colors duration-200 block"
              >
                Home
                <span className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 bg-[#278393] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="group relative py-1 hover:text-[#278393] transition-colors duration-200 block"
              >
                About Us
                <span className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 bg-[#278393] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
              </Link>
            </li>

            {/* Services Dropdown Menu */}
            <li className="relative group py-2">
              <Link
                className="flex items-center gap-1.5 hover:text-[#278393] transition-colors duration-200 focus:outline-none py-1"
                href="/services"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  strokeWidth={3}
                  className="transition-transform duration-200 group-hover:rotate-180 text-[#278393]"
                />
              </Link>

              {/* Hover Floating Dropdown */}
              <div className="absolute left-0 top-full pt-2 w-60 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-in-out">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-100 py-2.5 px-1.5 flex flex-col gap-1 text-slate-700 text-xs sm:text-sm font-medium">
                  {serviceLinks.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#278393] transition-colors flex items-center justify-between"
                    >
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/team"
                className="group relative py-1 hover:text-[#278393] transition-colors duration-200 block"
              >
                Our Team
                <span className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 bg-[#278393] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="group relative py-1 hover:text-[#278393] transition-colors duration-200 block"
              >
                Testimonials
                <span className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 bg-[#278393] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="group relative py-1 hover:text-[#278393] transition-colors duration-200 block"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 bg-[#278393] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
              </Link>
            </li>
          </ul>

          {/* Desktop CTA Appointment Button */}
          <div className="book-btn hidden lg:block">
            <AnimatedBtn
              hoverText="Book An Appointment"
              icon={Calendar}
              bgColor="bg-[#278393]"
              hoverBgColor="hover:bg-[#083761]"
              textColor="text-white"
              hoverTextColor="hover:text-white"
            >
              Book An Appointment
            </AnimatedBtn>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Navigation"
              className="p-2 text-[#083761] hover:bg-slate-100 rounded-xl transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mx-3 sm:mx-6 mt-2 bg-white rounded-2xl shadow-2xl p-5 border border-slate-100 transition-all duration-300 max-h-[80vh] overflow-y-auto">
            <ul className="flex flex-col gap-2 text-[#083761] font-semibold text-sm pb-4 border-b border-slate-100">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#278393] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between block"
                >
                  <span>Home</span>
                  <span className="text-slate-300 text-xs">&rarr;</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#278393] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between block"
                >
                  <span>About Us</span>
                  <span className="text-slate-300 text-xs">&rarr;</span>
                </Link>
              </li>

              {/* Mobile Accordion for Services */}
              <li className="rounded-lg">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between hover:text-[#278393] transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-[#278393] ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <ul className="pl-4 pr-2 py-2 my-1 bg-slate-50 rounded-xl space-y-1.5 border border-slate-100">
                    <Link
                      href="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs text-slate-600 hover:text-[#278393] py-1.5 px-2 block rounded-md hover:bg-white font-medium transition-colors"
                    >
                      All Services
                    </Link>
                    {serviceLinks.map((service, idx) => (
                      <li key={idx}>
                        <Link
                          href={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-xs text-slate-600 hover:text-[#278393] py-1.5 px-2 block rounded-md hover:bg-white font-medium transition-colors"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/team"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#278393] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between block"
                >
                  <span>Our Team</span>
                  <span className="text-slate-300 text-xs">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#278393] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between block"
                >
                  <span>Testimonials</span>
                  <span className="text-slate-300 text-xs">&rarr;</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#278393] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between block"
                >
                  <span>Contact us</span>
                  <span className="text-slate-300 text-xs">&rarr;</span>
                </Link>
              </li>
            </ul>

            {/* Mobile CTA Button */}
            <div className="pt-4 flex justify-center">
              <AnimatedBtn
                hoverText="Book An Appointment"
                icon={Calendar}
                bgColor="bg-[#278393]"
                hoverBgColor="hover:bg-[#083761]"
                textColor="text-white"
                hoverTextColor="hover:text-white"
              >
                Book An Appointment
              </AnimatedBtn>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
