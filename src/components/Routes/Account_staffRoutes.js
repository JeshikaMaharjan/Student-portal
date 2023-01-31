import { Route, Routes } from "react-router-dom";
import Layout from "../Account_staff/Account_staff";
import Cash from "../Account_staff/Cash";
import Profile from "../Profile";

function AccountRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Layout />} />
        <Route path="profile" element={<Layout component={<Profile />} />} />
        <Route path="payment" element={<Layout component={<Cash />} />} />
      </Routes>
    </>
  );
}
export default AccountRoutes;
