import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import banner1 from "../../assets/meme.png";
import banner2 from "../../assets/search-tool.png";
import Reveal from "../ui/Reveal";
import { fadeUp, staggerContainer } from "../../animations/variants";

const Projects = () => {
  return (
    <section id="Projects" className="px-6 py-16 text-white md:px-16 md:py-20">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <h2 className="text-2xl font-semibold md:text-4xl">Projects</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
            Selected projects with polished UI, purposeful animations, and
            product-grade design execution.
          </p>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <ProjectCard
                title="Legal Document Search Tool"
                main="Smart search system for legal documents and case files with semantic ranking and smart filters."
                banner={banner2}
                demoLink="#"
                codeLink="#"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <ProjectCard
                title="MemeMatch"
                main="AI-powered meme sharing and matching platform with discovery feeds and social reactions."
                banner={banner1}
                demoLink="#"
                codeLink="#"
              />
            </motion.div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;