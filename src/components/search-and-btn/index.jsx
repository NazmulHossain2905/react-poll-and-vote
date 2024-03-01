import React from "react";
import Row from "../row";
import Input from "../input";
import Button from "../button";
import Modal, { ModalHeader } from "../modal";
import CreatePollForm from "../create-poll";

class SearchAndButton extends React.Component {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { createPoll } = this.props;
    return (
      <>
        <Row style={{ gap: "1rem", alignItems: "flex-start" }}>
          <Input style={{ width: "100%" }} placeholder="Search a poll" />
          <Button onClick={this.toggleIsOpen}>Create a Poll</Button>
        </Row>
        <Modal isOpen={this.state.isOpen} toggleIsOpen={this.toggleIsOpen}>
          <ModalHeader
            style={{ textAlign: "center", flex: 1 }}
            toggleIsOpen={this.toggleIsOpen}
          >
            Create a Poll
          </ModalHeader>

          <CreatePollForm createPoll={createPoll} />
        </Modal>
      </>
    );
  }
}

export default SearchAndButton;
