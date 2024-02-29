import React, { useEffect } from "react";
import Row from "../row";

import classes from "./modal.module.css";
import { CgClose } from "react-icons/cg";

const Modal = ({ isOpen = false, toggleIsOpen = () => {}, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style = `overflow-y: hidden; padding-right: 8px`;
    else document.body.style = `overflow-y: scroll; padding-right: 0`;
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={classes["modal-container"]}>
          <div className={classes.modal}>{children}</div>
        </div>
      )}
      {isOpen && <div onClick={toggleIsOpen} className={classes["overlay"]} />}
    </>
  );
};

export default Modal;

export const ModalHeader = ({ children, toggleIsOpen, style }) => (
  <Row>
    {children && (
      <h2 className={classes.heading} style={style}>
        {children}
      </h2>
    )}
    <CgClose
      onClick={toggleIsOpen}
      size={22}
      className={classes["close-icon"]}
    />
  </Row>
);
