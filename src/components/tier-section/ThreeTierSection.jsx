import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Users, Briefcase } from "lucide-react";

/* ---------------- DATA (UNCHANGED) ---------------- */

const tiers = [
  {
    name: "PLATINUM",
    side: "left",
    accent: "#3EA0FF",
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
    left: { hidden: { opacity: 0, x: -120 }, visible: { opacity: 1, x: 0 } },
    center: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
    right: { hidden: { opacity: 0, x: 120 }, visible: { opacity: 1, x: 0 } },
  };

  return (
    <section
      ref={ref}
      className="
        py-24 transition-colors duration-300
        bg-[#F4F6F8]
        dark:bg-[radial-gradient(circle_at_center,#0C2544_0%,#081C33_60%,#061728_100%)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="mb-14">

          <div className="flex items-center gap-3 mb-5">
            <span className="w-[2px] h-6 bg-[#1E3553] dark:bg-white/70" />

            <span className="
              text-sm px-3 py-1 rounded-sm
              bg-[#E9EDF2] text-[#1E3553]
              dark:bg-white/10 dark:text-white
            ">
              Our Model
            </span>
          </div>

          <h2 className="
            text-3xl md:text-4xl font-semibold tracking-tight
            text-[#1E3553]
            dark:text-white
          ">
            Three-Tier Delivery Structure
          </h2>

          <p className="
            mt-2 text-sm
            text-[#7C8EA3]
            dark:text-white/60
          ">
            Structured to Serve the Full Spectrum of KSA
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {tiers.map((tier, i) => {

            const lightStyles = {
              PLATINUM: {
                header: "bg-[#AFC6DD]",
                body: "bg-[#F1F4F7]",
                footer: "bg-[#AFC6DD]",
                border: "#6FA3D6",
                text: "text-[#1E3553]",
              },
              GOLD: {
                header: "bg-[#E6D3A9]",
                body: "bg-[#F7F3E8]",
                footer: "bg-[#E6D3A9]",
                border: "#D4A94A",
                text: "text-[#3A2A07]",
              },
              SILVER: {
                header: "bg-[#D9DEE6]",
                body: "bg-[#F5F6F8]",
                footer: "bg-[#D9DEE6]",
                border: "#AEB6C2",
                text: "text-[#2F3B4C]",
              },
            }[tier.name];

            return (
              <motion.div
                key={i}
                variants={variants[tier.side]}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{ border: `1px solid ${lightStyles.border}` }}
              >
                {/* HEADER */}
                <div className={`
                  text-center py-10 px-6
                  ${lightStyles.header}
                  dark:bg-gradient-to-b
                  dark:from-[#1B3E63]
                  dark:to-[#0E253F]
                `}>
                  <span
                    className="px-6 py-2 text-sm font-semibold rounded-md border
                               bg-white/20 dark:bg-white/10 text-white"
                    style={{ borderColor: tier.accent }}
                  >
                    {tier.name}
                  </span>

                  <div className="h-[1px] bg-black/10 dark:bg-white/25 my-6" />

                  <h3 className={`${lightStyles.text} dark:text-white`}>
                    {tier.subtitle}
                  </h3>
                </div>

                {/* BODY */}
                <div className={`
                  px-8 py-10 flex-grow space-y-8
                  ${lightStyles.body} ${lightStyles.text}
                  dark:bg-[#0D233A] dark:text-white
                `}>

                  <Section icon={Users} title="Target Clients" items={tier.target} accent={tier.accent} />
                  <Divider />
                  <Section icon={Briefcase} title="IT Services" items={tier.services} accent={tier.accent} />
                  <Divider />

                  <div>
                    <SectionTitle icon={Users} title="Manpower Focus" accent={tier.accent}/>
                    <Row text={tier.manpower} accent={tier.accent}/>
                  </div>
                </div>

                {/* FOOTER */}
                <div className={`
                  py-6 text-center font-semibold
                  ${lightStyles.footer} ${lightStyles.text}
                  dark:bg-[#163A61] dark:text-white
                `}>
                  {tier.guarantee}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

const Divider = () => (
  <div className="h-[1px] bg-black/10 dark:bg-white/10" />
);

const SectionTitle = ({ icon: Icon, title, accent }) => (
  <div className="flex items-center gap-2 mb-3">
    <Icon size={16} color={accent} />
    <h4 className="text-sm font-semibold">{title}</h4>
  </div>
);

const Row = ({ text, accent }) => (
  <div className="flex gap-2 items-start text-sm">
    <Check size={14} color={accent} />
    <span>{text}</span>
  </div>
);

const Section = ({ icon, title, items, accent }) => (
  <div>
    <SectionTitle icon={icon} title={title} accent={accent} />
    <div className="space-y-2 text-sm">
      {items.map((item, i) => (
        <Row key={i} text={item} accent={accent} />
      ))}
    </div>
  </div>
);