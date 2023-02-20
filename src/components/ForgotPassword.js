import React, { useState } from "react";
import { useToken } from "../apis";
import "../css/ForgotPassword.css";
import { useAuth } from "../Authentication/auth";

export default function ForgotPswd() {
  const [email, setEmail] = useState();
  const { tokenInstance } = useToken();
  const setMessage = useAuth((state) => state.setMessage);
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function postData() {
    tokenInstance
      .post("/fogotpass", email)
      .then((res) => {
        console.log(res);
        setMessage("Check your email ");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(email);
  return (
    <>
      <div className="body">
        <div className="FPbody">
          <div className="FPBox">
            <div className="formBox">
              <form onSubmit={(e) => e.preventDefault()}>
                <h2>Forgot Password?</h2>
                <div>
                  <p>
                    Please enter the valid email address linked to your account,
                    and we'll send you instruction for resetting your password.
                  </p>
                </div>
                <span>Email Address:</span>
                <input
                  className="forAddress"
                  placeholder="example00@gmail.com"
                  onChange={handleEmail}
                />
                <div className="inputBx">
                  <button
                    name=""
                    onClick={() => {
                      postData();
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
    </>
  );
}
