// Animation Presets

export const dropdownVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 },
};

export const staggerContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0,
    },
  },
  exit: {
    y: 40,
  },
};

export const iconVariants = {
  initial: {
    y: 60,
    rotate: -25,
  },
  animate: {
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.45,
      ease: "easeIn",
    },
  },
};
