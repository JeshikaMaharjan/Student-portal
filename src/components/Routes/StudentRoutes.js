import { Route, Routes } from "react-router-dom";
import Layout from "../Student/Student";
import Profile from "../Student/Profile";
import PaymentRoutes from "./PaymentRoutes";


function StudentRoutes(){
    return(
        <>
        <Routes>
            <Route index element={<Layout />}/>
            <Route path ='profile' element = {<Layout component ={<Profile/>}/>}/>  
            <Route path ='payment/*' element = {<Layout component ={<PaymentRoutes/>}/>}/>                          
                                           
        </Routes>
        </>
    )
}
export default StudentRoutes;