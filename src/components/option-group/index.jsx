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

const OptionGroup = ({ selectedPoll, handleVote, userId }) => {
  const percent = (vote) => ((vote / selectedPoll.totalVote) * 100).toFixed(0);

  return (
    <div className={classes["option-group"]}>
      {selectedPoll.options?.map((option, index) => {
        const check = option?.voters.find((v) => v.userId === userId);
        return (
          <Option
            key={option?.id}
            name={option?.value}
            percent={!isNaN(percent(option?.vote)) ? percent(option?.vote) : 0}
            onClick={() => handleVote(selectedPoll.id, option?.id)}
            // className={check && classes.selectPoll}
          />
        );
      })}
    </div>
  );
};

export default OptionGroup;
