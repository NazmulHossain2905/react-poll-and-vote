import React from "react";
import classes from "./option-group.module.css";

const Option = ({ name, percent, className, onClick }) => {
  return (
    <div className={`${classes.option} ${className}`} onClick={onClick}>
      <p className={classes["option-name"]}>{name}</p>
      <p className={classes["option-percent"]}>{percent}%</p>
      <div
        className={classes["percent-bg"]}
        style={{ "--percent": percent + "%", width: `${percent}%` || 0 }}
      />
    </div>
  );
};

const OptionGroup = ({ selectedPoll, handleVote }) => {
  const percent = (vote) => ((vote / selectedPoll.totalVote) * 100).toFixed(0);

  return (
    <div className={classes["option-group"]}>
      {selectedPoll.options?.map((option, index) => (
        <Option
          key={option?.id}
          name={option?.value}
          percent={!isNaN(percent(option?.vote)) ? percent(option?.vote) : 0}
          onClick={() => handleVote(selectedPoll.id, option?.id)}
        />
      ))}
      {/* <Option name={"C"} percent={13} />
      <Option name={"Java"} percent={17} />
      <Option name={"JavaScript"} percent={45} className={classes.selectPoll} />
      <Option name={"Python"} percent={30} /> */}
    </div>
  );
};

export default OptionGroup;
