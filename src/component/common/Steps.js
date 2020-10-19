import React from "react";

export const Steps = ({ active, lastStep }) => {
  return (
    <>
      <div className={`circle ${active && "active"}`}></div>
      {!lastStep && <div className="line" />}
    </>
  );
};
