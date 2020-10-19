import React from "react";
import { ChatScreen } from "./component/screens/ChatScreen";
import { GoalScreen } from "./component/screens/GoalScreen";
export default () => {
  return (
    <div className="d-flex h-100 box">
      <GoalScreen />
      <ChatScreen />
    </div>
  );
};
