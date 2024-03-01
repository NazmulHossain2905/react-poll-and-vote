import React from "react";
import classes from "./list-of-polls.module.css";
import Heading from "../heading";
import Flex from "../flex";

const Poll = ({ poll, onClick, pollId }) => {
  return (
    <div
      className={`${classes.poll} ${poll?.id === pollId && classes.active}`}
      onClick={onClick}
    >
      <Heading className={classes.heading} element="h3" color="var(--gray)">
        {poll?.title}
      </Heading>
      <p className={classes.description}>{poll?.description}</p>
    </div>
  );
};

class ListOfPolls extends React.Component {
  state = {
    pollId: "",
  };

  handleSelectedPoll = (pollId) => {
    this.props.selectPoll(pollId);
    this.setState({ pollId });
  };

  render() {
    const { polls } = this.props;
    return (
      <Flex column style={{ gap: ".8rem" }}>
        {polls?.map((poll, index) => (
          <Poll
            pollId={this.state.pollId}
            key={poll?.id}
            poll={poll}
            onClick={() => this.handleSelectedPoll(poll?.id)}
          />
        ))}
      </Flex>
    );
  }
}

export default ListOfPolls;
