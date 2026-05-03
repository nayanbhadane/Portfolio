export const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

export const slideIn = (direction = "left", distance = 40) => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = direction === "left" || direction === "up" ? -distance : distance;

  return {
    hidden: { opacity: 0, [axis]: value },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.75, ease: easeOut },
    },
  };
};

export const floatSlow = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0 rgba(99,102,241,0.2)",
      "0 0 28px rgba(99,102,241,0.55)",
      "0 0 0 rgba(99,102,241,0.2)",
    ],
    transition: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.02,
    transition: { duration: 0.35, ease: easeOut },
  },
};
