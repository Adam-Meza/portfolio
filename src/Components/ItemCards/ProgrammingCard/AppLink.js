import * as React from "react";
import "./AppLink.css";

export const AppLink = (props) => {
  const { title, href, onClick } = props;

  const element = React.createElement();

  return (
    <>
      {href && (
        <button className="app-link">
          <a href={href}>{title}</a>
        </button>
      )}
      {onClick && (
        <button className="app-link">
          <span onClick={onClick}>{title}</span>
        </button>
      )}
    </>
  );
};
