import * as React from "react";
import "./AppLink.css";
import { Button }from '@itwin/itwinui-react'

export const AppLink = (props) => {
  const { title, href } = props;

  const element = React.createElement();

  return (
    <Button className="app-link">
      {href && <a href={href}>{title}</a>}
      {!href && <span>{title}</span>}
    </Button>
  );
};
