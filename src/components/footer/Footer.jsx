import React from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Reveal from "../ui/Reveal";
import { fadeUp, staggerContainer } from "../../animations/variants";

const Footer = () => {
  return (
    <section id="Footer" className="px-6 pb-16 pt-10 md:px-16 md:pb-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-[120px]" />

          <motion.div
            className="grid gap-10 md:grid-cols-[1.1fr_1fr]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-semibold md:text-5xl">Contact</h2>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                Let us build something premium together. Drop a message and I
                will reply fast.
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                <a
                  href="mailto:nayanbhadane11@gmail.com"
                  className="flex items-center gap-3 transition duration-300 hover:text-white"
                >
                  <MdOutlineEmail size={20} />
                  nayanbhadane11@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/nayan-bhadane-663a68345?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition duration-300 hover:text-white"
                >
                  <CiLinkedin size={22} />
                  linkedin.com/in/nayan-bhadane
                </a>
                <a
                  href="https://github.com/nayanbhadane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition duration-300 hover:text-white"
                >
                  <FaGithub size={20} />
                  github.com/nayanbhadane
                </a>
              </div>

              <div className="mt-6 flex gap-4">
                {["LinkedIn", "GitHub", "Mail"].map((label) => (
                  <motion.span
                    key={label}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60"
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.form
              variants={fadeUp}
              className="space-y-4"
            >
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1020]/70 px-4 py-3 text-sm text-white outline-none transition duration-300 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/30"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1020]/70 px-4 py-3 text-sm text-white outline-none transition duration-300 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/30"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project"
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#0b1020]/70 px-4 py-3 text-sm text-white outline-none transition duration-300 focus:border-pink-400/50 focus:ring-2 focus:ring-pink-400/30"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#0b1020] transition duration-300 hover:brightness-110"
              >
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};

export default Footer;