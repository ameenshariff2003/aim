import ServiceCard from "./ServiceCard";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import bgVideo from "../../assets/neon.mp4"; // your video file

const ServicesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-[#071A2E]/85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Tag */}
        <div className="mb-6">
          <span className="border border-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
            What We Do
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16">
          Services Built Around Your Operations
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          <ServiceCard
            pillar="Pillar – 1"
            title="IT Services"
            description="SAP advisory, AI & automation, web & mobile app development, managed IT, cloud, cybersecurity, smart manufacturing, and field support — structured by client tier."
            image={img1}
            accent="border-teal-400"
          />

          <ServiceCard
            pillar="Pillar – 2"
            title="Manpower Consulting"
            description="Source, vet, and place IT professionals across all experience levels with retention guarantees on every placement."
            image={img2}
            accent="border-yellow-400"
          />

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;