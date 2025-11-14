import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;
    ctaText1?: string;
    ctaText2?: string;
  };
}

const HomeHero: React.FC<HeroProps> = ({ data }) => {
  if (!data) return null;

  const {
    title,
    subtitle,
    description,
    backgroundImage,
    ctaText1,
    ctaText2,
  } = data;

  return (
    <section
      className="
        relative flex flex-col items-center justify-center 
        text-center min-h-screen overflow-hidden
      "
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(to right, #14532d, #22c55e)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated background zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          filter: "brightness(0.75)",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Cinematic dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-white max-w-[90%] md:max-w-4xl lg:max-w-5xl px-4 md:px-6 mx-auto">

        {/* TITLE */}
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              font-extrabold 
              leading-[1.1]
              drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]
              text-[clamp(2rem,6vw,5rem)]
            "
          >
            {title}
          </motion.h1>
        )}

        {/* SUBTITLE */}
        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
              mt-6 
              font-semibold 
              text-emerald-300 
              tracking-wide
              text-[clamp(1.2rem,2.5vw,2rem)]
            "
          >
            {subtitle}
          </motion.h2>
        )}

        {/* DESCRIPTION */}
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="
              mt-6 
              text-gray-100 
              leading-relaxed
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
              text-[clamp(1rem,1.5vw,1.4rem)]
              max-w-3xl 
              mx-auto
            "
          >
            {description}
          </motion.p>
        )}

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          {ctaText1 && (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="
                px-8 py-3 rounded-full 
                bg-gradient-to-r from-emerald-500 to-green-600
                text-white font-semibold
                text-[clamp(0.9rem,1.2vw,1.2rem)]
                shadow-lg hover:shadow-emerald-400/40 
                transition-all duration-300
              "
            >
              {ctaText1}
            </motion.button>
          )}

          {ctaText2 && (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="
                px-8 py-3 rounded-full 
                border-2 border-white/80 
                text-white font-semibold
                text-[clamp(0.9rem,1.2vw,1.2rem)]
                hover:bg-white hover:text-emerald-700
                transition-all duration-300
              "
            >
              {ctaText2}
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
