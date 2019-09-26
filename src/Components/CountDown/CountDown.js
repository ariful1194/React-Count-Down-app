import React from "react";
import Digit from "../CountDown/Digit/Digit";
function CountDown(props) {
  return (
    <div className="d-flex my-4">
      <Digit color="skyblue" value={props.time.min} />
      <Digit color="meganta" value={props.time.sec} />
      <Digit color="salmon" value={props.time.mili} />
    </div>
  );
}
export default CountDown;
