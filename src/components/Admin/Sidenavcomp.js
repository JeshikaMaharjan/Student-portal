import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import SearchIcon from "@mui/icons-material/Search";

import "../../css/Sidenavcomp.css";

export const AdminSidenavcomp = [
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/secure/profile",
  },
  {
    title: "Password",
    icon: <PasswordIcon />,
    link: "/secure/changepassword",
  },

  {
    title: "Registration",
    icon: <PersonAddIcon />,
    link: "/secure/registration",
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    link: "/secure/search",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/secure/confirmation",
  },
];
