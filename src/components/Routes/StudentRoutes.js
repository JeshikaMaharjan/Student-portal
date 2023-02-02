import { Route, Routes } from "react-router-dom";
import Layout from "../Student/Student";
import Profile from "../Profile";
import PaymentRoutes from "./PaymentRoutes";
import ChangePassword from "../ChangePassword";

function StudentRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Layout />} />
        <Route path="profile" element={<Layout component={<Profile />} />} />
        <Route
          path="payment/*"
          element={<Layout component={<PaymentRoutes />} />}
        />
        <Route
          path="changepassword"
          element={<Layout component={<ChangePassword />} />}
        />
      </Routes>
    </>
  );
}
export default StudentRoutes;
