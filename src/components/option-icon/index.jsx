import React from "react";
import Row from "../row";
import Heading from "../heading";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Space from "../Space";
import classes from "./option-icon.module.css";

const OptionIcon = ({ deletePoll }) => {
  return (
    <Row style={{ marginTop: "1.75rem" }}>
      <Heading element={"h3"} color={"var(--primary)"}>
        Options
      </Heading>

      <Row>
        <button className={classes.icon}>
          <MdEdit size={22} color="dodgerblue" />
        </button>

        <Space width={5} />

        <button className={classes.icon} onClick={deletePoll}>
          <AiFillDelete size={22} color="#f00" />
        </button>
      </Row>
    </Row>
  );
};

export default OptionIcon;
