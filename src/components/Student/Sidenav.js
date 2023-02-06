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
          {Sidenavcomp.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  navigate(val.link);
                }}
              >
                <div id="navcomp">
                  <div id="icon">{val.icon}</div>
                  <div id="title"> {val.title}</div>
                </div>
              </li>
            );
          })}
        </ul>
        {/* <div className='Logout_btn' onClick={ () => signOut() } >
              <icon id='lobtn'><LogoutIcon /> Log Out</icon>
          </div>             */}
      </div>
    </>
  );
}

export default SideNav;
