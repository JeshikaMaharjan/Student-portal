import { Route, Routes } from "react-router-dom";
import Entrystaff from "../Entry_staff/Entrystaff";
import Profile from "../Profile";

import ChangePassword from "../ChangePassword";
import NoMatch from "../NoMatch";

import ResultRoutes from "./ResultRoutes";

function EntryRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="searchstudent/*" element={<ResultRoutes />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default EntryRoutes;
