import { Route, Routes } from "react-router-dom";
import Layout from "../Entry_staff/Entrystaff";
import Profile from "../Profile";

import ChangePassword from "../ChangePassword";
import NoMatch from "../NoMatch";
import ResultForm from "../Entry_staff/ResultForm";
import SearchStudent from "../Entry_staff/SearchStudent";

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
        {/* //------------------- */}
        <Route
          path="marksentry"
          element={<Layout component={<ResultForm />} />}
        />
        {/* //------------------- */}
        <Route
          path="searchstudent"
          element={<Layout component={<SearchStudent />} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default EntryRoutes;
