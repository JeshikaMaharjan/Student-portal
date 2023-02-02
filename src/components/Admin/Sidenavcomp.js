import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LogoutIcon from "@mui/icons-material/Logout";
import "../../css/Sidenavcomp.css";

export const Sidenavcomp = [
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/secure/admin/profile",
  },
  {
    title: "Password",
    icon: <AccountCircleIcon />,
    link: "/secure/admin/changepassword",
  },
  {
    title: "Registration",
    icon: <PersonAddIcon />,
    link: "/secure/admin/registration",
  },
  {
    title: "Search",
    icon: <DescriptionIcon />,
    link: "/secure/admin/search",
  },
  // {
  //   title: "Update",
  //   icon: <AutoGraphIcon />,
  //   link: "/secure/admin/update",
  // },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];
