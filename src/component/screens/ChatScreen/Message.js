import React from "react";

export default function Message({ img, width, height, msg }) {
  return (
    <div className="chatMsgRow">
      <img className="chatImg" src={img} width={width} height={height} />
      <div className="chatMsgRowContainer" >
        <div className="chatMsg">
          <span>{msg}</span>
        </div>
        <span style={{color:"#ccc"}} >Hamman Wood,11:42 am (Mobile app)</span>
      </div>
    </div>
  );
}
