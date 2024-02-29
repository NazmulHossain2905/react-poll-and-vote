import React from "react";
import Row from "../row";
import Input from "../input";
import Button from "../button";
import Modal, { ModalHeader } from "../modal";

class SearchAndButton extends React.Component {
  render() {
    return (
      <>
        <Row style={{ gap: "1rem" }}>
          <Input style={{ flex: 1 }} placeholder="Search a poll" />
          <Button>Create a Poll</Button>
        </Row>
        <Modal isOpen>
          <ModalHeader>Create a Poll</ModalHeader>
        </Modal>
      </>
    );
  }
}

export default SearchAndButton;
