import { Route, Routes } from "react-router-dom";
import Layout from "../Account_staff/Account_staff";
import Profile from "../Account_staff/Profile";


function AccountRoutes(){
    return(
        <>
        <Routes>
            <Route index element={<Layout />}/>
            <Route path ='profile' element = {<Layout component ={<Profile/>}/>}/>                                
        </Routes>
        </>
    )
}
export default AccountRoutes;