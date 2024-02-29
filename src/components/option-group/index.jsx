import React from "react";
import classes from "./option-group.module.css";

const Option = ({ name, percent, className }) => {
  return (
    <div className={`${classes.option} ${className}`}>
      <p className={classes["option-name"]}>{name}</p>
      <p className={classes["option-percent"]}>{percent}%</p>
      <div
        className={classes["percent-bg"]}
        style={{ "--percent": percent + "%", width: `${percent}%` || 0 }}
      />
    </div>
  );
};

const OptionGroup = ({}) => {
  return (
    <div className={classes["option-group"]}>
      <Option name={"C"} percent={13} />
      <Option name={"Java"} percent={17} />
      <Option name={"JavaScript"} percent={45} className={classes.selectPoll} />
      <Option name={"Python"} percent={30} />
    </div>
  );
};

export default OptionGroup;
