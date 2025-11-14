import React from "react";
import { motion } from "framer-motion";

interface PartnershipProps {
  data?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

const HomePartnership: React.FC<PartnershipProps> = ({ data }) => {
  if (!data) return null;

  const {
    title = "Why partner with us",
    description = "",
    image = "/assets/partner-default.jpg",
  } = data;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          {title}
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              {title}
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={image}
              alt="Partnership"
              className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomePartnership;
