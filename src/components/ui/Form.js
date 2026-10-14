"use client";

import React, { useState } from "react";
import {
  Building2,
  Mail,
  Phone,
  Send,
  User,
  MessageSquare,
  CheckCircleIcon,
  CheckCircle2,
  X,
} from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";
import { companyName, FormspreeEndpoint } from "@/lib/data";

const initial = {
  name: "",
  email: "",
  business: "",
  phone: "",
  message: "",
  _gotcha: "",
};

// Keep empty while testing UI — no Formspree tokens used
// const FORMSPREE_ENDPOINT = "";
const FORMSPREE_ENDPOINT = FormspreeEndpoint;

function validate(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();
  const business = values.business.trim();

  if (name.length < 2) errors.name = "Please enter your full name.";
  if (name.length > 80) errors.name = "Name is too long.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (email.length > 120) errors.email = "Email is too long.";

  if (business.length < 2) {
    errors.business = "Please enter your business name.";
  }
  if (business.length > 120) {
    errors.business = "Business name is too long.";
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (message.length < 10) {
    errors.message = "Please tell us a bit more (at least 10 characters).";
  }
  if (message.length > 2000) {
    errors.message = "Message is too long.";
  }

  return errors;
}

export default function Form({ headingColor }) {
  const isLight = Boolean(headingColor);

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

    // Bot filled honeypot → fake success, do not send
    if (values._gotcha) {
      setStatus("success");
      setShowModal(true);
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");

    // Dev mode: no Formspree call while endpoint is empty
    if (!FORMSPREE_ENDPOINT) {
      console.log("Form payload (dev only — not sent):", {
        name: values.name.trim(),
        email: values.email.trim(),
        business: values.business.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
      });
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
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          business: values.business.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          _subject: "New enquiry from Finspark website",
        }),
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
    `peer w-full bg-transparent border-b-2 py-2 pr-10 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 text-sm ${
      hasError
        ? "border-rose-400"
        : isLight
          ? "border-slate-300 text-slate-900"
          : "border-slate-300/60 text-white"
    } ${isLight && !hasError ? "text-slate-900" : ""} ${
      !isLight && !hasError ? "text-white" : ""
    } ${hasError ? (isLight ? "text-slate-900" : "text-white") : ""}`;

  const labelClass = `absolute left-0 -top-1 text-xs transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[#278393] font-medium cursor-text ${
    isLight
      ? "text-slate-600 peer-placeholder-shown:text-slate-500"
      : "text-slate-300 peer-placeholder-shown:text-slate-400"
  }`;

  const iconClass = `absolute right-0 bottom-2 w-5 h-5 pointer-events-none transition-colors duration-300 ${
    isLight
      ? "text-slate-400 peer-focus:text-[#278393]"
      : "text-slate-400 peer-focus:text-[#278393]"
  }`;

  return (
    <div
      className={`z-10 p-6 sm:p-8 rounded-2xl shadow-2xl relative ${
        isLight
          ? "bg-white text-slate-900 border border-slate-200 shadow-slate-200/50"
          : "text-white bg-white/10 backdrop-blur-xl border border-white/20"
      }`}
    >
      {/* Header */}
      {isLight ? (
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h2 className="text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
            Send An Enquiry
          </h2>
          <p className="py-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Please enter your contact details below and our team will get back
            to you within 24 hours.
          </p>
        </div>
      ) : (
        <div className="border-b border-white/20 pb-4 mb-6">
          <h2 className="text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300 font-bold tracking-tight">
            Send An Enquiry
          </h2>
          <p className="py-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Please enter your contact details below and our team will get back
            to you within 24 hours.
          </p>
        </div>
      )}

      <form
        id="contact-form"
        onSubmit={onSubmit}
        noValidate
        className="space-y-2"
      >
        {/* Honeypot */}
        <input
          type="text"
          name="_gotcha"
          value={values._gotcha}
          onChange={onChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
          <div className="flex flex-col">
            <div className="relative pt-4">
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={onChange}
                aria-invalid={!!errors.name}
                placeholder=" "
                required
                className={fieldClass(!!errors.name)}
              />
              <label htmlFor="name" className={labelClass}>
                Your Name <span className="text-rose-500">*</span>
              </label>
              <User className={iconClass} />
            </div>
            <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
              {errors.name || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col">
            <div className="relative pt-4">
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={onChange}
                aria-invalid={!!errors.email}
                placeholder=" "
                required
                className={fieldClass(!!errors.email)}
              />
              <label htmlFor="email" className={labelClass}>
                Your Email <span className="text-rose-500">*</span>
              </label>
              <Mail className={iconClass} />
            </div>
            <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
              {errors.email || "\u00A0"}
            </p>
          </div>
        </div>

        {/* Business & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
          <div className="flex flex-col">
            <div className="relative pt-4">
              <input
                type="text"
                id="business"
                name="business"
                value={values.business}
                onChange={onChange}
                aria-invalid={!!errors.business}
                placeholder=" "
                required
                className={fieldClass(!!errors.business)}
              />
              <label htmlFor="business" className={labelClass}>
                Your Business Name <span className="text-rose-500">*</span>
              </label>
              <Building2 className={iconClass} />
            </div>
            <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
              {errors.business || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col">
            <div className="relative pt-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={onChange}
                aria-invalid={!!errors.phone}
                placeholder=" "
                required
                className={fieldClass(!!errors.phone)}
              />
              <label htmlFor="phone" className={labelClass}>
                Your Phone <span className="text-rose-500">*</span>
              </label>
              <Phone className={iconClass} />
            </div>
            <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
              {errors.phone || "\u00A0"}
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <div className="relative pt-4">
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={onChange}
              aria-invalid={!!errors.message}
              rows={3}
              placeholder=" "
              required
              className={`${fieldClass(!!errors.message)} resize-none`}
            />
            <label htmlFor="message" className={labelClass}>
              How can we help? <span className="text-rose-500">*</span>
            </label>
            <MessageSquare className={`${iconClass} !bottom-3`} />
          </div>
          <p className="mt-1 min-h-[1.25rem] text-xs text-rose-500">
            {errors.message || "\u00A0"}
          </p>
        </div>

        <div className="pt-2">
          <AnimatedBtn
            hoverText="Send Now"
            icon={Send}
            bgColor="bg-[#278393]"
            hoverBgColor="hover:bg-[#1f6875]"
            textColor="text-white"
            hoverTextColor="hover:text-white"
            typeSubmit={true}
            className={
              status === "loading" ? "opacity-70 pointer-events-none" : ""
            }
          >
            {status === "loading" ? "Sending…" : "Send Consultation Request"}
          </AnimatedBtn>
        </div>

        {status === "error" && (
          <p className="text-sm text-rose-600">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </form>

      {/* HMRC badge */}
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

      {/* Success modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-success-title"
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
              id="enquiry-success-title"
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
