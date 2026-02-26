import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpg";
import img3 from "../../assets/slide3.jpg";
import img4 from "../../assets/slide4.jpg";
import img5 from "../../assets/slide5.jpg";
import img6 from "../../assets/slide6.jpg";
import img7 from "../../assets/slide7.jpg";

const slides = [
  {
    title: "Software Development",
    desc: "Scalable, business-focused custom applications.",
    tags: ["Web", "Mobile", "FFMS"],
    img: img1,
  },
  {
    title: "Cloud & Managed Services",
    desc: "Secure cloud operations with proactive support.",
    tags: ["AWS", "Azure", "24/7"],
    img: img2,
  },
  {
    title: "ERP & BI",
    desc: "Systems that improve visibility and control.",
    tags: ["SAP", "AMS", "Power BI"],
    img: img3,
  },
  {
    title: "AI & Intelligent Automation",
    desc: "Automation that increases efficiency and reduces cost.",
    tags: ["Platinum Tier"],
    img: img4,
  },
  {
    title: "Cybersecurity",
    desc: "Protection for critical systems and data.",
    tags: ["NCA", "SAMA", "Compliance"],
    img: img5,
  },
  {
    title: "Industry 4.0 / Smart Manufacturing",
    desc: "Smart technologies for connected operations.",
    tags: ["IoT", "Sensors", "Consulting"],
    img: img6,
  },
  {
    title: "Local KSA Presence",
    desc: "On-ground support with accountable leadership.",
    tags: ["On-ground", "Local Team"],
    img: img7,
  },
];


// 🔥 Slide Content Component
const SlideContent = ({ slide }) => {
  const { isActive } = useSwiperSlide();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      className="relative z-10 text-center text-white px-6 max-w-3xl"
    >
      <motion.h3
        variants={item}
        className="text-3xl md:text-5xl font-semibold mb-4"
      >
        {slide.title}
      </motion.h3>

      <motion.p
        variants={item}
        className="text-base md:text-lg text-gray-200 mb-6"
      >
        {slide.desc}
      </motion.p>

      <motion.div
        variants={item}
        className="flex justify-center flex-wrap gap-4 mb-8"
      >
        {slide.tags.map((tag, i) => (
          <span
            key={i}
            className="px-5 py-2 rounded-full border border-white/40 text-sm backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.button
        variants={item}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 font-medium"
      >
        Know more..
      </motion.button>
    </motion.div>
  );
};


// 🔥 Main Slider Component
const CapabilitiesSlider = () => {
  return (
    <section className="py-20 bg-[#071A2E]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="mb-6">
          <span className="border border-white/20 px-4 py-2 text-sm text-white">
            Our Capabilities
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12">
          Where Technology Meets Execution
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="rounded-xl overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideBackground slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};


// 🔥 Background + Zoom Effect
const SlideBackground = ({ slide }) => {
  const { isActive } = useSwiperSlide();

  return (
    <div className="relative h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Zoom on Active */}
      <motion.div
        animate={isActive ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated Content */}
      <SlideContent slide={slide} />
    </div>
  );
};

export default CapabilitiesSlider;