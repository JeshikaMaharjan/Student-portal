import React, { useState } from "react";
import { Sidenavcomp } from "./Sidenavcomp";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();
  const [logout, setlogout] = useState();
  const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

  return (
    <>
      {/* <AppBar> */}
      <div className="contain" id="blur">
        <div className="content">
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
                    id={
                      window.location.pathname === navItem.link ? "active" : ""
                    }
                    onClick={() => {
                      navigate(navItem.link);
                    }}
                  >
                    {/* <li
                    key={navItem.title}
                    className="row"
                    id={
                      window.location.pathname === navItem.link ? "active" : ""
                    }
                    onClick={() => {
                      if (navItem.link == "/logout") {
                        toggle();
                        setlogout(navItem.link);
                      }
                      // navigate(navItem.link);
                    }}
                  > */}
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
        </div>
      </div>
      <div id="popup">
        <div id="test1" onClick={toggle} className="close">
          +
        </div>

        <div role="alert">
          <pre>Do you want to continue?</pre>
          <button
            onClick={() => {
              toggle();
              navigate(logout);
            }}
          >
            Yes
          </button>
          <button onClick={toggle}>No</button>
        </div>

        <button id="test1" onClick={toggle}>
          Close
        </button>
      </div>
    </>
  );
}

export default SideNav;
