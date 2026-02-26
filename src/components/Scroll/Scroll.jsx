import { useRef } from "react";
import img from "../../assets/vision.jpg"

const slides = [
  {
    number: "01",
    title: "Digital Transformation",
    desc: "Supporting enterprises and government entities through their technology modernisation journeys.",
  },
  {
    number: "02",
    title: "Saudization",
    desc: "Strengthening local workforce capabilities aligned with national objectives.",
  },
  {
    number: "03",
    title: "SME Growth",
    desc: "Enabling small and medium enterprises with accessible, quality IT support through our Silver tier.",
  },
  {
    number: "04",
    title: "Smart Manufacturing",
    desc: "Industry 4.0/5.0 consulting aligned with government-funded programmes (MODON, SIDF, NTP).",
  },
  {
    number: "05",
    title: "University Partnership",
    desc: "Fresh graduate pathway through university partnerships, positioning as CSR activity for government and enterprise engagements.",
  },
];

export default function Scroll() {
  const scrollRef = useRef(null);

  return (
    <section className="w-full h-screen flex overflow-hidden">

      {/* LEFT SIDE (Sticky Image Panel) */}
      <div className="w-1/2 relative hidden md:block">
        <div className="sticky top-0 h-screen">
          <img
            src={img}
            alt="Vision 2030"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col justify-center px-16 text-white">
            <h2 className="text-5xl font-semibold leading-tight">
              Vision <span className="text-blue-400">2030</span>
              <br /> Alignment
            </h2>

            <p className="mt-6 text-sm text-gray-300 max-w-md">
              Our services are aligned with Saudi Vision 2030 by enabling
              digital transformation, strengthening local capabilities, and
              supporting sustainable economic growth through responsible
              technology and workforce development.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (Scrollable Panel) */}
      <div
        ref={scrollRef}
        className="
          w-full md:w-1/2
          h-screen
          overflow-y-auto
          snap-y snap-mandatory
          scroll-smooth
        "
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              h-screen snap-start
              flex flex-col justify-center
              px-16
              ${
                index % 2 === 0
                  ? "bg-[#243F66]"
                  : "bg-[#0B2038]"
              }
            `}
          >
            <div className="text-white">
              <p className="text-lg opacity-80">{slide.number}</p>

              <h3 className="text-4xl font-semibold mt-4">
                {slide.title}
              </h3>

              <p className="mt-6 text-sm text-gray-300 max-w-md">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}