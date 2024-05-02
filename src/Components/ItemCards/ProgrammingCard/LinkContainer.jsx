import React from "react";
import { motion } from "framer-motion";
import { AppLink } from "./AppLink/AppLink";
import { IconCard } from "./IconCard";
import { staggerContainerVariants, iconVariants } from "../../../utilites";
import "./ProgrammingCard.css";
import { Abstract } from "./Abstract";
import "./ProgrammingCard.css";
import { Popover, Button } from '@itwin/itwinui-react'
import './AppLink/AppLink.css';

export const LinkContainer = ({ application, mobileImg }) => {
  const { deployment, repo, name, details, abstract, thoughts } =
    application;
  const [windowWidth, setWidth] = React.useState(window.innerWidth);
  
  const handleResize = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
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
      <div className="app-name-wrapper">
        <motion.h2 className={`app-name ${name}`} variants={iconVariants}>
          {name}
        </motion.h2>
      </div>
      <div className="hide-overflow details-container">{stacksCards}</div>

      <div className="button-container">
        {deployment && <AppLink href={deployment} title="Deployment" />}
        <AppLink href={repo} title="GitHub" />
        <Popover
          content={
            <Abstract
              abstract={abstract}
              thoughts={thoughts}
              mobile={true}
              />
          }
          placement='top-start'
          closeOnOutsideClick={true}
          middleware={{ offset: 20}}
        >
          <Button className="app-link">
            Abstract
          </Button>
        </Popover>
      </div>
      {windowWidth > 1100 && <img src={mobileImg} className="mobile-img" />}
    </motion.div>
  );
};
