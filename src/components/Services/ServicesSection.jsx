import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import bgVideo from "../../assets/neon.mp4";

/* ---------------- ANIMATIONS ---------------- */

const leftSlide = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightSlide = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          brightness-90 dark:brightness-75
        "
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* ================= THEME OVERLAY ================= */}
      {/* Light → white opacity | Dark → navy overlay */}
      <div
        className="
          absolute inset-0
          bg-white/70 dark:bg-[#071A2E]/85
          backdrop-blur-[2px]
          transition-colors duration-300
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Tag */}
        <div className="mb-6">
          <span
            className="
              border border-black/10 dark:border-white/20
              px-4 py-2
              text-sm
              text-[#243B5A] dark:text-white
              backdrop-blur-sm
              bg-white/40 dark:bg-transparent
            "
          >
            What We Do
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl font-semibold
            mb-16
            text-[#243B5A] dark:text-white
          "
        >
          Two Integrated Pillars
        </h2>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <motion.div
            variants={leftSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceCard
              pillar="Pillar – 1"
              title="IT Services"
              description="SAP advisory, AI & automation, web & mobile app development, managed IT, cloud, cybersecurity, smart manufacturing, and field support — structured by client tier."
              image={img1}
              accent="border-blue-500"
            />
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={rightSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceCard
              pillar="Pillar – 2"
              title="Manpower Consulting"
              description="Source, vet, and place IT professionals across all experience levels with retention guarantees on every placement."
              image={img2}
              accent="border-teal-400"
            />
          </motion.div>

        </div>

        {/* ================= FOOT NOTE ================= */}
        <p
          className="
            mt-14
            text-sm
            max-w-5xl
            text-[#243B5A] dark:text-gray-300
            border-l-4 border-yellow-400
            pl-4
          "
        >
          <span className="text-yellow-500 font-semibold">
            What makes our model different:
          </span>{" "}
          Manpower consulting is not a side offering. It is our core capability
          that runs through every tier of our business. The same rigor applied
          to senior consulting is scaled appropriately for each tier.
        </p>

      </div>
    </section>
  );
};

export default ServicesSection;