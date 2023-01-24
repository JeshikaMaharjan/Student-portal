import { Route, Routes } from "react-router-dom";
import Layout from "../Admin/Admin";
import Profile from "../Admin/Profile";
import RegisterRoutes from "./RegisterRoutes";
import Update from "../Admin/Update";
import Display from "../Admin/Display";

function AdminRoutes(){
    return(
        <>
        <Routes>
            <Route index  element={<Layout />}/>
            <Route path ='profile' element = {<Layout component ={<Profile/>}/>}/>
            <Route path ='registration/*' element = {<Layout component ={<RegisterRoutes/>}/>}/> 
            <Route path ='update' element = {<Layout component ={<Update/>}/>}/>
            <Route path ='search' element = {<Layout component ={<Display/>}/>}/>                       
        </Routes>
        </>
    )
}
export default AdminRoutes;