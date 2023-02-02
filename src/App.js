import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { NoMatch } from "./components/NoMatch";
import { SecureComponent } from "./components/Routes/secureComponent";
import { useAuth } from "./Authentication/auth";
//----------------------------------------------------
import AdminRoutes from "./components/Routes/AdminRoutes";
import AccountRoutes from "./components/Routes/Account_staffRoutes";
import StudentRoutes from "./components/Routes/StudentRoutes";

import Logout from "./components/Logout";

// import { useEffect, useState } from "react";
// import { useBearStore } from "./Stores/bear-store";

function App() {
  //------------------
  const setAuthenticated = useAuth((state) => state.setAuthenticated);
  const setRole = useAuth((state) => state.setRole);
  setAuthenticated(true);
  setRole(1);
  // setRole(2);
  // setRole(4);
  //------------------
  const isauthenticated = useAuth((state) => state.isauthenticated);
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NoMatch />} />
        {isauthenticated && (
          <Route path="/secure/*" element={<SecureComponent />} />
        )}
      </Routes>
    </>
  );
}

export default App;
