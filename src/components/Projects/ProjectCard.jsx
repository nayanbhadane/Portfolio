import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { cardHover } from "../../animations/variants";

const ProjectCard = ({ title, main, banner, demoLink, codeLink }) => {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.2}>
      <motion.div
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020]/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.4)]"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            className="h-48 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
            src={banner}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
            <a
              href={demoLink}
              className="rounded-full bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              Demo
            </a>
            <a
              href={codeLink}
              className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white transition duration-300 hover:-translate-y-1 hover:border-white/40"
            >
              Code
            </a>
          </div>
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white md:text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-sm text-white/70 md:text-base">
          {main}
        </p>

        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-indigo-500/20 blur-[60px] transition duration-300 group-hover:opacity-100" />
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;