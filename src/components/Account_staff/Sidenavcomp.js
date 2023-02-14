import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";

import "../../css/Sidenavcomp.css";

export const Sidenavcomp = [
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/secure/accountstaff/profile",
  },
  {
    title: "Password",
    icon: <PasswordIcon />,
    link: "/secure/accountstaff/changepassword",
  },
  {
    title: "Search",
    icon: <DescriptionIcon />,
    link: "/secure/accountstaff/searchstudent",
  },
  // {
  //   title: "View",
  //   icon: <PersonAddIcon />,
  //   link: "/secure/accountstaff/view",
  // },
  {
    title: "Payment",
    icon: <AutoGraphIcon />,
    link: "/secure/accountstaff/payment",
  },

  {
    title: "Log Out",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];
