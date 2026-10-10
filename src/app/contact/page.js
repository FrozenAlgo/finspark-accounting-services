"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Car,
  ExternalLink,
  Lock,
  Compass,
  Check,
  Phone,
  Mail,
} from "lucide-react";
import Banner from "@/components/ui/Banner";
import Form from "@/components/ui/Form";
import { companyEmail, contactsNo, companyInfo, companyName } from "@/lib/data";

const pills = [
  { title: "Direct Line", sub: contactsNo[0].number },
  { title: "Enquiries", sub: companyEmail.email },
  { title: "Office Timing", sub: "Mon-Fri 9:00 AM - 5:00 PM" },
];
const steps = [
  {
    num: "1",
    title: "Prompt Confirmation",
    desc: "You will receive a clear email confirmation and direct calendar invite from Asif, Asim, or your designated lead adviser within 4 business hours.",
    footer: "Direct contact • No bot delays",
  },
  {
    num: "2",
    title: "30-Minute Discovery",
    desc: "We explore your current bookkeeping setup, HMRC filing deadlines, software efficiencies, and actionable areas where you can save tax or administrative time.",
    footer: "Friendly, jargon-free audit",
  },
  {
    num: "3",
    title: "Transparent Proposal",
    desc: "We provide a clear, fixed monthly fee proposal tailored exactly to your operation, with zero surprise year-end bills or hidden hourly meter charges.",
    footer: "Fixed price certainty",
  },
];
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Contact Page Banner */}
      <Banner
        badge="Get In Touch"
        subBadge="Fast Advisory Response"
        heading="Schedule Your Consultation"
        subHeading="Speak directly with our expert team for clear, prompt guidance."
        para="Whether you have an urgent HMRC deadline, need assistance with your bookkeeping, or want to discuss corporate tax planning, we are here to help."
        pills={pills}
        imageSrc="/images/Faq.jpg"
        showSubHeading={true}
        showButtons={false}
        showPills={true}
      />

      {/* 2. Office Information, Map & Contact Form Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT COLUMN: Office Info, Map Embed & Portals */}
          <div className="w-full lg:basis-[60%] space-y-5">
            {/* Card 1: Head Office Details */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-2xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#278393]/10 text-[#278393] flex items-center justify-center shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#278393] uppercase">
                    REGISTERED OFFICE
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#083761]">
                    {companyName} Office
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-snug">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 font-medium border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Car size={15} className="text-[#278393] shrink-0" />
                  <span>Client parking & nearby transport access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass size={15} className="text-[#278393] shrink-0" />
                  <span>{companyInfo.hours}</span>
                </div>
              </div>
            </div>

            {/* Card 2: Regional Reach */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#278393] text-xs font-bold uppercase tracking-wider">
                <MapPin size={16} />
                <span>Nationwide & Regional Reach</span>
              </div>
              <h4 className="text-base font-bold text-[#083761]">
                London & Surrounding Business Support
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Providing strategic accounting, tax planning, and payroll
                consultation to owner-managed companies, contractors, and
                growing businesses across Greater London and the UK.
              </p>
            </div>

            {/* Card 3: Interactive Google Maps Integration */}
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-2xs">
              <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#278393]" />
                  <span className="text-xs font-bold text-[#083761]">
                    Practice Location
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=7+Haven+Lane,+London,+England"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#278393] hover:underline"
                >
                  <span>Get Directions</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="relative w-full h-56 bg-slate-100">
                <iframe
                  title="Finspark Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3582498218175!2d-0.3060!3d51.5160!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760de2c3a50d29%3A0x2f913d666611f71a!2sHaven%20Ln%2C%20London!5e0!2m3!1sen!2suk!4g18!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-slate-500">
                <span>7 Haven Lane, London</span>
                <span className="text-[#278393] font-bold">
                  Open Mon - Fri: 09:00 - 17:00
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Reused Form Component */}
          <div className="w-full lg:basis-[40%] max-w-lg mx-auto lg:mx-0 shrink-0 sticky top-6">
            <Form headingColor="black" />
          </div>
        </div>
      </section>

      <section className="w-full bg-white pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Top Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
              TRANSPARENT ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#083761] tracking-tight">
              What Happens Next?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              We believe in straightforward communication. Here is our
              step-by-step commitment once you submit your request.
            </p>
          </div>

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#278393]/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#083761] text-white flex items-center justify-center font-black text-lg shadow-md">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#083761]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#278393]">
                  <Check size={16} strokeWidth={2.5} />
                  <span>{step.footer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Banner Bar */}
        <div className="w-full bg-[#083761] text-white mt-16 py-12 px-4 sm:px-6 lg:px-12 mb-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-extrabold tracking-wider text-[#278393] uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
                NEED IMMEDIATE ACCOUNTING ADVICE?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Prefer to talk right now?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl">
                Call Asif, Asim and the team directly on{" "}
                <Link
                  className="text-white font-bold me-1"
                  href={contactsNo[0].href}
                >
                  {contactsNo[0].number}
                </Link>
                or
                <Link
                  className="text-white font-bold ms-1"
                  href={contactsNo[0].href}
                >
                  {contactsNo[1].number}
                </Link>
                . Our London team is ready to assist.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={contactsNo[0].href}
                className="inline-flex items-center gap-2.5 bg-white text-[#083761] hover:bg-slate-100 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all"
              >
                <Phone size={18} className="text-[#278393]" />
                <span>Call {contactsNo[0].number}</span>
              </a>

              <a
                href={companyEmail.href}
                className="inline-flex items-center gap-2.5 bg-[#278393] hover:bg-[#1f6875] text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all"
              >
                <Mail size={18} />
                <span>Email Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
