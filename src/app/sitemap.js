import { getAllSlugs } from "@/lib/blogData";

export default function sitemap() {
  const base = "https://finsparkaccounting.co.uk";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/team",
    "/testimonials",
    "/contact",
    "/blogs",
    "/privacy-policy",
    "/terms",
    "/services/bookkeeping-vat",
    "/services/company-accounts-tax",
    "/services/self-assessment",
    "/services/payroll",
    "/services/capital-gains",
    "/services/secretarial",
    "/services/adhoc-mortgage",
  ];

  const blogRoutes = getAllSlugs().map((slug) => `/blogs/${slug}`);

  return [...staticRoutes, ...blogRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
