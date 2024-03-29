import React, { useEffect } from "react";
import Dashboard from "../Dashboard";
import Sidenav from "../Sidenav";

const Admin = (props) => {
  return (
    <>
      <Sidenav />
      <Dashboard comp={props.component} />
    </>
  );
};

export default Admin;
