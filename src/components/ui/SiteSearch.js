"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  FileText,
  Briefcase,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import { posts } from "@/lib/blogData";

const STATIC_PAGES = [
  {
    href: "/",
    title: "Home",
    description:
      "Finspark Accounting — bookkeeping, tax and advisory in London",
    group: "Pages",
  },
  {
    href: "/about",
    title: "About Us",
    description: "Our practice, approach and FCCA-led team",
    group: "Pages",
  },
  {
    href: "/services",
    title: "Services",
    description: "Full list of accountancy and tax services",
    group: "Pages",
  },
  {
    href: "/team",
    title: "Our Team",
    description: "Meet Asif Chaudhry, Asim Malik and the advisers",
    group: "Pages",
  },
  {
    href: "/testimonials",
    title: "Testimonials",
    description: "Client feedback and reviews",
    group: "Pages",
  },
  {
    href: "/blogs",
    title: "Blogs",
    description: "Tax guides, MTD updates and practical insights",
    group: "Pages",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Get in touch or book a consultation",
    group: "Pages",
  },
];

const SERVICES = [
  {
    href: "/services/bookkeeping-vat",
    title: "Bookkeeping & VAT Returns",
    description: "MTD VAT, cloud ledgers, bank reconciliation",
    group: "Services",
  },
  {
    href: "/services/company-accounts-tax",
    title: "Company Accounts & Tax",
    description: "Year-end accounts and corporation tax",
    group: "Services",
  },
  {
    href: "/services/self-assessment",
    title: "Self Assessment",
    description: "Sole traders, landlords and personal tax returns",
    group: "Services",
  },
  {
    href: "/services/payroll",
    title: "Payroll & CIS",
    description: "PAYE, RTI and Construction Industry Scheme",
    group: "Services",
  },
  {
    href: "/services/capital-gains",
    title: "Capital Gains",
    description: "CGT support for disposals and planning",
    group: "Services",
  },
  {
    href: "/services/secretarial",
    title: "Company Secretarial",
    description: "Companies House filings and statutory records",
    group: "Services",
  },
  {
    href: "/services/adhoc-mortgage",
    title: "Ad-hoc & Mortgage Support",
    description: "One-off work and mortgage reference support",
    group: "Services",
  },
];

function buildIndex() {
  const blogItems = posts.map((p) => ({
    href: `/blogs/${p.slug}`,
    title: p.title,
    description: p.excerpt,
    category: p.category,
    group: "Articles",
  }));
  return [...STATIC_PAGES, ...SERVICES, ...blogItems];
}

function GroupIcon({ group }) {
  if (group === "Services")
    return <Briefcase size={16} className="text-[#278393] shrink-0" />;
  if (group === "Articles")
    return <FileText size={16} className="text-[#278393] shrink-0" />;
  return <LayoutGrid size={16} className="text-[#278393] shrink-0" />;
}

export default function SiteSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const index = useMemo(() => buildIndex(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Show a short default list when modal opens
      return index.filter((i) => i.group === "Pages").slice(0, 7);
    }
    return index
      .filter((item) => {
        const hay =
          `${item.title} ${item.description || ""} ${item.category || ""} ${item.group}`.toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 12);
  }, [index, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
    setActive(0);
  }, []);

  const go = useCallback(
    (href) => {
      close();
      router.push(href);
    },
    [close, router],
  );

  // Ctrl/Cmd + K
  useEffect(() => {
    const onKey = (e) => {
      const isK = e.key === "k" || e.key === "K";
      if (isK && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => {
          if (v) {
            setQuery("");
            setActive(0);
            return false;
          }
          return true;
        });
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 20);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Reset active when results change
  useEffect(() => {
    setActive(0);
  }, [results.length, query]);

  const onInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active].href);
    }
  };

  // Keep active row visible
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <>
      {/* Floating search — bottom left; tooltip only on hover */}
      <button
        type="button"
        onClick={openModal}
        aria-label="Search the website (Ctrl or Cmd + K)"
        title="Search · Ctrl / ⌘ + K"
        className="fixed bottom-6 left-6 z-50 group"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#083761] text-white shadow-lg transition-colors group-hover:bg-[#278393]">
          <Search size={20} />
        </span>
        {/* Hover tooltip only — not always on screen */}
        <span
          className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#083761] text-white text-[11px] font-semibold px-3 py-1.5 shadow-md opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
          role="tooltip"
        >
          Search · Ctrl / ⌘ + K
        </span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] sm:pt-[15vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#083761]/40 backdrop-blur-[2px]"
            aria-label="Close search"
            onClick={close}
          />

          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden">
            <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
              <Search size={18} className="text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search pages, services, articles..."
                className="flex-1 bg-transparent text-sm text-[#083761] placeholder:text-slate-400 outline-none font-medium"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={close}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-[#083761]"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div ref={listRef} className="max-h-[50vh] overflow-y-auto py-2">
              {results.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-slate-500">
                  No matches for “{query}”. Try another word.
                </p>
              ) : (
                <ul className="px-2">
                  {results.map((item, idx) => (
                    <li key={item.href + item.title}>
                      <button
                        type="button"
                        data-idx={idx}
                        onClick={() => go(item.href)}
                        onMouseEnter={() => setActive(idx)}
                        className={`w-full text-left flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                          active === idx
                            ? "bg-[#278393]/10"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <span className="mt-0.5">
                          <GroupIcon group={item.group} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="text-sm font-bold text-[#083761] truncate">
                              {item.title}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400 shrink-0">
                              {item.group}
                            </span>
                          </span>
                          {item.description && (
                            <span className="block text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {item.description}
                            </span>
                          )}
                        </span>
                        <ArrowRight
                          size={14}
                          className={`mt-1 shrink-0 ${
                            active === idx ? "text-[#278393]" : "text-slate-300"
                          }`}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-slate-100 px-4 py-2 text-[10px] font-semibold text-slate-400">
              <span>↑↓ Navigate · Enter open · Esc close</span>
              <span className="hidden sm:inline">Ctrl / ⌘ + K</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
