import React from "react";
import Row from "../row";
import classes from "./vote-and-comments.module.css";

const VoteAndComments = ({ totalVote, comments }) => {
  return (
    <Row>
      <p className={classes.votes}>{totalVote} Votes</p>
      {/* <p className={classes.comments}>{comments?.length} Comments</p> */}
    </Row>
  );
};

export default VoteAndComments;
