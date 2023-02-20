import { Route, Routes } from "react-router-dom";
import Layout from "../Student/Student";
import Profile from "../Profile";
import PaymentRoutes from "./PaymentRoutes";
import ChangePassword from "../ChangePassword";
import NoMatch from "../NoMatch";

function StudentRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Layout component={<Profile />} />} />
        <Route path="profile" element={<Layout component={<Profile />} />} />
        <Route
          path="payment/*"
          element={<Layout component={<PaymentRoutes />} />}
        />
        <Route
          path="changepassword"
          element={<Layout component={<ChangePassword />} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default StudentRoutes;
