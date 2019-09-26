import React, { Component } from "react";
import "./Digit.css";

export default class Digit extends Component {
  render() {
    return (
      <div
        className="Digit mx-3 text-center"
        style={{ borderColor: this.props.color }}
      >
        <h1 className="display-2 py-2" style={{ color: this.props.color }}>
          {this.props.value < 10 ? `0${this.props.value}` : this.props.value}
        </h1>
      </div>
    );
  }
}
