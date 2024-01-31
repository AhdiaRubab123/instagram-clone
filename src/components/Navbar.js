import React from "react";
// import { Link } from "react-router-dom";
import logo from "../images/Logo-Instagram.png";
import "./Style.css";
import Avatar from "react-avatar";
import photographer from "../images/photographer.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="/">
              {" "}
              <i className="fa-solid fa-house"></i>Home
            </a>
          </li>
          <li>
            <a href="/">
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>Search
            </a>
          </li>
          <li>
            <a href="/">
              {" "}
              <i className="fa-regular fa-compass"></i>
              Explore
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-solid fa-video"></i>Reels
            </a>
          </li>
          <li>
            <a href="/">
              {" "}
              <i className="fa-regular fa-location-arrow"></i>Messages
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-regular fa-heart"></i>Notifications
            </a>
          </li>
          <li>
            <a href="/">
              {" "}
              <i className="fa-regular fa-circle-plus"></i>Create
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-regular fa-user"></i>Profile
            </a>
          </li>
          <li>
            <a href="/">
              {" "}
              <i className="fa-solid fa-bars"></i>More
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
