import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import AccountRoutes from "./Account_staffRoutes";
import StudentRoutes from "./StudentRoutes";
import { useAuth } from "../../Authentication/auth";
import { useEffect, useState } from "react";
import EntryRoutes from "./EntryRoutes";
import Unauthorized from "../Unauthorized";

export function SecureComponent() {
  const navigate = useNavigate();
  const isauthenticated = useAuth((state) => state.isauthenticated);
  const role = useAuth((state) => state.role);

  if (isauthenticated) {
    return (
      <Routes>
        {role === 1 && <Route path="/admin/*" element={<AdminRoutes />} />}
        {role === 2 && (
          <Route path="/accountstaff/*" element={<AccountRoutes />} />
        )}
        {role === 3 && <Route path="/entrystaff/*" element={<EntryRoutes />} />}
        {role === 4 && <Route path="/student/*" element={<StudentRoutes />} />}
        <Route path="*" element={<Unauthorized />} />
      </Routes>
    );
  } else {
    // Redirect to Login
    navigate("/login");
  }
}
