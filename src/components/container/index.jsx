import React from "react";
import classes from "./container.module.css";

const Container = ({ children, className }) => (
  <div className={`${classes.container} ${className}`}>{children}</div>
);

export default Container;
