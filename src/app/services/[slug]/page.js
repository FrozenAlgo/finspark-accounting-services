import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, companyName } from "@/lib/data";
import { Check } from "lucide-react";

// Tells Next.js which pages to generate from your data
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug || service.id,
  }));
}

// SEO title + description for each service
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => (s.slug || s.id) === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | ${companyName}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = servicesData.find((s) => (s.slug || s.id) === slug);

  // If slug doesn't match any service → 404
  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Top banner */}
      <section className="bg-[#083761] text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/services"
            className="text-sm text-slate-300 hover:text-white mb-4 inline-block"
          >
            ← All Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          {service.description}
        </p>

        <h2 className="text-xl font-bold text-[#083761] mb-4">
          What’s included
        </h2>

        <ul className="space-y-3 mb-10">
          {service.points?.map((point, i) => (
            <li key={i} className="flex gap-3 text-slate-700">
              <Check className="text-[#278393] shrink-0 mt-0.5" size={18} />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="inline-block bg-[#278393] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#083761] transition"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
