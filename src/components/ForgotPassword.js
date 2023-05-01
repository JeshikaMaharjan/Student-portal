import React, { useState, useRef } from "react";
import { useToken } from "../apis";
import "../css/ForgotPassword.css";
import { useAuth } from "../Authentication/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../apis";

export default function ForgotPswd() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [postResult, setPostResult] = useState(null);
  // const setMessage = useAuth((state) => state.setMessage);

  const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleName(e) {
    setUsername(e.target.value);
  }
  function postData() {
    const postData = {
      username: username,
      email: email,
    };
    // console.log(postData);
    axios
      .create(config)
      .post("/forgot/password", postData)
      .then((res) => {
        // console.log(res);
        setPostResult(res.data.message);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setPostResult(err?.response?.data?.message);
      });
  }

  function handleSubmit(e) {
    if (username !== null && email !== null) {
      // console.log("Form is ready to submit");
      setPostResult("Loading");
      postData();
    }
  }
  return (
    <>
      <div className="contain" id="blur">
        <div className="content">
          <div id="dash_clock" style={{ display: "none" }}></div>

          <div className="body">
            <div className="FPfbody">
              <div className="FPfBox">
                <div className="fformBox">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                      toggle();
                    }}
                  >
                    <h2>Forgot Password?</h2>
                    <div className="paragraph">
                      <span>
                        Please enter the valid username and email address linked
                        to your account to receive further details.
                      </span>
                    </div>

                    <div className="useremail">
                      <span>Username:</span>
                      <input
                        className="forName"
                        required
                        name="userName"
                        placeholder="Enter username"
                        onChange={handleName}
                      />
                      <span>Email:</span>
                      <input
                        required
                        className="forAddress"
                        placeholder="example00@gmail.com"
                        onChange={handleEmail}
                      />
                    </div>
                    <div className="inputBx">
                      <button
                        type="submit"
                        name=""
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popup">
        <div
          id="test1"
          onClick={() => {
            navigate("/login");
          }}
          className="close"
        >
          +
        </div>

        <div role="alert">
          <pre>{postResult}</pre>
        </div>

        <button
          id="test1"
          onClick={() => {
            navigate("/login");
          }}
        >
          Close
        </button>
      </div>
    </>
  );
}
