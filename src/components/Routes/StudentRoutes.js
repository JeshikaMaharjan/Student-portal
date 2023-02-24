import { Route, Routes } from "react-router-dom";
import Profile from "../Profile";
import PaymentRoutes from "./PaymentRoutes";
import ChangePassword from "../ChangePassword";
import NoMatch from "../NoMatch";

function StudentRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="payment/*" element={<PaymentRoutes />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default StudentRoutes;
