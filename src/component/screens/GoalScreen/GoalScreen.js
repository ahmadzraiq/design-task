import React from "react";
import Header from "./Header";
import Goals from "./Goals";
import { Button ,Footer} from "../../common";
export const GoalScreen = () => {
  return (
    <div className="col-5 bg-light goalSide paddingHorizontal0">
      <div className="goalContainer">
        <Header />
        <Goals />
        <Footer>
          <div className="d-flex justify-content-between flex-wrap ">
            <Button
              title="Can't proceed"
              style={{ border: "1px solid black" }}
            />
            <Button
              title="Confirm goal"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
        </Footer>
      </div>
    </div>
  );
};
