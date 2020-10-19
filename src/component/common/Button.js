import React from "react";

export const Button = ({ active, color, title,style }) => {
  return (
    <div className={`Button col-md-3 ${active && "activeButton"}`} style={style}>
      <div style={{ color }}>{title}</div>
    </div>
  );
};

