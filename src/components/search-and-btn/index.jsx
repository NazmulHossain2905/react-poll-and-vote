import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Row from "../row";
import Input from "../input";
import Button from "../button";
import Heading from "../heading";
import Space from "../Space";
import Modal, { ModalHeader } from "../modal";
import classes from "./search-and-btn.module.css";

class SearchAndButton extends React.Component {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <Row style={{ gap: "1rem" }}>
          <Input style={{ flex: 1 }} placeholder="Search a poll" />
          <Button onClick={this.toggleIsOpen}>Create a Poll</Button>
        </Row>
        <Modal isOpen={this.state.isOpen} toggleIsOpen={this.toggleIsOpen}>
          <ModalHeader
            style={{ textAlign: "center", flex: 1 }}
            toggleIsOpen={this.toggleIsOpen}
          >
            Create a Poll
          </ModalHeader>

          <form className={classes.form}>
            <div>
              <label className={classes.label} htmlFor="title">
                Title:
              </label>
              <Input
                name="title"
                className={classes.input}
                placeholder="Write your poll title here"
              />
            </div>
            <div>
              <label className={classes.label} htmlFor="description">
                Description:
              </label>
              <Input
                name="description"
                className={classes.input}
                type="textarea"
                placeholder="Write your poll description here"
              />
            </div>

            <div className={classes["option-wrapper"]}>
              <Heading element={"h3"} color={"var(--primary)"}>
                Poll Options
              </Heading>

              {[1, 1, 1, 1].map((option, index) => (
                <Option placeholder={`Option ${++index}`} deleteVisible={""} />
              ))}
              <p className={classes["add-option"]}>+ Add Option</p>
            </div>

            <Button>Create Poll</Button>
          </form>
        </Modal>
      </>
    );
  }
}

export default SearchAndButton;

const Option = ({ placeholder }) => {
  return (
    <Row style={{ alignItems: "center" }}>
      <Input
        className={classes.input}
        style={{ flex: 1 }}
        placeholder={placeholder}
      />
      <Space width={10} />
      <button type="button" className={classes["delete-btn"]}>
        <RiDeleteBin2Fill size={25} color="#f00" />
      </button>
    </Row>
  );
};
