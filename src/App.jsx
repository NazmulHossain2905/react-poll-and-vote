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
    userId: "",
    search: "",
  };

  componentDidMount() {
    this.setState({ polls });

    const userId = localStorage.getItem("user-id");
    if (userId !== null) {
      this.setState({ userId });
      console.log({ userId });
    } else {
      localStorage.setItem("user-id", randomIdGenerator());
    }
  }

  handleSelectPoll = (pollId) => {
    const selectedPoll = this.state.polls.find((poll) => poll?.id === pollId);
    this.setState({ selectedPoll });
  };

  handleSubmitPoll = (poll) => {
    if (poll.id) {
      const { polls } = this.state;

      const p = polls.find((p) => p.id === poll.id);
      p.title = poll.title;
      p.description = poll.description;
      p.options = poll.options;

      this.setState({ polls });
    } else {
      poll.id = randomIdGenerator();
      poll.userId = this.state.userId;
      poll.createdAt = new Date().toDateString();
      poll.totalVote = 0;
      poll.comments = [];

      this.setState({ polls: [poll, ...this.state.polls] });
    }
  };

  handleDeletePoll = (pollId) => {
    const polls = this.state.polls.filter((poll) => poll.id !== pollId);
    this.setState({ polls, selectedPoll: {} });
  };

  handleUpdateVote = (pollId, optionId) => {
    const { polls } = this.state;

    const poll = polls.find((poll) => poll.id === pollId);
    const option = poll?.options?.find((o) => o.id === optionId);

    poll.totalVote += 1;
    option.vote += 1;

    this.setState({ polls });
  };

  handleSearchOnChange = (value) => {
    this.setState({ search: value });
  };

  performSearch = () => {
    const { polls } = this.state;

    return polls.filter((poll) =>
      poll.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
  };

  getPolls = () => {
    const polls = this.performSearch();
    return (
      <Sidebar
        polls={polls}
        selectPoll={this.handleSelectPoll}
        submitPoll={this.handleSubmitPoll}
        searchOnChange={this.handleSearchOnChange}
      />
    );
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
          {this.getPolls()}
          <MainContent
            userId={this.state.userId}
            selectedPoll={this.state.selectedPoll}
            deletePoll={this.handleDeletePoll}
            handleVote={this.handleUpdateVote}
            submitPoll={this.handleSubmitPoll}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
