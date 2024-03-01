import React from "react";
import Row from "../row";
import Heading from "../heading";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Space from "../Space";
import classes from "./option-icon.module.css";

import Modal, { ModalHeader } from "../modal";
import CreatePollForm from "../create-poll";

class OptionIcon extends React.Component {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { poll, deletePoll, submitPoll, userId } = this.props;
    return (
      <Row style={{ marginTop: "1.75rem" }}>
        <Heading element={"h3"} color={"var(--primary)"}>
          Options
        </Heading>

        {poll?.userId === userId && (
          <Row>
            <button className={classes.icon} onClick={this.toggleIsOpen}>
              <MdEdit size={22} color="dodgerblue" />
            </button>

            <Space width={5} />

            <button
              className={classes.icon}
              onClick={() => deletePoll(poll.id)}
            >
              <AiFillDelete size={22} color="#f00" />
            </button>
          </Row>
        )}

        <Modal isOpen={this.state.isOpen} toggleIsOpen={this.toggleIsOpen}>
          <ModalHeader
            style={{ textAlign: "center", flex: 1 }}
            toggleIsOpen={this.toggleIsOpen}
          >
            Update the Poll
          </ModalHeader>

          <CreatePollForm submitPoll={submitPoll} poll={poll} isUpdate={true} />
        </Modal>
      </Row>
    );
  }
}

export default OptionIcon;
