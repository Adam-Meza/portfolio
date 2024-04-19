// Animation Presets 

export const dropdownVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: {scaleY : 0}
};

export const staggerContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3
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
      duration: 0.,
    },
  },
  exit: {
    y: 40,
  },
}