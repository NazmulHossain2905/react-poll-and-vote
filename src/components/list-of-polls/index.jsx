import React from "react";
import classes from "./list-of-polls.module.css";
import Heading from "../heading";
import Flex from "../flex";

const Poll = ({ heading, description }) => {
  return (
    <div className={classes.poll}>
      <Heading className={classes.heading} element="h3" color="var(--gray)">
        What’s your favorite programming language favorite programming language?
      </Heading>
      <p className={classes.description}>
        Write a description about your poll. Voters can give vote easily. So,
        write a s...
      </p>
    </div>
  );
};

const ListOfPolls = ({}) => {
  return (
    <Flex column style={{ gap: ".8rem" }}>
      <Poll />
      <Poll />
      <Poll />
      <Poll />
      <Poll />
      <Poll />
      <Poll />
      <Poll />
      <Poll />
    </Flex>
  );
};

export default ListOfPolls;
