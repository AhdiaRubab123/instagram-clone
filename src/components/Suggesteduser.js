import React from "react";
import Avatar from "react-avatar";
import post from "../images/girl.jpeg";
import boy from "../images/person.jpg";
import photographer from "../images/photographer.jpg";

const Suggesteduser = () => {
  return (
    <div>
      <div className="user">
        <div className="status d-flex">
          <Avatar src={photographer} size="60" round={true}></Avatar>
          <h4 className="username mx-3" style={{ marginTop: "25px" }}>
            demo___
          </h4>
          <button className="switch_account">Switch</button>
        </div>
        <div className="d-flex">
          <p style={{ color: "grey", marginTop: "10px" }}>Suggested For You</p>
          <button
            className="switch_account"
            style={{ color: "black", marginLeft: "120px" }}
          >
            See All
          </button>
        </div>
        <div className="status d-flex">
          <Avatar src={post} size="60" round={true}></Avatar>
          <h4 className="username mx-3" style={{ marginTop: "25px" }}>
            demo___
          </h4>
          <button className="switch_account">Follow</button>
        </div>
        <div className="status d-flex">
          <Avatar src={boy} size="60" round={true}></Avatar>
          <h4 className="username mx-3" style={{ marginTop: "25px" }}>
            demo___
          </h4>
          <button className="switch_account">Follow</button>
        </div>
        <div className="status d-flex">
          <Avatar src={boy} size="60" round={true}></Avatar>
          <h4 className="username mx-3" style={{ marginTop: "25px" }}>
            demo___
          </h4>
          <button className="switch_account">Follow</button>
        </div>
        <div className="status d-flex">
          <Avatar src={photographer} size="60" round={true}></Avatar>
          <h4 className="username mx-3" style={{ marginTop: "25px" }}>
            demo___
          </h4>
          <button className="switch_account">Follow</button>
        </div>
        <p className="my-4" style={{ color: "grey" }}>
          About Help Press API Jobs Privacy Terms <br />
          Locations Language Meta Verified
        </p>
        <p className="my-4" style={{ color: "grey" }}>
          © 2024 INSTAGRAM FROM META
        </p>
      </div>
    </div>
  );
};

export default Suggesteduser;
