
import map from "../../assets/map.jpg"
import { motion } from "framer-motion";

const locations = [
  { country: "Saudi Arabia", desc: "Headquarters — local team, operations, client management" },
  { country: "Oman", desc: "Regional office (establishing)" },
  { country: "Bahrain", desc: "Regional office (establishing)" },
  { country: "UAE", desc: "Advisory and strategic partnerships" },
  { country: "Kuwait", desc: "Advisory and strategic partnerships" },
  { country: "India", desc: "Technology delivery and consulting centre" },
  { country: "Pakistan", desc: "Software development and IT delivery centre" },
  { country: "United States", desc: "Partner office — enterprise consulting reach" },
  { country: "United Kingdom", desc: "Partner office — enterprise consulting reach" },
];

export default function Map() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">

      {/* 🌍 Background Image */}
      <img
        src={map}   
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* 🌙 Navy Overlay */}
      <div className="absolute inset-0 bg-[#071C33]/95 -z-10" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-24">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-block border border-blue-400/40 px-4 py-1 text-sm mb-6">
            Our Global Presence
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Wherever You Operate, We Deliver
          </h2>

          <p className="mt-4 text-gray-300 text-sm">
            AIM is not a virtual company. We are building physical,
            accountable presence in every market we serve.
          </p>
        </div>

        {/* Right Floating List */}
        <div className="mt-16 md:absolute md:right-16 md:top-40 md:w-[400px]">

          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 mb-6"
            >
              <div className="mt-2 w-2 h-2 rounded-full bg-blue-400" />

              <div>
                <h4 className="font-semibold text-base">
                  {loc.country}
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  {loc.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}