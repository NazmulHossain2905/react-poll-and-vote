import React from "react";
import Container from "./components/container";
import Heading from "./components/heading";
import Space from "./components/Space";
import Row from "./components/row";

import Sidebar from "./features/sidebar";

import classes from "./app.module.css";
import MainContent from "./features/main-content";

import { polls } from "./data/polls";
import { randomIdGenerator } from "./utils/randomIdGenerator";

class App extends React.Component {
  state = {
    polls: [],
    selectedPoll: {},
  };

  componentDidMount() {
    this.setState({ polls });
  }

  handleSelectPoll = (pollId) => {
    const selectedPoll = this.state.polls.find((poll) => poll?.id === pollId);
    this.setState({ selectedPoll });
  };

  handleCreatePoll = (poll) => {
    poll.id = randomIdGenerator();
    poll.createdAt = new Date().toDateString();
    poll.totalVote = 0;
    poll.comments = [];

    this.setState({ polls: [poll, ...this.state.polls] });
  };

  handleDeletePoll = (pollId) => {
    const polls = this.state.polls.filter((poll) => poll.id !== pollId);
    this.setState({ polls, selectedPoll: {} });
  };

  handleUpdateVote = (pollId, optionId) => {
    const { polls } = this.state;

    const poll = polls.find((poll) => poll.id === pollId);
    const option = poll.options.find((o) => o.id === optionId);

    poll.totalVote += 1;
    option.vote += 1;

    this.setState({ polls });
  };

  render() {
    return (
      <Container>
        <Space height={"1rem"} />
        <Heading element="h1" className={classes.heading}>
          Keep Your Vote Here
        </Heading>
        <Space height={"1rem"} />
        <Row start className={classes.container}>
          <Sidebar
            polls={this.state.polls}
            selectPoll={this.handleSelectPoll}
            createPoll={this.handleCreatePoll}
          />
          <MainContent
            selectedPoll={this.state.selectedPoll}
            deletePoll={this.handleDeletePoll}
            handleVote={this.handleUpdateVote}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
