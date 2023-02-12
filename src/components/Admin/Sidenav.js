import React, { useState } from "react";
import { Sidenavcomp } from "./Sidenavcomp";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter as Prompt } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();

  return (
    <>
      <div className="Sidenav">
        <div className="menuToggle">
          <icon id="hamburger">
            <MenuIcon />
          </icon>
        </div>
        <ul className="SidenavList">
          {Sidenavcomp.map((navItem) => {
            return (
              <li
                key={navItem.title}
                className="row"
                id={window.location.pathname === navItem.link ? "active" : ""}
                onClick={() => {
                  navigate(navItem.link);
                }}
              >
                {/* <li
                key={navItem.title}
                className="row"
                id={window.location.pathname === navItem.link ? "active" : ""}
                onClick={() => {
                  console.log(navItem.link);
                  if (navItem.link == "/logout") {
                    <Prompt
                      message={(location) =>
                        `Are you sure you want to go to ${location.pathname}`
                      }
                    />; */}
                {/* } */}
                {/* navigate(navItem.link); */}
                {/* }} */}
                {/* > */}
                <div id="navcomp">
                  <div id="icon">{navItem.icon}</div>
                  <div id="title"> {navItem.title}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SideNav;
