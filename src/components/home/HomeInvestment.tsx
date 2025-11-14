import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface InvestmentProps {
  data?: {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    image?: string;
  };
}

const HomeInvestment: React.FC<InvestmentProps> = ({ data }) => {
  if (!data) return null;

  const {
    title = "Investment Opportunities",
    description = "",
    ctaText = "",
    ctaLink = "",
    image = "",
  } = data;

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT – Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {title}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {description}
            </p>

            {ctaLink && (
              <Link
                to={ctaLink}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
              >
                {ctaText} <ArrowRight size={20} />
              </Link>
            )}
          </motion.div>

          {/* RIGHT – Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={image}
              alt="Investment"
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeInvestment;
