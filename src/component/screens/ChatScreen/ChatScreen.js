import React from "react";
import Message from "./Message";
export const ChatScreen = () => {
  const img =
    "https://www.almrsal.com/wp-content/uploads/2018/07/%D9%85%D8%B9%D8%A7%D9%86%D9%8A-%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.jpg";
  const msg = `i'm planning a family vecation and would like to reserve dinner at Medieal Times in Buena Park, CA,For July 11,2020 at an evening show for 2 adults, 3 kids below age 12,I do not need to pay for tickets (i already have vouchers paid) I just want to reserve the seats. I'd prefer a 6 pm show, but am fime with anything after 1pm.`;
  return (
    <div className="col-7 chat paddingHorizontal0">
      <div className="chatContainer ">
        <div className="chatContent">
          <Message width={25} height={25} msg={msg} img={img} />
        </div>
        <div className="inputContainerReply">
          <input className="inputReply" placeholder="Type a message" />
        </div>
      </div>
    </div>
  );
};
