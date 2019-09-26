import React, { Component } from "react";
import "./App.css";
import Title from "./Title/Title";
import CountDown from "./CountDown/CountDown";
import Controller from "./Controller/Controller";
import Laps from "./Laps/Laps";

class App extends Component {
  state = {
    time: {
      min: 0,
      sec: 0,
      mili: 0
    },
    laps: []
  };
  getStart = () => {
    this.intervalId = setInterval(() => {
      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;
      if (mili >= 10) {
        mili = 0;
        sec += 1;
      }
      if (sec >= 60) {
        sec = 0;
        min += 1;
      }
      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1
        }
      });
    }, 100);
  };
  pause = () => {
    clearInterval(this.intervalId);
  };
  reset = () => {
    this.setState({
      ...this.state,
      time: {
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
    });
  };

  getLap = () => {
    let time = { ...this.state.time };
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    });
    console.log(this.state.laps);
  };
  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <Title />
              <CountDown time={this.state.time} />
              <Controller
                start={this.getStart}
                pause={this.pause}
                reset={this.reset}
                laps={this.getLap}
              />
              <Laps laps={this.state.laps} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
