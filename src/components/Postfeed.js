import React from "react";
import post from "../images/girl.jpeg";
import Avatar from "react-avatar";

function Postfeed(props) {
  return (
    <>
      <div className="container main-body">
        {/* Post Header */}
        <div className="d-flex post-header">
          <div className="d-flex my-2">
            <Avatar src={post} size="50" round={true}></Avatar>
            <h4 className="username mx-2">{props.username}</h4>
            <p style={{ margin: "9px 0 0 8px" }}>1 w</p>
          </div>
          <button className="show-all">...</button>
        </div>
        {/* Post */}
        <div className="post">
          <img src={post} alt="" className="post-image" />
        </div>
        {/* Post Footer */}
        <div className="post-footer">
          <div className="d-flex mx-2 footer_icons">
            <i className="fa-regular fa-heart fa-lg"></i>
            <i className="fa-regular fa-comment fa-lg"></i>
            <i className="fa-regular fa-location-arrow fa-lg"></i>
          </div>
          <div>
            <p className="likes">1,088 likes</p>
            <div className="d-flex">
              <h4 className="username mx-2">demo___</h4>
              <p style={{ marginTop: "9px" }}>A beautiful Day!!!!!</p>
            </div>
            <p style={{ fontSize: "15px", color: "gray", marginLeft: "12px" }}>
              See transation
            </p>
            <input
              className="comment-box"
              type="text"
              placeholder="Add a Comment"
            />
          </div>
        </div>
      </div>

      <hr
        className="separator"
        style={{ width: " 600px;", margin: "0px 0 0 600px" }}
      />
    </>
  );
}

export default Postfeed;
