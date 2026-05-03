import React, { useRef } from "react";
import { motion } from "framer-motion";

const MagneticButton = ({ children, className = "", ...props }) => {
  const ref = useRef(null);

  const handleMove = (event) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    node.style.transform = `translate3d(${x * 0.15}px, ${y * 0.15}px, 0)`;
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`magnetic-btn ${className}`}
      {...props}
    >
      <span className="magnetic-btn__ripple" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;
