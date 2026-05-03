import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = ({ lenis }) => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = useMemo(
    () => [
      { id: "Home", label: "Home" },
      { id: "About", label: "About" },
      { id: "Experience", label: "Skills" },
      { id: "Projects", label: "Projects" },
      { id: "Footer", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const observers = navItems.map((item) => {
      const section = document.getElementById(item.id);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(item.id);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [navItems]);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -90 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b1020]/70 px-6 py-4 text-white backdrop-blur-xl md:px-16">
      <span className="text-lg font-semibold tracking-[0.2em] text-white/80">
        Nayan Bhadane
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center font-medium md:mt-0 md:w-auto md:border-none md:bg-transparent md:py-0 md:text-left md:static md:flex md:items-center md:gap-3`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => handleNavClick(event, item.id)}
          >
            <li
              className={`relative mx-auto flex max-w-[140px] items-center justify-center rounded-full px-4 py-2 text-sm uppercase tracking-[0.22em] transition-all duration-300 md:max-w-none md:text-[0.7rem] ${
                active === item.id
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </li>
          </a>
        ))}
      </ul>

      {menu ? (
        <RiCloseLine
          size={28}
          className="md:hidden"
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={28}
          className="md:hidden"
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;