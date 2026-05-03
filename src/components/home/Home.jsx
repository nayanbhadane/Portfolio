import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import avatarImg from "../../assets/png.jpg";
import TextChange from "../TextChange";
import { fadeUp, staggerContainer, floatSlow, glowPulse } from "../../animations/variants";
import MagneticButton from "../ui/MagneticButton";

const Home = () => {
  return (
    <section
      id="Home"
      className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-14 px-6 py-16 md:flex-row md:gap-10 md:px-16 md:py-24"
    >
      <motion.div
        className="absolute inset-0 -z-10 rounded-[36px] border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-transparent blur-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="md:w-2/4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.4em] text-cyan-300/80"
        >
          Crafting premium experiences
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-4 text-3xl font-semibold leading-tight text-white md:text-6xl"
        >
          Hi, I am Nayan.
          <span className="mt-3 block text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 bg-clip-text">
            <TextChange />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-base text-white/70 md:text-xl"
        >
          Frontend developer building modern, responsive web apps with clean
          motion, glassmorphism, and immersive detail.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            className="glow-btn"
            onClick={() =>
              document
                .getElementById("Footer")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </MagneticButton>
          <button
            onClick={() =>
              document
                .getElementById("Projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:border-white/40 hover:text-white"
          >
            View Work
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative"
        variants={floatSlow}
        animate="animate"
      >
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          glareEnable
          glareMaxOpacity={0.2}
          className="rounded-full"
        >
          <motion.img
            src={avatarImg}
            alt="Profile"
            className="h-72 w-72 rounded-full border border-white/10 object-cover shadow-[0_20px_80px_rgba(59,130,246,0.3)] md:h-96 md:w-96"
            variants={glowPulse}
            animate="animate"
          />
        </Tilt>
        <div className="absolute -bottom-4 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-[60px]" />
      </motion.div>
    </section>
  );
};

export default Home;