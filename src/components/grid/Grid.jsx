import {
  Landmark,
  Building2,
  Banknote,
  HeartPulse,
  Truck,
  Building,
  Store,
  BarChart3,
  Factory,
} from "lucide-react";

const industries = [
  {
    title: "Government & Semi-Government",
    icon: Landmark,
    quote:
      "Strategic IT advisory, transformation programs & governance support.",
  },
  {
    title: "Large Enterprises",
    icon: Building2,
    quote:
      "Enterprise architecture, SAP, AI & digital transformation.",
  },
  {
    title: "Financial Services",
    icon: Banknote,
    quote:
      "Secure fintech systems, compliance & data protection.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    quote:
      "Smart healthcare IT, automation & data integration.",
  },
  {
    title: "Logistics & Supply Chain",
    icon: Truck,
    quote:
      "IT operations, WMS, field support & automation.",
  },
  {
    title: "Construction & Real Estate",
    icon: Building,
    quote:
      "ERP, project management & field tracking solutions.",
  },
  {
    title: "Retail & Consumer Businesses",
    icon: Store,
    quote:
      "POS systems, inventory automation & analytics.",
  },
  {
    title: "Trading & Industrial",
    icon: BarChart3,
    quote:
      "Operational dashboards & enterprise visibility tools.",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    quote:
      "Industry 4.0, IoT integration & smart automation.",
  },
];

export default function Grid() {
  return (
    <section className="py-24 bg-white dark:bg-[#071A2E] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <span className="border border-gray-300 dark:border-white/20 px-4 py-2 text-sm text-gray-800 dark:text-white">
            Industries We Serve
          </span>
        </div>

        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Where Our Expertise Delivers Impact
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-14 max-w-3xl">
          AIM IT Services provides manpower consulting and IT services across
          nine sectors in the Kingdom of Saudi Arabia.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3">

          {industries.map((item, index) => {
            const Icon = item.icon;
            const isLastColumn = (index + 1) % 3 === 0;

            return (
              <div
                key={index}
                className={`
                  relative group overflow-hidden
                  h-[210px]
                  flex items-center justify-center text-center
                  bg-white dark:bg-[#0F2742]
                  border-b border-gray-200 dark:border-[#1E3A5F]
                  ${!isLastColumn ? "border-r border-gray-200 dark:border-[#1E3A5F]" : ""}
                  transition-colors duration-500
                `}
              >

                {/* Default Content */}
                <div className="
                  z-10
                  transition-opacity duration-500
                  group-hover:opacity-20
                ">
                  <Icon
                    size={42}
                    className="mx-auto text-blue-600 dark:text-blue-400 mb-4"
                  />
                  <p className="text-blue-700 dark:text-blue-300 font-medium text-sm px-4">
                    {item.title}
                  </p>
                </div>

                {/* Sliding Panel */}
                <div
                  className="
                    absolute inset-0
                    flex items-center justify-center text-center px-6
                    bg-white dark:bg-[#0C2036]
                    transform translate-y-full
                    group-hover:translate-y-0
                    transition-transform duration-[800ms]
                    ease-[cubic-bezier(.22,.61,.36,1)]
                  "
                >
                  <p className="
                    text-gray-800 dark:text-white
                    text-sm font-medium
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500 delay-200
                  ">
                    {item.quote}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}