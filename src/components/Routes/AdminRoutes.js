import { Route, Routes } from "react-router-dom";
import Layout from "../Admin/Admin";
import Profile from "../Profile";
import RegisterRoutes from "./RegisterRoutes";
import Update from "../Admin/Update";
import Display from "../Admin/Display";
import EditDetails from "../Admin/EditDetails";
import DeleteUser from "../Admin/DeleteUser";
import ChangePassword from "../ChangePassword";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Layout />} />
        <Route path="profile" element={<Layout component={<Profile />} />} />
        <Route
          path="registration/*"
          element={<Layout component={<RegisterRoutes />} />}
        />
        <Route path="update" element={<Layout component={<Update />} />} />
        <Route path="search" element={<Layout component={<Display />} />} />
        <Route path="edit" element={<Layout component={<EditDetails />} />} />
        <Route path="delete" element={<Layout component={<DeleteUser />} />} />
        <Route
          path="changepassword"
          element={<Layout component={<ChangePassword />} />}
        />
      </Routes>
    </>
  );
}
export default AdminRoutes;
