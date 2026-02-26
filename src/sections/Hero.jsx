import { motion } from "framer-motion";
import heroVideo from "../assets/vid.mp4";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Theme Based Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-3xl"
          >

            {/* Badge */}
            <motion.span
              variants={fadeInUp}
              className="
                inline-block
                bg-white/20 dark:bg-white/10
                px-4 py-2
                rounded-md
                text-sm
                text-white
                backdrop-blur-md
              "
            >
              Designed for Trust. Delivered with Accountability
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="
                mt-6
                text-4xl md:text-6xl
                font-bold
                leading-tight
                text-white
              "
            >
              KSA-Based IT Services & <br />
              Manpower Consulting
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="
                mt-6
                text-lg
                text-gray-200 dark:text-gray-300
              "
            >
              AIM IT Services bridges the gap in the Kingdom's IT landscape —
              offering reasonable cost, high accountability, and senior involvement.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex gap-4 flex-wrap"
            >
              <button
                className="
                  bg-gradient-to-r from-blue-500 to-teal-400
                  px-6 py-3
                  rounded-full
                  font-semibold
                  text-white
                  transition-transform duration-300
                  hover:scale-105
                "
              >
                Explore Our Services
              </button>

              <button
                className="
                  bg-blue-600 dark:bg-blue-700
                  px-6 py-3
                  rounded-full
                  font-semibold
                  text-white
                  transition-transform duration-300
                  hover:scale-105
                "
              >
                Get in Touch
              </button>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;