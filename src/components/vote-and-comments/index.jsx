import React from "react";
import Row from "../row";
import classes from "./vote-and-comments.module.css";

const VoteAndComments = ({}) => {
  return (
    <Row>
      <p className={classes.votes}>279 Votes</p>
      <p className={classes.comments}>34 Comments</p>
    </Row>
  );
};

export default VoteAndComments;
