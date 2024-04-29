import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { dropdownVariants } from "../../../../utilites";
import { Popover } from "@itwin/itwinui-react";
import { AppLink } from "../AppLink";
import { IconCard } from "../IconCard";
import { Abstract } from "../Abstract";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textVariants = {
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

export const ProgrammingCardMobile = ({ application }) => {
  const { name, img, abstract, repo, deployment, details, mobile, thoughts } =
    application;
  const [windowWidth, setWidth] = useState(window.innerWidth),
    [abstractOpen, setAbstract] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const toggleAbstract = () => {
    setAbstract(!abstractOpen);
  };

  useEffect(() => {
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const stacksCards = details.stack.map((tech, index) => (
    <IconCard tech={tech} variants={textVariants} key={index} />
  ));

  return (
    <div className="programming-card-wrapper">
      {abstractOpen && (
        <div className="mobile-modal-wrapper">
          <Abstract abstract={abstract} thoughts={thoughts} mobile={true} />
        </div>
      )}
      <img
        src={windowWidth > 500 ? img : mobile}
        className={
          windowWidth > 500 ? "programming-image" : "mobile-mobile-img"
        }
      />

      <motion.div
        className="mobile-app-text-wrapper"
        variants={container}
        initial="initial"
        whileInView="animate"
      >
        <div className="app-name-wrapper">
          <motion.h2 className={`app-name ${name}`} variants={textVariants}>
            {name}
          </motion.h2>
        </div>
        <div className="hide-overflow details-container">{stacksCards}</div>
        <div className="button-container">
          {deployment && <AppLink href={deployment} title="Deployment" />}
          <AppLink href={repo} title="GitHub" />
          <motion.div className="app-link" onClick={toggleAbstract}>
            Abstract
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
