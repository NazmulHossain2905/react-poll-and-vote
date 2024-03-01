import React from "react";
import classes from "./input.module.css";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  error,
  onChange,
  name,
  checked,
  style,
  className,
}) => {
  return type === "textarea" ? (
    <>
      <textarea
        style={style}
        className={`${classes.input} ${classes.textarea} ${
          error && classes.inputError
        } ${className}`}
        placeholder={placeholder}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
      ></textarea>
      {error && <p className={classes.error}>{error}</p>}
    </>
  ) : (
    <div style={{ flex: 1 }}>
      <input
        style={style}
        className={`${classes.input} ${
          error && classes.inputError
        } ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        checked={checked}
        name={name}
        id={name}
        onChange={onChange}
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default Input;
