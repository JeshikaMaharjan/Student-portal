import { Route, Routes } from "react-router-dom";
import Layout from "../Account_staff/Account_staff";
import Cash from "../Account_staff/Cash";
import Scholarship from "../Account_staff/Scholarship";
import SearchStudent from "../Account_staff/SearchStudent";
import UpdateBill from "../Account_staff/UpdateBill";
import ChangePassword from "../ChangePassword";
import NoMatch from "../NoMatch";
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
        <Route
          path="searchstudent"
          element={<Layout component={<SearchStudent />} />}
        />
        <Route
          path="searchstudent/updatebill"
          element={<Layout component={<UpdateBill />} />}
        />
        <Route
          path="searchstudent/updatescholarship"
          element={<Layout component={<Scholarship />} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default AccountRoutes;
