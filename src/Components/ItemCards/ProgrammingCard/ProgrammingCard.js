import React from "react";
import "./ProgrammingCard.css";
import { ProgrammingCardMobile } from "./Mobile/ProgrammingCardMobile";
import { LinkContainer } from "./LinkContainer";

export const ProgrammingCard = ({ application }) => {
  const { img, ...rest } = application,
    [windowWidth, setWidth] = React.useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="programming-card-wrapper">
      {windowWidth > 1100 ? (
        <>
          <img className="programming-image" src={img} />

          <LinkContainer application={rest} />
        </>
      ) : (
        <ProgrammingCardMobile application={application} />
      )}
    </div>
  );
};
