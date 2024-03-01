import React from "react";
import Heading from "../../components/heading";
import classes from "./main-content.module.css";
import OptionIcon from "../../components/option-icon";
import OptionGroup from "../../components/option-group";
import Space from "../../components/Space";
import VoteAndComments from "../../components/vote-and-comments";

class MainContent extends React.Component {
  render() {
    const { selectedPoll, deletePoll, handleVote } = this.props;

    if (!Object.keys(selectedPoll).length) {
      return (
        <div>
          <Heading color="#3C3C3C" size={"2rem"}>
            Welcome to Poll and Vote Application.
          </Heading>
          <p className={classes.description}>
            Please select any poll to Preview.
          </p>
        </div>
      );
    }

    return (
      <div style={{ width: "100%" }}>
        <Heading color="#3C3C3C" size={"2rem"}>
          {selectedPoll?.title}
        </Heading>
        <p className={classes.description}>{selectedPoll?.description}</p>

        <p className={classes.date}>{selectedPoll.createdAt}</p>

        <OptionIcon deletePoll={() => deletePoll(selectedPoll.id)} />
        <Space height={10} />

        <OptionGroup selectedPoll={selectedPoll} handleVote={handleVote} />
        <Space height={10} />

        <VoteAndComments
          totalVote={selectedPoll?.totalVote}
          comments={selectedPoll?.comments}
        />
      </div>
    );
  }
}

export default MainContent;
