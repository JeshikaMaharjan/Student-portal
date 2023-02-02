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
    link: "/secure/student/profile",
  },
  {
    title: "Password",
    icon: <AccountCircleIcon />,
    link: "/secure/student/changepassword",
  },
  // {
  //   title: "View",
  //   icon: <PersonAddIcon />,
  //   link: "/secure/student/view",
  // },
  // {
  //   title: "Search",
  //   icon: <DescriptionIcon />,
  //   link: "/secure/student/search",
  // },
  {
    title: "Payment",
    icon: <AutoGraphIcon />,
    link: "/secure/student/payment",
  },
  {
    title: "Log Out",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];
