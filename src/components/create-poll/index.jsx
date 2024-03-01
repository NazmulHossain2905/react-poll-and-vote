import React from "react";
import Input from "../input";
import Button from "../button";
import Row from "../row";
import Heading from "../heading";
import Space from "../Space";

import { RiDeleteBin2Fill } from "react-icons/ri";

import classes from "./create-poll.module.css";
import { randomIdGenerator } from "../../utils/randomIdGenerator";

const Option = ({
  placeholder,
  deleteVisible,
  deleteOption,
  value,
  onChange,
  error,
}) => {
  return (
    <Row style={{ alignItems: "flex-start" }}>
      <Input
        className={classes.input}
        style={{ flex: 1 }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
      <Space width={10} />
      {deleteVisible && (
        <button
          onClick={deleteOption}
          type="button"
          className={classes["delete-btn"]}
        >
          <RiDeleteBin2Fill size={25} color="#f00" />
        </button>
      )}
    </Row>
  );
};

class CreatePollForm extends React.Component {
  defaultOptions = [
    {
      id: randomIdGenerator(),
      value: "",
      vote: 0,
    },
    {
      id: randomIdGenerator(),
      value: "",
      vote: 0,
    },
  ];

  state = {
    title: "",
    description: "",
    options: this.defaultOptions,
    errors: {},
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOptionChange = (value, index) => {
    const { options } = this.state;

    options[index].value = value;

    this.setState({ options });
  };

  handleAddOption = () => {
    if (this.state.options.length < 4) {
      this.setState({
        options: this.state.options.concat({
          id: randomIdGenerator(),
          value: "",
          vote: 0,
        }),
      });
    } else {
      alert("Option maximum 4");
    }
  };

  handleDeleteOption = (optId) => {
    const options = this.state.options.filter((opt) => opt.id !== optId);
    this.setState({ options });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors } = this.validation();

    if (isValid) {
      const { title, description, options } = this.state;

      const poll = { title, description, options };

      if (this.props.isUpdate) {
        poll.id = this.props.poll.id;
        this.props.submitPoll(poll);
        console.log("Update Successfully");
        this.setState({ errors: {} });
      } else {
        this.props.submitPoll(poll);
        this.setState({
          options: [
            {
              id: randomIdGenerator(),
              value: "",
              vote: 0,
            },
            {
              id: randomIdGenerator(),
              value: "",
              vote: 0,
            },
          ],
          title: "",
          description: "",
          errors: {},
        });
      }
    } else {
      this.setState({ errors });
    }
  };

  validation = () => {
    const { title, description, options } = this.state;

    const errors = {};

    if (!title) {
      errors.title = "Please provide a title";
    } else if (title.length < 20) {
      errors.title = "Your title too short, must contains more 20 characters.";
    } else if (title.length > 100) {
      errors.title =
        "Your provide title too long, title can contain 100 characters.";
    }

    if (!description) {
      errors.description = "Please provide a description.";
    } else if (description.length > 500) {
      errors.description =
        "Your provided description too long. Description will contains max 500 characters.";
    }

    const optionErrors = [];

    options.forEach((opt, index) => {
      if (!opt.value) {
        optionErrors[index] = "Please provide value on option " + (index + 1);
      } else if (opt.value.length > 100) {
        optionErrors[index] = "Option too long.";
      }
    });

    if (optionErrors.length) {
      errors.optionErrors = optionErrors;
    }

    return {
      errors: errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  componentDidMount() {
    if (this.props.poll && Object.keys(this.props.poll).length) {
      const { title, description, options } = this.props.poll;
      this.setState({ title, description, options });
    }
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <div>
          <label className={classes.label} htmlFor="title">
            Title:
          </label>
          <Input
            name="title"
            className={classes.input}
            placeholder="Write your poll title here"
            value={this.state.title}
            onChange={this.handleChange}
            error={this.state.errors.title}
          />
        </div>
        <div>
          <label className={classes.label} htmlFor="description">
            Description:
          </label>
          <Input
            type="textarea"
            name="description"
            className={classes.input}
            placeholder="Write your poll description here"
            value={this.state.description}
            onChange={this.handleChange}
            error={this.state.errors.description}
          />
        </div>

        <div className={classes["option-wrapper"]}>
          <Heading element={"h3"} color={"var(--primary)"}>
            Poll Options
          </Heading>

          {this.state.options.map((option, index) => (
            <Option
              key={option?.id}
              placeholder={`Option ${index + 1}`}
              deleteVisible={this.state.options.length > 2}
              deleteOption={() => this.handleDeleteOption(option.id)}
              value={this.state.options[index]?.value}
              onChange={(e) => this.handleOptionChange(e.target.value, index)}
              error={this.state.errors?.optionErrors?.[index]}
            />
          ))}
          {this.state.options.length < 4 && (
            <p className={classes["add-option"]} onClick={this.handleAddOption}>
              + Add Option
            </p>
          )}
        </div>

        <Button>{this.props.isUpdate ? "Update Poll" : "Create Poll"}</Button>
      </form>
    );
  }
}

export default CreatePollForm;
