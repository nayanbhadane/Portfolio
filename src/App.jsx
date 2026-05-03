import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import About from "./components/about/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import CustomCursor from "./components/ui/CustomCursor";
import ParticleBackground from "./components/ui/ParticleBackground";
import ScrollProgress from "./components/ui/ScrollProgress";

function App() {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
    });

    setLenisInstance(lenis);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b1020] text-white">
      <ParticleBackground />
      <CustomCursor />
      <ScrollProgress />

      <div className="pointer-events-none absolute -top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-200px] left-[-120px] h-[460px] w-[460px] rounded-full bg-cyan-400/20 blur-[160px]" />

      <Navbar lenis={lenisInstance} />

      <motion.main
        className="relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </motion.main>
    </div>
  )
}

export default App