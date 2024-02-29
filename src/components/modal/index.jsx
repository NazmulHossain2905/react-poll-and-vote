import React from "react";
import Row from "../row";

import classes from "./modal.module.css";
import { CgClose } from "react-icons/cg";

const Modal = ({ isOpen = false, toggleIsOpen = () => {}, children }) => {
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

export const ModalHeader = ({ children, toggleIsOpen }) => (
  <Row>
    {children && <h2 className={classes.heading}>{children}</h2>}
    <CgClose
      onClick={toggleIsOpen}
      size={22}
      className={classes["close-icon"]}
    />
  </Row>
);
