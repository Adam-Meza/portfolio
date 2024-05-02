import React from "react";
import { motion } from "framer-motion";

export const IconCard = (props) => {
  const { tech, variants } = props;

  return (
    <motion.div className="stack-icon" variants={variants}>
      {tech}
    </motion.div>
  );
};
