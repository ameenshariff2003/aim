import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Users, Briefcase } from "lucide-react";

const tiers = [
  {
    name: "PLATINUM",
    side: "left",
    accent: "#3EA0FF",
    headerGradient:
      "linear-gradient(180deg, #3E8FD8 0%, #234A74 100%)",
    bodyGradient:
      "linear-gradient(180deg, #122F4D 0%, #0D233A 60%, #0B1E31 100%)",
    footer: "#163A61",
    subtitle: "Enterprise Transformation Partner",
    target: ["Large enterprises", "Government", "Semi-government"],
    services: [
      "SAP, SAP AMS",
      "AI & Automation",
      "Power BI",
      "Cybersecurity",
      "Enterprise",
      "Advisory",
      "Industry 4.0",
      "Enterprise App Dev",
    ],
    manpower: "Senior experts (5–20 years)",
    guarantee: "90 Day Replacement Guarantee",
  },
  {
    name: "GOLD",
    side: "center",
    accent: "#E3B341",
    headerGradient:
      "linear-gradient(180deg, #B88B1A 0%, #6B4E00 100%)",
    bodyGradient:
      "linear-gradient(180deg, #2A210B 0%, #1E1708 60%, #171205 100%)",
    footer: "#4A3709",
    subtitle: "Scalable Technology Solutions",
    target: ["Mid-size businesses", "Growing companies"],
    services: [
      "Managed IT",
      "Cloud",
      "Helpdesk",
      "Web & Mobile Dev",
      "FFMS",
      "IoT",
      "Deployment",
    ],
    manpower: "Mid-level (2–5 years)",
    guarantee: "60 Day Replacement Guarantee",
  },
  {
    name: "SILVER",
    side: "right",
    accent: "#C9D2E3",
    headerGradient:
      "linear-gradient(180deg, #6F7F95 0%, #3F4B5E 100%)",
    bodyGradient:
      "linear-gradient(180deg, #2A3342 0%, #222A38 60%, #1C2330 100%)",
    footer: "#2E3746",
    subtitle: "Reliable Operational IT Support",
    target: ["SMEs", "Retail & Logistics", "Trading & Manufacturing"],
    services: [
      "Field Support",
      "On-site IT",
      "Basic Web & Mobile",
      "Field Force Tracking",
      "Sensor Installation",
    ],
    manpower: "Entry & Bulk (0–2 years)",
    guarantee: "30 Day Replacement Guarantee",
  },
];

export default function ThreeTierSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    left: {
      hidden: { opacity: 0, x: -120 },
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    },
    center: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    },
    right: {
      hidden: { opacity: 0, x: 120 },
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    },
  };

  return (
    <section
      ref={ref}
      className="py-24"
      style={{
        background:
          "radial-gradient(circle at center, #0C2544 0%, #081C33 60%, #061728 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-stretch">

        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            variants={variants[tier.side]}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-xl overflow-hidden relative flex flex-col h-full"
            style={{
              border: `1px solid ${tier.accent}`,
              boxShadow:
                tier.name === "GOLD"
                  ? "0 0 60px rgba(227,179,65,0.35)"
                  : "0 0 30px rgba(0,0,0,0.4)",
            }}
          >

            {/* GOLD center glow */}
            {tier.name === "GOLD" && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(227,179,65,0.18) 50%, transparent 100%)",
                }}
              />
            )}

            {/* HEADER */}
            <div
              className="text-center py-10 px-6"
              style={{ background: tier.headerGradient }}
            >
              <span
                className="px-6 py-2 text-sm font-semibold rounded-md border"
                style={{
                  borderColor: tier.accent,
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                }}
              >
                {tier.name}
              </span>

              <div className="h-[1px] bg-white/30 my-6" />

              <h3 className="text-white text-lg leading-relaxed">
                {tier.subtitle}
              </h3>
            </div>

            {/* BODY */}
            <div
              className="px-8 py-10 text-white space-y-8 flex-grow"
              style={{ background: tier.bodyGradient }}
            >

              {/* Target Clients */}
              <div>
                <div className="flex items-center gap-2 mb-3 opacity-90">
                  <Users size={16} color={tier.accent} />
                  <h4 style={{ color: tier.accent }} className="text-sm font-semibold">
                    Target Clients
                  </h4>
                </div>

                <div className="space-y-2 text-sm opacity-90">
                  {tier.target.map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <Check size={14} color={tier.accent} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-white/10" />

              {/* IT Services */}
              <div>
                <div className="flex items-center gap-2 mb-3 opacity-90">
                  <Briefcase size={16} color={tier.accent} />
                  <h4 style={{ color: tier.accent }} className="text-sm font-semibold">
                    IT Services
                  </h4>
                </div>

                <div className="space-y-2 text-sm opacity-90">
                  {tier.services.map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <Check size={14} color={tier.accent} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-white/10" />

              {/* Manpower */}
              <div>
                <div className="flex items-center gap-2 mb-3 opacity-90">
                  <Users size={16} color={tier.accent} />
                  <h4 style={{ color: tier.accent }} className="text-sm font-semibold">
                    Manpower Focus
                  </h4>
                </div>

                <div className="flex gap-2 items-start text-sm opacity-90">
                  <Check size={14} color={tier.accent} />
                  <span>{tier.manpower}</span>
                </div>
              </div>
            </div>

            {/* FOOTER (locked to bottom) */}
            <div
              className="py-6 text-center text-white font-semibold tracking-wide mt-auto"
              style={{ background: tier.footer }}
            >
              {tier.guarantee}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}