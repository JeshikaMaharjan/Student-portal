import React from "react";
import { useSignOut } from "react-auth-kit";
import { Sidenavcomp } from "./Sidenavcomp";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();
  const signOut = useSignOut();

  // if (isAdmin) return <div>Admin</div>;

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
        </ul>
        <div className="Logout_btn" onClick={() => signOut()}>
          <icon id="lobtn">
            <LogoutIcon /> Log Out
          </icon>
        </div>
      </div>
    </>
  );
}

export default SideNav;
