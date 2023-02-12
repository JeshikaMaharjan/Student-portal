import { Route, Routes } from "react-router-dom";
import Layout from "../Entry_staff/Entrystaff";
import Profile from "../Profile";

import ChangePassword from "../ChangePassword";
import { NoMatch } from "../NoMatch";

function EntryRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Layout component={<Profile />} />} />
        <Route path="profile" element={<Layout component={<Profile />} />} />
        <Route
          path="changepassword"
          element={<Layout component={<ChangePassword />} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default EntryRoutes;
