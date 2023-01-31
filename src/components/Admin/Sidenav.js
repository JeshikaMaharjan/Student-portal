import React from "react";
import { Sidenavcomp } from "./Sidenavcomp";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();

  return (
    <>
      {/* <AppBar> */}
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
                <div id="navcomp">
                  <div id="icon">{navItem.icon}</div>
                  <div id="title"> {navItem.title}</div>
                </div>
              </li>
            );
          })}
          {/* <div className="Logout_btn" onClick={navigate("/logout")}>
            <icon id="lobtn">
              <LogoutIcon /> Log Out
            </icon>
          </div> */}
        </ul>
      </div>
    </>
  );
}

export default SideNav;
