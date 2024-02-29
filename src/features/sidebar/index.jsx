import React, { Component } from "react";
import classes from "./sidebar.module.css";
import Heading from "../../components/heading";
import SearchAndButton from "../../components/search-and-btn";
import ListOfPolls from "../../components/list-of-polls";

class Sidebar extends Component {
  render() {
    return (
      <div className={classes.container}>
        <SearchAndButton />

        <Heading element="h3" color="dodgerblue">
          List of Polls
        </Heading>

        <ListOfPolls />
      </div>
    );
  }
}
export default Sidebar;
