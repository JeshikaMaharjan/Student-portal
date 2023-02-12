import { Route, Routes } from "react-router-dom";
import Layout from "../Account_staff/Account_staff";
import Cash from "../Account_staff/Cash";
import ChangePassword from "../ChangePassword";
import { NoMatch } from "../NoMatch";
import Profile from "../Profile";

function AccountRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Layout component={<Profile />} />} />
        <Route path="profile" element={<Layout component={<Profile />} />} />
        <Route path="payment" element={<Layout component={<Cash />} />} />
        <Route
          path="changepassword"
          element={<Layout component={<ChangePassword />} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default AccountRoutes;
