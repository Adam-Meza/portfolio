import React from "react";
import "./AboutCard.css";
import { motion } from "framer-motion";
import { experience, stack } from "../../../assets/work/work";
import face from "../../../assets/images/possible2.png";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    y: 60,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    y: 40,
  },
};

const CVVariants = {
  initial: {
    width: "1%",
  },
  animate: {
    width: "100%",
    transition: {
      duration: 4,
    },
  },
};

export const AboutCard = ({ handleNav }) => {
  const cvCards = experience.map((item) => (
    <CVItemCard variants={itemVariants} key={item.title} item={item} />
  ));

  const stackCards = stack.map((skillset) => <StackCard exp={skillset} />);

  return (
    <motion.section
      className="about-wrapper"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="about-card-wrapper">
        <div className="cv-wrapper">
          <motion.h2
            variants={CVVariants}
            initial="initial"
            animate="animate"
            className="cv-title"
          >
            CV
          </motion.h2>
          <div className="cv-item-wrapper">
            <div className="hide-overflow">
              <motion.h3 variants={itemVariants} className="cv-year">
                STACK
              </motion.h3>
            </div>
            {stackCards}
          </div>
          <div className="hide-overflow">
            <motion.h3 variants={itemVariants} className="cv-year">
              Experience
            </motion.h3>
          </div>
          {cvCards}
        </div>
      </div>
      <motion.div
        className="about-card-wrapper"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        transition={{ delayChildren: 1 }}
      >
        <img className="about-image" src={face}></img>
        <motion.span
          className="link create"
          onClick={() => handleNav("contact")}
        >
          Let's create
        </motion.span>
      </motion.div>
    </motion.section>
  );
};

const CVItemCard = ({ item, variants }) => {
  const { title, description } = item;

  return (
    <div className="cv-item-wrapper">
      <div className="cv-item-container">
        <motion.span variants={variants} className="cv-item-title">
          {title}
        </motion.span>
        <motion.span variants={variants} className="cv-item-details">
          {description}
        </motion.span>
      </div>
    </div>
  );
};

const StackCard = ({ exp }) => {
  return (
    <div className="hide-overflow">
      <motion.div variants={itemVariants} className="cv-skill-container">
        {exp}
      </motion.div>
    </div>
  );
};
