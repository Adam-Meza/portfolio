import React from "react";
import { motion } from "framer-motion";
import { AppLink } from "./AppLink";
import { IconCard } from "./IconCard";
import { staggerContainerVariants, iconVariants } from "../../../utilites";
import "./ProgrammingCard.css";
import { Abstract } from "./Abstract";
import "./ProgrammingCard.css";

export const LinkContainer = ({ application }) => {
  const { deployment, repo, name, mobile, details, abstract, thoughts } =
    application;
  const [open, setOpen] = React.useState(false);
  const [windowWidth, setWidth] = React.useState(window.innerWidth);

  const toggleAbstract = () => {
    console.log("test");
    setOpen(!open);
  };
  const handleResize = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    return () => window.addEventListener("resize", handleResize);
  }, []);

  const stacksCards = details.stack.map((tech, index) => (
    <IconCard tech={tech} variants={iconVariants} key={index} />
  ));

  return (
    <motion.div
      className="app-text-wrapper"
      variants={staggerContainerVariants}
      initial="initial"
      whileInView="animate"
    >
      {open && windowWidth >= 1100 && (
        <Abstract abstract={abstract} thoughts={thoughts} />
      )}

      <div className="app-name-wrapper">
        <motion.h2 className={`app-name ${name}`} variants={iconVariants}>
          {name}
        </motion.h2>
      </div>
      <div className="hide-overflow details-container">{stacksCards}</div>

      <div className="button-container">
        {deployment && <AppLink href={deployment} title="Deployment" />}
        <AppLink href={repo} title="GitHub" />
        <AppLink onClick={toggleAbstract} title="Abstract" />
      </div>

      {windowWidth > 1100 && <img src={mobile} className="mobile-img" />}
    </motion.div>
  );
};
