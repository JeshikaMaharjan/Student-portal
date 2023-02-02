import React, { useState, useRef } from "react";
import { useLogin } from "../apis";
import { navigate, useNavigate } from "react-router-dom";
import SERAlogo from "./image/SERAlogo.svg";
import "../css/Login.css";

export default function Login() {
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [postResult, setPostResult] = useState(null);

  const { login } = useLogin();

  const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

  async function postData() {
    try {
      const isLoggedIn = await login({
        username: username.current.value,
        password: password.current.value,
      });

      if (!isLoggedIn) {
        setPostResult("Sign in unsuccesful");
        return;
      }

      setPostResult("Signed in");
      navigate("/secure");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="contrent" id="blur">
        <div className="content">
          <div className="box">
            <div className="logo">
              <img src={SERAlogo} alt="Logo" />
            </div>

            <div className="loginBox">
              <div className="formBox">
                <h2>Login</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="inputBx">
                    <span>Username</span>
                    <input
                      type="text"
                      name=""
                      ref={username}
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="inputBx">
                    <span>Password</span>
                    <input
                      type="password"
                      name=""
                      ref={password}
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="inputBx">
                    <button
                      onClick={() => {
                        postData();
                        toggle();
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popup">
        <div id="test1" onClick={toggle} className="close">
          +
        </div>
        {postResult && (
          <div role="alert">
            <pre>{postResult}</pre>
          </div>
        )}

        <button id="test1" onClick={toggle}>
          Close
        </button>
      </div>
    </>
  );
}
