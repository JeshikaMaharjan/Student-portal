import React, { useState } from "react";
import { Sidenavcomp } from "./Sidenavcomp";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";

function SideNav() {
  // let location = useLocation();
  // console.log("location", location);
  // const current = location.pathname;
  // console.log("location", location.pathname);
  const navigate = useNavigate();
  // function confirmlogout() {
  //   if (window.confirm("Do you want to logout?") == true) {
  //     console.log("ok");
  //     return;
  //     // navigate("/login");
  //   } else {
  //     console.log("nope");
  //     navigate(`/${current}`);
  //   }
  // }

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
                    confirmlogout();
                  }
                  navigate(navItem.link);
                }}
              > */}
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
