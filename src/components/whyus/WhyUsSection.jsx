import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import centerImg from "../../assets/whyus.jpg";

const leftCards = [
  {
    title: "Who sells, delivers",
    desc: "No handoff to junior teams after contract",
  },
  {
    title: "Local accountability",
    desc: "KSA-based decision makers, not offshore escalation",
  },
  {
    title: "Named resources",
    desc: "Know exactly who works on your account",
  },
];

const rightCards = [
  {
    title: "Replacement guarantee",
    desc: "90/60/30 day free replacement across all tiers",
  },
  {
    title: "Transparent pricing",
    desc: "No hidden costs, scope defined upfront",
  },
  {
    title: "Tiered focus",
    desc: 'Three focused tiers, not generic "end-to-end" claims',
  },
];

const bottomCard = {
  title: "Local + Global",
  desc: "Local relationship managers backed by international consulting expertise",
};

const WhyUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-white dark:bg-[#071A2E] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="mb-6">
          <span className="border border-gray-300 dark:border-white/20 px-4 py-2 text-sm text-gray-800 dark:text-white">
            Why Us
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-900 dark:text-white">
          Built on Accountability. Proven in Execution.
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-3xl">
          We built AIM to be the company we wished existed when we were the clients.
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {leftCards.map((card, index) => (
              <motion.div
                key={index}
                variants={leftVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-6 rounded-lg
                  bg-white dark:bg-[#0E253F]
                  border border-gray-200 dark:border-white/10
                  shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <div className="h-[1px] bg-gray-300 dark:bg-white/20 mb-3" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              src={centerImg}
              alt="Why us"
              className="rounded-lg shadow-xl w-full max-w-md object-cover"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {rightCards.map((card, index) => (
              <motion.div
                key={index}
                variants={rightVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-6 rounded-lg
                  bg-white dark:bg-[#0E253F]
                  border border-gray-200 dark:border-white/10
                  shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <div className="h-[1px] bg-gray-300 dark:bg-white/20 mb-3" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Center Card */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-lg
              bg-white dark:bg-[#0E253F]
              border border-gray-200 dark:border-white/10
              shadow-md max-w-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {bottomCard.title}
            </h3>
            <div className="h-[1px] bg-gray-300 dark:bg-white/20 mb-3" />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {bottomCard.desc}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;