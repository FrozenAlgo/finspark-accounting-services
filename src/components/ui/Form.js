"use client";

import React from "react";
import {
  Building2,
  Mail,
  Phone,
  Send,
  User,
  MessageSquare,
  CheckCircleIcon,
} from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";

export default function Form() {
  return (
    <div className="z-10 p-6 sm:p-8 text-white bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 relative">
      {/* Header */}
      <div className="border-b border-white/20 pb-4 mb-6">
        <h2 className="text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300 font-bold tracking-tight">
          Send An Enquiry
        </h2>
        <p className="py-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Please enter your contact details below and our team will get back to
          you within 24 hours.
        </p>
      </div>

      {/* Form Fields */}
      <form id="contact-form" className="space-y-6">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Your Name */}
          <div className="relative pt-4">
            <input
              type="text"
              id="name"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-slate-300/60 py-2 pr-10 text-white placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 text-sm"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-1 text-xs text-slate-300 transition-all duration-300 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 
                         peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[#278393] font-medium cursor-text"
            >
              Your Name <span className="text-rose-400">*</span>
            </label>
            <User className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
          </div>

          {/* Your Email */}
          <div className="relative pt-4">
            <input
              type="email"
              id="email"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-slate-300/60 py-2 pr-10 text-white placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 text-sm"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-1 text-xs text-slate-300 transition-all duration-300 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 
                         peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[#278393] font-medium cursor-text"
            >
              Your Email <span className="text-rose-400">*</span>
            </label>
            <Mail className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
          </div>
        </div>

        {/* Row 2: Business Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
          {/* Business Name */}
          <div className="relative pt-4">
            <input
              type="text"
              id="business"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-slate-300/60 py-2 pr-10 text-white placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 text-sm"
            />
            <label
              htmlFor="business"
              className="absolute left-0 -top-1 text-xs text-slate-300 transition-all duration-300 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 
                         peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[#278393] font-medium cursor-text"
            >
              Your Business Name <span className="text-rose-400">*</span>
            </label>
            <Building2 className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
          </div>

          {/* Your Phone */}
          <div className="relative pt-4">
            <input
              type="tel"
              id="phone"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-slate-300/60 py-2 pr-10 text-white placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 text-sm"
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-1 text-xs text-slate-300 transition-all duration-300 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 
                         peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[#278393] font-medium cursor-text"
            >
              Your Phone <span className="text-rose-400">*</span>
            </label>
            <Phone className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
          </div>
        </div>

        {/* Row 3: How Can We Help */}
        <div className="relative pt-4">
          <textarea
            id="message"
            rows={3}
            placeholder=" "
            required
            className="peer w-full bg-transparent border-b-2 border-slate-300/60 py-2 pr-10 text-white placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 resize-none text-sm"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-1 text-xs text-slate-300 transition-all duration-300 
                       peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 
                       peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[#278393] font-medium cursor-text"
          >
            How can we help? <span className="text-rose-400">*</span>
          </label>
          <MessageSquare className="absolute right-0 bottom-3 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <AnimatedBtn
            hoverText="Send Now"
            icon={Send}
            bgColor="bg-[#278393]"
            hoverBgColor="hover:bg-[#1f6875]"
            textColor="text-white"
            hoverTextColor="hover:text-white"
          >
            Send Consultation Request
          </AnimatedBtn>
        </div>
      </form>

      {/* HMRC Floating Badge */}
      <div className="absolute -bottom-5 right-4 sm:right-6 px-4 py-2 rounded-2xl bg-white text-black flex gap-3 items-center text-xs shadow-xl border border-slate-100 z-20">
        <div className="text-emerald-600 bg-emerald-100 p-2 rounded-xl shrink-0">
          <CheckCircleIcon size={18} />
        </div>
        <div>
          <h6 className="text-slate-400 text-[10px] sm:text-xs font-medium leading-none">
            Client Peace of mind
          </h6>
          <p className="font-bold text-[#083761] mt-0.5">100% HMRC Compliant</p>
        </div>
      </div>
    </div>
  );
}
