import { Route, Routes, useNavigate } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import AccountRoutes from "./Account_staffRoutes";
import StudentRoutes from "./StudentRoutes";
import { useAuth } from "../../Authentication/auth";
import { useEffect } from "react";

export function SecureComponent() {
  const navigate = useNavigate();

  const isauthenticated = useAuth((state) => state.isauthenticated);
  const role = useAuth((state) => state.role);
  const userName = useAuth((state) => state.username);
  // console.log(role);
  // console.log(isauthenticated);
  // console.log(userName);
  useEffect(() => {
    if (isauthenticated) {
      if (role === 1) {
        navigate("admin");
      }
      if (role === 2) {
        navigate("accountstaff");
      }
      // if (role === 3)
      // {navigate('entrystaff')}
      if (role === 4) {
        navigate("student");
      }
    } else {
      // Redirect to Login
      navigate("/login");
    }
  }, [isauthenticated]);

  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="/accountstaff/*" element={<AccountRoutes />} />

        <Route path="/student/*" element={<StudentRoutes />} />
      </Routes>
    </>
  );
}
