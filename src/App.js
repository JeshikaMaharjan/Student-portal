import { Route, Routes, useNavigate } from "react-router-dom";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import { SecureComponent } from "./components/Routes/secureComponent";
import { useAuth } from "./Authentication/auth";

import Logout from "./components/Logout";
import ForgotPswd from "./components/ForgotPassword";
import Unauthorized from "./components/Unauthorized";

function App() {
  //------------------
  const setAuthenticated = useAuth((state) => state.setAuthenticated);
  const setRole = useAuth((state) => state.setRole);
  setAuthenticated(true);
  // setRole(1);
  // setRole(2);
  setRole(3);
  // setRole(4);
  //------------------
  const isauthenticated = useAuth((state) => state.isauthenticated);
  // const setToken = useAuth((state) => state.setToken);
  // const token = window.localStorage.getItem("token");
  // setToken(token);

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgotpassword" element={<ForgotPswd />} />
        <Route path="*" element={<Unauthorized />} />

        {isauthenticated && (
          <Route path="/secure/*" element={<SecureComponent />} />
        )}
      </Routes>
    </>
  );
}

export default App;
