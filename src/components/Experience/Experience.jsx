import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiRedis,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiExpress,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import Reveal from "../ui/Reveal";
import { fadeUp, staggerContainer } from "../../animations/variants";

const Experience = () => {
  const skills = [
    { name: "React", icon: <FaReact size={18} />, color: "#61DAFB", weight: "bg-white/10" },
    { name: "JavaScript", icon: <FaJs size={18} />, color: "#F7DF1E", weight: "bg-white/5" },
    { name: "Tailwind", icon: <SiTailwindcss size={18} />, color: "#38BDF8", weight: "bg-white/10" },
    { name: "HTML", icon: <FaHtml5 size={18} />, color: "#E34F26", weight: "bg-white/5" },
    { name: "CSS", icon: <FaCss3 size={18} />, color: "#1572B6", weight: "bg-white/5" },
    { name: "Node.js", icon: <FaNodeJs size={18} />, color: "#22C55E", weight: "bg-white/5" },
    { name: "Express", icon: <SiExpress size={18} />, color: "#FACC15", weight: "bg-white/5" },
    { name: "MongoDB", icon: <SiMongodb size={18} />, color: "#22C55E", weight: "bg-white/5" },
    { name: "MySQL", icon: <SiMysql size={18} />, color: "#38BDF8", weight: "bg-white/5" },
    { name: "Redis", icon: <SiRedis size={18} />, color: "#F97316", weight: "bg-white/5" },
    { name: "Postman", icon: <SiPostman size={18} />, color: "#FB923C", weight: "bg-white/5" },
    { name: "Git", icon: <FaGitAlt size={18} />, color: "#F97316", weight: "bg-white/5" },
    { name: "GitHub", icon: <FaGithub size={18} />, color: "#E2E8F0", weight: "bg-white/5" },
    { name: "NPM", icon: <FaNpm size={18} />, color: "#EF4444", weight: "bg-white/5" },
    { name: "Figma", icon: <FaFigma size={18} />, color: "#F472B6", weight: "bg-white/5" },
    { name: "Vercel", icon: <SiVercel size={18} />, color: "#E2E8F0", weight: "bg-white/5" },
  ];

  return (
    <section id="Experience" className="px-6 py-16 md:px-16 md:py-20">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-4xl">
                Skills
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
                A tag cloud of the tools I use daily, curated for fast scanning.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Tag Cloud
            </div>
          </div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                className={`flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur ${skill.weight}`}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0b1020]/70"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span className="uppercase tracking-[0.18em] text-[0.65rem]">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};

export default Experience;