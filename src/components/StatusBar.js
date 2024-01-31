import React from "react";
import Avatar from "react-avatar";
import post from "../images/girl.jpeg";
import boy from "../images/person.jpg";
import photographer from "../images/photographer.jpg";
const StatusBar = () => {
  return (
    <div>
      <div className="status-img d-flex">
        <div className="status">
          <Avatar src={post} size="80" round={true}></Avatar>
          <p>rubab</p>
        </div>
        <div className="status">
          <Avatar src={boy} size="80" round={true}></Avatar>
          <p>rubab</p>
        </div>
        <div className="status">
          <Avatar src={photographer} size="80" round={true}></Avatar>
          <p>rubab</p>
        </div>
        <div className="status">
          <Avatar src={boy} size="80" round={true}></Avatar>
          <p>rubab</p>
        </div>
        <div className="status">
          <Avatar src={post} size="80" round={true}></Avatar>
          <p>rubab</p>
        </div>
        <div className="status">
          <Avatar src={boy} size="80" round={true}></Avatar>
          <p>rubab</p>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
