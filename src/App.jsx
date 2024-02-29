import React from "react";
import Container from "./components/container";
import Heading from "./components/heading";
import Space from "./components/Space";
import Row from "./components/row";

import Sidebar from "./features/sidebar";

import classes from "./app.module.css";
import MainContent from "./features/main-content";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Space height={"1rem"} />
        <Heading element="h1" className={classes.heading}>
          Keep Your Vote Here
        </Heading>
        <Space height={"1rem"} />
        <Row start className={classes.container}>
          <Sidebar />
          <MainContent />
        </Row>
      </Container>
    );
  }
}

export default App;
