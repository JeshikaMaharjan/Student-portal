import { useLogout } from "../apis";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// export default function Logout() {
//   const navigate = useNavigate();
//   const { logout } = useLogout();

//   const isloggedout = logout();
//   if (!isloggedout) {
//     console.log("not logged out");
//     return;
//   }
//   navigate("/login");
// }
export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const isloggedout = logout();
  if (!isloggedout) {
    console.log("not logged out");
    return;
  }
  navigate("/login");
}
