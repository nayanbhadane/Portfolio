import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/Multi-tasking.gif";
import { IoArrowForward } from "react-icons/io5";
import Reveal from "../ui/Reveal";
import { floatSlow, slideIn, staggerContainer } from "../../animations/variants";

const About = () => {
  return (
    <section id="About" className="px-6 py-16 md:px-16 md:py-20">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl md:p-12">
          <h2 className="text-2xl font-semibold text-white md:text-4xl">
            About
          </h2>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={slideIn("left")}
              className="relative"
            >
              <motion.div variants={floatSlow} animate="animate">
                <img
                  src={AboutImg}
                  alt="About"
                  className="w-full max-w-[360px] rounded-2xl border border-white/10 object-cover shadow-2xl"
                />
              </motion.div>
              <div className="absolute -bottom-4 left-6 h-20 w-20 rounded-full bg-indigo-500/30 blur-[40px]" />
            </motion.div>

            <motion.ul
              variants={slideIn("right")}
              className="space-y-6"
            >
              {[
                {
                  title: "Frontend Developer",
                  text: "Building modern and responsive user interfaces using React, Tailwind, and motion-driven interactions.",
                },
                {
                  title: "Product Focus",
                  text: "Designing intuitive flows, sharp visuals, and delightful micro-interactions for premium UX.",
                },
                {
                  title: "Backend Awareness",
                  text: "Comfortable collaborating on APIs, data flows, and performance-focused delivery.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <motion.span
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-transparent text-cyan-200"
                  >
                    <IoArrowForward size={20} />
                  </motion.span>
                  <div className="max-w-xl">
                    <h3 className="text-lg font-semibold text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;