import React from "react";
import logo from "../images/Logo-Instagram.png";

import fb from "../images/white-logo.png";
const Signup = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 d-flex">
          <form
            style={{
              width: "500px",
              border: "1px solid black",
              padding: "20px",
              margin: "0 auto",
              marginTop: "40px",
            }}
          >
            <div className="mb-1">
              <img
                src={logo}
                alt=""
                style={{ width: "250px", marginLeft: "110px" }}
              />
            </div>
            <div
              style={{
                width: "380px",
                marginLeft: "40px",
              }}
            >
              <div className="my-2">
                <p style={{ textAlign: "center" }}>
                  <b>Sign up to see photos and videos from your friends.</b>
                </p>
              </div>
              <div>
                <button
                  className="d-flex my-3"
                  style={{
                    width: "378px",
                    borderRadius: "10px",
                    backgroundColor: "#63C5DA",
                    border: "none",
                    color: "white",
                  }}
                >
                  <img
                    src={fb}
                    alt=""
                    style={{
                      width: "60px",
                      marginLeft: "40px",
                      padding: "0.1rem",
                    }}
                  />
                  <p style={{ margin: " 11px 0px 0 10px", padding: "0.1rem" }}>
                    Login with Facebook
                  </p>
                </button>
              </div>
              <div
                className="d-flex my-3"
                style={{ justifyContent: "space-between" }}
              >
                <hr
                  className="separator"
                  style={{ width: "130px", marginLeft: "30px" }}
                />
                <p>OR</p>
                <hr
                  className="separator"
                  style={{ width: "130px", marginRight: "30px" }}
                />
              </div>
              <div className="mb-3">
                <input
                  style={{
                    backgroundColor: "#F0F0F0",
                  }}
                  className="form-control"
                  id="email"
                  placeholder="Phone Number or email"
                />
              </div>{" "}
              <div className="mb-3">
                <input
                  style={{
                    backgroundColor: "#F0F0F0",
                  }}
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>{" "}
              <div className="mb-3">
                <input
                  style={{
                    backgroundColor: "#F0F0F0",
                  }}
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-3">
                <input
                  style={{
                    backgroundColor: "#F0F0F0",
                  }}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="my-4">
                <p style={{ textAlign: "center" }}>
                  People who use our service may have uploaded your contact
                  information to Instagram. <b>Learn More</b>
                </p>
              </div>
              <div className="my-3">
                <p style={{ textAlign: "center" }}>
                  By signing up, you agree to our{" "}
                  <b>Terms , Privacy Policy and Cookies Policy</b> .
                </p>
              </div>
              <button
                type="submit"
                className="btn btn-primary my-3"
                style={{
                  width: "378px",
                  borderRadius: "10px",
                  backgroundColor: "#63C5DA",
                  border: "none",
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Signup;
