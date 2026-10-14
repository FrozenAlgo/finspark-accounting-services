"use client";

import React, { useState } from "react";
import {
  Building2,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
  CheckCircle2,
  X,
} from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";
import { companyEmail, companyName, contactsNo } from "@/lib/data";

const initial = {
  "client-name": "",
  "client-email": "",
  "client-business": "",
  "client-phone": "",
  "client-message": "",
  _gotcha_panel: "",
};

// Empty while testing — no Formspree tokens
// const FORMSPREE_ENDPOINT = "";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrpeyqod";

function validate(values) {
  const errors = {};
  const name = values["client-name"].trim();
  const email = values["client-email"].trim();
  const phone = values["client-phone"].trim();
  const message = values["client-message"].trim();
  const business = values["client-business"].trim();

  if (name.length < 2) errors["client-name"] = "Please enter your full name.";
  if (name.length > 80) errors["client-name"] = "Name is too long.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors["client-email"] = "Please enter a valid email address.";
  }
  if (email.length > 120) errors["client-email"] = "Email is too long.";

  if (business.length < 2) {
    errors["client-business"] = "Please enter your business name.";
  }
  if (business.length > 120) {
    errors["client-business"] = "Business name is too long.";
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    errors["client-phone"] = "Please enter a valid phone number.";
  }

  if (message.length < 10) {
    errors["client-message"] =
      "Please tell us a bit more (at least 10 characters).";
  }
  if (message.length > 2000) {
    errors["client-message"] = "Message is too long.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [showModal, setShowModal] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function closeModal() {
    setShowModal(false);
    setStatus("idle");
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;

    if (values._gotcha_panel) {
      setStatus("success");
      setShowModal(true);
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");

    const payload = {
      "client-name": values["client-name"].trim(),
      "client-email": values["client-email"].trim(),
      "client-business": values["client-business"].trim(),
      "client-phone": values["client-phone"].trim(),
      "client-message": values["client-message"].trim(),
      // Formspree uses `email` for Reply-To
      email: values["client-email"].trim(),
      _subject: "New enquiry from Finspark website",
    };

    if (!FORMSPREE_ENDPOINT) {
      console.log("ContactForm payload (dev only — not sent):", payload);
      setValues(initial);
      setStatus("success");
      setShowModal(true);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submit failed");

      setValues(initial);
      setStatus("success");
      setShowModal(true);
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = (hasError) =>
    `peer w-full bg-transparent border-b-2 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 ${
      hasError ? "border-rose-400" : "border-slate-300"
    }`;

  const labelClass = `absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300
    peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
    peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text`;

  const iconClass =
    "absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300";

  return (
    <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-white grid grid-cols-1 lg:grid-cols-12 relative">
      {/* ================= LEFT COLUMN ================= */}
      <div className="lg:col-span-5 bg-[#083761] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#278393]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#278393] text-xs font-bold tracking-widest uppercase backdrop-blur-md border border-white/10">
            GET IN TOUCH
          </span>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Let’s Talk About Your Business Numbers
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Contact our office today for a relaxed, confidential discussion
              over a cup of coffee or a telephone consultation.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                <MapPin size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  Office Location:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  7 Haven Lane, Ealing, London Borough of Ealing, Greater
                  London, W5 2HZ, England, United Kingdom
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                <Phone size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  Phone Support:
                </h4>
                <a
                  href={contactsNo[0].href}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {contactsNo[0].number}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                <Mail size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  Email Address:
                </h4>
                <a
                  href={companyEmail.href}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {companyEmail.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10 relative z-10">
          <p className="text-xs text-slate-400 font-normal">{companyName}.</p>
        </div>
      </div>

      {/* ================= RIGHT COLUMN: FORM ================= */}
      <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between relative bg-white">
        <div>
          <div className="border-b border-slate-200 pb-4 mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#083761] tracking-tight">
              Send An Enquiry
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
              Please enter your contact details below and our team will get back
              to you within 24 hours.
            </p>
          </div>

          <form
            id="contact-panel-form"
            onSubmit={onSubmit}
            noValidate
            className="space-y-2"
          >
            <input
              type="text"
              name="_gotcha_panel"
              value={values._gotcha_panel}
              onChange={onChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              <div className="flex flex-col">
                <div className="relative pt-4">
                  <input
                    type="text"
                    id="client-name"
                    name="client-name"
                    value={values["client-name"]}
                    onChange={onChange}
                    aria-invalid={!!errors["client-name"]}
                    placeholder=" "
                    required
                    className={fieldClass(!!errors["client-name"])}
                  />
                  <label htmlFor="client-name" className={labelClass}>
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <User className={iconClass} />
                </div>
                <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
                  {errors["client-name"] || "\u00A0"}
                </p>
              </div>

              <div className="flex flex-col">
                <div className="relative pt-4">
                  <input
                    type="email"
                    id="client-email"
                    name="client-email"
                    value={values["client-email"]}
                    onChange={onChange}
                    aria-invalid={!!errors["client-email"]}
                    placeholder=" "
                    required
                    className={fieldClass(!!errors["client-email"])}
                  />
                  <label htmlFor="client-email" className={labelClass}>
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <Mail className={iconClass} />
                </div>
                <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
                  {errors["client-email"] || "\u00A0"}
                </p>
              </div>
            </div>

            {/* Business & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              <div className="flex flex-col">
                <div className="relative pt-4">
                  <input
                    type="text"
                    id="client-business"
                    name="client-business"
                    value={values["client-business"]}
                    onChange={onChange}
                    aria-invalid={!!errors["client-business"]}
                    placeholder=" "
                    required
                    className={fieldClass(!!errors["client-business"])}
                  />
                  <label htmlFor="client-business" className={labelClass}>
                    Your Business Name <span className="text-rose-500">*</span>
                  </label>
                  <Building2 className={iconClass} />
                </div>
                <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
                  {errors["client-business"] || "\u00A0"}
                </p>
              </div>

              <div className="flex flex-col">
                <div className="relative pt-4">
                  <input
                    type="tel"
                    id="client-phone"
                    name="client-phone"
                    value={values["client-phone"]}
                    onChange={onChange}
                    aria-invalid={!!errors["client-phone"]}
                    placeholder=" "
                    required
                    className={fieldClass(!!errors["client-phone"])}
                  />
                  <label htmlFor="client-phone" className={labelClass}>
                    Your Phone <span className="text-rose-500">*</span>
                  </label>
                  <Phone className={iconClass} />
                </div>
                <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
                  {errors["client-phone"] || "\u00A0"}
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <div className="relative pt-4">
                <textarea
                  id="client-message"
                  name="client-message"
                  value={values["client-message"]}
                  onChange={onChange}
                  aria-invalid={!!errors["client-message"]}
                  rows={3}
                  placeholder=" "
                  required
                  className={`${fieldClass(!!errors["client-message"])} resize-none`}
                />
                <label htmlFor="client-message" className={labelClass}>
                  How can we help? <span className="text-rose-500">*</span>
                </label>
                <MessageSquare className={`${iconClass} !bottom-3`} />
              </div>
              <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
                {errors["client-message"] || "\u00A0"}
              </p>
            </div>

            <div className="pt-2">
              <AnimatedBtn
                hoverText="Send Now"
                icon={Send}
                bgColor="bg-[#278393]"
                hoverBgColor="hover:bg-[#083761]"
                textColor="text-white"
                hoverTextColor="hover:text-gray-100"
                typeSubmit={true}
                className={
                  status === "loading" ? "opacity-70 pointer-events-none" : ""
                }
              >
                {status === "loading"
                  ? "Sending…"
                  : "Send Consultation Request"}
              </AnimatedBtn>
            </div>

            {status === "error" && (
              <p className="text-sm text-rose-600">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>

        <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 text-xs text-slate-400">
          <Lock size={14} className="text-[#278393] shrink-0" />
          <span>
            We strictly respect your privacy. No spam or aggressive sales
            tactics.
          </span>
        </div>
      </div>

      {/* Success modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-panel-success-title"
        >
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl text-center">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={28} />
            </div>
            <h3
              id="contact-panel-success-title"
              className="text-xl font-bold text-[#083761]"
            >
              Enquiry submitted
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Thank you for contacting {companyName}. We&apos;ve received your
              message and will aim to get back to you within one business day.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 inline-flex rounded-full bg-[#278393] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#083761]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
