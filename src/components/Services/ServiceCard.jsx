import { motion } from "framer-motion";

const ServiceCard = ({
  pillar,
  title,
  description,
  image,
  accent = "border-teal-400",
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`
        relative
        rounded-xl
        overflow-hidden
        border-l-4 ${accent}
        bg-gradient-to-br from-[#0E253F] to-[#071A2E]
        group
        cursor-pointer
      `}
    >
      {/* Hover Image Layer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-500"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 
                      transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-10 min-h-[300px] flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-300 mb-6">
            {pillar}
          </p>

          <h3 className="text-3xl font-semibold text-white mb-6">
            {title}
          </h3>
        </div>

        <p className="text-gray-300 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;