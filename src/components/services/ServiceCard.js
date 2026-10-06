import { Calculator } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-[#278393]/5 shadow-lg rounded-xl p-4">
      <div className="py-4 border-b border-b-gray-300">
        <div className="w-12 h-12 rounded-2xl bg-[#083761]/10 text-[#083761] flex items-center justify-center">
          <Calculator size={22} strokeWidth={2.5} />
        </div>
        <h4 className="text-2xl font-bold my-4">{service.title}</h4>
        <p className="text-gray-500">{service.description}</p>
      </div>
      <ul className="text-gray-500 text-sm list-disc list-inside marker:text-[#278393]/70 py-4">
        {service.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
