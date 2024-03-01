import React, { Component } from "react";
import classes from "./sidebar.module.css";
import Heading from "../../components/heading";
import SearchAndButton from "../../components/search-and-btn";
import ListOfPolls from "../../components/list-of-polls";

class Sidebar extends Component {
  render() {
    const { polls, selectPoll, submitPoll, searchOnChange } = this.props;

    return (
      <div className={classes.container}>
        <SearchAndButton
          searchOnChange={searchOnChange}
          submitPoll={submitPoll}
        />

        <Heading element="h3" color="dodgerblue">
          List of Polls
        </Heading>

        <ListOfPolls polls={polls} selectPoll={selectPoll} />
      </div>
    );
  }
}
export default Sidebar;
