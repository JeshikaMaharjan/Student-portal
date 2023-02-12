import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";

import "../../css/Sidenavcomp.css";

export const Sidenavcomp = [
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/secure/entrystaff/profile",
  },
  {
    title: "Password",
    icon: <PasswordIcon />,
    link: "/secure/entrystaff/changepassword",
  },

  {
    title: "Log Out",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];
