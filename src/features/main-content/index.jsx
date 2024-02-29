import React from "react";
import Heading from "../../components/heading";
import classes from "./main-content.module.css";
import OptionIcon from "../../components/option-icon";
import OptionGroup from "../../components/option-group";
import Space from "../../components/Space";
import VoteAndComments from "../../components/vote-and-comments";

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <Heading color="#3C3C3C" size={"2rem"}>
          What’s your favorite programming language?
        </Heading>
        <p className={classes.description}>
          There are a lot of programming language are available. Among them what
          is your favorite One?
        </p>

        <p className={classes.date}>Wednesday, 28 Feb 2024</p>

        <OptionIcon />
        <Space height={10} />

        <OptionGroup />
        <Space height={10} />

        <VoteAndComments />
      </div>
    );
  }
}

export default MainContent;
