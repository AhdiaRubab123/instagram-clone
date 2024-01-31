import React from "react";

import signatureImgage from "../images/phone-static-final.png";
import logo from "../images/Logo-Instagram.png";
import fb from "../images/facebook-logo.png";
import playstore from "../images/google-play.png";
import microsoft from "../images/microsoft.png";

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 d-flex">
          <div>
            <img
              src={signatureImgage}
              alt=""
              style={{ marginTop: "40px", padding: "30px", height: "700px" }}
            />
          </div>
          <div>
            <form
              style={{
                width: "500px",
                border: "1px solid black",
                margin: "0 auto",
                marginTop: "40px",
                padding: "20px",
              }}
            >
              <div className="mb-3">
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
                <div className="mb-3">
                  <input
                    style={{
                      backgroundColor: "#F0F0F0",
                    }}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Phone Number, email, or username"
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
                  Log in
                </button>
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
                <div
                  className="d-flex my-3"
                  style={{ justifyContent: "space-around" }}
                >
                  <img
                    src={fb}
                    alt=""
                    style={{ width: "50px", marginLeft: "40px" }}
                  />
                  <p style={{ margin: " 3px 60px 0 0" }}>Login with Facebook</p>
                </div>
                <div className="my-4">
                  <p style={{ textAlign: "center" }}>Forgot Password?</p>
                </div>
              </div>
            </form>
            <div className="my-4">
              <p
                style={{
                  textAlign: "center",
                  border: "1px solid black",
                  padding: "20px",
                }}
              >
                Have an account <a href="/signup">Sign Up</a>
              </p>
            </div>
            <div className="my-4">
              <p style={{ textAlign: "center" }}>Get the App.</p>
              <div
                className="d-flex"
                style={{ justifyContent: "space-evenly" }}
              >
                <img src={playstore} alt="" style={{ width: "150px" }} />
                <img src={microsoft} alt="" style={{ width: "150px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Login;
