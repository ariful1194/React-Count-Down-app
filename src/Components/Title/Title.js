import React, { Component } from "react";
import "./Title.css";
export class Title extends Component {
  state = {
    title: "This is a Dummy Title!",
    isInput: false
  };

  editHandler = () => {
    this.setState({
      ...this.state,
      isInput: true
    });
  };

  inputChange = e => {
    this.setState({
      ...this.state,
      title: e.target.value
    });
  };
  keyPressHandler = e => {
    if (e.key === "Enter") {
      this.setState({
        ...this.state,
        isInput: false
      });
    }
  };
  blurHandler = e => {
    this.setState({
      ...this.state,
      isInput: false
    });
  };

  render() {
    let output = null;
    if (this.state.isInput) {
      output = (
        <div className="Title form-group">
          <input
            type="text"
            name="inp"
            id="inp"
            onBlur={this.blurHandler}
            onKeyPress={this.keyPressHandler}
            onChange={this.inputChange}
            className="form-control"
            value={this.state.title}
          />
        </div>
      );
    } else {
      output = this.state.title;
    }

    return (
      <div className="d-flex Title">
        <h2 className="display-4">{output}</h2>
        <span onClick={this.editHandler} className="ml-auto edit-icon">
          <i className="fas fa-pen" />
        </span>
      </div>
    );
  }
}

export default Title;
