import React from "react";
import classes from "./button.module.css";

class Button extends React.Component {
  render() {
    const { children, className, onClick, type } = this.props;
    return (
      <button
        onClick={onClick}
        type={type}
        className={`${classes.button} ${className}`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
