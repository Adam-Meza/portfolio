import React, { useEffect, useState } from "react";
import "./ProgrammingCard.css";
import { motion, AnimatePresence } from "framer-motion";
import { ProgrammingCardMobile } from "./Mobile/ProgrammingCardMobile";
import { dropdownVariants } from "../../../utilites";
import { FaTimes } from "react-icons/fa";
import { LinkContainer } from "./LinkContainer";

export const ProgrammingCard = ({ application }) => {
  const { name, img, abstract, repo, deployment, details, mobile, thoughts } =
      application,
    [windowWidth, setWidth] = useState(window.innerWidth),
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

  const abstractJSX = (
    <AnimatePresence>
      <motion.div
        className="abstract-modal"
        initial="initial"
        animate={abstractOpen ? "animate" : "initial"}
        variants={dropdownVariants}
      >
        <div className="abstract-top">
          <h2 className="abstract">Abstract</h2>
          <button className="abstract-button" onClick={toggleAbstract}>
            <FaTimes />
          </button>
        </div>
        <div>
          <p className="abstract-paragraph">{abstract}</p>
          <p className="abstract-paragraph">{thoughts}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="programming-card-wrapper">
      {windowWidth > 1100 ? (
        <>
          <img className="programming-image" src={img} />

          <LinkContainer
            application={application}
          />
        </>
      ) : (
        <ProgrammingCardMobile application={application} />
      )}
    </div>
  );
};
