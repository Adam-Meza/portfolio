import React from "react";
import "./ProgrammingCard.css";
import { LinkContainer } from "./LinkContainer";

export const ProgrammingCard = ({ application }) => {
  const { img, mobileImg, ...rest } = application,
    [windowWidth, setWidth] = React.useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="programming-card-wrapper">
      <img
        className={windowWidth > 500 ? "programming-image" : "mobile-mobile-img"}
        src={windowWidth > 500 ? img : mobileImg}
      />
      <LinkContainer application={rest} mobileImg={mobileImg}/>
    </div>
  );
};
