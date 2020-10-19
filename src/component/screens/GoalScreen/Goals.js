import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "../../common/";
export default function Goals() {
  const buttonStyle = {
    marginBottom: 20,
    backgroundColor: "white",
  };
  return (
    <div className="goals">
      <h5>What's The Goals?</h5>
      <div className="goalsContainer">
        <span className="fontSize11">Single Goal</span>
        <BsChevronDown className="chevron" />
      </div>
      <Button active color="white" title="Reserve dinner" style={buttonStyle} />
      <Button title="Plan a vaction" style={buttonStyle} />
      <Button title="Pay for tickets" style={buttonStyle} />
      <div className="showMoreContainer">
        <span className="showMore">show more</span>
      </div>
    </div>
  );
}
