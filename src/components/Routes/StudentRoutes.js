import { Route, Routes } from "react-router-dom";
import Layout from "../Student/Student";
import Profile from "../Student/Profile";
import Khalti from "../Khalti/Khalti";


function StudentRoutes(){
    return(
        <>
        <Routes>
            <Route index element={<Layout />}/>
            <Route path ='profile' element = {<Layout component ={<Profile/>}/>}/>                                
            <Route path ='payment' element = {<Layout component ={<Khalti/>}/>}/>                                
        </Routes>
        </>
    )
}
export default StudentRoutes;