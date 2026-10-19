export default function sitemap() {
  const base = "https://finsparkaccounting.co.uk";
  const routes = [
    "",
    "/about",
    "/services",
    "/team",
    "/testimonials",
    "/contact",
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
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
