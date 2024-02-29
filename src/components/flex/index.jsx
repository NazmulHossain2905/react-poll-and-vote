import React from "react";
import classes from "./flex.module.css";

const Flex = ({ children, jcBetween, jcStart, column, className, style }) => (
  <div
    className={`${classes.flex} ${column && classes.column} ${
      jcBetween && classes["jc-between"]
    } ${jcStart && classes["jc-start"]} ${className}`}
    style={style}
  >
    {children}
  </div>
);

export default Flex;
