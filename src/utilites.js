import { ProgrammingCard } from "./Components/ItemCards/ProgrammingCard/ProgrammingCard"
import { ArtCard } from "./Components/ItemCards/ArtCard/ArtCard"

export const createItemCards = (info) => {
  
}

export const hiddenMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 90px, rgba(0,0,0,1) 90px, rgba(0,0,0,1) 90px)`;
export const visibleMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 90px)`;

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