import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import { AuthProvider } from "react-auth-kit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider authType={"localstorage"} authName={"_auth"}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
