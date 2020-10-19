import React from "react";
import { BsExclamationCircleFill, BsQuestionCircle } from "react-icons/bs";
import { Steps } from "../../common";
export default function Header() {
  return (
    <div className="header w-100">
      <div className="headerContainer">
        <div className="d-flex align-items-center fontSize11">
          <BsExclamationCircleFill size={15} />
          <div className="pl-2">New Request</div>
        </div>
        <div>
          <BsQuestionCircle size={15} color="#ccc" />
        </div>
      </div>
      <div className="stepIcon d-flex">
        <div className="d-flex align-items-center">
          <Steps active={true} />
          <Steps />
          <Steps lastStep={true} />
        </div>
      </div>
    </div>
  );
}
